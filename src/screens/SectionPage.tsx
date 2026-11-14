import { BlockView } from '../components/BlockView';
import { TopBar } from '../components/TopBar';
import { getSection } from '../content/sections';
import { pick } from '../content/types';
import { useSettings } from '../settings';

export function SectionPage({ id }: { id: string }) {
  const { t, locale } = useSettings();
  const section = getSection(id);

  if (!section) {
    window.location.hash = '#/';
    return null;
  }

  // Phase 1: Water holds one sample block; every section still shows the "being written" notice.
  return (
    <>
      <TopBar title={pick(section.title, locale)} />
      <main className="page prose">
        <p className="lead">{pick(section.summary, locale)}</p>
        <aside className="notice" role="note">
          <strong>{t.sectionComingSoon}</strong> {t.sectionComingSoonDetail}
        </aside>
        {section.blocks.length > 0 && (
          <>
            <h2 className="sample-label">{t.sectionSample}</h2>
            {section.blocks.map((b, i) => <BlockView key={i} block={b} />)}
          </>
        )}
      </main>
    </>
  );
}
