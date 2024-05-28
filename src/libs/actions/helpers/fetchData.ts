import { serverUrl } from '@/utils/AppConfig';

export async function fetchData<Req, Data>(
  url: string,
  query: GetFromServer<Req>,
  tags: string[] = ['main'],
) {
  const res = await fetch(
    `${serverUrl}${url}?filter=${JSON.stringify(query)}`,
    { next: { tags } },
  );

  if (!res.ok) {
    const {
      error: { message },
    } = await res.json();
    throw new Error(message);
  }

  const data: Data = await res.json();

  return data;
}
