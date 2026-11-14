import type { Section } from '../types';
import { startHere } from './start-here';
import { water } from './water';
import { foodStorage } from './food-storage';
import { growingFood } from './growing-food';
import { trapping } from './trapping';
import { seasons } from './seasons';
import { powerLightSanitation } from './power-light-sanitation';
import { medical } from './medical';
import { mind } from './mind';
import { homeDefense } from './home-defense';
import { toolsKits } from './tools-kits';
import { calculators } from './calculators';
import { menstrualCare } from './menstrual-care';
import { buggingOut } from './bugging-out';

// One file per section. Phase 2 fills them in one at a time.
// Order here is the order on the home screen.
export const SECTIONS: Section[] = [
  startHere,
  water,
  foodStorage,
  growingFood,
  trapping,
  seasons,
  powerLightSanitation,
  medical,
  mind,
  homeDefense,
  toolsKits,
  calculators,
  menstrualCare,
  buggingOut,
];

export function getSection(id: string): Section | undefined {
  return SECTIONS.find((s) => s.id === id);
}
