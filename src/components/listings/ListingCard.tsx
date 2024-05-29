/* eslint-disable react/no-danger */

'use client';

import Image from 'next/image';
import { useLocale } from 'next-intl';
import { Suspense, useEffect, useState } from 'react';
import sanitizeHtml from 'sanitize-html';

import getTranslation from '@/hooks/getTranslations';
import { NUMBER_OF_LISTINGS_TO_FETCH } from '@/libs/actions/getApartments/fetchConfig';
import { getApartments } from '@/libs/actions/getApartments/getApartments';
import getFormattedPrice from '@/libs/getFormattedPrice';
import { Link } from '@/libs/i18nNavigation';
import { formatRooms } from '@/libs/roomsUtils';
import openGraph from '@/public/open-graph/astaya.jpg';
import { defBlur } from '@/utils/defBlurImg';

import { RatingStar } from '../svg';
import ButtonSubmit from '../UI/ButtonSubmit';
import Tag from '../UI/Tag';
import type { ListingTranslate } from './ListingSection';
import Skeleton from './skeleton/Skeleton';

interface ListingCardsProps {
  initListing: ApartmentCardsData[];
  searchParams: PageSearchParams;
  count: number;
  translate?: ListingTranslate;
}

interface CardItemProps {
  className?: string;
  data: ApartmentCardsData;
  isAvailable?: boolean;
  imagePreload?: boolean;
  blur?: boolean;
  translate?: ListingTranslate;
}

function CardItem(props: CardItemProps) {
  const {
    className = '',
    data,
    blur = false,
    imagePreload = false,
    translate,
    ...otherProps
  } = props;

  const locale = useLocale();

  const {
    images = [],
    roomCategory,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    review_scores_rating = 0,
    isPromotion,
    price = 0,
    bedrooms = 0,
    translations,
  } = data;

  const discount = data.discount > 0 ? 1 - data.discount / 100 : false;
  const discountedPrice = discount ? Math.round(price * discount) : price;

  const { name, description } = getTranslation(translations, locale);
  const { category } = getTranslation(roomCategory?.translations, locale);

  return (
    <div
      className={`${className} ${blur ? 'blur-[5px]' : ''}  flex w-full flex-col gap-1 text-sm`}
      {...otherProps}
    >
      <div className="relative aspect-square w-full">
        {imagePreload ? (
          <Image
            className="relative z-20 size-full rounded-xl"
            width={650}
            height={650}
            src={images[0]?.sizes?.s650 || openGraph}
            placeholder="blur"
            blurDataURL={defBlur}
            priority
            alt={name}
          />
        ) : (
          <Image
            className="relative z-20 size-full rounded-xl"
            width={650}
            height={650}
            src={images[0]?.sizes?.s650 || openGraph}
            placeholder="blur"
            blurDataURL={defBlur}
            loading="lazy"
            alt={name}
          />
        )}
        {isPromotion && (
          <Tag
            title={translate.Promo}
            className="absolute left-2 top-2 z-20 rounded-lg bg-gold px-5 py-2 font-bold text-white"
          />
        )}
      </div>
      <div className="flex items-center justify-between">
        <h2 className="line-clamp-1 text-lg font-semibold">
          <span className="capitalize">{category}</span> {translate.apartment}{' '}
          {translate.in} {translate.Pattaya}
        </h2>
        {review_scores_rating && (
          <div className="flex flex-nowrap items-center justify-center gap-1 pr-2 text-lg">
            <RatingStar />
            <span>{review_scores_rating}</span>
          </div>
        )}
      </div>
      <div>
        <div
          className="line-clamp-2"
          dangerouslySetInnerHTML={{ __html: sanitizeHtml(description) }}
        />
        <div className="flex items-center gap-1" />
        <div className="flex flex-nowrap items-baseline text-textPrim">
          {price && (
            <>
              {typeof discount === 'number' && discount > 0 && (
                <>
                  <span
                    className={`${discount ? 'text-accent' : ''} text-lg font-semibold`}
                  >
                    {getFormattedPrice(discountedPrice)}
                  </span>
                  <span className="ml-1 font-normal">{translate.night}</span>
                </>
              )}
              <span
                className={`${discount ? 'hidden' : 'text-lg font-semibold'}`}
              >
                {getFormattedPrice(price)}
              </span>
              {!discount && (
                <span className="ml-1 font-normal">{translate.night}</span>
              )}
            </>
          )}
          <div className="ml-auto font-semibold">
            {bedrooms}{' '}
            <span className="font-normal">{formatRooms(bedrooms, locale)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ListingCards({
  initListing = [],
  count = 0,
  searchParams,
  translate,
}: ListingCardsProps) {
  const [listing, setListing] = useState(initListing);
  const [hideBtn, setHideBtn] = useState(count <= 0);
  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(NUMBER_OF_LISTINGS_TO_FETCH);

  useEffect(() => {
    setListing(initListing);
    setOffset(NUMBER_OF_LISTINGS_TO_FETCH);
    setLoading(count <= 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initListing]);

  const onClick = async () => {
    if (hideBtn) {
      return;
    }
    setLoading(true);
    const apiListing = await getApartments({ searchParams, offset });

    if (!apiListing || !apiListing.apartments) {
      setHideBtn(true);
      return;
    }
    if (
      apiListing?.count < NUMBER_OF_LISTINGS_TO_FETCH ||
      apiListing.apartments.length < NUMBER_OF_LISTINGS_TO_FETCH
    ) {
      setHideBtn(true);
    }

    setTimeout(() => {
      setListing([
        ...listing,
        ...apiListing.apartments.filter((el: any) => el.isVisible),
      ]);
      setOffset(offset + NUMBER_OF_LISTINGS_TO_FETCH);
      setLoading(false);
    }, 300);
  };

  return (
    <section>
      <div
        className="
      grid
      grid-cols-1
      gap-8
      pt-8
      sm:grid-cols-2
      md:grid-cols-3
      lg:grid-cols-4
      2xl:grid-cols-5"
      >
        <Suspense fallback={<Skeleton />}>
          {listing.map((data, i) => {
            if (data.isAvailable) {
              return (
                <div key={data.id} className="relative">
                  <Link
                    prefetch={false}
                    href={{
                      pathname: '/apartment/[apartmentId]',
                      params: { apartmentId: data.id },
                    }}
                    className="group col-span-1 cursor-pointer"
                  >
                    <CardItem
                      translate={translate}
                      data={data}
                      imagePreload={i <= 5}
                    />
                  </Link>
                </div>
              );
            }
            return (
              <div key={data.id} className="relative">
                <div className="group col-span-1 cursor-pointer">
                  <CardItem translate={translate} blur data={data} />
                </div>
                <div className="absolute -inset-1 z-30 flex items-center justify-center rounded-xl bg-grayPrim opacity-80" />
                <div className="absolute left-1/2 top-1/2 z-30 w-full -translate-x-1/2 -translate-y-1/2 text-center text-xl font-bold text-white lg:text-2xl">
                  {translate['This room no available']}
                </div>
              </div>
            );
          })}
        </Suspense>
      </div>
      {!hideBtn && (
        <ButtonSubmit
          loading={loading}
          type="button"
          title={translate['Load more']}
          titleError={translate.Error}
          titleSuccess={translate.Success}
          titleLoad={translate.Loading}
          onClick={onClick}
          className="mx-auto mt-10 block w-56 rounded-xl py-3"
        />
      )}
    </section>
  );
}
