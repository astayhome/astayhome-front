/* eslint-disable tailwindcss/no-custom-classname */

import { getTranslations } from 'next-intl/server';
import { Suspense } from 'react';

import chooseTextVariant from '@/hooks/chooseTextVariant';
import { baseReviewQuery } from '@/libs/actions/getReviews/fetchConfig';
import {
  getCountReviews,
  getReviews,
} from '@/libs/actions/getReviews/getReviews';

import { Dot, RatingStar } from '../svg';
import ReviewItem from './ui/ReviewItem';
import ReviewItemSkeleton from './ui/ReviewItemSkeleton';
import ShowReviewButton from './ui/ShowReviewButton';

interface ReviewsProps {
  className?: string;
  searchParams?: PageSearchParams;
  apartmentId?: number;
  roomType?: string;
  locale?: string;
}

async function Reviews(props: ReviewsProps) {
  const {
    className = '',
    apartmentId,
    locale = 'en',
    roomType,
    ...otherProps
  } = props;

  const promiseT = getTranslations({ locale, namespace: 'Reviews' });
  const promiseTVariants = getTranslations({
    locale,
    namespace: 'VariantReviews',
  });
  const promiseCountReviews = getCountReviews({ apartmentId });
  const promiseReviews = getReviews({
    baseReviewQuery,
    apartmentId,
  });

  const [reviews, countReviews, t, tReviews] = await Promise.all([
    promiseReviews,
    promiseCountReviews,
    promiseT,
    promiseTVariants,
  ]);

  const count = countReviews?.count || 0;
  const average = countReviews?.average || 0;

  const textReview = chooseTextVariant({
    number: count,
    one: tReviews('review'),
    between2and4: tReviews('reviews'),
    moreThen5: tReviews('zeroReviews'),
  });

  const formattedBtnTitle =
    count > 7 ? `${t('Show all')} ${count} ${textReview}` : t('Show more');

  const modalTranslate = {
    'Modal Title': t('Modal Title'),
    Positive: t('Positive'),
    Negative: t('Negative'),
  };

  if (!reviews) {
    return '';
  }

  if (reviews.length <= 0) {
    reviews.push({
      avatar: '',
      complex_id: 0,
      listing_id: 0,
      id: 0,
      name: t('name'),
      review: t('defReviewText'),
      reviewDate: '1970-01-01',
      roomType: { [locale]: { type: roomType || t('roomType') } },
      reiting_score: 5,
      createdAt: '1970-01-01',
    });
  }

  return (
    <section
      className={`${className} reviewsSection border-grayPrim/80 my-10 pb-10 pt-5`}
      {...otherProps}
    >
      <div className=" flex items-center justify-start gap-2 text-lg font-medium leading-none md:text-xl">
        {count > 0 && (
          <>
            <h2 className="flex items-center justify-center gap-1">
              <RatingStar width={22} height={22} />
              <b className="font-medium">{average}</b>
            </h2>
            <Dot />
          </>
        )}
        <div className="flex items-center justify-center gap-2">
          <span>{count}</span>
          <span> {textReview}</span>
        </div>
      </div>
      <ul className="grid grid-cols-1 gap-x-20 md:grid-cols-2 xl:gap-x-40 2xl:gap-x-[250px]">
        {reviews.map((review) => {
          return (
            <Suspense key={review.id} fallback={<ReviewItemSkeleton />}>
              <ReviewItem
                locale={locale}
                lineClamp
                data={review}
                className="cols-span-1 mt-10"
              />
            </Suspense>
          );
        })}
        {count >= 1 && reviews.length >= 1 && (
          <li className="col-span-1 mt-10 flex w-full items-center">
            <ShowReviewButton
              className="mx-auto"
              apartmentId={apartmentId}
              count={count}
              initialReviews={reviews}
              title={formattedBtnTitle}
              translate={modalTranslate}
            />
          </li>
        )}
      </ul>
    </section>
  );
}

export default Reviews;
