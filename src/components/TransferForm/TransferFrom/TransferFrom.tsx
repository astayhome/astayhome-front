/* eslint-disable jsx-a11y/label-has-associated-control */

'use client';

import format from 'date-fns/format';
import { useTranslations } from 'next-intl';
import { type KeyboardEvent, type MouseEvent, useState } from 'react';
import { useForm, type UseFormReset } from 'react-hook-form';

import CalendarModal from '@/components/Modals/CalendarModal/CalendarModal';
import type { ContactForma } from '@/components/Modals/ContactModal/ContactModal';
import ContactModal from '@/components/Modals/ContactModal/ContactModal';
import {
  FlightTicket,
  Phone,
  Plane,
  Suitcase,
  User,
  UserCard,
} from '@/components/svg';
import { sendTransferFrom } from '@/libs/actions/sendTransfers/sendTransfers';

import ButtonSubmit from '../../UI/ButtonSubmit';

interface TransferFromProps {
  className?: string;
}

type FromType = {
  date: string;
  flightNumber: string;
  nameOfSignage: string;
  guests: string;
  amountBags: string;
  phone: string;
};

export default function TransferFrom(props: TransferFromProps) {
  const { className = '', ...otherProps } = props;

  const now = new Date();
  const dateNow = format(now, 'yyyy-MM-dd');

  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenCalendarModal, setIsOpenCalendarModal] = useState(false);
  const [date, setDate] = useState(dateNow);
  const [formData, setFormData] = useState<FromType | null>(null);
  const t = useTranslations('TransferFrom');
  const tSubmit = useTranslations('ButtonSubmit');

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isValid, touchedFields },
  } = useForm<FromType>();

  const isCanSend = isValid || Object.keys(touchedFields).length <= 0;

  const onSuccess = () => {
    setShowError(false);
    setShowSuccess(true);
    setLoading(false);
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  };

  const onError = () => {
    setShowSuccess(false);
    setShowError(true);
    setLoading(false);
    setTimeout(() => {
      setShowError(false);
    }, 5000);
  };

  const onSubmitForm = async (data: FromType) => {
    setFormData(() => ({ ...data, date }));
    setIsOpenModal(true);
  };

  const onSubmit = async (
    data: ContactForma,
    resetModal: UseFormReset<ContactForma>,
  ) => {
    setLoading(true);
    setIsOpenModal(false);
    const res = await sendTransferFrom({ ...formData, ...data });

    if (res.statusCode < 201) {
      reset();
      resetModal();
      onSuccess();
      setFormData(null);
    } else {
      onError();
    }
  };

  const onChangeDate = (
    event:
      | MouseEvent<HTMLInputElement, globalThis.MouseEvent>
      | KeyboardEvent<HTMLInputElement>,
  ) => {
    event.preventDefault();
    setIsOpenCalendarModal((prev) => !prev);
    setValue('date', date);
  };

  return (
    <div>
      <ContactModal
        pageName="transfer"
        withPhone={false}
        withMessage={false}
        onSubmit={onSubmit}
        isOpenModal={isOpenModal}
        setIsOpenModal={setIsOpenModal}
        modalName={t('Modal Title')}
        headerText={t('Modal Text')}
      />
      <CalendarModal
        isOpenModal={isOpenCalendarModal}
        setIsOpenModal={setIsOpenCalendarModal}
        setInputDate={setDate}
        currentDate={date}
      />
      <form
        onSubmit={handleSubmit(onSubmitForm)}
        className={`${className} formFromAirport bg-white`}
        {...otherProps}
      >
        <div className="formWrapper flex-wrap justify-between gap-x-5 *:mt-5  sm:flex-none sm:justify-center sm:*:mt-7">
          <label htmlFor="date" className="relative">
            <input
              className={`${errors.date ? 'invalid' : ''} inputFromForm select-none`}
              required
              enterKeyHint="next"
              type="date"
              readOnly
              id="date"
              title={t('Plane arrival date')}
              aria-label={t('Plane arrival date')}
              aria-invalid={errors.date ? 'true' : 'false'}
              value={date}
              onChange={() => {}}
              onClick={(e) => onChangeDate(e)}
              onKeyDown={(e) => onChangeDate(e)}
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
        <div className="formWrapper flex-wrap justify-between  gap-x-5 *:mt-5 sm:flex-none sm:justify-center sm:*:mt-7">
          <div className="flex flex-auto gap-x-5">
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
          <label htmlFor="phone" className="relative sm:flex-auto">
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
        <div className="flex w-full justify-center *:mt-5 sm:*:mt-7">
          <ButtonSubmit
            className="max-w-80 flex-auto rounded-full py-3 text-lg font-bold sm:py-3 sm:text-xl"
            isCanSend={isCanSend}
            loading={loading}
            showError={showError}
            showSuccess={showSuccess}
            title={t('Submit')}
            titleLoad={tSubmit('Loading')}
            titleError={tSubmit('Error')}
            titleSuccess={tSubmit('Success')}
          />
        </div>
      </form>
    </div>
  );
}
