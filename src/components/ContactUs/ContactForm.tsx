/* eslint-disable jsx-a11y/label-has-associated-control */

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { sendContactForm } from '@/libs/actions/sendContactForm';
import feedBackPhoto from '@/public/assets/images/feedback-photo.webp';
import { baseUrl } from '@/utils/AppConfig';

import { Button } from './Button';

interface ContactFormProps {
  className?: string;
  pageName?: string;
  translate?: {
    'Contact us': string;
    'Send us an enquiry now and get a discount': string;
    Name: string;
    Email: string;
    'Phone Number': string;
    Terms: string;
    Policy: string;
    Send: string;
    'Not Available': string;
    Message: string;
    ErrorMessage: string;
    ErrorServer: string;
    ErrorPhoneMin: string;
    ErrorPhone: string;
    ErrorEmail: string;
    ErrorName: string;
    Success: string;
    Error: string;
    Loading: string;
  };
}

type ContactFormData = {
  email: string;
  name: string;
  phone: string;
  message: string;
  agreeWithTerms: boolean;
};

export default function ContactForm(props: ContactFormProps) {
  const { className = '', pageName, translate, ...otherProps } = props;
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [showServerError, setShowServerError] = useState(false);
  const pathName = baseUrl + usePathname();
  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors, isValid, touchedFields },
  } = useForm<ContactFormData>();

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

  const onSubmit = async (data: ContactFormData) => {
    setLoading(true);
    const res = await sendContactForm(data, pathName, pageName);

    if (!res) {
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
    <section className={`${className} my-10`} {...otherProps}>
      {/* <div className="flex items-center justify-start">
        <span className="mr-3 block h-[3px] w-7 bg-primary" />
        <h3 className="text-base md:text-xl">{translate['Contact us']}</h3>
      </div> */}
      <h3 className="text-lg font-semibold md:text-2xl">
        {translate['Send us an enquiry now and get a discount']}
      </h3>
      <form
        className="mt-3 grid grid-cols-1 md:mt-7 md:grid-cols-2 md:gap-7"
        onSubmit={handleSubmit(onSubmit)}
        aria-label="Contact form"
      >
        <div className="relative col-span-1 overflow-hidden rounded-2xl">
          <Image
            className="hidden size-full object-cover md:block"
            width={400}
            height={400}
            loading="lazy"
            priority={false}
            quality={100}
            src={feedBackPhoto}
            placeholder="blur"
            alt="Feedback photo"
          />
        </div>
        <div className="col-span-1 flex flex-col items-center justify-center *:mt-4">
          <input
            className={`${errors.name ? 'invalid' : ''} h-11 w-full rounded-lg bg-gray-100 p-4 placeholder:text-placeholder first:mt-0`}
            enterKeyHint="next"
            type="text"
            name="name"
            id="name"
            placeholder={translate.Name}
            required
            aria-required="true"
            aria-invalid={!!errors.name}
            {...register('name', {
              required: true,
              min: {
                value: 2,
                message: translate.ErrorName,
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
            placeholder={translate.Email}
            required
            aria-required="true"
            aria-invalid={!!errors.email}
            {...register('email', {
              required: true,
              min: {
                value: 2,
                message: translate.ErrorEmail,
              },
            })}
          />
          {errors?.email && (
            <p className="text-error">{errors.email?.message}</p>
          )}
          <input
            className={`${errors.phone ? 'invalid' : ''} h-11 w-full rounded-lg bg-gray-100 p-4 placeholder:text-placeholder`}
            enterKeyHint="done"
            type="tel"
            name="phone"
            id="phone"
            placeholder={translate['Phone Number']}
            aria-required="true"
            aria-invalid={!!errors.phone}
            required
            {...register('phone', {
              required: true,
              min: {
                value: 10,
                message: translate.ErrorPhoneMin,
              },
              pattern: {
                value: /^[+]?[0-9]{10,20}$/,
                message: translate.ErrorPhone,
              },
            })}
          />
          {errors?.phone?.message && (
            <p className="text-error">{errors.phone?.message}</p>
          )}
          <textarea
            className={`${errors.message ? 'invalid' : ''} w-full flex-auto resize-none rounded-lg bg-gray-100 p-4 placeholder:text-placeholder`}
            name="message"
            id="message"
            placeholder={translate.Message}
            aria-required="true"
            aria-invalid={!!errors.message}
            {...register('message', {
              required: true,
              min: {
                value: 10,
                message: translate.ErrorMessage,
              },
            })}
          />
          {errors?.message && (
            <p className="text-error">{errors.message?.message}</p>
          )}
          <p className="relative text-sm">
            <input
              className={`${errors.agreeWithTerms ? 'invalid' : ''} relative top-[2px] mr-1 inline-block size-4`}
              type="checkbox"
              name="agreeWithTerms"
              id="agreeWithTerms"
              required
              aria-required="true"
              aria-invalid={!!errors.agreeWithTerms}
              aria-label="Agreements with terms"
              {...register('agreeWithTerms', {
                required: true,
              })}
            />
            {translate.Terms},{' '}
            <Link
              className="underline transition-colors hover:text-info"
              href="/privacy-policy"
              prefetch={false}
            >
              {translate.Policy}
            </Link>
          </p>
          <Button
            isCanSend={isCanSend}
            disabled={showServerError}
            loading={loading}
            showError={showError}
            showSuccess={showSuccess}
            className="rounded-lg"
            title={translate.Send}
            titleNotAvailable={translate['Not Available']}
            titleLoad={translate.Loading}
            titleError={translate.Error}
            titleSuccess={translate.Success}
          />
          {showServerError && (
            <p className="text-center text-lg font-bold text-error">
              {translate.ErrorServer}
            </p>
          )}
        </div>
      </form>
    </section>
  );
}
