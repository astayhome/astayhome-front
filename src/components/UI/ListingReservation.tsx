'use client';

import differenceInDays from 'date-fns/differenceInDays';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import type { RangeKeyDict } from 'react-date-range';

import { ReservationActionTypes } from '@/context/actionTypes';
import { useReservationContext } from '@/hooks/useReservationContext';
import getFormattedPrice from '@/libs/getFormattedPrice';

import AppDateRange from '../AppHeader/atoms/AppDateRange';
import TransferModal from '../Modals/ReservationModal/ReservationModal';
import Button from './Button';

interface ListingReservationProps {
  apartmentData: Apartments;
  disabled?: boolean;
  disabledDates?: Date[];
  countReviews?: { count: number; average: number };
}

const ListingReservation: React.FC<ListingReservationProps> = ({
  apartmentData,
  disabled,
  disabledDates,
}) => {
  const { id, price } = apartmentData;
  const discount =
    apartmentData.discount > 0 ? 1 - apartmentData.discount / 100 : false;
  const discountedPrice = discount ? Math.round(price * discount) : price;

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [totalPrice, setTotalPrice] = useState(discountedPrice);
  const { booking, dispatch } = useReservationContext()!;
  const { checkIn, checkOut } = booking;
  const [dayDiff, setDayDiff] = useState(1);
  const [blockButton, setBlockButton] = useState(!checkIn || !checkOut);
  const isNotAvailable = !booking.isAvailableApart;
  const t = useTranslations('Reservation');

  let btnLabel = blockButton ? t('Please choose dates') : t('Reserve');

  if (isNotAvailable) {
    btnLabel = t('Sorry, not available');
  }

  const onChangeDate = ({ selection }: RangeKeyDict) => {
    dispatch({
      type: ReservationActionTypes.SET_CHECK_IN,
      payload: selection?.startDate || null,
    });
    dispatch({
      type: ReservationActionTypes.SET_CHECK_OUT,
      payload: selection?.endDate || new Date(''),
    });
  };

  const onSubmit = () => {
    setIsOpenModal(true);
  };

  const actionOnSubmit = () => {
    setDayDiff(1);
    setTotalPrice(discountedPrice);
  };

  useEffect(() => {
    setBlockButton(!checkIn || !checkOut);
    if (checkIn && checkOut) {
      const dayCount = differenceInDays(checkOut, checkIn);

      if (dayCount && discountedPrice) {
        setDayDiff(dayCount);
        setTotalPrice(dayCount * discountedPrice);
      } else {
        setDayDiff(1);
        setTotalPrice(discountedPrice);
      }
    }
  }, [checkIn, checkOut, discountedPrice]);

  return (
    <>
      <div className="overflow-hidden rounded-xl border">
        <div className="flex flex-row items-baseline gap-2 p-4">
          <div
            className={`${discount ? 'text-placeholder line-through' : ''} font-semibold sm:text-xl lg:text-2xl`}
          >
            {getFormattedPrice(price)}
            {!discount && (
              <span className="ml-1 text-sm font-light text-neutral-600 md:text-base">
                {t('night')}
              </span>
            )}
          </div>
          {typeof discount === 'number' && discount > 0 && (
            <div className="font-semibold text-accent sm:text-xl lg:text-2xl">
              {getFormattedPrice(discountedPrice)}
              <span className="ml-1 text-sm font-light text-neutral-600 md:text-base">
                {t('night')}
              </span>
            </div>
          )}
        </div>
        <hr />
        <AppDateRange
          months={1}
          isNotAvailable={isNotAvailable}
          checkIn={checkIn}
          checkOut={checkOut}
          disabledDates={disabledDates}
          onChange={(value) => onChangeDate(value)}
        />
        <hr />
        <div className="p-2">
          <Button
            addSpecialHover
            className="rounded-lg"
            disabled={disabled || blockButton || isNotAvailable}
            label={btnLabel}
            onClick={onSubmit}
          />
        </div>
        <hr />
        <div
          className="
          flex 
          flex-row 
          items-center 
          justify-between 
          p-4
          text-lg
          font-semibold
        "
        >
          <div className="text-sm font-normal">
            {getFormattedPrice(discountedPrice)} x {dayDiff}{' '}
            {t('nights', { count: dayDiff })}
          </div>
          <div>
            {t('Total')} {getFormattedPrice(totalPrice)}
          </div>
        </div>
      </div>
      <TransferModal
        apartmentId={id}
        isOpenModal={isOpenModal}
        setIsOpenModal={setIsOpenModal}
        actionOnSubmit={actionOnSubmit}
      />
    </>
  );
};

export default ListingReservation;
