'use client';

import { useLocale } from 'next-intl';
import { useCallback, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import {
  baseReviewQuery,
  NUMBER_OF_REVIEWS_TO_FETCH,
} from '@/libs/actions/getReviews/fetchConfig';
import { getReviews } from '@/libs/actions/getReviews/getReviews';

import ReviewItem from '../Reviews/ui/ReviewItem';
import ReviewItemSkeleton from '../Reviews/ui/ReviewItemSkeleton';
import IoMdClose from '../svg/ico/IoMdClose';

interface ReviewsModalProps {
  initialReviews: Review[];
  apartmentId?: number;
  count: number;
  className?: string;
  isOpen: boolean;
  disabled?: boolean;
  onClose: () => void;
  translate: {
    'Modal Title': string;
    Positive: string;
    Negative: string;
  };
}

const REVIEW_MODAL_SELECTOR_ID = 'review-modal-selector';

function ReviewsModal(props: ReviewsModalProps) {
  const {
    className = '',
    apartmentId,
    isOpen,
    initialReviews,
    count = 0,
    disabled,
    translate,
    onClose,
    ...otherProps
  } = props;

  const locale = useLocale();
  const [showModal, setShowModal] = useState(isOpen);
  const [showSkeleton, setShowSkeleton] = useState(
    count > NUMBER_OF_REVIEWS_TO_FETCH,
  );
  const [offset, setOffset] = useState(NUMBER_OF_REVIEWS_TO_FETCH);
  const [reviews, setReviews] = useState<Review[]>(initialReviews);
  const { ref, inView } = useInView();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }

    setShowModal(false);
    setTimeout(() => {
      onClose();
      document.body.style.overflow = '';
    }, 300);
  }, [onClose, disabled]);

  const loadMoreReviews = async () => {
    if (!showSkeleton) {
      return;
    }
    const query: GetFromServer<ReqReviewFields> = {
      ...baseReviewQuery,
      offset,
    };

    const data = await getReviews({
      baseReviewQuery: query,
      apartmentId,
    });

    const apiReviews = data || [];
    if (apiReviews.length <= 0 || !apiReviews) {
      setShowSkeleton(false);
    }

    setReviews([...reviews, ...apiReviews]);
    setOffset(offset + NUMBER_OF_REVIEWS_TO_FETCH);
  };

  useEffect(() => {
    if (inView && showSkeleton) {
      loadMoreReviews();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  if (!isOpen) return '';

  return (
    <div
      className={` ${className} inset-full fixed z-50 flex items-center justify-center bg-neutral-800/70 outline-none focus:outline-none`}
      {...otherProps}
    >
      <div
        className="
          relative 
          mx-auto
          size-full
          md:my-6
          md:h-auto
          md:w-5/6
          "
      >
        {/* content */}
        <div
          id={REVIEW_MODAL_SELECTOR_ID}
          className={`
            h-full
            transition-all
            duration-300
            ${showModal ? 'translate-y-0' : 'translate-y-full'}
            ${showModal ? 'opacity-100' : 'opacity-0'}
          `}
        >
          <div
            className="
            relative
              flex
              size-full
              flex-col
              gap-2
              rounded-lg
              border-0 
              bg-white 
              shadow-lg 
              outline-none 
              transition-all 
              focus:outline-none 
              md:h-[95vh]
            "
          >
            {/* header */}
            <div
              className="
                sticky
                top-0 
                flex 
                items-center
                justify-center
                rounded-t
                border-b
                p-4
                sm:p-6
                "
            >
              <button
                type="button"
                aria-label="Close Modal"
                className="
                    absolute
                    left-9 
                    border-0
                    p-1
                    transition
                    hover:opacity-70
                  "
                onClick={handleClose}
              >
                <IoMdClose size={18} />
              </button>
              <div className="text-lg font-semibold">
                {translate['Modal Title']}
              </div>
            </div>
            {/* body */}
            <div className="relative flex-auto overflow-auto px-3 md:p-6">
              <ul className=" flex flex-col">
                {reviews.map((review, i) => {
                  return (
                    <ReviewItem
                      className={`${i === 0 ? 'mt-3' : 'mt-10'}`}
                      key={`${review.id}review-modal`}
                      data={review}
                      lineClamp={false}
                      detail
                      locale={locale}
                      translate={translate}
                    />
                  );
                })}
                {showSkeleton && (
                  <>
                    <ReviewItemSkeleton ref={ref} />
                    <ReviewItemSkeleton />
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { ReviewsModal };
