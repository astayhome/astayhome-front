import { type StaticImageData } from 'next/image';
import type { Metadata } from 'next/types';
import { useTranslations } from 'next-intl';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import sanitize from 'sanitize-html';

import Hero from '@/components/AboutUs/Hero';
import TextBlock from '@/components/AboutUs/TextBlock/TextBlock';
import TwoImage from '@/components/AboutUs/TextBlock/TwoImage';
import ContactUs from '@/components/ContactUs/ContactUs';
import FAQ from '@/components/FAQ/FAQ';
import Container from '@/components/UI/Container';
import { LocaleProvider } from '@/providers/localeProvired';
import bg1 from '@/public/assets/images/aboutUs/1.webp';
import bg2 from '@/public/assets/images/aboutUs/2.webp';
import bg3 from '@/public/assets/images/aboutUs/3.webp';
import { locales } from '@/utils/AppConfig';

export type AboutPageData = {
  id: string;
  title: string;
  desc: string;
  img: [StaticImageData, StaticImageData];
};

type Data = {
  id: string;
  title: string;
  value: string;
};

export async function generateMetadata({
  params: { locale },
}: Omit<PageProps, 'children'>): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'AboutUsPage' });
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
            url: '/about-us',
            title: 'English',
          },
        ],
        ru: [
          {
            url: '/ru/about-us',
            title: 'Русский',
          },
        ],
        'x-default': '/about-us',
      },
    },
    openGraph: {
      title: t('meta_title'),
      description: t('meta_description'),
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

export default function AboutUs({ params: { locale } }: PageProps) {
  unstable_setRequestLocale(locale);
  const t = useTranslations('AboutUsPageText');
  const faq = useTranslations('FAQ.ForOwnersPage');
  const text = useTranslations('AboutUsPageText.Content');

  const aboutData: Data[] = [
    {
      id: '1',
      title: text('What_we_do.text.1.title'),
      value: text('What_we_do.text.1.value'),
    },
    {
      id: '2',
      title: text('What_we_do.text.2.title'),
      value: text('What_we_do.text.2.value'),
    },
    {
      id: '3',
      title: text('What_we_do.text.3.title'),
      value: text('What_we_do.text.3.value'),
    },
    {
      id: '4',
      title: text('What_we_do.text.4.title'),
      value: text('What_we_do.text.4.value'),
    },
    {
      id: '5',
      title: text('What_we_do.text.5.title'),
      value: text('What_we_do.text.5.value'),
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
    {
      question: faq('5.title'),
      answer: faq('5.value'),
    },
  ];

  return (
    <main className="min-h-[calc(100vh_-_258px)]">
      <Hero className="h-[30vh] max-h-[900px] sm:h-[40vh] lg:h-[45vh] xl:h-[70vh]" />
      <Container>
        <h2 className="mx-auto mt-10 max-w-7xl">
          <span className="text-2xl font-bold uppercase text-primary">
            {t('Main Text Title')}
          </span>{' '}
          {t('Main Text')}
        </h2>
        <div className="mx-auto mt-10 flex min-h-[550px] max-w-7xl flex-col-reverse items-center justify-center gap-x-14 md:flex-row xl:items-start xl:justify-between">
          <div className="flex flex-col items-center xl:block xl:max-w-[550px]">
            <h2
              className="self-start text-2xl font-semibold *:first:font-bold *:first:text-primary"
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{
                __html: sanitize(text.raw('What_we_do.title')),
              }}
            />
            <TwoImage className="mt-3 xl:hidden" images={[bg1, bg2]} />
            <ul className="mt-5 *:mt-3">
              {aboutData.map(({ id, title, value }) => (
                <li key={id}>
                  <span className="font-bold">{title}</span> {value}
                </li>
              ))}
            </ul>
          </div>
          <TwoImage className="hidden xl:flex" images={[bg1, bg2]} />
        </div>

        <TextBlock
          data={{
            id: '2aboutUs',
            title: text.raw('2.title'),
            desc: text.raw('2.value'),
            img: [bg1, bg3],
          }}
          revers
          className="mx-auto max-w-7xl"
        />
        <LocaleProvider>
          <FAQ
            pageName="aboutUs"
            faqData={faqData}
            className="mt-5 sm:mt-10"
            classNameH2="text-2xl md:text-3xl font-bold"
          />
        </LocaleProvider>
        <ContactUs pageName="aboutUs" />
      </Container>
    </main>
  );
}
