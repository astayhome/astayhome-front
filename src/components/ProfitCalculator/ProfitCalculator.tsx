'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { useForm, type UseFormReset } from 'react-hook-form';

import { sendContactForm } from '@/libs/actions/sendContactForm';
import calculatorPhoto from '@/public/assets/images/calculator-photo.webp';
import { baseUrl } from '@/utils/AppConfig';

import { Button } from '../ContactUs/Button';
import ContactModal, {
  type ContactForma,
} from '../Modals/ContactModal/ContactModal';

interface ProfitCalculatorProps {
  className?: string;
  pageName?: string;
}

type CalculatorForm = {
  location: string;
  typeProperty: string;
  beds: string;
  message: string;
};

export default function ProfitCalculator(props: ProfitCalculatorProps) {
  const { className = '', pageName, ...otherProps } = props;
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [showServerError, setShowServerError] = useState(false);
  const [formData, setFormData] = useState<{ message: string }>();
  const pathName = baseUrl + usePathname();
  const t = useTranslations('ProfitCalculator');
  const tBtn = useTranslations('ButtonSubmit');

  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isValid, touchedFields },
  } = useForm<CalculatorForm>();

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

  const onSubmitForm = async (data: CalculatorForm) => {
    const message = `<p>Complex: ${data.location}</p><p>Type of property: ${data.typeProperty}</p><p>How may rooms: ${data.beds}</p><br/><p>Message:</p><pre>${data.message}</pre>`;

    setFormData({ message });
    setIsOpenModal(true);
  };

  const onSubmit = async (
    data: ContactForma,
    resetModal: UseFormReset<ContactForma>,
  ) => {
    setLoading(true);
    setIsOpenModal(false);
    /* ----------- Data from calculator insert to contact form message ---------- */
    const res = await sendContactForm(
      { ...data, message: formData.message },
      pathName,
      pageName,
    );

    if (!res) {
      setShowServerError(true);
      return;
    }

    if (res.statusCode < 205) {
      reset();
      resetModal();
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
        <h2 className="text-base md:text-xl">{t('Profit')}</h2>
      </div> */}
      <h2 className="text-lg font-semibold md:text-2xl xl:text-3xl">
        {t('Profit Calculator')}
      </h2>
      <form
        className="mt-3 grid grid-cols-1 md:mt-7 md:grid-cols-2 md:gap-7"
        onSubmit={handleSubmit(onSubmitForm)}
        aria-label="Contact form"
      >
        <div className="col-span-1 flex flex-col items-center justify-center *:mt-3 ">
          <input
            className={`${errors.location ? 'invalid' : ''} h-13 w-full rounded-lg bg-gray-100 p-3 placeholder:text-placeholder first:mt-0`}
            enterKeyHint="next"
            type="text"
            name="location"
            id="location"
            autoComplete="home"
            placeholder={t('ComplexName')}
            required
            aria-required="true"
            aria-invalid={!!errors.location}
            {...register('location', {
              required: {
                value: true,
                message: t('This field is required'),
              },
              min: {
                value: 2,
                message: t('Min 2 char'),
              },
            })}
          />
          {errors?.location && (
            <p className="text-error">{errors.location?.message}</p>
          )}
          <select
            className={`${errors.typeProperty ? 'invalid' : ''} h-13 w-full rounded-lg bg-gray-100 p-3 placeholder:text-placeholder`}
            name="typeProperty"
            id="typeProperty"
            required
            defaultValue={t('Type of property')}
            aria-required="true"
            aria-invalid={!!errors.typeProperty}
            {...register('typeProperty', {
              required: {
                value: true,
                message: 'This field is required',
              },
            })}
          >
            <option disabled defaultChecked value={t('Type of property')}>
              {t('Type of property')}
            </option>
            <option value={t('Apartment')}>{t('Apartment')}</option>
            <option value={t('Villa')}>{t('Villa')}</option>
          </select>
          {errors?.typeProperty && (
            <p className="text-error">{errors.typeProperty?.message}</p>
          )}
          <select
            className={`${errors.beds ? 'invalid' : ''} h-13 w-full rounded-lg bg-gray-100 p-3 placeholder:text-placeholder`}
            name="beds"
            id="beds"
            required
            defaultValue={t('How many rooms')}
            aria-required="true"
            aria-invalid={!!errors.beds}
            {...register('beds', {
              required: {
                value: true,
                message: 'This field is required',
              },
            })}
          >
            <option disabled defaultChecked value={t('How many rooms')}>
              {t('How many rooms')}
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6+">6+</option>
          </select>
          {errors?.beds && <p className="text-error">{errors.beds?.message}</p>}
          <textarea
            className={`${errors.message ? 'invalid' : ''} w-full flex-auto resize-none rounded-lg bg-gray-100 p-4 placeholder:text-placeholder`}
            name="message"
            id="message"
            placeholder={t('Message')}
            {...register('message')}
          />
          {errors?.message && (
            <p className="text-error">{errors.message?.message}</p>
          )}
          {showServerError && (
            <p className="text-center text-lg font-bold text-error">
              {t('ErrorServer')}
            </p>
          )}
          <Button
            isCanSend={isCanSend}
            loading={isOpenModal || loading}
            disabled={showServerError}
            showError={showError}
            showSuccess={showSuccess}
            className="rounded-lg"
            title={t('Send')}
            titleLoad={tBtn('Loading')}
            titleSuccess={tBtn('Success')}
          />
        </div>
        <div className="relative col-span-1 overflow-hidden rounded-2xl">
          <Image
            className="hidden size-full object-cover md:block"
            width={400}
            height={400}
            loading="lazy"
            priority={false}
            quality={75}
            src={calculatorPhoto}
            placeholder="blur"
            alt="Feedback photo"
          />
        </div>
      </form>
      <ContactModal
        pageName="transfer"
        withMessage={false}
        onSubmit={onSubmit}
        isOpenModal={isOpenModal}
        setIsOpenModal={setIsOpenModal}
        modalName={t('Modal Title')}
        headerText={t('Modal Text')}
      />
    </section>
  );
}
