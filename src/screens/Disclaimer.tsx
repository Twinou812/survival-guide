import { useEffect, useRef } from 'react';
import { useSettings } from '../settings';

// Shown on every launch. One tap to continue. Acceptance is never saved.
export function Disclaimer({ onAccept }: { onAccept: () => void }) {
  const { t } = useSettings();
  const heading = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    heading.current?.focus(); // screen readers start at the top
  }, []);

  return (
    <main className="disclaimer" aria-labelledby="disclaimer-title">
      <div className="disclaimer-card">
        <h1 id="disclaimer-title" ref={heading} tabIndex={-1}>
          {t.disclaimerTitle}
        </h1>
        <p className="disclaimer-intro">{t.disclaimerIntro}</p>
        <ul className="disclaimer-points">
          {t.disclaimerPoints.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      </div>
      <div className="disclaimer-footer">
        <button type="button" className="btn btn-primary btn-block" onClick={onAccept}>
          {t.disclaimerAccept}
        </button>
      </div>
    </main>
  );
}
