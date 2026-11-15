// Calculator math. Pure functions, no React: used by the calculators on screen, by the
// printed tables in the Calculators section, and by the content check.
// Supplies always round UP.

import {
  ADULT_EQUIV_KCAL,
  APPLIANCE_WATTS,
  BRIQUETTES_PER_25F,
  BRIQUETTES_PER_INCH,
  DRUM_GAL,
  DUTCH_BASE_TEMP_F,
  DUTCH_OVEN_TABLE,
  FLOZ_PER_GAL,
  FT2_TO_M2,
  FT3_TO_L,
  GAL_TO_L,
  HARDY_DAYS_BEFORE,
  HOT_WEATHER_FACTOR,
  JUG_GAL,
  KCAL_PER_DAY,
  KIT_DAYS,
  KIT_ITEM_IDS,
  LB_TO_KG,
  OIL_GAL_PER_ADULT_YEAR,
  PET_WATER_FLOZ_PER_LB_DAY,
  PREGNANT_NURSING_EXTRA_KCAL,
  PROPANE_HOURS_PER_20LB,
  STAPLE_IDS,
  STAPLES_LB_PER_ADULT_YEAR,
  TENDER_DAYS_AFTER,
  WATER_GAL_PER_PERSON_DAY,
  type ApplianceId,
  type KitItemId,
  type StapleId,
} from './rules';

export interface Family {
  adults: number; // 18–64
  olderAdults: number; // 65+
  teens: number; // 13–17
  children: number; // 2–12
  babies: number; // under 2
  pregnantOrNursing: number; // not more than adults + olderAdults + teens
  pets: { weightLb: number }[];
  days: number;
  hot: boolean;
  lastFrost: string; // "MM-DD"
  firstFrost: string; // "MM-DD" or ""
}

/** Round up, ignoring tiny floating-point noise (so 56.0000001 jugs-worth stays 56). */
const up = (n: number) => Math.ceil(n - 1e-9);

export function people(f: Family): number {
  return f.adults + f.olderAdults + f.teens + f.children + f.babies;
}

// ---- water ----
export function waterNeed(f: Family) {
  const factor = f.hot ? HOT_WEATHER_FACTOR : 1;
  const peopleGal = people(f) * WATER_GAL_PER_PERSON_DAY * factor * f.days;
  const petLb = f.pets.reduce((s, p) => s + p.weightLb, 0);
  const petGal = (petLb * PET_WATER_FLOZ_PER_LB_DAY * factor * f.days) / FLOZ_PER_GAL;
  const totalGal = peopleGal + petGal;
  return {
    peopleGal,
    petGal,
    totalGal,
    liters: totalGal * GAL_TO_L,
    jugs5: up(totalGal / JUG_GAL),
    drums55: up(totalGal / DRUM_GAL),
  };
}

// ---- food ----
export function caloriesPerDay(f: Family): number {
  return (
    f.adults * KCAL_PER_DAY.adult +
    f.olderAdults * KCAL_PER_DAY.olderAdult +
    f.teens * KCAL_PER_DAY.teen +
    f.children * KCAL_PER_DAY.child +
    f.babies * KCAL_PER_DAY.baby +
    f.pregnantOrNursing * PREGNANT_NURSING_EXTRA_KCAL
  );
}

/** Who adds what, for the rule line ("2,500 × 2 adults + ..."). Babies get no number. */
export function calorieBreakdown(f: Family): { group: 'adult' | 'olderAdult' | 'teen' | 'child' | 'pregnantOrNursing'; count: number; kcal: number }[] {
  const rows = [
    { group: 'adult' as const, count: f.adults, kcal: KCAL_PER_DAY.adult },
    { group: 'olderAdult' as const, count: f.olderAdults, kcal: KCAL_PER_DAY.olderAdult },
    { group: 'teen' as const, count: f.teens, kcal: KCAL_PER_DAY.teen },
    { group: 'child' as const, count: f.children, kcal: KCAL_PER_DAY.child },
    { group: 'pregnantOrNursing' as const, count: f.pregnantOrNursing, kcal: PREGNANT_NURSING_EXTRA_KCAL },
  ];
  return rows.filter((r) => r.count > 0);
}

export function adultEquivalents(f: Family): number {
  return caloriesPerDay(f) / ADULT_EQUIV_KCAL;
}

export function staples(f: Family): { id: StapleId; lb: number; kg: number }[] {
  const share = (adultEquivalents(f) * f.days) / 365;
  return STAPLE_IDS.map((id) => {
    const lb = up(STAPLES_LB_PER_ADULT_YEAR[id] * share);
    return { id, lb, kg: up(lb * LB_TO_KG) };
  });
}

export function oilGal(f: Family): number {
  return up(((OIL_GAL_PER_ADULT_YEAR * adultEquivalents(f) * f.days) / 365) * 10) / 10;
}

// ---- cooking fuel ----
export function propaneTanks(hoursPerDay: number, days: number): number {
  return up((hoursPerDay * days) / PROPANE_HOURS_PER_20LB);
}

// ---- generator ----
export function generator(selected: ApplianceId[]) {
  const running = selected.reduce((s, id) => s + APPLIANCE_WATTS[id].running, 0);
  const extraStart = selected.reduce((m, id) => Math.max(m, APPLIANCE_WATTS[id].extraStart), 0);
  return { running, extraStart, total: running + extraStart };
}

// ---- Dutch oven ----
export function dutchOven(sizeIn: number, tempF: number) {
  const hit = DUTCH_OVEN_TABLE[sizeIn]?.[tempF];
  if (hit) return { under: hit[0], top: hit[1], fromTable: true };
  const total = Math.max(
    0,
    Math.round(BRIQUETTES_PER_INCH * sizeIn + (BRIQUETTES_PER_25F * (tempF - DUTCH_BASE_TEMP_F)) / 25),
  );
  const under = Math.round(total / 3);
  return { under, top: total - under, fromTable: false };
}

// ---- garden ----
export function bedArea(beds: { lengthFt: number; widthFt: number; depthIn: number }[]) {
  const sqft = beds.reduce((s, b) => s + b.lengthFt * b.widthFt, 0);
  const cuft = beds.reduce((s, b) => s + (b.lengthFt * b.widthFt * b.depthIn) / 12, 0);
  return { sqft, m2: sqft * FT2_TO_M2, cuft, cuyd: cuft / 27, liters: cuft * FT3_TO_L };
}

// Dates are "MM-DD" in a fixed non-leap year, so results never depend on time zones.
const YEAR = 2025;
const DAY_MS = 86_400_000;
function dayOfYear(mmdd: string): number {
  const [m, d] = mmdd.split('-').map(Number);
  return Math.round((Date.UTC(YEAR, m - 1, d) - Date.UTC(YEAR, 0, 1)) / DAY_MS);
}
function fromDayOfYear(n: number): string {
  const wrapped = ((n % 365) + 365) % 365;
  const dt = new Date(Date.UTC(YEAR, 0, 1) + wrapped * DAY_MS);
  return `${String(dt.getUTCMonth() + 1).padStart(2, '0')}-${String(dt.getUTCDate()).padStart(2, '0')}`;
}

export function plantingDates(lastFrost: string, firstFrost: string) {
  const last = dayOfYear(lastFrost);
  let seasonDays: number | null = null;
  if (firstFrost) seasonDays = (((dayOfYear(firstFrost) - last) % 365) + 365) % 365;
  return {
    hardyFrom: fromDayOfYear(last - HARDY_DAYS_BEFORE.from),
    hardyTo: fromDayOfYear(last - HARDY_DAYS_BEFORE.to),
    tenderFrom: fromDayOfYear(last + TENDER_DAYS_AFTER),
    seasonDays,
  };
}

// ---- 72-hour kit ----
export function kitList(f: Family): { id: KitItemId; qty: number | null; show: boolean }[] {
  const n = people(f);
  const water = up(waterNeed({ ...f, days: KIT_DAYS }).totalGal);
  const perPerson: Partial<Record<KitItemId, number>> = {
    water,
    light: n,
    whistle: n,
    sleeping: n,
    clothes: n,
    'power-bank': f.adults + f.olderAdults,
  };
  return KIT_ITEM_IDS.map((id) => ({
    id,
    qty: perPerson[id] ?? null,
    show: id === 'baby' ? f.babies > 0 : id === 'pets' ? f.pets.length > 0 : true,
  }));
}
