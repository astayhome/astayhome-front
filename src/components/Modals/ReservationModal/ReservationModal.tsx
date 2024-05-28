/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable consistent-return */

'use client';

import { useTranslations } from 'next-intl';
import { useCallback, useState } from 'react';

import { ReservationActionTypes } from '@/context/actionTypes';
import type { IInitialReservationState } from '@/context/Reservation/ruducerReservation';
import { useReservationContext } from '@/hooks/useReservationContext';
import sendBooking from '@/libs/actions/sendBooking/sendBooking';

import Modal from '../Modal';
import Contact from './windows/Contact';
import TransferFrom from './windows/TransferFrom';
import TransferTo from './windows/TransferTo';

interface ReservationModalProps {
  isOpenModal: boolean;
  setIsOpenModal: (prev: boolean) => void;
  actionOnSubmit?: () => void;
  apartmentId?: string | number;
}

enum STEPS {
  CONTACT = 0,
  FROM = 1,
  TO = 2,
  Answer = 3,
}

export default function ReservationModal({
  isOpenModal,
  apartmentId,
  setIsOpenModal,
  actionOnSubmit,
}: ReservationModalProps) {
  const t = useTranslations('ReservationModal');
  const [step, setStep] = useState(STEPS.CONTACT);
  const { dispatch } = useReservationContext()!;
  let timerId: ReturnType<typeof setTimeout>;

  const TITLES = [
    t('Fill contacts'),
    t('Taxi from airport'),
    t('Taxi to airport'),
    '',
  ];
  const title = TITLES[step];

  const onClose = () => {
    if (step === STEPS.Answer) {
      dispatch({
        type: ReservationActionTypes.RESET_DATES,
        payload: null,
      });

      localStorage.removeItem(process.env.NEXT_PUBLIC_LOCALESTOR_SEARCH);
    }

    setIsOpenModal(false);
    setStep(STEPS.CONTACT);
    clearTimeout(timerId);
    actionOnSubmit();
  };

  const onBack = useCallback(() => {
    setStep((value) => value - 1);
  }, []);

  const onNext = useCallback(() => {
    setTimeout(() => {
      setStep((value) => value + 1);
    }, 200);
  }, []);

  const onSubmit = async (data: IInitialReservationState) => {
    const format = await import('date-fns/format').then((mod) => mod.default);

    const newData = {
      ...data,
      checkIn: format(data.checkIn, 'yyyy-MM-dd'),
      checkOut: format(data.checkOut, 'yyyy-MM-dd'),
      apartmentId,
    };
    await sendBooking(newData);
    setStep(STEPS.Answer);
  };

  let bodyContent = <Contact onSubmitHandler={onSubmit} onNext={onNext} />;

  if (step === STEPS.FROM) {
    bodyContent = <TransferFrom onBack={onBack} onNext={onNext} />;
  }

  if (step === STEPS.TO) {
    bodyContent = <TransferTo onBack={onBack} onSubmitHandler={onSubmit} />;
  }

  if (step === STEPS.Answer) {
    bodyContent = (
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
          <p className="m-0 text-center text-lg">
            {t('We received your purchase request')}
            <span className="block">{t("we'll be in touch shortly!")}</span>
          </p>
        </div>
      </div>
    );

    timerId = setTimeout(() => {
      dispatch({
        type: ReservationActionTypes.RESET_DATES,
        payload: null,
      });

      localStorage.removeItem(process.env.NEXT_PUBLIC_LOCALESTOR_SEARCH);

      setIsOpenModal(false);
      setStep(STEPS.CONTACT);
      actionOnSubmit();
    }, 4000);
  }

  return (
    <Modal
      isOpen={isOpenModal}
      title={title}
      hideFooter
      actionLabel="actionLabel"
      onSubmit={() => {}}
      onClose={onClose}
      body={bodyContent}
    />
  );
}
