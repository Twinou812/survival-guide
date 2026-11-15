import type { Section } from "../types";

// Section 16: Cooking. Facts checked Nov 14, 2026 against the sources listed at the end.
// Numbers that should not be "simplified":
// - Red kidney beans (FDA Bad Bug Book via OSU Extension / Illinois Extension): as few as 4 or 5
//   raw or undercooked beans can make someone sick; soak at least 5 hours, pour off the water,
//   boil briskly in fresh water at least 30 minutes; slow cookers often reach only ~167°F (75°C).
//   Canned kidney beans are already cooked.
// - Soaking (NDSU Extension): per 2 cups (1 lb) dry beans: traditional 10 cups water 8+ h in the
//   fridge; quick soak 6 cups, boil 2-3 min, soak at least 1 h; hot soak 10 cups, boil 2-3 min,
//   soak up to 4 h. 1 lb dry = about 6 cups cooked; a 15-oz can = about 1 3/4 cups drained.
//   Pressure-cooker times (NDSU): black 20-30, pinto 15-20, navy 25-35, kidney 20-30,
//   garbanzo 15-25 minutes, then about 20 minutes natural release (UNL).
// - Stovetop bean water and times per 1 cup dry (UConn "Bean Magic").
// - FSIS: 2-hour rule (1 hour above 90°F); danger zone 40-140°F; reheat leftovers to 165°F;
//   soups/sauces to a rolling boil; leftovers within 4 days (refrigerated).
//   Safe minimum internal temperatures (FoodSafety.gov chart).
// - High altitude (FSIS): boiling point drops just under 1°F per 500 ft; about 198°F at 7,500 ft.
// - Dutch oven (Missouri Dept. of Conservation): about 2 briquettes per inch of diameter;
//   2/3 on the lid, 1/3 under; 10-in 325°F = 7 under + 13 on top; 12-in = 8 + 16; add 4 for 375°F;
//   turn oven and lid 90° every 15 min. Utah DEM: about 2 coals per 25°F change.
// - Solar ovens (Utah DEM): 300-360°F on sunny days (commercial ovens), best 10 AM-3 PM,
//   re-aim every 15-20 min. Homemade cardboard ovens run cooler.
// - Never heat an unopened can (Utah DEM).
// - Dry milk (Missouri Extension): 1 cup water + 1/3 cup instant nonfat dry milk; 1 quart =
//   3 3/4 cups water + 1 1/3 cups powder. Non-instant: about 3 Tbsp per cup (Illinois Extension).
//   Reconstituted milk keeps 3-5 days refrigerated (MSU Extension).
// - Dried egg products are pasteurized; use reconstituted egg right away or refrigerate and use
//   that day (FSIS). Dry whole egg: 2 1/2 Tbsp powder + 2 1/2 Tbsp water = 1 egg (NDSU).
// - Recipes: tortillas (MyPlate / Montana State Extension), bannock (Parks Canada),
//   cornbread (MyPlate / Cornell Extension).

export const cooking: Section = {
  id: "cooking",
  number: 16,
  title: { en: "Cooking" },
  summary: { en: "Cooking stored food with no power: beans, grains, homemade pasta, breads without an oven (including a loaf on the grill), solar and Dutch ovens, and keeping food safe." },
  blocks: [
    {
      type: "p",
      text: {
        en: "Stored food only helps if you can turn it into meals people will eat. Rice, beans, wheat, and dry milk are cheap and keep for decades, but they need water, fuel, and know-how to cook. This section shows how to cook them well with little fuel, how to make bread with no oven, how to use a Dutch oven and a solar oven, and how to keep cooked food from making anyone sick. The {{food-storage|Food Storage}} section covers what to store, the fuel-saving [[haybox]], drying, and canning; {{power-light-sanitation|Power, Light, and Sanitation}} covers stoves and storing fuel. This section builds on both.",
      },
    },
    {
      type: "warning",
      text: {
        en: "Cook outside. Camp stoves, grills, charcoal, and rocket stoves make [[carbon-monoxide|carbon monoxide]], a gas you cannot see or smell that kills. Never use them inside the house, garage, carport, or a tent, or near a door, window, or vent. Indoors, use only a fireplace with a working chimney or a stove labeled for indoor use, with a working carbon monoxide alarm.",
      },
    },

    // ==================================================================
    { type: "h", id: "plan", text: { en: "Plan your cooking before you need it" } },
    {
      type: "list",
      items: [
        { en: "Have at least two ways to cook that don't need wall power, for example a camp stove and a charcoal grill. Utah's emergency management office suggests fuel for at least 2 weeks of cooking. One standard 20-pound propane tank lasts about 18 to 20 hours of cooking." },
        { en: "Pick meals that cook in one pot with a lid. They use the least fuel and the least wash water." },
        { en: "Save fuel by soaking beans and grains, cutting food small, keeping the lid on, and finishing long-cooking food in a [[haybox]]." },
        { en: "Keep a [[food-thermometer|food thermometer]], long-handled tongs and spoon, heat-proof gloves, a [[manual-can-opener|manual can opener]], and matches or lighters in a waterproof bag with your cooking gear." },
        { en: "Practice now. Cook one dinner a month outdoors with only your stored food and your backup stove. You will find what's missing while the stores are still open." },
      ],
    },

    // ==================================================================
    { type: "h", id: "methods", text: { en: "Ways to cook with no power" } },
    {
      type: "table",
      caption: { en: "Cooking methods compared. Every flame or coal method here is for outdoors only, except a fireplace with a working chimney." },
      head: [{ en: "Method" }, { en: "Good for" }, { en: "Watch out for" }],
      rows: [
        [{ en: "Camp stove (propane or butane)" }, { en: "Boiling, frying, everyday meals" }, { en: "Outdoors only. Check hose connections for leaks with soapy water; bubbles mean a leak." }],
        [{ en: "Charcoal or gas grill" }, { en: "Meat, flatbread on a pan, boiling in a pot on the grate" }, { en: "Outdoors only, away from siding and deck railings. Open a gas grill's lid before lighting." }],
        [{ en: "[[rocket-stove|Rocket stove]]" }, { en: "Boiling with twigs and scrap wood" }, { en: "Outdoors only. Burns small sticks fast; have them cut and ready." }],
        [{ en: "[[dutch-oven|Dutch oven]] with charcoal" }, { en: "Baking bread, stews, beans, roasts" }, { en: "Hot coals on the lid; use tongs and gloves. Set it on dirt, gravel, or a metal tray, never on a deck." }],
        [{ en: "[[solar-oven|Solar oven]]" }, { en: "Rice, beans, stews, bread, on sunny days" }, { en: "Slow, and only in strong sun. Use a thermometer for meat." }],
        [{ en: "Fireplace" }, { en: "Boiling and stews in a cast-iron pot near the coals" }, { en: "Chimney must be clean and working. Keep the screen in place and never leave the fire." }],
        [{ en: "[[haybox|Haybox]] (heat-keeping box)" }, { en: "Finishing rice, oats, soaked beans with no fuel" }, { en: "Food must boil first. Bring it back to a boil if it has cooled to just warm." }],
        [{ en: "Candles, canned chafing fuel" }, { en: "Warming a cup of soup or water, not real cooking" }, { en: "Fire risk and slow. Never leave them burning; open a window a little." }],
      ],
    },
    {
      type: "p",
      text: {
        en: "The {{power-light-sanitation|Power, Light, and Sanitation}} section has the full stove table, how to build a rocket stove, and how to store each kind of fuel safely.",
      },
    },

    // ==================================================================
    { type: "h", id: "dutch-oven", text: { en: "Baking and stewing in a Dutch oven" } },
    {
      type: "p",
      text: {
        en: "A camp [[dutch-oven|Dutch oven]] is a heavy cast-iron pot with three short legs and a flat, rimmed lid that holds hot coals. With charcoal on top and underneath, it works like a small oven: you can bake bread, cornbread, biscuits, and casseroles, or simmer beans and stews for hours. A 10-inch or 12-inch oven feeds most families.",
      },
    },
    {
      type: "list",
      items: [
        { en: "Rule of thumb: use about 2 charcoal briquettes for every inch across the oven. A 12-inch oven needs about 24." },
        { en: "Heat rises, so put about two-thirds of the coals on the lid and one-third underneath for baking." },
        { en: "Each extra 25°F (about 14°C) takes about 2 more briquettes, mostly on the lid." },
        { en: "For stews and beans, put most of the coals underneath instead; they need heat from below, not a browned top." },
        { en: "Coals make hot spots. Every 15 minutes, lift the oven and turn it a quarter turn, then turn the lid a quarter turn the other way." },
        { en: "Wind, cold, and rain steal heat. Shield the oven from wind and expect to add coals on cold days." },
      ],
    },
    {
      type: "table",
      caption: { en: "Starting briquette counts for a standard-depth cast-iron Dutch oven (Missouri Department of Conservation for 325°F; higher temperatures follow the 2-per-25°F rule). Brands of charcoal burn differently, so check the food and adjust." },
      head: [{ en: "Oven size" }, { en: "325°F (165°C)" }, { en: "350°F (175°C)" }, { en: "375°F (190°C)" }, { en: "400°F (205°C)" }],
      rows: [
        [{ en: "10-inch" }, { en: "7 under, 13 on top" }, { en: "7 under, 15 on top" }, { en: "8 under, 16 on top" }, { en: "8 under, 18 on top" }],
        [{ en: "12-inch" }, { en: "8 under, 16 on top" }, { en: "9 under, 17 on top" }, { en: "9 under, 19 on top" }, { en: "10 under, 20 on top" }],
      ],
    },
    {
      type: "steps",
      items: [
        { en: "Light the briquettes in a charcoal chimney starter or a small pile. They are ready when they are covered in gray ash." },
        { en: "Set the oven on bare dirt, gravel, or a metal tray, out of the wind. Use tongs to set the bottom coals in a ring under the outer part of the oven, not bunched in the middle." },
        { en: "Put the food in. For bread, you can grease the oven or set a greased pie tin on a few small stones inside so the bottom doesn't scorch." },
        { en: "Put the lid on and set the top coals evenly around the rim and across the lid, with a few in the middle." },
        { en: "Turn the oven and lid every 15 minutes. Peek only near the end; every peek lets heat out." },
        { en: "To check, lift the lid straight up with a lid lifter or pliers so ash doesn't fall in. Bread is done when it sounds hollow when tapped or a clean stick comes out clean." },
        { en: "Let coals burn out to ash, then soak them with water and stir. Never dump hot coals where someone could step on them." },
      ],
    },
    {
      type: "sketch",
      sketch: "dutch-oven-coals",
      caption: { en: "A Dutch oven on three legs with a ring of coals underneath and more coals spread across the lid." },
    },
    {
      type: "list",
      items: [
        { en: "Care: wash with hot water and a scraper, dry it over low heat, and wipe on a thin coat of oil while warm. Soaking it or putting it away wet causes rust." },
        { en: "If it rusts, scrub the rust off, wash, dry, and heat it with a thin coat of oil until the oil stops smoking." },
      ],
    },

    // ==================================================================
    { type: "h", id: "solar-oven", text: { en: "Cooking with the sun" } },
    {
      type: "p",
      text: {
        en: "A [[solar-oven|solar oven]] is an insulated box with a clear lid and shiny reflectors that bounce sunlight onto a dark pot. It uses no fuel at all, makes no smoke or carbon monoxide, and almost never burns food. Store-bought solar ovens reach about 300°F to 360°F (150°C to 180°C) on sunny days, according to Utah's emergency management office. A homemade cardboard oven runs cooler, so it cooks more like a slow cooker.",
      },
    },
    {
      type: "list",
      items: [
        { en: "Best hours are about 10 AM to 3 PM. Food put in by mid-morning cooks better than food started after lunch." },
        { en: "Turn the oven to face the sun every 15 to 20 minutes for the fastest cooking. If you will be away, aim it where the sun will be in an hour." },
        { en: "Use dark pots with lids: black enamel, cast iron, or a pot painted flat black on the outside (never inside). Thin pots heat faster." },
        { en: "Cut food small and don't open the lid more than you must." },
        { en: "Clear days in winter still work, just more slowly." },
        { en: "Expect things to take about twice as long as on a stove: rice and vegetables a few hours, soaked beans most of the day." },
      ],
    },
    { type: "p", text: { en: "How to build a simple box solar oven:" } },
    {
      type: "steps",
      items: [
        { en: "Find two cardboard boxes, one that fits inside the other with 1 to 2 inches of space on every side. The inner box should hold your pot with about 2 inches to spare." },
        { en: "Fill the space between the boxes with crumpled newspaper, dry grass, or wool. Don't use foam that could melt." },
        { en: "Line the inside of the inner box with aluminum foil, then cover the bottom with a thin dark metal sheet, a dark baking tray, or flat black paper. The dark bottom soaks up heat." },
        { en: "Cover the top with a sheet of window glass, or a clear oven-roasting bag stretched tight if you have no glass. The cover traps the heat; a good seal matters more than anything else." },
        { en: "Make a reflector from a large piece of cardboard covered smoothly with foil (wrinkles scatter the light). Hinge it to the back edge and prop it with a stick so it bounces sunlight down onto the pot." },
        { en: "Test it on an empty day with a thermometer inside. Note how hot it gets and how long it takes, and write it down." },
      ],
    },
    {
      type: "sketch",
      sketch: "solar-box-oven",
      caption: { en: "A cardboard box solar oven: a glass top, a foil reflector propped toward the sun, and a dark lidded pot inside." },
    },
    {
      type: "warning",
      text: {
        en: "Food safety in a solar oven: meat, poultry, eggs, and beans must reach a safe temperature, checked with a food thermometer (table below). Cook meat only on days with steady full sun. If clouds come and food sits warm but not cooking for more than 2 hours, finish it on a stove or throw it out. Never leave cooked food sitting in a cooling solar oven overnight. Glass and pots get very hot; use oven gloves, and keep children from looking at the reflector in bright sun.",
      },
    },

    // ==================================================================
    { type: "h", id: "pantry", text: { en: "Cooking from the pantry" } },
    {
      type: "p",
      text: {
        en: "Most long-term food is dry grains, beans, dry milk, oil, sugar, and salt (see the one-year staples table in {{food-storage|Food Storage}}). Families who have never cooked these struggle at first, and sudden large amounts of beans and whole wheat can cause gas and stomach upset. Start working them into everyday meals now and increase slowly.",
      },
    },
    {
      type: "list",
      items: [
        { en: "Grains and beans together make good protein. Grains (rice, wheat, corn, oats) and beans or lentils each lack some building blocks of protein that the other has. They don't have to be in the same meal; eating both over the course of the day works." },
        { en: "Add dry milk, eggs, cheese, canned meat, fish, or peanut butter when you have them, for more protein and fat." },
        { en: "Fat is fuel. Stored grains and beans are low in fat, and a hard-working person can lose weight fast on them. Add a spoonful of oil or butter to grains and beans." },
        { en: "Don't forget vitamin C (sprouts, garden greens, potatoes, sauerkraut, or tablets); see the scurvy warning in {{food-storage|Food Storage}}." },
        { en: "Spices, bouillon, onion flakes, hot sauce, and sugar make plain food something people want to eat. Store them; they are small and cheap." },
      ],
    },
    {
      type: "table",
      caption: { en: "A week of pantry meals as ideas, built from the long-term staples plus canned food. Swap in what your family likes." },
      head: [{ en: "Day" }, { en: "Breakfast" }, { en: "Main meal" }],
      rows: [
        [{ en: "1" }, { en: "Oatmeal with dry milk and sugar" }, { en: "Rice and beans with salsa or hot sauce; tortillas" }],
        [{ en: "2" }, { en: "Cracked wheat cereal with dry milk" }, { en: "Pasta with canned tomatoes and canned meat" }],
        [{ en: "3" }, { en: "Pancakes from flour, dry milk, and powdered egg" }, { en: "Lentil soup with onion flakes; bannock" }],
        [{ en: "4" }, { en: "Oatmeal with dried fruit" }, { en: "Bean chili with cornbread" }],
        [{ en: "5" }, { en: "Scrambled powdered egg; tortilla" }, { en: "Rice with canned chicken and canned vegetables" }],
        [{ en: "6" }, { en: "Cornmeal mush with sugar" }, { en: "Split pea soup; flatbread" }],
        [{ en: "7" }, { en: "Leftover cornbread with peanut butter" }, { en: "Whole wheat berries with beans and canned fish; sprouts" }],
      ],
    },

    // ==================================================================
    { type: "h", id: "beans", text: { en: "Beans with less fuel" } },
    {
      type: "p",
      text: {
        en: "Dry beans are cheap protein, but they take the most fuel of anything in the pantry. Soaking cuts the cooking time. Before soaking, spread the beans out and pick out stones and shriveled beans, then rinse. One pound (2 cups) of dry beans makes about 6 cups cooked; a 15-ounce can is about 1 3/4 cups drained.",
      },
    },
    {
      type: "table",
      caption: { en: "Three ways to soak 2 cups (1 pound) of dry beans (North Dakota State University Extension). Pour off the soaking water and cook in fresh water." },
      head: [{ en: "Method" }, { en: "Water" }, { en: "How" }],
      rows: [
        [{ en: "Overnight soak" }, { en: "10 cups" }, { en: "Soak at least 8 hours, in a cool place or fridge." }],
        [{ en: "Quick soak" }, { en: "6 cups" }, { en: "Boil 2 to 3 minutes, take off the heat, cover, soak at least 1 hour." }],
        [{ en: "Hot soak" }, { en: "10 cups" }, { en: "Boil 2 to 3 minutes, take off the heat, cover, soak up to 4 hours. Makes the most tender beans and less gas." }],
      ],
    },
    {
      type: "table",
      caption: { en: "Simmering times for 1 cup of dry beans after soaking, in a covered pot (University of Connecticut). Each makes about 3 cups. Old beans take longer; at high altitude everything takes longer." },
      head: [{ en: "Bean" }, { en: "Water per 1 cup dry" }, { en: "Simmer" }],
      rows: [
        [{ en: "Black beans" }, { en: "3 cups" }, { en: "About 2 hours" }],
        [{ en: "Kidney beans (see warning)" }, { en: "3 cups" }, { en: "About 2 hours" }],
        [{ en: "Pinto or pink beans" }, { en: "3 cups" }, { en: "About 2 hours" }],
        [{ en: "Navy beans" }, { en: "3 cups" }, { en: "1 1/2 to 2 hours" }],
        [{ en: "Great Northern beans" }, { en: "2 1/2 cups" }, { en: "1 to 1 1/2 hours" }],
        [{ en: "Lima beans" }, { en: "2 1/2 cups" }, { en: "45 minutes to 1 hour" }],
        [{ en: "Black-eyed peas" }, { en: "2 1/2 cups" }, { en: "About 30 minutes" }],
        [{ en: "Lentils (no soaking needed)" }, { en: "2 1/2 cups" }, { en: "About 30 minutes" }],
      ],
    },
    {
      type: "warning",
      text: {
        en: "Red kidney beans are poisonous until boiled hard. Raw or undercooked kidney beans contain a natural toxin; the FDA says as few as 4 or 5 undercooked beans can cause severe vomiting and diarrhea within a few hours. Soak them at least 5 hours, pour off the water, then boil them briskly in fresh water for at least 30 minutes before simmering, slow cooking, or using a haybox or solar oven. Slow cookers, hayboxes, and cool solar ovens don't get hot enough on their own and can make it worse. White kidney (cannellini) beans have less of the toxin but get the same treatment. Canned kidney beans are already cooked and safe. Never eat raw or sprouted kidney beans.",
      },
    },
    { type: "p", text: { en: "Fuel-saving bean method for a stove or fire:" } },
    {
      type: "steps",
      items: [
        { en: "Hot-soak the beans (table above), then pour off the soaking water." },
        { en: "Cover with fresh water by about 2 inches, put the lid on, and bring to a full boil. Boil 10 minutes (30 minutes for kidney beans)." },
        { en: "Move the pot, still boiling and lid on, into a [[haybox]] for 3 to 4 hours." },
        { en: "Taste a few. If they are still firm, bring them back to a boil and box them again. Salt and acidic foods like tomatoes slow softening, so add those at the end." },
      ],
    },
    {
      type: "list",
      items: [
        { en: "A [[pressure-cooker|pressure cooker]] on a camp stove cooks 1 pound of dry beans in under an hour. North Dakota State University gives these times at high pressure: pinto 15 to 20 minutes, garbanzo 15 to 25, black 20 to 30, kidney 20 to 30, navy 25 to 35, then let the pressure drop on its own for about 20 minutes. Beans foam, so fill it no higher than the maker's line for beans and follow its manual." },
        { en: "Save the bean cooking water (not the soaking water) for soup; it carries flavor and some nutrients." },
        { en: "Old beans that stay hard: see the baking soda tip in {{food-storage|Food Storage}}, or grind them into bean flour for soup." },
        { en: "Cooked beans keep only about 4 days in a fridge. With no fridge, cook only what you will eat that day, or keep the leftovers above 140°F (60°C) and bring them back to a boil before eating." },
      ],
    },

    // ==================================================================
    { type: "h", id: "grains", text: { en: "Rice, oats, and whole wheat" } },
    {
      type: "list",
      items: [
        { en: "White rice and rolled oats are the fuel savers: follow the package amounts, boil 5 minutes, then finish in a [[haybox]] for 1 to 2 hours (see {{food-storage|Food Storage}})." },
        { en: "Whole wheat berries: soak overnight, then simmer about an hour, or boil 10 minutes and finish in a haybox. Use them like rice, in soups, or as a hot cereal." },
        { en: "Cracked wheat cooks much faster. Crack whole wheat on the coarsest setting of a [[grain-mill|grain mill]] (or a blender, a little at a time). Typical directions: stir 1 cup cracked wheat into 3 cups boiling salted water, cover, and simmer 15 to 20 minutes, stirring now and then." },
        { en: "Flour: grind only what you will use soon. Whole wheat flour goes stale and bitter quickly because grinding lets air reach the oils in the grain." },
        { en: "Cooking water from pasta and grains can thicken soup; nothing needs to be poured away." },
      ],
    },
    {
      type: "warning",
      text: {
        en: "Cooked rice needs extra care. A germ in rice survives cooking as tough spores, then multiplies if cooked rice sits warm, making a toxin that reheating does not destroy. Eat rice soon after cooking. Don't leave cooked rice, pasta, or beans out more than 2 hours (1 hour above 90°F, 32°C). With no fridge, cook only as much as you will eat at that meal.",
      },
    },

    // ==================================================================
    { type: "h", id: "pasta", text: { en: "Making pasta by hand" } },
    {
      type: "p",
      text: {
        en: "Store-bought dry pasta keeps for years and is the easy choice; follow the package. When it runs out, flour, eggs (fresh or powdered), salt, and water make noodles with no machine. A rolling pin or a smooth bottle and a sharp knife are all you need.",
      },
    },
    { type: "p", text: { en: "Homemade egg noodles (about 4 servings; recipe from University of Illinois Extension):" } },
    {
      type: "steps",
      items: [
        { en: "Wash your hands. Pour 1 3/4 cups all-purpose flour onto a clean table or into a wide bowl and make a hollow in the middle. Keep another 1/4 cup flour nearby." },
        { en: "In a small bowl, beat 2 egg yolks, 1 whole egg, 1/2 teaspoon salt, 1/3 cup water, and 1 teaspoon cooking oil. Powdered egg works: mix up the amount for 2 eggs." },
        { en: "Pour the egg mix into the hollow and stir it in until it comes together." },
        { en: "Knead on a floured surface for 8 to 10 minutes, until smooth. Add the extra flour only if the dough sticks." },
        { en: "Shape it into a ball, cover it with a clean towel, and let it rest 10 minutes." },
        { en: "Cut the dough into 3 pieces. Roll each one on a floured surface as thin as you can, until you can almost see through it. Dust both sides with flour." },
        { en: "Roll each sheet up loosely like a towel and slice across it with a sharp knife to make noodles about 1/4 inch wide. Shake them loose." },
        { en: "Drop the noodles into a big pot of water at a rolling boil and stir so they don't stick. Fresh noodles take about 2 to 4 minutes; thick ones take longer. They are done when they float and are tender all the way through when you bite one." },
      ],
    },
    {
      type: "list",
      items: [
        { en: "No eggs: use the same flour and salt with water alone, adding it a spoonful at a time until the dough is stiff and not sticky. The noodles are plainer but cook the same way." },
        { en: "Whole wheat: University of Illinois Extension suggests 1/2 cup all-purpose flour plus 1 1/2 cups whole wheat flour with 3 beaten eggs, made the same way." },
        { en: "Save fuel and water by cooking noodles right in soup or stew, or in just enough water, with the lid on." },
      ],
    },
    {
      type: "warning",
      text: {
        en: "Egg noodles are raw egg until cooked. Never taste the raw dough. Don't leave fresh noodles out at room temperature more than 2 hours. Cook them right away, or keep them cold and use them within 3 days. With no fridge, cook them the same day you make them.",
      },
    },
    {
      type: "list",
      items: [
        { en: "To keep them longer, dry them in a food dehydrator at 135°F (57°C) for 2 to 4 hours, until a noodle snaps in half instead of bending." },
        { en: "Fully dried noodles keep about 1 month in an airtight container at room temperature, or 3 to 6 months in a freezer. Dried noodles take about 10 to 12 minutes to cook." },
      ],
    },

    // ==================================================================
    { type: "h", id: "breads", text: { en: "Bread with no oven" } },
    {
      type: "p",
      text: {
        en: "Flatbreads, [[bannock]], and skillet breads need only flour, salt, water, a little fat, and baking powder, all of which store well. They cook in minutes in a pan, much faster than a loaf.",
      },
    },
    {
      type: "warning",
      text: {
        en: "Don't eat raw dough or batter, and don't let children play with it. The FDA warns that raw flour can carry E. coli, a germ that causes bloody diarrhea and kidney damage; cooking kills it. Cook breads all the way through, and wash hands and surfaces after handling flour.",
      },
    },
    { type: "p", text: { en: "Skillet tortillas (makes 10; recipe from MyPlate and Montana State University Extension):" } },
    {
      type: "steps",
      items: [
        { en: "Mix 2 cups all-purpose flour (or 1 1/2 cups all-purpose and 1/2 cup whole wheat), 1 teaspoon baking powder, and 1/2 teaspoon salt." },
        { en: "Stir in 2 tablespoons vegetable oil until crumbly." },
        { en: "Add 1/2 cup warm water, then more 1 tablespoon at a time, until it forms a soft ball. All whole wheat flour needs 1/2 to 3/4 cup water in all." },
        { en: "Knead a minute or two, cover, and let it rest 10 minutes. Divide into 10 balls and roll or press each one very thin." },
        { en: "Heat a dry [[cast-iron-skillet|cast-iron skillet]] or other heavy pan over medium-high heat. Cook one at a time until light brown spots appear underneath, about a minute, then turn and cook the other side." },
        { en: "Stack them in a clean towel to stay soft." },
      ],
    },
    {
      type: "sketch",
      sketch: "skillet-flatbread",
      caption: { en: "A flatbread cooking in a cast-iron skillet on a camp stove; a hand turns it with a spatula when brown spots show." },
    },
    { type: "p", text: { en: "Bannock (one large round; recipe from Parks Canada, Rocky Mountain House National Historic Site):" } },
    {
      type: "steps",
      items: [
        { en: "Mix 3 cups flour, 3 teaspoons baking powder, and 3 tablespoons oil. Add a pinch of salt if you like." },
        { en: "Add 1 cup cold water and knead well. Roll it into a ball and let it rest, covered, for 10 minutes." },
        { en: "In a pan: press the ball into a hot, lightly oiled cast-iron skillet over the fire and cook about 15 minutes, until golden brown. Turn it once if the top is still doughy. While it's warm, cut it into slices." },
        { en: "On a stick: roll a piece of dough into a rope about as thick as a finger and wind it around a thick green stick with the bark peeled off. Hold it over hot coals, not flames, and turn it often. It is done when it is brown all over, sounds hollow when tapped, and slides off the stick." },
      ],
    },
    {
      type: "sketch",
      sketch: "bannock-stick",
      caption: { en: "Bannock dough wound around a peeled stick, held well above a small campfire so it bakes without burning." },
    },
    { type: "p", text: { en: "Cornbread (12 squares; recipe from MyPlate and Cornell Cooperative Extension):" } },
    {
      type: "steps",
      items: [
        { en: "Mix 1 cup cornmeal, 1 cup all-purpose flour, 2 tablespoons sugar, and 1 tablespoon baking powder." },
        { en: "In another bowl, beat 1 egg (or powdered egg made up for 1 egg), 1/4 cup oil, and 1 cup milk (dry milk is fine). Stir into the dry mix just until wet." },
        { en: "Pour into a greased 8- or 9-inch pan. In a kitchen oven, bake at 425°F (220°C) for 20 to 25 minutes." },
        { en: "With no oven, set the pan on small stones inside a 12-inch Dutch oven heated to about 400°F (table above), or pour the batter straight into a greased 10-inch Dutch oven. Bake 20 to 30 minutes, until the top is firm and a clean stick comes out clean." },
      ],
    },
    { type: "p", text: { en: "A yeast loaf in foil on a grill or fire:" } },
    {
      type: "p",
      text: {
        en: "A grill with a lid works as an oven if the bread is not right over the heat. Iowa State University Extension says anything you can bake in a kitchen oven can be baked on a grill using indirect heat. A heavy-duty aluminum foil pan and a foil cover stand in for a loaf pan and oven.",
      },
    },
    { type: "p", text: { en: "Dough (one round loaf; no-knead recipe from University of Illinois Extension):" } },
    {
      type: "steps",
      items: [
        { en: "Stir 1/4 teaspoon active dry yeast into 1 1/2 cups warm water. Add 3 cups flour and 1 1/2 teaspoons salt and stir until it's a sticky dough." },
        { en: "Cover the bowl and let it sit at least 8 hours, best 12 to 18 hours (overnight), until the top is dotted with bubbles." },
        { en: "Turn it onto a floured surface, fold it over on itself once or twice, cover, and rest 15 minutes." },
        { en: "Shape it into a ball or log, using only enough flour to keep it from sticking." },
        { en: "Make a pan: fold a double layer of heavy-duty foil into a shallow tray with sides about 3 inches high, or use a store-bought foil loaf or pie pan doubled up. Oil it lightly or dust it with flour or cornmeal." },
        { en: "Set the dough in the foil pan, cover it with a towel, and let it rise 1 to 2 hours, until doubled and a poke with a finger doesn't spring back." },
      ],
    },
    { type: "p", text: { en: "Baking it:" } },
    {
      type: "steps",
      items: [
        { en: "Set up indirect heat. Charcoal grill: push the hot coals to one side and bake on the other side. Gas grill: light the burners on the sides or one side and leave the burner under the bread off. Campfire: rake a bed of glowing coals to one side of a fire grate and bake on the grate beside it, not over flames." },
        { en: "Put the lid on and let the grill heat to about 375°F (190°C). Use the lid thermometer, or an oven thermometer set on the grate." },
        { en: "Set the foil pan on the cool side. To protect the bottom, set it on an upside-down metal pan or a ring of crumpled foil to lift it a little off the grate." },
        { en: "Cover the loaf loosely with a tent of foil, tall enough that the dough can rise without touching it. Over an open fire with no grill lid, cover it with a second foil pan turned upside down and crimp the edges together, leaving room above the dough." },
        { en: "Close the grill lid. Every 15 minutes, turn the pan halfway around so the side facing the heat changes. Keep the heat steady by adding a few coals or adjusting the gas." },
        { en: "After about 30 minutes, take off the foil tent so the top can brown. A loaf this size usually takes about 45 minutes in all." },
        { en: "It is done when the crust is firm and brown, it sounds hollow when tapped on the bottom, and a [[food-thermometer|food thermometer]] pushed into the center reads 195°F to 210°F (90°C to 99°C)." },
        { en: "Let it cool at least 30 minutes before slicing; the inside is still finishing." },
      ],
    },
    {
      type: "sketch",
      sketch: "foil-loaf-grill",
      caption: { en: "A round loaf in a foil pan on the unheated side of a grill, lifted off the grate, with the hot coals pushed to the other side." },
    },
    {
      type: "list",
      items: [
        { en: "Burned bottom, raw middle: the heat is too strong under the bread. Move it farther from the coals, lift it higher, and lower the heat." },
        { en: "Pale and doughy after an hour: the grill is too cool or the lid is opened too often. Add coals and keep the lid closed." },
        { en: "Don't use glass baking dishes on a grill; even oven-safe glass can break." },
        { en: "The same dough bakes well in a 12-inch Dutch oven at 375°F: University of Illinois Extension uses 18 coals on the lid and 9 underneath for 45 minutes." },
      ],
    },
    { type: "p", text: { en: "Sourdough starter, for raised bread with no yeast:" } },
    {
      type: "list",
      items: [
        { en: "A [[sourdough-starter|sourdough starter]] is flour and water left to collect wild yeast and bacteria. Mix a small amount of whole wheat or all-purpose flour with water into a thick batter, about like muffin batter, in a clean jar. Cover it loosely and keep it near 70°F (21°C)." },
        { en: "Feed it fresh flour and water twice a day at room temperature, pouring off part of it first so the jar doesn't overflow. South Dakota State University Extension says it takes 7 to 10 days to be ready." },
        { en: "It is ready when it is full of bubbles, pours slowly, and a small spoonful floats in water. Use some in place of yeast in bread and keep feeding the rest." },
        { en: "Once it is established, a fridge-kept starter needs feeding only once a week." },
        { en: "Throw it out and start over if you see mold, a foul smell, or pink, orange, or green spots or streaks. A gray liquid on top is normal; stir it in or pour it off." },
      ],
    },

    // ==================================================================
    { type: "h", id: "safety", text: { en: "Keeping cooked food safe" } },
    {
      type: "p",
      text: {
        en: "Food poisoning is more dangerous when there's no clean water, no doctor, and no fridge. Germs grow fastest between 40°F and 140°F (4°C and 60°C).",
      },
    },
    {
      type: "list",
      items: [
        { en: "Wash hands before cooking and after handling raw meat, eggs, or flour. {{power-light-sanitation|Power, Light, and Sanitation}} shows how to set up a handwashing station with little water." },
        { en: "Keep raw meat, its juices, and the knife and board it touched away from food that won't be cooked. Wash them before using them for anything else." },
        { en: "Use a [[food-thermometer|food thermometer]]. Color and juices don't tell you if meat is safe." },
        { en: "Don't leave cooked food out more than 2 hours, or 1 hour when it's above 90°F (32°C). Keep hot food at 140°F (60°C) or hotter until you eat it." },
        { en: "Reheat leftovers to 165°F (74°C). Bring soups, sauces, and gravies to a [[rolling-boil|rolling boil]]." },
        { en: "With a fridge or cooler at 40°F (4°C) or colder, eat leftovers within 4 days. With no cold storage, cook only what you will eat at that meal. See {{food-storage|Food Storage}} for what to do when the power goes out." },
        { en: "Cool big pots fast by dividing food into shallow containers, not by leaving a full pot on the counter." },
      ],
    },
    {
      type: "table",
      caption: { en: "Safe minimum internal temperatures, measured with a food thermometer in the thickest part (USDA / FoodSafety.gov). Temperatures for rabbit, venison, and wild birds are in the Trapping and Prey section." },
      head: [{ en: "Food" }, { en: "Cook to" }],
      rows: [
        [{ en: "Beef, pork, lamb, goat: steaks, chops, roasts" }, { en: "145°F (63°C), then rest 3 minutes" }],
        [{ en: "Ground meat and sausage" }, { en: "160°F (71°C)" }],
        [{ en: "Chicken, turkey, all poultry, including ground" }, { en: "165°F (74°C)" }],
        [{ en: "Fish" }, { en: "145°F (63°C), or until the flesh is opaque and flakes with a fork" }],
        [{ en: "Egg dishes" }, { en: "160°F (71°C); cook eggs until yolk and white are firm" }],
        [{ en: "Casseroles, leftovers" }, { en: "165°F (74°C)" }],
      ],
    },
    {
      type: "list",
      items: [
        { en: "High altitude: water boils at a lower temperature the higher you live, just under 1°F lower for every 500 feet. At 7,500 feet it boils at about 198°F (92°C). Turning up the heat doesn't help; boiled and simmered food just needs more time. Keep the lid on so it doesn't dry out, and check meat with a thermometer." },
      ],
    },

    // ==================================================================
    { type: "h", id: "cans", text: { en: "Heating canned food" } },
    {
      type: "list",
      items: [
        { en: "Commercially canned food is already cooked. You can eat it cold, straight from the can, if you have no way to heat it." },
        { en: "To heat it, pour it into a pot. That's best." },
        { en: "If you must heat food in its can, peel off the paper label first and open the can before heating. Stir often, and handle the hot can with tongs or gloves." },
        { en: "Check every can before use: no bulging, leaking, deep dents on the seams, or spurting when opened. See the canned food rules and botulism signs in {{food-storage|Food Storage}}." },
      ],
    },
    {
      type: "warning",
      text: {
        en: "Never heat an unopened can, in a fire, on a stove, or in a pot of water. Steam builds up inside and the can can burst, spraying scalding food and sharp metal.",
      },
    },

    // ==================================================================
    { type: "h", id: "dry-milk-eggs", text: { en: "Dry milk, powdered eggs, and oil" } },
    {
      type: "table",
      caption: { en: "Mixing instant nonfat dry milk (University of Missouri Extension). Non-instant dry milk is more concentrated: about 3 tablespoons per cup of water." },
      head: [{ en: "To make" }, { en: "Water" }, { en: "Instant dry milk" }],
      rows: [
        [{ en: "1/2 cup" }, { en: "1/2 cup" }, { en: "3 tablespoons" }],
        [{ en: "1 cup" }, { en: "1 cup" }, { en: "1/3 cup" }],
        [{ en: "1 quart" }, { en: "3 3/4 cups" }, { en: "1 1/3 cups" }],
        [{ en: "1 gallon" }, { en: "15 1/2 cups" }, { en: "5 1/3 cups" }],
      ],
    },
    {
      type: "list",
      items: [
        { en: "Whisk or shake it with cool, safe water (see {{water|Water}}) until there are no lumps. It tastes better cold." },
        { en: "Mixed milk spoils like fresh milk. It keeps 3 to 5 days in a fridge; with no fridge, mix only what you'll use right away." },
        { en: "Dry milk can go straight into recipes dry: add the powder with the flour and the water with the liquids." },
        { en: "Buy powdered eggs labeled as pasteurized egg products with the USDA inspection mark. Mix them as the package says, or about 2 1/2 tablespoons powder with 2 1/2 tablespoons lukewarm water for one egg." },
        { en: "Use mixed powdered egg right away, or keep it cold and use it the same day. Cook scrambled egg until firm and egg dishes to 160°F (71°C)." },
        { en: "Cooking oil keeps only 1 to 2 years. Store smaller bottles, use them in turn, and throw out oil that smells sharp, like paint or crayons; that's rancid." },
      ],
    },

    // ==================================================================
    { type: "h", id: "special", text: { en: "Feeding children, elders, and people with allergies" } },
    {
      type: "list",
      items: [
        { en: "Babies: breast milk or ready-to-feed formula is safest when water and power are out. See the baby feeding rules in {{food-storage|Food Storage}}." },
        { en: "Children under 4 choke easily. The American Academy of Pediatrics says not to give them round, firm foods unless cut into small, non-round pieces. Watch out for hot dogs, nuts, meat chunks, grapes, hard candy, popcorn, chunks of peanut butter, raisins, and raw carrots. Children should sit while eating, with an adult nearby." },
        { en: "Older adults or anyone who has trouble chewing or swallowing: cook food soft, mash or blend it, cut it small, and add broth or milk to keep it moist. Have them sit fully upright, eat slowly with small bites, and stay upright for a while after. Coughing or choking while eating, a wet or gurgly voice after swallowing, or repeated chest infections are signs to get medical help when you can." },
        { en: "Missing teeth or a sore mouth: soak dry bread in soup, cook grains into porridge, and mash beans. See tooth care in {{medical|Medical}}." },
      ],
    },
    {
      type: "p",
      text: {
        en: "Food allergies don't go away in a disaster, and help may be far off. Most U.S. food allergies come from nine foods: milk, eggs, fish, shellfish, tree nuts, peanuts, wheat, soybeans, and sesame. The only protection is avoiding the food completely.",
      },
    },
    {
      type: "list",
      items: [
        { en: "Store safe foods for the allergic person and label them clearly. Read every label, including on donated or traded food." },
        { en: "Cross-contact: even a trace from a shared spoon, pan, cutting board, or hands can cause a reaction. Cook the allergy-safe meal first with clean utensils, cover it, and set it aside before making the rest." },
        { en: "Wheat allergy or celiac disease: store rice, corn, oats labeled gluten-free, potatoes, and beans, and keep their flour separate." },
        { en: "Keep the person's own epinephrine auto-injectors where everyone can find them, and teach the family how to use them. See anaphylaxis in {{medical|Medical}}." },
      ],
    },

    // ==================================================================
    { type: "h", id: "water", text: { en: "Saving water when cooking and cleaning up" } },
    {
      type: "list",
      items: [
        { en: "Cook one-pot meals with just enough water, and keep the lid on so less boils away." },
        { en: "Cook pasta in less water than usual and use the starchy water in sauce or soup." },
        { en: "Scrape plates and pots clean and wipe them with a paper towel or cloth before washing." },
        { en: "Soak pots right after cooking with a little water and the lid on; dried-on food takes far more water to remove." },
        { en: "Wash dishes in three basins (wash, rinse, sanitize), as shown in {{power-light-sanitation|Power, Light, and Sanitation}}." },
        { en: "Never cook with water that isn't safe to drink. See {{water|Water}} for how to make water safe." },
      ],
    },

    // ==================================================================
    { type: "h", id: "long-run", text: { en: "Planning for 90 days to 2 years" } },
    {
      type: "table",
      caption: { en: "Building cooking skills over time." },
      head: [{ en: "When" }, { en: "What to do" }],
      rows: [
        [{ en: "Now" }, { en: "Get a second way to cook outdoors and 2 weeks of fuel. Buy a food thermometer, a cast-iron skillet, and a manual can opener. Cook one outdoor dinner a month from stored food." }],
        [{ en: "First 72 hours" }, { en: "Eat food from the fridge first, then the freezer, then the pantry. Use canned and ready-to-eat food; cook outside only." }],
        [{ en: "By 90 days" }, { en: "Cook beans from dry, tortillas, bannock, homemade noodles, and a loaf on the grill with your family at least once each. Build and test a solar oven. Start a sourdough starter." }],
        [{ en: "By 6 months" }, { en: "Get a camp Dutch oven and charcoal, and bake bread and cornbread in it. Try a pressure cooker on the camp stove. Grind wheat and cook cracked wheat." }],
        [{ en: "By 1 year" }, { en: "Store more fuel and know how long it lasts for your family. Write your family's favorite pantry recipes on cards with amounts for your household size." }],
        [{ en: "By 2 years" }, { en: "Cook a full week of pantry meals with no grocery shopping. Teach older children to cook three meals safely on their own." }],
      ],
    },
    {
      type: "p",
      text: {
        en: "Tools for this section are listed in {{tools-kits|Tools and Kits}}. The {{calculators|Calculators}} will help you scale recipes and fuel to your family size.",
      },
    },

    // ==================================================================
    { type: "source", title: "Emergency cooking methods (solar ovens, Dutch ovens, heat-in-can, fuel amounts)", publisher: "Utah Division of Emergency Management (Be Ready Utah)", url: "https://dem.utah.gov/resource/emergency-cooking-methods/" },
    { type: "source", title: "Dutch Oven Cooking 101", publisher: "Missouri Department of Conservation", url: "https://mdc.mo.gov/node/246451" },
    { type: "source", title: "Go Dutch! (Dutch oven briquette counts)", publisher: "University of Arizona Cooperative Extension", url: "https://cales.arizona.edu/backyards/sites/cals.arizona.edu.backyards/files/p6-7.pdf" },
    { type: "source", title: "Solar cooking FAQ (box cookers take about twice as long as an oven; leave about 2 in of space around the pot)", publisher: "Solar Cookers International wiki", url: "https://solarcooking.fandom.com/wiki/File:Thermo2.gif" },
    { type: "source", title: "Solar cooker construction manual", publisher: "Cornell University", url: "https://confluence.cornell.edu/download/attachments/109223722/Solar%20cooker%20construction%20manual%202008.pdf?api=v2" },
    { type: "source", title: "Bad Bug Book: Phytohaemagglutinin (kidney bean lectin)", publisher: "U.S. Food and Drug Administration (archived)", url: "https://wayback.archive-it.org/7993/20170406190307/https://www.fda.gov/Food/FoodborneIllnessContaminants/CausesOfIllnessBadBugBook/ucm071092.htm" },
    { type: "source", title: "Chow Line: Dry kidney beans need to be boiled", publisher: "Ohio State University Extension", url: "https://cfaes.osu.edu/news/articles/chow-line-dry-kidney-beans-need-be-boiled" },
    { type: "source", title: "Kidney beans and slow cookers", publisher: "University of Illinois Extension", url: "https://extension.illinois.edu/blogs/live-well-eat-well/2024-02-29-kidney-beans-and-slow-cookers" },
    { type: "source", title: "Field to Fork: Pressure cook dry beans to save money and time (FN1939)", publisher: "North Dakota State University Extension", url: "https://www.ndsu.edu/agriculture/sites/default/files/2024-08/fn1939.pdf" },
    { type: "source", title: "Cooking dry beans from scratch can be quick", publisher: "University of Nebraska–Lincoln Extension", url: "https://food.unl.edu/cooking-dry-beans-scratch-can-be-quick" },
    { type: "source", title: "Bean Magic (cooking times and water per cup)", publisher: "University of Connecticut Community Nutrition", url: "https://communitynutrition.cahnr.uconn.edu/wp-content/uploads/sites/3067/2020/08/Bean-Magic.pdf" },
    { type: "source", title: "How to store and cook dried beans", publisher: "University of Maine Cooperative Extension", url: "https://extension.umaine.edu/food-health/2021/09/02/how-to-store-and-cook-dried-beans/" },
    { type: "source", title: "Complementary proteins", publisher: "Tulane University Goldring Center for Culinary Medicine", url: "https://goldringcenter.tulane.edu/wp-content/uploads/sites/10/2022/11/Complementary-Proteins.pdf" },
    { type: "source", title: "Cracked wheat breakfast cereal (package directions)", publisher: "Bob's Red Mill", url: "https://www.bobsredmill.com/recipes/how-to-make/cracked-wheat-breakfast-cereal" },
    { type: "source", title: "Preventing foodborne illness: Bacillus cereus (FS269)", publisher: "University of Florida IFAS Extension", url: "https://edis.ifas.ufl.edu/publication/FS269/pdf" },
    { type: "source", title: "Flour tortillas", publisher: "USDA MyPlate (Montana State University Extension)", url: "https://myplate-prod.azureedge.us/recipes/flour-tortillas" },
    { type: "source", title: "Whole wheat tortillas", publisher: "Montana State University Extension", url: "https://iframe.msuextension.org/NEP/default.cfm?getid=6323" },
    { type: "source", title: "Heritage Gourmet Recipes: Bannock", publisher: "Parks Canada", url: "https://parks.canada.ca/culture/gourmand-gourmet/recette-recipe66" },
    { type: "source", title: "Corn bread", publisher: "USDA MyPlate (Cornell University Cooperative Extension)", url: "https://myplate-prod.azureedge.us/recipes/corn-bread" },
    { type: "source", title: "Homemade egg noodles", publisher: "University of Illinois Extension", url: "https://extension.illinois.edu/sites/default/files/022020_homemade_noodles_.pdf" },
    { type: "source", title: "Homemade noodles: easier than you think (whole wheat version)", publisher: "University of Illinois Extension", url: "https://extension.illinois.edu/blogs/simply-nutritious-quick-and-delicious/2016-05-09-homemade-noodles-easier-you-think" },
    { type: "source", title: "Making homemade noodles safely", publisher: "Iowa State University Extension and Outreach (AnswerLine)", url: "https://blogs.extension.iastate.edu/answerline/2019/03/14/making-homemade-noodles-safely/" },
    { type: "source", title: "Outdoor cooking recipes (no-knead bread)", publisher: "University of Illinois Extension", url: "https://extension.illinois.edu/sites/default/files/out_door_cooking_0.pdf" },
    { type: "source", title: "Get fired up! Tips for baking on the grill", publisher: "Iowa State University Extension and Outreach (AnswerLine)", url: "https://blogs.extension.iastate.edu/answerline/tag/grill-baking" },
    { type: "source", title: "When are baked goods done? (yeast bread 195–210°F)", publisher: "Kansas State University Research and Extension", url: "https://4-h.ksu.edu/events-activities/fairs/kansas-state-fair/docs/food-preservation/When%20are%20Baked%20Goods%20Done.doc" },
    { type: "source", title: "Sourdough starters", publisher: "South Dakota State University Extension", url: "https://extension.sdstate.edu/sourdough-starters" },
    { type: "source", title: "Raw dough's a raw deal and could make you sick", publisher: "U.S. Food and Drug Administration" },
    { type: "source", title: "Leftovers and food safety", publisher: "USDA Food Safety and Inspection Service", url: "https://www.fsis.usda.gov/es/node/3288" },
    { type: "source", title: "Safe minimum internal temperature chart", publisher: "FoodSafety.gov", url: "https://www.foodsafety.gov/print/pdf/node/10" },
    { type: "source", title: "High altitude cooking and food safety", publisher: "USDA Food Safety and Inspection Service", url: "https://www.fsis.usda.gov/es/node/3340" },
    { type: "source", title: "Shelf-stable food safety", publisher: "USDA Food Safety and Inspection Service", url: "https://www.fsis.usda.gov/es/node/3296" },
    { type: "source", title: "Nonfat dry milk (N691)", publisher: "University of Missouri Extension", url: "https://extension.missouri.edu/publications/n691" },
    { type: "source", title: "Recipe substitutions (dry milk)", publisher: "University of Illinois Extension", url: "https://extension.illinois.edu/food/recipe-substitutions" },
    { type: "source", title: "Nonfat dry milk (E-1703)", publisher: "Michigan State University Extension", url: "https://sanweb.lib.msu.edu/DMC/Ag.%20Ext.%202007-Chelsie/PDF/e1703-1990.pdf" },
    { type: "source", title: "Ingredient substitutions (dry whole egg)", publisher: "North Dakota State University Extension", url: "https://www.ndsu.edu/agriculture/extension/publications/ingredient-substitutions" },
    { type: "source", title: "Egg products and food safety", publisher: "USDA Food Safety and Inspection Service", url: "https://www.fsis.usda.gov/es/node/3373" },
    { type: "source", title: "Airway obstruction: identifying high-risk situations (AAP advice on foods for children under 4)", publisher: "Nationwide Children's Hospital", url: "https://www.nationwidechildrens.org/conditions/health-library/airway-obstruction-identifying-high-risk-situations" },
    { type: "source", title: "Swallowing problems (dysphagia)", publisher: "nidirect (UK government)", url: "https://nidirect.gov.uk/node/10520" },
    { type: "source", title: "Dysphagia (signs and diet changes)", publisher: "Vanderbilt Health Library", url: "https://healthlibrary.vanderbilthealth.com/134,534" },
    { type: "source", title: "Food allergies (nine major food allergens)", publisher: "U.S. Food and Drug Administration", url: "https://www.fda.gov/allergens" },
    { type: "source", title: "Food allergies: what you need to know (cross-contact)", publisher: "USDA Food Safety and Inspection Service", url: "https://www.fsis.usda.gov/es/node/3524" },
  ],
};
