'use server';

import { postData } from '../helpers/postData';

type SendReview = {
  review: string;
  reiting_score: number;
  tokenReview: string;
};

export default async function sendReview(data: SendReview) {
  try {
    const res = await postData('/api/reviews/customer-leave-review', data);
    return res;
  } catch (error: unknown) {
    console.log('POST Booking ------>', error);
    return null;
  }
}
