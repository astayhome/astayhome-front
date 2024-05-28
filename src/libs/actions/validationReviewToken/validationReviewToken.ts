'use server';

import { postData } from '../helpers/postData';

export default async function validationReviewToken(token: string) {
  try {
    const res = await postData<{ tokenReview: string }, ResBooking>(
      '/api/reviews/validate-token',
      {
        tokenReview: token,
      },
    );
    return res;
  } catch (error: unknown) {
    console.log('POST Booking ------>', error);
    return null;
  }
}
