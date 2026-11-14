// The single content source. The Android app, the website, and (in Phase 4) the
// printable PDF are all built from these files.

/** Text keyed by language code. English ("en") is required; others are added in Phase 5. */
export type Localized = { en: string } & Partial<Record<string, string>>;

/**
 * A block of section content.
 * Inside text, link a glossary term with [[term-id]] or [[term-id|words shown]].
 */
export type Block =
  | { type: 'p'; text: Localized }
  | { type: 'h'; text: Localized }
  | { type: 'steps'; items: Localized[] }
  | { type: 'list'; items: Localized[] }
  | { type: 'warning'; text: Localized }
  | { type: 'sketch'; sketch: string; caption: Localized }
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
  /** Key in src/sketches/index.ts */
  sketch?: string;
}

export function pick(text: Localized, locale: string): string {
  return text[locale] ?? text.en;
}
