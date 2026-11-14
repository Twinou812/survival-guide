import type { GlossaryTerm } from './types';

// Every tool or term used in the guide gets an entry: a plain one-line explanation
// and, where it helps, a sketch. Phase 2 adds entries as each section is written.

export const GLOSSARY: GlossaryTerm[] = [
  {
    id: 'bung-wrench',
    name: { en: 'Bung wrench' },
    definition: {
      en: 'A flat metal tool for unscrewing the two plastic caps (bungs) on top of a water or fuel drum.',
    },
    sketch: 'bung-wrench',
  },
];

export function getTerm(id: string): GlossaryTerm | undefined {
  return GLOSSARY.find((t) => t.id === id);
}
