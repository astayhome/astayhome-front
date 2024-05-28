/* eslint-disable react-hooks/exhaustive-deps */

'use client';

import { useLocale, useTranslations } from 'next-intl';
import { useEffect } from 'react';

import { ReservationActionTypes } from '@/context/actionTypes';
import type { IInitialState } from '@/context/reducer';
import type { IInitialReservationState } from '@/context/Reservation/ruducerReservation';
import { useReservationContext } from '@/hooks/useReservationContext';
import { localStorSearchKey } from '@/utils/AppConfig';

import ListingReservation from '../UI/ListingReservation';

interface ReservationProps {
  className?: string;
  apartmentData: Apartments;
  countReviews?: { count: number; average: number };
}

export default function Reservation(props: ReservationProps) {
  const { className = '', apartmentData, countReviews, ...otherProps } = props;
  const { disabledDates = [], hostDisabledDates = [] } = apartmentData;
  const { dispatch } = useReservationContext()!;
  const locale = useLocale();
  const t = useTranslations('Reservation');

  const disabled = (() => {
    const dates: Date[] = [];
    let set = new Set<string>([...disabledDates]);

    if (hostDisabledDates) {
      set = new Set<string>(...hostDisabledDates, ...disabledDates);
    }

    set.forEach((reservation: string) => {
      dates.push(new Date(reservation));
    });
    return dates;
  })();

  useEffect(() => {
    const searchData: IInitialState | null = JSON.parse(
      localStorage.getItem(localStorSearchKey),
    );

    const payload: IInitialReservationState = {
      locale,
      email: '',
      phoneNumber: '',
      name: '',
      checkIn: null,
      checkOut: null,
      transfer: { from: {}, to: {} },
      guests: { guests: 1, rooms: 1 },
      isAvailableApart: apartmentData.isAvailable,
      location: t('Pattaya'),
      maxGuests: apartmentData.guests,
      maxRooms: apartmentData.bedrooms,
    };

    if (searchData) {
      /* --- isWithinInterval https://date-fns.org/v3.6.0/docs/isWithinInterval --- */
      // payload.checkIn = searchData.checkIn;
      // payload.checkOut = searchData.checkOut;
      payload.guests = searchData.guests;
      payload.location = searchData.location;
    }

    dispatch({ type: ReservationActionTypes.SEARCH_DATA, payload });
  }, [apartmentData]);

  return (
    <div className={`${className}`} {...otherProps}>
      <ListingReservation
        countReviews={countReviews}
        disabledDates={disabled}
        apartmentData={apartmentData}
      />
    </div>
  );
}
