import { SECTIONS } from '../content/sections';
import { pick } from '../content/types';
import { href } from '../router';
import { useSettings } from '../settings';

export function Home() {
  const { t, locale } = useSettings();
  return (
    <main className="page">
      <header className="home-header">
        <h1>{t.appName}</h1>
        <p className="home-tagline">{t.homeTagline}</p>
        <p className="home-offline">{t.homeOffline}</p>
      </header>

      <h2 className="list-heading">{t.homeSections}</h2>
      <ul className="section-list">
        {SECTIONS.map((s) => (
          <li key={s.id}>
            <a className="section-card" href={href({ name: 'section', id: s.id })}>
              <span className="section-num" aria-hidden="true">{s.number}</span>
              <span className="section-text">
                <span className="section-title">{pick(s.title, locale)}</span>
                <span className="section-summary">{pick(s.summary, locale)}</span>
              </span>
              <svg className="chev flip-rtl" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </li>
        ))}
      </ul>
      <p className="home-footer">{t.aboutBy}</p>
    </main>
  );
}
