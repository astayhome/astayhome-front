import type {
  LocalePrefix,
  Pathnames,
} from 'node_modules/next-intl/dist/types/src/shared/types';

export const locales = ['en', 'ru'];

const pathnames = {
  '/': '/',
  '/complexes': '/complexes',
  '/transfers': '/transfers',
  '/for-owners': '/for-owners',
  '/about-us': '/about-us',
  '/privacy-policy': '/privacy-policy',
  '/apartment/leave-review': '/apartment/leave-review',
  '/apartment/payment': '/apartment/payment',
  '/complexes/[complexId]': '/complexes/[complexId]',
  '/apartment/[apartmentId]': '/apartment/[apartmentId]',
} satisfies Pathnames<typeof locales>;

const localePrefix: LocalePrefix = 'as-needed';

export const AppConfig = {
  name: 'Astay',
  defaultLocale: 'en',
  locales,
  localePrefix,
  pathnames,
};

/**
 * This is used for telling Next.js if the Website is deployed on Vercel
 *
 * Can be used for conditionally enabling features that we know are Vercel only
 *
 * @see https://vercel.com/docs/concepts/projects/environment-variables/system-environment-variables#framework-environment-variables
 */
export const VERCEL_ENV = process.env.NEXT_PUBLIC_VERCEL_ENV || undefined;

export const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL || '';
export const localStorSearchKey =
  process.env.NEXT_PUBLIC_LOCALESTOR_SEARCH || 'astay_home_search';
export const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

export type AppPathnames = keyof typeof pathnames;
