import { useTranslations } from 'next-intl';

import chooseTextVariant from '@/hooks/chooseTextVariant';

import { Dot, RatingStar } from '../svg';
import ShareButton from './ShareButton';

interface TitleProps {
  className?: string;
  countReviews?: { count: number; average: number };
  showRating?: boolean;
  title: string;
  city?: string;
  country?: string;
}

export default function Title(props: TitleProps) {
  const t = useTranslations('Title');
  const tReviews = useTranslations('VariantReviews');
  const {
    className = '',
    countReviews = { count: 0, average: 0 },
    showRating = true,
    title = '',
    city = t('Pattaya'),
    country = t('Thailand'),
    ...otherProps
  } = props;

  const { average, count } = countReviews;

  const textReview = chooseTextVariant({
    number: count,
    one: tReviews('review'),
    between2and4: tReviews('reviews'),
    moreThen5: tReviews('zeroReviews'),
  });

  return (
    <section className={`${className}`} {...otherProps}>
      <h1 className="text-xl first-letter:uppercase lg:text-3xl">{title}</h1>
      <div className="mt-3 hidden items-center justify-between  sm:flex sm:text-sm md:text-base">
        <div className="flex items-center gap-2">
          {showRating && (
            <>
              {count > 0 && (
                <>
                  <div className="flex items-center justify-center gap-1">
                    <RatingStar width={15} height={15} />
                    <span itemProp="ratingValue">{average}</span>
                  </div>
                  <Dot className="size-1" />
                </>
              )}
              <div className="flex items-center justify-center gap-2">
                <span>
                  {count} {textReview}
                </span>
              </div>
              <Dot className="size-1" />
            </>
          )}
          <div className="flex items-center justify-center gap-2">
            <span>
              {city}, {country}
            </span>
          </div>
        </div>
        <ShareButton labelBtn={t('Share')} sharedText={`${title}`} />
      </div>
    </section>
  );
}
