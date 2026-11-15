// Calculator ids that a { type: 'calc' } content block can name. No React here, so
// the content check can import it. Each id has a component in src/calc/index.tsx.
export const CALC_IDS = ['family', 'water', 'food', 'fuel', 'generator', 'dutch-oven', 'garden', 'kit'] as const;
export type CalcId = (typeof CALC_IDS)[number];
