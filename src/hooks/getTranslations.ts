import { defTranslate } from '@/utils/defaultTranslate';

export default function getTranslation(
  data: DefaultTranslate,
  locale: string,
): TranslationsFromServer {
  if (data && data[locale]) {
    return data[locale];
  }

  if (locale === 'ru') return defTranslate[locale];
  return defTranslate.en;
}
