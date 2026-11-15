import { useContext, type ComponentType } from 'react';
import { DutchOvenCalc } from './DutchOvenCalc';
import { FamilyCard } from './FamilyCard';
import { FoodCalc } from './FoodCalc';
import { FuelCalc } from './FuelCalc';
import { GardenCalc } from './GardenCalc';
import { GeneratorCalc } from './GeneratorCalc';
import { KitCalc } from './KitCalc';
import { WaterCalc } from './WaterCalc';
import type { CalcId } from './ids';
import { SectionIdContext } from './ui';

// Every calculator id has a component here (TypeScript checks the list is complete).
const CALCULATORS: Record<CalcId, ComponentType> = {
  family: FamilyCard,
  water: WaterCalc,
  food: FoodCalc,
  fuel: FuelCalc,
  generator: GeneratorCalc,
  'dutch-oven': DutchOvenCalc,
  garden: GardenCalc,
  kit: KitCalc,
};

/** A calculator block. Outside the Calculators section, a one-line family summary
 *  with an Edit button sits above it, so the numbers are never a mystery. */
export function CalcBlock({ id }: { id: CalcId }) {
  const sectionId = useContext(SectionIdContext);
  const Calc = CALCULATORS[id];
  if (!Calc) return null;
  return (
    <div className="calc-block">
      {id !== 'family' && sectionId !== 'calculators' && <FamilyCard compact />}
      <Calc />
    </div>
  );
}
