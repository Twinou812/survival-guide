import { useState } from 'react';
import { RichText } from '../components/RichText';
import { useSettings } from '../settings';
import { fill, fmt } from './format';
import { generator } from './math';
import { APPLIANCE_IDS, APPLIANCE_WATTS, type ApplianceId } from './rules';
import { CalcBox, ResultRow, RuleLine } from './ui';

export function GeneratorCalc() {
  const { t, locale } = useSettings();
  const [picked, setPicked] = useState<ApplianceId[]>([]);
  const g = generator(picked);
  const w = (n: number) => fill(t.calc.genWatts, { n: fmt(n, locale) });
  return (
    <CalcBox
      title={t.calc.genTitle}
      inputs={
        <fieldset className="pets">
          <legend>{t.calc.genPick}</legend>
          {APPLIANCE_IDS.map((id) => (
            <label key={id} className="choice">
              <input
                type="checkbox"
                checked={picked.includes(id)}
                onChange={(e) => setPicked((p) => (e.target.checked ? [...p, id] : p.filter((x) => x !== id)))}
              />
              <span>
                {t.calc[`app_${id}`]}
                <small className="muted" style={{ display: 'block' }}>
                  {fill(t.calc.genRow, {
                    run: fmt(APPLIANCE_WATTS[id].running, locale),
                    start: fmt(APPLIANCE_WATTS[id].extraStart, locale),
                  })}
                </small>
              </span>
            </label>
          ))}
        </fieldset>
      }
    >
      <ResultRow label={t.calc.genRunning} value={w(g.running)} />
      <ResultRow label={t.calc.genStart} value={w(g.extraStart)} />
      <ResultRow label={t.calc.genTotal} value={w(g.total)} />
      <RuleLine>{t.calc.genRule}</RuleLine>
      <p className="calc-note">
        <RichText text={t.calc.genNote} />
      </p>
    </CalcBox>
  );
}
