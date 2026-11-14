import type { CapacitorConfig } from '@capacitor/cli';

// App name is still undecided. When it is chosen, change appName here,
// "name"/"short_name" in public/manifest.webmanifest, and APP_NAME in src/i18n/en.ts.
// The appId cannot change after the first Play Store upload, so pick it with care.
const config: CapacitorConfig = {
  appId: 'com.onthehousesoftware.survivalguide',
  appName: 'Survival Guide',
  webDir: 'dist',
  android: {
    // Everything ships inside the app. Nothing loads from the internet.
    allowMixedContent: false,
  },
};

export default config;
