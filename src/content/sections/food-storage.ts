import type { Section } from '../types';

// Section 3: Food Storage. Facts checked Nov 14, 2026 against the sources listed at the end.
// Numbers that matter for safety (fridge/freezer hours, 40°F, canning and boiling times,
// jerky temperatures, sauerkraut salt ratio) are copied exactly from USDA, CDC, FEMA,
// and extension guidance. Do not round or "simplify" them.

export const foodStorage: Section = {
  id: 'food-storage',
  number: 3,
  title: { en: 'Food Storage' },
  summary: { en: 'What to store, how to store it, and how long it lasts.' },
  blocks: [
    {
      type: 'p',
      text: {
        en: 'Food comes after water, but it decides how long a family can stay put. The aim is simple: keep food you already eat, keep it cool, dry and sealed, and eat the oldest first. With a little planning, plain staples like rice, beans and wheat can last 30 years.',
      },
    },

    // ------------------------------------------------------------------
    { type: 'h', id: 'start', text: { en: 'Start with what you already eat' } },
    {
      type: 'p',
      text: {
        en: 'The best food store is a bigger version of your normal pantry. Buy a few extra of what your family already eats each time you shop, and use the oldest first. Food nobody likes gets wasted, and a sudden change of diet in a crisis can upset stomachs, especially in children and older people.',
      },
    },
    {
      type: 'table',
      caption: { en: 'Build your store in layers. Finish one layer before starting the next.' },
      head: [{ en: 'Layer' }, { en: 'What it looks like' }],
      rows: [
        [
          { en: '3 days' },
          { en: 'Food that needs no cooking and little water: canned meat, fish, fruit and vegetables, peanut butter, crackers, cereal, protein bars, dried fruit, shelf-stable milk. A manual can opener.' },
        ],
        [
          { en: '2 weeks' },
          { en: 'More of the same, plus easy meals: canned soups and stews, pasta and sauce, rice, oatmeal, instant potatoes.' },
        ],
        [
          { en: '3 months' },
          { en: 'Your normal meals, stocked deeper. Write down two weeks of what your family really eats, then buy six times that, a little at a time.' },
        ],
        [
          { en: '1 year and longer' },
          { en: 'Dry staples packed to last decades: wheat, white rice, dry beans, oats, pasta, sugar, salt, nonfat dry milk, cooking oil. See below.' },
        ],
      ],
    },

    // ------------------------------------------------------------------
    { type: 'h', id: 'how-much', text: { en: 'How much food' } },
    {
      type: 'p',
      text: {
        en: 'Most adults need about 1,600 to 3,000 calories a day. Women and older people are at the low end; men, teenagers, and anyone doing hard physical work are at the high end. Pregnant and nursing mothers need more. In a crisis, people work harder than usual (hauling water, gardening, cutting wood), so plan toward the higher number. The {{calculators}} section works out totals for your family, including babies, older people, and pets.',
      },
    },
    {
      type: 'table',
      caption: {
        en: 'Basic dry staples for one adult for one year (Brigham Young University). Shelf life is for food packed with very little air and kept at room temperature or cooler. Swap grains for other grains as your family prefers.',
      },
      head: [{ en: 'Food' }, { en: 'Amount for 1 adult, 1 year' }, { en: 'Shelf life' }],
      rows: [
        [{ en: 'Wheat' }, { en: '132 lb (60 kg)' }, { en: '30+ years' }],
        [{ en: 'White rice' }, { en: '65 lb (29 kg)' }, { en: '30+ years' }],
        [{ en: 'Rolled oats' }, { en: '29 lb (13 kg)' }, { en: '20 years' }],
        [{ en: 'Pasta' }, { en: '21 lb (10 kg)' }, { en: '25 years' }],
        [{ en: 'Dry beans, lentils, split peas' }, { en: '62 lb (28 kg)' }, { en: '25 years' }],
        [{ en: 'Nonfat dry milk' }, { en: '60 lb (27 kg)' }, { en: '15 years' }],
        [{ en: 'Sugar or honey' }, { en: '70 lb (32 kg)' }, { en: '30+ years' }],
        [{ en: 'Salt (iodized)' }, { en: '8 lb (3.6 kg)' }, { en: '30+ years' }],
        [{ en: 'Cooking oil' }, { en: '2 gallons (7.5 liters)' }, { en: 'About 1 year' }],
      ],
    },
    {
      type: 'warning',
      text: {
        en: 'Store vitamin C. Grains, beans, and dry milk have almost none. Eating less than 10 mg a day can cause scurvy, a dangerous illness, within a few months. Vitamin C tablets are cheap and keep for years. Fresh greens, potatoes, sauerkraut, and fruit from the garden also provide it.',
      },
    },

    // ------------------------------------------------------------------
    { type: 'h', id: 'power-out', text: { en: 'When the power goes out' } },
    {
      type: 'p',
      text: {
        en: 'Eat in this order: first the food in the refrigerator, then the freezer, and only then your stored food. Food in your store keeps; food in the fridge does not.',
      },
    },
    {
      type: 'list',
      items: [
        { en: 'Keep the doors shut. A closed refrigerator keeps food safe for about 4 hours.' },
        { en: 'A full freezer stays cold for about 48 hours; a half-full one for about 24 hours, if the door stays closed. Tape a list of what is inside to the door so you can grab things quickly.' },
        { en: 'Keep an [[appliance-thermometer]] in the fridge and freezer. 40°F (4°C) is the line that matters.' },
        { en: 'Throw out meat, poultry, fish, eggs, milk, leftovers, and cut fruit that have been above 40°F (4°C) for more than 2 hours.' },
        { en: 'These are fine even if warm: hard cheese, butter, bread, uncut fresh fruit, peanut butter, jelly, mustard, ketchup, and pickles.' },
        { en: 'Thawed food can be refrozen if it still has ice crystals or is at 40°F (4°C) or below. Ice cream cannot.' },
        { en: '25 pounds of [[dry-ice|dry ice]] keeps a 10 cubic foot freezer below freezing for 3 to 4 days. Learn now where it is sold near you.' },
      ],
    },
    {
      type: 'sketch',
      sketch: 'appliance-thermometer',
      caption: { en: 'A small dial thermometer that hangs on a fridge or freezer shelf.' },
    },
    {
      type: 'p',
      text: {
        en: 'Before an outage you know is coming, fill empty freezer space with jugs of water. Frozen jugs keep food cold longer, and they become drinking water as they melt. A good cooler packed with ice or frozen jugs can hold the most important food for a day or two more.',
      },
    },
    {
      type: 'p',
      text: {
        en: 'Freezing weather outside? Do not just set food out in the snow or on the porch. Sunlight can thaw frozen food even when the air is below freezing, the temperature swings between day and night, and animals will find it. Use the cold to make ice instead: fill buckets, jugs, or cans with water (not to the top, since ice expands) and leave them outside in the shade or overnight. Then pack the ice into the fridge, freezer, or a cooler.',
      },
    },
    {
      type: 'p',
      text: {
        en: 'If you must keep food outside, use a closed, latched cooler in full shade on the north side of the house, off the ground, with a thermometer inside. Check it morning and afternoon. Cold food must stay at 40°F (4°C) or below, and frozen food is only still frozen while it has ice crystals.',
      },
    },
    {
      type: 'warning',
      text: {
        en: 'Never taste food to find out if it is safe. Germs that make people sick usually cannot be seen, smelled, or tasted. When in doubt, throw it out.',
      },
    },

    // ------------------------------------------------------------------
    { type: 'h', id: 'where', text: { en: 'Where to keep food in the house' } },
    {
      type: 'p',
      text: {
        en: 'Heat is the biggest enemy of stored food. Food scientists use a simple rule: every 10.8°F (6°C) warmer cuts shelf life in half. A garage or attic can ruin food in a single summer. Moisture, air, and light also shorten shelf life.',
      },
    },
    {
      type: 'table',
      caption: { en: 'How storage temperature changes the life of well-packed dry food (Utah State University Extension).' },
      head: [{ en: 'Storage temperature' }, { en: 'About how long it lasts' }],
      rows: [
        [{ en: '40°F (4°C)' }, { en: '40 years' }],
        [{ en: '50°F (10°C)' }, { en: '30 years' }],
        [{ en: '60°F (16°C)' }, { en: '20 years' }],
        [{ en: '70°F (21°C)' }, { en: '10 years' }],
        [{ en: '80°F (27°C)' }, { en: '5 years' }],
        [{ en: '90°F (32°C)' }, { en: '2.5 years' }],
      ],
    },
    {
      type: 'list',
      items: [
        { en: 'Best: somewhere dark that stays between 40°F and 60°F (4°C and 16°C), and does not freeze. Below 85°F (29°C) is the most a pantry should reach.' },
        { en: 'Good places in a small house: closets on inside walls, under beds, a basement, the floor of a cool bedroom closet.' },
        { en: 'Keep food away from the water heater, furnace, stove, dryer, and sunny windows.' },
        { en: 'Raise buckets and boxes off concrete floors with boards so damp cannot creep in.' },
        { en: 'Avoid places that can flood. Food that floodwater touches must be thrown out, sealed or not, except undamaged commercial cans that are cleaned first.' },
      ],
    },

    // ------------------------------------------------------------------
    { type: 'h', id: 'cans', text: { en: 'Canned food' } },
    {
      type: 'p',
      text: {
        en: 'Store-bought cans are the easiest food to store: they need no cooking, no water, and no special care. The date on the can is about best taste, not safety. A can in good shape stays safe well past it, though the food slowly loses flavor and vitamins.',
      },
    },
    {
      type: 'table',
      caption: { en: 'How long unopened canned food keeps its best quality (USDA).' },
      head: [{ en: 'Kind' }, { en: 'Examples' }, { en: 'Best within' }],
      rows: [
        [{ en: '[[high-acid-food|High-acid]]' }, { en: 'Tomatoes, fruit, pickles, sauerkraut' }, { en: '12 to 18 months' }],
        [{ en: '[[low-acid-food|Low-acid]]' }, { en: 'Meat, fish, soup, beans, corn, most vegetables' }, { en: '2 to 5 years' }],
        [{ en: 'Home-canned' }, { en: 'Anything you put up yourself' }, { en: '1 year' }],
      ],
    },
    { type: 'p', text: { en: 'Check every can before you open it:' } },
    {
      type: 'list',
      items: [
        { en: 'A small, shallow dent on the flat side is fine.' },
        { en: 'Throw it out if a dent is deep enough to lay a finger in, or if any dent is on a seam (the rim at top or bottom, or the line down the side).' },
        { en: 'Throw it out if it is bulging, swollen, or leaking.' },
        { en: 'Light rust that wipes off is fine. Heavy rust that leaves pits can hide tiny holes: throw it out.' },
        { en: 'A soft hiss when opened is normal. A loud hiss, liquid spurting out, foam, or a bad smell means throw it out without tasting.' },
      ],
    },
    {
      type: 'sketch',
      sketch: 'can-dents',
      caption: { en: 'Left: a small dent on the side is fine. Middle: a sharp dent on the seam, throw it out. Right: a bulging end, throw it out.' },
    },
    {
      type: 'list',
      items: [
        { en: 'Keep at least two [[manual-can-opener|manual can openers]]. One is easy to lose.' },
        { en: 'Canned food can be eaten cold, straight from the can.' },
        { en: 'To heat food in its can, take the label off, wash the can, and open it first. Never heat a closed can: it can burst.' },
        { en: 'Once opened, move leftovers into a clean covered dish. Without a fridge, eat them the same day.' },
        { en: 'Some canned ham and seafood say "Keep Refrigerated." These are not shelf-stable and do not belong in your store.' },
      ],
    },

    // ------------------------------------------------------------------
    { type: 'h', id: 'long-term', text: { en: 'Dry staples that last decades' } },
    {
      type: 'p',
      text: {
        en: 'For a year or more of food, dry staples are the base. They are cheap, compact, and when packed with almost no air they last 20 to 30 years or more. Researchers at Brigham Young University tasted wheat and rice stored for over 30 years and found them still good to eat.',
      },
    },
    {
      type: 'list',
      items: [
        { en: 'Best for long storage: wheat, white rice, dry corn, dry beans, lentils, split peas, rolled oats, pasta, potato flakes, nonfat dry milk, dried apple slices, sugar, salt, baking soda, and baking powder.' },
        { en: 'Not for long storage (the oils in them turn stale and bitter): brown rice, whole wheat flour, nuts, seeds, pearled barley, and granola. Grinding grain into flour lets air reach the oils, so whole grain keeps far longer than flour. Jerky and dried eggs also keep only a short time. Eat and replace all of these often.' },
        { en: 'Cooking oil keeps only 1 to 2 years. Store several smaller bottles and use them in turn.' },
        { en: 'Whole wheat keeps far longer than flour, but you need a [[grain-mill|hand grain mill]] to turn it into flour. Wheat can also be boiled whole, like rice, for about an hour.' },
        { en: 'Old beans get hard and will not soften. Add 1/8 teaspoon of baking soda per cup of beans to the soaking water.' },
        { en: 'Practice cooking with your staples now. A family that has never baked bread from wheat will struggle to start in a crisis.' },
      ],
    },

    // ------------------------------------------------------------------
    { type: 'h', id: 'packing', text: { en: 'Packing dry food to last' } },
    {
      type: 'p',
      text: {
        en: 'Store-bought [[number-10-can|#10 cans]] of staples are already packed for the long term. To pack your own, the usual way is a [[food-grade-container|food-grade]] bucket lined with a [[mylar-bag|Mylar bag]], with [[oxygen-absorber|oxygen absorbers]] inside. The bag keeps out air and moisture, the absorbers remove the oxygen that makes food go stale and kills any bug eggs, and the bucket keeps out mice.',
      },
    },
    {
      type: 'warning',
      text: {
        en: 'Only pack food that is truly dry this way: about 10% moisture or less. Dried fruit and vegetables must be dry enough to snap when bent. Moist food sealed without air can grow the germ that causes [[botulism]], a deadly poisoning.',
      },
    },
    {
      type: 'steps',
      items: [
        { en: 'Wash and dry the bucket. Put the open Mylar bag inside it.' },
        { en: 'Fill the bag with the dry food, shaking the bucket now and then so it settles. Leave enough bag at the top to seal.' },
        { en: 'Open the oxygen absorbers last and work fast: they start working as soon as air touches them. Drop them on top of the food. Put any unused absorbers in a small glass jar with a tight lid right away.' },
        { en: 'Squeeze out as much air as you can, then seal the top of the bag. A clothes iron on its hottest setting, pressed along the bag top laid over a flat board, or a hair straightener, works well. Seal a strip about an inch (2–3 cm) wide.' },
        { en: 'Check the seal by trying to pull it open gently. Within a day or two the bag usually pulls in snug against the food. If it stays loose and puffy, the seal may be leaking: cut it open, add fresh absorbers, and seal again.' },
        { en: 'Put the lid on the bucket and write what is inside and the date on both the lid and the side.' },
      ],
    },
    {
      type: 'sketch',
      sketch: 'mylar-bucket',
      caption: { en: 'A bucket lined with a Mylar bag, filled with grain, with oxygen absorbers on top before sealing.' },
    },
    {
      type: 'sketch',
      sketch: 'seal-mylar',
      caption: { en: 'Sealing the bag: lay the top of the bag flat over a board and press it with a hot clothes iron.' },
    },
    {
      type: 'table',
      caption: {
        en: 'Rough guide to oxygen absorber size. Absorbers are rated in cc (the amount of oxygen they take up). Loose foods like pasta and beans have more air between pieces, so use the larger number. When unsure, add more: extra does no harm.',
      },
      head: [{ en: 'Container' }, { en: 'Absorber capacity' }],
      rows: [
        [{ en: 'Quart jar (1 liter)' }, { en: '100 to 300 cc' }],
        [{ en: '1 gallon (4 liter) Mylar bag or #10 can' }, { en: '300 to 500 cc' }],
        [{ en: '5 gallon (19 liter) bucket with Mylar bag' }, { en: '2,000 to 2,500 cc' }],
      ],
    },
    {
      type: 'list',
      items: [
        { en: 'Do not put oxygen absorbers in with sugar or salt. They turn rock hard. Store these sealed and dry, with no absorber. They keep almost forever.' },
        { en: 'A bucket alone, with a tight [[gamma-lid|gamma lid]] or gasket lid and no Mylar, is fine for wheat and dry beans you will use within a few years. Plastic lets a little air through, so it is not good for decades of storage, or for oats and rice.' },
        { en: 'Clean, dry [[pet-bottle|PET (PETE) soda or juice bottles]] with screw caps and a small absorber work well for small amounts of wheat, corn, and beans.' },
        { en: 'Pack in gallon bags inside the bucket rather than one big bag if you can. Then opening one does not expose the whole bucket.' },
      ],
    },
    {
      type: 'sketch',
      sketch: 'gamma-lid',
      caption: { en: 'A gamma lid: a ring snaps onto the bucket, and the middle screws in and out for easy opening.' },
    },

    // ------------------------------------------------------------------
    { type: 'h', id: 'pests', text: { en: 'Keeping bugs and mice out' } },
    {
      type: 'list',
      items: [
        { en: 'To kill any bugs or eggs in flour, grain, or beans, freeze them at 0°F (−18°C) for 3 to 4 days before packing. Let the food warm to room temperature before you open it, so damp does not form on it.' },
        { en: 'Oxygen absorbers in a sealed Mylar bag or can also kill insects.' },
        { en: 'Mice chew through cardboard, bags, and even Mylar. Keep food in metal cans, glass jars, or thick plastic buckets.' },
        { en: 'Check stored food every month for droppings, chewed corners, webs, or tiny moving bugs.' },
        { en: 'If you find a few [[pantry-pests|pantry beetles]] in grain, sift them out and freeze the rest. Throw out food that is crawling with bugs, moldy, or touched by mouse droppings or urine.' },
        { en: 'Bay leaves in grain to keep bugs away: Unproven. Many people do it, but there is little evidence it works. Use freezing and sealed containers instead.' },
      ],
    },

    // ------------------------------------------------------------------
    { type: 'h', id: 'rotate', text: { en: 'Eat what you store, store what you eat' } },
    {
      type: 'list',
      items: [
        { en: 'Use [[fifo|first in, first out]]: put new food at the back, take food from the front.' },
        { en: 'Write the date you bought it on every can and package with a thick marker.' },
        { en: 'Keep a paper list of what you have and where it is. Cross off and add as you go.' },
        { en: 'Cook one meal a week only from your long-term store. You will rotate it, and your family will learn to like it.' },
        { en: 'Look through the whole store twice a year, for example when the clocks change.' },
      ],
    },
    {
      type: 'sketch',
      sketch: 'fifo-shelf',
      caption: { en: 'A sloped can rack: new cans go in at the top back, and you take the oldest from the bottom front.' },
    },

    // ------------------------------------------------------------------
    { type: 'h', id: 'special', text: { en: 'Babies, special diets, and pets' } },
    {
      type: 'list',
      items: [
        { en: 'Breastfeeding is the safest way to feed a baby in an emergency. It needs no water, no cleaning, and protects babies from illness. If you are breastfeeding, keep going.' },
        { en: 'For formula-fed babies, store [[ready-to-feed-formula|ready-to-feed formula]]. It needs no water and comes sterile. Keep powdered formula as a backup, and mix it only with bottled or boiled water.' },
        { en: 'Never add extra water to formula to make it last longer. Too much water starves a baby of nutrients; too little strains the kidneys. Use the exact amounts on the label.' },
        { en: 'Never give honey to a baby under 1 year old. It can cause infant botulism.' },
        { en: 'Store baby food and cereal for each stage your baby will reach in the next year.' },
        { en: 'Plan around allergies, diabetes, and other diets now. Special foods are the first to vanish from stores.' },
        { en: 'Older people and anyone with dental problems may need softer foods: canned fruit, soups, oats, potato flakes.' },
        { en: 'Store pet food too, in sealed containers, and rotate it like your own.' },
      ],
    },

    // ------------------------------------------------------------------
    { type: 'h', id: 'cooking', text: { en: 'Cooking without power' } },
    {
      type: 'warning',
      text: {
        en: 'Never use a grill, camp stove, charcoal, or generator inside the house, garage, or carport, or near a door, window, or vent. They make carbon monoxide, a gas you cannot see or smell that kills hundreds of people every year. Cook outside, in the open.',
      },
    },
    {
      type: 'p',
      text: {
        en: 'A fireplace with a working chimney can be used indoors. Outside, use a camp stove, a grill, or a fire. The {{power-light-sanitation}} section covers stoves and storing fuel. Fuel is precious, so save it:',
      },
    },
    {
      type: 'list',
      items: [
        { en: 'Soak beans and whole grains overnight. They cook in much less time.' },
        { en: 'Always cook with a lid on the pot.' },
        { en: 'A stovetop pressure cooker cooks beans and grains in a fraction of the time.' },
        { en: 'Choose foods that cook fast: pasta, oats, lentils, potato flakes, white rice.' },
        { en: 'Use a [[haybox]] to finish cooking with no fuel at all (below).' },
      ],
    },
    { type: 'p', text: { en: 'How to use a haybox:' } },
    {
      type: 'steps',
      items: [
        { en: 'Make the box: a cooler, a large box, or a basket, packed with blankets, pillows, towels, or straw, with a hollow in the middle that fits your pot snugly.' },
        { en: 'Bring the food to a full boil in a pot with a tight lid. Boil beans and grains for about 10 minutes, rice and oats for about 5.' },
        { en: 'Move the hot pot straight into the hollow without lifting the lid. Cover the top with more padding.' },
        { en: 'Leave it. Rough times: rice and oats 1 to 2 hours, soaked beans 3 to 4 hours. Thick pots and full pots hold heat longer.' },
        { en: 'Eat it hot. If the food has cooled to just warm, bring it back to a boil before eating. Germs grow fast between 40°F and 140°F (4°C and 60°C).' },
      ],
    },
    {
      type: 'sketch',
      sketch: 'haybox',
      caption: { en: 'A haybox from the side: a lidded pot nested in a hollow of blankets inside a cooler, with padding on top.' },
    },

    // ------------------------------------------------------------------
    { type: 'h', id: 'preserving', text: { en: 'Making food last: drying, fermenting, canning, and cool storage' } },
    {
      type: 'p',
      text: {
        en: 'When you grow food, hunt, or trap, there will be times of plenty. These are the ways to keep it. See {{growing-food}} and {{trapping}} for getting the food in the first place.',
      },
    },

    { type: 'h', id: 'drying', text: { en: 'Drying' } },
    {
      type: 'list',
      items: [
        { en: 'Fruit and vegetables can be dried in a [[dehydrator|food dehydrator]], an oven on its lowest setting with the door open a crack, or in the sun in hot, dry weather (covered with screen or cheesecloth to keep insects off).' },
        { en: 'Cut pieces thin and even. Dried fruit should feel leathery with no moist spots; dried vegetables should be crisp.' },
        { en: 'Store dried food in airtight jars or bags in a cool, dark place. Check jars in the first week: if drops of water form inside, dry the food more.' },
      ],
    },
    {
      type: 'warning',
      text: {
        en: 'Jerky: heat meat to 160°F (71°C), and poultry to 165°F (74°C), before drying, for example by simmering the strips in their marinade. Then dry at 130°F to 140°F (54°C to 60°C). Drying raw meat does not kill germs. Home-dried jerky keeps about 1 to 2 months.',
      },
    },

    { type: 'h', id: 'sauerkraut', text: { en: 'Fermenting: sauerkraut' } },
    {
      type: 'p',
      text: {
        en: 'Sauerkraut is cabbage preserved with nothing but salt. It needs no power, keeps for months in a cool place, and gives vitamin C through the winter. The salt amount is what makes it safe, so measure it exactly.',
      },
    },
    {
      type: 'steps',
      items: [
        { en: 'Use 3 level tablespoons of [[canning-salt|canning or pickling salt]] for every 5 pounds (2.3 kg) of cabbage. Weigh the cabbage. A 1 gallon (4 liter) crock or food-grade bucket holds 5 pounds.' },
        { en: 'Remove the outer leaves and core. Shred the cabbage thin, about the thickness of a coin.' },
        { en: 'Mix the salt into the cabbage with clean hands and pack it down firmly until juice comes out and covers the cabbage.' },
        { en: 'Cover the cabbage with a plate and weigh it down so it stays under the juice. A sealed plastic bag of salty water works as the weight. Cover the crock with a clean towel.' },
        { en: 'Keep it at 70°F to 75°F (21°C to 24°C) for about 3 to 4 weeks. At 60°F to 65°F (16°C to 18°C) it takes 5 to 6 weeks. Below 60°F (16°C) it may not ferment; above 75°F (24°C) it goes soft.' },
        { en: 'Check every few days and skim off any scum on top. If the kraut itself turns pink, slimy, or smells rotten, throw it out.' },
      ],
    },
    {
      type: 'sketch',
      sketch: 'sauerkraut-crock',
      caption: { en: 'A crock from the side: cabbage packed under its own juice, a plate on top, and a weight holding it down.' },
    },

    { type: 'h', id: 'canning', text: { en: 'Canning at home' } },
    {
      type: 'p',
      text: {
        en: 'Home canning lets you keep garden food and meat on the shelf for a year. Done right, it is safe. Done wrong, it can kill. Learn it from a tested guide, such as the USDA Complete Guide to Home Canning, and practice before you depend on it. Print the guide now and keep it with your supplies.',
      },
    },
    {
      type: 'list',
      items: [
        { en: '[[low-acid-food|Low-acid foods]] (vegetables, meat, fish, beans, soups, and mixtures) must be canned in a [[pressure-canner]]. A pot of boiling water does not get hot enough to kill botulism spores.' },
        { en: '[[high-acid-food|High-acid foods]] (fruit, jams, pickles, sauerkraut, and tomatoes with added acid) can be canned in a [[water-bath-canner]].' },
        { en: 'Use only tested recipes, exactly as written, with the times and pressures adjusted for your altitude. Never invent a recipe or shorten a time.' },
        { en: 'Never use open-kettle canning (filling hot jars and just letting them seal), oven canning, or a slow cooker. They are not safe.' },
        { en: 'Store home-canned jars at 50°F to 70°F (10°C to 21°C), never above 95°F (35°C), and use them within a year.' },
      ],
    },
    {
      type: 'sketch',
      sketch: 'pressure-canner',
      caption: { en: 'A pressure canner: a heavy pot with a locking lid, a pressure gauge or weight on top, and a rack in the bottom.' },
    },
    {
      type: 'sketch',
      sketch: 'water-bath-canner',
      caption: { en: 'A water-bath canner: a tall pot with a rack, deep enough for jars to be covered by at least an inch (2–3 cm) of boiling water.' },
    },
    {
      type: 'warning',
      text: {
        en: 'Before eating home-canned low-acid food or tomatoes, boil it in a pan for 10 minutes, plus 1 more minute for every 1,000 feet (300 m) of altitude. This destroys the botulism poison. Throw out any jar with a bulging or loose lid, leaking, spurting liquid, mold, or a bad smell, without tasting it.',
      },
    },

    { type: 'h', id: 'cool-storage', text: { en: 'Keeping fresh vegetables without a fridge' } },
    {
      type: 'p',
      text: {
        en: 'Many garden crops keep for months in a cool corner of the house, a basement, an unheated room, or boxes buried in the ground, with no power at all. The trick is matching each crop to the right temperature and dampness.',
      },
    },
    {
      type: 'table',
      caption: { en: 'Storage conditions for common crops (Washington State University Extension).' },
      head: [{ en: 'Conditions' }, { en: 'Crops' }],
      rows: [
        [{ en: 'Cool and dry: 50–60°F (10–16°C), fairly dry air' }, { en: 'Pumpkins, winter squash' }],
        [{ en: 'Cold and dry: 32–50°F (0–10°C), fairly dry air' }, { en: 'Storage onions, garlic, dry beans' }],
        [{ en: 'Cold and damp: 32–40°F (0–4°C), damp air' }, { en: 'Potatoes, apples, cabbage' }],
        [{ en: 'Cold and very damp: 32–40°F (0–4°C), very damp air' }, { en: 'Carrots, beets, turnips, parsnips, rutabagas, leeks' }],
      ],
    },
    {
      type: 'list',
      items: [
        { en: '[[curing|Cure]] before storing. Onions: spread in one layer somewhere airy for 2 to 4 weeks. Potatoes: keep in the dark at 50°F to 65°F (10°C to 18°C) for 1 to 2 weeks.' },
        { en: 'Keep potatoes in the dark. Green patches taste bitter and can make people sick; cut them away deeply.' },
        { en: 'Potatoes are hurt by cold near freezing, so keep them a few degrees above the coldest spot.' },
        { en: 'Keep apples and pears away from vegetables. They give off a gas that makes nearby carrots and cabbage spoil faster, and they pick up odors from potatoes and onions.' },
        { en: 'Root crops like carrots stay damp packed in boxes of slightly moist sand or sawdust, or can be left in the ground under a thick layer of straw.' },
        { en: 'Store only the best: no cuts, bruises, or soft spots. Check every week and remove anything starting to rot. One bad potato spoils the box.' },
        { en: 'In winter, an unheated garage, shed, or enclosed porch can work as cold storage. Keep crops in an insulated cooler or a box packed with straw, out of direct sun, with a thermometer inside. Bring them in on nights below freezing.' },
        { en: 'No basement and no cool corner? {{growing-food}} shows how to build a root cellar, storage mound, or cold room, even where the ground is solid rock, and what works in hot climates.' },
      ],
    },

    // ------------------------------------------------------------------
    { type: 'h', id: 'unsafe', text: { en: 'Signs food may make you sick' } },
    {
      type: 'list',
      items: [
        { en: 'Cans or jars that bulge, leak, spurt, or foam. Lids that are loose or domed.' },
        { en: 'A bad smell, slime, or mold on anything except hard cheese or firm vegetables (where you can cut away an inch around it).' },
        { en: 'Perishable food left between 40°F and 140°F (4°C and 60°C) for more than 2 hours.' },
        { en: 'Food that floodwater has touched.' },
        { en: 'Long-stored dry foods like wheat, beans, and dry milk may smell stale when first opened. This often fades. Cook a little and judge it then: stale is not the same as unsafe.' },
      ],
    },
    {
      type: 'warning',
      text: {
        en: '[[botulism|Botulism]] is an emergency. Signs usually start 18 to 36 hours after eating, but can come as early as 6 hours or as late as 10 days: double or blurry vision, drooping eyelids, slurred speech, trouble swallowing, a dry mouth, weakness that spreads down the body, and trouble breathing. Get to a doctor or hospital immediately if there is any way at all. See {{medical}}.',
      },
    },

    // ------------------------------------------------------------------
    { type: 'h', id: 'long-run', text: { en: 'Planning for 90 days to 2 years' } },
    {
      type: 'list',
      items: [
        { en: 'Build your store in layers: 3 days, 2 weeks, 3 months, then a year of dry staples.' },
        { en: 'Store vitamin C tablets and some cooking oil, and rotate the oil every 1 to 2 years.' },
        { en: 'Keep two manual can openers, a hand grain mill if you store wheat, and a way to cook outdoors with fuel for months.' },
        { en: 'Stock Mylar bags, oxygen absorbers in sealed packs, canning jars, new lids, canning salt, and a printed canning guide.' },
        { en: 'Plant a garden and learn to store what it grows. Stored food buys time; growing food is how a family lasts. See {{growing-food}}.' },
        { en: 'Keep a paper list of your store, and cook from it once a week.' },
        { en: 'Choose the coolest, darkest places in your house now, and move food out of the garage and attic.' },
      ],
    },

    // ------------------------------------------------------------------
    { type: 'source', title: 'Food', publisher: 'Ready.gov (FEMA)', url: 'https://www.ready.gov/food' },
    { type: 'source', title: 'Food and Water in an Emergency', publisher: 'FEMA and American Red Cross', url: 'https://www.fema.gov/pdf/library/f&web.pdf' },
    { type: 'source', title: 'Massive Winter Storm: Ensure Food Safety When the Power Goes Out', publisher: 'U.S. Department of Agriculture', url: 'https://www.usda.gov/node/14596' },
    { type: 'source', title: 'Food Safety During a Power Outage', publisher: 'FoodSafety.gov (U.S. Department of Health and Human Services)', url: 'https://www.foodsafety.gov/food-safety-charts/food-safety-during-power-outage' },
    { type: 'source', title: 'Shelf-Stable Food Safety', publisher: 'USDA Food Safety and Inspection Service', url: 'https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/shelf-stable-food' },
    { type: 'source', title: 'Jerky and Food Safety', publisher: 'USDA Food Safety and Inspection Service', url: 'https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/meat-fish/jerky' },
    { type: 'source', title: 'An Approach to Longer-Term Food Storage (2024)', publisher: 'Brigham Young University, Department of Nutrition, Dietetics, and Food Science', url: 'https://ndfs.byu.edu/research-on-food-storage' },
    { type: 'source', title: '7 Factors That Prolong Your Food Storage Supply', publisher: 'Utah State University Extension', url: 'https://extension.usu.edu/news_sections/home_family_and_food/foodstorage' },
    { type: 'source', title: 'Food Storage for Emergencies', publisher: 'Utah State University Extension', url: 'https://issuu.com/usuextension/docs/food_storage_booklet2_49bc3ab844f0dc' },
    { type: 'source', title: 'Dietary Guidelines for Americans 2020–2025, estimated calorie needs', publisher: 'USDA and U.S. Department of Health and Human Services', url: 'https://www.dietaryguidelines.gov' },
    { type: 'source', title: 'Home-Canned Foods and Botulism', publisher: 'U.S. Centers for Disease Control and Prevention (CDC)', url: 'https://www.cdc.gov/botulism/prevention/home-canned-foods.html' },
    { type: 'source', title: 'Symptoms of Botulism', publisher: 'CDC', url: 'https://www.cdc.gov/botulism/signs-symptoms/index.html' },
    { type: 'source', title: 'Complete Guide to Home Canning', publisher: 'USDA and National Center for Home Food Preservation (University of Georgia)', url: 'https://nchfp.uga.edu' },
    { type: 'source', title: "Let's Preserve: Sauerkraut and Pickles", publisher: 'Penn State Extension', url: 'https://extension.psu.edu/lets-preserve-fermentation-sauerkraut-and-pickles' },
    { type: 'source', title: 'Storing Your Garden Harvest', publisher: 'Washington State University Extension', url: 'https://wpcdn.web.wsu.edu/extension/uploads/sites/57/2019/08/Storing-Your-Garden-Harvest.pdf' },
    { type: 'source', title: 'Facts About Infant Feeding During Emergencies', publisher: 'CDC', url: 'https://www.cdc.gov/infant-feeding-emergencies-toolkit/php/facts.html' },
    { type: 'source', title: 'Carbon Monoxide Poisoning Basics', publisher: 'CDC', url: 'https://www.cdc.gov/co/' },
  ],
};
