import { GLOSSARY } from './glossary';
import { SECTIONS } from './sections';
import type { Block, GlossaryTerm } from './types';

// Where the glossary's "Read more" link takes the reader for each term.
//
// A term's `home` (set by hand in glossary.ts) always wins. Otherwise every part of the
// guide (a section, split at its headings) gets a score for the term, and the best part wins:
//   +100  the part shows the term's own drawing (that's where it is explained most)
//   +30   the part's heading names the term, or links it
//   +3    for each time the text in the part links the term
// Start Here, Tools and Kits, and Calculators mostly list things that other sections explain,
// so their score counts for a tenth: they win only when nothing else uses the term.
// Ties go to the part that comes first in the guide. Inside the winning part the link lands
// on the drawing, else the heading if it names the term, else the first block that links it.
// Scores use the English text, so every language goes to the same place.

const SUMMARY_SECTIONS = new Set(['start-here', 'tools-kits', 'calculators']);

export interface TermHome {
  section: string;
  /** Heading id of the part, if the part has one (text before the first heading has none). */
  heading?: string;
  /** Element id on the section page to scroll to: "h-<heading id>" or "b-<block index>". */
  anchor: string;
}

function texts(b: Block): string[] {
  switch (b.type) {
    case 'p':
    case 'h':
    case 'warning':
      return [b.text.en];
    case 'steps':
    case 'list':
      return b.items.map((i) => i.en);
    case 'sketch':
      return [b.caption.en];
    case 'table':
      return [b.caption.en, ...b.head.map((c) => c.en), ...b.rows.flat().map((c) => c.en)];
    default:
      return [];
  }
}

function countLinks(b: Block, id: string): number {
  const re = new RegExp(`\\[\\[${id}(?:\\||\\]\\])`, 'g');
  return texts(b).reduce((n, t) => n + (t.match(re)?.length ?? 0), 0);
}

/** "Dutch oven (camp)" → "dutch oven". Links in the heading are reduced to their words. */
function plain(s: string): string {
  return s
    .replace(/\[\[[a-z0-9-]+\|([^\]]+)\]\]|\{\{[a-z0-9-]+\|([^}]+)\}\}/g, '$1$2')
    .replace(/\[\[|\]\]|\{\{|\}\}/g, '')
    .toLowerCase();
}

function coreName(term: GlossaryTerm): string {
  return term.name.en.replace(/\s*\(.*?\)\s*/g, ' ').trim().toLowerCase();
}

function headingNames(heading: Extract<Block, { type: 'h' }>, term: GlossaryTerm): boolean {
  if (countLinks(heading, term.id) > 0) return true;
  const name = coreName(term);
  const h = plain(heading.text.en);
  return name.length > 2 && (h.includes(name) || h.includes(name.replace(/s$/, '')));
}

function pickHome(term: GlossaryTerm): TermHome | undefined {
  if (term.home) {
    return { ...term.home, anchor: term.home.heading ? `h-${term.home.heading}` : 'top' };
  }
  let best: (TermHome & { score: number }) | undefined;

  for (const section of SECTIONS) {
    // The same list the section page shows (sources are moved to the end there).
    const body = section.blocks.filter((b) => b.type !== 'source');
    // Split the page into parts at each heading.
    let start = 0;
    for (let i = 0; i <= body.length; i++) {
      if (i < body.length && !(body[i].type === 'h' && i > start)) continue;
      const part = body.slice(start, i).map((block, k) => ({ block, index: start + k }));
      start = i;
      if (part.length === 0) continue;

      const head = part[0].block.type === 'h' ? (part[0].block as Extract<Block, { type: 'h' }>) : undefined;
      const named = head ? headingNames(head, term) : false;
      const drawing = term.sketch
        ? part.find(({ block }) => block.type === 'sketch' && block.sketch === term.sketch)
        : undefined;
      const links = part.reduce((n, { block }) => n + (block.type === 'h' ? 0 : countLinks(block, term.id)), 0);

      const score = ((drawing ? 100 : 0) + (named ? 30 : 0) + links * 3) * (SUMMARY_SECTIONS.has(section.id) ? 0.1 : 1);
      if (score === 0 || (best && score <= best.score)) continue;

      const firstLink = part.find(({ block }) => block.type !== 'h' && countLinks(block, term.id) > 0);
      const anchor = drawing
        ? `b-${drawing.index}`
        : named && head
          ? `h-${head.id}`
          : `b-${(firstLink ?? part[0]).index}`;
      best = { section: section.id, heading: head?.id, anchor, score };
    }
  }
  if (!best) return undefined;
  const { score: _score, ...home } = best;
  return home;
}

let cache: Map<string, TermHome | undefined> | undefined;

/** Where "Read more" goes for this term, or undefined if the guide never uses it. */
export function termHome(id: string): TermHome | undefined {
  if (!cache) cache = new Map(GLOSSARY.map((t) => [t.id, pickHome(t)]));
  return cache.get(id);
}
