import type { Section } from "../types";

// Section 6: Seasons (winter and summer). Facts checked Nov 14, 2026 against the sources
// listed at the end. Safety numbers (generator distance, heater clearances, body
// temperatures, ice thickness, filter ratings, tick and lightning rules) come from CDC,
// NWS, USFA/FEMA, EPA, CPSC, NHTSA, AAP, Red Cross, WHO, and state agencies.
// Do not round or "simplify" them. Wind chill values are worked out with the NWS formula.

export const seasons: Section = {
  id: "seasons",
  number: 6,
  title: { en: "Seasons" },
  summary: { en: "Getting through winter cold and summer heat." },
  blocks: [
    {
      type: "p",
      text: {
        en: "Cold and heat kill more quietly than storms do. Many of those deaths come from the same few mistakes: heating a home the wrong way, getting wet in the cold, and staying too long in heat without a way to cool down. This section shows how to keep your family warm in winter and cool in summer when the power is out and help is far away.",
      },
    },
    {
      type: "p",
      text: {
        en: "Read the winter part before the first freeze and the summer part before the first heat wave. Both work best if you get ready a season ahead. The checklist near the end shows what to do each fall and each spring.",
      },
    },

    // ==================================================================
    // WINTER
    // ==================================================================
    { type: "h", id: "warm-room", text: { en: "Winter: keeping warm at home without power" } },
    {
      type: "p",
      text: {
        en: "A whole house loses heat fast. One small room with the whole family in it stays warm much longer. Pick the room now, while things are normal.",
      },
    },
    {
      type: "steps",
      items: [
        { en: "Choose one room to live and sleep in. A small room with few windows works best. A room on the sunny side of the house (south side in the Northern Hemisphere, north side in the Southern) gets free heat on clear days. If you have a safe fireplace or wood stove, use that room." },
        { en: "Close the doors to every other room so you are not heating them. Lay rolled towels or rags along the cracks under doors." },
        { en: "Close curtains and blinds at night to hold heat in. On sunny days, open the ones on windows the sun shines through, and close them again before sunset." },
        { en: "Hang blankets, quilts, or sleeping bags over windows and over open doorways. Clear plastic sheeting or bubble wrap taped to the window frame also helps and still lets light in." },
        { en: "Put rugs, blankets, or foam pads on the floor, especially on a concrete slab. Cold floors pull heat out of anyone sitting or sleeping on them." },
        { en: "Everyone sleeps in the same room. A small tent set up on the floor or over a bed, or a blanket fort over a table, holds the warmth of sleeping bodies in a small space. Leave it open enough to breathe freely, and never put any heater or flame inside it." },
        { en: "Dress in loose layers indoors, with hats, warm socks, and mittens. Wool and synthetic fabrics stay warm when damp; cotton does not." },
        { en: "Eat regular meals and drink warm, non-alcoholic drinks. Food is fuel: a body without enough food cannot make enough heat. Alcohol makes you feel warm while your body loses heat faster." },
        { en: "Move around a little during the day: chores, walking in place, stretching. Stop before you sweat." },
        { en: "Bring pets inside." },
      ],
    },
    { type: "sketch", sketch: "warm-room", caption: { en: "One warm room: blanket over the window, towel under the door, padding on the floor, and a small tent over the bed to hold body heat." } },
    {
      type: "p",
      text: {
        en: "Once your own family is safe, check on neighbors, especially older people who live alone. Two households sharing one warm room use far less fuel than two.",
      },
    },

    // ------------------------------------------------------------------
    { type: "h", id: "carbon-monoxide", text: { en: "Carbon monoxide: the winter killer" } },
    {
      type: "p",
      text: {
        en: "Every flame and every engine makes [[carbon-monoxide|carbon monoxide]] (CO), a gas you cannot see or smell. In winter storms, families die from it because they bring a generator, grill, or camp stove inside to stay warm. People who are asleep can die before they ever feel sick.",
      },
    },
    {
      type: "warning",
      text: {
        en: "Never use a generator, charcoal or gas grill, camp stove, or any engine inside your home, garage, basement, or crawl space, even with doors or windows open. Run a generator outdoors and more than 20 feet (6 meters) away from any windows, doors, and vents. Never heat your home with a gas oven. Never run a car in an attached garage, even with the door open.",
      },
    },
    { type: "sketch", sketch: "generator-distance", caption: { en: "A generator belongs outside, far from the house, with its exhaust pointed away from windows and doors. More than 20 feet (6 meters) away." } },
    {
      type: "list",
      items: [
        { en: "Signs of CO poisoning: headache, dizziness, weakness, upset stomach, vomiting, chest pain, and confusion. It is often mistaken for the flu. A clue is that several people, or people and pets, feel sick at the same time, and feel better away from the house." },
        { en: "If anyone has these signs or a [[co-alarm|CO alarm]] sounds: get everyone out into fresh air right away, leave the doors open behind you, and get medical help. Do not go back in until the source is off and the house has aired out." },
        { en: "Have a battery-powered CO alarm on every sleeping level of the home. Check the batteries when the clocks change each spring and fall, and replace the alarm about every 5 years or when its instructions say." },
      ],
    },

    // ------------------------------------------------------------------
    { type: "h", id: "heating-safely", text: { en: "Heating safely" } },
    {
      type: "p",
      text: {
        en: "Home heating fires peak in December, January, and February. The one rule that prevents most of them: keep anything that can burn at least 3 feet (1 meter) from any heater, fireplace, or stove. Keep children and pets out of that space too.",
      },
    },
    {
      type: "table",
      caption: { en: "Heat sources: what is safe indoors and how" },
      head: [{ en: "Heat source" }, { en: "Indoors?" }, { en: "Safety rules" }],
      rows: [
        [
          { en: "Electric space heater (needs power from a generator, solar, or the grid)" },
          { en: "Yes" },
          { en: "3 feet (1 m) from anything that burns. Tip-over shut-off. Plug straight into the wall, never an extension cord or power strip, and nothing else on that circuit. Off when you sleep or leave the room." },
        ],
        [
          { en: "[[kerosene-heater|Kerosene heater]]" },
          { en: "Only with care" },
          { en: "Use only 1-K grade kerosene, never gasoline. Refuel only when cool, outdoors. Crack a window and keep the door open to the rest of the house. CO alarm in the room. Off when you sleep." },
        ],
        [
          { en: "Fireplace" },
          { en: "Yes, if the chimney is sound" },
          { en: "Screen in front. 3 feet clear. Dry wood only. Fire out before sleeping or leaving. Chimney inspected and cleaned each year." },
        ],
        [
          { en: "Wood stove" },
          { en: "Yes, if properly installed" },
          { en: "Same as a fireplace. Keep the doors closed except when loading wood." },
        ],
        [
          { en: "Candles" },
          { en: "Light only, not heat" },
          { en: "A major cause of house fires. Never leave one burning in an empty room or near children. Flashlights and battery lanterns are safer." },
        ],
        [
          { en: "Gas oven or stovetop" },
          { en: "Never for heat" },
          { en: "Can fill the house with CO." },
        ],
        [
          { en: "Charcoal or gas grill, camp stove, generator, car engine" },
          { en: "Never" },
          { en: "Outdoors only. See the warning above." },
        ],
      ],
    },
    {
      type: "p",
      text: {
        en: "Kerosene heaters have no chimney, so their fumes stay in the room. A common rule of thumb is 1 square inch of open window for each 1,000 BTU of heater rating (a 10,000 BTU heater needs about a 10-square-inch opening, for example a window opened about 1 inch across a 10-inch width). Store kerosene outdoors in a blue container marked \"Kerosene\", never in a red gasoline can. Even a little gasoline mixed in can cause a fire.",
      },
    },
    { type: "sketch", sketch: "kerosene-heater", caption: { en: "Kerosene heater: on a hard, flat floor, 3 feet from anything that burns, with a window cracked open for fresh air." } },

    { type: "h", id: "firewood", text: { en: "Firewood and ashes" } },
    {
      type: "list",
      items: [
        { en: "Burn only dry, [[seasoned-firewood|seasoned firewood]]. Freshly cut wood is full of water: it smokes, gives little heat, and coats the chimney with creosote, which causes chimney fires." },
        { en: "Split wood, stack it off the ground, and cover only the top so air can move through the sides. Let softwood (pine, fir) dry at least 6 months and hardwood (oak, maple) at least 12 months. Wood is ready below 20 percent moisture; a cheap moisture meter tells you. Dry wood is lighter, darker, cracked at the ends, and sounds hollow when two pieces are knocked together." },
        { en: "Plan ahead. Wood you cut this winter is next winter's fuel." },
        { en: "Never burn trash, plastic, painted or pressure-treated wood, or wet, moldy, or rotten wood. Do not burn paper as fuel in a fireplace or wood stove." },
        { en: "Stack the woodpile well away from the house, about 30 feet (9 meters) if you can, with only a day or two of wood near the door." },
        { en: "Put ashes in a metal can with a metal lid and set it outside, at least 10 feet (3 meters) from the house, on bare ground or concrete. Ashes can hold live coals for days. Never put them in a paper bag, cardboard box, or plastic trash can. Once fully cold, wood ash can go in the compost or garden in small amounts (see {{growing-food|Growing Food}})." },
      ],
    },
    { type: "sketch", sketch: "firewood-stack", caption: { en: "Firewood stacked off the ground on boards, with only the top covered so wind can dry it." } },
    { type: "sketch", sketch: "ash-can", caption: { en: "A metal ash can with a lid, outside on bare ground, well away from the house." } },

    // ------------------------------------------------------------------
    { type: "h", id: "pipes", text: { en: "Keeping pipes from freezing" } },
    {
      type: "p",
      text: {
        en: "Water expands when it freezes and can split a pipe. When it thaws, the house floods and your water is gone. Pipes in outside walls, garages, attics, crawl spaces, and under sinks freeze first.",
      },
    },
    {
      type: "steps",
      items: [
        { en: "Before winter: disconnect and drain garden hoses. Close the indoor valve that feeds each outdoor faucet, then open the outdoor faucet so leftover water can drain and expand." },
        { en: "Wrap exposed pipes with foam [[pipe-insulation|pipe insulation]]. Newspaper wrapped about ¼ inch (6 mm) thick also gives some protection." },
        { en: "Keep garage doors closed if water lines run through the garage." },
        { en: "In very cold weather, open the cabinet doors under sinks so house heat reaches the pipes, and let cold water drip from faucets on outside walls. Move cleaners and chemicals out of children's reach first." },
        { en: "If you have heat, keep it at the same temperature day and night. If you must leave the house in winter, keep the heat at 55°F (13°C) or higher." },
        { en: "If the house will have no heat for days in freezing weather, save the water first: fill clean containers, then close the [[main-shutoff-valve|main water valve]] and drain the pipes (see {{water|Water}}). Empty pipes cannot burst." },
      ],
    },
    { type: "sketch", sketch: "drip-faucet", caption: { en: "On the coldest nights: cabinet doors open, a slow drip of cold water, and foam sleeves on exposed pipes." } },
    {
      type: "p",
      text: {
        en: "Thawing a frozen pipe: a faucet that gives only a trickle may be frozen. Open it, then warm the frozen section gently with a hair dryer, heating pad, or towels soaked in hot water, until full pressure comes back. Never use a torch, a flame, or a kerosene or propane heater on pipes. If one pipe froze, check the others.",
      },
    },

    // ------------------------------------------------------------------
    { type: "h", id: "babies-elders-cold", text: { en: "Babies, older people, and pets in the cold" } },
    {
      type: "list",
      items: [
        { en: "Babies lose heat fast but are also harmed by overheating. A cold baby may have bright red, cold skin and very low energy. That is an emergency." },
        { en: "For sleep, keep the American Academy of Pediatrics rules even in a cold house: baby on their back, alone, on a firm flat surface, with no loose blankets, pillows, or quilts. Keep a baby warm with layers of clothing and a [[wearable-blanket|wearable blanket]]. In general a baby needs one more layer than an adult in the same room." },
        { en: "Check for overheating by feeling the baby's chest or the back of the neck. Sweating, flushed skin, or a hot chest means take a layer off. No hats on babies indoors." },
        { en: "Never put a space heater or any flame near a sleeping baby or child." },
        { en: "Older people, people who are sick or thin, and anyone without enough food are at higher risk. Check on them often, and look for confusion or sleepiness, which can be the first signs of [[hypothermia|hypothermia]]." },
        { en: "Pets: bring them inside. Dogs and cats can get hypothermia and frostbite too." },
      ],
    },
    { type: "sketch", sketch: "wearable-blanket", caption: { en: "A wearable blanket (sleep sack) keeps a baby warm with nothing loose in the crib." } },

    // ------------------------------------------------------------------
    { type: "h", id: "outside-cold", text: { en: "Going outside in the cold" } },
    {
      type: "list",
      items: [
        { en: "Dress in layers you can open or take off before you sweat. Cover the face, ears, and neck. Mittens are warmer than gloves." },
        { en: "Wet clothing loses most of its warmth. Change into dry clothing right away if you get wet. [[hypothermia|Hypothermia]] can happen at temperatures above 40°F (4°C) when a person is wet from rain, sweat, or cold water." },
        { en: "Stay out of the wind. [[wind-chill|Wind chill]] is how cold it feels on bare skin when wind carries heat away." },
        { en: "Work outdoors in pairs, and watch each other's faces for pale or gray patches of [[frostbite|frostbite]]." },
        { en: "Stay indoors during severe cold, especially when the wind chill is -50°F (-46°C) or lower." },
      ],
    },
    {
      type: "table",
      caption: { en: "Wind chill: how cold bare skin feels (from the National Weather Service formula)" },
      head: [{ en: "Air temperature" }, { en: "Wind 5 mph (8 km/h)" }, { en: "Wind 15 mph (24 km/h)" }, { en: "Wind 30 mph (48 km/h)" }],
      rows: [
        [{ en: "30°F (-1°C)" }, { en: "25°F (-4°C)" }, { en: "19°F (-7°C)" }, { en: "15°F (-9°C)" }],
        [{ en: "20°F (-7°C)" }, { en: "13°F (-11°C)" }, { en: "6°F (-14°C)" }, { en: "1°F (-17°C)" }],
        [{ en: "10°F (-12°C)" }, { en: "1°F (-17°C)" }, { en: "-7°F (-22°C)" }, { en: "-12°F (-24°C)" }],
        [{ en: "0°F (-18°C)" }, { en: "-11°F (-24°C)" }, { en: "-19°F (-28°C)" }, { en: "-26°F (-32°C)" }],
        [{ en: "-10°F (-23°C)" }, { en: "-22°F (-30°C)" }, { en: "-32°F (-36°C)" }, { en: "-39°F (-39°C)" }],
      ],
    },
    {
      type: "p",
      text: {
        en: "At a wind chill of -19°F (-28°C), for example 0°F air with a 15 mph wind, bare skin can freeze in about 30 minutes. The colder the wind chill, the faster it happens. Frostbite only happens when the actual air temperature is below freezing.",
      },
    },
    {
      type: "p",
      text: {
        en: "For walking long distances in rain, snow, and cold, including keeping feet dry and treating hypothermia away from home, see {{bugging-out|Bugging Out}}.",
      },
    },

    { type: "h", id: "snow-shoveling", text: { en: "Shoveling snow without a heart attack" } },
    {
      type: "p",
      text: {
        en: "Cardiac emergencies jump after big snowstorms. Cold air tightens blood vessels and raises blood pressure, and lifting heavy snow works the heart as hard as an all-out stress test. People who rarely exercise are most at risk, even with no known heart disease.",
      },
    },
    {
      type: "list",
      items: [
        { en: "Anyone with heart disease, high blood pressure, diabetes, a past heart attack or stroke, or who smokes should get someone else to shovel." },
        { en: "Warm up first, go slowly, and take frequent breaks." },
        { en: "Push snow instead of lifting it. If you must lift, use a small shovel and lift small loads with your legs." },
        { en: "Clear snow several times during a storm instead of all at once at the end." },
        { en: "Do not shovel right after a heavy meal or after drinking alcohol." },
        { en: "Stop right away for chest pain or pressure, pain in the arms, back, neck, or jaw, shortness of breath, a cold sweat, nausea, or lightheadedness. Call for emergency help. If someone collapses and is not breathing normally, start CPR." },
      ],
    },

    { type: "h", id: "ice", text: { en: "Ice on ponds and lakes" } },
    {
      type: "p",
      text: {
        en: "A frozen pond can look like a shortcut, a play area, or a place to fish through the ice. Ice that looks solid can be thin in spots, near inflows, around plants, and over moving water. Check thickness with an ice auger, chisel, or drill every few steps, starting at the shore.",
      },
    },
    {
      type: "table",
      caption: { en: "New, clear ice: minimum thickness (Minnesota Department of Natural Resources)" },
      head: [{ en: "Clear ice" }, { en: "What it can hold" }],
      rows: [
        [{ en: "Under 4 inches (10 cm)" }, { en: "Stay off." }],
        [{ en: "4 inches (10 cm)" }, { en: "People on foot, ice fishing" }],
        [{ en: "5–7 inches (13–18 cm)" }, { en: "Snowmobile or small ATV" }],
        [{ en: "9–10 inches (23–25 cm)" }, { en: "Small car or SUV" }],
      ],
    },
    {
      type: "warning",
      text: {
        en: "White or cloudy ice is only about half as strong as clear ice: double these numbers for it. Ice can vary widely across a single pond. Keep children off ice unless an adult has checked it that day.",
      },
    },

    // ------------------------------------------------------------------
    { type: "h", id: "stranded-car", text: { en: "If you are stranded in a car" } },
    {
      type: "steps",
      items: [
        { en: "Stay with the car. Do not walk off to look for help unless you can see help within about 100 yards (90 meters). People get lost and freeze in blowing snow." },
        { en: "Make the car easy to find: tie a bright cloth to the antenna or a door handle, and raise the hood once snow stops falling." },
        { en: "Clear snow away from the tailpipe. A blocked tailpipe fills the car with carbon monoxide." },
        { en: "Run the engine and heater about 10 minutes each hour, with a window on the side away from the wind open slightly. Turn on the dome light only while the engine runs, to save the battery." },
        { en: "Put on every layer you have. Huddle together. Cover with floor mats, newspapers, or seat covers if you have no blankets." },
        { en: "Move your arms and legs to keep blood flowing. If you are alone, stay awake as much as you can. With others, take turns sleeping and watching." },
        { en: "Drink water. Eat something if you have it." },
      ],
    },
    { type: "sketch", sketch: "stranded-car", caption: { en: "Stranded: a bright cloth on the antenna, the tailpipe dug clear of snow, and a window on the downwind side cracked open." } },
    {
      type: "list",
      items: [
        { en: "Winter car kit: blankets or sleeping bags, extra hats, mittens, and socks, water and snacks, flashlight with spare batteries, first aid kit, small shovel, ice scraper, sand or cat litter for traction, jumper cables, phone charger, and a bright cloth. Keep the gas tank at least half full all winter." },
        { en: "Never pour hot water on an icy windshield. It can crack." },
      ],
    },

    // ------------------------------------------------------------------
    { type: "h", id: "cold-illness", text: { en: "Hypothermia and frostbite" } },
    {
      type: "table",
      caption: { en: "Know the signs" },
      head: [{ en: "What to look for" }, { en: "Hypothermia (body too cold)" }, { en: "Frostbite (skin and tissue frozen)" }],
      rows: [
        [
          { en: "Signs" },
          { en: "Shivering, exhaustion, confusion, fumbling hands, memory loss, slurred speech, drowsiness. Babies: bright red, cold skin and very low energy." },
          { en: "First redness or pain, then a white or grayish-yellow patch, skin that feels unusually firm or waxy, and numbness. Most often on fingers, toes, nose, ears, cheeks, and chin." },
        ],
        [
          { en: "How serious" },
          { en: "A medical emergency. A body temperature below 95°F (35°C) needs medical care right away. Shivering may stop as it gets worse." },
          { en: "The person often does not notice because the skin is numb. Can cause permanent damage. Check anyone with frostbite for hypothermia too; hypothermia comes first." },
        ],
      ],
    },
    {
      type: "steps",
      items: [
        { en: "Get medical help as soon as you can. Move the person into a warm room or shelter, gently. If you cannot get inside, block the wind and put something under them to insulate them from the ground." },
        { en: "Take off wet clothing and put on dry clothing, or wrap them in dry blankets, including the head and neck." },
        { en: "Hypothermia: warm the center of the body first: chest, neck, head, and groin. Use an electric blanket if you have one, skin-to-skin contact under loose dry blankets, or warm (not hot) water bottles or heat packs wrapped in cloth at the armpits, chest, and groin. Do not rub the arms and legs." },
        { en: "Give warm, sweet drinks only if the person is awake and can swallow. Never alcohol. Never give drinks to someone who is not fully awake." },
        { en: "Frostbite: put the frozen part in water that feels warm, not hot, to an unhurt hand, for about 30 minutes, or hold warm, wet cloths on a nose or ears. Fingers can also be warmed in the person's own armpits. Take off rings and tight items first, before swelling starts." },
        { en: "Do not rub or massage frostbite, and never rub it with snow. Do not walk on frostbitten feet unless you must. Do not use a stove, fireplace, heat lamp, heating pad, or hair dryer on it; numb skin burns easily." },
        { en: "If there is any chance the part will freeze again before you reach shelter, do not thaw it yet. Freezing again after thawing causes worse damage. Once thawed, wrap it loosely in dry cloth so it stays warm." },
      ],
    },
    { type: "sketch", sketch: "core-warming", caption: { en: "Warming someone with hypothermia: wrapped in dry blankets, with wrapped heat sources at the chest, armpits, and groin, and the head covered." } },
    {
      type: "warning",
      text: {
        en: "If a very cold person is unconscious and seems to have no pulse or breathing, handle them gently, get emergency help, and start CPR even if they seem dead. Keep warming them during CPR. People with severe hypothermia have been brought back after looking lifeless. See {{medical|Medical}}.",
      },
    },
    {
      type: "p",
      text: {
        en: "Snow and ice as water: melt them first, then treat the water the same way as rainwater (see {{water|Water}}). Melting snow in a pot takes a lot of fuel, and eating snow makes your body spend its own heat melting it.",
      },
    },

    // ==================================================================
    // SUMMER
    // ==================================================================
    { type: "h", id: "cool-home", text: { en: "Summer: keeping the house cool without power" } },
    {
      type: "p",
      text: {
        en: "Heat waves can be deadly, especially for babies and older people. Extreme heat usually means temperatures above 90°F (32°C) with high humidity for two or three days or more. Nights that stay hot are the most dangerous, because the body never gets a chance to cool down.",
      },
    },
    {
      type: "steps",
      items: [
        { en: "During the day, when it is hotter outside than inside: close windows, and cover them with blinds, curtains, or shutters to block direct sun. Shading on the outside of the window (an awning, a sheet or [[shade-cloth|shade cloth]] hung outside, shrubs) blocks more heat than curtains inside." },
        { en: "After dark, when it is cooler outside than inside: open windows on opposite sides of the house so the night air flows through. Put a fan in a window facing out to push hot air out, if you have power." },
        { en: "Live in the coolest rooms during the hottest hours: the lowest floor, rooms on the shady side, or a basement." },
        { en: "Turn off lights and anything electrical you do not need; they all give off heat." },
        { en: "Cook outdoors, in the early morning, or not at all. Cold meals from your stored food are fine (see {{food-storage|Food Storage}})." },
        { en: "If your home cannot be kept cool, spend 2–3 hours of the hottest part of the day somewhere cooler: a cooling center, library, or the deep shade of a tree outdoors, which can be cooler than a closed house." },
      ],
    },
    { type: "sketch", sketch: "day-night-cooling", caption: { en: "Day: windows shut and shaded from the sun. Night: windows open on both sides so cool air flows through." } },
    {
      type: "list",
      items: [
        { en: "Fans move air but do not cool it. They help when the [[heat-index|heat index]] is below the high 90s °F (about 35–37°C). Above that, a fan blowing hot air on you can make you hotter." },
        { en: "Water cools far better than air. Take cool showers or baths, sit with your feet in a tub of cool water, or wet your skin with a damp cloth or spray bottle and let it dry in moving air. Wet, light clothing works too, and sleeping under a damp sheet helps on hot nights." },
        { en: "Wear light, loose clothing and use light bedding." },
      ],
    },

    { type: "h", id: "body-heat", text: { en: "Keeping your body cool" } },
    {
      type: "list",
      items: [
        { en: "Drink water regularly through the day, before you feel thirsty. Avoid alcohol and very sugary drinks. Heavy sweating also loses salt; the oral rehydration drink in {{medical|Medical}} replaces both." },
        { en: "Do hard work in the early morning and evening. Rest in the shade during the middle of the day." },
        { en: "Take breaks often, and stop at the first sign of feeling unwell." },
        { en: "Watch each other. People with heat illness often do not notice it in themselves." },
        { en: "Your water needs go up sharply in heat. Plan stored water for it (see {{water|Water}})." },
      ],
    },

    // ------------------------------------------------------------------
    { type: "h", id: "heat-illness", text: { en: "Heat illness: know the signs" } },
    {
      type: "table",
      caption: { en: "From mild to deadly" },
      head: [{ en: "Illness" }, { en: "Signs" }, { en: "What to do" }],
      rows: [
        [
          { en: "Heat cramps" },
          { en: "Painful muscle spasms, usually in the legs and belly, with heavy sweating" },
          { en: "Stop, rest somewhere cool. Press on the muscle or massage it gently. Sips of water unless the person feels sick. Get medical help if the cramps last more than 1 hour." },
        ],
        [
          { en: "[[heat-exhaustion|Heat exhaustion]]" },
          { en: "Heavy sweating; cool, pale, clammy skin; fast, weak pulse; weakness, dizziness, headache, nausea or vomiting, fainting" },
          { en: "Move to a cooler place. Loosen or remove extra clothing. Cool wet cloths, or sit in a cool bath. Sips of water. Get medical help if they vomit, get worse, or are not better within 1 hour. Stay with them." },
        ],
        [
          { en: "[[heat-stroke|Heat stroke]]" },
          { en: "Confusion, slurred speech, fainting, or seizures; body temperature above 103°F (39.4°C); hot, red skin that may be dry or damp; fast, strong pulse; pounding headache" },
          { en: "A deadly emergency. Call for help. Cool the body right away (see below). Do not give anything to drink." },
        ],
      ],
    },
    {
      type: "warning",
      text: {
        en: "The dividing line is the mind. A hot person who is confused, slurring words, stumbling, or passing out has heat stroke until proven otherwise. Cooling comes first, before anything else: not water to drink, not a long trip.",
      },
    },
    {
      type: "steps",
      items: [
        { en: "Cooling someone with heat stroke: move them to shade or the coolest room and take off outer clothing." },
        { en: "Best: put them in a tub or tank of cold water or ice water up to the neck, holding their head above water. Never leave them alone in the water." },
        { en: "If there is no tub: soak their skin and clothes with cool water, put cold wet cloths or ice on the head, neck, armpits, and groin, and fan them hard to speed up drying." },
        { en: "Keep cooling until they think clearly again or help arrives. Stay with them the whole time." },
      ],
    },
    { type: "sketch", sketch: "heat-stroke-cooling", caption: { en: "Cooling heat stroke with no tub: soak the clothes, ice or cold wet cloths at the neck, armpits, and groin, and fan hard." } },

    { type: "h", id: "heat-risk", text: { en: "Children, babies, older people, and pets in heat" } },
    {
      type: "list",
      items: [
        { en: "Never leave a child or a pet in a parked car, even for a minute, even with the windows open. A car can heat up about 20°F (11°C) in 10 minutes. On a day in the mid-60s °F (about 18°C), the inside can pass 110°F (43°C). Lock cars so children cannot climb in." },
        { en: "Babies and small children heat up faster than adults and cannot tell you. Dress them lightly, keep them in shade, and offer fluids often (breast milk or formula for babies; see {{food-storage|Food Storage}})." },
        { en: "Older people, people who are sick, and people on some medicines are at the highest risk. Check on them twice a day during a heat wave." },
        { en: "Give pets plenty of water and shade. Hot pavement can burn their paws: if it is too hot for the back of your hand, it is too hot for them." },
      ],
    },

    // ------------------------------------------------------------------
    { type: "h", id: "sun", text: { en: "Sun" } },
    {
      type: "list",
      items: [
        { en: "The sun is strongest from about 10 a.m. to 4 p.m. (daylight saving time). Plan outdoor work around it." },
        { en: "Wear a wide-brimmed hat that shades the face, ears, and back of the neck, long sleeves and long pants of tightly woven cloth, and sunglasses that block UVA and UVB." },
        { en: "Use a broad-spectrum sunscreen of SPF 15 or higher, a thick layer, on all bare skin. Put more on after 2 hours, and after swimming, sweating, or toweling off. Check the expiration date; sunscreen with no date lasts no more than 3 years." },
        { en: "Babies 6 months old or younger: no sunscreen. Keep them out of direct sun and cover them with light clothing." },
      ],
    },

    { type: "h", id: "bugs", text: { en: "Mosquitoes and ticks" } },
    {
      type: "p",
      text: {
        en: "Without screens, air conditioning, and pest control, insects become a real health problem in warm months. Mosquitoes and ticks spread diseases such as West Nile virus, dengue, malaria (in some regions), and Lyme disease.",
      },
    },
    {
      type: "list",
      items: [
        { en: "Use an [[insect-repellent|EPA-registered insect repellent]] with DEET, picaridin, IR3535, oil of lemon eucalyptus (OLE), para-menthane-diol (PMD), or 2-undecanone. Do not use OLE or PMD on children under 3." },
        { en: "Put sunscreen on first, then repellent. On children, spray repellent on your own hands and rub it on their face; keep it off their hands, eyes, mouth, and any cuts." },
        { en: "Wear long, loose sleeves and pants. Treat clothing, boots, and gear with [[permethrin|permethrin]], which lasts through several washings. Never put permethrin on skin." },
        { en: "Keep window and door screens whole. Patch holes now; screens are hard to find later." },
        { en: "Once a week, empty and scrub, turn over, or cover anything that holds water: buckets, tires, toys, flowerpot saucers, birdbaths. Keep a tight screen over every rain barrel so mosquitoes cannot breed in your drinking water (see {{water|Water}})." },
      ],
    },
    {
      type: "list",
      items: [
        { en: "Ticks: after time outdoors, including your own yard, check the whole body with a mirror: under the arms, in and around the ears and hair, the belly button, behind the knees, between the legs, and around the waist. Check children and pets too." },
        { en: "Shower within 2 hours of coming inside. Tumble-dry dry clothes on high heat for 10 minutes to kill ticks; if clothes need washing first, use hot water." },
      ],
    },
    {
      type: "steps",
      items: [
        { en: "Removing a tick: grab it as close to the skin as you can with clean, [[fine-tipped-tweezers|fine-tipped tweezers]]." },
        { en: "Pull straight up with steady, even pressure. Do not twist or jerk. If the mouthparts break off and do not come out easily, leave them; the skin will push them out." },
        { en: "Clean the bite and your hands with soap and water or rubbing alcohol." },
        { en: "Get rid of the tick by sealing it in a bag or tape, flushing it, or dropping it in alcohol. Do not crush it with your fingers." },
        { en: "Do not use petroleum jelly, nail polish, heat, or matches to make a tick let go. Remove it right away." },
        { en: "Watch for a rash or fever over the next several weeks, and get medical care if one appears. See {{medical|Medical}}." },
      ],
    },
    { type: "sketch", sketch: "tick-removal", caption: { en: "Removing a tick: tweezers close to the skin, pull straight up, slow and steady." } },

    // ------------------------------------------------------------------
    { type: "h", id: "lightning", text: { en: "Thunderstorms and lightning" } },
    {
      type: "list",
      items: [
        { en: "No place outside is safe when there is a thunderstorm nearby. If you can hear thunder, lightning can reach you. Go inside right away." },
        { en: "Safe places: a fully enclosed building with wiring and plumbing, or a hard-topped metal car or truck with the windows closed. Sheds, tents, picnic shelters, porches, and open vehicles are not safe." },
        { en: "Stay inside until 30 minutes after the last thunder. If you hear thunder again, start the 30 minutes over." },
        { en: "Inside, stay off corded phones and away from plumbing (sinks, showers, baths) and anything plugged into the wall during the storm." },
        { en: "Plan outdoor work so you can reach shelter quickly, and watch the sky for towering, darkening clouds." },
      ],
    },

    { type: "h", id: "smoke", text: { en: "Wildfire smoke" } },
    {
      type: "p",
      text: {
        en: "Smoke from wildfires can drift hundreds of miles and hang over a town for days. The tiny particles go deep into the lungs and are hardest on children, older people, pregnant women, and anyone with asthma or heart or lung disease.",
      },
    },
    {
      type: "steps",
      items: [
        { en: "Stay inside with windows and doors closed. Do not burn candles, fry food, or vacuum, which all add smoke and dust to the air." },
        { en: "Make one room your clean-air room, ideally the bedroom where everyone sleeps, and run an air cleaner there." },
        { en: "No air purifier? Build a [[box-fan-filter|box fan air cleaner]]: tape or strap a MERV 13 furnace filter (1 or 4 inches thick) to the back of a box fan, with the arrow on the filter frame pointing toward the fan. A cardboard shroud around the fan blades on the front makes it work about 40 percent better. Four filters taped into a cube with the fan on top (a Corsi-Rosenthal box) cleans the most air." },
        { en: "Use only a box fan made in 2012 or later with a UL or ETL safety mark. Older fans are a known fire risk and should never run unattended or while people sleep. Plug it straight into the wall, with no extension cord, and keep children away from it." },
        { en: "Check the filter every day during smoke. Replace it when it turns dark brown or gray or smells of smoke. A clogged filter barely works. Stock several spare filters." },
        { en: "If you must go outside, wear a [[n95-respirator|NIOSH N95 or P100 respirator]] with two straps, one above and one below the ears, pressed tight to the face. Cloth masks, bandanas (wet or dry), paper dust masks, and surgical masks do not stop smoke. Respirators do not fit small children, so keep children in the clean-air room." },
      ],
    },
    { type: "sketch", sketch: "box-fan-filter", caption: { en: "A homemade air cleaner: a box fan with a furnace filter strapped to the back (arrow toward the fan) and a cardboard shroud on the front." } },
    {
      type: "p",
      text: {
        en: "Gardens in hot summers, shade cloth, and heat-tolerant crops are covered in {{growing-food|Growing Food}}. Keeping stored food and water cool in heat is in {{food-storage|Food Storage}} and {{water|Water}}.",
      },
    },

    // ==================================================================
    { type: "h", id: "checklist", text: { en: "Getting ready each season" } },
    {
      type: "table",
      caption: { en: "A short checklist for each fall and spring" },
      head: [{ en: "When" }, { en: "Do this" }],
      rows: [
        [
          { en: "Early fall (before the first freeze)" },
          { en: "Change smoke and CO alarm batteries when the clocks change. Have the chimney and furnace checked. Stack next winter's firewood. Buy 1-K kerosene from a dealer who can certify it, if you have a kerosene heater. Insulate pipes, drain hoses, close outdoor faucet valves. Pick your warm room and gather blankets, plastic sheeting, and tape. Try on everyone's winter coats, boots, hats, and mittens; children outgrow them. Put the winter kit in the car." },
        ],
        [
          { en: "Midwinter" },
          { en: "Keep the gas tank half full. Check on neighbors in every cold snap. Keep the walk to the woodpile clear. Rotate the car kit's water and food." },
        ],
        [
          { en: "Early spring (before the first heat)" },
          { en: "Change alarm batteries again when the clocks change. Repair window screens. Stock sunscreen, insect repellent, and permethrin. Test box fans and buy spare MERV 13 filters. Plan where the family goes during a heat wave. Put up shade cloth or outdoor shades. Cover or empty anything that holds water." },
        ],
        [
          { en: "Summer" },
          { en: "Check on older neighbors in every heat wave. Do tick checks every day. Watch the sky before outdoor work. Start drying and splitting firewood for winter." },
        ],
      ],
    },
    {
      type: "p",
      text: {
        en: "Keep a simple weather notebook: the coldest nights, the hottest days, the first and last frost, and what worked. After a year or two you will know your own home's seasons better than any forecast.",
      },
    },

    // ------------------------------------------------------------------
    { type: "source", title: "Preventing Hypothermia (and Avoid, Spot, Treat Frostbite and Hypothermia)", publisher: "U.S. Centers for Disease Control and Prevention (CDC)", url: "https://www.cdc.gov/winter-weather/prevention/index.html" },
    { type: "source", title: "Prevent Hypothermia & Frostbite", publisher: "CDC", url: "https://www.cdc.gov/disasters/winter/staysafe/hypothermia.html" },
    { type: "source", title: "Frostbite: First aid", publisher: "Mayo Clinic", url: "https://www.mayoclinic.org/first-aid/first-aid-frostbite/basics/art-20056653" },
    { type: "source", title: "About Carbon Monoxide Poisoning", publisher: "CDC", url: "https://www.cdc.gov/carbon-monoxide/about/index.html" },
    { type: "source", title: "Extreme Cold: During", publisher: "U.S. National Weather Service (NWS)", url: "https://www.weather.gov/safety/cold-during" },
    { type: "source", title: "Wind Chill Chart", publisher: "NWS", url: "https://www.weather.gov/safety/cold-wind-chill-chart" },
    { type: "source", title: "Heater Fire Safety (safety card)", publisher: "U.S. Fire Administration (USFA), FEMA", url: "https://www.usfa.fema.gov/downloads/pdf/publications/heater_fire_safety_card.pdf" },
    { type: "source", title: "Fireplace and Wood Stove Safety (safety card)", publisher: "USFA, FEMA", url: "https://www.usfa.fema.gov/downloads/pdf/publications/fireplace_woodstove_safety_card.pdf" },
    { type: "source", title: "Winter Ready: Heating Fire Safety handout", publisher: "Ready.gov / USFA", url: "https://www.ready.gov/sites/default/files/2023-12/ready-gov_winterready_heating-fire-safety-handout_0.pdf" },
    { type: "source", title: "Fireplace and Home Fire Safety: A Factsheet on Rural Fire Safety (firewood 30 feet from home)", publisher: "USFA (as reprinted by the City of Fort Worth Fire Department)", url: "https://www.fortworthtexas.gov/files/assets/public/fire/documents/fireplacesafety.pdf" },
    { type: "source", title: "Home heating fire safety (peak months)", publisher: "National Fire Protection Association (NFPA)", url: "https://www.nfpa.org/education-and-research/home-fire-safety/heating" },
    { type: "source", title: "CPSC Stresses Kerosene Heater Safety (Pub. 5052)", publisher: "U.S. Consumer Product Safety Commission (CPSC)", url: "https://www.cpsc.gov/s3fs-public/5052.pdf" },
    { type: "source", title: "Unvented Portable Kerosene Heaters: Safety Considerations (1 square inch per 1,000 BTU)", publisher: "National Ag Safety Database (NASD)", url: "https://nasdonline.org/1093/d000884/unvented-portable-kerosene-heaters-safety-considerations.html" },
    { type: "source", title: "Burn Wise: Best Wood-Burning Practices and Facts & Figures", publisher: "U.S. Environmental Protection Agency (EPA)", url: "https://www.epa.gov/burnwise/best-wood-burning-practices" },
    { type: "source", title: "Burn Wise: Energy Efficiency and Your Wood-Burning Appliance (20 percent moisture)", publisher: "EPA", url: "https://www.epa.gov/burnwise/burn-wise-energy-efficiency/" },
    { type: "source", title: "Frozen Pipes", publisher: "American Red Cross", url: "https://www.redcross.org/get-help/how-to-prepare-for-emergencies/types-of-emergencies/winter-storm/frozen-pipes.html" },
    { type: "source", title: "How to Keep Your Sleeping Baby Safe: AAP Policy Explained", publisher: "American Academy of Pediatrics (HealthyChildren.org)", url: "https://www.healthychildren.org/English/ages-stages/baby/sleep/Pages/a-parents-guide-to-safe-sleep.aspx" },
    { type: "source", title: "Snow shoveling tips (AHA advisory, January 2024)", publisher: "American Heart Association", url: "https://easternstates.heart.org/?p=8519" },
    { type: "source", title: "Ice Thickness Guidelines", publisher: "Minnesota Department of Natural Resources", url: "https://www.dnr.state.mn.us/safety/ice/thickness.html" },
    { type: "source", title: "Winter Storm Facts (if you are trapped in your car)", publisher: "CDC (archived)", url: "https://webarchive.library.unt.edu/web/20090109040933/http://www.bt.cdc.gov/disasters/winter/factsheet.asp" },
    { type: "source", title: "Extreme Heat", publisher: "Ready.gov (FEMA)", url: "https://www.ready.gov/heat" },
    { type: "source", title: "Heat Illness (heat cramps, exhaustion, stroke; fans)", publisher: "NWS", url: "https://www.weather.gov/safety/heat-illness" },
    { type: "source", title: "Heat-related Illnesses (first aid)", publisher: "CDC / National Institute for Occupational Safety and Health (NIOSH)", url: "https://www.cdc.gov/niosh/heat-stress/about/illnesses.html" },
    { type: "source", title: "#KeepCool in the heat", publisher: "WHO Regional Office for Europe", url: "https://www.who.int/europe/news-room/fact-sheets/item/keepcool-in-the-heat" },
    { type: "source", title: "Child Safety: Heatstroke", publisher: "U.S. National Highway Traffic Safety Administration (NHTSA)", url: "https://www.nhtsa.gov/childsafety" },
    { type: "source", title: "Sun Safety", publisher: "CDC", url: "https://www.cdc.gov/skin-cancer/sun-safety/index.html" },
    { type: "source", title: "Preventing Mosquito Bites", publisher: "CDC", url: "https://www.cdc.gov/mosquitoes/prevention/index.html" },
    { type: "source", title: "Preventing Tick Bites", publisher: "CDC", url: "https://www.cdc.gov/ticks/prevention/index.html" },
    { type: "source", title: "What to Do After a Tick Bite", publisher: "CDC", url: "https://www.cdc.gov/ticks/after-a-tick-bite/index.html" },
    { type: "source", title: "Lightning: What You Need to Know", publisher: "NWS", url: "https://www.weather.gov/safety/lightning-tips" },
    { type: "source", title: "Lightning Safety brochure", publisher: "NWS", url: "https://www.weather.gov/media/safety/Lightning-Brochure18.pdf" },
    { type: "source", title: "Research on DIY Air Cleaners to Reduce Wildfire Smoke Indoors", publisher: "EPA", url: "https://www.epa.gov/air-research/research-diy-air-cleaners-reduce-wildfire-smoke-indoors" },
    { type: "source", title: "Protect Your Lungs from Wildfire Smoke or Ash (EPA-452/F-21-002)", publisher: "EPA / AirNow", url: "https://www.airnow.gov/sites/default/files/2021-07/respiratory-protection-factsheet-072021.pdf" },
  ],
};
