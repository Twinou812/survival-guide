import { useState } from 'react';
import { useSettings } from '../settings';
import { useFamily } from './family';
import { LIMITS } from './family-store';
import { fill, fmt } from './format';
import { propaneTanks } from './math';
import { CalcBox, ResultRow, RuleLine, SpanPicker, Stepper } from './ui';

export function FuelCalc() {
  const { t, locale } = useSettings();
  const { family } = useFamily();
  const [hours, setHours] = useState(1);
  return (
    <CalcBox
      title={t.calc.fuelTitle}
      inputs={
        <>
          <SpanPicker />
          <Stepper
            label={t.calc.fuelHours}
            value={hours}
            min={LIMITS.hoursPerDay[0]}
            max={LIMITS.hoursPerDay[1]}
            step={0.5}
            decimals
            onChange={setHours}
          />
          <p className="calc-note">{t.calc.fuelExample}</p>
        </>
      }
    >
      <ResultRow label={t.calc.fuelTanks} value={fmt(propaneTanks(hours, family.days), locale)} />
      <RuleLine>{fill(t.calc.fuelRule, { hours: fmt(hours, locale, 1), days: fmt(family.days, locale) })}</RuleLine>
    </CalcBox>
  );
}
