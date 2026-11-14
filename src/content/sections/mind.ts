import type { Section } from "../types";

// Section 9: Mind. Facts checked Nov 14, 2026 against the sources listed at the end.
// Numbers that should not be "simplified": caffeine withdrawal 12-24 h onset, 2-9 days
// (Juliano & Griffiths); media exposure 6+ h/day linked to more acute stress than being
// there (Holman, PNAS); stress reactions that last more than a month (NIMH, VA National
// Center for PTSD); alcohol withdrawal can kill (MedlinePlus); crisis numbers 988,
// 1-800-985-5990, 1-800-799-7233.
//
// Rules for this section (from the build plan): mental health tools WITHOUT medication.
// No prescription medicine content. Natural remedies carry one of three labels:
// Well-supported / Traditional, limited evidence / Unproven, with interaction warnings.
// The user asked for: anxiety, situational awareness training, noticing friction in life.

export const mind: Section = {
  id: "mind",
  number: 9,
  title: { en: "Mind" },
  summary: { en: "Handling fear and stress, staying aware, and keeping the family steady." },
  blocks: [
    {
      type: "p",
      text: {
        en: "In a long emergency, the mind is a piece of survival gear like a water filter or a first aid kit. A frightened, exhausted family makes mistakes: a candle left burning, a fight over nothing, a child who stops eating, a parent who stops sleeping. This section gives you simple tools that need no medicine and no electricity: calming the body fast, handling worry, keeping a daily rhythm, noticing small frictions before they become big fights, staying aware without becoming jumpy, helping someone who is upset, and knowing when stress has become something more serious.",
      },
    },
    {
      type: "warning",
      text: {
        en: "If anyone is in danger of hurting themselves or someone else, get help now. In the U.S., call or text 988 (Suicide & Crisis Lifeline; see [[crisis-lines|crisis lines]]). For distress after any disaster, call or text 1-800-985-5990 (Disaster Distress Helpline, free, 24 hours). For abuse at home, call 1-800-799-7233 or text START to 88788 (National Domestic Violence Hotline). In immediate danger, call 911. Write these numbers on paper now and keep them with your emergency papers; your phone may be dead when you need them.",
      },
    },
    {
      type: "p",
      text: {
        en: "This guide does not cover prescription medicines. If someone in your family takes medicine for anxiety, depression, sleep, or another mental health condition, ask their doctor now how to keep an emergency supply, and never stop it suddenly on your own; stopping some of these medicines suddenly can be dangerous. Tools in this section are labeled by evidence where it matters, the same way remedies are in {{medical}}.",
      },
    },

    // ==================================================================
    { type: "h", id: "normal-reactions", text: { en: "What stress does, and why it is normal" } },
    {
      type: "p",
      text: {
        en: "After a disaster or a frightening event, almost everyone has some stress reactions. They are not weakness and not a sign that something is broken. Stress, anxiety, and low mood are common reactions after a disaster. For most people they fade on their own over days to weeks.",
      },
    },
    {
      type: "table",
      caption: { en: "Common stress reactions after a disaster" },
      head: [{ en: "Where it shows up" }, { en: "What it can look like" }],
      rows: [
        [{ en: "Body" }, { en: "Headaches, stomachaches, a racing heart, tight muscles, tiredness, sleeping too much or too little, eating more or less." }],
        [{ en: "Feelings" }, { en: "Fear, worry, sadness, anger, feeling numb, guilt (\"why did I get through when others did not?\"), relief, even humor." }],
        [{ en: "Thinking" }, { en: "Trouble concentrating or deciding, forgetfulness, upsetting memories that pop up, going over and over what happened." }],
        [{ en: "Behavior" }, { en: "Being jumpy or edgy, snapping at people, pulling away from others, avoiding reminders, drinking or smoking more." }],
      ],
    },
    {
      type: "p",
      text: {
        en: "Two things help the most, and they cost nothing: getting basic needs met (safety, water, food, warmth, sleep) and staying connected to people. The rest of this section builds on those two.",
      },
    },
    {
      type: "p",
      text: {
        en: "One caution: some body problems look like stress. Headache, dizziness, confusion, and nausea in a closed-up house with a heater or generator running can be [[carbon-monoxide|carbon monoxide]] poisoning; get everyone into fresh air first (see {{seasons}}). Chest pain, a drooping face, or sudden weakness are medical emergencies (see {{medical}}). Confusion in heat or cold can be heat stroke or [[hypothermia|hypothermia]].",
      },
    },

    // ==================================================================
    { type: "h", id: "first-hours", text: { en: "Staying steady in the first hours" } },
    {
      type: "p",
      text: {
        en: "In the first minutes of an emergency, fear pushes people to rush. Rushing causes injuries and bad choices. Many survival courses teach a simple habit for that moment, often called STOP. It is a teaching tool, not a tested treatment, but it is easy to remember when you are scared.",
      },
    },
    {
      type: "steps",
      items: [
        { en: "Stop. Do not run, drive, or grab things yet. Take one slow breath with a long breath out." },
        { en: "Think. What is the danger right now? Fire, water, cold, a person, an injury? What must happen in the next 10 minutes?" },
        { en: "Observe. Look at the people, the room, the weather, the exits. Count heads." },
        { en: "Plan. Decide the next one or two steps, say them out loud, then do them." },
      ],
    },
    {
      type: "list",
      items: [
        { en: "If you are the one leading, speak slowly and in a low voice. Give short, clear jobs: \"Sam, get the flashlights. Mia, sit with Grandpa.\" People calm down when they have something to do." },
        { en: "Tell children what is happening in a few honest words, and what will happen next: \"The power is out. We are safe. We are going to light the lanterns and eat dinner.\"" },
        { en: "Write things down: who is where, what you decided, what you need. A stressed brain forgets." },
        { en: "Practice now. Families who have walked through a fire drill, a power-out night, or a pretend evacuation freeze less in a real one, because the steps are already familiar." },
      ],
    },

    // ==================================================================
    { type: "h", id: "calm-body", text: { en: "Calming the body in two minutes" } },
    {
      type: "p",
      text: {
        en: "Fear lives in the body: fast breathing, fast heart, tight muscles. You can calm the body directly, and a calmer body makes a calmer mind. These tools are skills; like any skill, they work better if you practice them on ordinary days, not only in a crisis.",
      },
    },
    { type: "h", id: "cyclic-sighing", text: { en: "Slow breathing with a long breath out" } },
    {
      type: "p",
      text: {
        en: "Breathing that makes the breath out longer than the breath in slows the heart and calms the body. In a Stanford study, five minutes a day of [[cyclic-sighing|cyclic sighing]] improved mood and lowered breathing rate more than the same time spent meditating. Evidence label: Well-supported for short-term calm; it is one good study plus a long history of similar slow-breathing practice.",
      },
    },
    {
      type: "steps",
      items: [
        { en: "Sit or lie down if you can. Breathe in through your nose until your lungs feel full." },
        { en: "Without breathing out, take a second short sip of air in through your nose to top off your lungs." },
        { en: "Breathe out slowly through your mouth, as long as you comfortably can, like a long sigh." },
        { en: "Repeat for 1 to 5 minutes. If you feel dizzy or tingly, slow down and breathe more gently." },
      ],
    },
    { type: "sketch", sketch: "cyclic-sighing", caption: { en: "Slow breathing: sit upright, one hand on the belly, and let the breath out slowly through pursed lips, longer than the breath in." } },
    {
      type: "p",
      text: {
        en: "Box breathing is another option many people know: breathe in for a count of 4, hold for 4, out for 4, hold for 4. It also helped in the same study, though the long-exhale method did a little better. Use whichever one you will actually do.",
      },
    },
    { type: "h", id: "muscle-relaxation", text: { en: "Tense and let go (progressive muscle relaxation)" } },
    {
      type: "steps",
      items: [
        { en: "Sit or lie down. Start with your feet: curl your toes and squeeze the muscles hard (but not painfully) for about 5 seconds." },
        { en: "Let go all at once and notice the difference for 10 to 15 seconds." },
        { en: "Move up the body: calves, thighs, belly, hands (make fists), arms, shoulders (lift them to your ears), face (scrunch it)." },
        { en: "Finish with a few slow breaths. The whole thing takes about 10 minutes, and it is a good way to fall asleep." },
      ],
    },
    { type: "sketch", sketch: "progressive-muscle-relaxation", caption: { en: "Tense and let go: squeeze one hand into a tight fist for about 5 seconds, then let it fall open and soft, like the other hand." } },
    {
      type: "p",
      text: {
        en: "[[progressive-muscle-relaxation|Progressive muscle relaxation]] is one of the relaxation techniques the U.S. National Institutes of Health says may help with anxiety and stress, and it is safe for healthy people. Evidence label: Well-supported for easing stress; it works best with regular practice. Children can do a simple version: \"Squeeze like you are holding a lemon, now drop it.\"",
      },
    },
    { type: "h", id: "grounding", text: { en: "Coming back to the room (grounding)" } },
    {
      type: "p",
      text: {
        en: "When someone is flooded by fear or a memory, or feels unreal and far away, [[grounding|grounding]] pulls attention back to the here and now through the senses. Evidence label: Traditional, limited evidence; it is widely taught by counselors and in psychological first aid, but it has not been tested much on its own. It is harmless and often helps in the moment.",
      },
    },
    {
      type: "steps",
      items: [
        { en: "Name 5 things you can see." },
        { en: "Name 4 things you can feel (your feet on the floor, the chair, your shirt, cool air)." },
        { en: "Name 3 things you can hear." },
        { en: "Name 2 things you can smell." },
        { en: "Name 1 thing you can taste, or one good thing about right now." },
      ],
    },
    {
      type: "list",
      items: [
        { en: "Other grounding tricks: press your feet hard into the floor, hold something cold, say your name, the date, and where you are out loud." },
        { en: "Movement: a brisk walk, carrying firewood, push-ups, or shaking out the arms burns off the stress chemicals that build up with fear." },
      ],
    },

    // ==================================================================
    { type: "h", id: "panic", text: { en: "Panic attacks" } },
    {
      type: "p",
      text: {
        en: "A [[panic-attack|panic attack]] is a sudden wave of intense fear with strong body signs: pounding heart, shortness of breath, chest tightness, shaking, sweating, dizziness, tingling hands or lips, and a feeling of doom or of going crazy. It builds to its worst within minutes and then fades. It feels terrible but does not by itself cause harm.",
      },
    },
    {
      type: "warning",
      text: {
        en: "Do not assume chest pain is panic. If someone has chest pain or pressure, pain spreading to the arm, jaw, or back, or has heart disease, diabetes, or is older, treat it as a possible heart attack first (see {{medical}}). Panic that starts during heavy smoke, fumes, or with a heater running indoors can be poisoning; get to fresh air.",
      },
    },
    {
      type: "steps",
      items: [
        { en: "Stay with the person. Speak slowly: \"This is a panic attack. It will pass. You are safe. I am here.\"" },
        { en: "Help them breathe out slowly. Breathe with them, making your own breath out long and audible so they can follow." },
        { en: "Do not have them breathe into a paper bag. WHO advises against it for children, and it can be dangerous for anyone if the real cause is the heart or lungs." },
        { en: "Use grounding: have them name things they can see and feel." },
        { en: "Afterward, let them rest and drink some water. If attacks keep coming, practice slow breathing daily; it makes attacks less frequent for many people." },
      ],
    },

    // ==================================================================
    { type: "h", id: "worry", text: { en: "Worry, fear, and rumors" } },
    {
      type: "p",
      text: {
        en: "Worry tries to solve problems by thinking about them over and over. It feels useful but rarely is. Mental health teams who help after disasters use a set of skills called Skills for Psychological Recovery; the ones below come from it and work well at home.",
      },
    },
    { type: "h", id: "problem-solving", text: { en: "Turn worry into a plan" } },
    {
      type: "steps",
      items: [
        { en: "Write the worry down as a problem. Not \"everything is falling apart\", but \"we have 9 days of water left\"." },
        { en: "Sort it: can we do something about it, or not? Some things (the weather, when the power comes back) are outside your control. Put your energy into the ones that are not." },
        { en: "Break a big problem into small pieces. List every possible way to handle each piece, even silly ones, without judging them yet." },
        { en: "Pick the most workable idea, decide who does what and when, and do the first step today." },
        { en: "Check later: did it help? If not, try the next idea. Crossing items off a list is calming in itself." },
      ],
    },
    { type: "h", id: "worry-time", text: { en: "Helpful thinking" } },
    {
      type: "list",
      items: [
        { en: "Notice \"catastrophe\" thoughts (\"we're all going to die\", \"I can't do this\") and swap in a more accurate one: \"This is hard. We have water for 9 days and a plan for more.\" Accurate, not falsely cheerful." },
        { en: "Set a worry time: 15 minutes in the afternoon to write worries down and plan. When a worry pops up at other times, tell yourself \"later, at worry time.\" Do not schedule it near bedtime." },
        { en: "Count what went right today, even small things: the stove lit, the baby slept, the neighbor shared eggs. Saying three of these at dinner is a good family habit." },
      ],
    },
    { type: "h", id: "news", text: { en: "News and rumors" } },
    {
      type: "p",
      text: {
        en: "Staying informed matters, but too much news hurts. After the 2013 Boston Marathon bombing, people who followed coverage for 6 or more hours a day in the week after reported more acute stress than people who were actually at the bombing.",
      },
    },
    {
      type: "list",
      items: [
        { en: "Pick one or two trusted sources (local emergency management, the weather service, the radio) and set two or three times a day to check them. Then turn it off." },
        { en: "Keep children away from repeated news, especially pictures and video of injuries or destruction." },
        { en: "Rumors spread fast in emergencies and cause real harm (people drive into danger, or hoard and fight). Before acting on or passing on news, ask: who said it, how do they know, and can I check it with an official source?" },
      ],
    },

    // ==================================================================
    { type: "h", id: "daily-rhythm", text: { en: "Daily rhythm: routine, sleep, and movement" } },
    {
      type: "p",
      text: {
        en: "When normal life stops, the clock stops mattering, and days blur together. That blur makes people anxious and low. A simple routine gives everyone, especially children, a sense that life is still under control.",
      },
    },
    {
      type: "list",
      items: [
        { en: "Get up and go to bed at about the same time every day, even with no work or school." },
        { en: "Eat meals at set times, together when you can." },
        { en: "Give everyone a daily job, including children and older relatives: fetching water, checking the garden, reading to little ones, keeping the log book. Being useful is one of the strongest protections against feeling helpless." },
        { en: "Keep some school going for children, even an hour of reading and math." },
        { en: "Plan at least one thing each day that someone enjoys: a card game, music, a walk, a story, cooking something special. Disaster teams call this \"positive activities\", and it is one of the main ways they help people climb out of low mood." },
        { en: "Wash, change clothes, and keep your space tidy. It sounds small but it signals to the brain that life goes on." },
      ],
    },
    { type: "h", id: "sleep", text: { en: "Sleep" } },
    {
      type: "p",
      text: {
        en: "Sleep is when the brain sorts out the day. Without it, fear, anger, and mistakes all grow. CDC's basic advice works in an emergency too:",
      },
    },
    {
      type: "list",
      items: [
        { en: "Keep the same sleep and wake times every day." },
        { en: "Make the sleeping area dark, quiet, and a comfortable temperature (see {{seasons}} for one warm room in winter and cooling at night in summer). Earplugs and an eye mask belong in your kit." },
        { en: "Keep phones and screens out of bed. Avoid big meals, caffeine, and alcohol before bed." },
        { en: "Get outside in daylight in the morning, and move your body during the day." },
        { en: "If you cannot sleep after about 20 minutes, get up, do something quiet in dim light, and go back when sleepy. Lying there worrying teaches the brain that bed is for worrying." },
        { en: "If you must keep watch at night, take turns in shifts so everyone gets one long block of sleep instead of several broken ones." },
      ],
    },
    { type: "h", id: "movement", text: { en: "Move every day" } },
    {
      type: "p",
      text: {
        en: "Physical activity is one of the best-proven tools for stress, anxiety, and low mood. A large 2023 review of 97 earlier reviews (over 1,000 trials) found that walking, strength work, yoga, and other activity all helped with depression and anxiety, and that harder effort helped more than gentle effort. Evidence label: Well-supported. In a survival situation much of your work is exercise already; on quieter days, walk, stretch, or play active games with the children. Match the effort to your food supply: if food is short, choose gentle activity.",
      },
    },

    { type: "h", id: "reading", text: { en: "Read every day" } },
    {
      type: "p",
      text: {
        en: "A book needs no power, no signal, and no charger, and it can take a worried mind somewhere else for a while. Reading is rest, escape, and learning all at once, and reading aloud turns it into time together. With no internet, the paper books in your home are also your only library: the place to look up how to fix the pump, name the plant, or treat the rash.",
      },
    },
    { type: "h", id: "why-read", text: { en: "Why it helps, labeled by evidence" } },
    {
      type: "list",
      items: [
        { en: "Reading aloud to young children. Pediatricians advise reading aloud with children every day from birth through at least kindergarten. It builds vocabulary, language, and early literacy, and it strengthens the bond between parent and child during the years the brain grows fastest. Evidence label: Well-supported." },
        { en: "Keeping school going. When schools close, an hour of reading a day keeps children's skills from slipping. Let older children read to younger ones; both learn, and it is a real job (see the daily jobs above)." },
        { en: "Calming stress. In a small study of health science students, 30 minutes of reading lowered stress about as much as 30 minutes of yoga or of humor. Evidence label: Traditional, limited evidence. You may hear that \"6 minutes of reading cuts stress by 68%\": that figure comes from a 2009 study by a private consulting company that was never published in a scientific journal. Evidence label: Unproven." },
        { en: "Better sleep than screens. In a careful sleep-lab study (12 adults), people who read on a bright tablet for the hours before bed took about 10 minutes longer to fall asleep, had less dream (REM) sleep, and felt more tired the next morning than when they read a printed book in dim light. The paper book did not hold back the body's sleep hormone; the tablet did. Evidence label: one small but careful study; it agrees with CDC's advice to keep screens out of bed." },
        { en: "Self-help books for low mood. Self-help books based on cognitive behavioral therapy (CBT) have helped people with mild to moderate depression in many trials, often working better than no help at all. Keep one such book on the shelf. Evidence label: Well-supported for mild to moderate low mood. They do not replace care for severe depression or thoughts of suicide (see the warning signs below)." },
      ],
    },
    { type: "h", id: "when-read", text: { en: "When to read" } },
    {
      type: "list",
      items: [
        { en: "The hottest hours of a summer afternoon. Heat advice is to do hard work early and late and rest in the heat of the day (see {{seasons|keeping cool in summer}}). Gather the family in the coolest room or deep shade, with water nearby, and read aloud. It keeps everyone still, cool, and together when work should stop." },
        { en: "Long, dark winter evenings in the one warm room. One good light, everyone under blankets, one person reading aloud. It saves fuel and batteries because only one light is on." },
        { en: "Bedtime, instead of screens. A short story at the same time every night is part of a calm routine for children, and a paper book helps adults fall asleep better than a phone." },
        { en: "During night watch shifts, a few pages at a time between checks. Keep the light low and pointed at the page, and look up often (see situational awareness below)." },
        { en: "After a hard day or bad news, as a break from worry. Choose something easy and familiar; this is not the time for heavy reading." },
      ],
    },
    { type: "sketch", sketch: "family-reading", caption: { en: "On a hot afternoon, rest in deep shade with water nearby while one person reads aloud." } },
    { type: "h", id: "light-for-reading", text: { en: "Light for reading" } },
    {
      type: "list",
      items: [
        { en: "Reading in dim light does not harm the eyes. It only tires them sooner. Eye doctors say good light makes reading easier, and looking up into the distance now and then rests the eyes." },
        { en: "Use a headlamp or a small battery lantern aimed at the page, not a candle. Candles are the last choice: they start house fires (see {{power-light-sanitation|light without power}})." },
        { en: "Read by daylight when you can, near a window or outside in shade, and save batteries for the evening." },
        { en: "Anyone who needs reading glasses should keep a spare pair or two in the kit. They are cheap now and hard to replace later." },
      ],
    },
    { type: "h", id: "family-library", text: { en: "Build a family library on paper" } },
    {
      type: "list",
      items: [
        { en: "Practical books: a printed copy of this guide (from the website), a first aid manual, a garden and food-preserving book for your region, a plant and wildlife field guide, a basic home repair book, a road atlas or paper maps." },
        { en: "Books for children at every reading level, including picture books for the youngest and chapter books for later. Children like to hear favorites again and again; that is fine." },
        { en: "Stories everyone enjoys, books of poems, jokes and riddles, and a book of card and paper games." },
        { en: "School basics: a dictionary, a math workbook for each child's level, paper, and pencils." },
        { en: "One self-help book based on CBT for low mood and anxiety, and any religious or reflective books that comfort your family." },
        { en: "Store books dry and off the floor, in sealed plastic tubs if your home floods or is damp. Swap books with neighbors to keep reading fresh." },
      ],
    },

    // ==================================================================
    { type: "h", id: "substances", text: { en: "Alcohol, caffeine, and nicotine" } },
    {
      type: "p",
      text: {
        en: "Stress makes many people reach for a drink, more coffee, or a cigarette. In a long emergency, supplies also run out, and running out causes its own problems. Think about this now, while you can plan.",
      },
    },
    {
      type: "table",
      caption: { en: "When supplies run out" },
      head: [{ en: "Substance" }, { en: "What to expect if it stops suddenly" }, { en: "What to do" }],
      rows: [
        [
          { en: "Caffeine (coffee, tea, soda, energy drinks)" },
          { en: "Headache, tiredness, low mood, trouble concentrating, sometimes flu-like feelings. Starts 12 to 24 hours after the last dose, is worst at 1 to 2 days, and lasts 2 to 9 days. Uncomfortable, not dangerous." },
          { en: "Store enough coffee or tea to last, or taper down slowly when supplies get low (a little less each day) instead of stopping all at once. OTC pain relievers help the headache (follow the label)." },
        ],
        [
          { en: "Nicotine (cigarettes, vapes, chew)" },
          { en: "Cravings, irritability, anxiety, restlessness, trouble sleeping, hunger. Worst in the first week, especially the first 3 days, then fading over weeks. Each craving lasts only minutes. Not dangerous, but it makes people short-tempered." },
          { en: "Warn the family it is coming. Ride out each craving: slow breathing, a walk, a glass of water, something in the mouth. Nicotine gum or patches are OTC and can be stored. A disaster is a hard time to quit, but many people do." },
        ],
        [
          { en: "Alcohol (for someone who drinks heavily every day)" },
          { en: "Shaking, sweating, anxiety, vomiting, fast heartbeat. In severe cases: seizures, hallucinations, severe confusion, and fever (delirium tremens). This can kill." },
          { en: "Heavy daily drinkers should not stop suddenly without medical help. Talk to a doctor now about a plan. If seizures, hallucinations, severe confusion, fever, or an irregular heartbeat appear, it is an emergency: call 911 or get to a hospital." },
        ],
      ],
    },
    {
      type: "list",
      items: [
        { en: "Alcohol makes sleep worse, makes anger and sadness worse, and causes accidents with fire, tools, and generators. In an emergency, keep it to very little or none, and never give it to someone who is cold (see {{seasons}})." },
        { en: "If someone in the family is in recovery from alcohol or drugs, an emergency is a high-risk time. Keep their routines, their support contacts, and their meetings (in person or by phone) going as much as you can." },
      ],
    },

    // ==================================================================
    { type: "h", id: "friction", text: { en: "Noticing friction: small problems before they become big ones" } },
    {
      type: "p",
      text: {
        en: "Friction is the small, repeated rub that wears people down: the same chore argued over every day, the flashlight that is never where it should be, a teenager who goes silent, two people who keep snapping at each other. In normal times, friction gets let out at work, school, or with friends. Shut in together under stress, a family has nowhere for it to go, and small rubs turn into big fights. The skill is to notice friction early, name it, and fix it while it is still small.",
      },
    },
    { type: "h", id: "friction-signs", text: { en: "Signs of building friction" } },
    {
      type: "list",
      items: [
        { en: "The same complaint or argument comes up again and again." },
        { en: "Someone sighs, rolls their eyes, or goes quiet when a certain task or person comes up." },
        { en: "Jobs quietly stop getting done, or one person is doing most of them." },
        { en: "People start keeping score (\"I did the water three days in a row\")." },
        { en: "Someone is spending more and more time alone, or never gets any time alone." },
        { en: "Little things go wrong over and over: tools lost, doors left open, food spoiling. Things that keep going wrong are information: something in the setup needs changing." },
      ],
    },
    { type: "h", id: "halt", text: { en: "Check yourself first: hungry, angry, lonely, tired" } },
    {
      type: "p",
      text: {
        en: "Before a hard conversation, or when you feel yourself about to snap, check HALT: am I Hungry, Angry, Lonely, or Tired? Most short tempers in an emergency come from one of these four, not from the other person. Eat, rest, or talk to someone first, then deal with the problem. Evidence label: Traditional, limited evidence; HALT comes from addiction recovery groups, not from research, but hunger and lack of sleep are well known to shorten tempers.",
      },
    },
    { type: "h", id: "family-meeting", text: { en: "A short daily or weekly family meeting" } },
    {
      type: "steps",
      items: [
        { en: "Pick a regular time, like after dinner. Keep it short: 15 to 20 minutes." },
        { en: "Start with something good: one thing that went well, or one thank-you for each person." },
        { en: "Ask: what is bugging you? Each person gets a turn without being interrupted. Children count too." },
        { en: "For each problem, look for a fix in the setup, not a person to blame. \"The flashlight is always missing\" → hang it on a hook by the door. \"Water duty is unfair\" → make a rotating job chart." },
        { en: "Agree on one or two changes, write them down, and check next time whether they worked." },
        { en: "End with the plan for tomorrow, so everyone knows what is coming." },
      ],
    },
    { type: "sketch", sketch: "family-meeting", caption: { en: "A short family meeting around the table: everyone gets a turn, and the job chart on the wall shows who does what." } },
    { type: "h", id: "fair-fights", text: { en: "Rules for disagreeing" } },
    {
      type: "list",
      items: [
        { en: "Talk about the problem, not the person: \"The dishes sat out overnight and drew ants\" instead of \"You're lazy.\"" },
        { en: "Say how it affects you: \"When the gate is left open, I worry the dog will get out.\"" },
        { en: "One problem at a time. Do not bring up everything from the past month." },
        { en: "Anyone can call a time-out when voices rise. Agree on a set break (20 to 30 minutes), then come back. Walking away is fine; walking away for good is not." },
        { en: "No name-calling, no threats, no hitting, no breaking things, ever." },
        { en: "Repair afterward. A simple \"I'm sorry I yelled\" goes a long way, especially from parents to children." },
      ],
    },
    {
      type: "list",
      items: [
        { en: "Give everyone a little private time and space each day, even if it is just a corner with a curtain, headphones, or a walk around the yard." },
        { en: "Rotate the worst jobs (toilet buckets, dishes, night watch) on a written chart so no one feels stuck with them." },
        { en: "Make small rules for shared space that come up again and again: where boots go, where tools live, quiet hours." },
      ],
    },
    {
      type: "warning",
      text: {
        en: "Friction is normal. Abuse is not. If anyone in the home is being hit, threatened, controlled, or is afraid of another family member, that is not a problem for a family meeting. Call 911 if in immediate danger, or the National Domestic Violence Hotline at 1-800-799-7233 (text START to 88788). Emergencies and shelters do not make abuse acceptable, and help still exists during disasters.",
      },
    },

    // ==================================================================
    { type: "h", id: "awareness", text: { en: "Situational awareness: calm, not jumpy" } },
    {
      type: "p",
      text: {
        en: "[[situational-awareness|Situational awareness]] means knowing what is going on around you so you can spot trouble early and have time to act. It is not fear, and it is not suspecting everyone. Done right, it actually lowers anxiety, because you are not guessing.",
      },
    },
    { type: "h", id: "baseline", text: { en: "Baseline and anomaly" } },
    {
      type: "p",
      text: {
        en: "The U.S. Marine Corps teaches awareness with two ideas. The [[baseline|baseline]] is what is normal for a place and time: the usual sounds, cars, people, and routines on your street. An anomaly is anything that breaks the baseline. It can be something present that should not be (a car idling for an hour, a stranger checking door handles) or something missing that should be there (no birds, no kids playing, a neighbor's lights off when they are always on). Baseline plus anomaly leads to a decision: ignore it, watch it, or act.",
      },
    },
    {
      type: "list",
      items: [
        { en: "Learn your baseline now: walk your street at different times. Who lives where, which cars belong, which dogs bark, what time things happen." },
        { en: "In an emergency, the baseline changes (no traffic, generators running, people outside more). Take a day to learn the new normal before you judge what is odd." },
        { en: "An anomaly is a reason to pay attention, not proof of danger. Most turn out to be harmless. Watch, ask a neighbor, and decide calmly." },
        { en: "Pay attention to what is missing as much as what is there." },
      ],
    },
    { type: "h", id: "heads-up", text: { en: "Heads up, phone down" } },
    {
      type: "p",
      text: {
        en: "Phones steal attention more than people realize. In a university study, only about 1 in 4 people walking while talking on a phone noticed a clown riding a unicycle right next to their path, compared with about half of people walking alone and 7 in 10 walking with a friend. Most of the people who missed it were surprised they had.",
      },
    },
    {
      type: "list",
      items: [
        { en: "When moving outside, in a parking lot, or arriving home, put the phone and earbuds away and look around." },
        { en: "When you enter a building or room, notice the exits. When you sit down somewhere public, pick a seat where you can see the door if you can." },
        { en: "At home, keep a few lights or a motion light outside, keep shrubs trimmed by windows and doors, and know who is at the door before you open it. More on protecting the house is in {{home-defense}}." },
        { en: "Trust a gut feeling that something is wrong enough to step back and look again. You do not need to explain it to anyone." },
        { en: "Agree on a simple family code word that means \"leave now, no questions; I'll explain later.\"" },
      ],
    },
    { type: "h", id: "awareness-games", text: { en: "Awareness games for the whole family" } },
    {
      type: "p",
      text: {
        en: "Awareness is a skill you can train like a muscle, and games make it fun instead of scary for children.",
      },
    },
    {
      type: "list",
      items: [
        { en: "[[kims-game|Kim's Game]]: put 10 to 20 small objects on a tray, let everyone look for a minute, cover it with a towel, and have each person list what they remember. For young children, take one item away and ask what is missing. Scouts and the military have used this game for over a hundred years." },
        { en: "What changed? One person leaves the room; another moves, removes, or adds three things. The first person comes back and finds them." },
        { en: "Walk and tell: on a walk, stop now and then and ask \"what color was the last car that passed?\" or \"how many dogs have we heard?\"" },
        { en: "Exits game: in any new building, the first person to point out two ways out wins." },
        { en: "Faces and details: after a stranger leaves (a delivery driver, a clerk), each person describes them: height, hair, clothes, anything carried. Check how close you all got." },
      ],
    },
    { type: "sketch", sketch: "kims-game", caption: { en: "Kim's Game: study a tray of small things for a minute, cover it with a towel, then list everything you remember." } },
    {
      type: "p",
      text: {
        en: "Too much vigilance is a problem of its own. Someone who scans every sound all night, cannot sit with their back to a door, and startles at everything is not safer; they are exhausted, and exhausted people miss things. Take turns being on watch so others can truly rest, and if one person cannot switch off at all, use the calming tools above and see the part on when stress becomes more.",
      },
    },

    // ==================================================================
    { type: "h", id: "helping-others", text: { en: "Helping someone who is upset (psychological first aid)" } },
    {
      type: "p",
      text: {
        en: "[[psychological-first-aid|Psychological first aid]] is the World Health Organization's method for helping someone in the hours and days after a crisis. Anyone can do it; you do not need training as a counselor. Its three action words are look, listen, and link.",
      },
    },
    {
      type: "table",
      caption: { en: "Look, listen, link" },
      head: [{ en: "Step" }, { en: "What it means" }],
      rows: [
        [{ en: "Look" }, { en: "Check that it is safe. Look for people with urgent needs (injured, cold, lost children, people who cannot care for themselves) and people who are very upset or in shock." }],
        [{ en: "Listen" }, { en: "Go to the person, introduce yourself, and sit with them. Ask what they need and what worries them most. Listen if they want to talk, and help them feel calm. Do not push them to talk." }],
        [{ en: "Link" }, { en: "Help with practical needs (water, food, warmth, a phone call), give accurate information, and connect them with family, friends, and services." }],
      ],
    },
    {
      type: "list",
      items: [
        { en: "Do: be honest, stay calm, respect their choices, and make it clear they can come back for help later even if they say no now." },
        { en: "Do not: make promises you cannot keep, give false information, force help on someone, or pressure them to tell their story." },
        { en: "Do not hold a \"debriefing\" where people must go over what happened in detail. WHO advises against this kind of session: it does not prevent later problems and may make some people worse. Let people talk if and when they want to." },
        { en: "Some people need more than this: someone badly hurt, someone who cannot care for themselves or their children, or someone who may hurt themselves or others. Get them medical or emergency help." },
        { en: "Look after yourself too. Helpers burn out. Eat, sleep, take breaks, and talk to someone about what you saw." },
      ],
    },

    // ==================================================================
    { type: "h", id: "children", text: { en: "Children" } },
    { type: "sketch", sketch: "comforting-child", caption: { en: "Get down to a child's eye level, hold their hands, and speak calmly and simply." } },
    {
      type: "p",
      text: {
        en: "Children take their cues from the adults around them. A calm parent who explains simply and keeps routines going is the best protection a child has. Most children's stress reactions fade over time.",
      },
    },
    {
      type: "table",
      caption: { en: "Common reactions in children" },
      head: [{ en: "Age" }, { en: "You may see" }],
      rows: [
        [{ en: "All ages" }, { en: "Stomachaches or headaches, nightmares and sleep problems, trouble concentrating, losing interest in things they liked, guilt." }],
        [{ en: "5 and younger" }, { en: "Clinging to parents, crying, tantrums, irritability, going back to younger habits (bed-wetting, thumb-sucking, baby talk), new fears of the dark or of being alone, playing out the event over and over." }],
        [{ en: "6 and older" }, { en: "Trouble with schoolwork, pulling away from family and friends, avoiding reminders, anger, acting out or breaking things. Teens may take risks or try alcohol or drugs." }],
      ],
    },
    {
      type: "list",
      items: [
        { en: "Keep them safe and their basic needs met first." },
        { en: "Tell the truth at their level, in few words. Do not make promises you cannot keep (\"Daddy will be home tonight\")." },
        { en: "Let them feel sad or cry. Let them talk, write, draw, or play about what happened; that is how children work things through." },
        { en: "Keep routines: bedtime stories, family meals, games." },
        { en: "If they cannot sleep, let them sleep near you for a while or leave a small light on." },
        { en: "Give small choices (what to wear, which game) and small real jobs. Feeling useful and in control helps." },
        { en: "Stay calm when they regress or have big feelings. Getting angry at bed-wetting or tantrums makes it last longer." },
        { en: "Limit what they see and hear of the news and of adult worry talk." },
        { en: "Lots of hugs and time close to you." },
        { en: "If reactions last more than a month, or if new problems appear (flashbacks, being very jumpy, going numb, or deep sadness lasting weeks), get help from a doctor or counselor as soon as you can." },
      ],
    },

    // ==================================================================
    { type: "h", id: "older-adults", text: { en: "Older adults and people who need extra support" } },
    {
      type: "list",
      items: [
        { en: "People with dementia often become more confused and upset when routines, rooms, or lighting change. Keep familiar objects, faces, and daily patterns, keep a light on at night, and give simple one-step instructions." },
        { en: "Keep spare batteries for hearing aids and spare glasses. Someone who cannot hear or see well becomes isolated and frightened quickly." },
        { en: "Older people may hide how much they are struggling so as not to be a burden. Ask directly and give them a real job; being needed matters." },
        { en: "People with autism or sensory differences may be overwhelmed by noise, crowds, and change. Keep comfort items, ear protection, and predictable routines, and tell them ahead of time what will happen next." },
      ],
    },

    // ==================================================================
    { type: "h", id: "grief", text: { en: "Grief and loss" } },
    {
      type: "p",
      text: {
        en: "Grief is the natural response to loss: the death of someone you love, but also the loss of a home, a pet, a job, a way of life, or a sense of safety. Long emergencies bring many losses at once. Grief can include shock, sadness, anger, guilt, numbness, trouble sleeping, and losing appetite. It comes in waves, and there is no right way or timeline.",
      },
    },
    {
      type: "list",
      items: [
        { en: "Name the loss out loud. \"We lost the house. That is a real loss, and it is okay to be sad.\"" },
        { en: "Lean on others: talk with family, friends, neighbors, or your faith community if you have one." },
        { en: "Keep some routine and take care of the body: eat, sleep, move." },
        { en: "Find a way to mark the loss together, even a simple one: a few words, a candle (safely, see {{power-light-sanitation}}), a planted tree, a story about the person or pet. Rituals help children especially." },
        { en: "Children grieve in bursts: sad one minute, playing the next. That is normal. Answer their questions simply and honestly, and use real words like \"died\" rather than \"went to sleep\", which can make them afraid of sleeping." },
        { en: "Normal grief does not need treatment. WHO advises against offering structured therapy to every grieving person. What helps most is people, time, and practical support." },
        { en: "Get help if grief stops someone from caring for themselves or their children for weeks on end, or if they talk about wanting to die." },
      ],
    },

    // ==================================================================
    { type: "h", id: "more-than-stress", text: { en: "When it is more than stress" } },
    {
      type: "p",
      text: {
        en: "For most people, stress reactions slowly ease over days and weeks. For some, they do not. If problems last more than a month, keep getting worse, or get in the way of daily life, relationships, or caring for the family, it may be [[ptsd|PTSD]], depression, or another condition that deserves real treatment. These are common, they are not weakness, and good treatments exist. Most people who get treatment get better.",
      },
    },
    {
      type: "list",
      items: [
        { en: "PTSD signs: upsetting memories, nightmares, or flashbacks that keep coming back; avoiding anything that is a reminder; feeling on guard all the time, jumpy, unable to relax or sleep; feeling numb, detached, or guilty." },
        { en: "Depression signs: feeling down, empty, or hopeless most days; losing interest in things; big changes in sleep or appetite; no energy; feeling worthless; trouble thinking." },
        { en: "What helps while you wait for or cannot reach care: everything above (routine, sleep, movement, connection, helping others, slow breathing), and avoiding alcohol and drugs, which make both worse." },
        { en: "Get help as soon as it is possible: a doctor, a counselor, a clinic, or the Disaster Distress Helpline (1-800-985-5990). Phone and video counseling may work even when offices are closed." },
      ],
    },

    // ==================================================================
    { type: "h", id: "suicide", text: { en: "If someone talks about suicide" } },
    {
      type: "p",
      text: {
        en: "Suicide is often preventable, and family members are often the first to see the signs. Take every sign seriously, especially if it is new or getting worse.",
      },
    },
    {
      type: "list",
      items: [
        { en: "Talking about wanting to die, about great guilt or shame, or about being a burden to others." },
        { en: "Feeling empty, hopeless, trapped, or having no reason to live; unbearable emotional or physical pain." },
        { en: "Making a plan, looking for ways to die, giving away important things, saying goodbye, putting affairs in order." },
        { en: "Withdrawing from people, big mood swings (including a sudden calm after deep sadness), taking dangerous risks, using more alcohol or drugs, eating or sleeping much more or less." },
      ],
    },
    {
      type: "p",
      text: {
        en: "The U.S. National Institute of Mental Health and the 988 Lifeline teach five steps anyone can take:",
      },
    },
    {
      type: "steps",
      items: [
        { en: "Ask. Ask directly and calmly: \"Are you thinking about suicide?\" Asking does not put the idea in someone's head; research suggests talking about it may lower suicidal thoughts." },
        { en: "Be there. Stay with them, in person if you can. Listen without judging or arguing. Never promise to keep it a secret." },
        { en: "Help keep them safe. Ask if they have a plan. Put time and distance between the person and anything they could use to hurt themselves: lock up or remove firearms (or ask a trusted person to hold them for now), and lock up or remove medicines, alcohol, and other dangerous items." },
        { en: "Help them connect. Call or text 988 together, or reach a doctor, counselor, faith leader, or other trusted person. If they are in immediate danger, call 911." },
        { en: "Follow up. Check on them again the next day and the days after. Ongoing contact makes a real difference." },
      ],
    },
    {
      type: "p",
      text: {
        en: "If phones are down and help cannot be reached: do not leave the person alone. Bring in other trusted adults so someone is always with them, keep dangerous items away, and keep talking and listening. Send someone to the nearest place where help can be found: a fire station, hospital, police, shelter, or a neighbor with a working radio or phone.",
      },
    },

    // ==================================================================
    { type: "h", id: "natural-remedies", text: { en: "Natural remedies for stress and sleep, labeled by evidence" } },
    {
      type: "p",
      text: {
        en: "Each remedy carries one of three labels. Well-supported: good studies show it helps. Traditional, limited evidence: long use and some small studies, but not proven. Unproven: little or no good evidence it works. 'Natural' does not mean safe. Herbs are not tested and controlled like medicines, and some interact dangerously with prescription medicines and birth control. Be extra careful with children, during pregnancy and breastfeeding, and with anyone who takes prescription medicine.",
      },
    },
    {
      type: "table",
      caption: { en: "Tools and remedies for stress, anxiety, low mood, and sleep" },
      head: [{ en: "Tool or remedy" }, { en: "Used for" }, { en: "Evidence" }, { en: "Warnings" }],
      rows: [
        [{ en: "Physical activity (walking, strength work, yoga)" }, { en: "Anxiety, low mood, stress" }, { en: "Well-supported" }, { en: "Match effort to food supply and health. Stop for chest pain." }],
        [{ en: "Slow breathing with a long breath out" }, { en: "Fast calm, mood" }, { en: "Well-supported for short-term calm" }, { en: "Slow down if dizzy or tingly." }],
        [{ en: "Progressive muscle relaxation" }, { en: "Stress, anxiety, falling asleep" }, { en: "Well-supported" }, { en: "Generally safe. Do not squeeze injured muscles." }],
        [{ en: "Reading for pleasure" }, { en: "Stress, falling asleep" }, { en: "Traditional, limited evidence (small studies)" }, { en: "None. Use a paper book or a dim light, not a bright screen, at night." }],
        [{ en: "Mindfulness meditation" }, { en: "Anxiety, low mood" }, { en: "Well-supported, modest benefit" }, { en: "Rarely, it stirs up upsetting memories; stop if it makes things worse." }],
        [{ en: "Grounding (5-4-3-2-1)" }, { en: "Panic, feeling unreal, flashbacks" }, { en: "Traditional, limited evidence" }, { en: "None known." }],
        [{ en: "Chamomile (tea or extract)" }, { en: "Anxiety, sleep" }, { en: "Traditional, limited evidence (a few small trials for anxiety)" }, { en: "Allergy risk, including rare severe reactions, especially if allergic to ragweed, daisies, marigolds, or chrysanthemums. Can interact with blood thinners. Avoid in pregnancy." }],
        [{ en: "Lavender (by mouth or as a scent)" }, { en: "Anxiety" }, { en: "Traditional, limited evidence (studies mostly poor quality)" }, { en: "By mouth: upset stomach, headache. Children and teens should not take lavender by mouth. Not in pregnancy or breastfeeding." }],
        [{ en: "St. John's wort" }, { en: "Mild low mood" }, { en: "Traditional, limited evidence (mixed results; may help mild depression)" }, { en: "DANGEROUS INTERACTIONS: makes birth control pills fail and weakens many medicines (heart, transplant, HIV, seizure, blood thinners). With antidepressants it can cause a life-threatening reaction. Not in pregnancy. Do not use if anyone takes any prescription medicine." }],
        [{ en: "Kava" }, { en: "Anxiety" }, { en: "Traditional, limited evidence" }, { en: "DO NOT STOCK OR USE: linked to severe liver damage, even with short-term use (FDA warning)." }],
        [{ en: "Alcohol to calm nerves or sleep" }, { en: "Stress, sleep" }, { en: "Unproven (it makes sleep and mood worse)" }, { en: "Worsens anxiety and depression, causes accidents, and heavy daily use leads to dangerous withdrawal." }],
      ],
    },

    // ==================================================================
    { type: "h", id: "plan", text: { en: "Your plan for a steady mind, from now to 2 years" } },
    {
      type: "table",
      caption: { en: "A step-by-step plan" },
      head: [{ en: "When" }, { en: "What to do" }],
      rows: [
        [{ en: "Now (before anything happens)" }, { en: "Write the crisis numbers (988, 1-800-985-5990, 1-800-799-7233, local doctor) on paper and put them in your kit. Ask doctors about emergency supplies of any prescription mental health medicines. Make a plan with any heavy daily drinker. Learn and practice slow breathing and muscle relaxation as a family. Learn your street's baseline. Agree on a family code word. Start a family library of paper books, and a spare pair of reading glasses for anyone who needs them." }],
        [{ en: "First 72 hours" }, { en: "STOP before acting. Count heads, give everyone a job, explain to children in simple words. Check news only at set times from trusted sources. Sleep in shifts if someone must watch. Use breathing and grounding for anyone who panics." }],
        [{ en: "By 90 days" }, { en: "Set a daily routine and a job chart. Start short family meetings. Keep some school going. Do one enjoyable thing every day. Read aloud daily, especially with young children. Watch for friction and fix the setup, not the person. Taper caffeine if supplies are low. Play awareness games." }],
        [{ en: "By 6 months" }, { en: "Check on each person one by one: sleep, appetite, mood, worries. Anyone with problems lasting more than a month gets help as soon as it can be reached. Keep routines and celebrations going (birthdays, holidays) in whatever form you can." }],
        [{ en: "By 1 year" }, { en: "Mark the losses together. Teach older children psychological first aid basics (look, listen, link). Review which friction fixes worked and which rules need updating." }],
        [{ en: "By 2 years" }, { en: "Look back on what the family has learned and handled. Share skills with neighbors; helping others is one of the strongest protections for your own mind. Keep watching for long-term depression or PTSD and get treatment when it is available." }],
      ],
    },

    // ==================================================================
    { type: "source", title: "Psychological First Aid: Guide for Field Workers", publisher: "World Health Organization, War Trauma Foundation, World Vision International", url: "https://www.who.int/publications/i/item/9789241548205" },
    { type: "source", title: "WHO Psychological First Aid Pocket Guide (look, listen, link; dos and don'ts)", publisher: "Catholic Relief Services (summary of the WHO guide)", url: "https://www.crs.org/sites/default/files/ho_2.10_who_psychological_first_aid_pocket_guide.pdf" },
    { type: "source", title: "Guidelines for the Management of Conditions Specifically Related to Stress", publisher: "World Health Organization (2013)", url: "https://www.ncbi.nlm.nih.gov/books/NBK159725/" },
    { type: "source", title: "WHO Mental Health Gap Action Programme recommendations (no psychological debriefing after recent trauma)", publisher: "PLoS Medicine / WHO (Dua et al.)", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3217030" },
    { type: "source", title: "Disaster Distress Helpline", publisher: "Substance Abuse and Mental Health Services Administration (SAMHSA)", url: "https://store.samhsa.gov/sites/default/files/PEP12-DDHBRO.pdf" },
    { type: "source", title: "Skills for Psychological Recovery: Field Operations Guide", publisher: "National Center for PTSD and National Child Traumatic Stress Network", url: "https://www.nctsn.org/sites/default/files/interventions/spr_fact_sheet.pdf" },
    { type: "source", title: "Common Reactions After Trauma", publisher: "U.S. Department of Veterans Affairs, National Center for PTSD", url: "https://www.ptsd.va.gov/understand/isitptsd/common_reactions.asp" },
    { type: "source", title: "Post-Traumatic Stress Disorder", publisher: "National Institute of Mental Health (NIMH)", url: "https://www.nimh.nih.gov/health/topics/post-traumatic-stress-disorder-ptsd" },
    { type: "source", title: "Brief structured respiration practices enhance mood and reduce physiological arousal", publisher: "Cell Reports Medicine (Balban et al., Stanford, 2023)", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9873947" },
    { type: "source", title: "Relaxation Techniques: What You Need To Know", publisher: "National Center for Complementary and Integrative Health (NCCIH, NIH)", url: "https://www.nccih.nih.gov/health/relaxation-techniques-what-you-need-to-know" },
    { type: "source", title: "Mind and Body Approaches for Stress and Anxiety: What the Science Says", publisher: "NCCIH", url: "https://www.nccih.nih.gov/health/providers/digest/mind-and-body-approaches-for-stress-science" },
    { type: "source", title: "Media's role in broadcasting acute stress following the Boston Marathon bombings", publisher: "Proceedings of the National Academy of Sciences (Holman, Garfin, Silver, 2014)", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3890785" },
    { type: "source", title: "Tips for Better Sleep", publisher: "CDC", url: "https://www.cdc.gov/sleep/about_sleep/sleep_hygiene.html" },
    { type: "source", title: "Effectiveness of physical activity interventions for improving depression, anxiety and distress: an overview of systematic reviews", publisher: "British Journal of Sports Medicine (Singh et al., 2023)", url: "https://bjsm.bmj.com/content/bjsports/early/2023/07/11/bjsports-2022-106195.full.pdf" },
    { type: "source", title: "A critical review of caffeine withdrawal", publisher: "Psychopharmacology (Juliano and Griffiths, Johns Hopkins, 2004)", url: "https://pure.johnshopkins.edu/en/publications/a-critical-review-of-caffeine-withdrawal-empirical-validation-of--5/" },
    { type: "source", title: "Managing Nicotine Withdrawal", publisher: "Smokefree.gov (National Cancer Institute)", url: "https://smokefree.gov/challenges-when-quitting/managing-withdrawal" },
    { type: "source", title: "Handling Nicotine Withdrawal and Triggers When You Decide To Quit Tobacco", publisher: "National Cancer Institute", url: "https://www.cancer.gov/about-cancer/causes-prevention/risk/tobacco/withdrawal-fact-sheet" },
    { type: "source", title: "Alcohol withdrawal", publisher: "MedlinePlus (U.S. National Library of Medicine)", url: "https://medlineplus.gov/ency/article/000764.htm" },
    { type: "source", title: "Delirium tremens", publisher: "MedlinePlus (U.S. National Library of Medicine)", url: "https://medlineplus.gov/ency/article/000766.htm" },
    { type: "source", title: "Profiling and Tactical Tracking (baseline and anomaly), Student Handout B2A0225XQ", publisher: "U.S. Marine Corps, The Basic School", url: "https://www.trngcmd.marines.mil/Portals/207/Docs/TBS/B2A0225XQ%20Profiling%20and%20Tactical%20Tracking.pdf" },
    { type: "source", title: "Did you see the unicycling clown? Inattentional blindness while walking and talking on a cell phone", publisher: "Applied Cognitive Psychology (Hyman et al., Western Washington University, 2010)", url: "https://www.bps.org.uk/research-digest/talking-mobile-phone-youre-less-likely-notice-unicycling-clown" },
    { type: "source", title: "Play Kim's Game", publisher: "The Scout Association (UK)", url: "https://scouts.org.uk/activities/play-kims-game" },
    { type: "source", title: "Helping Children and Adolescents Cope With Traumatic Events", publisher: "NIMH", url: "https://www.nimh.nih.gov/health/publications/helping-children-and-adolescents-cope-with-disasters-and-other-traumatic-events" },
    { type: "source", title: "Helping Children Cope with a Disaster", publisher: "CDC", url: "https://www.cdc.gov/children-and-school-preparedness/before-during-after/helping-children-cope.html" },
    { type: "source", title: "Grief", publisher: "CDC (How Right Now)", url: "https://www.cdc.gov/howrightnow/emotion/grief/index.html" },
    { type: "source", title: "Warning Signs of Suicide", publisher: "NIMH", url: "https://www.nimh.nih.gov/health/publications/warning-signs-of-suicide" },
    { type: "source", title: "5 Action Steps to Help Someone Having Thoughts of Suicide", publisher: "NIMH", url: "https://www.nimh.nih.gov/health/publications/5-action-steps-to-help-someone-having-thoughts-of-suicide" },
    { type: "source", title: "How and Why the 5 Steps Can Help", publisher: "#BeThe1To (988 Suicide & Crisis Lifeline)", url: "https://bethe1to.com/bethe1to-steps-evidence/" },
    { type: "source", title: "National Domestic Violence Hotline", publisher: "The Hotline (funded by U.S. Department of Health and Human Services)", url: "https://www.thehotline.org/" },
    { type: "source", title: "Literacy Promotion: An Essential Component of Primary Care Pediatric Practice: Policy Statement", publisher: "American Academy of Pediatrics (Klass, Miller-Fitzwater, High; Pediatrics, 2024)", url: "https://doi.org/10.1542/peds.2024-069090" },
    { type: "source", title: "Beyond Literacy: Shared Reading Starting at Birth Offers Lifelong Benefits", publisher: "American Academy of Pediatrics (HealthyChildren.org)", url: "https://www.healthychildren.org/English/news/Pages/beyond-literacy-shared-reading-starting-in-infancy-offers-lifelong-benefits.aspx" },
    { type: "source", title: "Stress Management Strategies For Students: The Immediate Effects Of Yoga, Humor, And Reading On Stress", publisher: "Journal of College Teaching & Learning (Rizzolo et al., Seton Hall University, 2009)", url: "https://clutejournals.com/index.php/TLC/article/view/1117" },
    { type: "source", title: "Reading 'can help reduce stress' (the unpublished 6-minute, 68% claim)", publisher: "The Telegraph (report on a Mindlab International study, 2009)", url: "https://www.telegraph.co.uk/health/healthnews/5070874/Reading-can-help-reduce-stress.html" },
    { type: "source", title: "Evening use of light-emitting eReaders negatively affects sleep, circadian timing, and next-morning alertness", publisher: "Proceedings of the National Academy of Sciences (Chang, Aeschbach, Duffy, Czeisler, 2015)", url: "https://pubmed.ncbi.nlm.nih.gov/25535358/" },
    { type: "source", title: "Self-help books for depression: how can practitioners and patients make the right choice?", publisher: "British Journal of General Practice (Anderson et al., 2005)", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC1463163" },
    { type: "source", title: "Bibliotherapy: the review, organization, and dissemination of recommended reading for psychiatry patients (summary of bibliotherapy meta-analyses)", publisher: "British Columbia Medical Journal", url: "https://bcmj.org/node/10498" },
    { type: "source", title: "Eye myths: reading in dim light", publisher: "American Academy of Ophthalmology", url: "https://www.aao.org/eye-health/tips-prevention/five-vision-myths" },
    { type: "source", title: "Anxiety and Complementary Health Approaches: What the Science Says (chamomile, kava, lavender)", publisher: "NCCIH", url: "https://www.nccih.nih.gov/health/providers/digest/anxiety-and-complementary-health-approaches-science" },
    { type: "source", title: "Herbal treatment for anxiety: Is it effective?", publisher: "Mayo Clinic", url: "https://www.mayoclinic.org/diseases-conditions/generalized-anxiety-disorder/expert-answers/herbal-treatment-for-anxiety/FAQ-20057945" },
    { type: "source", title: "St. John's Wort and Depression: In Depth", publisher: "NCCIH", url: "https://www.nccih.nih.gov/health/st-johns-wort-and-depression-in-depth" },
  ],
};
