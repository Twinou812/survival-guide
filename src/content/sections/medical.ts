import type { Section } from "../types";

// Section 8: Medical. Facts checked Nov 14, 2026 against the sources listed at the end.
// Safety numbers (CPR rate and depth, tourniquet placement and time, irrigation volume,
// wound-closing time limits, burn cooling time, oral rehydration recipe, zinc doses,
// rabies wound washing, botulism timing, tooth replanting time) come from AHA, American
// College of Surgeons (Stop the Bleed), Wilderness Medical Society (WMS) guidelines, WHO,
// CDC, NHS burn services, Hesperian, AAE, FDA, and NCCIH. Do not round or "simplify" them.
//
// Rules for this section (from the build plan): NO prescription medicine content.
// Over-the-counter (OTC) medicines are OK, always "follow the label".
// Natural remedies carry one of three labels: Well-supported / Traditional, limited
// evidence / Unproven.

export const medical: Section = {
  id: "medical",
  number: 8,
  title: { en: "Medical" },
  summary: { en: "Care when no doctor can be reached. Remedies labeled by evidence." },
  blocks: [
    {
      type: "p",
      text: {
        en: "This section is for the times when you cannot reach a doctor, a hospital, or an ambulance: roads are closed, phones are down, or help is days away. It starts with the emergencies that kill fastest (bleeding, not breathing, choking), then covers wounds, burns, broken bones, sudden illness, infections, teeth, and the medicines and home remedies you can keep on hand.",
      },
    },
    {
      type: "warning",
      text: {
        en: "If you can reach professional help, use it first. Some steps here, like closing wounds and pulling teeth, can cause serious harm if done wrong. Use them only when there is no other choice. This guide does not cover prescription medicines. If someone in your family depends on one (insulin, heart or seizure medicine, inhalers), ask their doctor now how to keep an emergency supply.",
      },
    },
    {
      type: "p",
      text: {
        en: "Reading is not the same as doing. A one-day first aid and CPR class, and a free Stop the Bleed class, will teach your hands what this page can only describe. The plan at the end of this section lists what to learn first. For stress, fear, and grief, see {{mind}}. For periods, see {{menstrual-care}}.",
      },
    },

    // ==================================================================
    { type: "h", id: "first-steps", text: { en: "First steps when someone is hurt or sick" } },
    {
      type: "steps",
      items: [
        { en: "Stop and look before you rush in. Fire, traffic, downed power lines, deep water, or an angry dog can hurt you too, and then no one can help. Put on [[disposable-gloves|gloves]] if you have them." },
        { en: "Try to call for help, even if you think it will not come. Call 911 (or your local number). If a call will not go through, try a text; texts often get through when calls do not. Send someone else to call if you can." },
        { en: "Look for heavy bleeding first: blood that is spurting, pooling, or soaking through clothes. Stop it right away (see below). A person can bleed to death in a few minutes." },
        { en: "Check if they respond. Tap their shoulder and shout. If they do not answer and are not breathing normally (gasping does not count), start CPR." },
        { en: "If they are breathing but will not wake up, and you do not think the neck or back is hurt, roll them onto their side in the [[recovery-position|recovery position]] so vomit or blood can drain out of the mouth." },
        { en: "Keep them warm. Put a blanket or coat under them as well as over them. Injured people lose heat fast, even on mild days." },
        { en: "Then look over the whole body, head to toe, for other injuries. Talk to them calmly and tell them what you are doing." },
        { en: "Write down what happened, what you saw, and what you did, with times. If help comes later, this note matters." },
      ],
    },
    { type: "sketch", sketch: "recovery-position", caption: { en: "Recovery position: lying on one side, the upper leg bent with the knee forward on the floor so they cannot roll onto their face, the upper hand under the cheek, and the head tilted back a little so the mouth can drain." } },

    { type: "h", id: "shock", text: { en: "Shock" } },
    {
      type: "p",
      text: {
        en: "[[shock|Shock]] means the body is not getting enough blood flow. It follows heavy bleeding, bad burns, severe infection, dehydration, or a strong allergic reaction, and it can kill even after the injury itself is under control.",
      },
    },
    {
      type: "list",
      items: [
        { en: "Signs: pale, cool, clammy skin; a fast, weak pulse; fast breathing; thirst; weakness; anxiety, confusion, or sleepiness." },
        { en: "Stop any bleeding. Lay the person flat. Raise the legs about 12 inches (30 cm) if this does not hurt them and there is no leg, hip, back, or head injury." },
        { en: "Keep them warm, above and below. Loosen tight clothing. Stay with them." },
        { en: "Do not give food or drink if help will come soon; they may need surgery. If help is many hours or days away and they are fully awake and can swallow, give small sips of water or [[oral-rehydration-solution|oral rehydration drink]]." },
      ],
    },

    { type: "h", id: "get-help", text: { en: "When to try hard to reach help" } },
    {
      type: "p",
      text: {
        en: "Some problems cannot be fixed at home, no matter how good your kit is. If any of these happen, make every effort to reach a doctor, clinic, or emergency service, even if it means a long trip:",
      },
    },
    {
      type: "list",
      items: [
        { en: "Bleeding you could only stop with a [[tourniquet]], or that keeps coming back." },
        { en: "A bone sticking out through the skin, or a deep cut to a joint, tendon, or nerve (the finger or hand will not move or feel normally)." },
        { en: "Any bite from an animal that could have rabies, and any human bite." },
        { en: "Signs of spreading infection or [[sepsis]] (see below)." },
        { en: "Burns to the face, hands, feet, or genitals; burns all the way around an arm or leg; deep or large burns; or burns from electricity or chemicals." },
        { en: "A head injury with danger signs, chest pain, signs of a stroke, a severe allergic reaction, or a seizure that lasts more than 5 minutes." },
        { en: "Weakness that spreads down the body after eating home-canned food ([[botulism]])." },
        { en: "Severe [[hypothermia]] or [[heat-stroke|heat stroke]]." },
      ],
    },

    // ==================================================================
    { type: "h", id: "bleeding", text: { en: "Stopping heavy bleeding" } },
    {
      type: "p",
      text: {
        en: "Heavy bleeding is the most common cause of death after an injury that could have been prevented. The Stop the Bleed steps work for anyone: press, pack, or use a tourniquet.",
      },
    },
    {
      type: "steps",
      items: [
        { en: "Find where the blood is coming from. Cut or pull clothing away so you can see the wound itself." },
        { en: "Press hard, right on the wound, with both hands on top of a clean cloth or gauze. Push down as hard as you can and do not let up to peek. Kneel over the wound and use your body weight if you need to." },
        { en: "If the wound is deep (on an arm, leg, neck, armpit, or groin), stuff gauze or clean cloth down into it, right onto the spot that is bleeding, until it is packed tight. This is called [[wound-packing|wound packing]]. Then press hard on top with both hands for at least 3 minutes, longer if you can. [[hemostatic-gauze|Hemostatic gauze]] works better than plain gauze; hold it at least 5 minutes." },
        { en: "If blood soaks through, do not pull the cloth off; that tears away the clot. Add more on top and keep pressing." },
        { en: "Once the bleeding stops, wrap a bandage firmly over the dressing to keep up the pressure. Check that fingers or toes beyond it stay pink and warm." },
      ],
    },
    { type: "sketch", sketch: "wound-packing", caption: { en: "Wound packing: push gauze into the wound onto the bleeding spot, keep feeding it in until the wound is full, then press hard on top." } },
    { type: "h", id: "tourniquet", text: { en: "Using a tourniquet" } },
    {
      type: "p",
      text: {
        en: "For life-threatening bleeding from an arm or leg, a [[tourniquet]] is the first choice, not the last. It hurts, and it may cost the limb if left on for many hours, but it saves lives. Buy a real one (with a stick or rod, called a windlass, that twists to tighten it) and learn to use it.",
      },
    },
    {
      type: "steps",
      items: [
        { en: "Wrap the tourniquet around the arm or leg 2 to 3 inches (5 to 8 cm) above the wound, between the wound and the heart. Never put it on a joint (elbow or knee); go above the joint if needed. It can go over clothing." },
        { en: "Pull the strap as tight as you can and fasten it." },
        { en: "Twist the windlass until the bleeding stops. If the bleeding has not stopped, it is not tight enough. The person will say it hurts; that is expected." },
        { en: "Lock the windlass in its clip so it cannot unwind." },
        { en: "Write the time it went on, on the tourniquet or on the person's skin." },
        { en: "If one tourniquet does not stop the bleeding, put a second one just above the first." },
        { en: "Do not loosen it to let blood back in. Leave it in place and get the person to medical care as fast as you can. Under 2 hours is safest for the limb." },
      ],
    },
    { type: "sketch", sketch: "tourniquet", caption: { en: "Tourniquet high on the upper arm, 2 to 3 inches above the wound, never on the elbow. The windlass is twisted, then locked in its clip." } },
    {
      type: "warning",
      text: {
        en: "A belt, a thin cord, or a strip of wire does not work as a tourniquet and can cut into the skin. An improvised tourniquet must be wide (at least 1.5 inches, about 4 cm, like a folded triangle bandage) and must have a stick tied in to twist it tight. Buy a real tourniquet for every kit and car.",
      },
    },
    { type: "h", id: "nosebleed", text: { en: "Nosebleeds" } },
    {
      type: "steps",
      items: [
        { en: "Sit up and lean forward, not back, so blood does not run down the throat." },
        { en: "Pinch the soft part of the nose shut with thumb and finger, both sides, and breathe through the mouth. Keep pinching for 10 to 15 minutes without letting go to check." },
        { en: "If it is still bleeding, pinch again for up to 15 more minutes." },
        { en: "Afterward, do not pick or blow the nose or bend over for several hours. A little petroleum jelly inside the nose helps it heal." },
        { en: "Get help if it lasts more than 30 minutes, follows a hard hit to the head, makes breathing hard, or happens in a child under 2." },
      ],
    },

    // ==================================================================
    { type: "h", id: "cpr", text: { en: "CPR" } },
    {
      type: "p",
      text: {
        en: "If someone collapses and is not breathing normally, their heart has probably stopped. CPR pushes blood to the brain until help arrives or the heart starts again. If you have never been trained, do hands-only CPR: just push. Do not worry about hurting them; without CPR they will die.",
      },
    },
    {
      type: "steps",
      items: [
        { en: "Call 911 or send someone to call, and have someone bring an [[aed|AED]] (automatic defibrillator) if there is one nearby." },
        { en: "Lay the person on their back on a firm surface. Kneel beside their chest." },
        { en: "Put the heel of one hand on the center of the chest (the lower half of the breastbone). Put your other hand on top. Lock your elbows and keep your shoulders right over your hands." },
        { en: "Push hard and fast: at least 2 inches (5 cm) deep for an adult, but not more than 2.4 inches (6 cm), at 100 to 120 pushes a minute. That is about two pushes a second, the beat of the song 'Stayin' Alive'." },
        { en: "Let the chest come all the way back up between pushes. Keep stopping as short as possible." },
        { en: "If you are trained in rescue breaths, give 30 pushes, then 2 breaths, and repeat. Breaths matter more for children and for drowning victims." },
        { en: "When an AED arrives, turn it on and do what it says. Keep pushing until it tells you to stop." },
        { en: "Switch with another person every 2 minutes if you can; pushes get weaker as you tire." },
        { en: "Keep going until help takes over, the person starts breathing normally, or you are too exhausted to continue. People who are very cold have come back after long CPR, so keep going longer for them." },
      ],
    },
    { type: "sketch", sketch: "cpr-hands", caption: { en: "Hands-only CPR: heel of the hand on the center of the chest, other hand on top, arms straight, shoulders over the hands." } },
    {
      type: "table",
      caption: { en: "CPR push depth by age (American Heart Association)" },
      head: [{ en: "Who" }, { en: "Hands" }, { en: "Depth" }],
      rows: [
        [{ en: "Adult and teen" }, { en: "Two hands" }, { en: "At least 2 in (5 cm), not more than 2.4 in (6 cm)" }],
        [{ en: "Child (1 year to puberty)" }, { en: "One or two hands" }, { en: "About 2 in (5 cm), one-third the depth of the chest" }],
        [{ en: "Baby (under 1 year)" }, { en: "Two fingers, just below the nipple line" }, { en: "About 1.5 in (4 cm), one-third the depth of the chest" }],
      ],
    },
    {
      type: "p",
      text: {
        en: "An honest note: CPR works best when an AED and a hospital are close. When help is days away, few people whose hearts have stopped will survive, even with good CPR. Do it anyway. Some will live, especially after drowning, electric shock, or a lightning strike.",
      },
    },

    // ==================================================================
    { type: "h", id: "choking", text: { en: "Choking" } },
    {
      type: "p",
      text: {
        en: "If someone can cough hard or talk, let them keep coughing. If they cannot cough, cry, talk, or breathe, or they grab their throat, act now.",
      },
    },
    {
      type: "steps",
      items: [
        { en: "Adults and children over 1 year: stand behind and a little to the side. Put one arm across the chest and bend them forward. Give 5 firm blows between the shoulder blades with the heel of your hand." },
        { en: "Then give 5 [[abdominal-thrusts|abdominal thrusts]]: stand behind, put a fist just above the belly button, grab it with your other hand, and pull sharply in and up." },
        { en: "Keep switching between 5 back blows and 5 thrusts until the object comes out or the person passes out. For a child, kneel behind them." },
        { en: "If the person is pregnant or too large to reach around, push on the lower breastbone instead of the belly." },
        { en: "If they pass out, lower them to the floor and start CPR. Each time you open the mouth for breaths, look for the object and take it out only if you can see it." },
        { en: "If you are alone and choking, put your own fist above your belly button and thrust in and up, or push your belly hard against the back of a chair or the edge of a counter." },
      ],
    },
    { type: "sketch", sketch: "abdominal-thrusts", caption: { en: "Abdominal thrusts: fist just above the belly button, other hand over it, pull sharply in and up." } },
    {
      type: "steps",
      items: [
        { en: "Babies under 1 year: sit down and lay the baby face down along your forearm, resting your arm on your thigh, head lower than the body. Hold the jaw to support the head." },
        { en: "Give 5 firm back blows between the shoulder blades with the heel of your hand." },
        { en: "Turn the baby face up on your other arm, head still low. Put two fingers just below the nipple line and give 5 chest pushes about 1.5 inches (4 cm) deep." },
        { en: "Repeat until the object comes out. If the baby stops responding, start baby CPR. Never do blind finger sweeps in a baby's mouth." },
      ],
    },
    { type: "sketch", sketch: "infant-back-blows", caption: { en: "Choking baby: face down along your forearm, head lower than the body, back blows between the shoulder blades." } },

    // ==================================================================
    { type: "h", id: "wounds", text: { en: "Cleaning cuts and wounds" } },
    {
      type: "p",
      text: {
        en: "After bleeding is controlled, cleaning is the most important thing you can do for a wound. Infection, not the cut itself, is what usually turns a wound dangerous when help is far away. The cleanest wounds are rinsed with lots of water, early.",
      },
    },
    {
      type: "steps",
      items: [
        { en: "Wash your hands well and put on gloves. A clean work area is enough; it does not need to be sterile." },
        { en: "Clip hair near the wound with scissors if it is in the way. Do not shave; shaving makes tiny cuts that get infected." },
        { en: "Rinse the wound with clean drinking water ([[rolling-boil|boiled]] and cooled, or treated as in {{water}}). Tap water you would drink is fine. Rinse within 3 hours if you can; the sooner the better." },
        { en: "Use pressure, not a gentle pour. A large syringe works well, or fill a clean zip-top bag, poke a small pinhole in one corner, and squeeze hard. This is called [[wound-irrigation|irrigation]]. Aim the stream into the wound from close up and at an angle, and protect your eyes from splashes." },
        { en: "Use a lot of water: at least 1 liter (about 1 quart) for a dirty wound. Small, clean cuts need much less." },
        { en: "Do not add soap, bleach, alcohol, hydrogen peroxide, or iodine to the rinse water; they harm healthy tissue. Wash the skin around the wound with soap and water instead. (Animal bites are the exception; see below.)" },
        { en: "Pick out dirt, gravel, splinters, plant matter, and bits of cloth you can see, using tweezers boiled for a few minutes. Rinse again." },
        { en: "Cover the wound. Keep it slightly moist: a thin layer of antibiotic ointment or petroleum jelly under a non-stick pad heals faster than a dry scab." },
        { en: "Change the dressing every day, or sooner if it gets wet or dirty, and look for signs of infection each time." },
      ],
    },
    { type: "sketch", sketch: "wound-irrigation", caption: { en: "Irrigating a wound with a zip-top bag of clean water: a pinhole in one corner and a hard squeeze make a strong stream." } },
    {
      type: "p",
      text: {
        en: "Scrapes (road rash) should be cleaned the same way and covered, not closed. Blisters from shoes: pad small ones with a ring of moleskin so nothing presses on them. Larger blisters can be drained with a clean needle at the edge, leaving the roof of skin in place as a natural bandage, then covered.",
      },
    },

    // ==================================================================
    { type: "h", id: "closing", text: { en: "Closing a wound" } },
    {
      type: "p",
      text: {
        en: "Most small cuts heal fine on their own if kept clean. A wider cut that gapes open heals faster and with a smaller scar if the edges are brought together. But closing a wound that is dirty or too old traps germs inside and can cause a dangerous infection. When in doubt, leave it open.",
      },
    },
    {
      type: "warning",
      text: {
        en: "Do NOT close: animal or human bites; puncture wounds (nails, thorns, knives that went in deep); wounds with ground-in dirt, soil, manure, or swamp water; crushed wounds with dead or ragged tissue; wounds in the armpit or groin; and any wound more than about 6 hours old (about 10 hours on the face and scalp, which heal well). Also do not close a deep wound unless you can close the deep layers; closing only the skin over a hollow leaves a pocket where infection grows.",
      },
    },
    {
      type: "p",
      text: {
        en: "A wound left open is not a failure. Rinse it well, lay moist gauze lightly into it, cover it, and change the dressing every day. It heals from the bottom up over a few weeks. The scar is bigger, but the risk of a trapped infection is much lower.",
      },
    },
    { type: "p", text: { en: "If a clean, fresh cut needs closing, try these in order, from simplest to hardest:" } },
    {
      type: "steps",
      items: [
        { en: "Closure strips: [[butterfly-strip|butterfly or wound-closure strips]]. Dry the skin around the cut. Stick one end of a strip to one side, push the edges together so they just touch (not overlapping or rolled under), and pull the strip across to the other side. Put strips about 1/4 inch (6 mm) apart along the whole cut, across it, not along it. You can make them from medical or duct tape by folding the middle so the sticky side does not touch the wound. Strips are weakest of all the methods, so they are best for small cuts that do not pull apart." },
        { en: "[[skin-glue|Skin glue]] (tissue adhesive): for small, straight cuts that close easily. Hold the edges together and paint the glue across the top of the closed cut, never into it. Keep it away from the eyes. Glue tends to fail on cuts over joints or that gape under tension." },
        { en: "Hair ties for small scalp cuts: twist a few strands of hair from each side together across the cut and tie or glue them. This holds the edges but does not stop bleeding." },
        { en: "Stitches ([[suture|sutures]]): for clean, gaping cuts that are under tension, when the other methods will not hold. See below." },
      ],
    },
    { type: "sketch", sketch: "butterfly-strip", caption: { en: "Butterfly strip made from tape: the narrow middle has its sticky side folded away so nothing sticks to the cut. Strips go across the cut." } },

    { type: "h", id: "stitches", text: { en: "Stitches, when nothing else will do" } },
    {
      type: "p",
      text: {
        en: "Stitching is a skill to practice before you need it. Practice on a chicken leg or a pig's foot from the grocery store. A suture kit (curved needle with thread attached, a needle holder, small scissors, and tweezers) is far easier to use than a sewing needle. Stitching through skin without numbing medicine hurts; numbing injections need a prescription and training and are not covered here.",
      },
    },
    {
      type: "steps",
      items: [
        { en: "Only stitch a clean, fresh wound (see the list above). Clean and irrigate it very well first." },
        { en: "If you do not have a sealed suture kit: sharpen a sewing needle, and boil it with nylon or silk thread and a small pair of pliers for 20 minutes. Let them cool on a clean surface. Wash your hands and put on gloves." },
        { en: "Put the first stitch in the middle of the cut. Push the needle straight down into the skin about 1/4 inch (5 mm) from the edge, through the cut, and out the other side the same distance from the edge. Go through the cut, not under it." },
        { en: "Pull most of the thread through, leaving a short tail. Tie a square knot: loop, pull, then loop the other way and pull. Tie 3 or 4 knots on top of each other so it holds." },
        { en: "Pull just tight enough that the edges touch. If the skin puckers or turns white, it is too tight. The edges should be level, not rolled in." },
        { en: "Place the next stitches halfway between the first stitch and each end, then keep halving the gaps. Stitches end up about 1/4 inch (5 mm) apart. Make enough stitches to close the whole cut." },
        { en: "Cut the ends about 1/4 inch long. Cover with a thin layer of antibiotic ointment and a clean dressing." },
        { en: "Check every day. If it becomes red, swollen, hot, or drains pus, take out some or all of the stitches so it can drain, and treat it as an open wound." },
        { en: "Take stitches out after about 1 week, or about 10 days on the legs, hands, and over joints. Lift each knot with tweezers, cut the thread right next to the skin, and pull it out by the knot." },
      ],
    },
    { type: "sketch", sketch: "simple-stitch", caption: { en: "Simple stitches: each one goes straight in, across the cut, and out the same distance on the other side, tied on one side, about 1/4 inch apart." } },

    // ==================================================================
    { type: "h", id: "embedded", text: { en: "Splinters, shrapnel, and stuck objects" } },
    {
      type: "p",
      text: {
        en: "Whether to take something out depends on what it is, how deep it is, and where.",
      },
    },
    {
      type: "list",
      items: [
        { en: "Large objects stuck in the body (a knife, a stick, a piece of metal, a nail deep in the chest, belly, head, or neck): do NOT pull them out. The object may be plugging a blood vessel, and pulling it can cause bleeding you cannot stop. Take it out only if it blocks breathing or you cannot do CPR with it in place." },
        { en: "Small, shallow splinters of wood, glass, or metal you can see: clean the skin, then remove them with clean tweezers, pulling in the same direction they went in. A needle cleaned in boiling water can lift the skin over one. Rinse afterward." },
        { en: "Wood, plants, thorns, and bits of clothing should come out if you can do it easily and safely. They almost always cause infection if left." },
        { en: "Small bits of metal or glass deep under the skin that you cannot see (shrapnel from a blast or a broken window): leave them. Digging for them causes more harm and infection than the fragments usually do. Clean the wound and watch it. Many work their way out over weeks." },
        { en: "Anything in the eye other than a loose speck: do not try to remove it." },
      ],
    },
    {
      type: "steps",
      items: [
        { en: "To keep a large stuck object still: have someone hold it so it does not move. Do not press on it." },
        { en: "Press around it, not on it, to slow bleeding." },
        { en: "Build up thick rolls of gauze or folded cloth on all sides of the object, like a nest, so it cannot rock. Tape or bandage them in place." },
        { en: "Cut a long object shorter only if you must to move the person, and hold it very still while you cut." },
        { en: "Get the person to a hospital. This is an injury for a surgeon." },
      ],
    },
    { type: "sketch", sketch: "impaled-object", caption: { en: "A stuck object held still: thick rolls of dressing packed around it on every side, then bandaged in place. Never pressed on." } },
    {
      type: "p",
      text: {
        en: "Eye injuries: for chemicals, rinse the eye right away with clean water for at least 15 minutes, holding the lids open. For anything stuck in the eye, tape a paper cup over it without touching the eye, and cover the other eye too, because both eyes move together. Get help.",
      },
    },
    {
      type: "steps",
      items: [
        { en: "Fishhook in the skin (string-yank method): do not use this near the eye, face, or a joint, or on skin that moves when pulled, like an earlobe. Everyone nearby, including you, should protect their eyes, because the hook can fly." },
        { en: "Loop a strong string or fishing line around the bend of the hook, close to the skin." },
        { en: "Press the eye (top) of the hook down against the skin with one finger to free the barb." },
        { en: "Keep pressing, and give the string a quick, firm yank along the line the hook went in. It pops out backward." },
        { en: "If that fails and the point is close to the surface, push the point on through the skin, cut off the barb with wire cutters, and back the hook out. Wash the wound well." },
      ],
    },
    { type: "sketch", sketch: "fishhook-string-yank", caption: { en: "String-yank: string looped around the bend, the top of the hook pressed down to free the barb, then a quick pull back along the way it went in." } },

    // ==================================================================
    { type: "h", id: "burns", text: { en: "Burns" } },
    {
      type: "steps",
      items: [
        { en: "Stop the burning: get the person away from the heat. For burning clothes: stop, drop, and roll, or smother with a blanket." },
        { en: "Take off rings, watches, belts, and clothing near the burn before it swells, unless they are stuck to the skin." },
        { en: "Cool the burn under cool running water for 20 minutes. This is long, but it limits the damage and scarring. It still helps if started up to 3 hours after the burn. If water is scarce, use a cool, wet cloth and re-wet it every few minutes for 20 minutes." },
        { en: "Never use ice, ice water, butter, oil, toothpaste, or creams on a fresh burn. Ice deepens the injury." },
        { en: "Keep the rest of the person warm while you cool the burn, especially small children." },
        { en: "Cover the burn loosely with a layer of [[cling-film|cling film]] (plastic food wrap) laid on top, not wrapped around a limb, or a clean plastic bag over a hand. Do not cover the face." },
        { en: "Leave blisters alone; they protect the skin underneath." },
        { en: "For the days after, if help is not coming: once the first few hours have passed, change to a non-stick dressing with a thin layer of petroleum jelly or antibiotic ointment. Change it daily and watch for infection. Over-the-counter pain medicine helps." },
      ],
    },
    { type: "sketch", sketch: "burn-cooling", caption: { en: "Cool a burn under cool running water for 20 minutes, then lay cling film loosely over it." } },
    {
      type: "list",
      items: [
        { en: "Chemical burns: brush off dry powder first, then rinse with lots of running water for a long time (20 minutes or more). Take off soaked clothing." },
        { en: "Electrical burns and lightning: make sure the power is off before you touch the person. These burns are often much worse inside than they look. Check breathing; be ready for CPR." },
        { en: "Smoke: a hoarse voice, soot around the nose or mouth, or coughing after a fire can mean the airway is burned and may swell shut over hours. Get help." },
        { en: "Get help for burns that are white, leathery, brown, or charred (these may not hurt); burns larger than the person's palm that blister; and burns on the face, hands, feet, genitals, or around a whole limb. Babies, small children, and older people with burns should be seen if at all possible." },
      ],
    },

    // ==================================================================
    { type: "h", id: "bones", text: { en: "Broken bones, sprains, and neck injuries" } },
    {
      type: "p",
      text: {
        en: "Signs of a broken bone: a snap or grinding felt at the injury, a limb that looks bent or shorter, swelling and bruising, and pain when moving or touching it. When unsure, treat it as broken.",
      },
    },
    {
      type: "steps",
      items: [
        { en: "Stop any bleeding first. If bone sticks out of the skin, do not push it back. Rinse it gently with clean water and cover it with a clean dressing." },
        { en: "Check the hand or foot beyond the injury: is it warm and pink, can they feel your touch, can they wiggle the fingers or toes? Check again after splinting." },
        { en: "[[splint|Splint]] it the way you find it. Do not try to straighten a badly bent limb unless the hand or foot below is cold, pale or blue, and numb; then one gentle, steady pull in line with the bone may restore blood flow." },
        { en: "Use anything stiff: boards, rolled newspapers or magazines, sticks, a folded sleeping pad. Pad it well. The splint must hold the joint above and the joint below the break still." },
        { en: "Tie it on with strips of cloth, firmly but not tight. Loosen it if fingers or toes turn pale, blue, cold, numb, or tingly." },
        { en: "An arm can be held in a sling (a triangle bandage or a large shirt) against the chest. A leg can be tied to the other leg with padding between." },
        { en: "Put a cold pack wrapped in cloth on it for 20 minutes at a time, and raise it above the heart when possible." },
      ],
    },
    { type: "sketch", sketch: "forearm-splint", caption: { en: "A padded forearm splint reaching past the wrist and the elbow, tied on in two places, with the arm in a sling." } },
    {
      type: "list",
      items: [
        { en: "A bone through the skin (an open fracture) needs surgery and antibiotics to prevent a deep infection. Make every effort to get help." },
        { en: "Sprains: rest the joint, cool it 20 minutes at a time, wrap it with an elastic bandage (not tight), and keep it raised. If they cannot bear any weight after a few days, treat it as a break." },
        { en: "Neck and back: after a fall from a height, a car crash, or a hard blow, with neck or back pain, numbness, tingling, or weakness, keep the person still. Hold the head in line with the body. Move them only to get them out of danger or to keep the airway clear, and then roll the whole body as one unit with helpers." },
      ],
    },
    { type: "h", id: "head-injury", text: { en: "Head injuries" } },
    {
      type: "p",
      text: {
        en: "After any hard bump, blow, or jolt to the head, watch the person closely for at least 24 hours. Most recover with rest. Danger signs mean bleeding may be pressing on the brain; get help right away if you see:",
      },
    },
    {
      type: "list",
      items: [
        { en: "One pupil (the black center of the eye) larger than the other." },
        { en: "Very drowsy, or cannot be woken." },
        { en: "A headache that gets worse and does not go away." },
        { en: "Weakness, numbness, or poor coordination; slurred speech." },
        { en: "Vomiting again and again; seizures." },
        { en: "Growing confusion, restlessness, or strange behavior; not recognizing people or places." },
        { en: "Any loss of consciousness, even brief. In babies and young children: will not stop crying, or will not nurse or eat." },
      ],
    },
    {
      type: "p",
      text: { en: "After a head injury, rest from hard physical and mental work for a few days, and stop any activity that makes symptoms come back." },
    },

    // ==================================================================
    { type: "h", id: "sudden-illness", text: { en: "Heart attack, stroke, seizures, allergic reactions, low blood sugar" } },
    {
      type: "list",
      items: [
        { en: "Heart attack: chest pressure, squeezing, or pain that lasts more than a few minutes or comes and goes; pain spreading to an arm, the back, neck, jaw, or stomach; shortness of breath; a cold sweat, nausea, or lightheadedness. Women more often have shortness of breath, nausea, and back or jaw pain. Have them stop and rest, sitting up. If they are not allergic to aspirin and have not been told to avoid it, they can chew one regular 325 mg aspirin. Be ready to start CPR." },
        { en: "Stroke (think F.A.S.T.): Face drooping on one side, Arm weakness (one arm drifts down when both are raised), Speech slurred or strange, Time to get help. Write down the time the signs started. Do not give aspirin for a stroke; some strokes are bleeding in the brain. Lay them on their side if they vomit." },
        { en: "Seizure: stay with them and time it. Move hard or sharp things away and cushion the head. Turn them onto their side. Put nothing in the mouth and do not hold them down. Afterward, let them rest; they may be confused. Get help if it lasts longer than 5 minutes, they have another one, they are hurt, pregnant, or in water, have trouble breathing, or it is their first seizure." },
        { en: "Severe allergic reaction (anaphylaxis): hives or swelling plus trouble breathing, a tight throat, wheezing, swelling of the lips or tongue, vomiting, dizziness, or fainting, usually minutes after a sting, food, or medicine. If they carry their own epinephrine auto-injector, help them use it right away in the outer thigh, following the directions on it. Lay them flat with legs raised, or sitting up if breathing is hard. Antihistamine pills help itching and hives but do NOT stop anaphylaxis. Get help even if they improve; it can come back." },
        { en: "Low blood sugar in someone with diabetes (shaky, sweaty, confused, acting drunk): if they are awake and can swallow, give fast sugar, about 15 grams: half a cup (4 oz) of juice or regular soda, or 1 tablespoon of sugar or honey. Check again in 15 minutes and repeat if not better, then give a snack. If they cannot swallow, give nothing by mouth; put them in the recovery position." },
      ],
    },

    // ==================================================================
    { type: "h", id: "dehydration", text: { en: "Diarrhea, vomiting, and dehydration" } },
    {
      type: "p",
      text: {
        en: "In disasters, dirty water and poor hygiene bring diarrhea, and diarrhea kills mostly by drying people out, especially babies, small children, and older adults. The cure is simple: replace the water and salts as fast as they are lost. For signs of dehydration, see {{water}}.",
      },
    },
    { type: "h", id: "ors", text: { en: "Oral rehydration drink" } },
    {
      type: "steps",
      items: [
        { en: "Best: store packets of [[oral-rehydration-solution|oral rehydration salts]] (ORS) from a pharmacy. Mix one packet with the amount of clean water on the packet." },
        { en: "Homemade (World Health Organization recipe): 1 liter (about 1 quart, or 5 cups) of clean drinking water, 6 level teaspoons of sugar, and 1/2 level teaspoon of salt. Stir until dissolved." },
        { en: "Measure carefully. Too much sugar can make diarrhea worse; too much salt is harmful, especially to babies. Taste it: it should be no saltier than tears." },
        { en: "Make a fresh batch every day. Throw out what is left after 24 hours." },
        { en: "Give small sips often, from a cup or spoon. For babies, use a spoon or [[medicine-dropper|dropper]]. If the person vomits, wait 10 minutes, then start again more slowly. Most people who are vomiting can still keep down small sips." },
        { en: "Keep breastfeeding babies, and keep feeding children and adults normal food as soon as they want it. Do not stop food to 'rest the stomach'." },
      ],
    },
    { type: "sketch", sketch: "ors-bottle", caption: { en: "Oral rehydration drink: 1 liter of clean water, 6 level teaspoons of sugar, half a level teaspoon of salt." } },
    {
      type: "table",
      caption: { en: "How much drink to give after each loose stool (WHO)" },
      head: [{ en: "Age" }, { en: "Amount after each loose stool" }],
      rows: [
        [{ en: "Under 2 years" }, { en: "1/4 to 1/2 cup (50 to 100 mL)" }],
        [{ en: "2 to 10 years" }, { en: "1/2 to 1 cup (100 to 200 mL)" }],
        [{ en: "Older children and adults" }, { en: "As much as they want" }],
      ],
    },
    {
      type: "list",
      items: [
        { en: "Zinc for children: the World Health Organization recommends zinc tablets for children with diarrhea, 20 mg a day for 10 to 14 days (10 mg a day for babies under 6 months). It shortens the illness and helps prevent the next one. Dispersible zinc tablets dissolve in a spoonful of water or breast milk." },
        { en: "If you have no sugar or salt: rice water, thin cereal porridge, soups, and weak tea all help. Keep giving fluids." },
        { en: "Diarrhea medicine (loperamide) is for adults only, as the label says, and should not be used when there is blood in the stool or a fever." },
      ],
    },
    {
      type: "warning",
      text: {
        en: "Get help if there is blood in the stool, a high fever, vomiting so bad they cannot keep down any fluid, no urine for 8 hours or more, sunken eyes, a very sleepy or floppy child, or diarrhea lasting more than a few days. Babies and older adults can become dangerously dry within hours.",
      },
    },
    { type: "h", id: "food-poisoning", text: { en: "Food poisoning and botulism" } },
    {
      type: "p",
      text: {
        en: "Most food poisoning brings vomiting, cramps, and diarrhea for 1 to 3 days and gets better with rest and the rehydration drink. [[botulism|Botulism]] is different, and deadly. It comes from home-canned, low-acid food that was not processed correctly (see {{food-storage}}), and it causes no fever.",
      },
    },
    {
      type: "list",
      items: [
        { en: "Botulism signs usually start 12 to 36 hours after eating (as early as 6 hours, as late as 10 days): double or blurred vision, drooping eyelids, slurred speech, trouble swallowing, dry mouth, then weakness that moves DOWN the body, shoulders first, then arms, then legs. In the end it can stop the breathing muscles." },
        { en: "There is no home treatment. The medicine that stops it (antitoxin) is only in hospitals, and people often need a breathing machine for weeks. Get to a hospital as fast as possible." },
        { en: "Keep the suspected food, and warn everyone who ate it. Never taste food to check it." },
      ],
    },

    // ==================================================================
    { type: "h", id: "heat-cold", text: { en: "Heat illness, hypothermia, and frostbite" } },
    {
      type: "p",
      text: {
        en: "These are covered in detail in {{seasons}}, with the steps for each. The short version:",
      },
    },
    {
      type: "list",
      items: [
        { en: "[[heat-exhaustion|Heat exhaustion]] (heavy sweating, weakness, nausea, cool clammy skin): move somewhere cool, loosen clothes, cool wet cloths, sips of water or rehydration drink." },
        { en: "[[heat-stroke|Heat stroke]] (very hot skin, confusion, passing out): an emergency. Cool them fast with cold water, as much of the body as you can. Do not give fluids if they are confused." },
        { en: "[[hypothermia|Hypothermia]] (shivering, stumbling, mumbling, confusion): get out of wind and wet, remove wet clothes, insulate from the ground, warm the core (chest, armpits, groin) first, warm sweet drinks only if fully awake. Below 95°F (35°C) is an emergency." },
        { en: "[[frostbite|Frostbite]]: rewarm in warm (not hot) water only if it will not freeze again. Do not rub it or use direct heat." },
      ],
    },

    // ==================================================================
    { type: "h", id: "bites", text: { en: "Animal bites, snakebites, stings, and ticks" } },
    {
      type: "steps",
      items: [
        { en: "Animal bites and scratches: wash the wound right away with soap and running water for 15 minutes. This alone greatly lowers the chance of [[rabies]]. Then, if you have it, apply povidone-iodine." },
        { en: "Do not close a bite with strips, glue, or stitches. Cover it and watch it closely. Bites on the hand, and cat bites, get infected often." },
        { en: "Note how the animal acted. If it was a pet, ask whether its rabies shots are up to date. Healthy dogs, cats, and ferrets can be watched for 10 days." },
        { en: "Rabies is nearly always fatal once signs appear, but the shots given after a bite prevent it. Any bite or scratch from a bat, raccoon, skunk, fox, or a sick or strange-acting animal, or waking up with a bat in the room, means you must try to reach care right away, ideally within a day or two, even if it means a long trip." },
        { en: "Human bites need medical care and antibiotics; they infect easily." },
      ],
    },
    {
      type: "steps",
      items: [
        { en: "Snakebite: get away from the snake. Do not try to catch or kill it; remember its color and shape instead." },
        { en: "Keep the person calm and still, and get them to a hospital as fast as you can. Antivenom is the only real treatment." },
        { en: "Remove rings, watches, and tight clothing before swelling starts." },
        { en: "Lay or sit them down with the bite below the level of the heart. Wash it with soap and water and cover it with a clean, dry dressing." },
        { en: "Do NOT use a tourniquet, cut the wound, try to suck out the venom, put ice on it, or soak it in water. Do not give alcohol, caffeine, or pain pills like aspirin, ibuprofen, or naproxen." },
      ],
    },
    {
      type: "list",
      items: [
        { en: "Bee and wasp stings: scrape the stinger out sideways with a fingernail or card. Wash, then use a cold pack. Hydrocortisone cream or an antihistamine helps the itch. Watch closely for the signs of a severe allergic reaction above." },
        { en: "Ticks: remove them as shown in {{seasons}}, with [[fine-tipped-tweezers|fine-tipped tweezers]]. Then watch for several weeks for fever, chills, aches, headache, or a rash. Some tick diseases, like Rocky Mountain spotted fever, can kill within days and need antibiotics quickly." },
        { en: "[[tularemia|Tularemia]] (from ticks, deer flies, or handling rabbits and rodents): a sore or ulcer where the germs got in, swollen painful glands in the armpit or groin, and fever as high as 104°F (40°C), usually 3 to 5 days after (up to 14 days). It needs antibiotics. See {{trapping}} for how to avoid it." },
      ],
    },

    // ==================================================================
    { type: "h", id: "infection", text: { en: "Infections and sepsis" } },
    {
      type: "p",
      text: {
        en: "Check every wound every day. A little redness right at the edges in the first day or two is normal healing. Infection looks different:",
      },
    },
    {
      type: "list",
      items: [
        { en: "Redness that spreads outward, swelling, warmth, and pain that gets worse after the second day." },
        { en: "Pus, or a bad smell." },
        { en: "Red streaks running up the arm or leg from the wound." },
        { en: "Fever and chills." },
      ],
    },
    {
      type: "steps",
      items: [
        { en: "Draw a line with a pen around the edge of the redness. If it spreads past the line over the next hours, the infection is growing." },
        { en: "Open the wound so pus can drain: take out stitches or strips. Rinse it well with clean water." },
        { en: "Put warm, wet cloths on it for 15 to 20 minutes several times a day." },
        { en: "Raise the limb, rest it, and keep the person drinking and eating." },
        { en: "Spreading infection needs antibiotics, which need a prescription. If redness is spreading, there are red streaks, or there is fever, try hard to get help." },
      ],
    },
    {
      type: "p",
      text: {
        en: "[[sepsis|Sepsis]] is the body's extreme reaction to an infection anywhere: a wound, the lungs, the urine, or the gut. It is an emergency that can kill within hours. Signs can include any of these: confusion or disorientation; shortness of breath; a fast heart rate or weak pulse; fever, shivering, or feeling very cold; extreme pain or discomfort; and clammy or sweaty skin. Babies, older adults, and people with long-term illnesses are at highest risk.",
      },
    },
    {
      type: "p",
      text: {
        en: "[[tetanus|Tetanus]] comes from germs in soil that get into deep or dirty wounds, and there is no home treatment. The vaccine prevents it. Adults need a booster every 10 years, and sooner (within 5 years) after a dirty or deep wound. Make sure everyone in your family is up to date now, while clinics are open.",
      },
    },

    // ==================================================================
    { type: "h", id: "teeth", text: { en: "Teeth and toothaches" } },
    {
      type: "p",
      text: {
        en: "Tooth infections can spread and become life-threatening, and dental help may be the hardest care to find in a long emergency. Prevention is the best treatment: keep up dental checkups now, store plenty of toothbrushes, fluoride toothpaste, and floss, and keep sugar between meals low.",
      },
    },
    {
      type: "list",
      items: [
        { en: "Toothache: rinse with warm salt water (1/2 teaspoon salt in a cup of warm water). Floss gently to remove stuck food. Over-the-counter pain medicine, following the label, helps most toothaches. A cold pack on the cheek eases swelling." },
        { en: "Clove oil on a cotton ball held against the sore tooth: Traditional, limited evidence. Its main chemical (eugenol) numbs and is used in dental materials, but studies are few. It can burn the gums; use a tiny amount, never swallow it, and do not use it on children." },
        { en: "Numbing gels (benzocaine): for short-term use by adults and older children only. Never use them on children under 2; they can cause a rare, dangerous blood problem." },
        { en: "Lost filling or broken tooth: pharmacies sell [[temporary-filling|temporary filling]] material. Dry the tooth and press it in as the package says. It lasts days to weeks." },
      ],
    },
    {
      type: "warning",
      text: {
        en: "A swollen face is an emergency if the swelling spreads toward the eye or down the neck, if it is under the tongue, or if there is trouble swallowing, breathing, or opening the mouth, or a fever. A tooth infection can spread and close off the airway. Get help immediately.",
      },
    },
    { type: "h", id: "knocked-out-tooth", text: { en: "A knocked-out tooth" } },
    {
      type: "steps",
      items: [
        { en: "Find the tooth. Pick it up by the crown (the white top), never by the root." },
        { en: "If it is dirty, rinse it briefly with milk or saline, or the person's spit. Do not scrub it or use soap, and do not let it dry out." },
        { en: "Put an adult tooth back in the socket right away, the right way around, and have the person bite gently on a clean cloth to hold it. The best chance is within the first 30 minutes; after about 60 minutes out of the mouth and dry, the tooth will usually not survive." },
        { en: "If you cannot put it back, keep it in a small cup of milk (not water), or have an adult hold it in the mouth next to the cheek. Get to a dentist as fast as you can." },
        { en: "Do not put back a baby tooth. It can damage the adult tooth growing underneath." },
      ],
    },
    { type: "sketch", sketch: "knocked-out-tooth", caption: { en: "Hold a knocked-out tooth only by the crown, never the root, and put it back in or keep it in milk." } },

    { type: "h", id: "pulling-teeth", text: { en: "Pulling a tooth (last resort)" } },
    {
      type: "p",
      text: {
        en: "Pull a tooth only when there is no dentist for weeks or months and the tooth is very loose, or is so broken or decayed that it causes constant pain or keeps getting infected. Pulling a tooth does not cure an infection that is already spreading into the face or neck; that still needs a doctor.",
      },
    },
    {
      type: "steps",
      items: [
        { en: "A very loose tooth (one that already moves easily): wash your hands and put on gloves. The person rinses with clean water. An adult can dab a little numbing gel on the gum." },
        { en: "Grip the tooth with a folded square of gauze so your fingers do not slip." },
        { en: "Rock it gently toward the cheek and toward the tongue, a little more each time, and lift. Do not yank or twist hard. If it does not come out with gentle force, stop; it is not ready." },
        { en: "Fold a clean square of gauze into a pad, put it on the empty socket, and have the person bite down firmly for 30 minutes. If it is still bleeding, use fresh gauze and bite for another 30 minutes." },
      ],
    },
    {
      type: "p",
      text: {
        en: "A firm tooth is a much bigger job. Dental workers use a numbing injection (prescription only), a [[dental-elevator|dental elevator]] to loosen the tooth, and [[dental-forceps|dental forceps]] (No. 150 for upper teeth, No. 151 for lower teeth) to lift it out. Back teeth with curved roots break easily and can leave the root behind. If you keep a dental extraction kit, learn from a dentist, and read the free book Where There Is No Dentist (Hesperian), which explains each step with drawings. The outline:",
      },
    },
    {
      type: "steps",
      items: [
        { en: "Explain what you will do. Seat the person with the head supported: high for upper teeth, low for lower teeth." },
        { en: "Separate the gum from the tooth all the way around with a thin, blunt instrument, so the gum does not tear." },
        { en: "Loosen the tooth first with the elevator, working slowly. A loose tooth is less likely to break." },
        { en: "Push the forceps beaks as far up the root, under the gum, as you can. Rock slowly toward the cheek and tongue, and lift out only when it is clearly loose." },
        { en: "Press a gauze pad on the socket and have the person bite on it for 30 minutes." },
      ],
    },
    { type: "sketch", sketch: "dental-tools", caption: { en: "Dental extraction tools: a straight elevator (left) to loosen the tooth, and forceps (right) to lift it out." } },
    {
      type: "list",
      items: [
        { en: "For the first 24 hours after a tooth comes out: no spitting, no drinking through a straw, no smoking, and no hard rinsing. These pull out the blood clot and cause a painful 'dry socket'." },
        { en: "After 24 hours, rinse gently with warm salt water after meals for a week. Eat soft food on the other side." },
        { en: "Biting on a wet black-tea bag to slow bleeding: Traditional, limited evidence. Firm pressure on gauze is what matters most." },
        { en: "Get help if bleeding does not stop after an hour of firm pressure, or if swelling, pain, or fever grows after the second day." },
      ],
    },

    // ==================================================================
    { type: "h", id: "otc", text: { en: "Over-the-counter medicines" } },
    {
      type: "p",
      text: {
        en: "Over-the-counter (OTC) medicines are safe when used as the label says, and dangerous when they are not. Read the whole label every time. Children's doses depend on weight and on the exact product (infant drops and children's liquid are different strengths), so use the chart on that package and the measuring tool that came with it. Write down every dose you give, with the time, so no one doubles it.",
      },
    },
    {
      type: "table",
      caption: { en: "Useful OTC medicines and their key warnings" },
      head: [{ en: "Medicine" }, { en: "Used for" }, { en: "Key warnings" }],
      rows: [
        [{ en: "Acetaminophen (paracetamol)" }, { en: "Pain, fever" }, { en: "Too much damages the liver, and the signs may not show for days. Never take two products that both contain it (many cold medicines do). Extra care with daily alcohol use or liver disease." }],
        [{ en: "Ibuprofen, naproxen" }, { en: "Pain, fever, swelling" }, { en: "Take with food. Can cause stomach bleeding and kidney harm, worse when dehydrated. Follow the label's age limits for babies. Not for snakebites." }],
        [{ en: "Aspirin" }, { en: "Pain; chewed for a suspected heart attack" }, { en: "Never give to children or teenagers (risk of Reye's syndrome). Raises bleeding risk. Not for a stroke unless a doctor says so." }],
        [{ en: "Antihistamines (diphenhydramine, cetirizine, loratadine)" }, { en: "Itching, hives, hay fever, mild allergic reactions" }, { en: "Diphenhydramine causes strong drowsiness. None of them stops a severe allergic reaction." }],
        [{ en: "Loperamide" }, { en: "Diarrhea in adults" }, { en: "Not with blood in the stool or fever. Follow the label's age limits. It does not replace fluids." }],
        [{ en: "Bismuth subsalicylate" }, { en: "Upset stomach, diarrhea" }, { en: "Related to aspirin: not for children or teenagers. Turns the tongue and stool black (harmless)." }],
        [{ en: "Oral rehydration salt packets" }, { en: "Dehydration" }, { en: "Mix with exactly the amount of water on the packet." }],
        [{ en: "Zinc tablets" }, { en: "Children's diarrhea" }, { en: "Use the WHO doses above." }],
        [{ en: "Hydrocortisone 1% cream" }, { en: "Itchy rashes, bites, poison ivy" }, { en: "Not on infected skin or deep wounds." }],
        [{ en: "Antibiotic ointment, petroleum jelly" }, { en: "Keeping small wounds moist" }, { en: "Stop if a rash appears." }],
        [{ en: "Benzocaine gel" }, { en: "Short-term tooth and gum pain" }, { en: "Never for children under 2." }],
        [{ en: "Meclizine, dimenhydrinate" }, { en: "Motion sickness, nausea" }, { en: "Causes drowsiness." }],
      ],
    },
    {
      type: "list",
      items: [
        { en: "Store medicines cool, dry, and dark, away from children. Rotate them like food and replace them before the expiration date. Throw out any that have changed color, smell, or texture." },
        { en: "Keep a written card for each family member: allergies, health conditions, every medicine and dose, and the doctor's name. Keep a copy in your go-bag ({{bugging-out}})." },
      ],
    },

    // ==================================================================
    { type: "h", id: "remedies", text: { en: "Natural and home remedies, labeled by evidence" } },
    {
      type: "p",
      text: {
        en: "Each remedy here carries one of three labels. Well-supported: good studies show it helps. Traditional, limited evidence: long use and some small studies, but not proven. Unproven: little or no good evidence it works. 'Natural' does not mean safe: herbs can have side effects and can interact with medicines. Be extra careful with children, during pregnancy and breastfeeding, and with anyone who takes prescription medicine.",
      },
    },
    {
      type: "table",
      caption: { en: "Common home remedies and what the evidence shows" },
      head: [{ en: "Remedy" }, { en: "Used for" }, { en: "Evidence" }, { en: "Cautions" }],
      rows: [
        [{ en: "Honey (a teaspoon, by itself or in warm water)" }, { en: "Cough" }, { en: "Well-supported for cough in children over 1 and adults" }, { en: "Never give honey to babies under 1 year (botulism)." }],
        [{ en: "Ginger (tea, candied, capsules)" }, { en: "Nausea" }, { en: "Well-supported for nausea in pregnancy; mixed for other nausea" }, { en: "May add to bleeding risk with blood thinners." }],
        [{ en: "Peppermint oil capsules" }, { en: "Cramps of irritable bowel" }, { en: "Well-supported (modest benefit)" }, { en: "Can cause heartburn." }],
        [{ en: "Aloe vera gel (on the skin)" }, { en: "Sunburn, small burns after cooling" }, { en: "Traditional, limited evidence" }, { en: "Not on deep or open burns. Do not swallow aloe latex or whole leaf; it is a strong laxative." }],
        [{ en: "Clove oil" }, { en: "Toothache" }, { en: "Traditional, limited evidence" }, { en: "Can burn gums. Never swallow. Not for children." }],
        [{ en: "Medical-grade honey dressings" }, { en: "Burns and slow wounds" }, { en: "Traditional, limited evidence (some studies show faster healing)" }, { en: "Use medical-grade honey made for wounds, not kitchen honey." }],
        [{ en: "Zinc lozenges" }, { en: "Shortening a cold" }, { en: "Traditional, limited evidence (studies disagree)" }, { en: "Bad taste, nausea. Never use zinc nasal sprays; they have caused loss of smell." }],
        [{ en: "Willow bark" }, { en: "Pain" }, { en: "Traditional, limited evidence" }, { en: "Contains a chemical related to aspirin: same warnings, not for children or teens." }],
        [{ en: "Echinacea" }, { en: "Preventing or treating colds" }, { en: "Unproven (studies are mixed)" }, { en: "Allergic reactions, especially in people allergic to ragweed." }],
        [{ en: "Garlic" }, { en: "Fighting infection" }, { en: "Unproven" }, { en: "Raw garlic on skin can cause burns. Adds to bleeding risk with blood thinners." }],
        [{ en: "Turmeric (curcumin)" }, { en: "Pain, swelling" }, { en: "Unproven" }, { en: "Rare liver injury has been reported with supplements." }],
        [{ en: "Colloidal silver" }, { en: "Infections" }, { en: "Unproven" }, { en: "Can permanently turn skin blue-gray. Do not use." }],
        [{ en: "Essential oils taken by mouth" }, { en: "Many claims" }, { en: "Unproven" }, { en: "Can be poisonous, especially to children. Keep bottles locked away." }],
      ],
    },

    // ==================================================================
    { type: "h", id: "learn-now", text: { en: "What to learn and do now" } },
    {
      type: "table",
      caption: { en: "A medical plan for the next 2 years" },
      head: [{ en: "When" }, { en: "What to do" }],
      rows: [
        [{ en: "First 90 days" }, { en: "Take a CPR and first aid class and a Stop the Bleed class (often free). Buy a real tourniquet for each kit and car and practice putting it on. Check that everyone's tetanus shots are current. Write each person's medical card. Ask doctors about emergency supplies of any prescription medicine. Start the basic medical kit (see {{tools-kits}})." }],
        [{ en: "By 6 months" }, { en: "Take a wilderness first aid class (it teaches care when help is hours or days away). Get dental checkups and fix problems now. Stock OTC medicines, ORS packets, and wound-care supplies. Practice wound closure strips and stitches on store-bought meat." }],
        [{ en: "By 1 year" }, { en: "Add suture and dental kits if you will learn to use them. Teach older children how to call for help, press on bleeding, and put someone in the recovery position. Rotate medicines nearing their dates." }],
        [{ en: "By 2 years" }, { en: "Renew CPR and first aid training (most cards last 2 years). Run a family drill: one person 'hurt', everyone else does their part. Review and update medical cards and the kit." }],
      ],
    },

    // ==================================================================
    { type: "source", title: "Stop the Bleed: What Everyone Should Know to Stop Bleeding After an Injury", publisher: "American College of Surgeons (Hartford Consensus)", url: "https://police.ucsd.edu/_files/Stop-the-Bleed.pdf" },
    { type: "source", title: "Stop the Bleed course (tourniquet 2 to 3 inches above the wound)", publisher: "American College of Surgeons", url: "https://massmed.org/Patient-Care/Health-Topics/Stop-the-Bleeding-(pdf)" },
    { type: "source", title: "Wilderness Medical Society Practice Guidelines for Basic Wound Management in the Austere Environment: 2014 Update", publisher: "Wilderness & Environmental Medicine (Quinn et al.)", url: "https://www.femecv.com/sites/default/files/uploads/files/WMS%20heridas_2014.pdf" },
    { type: "source", title: "Wilderness Medical Society Practice Guidelines for Basic Wound Management (public release copy)", publisher: "Defense Technical Information Center", url: "https://apps.dtic.mil/sti/tr/pdf/ADA614573.pdf" },
    { type: "source", title: "First Aid in an Emergency", publisher: "International Committee of the Red Cross (ICRC)", url: "https://blogs.icrc.org/app/uploads/sites/99/2026/05/First_Aid-EN.pdf" },
    { type: "source", title: "Shock: First aid", publisher: "Mayo Clinic", url: "https://www.mayoclinic.org/first-aid/first-aid-shock/basics/art-20056620" },
    { type: "source", title: "AHA Updates Guidelines for CPR and Emergency Cardiovascular Care", publisher: "American Academy of Family Physicians (summary of American Heart Association guidelines)", url: "https://www.aafp.org/afp/2016/0501/p791" },
    { type: "source", title: "Frequently asked questions about new CPR guidelines", publisher: "American Heart Association News", url: "https://news.heart.org/frequently-asked-questions-about-new-cpr-guidelines/" },
    { type: "source", title: "Choking: First aid (American Red Cross five-and-five method)", publisher: "Mayo Clinic", url: "https://www.mayoclinic.org/first-aid/first-aid-choking/basics/art-20056637" },
    { type: "source", title: "Nosebleeds: First aid", publisher: "Mayo Clinic", url: "https://www.mayoclinic.org/first-aid/first-aid-nosebleeds/basics/art-20056683" },
    { type: "source", title: "New Where There Is No Doctor: Wounds (closing wounds)", publisher: "Hesperian Health Guides", url: "https://gopherproxy.meulie.net/sdf.org/0/users/agk/1st/1st0107.txt" },
    { type: "source", title: "Where There Is No Dentist (2024), Chapter 11: Taking out a tooth", publisher: "Hesperian Health Guides", url: "https://hesperian.org/wp-content/uploads/pdf/en_dent_2024/en_dent_2024_11.pdf" },
    { type: "source", title: "How To Do an Emergency Tooth Extraction", publisher: "Merck Manual Professional Version", url: "https://merckmanuals.com/professional/dental-disorders/how-to-do-dental-procedures/how-to-do-an-emergency-tooth-extraction" },
    { type: "source", title: "First aid for impaled objects (stabilize, do not remove)", publisher: "U.S. Army Medical Department, MD0554", url: "https://armymedical.tpub.com/backup/MD0554/MD05540173.htm" },
    { type: "source", title: "String-pull method for removing a fishhook", publisher: "Kaiser Permanente / Healthwise", url: "https://healthy.kaiserpermanente.org/health-wellness/health-encyclopedia/he.string-pull-method-for-removing-a-fishhook.aa132242" },
    { type: "source", title: "The Simplest Method for Fishhook Removal: The String-Yank Technique", publisher: "Cureus (Watari, 2024)", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11653225/" },
    { type: "source", title: "Burns and scalds", publisher: "NHS 111 Wales", url: "https://111.wales.nhs.uk/burnsandscalds/" },
    { type: "source", title: "Burns first aid and prevention (cool, call, cover)", publisher: "Queen Victoria Hospital NHS Foundation Trust", url: "https://www.qvh.nhs.uk/?p=804" },
    { type: "source", title: "Burns First Aid Guidelines", publisher: "London and South East Burns Network (NHS)", url: "https://lsebn.nhs.uk/_common/getdocument?id=391569" },
    { type: "source", title: "First aid for burns", publisher: "British Red Cross", url: "https://www.redcross.org.uk/first-aid/learn-first-aid/burns" },
    { type: "source", title: "Fractures (broken bones): First aid", publisher: "Mayo Clinic", url: "https://www.mayoclinic.org/first-aid/first-aid-fractures/basics/art-20056641" },
    { type: "source", title: "HEADS UP: Concussion danger signs", publisher: "CDC", url: "https://stacks.cdc.gov/view/cdc/130281/cdc_130281_DS1.pdf" },
    { type: "source", title: "Warning Signs of a Heart Attack", publisher: "American Heart Association", url: "https://www.heart.org/en/health-topics/heart-attack/warning-signs-of-a-heart-attack" },
    { type: "source", title: "Stroke Symptoms (F.A.S.T.)", publisher: "American Stroke Association", url: "https://www.stroke.org/en/about-stroke/stroke-symptoms" },
    { type: "source", title: "First Aid for Seizures", publisher: "CDC", url: "https://www.cdc.gov/epilepsy/first-aid-for-seizures/index.html" },
    { type: "source", title: "Anaphylaxis: First aid", publisher: "Mayo Clinic", url: "https://www.mayoclinic.org/first-aid/first-aid-anaphylaxis/basics/art-20056608" },
    { type: "source", title: "Hypoglycemia (Low Blood Glucose): the 15-15 rule", publisher: "American Diabetes Association", url: "https://diabetes.org/living-with-diabetes/hypoglycemia-low-blood-glucose" },
    { type: "source", title: "Oral Rehydration Solutions: Made at Home (WHO/UNICEF recipe)", publisher: "Rehydration Project", url: "https://rehydrate.org/solutions/homemade.htm" },
    { type: "source", title: "Information for the general public on oral rehydration solution", publisher: "World Health Organization, Eastern Mediterranean Region", url: "https://applications.emro.who.int/docs/WHOEMCSR594E-eng.pdf" },
    { type: "source", title: "Pocket Book of Hospital Care for Children: Diarrhoea treatment plan A", publisher: "World Health Organization", url: "https://www.ncbi.nlm.nih.gov/books/NBK154434/" },
    { type: "source", title: "Zinc supplementation in the management of diarrhoea", publisher: "World Health Organization (eLENA)", url: "https://www.who.int/tools/elena/interventions/zinc-diarrhoea" },
    { type: "source", title: "Facts about Botulism", publisher: "CDC (archived)", url: "https://preparecenter.org/wp-content/uploads/2021/04/www.bt_.cdc_.gov_agent_botulism_factsheet.pdf" },
    { type: "source", title: "Botulism Fact Sheet", publisher: "New York State Department of Health", url: "https://healthweb-back.health.ny.gov/diseases/communicable/botulism/fact_sheet.htm" },
    { type: "source", title: "Rabies Prevention and Control (wash wounds 15 minutes)", publisher: "CDC", url: "https://www.cdc.gov/rabies/prevention/index.html" },
    { type: "source", title: "When to Seek Care for rabies exposure", publisher: "CDC", url: "https://cdc.gov/rabies/when-to-seek-care/index.html" },
    { type: "source", title: "Venomous Snakes (first aid do's and don'ts)", publisher: "CDC / NIOSH", url: "https://www.cdc.gov/niosh/outdoor-workers/about/venomous-snakes.html" },
    { type: "source", title: "Signs and Symptoms of Tularemia", publisher: "CDC", url: "https://www.cdc.gov/tularemia/signs-symptoms" },
    { type: "source", title: "Tularemia", publisher: "South Carolina Department of Public Health", url: "https://dph.sc.gov/health-wellness/health-safety/risks-and-hazards/tularemia" },
    { type: "source", title: "About Sepsis (signs and symptoms)", publisher: "CDC", url: "https://www.cdc.gov/sepsis/about/index.html" },
    { type: "source", title: "Knocked Out Teeth", publisher: "American Association of Endodontists", url: "https://www.aae.org/patients/dental-symptoms/knocked-out-teeth/" },
    { type: "source", title: "Knocked-out teeth", publisher: "Oral Health Foundation (UK)", url: "https://www.dentalhealth.org/tell-me-about/topic/childrens-teeth/knocked-out-teeth" },
    { type: "source", title: "Risk of serious and potentially fatal blood disorder prompts FDA action on oral over-the-counter benzocaine products", publisher: "U.S. Food and Drug Administration (FDA)", url: "https://www.fda.gov/drugs/drug-safety-and-availability/risk-serious-and-potentially-fatal-blood-disorder-prompts-fda-action-oral-over-counter-benzocaine" },
    { type: "source", title: "Acetaminophen and liver injury: Q&A for consumers", publisher: "FDA (archived)", url: "https://webarchive.library.unt.edu/web/20130214114258/http://www.fda.gov/ForConsumers/ConsumerUpdates/ucm168830.htm" },
    { type: "source", title: "Reye's Syndrome", publisher: "National Institute of Neurological Disorders and Stroke (NIH)", url: "https://www.ninds.nih.gov/health-information/disorders/reyes-syndrome" },
    { type: "source", title: "Honey for acute cough in children (Cochrane review summary)", publisher: "Cochrane UK", url: "https://evidentlycochrane.net/?p=9135" },
    { type: "source", title: "Ginger", publisher: "National Center for Complementary and Integrative Health (NCCIH, NIH)", url: "https://www.nccih.nih.gov/health/ginger" },
    { type: "source", title: "Peppermint Oil", publisher: "NCCIH", url: "https://www.nccih.nih.gov/health/peppermint-oil" },
    { type: "source", title: "Aloe Vera", publisher: "NCCIH", url: "https://www.nccih.nih.gov/health/aloe-vera" },
    { type: "source", title: "Echinacea", publisher: "NCCIH", url: "https://www.nccih.nih.gov/health/echinacea" },
    { type: "source", title: "Garlic", publisher: "NCCIH", url: "https://www.nccih.nih.gov/health/garlic" },
    { type: "source", title: "Turmeric", publisher: "NCCIH", url: "https://www.nccih.nih.gov/health/turmeric" },
    { type: "source", title: "Colloidal Silver", publisher: "NCCIH", url: "https://www.nccih.nih.gov/health/colloidal-silver" },
  ],
};
