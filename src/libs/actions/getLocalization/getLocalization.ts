'use server';

import { getTranslations } from 'next-intl/server';

export interface HeaderTranslation {
  Pattaya: string;
  Location: string;
  add_dates: string;
  add_dates_small_search: string;
  add_guests: string;
  value: string;
  where_going: string;
  Guests: string;
  Check_in: string;
  Check_out: string;
  start_search: string;
  Apartments: string;
  Transfers: string;
  'For Owners': string;
  'For Owners mobile': string;
  All_Complexes: string;
  Complexes: string;
  About_us: string;
  How_many_guests: string;
  Rooms: string;
  How_many_rooms: string;
  Search: string;
  langs: Langs;
  Filters: string;
  "When's your trip?": string;
  'Feel free to chose best dates!': string;
  Clear: string;
  Next: string;
  Back: string;
  'More information': string;
  'Find your perfect place!': string;
}

export type Langs = Record<string, string>;

export default async function getLocalization(locale: string) {
  const promiseT = getTranslations({ locale, namespace: 'Header' });
  const promiseL = getTranslations({ locale, namespace: 'Locale' });

  /* ------------------- Start two promise in the same time ------------------- */
  const [t, l] = await Promise.all([promiseT, promiseL]);

  const translate: HeaderTranslation = {
    Pattaya: t('Pattaya'),
    Location: t('Location'),
    add_dates: t('add_dates'),
    add_dates_small_search: t('add_dates_small_search'),
    add_guests: t('add_guests'),
    value: t('value'),
    where_going: t('where_going'),
    Guests: t('Guests'),
    Check_in: t('Check_in'),
    Check_out: t('Check_out'),
    start_search: t('start_search'),
    Apartments: t('Apartments'),
    Transfers: t('Transfers'),
    'For Owners': t('For Owners'),
    'For Owners mobile': t('For Owners mobile'),
    All_Complexes: t('All_Complexes'),
    About_us: t('About_us'),
    How_many_guests: t('How_many_guests'),
    Rooms: t('Rooms'),
    How_many_rooms: t('How_many_rooms'),
    Complexes: t('Complexes'),
    Search: t('Search'),
    langs: {
      en: l('en'),
      ru: l('ru'),
    },
    Filters: t('Filters'),
    "When's your trip?": t("When's your trip?"),
    'Feel free to chose best dates!': t('Feel free to chose best dates!'),
    Clear: t('Clear'),
    Next: t('Next'),
    Back: t('Back'),
    'More information': t('More information'),
    'Find your perfect place!': t('Find your perfect place!'),
  };
  return translate;
}
