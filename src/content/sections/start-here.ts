import type { Section } from "../types";

// Section 1: Start Here. Written last (Nov 15, 2026) because it points into every other section.
// Facts checked Nov 15, 2026 against the sources listed at the end. Numbers here repeat the
// numbers already used in the other sections; keep them the same if those change:
// - Water: 1 gallon per person per day; two weeks for a family of four = 56 gallons; do not
//   ration drinking water (Water section).
// - Fridge about 4 hours closed; full freezer about 48 hours, half full about 24 (Food Storage).
// - Downed power lines: stay 35 feet (11 m) away (Power, Light, and Sanitation; ESFI).
// - Generators outdoors, more than 20 feet from windows, doors, and vents (Seasons; CDC).
// - Ready.gov Build a Kit: you "may need to survive on your own for several days"; re-think needs
//   and update the kit every year. Red Cross: officials and relief workers cannot reach everyone
//   right away; plan for delays in help.
// - FEMA P-1094 family communication plan: out-of-town contact, text is best, short texts like
//   "I'm OK. At library", meeting places, wallet copies, practice.
// - Ready.gov evacuation: half tank of gas at all times, full if evacuation seems likely; shut
//   off water, gas, and electricity only if the home is damaged and you are told to; leave a note
//   saying when you left and where you went; check on neighbors who may need a ride.
// - UF/IFAS: leave natural gas on unless told to turn it off; only a professional can turn it
//   back on, which can take days or weeks after a disaster.
// - Returning home (Ready.gov, CDC): only when officials say it is safe; do not enter if you
//   smell gas, floodwater remains around the building, a fire-damaged home has not been declared
//   safe, or there is obvious damage like downed lines or cracks in walls or foundation; photos
//   and a list before cleanup; FEMA helpline 1-800-621-3362, disasterassistance.gov.

export const startHere: Section = {
  id: "start-here",
  number: 1,
  title: { en: "Start Here" },
  summary: { en: "The first hour, the first 72 hours, and the plan from 90 days to 2 years. Read this page first; it points to everything else." },
  blocks: [
    {
      type: "p",
      text: {
        en: "This page is the map for the whole guide. If something has just happened, go straight to the first part below: it tells you what to do in the first hour and the first three days, and which section to open for each problem. If nothing has happened yet, you are in the best position there is. Read the part on getting ready, set up your family in the calculator, and start with the small, cheap steps this week.",
      },
    },
    {
      type: "warning",
      text: {
        en: "If you can reach 911, a doctor, or emergency services, use them first. If officials tell you to leave, leave right away. This guide is for the times when help is slow or out of reach, not a replacement for it.",
      },
    },

    // ==================================================================
    { type: "h", id: "right-now", text: { en: "Something just happened: the first hour" } },
    {
      type: "p",
      text: {
        en: "In the first hour, the job is simple: get everyone away from danger, deal with serious injuries, and find out what is going on. Supplies and plans come after that.",
      },
    },
    {
      type: "steps",
      items: [
        { en: "Get away from the danger in front of you. Fire or smoke: get everyone out and stay out. A gas smell or a hissing sound: don't touch light switches or light anything, open a window if it is on your way, leave, and call from outside. Rising water: get to higher ground, and never walk or drive through moving water ({{bugging-out|Bugging Out}})." },
        { en: "Stay at least 35 feet (11 meters) from any fallen power line and anything touching it. Treat every downed line as live." },
        { en: "Check people. Stop heavy bleeding first, then check breathing. Call or text 911 for anything life-threatening. The {{medical}} section starts with these first steps." },
        { en: "Count everyone, including pets. Put on shoes and gloves if there is broken glass or debris. Use flashlights, not candles." },
        { en: "Get information. Turn on a battery or [[hand-crank-radio|hand-crank radio]], or check the emergency alerts on a phone. Follow what local officials say. If they tell you to leave, see the next part." },
        { en: "Let family know you are safe. Send a short text, like \"I'm OK. At home.\" Texts often get through when calls don't. Text your out-of-town contact so everyone can check in with one person ({{communications}})." },
        { en: "Never run a generator, grill, camp stove, or car indoors or in a garage. [[carbon-monoxide|Carbon monoxide]] has no smell, and it kills people after storms and power outages every year ({{seasons}})." },
      ],
    },

    // ==================================================================
    { type: "h", id: "stay-or-go", text: { en: "Stay or go?" } },
    {
      type: "p",
      text: {
        en: "Most emergencies are lived through at home, where your supplies, bed, and toilet are. Leave when officials tell you to, or when staying is more dangerous than going: fire coming, water rising, a gas leak, a badly damaged house, or no way to stay warm or cool enough to be safe. Decide your reasons to leave ahead of time, so you are not deciding in a panic. The {{bugging-out|Bugging Out}} section has a stay-or-go list and go-bag packing.",
      },
    },
    {
      type: "steps",
      items: [
        { en: "If officials order you to leave, go right away. Waiting makes it more dangerous, not less." },
        { en: "Grab each person's [[go-bag]], medicines, glasses, phone chargers, important papers, and pet supplies." },
        { en: "Shut off water, gas, and electricity only if your home is damaged and officials tell you to. Leave the gas on otherwise: once it is off, only the gas company or a professional should turn it back on, and after a disaster that can take days or weeks." },
        { en: "Leave a note saying when you left and where you are going. Text your out-of-town contact." },
        { en: "Check on neighbors who may need a ride. Follow the routes officials give; shortcuts may be blocked." },
      ],
    },

    // ==================================================================
    { type: "h", id: "first-72-hours", text: { en: "The first 72 hours at home" } },
    {
      type: "p",
      text: {
        en: "After a big disaster, you may need to get by on your own for several days. Officials and relief workers do come, but they cannot reach everyone right away. These first three days are what the basic kit in {{tools-kits|Tools and Kits}} is for. Here is what to do first for each need, and where to read more.",
      },
    },
    {
      type: "table",
      caption: { en: "First things first, need by need." },
      head: [{ en: "Need" }, { en: "Do this first" }, { en: "Read more" }],
      rows: [
        [
          { en: "Water" },
          { en: "Save what is in the house: fill tubs, pots, and jugs while the taps still run. If officials say the water is unsafe, close the main water valve. Plan on 1 gallon (about 4 liters) per person per day, and don't ration drinking water." },
          { en: "{{water}}" },
        ],
        [
          { en: "Food" },
          { en: "Keep the fridge and freezer shut. Eat from the fridge first, then the freezer, then the pantry. A closed fridge keeps food safe about 4 hours; a full freezer about 48 hours." },
          { en: "{{food-storage|Food Storage}}" },
        ],
        [
          { en: "Cooking" },
          { en: "Cook outdoors only, on a camp stove or grill, away from the house. Use canned and ready-to-eat food first." },
          { en: "{{cooking}}" },
        ],
        [
          { en: "Warm or cool" },
          { en: "In cold: pick one small room, close it off, and everyone sleeps there. In heat: shut and shade the house by day, open it at night." },
          { en: "{{seasons}}" },
        ],
        [
          { en: "Light and power" },
          { en: "One flashlight or [[headlamp]] per person. Unplug electronics, leave one lamp on to know when power is back. Save phone battery." },
          { en: "{{power-light-sanitation|Power, Light, and Sanitation}}" },
        ],
        [
          { en: "Toilet" },
          { en: "Water off but sewer working: flush with a bucket of water. Sewer broken or backing up: stop flushing and set up a [[twin-bucket-toilet|twin-bucket toilet]]. Wash hands every time." },
          { en: "{{power-light-sanitation|Power, Light, and Sanitation}}" },
        ],
        [
          { en: "Injuries and medicine" },
          { en: "Clean and cover every wound, even small ones. Write down each person's medicines and doses. Watch for signs of dehydration in children and older adults." },
          { en: "{{medical}}" },
        ],
        [
          { en: "News and contact" },
          { en: "Listen to the radio at set times. Agree on check-in times with family. Text, don't call." },
          { en: "{{communications}}" },
        ],
        [
          { en: "Safety at home" },
          { en: "Lock doors and windows. Don't open the door to strangers; ask for photo ID through the door. Keep a flashlight by each bed." },
          { en: "{{home-defense|Home Defense}}" },
        ],
        [
          { en: "Hearts and minds" },
          { en: "Keep a simple routine, give everyone a job, and tell children the truth in calm, simple words. Fear and trouble sleeping are normal at first." },
          { en: "{{mind}}" },
        ],
        [
          { en: "Neighbors" },
          { en: "Check on older neighbors, people living alone, and families with babies. Share what you know." },
          { en: "{{home-defense|Home Defense}}" },
        ],
      ],
    },
    {
      type: "p",
      text: {
        en: "A rough order for the three days:",
      },
    },
    {
      type: "list",
      items: [
        { en: "Day 1: safety, injuries, family contact, save water, eat from the fridge, set up light and the toilet, pick the room everyone will sleep in." },
        { en: "Day 2: take stock of water, food, medicine, and fuel. Write it down. Check the neighbors. Start a daily routine with meals at set times and jobs for everyone." },
        { en: "Day 3: if there is still no sign of services coming back, start thinking in weeks, not days. Read the next part." },
      ],
    },

    // ==================================================================
    { type: "h", id: "longer", text: { en: "When it lasts longer: weeks to 2 years" } },
    {
      type: "p",
      text: {
        en: "Most emergencies end in days. A few last for weeks, and in a very bad case, months or longer. If it goes on, the work shifts from getting through to living: finding and treating water, growing food, keeping clean, staying healthy, and keeping the family steady. Stored supplies buy time; skills and neighbors are what last. Here is what each stage looks like and where to read.",
      },
    },
    {
      type: "table",
      caption: { en: "If it goes on: what to focus on at each stage." },
      head: [{ en: "Stage" }, { en: "Focus" }, { en: "Read" }],
      rows: [
        [
          { en: "Weeks 1 and 2" },
          { en: "Live on stored water and food. Keep the toilet and handwashing going. Keep a routine. Treat small wounds early so they don't get infected." },
          { en: "{{water}}, {{food-storage|Food Storage}}, {{power-light-sanitation|Power, Light, and Sanitation}}, {{medical}}" },
        ],
        [
          { en: "By 90 days" },
          { en: "Collect rainwater and make found water safe. Plant fast crops and grow sprouts. Cook dry beans and grains. Set cage traps and fish where you can. Restart school at home." },
          { en: "{{water}}, {{growing-food|Growing Food}}, {{cooking}}, {{trapping|Trapping and Prey}}, {{mind}}" },
        ],
        [
          { en: "6 months" },
          { en: "Grow potatoes or sweet potatoes, dry beans, and squash. Save seed from the easy crops. Get ready for the next winter or summer. Move from buckets to long-term toilet-waste bins if the sewer is still down." },
          { en: "{{growing-food|Growing Food}}, {{seasons}}, {{power-light-sanitation|Power, Light, and Sanitation}}" },
        ],
        [
          { en: "1 year" },
          { en: "Store the harvest for winter. Find fuel that doesn't depend on gas stations. Keep a neighborhood radio net. Watch for long-term strain: grief, friction, low mood." },
          { en: "{{food-storage|Food Storage}}, {{communications}}, {{mind}}" },
        ],
        [
          { en: "2 years" },
          { en: "Most fresh food comes from the garden, with stored staples behind it. A cool storage place for crops. Children can do real jobs and know the skills. Trade and share with neighbors." },
          { en: "{{growing-food|Growing Food}}, {{cooking}}, {{trapping|Trapping and Prey}}" },
        ],
      ],
    },

    // ==================================================================
    { type: "h", id: "coming-home", text: { en: "Coming home after you left" } },
    {
      type: "steps",
      items: [
        { en: "Go back only when officials say it is safe." },
        { en: "Walk around the outside first. Look for downed power lines, gas leaks, and damage." },
        { en: "Do not go in if you smell gas, if floodwater is still around the building, if a fire-damaged home has not been declared safe, or if there is obvious damage like cracks in the walls or foundation. Have a professional check it first." },
        { en: "Turn your flashlight on before you go in, not inside." },
        { en: "Before cleaning up, take photos and make a list of the damage. Keep every receipt. Call your insurance company if you have one." },
        { en: "In the U.S., apply for FEMA help at disasterassistance.gov or 1-800-621-3362. Watch for scams: FEMA never charges for help. The {{home-defense|Home Defense}} section has the warning signs." },
        { en: "Cleanup is hard work. Take breaks, drink water, and never run a generator or pressure washer indoors. Coming home to damage is upsetting; the {{mind}} section helps with that too." },
      ],
    },

    // ==================================================================
    { type: "h", id: "get-ready", text: { en: "Getting ready: start this week" } },
    {
      type: "p",
      text: {
        en: "You don't need to buy everything at once, and you don't need a bunker. Families who come through best are the ones with a written plan, a few days of the basics, and a few skills. Here are the first things to do, most of them free or cheap.",
      },
    },
    {
      type: "steps",
      items: [
        { en: "Write a family plan. Pick one out-of-town contact everyone texts. Pick two meeting places: one near home, one outside your neighborhood. Write the phone numbers on a card for every wallet and backpack, because phones die ({{communications}})." },
        { en: "Turn on emergency alerts on every phone, and sign up for your county or city alerts. Get a battery or hand-crank [[weather-radio|weather radio]]." },
        { en: "Store water: start with 3 days for each person, then work toward two weeks. For a family of four, two weeks is 56 gallons (about 212 liters) ({{water}})." },
        { en: "Buy 3 extra days of food your family already eats, plus a manual can opener." },
        { en: "Put a flashlight or headlamp by every bed, with spare batteries." },
        { en: "Make a first aid kit and a list of each person's medicines. Ask your doctor how to keep an extra supply of prescription medicines on hand ({{medical}})." },
        { en: "Test your [[smoke-alarm|smoke alarms]] and [[co-alarm|carbon monoxide alarms]]. Get a [[fire-extinguisher|fire extinguisher]]." },
        { en: "Find your main water valve, gas meter valve, and electric panel, and show every adult." },
        { en: "Keep at least half a tank of gas in the car." },
        { en: "Copy important papers (IDs, insurance, deeds, medical records) and keep them with some cash in small bills. Scan them onto a locked flash drive too; the next part shows how." },
        { en: "Sign up for a CPR and first aid class, and a Stop the Bleed class if one is near you." },
      ],
    },
    // ==================================================================
    { type: "h", id: "papers-drive", text: { en: "Your papers on a locked flash drive" } },
    {
      type: "p",
      text: {
        en: "Fire, flood, or a bag left behind can take your IDs, passports, and insurance papers. Copies make replacing them much faster, and they help you prove who you are, what you own, and what your family needs. FEMA suggests keeping paper copies in a fireproof and waterproof box, and electronic copies in a password-protected format on a removable flash drive. Scan everything, put it on a locked drive, and have at least two adults carry one, so the copies leave with the family even if the box doesn't.",
      },
    },
    {
      type: "list",
      items: [
        { en: "IDs and driver's licenses (both sides), and the photo page of every passport." },
        { en: "Birth and adoption certificates, marriage and divorce papers, Social Security cards, and military records." },
        { en: "Insurance policies with the agent's phone number, the deed or lease, and car titles and registrations." },
        { en: "Health insurance cards, each person's medical card and medicine list, and vaccination records ({{medical}})." },
        { en: "Wills, powers of attorney, and the last tax return. Bank and card contact numbers, not full account numbers." },
        { en: "Pet records: microchip numbers, ID tags, and vaccinations." },
        { en: "A recent, clear photo of every family member and pet, in case anyone gets separated." },
        { en: "Photos or a slow video of every room, closets and drawers open, for insurance claims." },
        { en: "The family plan: phone numbers, the out-of-town contact, and meeting places ({{communications}})." },
      ],
    },
    {
      type: "steps",
      items: [
        { en: "Scan or photograph each page flat, in daylight, with no shadows. Do both sides of cards. Zoom in and make sure every word and number can be read." },
        { en: "Give each file a plain name, like \"Passport - Dad\" or \"Car title - van\". Put them in a few folders: IDs, Insurance and home, Medical, Money, Pets, Photos." },
        { en: "Use an encrypted flash drive. The easiest kind for families has a keypad on the drive itself: you type a PIN to unlock it, and it opens on almost any computer with no special software. A plain drive locked with your computer's own encryption also works, but it may only open on the same kind of computer, so test it. A drive that only \"hides\" files is not locked." },
        { en: "Make at least two drives. Each of at least two adults carries one, on a keychain or in their [[go-bag]]. A third copy can go in the fireproof box or with a trusted relative out of town." },
        { en: "Pick a long PIN or password, not a birthday. Every adult who carries a drive must know it. Write it down and keep it away from the drives, for example sealed in an envelope with your out-of-town contact. A lost locked drive keeps your family's IDs safe from strangers; a forgotten password locks you out too." },
        { en: "Don't write your name or address on the drives. If one is lost, make a new one with a new PIN." },
        { en: "Test each drive on a computer and on a phone (with a USB adapter if needed) before you ever need it." },
        { en: "Update the drives once a year, when you check your kits, and whenever something changes: a new passport, a new baby, a new car. If a drive gives errors, replace it." },
      ],
    },
    {
      type: "warning",
      text: {
        en: "A copy is not a passport or ID. It will not get you across a border or onto a plane by itself, but it makes replacing the real one much easier. Keep paper copies too: with the power out, you may not have a working computer or a charged phone to open the drive.",
      },
    },
    {
      type: "p",
      text: {
        en: "Set up your family below once: who lives with you, their ages, and your pets. The {{water}}, {{food-storage|Food Storage}}, and {{calculators}} pages then use it to work out how much to store. It is saved only on this device.",
      },
    },
    { type: "calc", calc: "family" },

    // ==================================================================
    { type: "h", id: "plan", text: { en: "The plan: from 72 hours to 2 years" } },
    {
      type: "p",
      text: {
        en: "Each section ends with its own plan. This table puts them together. Go at your own pace; every step makes your family safer than the one before. The full shopping lists, by priority and by area, are in {{tools-kits|Tools and Kits}}.",
      },
    },
    {
      type: "table",
      caption: { en: "Getting ready, step by step." },
      head: [{ en: "When" }, { en: "Goal" }, { en: "Main jobs" }],
      rows: [
        [
          { en: "This week" },
          { en: "A plan on paper" },
          { en: "The free and cheap steps above: family plan, alerts, flashlights, alarms, find the shut-offs, half a tank of gas." },
        ],
        [
          { en: "This month" },
          { en: "72 hours covered" },
          { en: "3 days of water and food for everyone, the basic kit, a first aid kit, a radio, [[go-bag|go-bags]], copies of papers. A twin-bucket toilet kit in the bathroom." },
        ],
        [
          { en: "By 3 months" },
          { en: "Two weeks covered" },
          { en: "Two weeks of water and food. A second way to cook outdoors with 2 weeks of fuel. Two ways to make water safe. Walkie-talkies and a family radio plan. A first aid class. Period supplies for months, not days ({{menstrual-care|Menstrual Care}})." },
        ],
        [
          { en: "By 6 months" },
          { en: "Three months covered" },
          { en: "A 3-month layer of food you eat and rotate. A backup power choice (solar or a generator with a transfer switch). Stronger doors and locks. A first garden bed or buckets growing something." },
        ],
        [
          { en: "By 1 year" },
          { en: "Skills, not just stuff" },
          { en: "A year of dry staples if you have room. Seeds for two years. Rain barrels. A cage trap and fishing kit. A family library on paper. Everyone has cooked an outdoor meal, done a bucket flush, and practiced the plan." },
        ],
        [
          { en: "By 2 years" },
          { en: "Able to last" },
          { en: "A garden that feeds you in season and a cool place to store crops. Power that doesn't depend on stored gasoline. Neighbors who know each other and a neighborhood radio net. Children who can cook, treat water, and give first aid." },
        ],
      ],
    },

    // ==================================================================
    { type: "h", id: "special-needs", text: { en: "Babies, older adults, people with disabilities, and pets" } },
    {
      type: "p",
      text: {
        en: "Plan for the people who need the most help first. Older adults and people with medical needs should think about how they would manage if the power went out, if they had to stay home for two weeks or more, or if they had to leave.",
      },
    },
    {
      type: "list",
      items: [
        { en: "Babies: formula, bottles, and diapers for two weeks. Never water down formula ({{food-storage|Food Storage}}). Safe sleep in the cold ({{seasons}})." },
        { en: "Medical devices that need power: talk to the maker and your power company now, and plan a backup ({{power-light-sanitation|Power, Light, and Sanitation}})." },
        { en: "Glasses, hearing aid batteries, canes, and walkers: keep spares where you can grab them." },
        { en: "A support network: name two people who will check on each person who lives alone or needs help, and make sure they know the plan." },
        { en: "Pets: food and water for two weeks, a carrier, a leash, and a recent photo. Some shelters take only service animals, so plan ahead where pets can go ({{tools-kits|Tools and Kits}})." },
      ],
    },

    // ==================================================================
    { type: "h", id: "practice", text: { en: "Practice, so it isn't new" } },
    {
      type: "p",
      text: {
        en: "A plan nobody has practiced falls apart in the dark. Practice it in small, easy pieces, and make it a game with children.",
      },
    },
    {
      type: "list",
      items: [
        { en: "Twice a year, when the clocks change: test alarms, check flashlights and batteries, and practice the family plan. Have everyone text the out-of-town contact and meet at the meeting place." },
        { en: "Once a year: an evening with the main breaker on but every light and screen off. Use only flashlights, cook outside, and drink stored water. Write down what you missed." },
        { en: "Once a year: go through every kit, swap out old food, water, and medicines, and update the plan as your family changes. The check schedule is in {{tools-kits|Tools and Kits}}." },
        { en: "Teach one skill a month: shutting off the water main, a bucket flush, treating water, a first aid step, a meal on the camp stove." },
      ],
    },

    // ==================================================================
    { type: "h", id: "map", text: { en: "Where to find things in this guide" } },
    {
      type: "table",
      caption: { en: "Every section, and when to open it." },
      head: [{ en: "Section" }, { en: "Open it when" }],
      rows: [
        [{ en: "{{water}}" }, { en: "The taps stop, the water is unsafe, or you are storing water." }],
        [{ en: "{{food-storage|Food Storage}}" }, { en: "The power goes out with food in the fridge, or you are building a pantry." }],
        [{ en: "{{growing-food|Growing Food}}" }, { en: "You want food that keeps coming, even on rock or a slab." }],
        [{ en: "{{trapping|Trapping and Prey}}" }, { en: "Stored food is running low and you need protein." }],
        [{ en: "{{seasons}}" }, { en: "It is dangerously cold or hot, or you are driving in winter." }],
        [{ en: "{{power-light-sanitation|Power, Light, and Sanitation}}" }, { en: "The lights, the toilet, or the trash stop working." }],
        [{ en: "{{medical}}" }, { en: "Someone is hurt or sick and help is far away." }],
        [{ en: "{{mind}}" }, { en: "Fear, stress, grief, or family friction is wearing everyone down." }],
        [{ en: "{{home-defense|Home Defense}}" }, { en: "You want your home harder to break into, or someone is trying." }],
        [{ en: "{{tools-kits|Tools and Kits}}" }, { en: "You are shopping, or checking your kits." }],
        [{ en: "{{calculators}}" }, { en: "You need amounts for your family: water, food, fuel, generator size." }],
        [{ en: "{{menstrual-care|Menstrual Care}}" }, { en: "Period supplies are running out." }],
        [{ en: "{{bugging-out|Bugging Out}}" }, { en: "You may have to leave, on the road or on foot." }],
        [{ en: "{{communications}}" }, { en: "Phones are down and you need news or to reach family." }],
        [{ en: "{{cooking}}" }, { en: "You need to cook without power, or cook from dry staples." }],
      ],
    },
    {
      type: "p",
      text: {
        en: "Words with a dotted underline open the glossary: a drawing and a one-line explanation, so you never need the internet to look something up.",
      },
    },

    // ==================================================================
    { type: "source", title: "Build a Kit", publisher: "Ready.gov (FEMA)", url: "https://www.ready.gov/kit" },
    { type: "source", title: "Make a Plan (Ready Kids)", publisher: "Ready.gov (FEMA)", url: "https://www.ready.gov/kids/make-a-plan" },
    { type: "source", title: "Create Your Family Emergency Communication Plan (FEMA P-1094)", publisher: "FEMA / Ready.gov", url: "https://www.ready.gov/sites/default/files/2020-03/family-emergency-communication-planning-document.pdf" },
    { type: "source", title: "Evacuation", publisher: "Ready.gov (FEMA)", url: "https://www.ready.gov/evacuation" },
    { type: "source", title: "Preparing to Evacuate Your Home in Case of an Emergency (FY616)", publisher: "University of Florida IFAS Extension", url: "https://edis.ifas.ufl.edu/publication/FY616" },
    { type: "source", title: "Be Red Cross Ready preparedness guide", publisher: "American Red Cross" },
    { type: "source", title: "Disaster and Emergency Preparedness for Older Adults", publisher: "American Red Cross", url: "https://www.redcross.org/content/dam/redcross/get-help/how-to-prepare/Older_Adults_Disaster_Prep_1Pager_07272020.pdf" },
    { type: "source", title: "Recovering from Disaster", publisher: "Ready.gov (FEMA)", url: "https://www.ready.gov/recovering-disaster" },
    { type: "source", title: "Safety Guidelines: Returning Home After a Natural Disaster", publisher: "CDC", url: "https://www.cdc.gov/natural-disasters/safety/returning-home-after-natural-disaster.html" },
    { type: "source", title: "Protect Documents to Start Your Recovery if a Disaster Strikes", publisher: "FEMA", url: "https://www.fema.gov/press-release/20250122/protect-documents-start-your-recovery-if-disaster-strikes" },
    { type: "source", title: "Safeguard Critical Documents and Valuables", publisher: "FEMA / Ready.gov", url: "https://www.ready.gov/sites/default/files/2020-03/fema_safeguard-critical-documents-and-valuables_0.pdf" },
    { type: "source", title: "Financial Readiness in Times of Disaster", publisher: "Federal Trade Commission (FTC)", url: "https://consumer.ftc.gov/articles/0126-financial-readiness-times-disaster" },
    { type: "source", title: "Important Documents and Money", publisher: "Be Ready Utah (Utah Division of Emergency Management)", url: "https://beready.utah.gov/family-preparedness/12-areas-of-preparedness/important-documents-money" },
    { type: "source", title: "Downed Power Line Safety", publisher: "Electrical Safety Foundation International (ESFI)", url: "https://www.esfi.org/downed-power-line-electrical-safety-downed-and-dangerous/" },
  ],
};
