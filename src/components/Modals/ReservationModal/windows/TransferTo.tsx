'use client';

import intlFormat from 'date-fns/intlFormat';
import { useTranslations } from 'next-intl';
import { type KeyboardEvent, type MouseEvent, useState } from 'react';
import { useForm } from 'react-hook-form';

import {
  Calendar,
  Clock,
  LocationPick,
  Phone,
  Suitcase,
  User,
} from '@/components/svg';
import Button from '@/components/UI/Button';
import ButtonSubmit from '@/components/UI/ButtonSubmit';
import { ReservationActionTypes } from '@/context/actionTypes';
import type { IInitialReservationState } from '@/context/Reservation/ruducerReservation';
import { useReservationContext } from '@/hooks/useReservationContext';

import CalendarModal from '../../CalendarModal/CalendarModal';
import { formateDate } from './TransferFrom';

interface TransferToProps {
  className?: string;
  onSubmitHandler: (data: IInitialReservationState) => void;
  onBack: () => void;
}

type TransferToType = {
  city: string;
  date: string;
  time: string;
  guests: string;
  amountBags: string;
  phone: string;
};

export default function TransferTo(props: TransferToProps) {
  const {
    className = '',
    onSubmitHandler = () => {},
    onBack = () => {},
    ...otherProps
  } = props;

  const t = useTranslations('TransferTo');
  const tSubmit = useTranslations('ButtonSubmit');
  const now = new Date();
  const timeNow = intlFormat(now, {
    hour: '2-digit',
    minute: '2-digit',
  });

  const [isOpenCalendarModal, setIsOpenCalendarModal] = useState(false);
  const { booking, dispatch } = useReservationContext()!;
  const { checkOut = now, guests, location, phoneNumber, transfer } = booking;

  const {
    from: { guests: guestsFrom = guests, amountBags = 0, phone = phoneNumber },
  } = transfer;

  const defLocation =
    !location || location === 'Pattaya' ? t('Pattaya') : location;

  const {
    to: {
      location: locationTo = defLocation,
      date = checkOut,
      time = timeNow,
      guests: guestsTo = guestsFrom || guests.guests,
      amountBags: amountBagsTo = amountBags,
      phone: phoneTo = phone || phoneNumber,
    },
  } = transfer;

  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors, dirtyFields, isValid, touchedFields },
  } = useForm<TransferToType>({
    defaultValues: {
      date: formateDate(date),
      amountBags: amountBagsTo.toString(),
      phone: phoneTo,
      guests: guestsTo.toString(),
      time,
      city: locationTo,
    },
  });

  const [calendarDate, setCalendarDate] = useState(formateDate(date));

  const isCanSend = isValid || Object.keys(touchedFields).length <= 0;

  const onSubmitForm = (data: TransferToType) => {
    const reservation: IInitialReservationState = {
      ...booking,
      transfer: {
        ...booking.transfer,
        to: {
          ...data,
          date: calendarDate,
          guests: Number(data.guests),
          amountBags: Number(data.amountBags),
        },
      },
    };

    onSubmitHandler(reservation);
  };

  const onBackHandler = () => {
    if (
      Object.keys(dirtyFields).length >= 1 ||
      Object.keys(touchedFields).length > 0
    ) {
      const data = getValues();
      const payload = {
        ...data,
        date: calendarDate,
        guests: Number(data.guests),
        amountBags: Number(data.amountBags),
      };

      dispatch({
        type: ReservationActionTypes.TRANSFER_TO,
        payload,
      });
    }
    onBack();
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
        <div className="formWrapper flex-col flex-wrap gap-x-5 *:mt-5 first:mt-0 sm:flex-none md:flex-row">
          <label htmlFor="city" className="relative w-full md:w-auto">
            <input
              required
              className={`${errors.city ? 'invalid' : ''} inputFromForm`}
              type="text"
              enterKeyHint="next"
              autoComplete="home city"
              id="city"
              placeholder={t('Pick up Location')}
              {...register('city', {
                required: true,
                min: {
                  value: 2,
                  message: t('Min length = 2'),
                },
              })}
            />
            <LocationPick size={25} />
            {errors?.city?.message && (
              <p className="text-center text-error">{errors.city.message}</p>
            )}
          </label>
          <div className="flex w-full flex-auto md:w-auto">
            <label htmlFor="date" className="relative mr-5 gap-x-5">
              <input
                required
                className={`${errors.date ? 'invalid' : ''} inputFromForm`}
                enterKeyHint="next"
                type="date"
                id="date"
                value={calendarDate}
                onChange={() => {}}
                onClick={(e) => onChangeDate(e)}
                onKeyDown={(e) => onChangeDate(e)}
                title={t('Pick up date')}
                aria-label={t('Pick up date')}
                {...register('date', {
                  required: true,
                })}
              />
              <Calendar size={25} />
            </label>
            <label htmlFor="time" className="relative">
              <input
                required
                className={`${errors.time ? 'invalid' : ''} inputFromForm`}
                enterKeyHint="next"
                step={60}
                type="time"
                id="time"
                defaultValue={timeNow}
                title={t('Pick up time')}
                aria-label={t('Pick up time')}
                {...register('time', {
                  required: true,
                })}
              />
              <Clock size={25} />
            </label>
          </div>
        </div>
        <div className="formWrapper flex-wrap justify-between *:mt-5 sm:flex-none sm:justify-center">
          <div className="flex flex-auto *:mr-5 first:mt-0">
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
            <label htmlFor="amountBags" className="relative last:mr-0">
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
            <Phone className="absolute " size={25} />
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
          onClick={onBackHandler}
        />
        <ButtonSubmit
          isCanSend={isCanSend}
          className="w-1/2 rounded-r-xl text-lg font-bold sm:text-xl"
          title={t('Reserve')}
          titleLoad={tSubmit('Loading')}
          titleError={tSubmit('Error')}
          titleSuccess={tSubmit('Success')}
        />
      </div>
    </form>
  );
}
