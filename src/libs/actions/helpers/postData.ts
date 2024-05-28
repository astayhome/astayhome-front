import { cookies } from 'next/headers';
import { getLocale } from 'next-intl/server';

import { serverUrl } from '@/utils/AppConfig';

export type DefResData = { status: number; message: string };

export async function postData<K = unknown, ResData = DefResData>(
  url: string,
  data: K,
  headers: Headers = new Headers(),
) {
  const locale = await getLocale();
  const tzOffset = cookies().get('time-zone-offset')?.value || '';
  const timeZone = cookies().get('time-zone')?.value || '';

  if (!headers.has('Content-Type')) {
    headers.append('Content-Type', 'application/json');
  }

  const raw = JSON.stringify({ ...data, locale, tzOffset, timeZone });

  const requestOptions: RequestInit = {
    method: 'POST',
    headers,
    body: raw,
    redirect: 'follow',
  };

  const res = await fetch(serverUrl + url, requestOptions);

  if (!res.ok) {
    const { error }: POSTErrorResponse = await res.json();
    console.log(JSON.stringify(error, null, 2));
    throw new Error(error.message, { cause: error });
  }

  const resData: ResData = await res.json();

  return resData;
}
