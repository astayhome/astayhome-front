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
  Calendar,
  Clock,
  LocationPick,
  Phone,
  Suitcase,
  User,
} from '@/components/svg';
import { sendTransferTo } from '@/libs/actions/sendTransfers/sendTransfers';

import ButtonSubmit from '../../UI/ButtonSubmit';

interface TransferToProps {
  className?: string;
}

type FromType = {
  location: string;
  date: string;
  time: string;
  guests: string;
  amountBags: string;
  phone: string;
};

export default function TransferTo(props: TransferToProps) {
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
  const t = useTranslations('TransferTo');
  const tSubmit = useTranslations('ButtonSubmit');

  const timeNow = Intl.DateTimeFormat(undefined, {
    hour: 'numeric',
    minute: 'numeric',
  }).format(now);

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
    setFormData({ ...data, date });
    setIsOpenModal(true);
  };

  const onSubmit = async (
    data: ContactForma,
    resetModal: UseFormReset<ContactForma>,
  ) => {
    setLoading(true);
    setIsOpenModal(false);
    const res = await sendTransferTo({ ...formData, ...data });

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
        <div className="formWrapper flex-col flex-wrap gap-x-5 *:mt-5 sm:flex-none sm:*:mt-7 md:flex-row">
          <label htmlFor="location" className="relative w-full md:w-auto">
            <input
              required
              className={`${errors.location ? 'invalid' : ''} inputFromForm`}
              type="text"
              enterKeyHint="next"
              autoComplete="home location"
              id="location"
              placeholder={t('Pick up Location')}
              {...register('location', {
                required: true,
                min: {
                  value: 2,
                  message: t('Min length = 2'),
                },
              })}
            />
            <LocationPick size={25} />
            {errors?.location?.message && (
              <p className="text-center text-error">
                {errors.location.message}
              </p>
            )}
          </label>
          <div className="flex w-full flex-auto gap-x-5 md:w-auto">
            <label htmlFor="date" className="relative">
              <input
                required
                className={`${errors.date ? 'invalid' : ''} inputFromForm`}
                enterKeyHint="next"
                type="date"
                id="date"
                readOnly
                onChange={() => {}}
                value={date}
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
        <div className="formWrapper flex-wrap  justify-between gap-x-5 *:mt-5 sm:flex-none sm:justify-center sm:*:mt-7">
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
                required
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
              enterKeyHint="done"
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
