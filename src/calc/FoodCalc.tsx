import { RichText } from '../components/RichText';
import { useSettings } from '../settings';
import { useFamily } from './family';
import { fill, fmt } from './format';
import { adultEquivalents, calorieBreakdown, caloriesPerDay, oilGal, staples } from './math';
import { GAL_TO_L } from './rules';
import { CalcBox, ResultRow, RuleLine, SpanPicker } from './ui';

const GROUP = {
  adult: 'shortAdults',
  olderAdult: 'shortOlderAdults',
  teen: 'shortTeens',
  child: 'shortChildren',
  pregnantOrNursing: 'shortPregnantOrNursing',
} as const;

export function FoodCalc() {
  const { t, locale } = useSettings();
  const { family } = useFamily();
  const perDay = caloriesPerDay(family);
  const days = fmt(family.days, locale);
  const oil = oilGal(family);
  return (
    <CalcBox title={t.calc.foodTitle} inputs={<SpanPicker />}>
      <ResultRow label={t.calc.foodPerDay} value={fmt(perDay, locale)} />
      <ResultRow label={fill(t.calc.foodTotal, { days })} value={fmt(perDay * family.days, locale)} />
      {perDay > 0 && (
        <RuleLine>
          {fill(t.calc.foodSum, {
            parts: calorieBreakdown(family)
              .map((r) => fill(t.calc.foodPart, { kcal: fmt(r.kcal, locale), count: fmt(r.count, locale), group: t.calc[GROUP[r.group]] }))
              .join(' + '),
            total: fmt(perDay, locale),
          })}
        </RuleLine>
      )}
      <RuleLine>{fill(t.calc.foodRule, { ae: fmt(adultEquivalents(family), locale, 2) })}</RuleLine>
      <table>
        <caption className="calc-note">{fill(t.calc.foodStaples, { days })}</caption>
        <tbody>
          {staples(family).map((s) => (
            <tr key={s.id}>
              <th scope="row">{t.calc[`staple_${s.id}`]}</th>
              <td className="num">{fill(t.calc.lbKg, { lb: fmt(s.lb, locale), kg: fmt(s.kg, locale) })}</td>
            </tr>
          ))}
          <tr>
            <th scope="row">{t.calc.staple_oil}</th>
            <td className="num">{fill(t.calc.galL, { gal: fmt(oil, locale, 1), l: fmt(oil * GAL_TO_L, locale, 1) })}</td>
          </tr>
        </tbody>
      </table>
      {family.babies > 0 && (
        <p className="calc-note">
          <RichText text={t.calc.foodBabies} />
        </p>
      )}
      <p className="calc-note">{t.calc.foodVitC}</p>
    </CalcBox>
  );
}
