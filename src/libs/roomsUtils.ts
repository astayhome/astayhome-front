import chooseTextVariant from '@/hooks/chooseTextVariant';

type Translate = {
  moreThen5: string;
  between2and4: string;
  one: string;
};

const translate: Record<string, Translate> = {
  en: {
    one: 'bedroom',
    between2and4: 'bedrooms',
    moreThen5: 'bedrooms',
  },
  ru: {
    one: 'спальня',
    between2and4: 'спальни',
    moreThen5: 'спален',
  },
};

export const formatRooms = (
  rooms: number | null | undefined,
  locale: string,
) => {
  let translateVariant = translate.en;

  if (translate[locale]) {
    translateVariant = translate[locale];
  }

  if (!rooms) return 0;
  return chooseTextVariant({ number: rooms, ...translateVariant });
};
