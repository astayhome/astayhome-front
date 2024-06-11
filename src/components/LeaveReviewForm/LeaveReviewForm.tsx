'use client';

import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import sendReview from '@/libs/actions/sendReview/sendReview';
import { useRouter } from '@/libs/i18nNavigation';

import Modal from '../Modals/Modal';
import ButtonSubmit from '../UI/ButtonSubmit';
import Rating from '../UI/Rating';
/* eslint-disable jsx-a11y/label-has-associated-control */
interface LeaveReviewFormProps {
  className?: string;
  tokenReview: string;
}

type ReviewForm = {
  textarea: string;
};

export default function LeaveReviewForm(props: LeaveReviewFormProps) {
  const { className = '', tokenReview, ...otherProps } = props;
  const [rating, setRating] = useState(0);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [showError, setShowError] = useState(false);
  const router = useRouter();
  const t = useTranslations('LeaveReview');
  const tSubmit = useTranslations('ButtonSubmit');
  const {
    register,
    handleSubmit,
    formState: { isLoading },
  } = useForm<ReviewForm>();

  let timerId: ReturnType<typeof setTimeout>;

  const onClose = () => {
    clearTimeout(timerId);
    router.replace('/');
  };

  const onSubmit = async (data: ReviewForm) => {
    if (rating <= 0) {
      setShowError(true);
      return;
    }

    await sendReview({
      tokenReview,
      review: data.textarea,
      reiting_score: rating,
    });

    setIsOpenModal(true);
    timerId = setTimeout(() => {
      router.replace('/');
    }, 2000);
  };

  useEffect(() => {
    if (rating > 0 && showError) {
      setShowError(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rating]);

  const answer = (
    <div className="flex h-full min-h-[300px] items-center justify-center">
      <div className="p-14">
        <div className="mx-auto my-0 flex size-52 items-center justify-center rounded-full bg-gray-light">
          <i className="ml-[-15px] text-[100px] leading-[200px] text-success">
            ✓
          </i>
        </div>
        <h1 className="mb-3 text-center text-5xl font-extrabold text-success">
          {t('Success')}
        </h1>
        <p className="m-0 text-center text-xl">
          {t('Thanks for submitted review')}
        </p>
      </div>
    </div>
  );

  return (
    <div className={`${className} feedback`} {...otherProps}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="feedback__form flex-[1_1_100%] rounded-xl border border-stroke bg-white shadow-lg"
      >
        <h1 className="feedback__question text-center  text-lg sm:text-xl">
          {t('Please share your impression of the apartment')}
        </h1>
        <h2 className="text-center font-bold">{t('Please rate apartment')}</h2>
        <div className="flex flex-col items-center justify-center">
          <Rating
            className={`${showError ? 'border-2 border-error' : ''} text-center text-4xl leading-none`}
            canSetRating
            setRatingOutside={setRating}
          />
          {showError && <p className="mt-1 text-error">{t('ErrorRating')}</p>}
        </div>

        <div className="feedback__textarea">
          <textarea
            className="rounded-lg placeholder:text-sm placeholder:text-placeholder placeholder:sm:text-base"
            name="textarea"
            id="textarea"
            rows={5}
            placeholder={t('Write your impression her')}
            {...register('textarea')}
          />
          <label htmlFor="textarea">{t('Notes')}</label>
        </div>

        <div className="flex justify-end">
          <ButtonSubmit
            loading={isLoading}
            type="submit"
            title={t('Submit review')}
            titleLoad={tSubmit('Loading')}
            titleError={tSubmit('Error')}
            titleSuccess={tSubmit('Success')}
            className="btn rounded-lg px-5 py-2 font-bold"
          />
        </div>
      </form>
      <Modal
        isOpen={isOpenModal}
        title={t('Modal Title')}
        hideFooter
        actionLabel="actionLabel"
        onSubmit={() => {}}
        onClose={onClose}
        body={answer}
      />
    </div>
  );
}
