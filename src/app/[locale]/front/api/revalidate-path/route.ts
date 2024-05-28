import { revalidatePath } from 'next/cache';
import { type NextRequest, NextResponse } from 'next/server';

import tokenValidation from '@/libs/tokenValidation/tokenValidation';

type PutContacts = {
  paths: Array<string>;
};

export async function POST(request: NextRequest) {
  try {
    const revalidate: PutContacts = await request.json();
    tokenValidation();

    if (!revalidate.paths || revalidate.paths.length <= 0) {
      throw new Error(
        `Field paths must be an array. revalidate.paths = ${typeof revalidate.paths}`,
        {
          cause: {
            allowedPath: JSON.stringify({
              paths: [
                '/',
                '/complexes',
                '/complexes/[complexId]',
                '/transfers',
                '/for-owners',
                '/about-us',
                '/privacy-policy',
                '/apartment/[apartmentId]',
                '/apartment/leave-review',
                '/apartment/payment',
              ],
            }),
          },
        },
      );
    }

    for (let i = 0; i < revalidate.paths.length; i += 1) {
      const path = revalidate.paths[i];
      if (path === '/') {
        revalidatePath(path, 'layout');
      } else {
        revalidatePath(path);
      }
    }

    return NextResponse.json(
      { revalidated: true, now: Date.now(), revalidatePaths: revalidate.paths },
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
