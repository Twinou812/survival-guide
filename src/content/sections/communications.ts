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
// PART 1 written (intro, why, listening, walkie-talkie services) + ham radio and 97.403 warning.
// Still to write: LoRa mesh (Meshtastic; 2026 bandwidth/default-settings question,
// no FCC rule change), satellite messengers, marine channel 16 mention, family radio plan,
// neighborhood net, frequency table, power for radios, 90-day to 2-year plan, drawings.

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
    // PART 2 continues here: mesh texting, satellite messengers, marine ch 16, family plan,
    // neighborhood net, frequency card, power for radios, plan table, drawings.

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
  ],
};
