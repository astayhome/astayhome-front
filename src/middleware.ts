import type { NextRequest } from 'next/server';
import createMiddleware from 'next-intl/middleware';

import { AppConfig } from './utils/AppConfig';

export default async function middleware(request: NextRequest) {
  const { cookies } = request;
  const tzOffset = cookies.get('time-zone-offset')?.value || '';
  const timeZone = cookies.get('time-zone')?.value || '';

  // Create and call the next-intl middleware
  const handleI18nRouting = createMiddleware({
    locales: AppConfig.locales,
    localePrefix: AppConfig.localePrefix,
    pathnames: AppConfig.pathnames,
    defaultLocale: 'en',
    localeDetection: false,
  });

  const response = handleI18nRouting(request);

  response.headers.set('time-zone', timeZone);
  response.headers.set('time-zone-offset', tzOffset);

  return response;
}

export const config = {
  matcher: ['/((?!_next|.*\\..*).*)'],
};
