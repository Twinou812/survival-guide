import { createContext, useEffect, useId, useState, type ReactNode } from 'react';
import { useSettings } from '../settings';
import { useFamily } from './family';
import { clampInt, clampNum, LIMITS } from './family-store';
import { SPANS } from './rules';

/** The id of the section a calculator is shown in (set by SectionPage). */
export const SectionIdContext = createContext('');

/** A number with big − / + buttons. Typing works too; the value is checked on blur. */
export function Stepper(props: {
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  decimals?: boolean;
  onChange: (v: number) => void;
}) {
  const { t } = useSettings();
  const { label, value, min, max, step = 1, decimals = false, onChange } = props;
  const id = useId();
  const [text, setText] = useState(String(value));
  useEffect(() => setText(String(value)), [value]);
  const commit = (raw: string) => {
    const v = decimals ? clampNum(raw, min, max, value) : clampInt(raw, min, max, value);
    if (v !== value) onChange(v);
    setText(String(v));
  };
  const bump = (d: number) => onChange(Math.min(max, Math.max(min, Math.round((value + d) * 100) / 100)));
  return (
    <div className="stepper">
      <label htmlFor={id}>{label}</label>
      <div className="stepper-controls">
        <button type="button" className="step-btn" aria-label={`${t.calc.decrease}: ${label}`} disabled={value <= min} onClick={() => bump(-step)}>
          −
        </button>
        <input
          id={id}
          type="text"
          inputMode={decimals ? 'decimal' : 'numeric'}
          value={text}
          onChange={(e) => setText(e.target.value)}
          onBlur={(e) => commit(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') commit((e.target as HTMLInputElement).value);
          }}
        />
        <button type="button" className="step-btn" aria-label={`${t.calc.increase}: ${label}`} disabled={value >= max} onClick={() => bump(step)}>
          +
        </button>
      </div>
    </div>
  );
}

/** One result: label on the start side, the number big on the end side. */
export function ResultRow({ label, value, detail }: { label: string; value: string; detail?: string }) {
  return (
    <div className="calc-row">
      <span className="calc-label">{label}</span>
      <span className="calc-value">
        <strong>{value}</strong>
        {detail && <span className="calc-detail">{detail}</span>}
      </span>
    </div>
  );
}

/** The rule a result came from, e.g. "1 gallon × 4 people × 14 days". */
export function RuleLine({ children }: { children: ReactNode }) {
  return <p className="calc-rule">{children}</p>;
}

/** The box around one calculator. Results inside are announced politely. */
export function CalcBox({ title, inputs, children }: { title: string; inputs?: ReactNode; children: ReactNode }) {
  const id = useId();
  return (
    <section className="calc" aria-labelledby={id}>
      <h3 className="calc-title" id={id}>{title}</h3>
      {inputs}
      <div className="calc-results" aria-live="polite">{children}</div>
    </section>
  );
}

/** 3 days / 2 weeks / 90 days / 1 year / other. Shared by every calculator. */
export function SpanPicker() {
  const { t } = useSettings();
  const { family, set } = useFamily();
  const preset = (SPANS as readonly number[]).includes(family.days);
  const [other, setOther] = useState(false);
  // "Other" shows whenever the days aren't one of the presets, so every picker on the
  // page agrees with the shared number of days.
  const showOther = other || !preset;
  const labels: Record<number, string> = { 3: t.calc.span3, 14: t.calc.span14, 90: t.calc.span90, 365: t.calc.span365 };
  return (
    <fieldset className="span-picker">
      <legend>{t.calc.span}</legend>
      <div className="chips">
        {SPANS.map((d) => (
          <button
            key={d}
            type="button"
            className="chip"
            aria-pressed={!showOther && family.days === d}
            onClick={() => {
              setOther(false);
              set({ days: d });
            }}
          >
            {labels[d]}
          </button>
        ))}
        <button type="button" className="chip" aria-pressed={showOther} onClick={() => setOther(true)}>
          {t.calc.spanOther}
        </button>
      </div>
      {showOther && (
        <Stepper label={t.calc.spanDays} value={family.days} min={LIMITS.days[0]} max={LIMITS.days[1]} onChange={(days) => set({ days })} />
      )}
    </fieldset>
  );
}
