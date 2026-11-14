import type { Section } from '../types';

// Section 2: Water. Facts checked Nov 14, 2026 against the sources listed at the end.
// Numbers that matter for safety (bleach drops, boil times, pool shock ratio) are
// copied exactly from EPA guidance. Do not round or "simplify" them.

export const water: Section = {
  id: "water",
  number: 2,
  title: { en: "Water" },
  summary: { en: "How much you need, where it hides in your house, how to store it, and how to make it safe to drink." },
  blocks: [
    {
      type: "p",
      text: {
        en: "A person can live weeks without food but only a few days without water. Water comes first. The good news: a suburban house already holds more water than most people think, and making water safe takes only a pot, a cloth, and a bottle of plain bleach.",
      },
    },

    // ------------------------------------------------------------------
    { type: "h", id: "how-much", text: { en: "How much you need" } },
    {
      type: "p",
      text: {
        en: "Plan on at least 1 gallon (about 4 liters) per person per day. That covers drinking plus a little for cooking and washing. A resting adult drinks about three quarters of a gallon a day.",
      },
    },
    {
      type: "list",
      items: [
        { en: "Plan for more for children, nursing mothers, and anyone who is sick." },
        { en: "Very hot weather can double what each person needs." },
        { en: "Pets need water too. Count them when you plan." },
        { en: "Store at least two weeks' worth at home if you can. For a family of four, that is 56 gallons (about 212 liters)." },
      ],
    },
    {
      type: "p",
      text: {
        en: "Storing 90 days or more for a whole family takes hundreds of gallons, which most homes cannot hold. So the plan for the long run has three parts: water you store, water you can find, and ways to make found water safe. This section covers all three. The {{calculators}} section works out the numbers for your family.",
      },
    },
    {
      type: "warning",
      text: {
        en: "Do not ration drinking water. Drink what you need today, and work on finding more for tomorrow. Going short makes people sick and weak just when they need their strength. To make water last, stay cool, rest in the shade, and avoid salty food.",
      },
    },

    // ------------------------------------------------------------------
    { type: "h", id: "hidden-water", text: { en: "Water already in your house" } },
    {
      type: "p",
      text: {
        en: "If the taps stop, you still have water inside the house. If your tap water was safe before, this water is safe too, even if the idea seems odd.",
      },
    },
    {
      type: "list",
      items: [
        { en: "The water heater: usually 30 to 50 gallons (110 to 190 liters). This is the biggest store in most homes." },
        { en: "The pipes: a few gallons, drained from the lowest tap." },
        { en: "Ice cubes and any frozen water bottles." },
        { en: "Liquid in canned fruit and vegetables." },
        { en: "The toilet tank (the box behind the seat, never the bowl), only if the water is clear and no blue or colored cleaner has been used in it. Treat it before drinking." },
      ],
    },

    { type: "h", id: "shut-main", text: { en: "First: close the main water valve" } },
    {
      type: "p",
      text: {
        en: "If officials say the water supply is unsafe, or pipes in your area have broken, close your [[main-shutoff-valve|main water valve]]. This keeps dirty water from flowing into your pipes and water heater, and keeps the clean water you have from draining away.",
      },
    },
    {
      type: "p",
      text: {
        en: "Find it now, before you need it. It is usually where the water line enters the house: in the garage, a utility closet, under the kitchen sink, or near the water heater. Some homes only have a valve outside at the street in a small box in the ground, which needs a [[curb-key|curb key]].",
      },
    },
    {
      type: "sketch",
      sketch: "main-shutoff",
      caption: { en: "Two common main valves. A lever valve is closed when the handle is across the pipe. A round-handle valve closes by turning clockwise until it stops." },
    },

    { type: "h", id: "water-heater", text: { en: "Getting water out of the water heater" } },
    {
      type: "steps",
      items: [
        { en: "Turn off the power first. For an electric heater, switch off its breaker. For a gas heater, turn the gas control knob to OFF or PILOT. Heating an empty tank can ruin it or start a fire." },
        { en: "Let the water cool for a few hours if it was hot. Hot water from the drain can scald." },
        { en: "Close the cold water valve on the pipe at the top of the heater. This stops dirty water coming in from outside." },
        { en: "Open any hot water tap in the house. This lets air in so the water can flow out." },
        { en: "Put a clean pot or bucket under the [[drain-valve|drain valve]] near the bottom of the tank and open it slowly. A short clean hose on the valve makes this easier." },
        { en: "The first water may have rust or grit in it. Let it settle in the bucket, then pour the clear water off the top." },
        { en: "Close the drain valve between buckets. Do not turn the power back on until the tank is full again and water runs from a hot tap. If you turned off a gas pilot and are not sure how to relight it, have a professional do it." },
      ],
    },
    {
      type: "sketch",
      sketch: "water-heater-drain",
      caption: { en: "Close the cold valve at the top, open a hot tap somewhere in the house, then drain from the valve at the bottom into a clean container." },
    },
    {
      type: "warning",
      text: {
        en: "Use only the water heater that supplies your taps. Never drink from a home heating boiler or radiators. That water has chemicals in it.",
      },
    },

    { type: "h", id: "pipes", text: { en: "Getting water out of the pipes" } },
    {
      type: "steps",
      items: [
        { en: "Close the main water valve if you have not already." },
        { en: "Open the highest tap in the house, such as an upstairs bathroom sink. This lets air in." },
        { en: "Collect water from the lowest tap. That is often an outdoor spigot, a laundry sink, or a basement tap." },
      ],
    },
    {
      type: "sketch",
      sketch: "pipes-drain",
      caption: { en: "Open the highest tap to let air in. Water flows out of the lowest tap." },
    },

    // ------------------------------------------------------------------
    { type: "h", id: "storing", text: { en: "Storing water" } },
    {
      type: "p",
      text: {
        en: "Store-bought bottled water is the easiest choice. Keep it sealed in its original bottles, somewhere cool and dark, and use it by the date on the label.",
      },
    },
    {
      type: "p",
      text: {
        en: "To fill your own containers, use [[food-grade-container|food-grade containers]] with tight caps. Good choices are water jugs sold for camping, and blue water drums. Look for [[hdpe|HDPE]] plastic.",
      },
    },
    {
      type: "list",
      items: [
        { en: "Do not use milk or juice jugs. They are hard to clean and they break down and leak within months." },
        { en: "Never use a container that held chemicals, fuel, pesticides, or anything not meant for food." },
        { en: "Glass works but breaks. Keep it low and padded." },
      ],
    },
    {
      type: "steps",
      items: [
        { en: "Wash the container and cap with dish soap and water. Rinse well." },
        { en: "Sanitize: mix 1 teaspoon of plain, unscented liquid bleach into 1 quart (about 1 liter) of water. Pour it in, cap it, and shake so it touches every inside surface." },
        { en: "Pour that out and rinse with clean water." },
        { en: "Fill with clean tap water. If the water is to be drunk, fill it from a kitchen tap or a [[drinking-water-hose|drinking-water-safe hose]], not an ordinary garden hose." },
        { en: "Cap tightly. Label it \"Drinking water\" and write the date." },
        { en: "Replace water you stored yourself every six months. Use the old water for the garden or for flushing." },
      ],
    },
    {
      type: "list",
      items: [
        { en: "Store it cool, dark, and away from gasoline, paint, pesticides, and cleaning products. Fumes can pass through plastic over time." },
        { en: "Spread it out. Some in the house, some in the garage. If one spot is lost, you still have water." },
        { en: "Water weighs about 8 pounds per gallon (1 kilogram per liter). A full 55-gallon drum weighs more than 450 pounds. Put the drum where it will stay, then fill it. Set it on wood or a pallet, not straight on the ground." },
        { en: "Open and close drum caps with a [[bung-wrench|bung wrench]]. Get water out with a [[siphon-pump|siphon pump]]. Tipping a full drum is not possible by hand." },
      ],
    },
    {
      type: "sketch",
      sketch: "drum-siphon",
      caption: { en: "A water drum on a pallet. A hand siphon pump moves water into a smaller jug." },
    },
    {
      type: "sketch",
      sketch: "bung-wrench",
      caption: { en: "A bung wrench fits both cap sizes on a standard drum." },
    },
    {
      type: "p",
      text: {
        en: "When a storm or outage is coming: fill every clean pot, jug, and bottle. Fill the bathtubs too. Use bathtub water for flushing and washing. Only drink tub water if you used a [[bathtub-bladder|bathtub water bladder]] made for drinking water.",
      },
    },

    // ------------------------------------------------------------------
    { type: "h", id: "finding", text: { en: "Finding more water" } },
    {
      type: "p",
      text: {
        en: "Any water from outside your pipes must be treated before you drink it, cook with it, brush your teeth with it, or make baby formula with it. Some sources are good, some need extra care, and some should never be used.",
      },
    },
    {
      type: "table",
      caption: { en: "Water sources at a glance" },
      head: [{ en: "Source" }, { en: "Use it?" }],
      rows: [
        [{ en: "Rain" }, { en: "Yes, after treating. Collect it clean (see below)." }],
        [{ en: "Streams, rivers, lakes, springs" }, { en: "Yes, after treating. Collect upstream of roads, farms, and homes when you can." }],
        [{ en: "Ponds in subdivisions and parks (retention ponds)" }, { en: "Last choice. They collect runoff from roads and lawns. Treating kills germs but does not remove oil, fertilizer, or weed killer." }],
        [{ en: "Swimming pools and hot tubs" }, { en: "For flushing and washing only. Pool chemicals are not meant for drinking. Drink it only after [[distillation]]." }],
        [{ en: "Floodwater" }, { en: "No. It carries sewage and chemicals." }],
        [{ en: "Water that smells of fuel or chemicals, or has an oily shine" }, { en: "No. Treatment cannot make it safe." }],
        [{ en: "Waterbeds, radiators, heating boilers" }, { en: "No. They contain chemicals." }],
      ],
    },

    { type: "h", id: "rain", text: { en: "Collecting rainwater" } },
    {
      type: "p",
      text: {
        en: "A roof is a big water collector. One inch of rain on a small house roof can give hundreds of gallons. A [[rain-barrel|rain barrel]] under a downspout catches it.",
      },
    },
    {
      type: "list",
      items: [
        { en: "Let the first rain wash the roof. The first flow carries bird droppings, dust, and grit. A [[first-flush-diverter|first-flush diverter]] does this for you. Without one, wait a few minutes after the rain starts before collecting." },
        { en: "Cover the barrel with a fine screen to keep out leaves and mosquitoes. Empty and rinse open containers at least every 10 days if they are not screened." },
        { en: "Roofing, gutters, and old paint can add lead, copper, or other metals. Use rain from old roofs for washing and the garden, not drinking." },
        { en: "Always treat rainwater before drinking it. Keep it separate from your clean stored water." },
        { en: "Some places have rules about collecting rain. Check yours, and your HOA, before installing barrels." },
      ],
    },
    {
      type: "sketch",
      sketch: "rain-barrel",
      caption: { en: "Rain from the downspout fills the side pipe first, carrying away the dirtiest water. Then clean water flows into the screened barrel." },
    },

    // ------------------------------------------------------------------
    { type: "h", id: "making-safe", text: { en: "Making water safe to drink" } },
    {
      type: "p",
      text: {
        en: "Germs in water cause diarrhea and vomiting, which can kill through dehydration, especially in small children. Every method below kills or removes germs. None of them removes fuel, chemicals, salt, or metals, except [[distillation]].",
      },
    },
    {
      type: "steps",
      items: [
        { en: "Settle: let cloudy water sit in a bucket until the dirt sinks." },
        { en: "Strain: pour the clear top part through a clean cloth, paper towel, or coffee filter. Germ-killing works much better on clear water." },
        { en: "Kill the germs: boil it, or add bleach, or use one of the other methods below." },
        { en: "Store it in a clean, covered container. Pour it out; don't dip cups into it." },
      ],
    },
    {
      type: "sketch",
      sketch: "cloth-prefilter",
      caption: { en: "A clean cloth tied over a bucket strains out dirt before you boil or add bleach." },
    },

    { type: "h", id: "boil", text: { en: "Boiling (the surest method)" } },
    {
      type: "list",
      items: [
        { en: "Bring the water to a [[rolling-boil|rolling boil]] and keep it there for 1 minute." },
        { en: "Above 5,000 feet (1,000 meters), boil for 3 minutes." },
        { en: "Let it cool on its own with a lid on. Store in a clean covered container." },
        { en: "Boiled water tastes flat. A pinch of salt per quart or liter, or pouring it back and forth between two clean containers, helps." },
      ],
    },
    {
      type: "sketch",
      sketch: "rolling-boil",
      caption: { en: "A rolling boil: big bubbles that keep coming even when you stir." },
    },

    { type: "h", id: "bleach", text: { en: "Bleach" } },
    {
      type: "p",
      text: {
        en: "Use plain [[unscented-bleach|unscented liquid bleach]] whose label says 6% or 8.25% sodium hypochlorite. Never use scented, color-safe, or \"splash-less\" bleach, or bleach with added cleaners. Bleach slowly gets weaker: use bottles less than a year old, stored at room temperature. Count drops with a [[medicine-dropper|medicine dropper]].",
      },
    },
    {
      type: "table",
      caption: { en: "Drops of bleach to add" },
      head: [{ en: "Amount of water" }, { en: "6% bleach" }, { en: "8.25% bleach" }],
      rows: [
        [{ en: "1 quart or 1 liter" }, { en: "2 drops" }, { en: "2 drops" }],
        [{ en: "1 gallon" }, { en: "8 drops" }, { en: "6 drops" }],
        [{ en: "2 gallons" }, { en: "16 drops (1/4 teaspoon)" }, { en: "12 drops (1/8 teaspoon)" }],
        [{ en: "4 gallons" }, { en: "1/3 teaspoon" }, { en: "1/4 teaspoon" }],
        [{ en: "8 gallons" }, { en: "2/3 teaspoon" }, { en: "1/2 teaspoon" }],
      ],
    },
    {
      type: "steps",
      items: [
        { en: "Add the drops. Double the amount if the water is cloudy, colored, or very cold." },
        { en: "Stir and wait 30 minutes." },
        { en: "Smell it. It should have a slight bleach smell. If it doesn't, add the same dose again and wait 15 more minutes." },
        { en: "If the taste is too strong, pour it back and forth between two clean containers and let it stand a few hours." },
      ],
    },

    { type: "h", id: "pool-shock", text: { en: "Pool shock: for the long run" } },
    {
      type: "p",
      text: {
        en: "Liquid bleach loses strength within a year. Dry [[calcium-hypochlorite|calcium hypochlorite]] (sold as pool shock) keeps much longer if it stays sealed, cool, and dry. A small bag can treat thousands of gallons. It is a good item to store for a long emergency.",
      },
    },
    {
      type: "steps",
      items: [
        { en: "Make a stock solution: dissolve 1 heaping teaspoon (about 1/4 ounce, or 7 grams) of granular calcium hypochlorite in 2 gallons (about 7.5 liters) of water. Label this jar \"POISON: STOCK, DO NOT DRINK.\"" },
        { en: "To treat water, add 1 part stock to 100 parts water. That is about 1 pint of stock for every 12.5 gallons, or 10 milliliters of stock for every liter." },
        { en: "Stir and wait 30 minutes, the same as with bleach." },
      ],
    },
    {
      type: "warning",
      text: {
        en: "Pool shock is a powerful chemical. Mix it outside or with a window open, and wear eye protection. Buy plain calcium hypochlorite with no algae killer or other additives. Store it away from everything else, especially fuel, oil, and other pool chemicals: mixed, they can catch fire. It also rusts metal shelves.",
      },
    },

    { type: "h", id: "other-methods", text: { en: "Other ways to make water safe" } },
    {
      type: "list",
      items: [
        { en: "Water treatment tablets: follow the label exactly, because strength and waiting times vary. [[chlorine-dioxide|Chlorine dioxide]] tablets work against more germs than chlorine or iodine, but some need up to 4 hours." },
        { en: "Iodine: 5 drops of 2% tincture of iodine per quart or liter (10 drops if cloudy). Wait at least 30 minutes. Not for pregnant women, people with thyroid problems, or anyone allergic to iodine. Not for use beyond a few weeks." },
        { en: "Filters: see below. A filter alone may not be enough." },
        { en: "Sunlight: see below. Free, but slow." },
      ],
    },

    { type: "h", id: "filters", text: { en: "Water filters" } },
    {
      type: "p",
      text: {
        en: "A good camping filter pushes water through holes too small for most germs. The hole size is measured in [[micron|microns]]. Look for the word \"absolute\" on the label, which means no hole is bigger than the number shown.",
      },
    },
    {
      type: "list",
      items: [
        { en: "1 micron or smaller: removes the parasites Giardia and Cryptosporidium." },
        { en: "0.3 micron or smaller: also removes most bacteria. Most [[hollow-fiber-filter|hollow-fiber filters]] are 0.1 to 0.2 micron." },
        { en: "Viruses are much smaller and pass through most filters. Near towns, viruses come from sewage. So after filtering water that could have sewage in it, also boil it or add bleach." },
        { en: "A [[gravity-filter|gravity filter]] is the easiest for a family: hang the dirty bag and let it drip." },
        { en: "Let muddy water settle and strain it first. Silt clogs filters fast." },
        { en: "Most hollow-fiber filters are ruined if they freeze while wet, and you can't see the damage. In cold weather, keep the filter in a pocket or sleeping bag." },
        { en: "Store a spare filter. Filters with carbon also improve taste and remove some chemicals, but carbon alone does not kill germs." },
      ],
    },
    {
      type: "sketch",
      sketch: "gravity-filter",
      caption: { en: "A gravity filter: dirty water hangs high, flows down through the filter, and clean water collects below." },
    },

    { type: "h", id: "sodis", text: { en: "Sunlight in clear bottles" } },
    {
      type: "p",
      text: {
        en: "Sunlight kills germs in clear water. This method, called [[sodis|SODIS]], is used by millions of families around the world. It needs only clear plastic bottles and sun.",
      },
    },
    {
      type: "steps",
      items: [
        { en: "Use clear, unscratched [[pet-bottle|PET plastic bottles]] of 2 liters or smaller. Remove the labels." },
        { en: "Check the water is clear: stand the full bottle on a page of print and look down through it. If you can read the print, the water is clear enough. If not, settle and strain it first." },
        { en: "Fill the bottle three quarters, cap it, and shake for 20 seconds. Then fill it to the top." },
        { en: "Lay the bottles on their side in full sun, on a metal roof or sheet if you have one." },
        { en: "Leave them 6 hours in sun or light cloud. If more than half the sky is cloudy, leave them for 2 full days. In steady rain, this does not work; collect the rain instead." },
        { en: "Drink straight from the bottle. Pouring into other containers can add germs back." },
      ],
    },
    {
      type: "sketch",
      sketch: "sodis",
      caption: { en: "Clear bottles lying in full sun on a metal sheet." },
    },

    { type: "h", id: "distill", text: { en: "Distilling: when water has salt or chemicals" } },
    {
      type: "p",
      text: {
        en: "[[distillation|Distilling]] turns water to steam and catches the steam as clean water. It is the only home method that removes salt and metals. It is slow and uses a lot of fuel, so use it only when nothing else will do.",
      },
    },
    {
      type: "steps",
      items: [
        { en: "Fill a large pot about halfway." },
        { en: "Tie a clean cup to the lid handle so that when the lid is upside down, the cup hangs right side up inside the pot, above the water." },
        { en: "Put the lid on upside down and keep the water at a gentle boil. Steam hits the lid, turns back to water, runs to the lowest point, and drips into the cup. The longer it boils, the more you collect. Don't let the pot boil dry." },
        { en: "The water in the cup is distilled. Let it cool before handling." },
      ],
    },
    {
      type: "p",
      text: {
        en: "A [[solar-still|solar still]] does the same thing with sunlight and no fuel, but it gives very little, often less than a liter a day. Treat it as a backup, not a supply.",
      },
    },
    {
      type: "sketch",
      sketch: "solar-still",
      caption: { en: "A solar still from the side: a hole, a container in the middle, plastic stretched over it, and a small stone above the container." },
    },

    // ------------------------------------------------------------------
    { type: "h", id: "dehydration", text: { en: "Signs someone needs water now" } },
    {
      type: "list",
      items: [
        { en: "Thirst, dry mouth, dark yellow urine, or very little urine." },
        { en: "Headache, dizziness, tiredness, or confusion." },
        { en: "In babies and small children: fewer wet diapers, no tears when crying, sunken eyes, or a sunken soft spot on top of a baby's head." },
      ],
    },
    {
      type: "warning",
      text: {
        en: "A baby or child who is very sleepy, hard to wake, or not peeing is in danger. Give fluids in small sips, often, and get help if any can be reached. Diarrhea and vomiting drain water fast. The {{medical}} section shows how to make a rehydration drink.",
      },
    },

    { type: "h", id: "stretch", text: { en: "Making water go further" } },
    {
      type: "list",
      items: [
        { en: "Wash hands with a small cup of water and soap over a basin, and save that water." },
        { en: "Use washing water and bathtub water to flush. Pour a bucket quickly into the bowl. Do not drink [[greywater]]." },
        { en: "Wipe dishes clean before washing so less water is needed. Wash them all at once in one basin." },
        { en: "Water the garden with used water from washing, as long as it has no harsh cleaners." },
        { en: "See {{power-light-sanitation}} for toilets and hygiene when the water is off." },
      ],
    },

    { type: "h", id: "long-run", text: { en: "Planning for 90 days to 2 years" } },
    {
      type: "list",
      items: [
        { en: "Keep two weeks of drinking water stored, and rotate it every six months." },
        { en: "Have at least two ways to make water safe that need no store: for example, pool shock and a gravity filter, plus a pot for boiling." },
        { en: "Keep a spare filter and a fresh bottle of bleach. Write the date on the bleach when you buy it." },
        { en: "Set up rain barrels with a first-flush diverter and screens before you need them." },
        { en: "Know where the nearest streams and ponds are, and which ones are downhill from roads or farms." },
        { en: "Find your main water valve, your water heater's drain, and your lowest tap today. Practice once so everyone in the family knows how." },
      ],
    },

    // ------------------------------------------------------------------
    { type: "source", title: "Water", publisher: "Ready.gov (FEMA)", url: "https://www.ready.gov/water" },
    { type: "source", title: "Food and Water in an Emergency", publisher: "FEMA and American Red Cross", url: "https://www.fema.gov/pdf/library/f&web.pdf" },
    { type: "source", title: "Emergency Disinfection of Drinking Water", publisher: "U.S. Environmental Protection Agency", url: "https://www.epa.gov/ground-water-and-drinking-water/emergency-disinfection-drinking-water" },
    { type: "source", title: "How to Find Clean Water in an Emergency", publisher: "U.S. Centers for Disease Control and Prevention (CDC)", url: "https://www.cdc.gov/water-emergency/about/how-to-find-clean-water-in-an-emergency.html" },
    { type: "source", title: "A Guide to Drinking Water Treatment and Sanitation for Backcountry and Travel Use", publisher: "CDC", url: "https://www.cdc.gov/healthywater/drinking/travel/backcountry_water_treatment.html" },
    { type: "source", title: "Rainwater Collection", publisher: "CDC", url: "https://www.cdc.gov/healthywater/drinking/private/rainwater-collection.html" },
    { type: "source", title: "SODIS Method", publisher: "Eawag (Swiss Federal Institute of Aquatic Science and Technology)", url: "https://www.sodis.ch" },
  ],
};
