/* eslint-disable no-restricted-globals */

'use client';

import format from 'date-fns/format';
import { useTranslations } from 'next-intl';
import { type KeyboardEvent, type MouseEvent, useState } from 'react';
import { useForm } from 'react-hook-form';

import {
  FlightTicket,
  Phone,
  Plane,
  Suitcase,
  User,
  UserCard,
} from '@/components/svg';
import Button from '@/components/UI/Button';
import ButtonSubmit from '@/components/UI/ButtonSubmit';
import { ReservationActionTypes } from '@/context/actionTypes';
import { useReservationContext } from '@/hooks/useReservationContext';

import CalendarModal from '../../CalendarModal/CalendarModal';

interface TransferFromProps {
  className?: string;
  onBack?: () => void;
  onNext?: () => void;
}

type TransferFromType = {
  date: string;
  flightNumber: string;
  nameOfSignage: string;
  guests: string;
  amountBags: string;
  phone: string;
};

export const formateDate = (date: string | Date) => {
  const validDate = new Date(date);
  if (!isNaN(validDate.getTime())) {
    return format(new Date(date), 'yyyy-MM-dd');
  }
  return format(validDate, 'yyyy-MM-dd');
};

export default function TransferFrom(props: TransferFromProps) {
  const {
    className = '',
    onBack = () => {},
    onNext = () => {},
    ...otherProps
  } = props;

  const t = useTranslations('TransferFrom');
  const tSubmit = useTranslations('ButtonSubmit');
  const now = new Date();
  const [isOpenCalendarModal, setIsOpenCalendarModal] = useState(false);
  const { booking, dispatch } = useReservationContext()!;
  const {
    checkIn = now,
    guests: { guests = 1 },
    phoneNumber = '',
    transfer: { from },
  } = booking;

  const {
    date = checkIn,
    flightNumber,
    nameOfSignage,
    guests: guestsFrom = guests,
    amountBags,
    phone = phoneNumber,
  } = from;

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isValid, touchedFields },
  } = useForm<TransferFromType>({
    defaultValues: {
      date: formateDate(date) || formateDate(checkIn),
      amountBags: amountBags && amountBags.toString(),
      phone: phone || phoneNumber,
      guests: guestsFrom.toString() || guests.toString(),
      flightNumber: flightNumber || undefined,
      nameOfSignage: nameOfSignage || undefined,
    },
  });

  const [calendarDate, setCalendarDate] = useState(
    formateDate(date) || formateDate(checkIn),
  );

  const isCanSend = isValid || Object.keys(touchedFields).length <= 0;

  const onSubmitForm = (data: TransferFromType) => {
    dispatch({
      type: ReservationActionTypes.TRANSFER_FROM,
      payload: {
        ...data,
        date: calendarDate,
        amountBags: Number(data.amountBags),
        guests: Number(data.guests),
      },
    });
    onNext();
  };

  const onChangeDate = (
    event:
      | MouseEvent<HTMLInputElement, globalThis.MouseEvent>
      | KeyboardEvent<HTMLInputElement>,
  ) => {
    event.preventDefault();
    setIsOpenCalendarModal((prev) => !prev);
    setValue('date', calendarDate);
  };

  return (
    <form
      name="reservation"
      onSubmit={handleSubmit(onSubmitForm)}
      className={`${className} flex h-full flex-col justify-evenly`}
      {...otherProps}
    >
      <CalendarModal
        isOpenModal={isOpenCalendarModal}
        setIsOpenModal={setIsOpenCalendarModal}
        setInputDate={setCalendarDate}
        currentDate={calendarDate}
      />
      <div className=" formFromAirport flex flex-col bg-white *:mt-5">
        <div className="formWrapper flex-wrap justify-between gap-x-5 *:mt-5 first:mt-0 sm:flex-none sm:justify-center">
          <label htmlFor="date" className="relative">
            <input
              className={`${errors.date ? 'invalid' : ''} inputFromForm`}
              required
              enterKeyHint="next"
              type="date"
              readOnly
              id="date"
              value={calendarDate}
              onChange={() => {}}
              onClick={(e) => onChangeDate(e)}
              onKeyDown={(e) => onChangeDate(e)}
              title={t('Plane arrival date')}
              aria-label={t('Plane arrival date')}
              aria-invalid={errors.date ? 'true' : 'false'}
              {...register('date', {
                required: true,
              })}
            />
            <Plane size={25} />
          </label>
          <div className="flex flex-auto gap-x-5 xl:flex-nowrap">
            <label htmlFor="flightNumber" className="relative flex-auto">
              <input
                required
                className={`${errors.flightNumber ? 'invalid' : ''} inputFromForm`}
                enterKeyHint="next"
                type="text"
                id="flightNumber"
                placeholder={t('Flight number')}
                aria-invalid={errors.flightNumber ? 'true' : 'false'}
                {...register('flightNumber', {
                  required: true,
                  min: {
                    value: 3,
                    message: t('Min 2 char and 1 number'),
                  },
                  maxLength: {
                    value: 7,
                    message: t('Max length = 6'),
                  },
                  pattern: {
                    value: /^[a-zA-Z]{2}\s?\d{1,4}$/i,
                    message: t('Example - AA 1234 or AA1234'),
                  },
                })}
              />
              <FlightTicket size={25} />
              {errors?.flightNumber?.message && (
                <p className="text-center text-error">
                  {errors.flightNumber.message}
                </p>
              )}
            </label>
            <label htmlFor="nameOfSignage" className="relative flex-auto">
              <input
                required
                className={`${errors.nameOfSignage ? 'invalid' : ''} inputFromForm`}
                enterKeyHint="next"
                type="text"
                id="nameOfSignage"
                placeholder={t('Name on Signage')}
                aria-invalid={errors.nameOfSignage ? 'true' : 'false'}
                {...register('nameOfSignage', {
                  required: true,
                  min: {
                    value: 2,
                    message: t('Min length = 2'),
                  },
                  maxLength: 80,
                })}
              />
              <UserCard size={25} />
              {errors?.nameOfSignage?.message && (
                <p className="text-center text-error">
                  {errors.nameOfSignage.message}
                </p>
              )}
            </label>
          </div>
        </div>
        <div className="formWrapper flex-wrap justify-between  gap-x-5 *:mt-5 sm:flex-none sm:justify-center">
          <div className="flex flex-auto gap-x-5 first:mt-0">
            <label htmlFor="guests" className="relative">
              <input
                required
                className={`${errors.guests ? 'invalid' : ''} inputFromForm`}
                type="number"
                inputMode="numeric"
                enterKeyHint="next"
                name="guests"
                id="guests"
                min={1}
                placeholder={t('How many guests')}
                aria-invalid={errors.guests ? 'true' : 'false'}
                {...register('guests', {
                  required: true,
                  min: {
                    value: 1,
                    message: t('Can be 1 or more'),
                  },
                  maxLength: 80,
                  pattern: {
                    value: /[0-9]+/i,
                    message: t('Use only numbers'),
                  },
                })}
              />
              <User size={25} />
              {errors?.guests?.message && (
                <p className="text-center text-error">
                  {errors.guests.message}
                </p>
              )}
            </label>
            <label htmlFor="amountBags" className="relative">
              <input
                className={`${errors.amountBags ? 'invalid' : ''} inputFromForm`}
                enterKeyHint="next"
                inputMode="numeric"
                type="number"
                id="amountBags"
                min={0}
                aria-invalid={errors.amountBags ? 'true' : 'false'}
                placeholder={t('How many bags')}
                {...register('amountBags', {
                  min: {
                    value: 0,
                    message: t('Must be positive'),
                  },
                  maxLength: 80,
                  pattern: {
                    value: /[0-9]+/i,
                    message: t('Use only numbers'),
                  },
                })}
              />
              <Suitcase size={25} />
              {errors?.amountBags?.message && (
                <p className="text-center text-error">
                  {errors.amountBags.message}
                </p>
              )}
            </label>
          </div>
          <label htmlFor="phone" className="relative sm:flex-auto 3xl:mt-0">
            <input
              required
              className={`${errors.phone ? 'invalid' : ''} inputFromForm`}
              enterKeyHint="send"
              type="tel"
              id="phone"
              autoComplete="tel"
              placeholder={t('Phone number')}
              aria-invalid={errors.phone ? 'true' : 'false'}
              {...register('phone', {
                required: true,
                minLength: {
                  value: 10,
                  message: t('Min length 10 numbers'),
                },
                pattern: {
                  value: /^[+]?[0-9]{10,20}$/,
                  message: t('Use only numbers'),
                },
              })}
            />
            <Phone className="absolute" size={25} />
            {errors?.phone?.message && (
              <p className="text-center text-error">{errors.phone.message}</p>
            )}
          </label>
        </div>
      </div>
      <div className="mt-10 flex w-full justify-center">
        <Button
          type="button"
          label={t('Back')}
          wFull={false}
          outline
          className="mr-5 w-1/2 rounded-l-xl text-lg font-bold sm:text-xl"
          onClick={onBack}
        />
        <ButtonSubmit
          className="w-1/2 rounded-r-xl text-lg font-bold sm:text-xl"
          isCanSend={isCanSend}
          title={t('Next')}
          titleLoad={tSubmit('Loading')}
          titleError={tSubmit('Error')}
          titleSuccess={tSubmit('Success')}
        />
      </div>
    </form>
  );
}
