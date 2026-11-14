// Simple black-and-white line sketches, one .svg file per drawing in ./svg/.
// The file name (without .svg) is the sketch id used in sections and the glossary.
//
// Rules for every drawing (checked by scripts/content-check.ts on every build):
//   - viewBox only (no width/height on the <svg>), stroke="currentColor", fill="none"
//     (fill="currentColor" is fine for small solid parts like a stone)
//   - plain lines a person with no experience can read at a glance
//   - no <text> inside the drawing (captions are translated separately)
//   - no scripts, images, or links: the files are inlined into the page
//   - people and limbs are drawn as closed outlines. Give a shape class="cover" and it is
//     filled with the card color (styles.css), hiding the lines behind it, so a front arm
//     can overlap the body. Draw back parts first, front parts last.
//
// Plain .svg files can be opened and edited in any drawing program, and Phase 4 reuses
// them directly for the printable PDF.

const files = import.meta.glob('./svg/*.svg', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>;

export const SKETCHES: Record<string, string> = Object.fromEntries(
  Object.entries(files).map(([path, svg]) => [
    path.slice('./svg/'.length, -'.svg'.length),
    // The wrapper carries the label; hide the drawing itself from screen readers.
    svg.replace('<svg ', '<svg aria-hidden="true" focusable="false" '),
  ]),
);

export function Sketch({ id, label }: { id: string; label: string }) {
  const svg = SKETCHES[id];
  if (!svg) return null;
  // Safe: these are our own bundled files, checked at build time to contain no
  // scripts, links, or external references.
  return <div className="sketch" role="img" aria-label={label} dangerouslySetInnerHTML={{ __html: svg }} />;
}
