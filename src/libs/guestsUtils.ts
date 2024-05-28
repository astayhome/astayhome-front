import type { Guests } from '@/context/reducer';
import chooseTextVariant from '@/hooks/chooseTextVariant';

type Translate = {
  moreThen5: string;
  between2and4: string;
  one: string;
};

const translate: Record<string, Translate> = {
  en: {
    one: 'guest',
    between2and4: 'guests',
    moreThen5: 'guests',
  },
  ru: {
    one: 'гость',
    between2and4: 'гостя',
    moreThen5: 'гостей',
  },
};

export const formatGuests = (
  guestsObj: Guests | null | undefined,
  locale: string,
) => {
  let translateVariant = translate.en;

  if (translate[locale]) {
    translateVariant = translate[locale];
  }

  if (!guestsObj) return false;
  const { guests } = guestsObj;
  if (!guests) return 0;
  return `${guests} ${chooseTextVariant({ number: guests, ...translateVariant })}`;
};
