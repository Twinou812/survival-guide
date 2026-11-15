// Number formatting shared by the calculators and the printed tables.

/** Whole numbers (or `digits` decimals) with thousands separators for the language. */
export function fmt(n: number, locale = 'en', digits = 0): string {
  const safe = Number.isFinite(n) ? n : 0;
  return new Intl.NumberFormat(locale, { maximumFractionDigits: digits, minimumFractionDigits: 0 }).format(safe);
}

/** "{n}" placeholders in UI strings. */
export function fill(text: string, values: Record<string, string | number>): string {
  return text.replace(/\{(\w+)\}/g, (w, k) => (k in values ? String(values[k]) : w));
}
