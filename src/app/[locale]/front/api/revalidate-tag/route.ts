import { revalidateTag } from 'next/cache';
import { type NextRequest, NextResponse } from 'next/server';

import tokenValidation from '@/libs/tokenValidation/tokenValidation';

type PutTag = {
  tags: Array<string>;
};

const allowedTags = [
  '/api/apartments',
  '/api/apartments/{apartmentId}',
  '/api/complexes',
  '/api/complexes/{complexId}',
  '/api/apartments/reviews',
  '/api/apartments/{apartmentId}/reviews',
  '/api/reviews/count',
  '/api/host-contacts',
];

export async function POST(request: NextRequest) {
  try {
    const revalidate: PutTag = await request.json();
    tokenValidation();

    if (!revalidate.tags || revalidate.tags.length <= 0) {
      throw new Error(
        `Field tags must be an array. revalidate.tags = ${typeof revalidate.tags}`,
        {
          cause: {
            allowedTags: JSON.stringify({
              tags: allowedTags,
            }),
          },
        },
      );
    }

    for (let i = 0; i < revalidate.tags.length; i += 1) {
      const tag = revalidate.tags[i];
      revalidateTag(tag);
    }

    return NextResponse.json(
      { revalidated: true, now: Date.now(), revalidateTags: revalidate.tags },
      { status: 200 },
    );
  } catch (error) {
    const err = error as Error;

    return NextResponse.json(
      {
        revalidated: false,
        now: Date.now(),
        message: err.message,
        cause: err.cause,
      },
      {
        status: 400,
      },
    );
  }
}
