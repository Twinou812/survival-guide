import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { getLocale, type Dir } from './i18n/locales';
import type { Strings } from './i18n/en';

// Settings are saved on this device only. The disclaimer acceptance is deliberately
// NOT saved, so the disclaimer appears on every launch.

export type TextSize = 'normal' | 'large' | 'xlarge';
export type Theme = 'auto' | 'light' | 'dark';

interface Prefs {
  locale: string;
  textSize: TextSize;
  theme: Theme;
  rtlTest: boolean;
}

const DEFAULTS: Prefs = { locale: 'en', textSize: 'normal', theme: 'auto', rtlTest: false };
const KEY = 'sg-prefs';

function load(): Prefs {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) return { ...DEFAULTS, ...JSON.parse(raw) };
  } catch {
    /* storage unavailable: use defaults */
  }
  return DEFAULTS;
}

interface SettingsValue extends Prefs {
  t: Strings;
  dir: Dir;
  set: (patch: Partial<Prefs>) => void;
}

const Ctx = createContext<SettingsValue | null>(null);

export function SettingsProvider({ children }: { children: ReactNode }) {
  const [prefs, setPrefs] = useState<Prefs>(load);
  const locale = getLocale(prefs.locale);
  const dir: Dir = prefs.rtlTest ? 'rtl' : locale.dir;

  useEffect(() => {
    try {
      localStorage.setItem(KEY, JSON.stringify(prefs));
    } catch {
      /* ignore */
    }
  }, [prefs]);

  useEffect(() => {
    const root = document.documentElement;
    root.lang = locale.code;
    root.dir = dir;
    root.dataset.textSize = prefs.textSize;
    root.dataset.theme = prefs.theme;
  }, [locale.code, dir, prefs.textSize, prefs.theme]);

  const value = useMemo<SettingsValue>(
    () => ({
      ...prefs,
      t: locale.strings!,
      dir,
      set: (patch) => setPrefs((p) => ({ ...p, ...patch })),
    }),
    [prefs, locale, dir],
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useSettings(): SettingsValue {
  const v = useContext(Ctx);
  if (!v) throw new Error('useSettings must be inside SettingsProvider');
  return v;
}
