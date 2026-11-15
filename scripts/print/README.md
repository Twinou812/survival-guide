# Printable guide (Phase 4)

Built from the same content files as the app.

1. `node --experimental-strip-types --no-warnings --import ./scripts/print/register.mjs scripts/print/build-print.ts en`
   writes `dist-print/en/guide.html` (cover, disclaimer, contents, all sections, glossary).
   You can also open that file in Chrome and use Print → Save as PDF.
2. `node scripts/print/render-pdf.mjs en` makes `dist-print/en/porchlight-en.pdf` with page
   numbers in the contents and at the bottom of each page. It needs puppeteer, Chrome, pdf-lib
   and poppler's `pdftotext`/`pdfinfo` (Claude's workspace has them; they are not project
   dependencies).

Words used only in print (Contents, Sources, the calculator note) are in the `PRINT` table at
the top of build-print.ts; add a language there in Phase 5. The PDF goes on the website at
`porchlight/porchlight-<lang>.pdf` in the onthehousesoftware repo.
