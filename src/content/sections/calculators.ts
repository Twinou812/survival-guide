// Section 12: Calculators. The calculators themselves are React components in src/calc;
// this file places them, explains each one, and adds printed tables for the PDF and for
// when the phone is dead. The tables call the same math as the calculators, so the
// numbers can never disagree. Rules and their sources: src/calc/rules.ts.

import { fmt } from '../../calc/format';
import { caloriesPerDay, waterNeed, type Family } from '../../calc/math';
import { DEFAULT_FAMILY, GAL_TO_L, KCAL_PER_DAY, SPANS } from '../../calc/rules';
import type { Localized, Section } from '../types';

const SPAN_NAMES: Record<number, string> = { 3: '3 days', 14: '2 weeks', 90: '90 days', 365: '1 year' };
const ADULTS = [1, 2, 3, 4, 5, 6];
const adultsOnly = (n: number, days: number): Family => ({
  ...DEFAULT_FAMILY,
  adults: n,
  children: 0,
  days,
});
const head: Localized[] = [{ en: 'Adults' }, ...SPANS.map((d) => ({ en: SPAN_NAMES[d] }))];
const rowsOf = (cell: (n: number, days: number) => string): Localized[][] =>
  ADULTS.map((n) => [{ en: String(n) }, ...SPANS.map((d) => ({ en: cell(n, d) }))]);

const waterRows = rowsOf((n, d) => {
  const gal = Math.ceil(waterNeed(adultsOnly(n, d)).totalGal);
  return `${fmt(gal)} gal`;
});
const foodRows = rowsOf((n, d) => {
  return fmt(caloriesPerDay(adultsOnly(n, d)) * d);
});

export const calculators: Section = {
  id: 'calculators',
  number: 12,
  title: { en: 'Calculators' },
  summary: { en: 'Water, food, garden, and fuel planning for your family.' },
  blocks: [
    {
      type: 'p',
      text: {
        en: "These calculators turn the rules of thumb in this guide into numbers for your own family. Enter your family once at the top. Every calculator on this page, and the ones inside {{water}} and {{food-storage}}, uses it. Each answer shows the rule it came from, so you can check it or work it out on paper.",
      },
    },
    {
      type: 'warning',
      text: {
        en: 'The numbers are for planning, not promises. Babies, people who are sick, and hot weather need more water. Follow medicine and formula labels exactly. When a label on your own appliance, tank, or product says something different, the label wins.',
      },
    },

    // ------------------------------------------------------------------
    { type: 'h', id: 'your-family', text: { en: 'Your family' } },
    {
      type: 'p',
      text: {
        en: 'Count everyone who lives with you, and anyone who would come to you in an emergency. Until you change it, an example family of 2 adults and 2 children is shown. What you enter is saved on this phone only and is never sent anywhere.',
      },
    },
    { type: 'calc', calc: 'family' },

    // ------------------------------------------------------------------
    { type: 'h', id: 'water', text: { en: 'Water' } },
    {
      type: 'p',
      text: {
        en: 'At least 1 gallon (about 4 liters) per person per day, for drinking plus a little cooking and washing. Pets are counted by weight. {{water}} explains how to store it, where to find more, and how to make it safe.',
      },
    },
    { type: 'calc', calc: 'water' },
    {
      type: 'table',
      caption: {
        en: `Gallons of water for adults, at 1 gallon a day each (for the printed guide). 1 gallon is about ${fmt(GAL_TO_L, 'en', 1)} liters. Children need less; nursing mothers, people who are sick, and hot weather need more. Use the calculator for a mixed family.`,
      },
      head,
      rows: waterRows,
    },

    // ------------------------------------------------------------------
    { type: 'h', id: 'food', text: { en: 'Food' } },
    {
      type: 'p',
      text: {
        en: "Each person is counted at the calories of an active day for their age, because people work harder in a crisis: hauling water, gardening, cutting wood. The dry staples are one way to get there, scaled from Brigham Young University's list for one adult for one year. Store what your family already eats, and store vitamin C. {{food-storage}} explains how.",
      },
    },
    { type: 'calc', calc: 'food' },
    {
      type: 'table',
      caption: {
        en: `Total calories for adults, at ${fmt(KCAL_PER_DAY.adult)} a day each (for the printed guide). Children and older adults need less; teens and pregnant or nursing mothers need more. For the dry staples, see the one-adult list in Food Storage.`,
      },
      head,
      rows: foodRows,
    },

    // ------------------------------------------------------------------
    { type: 'h', id: 'fuel', text: { en: 'Cooking fuel' } },
    {
      type: 'p',
      text: {
        en: "A standard 20-pound propane tank lasts about 18 to 20 hours of cooking. The calculator uses the low end, 18 hours. Plan at least 2 weeks of fuel and two ways to cook. See {{cooking}}.",
      },
    },
    {
      type: 'warning',
      text: {
        en: 'Camp stoves, grills, and generators make carbon monoxide. Use them outdoors only, never in the house, garage, or a tent. See {{seasons}}.',
      },
    },
    { type: 'calc', calc: 'fuel' },

    // ------------------------------------------------------------------
    { type: 'h', id: 'generator', text: { en: 'Generator size' } },
    {
      type: 'p',
      text: {
        en: 'Motors need a burst of extra power to start. Add the running watts of everything you will run at the same time, then the extra starting watts of the single item that needs the most. {{power-light-sanitation}} explains safe generator use.',
      },
    },
    { type: 'calc', calc: 'generator' },

    // ------------------------------------------------------------------
    { type: 'h', id: 'dutch-oven', text: { en: 'Dutch oven coals' } },
    {
      type: 'p',
      text: {
        en: 'For a standard-depth cast-iron camp Dutch oven, about 2 charcoal briquettes for every inch across, with most on the lid. 10- and 12-inch ovens use the starting counts in {{cooking}}; other sizes use the rule of thumb.',
      },
    },
    { type: 'calc', calc: 'dutch-oven' },

    // ------------------------------------------------------------------
    { type: 'h', id: 'garden', text: { en: 'Garden beds and planting dates' } },
    {
      type: 'p',
      text: {
        en: 'Work out how much soil your raised beds need and when to plant, from your average last frost date. If you do not know it, a local extension office, weather service, or experienced gardener can tell you. {{growing-food}} covers beds, soil, and what to grow.',
      },
    },
    { type: 'calc', calc: 'garden' },

    // ------------------------------------------------------------------
    { type: 'h', id: 'kit', text: { en: '72-hour kit' } },
    {
      type: 'p',
      text: {
        en: 'The basic kit from Ready.gov, with the amounts for your family filled in. Tick each item as you pack it. {{tools-kits}} has the longer lists for 2 weeks, 90 days, and a year.',
      },
    },
    { type: 'calc', calc: 'kit' },

    // ------------------------------------------------------------------
    { type: 'source', title: 'Water', publisher: 'Ready.gov (FEMA)', url: 'https://www.ready.gov/water' },
    { type: 'source', title: 'Food and Water in an Emergency', publisher: 'FEMA and American Red Cross', url: 'https://www.fema.gov/pdf/library/f&web.pdf' },
    { type: 'source', title: 'How Much Water Should Dogs and Cats Drink?', publisher: "Hill's Pet Nutrition (veterinarian-written guide)", url: 'https://www.hillspet.com/pet-care/nutrition-feeding/how-much-water-should-dogs-and-cats-drink' },
    { type: 'source', title: 'Dietary Guidelines for Americans 2020–2025, Appendix 2: Estimated Calorie Needs per Day, by Age, Sex, and Physical Activity Level', publisher: 'USDA and U.S. Department of Health and Human Services', url: 'https://www.dietaryguidelines.gov' },
    { type: 'source', title: 'An Approach to Longer-Term Food Storage (2024)', publisher: 'Brigham Young University, Department of Nutrition, Dietetics, and Food Science', url: 'https://ndfs.byu.edu/research-on-food-storage' },
    { type: 'source', title: 'Facts About Infant Feeding During Emergencies', publisher: 'CDC', url: 'https://www.cdc.gov/infant-feeding-emergencies-toolkit/php/facts.html' },
    { type: 'source', title: 'Emergency cooking methods (solar ovens, Dutch ovens, heat-in-can, fuel amounts)', publisher: 'Utah Division of Emergency Management (Be Ready Utah)', url: 'https://dem.utah.gov/resource/emergency-cooking-methods/' },
    { type: 'source', title: 'Dutch Oven Cooking 101', publisher: 'Missouri Department of Conservation', url: 'https://mdc.mo.gov/node/246451' },
    { type: 'source', title: 'Portable Generator Wattage Chart (typical running and starting watts)', publisher: "Lowe's", url: 'https://www.lowes.com/pdf/portable_generator_wattage_chart.pdf' },
    { type: 'source', title: 'Generator Buying Guide (furnace fan wattage)', publisher: "Sam's Club", url: 'https://scene7.samsclub.com/is/content/samsclub/2023-generator-buying-guide' },
    { type: 'source', title: 'Spring Has Sprung, but Frost Still Likely', publisher: 'Utah State University Extension', url: 'https://extension.usu.edu/news_sections/gardening/spring-has-sprung.php' },
    { type: 'source', title: 'Build a Kit', publisher: 'Ready.gov (FEMA)', url: 'https://www.ready.gov/kit' },
  ],
};
