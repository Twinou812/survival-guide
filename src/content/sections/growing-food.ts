import type { Section } from '../types';

// Section 4: Growing Food. Written Nov 14, 2026. Facts checked against the university
// extension, CDC, and WHO-based sources listed at the end. The root cellar part (at the end)
// was written first, so families on rock or with no basement have a way to keep a harvest.
// Numbers that matter for safety (soil lead levels, manure days before harvest, urine
// timing, compost temperature, raw sprout warning) come straight from the sources.

export const growingFood: Section = {
  id: 'growing-food',
  number: 4,
  title: { en: 'Growing Food' },
  summary: { en: 'Small-yard gardens, raised beds on rock, seeds, and keeping the harvest.' },
  blocks: [
    {
      type: 'p',
      text: {
        en: 'Stored food runs out; a garden keeps giving. Even a small backyard, a patio, or a strip of driveway can grow fresh vegetables, the vitamins stored food lacks, and some filling crops that stretch a pantry. Gardening takes practice, and the first season always teaches hard lessons. Start now, while a failed crop is only a lesson and not a missed meal.',
      },
    },

    // ------------------------------------------------------------------
    { type: 'h', id: 'start', text: { en: 'What a small garden can and cannot do' } },
    {
      type: 'p',
      text: {
        en: 'Be honest about the size of the job. Growing every calorie a family eats takes far more land, water, and work than a suburban lot holds. What a small garden does very well is add fresh greens, tomatoes, beans, and roots to stored staples. That keeps people healthy and makes stored food last longer. For more calories from a small space, give some room to potatoes, sweet potatoes, dry beans, and winter squash.',
      },
    },
    {
      type: 'list',
      items: [
        { en: 'Start small. One or two beds you can water and weed well beat a big garden that gets away from you.' },
        { en: 'Grow what your family already eats.' },
        { en: 'Keep a garden notebook on paper: what you planted and when, what worked, and the dates of the last and first frost each year. With no internet, that notebook becomes your local guide.' },
        { en: 'Stock seeds, tools, and supplies before you need them. The list at the end of this part says what.' },
      ],
    },

    // ------------------------------------------------------------------
    { type: 'h', id: 'site', text: { en: 'Picking the spot' } },
    {
      type: 'list',
      items: [
        { en: 'Sun matters most. Most vegetables need at least 6 hours of direct sun a day, and 8 to 10 hours is better. Crops grown for their fruit (tomatoes, peppers, squash, cucumbers, beans) need the most. Leafy greens and root crops (lettuce, kale, chard, spinach, carrots, beets, radishes) can get by with about 6 hours.' },
        { en: 'Watch the yard for a whole day and note where the sun falls. North of the equator, the south side of the house and fences gets the most sun; south of the equator, the north side.' },
        { en: 'Stay away from big trees. Their roots take the water and food, and their shade cuts the harvest.' },
        { en: 'Put the garden close to the house and close to water. A garden you pass every day gets looked after; a garden you must haul water to gets neglected.' },
        { en: 'Avoid low spots where puddles stand for hours after rain. If the yard is rock, hard clay, or soggy, build up with raised beds (below).' },
      ],
    },
    {
      type: 'warning',
      text: {
        en: 'Soil near older houses and busy roads can hold lead from old paint and old gasoline, most of all right along the walls of the house. Lead harms children most. The main danger is soil and dust that gets eaten or breathed, including dust on unwashed vegetables. If the house is older or you do not know the history of the yard, get a [[soil-test]] for lead before growing food. A local extension office or soil lab can do it.',
      },
    },
    {
      type: 'table',
      caption: { en: 'What a soil lead test means for a food garden (University of Connecticut soil lab guidance). ppm means parts per million.' },
      head: [{ en: 'Total lead in soil' }, { en: 'What to do' }],
      rows: [
        [{ en: '100 ppm or less' }, { en: 'Normal background level. No special steps.' }],
        [{ en: '100 to 300 ppm' }, { en: 'Grow any crops, but keep the soil mulched, wash and peel produce, wash hands after gardening, and keep small children from eating soil.' }],
        [{ en: '300 to 400 ppm' }, { en: 'The same steps, and do not grow leafy greens or root crops in this soil.' }],
        [{ en: '400 ppm or more' }, { en: 'Do not grow food in this soil. Use raised beds with a liner on the bottom, filled with clean soil, or use containers.' }],
      ],
    },
    {
      type: 'p',
      text: {
        en: 'If you live under a homeowners association (HOA), read its rules before building. Backyard beds and containers are usually allowed; front-yard vegetable beds, sheds, and compost bins sometimes need approval. Containers, herbs, and fruit trees mixed into flower beds draw less attention.',
      },
    },

    // ------------------------------------------------------------------
    { type: 'h', id: 'season', text: { en: 'Know your growing season' } },
    {
      type: 'p',
      text: {
        en: 'Every vegetable is either a [[cool-season-crop|cool-season crop]] or a [[warm-season-crop|warm-season crop]]. Cool-season crops like peas, lettuce, spinach, cabbage, broccoli, kale, carrots, onions, and potatoes grow in cool weather and can take a light frost. Warm-season crops like tomatoes, peppers, beans, squash, cucumbers, okra, corn, and sweet potatoes are damaged or killed by frost and need warm soil.',
      },
    },
    {
      type: 'p',
      text: {
        en: 'Where winters freeze, the numbers that run the garden are your [[frost-date|frost dates]]: the average date of the last frost in spring and of the first frost in autumn. The time between them is your growing season. They are averages, so a frost can still come after the spring date. A rule of thumb from Utah State University: hardy crops (peas, spinach, onions, cabbage, broccoli) can go in as soon as the soil can be worked, usually 45 to 60 days before the last frost. Very tender crops (beans, squash, melons, tomatoes, peppers, eggplant) wait until at least a week after it.',
      },
    },
    {
      type: 'list',
      items: [
        { en: 'Write your frost dates on paper now. A local extension office, weather service, or experienced gardener nearby can tell you.' },
        { en: 'Keep a thermometer outside. Each year, write down the last spring morning and the first autumn morning at or below freezing (32°F, 0°C). After a few years, these are your own frost dates.' },
        { en: 'Where winters are mild and summers are very hot, summer heat is the hard season, not winter. Grow cool-season crops through the mild months and heat-tough crops through summer (see the table and the hot-summer tips below).' },
        { en: 'In the tropics, the seasons are wet and dry. Plant at the start of the rains, or where you can water through the dry months.' },
        { en: 'The {{calculators}} section has a planner for beds and growing zones.' },
      ],
    },
    {
      type: 'table',
      caption: { en: 'Example of a hot-climate garden year (Florida, from the University of Florida). Move the months to fit your own area; south of the equator they are reversed.' },
      head: [{ en: 'Season' }, { en: 'What to grow' }],
      rows: [
        [{ en: 'Cool season (about November to March)' }, { en: 'Lettuce, carrots, radishes, broccoli, cabbage, collards, kale, peas, onions, potatoes' }],
        [{ en: 'Warm season (about April to October)' }, { en: 'Tomatoes, peppers, eggplant, green beans, squash, okra, southern peas, sweet potatoes, Malabar spinach, basil' }],
      ],
    },

    // ------------------------------------------------------------------
    { type: 'h', id: 'what-to-grow', text: { en: 'What to grow' } },
    {
      type: 'table',
      caption: { en: 'Crops that give a family the most for the space and effort.' },
      head: [{ en: 'Crop' }, { en: 'Why grow it' }, { en: 'Good to know' }],
      rows: [
        [{ en: 'Potatoes' }, { en: 'Filling food from a small space; keeps for months in a cool, dark place.' }, { en: 'Cool-season crop. Plant [[seed-potato|seed potatoes]], not store potatoes (see below).' }],
        [{ en: 'Sweet potatoes' }, { en: 'Filling and rich in vitamin A; handle heat and dry spells once rooted.' }, { en: 'Need about 4 warm, frost-free months. Grown from [[sweet-potato-slip|slips]].' }],
        [{ en: 'Dry beans and southern peas (cowpeas)' }, { en: 'Protein that dries and stores for years. The plants add nitrogen to the soil.' }, { en: 'Leave the pods to dry on the plant. Southern peas handle heat, sandy soil, and patchy rain.' }],
        [{ en: 'Winter squash and pumpkins' }, { en: 'Keep for months at cool room temperature.' }, { en: 'Vines need room; train them up a fence. They cross easily if you save seed.' }],
        [{ en: 'Kale, collards, chard' }, { en: 'Vitamins from a few plants, picked leaf by leaf for months.' }, { en: 'Collards stand heat better than cabbage; kale and collards take frost.' }],
        [{ en: 'Green beans (pole and bush)' }, { en: 'Fast, heavy crop; easy to save seed.' }, { en: 'Pole beans climb, so they use little ground.' }],
        [{ en: 'Tomatoes and peppers' }, { en: 'Big harvest from a small space; grow well in buckets.' }, { en: 'Need the most sun. Easy to save seed.' }],
        [{ en: 'Carrots, beets, turnips, radishes' }, { en: 'Quick and easy; can stay in the ground into winter under straw.' }, { en: 'Turnip and beet tops are good greens too.' }],
        [{ en: 'Onions and garlic' }, { en: 'Flavor, and they store well.' }, { en: 'Garlic is planted in autumn for a summer harvest.' }],
        [{ en: 'Corn' }, { en: 'Dries into grain for meal.' }, { en: 'Takes a lot of space; plant in a block of several short rows, not one long row, so it pollinates.' }],
        [{ en: 'Herbs' }, { en: 'Make plain stored food easier to eat.' }, { en: 'Many come back every year.' }],
      ],
    },

    // ------------------------------------------------------------------
    { type: 'h', id: 'raised-beds', text: { en: 'Raised beds: the answer for rock, slab, and bad soil' } },
    {
      type: 'p',
      text: {
        en: 'A [[raised-bed|raised bed]] is a frame filled with good soil, built on top of the ground. It is the best choice where the yard is limestone or bedrock, hard clay, soggy, or has lead in the soil, because you bring the soil to the plants instead of digging. Raised beds also warm up sooner in spring and are easier on the back.',
      },
    },
    {
      type: 'steps',
      items: [
        { en: 'Make the bed 3 to 4 feet (90 to 120 cm) wide, so you can reach the middle from either side without stepping in it. It can be as long as fits.' },
        { en: 'Over soil, make it at least 6 to 12 inches (15 to 30 cm) high, and loosen the ground underneath so roots can go deeper. Over rock, concrete, or very hard ground, make it at least 12 inches (30 cm) deep, and deeper for potatoes and tomatoes, because roots cannot go below it.' },
        { en: 'Build the sides from untreated wood, concrete blocks, bricks, stone, or metal. Cedar and redwood resist rot; pine and fir rot within a few years.' },
        { en: 'Do not use railroad ties, old tires, wood treated with creosote, or pressure-treated wood from before 2004 (it was treated with arsenic). If you use newer pressure-treated wood, line the inside with heavy plastic so the soil does not touch it.' },
        { en: 'Kill the grass under the bed first by covering it with plain brown cardboard (see sheet mulching below). On rock or concrete, a layer of cardboard or landscape cloth under the bed keeps the soil from washing out.' },
        { en: 'Fill it with a mix of good topsoil and [[compost]]. Bagged garden soil works. Never use soil from a spot that may be contaminated.' },
        { en: 'Leave paths wide enough to kneel in and push a wheelbarrow through, and cover them with mulch.' },
      ],
    },
    {
      type: 'sketch',
      sketch: 'raised-bed',
      caption: { en: 'A raised bed built on rock: a wooden frame with corner posts, cardboard on the bottom, and deep soil with plants growing in it.' },
    },

    // ------------------------------------------------------------------
    { type: 'h', id: 'no-dig', text: { en: 'Turning lawn into garden without digging' } },
    {
      type: 'p',
      text: {
        en: '[[sheet-mulching|Sheet mulching]], also called lasagna gardening, turns a patch of lawn into a garden bed with no digging. Cardboard smothers the grass, and layers of plant waste on top rot down into soil. Start it in autumn for a spring garden.',
      },
    },
    {
      type: 'steps',
      items: [
        { en: 'Mow the grass short and water the area well.' },
        { en: 'Cover it with plain brown cardboard: no shiny or printed boxes, and pull off all tape and staples. Overlap the edges by several inches so the grass cannot find a gap. Wet the cardboard.' },
        { en: 'Pile on layers, each about 1 to 6 inches (3 to 15 cm) thick: dry brown material (leaves, straw, shredded paper) and green material (grass clippings, vegetable scraps, coffee grounds, manure), with more brown than green.' },
        { en: 'Finish with a few inches of compost or soil on top. Water it whenever it dries out.' },
        { en: 'Wait. The layers take several months to a year to break down into dark, crumbly soil.' },
        { en: 'In a hurry, you can plant right away: cut holes through the cardboard, put a handful of soil or compost in each, and set transplants in them.' },
      ],
    },
    {
      type: 'sketch',
      sketch: 'sheet-mulch',
      caption: { en: 'Sheet mulching cut open: grass at the bottom, a layer of cardboard, then layers of brown and green material, with compost on top and a seedling planted through a hole.' },
    },

    // ------------------------------------------------------------------
    { type: 'h', id: 'containers', text: { en: 'Buckets and containers' } },
    {
      type: 'p',
      text: {
        en: 'Containers let you grow food on a patio, balcony, driveway, or solid rock, and you can move them into the sun or out of a storm. A [[bucket-planter|5-gallon bucket]] grows one tomato, pepper, eggplant, or squash plant.',
      },
    },
    {
      type: 'steps',
      items: [
        { en: 'Use food-grade buckets only. Never use a bucket that held paint, pool chemicals, pesticides, or anything poisonous.' },
        { en: 'Drill or punch drain holes about every 3 inches (8 cm) across the bottom. Without them, roots drown.' },
        { en: 'Fill with potting soil made for containers, not soil dug from the yard, which packs hard in a pot.' },
        { en: 'Set the containers in the sunniest spot, raised a little on bricks or boards so water can drain out.' },
        { en: 'Water whenever the top inch (2 to 3 cm) of soil is dry. In hot weather that can be every day: containers dry out much faster than beds.' },
        { en: 'Feed every few weeks with compost, diluted urine (see below), or fertilizer, because watering washes nutrients out.' },
      ],
    },
    {
      type: 'table',
      caption: { en: 'Container sizes (Texas A&M AgriLife Extension).' },
      head: [{ en: 'Container' }, { en: 'What it grows' }],
      rows: [
        [{ en: '6 to 10 inch pot (15 to 25 cm)' }, { en: 'Herbs, green onions, parsley' }],
        [{ en: '1 to 2 gallons (4 to 8 liters)' }, { en: 'Chard, spinach, dwarf tomatoes' }],
        [{ en: '5 gallons (19 liters)' }, { en: 'One tomato, pepper, eggplant, or squash plant' }],
      ],
    },
    {
      type: 'sketch',
      sketch: 'bucket-planter',
      caption: { en: 'A 5-gallon bucket planter cut open: drain holes in the bottom, potting soil, a tomato plant tied to a stake, and the bucket raised on two bricks.' },
    },

    // ------------------------------------------------------------------
    { type: 'h', id: 'straw-bales', text: { en: 'Straw bale gardens' } },
    {
      type: 'p',
      text: {
        en: 'A [[straw-bale-garden|straw bale garden]] uses the bale itself as the pot. Set on rock, gravel, or pavement, it needs no digging and no frame. As the inside of the bale rots, it becomes a soft, rich bed for roots, and when it breaks down it becomes compost for next year.',
      },
    },
    {
      type: 'steps',
      items: [
        { en: 'Buy straw bales, not hay. Hay is full of seeds that sprout into weeds.' },
        { en: 'Set each bale where it will stay, cut ends of the straw facing up and the strings around the sides. Once you start the next step, do not move it.' },
        { en: 'Condition the bale for about 10 to 14 days so the inside starts to rot. Soak it with water every day. On days 1, 3, and 5, sprinkle ½ cup of high-nitrogen fertilizer over the top and water it in. On days 7 and 9, use ¼ cup. On day 11, use 1 cup of an all-purpose garden fertilizer. Lawn fertilizer works for the nitrogen, but never a kind with weed killer in it.' },
        { en: 'For an organic bale, use blood meal in place of the nitrogen fertilizer, about 3 cups where the schedule says ½ cup.' },
        { en: 'The bale heats up as it rots. Plant when the inside has cooled below body temperature (99°F, 37°C). Push your hand in to check.' },
        { en: 'Pull the straw apart to make holes, add a handful of potting soil, and set transplants in. For seeds, spread a thin layer of potting soil over the top.' },
        { en: 'Water often; bales dry out faster than soil. Yellowing leaves mean the plants need more nitrogen.' },
      ],
    },
    {
      type: 'sketch',
      sketch: 'straw-bale',
      caption: { en: 'A straw bale garden on a paved surface: a bale with strings around its sides and young plants growing out of its top.' },
    },

    // ------------------------------------------------------------------
    { type: 'h', id: 'compost', text: { en: 'Compost: making soil from scraps' } },
    {
      type: 'p',
      text: {
        en: '[[compost|Compost]] is rotted plant waste. It feeds plants, helps sandy soil hold water, loosens clay, and costs nothing. When the stores are empty, compost and urine (below) are the fertilizers you can count on.',
      },
    },
    {
      type: 'list',
      items: [
        { en: 'Greens (rich in nitrogen): vegetable and fruit scraps, coffee grounds, fresh grass clippings, green weeds without seeds, and manure from plant-eating animals like rabbits, chickens, horses, or cows.' },
        { en: 'Browns (rich in carbon): dry leaves, straw, shredded paper and plain cardboard, sawdust from untreated wood, wood chips.' },
        { en: 'Keep out: meat, fish, bones, dairy, fats and oils (they draw rats and smell); dog, cat, and human waste (they carry disease); diseased plants; weeds gone to seed; and anything sprayed with weed killer.' },
        { en: 'Fresh manure can carry germs. Compost it first, or work it into the soil at least 90 to 120 days before you harvest anything from that bed.' },
      ],
    },
    {
      type: 'steps',
      items: [
        { en: 'Build a bin from wood pallets, wire fencing, or concrete blocks, at least 3 feet (1 m) wide, deep, and high. Smaller piles do not heat up.' },
        { en: 'Add 2 to 3 buckets of browns for every bucket of greens. Cover each load of kitchen scraps with browns to keep flies and smells down.' },
        { en: 'Keep the pile as damp as a wrung-out sponge. Add water when it is dry, and more browns when it is wet and smelly.' },
        { en: 'Turn the pile with a garden fork every week or two to let air in. A well-built pile gets hot in the middle. Holding 131°F (55°C) or more for at least 3 days kills most germs and weed seeds.' },
        { en: 'Compost is ready when it is dark, crumbly, and smells like earth: about 3 months with close care, much longer if left alone.' },
        { en: 'Spread about an inch (2 to 3 cm) of compost over the beds each year.' },
      ],
    },
    {
      type: 'sketch',
      sketch: 'compost-bin',
      caption: { en: 'A compost bin made of three wooden pallets standing on edge, with a pile of layered scraps and leaves inside and a garden fork leaning against it.' },
    },

    // ------------------------------------------------------------------
    { type: 'h', id: 'urine', text: { en: 'Urine: free fertilizer every day' } },
    {
      type: 'p',
      text: {
        en: 'Urine from healthy people carries very few germs and is rich in nitrogen, the nutrient plants use most. Guidelines from the World Health Organization allow a household to use its own urine on its own garden without storing it first. Feces are different: they carry many germs and never go on a food garden without long, careful treatment (see {{power-light-sanitation}}).',
      },
    },
    {
      type: 'steps',
      items: [
        { en: 'Collect urine in a clean jug with a lid. Keep it closed so it does not smell or lose its nitrogen.' },
        { en: 'Mix about 1 part urine with 3 parts water.' },
        { en: 'Pour it on the soil around plants, not on the leaves (it burns them), then water it in or cover it with soil.' },
        { en: 'Give it while plants are young and growing fast. Once they are flowering and fruiting, they take up little more.' },
        { en: 'Stop at least 1 month before harvest, most of all for crops eaten raw, such as lettuce.' },
        { en: 'Wash your hands after handling it.' },
      ],
    },

    // ------------------------------------------------------------------
    { type: 'h', id: 'seeds', text: { en: 'Seeds: the most important thing to store' } },
    {
      type: 'p',
      text: {
        en: 'A jar of seeds weighs almost nothing and can feed a family for years. Buy them now, store them well, and learn to save your own.',
      },
    },
    {
      type: 'p',
      text: {
        en: 'Buy mostly [[open-pollinated|open-pollinated]] seed. Heirloom seeds are open-pollinated varieties handed down for many years. Seed saved from open-pollinated plants grows into plants like the parent. Seed saved from [[hybrid-seed|hybrid (F1)]] plants does not: it comes up as a mix of the two parent varieties, often worse. Hybrids can be good to grow, but you must buy new seed for them every year.',
      },
    },
    {
      type: 'list',
      items: [
        { en: 'Keep seed packets in a sealed jar or bag in the coolest, driest, darkest place you have. A refrigerator or freezer is best while there is power.' },
        { en: 'Cold jars sweat when opened. Let a jar from the fridge or freezer warm to room temperature before you open it.' },
        { en: 'Keep seeds away from heat, damp, and fruit that is ripening or going soft.' },
        { en: 'Write the year on every packet. Seeds lose strength each year. In ordinary room storage, the University of Illinois counts on about 1 year for beans, carrots, corn, lettuce, okra, peas, peppers, and spinach, and about 2 years for beets, cabbage, cucumbers, kale, melons, squash, and tomatoes. Sealed and kept cold, they last several years longer.' },
        { en: 'Use the oldest seed first, replace your stock on a schedule, and test any seed you are unsure of.' },
      ],
    },
    {
      type: 'p',
      text: {
        en: 'A [[germination-test|germination test]] tells you whether old seed is still good, before you waste a season on it.',
      },
    },
    {
      type: 'steps',
      items: [
        { en: 'Count out 10 seeds from the packet.' },
        { en: 'Wet a paper towel, wring it out, and lay it flat. Space the seeds along one edge.' },
        { en: 'Roll the towel up loosely and put it in a plastic bag, not sealed tight, since seeds need some air. Keep it somewhere warm, such as the top of the refrigerator.' },
        { en: 'Check every day or two and keep the towel damp. After 5 to 10 days, unroll it and count the seeds that have sprouted.' },
        { en: 'Each sprout out of 10 is 10%. If 9 or 10 sprout, plant as normal. If fewer sprout, sow more thickly to make up for it. If only a few sprout, use fresh seed.' },
      ],
    },
    {
      type: 'sketch',
      sketch: 'germination-test',
      caption: { en: 'A germination test: ten seeds on a damp paper towel, the towel rolled up, and the roll inside a plastic bag. Some seeds show small sprouts.' },
    },

    { type: 'h', id: 'seed-saving', text: { en: 'Saving your own seeds' } },
    {
      type: 'p',
      text: {
        en: 'Start with the easy crops. Beans, peas, lettuce, tomatoes, and peppers mostly pollinate themselves, so their seed comes true even with other varieties nearby, and a few plants give plenty of seed.',
      },
    },
    {
      type: 'list',
      items: [
        { en: 'Beans and peas: leave some pods on the plant until they are dry and rattle. Shell them and let the seeds dry further indoors before storing.' },
        { en: 'Tomatoes: scoop the seeds and juice from very ripe fruit into a jar with a little water. Let it sit at room temperature (72°F to 80°F, 22°C to 27°C) for about 3 days, until a skin of mold forms; this cleans the coating off the seeds. Rinse the seeds, then spread them on a plate to dry.' },
        { en: 'Peppers: pick fully ripe fruit that is starting to wrinkle, scrape out the seeds, and dry them.' },
        { en: 'Lettuce: let a few plants bolt (send up a flower stalk). Pick the seed heads as they dry and shake the seed into a paper bag. Save seed from the plants that bolted last, not first.' },
        { en: 'Save seed from your best, healthiest plants, and from several plants if you can.' },
        { en: 'Dry seeds fully before storing them. Damp seed molds.' },
      ],
    },
    {
      type: 'p',
      text: {
        en: 'Squash, pumpkins, cucumbers, melons, and corn are pollinated by insects or wind and cross with other varieties of their kind, so saved seed may grow into something different. To save seed from them, grow only one variety of each kind in a season; corn also needs a large patch of plants. Carrots, beets, cabbage, and onions take two seasons to make seed.',
      },
    },

    // ------------------------------------------------------------------
    { type: 'h', id: 'starting', text: { en: 'Starting seeds and moving plants outside' } },
    {
      type: 'p',
      text: {
        en: 'Many crops are sown straight into the bed: beans, peas, squash, cucumbers, corn, carrots, beets, radishes, and most greens. Others get a head start indoors in small pots and go out as young plants: tomatoes, peppers, eggplant, cabbage, and broccoli. The seed packet says how many weeks early to start them.',
      },
    },
    {
      type: 'list',
      items: [
        { en: 'Use clean pots or cut-down cartons with drain holes, and fresh potting mix.' },
        { en: 'Seedlings need a lot of light. A bright window facing the equator works if you turn the pots every day. Pale, tall, floppy seedlings are not getting enough light.' },
        { en: 'Keep the mix moist but not soggy.' },
      ],
    },
    {
      type: 'p',
      text: {
        en: 'Plants raised indoors scorch and wilt if moved straight into full sun and wind. [[hardening-off|Harden them off]] over 7 to 10 days first.',
      },
    },
    {
      type: 'steps',
      items: [
        { en: 'Start with a few hours outside in the shade, out of strong wind.' },
        { en: 'Each day, leave them out a few hours longer and give them a little more sun. Water a little less often, but do not let them wilt.' },
        { en: 'After several days of 10 to 12 hours outside, leave them out day and night for a couple of days. Bring them in if frost is forecast.' },
        { en: 'Plant them out on a cloudy day or in the evening, and water well.' },
      ],
    },

    // ------------------------------------------------------------------
    { type: 'h', id: 'potatoes', text: { en: 'Potatoes and sweet potatoes' } },
    {
      type: 'p',
      text: {
        en: 'Potatoes are grown from pieces of potato, not from seed. Buy certified [[seed-potato|seed potatoes]], which are checked for disease. Most grocery store potatoes are treated so they will not sprout, and they can bring disease into your soil. If nothing else is available, kitchen potatoes that have already sprouted may still grow.',
      },
    },
    {
      type: 'steps',
      items: [
        { en: 'Plant small potatoes whole. Cut bigger ones into pieces about the size of an egg (1½ to 2 ounces, 40 to 55 g), each with at least one eye (a bud). Two or three eyes is better. Use a clean knife.' },
        { en: 'Leave the cut pieces at room temperature for 1 to 3 days so the cut sides dry and heal before planting.' },
        { en: 'Plant in cool weather: early spring where winters freeze, the cool season where summers are hot.' },
        { en: 'As the plants grow, pile soil, straw, or compost around the stems so the new potatoes stay covered. Potatoes that see light turn green; cut away green parts before eating, because they are mildly poisonous.' },
        { en: 'Dig them up when the vines die back. In a bucket or grow bag, just tip it out.' },
      ],
    },
    {
      type: 'sketch',
      sketch: 'seed-potato',
      caption: { en: 'A seed potato cut into three egg-sized pieces, each with eyes and small sprouts.' },
    },
    {
      type: 'p',
      text: {
        en: 'Sweet potatoes grow from [[sweet-potato-slip|slips]], the leafy shoots that sprout from a sweet potato. They need about 4 warm, frost-free months, and once rooted they handle heat and dry spells well.',
      },
    },
    {
      type: 'steps',
      items: [
        { en: 'Choose healthy roots with no soft or dark rotten spots.' },
        { en: 'Stand a sweet potato half in a jar of water, held up with toothpicks. For more slips, lay several on their sides in a tray of damp sand, about three-quarters buried. Keep them warm and bright.' },
        { en: 'In a few weeks, leafy shoots grow. When they are several inches long, snap or cut them off. They do not need roots to be planted.' },
        { en: 'Plant the slips once the soil is warm and all danger of frost has passed. Water them well until they take hold.' },
      ],
    },
    {
      type: 'sketch',
      sketch: 'sweet-potato-slips',
      caption: { en: 'A sweet potato held up by toothpicks in a jar of water, with roots below and leafy slips growing from the top.' },
    },

    // ------------------------------------------------------------------
    { type: 'h', id: 'watering', text: { en: 'Watering and mulch' } },
    {
      type: 'p',
      text: {
        en: 'Vegetables need about 1 inch (2.5 cm) of water a week, from rain plus what you add. One inch is about 0.6 gallons for every square foot of garden (25 liters per square meter). Sandy soil may need twice as much.',
      },
    },
    {
      type: 'list',
      items: [
        { en: 'Water deeply and less often, so roots grow down. A light sprinkle every day keeps roots shallow and weak.' },
        { en: 'Check with your finger. Dig 1 to 3 inches (3 to 8 cm) down near small plants, deeper near big ones. If it is dry there, water.' },
        { en: 'Water the soil, not the leaves, in the early morning. Leaves that stay wet overnight invite disease.' },
        { en: 'Make a shallow bowl in the soil around each plant to hold water while it soaks in.' },
        { en: '[[mulch|Mulch]] saves the most water: a few inches of straw, leaves, grass clippings, or wood chips over the soil keeps it cool and damp and smothers weeds.' },
        { en: 'Rain from a [[rain-barrel]] is good garden water (see {{water}}). If you reuse [[greywater]], pour it on the soil only, never on leaves or roots that will be eaten raw.' },
        { en: 'Keep the thirstiest crops closest to the house and the water.' },
      ],
    },

    { type: 'h', id: 'heat', text: { en: 'Gardening through hot summers' } },
    {
      type: 'list',
      items: [
        { en: 'Tomatoes, peppers, beans, and squash drop their flowers and set little fruit when days stay above about 90°F (32°C) and nights above about 70°F (21°C). Plant early enough that they flower before the worst heat, or plant again for an autumn crop.' },
        { en: 'Grow crops that like heat: sweet potatoes, southern peas, okra, Malabar spinach, and basil.' },
        { en: 'In the hottest weeks, put [[shade-cloth|shade cloth]] that blocks 30% to 50% of the sun on a frame over the bed.' },
        { en: 'Mulch thickly and water early in the morning.' },
        { en: 'Grow lettuce, spinach, and other cool-season greens in the cool months. In heat they turn bitter and bolt.' },
      ],
    },

    // ------------------------------------------------------------------
    { type: 'h', id: 'pests', text: { en: 'Pests and diseases without sprays' } },
    {
      type: 'p',
      text: {
        en: 'In a long emergency there may be no sprays to buy. A healthy garden and daily attention do most of the work.',
      },
    },
    {
      type: 'list',
      items: [
        { en: 'Walk the garden every day. Pick off caterpillars, beetles, and clusters of eggs by hand and drop them in a can of soapy water.' },
        { en: 'Cover young crops with [[row-cover|row cover]], a thin garden fabric held down at the edges. It keeps out many flying insects. Uncover squash, cucumbers, and melons when they flower so bees can reach them.' },
        { en: 'Fence out rabbits and other animals. Chicken wire works for rabbits; bury the bottom few inches so they cannot dig under.' },
        { en: 'Mix many kinds of plants together instead of one big block of one crop. A varied garden has fewer pest outbreaks and more helpful insects.' },
        { en: 'Practice [[crop-rotation|crop rotation]]: do not grow the same family of crops in the same spot year after year. Tomatoes, peppers, eggplant, and potatoes are one family; squash, cucumbers, and melons are another; cabbage, broccoli, kale, collards, and turnips another; beans and peas another.' },
        { en: 'Pull out sick plants and throw them away. Do not compost them.' },
      ],
    },
    {
      type: 'p',
      text: { en: 'Garden advice graded by evidence:' },
    },
    {
      type: 'list',
      items: [
        { en: 'Companion planting charts (this plant loves that one, this herb drives off that bug): Unproven. University reviews find little or no science behind most of them.' },
        { en: 'Marigolds to protect a garden: Traditional, limited evidence. Their roots can kill some soil worms that harm crops, mainly after the plants are dug into the soil. Growing them nearby does not protect a garden much.' },
        { en: 'Mixing many plants, keeping soil covered, and growing beans or peas to add nitrogen: Well-supported.' },
      ],
    },

    // ------------------------------------------------------------------
    { type: 'h', id: 'frost', text: { en: 'Stretching the season past frost' } },
    {
      type: 'list',
      items: [
        { en: '[[row-cover|Row cover]] laid over plants or over wire hoops gives about 4°F to 5°F (2°C to 3°C) of frost protection, so cool-season crops can survive nights down to about 28°F (−2°C). Open it or take it off when the air under it passes 80°F (27°C).' },
        { en: 'A [[cold-frame|cold frame]] is a bottomless box with a clear lid, set over plants. It protects better than row cover. Prop the lid open on sunny days or the plants will cook, and close it at night.' },
        { en: 'Cold frames, hoop tunnels, and row covers can add 6 to 8 weeks to the growing season.' },
        { en: 'For a sudden frost, cover plants overnight with sheets, blankets, or upturned buckets, and uncover them in the morning. Plastic that touches the leaves does not protect them.' },
        { en: 'Kale, collards, spinach, carrots, and other cool-season crops keep going in cold weather, and many taste sweeter after a frost.' },
      ],
    },
    {
      type: 'sketch',
      sketch: 'row-cover',
      caption: { en: 'A garden bed with wire hoops and fabric row cover stretched over them, the edges held down with stones.' },
    },
    {
      type: 'sketch',
      sketch: 'cold-frame',
      caption: { en: 'A cold frame: a wooden box, taller at the back, with a clear lid propped open on a stick and young plants inside.' },
    },

    // ------------------------------------------------------------------
    { type: 'h', id: 'sprouts', text: { en: 'Fresh food in days: sprouts' } },
    {
      type: 'p',
      text: {
        en: 'Sprouted seeds give fresh food within a week, with no soil, no sun, and no garden. A [[sprouting-jar|sprouting jar]] on the counter turns stored mung beans, lentils, whole wheat, or alfalfa seed into something fresh in the middle of winter, or when it is not safe to go outside.',
      },
    },
    {
      type: 'warning',
      text: {
        en: 'Raw sprouts have caused many outbreaks of food poisoning, because germs can hide inside the seed where rinsing cannot reach. Young children, older adults, pregnant women, and anyone with a weak immune system should not eat raw sprouts. Cooking them thoroughly kills the germs. In an emergency, when a doctor may not be reachable, cook sprouts for everyone.',
      },
    },
    {
      type: 'steps',
      items: [
        { en: 'Use seeds sold for sprouting or for eating (dry beans, lentils, whole wheat). Never sprout garden seed from packets: it may be coated with chemicals.' },
        { en: 'Put about 2 tablespoons of small seeds, or ½ cup of beans, in a clean 1-quart (1-liter) jar. Cover with safe water and soak overnight.' },
        { en: 'Cover the mouth with clean cloth or screen held on with a rubber band, and pour off the water.' },
        { en: 'Rinse with safe water and drain well twice a day. Keep the jar tipped mouth-down at an angle, out of direct sun.' },
        { en: 'When the sprouts are as long as you like, usually in a few days, cook and eat them. Keep extras cold if you can, and throw out any that smell bad or look slimy.' },
      ],
    },
    {
      type: 'sketch',
      sketch: 'sprouting-jar',
      caption: { en: 'A sprouting jar tipped upside down at an angle in a bowl, with cloth held over the mouth by a rubber band and sprouts inside.' },
    },

    // ------------------------------------------------------------------
    { type: 'h', id: 'perennials', text: { en: 'Plant once, harvest for years' } },
    {
      type: 'p',
      text: {
        en: 'Fruit trees, berry bushes, grapes, asparagus, rhubarb, and many herbs come back every year with little work, but most take a few years before the first real harvest. That is why they belong in the plan now, not after trouble starts. Choose kinds that grow well where you live; a local extension office or nursery can tell you which. Dwarf fruit trees, berries along a fence, and herbs in flower beds fit even a small lot. Eat only the stalks of rhubarb: the leaves are poisonous.',
      },
    },

    // ------------------------------------------------------------------
    { type: 'h', id: 'long-run', text: { en: 'Planning for 90 days to 2 years' } },
    {
      type: 'list',
      items: [
        { en: 'Now: build one or two beds or a row of buckets and grow something this season. Start the garden notebook and write in your frost dates.' },
        { en: 'Stock open-pollinated seed for at least two years of planting, sealed and stored cool, with extra of your main crops. Test it every winter.' },
        { en: 'Keep tools that need no power: a shovel, a garden fork, a hoe, a hand trowel, a rake, a watering can and hose, buckets, a sharp knife, spare handles, and a file to sharpen blades.' },
        { en: 'Stock row cover, shade cloth if your summers are hot, chicken wire, stakes and twine, and a few bags of potting soil and compost.' },
        { en: 'Start a compost pile now, so there is good soil when you need it.' },
        { en: 'In the first 90 days of an emergency, plant fast crops (radishes, lettuce, greens, bush beans) and grow sprouts while you build beds for bigger crops.' },
        { en: 'By 6 months to 1 year, be growing potatoes or sweet potatoes, dry beans, and squash, and saving seed from the easy crops.' },
        { en: 'For 2 years and beyond: plant fruit and perennials early, rotate crops, add compost every year, and learn to keep the harvest. The root cellar part below and the {{food-storage}} section show how.' },
      ],
    },

    // ------------------------------------------------------------------
    { type: 'h', id: 'root-cellar', text: { en: 'Root cellars, even on solid rock' } },
    {
      type: 'p',
      text: {
        en: 'A [[root-cellar]] keeps potatoes, carrots, cabbage, apples, and other crops fresh for months with no power. It works by being cold, dark, damp, and a little airy. Most crops keep best at 32°F to 40°F (0°C to 4°C) with damp air; squash and onions like it cooler and drier. The {{food-storage|Food Storage}} section has a table of which crop needs what.',
      },
    },
    {
      type: 'p',
      text: {
        en: 'The classic root cellar is dug into the ground. If your yard and foundation sit on limestone or bedrock, or the house is on a concrete slab with no basement, you cannot dig down. That is fine. You can build up instead and bring the earth to the food, or make a cold room inside the house. Pick the option that fits your climate and how much food you have.',
      },
    },
    {
      type: 'warning',
      text: {
        en: 'Before digging anywhere, even a shallow hole, find out where buried gas, power, and water lines run. In the U.S., call 811 a few days ahead and they mark them for free. And never use an old refrigerator or freezer as a buried bin or storage box: a child can climb in and be trapped.',
      },
    },

    { type: 'h', id: 'mound', text: { en: 'Easiest: a storage mound on top of the ground' } },
    {
      type: 'p',
      text: {
        en: 'A [[storage-mound|storage mound]] (also called a clamp) needs no digging at all, which makes it the best choice on rock or where the ground stays wet. Each mound holds about one or two bushels, so when you open it, bring everything inside at once.',
      },
    },
    {
      type: 'steps',
      items: [
        { en: 'Pick a spot that drains well, on the shady north side of the house or a fence if you can. Scrape a shallow ditch around it so rain runs away.' },
        { en: 'Lay a thick bed of straw or dry leaves on the ground. On rock or hard soil, a layer of gravel under the straw helps water drain.' },
        { en: 'Pile the vegetables on the straw in a cone. Use only whole, unbruised crops. Keep apples in a separate mound from vegetables.' },
        { en: 'Cover the pile with more straw, then pack soil over the straw to hold it in place. The colder your winter, the thicker the straw and soil: 1 foot (30 cm) of straw in mild winters, up to 3 feet (90 cm) where it gets very cold.' },
        { en: 'If you have no soil to spare, bagged soil, compost, or sandbags can hold the straw down.' },
        { en: 'Cover the top with a sheet of plastic or boards weighted with stones to shed rain.' },
      ],
    },
    {
      type: 'sketch',
      sketch: 'storage-mound',
      caption: { en: 'A storage mound from the side: straw on the ground, a pile of vegetables, more straw over them, and soil packed on top, with a ditch around it.' },
    },

    { type: 'h', id: 'barrel', text: { en: 'A barrel or bin covered with earth' } },
    {
      type: 'p',
      text: {
        en: 'A barrel, metal trash can, or wooden box keeps out water and mice better than a bare mound, and you can reach in for a few potatoes at a time.',
      },
    },
    {
      type: 'steps',
      items: [
        { en: 'Use a clean barrel, a new metal trash can, or a sturdy wooden box with a lid. Never an old refrigerator or freezer.' },
        { en: 'Where you can dig a little, sink it partway in, tipped at an angle with the opening facing up the slope. On rock, lay it on its side on a bed of gravel or stones on top of the ground.' },
        { en: 'Put a layer of straw in the bottom, then the vegetables, with straw between layers.' },
        { en: 'Set the lid on loosely so a little air can move. Weigh it down with a stone.' },
        { en: 'Cover the whole barrel with straw, 1 to 3 feet (30 to 90 cm) depending on how cold it gets, then a layer of soil to hold the straw in place. Leave the lid end easy to uncover.' },
        { en: 'Wrap any gap at the opening with [[hardware-cloth]] to keep out mice and rats.' },
      ],
    },
    {
      type: 'sketch',
      sketch: 'barrel-mound',
      caption: { en: 'A barrel lying on gravel on top of the ground, filled with vegetables and straw, buried under straw and soil, with only the lid end showing.' },
    },

    { type: 'h', id: 'cold-room', text: { en: 'A cold room inside the house' } },
    {
      type: 'p',
      text: {
        en: 'In places with real winters, a [[cold-room]] inside the house can work as well as a cellar, and you do not need to dig at all. Use a basement corner if you have one; on a slab, use a closet or small room on the north side against an outside wall.',
      },
    },
    {
      type: 'steps',
      items: [
        { en: 'Choose a corner or closet with two outside walls if possible, on the north side, with a window.' },
        { en: 'Build walls or use the existing ones, and insulate the walls and ceiling that face the warm house. Leave the outside walls bare so the cold can come through.' },
        { en: 'Fit a tight door with insulation or heavy blankets over it. Close or block any heating vent in the room.' },
        { en: 'Cover the window to keep the room dark, and make it able to open. In autumn, open it on cold nights and close it on warm days to bring the room down to 33°F to 45°F (1°C to 7°C).' },
        { en: 'Put a thermometer inside. If it drops below freezing, close the window and cover crops with blankets.' },
        { en: 'Keep crops in boxes or crates off the floor. Root crops like carrots and beets keep their moisture packed in slightly damp sand or sawdust.' },
      ],
    },
    {
      type: 'sketch',
      sketch: 'cold-room',
      caption: { en: 'A cold room from above: a corner with two bare outside walls, two insulated inside walls, a door, a covered window, and shelves of crates.' },
    },
    {
      type: 'p',
      text: {
        en: 'In winter, an unheated garage, shed, or enclosed porch can do the same job. Keep crops in an insulated cooler or a box packed with straw, out of direct sun, with a thermometer inside, and bring them in on nights below freezing.',
      },
    },

    { type: 'h', id: 'bermed', text: { en: 'Bigger: a cellar built on the rock and covered with earth' } },
    {
      type: 'p',
      text: {
        en: 'For a walk-in cellar where you cannot dig, people build a small room of concrete block or stone on top of the rock, then pile earth over the walls and roof (a bermed cellar). It works, but it is real construction: wet soil on a roof weighs tons, and a roof that fails can kill someone inside. Get tested plans from your local extension office or a builder before starting, and check local building rules.',
      },
    },

    { type: 'h', id: 'hot-climates', text: { en: 'Hot climates: when the ground is never cold' } },
    {
      type: 'p',
      text: {
        en: 'A root cellar can only be as cool as the ground and air around it. In hot places, a cellar will not get down to 40°F (4°C) in summer, whatever you build. Plan around the seasons instead: grow storage crops to harvest in the cool months, eat summer crops fresh, and dry, ferment, or can the extra (see {{food-storage}}).',
      },
    },
    {
      type: 'p',
      text: {
        en: 'In hot, dry weather, a [[clay-pot-cooler|clay pot cooler]] can keep vegetables fresh several days longer. Water soaking out through clay and evaporating carries heat away, the same way sweat cools skin. In tests in West Africa, a pot inside a pot cooled vegetables about 14°F (8°C) below the air around it. It does little in humid weather.',
      },
    },
    {
      type: 'steps',
      items: [
        { en: 'Get two unglazed clay pots, one small enough to sit inside the other with a gap of about an inch (2–3 cm) all round. Plug any drain holes in the inner pot.' },
        { en: 'Put a layer of sand in the bottom of the big pot, set the small pot on it, and fill the gap around it with sand.' },
        { en: 'Pour water into the sand until it is soaked.' },
        { en: 'Put the vegetables in the inner pot and cover it with a wet cloth.' },
        { en: 'Keep it in the shade where air moves. Add water to the sand once or twice a day, and keep the cloth wet.' },
      ],
    },
    {
      type: 'sketch',
      sketch: 'clay-pot-cooler',
      caption: { en: 'A clay pot cooler cut in half: a small pot inside a large pot, wet sand between them, vegetables inside, and a wet cloth on top.' },
    },

    { type: 'h', id: 'cellar-care', text: { en: 'Keeping a root cellar working' } },
    {
      type: 'list',
      items: [
        { en: 'Store only perfect crops: no cuts, bruises, or soft spots.' },
        { en: 'Check every week. Remove anything starting to rot; one bad vegetable spreads to the rest.' },
        { en: 'Keep apples and pears apart from vegetables: the gas they give off makes carrots and cabbage spoil faster. Keep cabbage apart too, so its smell does not spread.' },
        { en: 'Keep it dark. Light makes potatoes turn green and sprout.' },
        { en: 'Keep a thermometer inside and check it. Too warm and crops rot or sprout; below freezing and they turn to mush.' },
        { en: 'Root crops like carrots, beets, and parsnips can also stay right in the garden bed under a thick layer of straw, and be dug as needed until the ground freezes hard.' },
      ],
    },

    // ------------------------------------------------------------------
    { type: 'source', title: 'Home Vegetable Gardening: A Quick Reference Guide', publisher: 'NC State Extension', url: 'https://content.ces.ncsu.edu/home-vegetable-gardening-a-quick-reference-guide' },
    { type: 'source', title: 'Planning the Vegetable Garden (426-312)', publisher: 'Virginia Cooperative Extension, Virginia Tech', url: 'https://pubs.ext.vt.edu/426/426-312.html' },
    { type: 'source', title: 'Soil Lead Interpretation Sheet', publisher: 'University of Connecticut Soil Nutrient Analysis Laboratory', url: 'https://soiltesting.cahnr.uconn.edu/wp-content/uploads/sites/3514/2022/06/Lead-Interpretation-Sheet.pdf' },
    { type: 'source', title: 'Reducing Lead Hazard in Gardens and Play Areas (EC 1616)', publisher: 'Oregon State University Extension Service', url: 'https://extension.oregonstate.edu/catalog/pub/ec-1616-reducing-lead-hazard-gardens-play-areas' },
    { type: 'source', title: 'Spring Has Sprung, but Frost Still Likely', publisher: 'Utah State University Extension', url: 'https://extension.usu.edu/news_sections/gardening/spring-has-sprung.php' },
    { type: 'source', title: 'Florida Vegetable Gardening Guide (SP 103)', publisher: 'University of Florida IFAS Extension', url: 'https://edis.ifas.ufl.edu/publication/VH021' },
    { type: 'source', title: 'When to Plant Vegetables in Florida', publisher: 'University of Florida IFAS Extension, Manatee County', url: 'https://blogs.ifas.ufl.edu/manateeco/2025/09/29/when-to-plant-vegetables-in-florida/' },
    { type: 'source', title: 'Selecting Vegetables for Your Garden', publisher: 'University of Florida IFAS Gardening Solutions', url: 'https://gardeningsolutions.ifas.ufl.edu/plants/edibles/vegetables/selecting-vegetables/' },
    { type: 'source', title: 'Heat-tolerant summer vegetables: sweet potatoes, southern peas, okra, Malabar spinach', publisher: 'University of Florida IFAS Extension, Northwest District', url: 'https://nwdistrict.ifas.ufl.edu/hort/tag/sweet-potatoes' },
    { type: 'source', title: 'North Florida Vegetable Gardening Guide', publisher: 'University of Florida IFAS Extension, Leon County', url: 'https://sites.google.com/view/northfloridavegguide/' },
    { type: 'source', title: 'Raised Bed Gardening', publisher: 'Utah State University Extension', url: 'https://extension.usu.edu/yardandgarden/research/raised-bed-gardening' },
    { type: 'source', title: 'Raised Bed Gardening', publisher: 'University of Delaware Cooperative Extension', url: 'https://www.udel.edu/udel/en/academics/colleges/canr/cooperative-extension/fact-sheets/raised-bed-gardening/' },
    { type: 'source', title: 'Raised Bed Gardens', publisher: 'University of Minnesota Extension', url: 'https://extension.umn.edu/vegetables/raised-bed-gardens' },
    { type: 'source', title: 'The Tennessee Vegetable Garden: Building and Using Raised Beds (W 346-E)', publisher: 'University of Tennessee Extension', url: 'https://uthort.tennessee.edu/wp-content/uploads/sites/228/2023/11/W346-E.pdf' },
    { type: 'source', title: 'Raised Bed Gardening (ANR-1345)', publisher: 'Alabama Cooperative Extension System', url: 'https://www.aces.edu/wp-content/uploads/2024/04/ANR-1345_Raised-Bed-Gardening_040124L-G.pdf' },
    { type: 'source', title: 'Sheet Mulching and Lasagna Composting with Cardboard (EM 9559)', publisher: 'Oregon State University Extension Service', url: 'https://extension.oregonstate.edu/catalog/em-9559-sheet-mulching-lasagna-composting-cardboard' },
    { type: 'source', title: 'Lasagna Gardening', publisher: 'Cornell Cooperative Extension, Warren County', url: 'https://warren.cce.cornell.edu/gardening-landscape/warren-county-master-gardener-articles/lasagna-gardening' },
    { type: 'source', title: 'Vegetable Gardening in Containers (E-545)', publisher: 'Texas A&M AgriLife Extension', url: 'https://aggie-horticulture.tamu.edu/vegetable/files/2010/10/E-545_vegetable_gardening_containers.pdf' },
    { type: 'source', title: 'Five-Gallon Bucket Supply List', publisher: 'Alabama Cooperative Extension System', url: 'https://www.aces.edu/blog/topics/lawn-garden/five-gallon-bucket-supply-list/' },
    { type: 'source', title: 'Straw Bale Gardening Offers Options for Gardeners', publisher: 'University of Missouri Extension', url: 'https://cafnr.missouri.edu/stories/extension-article/straw-bale-gardening-offers-options-for-gardeners/' },
    { type: 'source', title: 'Gardening with Straw Bales (ANR Publication 8559)', publisher: 'University of California Agriculture and Natural Resources', url: 'https://escholarship.org/content/qt2x8713zh/qt2x8713zh.pdf' },
    { type: 'source', title: 'Straw Bales Offer Flexible, Accessible Way to Grow Vegetables and Herbs', publisher: 'Oregon State University Extension Service', url: 'https://extension.oregonstate.edu/node/141081' },
    { type: 'source', title: 'Special Vegetable Edition: Straw Bale Gardening', publisher: 'University of Illinois Extension', url: 'https://extension.illinois.edu/blogs/timeline-through-landscape-design-archives/2018-05-07-special-vegetable-edition-straw-bale' },
    { type: 'source', title: 'Compost Tips for the Home Gardener (EP323)', publisher: 'University of Florida IFAS Extension', url: 'https://ask.ifas.ufl.edu/publication/EP323' },
    { type: 'source', title: 'Home Composting: Turning Waste into Garden Gold', publisher: 'North Dakota State University Extension', url: 'https://www.ndsu.edu/agriculture/ag-hub/impact-stories/home-composting-turning-waste-garden-gold' },
    { type: 'source', title: 'Composting for Home Gardeners', publisher: 'University of Wisconsin-Extension', url: 'https://fyi.extension.wisc.edu/danecountycommunitydevelopment/files/2021/10/MasterComposterWEbsitePost.pdf' },
    { type: 'source', title: 'Home Composting', publisher: 'CalRecycle (State of California)', url: 'https://calrecycle.ca.gov/Organics/HomeCompost/' },
    { type: 'source', title: 'Vegetable Gardening Basics', publisher: 'UC Master Gardeners of Santa Clara County', url: 'https://ucanr.edu/node/137231' },
    { type: 'source', title: 'Guidelines for the Safe Use of Urine and Faeces in Ecological Sanitation (Fact Sheet 5, summarizing the WHO 2006 guidelines)', publisher: 'EcoSanRes, Stockholm Environment Institute', url: 'https://susana.org/_resources/documents/default/2-323-esr-factsheet-5-en.pdf' },
    { type: 'source', title: 'Urine Fertilisation (Small-Scale)', publisher: 'Sustainable Sanitation and Water Management (SSWM) Toolbox', url: 'https://sswm.info/factsheet/urine-fertilisation-%28small-scale%29' },
    { type: 'source', title: 'Seed Viability in Storage', publisher: 'University of Illinois Extension', url: 'https://extension.illinois.edu/blogs/garden-scoop/2021-03-06-seed-viability-storage' },
    { type: 'source', title: 'Vegetable Seed Viability', publisher: 'UC Master Gardeners of Placer County', url: 'https://ucanr.edu/media/309509' },
    { type: 'source', title: 'Testing Seed Viability', publisher: 'University of Wisconsin-Madison Extension, Dane County', url: 'https://dane.extension.wisc.edu/2023/02/17/12915' },
    { type: 'source', title: 'Will Your Seeds Grow Plants?', publisher: 'Oregon State University Extension Service', url: 'https://extension.oregonstate.edu/imported-publication/will-your-seeds-grow-plants' },
    { type: 'source', title: 'Are My Seeds Still Good? Testing Seed Germination', publisher: 'University of Illinois Extension', url: 'https://extension.illinois.edu/blogs/good-growing/2023-01-20-are-my-seeds-still-good-testing-seed-germination' },
    { type: 'source', title: 'Ready, Set, Seed: Germination Test', publisher: 'Chicago Botanic Garden', url: 'https://www.chicagobotanic.org/plantinfo/ready_set_seed_germination_test' },
    { type: 'source', title: 'Save Seeds Now for Next Year’s Garden', publisher: 'Oregon State University Extension Service', url: 'https://extension.oregonstate.edu/news/seize-some-seeds-garden-planting-next-year-0' },
    { type: 'source', title: 'A Step-by-Step Guide to Saving Seeds (EM 9663)', publisher: 'Oregon State University Extension Service', url: 'https://extension.oregonstate.edu/catalog/em-9663-step-step-guide-saving-seeds' },
    { type: 'source', title: 'How to Save Seeds', publisher: 'University of Illinois Extension', url: 'https://extension.illinois.edu/sites/default/files/how_to_save_seeds_062021.pdf' },
    { type: 'source', title: 'Seed Saving for Vegetables', publisher: 'University of Maryland Extension', url: 'https://extension.umd.edu/sites/extension.umd.edu/files/2021-02/Seed%20Saving%20Veggies%20Resources.pdf' },
    { type: 'source', title: 'Seed Saving', publisher: 'Maine Organic Farmers and Gardeners Association (MOFGA)', url: 'https://www.mofga.org/?p=22179' },
    { type: 'source', title: 'Hardening Off Transplants', publisher: 'Nebraska Extension in Lancaster County', url: 'https://lancaster.unl.edu/hardening-transplants' },
    { type: 'source', title: 'Hardening Off Vegetable Transplants Is Easy', publisher: 'Michigan State University Extension', url: 'https://www.canr.msu.edu/news/hardening-off-vegetable-transplants-is-easy' },
    { type: 'source', title: 'Growing Potatoes in Home Gardens', publisher: 'University of Minnesota Extension', url: 'https://extension.umn.edu/vegetables/growing-potatoes-home-gardens' },
    { type: 'source', title: 'Potatoes (FN630)', publisher: 'North Dakota State University Extension', url: 'https://www.ndsu.edu/agriculture/sites/default/files/2024-01/fn630_0.pdf' },
    { type: 'source', title: 'Potato Planting: Certified Seed Pieces', publisher: 'University of California Statewide IPM Program', url: 'https://ipm.ucanr.edu/PMG/GARDEN/VEGES/CULTURAL/potplanting.html' },
    { type: 'source', title: 'Sweet Potato: Grow Your Own for Next Year’s Holiday Table', publisher: 'Nebraska Extension in Lancaster County', url: 'https://lancaster.unl.edu/sweet-potato-grow-your-own-next-years-holiday-table/' },
    { type: 'source', title: 'How to Grow Sweet Potatoes in Your Garden', publisher: 'Utah State University Extension', url: 'https://extension.usu.edu/yardandgarden/research/sweet-potatoes-in-the-garden' },
    { type: 'source', title: 'Sweet Potatoes: A Winning Vine for Your Garden', publisher: 'Penn State Extension', url: 'https://extension.psu.edu/sweet-potatoes-a-winning-vine-for-your-garden' },
    { type: 'source', title: 'Tomatoes Struggle in Summer Heat', publisher: 'University of Missouri Extension', url: 'https://extension.missouri.edu/news/tomatoes-struggle-in-summer-heat' },
    { type: 'source', title: 'Summer Vegetables and Heat', publisher: 'NC State Extension, Union County', url: 'https://union.ces.ncsu.edu/2021/07/summer-vegetables-heat/' },
    { type: 'source', title: 'Extending the Growing Season for Lettuce in Georgia Using Shade Cloth and High Tunnels (C 1241)', publisher: 'University of Georgia Cooperative Extension', url: 'https://secure.caes.uga.edu/extension/publications/files/pdf/C%201241_1.PDF' },
    { type: 'source', title: 'Companion Planting: Myth or Truth?', publisher: 'Mississippi State University Extension', url: 'https://extension.msstate.edu/blogs/extension-for-real-life/companion-planting-myth-or-truth' },
    { type: 'source', title: 'Gardening with Companion Plants (Extension Mimeo 128E)', publisher: 'Washington State University Extension', url: 'https://rex.libraries.wsu.edu/esploro/outputs/report/Gardening-with-companion-plants/99901076631401842' },
    { type: 'source', title: 'Extending the Garden Season (426-381)', publisher: 'Virginia Cooperative Extension, Virginia Tech (archived)', url: 'https://webarchive.library.unt.edu/eot2008/20090116015247/http:/www.ext.vt.edu/pubs/envirohort/426-381/426-381.pdf' },
    { type: 'source', title: 'Extending the Gardening Season', publisher: 'University of Wisconsin-Extension', url: 'https://hort.extension.wisc.edu/files/2014/11/Extending-the-Gardening-Season.pdf' },
    { type: 'source', title: 'Extending the Garden Season', publisher: 'Utah State University Extension', url: 'https://extension.usu.edu/yardandgarden/research/extending-the-garden-season' },
    { type: 'source', title: 'Extending the Season in the Garden', publisher: 'University of Connecticut Home and Garden Education Center', url: 'https://homegarden.cahnr.uconn.edu/?p=1766' },
    { type: 'source', title: 'Fruit and Vegetable Safety (sprouts)', publisher: 'U.S. Centers for Disease Control and Prevention (CDC)', url: 'https://www.cdc.gov/foodsafety/communication/steps-healthy-fruits-veggies.html' },
    { type: 'source', title: 'Seed and Bean Sprouts', publisher: 'University of Connecticut Food Safety', url: 'https://foodsafety.uconn.edu/seed-and-bean-sprouts' },
    { type: 'source', title: 'Storage of Home-Grown Vegetables (Fact Sheet 7.601)', publisher: 'Colorado State University Extension', url: 'https://extension.colostate.edu/topics/food-preservation/' },
    { type: 'source', title: 'Storing Your Garden Harvest', publisher: 'Washington State University Extension', url: 'https://wpcdn.web.wsu.edu/extension/uploads/sites/57/2019/08/Storing-Your-Garden-Harvest.pdf' },
    { type: 'source', title: 'Cold Storage of Vegetables (Northern Healthy Foods Initiative)', publisher: 'Government of Manitoba', url: 'https://www.gov.mb.ca/inr/pdf/pubs/nhfi_cold_storage.pdf' },
    { type: 'source', title: 'Clay Pot Coolers: Preserving Fruits and Vegetables in Mali', publisher: 'MIT D-Lab', url: 'https://d-lab.mit.edu/sites/default/files/inline-files/MIT%20D-Lab%20Clay%20Pot%20Cooles%20Report%202016-2021%2020211014_0.pdf' },
    { type: 'source', title: 'Evaporative Cooling for Fruit and Vegetable Storage in Rwanda and Burkina Faso', publisher: 'University of California, Davis, Horticulture Innovation Lab', url: 'https://horticulture.ucdavis.edu/node/7011' },
  ],
};
