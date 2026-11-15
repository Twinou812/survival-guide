import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import type { Family } from './math';
import { sanitize } from './family-store';
import { DEFAULT_FAMILY, KIT_ITEM_IDS, type KitItemId } from './rules';

// The family details and the 72-hour kit checkboxes are saved on this device only,
// like settings. Nothing is sent anywhere. Storage may be unavailable or hold old
// data, so every read and write is guarded.

const FAMILY_KEY = 'sg-family';
const CHECKS_KEY = 'sg-checks';

function read(key: string): string | null {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}
function write(key: string, value: string | null) {
  try {
    if (value === null) localStorage.removeItem(key);
    else localStorage.setItem(key, value);
  } catch {
    /* storage unavailable: keep working from memory */
  }
}

interface FamilyValue {
  family: Family;
  /** True until the user changes anything (the example family is showing). */
  isDefault: boolean;
  set: (patch: Partial<Family>) => void;
  clear: () => void;
  checked: Set<KitItemId>;
  toggle: (id: KitItemId) => void;
  clearChecks: () => void;
}

const Ctx = createContext<FamilyValue | null>(null);

const PEOPLE_KEYS = ['adults', 'olderAdults', 'teens', 'children', 'babies', 'pregnantOrNursing', 'pets'] as const;
/** Same people and pets as the example family (span, weather, and dates may differ). */
function isExample(f: Family): boolean {
  return PEOPLE_KEYS.every((k) => JSON.stringify(f[k]) === JSON.stringify(DEFAULT_FAMILY[k]));
}

function loadChecks(): Set<KitItemId> {
  try {
    const raw = JSON.parse(read(CHECKS_KEY) ?? '[]');
    const ids = new Set<string>(KIT_ITEM_IDS);
    return new Set(Array.isArray(raw) ? raw.filter((x): x is KitItemId => ids.has(x)) : []);
  } catch {
    return new Set();
  }
}

export function FamilyProvider({ children }: { children: ReactNode }) {
  const [saved] = useState(() => read(FAMILY_KEY));
  const [family, setFamily] = useState<Family>(() => (saved ? sanitize(saved) : DEFAULT_FAMILY));
  // isDefault: the example family is showing (no person or pet changed yet).
  // dirty: anything changed (span, frost dates too), so it is worth saving.
  const [isDefault, setIsDefault] = useState(() => saved === null || isExample(sanitize(saved)));
  const [dirty, setDirty] = useState(saved !== null);
  const [checked, setChecked] = useState<Set<KitItemId>>(loadChecks);

  useEffect(() => {
    if (dirty) write(FAMILY_KEY, JSON.stringify(family));
  }, [family, dirty]);

  useEffect(() => {
    write(CHECKS_KEY, checked.size ? JSON.stringify([...checked]) : null);
  }, [checked]);

  const value = useMemo<FamilyValue>(
    () => ({
      family,
      isDefault,
      set: (patch) => {
        const next = sanitize({ ...family, ...patch });
        if (JSON.stringify(next) === JSON.stringify(family)) return;
        setFamily(next);
        setDirty(true);
        if (!isExample(next)) setIsDefault(false);
      },
      clear: () => {
        write(FAMILY_KEY, null);
        setFamily(DEFAULT_FAMILY);
        setIsDefault(true);
        setDirty(false);
      },
      checked,
      toggle: (id) =>
        setChecked((c) => {
          const next = new Set(c);
          if (next.has(id)) next.delete(id);
          else next.add(id);
          return next;
        }),
      clearChecks: () => setChecked(new Set()),
    }),
    [family, isDefault, checked],
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useFamily(): FamilyValue {
  const v = useContext(Ctx);
  if (!v) throw new Error('useFamily must be inside FamilyProvider');
  return v;
}
