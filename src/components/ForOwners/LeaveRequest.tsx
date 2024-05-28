'use client';

import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { sendContactForm } from '@/libs/actions/sendContactForm';
import { baseUrl } from '@/utils/AppConfig';

import ButtonSubmit from '../UI/ButtonSubmit';

interface LeaveRequestProps {
  className?: string;
}

type LeaveRequestForma = {
  name: string;
  phone: string;
};

export default function LeaveRequest(props: LeaveRequestProps) {
  const { className = '', ...otherProps } = props;
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [showServerError, setShowServerError] = useState(false);
  const t = useTranslations('ContactUs');
  const tSubmit = useTranslations('ButtonSubmit');
  const pathName = baseUrl + usePathname();

  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors, isValid, touchedFields },
  } = useForm<LeaveRequestForma>();

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

  const onSubmit = async (data: LeaveRequestForma) => {
    setLoading(true);

    await sendContactForm(
      {
        name: data.name,
        phone: data.phone,
        agreeWithTerms: true,
      },
      pathName,
      'forOwners-short',
    );

    const res = await new Promise<{ statusCode: number; messages?: [] }>(
      (response) => {
        setTimeout(() => {
          response({ statusCode: 200 });
        }, 2000);
      },
    );

    if (!res) {
      onError();
      setShowServerError(true);
      return;
    }

    if (res.statusCode < 205) {
      reset();
      onSuccess();
    } else {
      res?.messages?.forEach(({ element, message }) => {
        setError(element as any, { message });
      });
      onError();
    }
  };
  return (
    <div className="mt-10 md:mt-20">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={`${className} flex w-full flex-wrap items-end justify-center *:mx-1 *:mt-7 md:*:mx-7`}
        {...otherProps}
      >
        <label
          htmlFor="heroName"
          className="relative flex-auto first:mt-0 lg:max-w-[230px]"
        >
          <span className="absolute -top-6 left-1 text-sm sm:text-base">
            {t('Name')}
          </span>
          <input
            className={`${errors.name ? 'invalid' : ''} h-10 w-full rounded-full border-2 border-white bg-transparent p-4 text-white`}
            enterKeyHint="next"
            type="text"
            name="name"
            id="heroName"
            required
            {...register('name', {
              required: true,
              min: {
                value: 2,
                message: t('ErrorName'),
              },
            })}
          />
          {errors?.name && <p className="text-error">{errors.name?.message}</p>}
        </label>
        <label
          htmlFor="heroPhone"
          className="relative flex-auto lg:max-w-[230px]"
        >
          <span className="absolute -top-6 left-1 text-sm sm:text-base">
            {t('Phone')}
          </span>
          <input
            className={`${errors.phone ? 'invalid' : ''} h-10 w-full rounded-full border-2 border-white bg-transparent p-4 text-white`}
            enterKeyHint="done"
            type="tel"
            name="phone"
            id="heroPhone"
            required
            {...register('phone', {
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
          {errors?.phone && (
            <p className="text-error">{errors.phone?.message}</p>
          )}
        </label>
        <ButtonSubmit
          isCanSend={isCanSend}
          className="w-[230px] flex-auto rounded-full py-2 font-bold last:mt-5 sm:text-lg lg:flex-none"
          loading={loading}
          showError={showError}
          showSuccess={showSuccess}
          title={t('Leave request')}
          titleLoad={tSubmit('Loading')}
          titleError={tSubmit('Error')}
          titleSuccess={tSubmit('Success')}
        />
      </form>
      {showServerError && (
        <p className="text-center text-lg font-bold text-error">
          {t('ErrorServer')}
        </p>
      )}
    </div>
  );
}
