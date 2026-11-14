import { BlockView } from '../components/BlockView';
import { plainText } from '../components/RichText';
import { TopBar } from '../components/TopBar';
import { getSection } from '../content/sections';
import { pick, type Block } from '../content/types';
import { useSettings } from '../settings';

type Heading = Extract<Block, { type: 'h' }>;
type Source = Extract<Block, { type: 'source' }>;

function jumpTo(id: string) {
  const el = document.getElementById(`h-${id}`);
  if (!el) return;
  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  el.focus({ preventScroll: true }); // screen readers continue from the heading
}

export function SectionPage({ id }: { id: string }) {
  const { t, locale } = useSettings();
  const section = getSection(id);

  if (!section) {
    window.location.hash = '#/';
    return null;
  }

  const body = section.blocks.filter((b) => b.type !== 'source');
  const headings = body.filter((b): b is Heading => b.type === 'h');
  const sources = section.blocks.filter((b): b is Source => b.type === 'source');

  return (
    <>
      <TopBar title={pick(section.title, locale)} />
      <main className="page prose">
        <p className="lead">{pick(section.summary, locale)}</p>

        {body.length === 0 && (
          <aside className="notice" role="note">
            <strong>{t.sectionComingSoon}</strong> {t.sectionComingSoonDetail}
          </aside>
        )}

        {headings.length > 2 && (
          <nav className="toc" aria-label={t.onThisPage}>
            <h2 className="toc-title">{t.onThisPage}</h2>
            <ol>
              {headings.map((h) => (
                <li key={h.id}>
                  <button type="button" onClick={() => jumpTo(h.id)}>
                    {plainText(pick(h.text, locale), locale)}
                  </button>
                </li>
              ))}
            </ol>
          </nav>
        )}

        {body.map((b, i) => <BlockView key={i} block={b} />)}

        {sources.length > 0 && (
          <section className="sources" aria-labelledby="sources-title">
            <h2 id="sources-title">{t.sources}</h2>
            <p className="sources-note">{t.sourcesNote}</p>
            <ol>
              {sources.map((s, i) => (
                <li key={i}>
                  {s.title}, {s.publisher}
                  {s.url && <><br /><span className="source-url">{s.url}</span></>}
                </li>
              ))}
            </ol>
          </section>
        )}
      </main>
    </>
  );
}
