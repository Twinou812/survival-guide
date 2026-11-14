import type { Section } from './types';

// Phase 1: section list and placeholders. Phase 2 fills these in one section at a time.
// The Water section carries one sample paragraph to show the glossary link pattern.

export const SECTIONS: Section[] = [
  {
    id: 'start-here',
    number: 1,
    title: { en: 'Start Here' },
    summary: { en: 'The first 72 hours, then 90 days, 6 months, 1 year, and 2 years.' },
    blocks: [],
  },
  {
    id: 'water',
    number: 2,
    title: { en: 'Water' },
    summary: { en: 'Storing, finding, and making water safe to drink.' },
    blocks: [
      {
        type: 'p',
        text: {
          en: 'A 55-gallon drum holds enough drinking water for a family of four for about two weeks. Open and close its caps with a [[bung-wrench|bung wrench]].',
        },
      },
      {
        type: 'sketch',
        sketch: 'bung-wrench',
        caption: { en: 'A bung wrench fits both cap sizes on a standard drum.' },
      },
      {
        type: 'source',
        title: 'Water: Ready.gov',
        publisher: 'FEMA',
        url: 'https://www.ready.gov/water',
      },
    ],
  },
  {
    id: 'food-storage',
    number: 3,
    title: { en: 'Food Storage' },
    summary: { en: 'What to store, how to store it, and how long it lasts.' },
    blocks: [],
  },
  {
    id: 'growing-food',
    number: 4,
    title: { en: 'Growing Food' },
    summary: { en: 'Small-yard gardens, raised beds, and seeds for your growing zone.' },
    blocks: [],
  },
  {
    id: 'trapping',
    number: 5,
    title: { en: 'Trapping and Prey' },
    summary: { en: 'Simple traps, and how to clean different kinds of game.' },
    blocks: [],
  },
  {
    id: 'seasons',
    number: 6,
    title: { en: 'Seasons' },
    summary: { en: 'Getting through winter cold and summer heat.' },
    blocks: [],
  },
  {
    id: 'power-light-sanitation',
    number: 7,
    title: { en: 'Power, Light, and Sanitation' },
    summary: { en: 'Light, heat, cooking, and keeping the household clean and healthy.' },
    blocks: [],
  },
  {
    id: 'medical',
    number: 8,
    title: { en: 'Medical' },
    summary: { en: 'Care when no doctor can be reached. Remedies labeled by evidence.' },
    blocks: [],
  },
  {
    id: 'mind',
    number: 9,
    title: { en: 'Mind' },
    summary: { en: 'Handling fear and stress, staying aware, and keeping the family steady.' },
    blocks: [],
  },
  {
    id: 'home-defense',
    number: 10,
    title: { en: 'Home Defense' },
    summary: { en: 'Basic protection inside a small family home.' },
    blocks: [],
  },
  {
    id: 'tools-kits',
    number: 11,
    title: { en: 'Tools and Kits' },
    summary: { en: 'What to have on hand, with drawings of every tool.' },
    blocks: [],
  },
  {
    id: 'calculators',
    number: 12,
    title: { en: 'Calculators' },
    summary: { en: 'Water, food, garden, and fuel planning for your family.' },
    blocks: [],
  },
];

export function getSection(id: string): Section | undefined {
  return SECTIONS.find((s) => s.id === id);
}
