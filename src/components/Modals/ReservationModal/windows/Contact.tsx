'use client';

import { useLocale, useTranslations } from 'next-intl';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import Heading from '@/components/Heading';
import ButtonSubmit from '@/components/UI/ButtonSubmit';
import Switcher from '@/components/UI/Switcher/Switcher';
import { ReservationActionTypes } from '@/context/actionTypes';
import type { IInitialReservationState } from '@/context/Reservation/ruducerReservation';
import { useReservationContext } from '@/hooks/useReservationContext';

interface ContactProps {
  className?: string;
  onSubmitHandler?: (data: IInitialReservationState) => void;
  onNext?: () => void;
}

export type ContactFormType = {
  name: string;
  email: string;
  phoneNumber: string;
};

export default function Contact(props: ContactProps) {
  const {
    className = '',
    onSubmitHandler,
    onNext = () => {},
    ...otherProps
  } = props;

  const locale = useLocale();
  const t = useTranslations('ContactUs');
  const tSubmit = useTranslations('ButtonSubmit');
  const [transfer, setTransfer] = useState(true);
  const { booking, dispatch } = useReservationContext()!;
  const { isAvailableApart, email = '', name = '', phoneNumber = '' } = booking;

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, touchedFields },
  } = useForm<ContactFormType>({
    defaultValues: {
      email,
      name,
      phoneNumber,
    },
  });

  const isCanSend = isValid || Object.keys(touchedFields).length <= 0;

  // eslint-disable-next-line @typescript-eslint/no-shadow
  const onSubmitForm = ({ email, name, phoneNumber }: ContactFormType) => {
    if (!transfer && onSubmitHandler) {
      onSubmitHandler({
        ...booking,
        locale,
        email,
        name,
        phoneNumber,
        transfer: null,
      });
      return;
    }
    dispatch({
      type: ReservationActionTypes.SET_CONTACT,
      payload: { locale, phoneNumber, email, name },
    });
    onNext();
  };

  return (
    <form
      name="reservationContacts"
      onSubmit={handleSubmit(onSubmitForm)}
      className={`${className} flex h-full flex-col justify-evenly gap-4`}
      {...otherProps}
    >
      <div className="flex flex-col items-center justify-center *:mt-4">
        <input
          className={`${errors.name ? 'invalid' : ''} h-11 w-full rounded-lg bg-gray-100 p-4 placeholder:text-placeholder`}
          enterKeyHint="next"
          type="text"
          name="name"
          id="name"
          placeholder={t('Name')}
          required
          aria-required="true"
          aria-invalid={!!errors.name}
          {...register('name', {
            required: true,
            min: {
              value: 2,
              message: t('ErrorName'),
            },
          })}
        />
        {errors?.name && <p className="text-error">{errors.name?.message}</p>}
        <input
          className={`${errors.email ? 'invalid' : ''} h-11 w-full rounded-lg bg-gray-100 p-4 placeholder:text-placeholder`}
          enterKeyHint="next"
          type="email"
          name="email"
          id="email"
          placeholder={t('Email')}
          required
          aria-required="true"
          aria-invalid={!!errors.email}
          {...register('email', {
            required: true,
            min: {
              value: 2,
              message: t('ErrorEmail'),
            },
          })}
        />
        {errors?.email && <p className="text-error">{errors.email?.message}</p>}
        <input
          className={`${errors.phoneNumber ? 'invalid' : ''} h-11 w-full rounded-lg bg-gray-100 p-4 placeholder:text-placeholder`}
          enterKeyHint="done"
          type="tel"
          name="phoneNumber"
          id="phoneNumber"
          placeholder={t('Phone Number')}
          aria-required="true"
          aria-invalid={!!errors.phoneNumber}
          required
          {...register('phoneNumber', {
            required: true,
            min: {
              value: 10,
              message: t('ErrorPhoneMin'),
            },
            pattern: {
              value: /^[+]?[0-9]{10,20}$/,
              message: t('ErrorPhone'),
            },
          })}
        />
        {errors?.phoneNumber?.message && (
          <p className="text-error">{errors.phoneNumber.message}</p>
        )}
        <Switcher
          className="mt-3"
          checked={transfer}
          onChange={() => setTransfer((prev) => !prev)}
        />
      </div>
      <Heading center title={t('Order now and get a discount!')} />
      <ButtonSubmit
        isCanSend={isCanSend}
        disabled={!isAvailableApart}
        className="mx-5 rounded-xl px-20 py-3 text-lg font-bold sm:px-24 sm:py-3 sm:text-xl"
        title={transfer ? t('Next') : t('Reserve')}
        titleLoad={tSubmit('Loading')}
        titleError={tSubmit('Error')}
        titleSuccess={tSubmit('Success')}
      />
    </form>
  );
}
