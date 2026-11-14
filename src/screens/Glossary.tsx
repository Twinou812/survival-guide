import { useEffect, useMemo, useState } from 'react';
import { TopBar } from '../components/TopBar';
import { GLOSSARY } from '../content/glossary';
import { pick } from '../content/types';
import { useSettings } from '../settings';
import { Sketch } from '../sketches';

export function Glossary({ termId }: { termId?: string }) {
  const { t, locale } = useSettings();
  const [q, setQ] = useState('');

  const terms = useMemo(() => {
    const query = q.trim().toLocaleLowerCase(locale);
    return GLOSSARY.map((term) => ({ term, name: pick(term.name, locale), def: pick(term.definition, locale) }))
      .filter(({ name, def }) =>
        !query || name.toLocaleLowerCase(locale).includes(query) || def.toLocaleLowerCase(locale).includes(query),
      )
      .sort((a, b) => a.name.localeCompare(b.name, locale));
  }, [q, locale]);

  // Arriving from a term link: scroll to that entry.
  useEffect(() => {
    if (termId) document.getElementById('term-' + termId)?.scrollIntoView({ block: 'start' });
  }, [termId]);

  return (
    <>
      <TopBar title={t.glossaryTitle} showBack={false} />
      <main className="page">
        <p className="lead">{t.glossaryIntro}</p>
        <label className="search">
          <span className="visually-hidden">{t.glossarySearch}</span>
          <input type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder={t.glossarySearch} />
        </label>
        {terms.length === 0 && <p className="muted">{t.glossaryNoResults}</p>}
        <ul className="glossary-list">
          {terms.map(({ term, name, def }) => (
            <li key={term.id} id={'term-' + term.id} className={term.id === termId ? 'is-target' : undefined}>
              {term.sketch && <Sketch id={term.sketch} label={name} />}
              <div>
                <h2>{name}</h2>
                <p>{def}</p>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
