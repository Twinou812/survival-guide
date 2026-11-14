import { Fragment, useState, type ReactNode } from 'react';
import { getTerm } from '../content/glossary';
import { getSection } from '../content/sections';
import { pick } from '../content/types';
import { href } from '../router';
import { useSettings } from '../settings';
import { TermSheet } from './TermSheet';

// Renders text with two kinds of links:
//   [[term-id]] or [[term-id|shown words]]        → glossary bottom sheet
//   {{section-id}} or {{section-id|shown words}}  → another section of the guide
const LINK = /\[\[([a-z0-9-]+)(?:\|([^\]]+))?\]\]|\{\{([a-z0-9-]+)(?:\|([^}]+))?\}\}/g;

export function RichText({ text }: { text: string }) {
  const { locale } = useSettings();
  const [open, setOpen] = useState<string | null>(null);

  const parts: ReactNode[] = [];
  let last = 0;
  for (const m of text.matchAll(LINK)) {
    const [whole, termId, termLabel, sectionId, sectionLabel] = m;
    const start = m.index ?? 0;
    if (start > last) parts.push(text.slice(last, start));

    if (termId) {
      const term = getTerm(termId);
      const shown = termLabel ?? (term ? pick(term.name, locale) : termId);
      parts.push(
        term ? (
          <button key={start} type="button" className="term" onClick={() => setOpen(termId)}>
            {shown}
          </button>
        ) : (
          // Unknown id: show the words plainly rather than a broken link.
          <Fragment key={start}>{shown}</Fragment>
        ),
      );
    } else {
      const section = getSection(sectionId);
      const shown = sectionLabel ?? (section ? pick(section.title, locale) : sectionId);
      parts.push(
        section ? (
          <a key={start} className="xref" href={href({ name: 'section', id: sectionId })}>
            {shown}
          </a>
        ) : (
          <Fragment key={start}>{shown}</Fragment>
        ),
      );
    }
    last = start + whole.length;
  }
  if (last < text.length) parts.push(text.slice(last));

  return (
    <>
      {parts}
      {open && <TermSheet termId={open} onClose={() => setOpen(null)} />}
    </>
  );
}

/** The same text with link markup removed (for captions, labels, and the PDF later). */
export function plainText(text: string, locale: string): string {
  return text.replace(LINK, (_w, termId, termLabel, sectionId, sectionLabel) => {
    if (termId) {
      const term = getTerm(termId);
      return termLabel ?? (term ? pick(term.name, locale) : termId);
    }
    const section = getSection(sectionId);
    return sectionLabel ?? (section ? pick(section.title, locale) : sectionId);
  });
}
