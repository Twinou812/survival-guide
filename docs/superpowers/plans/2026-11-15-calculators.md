# Calculators (Section 12) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** A working Calculators section: a "Your family" card saved on the device, seven calculators, and printed tables built from the same math.

**Architecture:** Pure rules and math in `src/calc/` (no React), so the app, the content check and the section's printed tables all use the same numbers. A new content block `{ type: 'calc', calc: CalcId }` renders a React calculator. One app-wide family provider stores the family in localStorage (`sg-family`), next to settings.

**Tech Stack:** React 19, TypeScript, Vite 7, plain CSS. No new dependencies.

**Spec:** `docs/superpowers/specs/2026-11-15-calculators-design.md`

## Global Constraints

- No new npm dependencies. Nothing leaves the device. localStorage reads and writes are wrapped in try/catch, like `src/settings.tsx`.
- Every constant lives in `src/calc/rules.ts` with a `// Source:` comment. No number in UI or section files except through rules/math.
- Supplies always round **up**, to whole jugs, drums, tanks, bags and pounds.
- Results show US and metric side by side (gallons + liters, lb + kg, ft² + m², ft³/yd³ + liters, °F + °C).
- Each result shows its rule line, e.g. "1 gallon × 4 people × 14 days".
- UI strings go in `src/i18n/en.ts`. CSS uses logical properties and works at 360 px wide, large text, and dark mode.
- Inputs have real `<label>`s. Steppers are at least 44 px. The results container has `aria-live="polite"`.
- Content-check rule: a written section's `number` equals its position in `sections/index.ts`. Don't reorder sections.
- The user types git add/commit/push. "Deliver" steps copy changed files into `C:\Users\Kattner\Desktop\survival-guide-phase1\survival-guide` (stage the local file first if it may have changed; copy to a new `/mnt/user-data/outputs/<dir>/` before `device_commit_files`).
- Sandbox checks (npm is blocked here): content check via `node --experimental-strip-types` with the `.ts` resolve hook described in `claude/build-plan-updates.md`; type check with global `tsc --noEmit -p .` (or `--ignoreConfig` on the listed files); test build via esbuild + puppeteer as in `claude/build-plan.md`.

## Review Focus

1. **Zero or empty family** (all counts 0, no pets): every calculator shows 0 or "add people" and never shows NaN, Infinity or a negative. *Test in Task 1.*
2. **Corrupt or old saved data** in `sg-family` (bad JSON, missing fields, strings, negative numbers, a removed field): loads the defaults merged with whatever is valid, and never crashes the app. *Test in Task 2.*
3. **Typing into number fields** (empty field, "1.5" people, "-3", "999"): counts clamp to whole numbers 0–20, pet weight 1–250 lb, days 1–3650, bed size 1–100 ft, depth 1–36 in; an empty field shows the last valid value on blur. *Test in Task 2 (`clampInt`, `clampNum`).*
4. **Pregnant or nursing larger than the number of adults and teens:** clamped to `adults + olderAdults + teens`. *Test in Task 2.*
5. **Last-frost date near a year boundary** (e.g. Jan 20 in a hot climate, or a Dec date): planting dates wrap correctly across the new year and print as month + day, with no year. *Test in Task 1.*

---

### Task 1: Rules and math (pure, checked on every `npm run dev`)

**Files:**
- Create: `src/calc/rules.ts`, `src/calc/math.ts`, `src/calc/math-check.ts`
- Modify: `scripts/content-check.ts` (call `checkCalcMath()` and push its messages into `errors`)

**Interfaces:**
- Produces (`math.ts`):
  - `interface Family { adults: number; olderAdults: number; teens: number; children: number; babies: number; pregnantOrNursing: number; pets: { weightLb: number }[]; days: number; hot: boolean; lastFrost: string /* "MM-DD" */; firstFrost: string /* "MM-DD" or "" */ }`
  - `people(f: Family): number` (all humans, babies included)
  - `waterNeed(f: Family): { peopleGal: number; petGal: number; totalGal: number; liters: number; jugs5: number; drums55: number }` (unrounded gallons; `jugs5`/`drums55` already rounded up)
  - `caloriesPerDay(f: Family): number`, `adultEquivalents(f: Family): number`
  - `staples(f: Family): { id: StapleId; lb: number; kg: number }[]` plus `oilGal(f: Family): number`, BYU amounts × adultEquivalents × days/365, rounded up to whole lb (oil to 0.1 gal)
  - `propaneTanks(hoursPerDay: number, days: number): number`
  - `generator(selected: ApplianceId[]): { running: number; extraStart: number; total: number }`
  - `dutchOven(sizeIn: number, tempF: number): { under: number; top: number; fromTable: boolean }`
  - `bedArea(beds: { lengthFt: number; widthFt: number; depthIn: number }[]): { sqft: number; m2: number; cuft: number; cuyd: number; liters: number }`
  - `plantingDates(lastFrost: "MM-DD", firstFrost: "MM-DD" | ""): { hardyFrom: string; hardyTo: string; tenderFrom: string; seasonDays: number | null }` (output "MM-DD")
  - `kitList(f: Family): { id: KitItemId; qty: number | null; show: boolean }[]`
- Produces (`math-check.ts`): `checkCalcMath(): string[]` (empty = pass; each message names the failing case)

**Values (`rules.ts`), each with its source comment:**
- `WATER_GAL_PER_PERSON_DAY = 1`; `HOT_WEATHER_FACTOR = 2` (Ready.gov "Water" and the FEMA/Red Cross "Food and Water in an Emergency" sources already in water.ts; Water says "Very hot weather can double what each person needs"). `GAL_TO_L = 3.785`, `FLOZ_PER_GAL = 128`, `JUG_GAL = 5`, `DRUM_GAL = 55`.
- `PET_WATER_FLOZ_PER_LB_DAY = 1` (Hill's Pet Nutrition, "How much water should dogs and cats drink", hillspet.com, a vet-written rule of thumb). The hot factor also applies to pets.
- Calories per day (DGA 2020–2025 Appendix 2, Active level, male/female average at the group's middle age): `adult 2500` (age 41: M 2800, F 2200), `olderAdult 2300` (age ~70: M 2600, F 2000), `teen 2700` (age 15: M 3000, F 2400), `child 1800` (age 7: M 1800, F 1800), `baby 0` (breastfeed or follow the label, CDC), `PREGNANT_NURSING_EXTRA 450` (DGA: 3rd trimester +452, rounded). `ADULT_EQUIV_KCAL = 2500`. Comment: verify against the DGA PDF Appendix 2 when online; if it differs, the table wins.
- BYU one-adult-one-year (lb): `wheat 132, rice 65, oats 29, pasta 21, beans 62, dryMilk 60, sugar 70, salt 8`; `oilGal 2` (copied from food-storage.ts). `LB_TO_KG = 0.4536`.
- `PROPANE_HOURS_PER_20LB = 18` (Utah DEM via cooking.ts: "about 18 to 20 hours"; use the low end).
- Appliances (running, extra start), ids `fridge, sump, furnaceFan, windowAc, microwave, coffee, tv, spaceHeater`: 700/2200, 1050/2150, 875/2300, 3250/3950, 1000/0, 1000/0, 500/0, 1800/0 (Lowe's and Sam's Club charts via power-light-sanitation.ts).
- Dutch-oven table (Missouri Dept. of Conservation + Utah DEM, cooking.ts), `[under, top]`: 10-in 325 `[7,13]`, 350 `[7,15]`, 375 `[8,16]`, 400 `[8,18]`; 12-in 325 `[8,16]`, 350 `[9,17]`, 375 `[9,19]`, 400 `[10,20]`. Off-table rule: total = 2 × size + 2 × (temp − 325)/25, rounded; under = round(total/3); top = total − under. Sizes 8–14 in, even only; temps 300–450 °F in steps of 25.
- Garden (Utah State via growing-food.ts): hardy crops 60 to 45 days before the last frost; very tender crops 7 or more days after it. `FT3_TO_L = 28.317`, `FT2_TO_M2 = 0.0929`.
- Kit (Ready.gov "Build a Kit", tools-kits.ts): water = 3 days with the family's water rule; food 3 days; light 1/person; whistle 1/person; sleeping bag or blanket 1/person; change of clothes 1/person; power bank 1 per adult (adults + olderAdults); baby row `show` only if babies > 0; pet row only if pets; every other row has fixed text, `qty: null`.
- Defaults: `DEFAULT_FAMILY` = 2 adults, 2 children, everything else 0, `pets: []`, `days: 14`, `hot: false`, `lastFrost: "04-15"`, `firstFrost: ""`. `SPANS = [3, 14, 90, 365]`.

- [ ] **Step 1: Write the failing checks in `math-check.ts`.** Each one is `expect(name, actual, expected)` pushing a message on mismatch (numbers compared with a tolerance of 0.01):
  - `waterNeed(default family, 14 days).totalGal === 56`, `.jugs5 === 12`, `.drums55 === 2`, `.liters ≈ 211.96`
  - same with `hot: true` → `112`
  - one 64-lb pet, 1 adult, 3 days → `petGal === 1.5`, `totalGal === 4.5`
  - family of all zeros, no pets → `totalGal 0`, `jugs5 0`, `caloriesPerDay 0`, `adultEquivalents 0`, every staple lb 0, `kitList` quantities all 0 or null, and no NaN anywhere (Review Focus 1)
  - `caloriesPerDay(default) === 8600`; with `pregnantOrNursing: 1` → `9050`; `adultEquivalents(default) === 3.44`
  - `staples(1 adult, 365 days)` wheat `132`; `staples(default, 14 days)` wheat `ceil(132 × 3.44 × 14/365) = 18`
  - `propaneTanks(1, 14) === 1`; `propaneTanks(2, 14) === 2`; `propaneTanks(0, 14) === 0`
  - `generator(['fridge','sump','microwave'])` → `{ running: 2750, extraStart: 2200, total: 4950 }` (the guide's worked example); `generator([])` → all 0
  - every one of the 8 Dutch-oven table cells, with `fromTable: true`; `dutchOven(14, 325)` → `{ under: 9, top: 19, fromTable: false }`; `dutchOven(8, 300)` → total 14 → `{ under: 5, top: 9 }`
  - `bedArea([{4,8,12}])` → `sqft 32, cuft 32, cuyd ≈ 1.19, liters ≈ 906.1, m2 ≈ 2.97`
  - `plantingDates("04-15","")` → `hardyFrom "02-14", hardyTo "03-01", tenderFrom "04-22", seasonDays null`; `plantingDates("01-20","")` → `hardyFrom "11-21"`, `hardyTo "12-06"` (year wrap, Review Focus 5); `plantingDates("04-15","10-15")` → `seasonDays 183`
- [ ] **Step 2: Wire it into `content-check.ts`** (errors prefixed `calculators math:`) and run the sandbox content check. Expected: FAIL (math.ts missing).
- [ ] **Step 3: Write `rules.ts` and `math.ts`** with the values and signatures above. Dates use a fixed non-leap year (2025) through `Date.UTC`, so the result never depends on time zones or leap years.
- [ ] **Step 4: Run the content check.** Expected: 0 errors, 0 warnings. Also `tsc` clean.
- [ ] **Step 5: Deliver** the 4 files to the device.

### Task 2: Family store (saved on the device)

**Files:**
- Create: `src/calc/family-store.ts` (pure: `loadFamily`, `sanitize`, `clampInt`, `clampNum`), `src/calc/family.tsx` (React provider and hook)
- Modify: `src/main.tsx` or `src/App.tsx` (wrap the app in `<FamilyProvider>` inside `SettingsProvider`), `src/calc/math-check.ts` (add checks)

**Interfaces:**
- Consumes: `Family`, `DEFAULT_FAMILY` (Task 1)
- Produces:
  - `clampInt(v: unknown, min: number, max: number, fallback: number): number`; `clampNum(...)`, same but keeps decimals
  - `sanitize(raw: unknown): Family` (merges onto `DEFAULT_FAMILY`; limits as in Review Focus 3; `pregnantOrNursing ≤ adults + olderAdults + teens`; at most 10 pets; dates must match `/^\d\d-\d\d$/` and be a real day, else the default)
  - `useFamily(): { family: Family; isDefault: boolean; set(patch: Partial<Family>): void; clear(): void }`, saved to `sg-family`. `isDefault` is true until the user changes anything; `clear()` removes the key and restores the defaults.
  - `useChecks(): { checked: Set<KitItemId>; toggle(id: KitItemId): void; clearAll(): void }`, saved to `sg-checks`

- [ ] **Step 1: Add checks:** `sanitize('{bad')` (treat non-object input as `{}`) → equals `DEFAULT_FAMILY`; `sanitize({adults: '3', teens: -2, children: 1.7, pets: [{weightLb: 900}], days: 0})` → `adults 3, teens 0, children 2, pets[0].weightLb 250, days 1`; `sanitize({adults: 1, pregnantOrNursing: 4})` → `pregnantOrNursing 1`; `sanitize({lastFrost: '02-30'})` → `"04-15"`; `clampInt('', 0, 20, 5) === 5`.
- [ ] **Step 2: Run the content check.** Expected: FAIL.
- [ ] **Step 3: Implement** `family-store.ts`, then `family.tsx`, following the try/catch pattern in `settings.tsx`.
- [ ] **Step 4: Run the content check + tsc.** Expected: pass.
- [ ] **Step 5: Deliver.**

### Task 3: The `calc` block, family card, and shared UI

**Files:**
- Create: `src/calc/ids.ts` (`export const CALC_IDS = ['family','water','food','fuel','generator','dutch-oven','garden','kit'] as const; export type CalcId = typeof CALC_IDS[number]`, no React), `src/calc/ui.tsx` (`Stepper`, `ResultRow`, `RuleLine`, `SpanPicker`), `src/calc/FamilyCard.tsx`, `src/calc/index.tsx` (`CALCULATORS: Record<CalcId, ComponentType>`; calculators not built yet render nothing)
- Modify: `src/content/types.ts` (add `| { type: 'calc'; calc: CalcId }`), `src/components/BlockView.tsx` (case `'calc'`), `scripts/content-check.ts` (unknown id = error `calc block: unknown calculator "x"`), `src/i18n/en.ts`, `src/styles.css`

**Interfaces:**
- Consumes: `useFamily` (Task 2), `people` (Task 1)
- Produces: `<Stepper label value min max onChange />`, `<ResultRow label value detail? />`, `<RuleLine text />`, `<SpanPicker />` (3 days / 2 weeks / 90 days / 1 year / custom; writes `family.days`). Every calculator component wraps its results in `<section className="calc" aria-live="polite">`. `<FamilyCard compact?: boolean />`: full on the Calculators page; compact (one summary line + an Edit button that expands the full card in place) when the calc block sits in another section. `'family'` renders `<FamilyCard />`; any other calc id also renders `<FamilyCard compact />` above itself when the current section isn't `calculators` (pass the section id down via a small context in `SectionPage`).
- Family card copy: title "Your family"; while `isDefault`, the note "Example family: change it to yours."; footnote "Saved on this phone only. Nothing is sent anywhere." with a "Clear" button; a "Hot weather" switch; pets as a list of weight rows (add/remove).

- [ ] **Step 1: Add a check** in `math-check.ts` (or content-check) that every `CALC_IDS` entry has a component key, and a test section with `{ type: 'calc', calc: 'nope' as CalcId }` produces exactly the unknown-calculator error.
- [ ] **Step 2: Run the check.** Expected: FAIL.
- [ ] **Step 3: Implement** the files above. In `en.ts`, add a `calc` key group for every UI string (labels, buttons, units).
- [ ] **Step 4: Run the content check + tsc.** Expected: pass. Test build: a temporary `{ type: 'calc', calc: 'family' }` in calculators.ts renders the card; screenshot at 360 px in light and dark.
- [ ] **Step 5: Deliver.**

### Task 4: Water, Food, Fuel, Dutch oven calculators

**Files:**
- Create: `src/calc/WaterCalc.tsx`, `src/calc/FoodCalc.tsx`, `src/calc/FuelCalc.tsx`, `src/calc/DutchOvenCalc.tsx`
- Modify: `src/calc/index.tsx`, `src/i18n/en.ts`, `src/styles.css`

**Interfaces:** Consumes the Task 1 math and the Task 3 UI. Each component takes no props.

- Water: span picker; result: gallons + liters total, 5-gal jugs, 55-gal drums; rule line; note "Plan more for nursing mothers and anyone sick" (always shown); pet line only if pets.
- Food: span picker; calories/day and total; a staples table (food | amount lb + kg) + oil; note when babies > 0: "Babies: breastfeed, or store ready-to-feed formula and follow the label. See Food Storage." (link via the existing section-link format in RichText); vitamin C reminder.
- Fuel: "Hours of cooking a day" stepper (0–12, step 0.5, default 1, with the text "Example: 1 hour. Change it to how your family cooks."); 20-lb tanks for the span; rule line "18 hours per tank (the low end of 18 to 20)".
- Dutch oven: size select (8, 10, 12, 14 in), temperature select (300–450 °F with °C); result "N under, M on top"; when `fromTable` is false, show "Rule of thumb, so check the food."

- [ ] **Step 1: Test build:** render each calculator with the default family. Expected values on screen: Water 56 gal / 212 L / 12 jugs; Food 8,600 calories a day; Fuel 1 tank; Dutch oven 12-in 375 °F "9 under, 19 on top".
- [ ] **Step 2: Implement** the 4 components.
- [ ] **Step 3: Test build and screenshots** (360 px, large text, dark). Set every count to 0: no NaN shown. Expected: matches step 1.
- [ ] **Step 4: Deliver.**

### Task 5: Generator, Garden, 72-hour kit calculators

**Files:**
- Create: `src/calc/GeneratorCalc.tsx`, `src/calc/GardenCalc.tsx`, `src/calc/KitCalc.tsx`
- Modify: `src/calc/index.tsx`, `src/i18n/en.ts`, `src/styles.css`

- Generator: a checkbox per appliance (name, running, extra start); result running total, biggest extra start, smallest generator; reminders "Your appliance labels beat these typical numbers" and a CO warning linking to Seasons. Selection is kept in component state only (not saved).
- Garden: a list of beds (length ft, width ft, depth in; default one 4 × 8 ft × 12 in; add/remove, at most 20); totals for area and soil. Last-frost date input (month select + day select, saved in the family) and an optional first-frost date. Results: hardy crops date range, tender crops from-date, season length. Note "Sweet potatoes need about 4 warm, frost-free months."
- Kit: a list from `kitList` with names copied from the tools-kits.ts table rows (as `Localized` in a small `kit-items.ts`), each with a checkbox (`useChecks`) and its quantity; "Clear all checks" button; count "8 of 26 ready".

- [ ] **Step 1: Test build:** generator with fridge, sump, microwave = 4,950 W; garden default bed = 32 ft² / 1.2 yd³; last frost Apr 15 → tender crops from Apr 22; kit with the default family shows "4" for flashlights and "2" for power banks; ticking a box survives a page reload.
- [ ] **Step 2: Implement.**
- [ ] **Step 3: Test build and screenshots.** Expected: matches step 1.
- [ ] **Step 4: Deliver.**

### Task 6: The Calculators section page and links from other sections

**Files:**
- Modify: `src/content/sections/calculators.ts` (full section), `src/content/sections/water.ts` (calc block `water` after the "how much" paragraph at line 25–33), `src/content/sections/food-storage.ts` (calc block `food` after the calories paragraph at line 58), `src/content/sections/cooking.ts:597` (change to: "The {{calculators|Calculators}} work out how much cooking fuel your family needs.")

**Content of calculators.ts:**
- Intro paragraph (what it does; planning guides, not guarantees; check labels); warning "Numbers here are for planning. Babies, people who are sick, and hot weather need more water. Follow medicine and formula labels exactly."
- `h` + calc for: `your-family` (calc `family`), `water`, `food`, `fuel` (+ CO warning linking Seasons), `generator`, `dutch-oven`, `garden`, `kit`. Each has 1–2 plain sentences and a `{{section}}` link to where it is explained.
- Printed tables built by calling the math (rows for 1–6 adults; columns 3 days / 2 weeks / 90 days / 1 year): "Water for adults (gallons)" and "Food for adults (calories, and pounds of wheat as a guide)", with the caption from spec call 3. Number formatting through one helper `fmt(n)` with thousands separators.
- Sources (12): Ready.gov Water; FEMA/Red Cross Food and Water; Hill's Pet Nutrition (pet water); DGA 2020–2025 Appendix 2; BYU An Approach to Longer-Term Food Storage; CDC Infant Feeding During Emergencies; Utah DEM emergency cooking; Missouri Dept. of Conservation Dutch Oven Cooking 101; Lowe's wattage chart; Sam's Club generator guide; Utah State "Spring Has Sprung, but Frost Still Likely"; Ready.gov Build a Kit. Copy titles/URLs from the existing source blocks.

- [ ] **Step 1: Write the section.** Check: 9 headings, 2 tables, 12 sources.
- [ ] **Step 2: Run the content check + tsc.** Expected: 0 errors, 0 warnings.
- [ ] **Step 3: Test build:** Calculators page renders all calculators; Water and Food Storage show the compact family line and their calculator; changing the family on one page changes the others.
- [ ] **Step 4: Deliver** all changed files.

### Task 7: Final check on the real app

- [ ] **Step 1:** Stage the user's local `glossary.ts`, `sections/index.ts` and any changed section files; confirm the sandbox copy matches before the last delivery.
- [ ] **Step 2:** Ask the user to run `npm run dev` (one task at a time). Expected: the content check passes. Then open `localhost:5173/#/section/calculators` in the built-in browser: no console errors; screenshots at phone width.
- [ ] **Step 3:** Update the project docs: `claude/build-plan-updates.md` (Calculators done, what's in it) and `claude/build-plan.md` Phase 3 status.
