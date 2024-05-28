'use server';

import { serverUrl } from '@/utils/AppConfig';

import { fetchData } from '../helpers/fetchData';

type GetReviewsProps = {
  baseReviewQuery: GetFromServer<ReqReviewFields>;
  limit?: number;
  apartmentId?: number;
};

export async function getReviews({
  baseReviewQuery,
  limit = 7,
  apartmentId,
}: GetReviewsProps): Promise<Review[] | null> {
  try {
    const apartment = apartmentId ? `apartments/${apartmentId}/` : '';

    const reviews = await fetchData<ReqReviewFields, Review[]>(
      `/api/${apartment}reviews`,
      { ...baseReviewQuery, limit },
      [`/api/${apartment}reviews`],
    );

    return reviews;
  } catch (error: any) {
    console.log(error);
    return null;
  }
}

type GetCountReviewsProps = {
  apartmentId?: number;
};

type CountReviewsQuery = {
  where?: { average?: boolean; listing_id?: number; status: boolean };
};

export async function getCountReviews({ apartmentId }: GetCountReviewsProps) {
  try {
    let countQuery: CountReviewsQuery = {
      where: { average: true, status: true },
    };

    if (apartmentId) {
      countQuery = {
        where: {
          listing_id: apartmentId,
          status: true,
        },
      };
    }

    const promiseReviewCount = fetch(
      `${serverUrl}/api/reviews/count?where=${JSON.stringify(countQuery.where)}`,
      { next: { tags: ['/api/reviews/count'] } },
    );

    const resCount = await promiseReviewCount;

    if (!resCount.ok) {
      const {
        error: { message },
      } = await resCount.json();
      throw new Error(message);
    }
    const data: { count: number; average: number } = await resCount.json();

    return data;
  } catch (error: any) {
    console.log(error);
    return null;
  }
}
