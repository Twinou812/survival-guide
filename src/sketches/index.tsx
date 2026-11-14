import type { ReactElement } from 'react';

// Simple black-and-white line sketches. Rules for every drawing:
//   - viewBox only (no fixed width/height), stroke="currentColor", fill="none"
//   - plain lines a person with no experience can read at a glance
//   - no text inside the drawing (captions are translated separately)

const BungWrench = (
  <svg viewBox="0 0 320 120" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    {/* handle */}
    <path d="M70 52 H250 V68 H70 Z" />
    {/* large end: two prongs for the 2-inch cap */}
    <path d="M70 52 L40 40 V30 H20 V90 H40 V80 L70 68" />
    <path d="M20 46 H8 M20 74 H8" />
    {/* small end: square tooth for the 3/4-inch cap */}
    <path d="M250 52 L272 46 H300 V74 H272 L250 68" />
    <path d="M282 46 V36 H296 V46 M282 74 V84 H296 V74" />
    {/* hanging hole */}
    <circle cx="160" cy="60" r="4" />
  </svg>
);

export const SKETCHES: Record<string, ReactElement> = {
  'bung-wrench': BungWrench,
};

export function Sketch({ id, label }: { id: string; label: string }) {
  const svg = SKETCHES[id];
  if (!svg) return null;
  return (
    <div className="sketch" role="img" aria-label={label}>
      {svg}
    </div>
  );
}
