// Every number the calculators use, in one place, each with its source.
// The same sources are listed at the end of the Calculators section.
// Change a number here and the content check re-runs the worked answers.

import type { Family } from './math';

// ---- Water ----
// Source: Ready.gov "Water"; FEMA and American Red Cross "Food and Water in an Emergency"
// (at least 1 gallon per person per day; very hot weather can double it).
export const WATER_GAL_PER_PERSON_DAY = 1;
export const HOT_WEATHER_FACTOR = 2;
export const GAL_TO_L = 3.785;
export const FLOZ_PER_GAL = 128;
export const JUG_GAL = 5;
export const DRUM_GAL = 55;

// Source: Hill's Pet Nutrition, "How Much Water Should Dogs and Cats Drink?" (vet-written
// rule of thumb: about 1 fluid ounce per pound of body weight per day).
export const PET_WATER_FLOZ_PER_LB_DAY = 1;

// ---- Food ----
// Source: Dietary Guidelines for Americans 2020–2025, Appendix 2, "Estimated Calorie Needs
// per Day, by Age, Sex, and Physical Activity Level", Active level, male and female averaged
// at each group's middle age. Verify against the DGA PDF when online; if it differs, the
// table wins.
export const KCAL_PER_DAY = {
  adult: 2500, // age 41: male 2,800, female 2,200
  olderAdult: 2300, // age ~70: male 2,600, female 2,000
  teen: 2700, // age 15: male 3,000, female 2,400
  child: 1800, // age 7: male 1,800, female 1,800
  baby: 0, // breastfeed, or follow the formula label (CDC, Infant Feeding During Emergencies)
} as const;
// Source: DGA 2020–2025 (third trimester +452 calories a day; nursing +330 to +400), rounded.
export const PREGNANT_NURSING_EXTRA_KCAL = 450;
// One "adult" in the BYU table.
export const ADULT_EQUIV_KCAL = 2500;

// Source: Brigham Young University, "An Approach to Longer-Term Food Storage" (2024),
// basic dry staples for one adult for one year, in pounds (as in the Food Storage section).
export const STAPLE_IDS = ['wheat', 'rice', 'oats', 'pasta', 'beans', 'dryMilk', 'sugar', 'salt'] as const;
export type StapleId = (typeof STAPLE_IDS)[number];
export const STAPLES_LB_PER_ADULT_YEAR: Record<StapleId, number> = {
  wheat: 132,
  rice: 65,
  oats: 29,
  pasta: 21,
  beans: 62,
  dryMilk: 60,
  sugar: 70,
  salt: 8,
};
export const OIL_GAL_PER_ADULT_YEAR = 2;
export const LB_TO_KG = 0.4536;

// ---- Cooking fuel ----
// Source: Utah Division of Emergency Management, "Emergency cooking methods": a 20-lb
// propane tank lasts about 18 to 20 hours of cooking. Use the low end.
export const PROPANE_HOURS_PER_20LB = 18;

// ---- Generator ----
// Source: Lowe's Portable Generator Wattage Chart and Sam's Club Generator Buying Guide
// (typical values, same as the Power, Light, and Sanitation table).
export const APPLIANCE_IDS = ['fridge', 'sump', 'furnaceFan', 'windowAc', 'microwave', 'coffee', 'tv', 'spaceHeater'] as const;
export type ApplianceId = (typeof APPLIANCE_IDS)[number];
export const APPLIANCE_WATTS: Record<ApplianceId, { running: number; extraStart: number }> = {
  fridge: { running: 700, extraStart: 2200 },
  sump: { running: 1050, extraStart: 2150 },
  furnaceFan: { running: 875, extraStart: 2300 },
  windowAc: { running: 3250, extraStart: 3950 },
  microwave: { running: 1000, extraStart: 0 },
  coffee: { running: 1000, extraStart: 0 },
  tv: { running: 500, extraStart: 0 },
  spaceHeater: { running: 1800, extraStart: 0 },
};

// ---- Dutch oven ----
// Source: Missouri Department of Conservation, "Dutch Oven Cooking 101" (325°F counts) and
// Utah DEM (+2 briquettes per 25°F), as in the Cooking section's table: [under, on top].
export const DUTCH_OVEN_TABLE: Record<number, Record<number, [number, number]>> = {
  10: { 325: [7, 13], 350: [7, 15], 375: [8, 16], 400: [8, 18] },
  12: { 325: [8, 16], 350: [9, 17], 375: [9, 19], 400: [10, 20] },
};
// Rule of thumb for sizes and temperatures not in the table.
export const BRIQUETTES_PER_INCH = 2;
export const BRIQUETTES_PER_25F = 2;
export const DUTCH_BASE_TEMP_F = 325;
export const DUTCH_SIZES_IN = [8, 10, 12, 14] as const;
export const DUTCH_TEMPS_F = [300, 325, 350, 375, 400, 425, 450] as const;

// ---- Garden ----
// Source: Utah State University Extension, "Spring Has Sprung, but Frost Still Likely":
// hardy crops 45 to 60 days before the last frost; very tender crops at least a week after.
export const HARDY_DAYS_BEFORE = { from: 60, to: 45 } as const;
export const TENDER_DAYS_AFTER = 7;
export const FT3_TO_L = 28.317;
export const FT2_TO_M2 = 0.0929;

// ---- 72-hour kit ----
// Source: Ready.gov "Build a Kit" (as in the Tools and Kits table).
export const KIT_DAYS = 3;
export const KIT_ITEM_IDS = [
  'water', 'food', 'radio', 'light', 'first-aid', 'whistle', 'masks', 'sheeting', 'towelettes',
  'wrench', 'maps', 'power-bank', 'soap', 'otc', 'prescriptions', 'baby', 'pets', 'cash',
  'papers', 'sleeping', 'clothes', 'extinguisher', 'matches', 'period', 'dishes', 'activities',
] as const;
export type KitItemId = (typeof KIT_ITEM_IDS)[number];

// ---- Example family shown before anything is entered ----
export const DEFAULT_FAMILY: Family = {
  adults: 2,
  olderAdults: 0,
  teens: 0,
  children: 2,
  babies: 0,
  pregnantOrNursing: 0,
  pets: [],
  days: 14,
  hot: false,
  lastFrost: '04-15',
  firstFrost: '',
};
export const SPANS = [3, 14, 90, 365] as const;
