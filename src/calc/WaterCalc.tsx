import { RichText } from '../components/RichText';
import { useSettings } from '../settings';
import { useFamily } from './family';
import { fill, fmt } from './format';
import { people, waterNeed } from './math';
import { GAL_TO_L } from './rules';
import { CalcBox, ResultRow, RuleLine, SpanPicker } from './ui';

export function WaterCalc() {
  const { t, locale } = useSettings();
  const { family } = useFamily();
  const w = waterNeed(family);
  const gal = Math.ceil(w.totalGal - 1e-9);
  return (
    <CalcBox title={t.calc.waterTitle} inputs={<SpanPicker />}>
      <ResultRow
        label={t.calc.waterTotal}
        value={fill(t.calc.gallons, { n: fmt(gal, locale) })}
        detail={fill(t.calc.liters, { n: fmt(gal * GAL_TO_L, locale) })}
      />
      <ResultRow label={t.calc.waterJugs} value={fmt(w.jugs5, locale)} />
      <ResultRow label={t.calc.waterDrums} value={fmt(w.drums55, locale)} />
      {family.pets.length > 0 && (
        <ResultRow label={t.calc.waterPets} value={fill(t.calc.gallons, { n: fmt(w.petGal, locale, 1) })} />
      )}
      <RuleLine>
        {fill(t.calc.waterRule, { people: fmt(people(family), locale), days: fmt(family.days, locale) })}
        {family.hot && t.calc.waterRuleHot}
        {family.pets.length > 0 && <> {t.calc.waterPetsRule}</>}
      </RuleLine>
      <p className="calc-note">
        <RichText text={t.calc.waterNote} />
      </p>
    </CalcBox>
  );
}
