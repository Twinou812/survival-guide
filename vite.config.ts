import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import { createHash } from 'node:crypto';
import { readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { join, relative, sep } from 'node:path';

// Strict content policy for production builds: the app may only load its own files.
// No analytics, no fonts from the web, no network calls. (Skipped in dev because
// Vite's hot reload needs an inline script.)
const CSP = [
  "default-src 'self'",
  "script-src 'self'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data:",
  "connect-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'none'",
].join('; ');

function cspPlugin(): Plugin {
  return {
    name: 'offline-csp',
    apply: 'build',
    transformIndexHtml(html) {
      return html.replace(
        '<!-- CSP -->',
        `<meta http-equiv="Content-Security-Policy" content="${CSP}" />`,
      );
    },
  };
}

// Writes dist/sw.js with the full list of built files, so the website version
// caches everything on first visit and then works with no internet.
function offlineServiceWorker(): Plugin {
  let outDir = 'dist';
  return {
    name: 'offline-service-worker',
    apply: 'build',
    configResolved(config) {
      outDir = config.build.outDir;
    },
    writeBundle() {
      const files: string[] = [];
      const walk = (dir: string) => {
        for (const name of readdirSync(dir)) {
          const full = join(dir, name);
          if (statSync(full).isDirectory()) walk(full);
          else files.push(relative(outDir, full).split(sep).join('/'));
        }
      };
      walk(outDir);
      const assets = files.filter((f) => f !== 'sw.js').sort();
      const hash = createHash('sha256');
      for (const f of assets) hash.update(f).update(readFileSync(join(outDir, f)));
      const version = hash.digest('hex').slice(0, 12);
      const template = readFileSync('sw-template.js', 'utf8');
      const sw = template
        .replace('__VERSION__', version)
        .replace('__ASSETS__', JSON.stringify(['./', ...assets.map((a) => './' + a)], null, 2));
      writeFileSync(join(outDir, 'sw.js'), sw);
    },
  };
}

export default defineConfig({
  // Relative paths so the same build works inside the Android app, at the site root,
  // or in a subfolder like onthehousesoftware.com/survival/.
  base: './',
  plugins: [react(), cspPlugin(), offlineServiceWorker()],
  build: {
    target: 'es2020',
    sourcemap: false,
  },
});
