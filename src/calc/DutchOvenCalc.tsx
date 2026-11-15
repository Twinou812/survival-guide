import { useId, useState } from 'react';
import { RichText } from '../components/RichText';
import { useSettings } from '../settings';
import { fill, fmt } from './format';
import { dutchOven } from './math';
import { DUTCH_SIZES_IN, DUTCH_TEMPS_F } from './rules';
import { CalcBox, ResultRow, RuleLine } from './ui';

export function DutchOvenCalc() {
  const { t, locale } = useSettings();
  const [size, setSize] = useState(12);
  const [temp, setTemp] = useState(375);
  const sizeId = useId();
  const tempId = useId();
  const r = dutchOven(size, temp);
  return (
    <CalcBox
      title={t.calc.dutchTitle}
      inputs={
        <>
          <div className="stepper">
            <label htmlFor={sizeId}>{t.calc.dutchSize}</label>
            <select id={sizeId} value={size} onChange={(e) => setSize(Number(e.target.value))}>
              {DUTCH_SIZES_IN.map((n) => (
                <option key={n} value={n}>
                  {fill(t.calc.dutchInch, { n, cm: fmt(n * 2.54, locale) })}
                </option>
              ))}
            </select>
          </div>
          <div className="stepper">
            <label htmlFor={tempId}>{t.calc.dutchTemp}</label>
            <select id={tempId} value={temp} onChange={(e) => setTemp(Number(e.target.value))}>
              {DUTCH_TEMPS_F.map((f) => (
                <option key={f} value={f}>
                  {fill(t.calc.dutchDeg, { f, c: fmt(Math.round(((f - 32) * 5) / 9 / 5) * 5, locale) })}
                </option>
              ))}
            </select>
          </div>
        </>
      }
    >
      <ResultRow
        label={t.calc.dutchResult}
        value={fill(t.calc.dutchUnderTop, { under: fmt(r.under, locale), top: fmt(r.top, locale) })}
        detail={fill(t.calc.dutchTotal, { n: fmt(r.under + r.top, locale) })}
      />
      <RuleLine>{r.fromTable ? <RichText text={t.calc.dutchFromTable} /> : t.calc.dutchRuleOfThumb}</RuleLine>
    </CalcBox>
  );
}
