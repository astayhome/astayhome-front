import { createLocalizedPathnamesNavigation } from 'next-intl/navigation';

import { AppConfig } from '@/utils/AppConfig';

export const { Link, redirect, usePathname, useRouter } =
  createLocalizedPathnamesNavigation({
    locales: AppConfig.locales,
    pathnames: AppConfig.pathnames,
    localePrefix: AppConfig.localePrefix,
  });
