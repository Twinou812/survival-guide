// Builds the printable guide as HTML, one file per part, from the same content as the app.
// Phase 4 (Nov 15, 2026). scripts/print/render-pdf.mjs turns these files into one PDF.
//
//   node --experimental-strip-types --no-warnings --import ./scripts/print/register.mjs \
//        scripts/print/build-print.ts en
//
// Output: dist-print/<lang>/guide.html (cover, disclaimer, contents, sections, glossary).
// Inside the text, glossary words and section names become links inside the PDF.

import { mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { GLOSSARY, getTerm } from '../../src/content/glossary';
import { SECTIONS, getSection } from '../../src/content/sections/index';
import { pick, type Block, type Localized, type Section } from '../../src/content/types';
import en from '../../src/i18n/en';

const lang = process.argv[2] ?? 'en';
const OUT = join('dist-print', lang);
const SITE = 'onthehousesoftware.com/porchlight';

// Words used only in the printed guide. Add a key per language in Phase 5.
const PRINT: Record<string, Record<string, string>> = {
  en: {
    contents: 'Contents',
    section: 'Section',
    page: 'Page',
    sources: 'Sources',
    glossary: 'Glossary',
    glossaryIntro:
      'Words with a dotted underline in this guide are explained here. In the PDF on a phone or computer, tap the word to jump here.',
    calcNote:
      'In the Porchlight app, a calculator goes here. It works out the amounts for your own family. Open it at ' +
      SITE +
      ', or use the tables and rules on this page with paper and pencil.',
    coverLine: 'Free. No accounts. No tracking. Works with no internet.',
    coverEdition: 'Printed edition',
    howToUse: 'How to use this printed guide',
    howToUseText:
      'Start with Section 1. Each section stands on its own, so you can print only the ones you need. Keep a printed copy with your emergency supplies: when the power and phones are down, paper still works. Check the website once a year for an updated edition.',
    machine: '',
  },
};
const T = PRINT[lang] ?? PRINT.en;
const L = (x: Localized) => pick(x, lang);

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const LINK = /\[\[([a-z0-9-]+)(?:\|([^\]]+))?\]\]|\{\{([a-z0-9-]+)(?:\|([^}]+))?\}\}/g;

/** Text with glossary and section links, as HTML. Links point inside the PDF. */
function rich(text: string): string {
  let out = '';
  let last = 0;
  for (const m of text.matchAll(LINK)) {
    const [whole, termId, termLabel, sectionId, sectionLabel] = m;
    const start = m.index ?? 0;
    out += esc(text.slice(last, start));
    if (termId) {
      const term = getTerm(termId);
      const shown = termLabel ?? (term ? L(term.name) : termId);
      out += term ? `<a class="term" href="#g-${termId}">${esc(shown)}</a>` : esc(shown);
    } else {
      const s = getSection(sectionId);
      const shown = sectionLabel ?? (s ? L(s.title) : sectionId);
      out += s
        ? `<a class="xref" href="#s-${sectionId}">${esc(shown)}</a><span class="secno"> (${T.section.toLowerCase()} ${s.number})</span>`
        : esc(shown);
    }
    last = start + whole.length;
  }
  return out + esc(text.slice(last));
}

const plain = (text: string) =>
  text.replace(LINK, (_w, termId, termLabel, sectionId, sectionLabel) => {
    if (termId) {
      const t = getTerm(termId);
      return termLabel ?? (t ? L(t.name) : termId);
    }
    const s = getSection(sectionId);
    return sectionLabel ?? (s ? L(s.title) : sectionId);
  });

const SVG_DIR = 'src/sketches/svg';
const svgs: Record<string, string> = {};
for (const f of readdirSync(SVG_DIR)) {
  if (!f.endsWith('.svg')) continue;
  svgs[f.slice(0, -4)] = readFileSync(join(SVG_DIR, f), 'utf8')
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/\s*xmlns:c2pa="[^"]*"/g, '')
    .replace('<svg ', '<svg aria-hidden="true" ');
}

function block(b: Block): string {
  switch (b.type) {
    case 'p':
      return `<p>${rich(L(b.text))}</p>`;
    case 'h':
      return `<h2 id="h-${b.id}">${rich(L(b.text))}</h2>`;
    case 'steps':
      return `<ol class="steps">${b.items.map((i) => `<li>${rich(L(i))}</li>`).join('')}</ol>`;
    case 'list':
      return `<ul>${b.items.map((i) => `<li>${rich(L(i))}</li>`).join('')}</ul>`;
    case 'warning':
      return `<aside class="warning">${rich(L(b.text))}</aside>`;
    case 'sketch': {
      const svg = svgs[b.sketch];
      if (!svg) return '';
      return `<figure><div class="sketch">${svg}</div><figcaption>${esc(L(b.caption))}</figcaption></figure>`;
    }
    case 'table':
      return `<table><caption>${esc(L(b.caption))}</caption><thead><tr>${b.head
        .map((c) => `<th scope="col">${rich(L(c))}</th>`)
        .join('')}</tr></thead><tbody>${b.rows
        .map(
          (r) =>
            `<tr>${r.map((c, i) => (i === 0 ? `<th scope="row">${rich(L(c))}</th>` : `<td>${rich(L(c))}</td>`)).join('')}</tr>`,
        )
        .join('')}</tbody></table>`;
    case 'calc':
      return `<aside class="calc">${esc(T.calcNote)}</aside>`;
    case 'source':
      return '';
  }
}

function sectionHtml(s: Section): string {
  const sources = s.blocks.filter((b): b is Extract<Block, { type: 'source' }> => b.type === 'source');
  const body = s.blocks.map(block).join('\n');
  const src = sources.length
    ? `<h2 class="sources-h">${T.sources}</h2><ol class="sources">${sources
        .map(
          (x) =>
            `<li>${esc(x.title)}, ${esc(x.publisher)}${x.url ? `<br><span class="url">${esc(x.url)}</span>` : ''}</li>`,
        )
        .join('')}</ol>`
    : '';
  return `<section id="s-${s.id}"><span class="mark">@@S:${s.id}@@</span><header class="sec-head"><p class="sec-no">${T.section} ${s.number}</p><h1>${esc(
    L(s.title),
  )}</h1><p class="summary">${esc(plain(L(s.summary)))}</p></header>${body}${src}</section>`;
}

const glossaryHtml = () =>
  `<section id="glossary"><span class="mark">@@S:glossary@@</span><header class="sec-head"><h1>${T.glossary}</h1><p class="summary">${esc(
    T.glossaryIntro,
  )}</p></header><dl class="glossary">${[...GLOSSARY]
    .sort((a, b) => L(a.name).localeCompare(L(b.name), lang))
    .map(
      (t) =>
        `<div class="gterm${t.sketch && svgs[t.sketch] ? ' has-sketch' : ''}" id="g-${t.id}"><dt>${esc(
          L(t.name),
        )}</dt><dd>${esc(plain(L(t.definition)))}</dd>${
          t.sketch && svgs[t.sketch] ? `<div class="gsketch">${svgs[t.sketch]}</div>` : ''
        }</div>`,
    )
    .join('')}</dl></section>`;

const strings = en as unknown as Record<string, unknown>;
const disclaimerHtml = () =>
  `<section id="disclaimer" class="disclaimer"><h1>${esc(String(strings.disclaimerTitle))}</h1><p>${esc(
    String(strings.disclaimerIntro),
  )}</p><ul>${(strings.disclaimerPoints as string[]).map((p) => `<li>${esc(p)}</li>`).join('')}</ul>
  <h2>${T.howToUse}</h2><p>${esc(T.howToUseText)}</p></section>`;

const coverHtml = (date: string) =>
  `<section class="cover"><div class="cover-light">${readFileSync('scripts/print/porchlight-mark.svg', 'utf8')}</div><h1>Porchlight</h1><p class="tagline">${esc(
    String(strings.appTagline),
  )}</p><p class="line">${esc(T.coverLine)}</p><p class="edition">${T.coverEdition} · ${date}</p><p class="site">${SITE}</p><p class="maker">On The House Software with Claude by Anthropic</p></section>`;

/** Contents page; page numbers are filled in by render-pdf.mjs (placeholders __P_id__). */
const tocHtml = () =>
  `<section id="contents" class="toc"><h1>${T.contents}</h1><ol>${SECTIONS.map(
    (s) =>
      `<li><a href="#s-${s.id}"><span class="n">${s.number}</span><span class="t">${esc(L(s.title))}</span><span class="dots"></span><span class="pg">__P_${s.id}__</span></a></li>`,
  ).join('')}<li><a href="#glossary"><span class="n"></span><span class="t">${T.glossary}</span><span class="dots"></span><span class="pg">__P_glossary__</span></a></li></ol></section>`;

const css = readFileSync('scripts/print/print.css', 'utf8');
const page = (body: string) =>
  `<!doctype html><html lang="${lang}" dir="ltr"><head><meta charset="utf-8"><title>Porchlight</title><style>${css}</style></head><body>${body}</body></html>`;

rmSync(OUT, { recursive: true, force: true });
mkdirSync(OUT, { recursive: true });
const date = new Date().toLocaleDateString(lang, { year: 'numeric', month: 'long', day: 'numeric' });
const parts: [string, string][] = [
  ['00-cover', coverHtml(date)],
  ['01-disclaimer', disclaimerHtml()],
  ['02-contents', tocHtml()],
  ...SECTIONS.map((s, i): [string, string] => [`${String(i + 10)}-${s.id}`, sectionHtml(s)]),
  ['90-glossary', glossaryHtml()],
];
// One file, so links between sections and to the glossary work inside the PDF.
writeFileSync(join(OUT, 'guide.html'), page(parts.map(([, body]) => body).join('\n')));
console.log(`Wrote ${parts.length} parts to ${OUT}/guide.html`);
