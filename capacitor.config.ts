import type { CapacitorConfig } from '@capacitor/cli';

// App name: Porchlight: A Family Survival Guide (chosen Nov 14, 2026). If it ever changes, change
// appName here, "name"/"short_name" in public/manifest.webmanifest, APP_NAME in src/i18n/en.ts,
// and <title> in index.html.
// The appId cannot change after the first Play Store upload, so pick it with care.
const config: CapacitorConfig = {
  appId: 'com.onthehousesoftware.porchlight',
  appName: 'Porchlight',
  webDir: 'dist',
  android: {
    // Everything ships inside the app. Nothing loads from the internet.
    allowMixedContent: false,
  },
};

export default config;
