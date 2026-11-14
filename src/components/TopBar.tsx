import type { ReactNode } from 'react';
import { goBack, href } from '../router';
import { useSettings } from '../settings';

export function TopBar({ title, showBack = true }: { title: string; showBack?: boolean }) {
  const { t } = useSettings();
  return (
    <header className="topbar">
      {showBack ? (
        <button type="button" className="icon-btn" onClick={goBack} aria-label={t.back}>
          <svg className="flip-rtl" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M15 5l-7 7 7 7" />
          </svg>
        </button>
      ) : (
        <span className="icon-btn-spacer" />
      )}
      <h1 className="topbar-title">{title}</h1>
      <span className="icon-btn-spacer" />
    </header>
  );
}

type Tab = 'home' | 'glossary' | 'settings';

export function BottomNav({ active }: { active: Tab | null }) {
  const { t } = useSettings();
  const item = (key: Tab, label: string, icon: ReactNode) => (
    <a
      className={'nav-item' + (active === key ? ' is-active' : '')}
      href={href({ name: key })}
      aria-current={active === key ? 'page' : undefined}
    >
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        {icon}
      </svg>
      <span>{label}</span>
    </a>
  );
  return (
    <nav className="bottomnav" aria-label="Main">
      {item('home', t.navHome, <path d="M4 11l8-7 8 7v9h-5v-6H9v6H4z" />)}
      {item('glossary', t.navGlossary, <><path d="M5 4h11a3 3 0 013 3v13H8a3 3 0 01-3-3z" /><path d="M5 17a3 3 0 013-3h11" /></>)}
      {item('settings', t.navSettings, <><path d="M4 7h10M18 7h2M4 17h4M12 17h8" /><circle cx="16" cy="7" r="2" /><circle cx="10" cy="17" r="2" /></>)}
    </nav>
  );
}
