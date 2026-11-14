// English is the source language. Every other language file must have the same keys.
// Translators: keep the tone calm and practical. Short sentences. Plain words.

export const APP_NAME = 'Survival Guide'; // placeholder until the name is chosen

const en = {
  appName: APP_NAME,

  // Disclaimer (shown on every launch)
  disclaimerTitle: 'READ THIS FIRST',
  disclaimerIntro:
    'This guide is for emergencies when professional help is not available. It is not medical, legal, or professional advice.',
  disclaimerPoints: [
    'If you can reach a doctor, hospital, or emergency services, use them first.',
    'Some procedures here, like closing wounds, removing objects, and pulling teeth, can cause serious injury or death if done wrong. Use them only when there is no other option.',
    'Every remedy is labeled by how well it is proven. "Traditional" and "Unproven" mean exactly that.',
    'Laws on hunting, trapping, and self-defense vary by location. You are responsible for following yours.',
    'You use this information at your own risk. The authors and On The House Software accept no liability for injury, loss, or damage.',
  ],
  disclaimerAccept: 'I understand',

  // Home
  homeTagline: 'Calm, practical help for when the usual help is not there.',
  homeOffline: 'Works with no internet. Free. No accounts. No tracking.',
  homeSections: 'Sections',

  // Navigation
  navHome: 'Home',
  navGlossary: 'Glossary',
  navSettings: 'Settings',
  back: 'Back',

  // Sections
  sectionComingSoon: 'This section is being written.',
  sectionComingSoonDetail:
    'It will have step-by-step guidance, simple drawings, and sources you can check.',
  sectionSample: 'Sample',

  // Glossary
  glossaryTitle: 'Glossary',
  glossaryIntro:
    'Every tool and term in this guide, with a drawing and a plain explanation. No internet needed.',
  glossarySearch: 'Search the glossary',
  glossaryNoResults: 'No matching terms.',
  glossaryOpenFull: 'Open in glossary',
  close: 'Close',

  // Settings
  settingsTitle: 'Settings',
  settingsLanguage: 'Language',
  settingsLanguageSoon: 'coming',
  settingsLanguageMachine: 'machine translated, native speaker review wanted',
  settingsTextSize: 'Text size',
  textSizeNormal: 'Normal',
  textSizeLarge: 'Large',
  textSizeXLarge: 'Extra large',
  settingsTheme: 'Screen',
  themeAuto: 'Match phone',
  themeLight: 'Light',
  themeDark: 'Dark (saves battery on many phones)',
  settingsRtlTest: 'Test right-to-left layout',
  settingsRtlTestHelp: 'For reviewers checking Arabic and Urdu layouts before those translations are ready.',
  settingsPrivacy: 'Privacy',
  settingsPrivacyText:
    'This app collects nothing. No accounts, no analytics, no ads. Your settings stay on this device.',
  settingsShowDisclaimer: 'Read the disclaimer again',

  // About
  aboutBy: 'Made by On The House Software. Free for everyone.',
};

export type Strings = typeof en;
export default en;
