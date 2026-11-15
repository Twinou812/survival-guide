import { useEffect, useMemo, useState } from 'react';
import { TopBar } from '../components/TopBar';
import { plainText } from '../components/RichText';
import { GLOSSARY } from '../content/glossary';
import { getSection } from '../content/sections';
import { termHome } from '../content/term-homes';
import { href } from '../router';
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
                <ReadMore termId={term.id} />
              </div>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

/** "Read more: Water › Making water safe" — goes to the spot that explains this term best. */
function ReadMore({ termId }: { termId: string }) {
  const { t, locale } = useSettings();
  const home = termHome(termId);
  const section = home && getSection(home.section);
  if (!home || !section) return null;
  const heading = home.heading
    ? section.blocks.find((b) => b.type === 'h' && b.id === home.heading)
    : undefined;
  const where = [pick(section.title, locale)];
  if (heading?.type === 'h') where.push(plainText(pick(heading.text, locale), locale));
  return (
    <p className="read-more">
      <a className="xref" href={href({ name: 'section', id: section.id, at: home.anchor })}>
        {t.glossaryReadMore} {where.join(' › ')}
      </a>
    </p>
  );
}
