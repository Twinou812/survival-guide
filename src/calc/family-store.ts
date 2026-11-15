// Cleaning and limits for the family details saved on this device. Pure functions (no
// React, no storage), so the content check can test them. Saved data may be old,
// edited, or broken; it must never crash the app.

import type { Family } from './math';
import { DEFAULT_FAMILY } from './rules';

export const LIMITS = {
  count: [0, 20],
  petLb: [1, 250],
  pets: 10,
  days: [1, 3650],
  bedFt: [1, 100],
  depthIn: [1, 36],
  hoursPerDay: [0, 12],
} as const;

/** A whole number between min and max. Empty or not a number gives `fallback`. */
export function clampInt(v: unknown, min: number, max: number, fallback: number): number {
  const n = clampNum(v, min, max, fallback);
  return Math.min(max, Math.max(min, Math.round(n)));
}

/** A number between min and max (decimals kept). Empty or not a number gives `fallback`. */
export function clampNum(v: unknown, min: number, max: number, fallback: number): number {
  if (typeof v === 'string' && v.trim() === '') return fallback;
  const n = typeof v === 'number' ? v : typeof v === 'string' ? Number(v) : NaN;
  if (!Number.isFinite(n)) return fallback;
  return Math.min(max, Math.max(min, n));
}

/** "MM-DD" that is a real day of a non-leap year. */
export function isMonthDay(v: unknown): v is string {
  if (typeof v !== 'string' || !/^\d\d-\d\d$/.test(v)) return false;
  const [m, d] = v.split('-').map(Number);
  const dt = new Date(Date.UTC(2025, m - 1, d));
  return dt.getUTCMonth() === m - 1 && dt.getUTCDate() === d;
}

/** Turns anything (parsed JSON, a JSON string, garbage) into a valid Family. */
export function sanitize(raw: unknown): Family {
  let r: unknown = raw;
  if (typeof r === 'string') {
    try {
      r = JSON.parse(r);
    } catch {
      r = {};
    }
  }
  const o = (typeof r === 'object' && r !== null ? r : {}) as Record<string, unknown>;
  const D = DEFAULT_FAMILY;
  const [cMin, cMax] = LIMITS.count;
  const count = (k: keyof Family) => clampInt(o[k], cMin, cMax, D[k] as number);

  const adults = count('adults');
  const olderAdults = count('olderAdults');
  const teens = count('teens');
  const pets = (Array.isArray(o.pets) ? o.pets : []).slice(0, LIMITS.pets).map((p) => ({
    weightLb: clampNum((p as { weightLb?: unknown })?.weightLb, LIMITS.petLb[0], LIMITS.petLb[1], 20),
  }));

  return {
    adults,
    olderAdults,
    teens,
    children: count('children'),
    babies: count('babies'),
    pregnantOrNursing: Math.min(count('pregnantOrNursing'), adults + olderAdults + teens),
    pets,
    days: clampInt(o.days, LIMITS.days[0], LIMITS.days[1], D.days),
    hot: typeof o.hot === 'boolean' ? o.hot : D.hot,
    lastFrost: isMonthDay(o.lastFrost) ? o.lastFrost : D.lastFrost,
    firstFrost: o.firstFrost === '' || isMonthDay(o.firstFrost) ? (o.firstFrost as string) : D.firstFrost,
  };
}
