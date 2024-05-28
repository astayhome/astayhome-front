import { format } from 'date-fns';
import { enUS, ru } from 'date-fns/locale';

export const formatCheckDate = (date: any, locale = 'en', dateFormat?: any) => {
  if (!date) {
    return '';
  }

  let lang = enUS;
  let formatDate = 'MMM d';

  if (locale === 'ru') {
    lang = ru;
    formatDate = 'd MMM';
  }

  return format(date, dateFormat || formatDate, { locale: lang });
};

export const formatRangeDate = (
  startDate: any,
  endDate: any,
  locale: string,
) => {
  if (!startDate || !endDate) {
    return false;
  }

  let template = `${formatCheckDate(startDate, locale)} - ${formatCheckDate(endDate, locale)}`;
  if (
    formatCheckDate(startDate, locale, 'd m y') ===
    formatCheckDate(endDate, locale, 'd m y')
  ) {
    template = `${formatCheckDate(startDate, locale)} - ${
      parseInt(formatCheckDate(endDate, locale, 'd'), 10) + 1
    }`;
  }

  if (
    formatCheckDate(startDate, locale, 'y') !==
    formatCheckDate(endDate, locale, 'y')
  ) {
    template = `${formatCheckDate(startDate, locale, 'MMM d, y')} - ${formatCheckDate(
      endDate,
      locale,
      'MMM d, y',
    )}`;
  }
  return template;
};
