import en, { type Strings } from './en';

export type Dir = 'ltr' | 'rtl';

// status:
//   complete - written and reviewed by a native speaker
//   machine  - machine translated, labeled "native speaker review wanted"
//   planned  - not translated yet
export interface Locale {
  code: string;
  nativeName: string;
  englishName: string;
  dir: Dir;
  status: 'complete' | 'machine' | 'planned';
  strings?: Strings;
}

export const LOCALES: Locale[] = [
  { code: 'en', nativeName: 'English', englishName: 'English', dir: 'ltr', status: 'complete', strings: en },
  { code: 'es', nativeName: 'Español', englishName: 'Spanish', dir: 'ltr', status: 'planned' },
  { code: 'zh', nativeName: '中文', englishName: 'Mandarin', dir: 'ltr', status: 'planned' },
  { code: 'hi', nativeName: 'हिन्दी', englishName: 'Hindi', dir: 'ltr', status: 'planned' },
  { code: 'ar', nativeName: 'العربية', englishName: 'Arabic', dir: 'rtl', status: 'planned' },
  { code: 'fr', nativeName: 'Français', englishName: 'French', dir: 'ltr', status: 'planned' },
  { code: 'bn', nativeName: 'বাংলা', englishName: 'Bengali', dir: 'ltr', status: 'planned' },
  { code: 'pt', nativeName: 'Português', englishName: 'Portuguese', dir: 'ltr', status: 'planned' },
  { code: 'ru', nativeName: 'Русский', englishName: 'Russian', dir: 'ltr', status: 'planned' },
  { code: 'ur', nativeName: 'اردو', englishName: 'Urdu', dir: 'rtl', status: 'planned' },
  { code: 'id', nativeName: 'Bahasa Indonesia', englishName: 'Indonesian', dir: 'ltr', status: 'planned' },
];

export function getLocale(code: string): Locale {
  return LOCALES.find((l) => l.code === code && l.strings) ?? LOCALES[0];
}
