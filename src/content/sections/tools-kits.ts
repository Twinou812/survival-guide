import type { Section } from "../types";

// Section 11: Tools and Kits. Facts checked Nov 15, 2026 against the sources listed at the end.
// This section is the shopping list for the whole guide. It gathers every item the other
// sections said to keep, grouped first by when to buy it and then by area. Safety numbers
// (first aid kit amounts, smoke alarm placement and replacement, extinguisher use, gas shut-off
// rules, pet supply amounts) come from Ready.gov/FEMA, the American Red Cross, NFPA, USFA, CDC,
// and gas utilities. Do not round or "simplify" them. Amounts per person are worked out in
// the Calculators section.

export const toolsKits: Section = {
  id: "tools-kits",
  number: 11,
  title: { en: "Tools and Kits" },
  summary: { en: "What to buy and keep on hand, in the order to buy it, with every item the guide mentions." },
  blocks: [
    {
      type: "p",
      text: {
        en: "This section is the family shopping list for the whole guide. Every item the other sections tell you to keep is gathered here. The first half sorts them by when to buy them: the first 72 hours, two weeks, 90 days, and a year or longer. The second half sorts the same things by area (water, food, medical, and so on), so you can see what you already have and what is missing.",
      },
    },
    {
      type: "p",
      text: {
        en: "You do not need everything at once, and you probably own much of it already. Start at the top and work down. The {{calculators|Calculators}} work out how much water, food, and fuel your family needs for each stage.",
      },
    },
    {
      type: "warning",
      text: {
        en: "Skills matter more than gear. A tourniquet you have never practiced with, a fire extinguisher nobody knows how to use, or a suture kit with no one trained to use it can give false confidence. With each tool you buy, learn how to use it and practice with the family. This guide covers no prescription medicine. Ask your doctors now about an emergency supply of any prescription medicine your family takes.",
      },
    },

    // ==================================================================
    // HOW TO BUY
    // ==================================================================
    { type: "h", id: "how-to-buy", text: { en: "Building supplies without going broke" } },
    {
      type: "list",
      items: [
        { en: "Start with what you own. Walk through the house with this list and check off what you already have: flashlights, blankets, tools, pots, a cooler, a first aid kit." },
        { en: "Add a few items each time you shop. Many emergency offices suggest picking up one or two extras on every trip to the store instead of buying it all at once." },
        { en: "Buy food and supplies you already use, so they get eaten and replaced before they go bad. See {{food-storage}}." },
        { en: "Do not buy cheap where a life depends on it. A [[tourniquet|tourniquet]], a [[smoke-alarm|smoke alarm]], a [[co-alarm|carbon monoxide alarm]], and a [[fire-extinguisher|fire extinguisher]] should come from a trusted seller and carry a testing-lab mark (such as UL or ETL) where one applies." },
        { en: "Share big, rarely used items with neighbors: a generator, a [[grain-mill|grain mill]], a [[pressure-canner|pressure canner]], a ladder, a chainsaw. Agree in writing who keeps it and how it is shared." },
        { en: "Look for cast iron, wool clothing, hand tools, canning jars, and books at yard sales and thrift stores. They last for generations." },
        { en: "Write the date on everything you store, with a marker on tape. It makes rotating supplies easy." },
      ],
    },

    // ==================================================================
    // BY PRIORITY
    // ==================================================================
    { type: "h", id: "first-72-hours", text: { en: "First 72 hours: the basic kit" } },
    {
      type: "p",
      text: {
        en: "This is the kit Ready.gov (FEMA) asks every household to keep. It covers about three days at home if the power, water, and stores are out. Pack it in airtight plastic bags inside one or two easy-to-carry containers, such as plastic tubs or a duffel bag, and keep it where everyone knows to find it.",
      },
    },
    {
      type: "table",
      caption: { en: "The basic kit (Ready.gov list, with where to learn more in this guide)" },
      head: [{ en: "Item" }, { en: "How much" }, { en: "Learn more" }],
      rows: [
        [{ en: "Drinking and washing water" }, { en: "About 1 gallon (4 liters) per person per day, at least 3 days; more for hot weather, nursing mothers, and the sick" }, { en: "{{water}}" }],
        [{ en: "Food that needs no fridge, plus a [[manual-can-opener|manual can opener]]" }, { en: "At least 3 days, foods your family already eats" }, { en: "{{food-storage}}" }],
        [{ en: "Battery or [[hand-crank-radio|hand-crank radio]], and a NOAA [[weather-radio|weather radio]] with tone alert" }, { en: "1 each" }, { en: "{{communications}}" }],
        [{ en: "Flashlight or [[headlamp|headlamp]], and extra batteries" }, { en: "1 light per person" }, { en: "{{power-light-sanitation}}" }],
        [{ en: "First aid kit" }, { en: "1 for home, 1 for each car (list below)" }, { en: "{{medical}}" }],
        [{ en: "Whistle" }, { en: "1 per person" }, { en: "{{bugging-out}}" }],
        [{ en: "Dust masks or [[n95-respirator|N95 respirators]]" }, { en: "Several per person" }, { en: "{{seasons}}" }],
        [{ en: "Plastic sheeting, scissors, and duct tape" }, { en: "1 roll of sheeting, 2 rolls of tape" }, { en: "{{seasons}}" }],
        [{ en: "Moist towelettes, garbage bags, and plastic ties" }, { en: "1 box of heavy bags; towelettes for 3 days" }, { en: "{{power-light-sanitation}}" }],
        [{ en: "Wrench or pliers to turn off utilities" }, { en: "1 (a [[gas-shutoff-wrench|gas shut-off wrench]] if you have gas)" }, { en: "Below, and {{water}}" }],
        [{ en: "Local paper maps" }, { en: "1 set, routes marked" }, { en: "{{bugging-out}}" }],
        [{ en: "Phone chargers and a [[power-bank|power bank]]" }, { en: "1 power bank per adult" }, { en: "{{power-light-sanitation}}" }],
        [{ en: "Soap, [[hand-sanitizer|hand sanitizer]], disinfecting wipes" }, { en: "3 days" }, { en: "{{power-light-sanitation}}" }],
        [{ en: "Over-the-counter medicines: pain relievers, anti-diarrhea medicine, antacids, laxatives" }, { en: "A small supply" }, { en: "{{medical}}" }],
        [{ en: "Prescription medicines, glasses, and contact lens solution" }, { en: "As much as your doctor will allow" }, { en: "{{medical}}" }],
        [{ en: "Baby needs: formula, bottles, diapers, wipes, diaper rash cream" }, { en: "At least 3 days" }, { en: "{{food-storage}}" }],
        [{ en: "Pet food and extra water for pets" }, { en: "At least 3 days" }, { en: "Below" }],
        [{ en: "Cash in small bills" }, { en: "Enough for a few days of gas and groceries" }, { en: "Below" }],
        [{ en: "Copies of important papers in a waterproof container" }, { en: "1 set" }, { en: "Below" }],
        [{ en: "Sleeping bag or warm blanket" }, { en: "1 per person" }, { en: "{{seasons}}" }],
        [{ en: "Change of clothes for the season and sturdy shoes" }, { en: "1 per person" }, { en: "{{bugging-out}}" }],
        [{ en: "[[fire-extinguisher|Fire extinguisher]]" }, { en: "At least 1 per floor" }, { en: "Below" }],
        [{ en: "Matches in a waterproof container" }, { en: "1 box" }, { en: "{{cooking}}" }],
        [{ en: "Period supplies and personal hygiene items" }, { en: "1 cycle per person who needs them" }, { en: "{{menstrual-care}}" }],
        [{ en: "Plates, cups, utensils, paper towels" }, { en: "3 days" }, { en: "{{cooking}}" }],
        [{ en: "Paper, pencils, books, games, puzzles" }, { en: "Some for each child" }, { en: "{{mind}}" }],
      ],
    },
    {
      type: "p",
      text: {
        en: "Ready.gov also suggests a smaller kit at work (enough to stay at least 24 hours, with walking shoes) and one in each car. The car kit is listed below under go-bags and cars.",
      },
    },

    { type: "h", id: "two-weeks", text: { en: "Two weeks" } },
    {
      type: "p",
      text: {
        en: "Big storms, earthquakes, and long power failures can keep stores and services closed for much longer than three days. Some emergency offices ask families to plan for five to seven days or more. These are the next things to add, working up to two weeks.",
      },
    },
    {
      type: "table",
      caption: { en: "Adding up to two weeks" },
      head: [{ en: "Area" }, { en: "What to add" }],
      rows: [
        [{ en: "Water" }, { en: "About 14 gallons (53 liters) per person, plus water for pets; [[unscented-bleach|unscented bleach]] and a dropper to treat more; know your [[main-shutoff-valve|main water valve]]. See {{water}}." }],
        [{ en: "Food" }, { en: "Two weeks of the shelf-stable food you already eat; vitamin C sources; baby food and formula if needed. See {{food-storage}}." }],
        [{ en: "Cooking" }, { en: "Two ways to cook that work without power (for example a camp stove and a grill), with fuel for two weeks, used only outdoors. See {{cooking}}." }],
        [{ en: "Light and power" }, { en: "A [[headlamp|headlamp]] per person, an LED lantern per room in use, spare batteries in one or two sizes, a car charger. See {{power-light-sanitation}}." }],
        [{ en: "Toilets" }, { en: "A [[twin-bucket-toilet|twin-bucket toilet]] kit: two lidded 5-gallon buckets, a toilet seat, [[contractor-bag|contractor bags]], [[cover-material|cover material]] such as sawdust, and gloves." }],
        [{ en: "Medical" }, { en: "The full first aid kit below, plus a [[tourniquet|tourniquet]] for each kit and car, [[oral-rehydration-solution|ORS]] packets, and the over-the-counter list. See {{medical}}." }],
        [{ en: "Warmth and cooling" }, { en: "Supplies for one warm room: blankets, towels for door gaps, plastic for windows, a battery [[co-alarm|carbon monoxide alarm]]. A box fan for summer. See {{seasons}}." }],
        [{ en: "Talking to each other" }, { en: "[[frs-radio|FRS walkie-talkies]] (one per adult plus a spare) and a written frequency card. See {{communications}}." }],
        [{ en: "Home safety" }, { en: "Working [[smoke-alarm|smoke alarms]] and CO alarms, fire extinguishers, a [[gas-shutoff-wrench|gas shut-off wrench]], a door security bar or wedge. See {{home-defense}}." }],
        [{ en: "Leaving fast" }, { en: "One [[go-bag|go-bag]] per person, packed and checked. See {{bugging-out}}." }],
      ],
    },

    { type: "h", id: "ninety-days", text: { en: "90 days" } },
    {
      type: "table",
      caption: { en: "Building toward three months" },
      head: [{ en: "Area" }, { en: "What to add" }],
      rows: [
        [{ en: "Water" }, { en: "Food-grade water drums with a [[bung-wrench|bung wrench]] and [[siphon-pump|siphon pump]]; a [[rain-barrel|rain barrel]]; a [[gravity-filter|gravity filter]] with spare filters; a [[drinking-water-hose|drinking water hose]]. See {{water}}." }],
        [{ en: "Food" }, { en: "Three months of food; rice, beans, oats, and flour packed in [[mylar-bag|Mylar bags]] with [[oxygen-absorber|oxygen absorbers]] inside [[food-grade-container|food-grade buckets]] with [[gamma-lid|gamma lids]]; a [[food-thermometer|food thermometer]]. See {{food-storage}}." }],
        [{ en: "Cooking" }, { en: "A [[dutch-oven|camp Dutch oven]] with charcoal and a chimney starter, a [[cast-iron-skillet|cast-iron skillet]], a [[pressure-cooker|pressure cooker]] to save fuel, heavy-duty foil and foil pans. See {{cooking}}." }],
        [{ en: "Garden" }, { en: "[[open-pollinated|Open-pollinated]] seeds, a [[soil-test|soil test]], materials for a [[raised-bed|raised bed]] or buckets, a watering can and hose, [[row-cover|row cover]], basic garden tools. See {{growing-food}}." }],
        [{ en: "Power" }, { en: "A [[portable-power-station|portable power station]] with a small solar panel, or a generator with outdoor cords and a [[transfer-switch|transfer switch]] put in by a licensed electrician. Approved [[gas-can|gas cans]] with [[fuel-stabilizer|fuel stabilizer]]. See {{power-light-sanitation}}." }],
        [{ en: "Medical" }, { en: "Closure strips, [[skin-glue|skin glue]], a [[splint|splint]], elastic wraps, burn dressings, a large irrigation syringe, [[trauma-shears|trauma shears]], a [[temporary-filling|temporary dental filling]] kit. Take CPR, first aid, and Stop the Bleed classes. See {{medical}}." }],
        [{ en: "Cleaning" }, { en: "More contractor bags and cover material, a plunger washer and two tubs for laundry, three basins for dishes, a jug with a spigot for handwashing. See {{power-light-sanitation}}." }],
        [{ en: "Periods" }, { en: "A [[menstrual-cup|menstrual cup]] or 10 to 15 [[cloth-pad|cloth pads]] per person, a lidded soak bucket, a clothesline and pins. See {{menstrual-care}}." }],
        [{ en: "Talking to each other" }, { en: "[[lora-mesh-radio|Mesh radios]] set to the preset your neighbors agreed on, or [[gmrs-radio|GMRS radios]]. See {{communications}}." }],
        [{ en: "Home" }, { en: "3-inch screws for [[strike-plate|strike plates]] and hinges, good [[deadbolt|deadbolts]], a [[door-viewer|door viewer]], dowels for sliding doors, motion lights. See {{home-defense}}." }],
        [{ en: "Mind" }, { en: "A family library on paper, card and board games, spare reading glasses. See {{mind}}." }],
      ],
    },

    { type: "h", id: "long-term", text: { en: "One year and longer" } },
    {
      type: "table",
      caption: { en: "For the long run" },
      head: [{ en: "Area" }, { en: "What to add" }],
      rows: [
        [{ en: "Water" }, { en: "Rain catchment with screened barrels, a spare set of filter parts, [[calcium-hypochlorite|pool shock]] stored safely for making your own bleach. See {{water}}." }],
        [{ en: "Food" }, { en: "A year of dry staples (grains, beans, sugar, oil, salt, dry milk) worked out with the {{calculators|Calculators}}; a [[grain-mill|grain mill]]. See {{food-storage}}." }],
        [{ en: "Keeping food" }, { en: "A [[pressure-canner|pressure canner]] and a [[water-bath-canner|water-bath canner]], jars, new lids, a spare gasket; a [[dehydrator|food dehydrator]]; a [[sprouting-jar|sprouting jar]]; a crock for sauerkraut; supplies for a [[root-cellar|root cellar]] or [[storage-mound|storage mound]]. See {{food-storage}} and {{growing-food}}." }],
        [{ en: "Garden" }, { en: "Seed-saving supplies (envelopes, jars, labels), compost bins, [[hardware-cloth|hardware cloth]], [[shade-cloth|shade cloth]] in hot places, fruit trees and perennials. See {{growing-food}}." }],
        [{ en: "Trapping and fishing" }, { en: "[[cage-trap|Cage traps]] sized for rabbits and squirrels, a fishing kit, [[disposable-gloves|disposable gloves]], a sharp knife and a sharpener. Learn your local laws first. See {{trapping}}." }],
        [{ en: "Hand tools" }, { en: "The full hand tool list below, so you can fix things with no power and no store." }],
        [{ en: "Medical" }, { en: "A suture kit and dental tools ([[dental-elevator|elevator]] and [[dental-forceps|forceps]]) only if someone in the family has trained and practiced. Wilderness first aid class. See {{medical}}." }],
        [{ en: "Talking to each other" }, { en: "A [[ham-radio|ham radio]] handheld after someone passes the license test; a [[personal-locator-beacon|personal locator beacon]] registered with NOAA. See {{communications}}." }],
        [{ en: "Clothes" }, { en: "Wool or synthetic socks and layers for each person, work gloves, rain gear, boots one size up for growing children, a sewing kit and patches." }],
      ],
    },

    // ==================================================================
    // BY AREA
    // ==================================================================
    { type: "h", id: "by-area", text: { en: "Shopping lists by area" } },
    {
      type: "p",
      text: {
        en: "The same items again, grouped by what they are for. Each list starts with the most important things.",
      },
    },

    { type: "h", id: "water-gear", text: { en: "Water" } },
    {
      type: "list",
      items: [
        { en: "Stored water: store-bought bottled water, or clean [[pet-bottle|PET bottles]] and [[food-grade-container|food-grade containers]] you fill and treat yourself." },
        { en: "[[unscented-bleach|Unscented bleach]] (5 to 9 percent) and a [[medicine-dropper|medicine dropper]] marked in drops." },
        { en: "A pot with a lid for boiling water, and fuel to boil it." },
        { en: "A [[gravity-filter|gravity filter]] or [[hollow-fiber-filter|hollow-fiber filter]], plus spare filter parts." },
        { en: "A [[bathtub-bladder|bathtub bladder]] to fill when a storm is coming." },
        { en: "Tools to reach the water already in your house: a hose for the [[drain-valve|water heater drain valve]], a bucket, and a [[curb-key|curb key]] if your main valve is at the street." },
        { en: "For the long run: 55-gallon drums, a [[bung-wrench|bung wrench]], a [[siphon-pump|siphon pump]], a [[drinking-water-hose|drinking water hose]], a [[rain-barrel|rain barrel]] with a screen, and clean clear bottles for [[sodis|sunlight treatment]]." },
      ],
    },

    { type: "h", id: "food-gear", text: { en: "Food and cooking" } },
    {
      type: "list",
      items: [
        { en: "A [[manual-can-opener|manual can opener]] (two is better)." },
        { en: "A camp stove with fuel, used only outdoors, and a grill. A [[rocket-stove|rocket stove]] or [[solar-oven|solar oven]] saves fuel." },
        { en: "Matches and lighters in a waterproof bag." },
        { en: "A [[food-thermometer|food thermometer]], and an [[appliance-thermometer|appliance thermometer]] for the fridge and freezer." },
        { en: "Coolers, and a way to get ice or [[dry-ice|dry ice]] early in an outage." },
        { en: "One-pot cookware with lids, long-handled tongs and spoon, heat-proof gloves, a rolling pin." },
        { en: "A [[dutch-oven|camp Dutch oven]] with charcoal, a chimney starter, and a lid lifter." },
        { en: "A [[cast-iron-skillet|cast-iron skillet]] and a [[pressure-cooker|pressure cooker]]." },
        { en: "Heavy-duty foil, disposable foil pans, and an oven thermometer for the grill." },
        { en: "Active dry yeast, and the makings of a [[sourdough-starter|sourdough starter]]." },
        { en: "Storage: [[mylar-bag|Mylar bags]], [[oxygen-absorber|oxygen absorbers]], [[food-grade-container|food-grade buckets]], [[gamma-lid|gamma lids]], [[number-10-can|No. 10 cans]], and a marker." },
        { en: "For a [[haybox|haybox]]: a box or cooler and old blankets or pillows." },
        { en: "Allergy-safe and gluten-free foods stored and labeled apart from the rest." },
      ],
    },

    { type: "h", id: "light-power-gear", text: { en: "Light, power, and fuel" } },
    {
      type: "list",
      items: [
        { en: "A [[headlamp|headlamp]] for each person and an LED lantern for each room you use at night." },
        { en: "Batteries in one or two sizes only, stored in their packs. Rechargeable low self-discharge batteries and a charger." },
        { en: "A [[power-bank|power bank]] for each adult and a car phone charger." },
        { en: "A [[portable-power-station|portable power station]] and a small solar panel." },
        { en: "A generator, heavy outdoor cords rated for the load, a [[transfer-switch|transfer switch]] or interlock installed by a licensed electrician, and a chain and lock. Never [[backfeeding|backfeed]] a house." },
        { en: "Approved [[gas-can|gas cans]] (5 gallons or less), [[fuel-stabilizer|fuel stabilizer]], and a dated label on each can." },
        { en: "[[propane-cylinder|Propane cylinders]], stored outdoors and upright." },
        { en: "If you heat with them: [[seasoned-firewood|seasoned firewood]], a metal ash can with a lid, a [[kerosene-heater|kerosene heater]] with 1-K kerosene in a blue can. Keep [[lamp-oil|lamp oil]] away from children." },
      ],
    },

    { type: "h", id: "sanitation-gear", text: { en: "Toilets, washing, and trash" } },
    {
      type: "list",
      items: [
        { en: "A [[twin-bucket-toilet|twin-bucket toilet]] kit: two lidded 5-gallon buckets, a toilet seat (or a pool noodle cut to fit), 13-gallon [[contractor-bag|contractor bags]], sawdust or coir for [[cover-material|cover material]], and gloves." },
        { en: "Toilet paper (more than you think), wet wipes, and diapers if needed." },
        { en: "Bar soap, [[hand-sanitizer|hand sanitizer]] with at least 60 percent alcohol, and a water jug with a spigot (or the makings of a [[tippy-tap|tippy tap]])." },
        { en: "A clean plunger and two tubs for washing clothes, a clothesline, and pins." },
        { en: "Three basins for dishes, and dish soap." },
        { en: "[[unscented-bleach|Unscented bleach]] for cleaning, and rubber gloves." },
        { en: "Lidded outdoor trash cans and heavy trash bags." },
        { en: "A small shovel for a [[cathole|cathole]] where soil is deep enough." },
      ],
    },

    { type: "h", id: "first-aid-kit", text: { en: "The family first aid kit" } },
    {
      type: "p",
      text: {
        en: "The American Red Cross suggests this kit for a family of four. Keep one at home and a smaller one in each car. Add each person's own medicines and a list of emergency phone numbers.",
      },
    },
    {
      type: "table",
      caption: { en: "Red Cross first aid kit for a family of four" },
      head: [{ en: "Item" }, { en: "How many" }],
      rows: [
        [{ en: "Absorbent compress dressings, 5 x 9 inches" }, { en: "2" }],
        [{ en: "Adhesive bandages, assorted sizes" }, { en: "25" }],
        [{ en: "Adhesive cloth tape, 10 yards x 1 inch" }, { en: "1 roll" }],
        [{ en: "Antibiotic ointment packets, about 1 gram" }, { en: "5" }],
        [{ en: "Antiseptic wipe packets" }, { en: "5" }],
        [{ en: "Aspirin packets, 81 mg each (for a suspected heart attack in adults; never for children or teens)" }, { en: "2" }],
        [{ en: "[[emergency-blanket|Emergency blanket]]" }, { en: "1" }],
        [{ en: "Breathing barrier with a one-way valve (for CPR)" }, { en: "1" }],
        [{ en: "Instant cold compress" }, { en: "1" }],
        [{ en: "Non-latex gloves, large" }, { en: "2 pairs" }],
        [{ en: "Hydrocortisone ointment packets, about 1 gram" }, { en: "2" }],
        [{ en: "Gauze roll bandage, 3 inches wide" }, { en: "1" }],
        [{ en: "Roller bandage, 4 inches wide" }, { en: "1" }],
        [{ en: "Sterile gauze pads, 3 x 3 inches" }, { en: "5" }],
        [{ en: "Sterile gauze pads, 4 x 4 inches" }, { en: "5" }],
        [{ en: "Oral thermometer (no mercury, no glass)" }, { en: "1" }],
        [{ en: "Triangular bandages" }, { en: "2" }],
        [{ en: "Tweezers" }, { en: "1" }],
        [{ en: "Emergency first aid instructions (this guide, printed)" }, { en: "1" }],
      ],
    },

    { type: "h", id: "medical-gear", text: { en: "Beyond the basic first aid kit" } },
    {
      type: "p",
      text: {
        en: "These are the extra supplies the {{medical}} section uses when help is far away. Buy them as you learn the skill that goes with each.",
      },
    },
    {
      type: "list",
      items: [
        { en: "Bleeding: a real windlass [[tourniquet|tourniquet]] for each kit and car (practice with a separate trainer), [[hemostatic-gauze|hemostatic gauze]], plain gauze rolls for [[wound-packing|packing]], and pressure bandages." },
        { en: "Wound care: plenty of [[disposable-gloves|disposable gloves]], a large syringe for [[wound-irrigation|wound irrigation]], [[butterfly-strip|closure strips]], [[skin-glue|skin glue]], petroleum jelly, non-stick dressings, [[cling-film|cling film]] for burns." },
        { en: "Bones and sprains: a [[splint|splint]] (a foam-padded aluminum type rolls up small), elastic wraps, and triangle bandages for slings." },
        { en: "Tools: [[trauma-shears|trauma shears]], [[fine-tipped-tweezers|fine-tipped tweezers]], a magnifier, and a headlamp." },
        { en: "Illness: [[oral-rehydration-solution|ORS]] packets, zinc tablets, and a thermometer for each age group." },
        { en: "Over-the-counter medicines from the table in {{medical}}, with child forms and child dosing tools if you have children. Check dates twice a year." },
        { en: "Teeth: a [[temporary-filling|temporary filling]] kit, clove oil, and gauze. Dental [[dental-elevator|elevator]] and [[dental-forceps|forceps]] only if someone has trained." },
        { en: "Stitches: a [[suture|suture]] kit only if someone has practiced (on store meat, as {{medical}} describes)." },
        { en: "A written medical card for each person: conditions, medicines, allergies, blood type if known, doctors." },
      ],
    },

    { type: "h", id: "period-gear", text: { en: "Periods" } },
    {
      type: "list",
      items: [
        { en: "A [[menstrual-cup|menstrual cup]] for each person who wants one, and a small pot to boil it in." },
        { en: "10 to 15 [[cloth-pad|cloth pads]] per person, or cotton flannel and [[pul-fabric|PUL fabric]] to sew them." },
        { en: "Period underwear in dark colors." },
        { en: "Disposable pads and tampons for the first weeks." },
        { en: "A lidded soak bucket used only for this, mild soap, a clothesline and pins." },
        { en: "Ibuprofen or naproxen, a hot water bottle, and pregnancy tests." },
      ],
    },

    { type: "h", id: "seasons-gear", text: { en: "Cold and heat" } },
    {
      type: "list",
      items: [
        { en: "A battery [[co-alarm|carbon monoxide alarm]] on every sleeping floor." },
        { en: "Warm blankets or sleeping bags rated for your winters, and a [[wearable-blanket|wearable blanket]] for each baby." },
        { en: "Plastic sheeting and tape for windows, towels for door gaps, a small tent for indoor sleeping." },
        { en: "Foam [[pipe-insulation|pipe insulation]] and a hair dryer for thawing pipes." },
        { en: "A winter car kit (see go-bags and cars below)." },
        { en: "For summer: a box fan with spare MERV 13 filters to build a [[box-fan-filter|box fan air cleaner]], [[shade-cloth|shade cloth]], spray bottles, and a cooler for ice." },
        { en: "Sunscreen (SPF 15 or higher), hats, [[insect-repellent|insect repellent]] registered with the EPA, [[permethrin|permethrin]] for clothing, and [[fine-tipped-tweezers|fine-tipped tweezers]] for ticks." },
        { en: "[[n95-respirator|N95 or P100 respirators]] with two straps, for wildfire smoke and dust." },
      ],
    },

    { type: "h", id: "comms-gear", text: { en: "Radios and staying in touch" } },
    {
      type: "list",
      items: [
        { en: "A [[hand-crank-radio|hand-crank]] or solar NOAA [[weather-radio|weather radio]] with spare AA batteries." },
        { en: "[[frs-radio|FRS]] or [[gmrs-radio|GMRS]] walkie-talkies, one per adult and a spare." },
        { en: "[[lora-mesh-radio|Mesh radios]] (915 MHz in the U.S.) set to the preset your neighbors agreed on, and a power bank for each." },
        { en: "A written frequency card and wallet cards for each person." },
        { en: "Optional: a [[cb-radio|CB radio]] for the car, a [[ham-radio|ham]] handheld if someone is licensed, a [[personal-locator-beacon|PLB]] registered with NOAA for go-bags, a marine radio if the family boats." },
      ],
    },

    { type: "h", id: "home-safety-gear", text: { en: "Fire, gas, and home safety" } },
    {
      type: "list",
      items: [
        { en: "[[smoke-alarm|Smoke alarms]] inside every bedroom, outside each sleeping area, and on every level including the basement, as NFPA advises. Linked alarms are best, so when one sounds they all sound." },
        { en: "A multipurpose [[fire-extinguisher|fire extinguisher]] (labeled A-B-C) on each floor, one in the kitchen kept away from the stove, and one in the garage." },
        { en: "A [[gas-shutoff-wrench|gas shut-off wrench]] or a 12-inch adjustable wrench, kept with your emergency supplies or near the meter, but not hung on the gas pipes." },
        { en: "Folding escape ladders for upstairs bedrooms." },
        { en: "Door hardware: 3-inch screws (#9 or #10) for [[strike-plate|strike plates]] and hinges, a four-screw strike box, Grade 1 or 2 single-cylinder [[deadbolt|deadbolts]], a wide-angle [[door-viewer|door viewer]], a door security bar and rubber wedges." },
        { en: "Dowels or a bar for sliding doors, window pin locks, and [[security-bars|quick-release security bars]] if you use bars." },
        { en: "A release guard for the garage door opener, motion lights (some solar), and light timers." },
        { en: "A whistle, air horn, or personal alarm and a bright flashlight beside each bed." },
        { en: "For the [[safe-room|safe room]]: a phone charger and power bank, a small first aid kit with a tourniquet, water, and a flashlight." },
        { en: "Plywood and screws for boarding broken windows." },
        { en: "Homes with guns: a lock box or [[gun-cable-lock|cable lock]] for each gun. Optional where legal: [[pepper-spray|pepper spray]]." },
      ],
    },

    { type: "h", id: "gas-shutoff", text: { en: "Shutting off gas: learn it before you need it" } },
    {
      type: "p",
      text: {
        en: "After disasters, gas leaks cause many fires. Find your gas meter now and look at the valve on the pipe coming into it. Make sure your wrench fits it. Do not practice by turning it off.",
      },
    },
    {
      type: "steps",
      items: [
        { en: "Shut off the gas ONLY if you smell gas (a rotten-egg smell), hear a hissing or blowing sound, or see a broken gas line." },
        { en: "Get everyone out first. Do not flip light switches, use phones, or light anything inside; a spark can set off the gas." },
        { en: "If it is safe, give the valve a quarter turn with the wrench so the flat part (the tang) sits crosswise to the pipe. That is closed." },
        { en: "Call the gas company from outside or from a neighbor's home." },
        { en: "Never turn the gas back on yourself. A gas company worker or other qualified person must check the lines and relight the pilot lights. This can take days after a big disaster." },
      ],
    },
    {
      type: "p",
      text: {
        en: "Learn where your main water valve and electrical panel are too. See {{water}} for the water valve.",
      },
    },

    { type: "h", id: "extinguisher-use", text: { en: "Using a fire extinguisher" } },
    {
      type: "p",
      text: {
        en: "The U.S. Fire Administration says to use an extinguisher only if all of these are true: everyone has been warned, someone has called 911, you are able to do it, the fire is small and not spreading, you are not breathing smoke, and you have a clear way out behind you. If not, get out and call 911 from outside. Young children and older adults should not use fire extinguishers.",
      },
    },
    {
      type: "steps",
      items: [
        { en: "Pull the pin, with the nozzle pointed away from you." },
        { en: "Aim low, at the base of the fire, not the flames." },
        { en: "Squeeze the lever slowly and evenly." },
        { en: "Sweep the nozzle from side to side until the fire is out. Watch for it to start again, and leave if it does." },
      ],
    },
    {
      type: "p",
      text: {
        en: "Many fire departments teach hands-on extinguisher classes. Check the pressure gauge on each extinguisher when you check your kits; the needle should be in the green.",
      },
    },

    { type: "h", id: "garden-gear", text: { en: "Garden" } },
    {
      type: "list",
      items: [
        { en: "[[open-pollinated|Open-pollinated]] seeds for crops your family eats, stored cool and dry, and a [[germination-test|germination test]] once a year." },
        { en: "A spade, garden fork, hoe, rake, hand trowel, and pruners." },
        { en: "A watering can, hoses, a rain gauge, and [[mulch|mulch]] (straw or leaves)." },
        { en: "Lumber or blocks for [[raised-bed|raised beds]], and food-grade buckets for [[bucket-planter|bucket planters]]." },
        { en: "A [[soil-test|soil test]] before growing food in old yards." },
        { en: "[[row-cover|Row cover]] and materials for a [[cold-frame|cold frame]]." },
        { en: "Compost bins, [[hardware-cloth|hardware cloth]] to keep out animals, and [[seed-potato|certified seed potatoes]]." },
      ],
    },

    { type: "h", id: "trapping-gear", text: { en: "Trapping, fishing, and cleaning game" } },
    {
      type: "list",
      items: [
        { en: "[[cage-trap|Cage traps]] sized for rabbits and squirrels." },
        { en: "A small fishing kit: line, hooks, sinkers, bobbers, and a [[minnow-trap|minnow trap]]." },
        { en: "[[disposable-gloves|Disposable gloves]], a sharp knife and sharpener, a cutting board used only for game, and zip bags." },
        { en: "A [[food-thermometer|food thermometer]] to cook game to a safe temperature." },
        { en: "Check your local hunting, trapping, and fishing rules before using any of these. See {{trapping}}." },
      ],
    },

    { type: "h", id: "hand-tools", text: { en: "Hand tools for fixing things without power" } },
    {
      type: "list",
      items: [
        { en: "Hammer, assorted nails and screws, screwdrivers (flat and Phillips), and a cordless drill with spare charged batteries." },
        { en: "Adjustable wrenches (one 12-inch), pliers, locking pliers, and wire cutters." },
        { en: "A handsaw, a pry bar, a utility knife with spare blades, and a multi-tool for each adult." },
        { en: "A shovel, an axe or hatchet, and work gloves for everyone old enough to help." },
        { en: "Duct tape, a roll of plastic sheeting, tarps with grommets, rope or cord, bungee cords, and zip ties." },
        { en: "A tape measure, a pencil, and a level." },
        { en: "Plumbing basics: a plunger, plumber's tape, a few hose clamps, and pipe repair tape." },
        { en: "A sewing kit with heavy thread, safety pins, and patches." },
        { en: "A ladder, and a stepstool for the kitchen." },
      ],
    },

    { type: "h", id: "bags-and-cars", text: { en: "Go-bags and cars" } },
    {
      type: "p",
      text: {
        en: "Packing and fitting each [[go-bag|go-bag]] is covered in {{bugging-out}}. These are the things to buy for it.",
      },
    },
    {
      type: "list",
      items: [
        { en: "One backpack per person with a hip belt, sized to the person." },
        { en: "Contractor bags as pack liners, zip bags, and a [[emergency-blanket|foil emergency blanket]] for each person." },
        { en: "A dry sleep set in a sealed bag, wool or synthetic socks, [[gaiters|gaiters]], rain gear, and blister tape." },
        { en: "A water bottle and a small filter, food for 3 days, a [[headlamp|headlamp]], a whistle, and a knife or multi-tool." },
        { en: "Paper maps with routes marked, copies of documents, cash in small bills, a [[power-bank|power bank]], and a hand-crank radio." },
        { en: "Each person's medical card, a small first aid kit with a [[tourniquet|tourniquet]], and chemical heat packs." },
        { en: "Car kit: a first aid kit, blankets, a flashlight, jumper cables, a small shovel, an ice scraper, sand or kitty litter for traction, water, snacks, a phone charger, a bright cloth to signal for help, and a fire extinguisher. Keep the gas tank at least half full. See {{seasons}} for being stranded in a car in winter." },
      ],
    },

    { type: "h", id: "babies-elders", text: { en: "Babies, older adults, and people with disabilities" } },
    {
      type: "list",
      items: [
        { en: "Babies: [[ready-to-feed-formula|ready-to-feed formula]] (it needs no water), bottles, diapers and wipes for two weeks or more, diaper rash cream, a baby carrier, and a [[wearable-blanket|wearable blanket]]." },
        { en: "Children: a comfort toy, books, games, and a photo of each child in case you are separated." },
        { en: "Older adults: spare glasses, hearing aid batteries, a cane or walker, denture supplies, and incontinence supplies." },
        { en: "Medical devices: a backup power plan for anything that plugs in, spare batteries, and the supplier's phone number." },
        { en: "A bedside commode for anyone who cannot squat over a bucket toilet." },
        { en: "A written list of each person's needs, medicines, and doctors, kept with the medical cards." },
      ],
    },

    { type: "h", id: "pets-gear", text: { en: "Pets" } },
    {
      type: "p",
      text: {
        en: "Ready.gov and the CDC suggest keeping two kits for pets: a larger one for staying home, and a light one for leaving. The CDC checklist suggests a two-week supply of food and water for each animal.",
      },
    },
    {
      type: "list",
      items: [
        { en: "Two weeks of food in a waterproof container, and water for each animal on top of the family's water." },
        { en: "Bowls that do not spill, a manual can opener, and feeding instructions." },
        { en: "An extra supply of any medicines your pet takes, and a pet first aid kit your vet suggests." },
        { en: "A collar with ID tag, a harness, a strong leash, and a crate or carrier for each animal." },
        { en: "Copies of vaccination and medical records in a waterproof bag, the vet's phone number, and a photo of you with your pet." },
        { en: "Litter and a litter box, or waste bags, plus paper towels and trash bags." },
        { en: "A favorite toy, treats, or bedding to lower stress." },
      ],
    },

    { type: "h", id: "mind-gear", text: { en: "For the mind and the family library" } },
    {
      type: "list",
      items: [
        { en: "Practical books, including a printed copy of this guide (available from the website)." },
        { en: "Children's books for each reading level, a dictionary, and math workbooks to keep school going." },
        { en: "Card games, board games, puzzles, and art supplies." },
        { en: "One self-help book based on cognitive behavioral therapy, as described in {{mind}}." },
        { en: "Spare reading glasses." },
        { en: "Sealed plastic tubs to keep books dry." },
        { en: "Crisis phone numbers written on paper: see {{mind}}." },
      ],
    },

    { type: "h", id: "papers-cash", text: { en: "Important papers and cash" } },
    {
      type: "p",
      text: {
        en: "FEMA suggests keeping a binder of copies of important papers in a fireproof and waterproof box, next to your emergency kit, and keeping electronic copies somewhere safe away from home. FEMA's free Emergency Financial First Aid Kit has full checklists.",
      },
    },
    {
      type: "list",
      items: [
        { en: "IDs, birth and adoption certificates, marriage papers, passports, and Social Security cards (copies)." },
        { en: "Insurance policies, deed or lease, car titles, and photos or video of each room and your valuables for insurance claims." },
        { en: "Bank and credit card contacts (not full account numbers on loose paper), and the last tax return." },
        { en: "Medical cards, prescriptions, vaccination records, and pet records." },
        { en: "A paper list of family phone numbers, the out-of-area contact, and meeting places. See {{communications}}." },
        { en: "Cash in small bills, since card readers and ATMs may not work without power." },
        { en: "A spare set of house and car keys." },
        { en: "Encrypted flash drives with scans of all of the above, one carried by each of at least two adults. {{start-here|Start Here}} shows how to make them." },
      ],
    },

    // ==================================================================
    // KEEPING KITS READY
    // ==================================================================
    { type: "h", id: "keeping-ready", text: { en: "Storing and checking your kits" } },
    {
      type: "list",
      items: [
        { en: "Keep supplies cool, dry, and dark. Canned food goes in a cool, dry place; boxed food goes in tightly closed plastic or metal containers. Attics and hot cars shorten the life of food, water, medicine, and batteries." },
        { en: "Make sure every family member knows where the kits are." },
        { en: "Keep the home kit close to an exit so you can grab it on the way out." },
        { en: "Use a supply, then replace it right away. Write it on the shopping list the same day." },
        { en: "Look over your needs every year. Kits change as children grow, people move in, or someone's health changes." },
      ],
    },
    {
      type: "table",
      caption: { en: "When to check what" },
      head: [{ en: "When" }, { en: "What to check" }],
      rows: [
        [{ en: "Every month" }, { en: "Press the test button on every smoke alarm and carbon monoxide alarm. Check fire extinguisher gauges are in the green." }],
        [{ en: "Twice a year (when clocks change, or the first of spring and fall)" }, { en: "Check dates on food, water, medicines, and first aid supplies; replace what is used or expired. Change alarm batteries that are not sealed in. Check flashlights and radios. Charge power banks and power stations. Update go-bag clothes for the coming season. Add fuel stabilizer or use up old gasoline." }],
        [{ en: "Once a year" }, { en: "Rotate stored water as {{water}} describes. Run the generator under load. Test a few seeds. Update documents, phone lists, and medical cards. Practice the family plan." }],
        [{ en: "By the date on the label" }, { en: "Replace smoke alarms when they are 10 years old, and carbon monoxide alarms by the date the maker gives (often 5 to 7 years). Replace extinguishers that are past their date, have been used, or show a low gauge." }],
      ],
    },
    {
      type: "p",
      text: {
        en: "Once the shopping list is in place, {{start-here|Start Here}} pulls it all together into the first 72 hours and the months after.",
      },
    },

    // ==================================================================
    // SOURCES
    // ==================================================================
    { type: "source", title: "Build a Kit", publisher: "Ready.gov (FEMA)", url: "https://www.ready.gov/kit" },
    { type: "source", title: "Emergency Supply Kit Checklist", publisher: "Ready.gov (FEMA)", url: "https://www.ready.gov/sites/default/files/2020-03/ready_emergency-supply-kit-checklist.pdf" },
    { type: "source", title: "How to Build a Kit for Emergencies", publisher: "FEMA", url: "https://www.fema.gov/press-release/20250602/how-build-kit-emergencies" },
    { type: "source", title: "Build a Kit", publisher: "Ready Houston (Harris County and City of Houston)", url: "https://www.readyhoustontx.gov/prepare-today/build-a-kit" },
    { type: "source", title: "Anatomy of a First Aid Kit", publisher: "American Red Cross", url: "https://www.redcross.org/get-help/how-to-prepare-for-emergencies/anatomy-of-a-first-aid-kit" },
    { type: "source", title: "Must-Haves for Your First-Aid Kit", publisher: "CDC Public Health Matters", url: "https://blogs.cdc.gov/publichealthmatters/?p=12408" },
    { type: "source", title: "Smoke Alarms at Home (safety tip sheet)", publisher: "National Fire Protection Association (NFPA)", url: "https://www.nfpa.org/homesmokealarms" },
    { type: "source", title: "Choosing and Using Fire Extinguishers", publisher: "U.S. Fire Administration (FEMA)", url: "https://www.usfa.fema.gov/prevention/home-fires/prepare-for-fire/fire-extinguishers/" },
    { type: "source", title: "Safety Skills", publisher: "Ready.gov (FEMA)", url: "https://www.ready.gov/safety-skills" },
    { type: "source", title: "How to Shut Off Natural Gas", publisher: "Southern California Gas Company", url: "https://www.socalgas.com/safety/emergency-information/shut-off-natural-gas" },
    { type: "source", title: "Gas Safety", publisher: "Pacific Gas and Electric Company", url: "https://pgealerts.alerts.pge.com/safety/gas" },
    { type: "source", title: "Prepare Your Pets for Disasters", publisher: "Ready.gov (FEMA)", url: "https://www.ready.gov/pets" },
    { type: "source", title: "Pet Emergency Checklist", publisher: "CDC", url: "https://www.cdc.gov/healthy-pets/media/pdfs/disaster-prep-Pet-Emergency-Checklist-1.pdf" },
    { type: "source", title: "Copy, Keep Your Documents Safe and Accessible", publisher: "FEMA", url: "https://www.fema.gov/press-release/20250602/copy-keep-your-documents-safe-and-accessible" },
    { type: "source", title: "Emergency Financial First Aid Kit (EFFAK)", publisher: "FEMA and Operation HOPE", url: "https://www.ready.gov/financial-preparedness" },
  ],
};
