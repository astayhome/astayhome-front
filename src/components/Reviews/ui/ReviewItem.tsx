/* eslint-disable @typescript-eslint/naming-convention */
import { format } from 'date-fns';
import { enUS, ru } from 'date-fns/locale';
import Image from 'next/image';
import type { FC } from 'react';

import { Dot, RatingStar } from '@/components/svg';
import user from '@/public/assets/images/user.webp';

interface ReviewItemProps {
  className?: string;
  data: Review;
  lineClamp?: boolean;
  detail?: boolean;
  locale?: string;
  translate?: {
    'Modal Title'?: string;
    Positive: string;
    Negative: string;
  };
}

const ReviewItem: FC<ReviewItemProps> = (props) => {
  const {
    className = '',
    data,
    lineClamp = false,
    locale = 'en',
    detail = false,
    translate = {
      Positive: 'Positive',
      Negative: 'Negative',
    },
    ...otherProps
  } = props;

  const {
    avatar = undefined,
    review,
    reviewDate,
    name,
    reiting_score,
    negative_review,
    positive_review,
  } = data;

  let text: JSX.Element | string = review;

  if (positive_review || negative_review) {
    text = (
      <>
        {positive_review && (
          <div className="mt-3">
            <div className="font-semibold">{translate.Positive}</div>
            <p>{positive_review}</p>
          </div>
        )}
        {negative_review && (
          <div className="mt-3">
            <div className="font-semibold">{translate.Negative}</div>
            <p>{negative_review}</p>
          </div>
        )}
      </>
    );
  }

  return (
    <li className={`${className} text-sm`} {...otherProps}>
      <div className="mb-2 flex items-center justify-start gap-4">
        <Image
          className="rounded-full"
          width={60}
          height={60}
          loading="lazy"
          alt="user"
          src={avatar === 'NULL' || !avatar ? user : avatar}
        />
        <div>
          <h3 className="mb-1 font-semibold">{name}</h3>
          <div className="flex items-center gap-1">
            <div className="flex items-center gap-1">
              <RatingStar width={14} height={14} />
              <b>{reiting_score}</b>
            </div>
            <Dot width={4} height={4} />
            <time dateTime={reviewDate} className="capitalize">
              {format(new Date(reviewDate), 'MMMM-yyyy', {
                locale: locale === 'en' ? enUS : ru,
              })}
            </time>
          </div>
        </div>
      </div>
      <div className={lineClamp ? 'line-clamp-3' : ''}>
        {detail ? text : review}
      </div>
    </li>
  );
};

export default ReviewItem;
