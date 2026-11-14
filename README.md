# Survival Guide (working name)

A free, offline survival guide for families. No accounts, no tracking, no data mining.
On The House Software.

**Phase 1: app shell.** React + Vite + Capacitor. One codebase feeds the Android app and the
installable offline website (which is how iPhone users get it for now).

## What's in Phase 1

- Disclaimer on **every launch**, one tap to continue. Acceptance is held in memory only and
  never saved. (Settings has "Read the disclaimer again".)
- Home with the 12 sections (placeholders; Phase 2 fills them in).
- Glossary pattern: write `[[bung-wrench]]` or `[[bung-wrench|words shown]]` in any text and
  it becomes a tappable link that opens a sheet with the sketch and one-line explanation.
  The Water section has one sample paragraph showing it.
- Sketch system: black line SVGs in `src/sketches/`, drawn with `currentColor` so they work
  in light and dark mode.
- Languages: English now. All 11 planned languages are listed in Settings. Right-to-left is
  built in (logical CSS throughout), and Settings has a "Test right-to-left layout" switch.
- Text size (normal / large / extra large) and screen theme (match phone / light / dark).
  These are the only things saved, and only on the device.
- Fully offline:
  - **Android:** every file is packaged in the app.
  - **Website:** a service worker caches every built file on the first visit.
- Strict content policy in production builds: the app can only load its own files.
- Android hardware back button: goes back a screen, or closes the app from the start.

## Run it

Needs Node 20 or newer.

```bash
npm install
npm run dev          # opens a local preview in the browser
npm run build        # production build into dist/
npm run preview      # serve the production build (test offline mode here)
```

## Android

Needs Android Studio.

```bash
npm run android:add    # first time only, creates the android/ folder
npm run android:sync   # build the web app and copy it into Android
npm run android:open   # open in Android Studio, then press Run
```

App icon source: `resources/icon.png` (1024px). Generate Android icon sizes with
`npx @capacitor/assets generate --android` once you're happy with the art.

## Website

Upload the contents of `dist/` to any folder on onthehousesoftware.com. Paths are relative,
so it works at the root or in a subfolder like `/survival/`. It must be served over HTTPS for
offline caching to work.

## Where things live

```
src/
  content/       the single content source (sections, glossary, types)
  sketches/      line drawings
  i18n/          English strings + the language list
  screens/       Disclaimer, Home, Section, Glossary, Settings
  components/    top bar, bottom nav, rich text, glossary sheet, content blocks
sw-template.js   offline cache script (filled in at build time)
```

## When the name is chosen

Change it in three places: `capacitor.config.ts` (appName), `public/manifest.webmanifest`
(name, short_name), and `src/i18n/en.ts` (APP_NAME). Also the `<title>` in `index.html`.
Decide the `appId` in `capacitor.config.ts` before the first Play Store upload; it can never
change after that.

## Still to do before launch

- Have a lawyer review the disclaimer text.
- Replace the sample Water paragraph with real Phase 2 content.
