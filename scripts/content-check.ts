// Content checks, run by Vite on every `npm run dev` and `npm run build`
// (see vite.config.ts). Errors stop a production build; warnings are printed.
//
// Catches the mistakes that are easy to make while writing sections:
//   - a [[glossary-link]] or {{section-link}} to an id that doesn't exist
//   - a sketch id with no .svg file, or an .svg that breaks the drawing rules
//   - a table row with the wrong number of cells
//   - a calculator block naming a calculator that doesn't exist
//   - a written section with no sources
//   - empty English text
//   - calculator math that no longer gives the guide's own worked answers

import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import type { Block, GlossaryTerm, Localized, Section } from '../src/content/types';
import { checkCalcMath } from '../src/calc/math-check';
import { CALC_IDS } from '../src/calc/ids';

export interface CheckResult {
  errors: string[];
  warnings: string[];
}

const TERM_LINK = /\[\[([^\]|]*)(?:\|[^\]]*)?\]\]/g;
const SECTION_LINK = /\{\{([^}|]*)(?:\|[^}]*)?\}\}/g;
const ID = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

export function checkContent(
  sections: Section[],
  glossary: GlossaryTerm[],
  sketchDir: string,
): CheckResult {
  const errors: string[] = [];
  const warnings: string[] = [];

  // ---- sketches on disk ----
  const sketchIds = new Set<string>();
  for (const file of readdirSync(sketchDir)) {
    if (!file.endsWith('.svg')) continue;
    const id = file.slice(0, -4);
    sketchIds.add(id);
    const svg = readFileSync(join(sketchDir, file), 'utf8');
    const where = `sketch ${file}`;
    const root = svg.match(/<svg\b[^>]*>/)?.[0] ?? '';
    if (!ID.test(id)) errors.push(`${where}: file name must be lowercase-with-dashes`);
    if (!root) errors.push(`${where}: no <svg> element`);
    if (!/\bviewBox=/.test(root)) errors.push(`${where}: <svg> needs a viewBox`);
    if (/\s(width|height)=/.test(root)) errors.push(`${where}: remove width/height from <svg> (viewBox only)`);
    if (!/stroke="currentColor"/.test(root)) errors.push(`${where}: <svg> needs stroke="currentColor"`);
    if (/<text\b/.test(svg)) errors.push(`${where}: no text inside drawings (captions are translated separately)`);
    if (/<(script|image|foreignObject|a|use)\b/i.test(svg)) errors.push(`${where}: no script, image, link, or <use> elements`);
    if (/\son[a-z]+=/i.test(svg) || /href=/i.test(svg) || /url\(/i.test(svg)) errors.push(`${where}: no event handlers or external references`);
    if (/#[0-9a-f]{3,6}\b|\b(black|white)\b/i.test(svg.replace(/<!--[\s\S]*?-->/g, ''))) {
      errors.push(`${where}: use currentColor, not fixed colors (dark mode)`);
    }
  }
  const usedSketches = new Set<string>();
  const sectionIds = new Set(sections.map((s) => s.id));

  // ---- glossary ----
  const termIds = new Set<string>();
  const usedTerms = new Set<string>();
  for (const t of glossary) {
    const where = `glossary "${t.id}"`;
    if (!ID.test(t.id)) errors.push(`${where}: id must be lowercase-with-dashes`);
    if (termIds.has(t.id)) errors.push(`${where}: duplicate id`);
    termIds.add(t.id);
    checkText(t.name, `${where} name`, { allowLinks: false });
    checkText(t.definition, `${where} definition`, { allowLinks: false });
    if (t.sketch) {
      usedSketches.add(t.sketch);
      if (!sketchIds.has(t.sketch)) errors.push(`${where}: sketch "${t.sketch}" has no file in src/sketches/svg/`);
    }
  }
  for (let i = 1; i < glossary.length; i++) {
    if (glossary[i - 1].name.en.localeCompare(glossary[i].name.en) > 0) {
      warnings.push(`glossary: "${glossary[i].name.en}" is out of alphabetical order`);
    }
  }

  // ---- sections ----
  if (sectionIds.size !== sections.length) errors.push('sections: duplicate section id');
  sections.forEach((s, i) => {
    if (s.number !== i + 1) errors.push(`section "${s.id}": number ${s.number} should be ${i + 1}`);
  });

  for (const s of sections) {
    const headingIds = new Set<string>();
    checkText(s.title, `section "${s.id}" title`, { allowLinks: false });
    checkText(s.summary, `section "${s.id}" summary`, { allowLinks: false });
    s.blocks.forEach((b, i) => checkBlock(b, `section "${s.id}" block ${i + 1} (${b.type})`, headingIds));
    const written = s.blocks.some((b) => b.type !== 'source');
    if (written && !s.blocks.some((b) => b.type === 'source')) {
      errors.push(`section "${s.id}": has content but no sources. Cite every source.`);
    }
  }

  for (const id of termIds) if (!usedTerms.has(id)) warnings.push(`glossary "${id}": not linked from any section yet`);
  for (const id of sketchIds) if (!usedSketches.has(id)) warnings.push(`sketch "${id}": not used anywhere yet`);

  // ---- calculator math (known answers from the guide) ----
  for (const m of checkCalcMath()) errors.push(`calculators math: ${m}`);

  return { errors, warnings };

  // ---------------------------------------------------------------------------

  function checkBlock(b: Block, where: string, headingIds: Set<string>) {
    switch (b.type) {
      case 'p':
      case 'warning':
        checkText(b.text, where);
        break;
      case 'h':
        if (!ID.test(b.id)) errors.push(`${where}: heading id "${b.id}" must be lowercase-with-dashes`);
        if (headingIds.has(b.id)) errors.push(`${where}: duplicate heading id "${b.id}"`);
        headingIds.add(b.id);
        checkText(b.text, where, { allowLinks: false });
        break;
      case 'steps':
      case 'list':
        if (b.items.length === 0) errors.push(`${where}: empty`);
        b.items.forEach((it, j) => checkText(it, `${where} item ${j + 1}`));
        break;
      case 'sketch':
        usedSketches.add(b.sketch);
        if (!sketchIds.has(b.sketch)) errors.push(`${where}: sketch "${b.sketch}" has no file in src/sketches/svg/`);
        checkText(b.caption, `${where} caption`, { allowLinks: false });
        break;
      case 'table':
        checkText(b.caption, `${where} caption`, { allowLinks: false });
        b.head.forEach((c, j) => checkText(c, `${where} heading ${j + 1}`));
        b.rows.forEach((row, r) => {
          if (row.length !== b.head.length) {
            errors.push(`${where}: row ${r + 1} has ${row.length} cells, expected ${b.head.length}`);
          }
          row.forEach((c, j) => checkText(c, `${where} row ${r + 1} cell ${j + 1}`));
        });
        break;
      case 'calc':
        if (!(CALC_IDS as readonly string[]).includes(b.calc)) errors.push(`${where}: unknown calculator "${b.calc}"`);
        break;
      case 'source':
        if (!b.title.trim() || !b.publisher.trim()) errors.push(`${where}: needs a title and publisher`);
        if (b.url && !b.url.startsWith('https://')) errors.push(`${where}: url should start with https://`);
        break;
    }
  }

  function checkText(text: Localized, where: string, opts: { allowLinks?: boolean } = {}) {
    const allowLinks = opts.allowLinks ?? true;
    for (const [lang, value] of Object.entries(text)) {
      if (value === undefined) continue;
      if (!value.trim()) errors.push(`${where}: empty ${lang} text`);
      const terms = [...value.matchAll(TERM_LINK)];
      const secs = [...value.matchAll(SECTION_LINK)];
      if (!allowLinks && (terms.length || secs.length)) {
        errors.push(`${where}: links aren't allowed here (plain text only)`);
      }
      for (const m of terms) {
        usedTerms.add(m[1]);
        if (!termIds.has(m[1])) errors.push(`${where}: glossary link [[${m[1]}]] has no glossary entry`);
      }
      for (const m of secs) {
        if (!sectionIds.has(m[1])) errors.push(`${where}: section link {{${m[1]}}} doesn't match a section id`);
      }
      const leftover = value.replace(TERM_LINK, '').replace(SECTION_LINK, '');
      if (/\[\[|\]\]|\{\{|\}\}/.test(leftover)) errors.push(`${where}: broken [[ ]] or {{ }} link markup`);
    }
  }
}
