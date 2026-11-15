# Calculators (Section 12) — Design

Date: Nov 15, 2026. Project: Porchlight: A Family Survival Guide (React 19 + Vite + Capacitor 7, fully offline).

## Intent and why

Turn the guide's rules of thumb into one family's own numbers, offline. Several written sections already promise this: Water, Food Storage, Growing Food, Cooking, and Tools and Kits all send readers to "the Calculators" for family totals, including babies, older people, and pets. `src/content/sections/calculators.ts` is an empty placeholder today.

The calculators must work in all three situations a reader may be in (user: "open to all scenarios"):
1. **Building supplies the first time**: calm, at home, wants totals and a shopping list.
2. **Checking supplies months later**: wants the same numbers again without re-entering everything.
3. **During an emergency**: stressed, maybe power out, phone battery low. Needs an answer in seconds.

Design for the hardest case (3): useful answers from defaults before typing anything, the family entered once and remembered on the phone, and the same numbers available on paper.

## Goals

- One "Your family" card, entered once, feeding every calculator.
- Calculators (v1), each with its result visible immediately:
  1. **Water**: total for 3 days, 2 weeks, 90 days, or a custom number of days.
  2. **Food**: daily and total calories; dry staples for the chosen time span (BYU table scaled).
  3. **Cooking fuel**: number of 20-lb propane tanks for N days.
  4. **Generator size**: pick appliances, get the smallest generator that works.
  5. **Dutch oven coals**: briquettes on top and below for an oven size and temperature.
  6. **Garden**: bed area, soil to fill raised beds, and a planting calendar from the reader's last-frost date.
  7. **72-hour kit**: the Ready.gov basic kit scaled to the family, with checkboxes saved on the phone.
- The calculator block can also be placed inside other sections (e.g. the water calculator inside Water).
- Every number the math uses comes from a source already cited in the guide (or a new cited source), kept in one data file.
- A printed form: calculators whose answer depends on family size also get a plain table for common family sizes (see call 3), built from the same math, so the page works on paper (Phase 4 PDF) and when the phone is dead.

## Non-goals (v1)

- Garden **yield** estimates (lb per square foot). Reliable sourced numbers vary widely by crop, region, and skill. Leave for later, unless a single university table covers the main crops.
- Recipe scaling. Cooking says the Calculators "will help you scale recipes"; change that sentence to point only at fuel instead of building a recipe scaler.
- Medication or formula amounts. No prescription content; baby formula always follows the label (CDC). The calculator shows a reminder, not a number.
- Pet food amounts (vary by brand and animal). Reminder only. Pet **water** is calculated.
- Checklists for every Tools and Kits table. v1 does only the 72-hour kit; the others can reuse the same component later.
- Accounts, syncing, or sending anything anywhere.

## Anti-goals (a failure even if it works)

- Any number that isn't backed by a cited source, or that is more precise than the source.
- A blank form that shows nothing until filled in.
- Anything that leaves the phone. The family details are saved on this device only (same rule as settings).
- Breaking the "one content source" rule: the section page must still read as normal content with sources, headings, and warnings.
- Hiding the rule behind the number. Each result shows the one-line rule it came from ("1 gallon per person per day × 4 people × 14 days").

## Constraints

- Offline, no new dependencies (npm install is blocked in Claude's sandbox; the user runs `npm run dev`). Plain React + CSS.
- Content check (`scripts/content-check.ts`) must accept the new block type and fail on an unknown calculator id.
- All UI text goes through `src/i18n/en.ts` (translated later). Calculator labels that are content (captions, rules) are `Localized`.
- CSS uses logical properties (right-to-left support). Works at phone width, large text size, dark mode.
- US and metric units shown side by side, like the rest of the guide (gallons and liters, pounds and kilograms, °F and °C).
- Accessible: real `<label>`s, number inputs with steppers big enough to tap, results announced politely (`aria-live="polite"`).

## Approaches considered

- **A. A new "calc" block inside the content (chosen).** `{ type: 'calc', calc: 'water' }` renders a React calculator. The Calculators page holds the family card and all calculators with normal text, warnings, and sources around them; any other section can embed one. Constants live in one data file with sources. The printed form is a normal `table` block built from the same functions. Trade-off: the most code, and the content check must learn the new block.
- **B. Separate calculator screens** (`#/calc/water`), with the section as a menu. Tidier code, but calculators can't sit inside other sections, and the PDF and translations need separate handling.
- **C. Printed tables only.** Almost free and works in a panic, but can't handle a real family mix (two adults, a baby, a grandparent, a dog), which other sections promise.

The user picked A ("logical for all scenarios"). A includes C's tables as the printed form.

## How it works (decided)

### Your family card
- At the top of the Calculators page; a compact one-line summary (with an Edit button) appears above any calculator embedded in another section.
- Counts with − / + steppers: Adults (18–64); Older adults (65+); Teens (13–17); Children (2–12); Babies (under 2); Pregnant or nursing (see call 5 below); Pets, each with an approximate weight.
- Default before anything is entered: 2 adults, 2 children, so every result is filled in from the start. A line says "Example family: change it to yours."
- Saved on this device only, in localStorage under its own key (`sg-family`), separate from settings, with a "Clear" button. Wrapped in try/catch like settings.
- A shared choice of time span: 3 days / 2 weeks / 90 days / 1 year / custom days, also remembered.

### The calculators (rules come from the guide's existing sources)
1. **Water** (Ready.gov / FEMA; Water section): 1 gallon per person per day. Extra for babies/nursing/sick and hot climates is shown as a note (and a "hot climate: plan double" toggle if the source supports it). Pets: per-pound rule, if a cited source exists; otherwise a reminder. Output: gallons and liters, and how many 5-gallon jugs and 55-gallon drums. Link to Water.
2. **Food** (DGA calorie ranges; BYU one-adult-one-year table; Food Storage section): calories per day by group, using the upper part of the range because people work harder in a crisis (as Food Storage says). Output: daily and total calories; the BYU staples scaled to the span and to "adult equivalents"; vitamin C reminder; babies → follow the formula label / breastfeed per CDC (no number).
3. **Cooking fuel** (Utah DEM via Cooking: 20-lb tank ≈ 18–20 hours): input hours of cooking per day (default stated as a choice, not a fact) × days → tanks, rounded up, using the conservative 18 hours.
4. **Generator size** (Power/Light/Sanitation table; Lowe's / Sam's Club charts): tick the appliances from the guide's table → total running watts + the single biggest extra starting watts → smallest generator. Matches the worked example (fridge + sump + microwave = 4,950 W). Reminder: the appliance label beats the typical number; CO warning link.
5. **Dutch oven coals** (Cooking: ~2 briquettes per inch; Missouri Dept. of Conservation 325°F table; +2 per 25°F per Utah DEM): oven size (8–14 in) + temperature → total, top, and bottom. Must reproduce every cell of the guide's table (see call 1 below).
6. **Garden** (Growing Food): beds by length × width (default 4 × 8 ft) and depth → square feet / m² and soil in cubic feet / cubic yards / liters. Last-frost date → hardy crops 45–60 days before, very tender crops ≥1 week after (USU), plus the about-4-frost-free-months note for sweet potatoes. No yields.
7. **72-hour kit** (Ready.gov, Tools and Kits): kit items with quantities scaled to the family (water 3 days, food 3 days, a flashlight and whistle per person, etc.); a checkbox per item, saved on this device (`sg-checks`), with a "clear checks" button.

### Code shape
- `src/calc/rules.ts`: every constant with a comment naming its source. No numbers anywhere else.
- `src/calc/math.ts`: pure functions (`waterNeed(family, days)`, …), no React. Used by the UI and by the printed tables.
- `src/calc/family.tsx`: family context + localStorage.
- `src/calc/*.tsx`: one component per calculator; `src/calc/index.ts` maps calc ids → components.
- `types.ts`: add `| { type: 'calc'; calc: CalcId }`; `BlockView` renders it. `CalcId` is a string union kept next to the registry.
- `content-check.ts`: unknown calc id = error.
- Printed tables: section file builds `table` blocks by calling the math functions for families of 1–6 people × the time spans, so the numbers can never disagree.
- Tests: a small script of checks on `math.ts` (known answers from the guide: 4 people × 14 days water; 4,950 W example; Dutch oven table rows). Runs with plain node in the sandbox; optionally wired into the content check so `npm run dev` runs it too.

### The section page
Intro (what the calculators do; numbers are planning guides, not guarantees; check labels) → Your family → one heading per calculator with a short paragraph, the calc block, a warning where needed (CO, formula, vitamin C), the printed table, and links back to the section that explains it → Sources. Each heading feeds "On this page".

## Calls made after the builder check (Claude's calls; the user can override)
1. **Dutch oven.** The guide's own table (cooking.ts, 10- and 12-inch at 325–400°F) is a lookup and wins. Other sizes (8–14 in) and temperatures use the stated rule of thumb: about 2 briquettes per inch at 325°F, +2 per 25°F, about one third under and two thirds on top. Those results are labeled "rule of thumb, check the food." The Illinois bread line (12-in, 375°F, 18 top / 9 under) is a recipe and stays in Cooking. The calculator doesn't need to match it; the table's 9 / 19 is close. Tests: every table cell, plus the 2-per-inch rule.
2. **Food calories.** Use the DGA 2020–2025 "Estimated Calorie Needs per Day by Age, Sex, and Physical Activity Level" table (already a cited source). Each group gets one number: the **active** level, averaged across male and female, at the group's middle age. Pregnant or nursing adults add the DGA extra (2nd/3rd trimester and lactation, about +350–450; use the cited value). Babies under 2: no calorie number; breastfeed or follow the formula label (CDC). "Adult equivalent" for scaling the BYU table = the family's calories ÷ the adult number. The exact values and their table rows are written into `rules.ts` with the source comment. If the fetched DGA table differs, the table wins.
3. **Printed tables** only where family size changes the answer: Water and Food (rows for 1–6 **adults**, columns for 3 days / 2 weeks / 90 days / 1 year; caption: "Children need less, nursing mothers and hot weather more; use the calculator for a mixed family"), and 72-hour kit (per-person quantities). Generator and Dutch oven already have tables in their own sections; Garden needs none.
4. **Placement in v1.** All calculators live on the Calculators page. The block type and an app-wide family provider make embedding possible, but v1 adds a calc block to other sections only where the existing promise is "this section works it out": **Water** (water calculator) and **Food Storage** (food calculator). The summary's Edit button opens the family card in place (an expanding panel), not a page jump.
5. **Groups don't overlap.** Adults (18–64), Older adults (65+), Teens (13–17), Children (2–12), Babies (under 2) are separate counts. "Pregnant or nursing" is a separate count that can't be more than adults + older adults + teens, and only adds calories and a water note.

## Left to the builder
- Exact visual layout, stepper design, and whether results use cards or definition lists, within the app's existing styles.
- Exact rounding (always round supplies **up**; show whole jugs/tanks).
- Whether the hot-climate and pet-water rules can be sourced; if not, show them as reminders without numbers.
- Wording of each rule line and printed-table caption, following the guide's calm, plain tone.
