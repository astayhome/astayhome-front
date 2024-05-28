// import { unstable_setRequestLocale } from 'next-intl/server';
import Image from 'next/image';
import type { Metadata } from 'next/types';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { Suspense } from 'react';

import ContactUs from '@/components/ContactUs/ContactUs';
import Container from '@/components/UI/Container';
import getTranslation from '@/hooks/getTranslations';
import {
  type ComplexesData,
  getComplexes,
} from '@/libs/actions/getComplexes/getComplexes';
import { Link } from '@/libs/i18nNavigation';
import { AppConfig, locales } from '@/utils/AppConfig';
import { defBlur } from '@/utils/defBlurImg';

import SkeletonComplex from './[complexId]/Skeleton';

type PageParams = { locale: string; complexes: ComplexesData[] | [] };

type PageProps = {
  params: PageParams;
};

export async function generateMetadata({
  params: { locale },
}: Omit<PageProps, 'children'>): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'Complexes' });
  return {
    title: t('meta_title'),
    description: t('meta_description'),
    keywords: t('meta_keywords'),
    alternates: {
      canonical: './',
      languages: {
        en: [
          {
            url: '/complexes',
            title: 'English',
          },
        ],
        ru: [
          {
            url: '/ru/complexes',
            title: 'Русский',
          },
        ],
        'x-default': '/complexes',
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
          type: 'image/jpg',
        },
      ],
      locale,
      type: 'website',
    },
  };
}

export const revalidate = 86400;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function Complexes({ params: { locale } }: PageProps) {
  unstable_setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'Complexes' });
  const complexes = (await getComplexes()) || [];

  return (
    <Container className="mx-auto min-h-[calc(100vh-258px)]">
      <main>
        <h1 className="inline-block pt-5 text-2xl font-medium lg:text-4xl">
          {t('Complexes')}
        </h1>
        <section className="mx-auto mt-5 flex max-w-7xl flex-wrap items-center justify-center  *:my-3 sm:*:m-3 lg:mt-12">
          <Suspense fallback={<SkeletonComplex />}>
            {complexes.map(({ id, images, translations }, i) => {
              const { name } = getTranslation(translations, locale);

              let image = '/open-graph/astaya.jpg';
              if (images) {
                if (images[0]?.sizes?.s1920) {
                  image = images[0].sizes.s1920;
                } else if (images[0].url) {
                  image = images[0].url;
                }
              }
              return (
                <div
                  key={id}
                  className="relative flex flex-auto overflow-hidden rounded-lg transition-transform duration-300 hover:scale-105 sm:flex-[1_1_250px] lg:flex-[1_1_350px]"
                >
                  <Image
                    src={image}
                    alt={name}
                    width={1920}
                    height={1080}
                    placeholder="blur"
                    blurDataURL={defBlur}
                    priority={i < 2}
                    loading={i > 2 ? 'lazy' : 'eager'}
                    quality={80}
                  />
                  <div className="inset-full absolute flex flex-col items-center justify-center gap-y-5">
                    <h2 className="rounded-lg bg-black/70 px-2 py-1 text-center text-xl font-bold text-white xs:text-xl sm:px-3 sm:py-2 sm:text-lg md:text-xl xl:text-2xl">
                      {name}
                    </h2>
                    <Link
                      className="inset-full absolute z-10"
                      href={{
                        pathname: '/complexes/[complexId]',
                        params: {
                          complexId: id,
                        },
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </Suspense>
        </section>
        <ContactUs pageName="complex" />
      </main>
    </Container>
  );
}
