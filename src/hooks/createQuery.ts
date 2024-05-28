/* eslint-disable no-continue */
import type { IInitialState } from '@/context/reducer';

export default function createQuery(search: IInitialState) {
  const query: any = {};

  for (const [key, value] of Object.entries(search)) {
    if (!value) continue;

    if (key === 'guests' && search[key].guests === 0) continue;

    query[key] = value;
  }
  return query;
}
