/* eslint-disable no-console */
import { headers } from 'next/headers';
import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

import { AppConfig } from '@/utils/AppConfig';

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!AppConfig.locales.includes(locale as any)) notFound();

  const now = headers().get('date') ?? new Date();

  const timeZone = headers().get('time-zone') ?? 'Asia/Bangkok';
  const messages = (await import(`../locales/${locale}.json`)).default;

  return {
    now: now ? new Date(now) : undefined,
    timeZone,
    messages,
    defaultTranslationValues: {
      globalString: 'Global string',
      highlight: (chunks) => `<strong>${chunks}</strong>`,
    },
    formats: {
      dateTime: {
        medium: {
          dateStyle: 'medium',
          timeStyle: 'short',
          hour12: false,
        },
      },
    },
    onError(error) {
      if (
        error.message ===
        (process.env.NODE_ENV === 'production'
          ? 'MISSING_MESSAGE'
          : 'MISSING_MESSAGE: Could not resolve `missing` in `Index`.')
      ) {
        // Do nothing, this error is triggered on purpose
      } else {
        console.error(JSON.stringify(error.message));
      }
    },
    getMessageFallback({ key, namespace }) {
      return `\`getMessageFallback\` called for ${[namespace, key]
        .filter((part) => part != null)
        .join('.')}`;
    },
  };
});
