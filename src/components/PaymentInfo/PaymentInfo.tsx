import differenceInDays from 'date-fns/differenceInDays';
import format from 'date-fns/format';
import { notFound } from 'next/navigation';
import { useTranslations } from 'next-intl';

import getFormattedPrice from '@/libs/getFormattedPrice';

import { MasterCard, Visa } from '../svg';

interface PaymentInfoProps {
  className?: string;
  data: Booking;
}

export default function PaymentInfo(props: PaymentInfoProps) {
  const { className = '', data, ...otherProps } = props;

  const {
    checkIn,
    checkOut,
    discount: calcDiscount,
    discountFromApartment,
    priceOfBooking,
    originalApartmentPrice,
    guests,
    price,
    hostContacts,
    transfers,
  } = data;

  if (!checkIn || !checkOut || !hostContacts || !price) {
    notFound();
  }

  const t = useTranslations('PaymentInfo');
  const { firstCardNumber = '', firstCardProvider = 'Visa' } = hostContacts;

  const dayCount = differenceInDays(new Date(checkOut), new Date(checkIn));

  const totalTransferPrice =
    (Number(transfers?.from?.price) || 0) + (Number(transfers?.to?.price) || 0);

  let discount: number | false = false;

  if (discountFromApartment && calcDiscount <= 0) {
    discount =
      discountFromApartment > 0 ? 1 - discountFromApartment / 100 : false;
  } else {
    discount = calcDiscount > 0 ? 1 - calcDiscount / 100 : false;
  }

  return (
    <div className={`${className}`} {...otherProps}>
      <div
        className={`${className} flex flex-col overflow-hidden rounded-xl border`}
        {...otherProps}
      >
        <div className="flex flex-row items-baseline gap-2 p-4">
          <div
            className={`${discountFromApartment > 0 ? 'text-placeholder line-through' : ''} font-semibold sm:text-xl lg:text-2xl`}
          >
            {getFormattedPrice(originalApartmentPrice)}
            {discountFromApartment <= 0 && (
              <span className="ml-1 text-sm font-light text-neutral-600 md:text-base">
                {t('night')}
              </span>
            )}
          </div>
          {discountFromApartment > 0 && (
            <div className="font-semibold text-accent sm:text-xl lg:text-2xl">
              {getFormattedPrice(priceOfBooking)}
              <span className="ml-1 text-sm font-light text-neutral-600 md:text-base">
                {t('night')}
              </span>
            </div>
          )}
        </div>
        <hr />
        <div className="p-4 text-sm font-medium">
          <div className="rounded-xl border border-stroke">
            <div className="flex items-center justify-center uppercase">
              <div className="flex-auto rounded-l-xl border-stroke px-4 py-2">
                <span>{t('Check-In')}</span>
                <p>{format(new Date(checkIn), 'dd/MM/yy')}</p>
              </div>
              <div className="flex-auto rounded-r-xl border-l border-stroke px-4 py-2">
                <span>{t('Check-Out')}</span>
                <p>{format(new Date(checkOut), 'dd/MM/yy')}</p>
              </div>
            </div>
            <hr />
            <div className="px-4 py-3">
              <span className="uppercase">{t('Guests')}</span>
              <div className="text-placeholder">
                {guests.guests} {t('guests', { count: guests.guests })}
              </div>
            </div>
          </div>
        </div>
        <hr />
        <ul className="flex flex-auto flex-col justify-end gap-y-2 px-4 py-3 *:px-4">
          {!!transfers?.from?.price && (
            <li className="flex flex-row justify-between">
              <div className="text-sm font-normal underline">
                {t('Transfer form airport')}
              </div>
              <div>{getFormattedPrice(transfers.from.price)}</div>
            </li>
          )}
          {!!transfers?.to?.price && (
            <li className="flex flex-row justify-between">
              <div className="text-sm font-normal underline">
                {t('Transfer to airport')}
              </div>
              <div>{getFormattedPrice(transfers.to.price)}</div>
            </li>
          )}
          <li className="flex flex-row justify-between">
            <div className="text-sm font-normal underline">
              <span className="mr-1 inline-block">
                {getFormattedPrice(price / dayCount, {
                  maximumFractionDigits: 0,
                })}{' '}
                x {dayCount}
              </span>
              <span>{t('nights', { count: dayCount })}</span>
            </div>
            <div>{getFormattedPrice(price)}</div>
          </li>
          <hr />
          <li className="flex flex-row justify-between px-4 text-lg font-semibold">
            <div className="text-start">{t('Total')}</div>
            <div>{getFormattedPrice(price + totalTransferPrice)}</div>
          </li>
        </ul>
      </div>
      {calcDiscount > 0 && (
        <div className=" mt-3 rounded-xl border p-4">
          <h3 className="text-center text-lg font-semibold">
            {t('Deal of the Day')}
          </h3>
          <p className="mt-3 text-start">
            {t('If you pay now')}{' '}
            <span className="font-bold text-red-600">-{calcDiscount}%</span>
          </p>
          <hr className="my-2" />
          <div className="flex flex-row justify-between px-4 text-lg font-semibold">
            <p className="text-start">{t('Total')}</p>
            <p>
              {getFormattedPrice(
                originalApartmentPrice * dayCount * (discount || 0) +
                  totalTransferPrice,
                {
                  maximumFractionDigits: 0,
                },
              )}
            </p>
          </div>
        </div>
      )}
      <div className=" mt-3 rounded-xl border p-4">
        <h3 className="text-center text-lg font-semibold">{t('How to pay')}</h3>
        <p className="mt-3">{t('Make transfer to card')}</p>
        <div className="mt-3 flex items-center gap-3">
          {firstCardProvider === 'Visa' ? (
            <Visa width={60} height={40} className="rounded-lg" />
          ) : (
            <MasterCard width={60} height={40} className="rounded-lg" />
          )}
          <span className="text-sm sm:text-base">{firstCardNumber}</span>
        </div>
      </div>
    </div>
  );
}
