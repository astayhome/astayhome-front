import { Inter } from 'next/font/google';
import type { Metadata } from 'next/types';
import {
  getFormatter,
  getNow,
  getTimeZone,
  getTranslations,
} from 'next-intl/server';
import { type ReactNode } from 'react';

import { Header } from '@/components/AppHeader/Header';
import MobileNavigation from '@/components/AppHeader/MobileNavigation';
import Footer from '@/components/Footer/Footer';
import SetCookies from '@/components/SetCookies';
import { AppConfig, baseUrl } from '@/utils/AppConfig';

type Props = {
  children: ReactNode;
  params: { locale: string };
};

const font = Inter({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700'],
});

export async function generateMetadata({
  params: { locale },
}: Omit<Props, 'children'>): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'Index' });
  const formatter = await getFormatter({ locale });
  const now = await getNow({ locale });
  const timeZone = await getTimeZone({ locale });
  const localParam = locale === 'en' ? '' : '/ru';
  const canonical = baseUrl + localParam;
  return {
    metadataBase: new URL(baseUrl),
    referrer: 'origin-when-cross-origin',
    category: 'booking',
    title: {
      template: `%s | Astay`,
      default: t('defaultTitle'),
    },
    description: t('meta_description'),
    keywords: t('meta_keywords'),
    creator: '@semklim',
    alternates: {
      canonical,
      languages: {
        en: [
          {
            url: baseUrl,
            title: 'English',
          },
        ],
        ru: [
          {
            url: `${baseUrl}/ru`,
            title: 'Русский',
          },
        ],
        'x-default': baseUrl,
      },
    },
    manifest: '/site.webmanifest',
    icons: [
      {
        rel: 'apple-touch-icon',
        url: '/apple-touch-icon.png',
        sizes: '180x180',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        url: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        url: '/favicon-16x16.png',
      },
      {
        rel: 'icon',
        url: '/favicon.ico',
      },
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#5bbad5',
      },
    ],
    openGraph: {
      title: t('defaultTitle'),
      description: t('meta_description'),
      url: './',
      siteName: AppConfig.name,
      images: [
        {
          url: `${baseUrl}/open-graph/astaya.jpg`, // Must be an absolute URL
          width: 1024,
          height: 682,
          type: 'image/jpeg',
        },
      ],
      locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: t('defaultTitle'),
      description: t('meta_description'),
      siteId: '',
      creator: '@astaya',
      creatorId: '',
      images: [`${baseUrl}/open-graph/astaya.jpg`], // Must be an absolute URL
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    other: {
      currentYear: formatter.dateTime(now, { year: 'numeric' }),
      creator: '@skliarovValerii',
      timeZone: timeZone || 'N/A',
      'msapplication-TileColor': '#da532c',
      'theme-color': '#ffffff',
    },
  };
}

export default function Layout({ children, params: { locale } }: Props) {
  return (
    <html lang={locale}>
      <head />
      <body className={font.className}>
        <Header locale={locale} />
        <div className="min-h-[calc(100vh-479px)] sm:min-h-[calc(100vh-325px)] md:min-h-[calc(100vh-521px)] lg:min-h-[calc(100vh-469px)] xl:min-h-[calc(100vh-405px)]">
          {children}
        </div>
        <Footer locale={locale} />
        <MobileNavigation locale={locale} />
        <SetCookies />
      </body>
    </html>
  );
}
