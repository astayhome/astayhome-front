'use server';

import { postData } from '../helpers/postData';

export default async function validationBookingToken(token: string) {
  try {
    const res = await postData<{ token: string }, ResBooking>(
      '/api/bookings/validate-token',
      {
        token,
      },
    );
    return res;
  } catch (error: unknown) {
    console.log('POST Booking ------>', error);
    return null;
  }
}
