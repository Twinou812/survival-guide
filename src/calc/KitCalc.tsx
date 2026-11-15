import { RichText } from '../components/RichText';
import { pick } from '../content/types';
import { useSettings } from '../settings';
import { useFamily } from './family';
import { fill, fmt } from './format';
import { kitList } from './math';
import { KIT_ITEMS } from './kit-items';
import { GAL_TO_L } from './rules';
import { CalcBox } from './ui';

export function KitCalc() {
  const { t, locale } = useSettings();
  const { family, checked, toggle, clearChecks } = useFamily();
  const items = kitList(family).filter((k) => k.show);
  const ready = items.filter((k) => checked.has(k.id)).length;
  return (
    <CalcBox title={t.calc.kitTitle}>
      <p className="calc-note">
        <strong>{fill(t.calc.kitReady, { n: fmt(ready, locale), total: fmt(items.length, locale) })}</strong>
      </p>
      <ul className="check-list">
        {items.map((k) => {
          const item = KIT_ITEMS[k.id];
          const qty =
            k.qty === null
              ? null
              : k.id === 'water'
                ? fill(t.calc.kitWater, { gal: fmt(k.qty, locale), l: fmt(k.qty * GAL_TO_L, locale) })
                : fmt(k.qty, locale);
          return (
            <li key={k.id} className={checked.has(k.id) ? 'is-done' : undefined}>
              <label className="choice">
                <input type="checkbox" checked={checked.has(k.id)} onChange={() => toggle(k.id)} />
                <span>
                  <span>{pick(item.name, locale)}</span>
                  <small className="muted" style={{ display: 'block' }}>{pick(item.howMuch, locale)}</small>
                </span>
                {qty !== null && <span className="qty">{qty}</span>}
              </label>
            </li>
          );
        })}
      </ul>
      <div className="family-footer">
        <small className="muted">{t.calc.kitSaved}</small>
        {checked.size > 0 && (
          <button type="button" className="btn btn-quiet" onClick={clearChecks}>
            {t.calc.kitClear}
          </button>
        )}
      </div>
      <p className="calc-note">
        <RichText text={t.calc.kitNote} />
      </p>
    </CalcBox>
  );
}
