import type { Section } from "../types";

// Section 13: Menstrual Care. Facts checked Nov 14, 2026 against the sources listed at the end.
// Numbers that should not be "simplified": tampons changed every 4 to 8 hours, never more
// than 8 (FDA); heavy bleeding = soaking a pad or tampon every hour for several hours, clots
// the size of a quarter or larger, periods longer than 7 days (CDC); soak used cloth pads
// in cold water about 15 minutes (IFRC); at least 6 manufactured reusable pads or 8 cloth
// pieces per person (IFRC minimum kit).
//
// Rules for this section (from the build plan): no prescription medicine content;
// remedies labeled Well-supported / Traditional, limited evidence / Unproven; be honest
// about the "periods attract bears" idea (little support for black or grizzly bears).

export const menstrualCare: Section = {
  id: "menstrual-care",
  number: 13,
  title: { en: "Menstrual Care" },
  summary: { en: "Supplies that last, making reusable pads, washing, and staying healthy." },
  blocks: [
    {
      type: "p",
      text: {
        en: "Periods do not stop for an emergency. In a long one, store-bought pads and tampons run out, water for washing is short, and privacy is hard to find. Stress can also make periods early, late, heavier, or missing. This section covers supplies that last for years, how to make cloth pads from things already in the house, how to wash and dry them safely with little water, how to throw things away without drawing animals, how to ease cramps, and the warning signs that need real medical help.",
      },
    },
    {
      type: "p",
      text: {
        en: "Plan for everyone in the house who has periods now or may start soon. Girls can get their first period years before you expect it, so talk with them before it happens and put a small kit in their go-bag and school bag. Plan too for anyone near menopause, whose bleeding can come at odd times.",
      },
    },

    // ==================================================================
    { type: "h", id: "stock-ahead", text: { en: "Stock ahead: supplies that last" } },
    {
      type: "p",
      text: {
        en: "The best plan is to stop depending on supplies that run out. A [[menstrual-cup|menstrual cup]] or a set of [[cloth-pad|reusable cloth pads]] can last for years. Buy them now and use them for a few cycles in normal times, so nobody is learning a new product in the middle of a crisis.",
      },
    },
    {
      type: "table",
      caption: { en: "Period products compared for a long emergency" },
      head: [{ en: "Product" }, { en: "How long it lasts" }, { en: "Good for" }, { en: "Watch out for" }],
      rows: [
        [{ en: "Menstrual cup (silicone)" }, { en: "Many brands say up to 10 years with care; replace if it cracks, tears, or turns sticky" }, { en: "Very little laundry, very little water, nothing to throw away" }, { en: "Takes practice; must be boiled between periods; ask a doctor first if you have an IUD" }],
        [{ en: "Reusable cloth pads" }, { en: "Several years with care" }, { en: "Anyone, including young girls and people who do not want an internal product" }, { en: "Needs soap, water, and a place to dry them fully" }],
        [{ en: "Period underwear" }, { en: "About as long as other underwear" }, { en: "Light days, nights, and backup" }, { en: "Slow to dry; same washing as cloth pads" }],
        [{ en: "Disposable pads" }, { en: "Years in a sealed, dry package" }, { en: "Easy; good for the first weeks and for backup" }, { en: "Run out; bulky to store; trash must be handled like food waste" }],
        [{ en: "Tampons" }, { en: "Years in a sealed, dry package" }, { en: "Short trips, swimming" }, { en: "Run out; single use only; toxic shock risk if left in too long" }],
      ],
    },
    {
      type: "list",
      items: [
        { en: "Reusable pads: the Red Cross and Red Crescent minimum for one person is 6 well-made reusable pads, or 8 pieces if they are plain cotton cloth. More pads means less washing, so 10 to 15 per person is more comfortable, plus 2 or 3 thicker night pads." },
        { en: "Extra underwear: at least 3 pairs per person just for period days, in dark colors." },
        { en: "A small lidded bucket used only for soaking pads, never for food or drinking water." },
        { en: "Bar soap or laundry soap, a clothesline and pins, zip bags, and a small waterproof pouch for carrying used pads." },
        { en: "Pain relief from the medicine list in {{medical}}, and a hot water bottle." },
        { en: "Keep a few packs of disposable pads too, even if you switch to reusables. They are useful when there is no water to wash, when someone is sick, and for a girl's first period." },
      ],
    },
    {
      type: "warning",
      text: {
        en: "Never make an improvised tampon from cotton balls, rags, paper, or sponges, and never reuse a tampon. Anything put inside the body that was not made for it can cause infection and [[toxic-shock-syndrome|toxic shock syndrome]]. The FDA has not cleared any reusable tampon and advises against them. Improvised products should go outside the body, as pads.",
      },
    },

    // ==================================================================
    { type: "h", id: "make-pads", text: { en: "Making reusable pads from household cloth" } },
    {
      type: "p",
      text: {
        en: "A cloth pad is just a few layers of soft, absorbent cotton held in the underwear. You can make a simple one with no sewing in a minute, or sew a better one in about an hour by hand. Use cloth that is clean and already washed: cotton flannel (old flannel sheets, pajamas, shirts), old cotton towels, cotton t-shirts, or cloth diapers. Avoid polyester and nylon for the layers that touch skin or soak up blood; they do not absorb well and can rub.",
      },
    },
    { type: "h", id: "no-sew-pad", text: { en: "No-sew pad (fastest)" } },
    {
      type: "steps",
      items: [
        { en: "Cut a piece of cotton flannel or t-shirt cloth about 12 by 12 inches (30 by 30 cm)." },
        { en: "Fold it in thirds one way, then in half or thirds the other way, to make a thick strip about as wide as the crotch of the underwear." },
        { en: "Lay it in clean, snug underwear. Snug underwear holds it in place; loose underwear lets it slide." },
        { en: "For a heavy day, fold a small hand towel the same way, or stack two folded pieces." },
        { en: "Change it every 3 to 6 hours, or sooner if it feels wet." },
      ],
    },
    { type: "sketch", sketch: "no-sew-pad", caption: { en: "No-sew pad: a square of cotton cloth, folded into a thick strip, laid in the crotch of snug underwear." } },
    { type: "h", id: "sewn-pad", text: { en: "Sewn pad with wings" } },
    {
      type: "steps",
      items: [
        { en: "Make a paper pattern: trace around a store-bought pad with wings, or draw a long oval about 9 to 10 inches (23 to 25 cm) long and 3 inches (7 to 8 cm) wide, with two wings sticking out from the middle so the full width there is about 7 inches (18 cm). Make night pads 11 to 13 inches (28 to 33 cm) long." },
        { en: "Cut two pieces of the full pad shape: a top piece of soft cotton flannel and a bottom piece. For the bottom, use flannel or fleece, or a waterproof fabric if you have one (see below)." },
        { en: "Cut the absorbent core: 3 to 4 layers of flannel or 1 to 2 layers of old towel, in a narrow oval that fits inside the pad but not into the wings, about 7 inches long and 2½ inches wide (18 by 6 cm)." },
        { en: "Stitch the core layers onto the wrong side of the top piece, all around the edge and once down the middle, so they stay flat in the wash." },
        { en: "Put the top and bottom pieces together with their good sides facing each other. Sew all the way around about ¼ inch (6 mm) from the edge, leaving a 2-inch (5 cm) gap on one straight side." },
        { en: "Turn it right side out through the gap. Push the edges out flat with a finger or the blunt end of a pencil." },
        { en: "Sew around the whole pad once more, close to the edge. This closes the gap and keeps the layers from shifting." },
        { en: "Add a closure to the wings: a sew-on snap, a button and a small slit, or simply a safety pin. The wings wrap around the underwear and fasten underneath." },
        { en: "Wash and dry the new pad before using it. Washing first makes cotton soak up more." },
      ],
    },
    {
      type: "list",
      items: [
        { en: "Layer order, from skin outward: soft flannel top, absorbent core, then backing. The soft side always faces up." },
        { en: "Hand sewing works fine. Use a small backstitch (each stitch goes back to meet the last one), which is strong and does not pull apart." },
        { en: "Waterproof backing is optional. Good choices are [[pul-fabric|PUL fabric]] (sold for cloth diapers), polar fleece (resists leaks and still breathes), or nylon cut from an old rain jacket. Do not put plastic bags or shower curtain directly against skin; they trap heat and sweat and can cause rashes." },
        { en: "Make different sizes: thin liners for light days, regular pads, and longer, thicker night pads." },
      ],
    },
    { type: "sketch", sketch: "sewn-cloth-pad", caption: { en: "Sewn pad with wings: the dashed line inside shows where the absorbent core sits; a snap on each wing fastens under the underwear. At the right, the layers stacked: soft top, core, backing." } },

    // ==================================================================
    { type: "h", id: "wear-and-change", text: { en: "Wearing and changing" } },
    {
      type: "list",
      items: [
        { en: "Change cloth pads every 3 to 6 hours during the day, at least three times a day, and sooner if they feel damp. A damp pad against the skin can cause itching and infection." },
        { en: "Wash hands with soap and water before and after changing. If water is short, use hand sanitizer before and soap and water as soon as you can (see {{power-light-sanitation}})." },
        { en: "Never share pads, even washed ones." },
        { en: "Carry used pads in a small waterproof pouch or zip bag until you can soak them. Fold the pad with the used side inside and snap the wings around it." },
        { en: "Menstrual cups: wash hands, empty, rinse, and put back as the package says. Many say to empty at least every 12 hours, more often on heavy days. If you have no clean water to rinse it, wipe it with clean toilet paper or a clean cloth and rinse it properly at the next chance." },
        { en: "Tampons: use the lowest absorbency that works, change every 4 to 8 hours, never leave one in more than 8 hours, and use a pad overnight if you might sleep longer than that." },
      ],
    },

    // ==================================================================
    { type: "h", id: "washing", text: { en: "Washing and drying cloth pads" } },
    {
      type: "p",
      text: {
        en: "Cloth pads are only safe when they are cleaned with soap and dried completely. The hardest part in an emergency is usually drying, not washing: rainy weather, cold rooms, and the wish to keep them out of sight can lead people to wear pads that are still damp. Plan a drying spot now.",
      },
    },
    {
      type: "steps",
      items: [
        { en: "Rinse or soak first in COLD water. Hot water sets blood stains. Soak used pads in the lidded soaking bucket for about 15 minutes, or up to a day if you can change the water." },
        { en: "Wash with soap. Rub bar soap into the stained side and scrub the pads against each other or with a small brush. Rinse until the water runs clear." },
        { en: "Do a final rinse in clean water. Use your cleanest water for this last rinse; the soak water can be second-use water." },
        { en: "Dry completely, in sunlight if you can. Sun helps kill germs and fades stains. Hang them unfolded with the absorbent side out." },
        { en: "If you must dry them inside, hang them near a safe heat source or in the warm room, never touching a heater or flame. Turn them over so both sides dry. Feel the thickest part: if it is cool or damp at all, it is not dry." },
        { en: "Store clean, fully dry pads in a clean cloth bag or box, away from used ones." },
      ],
    },
    { type: "sketch", sketch: "pad-drying-line", caption: { en: "Dry pads unfolded in the sun. For privacy, a thin cloth draped over the line still lets air through." } },
    {
      type: "list",
      items: [
        { en: "Wash period underwear the same way, separate from other laundry when water is short." },
        { en: "Boiling is not needed for pads in normal use, but if someone has had an infection, or pads were stored damp and smell musty, boil them for a few minutes in a pot kept for that job, then dry them fully." },
        { en: "Do not use bleach on every wash. It weakens cotton and can irritate skin. Mildew-spotted pads are better thrown away." },
        { en: "Pour used soak and wash water into a working toilet or drain. If there is none, pour it into a small hole well away from wells, streams, and the vegetable garden, and cover it with soil. Do not pour it into the toilet buckets." },
        { en: "Privacy matters. If drying pads in the open bothers someone, dry them on a line inside a bathroom or under a light, thin cloth (a pillowcase draped over them still lets air through). Do not let embarrassment lead to wearing damp pads." },
        { en: "Replace pads that stay stained, smell after washing, or have thin, worn spots." },
      ],
    },
    { type: "h", id: "cup-care", text: { en: "Caring for a menstrual cup" } },
    {
      type: "steps",
      items: [
        { en: "Before the first use, and at the end of each period, boil the cup in plenty of water for 5 to 7 minutes (or as the package says). Use a pot of water deep enough that the cup does not touch the bottom, and do not let the pot boil dry." },
        { en: "During the period, wash it with clean water and mild, unscented soap each time you empty it, and rinse well. Soap left on it can irritate." },
        { en: "Let it dry and store it in a breathable cloth bag, not a sealed plastic box." },
        { en: "Replace it if it cracks, tears, gets sticky or chalky, or keeps smelling after boiling." },
      ],
    },

    // ==================================================================
    { type: "h", id: "low-water", text: { en: "Staying clean with little water" } },
    {
      type: "list",
      items: [
        { en: "Wash the outside of the genital area once or twice a day with clean water, front to back. Plain water is enough. Never wash inside the vagina, and do not use soap, perfumes, herbs, or wipes inside; the vagina cleans itself, and washing inside raises the risk of infection." },
        { en: "A small cup or squeeze bottle of clean water works when there is no shower. Use your own towel or cloth, and wash it with the pads." },
        { en: "Change into clean underwear every day if you can. If you cannot, at least change the pad more often." },
        { en: "Unscented baby wipes are handy for the outside skin when water is very short, but they are trash, not something to flush." },
        { en: "Wipe front to back after using the toilet." },
      ],
    },

    // ==================================================================
    { type: "h", id: "disposal", text: { en: "Throwing things away without drawing animals" } },
    {
      type: "p",
      text: {
        en: "Here is the honest answer about bears and periods. A Yellowstone National Park bear biologist reviewed the studies and found no evidence that grizzly or black bears are drawn to menstrual odors more than other smells. In one test, free-roaming black bears ignored used tampons, and a study of hundreds of grizzly attacks found no link to periods. Polar bears are the exception: they did show interest in used tampons. Evidence label: the idea that periods attract black or grizzly bears is Unproven.",
      },
    },
    {
      type: "p",
      text: {
        en: "What does draw animals (bears, raccoons, dogs, rats) is trash that smells, including used pads and tampons and especially food scraps. So treat used disposable products like food waste: sealed and kept where animals cannot get them.",
      },
    },
    {
      type: "steps",
      items: [
        { en: "Reuse first. Every cloth pad or cup you use is one less thing to throw away." },
        { en: "Wrap each used disposable pad or tampon in its wrapper or in toilet paper." },
        { en: "Put it in a bag, then into a second bag, and close both. Keep these in a lidded can with the rest of the household trash, outside and latched, the same way you store other smelly trash." },
        { en: "Never flush pads, tampons, or wipes, even when the toilet works. They block pipes and septic systems. Never put them in the toilet buckets (see {{power-light-sanitation}})." },
        { en: "Burning: only in a very hot fire, outdoors, and only if burning is allowed where you live. A cool fire leaves a half-burned, smelly lump that animals dig for. Never burn them in an indoor stove or fireplace." },
        { en: "Do not bury them. Yellowstone's bear biologists warn that animals can smell buried pads and tampons and dig them up, and the plastic in them does not break down. Away from home, the Leave No Trace rule is to pack them out in a sealed bag and handle them with the food trash." },
      ],
    },

    // ==================================================================
    { type: "h", id: "pain-relief", text: { en: "Easing cramps and pain" } },
    {
      type: "p",
      text: {
        en: "Cramps are common, usually start around the first day of the period, and ease over two or three days. Several simple things help, and they can be used together.",
      },
    },
    {
      type: "table",
      caption: { en: "Help for period cramps, labeled by evidence" },
      head: [{ en: "What to try" }, { en: "How" }, { en: "Evidence" }, { en: "Cautions" }],
      rows: [
        [{ en: "Heat" }, { en: "Hot water bottle (or a closed bottle of hot water wrapped in a towel) on the lower belly or lower back; warm bath or sponge bath" }, { en: "Well-supported" }, { en: "Wrap it in a towel; never sleep on a heat source; check skin often to avoid burns." }],
        [{ en: "Ibuprofen or naproxen (over the counter)" }, { en: "Start at the first sign of cramps or bleeding and follow the label" }, { en: "Well-supported" }, { en: "Take with food. Not for people with stomach ulcers, kidney disease, bleeding problems, or aspirin-sensitive asthma." }],
        [{ en: "Acetaminophen (over the counter)" }, { en: "Follow the label" }, { en: "Helps some people; usually weaker than ibuprofen for cramps" }, { en: "Count every product that contains it; too much harms the liver." }],
        [{ en: "Movement" }, { en: "Walking, stretching, light chores; 20 to 30 minutes" }, { en: "Traditional, limited evidence (small studies, but results point to real help)" }, { en: "Safe for almost everyone." }],
        [{ en: "Ginger" }, { en: "Tea from fresh ginger, or capsules, during the first days" }, { en: "Traditional, limited evidence" }, { en: "May add to bleeding risk with blood thinners." }],
        [{ en: "Other herbs (chamomile, fennel, cinnamon, dill, valerian)" }, { en: "Teas" }, { en: "Unproven" }, { en: "Warm tea is comforting and safe for most people; don't count on it for pain." }],
      ],
    },
    {
      type: "p",
      text: {
        en: "Aspirin also eases cramps, but never give it to children or teenagers (see {{medical}}). Write down each dose and the time you gave it. If cramps are so bad that a person cannot get out of bed, keep getting worse cycle after cycle, or began only recently in an adult, a doctor should check for a cause once help is available.",
      },
    },

    // ==================================================================
    { type: "h", id: "warning-signs", text: { en: "Warning signs that need help" } },
    {
      type: "warning",
      text: {
        en: "TOXIC SHOCK SYNDROME is rare but can kill. Watch for it in anyone using a tampon or cup, or soon after a period. Signs: sudden high fever (often 102°F / 39°C or more), vomiting or diarrhea, a rash that looks like sunburn, dizziness or fainting when standing up, muscle aches, confusion. Take out the tampon or cup right away and get emergency help. While waiting, treat for {{medical|shock}}: lay the person down, keep them warm, and give sips of drink only if help is many hours away.",
      },
    },
    {
      type: "list",
      items: [
        { en: "Heavy bleeding: soaking through one or more pads or tampons every hour for several hours in a row, needing to double up pads, passing clots the size of a quarter (2.5 cm) or larger, or a period lasting more than 7 days. Get help if you can, especially if the person feels faint, short of breath, very tired, or looks pale. Have them lie down with legs raised, keep them warm and drinking, and give iron-rich foods (meat, beans, lentils, dark leafy greens) in the days after." },
        { en: "Sudden, severe belly pain on one side, shoulder-tip pain, or fainting in someone who might be pregnant (for example, a missed or late period) can mean an ectopic pregnancy, which can bleed inside and kill. This is an emergency: get help at once." },
        { en: "Bleeding in anyone who is pregnant, bleeding after menopause, and bleeding with fever and belly pain all need a medical check." },
        { en: "Itching, burning, a strong bad smell, or unusual discharge usually means an infection. Change pads more often, make sure they are fully dry, wash the outside skin with plain water, stop using a cup or tampons until it clears, and see a clinician when you can." },
        { en: "A missed period during a crisis is often caused by stress, weight loss, or hard physical work. But it can also mean pregnancy. If there is any chance, keep a few pregnancy tests in your supplies." },
        { en: "After childbirth, use only pads (no cups or tampons) until the bleeding has stopped and a clinician says it is safe, usually about 6 weeks." },
      ],
    },

    // ==================================================================
    { type: "h", id: "plan", text: { en: "Your plan" } },
    {
      type: "table",
      caption: { en: "Menstrual care plan by stage" },
      head: [{ en: "When" }, { en: "What to do" }],
      rows: [
        [{ en: "Now" }, { en: "Talk openly as a family, including with girls before their first period. Buy or make reusable pads (10 to 15 per person) or a cup, and use them for a few cycles. Add a starter kit to each go-bag." }],
        [{ en: "First 72 hours" }, { en: "Use disposables if you have them. Set up the lidded soaking bucket, soap, and a private place to change." }],
        [{ en: "90 days" }, { en: "Switch to reusables to save disposables for travel and sickness. Pick a drying spot that gets sun. Make spare pads from old flannel and towels." }],
        [{ en: "6 months" }, { en: "Check pads and cups for wear; make replacements. Restock soap and pain relief." }],
        [{ en: "1 to 2 years" }, { en: "Teach older children to sew pads. Keep making and replacing them; keep a small stock of disposables and pregnancy tests for emergencies." }],
      ],
    },
    {
      type: "p",
      text: {
        en: "For the full supply list, see {{tools-kits}}. For packing a go-bag, see {{bugging-out}}.",
      },
    },

    // ==================================================================
    { type: "source", title: "A Toolkit for Integrating Menstrual Hygiene Management (MHM) into Humanitarian Response: The Full Guide", publisher: "Columbia University Mailman School of Public Health and International Rescue Committee (Sommer, Schmitt, Clatworthy, 2017)", url: "https://rescue.org/sites/default/files/2024-05/mhm-emergencies-full-toolkit.pdf" },
    { type: "source", title: "Menstrual Disposal, Waste Management & Laundering in Emergencies: A Compendium", publisher: "Columbia University and International Rescue Committee (2020)", url: "https://www.rescue.org/sites/default/files/document/5156/irccolumbiamhmdisposalwmandlaundreringinemergencies.pdf" },
    { type: "source", title: "Minimum menstrual hygiene items for kits (6 reusable pads or 8 cloth pieces per person)", publisher: "International Federation of Red Cross and Red Crescent Societies (IFRC)", url: "https://wash.ifrc.org/wp-content/uploads/2025/06/tool-8_minimum-menstrual-hygiene-items-for-kits_pv.docx" },
    { type: "source", title: "Use and care of your reusable pad", publisher: "IFRC", url: "https://wash.ifrc.org/wp-content/uploads/2025/06/ifrc-mhm-iec-flyer-reusable-pads-english_pr.pdf" },
    { type: "source", title: "Guide to Menstrual Hygiene Materials", publisher: "UNICEF (2019)", url: "https://inee.org/sites/default/files/resources/UNICEF-Guide-menstrual-hygiene-materials-2019.pdf" },
    { type: "source", title: "How to talk to your daughter about periods", publisher: "UNICEF", url: "https://www.unicef.org/asia-pacific/stories/how-to-talk-to-daughter-periods" },
    { type: "source", title: "Tampons", publisher: "U.S. Food and Drug Administration (FDA)", url: "https://www.fda.gov/medical-devices/menstrual-product-options-facts-and-safe-use/tampons" },
    { type: "source", title: "The Facts on Tampons, and How to Use Them Safely", publisher: "FDA", url: "https://www.fda.gov/ForConsumers/ConsumerUpdates/ucm612029.htm" },
    { type: "source", title: "Menstrual cup use, leakage, acceptability, safety, and availability: a systematic review and meta-analysis", publisher: "The Lancet Public Health (van Eijk et al., Liverpool School of Tropical Medicine, 2019)", url: "https://doi.org/10.1016/S2468-2667(19)30111-2" },
    { type: "source", title: "Safety of the Tampax menstrual cup: cleaning instructions (boil 5 to 7 minutes)", publisher: "PMC (peer-reviewed study)", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10475951" },
    { type: "source", title: "About Heavy Menstrual Bleeding", publisher: "Centers for Disease Control and Prevention (CDC)", url: "https://cdc.gov/female-blood-disorders/about/heavy-menstrual-bleeding.html" },
    { type: "source", title: "Heavy menstrual bleeding: symptoms and causes", publisher: "Mayo Clinic", url: "https://www.mayoclinic.org/diseases-conditions/menorrhagia/symptoms-causes/syc-20352829" },
    { type: "source", title: "Dysmenorrhea: Painful Periods", publisher: "American College of Obstetricians and Gynecologists (ACOG)", url: "https://www.acog.org/womens-health/faqs/dysmenorrhea-painful-periods" },
    { type: "source", title: "Heat therapy for primary dysmenorrhea: a systematic review and meta-analysis", publisher: "Scientific Reports (Jo and Lee, 2018)", url: "https://doi.org/10.1038/s41598-018-34303-z" },
    { type: "source", title: "Exercise for dysmenorrhoea", publisher: "Cochrane Database of Systematic Reviews (Armour et al., 2019)", url: "https://doi.org/10.1002/14651858.CD004142.pub4" },
    { type: "source", title: "Dietary supplements for dysmenorrhoea", publisher: "Cochrane Database of Systematic Reviews (Pattanittum et al., 2016)", url: "https://www.cochrane.org/evidence/CD002124_dietary-supplements-dysmenorrhoea" },
    { type: "source", title: "Ectopic pregnancy", publisher: "NHS (UK National Health Service)", url: "https://www.nhs.uk/conditions/ectopic-pregnancy/" },
    { type: "source", title: "Stopped or missed periods", publisher: "NHS", url: "https://www.nhs.uk/conditions/stopped-or-missed-periods/" },
    { type: "source", title: "Bears and Menstruating Women, Information Paper BMO-7 (Gunther, 2016)", publisher: "Yellowstone National Park, National Park Service" },
    { type: "source", title: "Yellowstone bear biologist debunks myth that menstruating women attract bears", publisher: "National Parks Traveler (report on the NPS paper)", url: "https://www.nationalparkstraveler.org/2012/08/yellowstone-bear-biologist-debunks-myth-menstruating-women-attract-bears10428" },
    { type: "source", title: "Principle 3: Dispose of Waste Properly", publisher: "Leave No Trace Center for Outdoor Ethics", url: "https://lnt.org/why/7-principles/dispose-of-waste-properly/" },
  ],
};
