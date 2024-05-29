import { getTranslations } from 'next-intl/server';

import { getApartments } from '@/libs/actions/getApartments/getApartments';

import EmptyState from '../EmptyState';
import ListingCards from './ListingCard';

interface ListingSectionProps {
  searchParams: PageSearchParams;
  locale?: string;
}

export type ListingTranslate = {
  Lux: string;
  Pattaya: string;
  'Description not found': string;
  apartment: string;
  in: string;
  night: string;
  rooms: string;
  'This room no available': string;
  'Load more': string;
  Promo: string;
  Loading: string;
  Error: string;
  Success: string;
};

async function ListingSection({ searchParams, locale }: ListingSectionProps) {
  const promiseInitListing = getApartments({ searchParams });
  const promiseT = getTranslations({ locale, namespace: 'ListingCards' });
  const promiseTSubmit = getTranslations({ locale, namespace: 'ButtonSubmit' });
  const [initListing, t, tSubmit] = await Promise.all([
    promiseInitListing,
    promiseT,
    promiseTSubmit,
  ]);

  if (!initListing?.apartments) {
    return null;
  }

  const translate: ListingTranslate = {
    Lux: t('Lux'),
    'Description not found': t('Description not found'),
    Pattaya: t('Pattaya'),
    'Load more': t('Load more'),
    apartment: t('apartment'),
    in: t('in'),
    night: t('night'),
    rooms: t('rooms'),
    'This room no available': t('This room no available'),
    Promo: t('Promo'),
    Loading: t('Loading'),
    Error: tSubmit('Error'),
    Success: tSubmit('Success'),
  };

  const array = initListing.apartments.filter((el) => el.isVisible);

  if (initListing.apartments.length <= 0) {
    return <EmptyState showReset />;
  }
  return (
    <ListingCards
      initListing={array}
      count={initListing.count}
      searchParams={searchParams}
      translate={translate}
    />
  );
}

export default ListingSection;
