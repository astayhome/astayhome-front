/* eslint-disable react/no-danger */
import Image, { type StaticImageData } from 'next/image';
import type { Metadata } from 'next/types';
import { useTranslations } from 'next-intl';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { Suspense } from 'react';
import sanitize from 'sanitize-html';

import ContactUs from '@/components/ContactUs/ContactUs';
import FAQ from '@/components/FAQ/FAQ';
import TransferForm from '@/components/TransferForm/TransferForm';
import Container from '@/components/UI/Container';
import Loader from '@/components/UI/Loader';
import { LocaleProvider } from '@/providers/localeProvired';
import img3 from '@/public/assets/images/cars/minibus.webp';
import img2 from '@/public/assets/images/cars/minivan.webp';
import img1 from '@/public/assets/images/cars/sedan.webp';
import img5 from '@/public/assets/images/cars/vip_minivan.webp';
import img4 from '@/public/assets/images/cars/vip_sedan.webp';
import { AppConfig, locales } from '@/utils/AppConfig';

type CarsData = {
  title: string;
  img: StaticImageData | string;
  desc: string;
};

export async function generateMetadata({
  params: { locale },
}: Omit<PageProps, 'children'>): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'TransfersPage' });
  return {
    title: {
      absolute: t('meta_title'),
    },
    description: t('meta_description'),
    keywords: t('meta_keywords'),
    alternates: {
      canonical: './',
      languages: {
        en: [
          {
            url: '/transfers',
            title: 'English',
          },
        ],
        ru: [
          {
            url: '/ru/transfers',
            title: 'Русский',
          },
        ],
        'x-default': '/transfers',
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

export default function Transfers(props: PageProps) {
  unstable_setRequestLocale(props.params.locale);
  const t = useTranslations('TransferPageText');
  const faq = useTranslations('FAQ.TransfersPage');

  const cars: CarsData[] = [
    {
      title: t('Sedan Car'),
      img: img1,
      desc: t.raw('Sedan Car Desc'),
    },
    {
      title: t('Minivan Car'),
      img: img2,
      desc: t.raw('Minivan Car Desc'),
    },
    {
      title: t('Minibus'),
      img: img3,
      desc: t.raw('Minibus Desc'),
    },
    {
      title: t('Vip Sedan Car'),
      img: img4,
      desc: t.raw('Vip Sedan Car Desc'),
    },
    {
      title: t('Vip Minivan Car'),
      img: img5,
      desc: t.raw('Vip Minivan Car Desc'),
    },
  ];

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
  ];

  return (
    <Suspense fallback={<Loader />}>
      <main className="min-h-[calc(100vh-258px)]">
        <LocaleProvider>
          <TransferForm className="h-[calc(100vh-85px)] max-h-[1200px]" />
        </LocaleProvider>
        <Container className="mx-auto mt-4 md:mt-8">
          <section>
            <h1 className="text-2xl font-semibold md:text-3xl">{t('h1')}</h1>
            <div
              className="*:mt-3"
              dangerouslySetInnerHTML={{ __html: sanitize(t.raw('Desc')) }}
            />
          </section>
          <Suspense fallback={<Loader />}>
            <section className="mx-auto mt-2 grid max-w-7xl grid-cols-[repeat(auto-fit,_minmax(250px,1fr))] gap-x-24 gap-y-5 md:mt-10 lg:grid-cols-[repeat(auto-fit,_minmax(300px,1fr))] lg:gap-x-36 lg:gap-y-10 xl:grid-cols-[repeat(auto-fit,_minmax(375px,1fr))]">
              {cars.map(({ title, img, desc }) => (
                <div
                  key={title}
                  className="col-span-1 mx-auto flex max-w-[375px] flex-col items-center justify-center"
                >
                  <Image
                    className="object-contain"
                    src={img}
                    width={375}
                    height={300}
                    loading="lazy"
                    placeholder="blur"
                    alt={title}
                  />
                  <h2 className="text-2xl font-semibold">{title}</h2>
                  <div
                    className="mt-5 "
                    dangerouslySetInnerHTML={{ __html: sanitize(desc) }}
                  />
                </div>
              ))}
            </section>
          </Suspense>
          <LocaleProvider>
            <FAQ
              pageName="transfer"
              faqData={faqData}
              className="mb-10 mt-20"
              classNameH2="text-2xl md:text-3xl font-bold"
            />
          </LocaleProvider>
          <Suspense>
            <ContactUs pageName="transfer" />
          </Suspense>
        </Container>
      </main>
    </Suspense>
  );
}
