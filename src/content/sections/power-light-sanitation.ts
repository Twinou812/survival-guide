import type { Section } from "../types";

// Section 7: Power, Light, and Sanitation. Facts checked Nov 14, 2026 against the sources
// listed at the end. Safety numbers (generator distance, downed-line distance, candle
// clearance, fuel container size, propane temperature, twin-bucket amounts, latrine and
// cathole distances, WHO storage times and temperatures, sanitizer strength, bleach mixes)
// come from CDC, CPSC, NFPA, FEMA, Red Cross, WHO/EcoSanRes, Oregon State University
// Extension, Leave No Trace, ESFI, EPA, and state agencies. Do not round or "simplify" them.
// Generator wattages are typical values from manufacturer and retailer charts; the label on
// the appliance always wins.

export const powerLightSanitation: Section = {
  id: "power-light-sanitation",
  number: 7,
  title: { en: "Power, Light, and Sanitation" },
  summary: { en: "Light, power, fuel, cooking, toilets, and keeping the household clean and healthy." },
  blocks: [
    {
      type: "p",
      text: {
        en: "When the power goes out, most of the danger does not come from the dark. It comes from what people do about it: candles left burning, generators run in garages, gasoline stored in the kitchen, and toilets that stop flushing while the family keeps using them. This section shows how to get light and power safely, store and use fuel, cook, and keep human waste and garbage from making anyone sick.",
      },
    },
    {
      type: "p",
      text: {
        en: "The first half covers light, batteries, solar, generators, fuel, and stoves. The second half covers toilets, handwashing, washing up, and trash. Germs from feces cause more sickness after disasters than almost anything else, so the second half matters just as much as the first.",
      },
    },

    // ==================================================================
    // FIRST HOUR
    // ==================================================================
    { type: "h", id: "power-out", text: { en: "When the power goes out" } },
    {
      type: "steps",
      items: [
        { en: "Use flashlights, not candles. Keep a light where everyone can find it in the dark, such as beside each bed." },
        { en: "Unplug appliances and electronics so a power surge does not damage them when the power comes back. Leave one lamp switched on so you know when power returns." },
        { en: "Keep the refrigerator and freezer closed. See {{food-storage}} for how long food stays safe and what to eat first." },
        { en: "Stay at least 35 feet (11 meters) from any fallen power line and anything touching it, like a fence, puddle, or car. Treat every downed line as live, and call it in." },
        { en: "If anyone depends on a medical device that needs power, or medicine that must stay cold, start that plan now. Make the plan with the doctor and the equipment company before an outage." },
        { en: "Save phone battery: turn down screen brightness, turn on battery saver, and close apps you are not using. Send text messages instead of calling; texts often get through when calls do not." },
        { en: "Never bring a generator, grill, or camp stove inside for light or heat. See {{seasons}} for carbon monoxide and keeping warm." },
        { en: "Check on neighbors, especially older people who live alone." },
      ],
    },
    {
      type: "warning",
      text: {
        en: "A downed power line can make the ground around it live for up to 35 feet (11 meters), more when wet. Never touch it or try to move it, even with a stick. If a line falls on your car, stay inside unless the car is on fire. If you must get out, jump clear with both feet together, never touching the car and the ground at the same time, then shuffle away with your feet close together.",
      },
    },

    // ==================================================================
    // LIGHT
    // ==================================================================
    { type: "h", id: "light", text: { en: "Light without power" } },
    {
      type: "p",
      text: {
        en: "Battery lights are the safest light you can have. Plan one light per person, plus one for each room you live in. A [[headlamp]] is the best single light, because both hands stay free for cooking, first aid, or the toilet. LED lights use far less battery than old bulbs.",
      },
    },
    { type: "sketch", sketch: "headlamp", caption: { en: "A headlamp keeps both hands free and points where you look." } },
    {
      type: "table",
      caption: { en: "Light sources compared" },
      head: [{ en: "Light" }, { en: "Good for" }, { en: "Watch out for" }],
      rows: [
        [{ en: "Headlamp" }, { en: "Working, walking, the toilet at night. One for every person." }, { en: "Do not shine it in people's eyes." }],
        [{ en: "LED lantern" }, { en: "Lighting a whole room or a table." }, { en: "Hang it high so it lights more and is not knocked over." }],
        [{ en: "Solar or hand-crank light" }, { en: "Long outages with no spare batteries." }, { en: "Needs a sunny window or a few minutes of cranking each day." }],
        [{ en: "Glow sticks" }, { en: "Night lights for small children, marking a toilet or stairs." }, { en: "Dim and single-use. Liquid inside is irritating; keep them away from mouths." }],
        [{ en: "Candles" }, { en: "Last choice only." }, { en: "Fire. Never leave one burning in an empty room or where anyone is sleeping." }],
        [{ en: "Oil or kerosene lamp" }, { en: "Last choice only." }, { en: "Fire, fumes, and poisoning: [[lamp-oil|lamp oil]] can kill a child who swallows it." }],
      ],
    },
    {
      type: "p",
      text: {
        en: "A simple trick turns a headlamp into a lantern: strap it around a gallon jug of water with the light facing into the jug. The water spreads the light around the whole room.",
      },
    },
    { type: "sketch", sketch: "jug-lantern", caption: { en: "A headlamp strapped around a jug of water, light facing in, lights a whole room." } },
    {
      type: "p",
      text: {
        en: "Fire safety experts say not to use candles during a power outage at all. If you truly have no other light, follow these rules:",
      },
    },
    {
      type: "list",
      items: [
        { en: "Use wide candles in a jar or on a sturdy holder; they are harder to knock over than thin ones. Set the holder on a metal tray or ceramic plate." },
        { en: "Keep candles at least 12 inches (30 cm) from anything that can burn: curtains, bedding, paper, clothes." },
        { en: "Blow them out when you leave the room or go to sleep. Never burn a candle in a bedroom where someone may fall asleep." },
        { en: "Do not carry a lit candle around in the dark. Use a flashlight to move about." },
        { en: "Never use a candle where anyone uses medical oxygen." },
        { en: "Keep matches and lighters up high, out of children's reach." },
      ],
    },
    { type: "sketch", sketch: "candle-safety", caption: { en: "A wide jar candle on a plate, at least 12 inches (30 cm) from anything that can burn." } },
    {
      type: "warning",
      text: {
        en: "Oil lamps poison children. A toddler can suck lamp oil through the wick like a straw or drink it from a cup, and even a small amount breathed into the lungs can cause a deadly pneumonia. Keep lamps and lamp oil out of reach, store the oil only in its original child-resistant bottle, and never pour it into a cup or drink bottle. If a child swallows any, do not make them vomit; get medical help right away (in the U.S., Poison Control is 1-800-222-1222).",
      },
    },

    // ==================================================================
    // BATTERIES AND CHARGING
    // ==================================================================
    { type: "h", id: "batteries", text: { en: "Batteries, phones, and charging" } },
    {
      type: "list",
      items: [
        { en: "Pick one or two battery sizes (such as AA and AAA) and buy lights and radios that use them. Then every spare fits everything." },
        { en: "Store batteries in their packages in a cool, dry place. Take batteries out of lights you are storing, since old batteries can leak and ruin the light. Use the oldest first." },
        { en: "Rechargeable \"low self-discharge\" batteries hold their charge in storage much longer than older rechargeables, and pair well with a solar charger." },
        { en: "Keep a battery-powered or hand-crank radio for news when phones and internet are down." },
        { en: "Charge every phone and [[power-bank|power bank]] as soon as a storm or outage is coming." },
        { en: "Cordless home phones need power. An old corded phone plugged into a landline jack may still work." },
      ],
    },
    {
      type: "p",
      text: {
        en: "Your car is a big battery. A car charger or a small plug-in inverter can charge phones and power banks while the engine runs. Do it outdoors only: never run the car in a garage, even with the door open, or parked close to the house. Keep the gas tank at least half full during storm season.",
      },
    },
    {
      type: "p",
      text: {
        en: "Power banks and other lithium-ion batteries can catch fire, and those fires are hard to put out. Charge them safely:",
      },
    },
    { type: "sketch", sketch: "power-bank", caption: { en: "Charge power banks on a hard surface like a table, never on a bed or under a pillow." } },
    {
      type: "list",
      items: [
        { en: "Use the charger and cable that came with the device, or one from a known brand with a safety mark (such as UL)." },
        { en: "Charge on a hard surface, not on a bed, couch, or under a pillow. Do not leave batteries charging overnight or after they are full." },
        { en: "Stop using any battery that is swollen, very hot, leaking, hissing, or smells like chemicals. Move it outside, away from anything that burns, if you can do so safely." },
        { en: "Never put lithium-ion batteries in household trash or recycling bins. Keep dead or damaged ones in a metal can outside until you can take them to a hazardous waste site." },
      ],
    },
    {
      type: "warning",
      text: {
        en: "[[button-battery|Button batteries]], the small coin-shaped ones in remotes, scales, and toys, can burn through a child's throat in hours. Store new and used ones locked up or high out of reach, check that remotes and toys have screwed-shut battery doors, and get rid of dead ones right away. If you think a child swallowed one, go to emergency care immediately. Symptoms can look like a cold: drooling, coughing, gagging, vomiting, or trouble swallowing.",
      },
    },

    // ==================================================================
    // SOLAR
    // ==================================================================
    { type: "h", id: "solar", text: { en: "Small solar power" } },
    {
      type: "p",
      text: {
        en: "Small solar setups are the quietest, safest power for a long outage. They make no fumes, so they can be used inside. A folding solar panel charges a [[portable-power-station|portable power station]] (a big battery box with outlets) during the day, and the battery runs lights, phones, a radio, a fan, and some medical devices at night.",
      },
    },
    { type: "sketch", sketch: "power-station", caption: { en: "A solar panel tilted to face the sun charges a battery box that runs small things indoors." } },
    {
      type: "list",
      items: [
        { en: "Be realistic. Small solar runs small things. Heaters, electric stoves, hair dryers, and most air conditioners use far more power than a small panel can make." },
        { en: "Point the panel straight at the sun and tilt it so the sun hits it square. In the Northern Hemisphere face it south; in the Southern Hemisphere, north. Move it a few times a day if you can." },
        { en: "Keep the panel clean and out of shade. Even a branch's shadow cuts the power a lot." },
        { en: "Use the battery for what matters most: medical devices, light, news, and keeping phones charged. Turn things off when not in use." },
        { en: "If anyone uses a breathing machine or other powered medical device, ask the maker or doctor exactly what battery size it needs and test it before you need it." },
      ],
    },

    // ==================================================================
    // GENERATORS
    // ==================================================================
    { type: "h", id: "generators", text: { en: "Generators" } },
    {
      type: "p",
      text: {
        en: "A gasoline or propane generator can run a refrigerator, a freezer, a sump pump, or a furnace fan. It is also one of the deadliest things a family can own if it is used wrong. Most generator deaths come from [[carbon-monoxide|carbon monoxide]] (CO) when one is run inside or too close to the house. The rest come from electric shock and fires.",
      },
    },
    {
      type: "warning",
      text: {
        en: "Run a generator only outdoors, more than 20 feet (6 meters) from any window, door, or vent, with the exhaust pointed away from the house. Never run it in a house, garage, basement, crawl space, shed, or under a carport or porch, even with doors and windows open. Put battery [[co-alarm|CO alarms]] inside the house near sleeping areas.",
      },
    },
    { type: "sketch", sketch: "generator-distance", caption: { en: "A generator belongs outside, far from the house, with its exhaust pointed away from windows and doors." } },
    { type: "h", id: "generator-size", text: { en: "How big a generator do you need?" } },
    {
      type: "p",
      text: {
        en: "Motors need a burst of extra power to start. Add up the [[starting-watts|running watts]] of everything you will run at the same time. Then add the extra starting watts of the single item that needs the most. That total is the smallest generator that will work. The label on each appliance or its manual gives its real numbers; the table shows typical ones.",
      },
    },
    {
      type: "table",
      caption: { en: "Typical generator power needs (check your own labels)" },
      head: [{ en: "Appliance" }, { en: "Running watts" }, { en: "Extra watts to start" }],
      rows: [
        [{ en: "Refrigerator or freezer" }, { en: "700" }, { en: "2,200" }],
        [{ en: "Sump pump (½ horsepower)" }, { en: "1,050" }, { en: "2,150" }],
        [{ en: "Furnace fan" }, { en: "875" }, { en: "2,300" }],
        [{ en: "Window air conditioner (12,000 BTU)" }, { en: "3,250" }, { en: "3,950" }],
        [{ en: "Microwave (1,000 watt)" }, { en: "1,000" }, { en: "0" }],
        [{ en: "Coffee maker" }, { en: "1,000" }, { en: "0" }],
        [{ en: "Television" }, { en: "500" }, { en: "0" }],
        [{ en: "Electric space heater" }, { en: "1,800" }, { en: "0" }],
      ],
    },
    {
      type: "p",
      text: {
        en: "Example: a refrigerator (700), a sump pump (1,050), and a microwave (1,000) add up to 2,750 running watts. The biggest extra starting need is the refrigerator's 2,200. So you need at least 4,950 watts, about a 5,000-watt generator. Run fewer things at once and a smaller one will do.",
      },
    },
    { type: "h", id: "generator-safe", text: { en: "Using a generator safely" } },
    {
      type: "steps",
      items: [
        { en: "Read the manual before the outage, and start the generator once every few months so you know it works." },
        { en: "Set it on a dry, level spot outdoors, more than 20 feet (6 meters) from the house. In rain or snow, keep it dry under an open, canopy-like cover that leaves all sides open to the air. Never touch it with wet hands." },
        { en: "Plug appliances straight into the generator, or use heavy-duty extension cords rated for outdoor use. Each cord must be rated (in watts or amps) for at least the total load on it, have three prongs, and have no cuts or splits." },
        { en: "Start the generator before plugging anything in, then plug things in one at a time, biggest first." },
        { en: "Turn it off and let it cool before refueling. Hot engine parts can ignite spilled gasoline. Wipe up any spill before restarting." },
        { en: "Keep children and pets away from it, and keep a fire extinguisher nearby." },
        { en: "Save fuel by running it a few hours at a time to cool the refrigerator and freezer, then shutting it off. An [[appliance-thermometer|appliance thermometer]] shows when the fridge needs it again." },
        { en: "Lock it with a chain if theft is a worry, but never move it closer to the house or into the garage to protect it." },
      ],
    },
    {
      type: "warning",
      text: {
        en: "Never plug a generator into a wall outlet or dryer outlet to power the house. This is called [[backfeeding]]. It can send deadly electricity out onto the power lines, where it can kill utility workers and neighbors, and it can start fires. A cord with plugs on both ends is never safe. The only safe way to power house wiring is a [[transfer-switch|transfer switch]] or an interlock kit put in by a licensed electrician.",
      },
    },
    { type: "sketch", sketch: "backfeed-cord", caption: { en: "Never use a cord with plugs on both ends. It is often called a suicide cord for a reason." } },
    { type: "sketch", sketch: "transfer-switch", caption: { en: "The safe way: a transfer switch beside the breaker panel, an inlet box on the outside wall, and one heavy cord to the generator far from the house." } },
    {
      type: "p",
      text: {
        en: "A transfer switch also lets the generator run things that have no plug, like a furnace or well pump. When choosing a generator, newer models with a built-in carbon monoxide shut-off are a safer choice. Inverter generators are quieter and use less fuel, which matters when fuel is short and you do not want the whole street to know you have power.",
      },
    },

    // ==================================================================
    // FUEL
    // ==================================================================
    { type: "h", id: "fuel", text: { en: "Storing fuel safely" } },
    {
      type: "p",
      text: {
        en: "Stored fuel is stored danger. Keep only what you will use and rotate it, and never keep gasoline or propane inside the house. Gasoline vapor is heavier than air: it flows along the floor and can reach a pilot light, water heater, or furnace far from the can.",
      },
    },
    {
      type: "table",
      caption: { en: "Fuel storage at a glance" },
      head: [{ en: "Fuel" }, { en: "Store it" }, { en: "Keep in mind" }],
      rows: [
        [
          { en: "Gasoline" },
          { en: "In approved red [[gas-can|gas cans]] of 5 gallons (19 liters) or less, in a detached shed or garage away from anything that sparks or flames. Never in the house or a basement." },
          { en: "Goes stale. Add [[fuel-stabilizer|fuel stabilizer]] when you buy it, date the can, and use it within about 6 months, or about a year if stabilized. Pour the oldest into the car and refill." },
        ],
        [
          { en: "Propane" },
          { en: "[[propane-cylinder|Propane tanks]] go outdoors only, standing upright, on firm ground, valve closed, in shade. Never in the house, garage, basement, shed, or a tent." },
          { en: "Keeps for years. Do not leave a tank in a hot car or anywhere above 120°F (49°C)." },
        ],
        [
          { en: "Kerosene" },
          { en: "In a blue container, never a red gas can, outdoors or in a detached shed." },
          { en: "Use only clear 1-K grade in heaters. See {{seasons}} for kerosene heater safety." },
        ],
        [
          { en: "Lamp oil and lighter fluid" },
          { en: "In the original child-resistant bottle, locked up or up high." },
          { en: "Deadly if a child swallows it. Never pour it into a cup." },
        ],
        [
          { en: "Charcoal" },
          { en: "Dry, in a closed metal can with a lid." },
          { en: "Burn outdoors only. Charcoal makes deadly carbon monoxide even after the flames die down." },
        ],
        [
          { en: "Firewood" },
          { en: "Off the ground, top covered, away from the house." },
          { en: "See {{seasons}} for drying times and keeping woodpiles away from the house." },
        ],
      ],
    },
    {
      type: "list",
      items: [
        { en: "Fill gas cans only while they sit on the ground, never in a truck bed or car trunk. A can sitting on a plastic bed liner can build up a static spark." },
        { en: "Leave a little space at the top of each can for the fuel to expand in heat." },
        { en: "Fire codes limit how much gasoline a home may keep, often to just a few cans. Check your local rules before stocking up." },
        { en: "Never use gasoline to start a fire or for cleaning." },
      ],
    },
    { type: "sketch", sketch: "gas-can-ground", caption: { en: "Fill a gas can only while it sits on the ground." } },
    { type: "sketch", sketch: "propane-cylinder", caption: { en: "Propane tanks are stored outdoors, standing upright, valve closed, out of the sun." } },
    {
      type: "warning",
      text: {
        en: "If you smell gas (a rotten egg smell) inside: do not turn any light switch on or off, do not use a phone, and do not light anything. Get everyone out, leave the door open, and call the gas company or fire department from outside, well away from the house.",
      },
    },

    // ==================================================================
    // COOKING
    // ==================================================================
    { type: "h", id: "stoves", text: { en: "Stoves and cooking without power" } },
    {
      type: "p",
      text: {
        en: "{{food-storage}} covers what to cook and how to save fuel with a [[haybox]]. Here is what to cook on, and where.",
      },
    },
    {
      type: "table",
      caption: { en: "Stoves and where they are safe" },
      head: [{ en: "Stove" }, { en: "Where" }, { en: "Notes" }],
      rows: [
        [{ en: "Camp stove (propane, butane, or white gas)" }, { en: "Outdoors only." }, { en: "Easiest to stock. Keep spare fuel canisters outdoors too." }],
        [{ en: "Gas or charcoal grill" }, { en: "Outdoors only, well away from the house, deck rails, and anything under the roof edge." }, { en: "Good for boiling water and cooking for a crowd. Never in a garage." }],
        [{ en: "[[rocket-stove|Rocket stove]]" }, { en: "Outdoors only." }, { en: "Cooks a meal with a handful of sticks. Easy to build from bricks or concrete blocks." }],
        [{ en: "Fireplace or wood stove" }, { en: "Indoors, only with a working, clean chimney." }, { en: "Use the damper; keep a screen in front; never leave the fire alone." }],
        [{ en: "Stoves labeled for indoor use" }, { en: "Indoors, only exactly as the label says, with a window cracked and a CO alarm working." }, { en: "Read the label. Most camp stoves are NOT made for indoor use." }],
      ],
    },
    { type: "sketch", sketch: "rocket-stove", caption: { en: "A rocket stove: sticks feed in the side opening, the heat rises up the chimney to the pot." } },
    {
      type: "steps",
      items: [
        { en: "To build a simple rocket stove: on bare ground or a few bricks, stack bricks or concrete blocks into an L shape. Leave a side opening about the size of a fist for feeding sticks, and a chimney about as tall as your forearm going up from it." },
        { en: "Lay a small grate or a piece of bent metal inside the side opening, so the sticks rest on it and air can flow under them." },
        { en: "Set the pot on three small stones or bolts on top of the chimney so smoke can escape around it." },
        { en: "Feed dry sticks, thumb thick or thinner, a few at a time. Push them in as the ends burn." },
      ],
    },
    {
      type: "list",
      items: [
        { en: "Never leave a stove or cooking fire alone, and keep young children well back from it." },
        { en: "Keep a fire extinguisher, a bucket of water, or a bucket of sand beside every outdoor cooking spot." },
        { en: "Let ashes and coals cool completely, then put them in a covered metal can away from the house." },
      ],
    },

    // ==================================================================
    // TOILETS
    // ==================================================================
    { type: "h", id: "toilets", text: { en: "Toilets when the water is off" } },
    {
      type: "p",
      text: {
        en: "First figure out which problem you have, because the answer is different:",
      },
    },
    {
      type: "list",
      items: [
        { en: "The water is off, but the sewer still works. Toilets drain normally but the tank does not refill. You can still flush with a bucket." },
        { en: "The sewer is broken or backing up. This is common after earthquakes and floods. Signs: drains gurgle or back up, sewage smell, water rising in a tub or floor drain, or officials say not to flush. Do not flush at all. Use a bucket toilet (below)." },
        { en: "You have a septic system. See the septic part below." },
      ],
    },
    { type: "h", id: "bucket-flush", text: { en: "Flushing with a bucket" } },
    {
      type: "steps",
      items: [
        { en: "Use water you are not drinking: bathtub water, rainwater, pool water, or [[greywater]] from washing." },
        { en: "Pour a full bucket of water into the bowl quickly and from waist height. The rush of water pushes the waste down the drain. Pouring slowly will just fill the bowl." },
        { en: "Or, fill the tank (the box behind the seat) to the normal water line and flush with the handle as usual." },
        { en: "Save water: flush only for solid waste. Put used toilet paper in a lidded can lined with a bag, and take it out often." },
        { en: "Never pour water into a bowl that is already full or clogged; it will overflow." },
      ],
    },
    { type: "sketch", sketch: "bucket-flush", caption: { en: "Pour a full bucket fast into the bowl to flush it." } },
    {
      type: "p",
      text: {
        en: "Some newer toilets use a pump and will not flush without power. Pouring water into the bowl may still work.",
      },
    },
    { type: "h", id: "septic", text: { en: "If you have a septic system" } },
    {
      type: "list",
      items: [
        { en: "Many [[septic-system|septic systems]] run by gravity and work fine without power, as long as you have water to flush." },
        { en: "If yours has a pump, an alarm panel, or an air pump (aerobic system), it cannot move wastewater without power. Its tank holds only a small reserve. Use water only for flushing and handwashing, and skip laundry, baths, and dishwashing." },
        { en: "If the outage goes on for more than a day, or drains start running slowly, stop sending any water down the drains and switch to a bucket toilet." },
        { en: "Do not put sawdust, cat litter, or other cover material into a septic system." },
        { en: "Never climb into or lean into a septic tank or pump chamber. The gases inside can kill in minutes." },
        { en: "If the drain field is flooded, do not use the system until the water goes down." },
      ],
    },

    // ------------------------------------------------------------------
    { type: "h", id: "twin-bucket", text: { en: "The twin-bucket toilet" } },
    {
      type: "p",
      text: {
        en: "When you cannot flush, a [[twin-bucket-toilet|twin-bucket toilet]] is the best home option. It was used after the 2011 earthquake in Christchurch, New Zealand, and emergency managers in Oregon and Washington now recommend it. Urine goes in one bucket and feces in the other. Kept apart, they smell far less, and urine on its own carries few germs.",
      },
    },
    { type: "sketch", sketch: "twin-bucket-toilet", caption: { en: "Two lidded buckets, marked so no one mixes them up: one for urine, one bag-lined for feces, with a sack of sawdust and a scoop." } },
    {
      type: "steps",
      items: [
        { en: "Get two 5-gallon buckets with tight lids. Mark one \"PEE\" and the other \"POO\" (or #1 and #2), in words or pictures everyone can understand." },
        { en: "Leave the pee bucket unlined. Line the poo bucket with a heavy 13-gallon [[contractor-bag|contractor bag]] (3 to 5 mil thick)." },
        { en: "Get a toilet seat that fits a bucket. In a pinch, a pool noodle split down its length and pushed over the rim works." },
        { en: "Store the supplies inside the buckets now: toilet paper, spare bags, [[disposable-gloves|disposable gloves]], hand sanitizer, and a few bags of [[cover-material|cover material]] such as sawdust, wood shavings, shredded paper, peat moss, or a brick of coir from a garden store." },
        { en: "Set the buckets up in a private spot, such as the bathroom. The seat moves from one bucket to the other." },
        { en: "After peeing, put the lid back on the pee bucket. Put used toilet paper in the poo bucket or a separate bag, not in the pee bucket." },
        { en: "After pooping, sprinkle about ½ cup (120 mL) of cover material so the poo is fully covered. Then put the seat or lid back, loosely, so the contents can dry." },
        { en: "Wash or sanitize hands every time." },
      ],
    },
    { type: "h", id: "emptying-buckets", text: { en: "Emptying the buckets" } },
    {
      type: "list",
      items: [
        { en: "Pee bucket: empty it when it is about one-quarter full, before it gets too heavy to carry. Dilute it with used washing water if you have some, and pour it on the lawn or bare ground, a different spot each time, away from wells and streams. Urine is a good garden fertilizer; see {{growing-food}}." },
        { en: "Poo bucket: fill it no more than half full. Put on gloves, tie the bag shut, put it in a second bag, and tie that too." },
        { en: "Store the sealed bags in a lidded can or bin outside, away from food, water, and the regular trash, until officials say how to get rid of them." },
        { en: "Do not put feces in the regular trash unless officials say to. Do not put diapers, pads, or bagged pet waste in the toilet buckets; double-bag those and put them in the trash." },
        { en: "If no help is coming and the bags pile up, bury them or compost the contents as shown below." },
      ],
    },
    {
      type: "p",
      text: {
        en: "For someone injured, sick, or unsteady, put a bedside commode frame over the poo bucket so they can sit and stand safely.",
      },
    },

    // ------------------------------------------------------------------
    { type: "h", id: "burying", text: { en: "Burying waste: catholes and pit latrines" } },
    {
      type: "p",
      text: {
        en: "Buried waste can poison a well or stream if it is in the wrong place. Before digging anything, call 811 (in the U.S.) or your local utility locator so you do not hit a buried gas or power line.",
      },
    },
    {
      type: "p",
      text: {
        en: "For one person away from home, or a single bowel movement, use a [[cathole]]:",
      },
    },
    {
      type: "steps",
      items: [
        { en: "Go at least 200 feet (60 meters, about 70 adult steps) from any water, well, path, or campsite." },
        { en: "Dig a hole 6 to 8 inches (15 to 20 cm) deep and 4 to 6 inches (10 to 15 cm) across with a small trowel." },
        { en: "Use it, fill it back in with the soil you dug out, and cover the spot." },
      ],
    },
    { type: "sketch", sketch: "cathole", caption: { en: "A cathole is 6 to 8 inches (15 to 20 cm) deep, dug with a trowel and filled back in." } },
    {
      type: "p",
      text: {
        en: "For a family over weeks or months, with no other choice, a [[pit-latrine|pit latrine]] is safer than many scattered holes:",
      },
    },
    {
      type: "list",
      items: [
        { en: "Place it at least 100 feet (30 meters) from any well, spring, or stream, and downhill from any well, never uphill." },
        { en: "Keep the bottom of the pit at least 5 feet (1.5 meters) above the highest the groundwater ever gets. If water seeps into the hole as you dig, stop and pick another spot or go back to buckets." },
        { en: "Cover the pit with a solid lid or slab with a hole and a tight lid, to keep flies out and children and animals from falling in." },
        { en: "After each use, sprinkle a scoop of soil, ash, or sawdust over the waste and close the lid." },
        { en: "When the pit is nearly full, fill the rest with soil, mound it up, mark the spot, and dig a new one." },
      ],
    },
    { type: "sketch", sketch: "pit-latrine", caption: { en: "A pit latrine: a lid on top, far from the well, with the bottom of the pit well above the groundwater (dashed line)." } },
    {
      type: "warning",
      text: {
        en: "Do not dig latrines in thin soil over limestone or cracked bedrock. Water moves quickly through cracks in rock, so germs can travel much farther than 100 feet and reach wells and springs. The same goes for land that floods. On rock, keep using bucket toilets and treat the waste as shown below.",
      },
    },

    // ------------------------------------------------------------------
    { type: "h", id: "treating-feces", text: { en: "Treating feces safely for the long haul" } },
    {
      type: "p",
      text: {
        en: "If the sewer stays down for months, the poo buckets have to go somewhere. Human feces can carry many [[pathogen|pathogens]], including worm eggs that live in soil for a long time. They can be made safe, but only with time, heat, or both. These numbers come from World Health Organization guidelines and are well-supported:",
      },
    },
    {
      type: "table",
      caption: { en: "Making feces safe (WHO guidelines)" },
      head: [{ en: "Method" }, { en: "What it takes" }],
      rows: [
        [{ en: "Storage in a cool climate" }, { en: "1.5 to 2 years of storage when the average outdoor temperature is 35 to 68°F (2 to 20°C)." }],
        [{ en: "Storage in a warm climate" }, { en: "At least 1 year when the average temperature is 68 to 95°F (20 to 35°C)." }],
        [{ en: "Hot composting" }, { en: "The whole pile must stay at 122°F (50°C) or hotter for at least 1 week. Check with a long compost thermometer in several spots." }],
      ],
    },
    {
      type: "p",
      text: {
        en: "Home compost piles rarely get hot all the way through, especially at the edges. Use hot composting and the long storage times together, not one instead of the other.",
      },
    },
    { type: "sketch", sketch: "two-bin-compost", caption: { en: "Two bins: fill one while the other sits closed and rests for the full storage time." } },
    {
      type: "steps",
      items: [
        { en: "Build two bins with lids, side by side, at least 100 feet (30 meters) from wells and water and away from the vegetable garden. Use them only for toilet waste, never mixed with your kitchen and garden {{growing-food|compost}}." },
        { en: "Empty poo buckets (contents only, not the plastic bags) into the first bin. Cover each load with plenty of dry cover material: straw, sawdust, dry leaves, or shredded paper. The dry material helps the pile heat up and keeps flies off." },
        { en: "When the first bin is full, close it and write the date on it. Start filling the second bin." },
        { en: "Leave the closed bin alone for the full storage time in the table, counting from the day the last load went in." },
        { en: "Wear gloves and wash up every time you handle the bins or the finished material." },
        { en: "Use the finished material only around fruit trees, shrubs, and flowers, or on crops that are cooked and do not touch the soil. Put it on at least 1 month before any harvest. Never use it on leafy greens, root crops, or anything eaten raw." },
      ],
    },
    {
      type: "p",
      text: {
        en: "Do not put dog or cat feces in any compost meant for food plants.",
      },
    },

    // ==================================================================
    // HYGIENE
    // ==================================================================
    { type: "h", id: "handwashing", text: { en: "Washing hands without running water" } },
    {
      type: "p",
      text: {
        en: "Clean hands stop most of the stomach illness that spreads after disasters. Wash with soap and water:",
      },
    },
    {
      type: "list",
      items: [
        { en: "Before making food or eating, and before feeding a baby." },
        { en: "After using the toilet, emptying buckets, or changing a diaper." },
        { en: "Before and after caring for a wound or a sick person." },
        { en: "After touching garbage, animals, or animal waste." },
      ],
    },
    {
      type: "steps",
      items: [
        { en: "Wet your hands with clean water." },
        { en: "Lather with soap, including the backs of the hands, between the fingers, and under the nails." },
        { en: "Scrub for at least 20 seconds (hum \"Happy Birthday\" twice)." },
        { en: "Rinse with clean water, letting it run off into a basin, not back into the clean supply." },
        { en: "Dry with a clean towel or let them air dry. Change cloth towels every day." },
      ],
    },
    {
      type: "p",
      text: {
        en: "Set up two handwashing stations: one by the toilet and one by the kitchen. The simplest is a water jug with a spigot set on a table, with a basin below to catch the water. Tie a bar of soap in an old sock or stocking to the jug handle so it does not get lost or dirty. Use the caught water to dilute urine or flush the toilet.",
      },
    },
    { type: "sketch", sketch: "jug-handwash", caption: { en: "A handwashing station: a jug with a spigot, a catch basin below, soap tied in a sock, and a towel." } },
    {
      type: "p",
      text: {
        en: "A [[tippy-tap|tippy tap]] uses even less water and nothing is touched but the soap:",
      },
    },
    {
      type: "steps",
      items: [
        { en: "Take a clean plastic jug with a handle and cap, about 1½ gallons (5 liters). Make a small hole (a heated nail works) in the side, a finger's length below the top, opposite the handle." },
        { en: "Set two forked sticks or posts in the ground about 2 feet (60 cm) apart and lay a stick across them." },
        { en: "Hang the jug from the cross stick by a string through the handle. Tie a second string from the jug's cap down to a stick lying on the ground: this is the foot pedal." },
        { en: "Hang a bar of soap on its own string from the cross stick." },
        { en: "Fill the jug with water up to just below the hole. Step on the pedal to tip the jug and pour a thin stream over your hands." },
        { en: "Put gravel or small stones under it so the ground does not turn to mud. Clean the outside daily and the inside weekly." },
      ],
    },
    { type: "sketch", sketch: "tippy-tap", caption: { en: "A tippy tap: step on the stick and the jug tips, pouring a thin stream. Gravel underneath keeps it from turning muddy." } },
    {
      type: "p",
      text: {
        en: "When there is no soap and water, use [[hand-sanitizer|hand sanitizer]] with at least 60% alcohol. Rub it over every part of both hands until dry. It does not kill every germ (it misses some that cause diarrhea, such as the parasite Cryptosporidium), and it does not work on hands that look dirty or greasy, so wash with soap and water as soon as you can.",
      },
    },

    // ------------------------------------------------------------------
    { type: "h", id: "washing-up", text: { en: "Bathing, teeth, dishes, and laundry with little water" } },
    {
      type: "list",
      items: [
        { en: "Bathing: a sponge bath from a small basin of warm water uses a few cups instead of a tub. Wash from cleanest to dirtiest: face first, then body, with the groin and bottom last. Change the water if it gets dirty." },
        { en: "If tap water may be unsafe (a boil-water notice, a flood, or a broken main), bathe and wash only with water you have made safe. See {{water}}." },
        { en: "Brushing teeth: use stored, bottled, or treated drinking water, never tap or flood water that has not been made safe." },
        { en: "Washing clothes: fill a bucket with water and a little soap, push a clean plunger up and down through a hole in the lid for a few minutes, wring the clothes out, rinse in clean water, and hang them in the sun. Wash the dirtiest things last." },
        { en: "Wash soiled clothing and cloth diapers separately from everything else, and wash your hands after handling them." },
      ],
    },
    { type: "sketch", sketch: "plunger-washer", caption: { en: "A bucket washing machine: a clean plunger pushed up and down through a hole in the lid." } },
    {
      type: "steps",
      items: [
        { en: "Dishes with three basins: scrape food scraps into the trash or compost first." },
        { en: "Basin 1: wash in hot, soapy water." },
        { en: "Basin 2: rinse in clean water." },
        { en: "Basin 3: dip in a sanitizing mix of 1 tablespoon (15 mL) of [[unscented-bleach|unscented bleach]] per 1 gallon (3.8 liters) of clean water, then let everything air dry. Do not towel dry." },
        { en: "Wash dishes and pots right after meals so food scraps do not draw flies and rodents." },
      ],
    },
    { type: "sketch", sketch: "three-basin-dishes", caption: { en: "Three basins: wash, rinse, then sanitize with a little bleach. Let dishes air dry." } },

    // ------------------------------------------------------------------
    { type: "h", id: "diapers", text: { en: "Diapers and babies" } },
    {
      type: "list",
      items: [
        { en: "Keep at least two weeks of disposable diapers and wipes. A set of cloth diapers and covers is a good backup that never runs out." },
        { en: "Change diapers on a surface you can clean, covered with a disposable liner or a towel kept just for this. Keep one hand on the baby." },
        { en: "Clean the baby with wipes or a clean damp cloth, always front to back. Put used wipes inside the dirty diaper, roll it up, and put it in a bag with a tight seal." },
        { en: "Clean the baby's hands, then your own, with soap and water. Use hand sanitizer only if there is no water, and wash as soon as you can." },
        { en: "Wipe the changing surface clean, then wet it with disinfectant and let it dry." },
        { en: "Double-bag used disposable diapers and keep them in a lidded can outside. Never put them in a toilet bucket or a septic system." },
      ],
    },

    // ------------------------------------------------------------------
    { type: "h", id: "bleach", text: { en: "Cleaning and sanitizing with bleach" } },
    {
      type: "p",
      text: {
        en: "Use regular, unscented household bleach (5% to 9% strength). Wash surfaces with soap and water first; bleach does not work well on dirt. These mixes are from the CDC:",
      },
    },
    {
      type: "table",
      caption: { en: "Bleach mixes for cleaning after an emergency" },
      head: [{ en: "What you are cleaning" }, { en: "Bleach" }, { en: "Water" }],
      rows: [
        [{ en: "Dishes and food surfaces, including any that touched floodwater (wash, rinse, then sanitize)" }, { en: "1 tablespoon (15 mL)" }, { en: "1 gallon (3.8 L)" }],
        [{ en: "Undamaged food cans that touched floodwater (remove labels, wash, dip, air dry, relabel)" }, { en: "1 cup (240 mL)" }, { en: "5 gallons (19 L)" }],
        [{ en: "Floors, sinks, toys, tools, and other hard surfaces that touched floodwater" }, { en: "1 cup (240 mL)" }, { en: "5 gallons (19 L)" }],
        [{ en: "Mold on hard surfaces (scrub, then rinse with clean water)" }, { en: "1 cup (240 mL)" }, { en: "1 gallon (3.8 L)" }],
      ],
    },
    {
      type: "warning",
      text: {
        en: "Never mix bleach with ammonia, vinegar, or any other cleaner. The fumes can kill. Open windows and doors, wear gloves and eye protection, and keep children away while you work. For making drinking water safe with bleach, use the separate, much smaller amounts in {{water}}.",
      },
    },

    // ==================================================================
    // TRASH AND PESTS
    // ==================================================================
    { type: "h", id: "trash", text: { en: "Garbage when no one picks it up" } },
    {
      type: "p",
      text: {
        en: "Garbage piling up brings flies, rats, and disease within days. Sort it so each kind can be handled the right way:",
      },
    },
    {
      type: "list",
      items: [
        { en: "Food scraps: compost fruit and vegetable scraps (see {{growing-food}}). Bag meat, bones, fat, and oily food tightly, since they draw animals." },
        { en: "Cans, bottles, and cardboard: rinse with used washing water, flatten, and stack. Rinsed, they do not smell or draw pests." },
        { en: "Everything else: bag it tightly." },
        { en: "Keep all garbage in strong cans with tight lids, outside the house. Take it out of the house every day." },
        { en: "Lithium-ion batteries, propane cans, and chemicals never go in the trash. Keep them apart in a safe spot outside." },
      ],
    },
    {
      type: "warning",
      text: {
        en: "Do not burn household trash. Burning plastic, paper, and food waste in a barrel or pile releases dioxins and other poisons that settle on gardens and enter food, and leaves ash with lead, mercury, and arsenic that should never be spread on a garden. It also starts wildfires and is against the law in many places.",
      },
    },
    { type: "h", id: "pests", text: { en: "Keeping flies and rodents away" } },
    {
      type: "list",
      items: [
        { en: "Flies carry germs from feces to food. Keep toilet buckets and latrines covered, cover every bit of feces with cover material, and keep food covered." },
        { en: "Store food and water in containers of thick plastic, glass, or metal with tight lids." },
        { en: "Wash dishes right after use, wipe up spills, and do not keep opened cans or food containers with scraps in the house." },
        { en: "Feed pets only what they eat at one meal; do not leave pet food or water out overnight." },
        { en: "Seal holes in walls and around pipes. Mice can squeeze through a hole the size of a dime." },
        { en: "Fix screens and keep doors shut, especially at dusk when mosquitoes bite. See {{seasons}} for mosquito protection." },
      ],
    },

    // ==================================================================
    // PLAN
    // ==================================================================
    { type: "h", id: "kit", text: { en: "What to have on hand" } },
    {
      type: "table",
      caption: { en: "Power, light, and sanitation supplies" },
      head: [{ en: "Need" }, { en: "Supplies" }],
      rows: [
        [{ en: "Light" }, { en: "A [[headlamp]] for each person, one LED lantern per room you will live in, spare batteries in one or two sizes, glow sticks for small children." }],
        [{ en: "Power and news" }, { en: "Charged power banks, car charger, battery or hand-crank radio. Later: solar panel and power station, or a generator with a transfer switch and CO alarms." }],
        [{ en: "Fuel and cooking" }, { en: "Camp stove or grill with fuel stored outdoors, approved gas cans and stabilizer, matches and lighters in a sealed bag, fire extinguisher." }],
        [{ en: "Toilet" }, { en: "Two 5-gallon buckets with lids, toilet seat, 13-gallon contractor bags, a large sack of sawdust or coir, toilet paper, disposable gloves." }],
        [{ en: "Hygiene" }, { en: "Bar soap, hand sanitizer (60% alcohol or more), water jug with spigot, basins, towels, toothbrushes, diapers and wipes if needed, menstrual supplies (see {{menstrual-care}})." }],
        [{ en: "Cleaning" }, { en: "Unscented bleach, dish soap, scrub brushes, rubber gloves, heavy trash bags, lidded trash cans." }],
      ],
    },
    {
      type: "p",
      text: {
        en: "See {{tools-kits}} for full kit lists, and {{medical}} for treating diarrhea and dehydration.",
      },
    },
    { type: "h", id: "plan", text: { en: "Your plan: 90 days to 2 years" } },
    {
      type: "list",
      items: [
        { en: "This week: put a working flashlight or headlamp by every bed. Test smoke and CO alarms. Put together the twin-bucket toilet kit and store it in the bathroom." },
        { en: "Within 90 days: stock batteries, power banks, and a radio. Set up a camp stove with fuel stored outdoors. Make your handwashing station and practice a bucket flush once so everyone knows how." },
        { en: "Within 6 months: decide on backup power. Buy a solar panel and power station, or a generator, and if you choose a generator, have an electrician install a transfer switch or interlock. Find out if your home is on sewer or septic, and whether your septic system has a pump." },
        { en: "Within 1 year: build up a few months of cover material, bags, soap, and bleach. Learn which spots on your land could hold a latrine (or that none can, if you are on rock or near a well), and where two compost bins for toilet waste could go." },
        { en: "Within 2 years: have a long-term plan for power that does not depend on stored gasoline, such as solar, and the materials to build toilet-waste bins if the sewer is ever down for months." },
      ],
    },

    // ==================================================================
    // SOURCES
    // ==================================================================
    { type: "source", title: "Power Outages: How to Stay Safe (FEMA V-1008)", publisher: "FEMA / Ready.gov", url: "https://www.ready.gov/power-outages" },
    { type: "source", title: "What People Need to Know About Power Outages (car charging, low self-discharge batteries, medical devices)", publisher: "FEMA", url: "https://icf.mediaroom.com/2015-09-21-What-People-Need-to-Know-About-Power-Outages" },
    { type: "source", title: "Power Outage", publisher: "American Red Cross", url: "https://www.redcross.org/prepare/disaster/power-outage" },
    { type: "source", title: "FCC-FEMA Emergency Communications Tips", publisher: "Federal Communications Commission (FCC)", url: "https://www.fcc.gov/fcc-fema-emergency-tips" },
    { type: "source", title: "Downed Power Line Safety", publisher: "Electrical Safety Foundation International (ESFI)", url: "https://www.esfi.org/downed-power-line-electrical-safety-downed-and-dangerous/" },
    { type: "source", title: "Candle Safety (tip sheet)", publisher: "National Fire Protection Association (NFPA), as posted by the State of Michigan", url: "https://www.michigan.gov/documents/lara/NFPA._Candle_tip_sheet._7.2019._MIPLogo._ECS._Final_663846_7.pdf" },
    { type: "source", title: "Near Fatal Ingestion of Household Lamp Oil, Ohio, 1997 (MMWR)", publisher: "CDC", url: "https://www.cdc.gov/mmwr/preview/mmwrhtml/00055332.htm" },
    { type: "source", title: "Consumer Product Safety Commission Warns of Child Poisonings from Oil Lamps", publisher: "U.S. Consumer Product Safety Commission (CPSC)", url: "https://www.cpsc.gov/Newsroom/News-Releases/1992/Consumer-Product-Safety-Commission-Warns-of-Child-Poisonings-from-Halloween-Oil-Lamps" },
    { type: "source", title: "Making Families Safer from Button Cell or Coin Battery Dangers (Reese's Law)", publisher: "CPSC", url: "https://www.cpsc.gov/Newsroom/News-Releases/2023/Making-Families-Safer-from-Button-Cell-or-Coin-Battery-Dangers-Reeses-Law-Leads-to-New-Federal-Mandatory-Safety-Standard" },
    { type: "source", title: "Button Batteries: Swallowed Button Battery Is an Emergency", publisher: "Children's Hospital of Philadelphia", url: "https://www.chop.edu/news/health-tip/swallowed-button-battery-emergency" },
    { type: "source", title: "Lithium-Ion Batteries (use, charging, disposal)", publisher: "South Carolina Department of Environmental Services", url: "https://des.sc.gov/community/recycling-waste-reduction/be-battery-smart/lithium-ion-batteries" },
    { type: "source", title: "Safety Tips on Power Banks", publisher: "Consumer Product Safety Office, Singapore", url: "https://www.consumerproductsafety.gov.sg/safety-tips-on-power-banks" },
    { type: "source", title: "CPSC Warns Consumers to Stop Using HAIARA Power Banks (lithium-ion disposal)", publisher: "CPSC", url: "https://www.cpsc.gov/Warnings/2027/CPSC-Warns-Consumers-to-Stop-Using-HAIARA-Power-Banks-Immediately-Due-to-Risk-of-Serious-Injury-or-Death-from-Fire-and-Burn-Hazards" },
    { type: "source", title: "About Carbon Monoxide Poisoning", publisher: "CDC", url: "https://www.cdc.gov/carbon-monoxide/about/index.html" },
    { type: "source", title: "Portable Generator Hazards (safety alert)", publisher: "CPSC (archived)", url: "https://webharvest.gov/peth04/20041017080743/http://www.cpsc.gov/CPSCPUB/PUBS/portgen.pdf" },
    { type: "source", title: "Generator Safety", publisher: "Minnesota State Fire Marshal", url: "https://dps.mn.gov/divisions/sfm/for-families/Documents/Home%20Fire%20Safety%20Information/GeneratorSafety.pdf" },
    { type: "source", title: "Portable Generator Wattage Chart (typical running and starting watts)", publisher: "Lowe's", url: "https://www.lowes.com/pdf/portable_generator_wattage_chart.pdf" },
    { type: "source", title: "Generator Buying Guide (furnace fan wattage)", publisher: "Sam's Club", url: "https://scene7.samsclub.com/is/content/samsclub/2023-generator-buying-guide" },
    { type: "source", title: "Assessment of the Effectiveness of Three Aftermarket Gasoline Fuel Stabilizers", publisher: "Oak Ridge National Laboratory (ORNL)", url: "https://ornl.gov/publication/assessment-effectiveness-three-aftermarket-gasoline-fuel-stabilizers-preventing-gum" },
    { type: "source", title: "Safety tips for storing gasoline at home (American Petroleum Institute tips)", publisher: "Idaho Transportation Department", url: "https://apps.itd.idaho.gov/apps/MediaManagerMVC/Transporter/2009/061209_Trans/061209_ACCEMgasoline.html" },
    { type: "source", title: "Gasoline Safety", publisher: "Texas Department of Insurance", url: "https://www.tdi.texas.gov/pubs/videoresource/t5gasolinesafety.pdf" },
    { type: "source", title: "Propane Safety in Extreme Heat", publisher: "North Carolina Department of Agriculture, Standards Division", url: "https://www.ncagr.gov/divisions/standards/standards-propane-safety-extreme-heat/open" },
    { type: "source", title: "Propane Cylinder Safety", publisher: "Iowa Department of Health and Human Services", url: "https://hhs.iowa.gov/media/8350/download" },
    { type: "source", title: "Survival Basics: Sanitation and Waste Management (EM 9334, twin-bucket toilet)", publisher: "Oregon State University Extension Service", url: "https://extension.oregonstate.edu/catalog/pub/em9334" },
    { type: "source", title: "Household Sanitation Preparedness: Twin Bucket Emergency Toilet", publisher: "PHLUSH (Portland, Oregon)", url: "https://phlush.org/household-sanitation-preparedness" },
    { type: "source", title: "Emergency Toilets If You Are on a Septic System / Sanitary Sewer", publisher: "Clallam County, Washington, Emergency Management", url: "https://www.clallamcountywa.gov/DocumentCenter/View/3436/Emergency-Toilets-If-You-Are-On-Septic-System-PDF" },
    { type: "source", title: "Sewage Disposal in an Emergency", publisher: "San Luis Obispo County Public Health", url: "https://slocounty.ca.gov/Departments/Health-Agency/Public-Health/Environmental-Health/Forms-Documents/Disaster-Preparedness/Sewage/SLO-Sewage-Disposal-in-an-Emergency-2016.aspx" },
    { type: "source", title: "Onsite Wastewater Treatment Systems: Responding to Electrical Power Outages and Floods", publisher: "Texas A&M AgriLife Extension", url: "https://texashelp.tamu.edu/wp-content/uploads/2016/02/waste-systems-blackouts-floods-1.pdf" },
    { type: "source", title: "Septic Systems: What to Do After Severe Weather", publisher: "Oklahoma State University Extension", url: "https://extension.okstate.edu/fact-sheets/septic-systems-what-to-do-after-severe-weather.html" },
    { type: "source", title: "Septic tank systems during power outages or floods", publisher: "Public Health, Seattle and King County", url: "https://kingcounty.gov/depts/health/emergency-preparedness/preparing-yourself/oss-during-outages-floods.aspx" },
    { type: "source", title: "Principle 3: Dispose of Waste Properly (catholes)", publisher: "Leave No Trace", url: "https://lnt.org/learn/principle-3" },
    { type: "source", title: "Building and maintaining latrines (30 meters from water, 1.5 meters above groundwater)", publisher: "International Federation of Red Cross and Red Crescent Societies (IFRC)", url: "https://epidemics.ifrc.org/volunteer/action/building-and-maintaining-latrines" },
    { type: "source", title: "Protection of well water from pollution and contamination (limestone needs greater distance)", publisher: "Ethiopian Federal Ministry of Health / The Open University, HEAT programme", url: "https://content.oppia-mobile.org/mod/page/view.php?id=7575" },
    { type: "source", title: "Guidelines for the Safe Use of Urine and Faeces in Ecological Sanitation Systems (EcoSanRes Fact Sheet 5, based on WHO)", publisher: "EcoSanRes / Stockholm Environment Institute", url: "https://susana.org/_resources/documents/default/2-323-esr-factsheet-5-en.pdf" },
    { type: "source", title: "Dehydration and Storage (WHO storage times for faeces)", publisher: "Sustainable Sanitation and Water Management (SSWM)", url: "https://sswm.info/humanitarian-crises/prolonged-encampments/sanitation/collection-and-storage-treatment/dehydration-and-storage" },
    { type: "source", title: "Personal Hygiene During an Emergency", publisher: "CDC", url: "https://www.cdc.gov/healthywater/emergency/hygiene-handwashing-diapering/handwashing-and-hygiene-during-emergencies.html" },
    { type: "source", title: "Wash Your Hands (fact sheet)", publisher: "CDC", url: "https://cdc.gov/natural-disasters/communication-resources/wash-your-hands-factsheet.html" },
    { type: "source", title: "How to Make a Tippy Tap", publisher: "CDC", url: "https://stacks.cdc.gov/view/cdc/41619" },
    { type: "source", title: "Safe and Healthy Diaper Changing Steps in Emergency Settings", publisher: "CDC", url: "https://stacks.cdc.gov/view/cdc/118155" },
    { type: "source", title: "How to Safely Clean and Sanitize with Bleach", publisher: "CDC", url: "https://www.cdc.gov/disasters/bleach.html" },
    { type: "source", title: "The Hidden Hazards of Backyard Burning (EPA530-F-03-012)", publisher: "U.S. Environmental Protection Agency (EPA)", url: "https://archive.epa.gov/epawaste/nonhaz/municipal/web/html/health.html" },
    { type: "source", title: "What to Do to Protect Yourself From Animals After a Disaster", publisher: "CDC", url: "https://www.cdc.gov/natural-disasters/response/what-to-do-protect-yourself-from-animals-after-a-disaster.html" },
    { type: "source", title: "Rodent Control After a Disaster", publisher: "CDC (archived)", url: "https://webarchive.library.unt.edu/eot2008/20090109033553/http:/www.bt.cdc.gov/disasters/rodents.asp" },
  ],
};
