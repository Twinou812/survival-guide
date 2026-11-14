import type { Section } from "../types";

// Section 5: Trapping and Prey. Facts checked Nov 14, 2026 against the sources listed at the end.
// Safety numbers (cooking temperatures, trap-check times, scald temperature) come from
// USDA, CDC, and university extension pages. Do not round or "simplify" them.
// Scope (user decision): sourcing food close to a small family home. Knives over guns.
// Traps for prey, and how to clean different kinds of prey.

export const trapping: Section = {
  id: "trapping",
  number: 5,
  title: { en: "Trapping and Prey" },
  summary: { en: "Simple traps, fishing, and how to clean different kinds of small game safely." },
  blocks: [
    {
      type: "p",
      text: {
        en: "Meat from small animals, birds, and fish can add protein and fat when the store shelves are empty. Be honest about the numbers, though: a rabbit or a squirrel is one meal for one or two people, and many days the traps will be empty. Your stored food and your garden feed the family. Trapping and fishing add to them. See {{food-storage|Food Storage}} and {{growing-food|Growing Food}} first.",
      },
    },
    {
      type: "p",
      text: {
        en: "This section covers the animals most suburban families can actually reach, how to catch them, how to stay safe from the diseases they can carry, and how to clean and cook each kind.",
      },
    },

    // ------------------------------------------------------------------
    { type: "h", id: "first", text: { en: "Before you set any trap" } },
    {
      type: "list",
      items: [
        { en: "Laws come first. Trapping and hunting rules differ by state, country, and town, and many places need a license or a permit. In one U.S. state, for example, raccoons and squirrels can be trapped without a permit but rabbits cannot. Call your state wildlife agency now, while things are normal, and write down what is allowed." },
        { en: "Most traps here are built for emergencies. Some are illegal to use in normal times. Practice building them, then take them apart. Never leave a practice trap set." },
        { en: "Traps can hurt children and pets. Tell everyone in the family where every trap is. Keep traps away from play areas, and keep pets inside or on a leash near them." },
        { en: "Check every trap at least once every 24 hours. Many places require this by law, and it is the humane thing to do. Morning and evening is better." },
        { en: "Never trap or eat pets, and never take an animal that looks sick, acts strangely, or is found already dead." },
      ],
    },

    // ------------------------------------------------------------------
    { type: "h", id: "diseases", text: { en: "Staying safe from animal diseases" } },
    {
      type: "p",
      text: {
        en: "Wild animals carry germs and parasites that can make people very sick. A few simple habits stop almost all of them. Make these habits non-negotiable for everyone who handles game.",
      },
    },
    {
      type: "steps",
      items: [
        { en: "Wear [[disposable-gloves|disposable gloves]] every time you touch a trapped animal, skin it, or clean it. Rubber dish gloves work if you have nothing else; wash them well afterward." },
        { en: "Protect your eyes. Wear safety glasses, sunglasses, or ordinary eyeglasses while you skin and gut an animal. Blood and body fluids can spray or flick when you cut, pull skin, or rinse, and the eye is an easy way in for germs: tularemia, for example, can infect a person through a single splash in the eye, causing a painful, swollen eye and swollen glands. Glasses also stop bits of bone and stray drops of scalding water." },
        { en: "Do not touch your eyes, nose, or mouth while you work, and never rub your eyes with a glove. Do not eat, drink, or smoke while cleaning game." },
        { en: "Clean game outdoors or in a well-aired spot, on a surface you can scrub, away from where food is made." },
        { en: "Wash your hands with soap and water after you take the gloves off. Scrub knives, boards, and surfaces with hot soapy water." },
        { en: "Keep raw meat away from cooked food and food that will not be cooked." },
        { en: "Cook all wild meat all the way through, and check it with a [[food-thermometer|food thermometer]]. Color is not a reliable sign that meat is done." },
        { en: "If blood or fluid gets in an eye, rinse it right away with lots of clean water for several minutes, holding the eyelids open. Watch for redness, pain, or swelling over the next two weeks, and get medical care if they appear." },
      ],
    },
    {
      type: "table",
      caption: { en: "Main risks by kind of animal" },
      head: [{ en: "Animal" }, { en: "Main risk" }, { en: "How to stay safe" }],
      rows: [
        [
          { en: "Rabbits, hares, squirrels" },
          { en: "[[tularemia|Tularemia]] (\"rabbit fever\"), caught through skin, eyes, or mouth while skinning, or from undercooked meat" },
          { en: "Gloves always. Check the liver for spots. Cook to 160°F (71°C)." },
        ],
        [
          { en: "Squirrels, chipmunks, and other rodents in the western U.S." },
          { en: "Plague, spread by fleas and by handling infected animals" },
          { en: "Gloves, long sleeves, insect repellent. Do not handle wild rodents that are sick or dead." },
        ],
        [
          { en: "Raccoons, skunks, foxes, bats" },
          { en: "[[rabies|Rabies]]" },
          { en: "Leave skunks, foxes, and bats alone. Raccoons only with great care (see below). Never touch an animal that acts strangely. Birds and fish cannot get rabies." },
        ],
        [
          { en: "Raccoons" },
          { en: "Raccoon roundworm, from eggs in their droppings" },
          { en: "Stay away from [[raccoon-latrine|raccoon latrines]]. Keep children away from them." },
        ],
        [
          { en: "Wild birds" },
          { en: "Bird flu and food-poisoning germs" },
          { en: "Never take a bird that is sick or found dead. Gloves, and a mask and eye protection if you have them. Cook to 165°F (74°C)." },
        ],
        [
          { en: "Meat-eating and omnivore mammals (raccoon, opossum, fox, bear, wild pig)" },
          { en: "[[trichinellosis|Trichinellosis]], a worm that lives in the meat" },
          { en: "Cook to at least 160°F (71°C). Freezing, smoking, drying, and salting do not reliably kill it in wild meat." },
        ],
        [
          { en: "Fish" },
          { en: "Chemicals in polluted water; germs and parasites in raw fish" },
          { en: "Check local fish advisories. Cook to 145°F (63°C)." },
        ],
      ],
    },
    {
      type: "warning",
      text: {
        en: "If any wild mammal bites or scratches someone, wash the wound right away with soap and lots of running water for about 15 minutes, then get medical care as soon as you possibly can. Rabies can be prevented with shots after a bite, but once signs of illness start it is almost always fatal. See {{medical|Medical}}.",
      },
    },
    {
      type: "p",
      text: {
        en: "Tularemia signs come on suddenly: fever, chills, headache, and often a sore or ulcer where the germ got in, with swollen glands nearby. It is treated with antibiotics, so a person with these signs after handling a rabbit or squirrel needs a doctor. See {{medical|Medical}}.",
      },
    },

    { type: "h", id: "cook-temps", text: { en: "Safe cooking temperatures" } },
    {
      type: "table",
      caption: { en: "Cook until the thickest part reaches this temperature" },
      head: [{ en: "Meat" }, { en: "Temperature" }],
      rows: [
        [{ en: "Rabbit and other small game (squirrel, raccoon, opossum, groundhog)" }, { en: "160°F (71°C)" }],
        [{ en: "Venison and other wild game, whole cuts or ground" }, { en: "160°F (71°C)" }],
        [{ en: "Wild birds (pigeon, dove, duck, goose, any game bird)" }, { en: "165°F (74°C)" }],
        [{ en: "Fish" }, { en: "145°F (63°C), or until the flesh is no longer see-through and flakes easily with a fork" }],
        [{ en: "Leftovers, reheated" }, { en: "165°F (74°C)" }],
      ],
    },
    {
      type: "p",
      text: {
        en: "Wild meat is lean, so it dries out and toughens if cooked hard and fast. Stewing, braising, and slow simmering in a covered pot make it tender and easily reach a safe temperature. The {{food-storage|Food Storage}} section shows how to save fuel with a [[haybox]].",
      },
    },

    // ------------------------------------------------------------------
    { type: "h", id: "fat", text: { en: "Lean meat is not enough: you need fat" } },
    {
      type: "p",
      text: {
        en: "Rabbit, squirrel, and most wild meat is very lean. Explorers, trappers, and military survival manuals have long warned of [[protein-poisoning|\"rabbit starvation\"]]: people living on lean meat alone, with almost no fat or starch, get diarrhea, weakness, and a hunger that will not go away, even with full stomachs. There is little modern research on it, but the warning is old and consistent, and the fix is simple.",
      },
    },
    {
      type: "list",
      items: [
        { en: "Eat wild meat together with fat and starch: cooking oil, nuts, peanut butter, rice, beans, potatoes, flour." },
        { en: "Store extra cooking oil, shortening, or lard with your long-term food. Fat is the hardest thing to get from a garden or a trap." },
        { en: "Use the fattier parts of the animal too: the heart, the liver (if it has no spots), the kidneys, and the fat around them. Simmer bones for broth." },
        { en: "Fish, especially oily fish, and animals caught in the fall carry more fat than lean rabbits caught in late winter." },
      ],
    },

    // ------------------------------------------------------------------
    { type: "h", id: "what", text: { en: "What you can catch near home" } },
    {
      type: "table",
      caption: { en: "Common suburban prey" },
      head: [{ en: "Animal" }, { en: "Best way to catch" }, { en: "Notes" }],
      rows: [
        [
          { en: "Cottontail rabbits" },
          { en: "Cage trap; snare in an emergency" },
          { en: "Common at lawn and garden edges, most active at dawn and dusk. Very lean." },
        ],
        [
          { en: "Tree squirrels" },
          { en: "Cage trap near their trees or feeders" },
          { en: "Easy to bait with nuts. In the western U.S., plague risk; wear gloves and use repellent." },
        ],
        [
          { en: "Feral pigeons (rock pigeons), starlings, house sparrows" },
          { en: "Bird box trap or cage trap with grain" },
          { en: "Not protected by U.S. federal bird law, but check state and local rules. Never take sick birds." },
        ],
        [
          { en: "Fish" },
          { en: "Hook and line; minnow trap" },
          { en: "Often the best fat and protein near home. Check fishing rules and fish advisories." },
        ],
        [
          { en: "Grasshoppers, crickets" },
          { en: "By hand or with a net in early morning, when they are slow" },
          { en: "High in protein. Always cook. Not for people allergic to shellfish." },
        ],
        [
          { en: "Raccoons, opossums, groundhogs" },
          { en: "Large cage trap" },
          { en: "Higher risk: they bite hard, and raccoons carry rabies and roundworm. For experienced adults only." },
        ],
      ],
    },
    {
      type: "p",
      text: {
        en: "Do not eat rats or mice. They carry many diseases, and in an emergency many have eaten poison bait. Be wary of any animal from a place where poison bait or lawn chemicals were used.",
      },
    },
    {
      type: "p",
      text: {
        en: "Most native wild birds, including songbirds, robins, cardinals, and ducks, and their nests and eggs, are protected by law in the United States. Doves, ducks, and geese are game birds with seasons and limits. Rock pigeons, European starlings, house sparrows, and Eurasian collared-doves are not native and are not protected by the federal Migratory Bird Treaty Act. Learn to tell these birds apart before you need to.",
      },
    },

    // ------------------------------------------------------------------
    { type: "h", id: "sign", text: { en: "Where to set a trap: reading the signs" } },
    {
      type: "p",
      text: {
        en: "Traps work only where animals already go. Spend a few days watching before you set anything, and look for:",
      },
    },
    {
      type: "list",
      items: [
        { en: "[[game-trail|Game trails]]: narrow paths of flattened grass along fences, hedges, and the edges of brush. Rabbits use the same paths again and again." },
        { en: "Droppings: rabbits leave small, round, pea-sized pellets in piles. Squirrels leave scattered small oval pellets under their trees." },
        { en: "Feeding signs: clipped plants with a clean, slanted cut (rabbits), and piles of nutshells or chewed pine cones (squirrels)." },
        { en: "Holes under sheds, decks, and porches, and gaps in fences where animals squeeze through." },
        { en: "Tracks in mud, snow, or sand along the edges of water." },
      ],
    },
    {
      type: "p",
      text: {
        en: "Set traps along these routes, close to cover, where an animal would pass without changing its path. Narrowing a trail with sticks or brush on either side (so the easiest way through is the trap) works for both cage traps and snares.",
      },
    },

    // ------------------------------------------------------------------
    { type: "h", id: "cage-traps", text: { en: "Cage traps: the best first choice" } },
    {
      type: "p",
      text: {
        en: "A wire [[cage-trap|cage trap]] (also called a live trap or box trap) catches the animal alive, unharmed, inside a box. It is the safest trap for a family: it will not hurt a child's hand, a pet that wanders in can be let go, and it is legal in more places than other traps. Buy one or two now, sized for the animals near you, and learn to use them.",
      },
    },
    {
      type: "sketch",
      sketch: "cage-trap",
      caption: { en: "Cage trap: the door at the end stays up until the animal steps on the plate inside, then it drops and locks." },
    },
    {
      type: "table",
      caption: { en: "Cage trap sizes and baits" },
      head: [{ en: "Animal" }, { en: "Trap size, about" }, { en: "Baits that work" }],
      rows: [
        [{ en: "Squirrel, chipmunk" }, { en: "16 to 18 in long, 5 to 7 in high (40 to 45 by 13 to 18 cm)" }, { en: "Peanut butter, peanuts in the shell, sunflower seeds, corn" }],
        [{ en: "Rabbit" }, { en: "24 in long, 7 in high (60 by 18 cm)" }, { en: "Apple slices, carrots, lettuce, cabbage, brussels sprouts, or whatever they are eating in your garden" }],
        [{ en: "Pigeon and other small birds" }, { en: "Same as rabbit, or a bird box trap" }, { en: "Cracked corn, wheat, birdseed, bread crumbs" }],
        [{ en: "Raccoon, opossum, groundhog" }, { en: "32 in long, 10 to 12 in high (80 by 25 to 30 cm)" }, { en: "Marshmallows, sweet fruit, canned fish, corn; cantaloupe for groundhogs" }],
      ],
    },
    {
      type: "steps",
      items: [
        { en: "Wear gloves when you handle the trap and the bait, so it smells less of people." },
        { en: "Set the trap on flat, level ground along a trail or next to cover, so it cannot rock or tip. Press it into the soil a little and add a bit of grass or leaves to the floor." },
        { en: "Put the bait at the far end, on or behind the trigger plate, so the animal must step all the way in. A small trail of bait leading to the door helps." },
        { en: "Set the trigger as the label shows, and test it with a stick." },
        { en: "Check morning and evening. If you catch nothing in two or three days, move the trap or change the bait." },
        { en: "When you find an animal, throw a towel or blanket over the trap. Covered animals stay calmer and are easier to handle." },
        { en: "Let any animal you did not mean to catch go right away: open the door, step back, and let it leave on its own." },
      ],
    },

    // ------------------------------------------------------------------
    { type: "h", id: "box-trap", text: { en: "Improvised box trap with a figure-four trigger" } },
    {
      type: "p",
      text: {
        en: "If you have no cage trap, a wooden crate, laundry basket, or box can be propped up over bait with a [[figure-four-trigger|figure-four trigger]]: three notched sticks that hold the box up until an animal tugs the bait stick. The box drops and holds the animal alive underneath. Weigh the top with a brick or a rock so the animal cannot push it up.",
      },
    },
    {
      type: "sketch",
      sketch: "figure-four-trigger",
      caption: { en: "Figure-four trigger holding up a box. When the bait stick is pulled, the sticks collapse and the box falls." },
    },
    {
      type: "steps",
      items: [
        { en: "Cut three straight sticks about as thick as a finger: an upright post, a slanted lever, and a bait stick. The upright is about as tall as you want the box edge to rise; the other two are a little longer." },
        { en: "Flatten the top of the upright to a blunt wedge. Cut a square notch in it a little below the middle." },
        { en: "Cut a notch near one end of the lever to sit on top of the upright. Shape its other end to a flat point." },
        { en: "Cut a notch near one end of the bait stick to catch the point of the lever, and a square notch partway along that hooks onto the square notch in the upright. Sharpen the far end to hold the bait." },
        { en: "Fit them together as in the drawing, with the weight of the box resting on the end of the lever. It takes patience and practice to get the notches right. Practice at the kitchen table before you ever need it." },
      ],
    },
    {
      type: "warning",
      text: {
        en: "Deadfalls (a heavy rock or log dropped by the same trigger to crush the animal) are shown in military survival manuals. They can break a child's hand or kill a pet, and they are illegal in most places in normal times. Do not build one anywhere a child or pet could reach. A box that catches the animal alive is far safer for a family.",
      },
    },

    // ------------------------------------------------------------------
    { type: "h", id: "snares", text: { en: "Snares: emergency use only" } },
    {
      type: "p",
      text: {
        en: "A [[snare]] is a loop of thin wire or strong cord set over a trail. An animal walking through pushes its head into the loop, which tightens. Snares are cheap, light, and can be set in numbers, which is why survival manuals teach them. They are also illegal for most people in many places, and they cannot tell a rabbit from a cat or a small dog. Use them only when there is truly no other food, and never near homes where pets roam.",
      },
    },
    {
      type: "sketch",
      sketch: "simple-snare",
      caption: { en: "Simple snare on a rabbit trail. Sticks narrow the trail; the loop hangs from a cross-stick, and the wire is tied to a stake." },
    },
    {
      type: "steps",
      items: [
        { en: "Use thin, flexible brass or steel wire, picture-hanging wire, or strong cord. Make a small fixed loop (an eye) at one end, pass the other end through it to form a running noose, and tie the far end to a stake driven firmly into the ground or to a sturdy root." },
        { en: "For rabbits, open the loop to about the width of your fist (about 4 in or 10 cm) and hang it so the bottom of the loop is about a hand's width (3 to 4 in, 8 to 10 cm) above the ground." },
        { en: "Set it in a narrow part of a trail, or narrow the trail yourself with sticks pushed into the ground on both sides, so the only easy way through is the loop." },
        { en: "Hold the loop in place with a thin twig or a cross-stick so it hangs open and still. Do not use bait; the trail is the bait." },
        { en: "Set several, write down where each one is, and check all of them at least once a day. Remove them all when you stop trapping." },
      ],
    },

    // ------------------------------------------------------------------
    { type: "h", id: "birds", text: { en: "Catching birds" } },
    {
      type: "p",
      text: {
        en: "Feral pigeons live under bridges, on rooftops, and around grain, and they come readily to bait. A cage trap or a box trap with a figure-four trigger, baited with cracked corn or wheat and set where they already feed, will catch them. Scatter a little grain around the trap for a day or two before you set it, so they get used to it.",
      },
    },
    {
      type: "list",
      items: [
        { en: "Never take a bird that seems sick, sleepy, or unable to fly, or one found dead. Bird flu can spread to people from sick birds." },
        { en: "Wear gloves when handling birds, and a mask and eye protection if you have them while cleaning. Afterward, throw away the gloves and mask and wash your hands." },
        { en: "Pigeon droppings that pile up for years under roosts can hold fungus that causes lung illness when the dust is breathed in. Do not stir up old dry droppings; wet them down first." },
      ],
    },

    // ------------------------------------------------------------------
    { type: "h", id: "fishing", text: { en: "Fishing" } },
    {
      type: "p",
      text: {
        en: "Ponds, creeks, lakes, and drainage canals near suburbs often hold sunfish, bluegill, catfish, and carp. Fish are often the easiest wild food to get, and many carry more fat than wild rabbits. A small fishing kit costs little and weighs almost nothing; keep one in your {{tools-kits|kits}}.",
      },
    },
    {
      type: "list",
      items: [
        { en: "A simple kit: fishing line, small hooks (size 6 to 10 for panfish), a few split-shot sinkers, a bobber, and a spool of extra line. A pole can be any straight stick." },
        { en: "Bait: earthworms dug from damp soil, crickets, grasshoppers, bits of bread dough, corn kernels, or scraps from cleaning other fish." },
        { en: "Fish early morning and evening, near weeds, fallen logs, docks, and drop-offs." },
        { en: "Fishing usually needs a license, and limits apply. Learn the rules now." },
      ],
    },
    {
      type: "p",
      text: {
        en: "A [[minnow-trap|minnow trap]] catches small fish for bait or for frying whole. You can make one from a large plastic bottle: cut off the top just where it narrows, turn the top around, and push it back into the bottle so it makes a funnel. Tie or tape it in place, poke a few small holes for water to pass through, put bread or cracker crumbs inside, and sink it with a stone in shallow water, tied to the shore with a string. Fish swim in through the funnel and cannot find the way out. Check it every few hours. Minnow traps are illegal in some waters.",
      },
    },
    {
      type: "sketch",
      sketch: "bottle-minnow-trap",
      caption: { en: "Bottle minnow trap: the top is turned around into a funnel. Bait inside, a stone to sink it, a string to the shore." },
    },
    {
      type: "warning",
      text: {
        en: "Fish from polluted water can carry mercury, PCBs, and other chemicals that cooking does not remove. Every U.S. state publishes fish advisories saying which fish from which waters are safe to eat and how often. Look up the advisories for the waters near you now and write them down. Smaller, younger fish carry fewer chemicals than large old ones. Removing the skin and fat and letting fat drip away while cooking lowers some chemicals too.",
      },
    },

    // ------------------------------------------------------------------
    { type: "h", id: "insects", text: { en: "Insects" } },
    {
      type: "p",
      text: {
        en: "Grasshoppers and crickets are eaten by billions of people around the world and are rich in protein. They are easiest to catch in the cool early morning, when they move slowly, by hand or with a net swept through tall grass.",
      },
    },
    {
      type: "list",
      items: [
        { en: "Always cook insects. Wild insects eaten raw carry the most risk of germs and parasites. Roast, boil, or fry them until crisp." },
        { en: "Pull off the wings and the large back legs (the spines can stick in the throat), and the head if you like." },
        { en: "People allergic to shrimp, crab, or lobster may react to insects too. Try a very small amount first, or skip them." },
        { en: "Do not collect insects from lawns or fields that were sprayed, and avoid brightly colored, hairy, or bad-smelling insects, and any you cannot name." },
      ],
    },

    // ------------------------------------------------------------------
    { type: "h", id: "dispatch", text: { en: "Ending an animal's life quickly" } },
    {
      type: "p",
      text: {
        en: "If you trap an animal for food, you owe it a quick end. Do it calmly, out of sight of young children, and be sure before you begin. The American Veterinary Medical Association, which sets humane standards, accepts these methods when done correctly by a person who has learned them:",
      },
    },
    {
      type: "list",
      items: [
        { en: "Rabbits and squirrels: one hard, fast blow to the back of the head with a heavy stick or club, held firmly by the back legs, then make sure it is dead. A rabbit under about 2 pounds (1 kg) can also be killed by quickly stretching and breaking the neck, if you have been shown how." },
        { en: "Pigeons and other small birds: quickly stretching and breaking the neck, or removing the head with a sharp knife or hatchet in one firm stroke." },
        { en: "Fish: a sharp blow to the top of the head just behind the eyes, then cut the gills to bleed it." },
        { en: "Signs of death: no breathing, no heartbeat, and the eye does not blink when the surface is touched." },
      ],
    },
    {
      type: "p",
      text: {
        en: "Drowning a trapped animal is slow and is not a humane method. Larger animals such as raccoons are strong and dangerous in a trap and are hard to kill humanely by hand. If you cannot do it safely and quickly, let the animal go.",
      },
    },

    // ------------------------------------------------------------------
    { type: "h", id: "cleaning", text: { en: "Cleaning game: the basics for every animal" } },
    {
      type: "steps",
      items: [
        { en: "Gloves on and glasses on before you touch the animal. Lay out a clean work surface, a sharp knife, a bucket of clean water, a bag for scraps, and a cooler or pot for the meat." },
        { en: "Work quickly. Germs grow fast in a warm carcass. Remove the guts within an hour or so, sooner in hot weather." },
        { en: "Keep hair, feathers, and the contents of the guts off the meat. If guts are cut by accident, rinse the area well and cut away anything soiled." },
        { en: "Check the organs as you go. Normal liver is smooth and evenly dark red. Throw away the whole animal if you see white or yellowish spots on the liver or spleen, swellings, pus, or anything that looks wrong." },
        { en: "Rinse the meat in cold clean water, then cool it fast: into a cooler with ice, a pot of cold water, or the refrigerator, to 40°F (4°C) or colder." },
        { en: "Bag the scraps and either bury them deep, away from water and the garden, or double-bag them for the trash. Remains attract rats, raccoons, and stray dogs." },
      ],
    },
    {
      type: "sketch",
      sketch: "liver-check",
      caption: { en: "Healthy liver (left): smooth and evenly colored. Liver with pale spots (right): throw the whole animal away." },
    },

    // ------------------------------------------------------------------
    { type: "h", id: "rabbits", text: { en: "Cleaning a rabbit" } },
    {
      type: "p",
      text: {
        en: "Rabbit skin is thin and tears easily, so it comes off quickly by hand. Remember gloves and glasses: rabbits are the most common source of tularemia, and pulling the skin off can flick fluid toward your face.",
      },
    },
    {
      type: "steps",
      items: [
        { en: "Lay the rabbit on its belly. Pinch up a fold of skin in the middle of the back and make a small cut across it, through the skin only." },
        { en: "Hook your fingers into the cut and pull firmly in opposite directions: one hand toward the head, the other toward the tail. The skin peels off like two sleeves." },
        { en: "Work the skin off the back legs down to the feet, and the front legs down to the paws. Cut off the feet at the joints, the tail, and the head." },
        { en: "[[field-dressing|Gut]] the rabbit: turn it belly up, pinch up the belly skin and muscle near the hind legs, and make a small cut. Slide two fingers inside, lift, and cut up toward the ribs between your fingers, so the knife does not touch the guts." },
        { en: "Pull out everything inside. Check the liver for spots. Keep the heart, liver, and kidneys if they look healthy." },
        { en: "Cut through the pelvic bone between the back legs and remove the last of the gut and the bladder carefully, without spilling them." },
        { en: "Rinse, cool, and cut into pieces: two back legs, two front legs, and the back (the saddle)." },
      ],
    },
    {
      type: "sketch",
      sketch: "skinning-small-game",
      caption: { en: "Skinning a rabbit or squirrel: a short cut across the back, then pull the two halves of skin apart." },
    },
    {
      type: "sketch",
      sketch: "gutting-small-game",
      caption: { en: "Gutting: lift the belly wall with two fingers and cut between them, from the hind legs up to the ribs." },
    },

    { type: "h", id: "squirrels", text: { en: "Cleaning a squirrel" } },
    {
      type: "p",
      text: {
        en: "Squirrel skin is much tougher than rabbit skin and holds on tightly, so it takes more pulling. The same method works.",
      },
    },
    {
      type: "steps",
      items: [
        { en: "Wet the fur first so loose hair does not stick to the meat." },
        { en: "Cut through the skin across the middle of the back, and make the cut wide, around to both sides." },
        { en: "Work two fingers of each hand under the skin and pull hard in opposite directions, toward the head and toward the tail. It helps to stand on the tail or have a second person hold the back half." },
        { en: "Cut off the head, feet, and tail. Gut it the same way as a rabbit, and check the liver." },
        { en: "Rinse off any hair in cold running water. Cut into back legs, front legs, and back." },
        { en: "As a precaution, do not eat the brain or spinal cord of a squirrel or any other wild animal." },
      ],
    },
    {
      type: "p",
      text: {
        en: "Squirrels, especially older ones, are tough. Simmer them slowly in a covered pot until the meat pulls away from the bone.",
      },
    },

    { type: "h", id: "larger", text: { en: "Raccoons, opossums, and groundhogs" } },
    {
      type: "p",
      text: {
        en: "These animals are eaten in many places, but they carry more risk. Only an experienced adult should handle them, always with gloves.",
      },
    },
    {
      type: "list",
      items: [
        { en: "Never take one that acts strangely: out in daylight when it is normally out at night, very tame or very aggressive, stumbling, or drooling." },
        { en: "Skin them like large rabbits, with more knife work. Cut away all fat that smells strong." },
        { en: "Raccoons and groundhogs have small, waxy, bean-shaped glands under the front legs and along the back and thighs. Cut them out whole without cutting into them; they give meat a bad taste." },
        { en: "Cook to at least 160°F (71°C) to kill the trichinella worm. Freezing, smoking, or drying does not reliably kill it." },
      ],
    },

    // ------------------------------------------------------------------
    { type: "h", id: "cleaning-birds", text: { en: "Cleaning birds" } },
    {
      type: "p",
      text: {
        en: "Small birds such as pigeons are easiest to skin, keeping just the breast and legs. Most of the meat on a pigeon is the breast.",
      },
    },
    {
      type: "steps",
      items: [
        { en: "Gloves and glasses on, and a mask if you have one. Work outdoors." },
        { en: "Lay the bird on its back. Pull out a few feathers over the breastbone and pinch up the skin there. Tear or cut it open and peel the skin away from the whole breast, then off the legs." },
        { en: "To take only the breast: cut along one side of the breastbone and follow the bone down with the knife to free one side of the breast; repeat on the other side." },
        { en: "To keep the whole bird: cut off the head, wings at the first joint, and feet. Cut a small opening below the breastbone and pull out the insides." },
        { en: "Double-bag the feathers and all the remains, and throw them away or bury them deep." },
        { en: "Wash your hands well, and cook bird meat to 165°F (74°C)." },
      ],
    },
    {
      type: "sketch",
      sketch: "bird-breasting",
      caption: { en: "Breasting a bird: peel the skin off the breast, then cut along each side of the breastbone." },
    },
    {
      type: "p",
      text: {
        en: "To keep the skin (larger birds like ducks), [[scalding|scald]] the bird first to loosen the feathers: dip it in hot water, about 140°F (60°C), for 30 to 75 seconds, swishing it so the water gets down to the skin, then pull the feathers out against the way they lie. Test with a wing feather; if it slides out easily, it is ready. Use a thermometer: water that is too hot tears the skin.",
      },
    },

    // ------------------------------------------------------------------
    { type: "h", id: "cleaning-fish", text: { en: "Cleaning fish" } },
    {
      type: "steps",
      items: [
        { en: "Keep fish alive in a bucket of water or on a stringer in the water, or clean them and put them on ice right away. Dead fish spoil fast in warm weather." },
        { en: "To scale: hold the fish by the head and scrape from tail to head with the back of a knife or a spoon until the skin feels smooth. Catfish have no scales; skin them instead." },
        { en: "To gut: insert the knife point in the vent near the tail, belly up, and cut forward to just behind the gills. Pull out the insides, and scrape out the dark blood line along the backbone with a thumbnail or spoon." },
        { en: "Cut off the head behind the gills, or leave it for small panfish cooked whole." },
        { en: "To fillet bigger fish: cut behind the gill down to the backbone, turn the blade flat, and slice along the backbone toward the tail, keeping the knife against the bones. Turn over and repeat. Slide the knife between the skin and meat to remove the skin." },
        { en: "Rinse in cold clean water and keep cold until cooked. Cook to 145°F (63°C). Never eat freshwater fish raw." },
      ],
    },
    {
      type: "sketch",
      sketch: "fish-cleaning",
      caption: { en: "Fish: the gutting cut along the belly from vent to gills (bottom), and the fillet cut behind the gills and along the backbone (top)." },
    },
    {
      type: "p",
      text: {
        en: "Fish heads, skin, and bones make good broth, and guts make good bait or garden fertilizer if buried deep near (not under) plants. See {{growing-food|Growing Food}}.",
      },
    },

    // ------------------------------------------------------------------
    { type: "h", id: "keeping", text: { en: "Keeping the meat" } },
    {
      type: "list",
      items: [
        { en: "Fresh wild meat kept at 40°F (4°C) or colder should be cooked within 1 to 2 days." },
        { en: "With power, freeze it. Without power, cook it right away and eat it, or preserve it." },
        { en: "To dry meat into jerky safely, first heat it to 160°F (71°C) for game meat (165°F, 74°C, for birds), then dry it. The {{food-storage|Food Storage}} section explains how. Drying, salting, or smoking alone does not reliably kill the parasites in wild meat." },
        { en: "Pressure canning is the safe way to can meat. See {{food-storage|Food Storage}}." },
      ],
    },

    // ------------------------------------------------------------------
    { type: "h", id: "plan", text: { en: "Getting ready: 90 days to 2 years" } },
    {
      type: "table",
      caption: { en: "A step-by-step plan" },
      head: [{ en: "When" }, { en: "What to do" }],
      rows: [
        [
          { en: "Now (normal times)" },
          { en: "Learn your local trapping and fishing laws. Buy one or two cage traps, a fishing kit, a food thermometer, and a big box of disposable gloves. Look up the fish advisories for nearby waters. Watch your yard and neighborhood for game trails." },
        ],
        [
          { en: "First 90 days of a crisis" },
          { en: "Eat stored food first. Set cage traps where you have seen animals. Fish if you can. Practice the figure-four trigger. Store extra cooking oil and fat." },
        ],
        [
          { en: "6 months" },
          { en: "Keep a simple log of what each trap catches and where. Move traps that catch nothing. Learn to clean every animal quickly and safely. Teach a second adult." },
        ],
        [
          { en: "1 year" },
          { en: "Know the seasons: rabbits and squirrels are fattest in the fall, fish bite best in spring and fall, and insects are plentiful in late summer. Do not take every animal; leave breeding animals so there are more next year." },
        ],
        [
          { en: "2 years" },
          { en: "Trapping, fishing, and the garden work together: fish scraps feed the soil, garden scraps bait the traps, and traps protect the garden from rabbits and squirrels." },
        ],
      ],
    },

    // ------------------------------------------------------------------
    { type: "source", title: "Preventing Tularemia", publisher: "U.S. Centers for Disease Control and Prevention (CDC)", url: "https://www.cdc.gov/tularemia/prevention/index.html" },
    { type: "source", title: "Tularemia (prevention for hunters and trappers)", publisher: "Wisconsin Department of Health Services", url: "https://dhs.wisconsin.gov/node/37108" },
    { type: "source", title: "Tularemia fact sheet (exposure of skin, eyes, mouth, and throat while dressing game)", publisher: "Virginia Department of Health", url: "https://www.vdh.virginia.gov/epidemiology/epidemiology-fact-sheets/tularemia/" },
    { type: "source", title: "Tularemia: What to Look For", publisher: "Colorado Parks and Wildlife", url: "https://cpw.state.co.us/Documents/Wildlife-Health/Tularemia.pdf" },
    { type: "source", title: "Game care handout (tularemia spots on liver and spleen)", publisher: "University of Alaska Fairbanks Cooperative Extension Service", url: "https://oc4h.ucanr.edu/sites/default/files/2020-09/335722.pdf" },
    { type: "source", title: "Safe Minimum Internal Temperature Chart", publisher: "FoodSafety.gov / USDA (as reprinted by Cornell Cooperative Extension)", url: "https://www.foodsafety.gov/food-safety-charts/safe-minimum-internal-temperatures" },
    { type: "source", title: "Rabbit From Farm to Table", publisher: "USDA Food Safety and Inspection Service", url: "https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/meat/rabbit-farm-table" },
    { type: "source", title: "Hunters and Bird Flu", publisher: "CDC", url: "https://www.cdc.gov/bird-flu/risk-factors/hunters-and-bird-flu.html" },
    { type: "source", title: "Trichinellosis prevention (wild game)", publisher: "CDC", url: "https://www.cdc.gov/parasites/trichinellosis/" },
    { type: "source", title: "Trichinellosis fact sheet", publisher: "North Dakota Department of Health", url: "https://www.hhs.nd.gov/sites/www/files/documents/DOH%20Legacy/Trichinellosis.pdf" },
    { type: "source", title: "Bear: Properly Cook All Game", publisher: "Missouri Department of Conservation", url: "https://mdc.mo.gov/hunting-trapping/species/bear/bear-properly-cook-all-game" },
    { type: "source", title: "Animals and Rabies", publisher: "CDC", url: "https://www.cdc.gov/rabies/animals/" },
    { type: "source", title: "Rabies Prevention and Control", publisher: "CDC", url: "https://www.cdc.gov/rabies/prevention/" },
    { type: "source", title: "Rabies fact sheet (wound washing)", publisher: "World Health Organization (WHO)", url: "https://www.who.int/news-room/fact-sheets/detail/rabies" },
    { type: "source", title: "Histoplasmosis: causes and prevention", publisher: "CDC", url: "https://www.cdc.gov/histoplasmosis/" },
    { type: "source", title: "Preventing Raccoon Roundworm", publisher: "CDC", url: "https://www.cdc.gov/baylisascaris/prevention/index.html" },
    { type: "source", title: "Animal Exposure and Human Plague, United States, 1970–2017", publisher: "CDC, Emerging Infectious Diseases", url: "https://wwwnc.cdc.gov/eid/article/25/12/19-1081" },
    { type: "source", title: "List of Bird Species to Which the Migratory Bird Treaty Act Does Not Apply (2020)", publisher: "U.S. Fish and Wildlife Service, Federal Register", url: "https://www.govinfo.gov/content/pkg/FR-2020-04-16/html/2020-06782.htm" },
    { type: "source", title: "The Migratory Bird Treaty Act of 1918", publisher: "Maryland Department of Natural Resources", url: "https://dnr.maryland.gov/wildlife/pages/plants_wildlife/mbirdtreatyact.aspx" },
    { type: "source", title: "Considerations for Trapping Nuisance Wildlife with Box Traps (FNR-571-W)", publisher: "Purdue University Extension", url: "https://extension.purdue.edu/extmedia/FNR/FNR-571-W.PDF" },
    { type: "source", title: "Trapping Nuisance Wildlife", publisher: "Purdue University Forestry and Natural Resources Extension", url: "https://www.purdue.edu/fnr/extension/trapping-nuisance-wildlife/" },
    { type: "source", title: "Wire cage traps (UW372)", publisher: "University of Florida IFAS Extension", url: "https://edis.ifas.ufl.edu/publication/UW372" },
    { type: "source", title: "FM 21-76 Survival (traps, snares, figure-four and deadfall triggers, animals for food)", publisher: "U.S. Department of the Army (public domain)", url: "https://archive.org/download/MManuals/UsMarineCorps-Survival-Mcrp3-02f.pdf" },
    { type: "source", title: "Dietary Reference Intakes for Energy, Carbohydrate, Fiber, Fat, Fatty Acids, Cholesterol, Protein, and Amino Acids (protein upper limits and \"rabbit starvation\")", publisher: "Institute of Medicine, National Academies Press", url: "https://nap.nationalacademies.org/catalog/10490" },
    { type: "source", title: "How Do I Know if a Fish I Caught Is Contaminated?", publisher: "U.S. Environmental Protection Agency (EPA)", url: "https://www.epa.gov/choose-fish-and-shellfish-wisely/how-do-i-know-if-fish-i-caught-contaminated" },
    { type: "source", title: "Should I Eat the Fish I Catch? (EPA 823-F-14-002)", publisher: "EPA" },
    { type: "source", title: "Fish and Shellfish Advisories and Safe Eating Guidelines", publisher: "EPA", url: "https://www.epa.gov/choose-fish-and-shellfish-wisely/fish-and-shellfish-advisories-and-safe-eating-guidelines" },
    { type: "source", title: "Edible Insects: Future Prospects for Food and Feed Security (2013)", publisher: "Food and Agriculture Organization of the United Nations (FAO)", url: "https://www.fao.org/4/i3253e/i3253e.pdf" },
    { type: "source", title: "Looking at Edible Insects from a Food Safety Perspective (2021)", publisher: "FAO", url: "https://www.fao.org/documents/card/en/c/cb4094en" },
    { type: "source", title: "AVMA Guidelines for the Euthanasia of Animals: 2020 Edition", publisher: "American Veterinary Medical Association", url: "https://www.avma.org/resources-tools/avma-policies/avma-guidelines-euthanasia-animals" },
    { type: "source", title: "Home Processing of Poultry (scalding)", publisher: "University of Minnesota Extension", url: "https://extension.umn.edu/small-scale-poultry/home-processing-poultry" },
    { type: "source", title: "Handling Game and Fish (SW451)", publisher: "University of Idaho Extension", url: "https://www.uidaho.edu/-/media/UIdaho-Responsive/Files/Extension/4-H/Projects/SW451-handling-game-fish.pdf" },
  ],
};
