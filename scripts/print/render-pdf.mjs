// Turns dist-print/<lang>/guide.html into porchlight-<lang>.pdf.
// Needs puppeteer + Chrome, pdf-lib, and poppler's pdftotext (Claude's workspace has
// them; they are not project dependencies).
//   node scripts/print/render-pdf.mjs en
// Pass 1 prints the guide and finds the page each section starts on (hidden @@S:id@@ marks).
// Pass 2 prints it again with those page numbers in the Contents, then page numbers are
// stamped at the bottom of every page except the cover.

import { execFileSync } from 'node:child_process';
import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { createRequire } from 'node:module';

const require = createRequire(process.env.NPM_TOOLS ?? '/opt/npm-tools/node_modules/');
const puppeteer = require('puppeteer');
const { PDFDocument, StandardFonts, rgb } = require('pdf-lib');

const lang = process.argv[2] ?? 'en';
const dir = resolve('dist-print', lang);
const html = readFileSync(`${dir}/guide.html`, 'utf8');
const out = `${dir}/porchlight-${lang}.pdf`;

const browser = await puppeteer.launch({
  executablePath: process.env.CHROME ?? '/usr/bin/google-chrome',
  args: ['--no-sandbox', '--font-render-hinting=none'],
});
async function print(source, file) {
  const page = await browser.newPage();
  await page.setContent(source, { waitUntil: 'load', timeout: 300000 });
  await page.pdf({ path: file, format: 'Letter', preferCSSPageSize: true, printBackground: true, timeout: 600000 });
  await page.close();
}

// Pass 1
const tmp = `${dir}/pass1.pdf`;
await print(html, tmp);
const pages = Number(/Pages:\s+(\d+)/.exec(execFileSync('pdfinfo', [tmp], { encoding: 'utf8' }))[1]);
const start = {};
for (let p = 1; p <= pages; p++) {
  const text = execFileSync('pdftotext', ['-f', String(p), '-l', String(p), tmp, '-'], { encoding: 'utf8' });
  for (const m of text.matchAll(/@@S:([a-z0-9-]+)@@/g)) start[m[1]] ??= p;
}

// Pass 2
const final = html
  .replace(/__P_([a-z0-9-]+)__/g, (_w, id) => String(start[id] ?? '?'))
  .replace(/<span class="mark">@@S:[a-z0-9-]+@@<\/span>/g, '');
await print(final, tmp);
await browser.close();

const doc = await PDFDocument.load(readFileSync(tmp));
const font = await doc.embedFont(StandardFonts.Helvetica);
const n = doc.getPageCount();
doc.getPages().forEach((pg, i) => {
  if (i === 0) return;
  const { width } = pg.getSize();
  const label = `Porchlight: A Family Survival Guide  ·  ${i + 1}`;
  const size = 8;
  pg.drawText(label, { x: width - 54 - font.widthOfTextAtSize(label, size), y: 26, size, font, color: rgb(0.35, 0.35, 0.35) });
});
doc.setTitle('Porchlight: A Family Survival Guide');
doc.setAuthor('On The House Software');
doc.setLanguage(lang);
writeFileSync(out, await doc.save());
console.log(`${out}: ${n} pages, ${(readFileSync(out).length / 1048576).toFixed(1)} MB`);
console.log('Section start pages:', start);
