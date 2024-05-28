'use client';

import { type ReactNode, useState } from 'react';

import { ReviewsModal } from '../../Modals/ReviewsModal';

interface ShowReviewButtonProps {
  className?: string;
  children?: ReactNode;
  initialReviews: Review[];
  count: number;
  title?: string;
  apartmentId?: number;
  translate: {
    'Modal Title': string;
    Positive: string;
    Negative: string;
  };
}

export default function ShowReviewButton(props: ShowReviewButtonProps) {
  const {
    className = '',
    apartmentId,
    initialReviews,
    count = 0,
    title,
    translate,
    ...otherProps
  } = props;

  const [isOpenModal, setIsOpenModal] = useState(false);

  const onClick = () => {
    setTimeout(() => {
      setIsOpenModal(true);
    }, 150);
  };

  return (
    <div className={`${className}`}>
      <button
        type="button"
        onClick={onClick}
        className={`${className} h-14 w-72 rounded-lg border border-textPrim px-4 py-2 font-semibold transition-transform duration-150 active:scale-90`}
      >
        {title}
      </button>
      <ReviewsModal
        apartmentId={apartmentId}
        count={count}
        initialReviews={initialReviews}
        isOpen={isOpenModal}
        onClose={() => setIsOpenModal(false)}
        {...otherProps}
        translate={translate}
      />
    </div>
  );
}
