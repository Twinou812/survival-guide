import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { getTerm } from '../content/glossary';
import { pick } from '../content/types';
import { href } from '../router';
import { useSettings } from '../settings';
import { Sketch } from '../sketches';

// Bottom sheet that explains a glossary term without leaving the page.
export function TermSheet({ termId, onClose }: { termId: string; onClose: () => void }) {
  const { t, locale } = useSettings();
  const ref = useRef<HTMLDialogElement>(null);
  const term = getTerm(termId);

  useEffect(() => {
    const d = ref.current;
    if (d && !d.open) d.showModal();
  }, []);

  if (!term) return null;
  const name = pick(term.name, locale);

  // Portal to <body>: the link sits inside a paragraph, which can't hold a dialog.
  return createPortal(
    <dialog
      ref={ref}
      className="sheet"
      aria-labelledby="sheet-title"
      onClose={onClose}
      onClick={(e) => {
        if (e.target === ref.current) ref.current?.close(); // tap outside
      }}
    >
      <div className="sheet-body">
        <h2 id="sheet-title">{name}</h2>
        {term.sketch && <Sketch id={term.sketch} label={name} />}
        <p>{pick(term.definition, locale)}</p>
        <div className="sheet-actions">
          <a className="btn btn-quiet" href={href({ name: 'glossary', termId: term.id })} onClick={() => ref.current?.close()}>
            {t.glossaryOpenFull}
          </a>
          <button type="button" className="btn" onClick={() => ref.current?.close()}>
            {t.close}
          </button>
        </div>
      </div>
    </dialog>,
    document.body,
  );
}
