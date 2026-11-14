import type { Section } from '../types';

// Section 4: Growing Food. The root cellar part was written first (Nov 14, 2026), at the
// user's request, so families on rock or with no basement have a way to keep a harvest.
// The rest of the section (raised beds, seeds, growing zones) is still to be written above it.

export const growingFood: Section = {
  id: 'growing-food',
  number: 4,
  title: { en: 'Growing Food' },
  summary: { en: 'Small-yard gardens, raised beds, and seeds for your growing zone.' },
  blocks: [
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
    { type: 'source', title: 'Storage of Home-Grown Vegetables (Fact Sheet 7.601)', publisher: 'Colorado State University Extension', url: 'https://extension.colostate.edu/topics/food-preservation/' },
    { type: 'source', title: 'Storing Your Garden Harvest', publisher: 'Washington State University Extension', url: 'https://wpcdn.web.wsu.edu/extension/uploads/sites/57/2019/08/Storing-Your-Garden-Harvest.pdf' },
    { type: 'source', title: 'Cold Storage of Vegetables (Northern Healthy Foods Initiative)', publisher: 'Government of Manitoba', url: 'https://www.gov.mb.ca/inr/pdf/pubs/nhfi_cold_storage.pdf' },
    { type: 'source', title: 'Clay Pot Coolers: Preserving Fruits and Vegetables in Mali', publisher: 'MIT D-Lab', url: 'https://d-lab.mit.edu/sites/default/files/inline-files/MIT%20D-Lab%20Clay%20Pot%20Cooles%20Report%202016-2021%2020211014_0.pdf' },
    { type: 'source', title: 'Evaporative Cooling for Fruit and Vegetable Storage in Rwanda and Burkina Faso', publisher: 'University of California, Davis, Horticulture Innovation Lab', url: 'https://horticulture.ucdavis.edu/node/7011' },
  ],
};
