import { useState } from 'react';
import { useSettings } from '../settings';
import { useFamily } from './family';
import { LIMITS } from './family-store';
import { fill, fmt } from './format';
import { people, type Family } from './math';
import { Stepper } from './ui';

type CountKey = 'adults' | 'olderAdults' | 'teens' | 'children' | 'babies';
const COUNTS: CountKey[] = ['adults', 'olderAdults', 'teens', 'children', 'babies'];
const SHORT = {
  adults: 'shortAdults',
  olderAdults: 'shortOlderAdults',
  teens: 'shortTeens',
  children: 'shortChildren',
  babies: 'shortBabies',
} as const;

/** "2 adults · 2 children · 1 pet" */
export function familySummary(f: Family, t: ReturnType<typeof useSettings>['t'], locale: string): string {
  const parts = COUNTS.filter((k) => f[k] > 0).map((k) => `${fmt(f[k], locale)} ${t.calc[SHORT[k]]}`);
  if (f.pets.length) parts.push(`${fmt(f.pets.length, locale)} ${t.calc.shortPets}`);
  return parts.join(' · ');
}

/** The family, entered once and used by every calculator. `compact` shows one line
 *  with an Edit button (used where a calculator sits inside another section). */
export function FamilyCard({ compact = false }: { compact?: boolean }) {
  const { t, locale } = useSettings();
  const { family, isDefault, set, clear } = useFamily();
  const [open, setOpen] = useState(false);
  const [cMin, cMax] = LIMITS.count;

  if (compact && !open) {
    return (
      <div className="family-line">
        <span>
          <strong>{t.calc.familyTitle}:</strong> {familySummary(family, t, locale) || t.calc.familyEmpty}
        </span>
        <button type="button" className="btn btn-quiet" aria-expanded={false} onClick={() => setOpen(true)}>
          {t.calc.familyEdit}
        </button>
      </div>
    );
  }

  const maxPregnant = family.adults + family.olderAdults + family.teens;
  return (
    <section className="calc family-card" aria-label={t.calc.familyTitle}>
      <h3 className="calc-title">{t.calc.familyTitle}</h3>
      {isDefault && <p className="calc-note">{t.calc.familyExample}</p>}
      {COUNTS.map((k) => (
        <Stepper key={k} label={t.calc[k]} value={family[k]} min={cMin} max={cMax} onChange={(v) => set({ [k]: v })} />
      ))}
      {maxPregnant > 0 && (
        <Stepper
          label={t.calc.pregnantOrNursing}
          value={family.pregnantOrNursing}
          min={0}
          max={maxPregnant}
          onChange={(v) => set({ pregnantOrNursing: v })}
        />
      )}

      <fieldset className="pets">
        <legend>{t.calc.pets}</legend>
        {family.pets.map((p, i) => (
          <div key={i} className="pet-row">
            <Stepper
              label={fill(t.calc.petWeight, { n: i + 1 })}
              value={p.weightLb}
              min={LIMITS.petLb[0]}
              max={LIMITS.petLb[1]}
              step={5}
              onChange={(v) => set({ pets: family.pets.map((q, j) => (j === i ? { weightLb: v } : q)) })}
            />
            <button
              type="button"
              className="btn btn-quiet"
              onClick={() => set({ pets: family.pets.filter((_, j) => j !== i) })}
            >
              {fill(t.calc.petRemove, { n: i + 1 })}
            </button>
          </div>
        ))}
        {family.pets.length < LIMITS.pets && (
          <button type="button" className="btn" onClick={() => set({ pets: [...family.pets, { weightLb: 20 }] })}>
            {t.calc.petAdd}
          </button>
        )}
      </fieldset>

      <label className="choice">
        <input type="checkbox" checked={family.hot} onChange={(e) => set({ hot: e.target.checked })} />
        <span>{t.calc.hot}</span>
      </label>

      {people(family) === 0 && <p className="calc-note">{t.calc.familyEmpty}</p>}

      <div className="family-footer">
        <small className="muted">{t.calc.familySaved}</small>
        <span className="family-actions">
          {!isDefault && (
            <button type="button" className="btn btn-quiet" onClick={clear}>
              {t.calc.familyClear}
            </button>
          )}
          {compact && (
            <button type="button" className="btn" onClick={() => setOpen(false)}>
              {t.calc.familyDone}
            </button>
          )}
        </span>
      </div>
    </section>
  );
}
