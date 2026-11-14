import type { Section } from "../types";

// Section 14: Bugging Out. Facts checked Nov 14, 2026 against the sources listed at the end.
// Numbers that should not be "simplified": loaded pack about 20% of body weight for adults
// (REI), 10 to 20% for children (AAP / KidsHealth); trench foot can happen as warm as 60°F
// if feet stay wet (NIOSH); trench foot warm soak 102-110°F for about 5 minutes (CDC);
// mild hypothermia: insulate + vapor barrier, sit or lie 30 minutes, evacuate if not
// improving (Wilderness Medical Society 2019); 6 inches of moving water can knock an adult
// down, 12 inches can carry off a small car, 18-24 inches trucks/SUVs (NWS flood brochure).
//
// Cross-links promised by other sections: Seasons (winter car kit, stranded in a car),
// Medical (medical card in the go-bag), Power/Light/Sanitation (cathole), Menstrual Care.

export const buggingOut: Section = {
  id: "bugging-out",
  number: 14,
  title: { en: "Bugging Out" },
  summary: { en: "When to leave, packing like a pro, and staying dry and warm on foot." },
  blocks: [
    {
      type: "p",
      text: {
        en: "\"Bugging out\" means leaving home in a hurry because staying has become more dangerous than going. For most emergencies, a family with stored water, food, and a plan is safer at home than on the road. Leaving is for when the home itself is the danger: fire coming, water rising, the house damaged, gas leaking, or officials telling you to go. This section helps you decide ahead of time when to leave, plan where to go, pack one good bag per person, and stay dry, warm, and together if you have to walk.",
      },
    },

    // ==================================================================
    { type: "h", id: "stay-or-go", text: { en: "Stay or go: decide now, not then" } },
    {
      type: "p",
      text: {
        en: "In a real emergency people freeze, argue, or wait too long. Decide your triggers now, as a family, and write them down. When a trigger happens, you go, without a new debate.",
      },
    },
    {
      type: "table",
      caption: { en: "Example triggers. Change them to fit where you live." },
      head: [{ en: "If this happens" }, { en: "Do this" }],
      rows: [
        [{ en: "Officials order an evacuation for your area" }, { en: "Leave right away, by the route they give." }],
        [{ en: "A voluntary evacuation, or wildfire smoke and ash with fire in your county" }, { en: "Leave early, before roads jam, especially with children, elders, pets, or anyone with medical needs." }],
        [{ en: "Floodwater rising toward the house, or a flood warning for your street" }, { en: "Leave while roads are dry. Never drive or walk into moving water." }],
        [{ en: "You smell gas, or see serious damage to walls, roof, or foundation" }, { en: "Get everyone out now. Decide where to go from outside." }],
        [{ en: "A chemical spill or smoke cloud nearby" }, { en: "Do what officials say. Often this means stay inside with windows shut (shelter in place), not leave." }],
        [{ en: "No heat in deep cold and you cannot keep one room warm" }, { en: "Move to a warming center, a neighbor, or relatives (see {{seasons}})." }],
        [{ en: "Storm or blizzard happening now" }, { en: "Usually stay. Roads are most dangerous during the storm itself." }],
      ],
    },

    // ==================================================================
    { type: "h", id: "plan", text: { en: "Make the plan before you need it" } },
    {
      type: "steps",
      items: [
        { en: "Pick two places to go: one nearby (a friend's or relative's home across town) and one farther away, outside your region. Ask them now if you can come, and offer the same to them." },
        { en: "Plan at least two routes to each place, in different directions. Mark them on paper road maps and keep the maps in the car and in a go-bag. Phones and map apps may not work." },
        { en: "Pick meeting places: one just outside your home (a mailbox, a neighbor's tree) for a fire, and one outside your neighborhood (a library, a church, a school) if you can't get home." },
        { en: "Choose an out-of-area contact person everyone will call or text. Long-distance calls and texts often get through when local lines are jammed." },
        { en: "Write all of this on a card for each family member: names, phone numbers, the meeting places, the out-of-area contact, and allergies or medical needs. Put one card in each bag and each child's backpack." },
        { en: "Keep the car's tank at least half full at all times, and full when trouble is forecast. Gas stations may be closed or without power. Plan to take one car per family to keep roads clear." },
        { en: "Plan for pets. Many shelters take only service animals. Find pet-friendly hotels and relatives on your routes now, and keep a current photo of each pet with you in it." },
        { en: "Practice once a year: grab bags, load the car, and drive one of your routes. Time it. Fix what went wrong." },
      ],
    },

    // ==================================================================
    { type: "h", id: "the-bag", text: { en: "One bag per person, sized to the person" } },
    {
      type: "p",
      text: {
        en: "Every person who can walk carries their own [[go-bag|go-bag]], so no one is left without water or a jacket if the family gets split up. Use a real backpack with two padded shoulder straps and a hip belt, not a duffel or a tote. The hip belt puts most of the weight on the hips, where the body carries it best.",
      },
    },
    {
      type: "list",
      items: [
        { en: "Adults: a loaded pack should weigh no more than about 20% of body weight. A 150-pound (68 kg) adult should carry about 30 pounds (14 kg) or less. Weigh each pack on a bathroom scale." },
        { en: "Children: no more than 10% to 20% of their body weight. An 80-pound (36 kg) child carries 8 to 16 pounds (4 to 7 kg) at most." },
        { en: "Small children: a small bag with their own water bottle, snack, a whistle, a warm hat, a rain poncho, a comfort item, and their contact card. Adults carry the rest." },
        { en: "Older or weaker adults: a lighter pack. Spread shared gear (the stove, the big first aid kit, the water filter) among the strongest walkers." },
        { en: "Water is the heaviest thing you carry: a gallon weighs about 8 pounds (a liter weighs 1 kg). Carry 1 to 2 liters per person and a way to make more safe (see {{water}})." },
      ],
    },

    // ==================================================================
    { type: "h", id: "what-to-pack", text: { en: "What goes in the bag" } },
    {
      type: "table",
      caption: { en: "Core go-bag list for each adult (for 72 hours)" },
      head: [{ en: "Need" }, { en: "Pack" }, { en: "Notes" }],
      rows: [
        [{ en: "Water" }, { en: "1–2 L in bottles; water filter or purification tablets" }, { en: "One filter can serve the family; tablets as backup in each bag." }],
        [{ en: "Food" }, { en: "3 days of no-cook, high-calorie food: nut butter, bars, dried fruit, crackers, jerky" }, { en: "Rotate every 6 months. Include a treat for each child." }],
        [{ en: "Shelter and warmth" }, { en: "Rain jacket and pants, warm hat, gloves, insulating jacket, [[emergency-blanket|emergency blanket]], 2 [[contractor-bag|contractor bags]]" }, { en: "One contractor bag lines the pack; the other is a poncho or ground sheet." }],
        [{ en: "Dry sleep set" }, { en: "Base layer top and bottom, warm socks, hat, sealed in a zip bag" }, { en: "Never worn while walking (see below)." }],
        [{ en: "Feet" }, { en: "Broken-in boots or shoes, 2–3 pairs of wool or synthetic socks, blister tape" }, { en: "New boots cause blisters. Wear them in now." }],
        [{ en: "Fire" }, { en: "Two lighters, waterproof matches, cotton balls with petroleum jelly in a small bag" }, { en: "Keep lighters away from children." }],
        [{ en: "Light" }, { en: "[[headlamp|Headlamp]] and spare batteries" }, { en: "A headlamp leaves both hands free." }],
        [{ en: "First aid" }, { en: "Personal kit: bandages, gauze, tape, blister care, a [[tourniquet]], gloves, pain reliever, personal medicines" }, { en: "Carry each person's medical card (see {{medical}}). Prescription medicines are not covered in this guide; ask your doctor about an emergency supply." }],
        [{ en: "Tools" }, { en: "Fixed-blade or folding knife, duct tape (a few feet wrapped on a bottle), cord, whistle" }, { en: "A whistle carries farther than a voice and takes less energy." }],
        [{ en: "Papers and money" }, { en: "Copies of IDs, insurance, deeds, prescriptions, pet records; cash in small bills" }, { en: "Seal in a zip bag. Card readers and ATMs may be down." }],
        [{ en: "Communication" }, { en: "Phone, charging cable, charged [[power-bank|power bank]], small battery or hand-crank radio, contact card, paper maps" }, { en: "Write numbers on paper; phones die." }],
        [{ en: "Hygiene" }, { en: "Soap, [[hand-sanitizer|hand sanitizer]], toothbrush, toilet paper in a zip bag, small trowel, menstrual supplies" }, { en: "See {{menstrual-care}} and, for going outdoors, the [[cathole]] method in {{power-light-sanitation}}." }],
        [{ en: "Protection" }, { en: "[[n95-respirator|N95 mask]], sunscreen, [[insect-repellent|insect repellent]], work gloves, sunglasses" }, { en: "Masks for smoke and dust." }],
        [{ en: "Pets" }, { en: "Food, water bowl, leash, medicines, waste bags, records, photo" }, { en: "A pet carries its own small pack only if trained to." }],
      ],
    },
    {
      type: "p",
      text: {
        en: "Keep the bags packed, near the door or in the car trunk, and check them every 6 months (a good habit at the clock change): rotate food and water, swap clothes for the season, check that medicines and batteries are fresh, and check that the children's clothes still fit.",
      },
    },

    // ==================================================================
    { type: "h", id: "packing-order", text: { en: "Packing like a pro" } },
    {
      type: "p",
      text: {
        en: "The same weight feels much lighter when it is packed well. The goal is to keep heavy things close to your spine and centered between your shoulder blades, so the pack does not pull you backward.",
      },
    },
    {
      type: "steps",
      items: [
        { en: "Line the pack with a [[contractor-bag|contractor bag]]. Most packs are not waterproof." },
        { en: "Bottom: light, bulky things you won't need until you stop for the night, such as the sleeping bag or blanket and the dry sleep set." },
        { en: "Middle, against your back: the heavy things, such as water, food, stove, and fuel, packed between your shoulder blades. Stuff soft clothes around them so nothing shifts." },
        { en: "Top: things you may need during the day, such as the rain jacket, warm layer, and first aid kit." },
        { en: "Lid and outside pockets: small things you reach for often, such as the map, headlamp, snacks, sunscreen, whistle, and hand sanitizer. Water bottles go in the side pockets." },
        { en: "Twist the liner bag shut and tuck it in. Avoid hanging things on the outside; they swing, snag, and get wet." },
        { en: "Put it on: loosen all straps, lift it onto one knee, then onto your back. Tighten the hip belt first, so it sits on top of the hip bones; then the shoulder straps; then the small straps at the top of the shoulders and across the chest." },
        { en: "Walk around the block. If it sways, pulls you backward, or hurts, repack and take something out." },
      ],
    },
    { type: "sketch", sketch: "pack-loading", caption: { en: "Packing order: sleeping bag at the bottom, heavy food and water in the middle against your back, rain jacket on top, small items in the lid. Hip belt on the hip bones." } },

    // ==================================================================
    { type: "h", id: "car-vs-foot", text: { en: "Car kit and on-foot kit" } },
    {
      type: "list",
      items: [
        { en: "By car: the go-bags ride in the car with extra water (a gallon per person per day), food, blankets, a full first aid kit, jumper cables, a tire repair kit, a gas can if you can store one safely, and paper maps. For a winter car kit and what to do if you are stranded, see {{seasons}}." },
        { en: "On foot: only what you can carry in the go-bags. If you must leave the car, take the go-bags, water, and warm clothes, and leave a note on the dashboard saying who you are, where you are going, and when you left." },
        { en: "72 hours vs. longer: a 72-hour bag is the core. For a longer trip, add more food, a small stove and pot, a water filter, a light tarp or tent, and a sleeping bag for each person, but stay inside the weight limits by sharing gear." },
      ],
    },

    // ==================================================================
    { type: "h", id: "leaving", text: { en: "When it's time to go" } },
    {
      type: "steps",
      items: [
        { en: "Get everyone and the pets. Grab the go-bags, medicines, glasses, phone chargers, and the medical cards." },
        { en: "Dress for walking even if you plan to drive: long pants, sturdy shoes, a layer, a hat." },
        { en: "If you have time and officials ask you to: turn off the water and electricity at the main. Turn off gas only if officials tell you to or you smell gas; once off, a professional must turn it back on." },
        { en: "Unplug electronics, close and lock windows and doors." },
        { en: "Tell your out-of-area contact where you are going and which route you will take." },
        { en: "Check on neighbors who may need a ride, if it is safe." },
        { en: "Follow the routes officials give. Shortcuts may be blocked or more dangerous." },
      ],
    },
    {
      type: "warning",
      text: {
        en: "Turn around, don't drown. Just 6 inches (15 cm) of fast-moving flood water can knock an adult off their feet, 12 inches (30 cm) of moving water can carry off a small car, and 18 to 24 inches (45 to 60 cm) can carry away trucks, vans, and SUVs. More than half of flood deaths happen to people who drive or walk into floodwater. You cannot tell how deep water is or whether the road under it is gone. Never drive or walk into moving water.",
      },
    },

    // ==================================================================
    { type: "h", id: "on-the-move", text: { en: "Walking as a family" } },
    {
      type: "list",
      items: [
        { en: "Walk at the pace of the slowest person. Put that person near the front, so the group doesn't stretch out and lose them." },
        { en: "Pair everyone up with a buddy, and count heads at every stop." },
        { en: "Rest for a few minutes every hour, with packs off. Eat a little and drink at every rest, before anyone feels hungry or thirsty." },
        { en: "Check feet at every long rest (see below). Treat hot spots before they become blisters." },
        { en: "Walk in daylight when you can. Stay on known roads and trails; shortcuts through woods and fields are slower and easier to get lost on." },
        { en: "Agree on what to do if someone gets separated: stop, stay put, and blow the whistle three times. Searchers find people who stay in one place." },
        { en: "Wear something bright, especially children. Keep a headlamp handy before dark." },
      ],
    },

    // ==================================================================
    { type: "h", id: "dry-feet", text: { en: "Keeping feet dry in rain" } },
    {
      type: "p",
      text: {
        en: "Feet that stay wet for many hours soften, blister, and can be badly hurt. [[trench-foot|Trench foot]] can happen even at 60°F (16°C) if feet stay wet, and wet feet lose heat about 25 times faster than dry feet. On a long walk, your feet are your transportation.",
      },
    },
    {
      type: "steps",
      items: [
        { en: "Wear wool or synthetic socks, never cotton. Wool stays warm even when wet." },
        { en: "Wear rain pants outside your boots, or [[gaiters]] over them, so rain running down your legs doesn't drain into your boots." },
        { en: "At every long rest, take off boots and socks, dry your feet with a cloth, let them air for a few minutes, and put on a dry pair of socks. Tuck the wet pair inside your jacket against your belly or under your shirt at the waist; body heat will help dry them." },
        { en: "Plastic-bag trick: a thin bag (like a bread bag) between a dry sock and a wet boot keeps the sock dry for a few hours. Its limit: feet sweat inside the plastic and get wet from the inside, so use it only for short stretches, and take the bags off at rests to dry your feet." },
        { en: "Keep one pair of camp socks sealed in a zip bag. They are only for sleeping and are never worn in the boots." },
        { en: "At night, take boots off, open them wide, pull out the insoles, and stuff them with dry newspaper or cloth if you have it. Put them under the shelter, not in the rain. Never dry boots right next to a fire; heat cracks leather and melts glue." },
        { en: "Sleep without socks if your feet have been wet for a long time, so the skin can dry and recover; otherwise wear the dry camp socks." },
      ],
    },
    { type: "sketch", sketch: "dry-socks-break", caption: { en: "At every rest: boots off, dry and air the feet, tuck wet socks at the waist to dry, and put on a dry pair." } },
    {
      type: "warning",
      text: {
        en: "Signs of trench foot: tingling or itching, pain, swelling, numbness, cold and blotchy skin, a heavy or prickly feeling; later, redness, blisters, and skin that dies and peels. What to do: stop walking on it if you can. Clean and dry the feet well, raise them, and warm them with warm packs or by soaking in warm water (102°F to 110°F, 39°C to 43°C, comfortably warm, not hot) for about 5 minutes. Put on clean, dry socks every day, but no socks while resting or sleeping. Check the feet at least once a day for infection. If the skin turns dark purple, blue, or gray, get medical help.",
      },
    },

    // ==================================================================
    { type: "h", id: "stay-warm", text: { en: "Staying dry and warm, and preventing hypothermia" } },
    {
      type: "p",
      text: {
        en: "[[hypothermia|Hypothermia]] (body heat dropping too low) is one of the biggest dangers of walking in bad weather, because wet clothes, wind, hunger, and tiredness add up. It can happen well above freezing if you are wet. The rules are simple: stay dry, stay out of the wind, keep eating and drinking, and act at the first signs.",
      },
    },
    {
      type: "list",
      items: [
        { en: "Layers: a thin base layer next to the skin, a warm middle layer (fleece or wool), and a wind- and rain-proof shell. Add and remove layers as you go." },
        { en: "No cotton: cotton jeans, sweatshirts, and t-shirts soak up water and lose almost all their warmth when wet. Choose wool or synthetic." },
        { en: "Vent before you sweat. Take off a layer when you start climbing or walking fast; put it back on as soon as you stop. Sweat-soaked clothes chill you at the next rest." },
        { en: "Get out of the wind early, before people are shivering hard: behind a wall, a building, a hill, or thick trees." },
        { en: "Insulate from the ground. Sitting or lying on cold, wet ground pulls heat out fast. Sit on your pack, a foam pad, or a pile of dry leaves or branches." },
        { en: "Keep a dry sleep set (base layers, socks, hat) sealed in a zip bag and never wear it while walking. Change into it at night. In the morning, put the damp walking clothes back on; they warm up quickly once you move, and your sleep set stays dry for the next night." },
        { en: "Eat and drink. The body makes heat from food. Snack every hour and have something sweet before sleeping. Avoid alcohol; it makes you feel warm while you lose heat faster." },
        { en: "Wear a hat, and keep the neck covered." },
        { en: "Trash-bag poncho: cut a hole for the face in the bottom of a contractor bag and pull it over your head and pack, or cut holes for head and arms. It blocks wind and rain in an emergency. Never put a plastic bag over a young child's head; cut a large neck opening and keep the face clear." },
      ],
    },
    { type: "sketch", sketch: "trash-bag-poncho", caption: { en: "A contractor bag makes a quick poncho over you and your pack. Keep the face fully open." } },
    {
      type: "table",
      caption: { en: "Watch for the \"umbles\": early hypothermia warning signs" },
      head: [{ en: "Sign" }, { en: "What you notice" }],
      rows: [
        [{ en: "Grumbles" }, { en: "A change in mood: crabby, quiet, withdrawn, or not caring" }],
        [{ en: "Fumbles" }, { en: "Clumsy hands: can't zip a jacket, tie a lace, or open a snack" }],
        [{ en: "Mumbles" }, { en: "Slurred or slow speech, confused answers" }],
        [{ en: "Stumbles" }, { en: "Tripping, swaying, falling behind; can't walk a straight line" }],
      ],
    },
    {
      type: "p",
      text: {
        en: "People with hypothermia often don't notice it in themselves, because cold slows thinking. Watch each other, especially children and older adults, and act at the first sign.",
      },
    },
    { type: "h", id: "treat-hypothermia", text: { en: "Treating hypothermia away from home" } },
    {
      type: "steps",
      items: [
        { en: "Stop and get out of the wind and rain. Put up a tarp, get into a building or a car, or put your backs to a wall." },
        { en: "Handle the person gently. Get them off the ground onto a pad, packs, or branches." },
        { en: "Wet clothes: if you have shelter and dry clothes ready, swap them quickly, one piece at a time. If you don't, leave the wet clothes on and wrap a plastic layer (an emergency blanket or contractor bag) around them to stop the wet from chilling them more." },
        { en: "Wrap them in a [[hypothermia-wrap|hypothermia wrap]]: insulation all around (sleeping bags, blankets, jackets), with a plastic layer outside it (a tarp or contractor bags), and the head and neck covered, leaving the face open." },
        { en: "Add heat to the chest, armpits, and back: warm water bottles wrapped in socks, chemical heat packs, or a warm person next to them inside the wrap. Never put heat right on bare skin; check skin every 20 to 30 minutes for burns." },
        { en: "If they are awake, shivering, and can swallow safely, give warm, sweet drinks and high-calorie food." },
        { en: "Mild hypothermia (shivering, still alert, moving clumsily): keep them sitting or lying in the wrap for about 30 minutes. If they improve, they can walk or move to warm up more. If they don't improve in 30 minutes, get help or carry them out." },
        { en: "Moderate or severe hypothermia (very drowsy or confused, shivering slows or stops, can't stand): do NOT let them walk, and give nothing by mouth. Keep them lying flat, wrapped, with heat on the chest, and get emergency help. Move them gently; rough handling can stop a cold heart." },
        { en: "If they are not breathing normally, start CPR (see {{medical}}). A person who seems dead from cold may still be saved." },
      ],
    },
    { type: "sketch", sketch: "hypothermia-wrap", caption: { en: "A hypothermia wrap: pad underneath, sleeping bag and blankets around, plastic on the outside, face open, a warm bottle at the chest." } },
    {
      type: "p",
      text: {
        en: "For frostbite and more about cold at home, see {{seasons}}. For first aid on the road, see {{medical}}.",
      },
    },

    // ==================================================================
    { type: "h", id: "plan-stages", text: { en: "Your plan" } },
    {
      type: "table",
      caption: { en: "Bugging-out plan by stage" },
      head: [{ en: "When" }, { en: "What to do" }],
      rows: [
        [{ en: "Now" }, { en: "Write your triggers, two destinations, two routes each, meeting places, and the out-of-area contact. Make a card for each person. Keep the car half full." }],
        [{ en: "First month" }, { en: "Build one go-bag per person, weigh each one, and break in boots. Copy documents into zip bags." }],
        [{ en: "90 days" }, { en: "Practice: grab bags, load the car, drive one route. Take a family walk of a few miles with full packs in the rain gear." }],
        [{ en: "6 months" }, { en: "Check the bags: rotate food and water, change clothes for the season, check medicines, batteries, and sizes." }],
        [{ en: "1 to 2 years" }, { en: "Take a first aid class that covers cold injuries. Do an overnight practice trip with the go-bags. Teach children the whistle signal, their contact card, and what to do if separated." }],
      ],
    },
    {
      type: "p",
      text: {
        en: "For the full supply lists, see {{tools-kits}}.",
      },
    },

    // ==================================================================
    { type: "source", title: "Evacuation", publisher: "Ready.gov (FEMA)", url: "https://www.ready.gov/evacuation" },
    { type: "source", title: "Build A Kit", publisher: "Ready.gov (FEMA)", url: "https://www.ready.gov/kit" },
    { type: "source", title: "Make a Plan", publisher: "Ready.gov (FEMA)", url: "https://www.ready.gov/plan" },
    { type: "source", title: "Prepare Your Pets for Disasters", publisher: "Ready.gov (FEMA)", url: "https://www.ready.gov/pets" },
    { type: "source", title: "Evacuation planning guide (keep a half tank of gas; one car per family; follow recommended routes)", publisher: "El Dorado Hills Fire Department (based on Ready.gov)", url: "https://edhfire.prod.govaccess.org/home/showpublisheddocument/274/638635634778800000" },
    { type: "source", title: "To-Go Kit", publisher: "ReadyWisconsin (Wisconsin Emergency Management)", url: "https://readywisconsin.wi.gov/?p=1066" },
    { type: "source", title: "How Much Should Your Pack Weigh?", publisher: "REI Expert Advice", url: "https://www.rei.com/learn/expert-advice/backpacking-weight.html" },
    { type: "source", title: "Backpack Safety (10% to 20% of a child's body weight)", publisher: "KidsHealth (Nemours), reviewed by physicians", url: "https://kidshealth.org/en/parents/backpack.html" },
    { type: "source", title: "How to Pack a Backpack", publisher: "American Hiking Society", url: "https://americanhiking.org/resources/how-to-pack-a-backpack/" },
    { type: "source", title: "How to Pack for Ultralight Backpacking (packing zones)", publisher: "REI Expert Advice", url: "https://www.rei.com/learn/expert-advice/how-to-pack-for-ultralight-backpacking.html" },
    { type: "source", title: "Flood Safety for You and Your Family (Turn Around Don't Drown)", publisher: "National Weather Service (NOAA)", url: "https://www.weather.gov/media/safety/flood_brochure12A.pdf" },
    { type: "source", title: "Cold-related Illnesses in Workers (trench foot at 60°F)", publisher: "CDC, National Institute for Occupational Safety and Health (NIOSH)", url: "https://www.cdc.gov/niosh/cold-stress/about/related-illness.html" },
    { type: "source", title: "Trench foot or immersion foot (Disaster Recovery Fact Sheet)", publisher: "CDC (archived copy)", url: "https://webarchive.library.unt.edu/eot2008/20090109222132mp_/http://emergency.cdc.gov/disasters/trenchfoot.asp" },
    { type: "source", title: "Wilderness Medical Society Clinical Practice Guidelines for the Out-of-Hospital Evaluation and Treatment of Accidental Hypothermia: 2019 Update", publisher: "Wilderness & Environmental Medicine, summarized by American Family Physician (2020)", url: "https://www.aafp.org/pubs/afp/issues/2020/1101/p571.html" },
    { type: "source", title: "Hypothermia (burrito wrap: insulation, vapor barrier, heat to the torso)", publisher: "UK Ministry of Defence, Clinical Guidelines for Operations", url: "https://cgo.mod.uk/clinical-guidelines-for-operations/treatment-guidelines/emergenciesresuscitation/hypothermia/" },
    { type: "source", title: "Hypothermia", publisher: "National Park Service, Kenai Fjords National Park", url: "https://home.nps.gov/kefj/planyourvisit/hypothermia.htm" },
    { type: "source", title: "Know Before You Go: Hypothermia", publisher: "USDA Forest Service", url: "https://www.fs.usda.gov/visit/know-before-you-go/hypothermia" },
    { type: "source", title: "Hypothermia Alert (the \"umbles\")", publisher: "Minnesota Governor's Council on Developmental Disabilities / State of Minnesota", url: "https://mn.gov/omhdd/assets/Hypothermia-Alert_tcm23-551026.pdf" },
    { type: "source", title: "Hypothermia safety moment", publisher: "Scouting America", url: "https://www.scouting.org/health-and-safety/safety-moments/hypothermia" },
    { type: "source", title: "Hypothermia", publisher: "MedlinePlus (U.S. National Library of Medicine)", url: "https://medlineplus.gov/ency/article/000038.htm" },
  ],
};
