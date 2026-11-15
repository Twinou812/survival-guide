// The single content source. The Android app, the website, and (in Phase 4) the
// printable PDF are all built from these files.

import type { CalcId } from '../calc/ids';

/** Text keyed by language code. English ("en") is required; others are added in Phase 5. */
export type Localized = { en: string } & Partial<Record<string, string>>;

/**
 * A block of section content.
 * Inside any text:
 *   [[term-id]] or [[term-id|words shown]]        → glossary link (tap for sketch + one-liner)
 *   {{section-id}} or {{section-id|words shown}}  → link to another section
 */
export type Block =
  | { type: 'p'; text: Localized }
  /** Heading. `id` makes it a stop in the "On this page" list (unique within the section). */
  | { type: 'h'; id: string; text: Localized }
  | { type: 'steps'; items: Localized[] }
  | { type: 'list'; items: Localized[] }
  | { type: 'warning'; text: Localized }
  | { type: 'sketch'; sketch: string; caption: Localized }
  /** Small table. Every row has the same number of cells as `head`. */
  | { type: 'table'; caption: Localized; head: Localized[]; rows: Localized[][] }
  /** A calculator (src/calc). In the printed guide, the tables next to it stand in for it. */
  | { type: 'calc'; calc: CalcId }
  | { type: 'source'; title: string; publisher: string; url?: string };

export interface Section {
  id: string;
  number: number;
  title: Localized;
  summary: Localized;
  blocks: Block[];
}

export interface GlossaryTerm {
  id: string;
  name: Localized;
  /** One plain sentence. */
  definition: Localized;
  /** Key in src/sketches/index.tsx */
  sketch?: string;
}

export function pick(text: Localized, locale: string): string {
  return text[locale] ?? text.en;
}
