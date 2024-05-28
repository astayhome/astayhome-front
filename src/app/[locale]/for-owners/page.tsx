import type { Metadata } from 'next/types';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { Suspense } from 'react';

import FAQ from '@/components/FAQ/FAQ';
import BookingChannels from '@/components/ForOwners/BookingChannels';
import Hero from '@/components/ForOwners/Hero';
import Map from '@/components/ForOwners/Map/Map';
import PackagesOfServices from '@/components/ForOwners/PackagesOfServices/PackagesOfServices';
import Services from '@/components/ForOwners/Services/Services';
import ProfitCalculator from '@/components/ProfitCalculator/ProfitCalculator';
import Loader from '@/components/UI/Loader';
import getContacts from '@/libs/actions/getContacts/getContacts';
import { LocaleProvider } from '@/providers/localeProvired';
import { AppConfig, locales } from '@/utils/AppConfig';

export async function generateMetadata({
  params: { locale },
}: Omit<PageProps, 'children'>): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'ForOwnersPage' });
  return {
    title: t('meta_title'),
    description: t('meta_description'),
    keywords: t('meta_keywords'),
    alternates: {
      canonical: './',
      languages: {
        en: [
          {
            url: '/for-owners',
            title: 'English',
          },
        ],
        ru: [
          {
            url: '/ru/for-owners',
            title: 'Русский',
          },
        ],
        'x-default': '/for-owners',
      },
    },
    openGraph: {
      title: t('meta_title'),
      description: t('meta_description'),
      siteName: AppConfig.name,
      url: './',
      images: [
        {
          url: './open-graph/astaya.jpg', // Must be an absolute URL
          width: 1024,
          height: 682,
          type: 'image/jpeg',
        },
      ],
      locale,
      type: 'website',
    },
  };
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function ForOwners(props: PageProps) {
  unstable_setRequestLocale(props.params.locale);
  const faq = await getTranslations('FAQ.ForOwnersPage');
  const contacts = await getContacts();
  const faqData: FAQData[] = [
    {
      question: faq('1.title'),
      answer: faq('1.value'),
    },
    {
      question: faq('2.title'),
      answer: faq('2.value'),
    },
    {
      question: faq('3.title'),
      answer: faq('3.value'),
    },
    {
      question: faq('4.title'),
      answer: faq('4.value'),
    },
    {
      question: faq('5.title'),
      answer: faq('5.value'),
    },
    {
      question: faq('6.title'),
      answer: faq('6.value'),
    },
    {
      question: faq('7.title'),
      answer: faq('7.value'),
    },
    {
      question: faq('8.title'),
      answer: faq('8.value'),
    },
    {
      question: faq('9.title'),
      answer: faq('9.value'),
    },
    {
      question: faq('10.title'),
      answer: faq('10.value'),
    },
  ];
  return (
    <Suspense fallback={<Loader />}>
      <main className="min-h-[calc(100vh-85px)]">
        <LocaleProvider>
          <Hero
            contacts={contacts}
            className="h-[calc(100vh-85px)] max-h-[1200px]"
          />
          <ProfitCalculator
            pageName="forOwners"
            className="mx-auto max-w-7xl px-4 xs:px-8 md:px-10 xl:px-20"
          />
        </LocaleProvider>
        <Services className="mx-auto bg-bgAccent px-4 py-5 xs:px-8 md:px-10 xl:px-20" />
        <BookingChannels className="mx-auto mt-10 max-w-7xl px-4 xs:px-8 md:px-10 xl:px-20" />
        <LocaleProvider>
          <PackagesOfServices className="mt-7 bg-bgAccent px-4 xs:px-8 md:px-10 xl:px-20" />
          <FAQ
            faqData={faqData}
            classNameH2="text-start text-2xl font-bold md:text-4xl"
            className="mx-auto mt-7 max-w-7xl px-4 xs:px-8 md:px-10 xl:px-20"
          />
          <Map contacts={contacts} className=" my-10 px-5 sm:mt-14 md:px-0" />
        </LocaleProvider>
      </main>
    </Suspense>
  );
}
