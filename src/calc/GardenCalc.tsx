import { useId, useState } from 'react';
import { RichText } from '../components/RichText';
import { useSettings } from '../settings';
import { useFamily } from './family';
import { LIMITS } from './family-store';
import { fill, fmt } from './format';
import { bedArea, plantingDates } from './math';
import { CalcBox, ResultRow, RuleLine, Stepper } from './ui';

type Bed = { lengthFt: number; widthFt: number; depthIn: number };
const MAX_BEDS = 20;
const DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

/** "04-22" → "Apr 22" in the reader's language (no year). */
function showDate(mmdd: string, locale: string): string {
  const [m, d] = mmdd.split('-').map(Number);
  return new Intl.DateTimeFormat(locale, { month: 'short', day: 'numeric', timeZone: 'UTC' }).format(new Date(Date.UTC(2025, m - 1, d)));
}

function MonthDay({ label, value, optional, onChange }: { label: string; value: string; optional?: boolean; onChange: (v: string) => void }) {
  const { t, locale } = useSettings();
  const mId = useId();
  const dId = useId();
  const [m, d] = value ? value.split('-').map(Number) : [0, 0];
  const pad = (n: number) => String(n).padStart(2, '0');
  const monthName = (i: number) => new Intl.DateTimeFormat(locale, { month: 'long', timeZone: 'UTC' }).format(new Date(Date.UTC(2025, i, 1)));
  return (
    <fieldset className="span-picker">
      <legend>{label}</legend>
      <div className="chips">
        <label className="visually-hidden" htmlFor={mId}>{t.calc.month}</label>
        <select
          id={mId}
          value={m}
          onChange={(e) => {
            const nm = Number(e.target.value);
            if (!nm) return onChange('');
            onChange(`${pad(nm)}-${pad(Math.min(d || 1, DAYS_IN_MONTH[nm - 1]))}`);
          }}
        >
          {optional && <option value={0}>{t.calc.notKnown}</option>}
          {DAYS_IN_MONTH.map((_, i) => (
            <option key={i} value={i + 1}>{monthName(i)}</option>
          ))}
        </select>
        {m > 0 && (
          <>
            <label className="visually-hidden" htmlFor={dId}>{t.calc.day}</label>
            <select id={dId} value={d} onChange={(e) => onChange(`${pad(m)}-${pad(Number(e.target.value))}`)}>
              {Array.from({ length: DAYS_IN_MONTH[m - 1] }, (_, i) => (
                <option key={i} value={i + 1}>{fmt(i + 1, locale)}</option>
              ))}
            </select>
          </>
        )}
      </div>
    </fieldset>
  );
}

export function GardenCalc() {
  const { t, locale } = useSettings();
  const { family, set } = useFamily();
  const [beds, setBeds] = useState<Bed[]>([{ lengthFt: 4, widthFt: 8, depthIn: 12 }]);
  const a = bedArea(beds);
  const p = plantingDates(family.lastFrost, family.firstFrost);
  const edit = (i: number, patch: Partial<Bed>) => setBeds((b) => b.map((x, j) => (j === i ? { ...x, ...patch } : x)));
  return (
    <CalcBox
      title={t.calc.gardenTitle}
      inputs={
        <>
          {beds.map((b, i) => (
            <fieldset key={i} className="pets pet-row">
              <legend>{fill(t.calc.bed, { n: i + 1 })}</legend>
              <Stepper label={t.calc.bedLength} value={b.lengthFt} min={LIMITS.bedFt[0]} max={LIMITS.bedFt[1]} onChange={(v) => edit(i, { lengthFt: v })} />
              <Stepper label={t.calc.bedWidth} value={b.widthFt} min={LIMITS.bedFt[0]} max={LIMITS.bedFt[1]} onChange={(v) => edit(i, { widthFt: v })} />
              <Stepper label={t.calc.bedDepth} value={b.depthIn} min={LIMITS.depthIn[0]} max={LIMITS.depthIn[1]} onChange={(v) => edit(i, { depthIn: v })} />
              {beds.length > 1 && (
                <button type="button" className="btn btn-quiet" onClick={() => setBeds((x) => x.filter((_, j) => j !== i))}>
                  {fill(t.calc.bedRemove, { n: i + 1 })}
                </button>
              )}
            </fieldset>
          ))}
          {beds.length < MAX_BEDS && (
            <button type="button" className="btn" onClick={() => setBeds((x) => [...x, { lengthFt: 4, widthFt: 8, depthIn: 12 }])}>
              {t.calc.bedAdd}
            </button>
          )}
          <MonthDay label={t.calc.lastFrost} value={family.lastFrost} onChange={(v) => set({ lastFrost: v })} />
          <MonthDay label={t.calc.firstFrost} value={family.firstFrost} optional onChange={(v) => set({ firstFrost: v })} />
        </>
      }
    >
      <ResultRow label={t.calc.gardenArea} value={fill(t.calc.sqftM2, { ft: fmt(a.sqft, locale), m: fmt(a.m2, locale, 1) })} />
      <ResultRow
        label={t.calc.gardenSoil}
        value={fill(t.calc.soilAmount, { yd: fmt(a.cuyd, locale, 1) })}
        detail={fill(t.calc.soilDetail, { ft: fmt(a.cuft, locale), l: fmt(a.liters, locale) })}
      />
      <ResultRow label={t.calc.hardy} value={fill(t.calc.hardyDates, { from: showDate(p.hardyFrom, locale), to: showDate(p.hardyTo, locale) })} />
      <ResultRow label={t.calc.tender} value={fill(t.calc.tenderDates, { date: showDate(p.tenderFrom, locale) })} />
      {p.seasonDays !== null && <ResultRow label={t.calc.season} value={fill(t.calc.seasonDays, { n: fmt(p.seasonDays, locale) })} />}
      <RuleLine>{t.calc.gardenRule}</RuleLine>
      <p className="calc-note">
        <RichText text={t.calc.gardenSweet} />
      </p>
    </CalcBox>
  );
}
