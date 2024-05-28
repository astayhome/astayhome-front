import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { useForm, type UseFormReset } from 'react-hook-form';

import { Button } from '@/components/ContactUs/Button';
import { sendContactForm } from '@/libs/actions/sendContactForm';
import { Link } from '@/libs/i18nNavigation';
import { baseUrl } from '@/utils/AppConfig';

import Modal from '../Modal';

interface ContactModalProps {
  className?: string;
  isOpenModal: boolean;
  setIsOpenModal: (prev: boolean) => void;
  onSubmit?: (
    data: ContactForma,
    resetModal: UseFormReset<ContactForma>,
  ) => void;
  withMessage?: boolean;
  withPhone?: boolean;
  pageName?: string;
  headerText?: string;
  modalName?: string;
}

export type ContactForma = {
  email: string;
  name: string;
  phone: string;
  message: string;
  agreeWithTerms: boolean;
};

export default function ContactModal(props: ContactModalProps) {
  const {
    className = '',
    headerText,
    modalName,
    isOpenModal,
    setIsOpenModal,
    pageName = 'main',
    withMessage = true,
    withPhone = true,
    onSubmit,
    ...otherProps
  } = props;

  const t = useTranslations('ContactUs');
  const tBtn = useTranslations('ButtonSubmit');
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
  } = useForm<ContactForma>();

  const isCanSend = isValid || Object.keys(touchedFields).length <= 0;

  const onSuccess = () => {
    setShowError(false);
    setShowSuccess(true);
    setLoading(false);
    setTimeout(() => {
      setShowSuccess(false);
      setIsOpenModal(false);
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

  const onSubmitModal = async (data: ContactForma) => {
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

  const onSubmitForm = (data: ContactForma) => {
    if (onSubmit) {
      return onSubmit(data, reset);
    }
    return onSubmitModal(data);
  };

  const body = (
    <section className={`${className} mt-3 overflow-y-auto`} {...otherProps}>
      <h3 className="text-lg font-semibold">
        {headerText ||
          t(
            'Please fill in the fields below and our manager will contact you shortly!',
          )}
      </h3>
      <form
        className="mt-3"
        onSubmit={handleSubmit(onSubmitForm)}
        aria-label={t('Contact form')}
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
          {errors?.email?.message && (
            <p className="text-error">{errors.email?.message}</p>
          )}
          {withPhone && (
            <>
              <input
                className={`${errors.phone ? 'invalid' : ''} h-11 w-full rounded-lg bg-gray-100 p-4 placeholder:text-placeholder`}
                enterKeyHint="done"
                type="tel"
                name="phone"
                id="phone"
                placeholder={t('Phone Number')}
                aria-required="true"
                aria-invalid={!!errors.phone}
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
            </>
          )}

          {withMessage && (
            <>
              <textarea
                className={`${errors.message ? 'invalid' : ''} w-full flex-auto resize-none rounded-lg bg-gray-100 p-4 placeholder:text-placeholder`}
                name="message"
                id="message"
                placeholder={t('Message')}
                aria-required="true"
                aria-invalid={!!errors.message}
                {...register('message', {
                  required: true,
                  min: {
                    value: 10,
                    message: t('ErrorMessage'),
                  },
                })}
              />
              {errors?.message && (
                <p className="text-error">{errors.message?.message}</p>
              )}
            </>
          )}

          <p className="relative mt-3">
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
            {t('Terms')},{' '}
            <Link
              className="underline transition-colors hover:text-info"
              href="/privacy-policy"
              prefetch={false}
            >
              {t('Policy')}
            </Link>
          </p>
          <div className="w-3/4 pb-2">
            <Button
              isCanSend={isCanSend}
              disabled={showServerError}
              loading={loading}
              showError={showError}
              showSuccess={showSuccess}
              className="mt-3 rounded-lg"
              title={t('Send')}
              titleLoad={tBtn('Loading')}
              titleSuccess={tBtn('Success')}
            />
          </div>
          {showServerError && (
            <p className="text-center text-lg font-bold text-error">
              {t('ErrorServer')}
            </p>
          )}
        </div>
      </form>
    </section>
  );

  return (
    <Modal
      useGap={false}
      actionLabel=""
      hideFooter
      body={body}
      title={modalName || 'Contact form'}
      isOpen={isOpenModal}
      onSubmit={() => {}}
      onClose={() => setIsOpenModal(false)}
    />
  );
}
