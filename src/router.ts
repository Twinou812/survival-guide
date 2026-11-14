import { useEffect, useState } from 'react';

// Tiny hash router. Hash URLs work the same inside the Android app, on any web host,
// and from a saved offline copy, with no server setup.

export type Route =
  | { name: 'home' }
  | { name: 'section'; id: string }
  | { name: 'glossary'; termId?: string }
  | { name: 'settings' };

export function parse(hash: string): Route {
  const parts = hash.replace(/^#\/?/, '').split('/').filter(Boolean).map(decodeURIComponent);
  switch (parts[0]) {
    case 'section':
      return parts[1] ? { name: 'section', id: parts[1] } : { name: 'home' };
    case 'glossary':
      return { name: 'glossary', termId: parts[1] };
    case 'settings':
      return { name: 'settings' };
    default:
      return { name: 'home' };
  }
}

export function href(route: Route): string {
  switch (route.name) {
    case 'home':
      return '#/';
    case 'section':
      return `#/section/${encodeURIComponent(route.id)}`;
    case 'glossary':
      return route.termId ? `#/glossary/${encodeURIComponent(route.termId)}` : '#/glossary';
    case 'settings':
      return '#/settings';
  }
}

export function useRoute(): Route {
  const [route, setRoute] = useState(() => parse(window.location.hash));
  useEffect(() => {
    const onChange = () => {
      setRoute(parse(window.location.hash));
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);
  return route;
}

export function goBack() {
  if (window.history.length > 1) window.history.back();
  else window.location.hash = '#/';
}
