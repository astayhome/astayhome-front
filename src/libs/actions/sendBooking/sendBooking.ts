'use server';

import type { IInitialReservationState } from '@/context/Reservation/ruducerReservation';

import { postData } from '../helpers/postData';

type SendBooking = Omit<
  IInitialReservationState,
  'apartmentId' | 'checkIn' | 'checkOut'
> & {
  checkIn: string;
  checkOut: string;
  apartmentId: string | number;
};

export default async function sendBooking(data: SendBooking) {
  const dataWithoutTimezone = {
    ...data,
    checkIn: new Date(data.checkIn).toISOString(),
    checkOut: new Date(data.checkOut).toISOString(),
  };

  try {
    const res = await postData('/api/booking-requests', dataWithoutTimezone);
    return res;
  } catch (error: unknown) {
    console.log('POST Booking ------>', error);
    return null;
  }
}
