import type { Section } from "../types";

// Section 10: Home Defense. Facts checked Nov 15, 2026 against the sources listed at the end.
// Scope (locked decision): basic defense inside a small family home. Knives over guns. The guide
// does not teach fighting with weapons or shooting; it covers keeping people out, getting family
// to safety, last-resort escape, the law in general terms, and safe storage of any guns already
// in the home.
// Numbers that should not be "simplified":
// - Strike plates: 3-inch screws into the wall stud (King County Sheriff, Seattle PD: 3-4 inch);
//   deadbolt throw at least 1 inch (King County); wide-angle 160° viewer no higher than 58 in
//   (Shorewood PD).
// - Sliding doors: dowel or bar in the track; screws in the upper track or a pin through both
//   panels to stop lifting (Shorewood PD, King County, Sacramento PD).
// - Security bars: quick-release devices that open from inside without a key, tool, or great
//   effort (USFA); at least one window in each sleeping room with a release device (NFPA).
// - UNC Charlotte burglar survey (Kuhns et al., 2012-13): 422 incarcerated burglars in NC, KY, OH;
//   about 60% said an alarm would make them pick another target; most entered through open or
//   forced doors and windows; about 1 in 8 picked locks or used a key; fewer than a third
//   gathered information first. Funded by the alarm industry's research foundation (AIREF);
//   self-report from people who were caught.
// - Neighborhood watch (Campbell review, Bennett/Holloway/Farrington 2008): crime 16-26% lower;
//   about half of schemes showed an effect.
// - Street lighting (Welsh & Farrington Campbell review 2008): 21% less crime across 13 studies;
//   2022 update with 21 studies: 14%. Public street lighting, not porch lights.
// - Disaster looting: rare in typical disasters (U. Delaware Disaster Research Center,
//   Quarantelli); domestic violence rises after disasters.
// - FEMA scams: FEMA never charges for help or inspections, inspectors never ask for banking
//   information, staff carry photo ID; FEMA helpline 1-800-621-3362; fraud hotline 866-720-5721.
// - 911: call if you can, text if you can't (FCC); a bounce-back text means texting is not
//   available there.
// - Wasp spray on people: off-label pesticide use, against federal law (Texas A&M AgriLife
//   school IPM newsletter citing extension pesticide experts).
// - Pepper spray: prohibited weapon in the UK (Firearms Act 1968 s.5(1)(b)) and Canada.

export const homeDefense: Section = {
  id: "home-defense",
  number: 10,
  title: { en: "Home Defense" },
  summary: { en: "Keeping your family safe at home: stronger doors and windows, neighbors who look out for each other, a safe room, what to do during a break-in, and the law." },
  blocks: [
    {
      type: "p",
      text: {
        en: "Most of home defense is quiet work done long before anything happens: doors that don't kick in, windows that don't slide open, lights, neighbors who know each other, and a family that knows what to do. This section covers those first, then what to do if someone does get in. The goal is always the same: everyone in the family alive and unhurt. Things can be replaced; people can't.",
      },
    },
    {
      type: "warning",
      text: {
        en: "If you can reach 911 or local police, use them first. Never go looking for an intruder, and never risk a life for property. Laws on self-defense, weapons, and sprays are different in every state and country, and you are responsible for following yours. This guide does not teach fighting with weapons or shooting.",
      },
    },

    // ==================================================================
    { type: "h", id: "real-risks", text: { en: "What the real risks look like" } },
    {
      type: "p",
      text: {
        en: "Movies show neighbors turning on each other after a disaster. Research says otherwise. Disaster researchers at the University of Delaware have studied this for decades: looting and violence are rare in typical disasters, ordinary crime often drops, and the first rescuers are usually neighbors. Planning around that truth keeps you from wasting money and from treating the people next door as enemies.",
      },
    },
    {
      type: "list",
      items: [
        { en: "Everyday burglary is the most likely threat. Most burglars want an empty house, a quick way in, and no one watching. Make your house a poor choice and most will move on." },
        { en: "After a disaster, the usual problems are theft of things left outside (generators, fuel, bikes), scammers pretending to be inspectors or contractors, and people going door to door asking for help." },
        { en: "Violence inside homes goes up after disasters. Stress, crowding, and alcohol make abuse more likely. If anyone in your home is unsafe, see the help numbers in {{mind|Mind}}." },
        { en: "A long, widespread breakdown with real lawlessness is rare but possible. The same basics apply: strong doors, neighbors working together, a safe room, and staying out of sight." },
      ],
    },

    // ==================================================================
    { type: "h", id: "layers", text: { en: "Think in layers" } },
    {
      type: "p",
      text: {
        en: "No single lock stops everyone. Instead, stack layers so a person trying to get in has to beat one thing after another, while you get more warning and more time:",
      },
    },
    {
      type: "steps",
      items: [
        { en: "Look like a bad target: lights, a lived-in look, neighbors who notice, nothing easy to grab in view." },
        { en: "Slow them down: solid doors, long screws, blocked sliding doors, locked windows." },
        { en: "Know early: a dog, a doorbell camera, an alarm, gravel paths, or simple noisemakers on doors." },
        { en: "Have a plan: everyone knows how to get out or get to the safe room, and how to call for help." },
      ],
    },

    // ==================================================================
    { type: "h", id: "doors", text: { en: "Doors: the most important upgrade" } },
    {
      type: "p",
      text: {
        en: "Police departments say the most common way to force a door with a wooden frame is to kick it. The lock almost never breaks. What breaks is the thin wood around the [[strike-plate|strike plate]], held by two short screws that only reach the trim. Replacing those short screws with 3-inch screws that reach the wall stud is cheap, takes minutes, and stops many kick-ins.",
      },
    },
    {
      type: "steps",
      items: [
        { en: "Take out the short screws in the strike plate of the [[deadbolt|deadbolt]]. Drive in 3-inch wood screws (3 to 4 inches is fine) so they bite deep into the stud behind the frame. Turn them in by hand at the end so you don't strip the wood." },
        { en: "Do the same on the doorknob's strike plate." },
        { en: "Replace at least one short screw in each hinge with a 3-inch screw." },
        { en: "If you can, upgrade to a heavy-duty, four-screw strike plate or a strike box, also with 3-inch screws. Door-frame reinforcement kits (long steel plates) are the next step up." },
        { en: "Make sure the deadbolt throws its bolt at least 1 inch into the frame. Grade 1 or Grade 2 deadbolts are stronger than Grade 3." },
        { en: "Outside doors should be solid wood or metal, never hollow. If a door has glass near the lock, someone can break the glass and reach the thumb-turn; add a solid storm door or keep that door blocked from inside." },
        { en: "Add a wide-angle [[door-viewer|door viewer]] (peephole) or a window view so you can see who is there without opening the door." },
        { en: "When you move into a home, change or re-key the locks. You don't know who has old keys." },
      ],
    },
    {
      type: "sketch",
      sketch: "strike-plate-screws",
      caption: { en: "Long 3-inch screws go through the strike plate and the thin door frame into the wall stud behind it. The short screw on the floor is what most doors come with." },
    },
    {
      type: "warning",
      text: {
        en: "If a sidelight window sits close to the door frame, a 3-inch screw may crack it. Check where the glass is first and use a shorter screw there.",
      },
    },
    {
      type: "list",
      items: [
        { en: "For nights and emergencies, a door security bar (a bar that wedges under the knob) or a floor-mounted door stop adds a lot of strength to a door that opens inward. A rubber door wedge works on any inward-opening interior door and fits in a go-bag." },
        { en: "Never hide a key under the mat, in a fake rock, or over the door. Give a spare to a trusted neighbor instead." },
      ],
    },

    // ==================================================================
    { type: "h", id: "sliding-doors", text: { en: "Sliding doors and windows" } },
    {
      type: "p",
      text: {
        en: "Sliding glass doors close with a latch, not a real lock, and police say many burglars come in through them. Older doors can even be lifted off their tracks. Fix both problems:",
      },
    },
    {
      type: "steps",
      items: [
        { en: "Stop the slide: cut a wooden dowel, broom handle, or metal bar to fit the empty part of the bottom track, alongside the glass that doesn't open, from the door frame to the edge of the sliding panel. With that space filled, the sliding panel has nowhere to go. A hinged \"charley bar\" mounted at waist height does the same job." },
        { en: "Stop the lift: drive a few screws partway into the upper track above the moving panel so it can't be lifted out, or drill a hole through both frames where they overlap and drop in a steel pin." },
        { en: "Keep the rollers and latch adjusted so the door sits snug." },
        { en: "Sliding windows get the same treatment: a stick in the track and screws or a pin to stop lifting." },
      ],
    },
    {
      type: "sketch",
      sketch: "sliding-door-dowel",
      caption: { en: "The dowel fills the track only alongside the fixed glass, from the frame to the edge of the sliding panel, so the sliding panel can't move." },
    },

    // ==================================================================
    { type: "h", id: "windows", text: { en: "Windows, bars, and getting out in a fire" } },
    {
      type: "list",
      items: [
        { en: "Lock every window you aren't using, especially on the ground floor and any you can reach from a porch roof, fence, or deck." },
        { en: "For double-hung windows, a drilled pin or a window stop lets you leave the window open a few inches for air while it still can't be pushed up." },
        { en: "Keep ladders, tools, and patio furniture locked up or inside. They are often what a burglar uses to get in." },
        { en: "Don't leave valuables, guns, or new boxes in view of a window. Break down boxes for big purchases and put them out in a closed trash bag." },
      ],
    },
    {
      type: "warning",
      text: {
        en: "Security must never trap your family in a fire. The U.S. Fire Administration warns that window and door bars without a release device trap people in fires and slow firefighters down. If you install [[security-bars|security bars]], use the quick-release kind that opens from inside without a key, a tool, or great strength, and make sure every family member can open them. The NFPA says at least one window in every bedroom needs a release device. Every room should still have two ways out.",
      },
    },
    {
      type: "sketch",
      sketch: "window-bar-release",
      caption: { en: "Quick-release security bars swing open from inside with a simple lever, no key or tool needed." },
    },
    {
      type: "list",
      items: [
        { en: "Use deadbolts with a thumb-turn inside (single-cylinder). A deadbolt that needs a key on both sides can trap you in a fire. If you already have one, leave the key in the inside lock whenever someone is home." },
        { en: "Don't block bedroom windows with furniture or a window air conditioner that can't be removed quickly." },
        { en: "Upstairs bedrooms need a way down: a folding escape ladder kept in the room." },
        { en: "Practice your fire escape plan along with your break-in plan. Many of the same doors and windows serve both." },
      ],
    },

    // ==================================================================
    { type: "h", id: "garage", text: { en: "The garage" } },
    {
      type: "list",
      items: [
        { en: "Treat the door from the garage into the house as an outside door: solid, deadbolt, long screws. Lock it, even when the garage door is closed." },
        { en: "Keep the big garage door closed. An open garage shows everything you own and gives cover to anyone working on the inside door." },
        { en: "Thieves can push a wire hook over the top of a garage door and pull the opener's emergency release. A release guard (a small shield on the opener rail) blocks the hook but still lets you pull the cord from inside." },
        { en: "Some people zip-tie the release lever instead. Garage door companies warn that a zip tie can stop the release from working in a fire or power outage. If you use one, make sure an adult can break it with the cord or keep cutters hanging beside it." },
        { en: "Cover garage door windows so no one can see the release or what you have stored." },
        { en: "When away for a long time, a padlock or clamp through the track stops the door from opening. Remove it before using the door." },
        { en: "Lock the garage remote in the house, not in a car parked outside." },
      ],
    },

    // ==================================================================
    { type: "h", id: "outside", text: { en: "Outside: light, sight lines, and a lived-in look" } },
    {
      type: "list",
      items: [
        { en: "Light every door. Motion-sensor lights or dusk-to-dawn bulbs work well; solar motion lights keep working when the power is out." },
        { en: "Trim shrubs below window level and keep tree limbs off the roof. Burglars need a place to work without being seen from the street." },
        { en: "Make the house look lived in: lights and a radio on timers, mail and packages picked up, trash cans brought in. When away, ask a neighbor to park in your driveway now and then." },
        { en: "Don't post trips, new purchases, or your stored supplies on social media." },
        { en: "Gravel under windows and a gate that squeaks are free early warnings." },
      ],
    },
    {
      type: "table",
      caption: { en: "What helps, labeled by evidence" },
      head: [{ en: "Measure" }, { en: "Evidence" }, { en: "Notes" }],
      rows: [
        [{ en: "People around and neighbors who notice" }, { en: "Well-supported" }, { en: "In a survey of 422 burglars in prison, people nearby was a top reason to skip a house. Neighborhood watch programs were linked to 16 to 26 percent less crime in a large review, though only about half of programs showed an effect." }],
        [{ en: "Better outdoor lighting" }, { en: "Well-supported for street lighting" }, { en: "Reviews of street lighting found about 14 to 21 percent less crime. Porch and yard lights are less studied but cheap." }],
        [{ en: "Strong doors, long screws, blocked sliding doors" }, { en: "Traditional, limited evidence" }, { en: "Police everywhere recommend them, and most burglars come in through open or forced doors and windows. Few careful studies of single homes exist." }],
        [{ en: "Alarm, cameras, and a barking dog" }, { en: "Traditional, limited evidence" }, { en: "About 60 percent of the surveyed burglars said an alarm would send them elsewhere, and many said cameras and dogs mattered. These are answers from people who were caught, in a study paid for by the alarm industry." }],
        [{ en: "Signs and stickers alone" }, { en: "Unproven" }, { en: "May help a little. Without a real alarm, camera, or dog behind them, don't count on them." }],
      ],
    },

    // ==================================================================
    { type: "h", id: "neighbors", text: { en: "Neighbors are your best defense" } },
    {
      type: "p",
      text: {
        en: "A family alone can't watch its house all day and all night. A street can. Know the people around you before an emergency, and you have extra eyes, extra hands, and people to call.",
      },
    },
    {
      type: "steps",
      items: [
        { en: "Meet the neighbors on both sides and across the street. Trade phone numbers and agree to call each other, or 911, about anything odd." },
        { en: "Make a simple street list: names, numbers, who has medical needs, who is elderly or alone, who has skills (nurse, electrician) or useful tools." },
        { en: "Start or join a [[neighborhood-watch|neighborhood watch]] through your local police or sheriff. Watches report what they see; they don't chase or confront anyone." },
        { en: "Set up a radio check-in for when phones are down. See {{communications|Communications}} for a simple neighborhood radio net." },
        { en: "After a disaster, check on neighbors who live alone, and take turns keeping an eye on the street at night, from inside or a porch, with a radio or whistle. Report; don't confront." },
      ],
    },

    // ==================================================================
    { type: "h", id: "low-profile", text: { en: "Keep a low profile with your supplies" } },
    {
      type: "list",
      items: [
        { en: "Don't talk about how much food, fuel, or cash you store, and don't let children brag about it. Help neighbors generously, but you don't need to show anyone the whole pantry." },
        { en: "A running generator is loud and easy to steal. Chain it down and follow the safety rules in {{power-light-sanitation|Power, Light, and Sanitation}}. Bring fuel cans and tools in at night." },
        { en: "Keep cooking smells and lights modest if most of the street is dark and hungry. Better still, share: a street that eats together has no reason to raid anyone." },
        { en: "Keep copies of important papers and some cash in small bills in a safe, hidden place, and a set in the go-bag (see {{bugging-out|Bugging Out}})." },
      ],
    },

    // ==================================================================
    { type: "h", id: "at-the-door", text: { en: "Someone at the door" } },
    {
      type: "list",
      items: [
        { en: "Look before you open. Talk through the closed, locked door if you don't know the person." },
        { en: "Children should never open the door to anyone without an adult, even someone who says they know the family." },
        { en: "If a stranger asks to use your phone because of an emergency, offer to make the call for them while the door stays shut." },
        { en: "Anyone saying they are from a utility, the government, or the police can wait while you check. Ask for photo ID, then call the agency's number you look up yourself, not a number they give you." },
        { en: "If something feels wrong, don't open the door, even if you can't say why. Call a neighbor or 911." },
      ],
    },
    {
      type: "p",
      text: {
        en: "After disasters, FEMA warns that scammers pose as inspectors, contractors, and aid workers. Know the rules:",
      },
    },
    {
      type: "list",
      items: [
        { en: "FEMA never charges for disaster help, applications, or inspections. Anyone asking for money is a scammer." },
        { en: "FEMA inspectors never ask for bank information or a Social Security number. They already have your registration number, so be wary of anyone who asks you for it." },
        { en: "FEMA staff and contractors carry an official photo ID badge. Ask to see it. Inspectors only look at damage; they don't recommend or hire contractors." },
        { en: "To check whether someone is really from FEMA, call FEMA at 1-800-621-3362. Report suspected fraud to the FEMA Disaster Fraud Hotline at 866-720-5721." },
        { en: "Be wary of contractors going door to door. Get written estimates, check licenses, and never pay the full price up front." },
      ],
    },

    // ==================================================================
    { type: "h", id: "safe-room", text: { en: "Choose a safe room" } },
    {
      type: "p",
      text: {
        en: "A [[safe-room|safe room]] is simply the room your family goes to if someone breaks in and you can't get out of the house. It doesn't have to be special. Most families use the main bedroom.",
      },
    },
    {
      type: "steps",
      items: [
        { en: "Pick a room everyone can reach quickly at night, ideally near the children's rooms. A window that opens to the outside is a plus: it is a second way out." },
        { en: "Give it a solid door. Put long screws in the hinges and strike plate, add a lock that works from inside, and keep a door wedge or door security bar there." },
        { en: "Keep in the room: a charged phone or a charger and [[power-bank|power bank]], a written list of emergency numbers, a flashlight or [[headlamp|headlamp]], a whistle, a small first aid kit with a [[tourniquet|tourniquet]], shoes, and car keys (the panic button on the remote makes a lot of noise)." },
        { en: "If the window is upstairs, keep a folding escape ladder in the room." },
        { en: "Walk every family member through the plan. Practice it at night, like a fire drill, so it feels normal rather than scary." },
      ],
    },
    {
      type: "sketch",
      sketch: "safe-room",
      caption: { en: "A family in their safe room: the door shut and locked, a parent calling 911, a flashlight, and the dog kept close." },
    },
    {
      type: "list",
      items: [
        { en: "To wedge the door, push the thin end of a rubber door wedge under the bottom of the door from the room side, then kick it in snug. A wedge only works on a door that opens into the room." },
        { en: "No wedge or bar? Tip a sturdy chair back and jam the top of the chair back under the doorknob, with the back legs planted on the floor a couple of feet from the door. This also only works on a door that opens into the room, and it is weaker than a real door bar; a light or wobbly chair can slip." },
      ],
    },
    {
      type: "sketch",
      sketch: "door-wedge",
      caption: { en: "The thin end of the wedge goes under the door; the thick end stays on your side." },
    },
    {
      type: "sketch",
      sketch: "chair-under-knob",
      caption: { en: "A chair braced under the knob, its back legs planted away from the door, for a door that opens into the room." },
    },

    // ==================================================================
    { type: "h", id: "break-in", text: { en: "If someone breaks in" } },
    {
      type: "warning",
      text: {
        en: "If you come home and see a broken window, a forced door, or a door open that you left shut, do not go in. Someone may still be inside. Go to a neighbor's house or your car, drive away, and call 911.",
      },
    },
    {
      type: "p",
      text: {
        en: "If you are home and hear someone breaking in:",
      },
    },
    {
      type: "steps",
      items: [
        { en: "Don't go to look. Most burglars expect an empty house, and surprising one is when people get hurt." },
        { en: "Get out if you safely can, with the children, through a door or window away from the noise. Go to a neighbor's house and call 911 from there." },
        { en: "If you can't get out, gather everyone in the safe room. Lock and block the door. Turn off the lights and keep pets with you." },
        { en: "Call 911. Say your address first, then that someone is breaking in, where in the house you are, who is with you, and where you think the intruder is. If speaking would give you away, text 911 instead (\"call if you can, text if you can't\"); if you get a message back saying texting isn't available, you must call." },
        { en: "Stay on the line and do what the dispatcher says. If you have a security system, set off the alarm." },
        { en: "Stay put. Don't come out until the police identify themselves at the door or the dispatcher tells you it is safe. Silence outside the door doesn't mean they have left." },
        { en: "When police arrive, put down anything in your hands and keep your hands where they can see them. They don't yet know who lives there." },
        { en: "Afterward, don't touch things the intruder may have handled until police are done." },
      ],
    },
    {
      type: "p",
      text: {
        en: "If 911 isn't working, the plan is the same: get out or get to the safe room, make noise to draw neighbors (whistle, car alarm, yelling \"I've called the police!\"), and use your radio plan from {{communications|Communications}} to call for help from the neighbors.",
      },
    },

    // ==================================================================
    { type: "h", id: "last-resort", text: { en: "If you can't avoid a fight" } },
    {
      type: "p",
      text: {
        en: "Homeland Security teaches three words for an attack: run, hide, fight. Running comes first, hiding comes second, and fighting is the last resort, only when your life or your child's life is in danger right now and there is no way out. The goal is never to win. The goal is to make a gap and get away.",
      },
    },
    {
      type: "list",
      items: [
        { en: "Keep something solid between you and the attacker: a door, a table, a chair held out in front of you." },
        { en: "Yell loudly and keep yelling (\"Get back! Call 911!\"). It brings help and witnesses. A deep yell carries better than a high scream." },
        { en: "If you are grabbed, commit fully. University police self-defense programs teach striking the eyes, nose, throat, groin, or knees, the places that cause an attacker to let go. Strike hard, then run the moment you are free." },
        { en: "Anything in reach can help: a lamp, a heavy flashlight, keys, a fire extinguisher sprayed at the face or swung. Run toward people and safety, not just away." },
        { en: "A short self-defense class (many police departments and colleges offer them) teaches far more than a page can. Practice makes the moves come without thinking." },
      ],
    },

    // ==================================================================
    { type: "h", id: "tools", text: { en: "Defensive tools, labeled honestly" } },
    {
      type: "table",
      caption: { en: "Tools families ask about" },
      head: [{ en: "Tool" }, { en: "Evidence" }, { en: "Notes and warnings" }],
      rows: [
        [{ en: "Strong doors, a safe room, and a phone" }, { en: "Well-supported by police advice" }, { en: "The best \"weapon\" is a locked door between your family and the intruder while police come." }],
        [{ en: "Bright flashlight" }, { en: "Traditional, limited evidence" }, { en: "Lets you see who is there and can dazzle someone for a moment. Keep one by every bed." }],
        [{ en: "Whistle, air horn, or personal alarm" }, { en: "Traditional, limited evidence" }, { en: "Noise draws neighbors and scares off many burglars. Cheap and safe for children to carry." }],
        [{ en: "Dog" }, { en: "Traditional, limited evidence" }, { en: "A dog that barks at strangers is an early warning; burglars say dogs make them think twice. Keep pets with you in the safe room so they don't get hurt." }],
        [{ en: "[[pepper-spray|Pepper spray]]" }, { en: "Traditional, limited evidence" }, { en: "Allowed for adults in every U.S. state, but some states limit size, strength, and who can buy it. It is a prohibited weapon in some countries, including the UK and Canada. Wind can blow it back; never use it indoors near babies or anyone with asthma unless life is at stake. Store it away from children." }],
        [{ en: "Wasp or hornet spray" }, { en: "Unproven" }, { en: "Not made for people and not tested on people. University pesticide experts say using a pesticide in a way its label doesn't allow is against federal law. Don't use it on a person." }],
        [{ en: "Knife" }, { en: "Last resort only" }, { en: "Useful every day for food and trapping. As a weapon, a knife works only at arm's length, where you are likely to be hurt too, and it can be taken from you. Never go looking for an intruder with one. Keep it out of children's reach." }],
        [{ en: "Gun" }, { en: "Not covered" }, { en: "This guide doesn't teach shooting. If your home already has guns, follow the storage rules below and get real training." }],
      ],
    },

    // ==================================================================
    { type: "h", id: "guns-at-home", text: { en: "If there are guns in your home" } },
    {
      type: "p",
      text: {
        en: "Many families already own guns. Children's hospitals and the American Academy of Pediatrics agree on how to keep them from hurting the people who live there. A young child can be strong enough to pull a trigger and can't tell a real gun from a toy.",
      },
    },
    {
      type: "steps",
      items: [
        { en: "Unload it: no rounds in the gun, including the chamber." },
        { en: "Lock it: in a safe or lock box, or with a [[gun-cable-lock|cable lock]] or trigger lock. Locks keep children out but don't stop theft; a bolted-down safe does both." },
        { en: "Keep ammunition separate, also locked." },
        { en: "Keep keys and combinations where only the adults can get them." },
        { en: "Never leave a gun unattended, even for a moment, including while cleaning it." },
        { en: "Ask about guns and storage at every home your children visit." },
      ],
    },
    {
      type: "list",
      items: [
        { en: "Teach children the rule: if you see a gun, don't touch it, leave the room, and tell an adult right away." },
        { en: "If anyone in the home is in a mental health crisis, is drinking heavily, or is talking about suicide, move the guns out of the home for now (a trusted friend or relative, or a gun shop or police station that offers storage). Time and distance save lives. See {{mind|Mind}}." },
        { en: "Learn your state's laws on owning, storing, and carrying, and take a safety and training class before you ever rely on one." },
      ],
    },

    // ==================================================================
    { type: "h", id: "law", text: { en: "Self-defense and the law, in plain words" } },
    {
      type: "p",
      text: {
        en: "This is general information, not legal advice. Laws differ a great deal between states and countries, and they change. Learn the rules where you live before you need them.",
      },
    },
    {
      type: "list",
      items: [
        { en: "Everywhere in the U.S. you may defend yourself, but the force must be reasonable. Deadly force is generally allowed only when you reasonably believe it is needed to stop someone from killing or seriously injuring you or another person right now." },
        { en: "Many states have a [[castle-doctrine|castle doctrine]]: inside your own home you don't have to retreat before defending yourself. Other states have a duty to retreat if you safely can. \"Stand your ground\" laws extend no-retreat rules outside the home." },
        { en: "Protecting things is not the same as protecting people. In most places you can't use deadly force just to stop someone from taking property. A stolen generator is not worth a life, or a prison sentence." },
        { en: "Force must stop when the danger stops. Someone running away is no longer a threat." },
        { en: "Afterward, call 911, ask for medical help for anyone hurt (including the intruder), and follow police instructions." },
        { en: "Many self-defense tools, including sprays, batons, and some knives, are restricted in some places. Check before you buy or carry." },
      ],
    },

    // ==================================================================
    { type: "h", id: "children", text: { en: "Teaching children" } },
    {
      type: "list",
      items: [
        { en: "Teach them how and when to call 911, and their full address. Let them practice on a phone that is turned off." },
        { en: "Never open the door to anyone without a grown-up, and never tell callers or strangers that they are home alone." },
        { en: "Know the safe room and the way out of their own bedroom. Practice both at night." },
        { en: "Use the family code word from {{mind|Mind}}: if someone they don't know says \"your mom sent me,\" they ask for the code word." },
        { en: "Teach the gun rule: don't touch, leave, tell an adult." },
        { en: "Keep it calm. Drills should feel like fire drills: a skill everyone has, not a fear everyone carries." },
      ],
    },

    // ==================================================================
    { type: "h", id: "after-disaster", text: { en: "After a disaster" } },
    {
      type: "list",
      items: [
        { en: "Board or cover broken doors and windows the same day. A heavy sheet of plywood screwed (not nailed) from the inside is hard to remove." },
        { en: "If the power is out, battery or solar lights at doors make a big difference. See {{power-light-sanitation|Power, Light, and Sanitation}}." },
        { en: "Bring in or lock down generators, fuel, bikes, and tools every night." },
        { en: "If you must keep watch, take turns so everyone sleeps (see {{mind|Mind}} on sleep and watch shifts). Watch from inside or a porch, with a radio or whistle. Don't patrol the street armed." },
        { en: "Rumors of roaming gangs spread fast after disasters and are usually false. Check with neighbors, police, or official radio before acting on them." },
        { en: "If the house is too damaged to secure, or the area is truly unsafe, leaving may be the safest choice. See {{bugging-out|Bugging Out}}." },
      ],
    },

    // ==================================================================
    { type: "h", id: "plan", text: { en: "Your plan: now to 2 years" } },
    {
      type: "table",
      caption: { en: "A step-by-step plan" },
      head: [{ en: "When" }, { en: "What to do" }],
      rows: [
        [{ en: "Now (this weekend)" }, { en: "Put 3-inch screws in every outside door's strike plates and hinges. Block sliding doors with a dowel. Check that every bedroom window opens and any bars have a quick release. Stop hiding a key outside. Pick a safe room and put a flashlight and whistle in it. If you own guns, lock them unloaded with ammunition separate." }],
        [{ en: "First 72 hours of an emergency" }, { en: "Lock doors and windows, light the outside if you can, and bring in anything worth stealing. Check on neighbors and agree how you'll reach each other. Be careful who you open the door to." }],
        [{ en: "By 90 days" }, { en: "Upgrade strike plates and deadbolts where needed. Add motion lights (some solar). Meet the neighbors and make a street list. Practice the break-in plan and fire escape plan at night. Teach children 911 and the door rules." }],
        [{ en: "By 6 months" }, { en: "Add a door security bar or wedge for the safe room, an escape ladder for upstairs rooms, and a release guard on the garage opener. Take a self-defense class. Learn your state's self-defense and weapon laws." }],
        [{ en: "By 1 year" }, { en: "Start or join a neighborhood watch. Set up the neighborhood radio net. Consider an alarm or cameras that work with the power out. Review what you store and who knows about it." }],
        [{ en: "By 2 years" }, { en: "Run a yearly night drill and replace weak hardware. Keep the street list current. Help a neighbor do the same upgrades; a stronger street protects every house on it." }],
      ],
    },

    // ==================================================================
    { type: "source", title: "Doors and locks", publisher: "King County Sheriff's Office", url: "https://kingcounty.gov/depts/sheriff/police-precincts/safety/home/door-locks.aspx" },
    { type: "source", title: "Home Security: Door Security (Crime Prevention Bulletin)", publisher: "Seattle Police Department", url: "https://www.seattle.gov/documents/Departments/Police/Prevention/Home_Security_Door_Security.pdf" },
    { type: "source", title: "Doors & Locks", publisher: "Village of Shorewood Police Department", url: "https://villageofshorewood.org/257/Doors-Locks" },
    { type: "source", title: "Sliding-Glass Patio Doors & Windows", publisher: "Village of Shorewood Police Department", url: "https://villageofshorewood.org/263/Sliding-Glass-Patio-Doors-Windows" },
    { type: "source", title: "Home Burglary Prevention", publisher: "Sacramento Police Department", url: "https://www.cityofsacramento.gov/police/crime-and-safety/safety-and-crime-prevention-tips/home-burglary-prevention" },
    { type: "source", title: "Fire Safe and Secure: A Factsheet on Security Bar Safety", publisher: "U.S. Fire Administration (FEMA)", url: "https://webarchive.library.unt.edu/eot2008/20080917155636/http://www.usfa.dhs.gov/downloads/pdf/fswy10.pdf" },
    { type: "source", title: "Security Bars Safety", publisher: "NFPA Center for High-Risk Outreach (via Culver City Fire Department)", url: "https://www.culvercityfd.gov/files/sharedassets/fire/v/1/securitybarssafety.pdf" },
    { type: "source", title: "Home Fire Escape Checklist", publisher: "National Fire Protection Association", url: "https://www.rdbn.bc.ca/download_file/view/4082/4952" },
    { type: "source", title: "Garage door emergency release: should I zip-tie it?", publisher: "Affordable Door Co. (garage door service; safety warning)", url: "https://mail.affordabledoorco.com/answers/zip-tie-emergency-release-security/" },
    { type: "source", title: "Through the eyes of a burglar: study provides insights on habits and motivations", publisher: "University of North Carolina at Charlotte", url: "https://inside.charlotte.edu/news-features/2013-05-15/through-eyes-burglar-study-provides-insights-habits-and-motivations" },
    { type: "source", title: "Convicted Burglars Admit Alarm Systems Are Deterrents (summary of the UNC Charlotte study)", publisher: "Security Sales & Integration", url: "https://www.securitysales.com/news/convicted-burglars-admit-alarm-systems-are-deterrents/24594/" },
    { type: "source", title: "The Effectiveness of Neighborhood Watch (Campbell Systematic Review 2008:18)", publisher: "Bennett, Holloway, Farrington; Office of Justice Programs", url: "https://ojp.gov/ncjrs-virtual-library/redirect/306614" },
    { type: "source", title: "Street Lighting (Crime Reduction Toolkit, summarizing Welsh and Farrington 2008)", publisher: "College of Policing (UK)", url: "https://whatworks.college.police.uk/research/crime-reduction-toolkit/street-lighting" },
    { type: "source", title: "Effectiveness of Street Lighting in Preventing Crime in Public Places: An Updated Systematic Review", publisher: "Welsh, Farrington, Douglas; Swedish National Council for Crime Prevention (Brå)", url: "https://bra.se/english/publications/archive/2021-12-21-effectiveness-of-street-lighting-in-preventing-crime-in-public-places" },
    { type: "source", title: "Neighborhood Watch Manual", publisher: "National Sheriffs' Association and Bureau of Justice Assistance", url: "https://www.tcsoal.org/__aws/media/4210733_4849.pdf" },
    { type: "source", title: "Looting and Antisocial Behavior in Disasters (Quarantelli)", publisher: "University of Delaware Disaster Research Center", url: "https://udspace.udel.edu/items/b48763c7-ef1a-461b-8a8e-717259331ac3" },
    { type: "source", title: "There Goes Hurricane Florence; Here Come the Disaster Myths", publisher: "Scientific American", url: "https://www.scientificamerican.com/blog/observations/there-goes-hurricane-florence-here-come-the-disaster-myths/" },
    { type: "source", title: "Beware of Fraud and Scams", publisher: "FEMA", url: "https://www.fema.gov/press-release/20250602/beware-fraud-and-scams" },
    { type: "source", title: "Don't Get Scammed, Be Aware of Fake FEMA Inspectors and Contractors", publisher: "FEMA", url: "https://fema.gov/fr/node/693357" },
    { type: "source", title: "What You Need to Know About Text-to-911", publisher: "Federal Communications Commission", url: "https://www.fcc.gov/consumers/guides/what-you-need-know-about-text-911" },
    { type: "source", title: "Attacks in Crowded and Public Spaces: Run, Hide, Fight", publisher: "Ready.gov (FEMA / Department of Homeland Security)", url: "https://www.ready.gov/sites/default/files/2020-03/active-shooter_information-sheet.pdf" },
    { type: "source", title: "About Self Protection", publisher: "University of Houston Police Department", url: "https://www.uh.edu/police/safety-security/sensitive-crimes/sexasslt/self-protection/index.php" },
    { type: "source", title: "Self Defense Tips", publisher: "Santa Clara University Campus Safety Services", url: "https://search.scu.edu/media/offices/university-operations/campus-safety/campus-safety/crime-prevention/CSS-Self-Defense-Tips.pdf" },
    { type: "source", title: "School Pest News: wasp spray is not for self-defense", publisher: "Texas A&M AgriLife Extension, School IPM", url: "https://schoolipm.tamu.edu/2013/10/30/school-pest-news-volume-12-issue-7-october-2013" },
    { type: "source", title: "Pepper spray offences (Firearms Act 1968, section 5(1)(b))", publisher: "JD Spicer Zeb Solicitors (UK)", url: "https://www.jdspicer.co.uk/site/our-services/criminal-law-solicitors/pepper-spray-offences/" },
    { type: "source", title: "Firearms Safety", publisher: "Nationwide Children's Hospital", url: "https://www.nationwidechildrens.org/family-resources-education/family-resources-library/firearms-safety" },
    { type: "source", title: "Firearms Safety", publisher: "University Hospitals Rainbow Babies & Children's", url: "https://www.uhhospitals.org/health-information/health-and-wellness-library/article/adult-diseases-and-conditions-v0/firearms-safety" },
    { type: "source", title: "Self Defense and \"Stand Your Ground\"", publisher: "National Conference of State Legislatures", url: "https://www.ncsl.org/civil-and-criminal-justice/self-defense-and-stand-your-ground.aspx" },
    { type: "source", title: "Castle Doctrine Overview", publisher: "FindLaw", url: "https://www.findlaw.com/criminal/criminal-law-basics/castle-doctrine-overview.html" },
  ],
};
