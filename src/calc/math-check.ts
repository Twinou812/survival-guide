// Known-answer checks for the calculator math. Run by scripts/content-check.ts on
// every `npm run dev` and `npm run build`, so a wrong number stops the build.
// Expected values come from the guide itself (worked examples and tables).

import { DEFAULT_FAMILY } from './rules';
import {
  adultEquivalents,
  bedArea,
  calorieBreakdown,
  caloriesPerDay,
  dutchOven,
  generator,
  kitList,
  oilGal,
  plantingDates,
  propaneTanks,
  staples,
  waterNeed,
  type Family,
} from './math';
import { clampInt, clampNum, sanitize } from './family-store';

export function checkCalcMath(): string[] {
  const out: string[] = [];
  const near = (a: number, b: number) => Math.abs(a - b) < 0.01;
  function expect(name: string, actual: unknown, expected: unknown) {
    const ok =
      typeof actual === 'number' && typeof expected === 'number'
        ? near(actual, expected)
        : JSON.stringify(actual) === JSON.stringify(expected);
    if (!ok) out.push(`${name}: got ${JSON.stringify(actual)}, expected ${JSON.stringify(expected)}`);
  }
  const fam = (p: Partial<Family>): Family => ({ ...DEFAULT_FAMILY, ...p });
  const zero = fam({ adults: 0, olderAdults: 0, teens: 0, children: 0, babies: 0, pregnantOrNursing: 0, pets: [] });

  // ---- water (Ready.gov: 1 gallon per person per day) ----
  const w = waterNeed(fam({ days: 14 }));
  expect('water default 14 days total', w.totalGal, 56);
  expect('water default 14 days jugs', w.jugs5, 12);
  expect('water default 14 days drums', w.drums55, 2);
  expect('water default 14 days liters', w.liters, 211.96);
  expect('water hot weather doubles', waterNeed(fam({ days: 14, hot: true })).totalGal, 112);
  const wp = waterNeed(fam({ adults: 1, children: 0, days: 3, pets: [{ weightLb: 64 }] }));
  expect('water 64 lb pet 3 days', wp.petGal, 1.5);
  expect('water 1 adult + pet 3 days', wp.totalGal, 4.5);

  // ---- empty family: zeros, never NaN ----
  const wz = waterNeed(zero);
  expect('water empty family', [wz.totalGal, wz.jugs5, wz.drums55], [0, 0, 0]);
  expect('calories empty family', caloriesPerDay(zero), 0);
  expect('adult equivalents empty family', adultEquivalents(zero), 0);
  expect('staples empty family', staples(zero).every((s) => s.lb === 0 && s.kg === 0), true);
  expect('oil empty family', oilGal(zero), 0);
  expect('kit empty family', kitList(zero).every((k) => k.qty === null || k.qty === 0), true);
  const anyNaN = (v: unknown): boolean =>
    typeof v === 'number' ? !Number.isFinite(v) : typeof v === 'object' && v !== null ? Object.values(v).some(anyNaN) : false;
  expect('no NaN for empty family', anyNaN([wz, staples(zero), kitList(zero), caloriesPerDay(zero)]), false);

  // ---- food (DGA calories, BYU staples) ----
  expect('calories default family', caloriesPerDay(DEFAULT_FAMILY), 8600);
  expect('calories + pregnant or nursing', caloriesPerDay(fam({ pregnantOrNursing: 1 })), 9050);
  expect('calorie breakdown default', calorieBreakdown(DEFAULT_FAMILY), [
    { group: 'adult', count: 2, kcal: 2500 },
    { group: 'child', count: 2, kcal: 1800 },
  ]);
  const mixed = fam({ olderAdults: 1, babies: 1, pregnantOrNursing: 1 });
  expect('calorie breakdown sums to the total', calorieBreakdown(mixed).reduce((s, r) => s + r.count * r.kcal, 0), caloriesPerDay(mixed));
  expect('calorie breakdown lists only groups present, no babies', calorieBreakdown(mixed).map((r) => r.group), ['adult', 'olderAdult', 'child', 'pregnantOrNursing']);
  expect('adult equivalents default', adultEquivalents(DEFAULT_FAMILY), 3.44);
  const wheat = (f: Family) => staples(f).find((s) => s.id === 'wheat')!.lb;
  expect('wheat 1 adult 1 year', wheat(fam({ adults: 1, children: 0, days: 365 })), 132);
  expect('wheat default 14 days', wheat(fam({ days: 14 })), 18);

  // ---- cooking fuel (Utah DEM: 18 to 20 hours per 20-lb tank; use 18) ----
  expect('propane 1 h/day 14 days', propaneTanks(1, 14), 1);
  expect('propane 2 h/day 14 days', propaneTanks(2, 14), 2);
  expect('propane 0 h/day', propaneTanks(0, 14), 0);

  // ---- generator (Power, Light, and Sanitation worked example) ----
  expect('generator worked example', generator(['fridge', 'sump', 'microwave']), { running: 2750, extraStart: 2200, total: 4950 });
  expect('generator nothing selected', generator([]), { running: 0, extraStart: 0, total: 0 });

  // ---- Dutch oven (Cooking table, then the rule of thumb) ----
  const table: [number, number, number, number][] = [
    [10, 325, 7, 13], [10, 350, 7, 15], [10, 375, 8, 16], [10, 400, 8, 18],
    [12, 325, 8, 16], [12, 350, 9, 17], [12, 375, 9, 19], [12, 400, 10, 20],
  ];
  for (const [size, temp, under, top] of table) {
    expect(`dutch oven ${size}-in ${temp}F`, dutchOven(size, temp), { under, top, fromTable: true });
  }
  expect('dutch oven 14-in 325F rule', dutchOven(14, 325), { under: 9, top: 19, fromTable: false });
  expect('dutch oven 8-in 300F rule', dutchOven(8, 300), { under: 5, top: 9, fromTable: false });

  // ---- garden ----
  const a = bedArea([{ lengthFt: 4, widthFt: 8, depthIn: 12 }]);
  expect('bed sqft', a.sqft, 32);
  expect('bed cuft', a.cuft, 32);
  expect('bed cuyd', a.cuyd, 32 / 27);
  expect('bed liters', a.liters, 906.144);
  expect('bed m2', a.m2, 2.9728);
  expect('bed none', bedArea([]), { sqft: 0, m2: 0, cuft: 0, cuyd: 0, liters: 0 });
  expect('planting Apr 15', plantingDates('04-15', ''), { hardyFrom: '02-14', hardyTo: '03-01', tenderFrom: '04-22', seasonDays: null });
  const jan = plantingDates('01-20', '');
  expect('planting Jan 20 wraps year', [jan.hardyFrom, jan.hardyTo], ['11-21', '12-06']);
  expect('season Apr 15 to Oct 15', plantingDates('04-15', '10-15').seasonDays, 183);

  // ---- 72-hour kit ----
  const kit = kitList(DEFAULT_FAMILY);
  const qty = (id: string) => kit.find((k) => k.id === id)?.qty;
  expect('kit lights default family', qty('light'), 4);
  expect('kit power banks default family', qty('power-bank'), 2);
  expect('kit water default family (3 days)', qty('water'), 12);
  expect('kit baby row hidden with no babies', kit.find((k) => k.id === 'baby')?.show, false);
  expect('kit baby row shown with a baby', kitList(fam({ babies: 1 })).find((k) => k.id === 'baby')?.show, true);

  // ---- saved family data (bad or old data must never crash the app) ----
  expect('sanitize bad JSON', sanitize('{bad'), DEFAULT_FAMILY);
  expect('sanitize null', sanitize(null), DEFAULT_FAMILY);
  const s = sanitize({ adults: '3', teens: -2, children: 1.7, pets: [{ weightLb: 900 }], days: 0 });
  expect('sanitize mixed values', [s.adults, s.teens, s.children, s.pets[0]?.weightLb, s.days], [3, 0, 2, 250, 1]);
  expect('sanitize too many pregnant or nursing', sanitize({ adults: 1, pregnantOrNursing: 4 }).pregnantOrNursing, 1);
  expect('sanitize impossible date', sanitize({ lastFrost: '02-30' }).lastFrost, '04-15');
  expect('sanitize bad first frost', sanitize({ firstFrost: 'soon' }).firstFrost, '');
  expect('sanitize keeps good first frost', sanitize({ firstFrost: '10-15' }).firstFrost, '10-15');
  expect('sanitize pets not a list', sanitize({ pets: 'dog' }).pets, []);
  expect('sanitize at most 10 pets', sanitize({ pets: Array(15).fill({ weightLb: 10 }) }).pets.length, 10);
  expect('sanitize hot must be true/false', sanitize({ hot: 'yes' }).hot, false);
  expect('clampInt empty uses fallback', clampInt('', 0, 20, 5), 5);
  expect('clampInt rounds and clamps', [clampInt('7.6', 0, 20, 0), clampInt(-3, 0, 20, 0), clampInt(999, 0, 20, 0)], [8, 0, 20]);
  expect('clampNum keeps decimals', clampNum('1.5', 0, 12, 1), 1.5);
  expect('clampNum not a number', clampNum('abc', 0, 12, 1), 1);

  return out;
}
