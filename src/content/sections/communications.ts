import type { Section } from "../types";

// Section 15: Communications. Facts checked Nov 14, 2026 against the sources listed at the end.
// Numbers that should not be "simplified":
// - NOAA Weather Radio: 7 frequencies, 162.400-162.550 MHz in 25 kHz steps (NWS).
// - FRS: 22 channels shared with GMRS, no license; 2 W ERP on 1-7 and 15-22, 0.5 W on 8-14;
//   fixed antenna only (FCC FRS page, 47 CFR Part 95 Subpart B).
// - GMRS: FCC license, 10-year term, applicant 18+, family of any age may operate (FCC GMRS page);
//   $35 fee, no exam (FCC fee change of April 19, 2022). Power: 50 W main channels,
//   5 W ERP 462 MHz interstitial, 0.5 W ERP 467 MHz interstitial (47 CFR 95.1767).
// - MURS: 5 channels 151-154 MHz, no license, 2 W output max, no repeaters (FCC MURS page).
// - CB: 40 channels around 27 MHz, no license, 4 W AM / 12 W PEP single sideband (FCC personal
//   radio services guide); channel 9 only for emergencies and traveler help (47 CFR 95 CB rules).
//   Channel 19 for highway traffic is custom, not an FCC rule — say so.
//
// - Meshtastic: U.S. 902-928 MHz; old default Long Fast 250 kHz; 2.8 starts NEW U.S. nodes on
//   Long Turbo 500 kHz, upgrades keep their preset (Meshtastic blog Oct 8, 2026). FCC rules
//   unchanged, no public FCC statement (Hackaday Sept 17, 2026).
// - PLB: 406 MHz, registration with NOAA required by law and free (NOAA SARSAT).
// - Marine ch 16 = 156.800 MHz (USCG); handheld marine VHF on land only in narrow cases (FCC).
// Text and drawings complete Nov 14, 2026.

export const communications: Section = {
  id: "communications",
  number: 15,
  title: { en: "Communications" },
  summary: { en: "Radios that work with no cell service, the channels to know, and a family radio plan." },
  blocks: [
    {
      type: "p",
      text: {
        en: "In a big disaster, phones and the internet are often the first things to go. Cell towers lose power or get overloaded, and home internet stops when the power does. A family that can still hear the news and talk to each other is calmer, safer, and makes better choices. This section covers radios you can buy cheaply today that work with no cell network at all: radios for listening, walkie-talkies for talking nearby, and ways to reach farther. It ends with a simple family radio plan you can write down now.",
      },
    },
    {
      type: "warning",
      text: {
        en: "If 911 works, use it first. Try a text if a call won't go through; texts often get through when calls don't. The radios in this section are for when phones are down, not instead of calling for help.",
      },
    },

    // ==================================================================
    { type: "h", id: "why", text: { en: "Why radios matter" } },
    {
      type: "list",
      items: [
        { en: "Cell towers have backup batteries or generators, but many last only hours to a few days. After that, a tower with no power is silent." },
        { en: "When everyone calls at once, networks jam even if the towers work. Short texts use less of the network than calls (see {{power-light-sanitation|Power, Light, and Sanitation}} for saving your phone battery)." },
        { en: "A radio needs no tower, no account, and no bill. Two radios talk straight to each other." },
        { en: "Listening is the most important part. Officials send warnings, shelter locations, water-safety notices, and evacuation orders over broadcast radio and NOAA Weather Radio." },
      ],
    },

    // ==================================================================
    { type: "h", id: "listening", text: { en: "Listening: the one radio every home needs" } },
    {
      type: "p",
      text: {
        en: "Before you think about talking, make sure you can listen. Every home should have a [[weather-radio|weather radio]] that also plays regular AM and FM stations and can run without wall power. Listening needs no license and works for everyone in the family, including children.",
      },
    },
    { type: "p", text: { en: "Look for these features:" } },
    {
      type: "list",
      items: [
        { en: "A weather band (often marked WX) that receives all 7 NOAA Weather Radio channels." },
        { en: "An alert feature, best with [[same-code|SAME]] county coding, so it wakes you only for warnings in your own area." },
        { en: "More than one way to power it: a [[hand-crank-radio|hand crank]], a small solar panel, and regular batteries (AA is easiest to stock). A USB port to charge a phone is a bonus, but cranking a phone charged takes a long time." },
        { en: "AM and FM bands, for local news and emergency stations." },
        { en: "A built-in flashlight is handy but don't count on it as your main light." },
      ],
    },
    {
      type: "steps",
      items: [
        { en: "Set it up the day you buy it: find the strongest weather channel for your area and program your county's SAME code (look it up on the National Weather Service site or call 888-697-7263)." },
        { en: "Write the channel, the SAME code, and your two best local AM and FM news stations on a card and tape it to the radio." },
        { en: "Leave it plugged in or with fresh batteries, alert switched on, in the room where you sleep." },
        { en: "Many weather offices test the alarm once a week, often on Wednesday around midday. If you never hear the test, check the radio." },
        { en: "Store spare batteries next to it, out of the radio, so they don't leak inside it." },
      ],
    },
    {
      type: "p",
      text: {
        en: "AM signals travel much farther at night. After dark, an AM radio can often pick up big stations hundreds of miles away, which helps when local stations are off the air. FM stays local, day or night.",
      },
    },
    {
      type: "table",
      caption: { en: "NOAA Weather Radio broadcasts on these 7 frequencies. Your radio may call them channel 1 to 7 or WX1 to WX7, but makers number them differently, so go by the frequency." },
      head: [{ en: "Frequency (MHz)" }, { en: "Note" }],
      rows: [
        [{ en: "162.400" }, { en: "Weather band" }],
        [{ en: "162.425" }, { en: "Weather band" }],
        [{ en: "162.450" }, { en: "Weather band" }],
        [{ en: "162.475" }, { en: "Weather band" }],
        [{ en: "162.500" }, { en: "Weather band" }],
        [{ en: "162.525" }, { en: "Weather band" }],
        [{ en: "162.550" }, { en: "Weather band" }],
      ],
    },
    {
      type: "p",
      text: {
        en: "NOAA Weather Radio covers the United States and its territories, and Canada uses the same 7 frequencies. In other countries, find out now which station carries official emergency news and write it down.",
      },
    },

    {
      type: "sketch",
      sketch: "hand-crank-radio",
      caption: { en: "A hand-crank weather radio: turn the crank or set the solar panel in the sun to keep it playing with no batteries." },
    },

    // ==================================================================
    { type: "h", id: "talking-nearby", text: { en: "Talking nearby: walkie-talkies" } },
    {
      type: "p",
      text: {
        en: "Cheap handheld radios let family members talk across the neighborhood when phones are down: one person on a water run, one at home, a teenager checking on a neighbor. In the United States there are four kinds that ordinary families can use. Three need no license at all.",
      },
    },
    {
      type: "table",
      caption: { en: "U.S. personal radio services (FCC rules). Ranges are rough real-world guesses for handhelds among houses and trees, not the numbers on the box." },
      head: [{ en: "Service" }, { en: "License?" }, { en: "Power limit" }, { en: "Good for" }],
      rows: [
        [
          { en: "[[frs-radio|FRS]] (Family Radio Service), 22 channels" },
          { en: "No" },
          { en: "2 watts on channels 1–7 and 15–22; 0.5 watt on 8–14. Antenna can't be removed." },
          { en: "Family and neighbors on the same street or a few streets over. The easiest start." },
        ],
        [
          { en: "[[gmrs-radio|GMRS]] (General Mobile Radio Service), same 22 channels plus repeater channels" },
          { en: "Yes: $35, no test, 10 years, covers the family" },
          { en: "Up to 50 watts on the main channels (car and base radios); handhelds usually 5 watts or less" },
          { en: "Longer range, better antennas, and [[repeater|repeaters]] that can cover a whole town." },
        ],
        [
          { en: "[[murs-radio|MURS]] (Multi-Use Radio Service), 5 channels" },
          { en: "No" },
          { en: "2 watts; no repeaters" },
          { en: "A quieter choice when FRS channels are crowded. Fewer radios sold." },
        ],
        [
          { en: "[[cb-radio|CB]] (Citizens Band), 40 channels" },
          { en: "No" },
          { en: "4 watts AM; 12 watts on single sideband" },
          { en: "Cars and trucks on the highway. Big antennas work best." },
        ],
      ],
    },
    {
      type: "p",
      text: {
        en: "About range: boxes promise \"up to 35 miles,\" but that's from mountain top to mountain top. Between houses, walls, and trees, small handhelds often reach about half a mile to two miles. Height matters more than anything: standing on a hill, upstairs by a window, or outside in the open can double or triple your range. Test yours around your own neighborhood before you need them.",
      },
    },

    {
      type: "sketch",
      sketch: "walkie-talkie-pair",
      caption: { en: "Walkie-talkies let a parent at home and a teen on a water run stay in touch when phones are down." },
    },

    { type: "h", id: "frs", text: { en: "FRS: the no-license family radio" } },
    {
      type: "list",
      items: [
        { en: "Sold in pairs and family packs at big stores. Any FRS radio talks to any other FRS or GMRS radio on the same channel." },
        { en: "No license, no age limit. Children can use them." },
        { en: "Use channels 1–7 or 15–22 for the most power. Channels 8–14 are limited to half a watt." },
        { en: "Pick radios that take AA batteries, or keep a charging cradle and a way to power it (see {{power-light-sanitation|Power, Light, and Sanitation}})." },
        { en: "Don't open the radio or add a bigger antenna. That breaks FRS rules." },
      ],
    },
    {
      type: "warning",
      text: {
        en: "\"Privacy codes\" are not private. The codes (also called CTCSS or DCS tones) only stop your radio from playing other people's talk. Anyone on the same channel with codes turned off hears everything you say. Never say where you keep food, water, medicine, or money, or when the house will be empty.",
      },
    },

    { type: "h", id: "gmrs", text: { en: "GMRS: more power, one license for the family" } },
    {
      type: "list",
      items: [
        { en: "One FCC license covers the person who applies (age 18 or older) and their family members of any age, for 10 years. There is no test. The fee is $35. You apply online on the FCC's licensing site." },
        { en: "You get a call sign. Say it at the end of a conversation and every 15 minutes while you talk." },
        { en: "GMRS lets you use more power, radios with removable antennas, a radio in the car, a base radio at home with an antenna on the roof, and repeaters." },
        { en: "A [[repeater]] is a radio on a tall tower or building that picks up your signal and sends it back out much farther. Many towns have GMRS repeaters run by local clubs. Ask permission before using one." },
        { en: "GMRS handhelds talk to FRS radios on the shared channels, so a family can mix them: GMRS for adults, FRS for kids." },
      ],
    },

    { type: "h", id: "murs-cb", text: { en: "MURS and CB" } },
    {
      type: "list",
      items: [
        { en: "MURS has 5 channels around 151–154 MHz. No license, 2 watts. Fewer people use it, which can make it a quiet backup channel for your family or street. Buy only radios sold as MURS-certified." },
        { en: "CB has 40 channels around 27 MHz. No license. It works best from a car or a house with a large outside antenna; small CB handhelds have short range." },
        { en: "CB channel 9 is set aside by FCC rules for emergencies and helping travelers only. Don't chat on it." },
        { en: "Channel 19 is where truckers talk about roads and traffic. That's a habit, not a rule, but it's a good place to ask about road closures when evacuating." },
        { en: "On every service, emergency messages about someone's life or safety come first. If someone calls for help, stop talking and listen." },
      ],
    },

    // ==================================================================
    { type: "h", id: "ham", text: { en: "Ham radio: farther, with a short test" } },
    {
      type: "p",
      text: {
        en: "[[ham-radio|Amateur (ham) radio]] reaches much farther than walkie-talkies, through local [[repeater|repeaters]] and, with the right radio, across the country. In big disasters, ham volunteers often pass messages when everything else is down. It needs a license with a test, but the first test is easy to pass with a few weeks of study.",
      },
    },
    {
      type: "list",
      items: [
        { en: "The first license is called Technician. The test has 35 multiple-choice questions; you need 26 right. All possible questions are published, so you can study them ahead." },
        { en: "Volunteer examiners give the test, often for about $15. After you pass, the FCC charges $35. The license lasts 10 years." },
        { en: "Each person needs their own license. Children can earn one too." },
        { en: "A cheap handheld for the 2-meter and 70-centimeter bands is enough to start. Program in your local repeaters." },
        { en: "Many areas hold a weekly \"net\": a set time when local hams check in on a repeater. Joining one is good practice and builds the local network you'll want in a disaster." },
        { en: "Ham emergency volunteer groups are called ARES and RACES. They train with local emergency managers." },
      ],
    },
    {
      type: "p",
      text: {
        en: "If you have no repeater, ham radios can talk directly. The national calling frequencies, where people listen for a first call, are 146.520 MHz on the 2-meter band and 446.000 MHz on the 70-centimeter band. Make contact there, then move to another frequency to keep it free.",
      },
    },
    {
      type: "warning",
      text: {
        en: "Many cheap handhelds sold online can transmit on ham, GMRS, business, and even public-safety channels. Owning one is legal; transmitting where you aren't licensed is not, and can block real emergency traffic. FCC rules do allow a ham station to use any means it has when lives or property are in immediate danger and normal communication isn't available. Learn the rules before you need them, and get licensed so you can practice legally.",
      },
    },

    // ==================================================================
    { type: "h", id: "mesh", text: { en: "Texting with no cell service: mesh radios" } },
    {
      type: "p",
      text: {
        en: "[[lora-mesh-radio|Mesh radios]] are small, cheap boxes (often under $40) that send short text messages by radio. You pair one with your phone by Bluetooth and type in a phone app, with no cell service and no internet. Each mesh radio also passes along messages for the others, so a neighborhood with many of them can reach farther than any one radio. The most common kind is called Meshtastic.",
      },
    },
    {
      type: "list",
      items: [
        { en: "In the United States they use the 902–928 MHz band, which needs no license. Buy radios made for the U.S. (\"915 MHz\" or \"US\"). Some sellers ship radios or antennas for other countries' bands; check the label." },
        { en: "They send text and locations only, not voice. Messages are short and can take a little while to arrive." },
        { en: "Height is everything. A radio in a top-floor window or on a pole outside reaches much farther than one in a pocket." },
        { en: "Each radio still needs power. Most charge by USB, so a power bank or small solar panel keeps them going." },
      ],
    },
    {
      type: "sketch",
      sketch: "mesh-messenger",
      caption: { en: "A mesh radio up high on a windowsill, powered by a power bank, sends texts typed on a phone with no cell service." },
    },
    {
      type: "warning",
      text: {
        en: "Radios only talk to each other when their settings match. In 2026 a question came up about whether Meshtastic's old U.S. default setting (called Long Fast, 250 kHz wide) meets an FCC rule that asks for at least 500 kHz. The FCC rules did not change, and the FCC has said nothing public about it. Newer Meshtastic versions start new U.S. radios on a 500 kHz setting (Long Turbo), while radios set up earlier keep their old setting, and the two can't hear each other. Before you buy or set up, agree with your family and neighbors on one setting and one channel name, write them on your frequency card, and set every radio the same.",
      },
    },

    // ==================================================================
    { type: "h", id: "satellite", text: { en: "Satellite messengers and rescue beacons" } },
    {
      type: "p",
      text: {
        en: "Some newer phones and small satellite messengers can send a text or an SOS through satellites when there is no cell service at all. Most satellite messengers need a paid plan. Find out now whether your phone can do this, and try its practice or demo mode so you know how it works before you need it.",
      },
    },
    {
      type: "p",
      text: {
        en: "A [[personal-locator-beacon|personal locator beacon (PLB)]] is different: it does one thing, call for rescue, on the 406 MHz satellite system run by NOAA and partner countries. It needs no paid plan. U.S. law requires you to register it with NOAA, and registration is free (beaconregistration.noaa.gov or 1-888-212-7283). Rescue crews respond to every alert, so use it only for real life-or-death emergencies. A PLB is most useful if you have to leave on foot ({{bugging-out|Bugging out}}).",
      },
    },

    // ==================================================================
    { type: "h", id: "marine", text: { en: "Marine radio: boats only" } },
    {
      type: "p",
      text: {
        en: "Marine VHF channel 16 (156.800 MHz) is the international distress and calling channel for boats. The Coast Guard and most ships listen to it. If your family boats, a marine radio belongs on the boat. On land, marine radios are only allowed in narrow cases (such as at docks and beaches, talking to boats), so don't use one as a home or neighborhood radio. You can still listen.",
      },
    },

    // ==================================================================
    { type: "h", id: "family-plan", text: { en: "Your family radio plan" } },
    {
      type: "p",
      text: {
        en: "Radios help only if everyone knows which channel to use and when to listen. Make the plan now, while phones work, and write it on paper.",
      },
    },
    {
      type: "steps",
      items: [
        { en: "Pick one main walkie-talkie channel and privacy code, and a backup channel in case the main one is busy. Write both on every radio with tape and a marker." },
        { en: "Set check-in times, for example the first 5 minutes of every hour. Radios can stay off the rest of the time to save batteries." },
        { en: "Pick one out-of-area contact, a relative or friend who lives far away. It is often easier to reach someone far away than across town. Everyone texts or calls that person to say they are OK." },
        { en: "Text first. A short text like \"I'm OK. At the library.\" often gets through when calls don't." },
        { en: "Pick meeting places: one near home and one outside your neighborhood." },
        { en: "Agree on a family code word for \"this is really me\" and \"come home now\" ({{mind|Mind}} has more on code words)." },
        { en: "Give each person a wallet card with the channels, check-in times, contacts, and meeting places. Tape a copy near the door and put one in each go-bag." },
        { en: "Practice: once a month, do a short radio check-in from different rooms, the yard, and down the street." },
      ],
    },

    // ==================================================================
    { type: "h", id: "neighborhood-net", text: { en: "A neighborhood radio net" } },
    {
      type: "p",
      text: {
        en: "A \"net\" is just a set time and channel when a group checks in. Neighbors with cheap walkie-talkies can run one on their street.",
      },
    },
    {
      type: "steps",
      items: [
        { en: "Agree on a channel, a backup channel, and a time (for example 8 AM and 7 PM)." },
        { en: "Pick one calm person to run it, and a second in case the first can't." },
        { en: "The leader calls each house in order. Each house answers in a few words: everyone OK, needs help, or has something to share (water, a generator, medical skills)." },
        { en: "Keep it short. Save long talks for after the net, on another channel." },
        { en: "Write down who checked in and who needs help, on paper with the time." },
        { en: "Houses that don't answer get a visit, in pairs." },
      ],
    },

    // ==================================================================
    { type: "h", id: "frequency-card", text: { en: "Your frequency card" } },
    {
      type: "p",
      text: {
        en: "Copy this table onto a card, fill in the blanks, and keep it with your radios. When stress is high, nobody remembers channel numbers.",
      },
    },
    {
      type: "table",
      caption: { en: "Frequency card. Fill in the blanks for your family and area." },
      head: [{ en: "Use" }, { en: "Channel or frequency" }, { en: "Notes" }],
      rows: [
        [{ en: "Weather radio" }, { en: "Your local station: 162.___ MHz" }, { en: "SAME county code: ______" }],
        [{ en: "Family walkie-talkies (main)" }, { en: "Channel ___, code ___" }, { en: "Check in at the top of each hour" }],
        [{ en: "Family walkie-talkies (backup)" }, { en: "Channel ___, code ___" }, { en: "Use if the main one is busy" }],
        [{ en: "Neighborhood net" }, { en: "Channel ___" }, { en: "Times: ______" }],
        [{ en: "Mesh radios" }, { en: "Setting (preset): ______, channel name: ______" }, { en: "Same on every family radio" }],
        [{ en: "CB (car)" }, { en: "Channel 9" }, { en: "Emergencies and traveler help only" }],
        [{ en: "Ham radio (licensed only)" }, { en: "146.520 and 446.000 MHz; local repeater: ______" }, { en: "Local net time: ______" }],
        [{ en: "Boats" }, { en: "Marine channel 16 (156.800 MHz)" }, { en: "Distress and calling" }],
        [{ en: "Out-of-area contact" }, { en: "Phone: ______" }, { en: "Everyone texts this person" }],
      ],
    },

    // ==================================================================
    { type: "h", id: "radio-power", text: { en: "Keeping radios powered" } },
    {
      type: "list",
      items: [
        { en: "Pick radios that can run on AA batteries, or that come with an AA battery holder, so you aren't stuck when the rechargeable pack dies." },
        { en: "Use one or two battery sizes for everything in the house." },
        { en: "Listening uses much less power than talking. Keep radios off between check-ins, and use the low-power setting when the other person is close." },
        { en: "Charge USB radios from a power bank, a car outdoors, or a small solar panel. {{power-light-sanitation|Power, Light, and Sanitation}} covers batteries and charging safely." },
      ],
    },

    // ==================================================================
    { type: "h", id: "plan", text: { en: "Plan: now to 2 years" } },
    {
      type: "table",
      caption: { en: "A step-by-step communications plan." },
      head: [{ en: "When" }, { en: "What to do" }],
      rows: [
        [{ en: "Now" }, { en: "Buy a weather radio with hand crank or solar and set the SAME code. Write the family plan and frequency card. Choose an out-of-area contact. Teach everyone to text." }],
        [{ en: "First 72 hours of an emergency" }, { en: "Weather radio on for news. Text, don't call. Family check-ins at set times. Check on neighbors." }],
        [{ en: "By 90 days" }, { en: "One FRS walkie-talkie per adult, plus a spare, with batteries. Monthly practice check-in. Talk with neighbors about a street net." }],
        [{ en: "By 6 months" }, { en: "Get a GMRS license for longer range, or try mesh radios with neighbors on agreed settings. CB in the car if you like." }],
        [{ en: "By 1 year" }, { en: "One adult studies for and passes the ham Technician test. Find and join a local net." }],
        [{ en: "By 2 years" }, { en: "Run a neighborhood net drill. Teens learn the radios. Keep cards and batteries up to date every 6 months." }],
      ],
    },

    { type: "source", title: "NOAA Weather Radio All Hazards", publisher: "National Weather Service", url: "https://www.weather.gov/nwr/" },
    { type: "source", title: "NOAA Weather Radio poster (frequencies, SAME, weekly test)", publisher: "National Weather Service", url: "https://www.weather.gov/media/nwr/NWR_poster.pdf" },
    { type: "source", title: "Family Radio Service (FRS)", publisher: "Federal Communications Commission", url: "https://www.fcc.gov/general/family-radio-service-frs" },
    { type: "source", title: "General Mobile Radio Service (GMRS)", publisher: "Federal Communications Commission", url: "https://www.fcc.gov/general-mobile-radio-service-gmrs" },
    { type: "source", title: "47 CFR 95.1767, GMRS transmitting power limits", publisher: "Electronic Code of Federal Regulations", url: "https://www.ecfr.gov/current/title-47/chapter-I/subchapter-D/part-95/subpart-E/section-95.1767" },
    { type: "source", title: "47 CFR 95.1751, GMRS station identification", publisher: "Electronic Code of Federal Regulations", url: "https://www.ecfr.gov/current/title-47/chapter-I/subchapter-D/part-95/subpart-E/section-95.1751" },
    { type: "source", title: "Multi-Use Radio Service (MURS)", publisher: "Federal Communications Commission", url: "https://www.fcc.gov/wireless/bureau-divisions/mobility-division/multi-use-radio-service-murs" },
    { type: "source", title: "Personal Radio Services consumer guide (CB, FRS, GMRS, MURS)", publisher: "Federal Communications Commission", url: "https://www.fcc.gov/sites/default/files/personal_radio_services.pdf" },
    { type: "source", title: "47 CFR Part 95, Citizens Band channel rules (channel 9)", publisher: "Code of Federal Regulations", url: "https://www.ecfr.gov/current/title-47/chapter-I/subchapter-D/part-95/subpart-D" },
    { type: "source", title: "Amateur radio license exams (Technician: 35 questions, 26 to pass)", publisher: "Federal Communications Commission", url: "https://www.fcc.gov/wireless/bureau-divisions/mobility-division/amateur-radio-service/examinations" },
    { type: "source", title: "47 CFR 97.403, Safety of life and protection of property", publisher: "Electronic Code of Federal Regulations", url: "https://www.ecfr.gov/current/title-47/chapter-I/subchapter-D/part-97/subpart-E/section-97.403" },
    { type: "source", title: "Getting your Technician license", publisher: "ARRL, the National Association for Amateur Radio", url: "https://www.arrl.org/getting-your-technician-license" },
    { type: "source", title: "ARRL band plan (146.520 and 446.000 MHz national simplex calling)", publisher: "ARRL", url: "https://www.arrl.org/band-plan" },
    { type: "source", title: "Meshtastic radio settings (U.S. 902–928 MHz, modem presets)", publisher: "Meshtastic", url: "https://meshtastic.org/docs/overview/radio-settings/" },
    { type: "source", title: "Let's talk about 2.8 (new U.S. default: Long Turbo, 500 kHz)", publisher: "Meshtastic", url: "https://meshtastic.org/blog/lets-talk-about-2-8/" },
    { type: "source", title: "FCC ISM rules may shatter LoRa mesh communities", publisher: "Hackaday", url: "https://hackaday.com/2026/09/17/fcc-ism-rules-may-shatter-lora-mesh-communities/" },
    { type: "source", title: "406 MHz emergency distress beacons (PLB registration)", publisher: "NOAA SARSAT", url: "https://www.sarsat.noaa.gov/emergency-406-beacons/" },
    { type: "source", title: "U.S. VHF channel information (channel 16)", publisher: "U.S. Coast Guard Navigation Center", url: "https://www.navcen.uscg.gov/us-vhf-channel-information" },
    { type: "source", title: "Ship radio stations: using hand-held marine VHF radios on land", publisher: "Federal Communications Commission", url: "https://fcc.gov/wireless/bureau-divisions/mobility-division/maritime-mobile/ship-radio-stations/ship-radio-1" },
    { type: "source", title: "About marine handheld VHF", publisher: "Federal Communications Commission", url: "https://www.fcc.gov/node/253705" },
    { type: "source", title: "Create your family emergency communication plan (FEMA P-1094)", publisher: "Ready.gov / FEMA", url: "https://www.ready.gov/sites/default/files/2020-03/family-emergency-communication-planning-document.pdf" },
  ],
};
