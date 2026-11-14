import { Fragment, useState, type ReactNode } from 'react';
import { getTerm } from '../content/glossary';
import { useSettings } from '../settings';
import { TermSheet } from './TermSheet';

// Renders text with [[term-id]] or [[term-id|shown words]] links into the glossary.
const LINK = /\[\[([a-z0-9-]+)(?:\|([^\]]+))?\]\]/g;

export function RichText({ text }: { text: string }) {
  const { locale } = useSettings();
  const [open, setOpen] = useState<string | null>(null);

  const parts: ReactNode[] = [];
  let last = 0;
  for (const m of text.matchAll(LINK)) {
    const [whole, id, label] = m;
    const start = m.index ?? 0;
    if (start > last) parts.push(text.slice(last, start));
    const term = getTerm(id);
    const shown = label ?? (term ? term.name[locale] ?? term.name.en : id);
    parts.push(
      term ? (
        <button key={start} type="button" className="term" onClick={() => setOpen(id)}>
          {shown}
        </button>
      ) : (
        // Unknown term id: show the words plainly rather than a broken link.
        <Fragment key={start}>{shown}</Fragment>
      ),
    );
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
