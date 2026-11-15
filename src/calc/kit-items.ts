// The Ready.gov basic kit, in the same order and words as the table in Tools and Kits
// (src/content/sections/tools-kits.ts). Quantities that depend on the family come from
// kitList() in math.ts; the others show the "how much" text.

import type { Localized } from '../content/types';
import type { KitItemId } from './rules';

export const KIT_ITEMS: Record<KitItemId, { name: Localized; howMuch: Localized }> = {
  'water': { name: { en: "Drinking and washing water" }, howMuch: { en: "About 1 gallon (4 liters) per person per day, at least 3 days; more for hot weather, nursing mothers, and the sick" } },
  'food': { name: { en: "Food that needs no fridge, plus a manual can opener" }, howMuch: { en: "At least 3 days, foods your family already eats" } },
  'radio': { name: { en: "Battery or hand-crank radio, and a NOAA weather radio with tone alert" }, howMuch: { en: "1 each" } },
  'light': { name: { en: "Flashlight or headlamp, and extra batteries" }, howMuch: { en: "1 light per person" } },
  'first-aid': { name: { en: "First aid kit" }, howMuch: { en: "1 for home, 1 for each car (list below)" } },
  'whistle': { name: { en: "Whistle" }, howMuch: { en: "1 per person" } },
  'masks': { name: { en: "Dust masks or N95 respirators" }, howMuch: { en: "Several per person" } },
  'sheeting': { name: { en: "Plastic sheeting, scissors, and duct tape" }, howMuch: { en: "1 roll of sheeting, 2 rolls of tape" } },
  'towelettes': { name: { en: "Moist towelettes, garbage bags, and plastic ties" }, howMuch: { en: "1 box of heavy bags; towelettes for 3 days" } },
  'wrench': { name: { en: "Wrench or pliers to turn off utilities" }, howMuch: { en: "1 (a gas shut-off wrench if you have gas)" } },
  'maps': { name: { en: "Local paper maps" }, howMuch: { en: "1 set, routes marked" } },
  'power-bank': { name: { en: "Phone chargers and a power bank" }, howMuch: { en: "1 power bank per adult" } },
  'soap': { name: { en: "Soap, hand sanitizer, disinfecting wipes" }, howMuch: { en: "3 days" } },
  'otc': { name: { en: "Over-the-counter medicines: pain relievers, anti-diarrhea medicine, antacids, laxatives" }, howMuch: { en: "A small supply" } },
  'prescriptions': { name: { en: "Prescription medicines, glasses, and contact lens solution" }, howMuch: { en: "As much as your doctor will allow" } },
  'baby': { name: { en: "Baby needs: formula, bottles, diapers, wipes, diaper rash cream" }, howMuch: { en: "At least 3 days" } },
  'pets': { name: { en: "Pet food and extra water for pets" }, howMuch: { en: "At least 3 days" } },
  'cash': { name: { en: "Cash in small bills" }, howMuch: { en: "Enough for a few days of gas and groceries" } },
  'papers': { name: { en: "Copies of important papers in a waterproof container" }, howMuch: { en: "1 set" } },
  'sleeping': { name: { en: "Sleeping bag or warm blanket" }, howMuch: { en: "1 per person" } },
  'clothes': { name: { en: "Change of clothes for the season and sturdy shoes" }, howMuch: { en: "1 per person" } },
  'extinguisher': { name: { en: "Fire extinguisher" }, howMuch: { en: "At least 1 per floor" } },
  'matches': { name: { en: "Matches in a waterproof container" }, howMuch: { en: "1 box" } },
  'period': { name: { en: "Period supplies and personal hygiene items" }, howMuch: { en: "1 cycle per person who needs them" } },
  'dishes': { name: { en: "Plates, cups, utensils, paper towels" }, howMuch: { en: "3 days" } },
  'activities': { name: { en: "Paper, pencils, books, games, puzzles" }, howMuch: { en: "Some for each child" } },
};
