import { TopBar } from '../components/TopBar';
import { LOCALES } from '../i18n/locales';
import { useSettings, type TextSize, type Theme } from '../settings';

export function Settings({ onShowDisclaimer }: { onShowDisclaimer: () => void }) {
  const s = useSettings();
  const { t } = s;

  const sizes: [TextSize, string][] = [
    ['normal', t.textSizeNormal],
    ['large', t.textSizeLarge],
    ['xlarge', t.textSizeXLarge],
  ];
  const themes: [Theme, string][] = [
    ['auto', t.themeAuto],
    ['light', t.themeLight],
    ['dark', t.themeDark],
  ];

  return (
    <>
      <TopBar title={t.settingsTitle} showBack={false} />
      <main className="page">
        <fieldset className="field">
          <legend>{t.settingsTextSize}</legend>
          {sizes.map(([v, label]) => (
            <label key={v} className="choice">
              <input type="radio" name="size" checked={s.textSize === v} onChange={() => s.set({ textSize: v })} />
              <span>{label}</span>
            </label>
          ))}
        </fieldset>

        <fieldset className="field">
          <legend>{t.settingsTheme}</legend>
          {themes.map(([v, label]) => (
            <label key={v} className="choice">
              <input type="radio" name="theme" checked={s.theme === v} onChange={() => s.set({ theme: v })} />
              <span>{label}</span>
            </label>
          ))}
        </fieldset>

        <fieldset className="field">
          <legend>{t.settingsLanguage}</legend>
          {LOCALES.map((l) => {
            const ready = !!l.strings;
            return (
              <label key={l.code} className={'choice' + (ready ? '' : ' is-disabled')}>
                <input
                  type="radio"
                  name="lang"
                  disabled={!ready}
                  checked={s.locale === l.code}
                  onChange={() => s.set({ locale: l.code })}
                />
                <span lang={l.code} dir={l.dir}>{l.nativeName}</span>
                {l.status === 'planned' && <span className="tag">{t.settingsLanguageSoon}</span>}
                {l.status === 'machine' && <span className="tag">{t.settingsLanguageMachine}</span>}
              </label>
            );
          })}
          <label className="choice choice-top">
            <input type="checkbox" checked={s.rtlTest} onChange={(e) => s.set({ rtlTest: e.target.checked })} />
            <span>
              {t.settingsRtlTest}
              <small className="muted">{t.settingsRtlTestHelp}</small>
            </span>
          </label>
        </fieldset>

        <section className="field">
          <h2>{t.settingsPrivacy}</h2>
          <p>{t.settingsPrivacyText}</p>
        </section>

        <button type="button" className="btn btn-block" onClick={onShowDisclaimer}>
          {t.settingsShowDisclaimer}
        </button>
        <p className="home-footer">{t.aboutBy}</p>
      </main>
    </>
  );
}
