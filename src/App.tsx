import { useState } from 'react';
import { BottomNav } from './components/TopBar';
import { useRoute } from './router';
import { Disclaimer } from './screens/Disclaimer';
import { Glossary } from './screens/Glossary';
import { Home } from './screens/Home';
import { SectionPage } from './screens/SectionPage';
import { Settings } from './screens/Settings';

export function App() {
  // Held in memory only: every cold start begins at the disclaimer.
  const [accepted, setAccepted] = useState(false);
  const route = useRoute();

  if (!accepted) return <Disclaimer onAccept={() => setAccepted(true)} />;

  let screen;
  let tab: 'home' | 'glossary' | 'settings' | null = null;
  switch (route.name) {
    case 'home':
      screen = <Home />;
      tab = 'home';
      break;
    case 'section':
      screen = <SectionPage key={route.id} id={route.id} at={route.at} />;
      tab = 'home';
      break;
    case 'glossary':
      screen = <Glossary termId={route.termId} />;
      tab = 'glossary';
      break;
    case 'settings':
      screen = <Settings onShowDisclaimer={() => setAccepted(false)} />;
      tab = 'settings';
      break;
  }

  return (
    <div className="shell">
      <div className="shell-content">{screen}</div>
      <BottomNav active={tab} />
    </div>
  );
}
