import 'swiper/css';
import 'swiper/css/pagination';

import { notFound } from 'next/navigation';
import type { Metadata } from 'next/types';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

import ApartmentsOfComplex from '@/components/ApartmentsOfComplex/ApartmentsOfComplex';
import ContactUs from '@/components/ContactUs/ContactUs';
import Container from '@/components/UI/Container';
import { TextDescription } from '@/components/UI/Description';
import Gallery from '@/components/UI/Gallery/Gallery';
import Title from '@/components/UI/Title';
import getTranslation from '@/hooks/getTranslations';
import {
  getComplex,
  getComplexes,
} from '@/libs/actions/getComplexes/getComplexes';
import { formatSeoDescription } from '@/libs/formatSeoDescription';
import { LocaleProvider } from '@/providers/localeProvired';
import { AppConfig, locales } from '@/utils/AppConfig';

type PageParams = { locale: string; complexId: string };
type PageProps = { params: PageParams };

type ComplexIdProps = {
  params: PageParams;
};

export async function generateMetadata({
  params,
}: Omit<PageProps, 'children'>): Promise<Metadata> {
  const { locale, complexId } = params;
  const promiseT = getTranslations({ locale, namespace: 'Complex' });
  const promiseComplex = getComplex({ params });

  const [t, complex] = await Promise.all([promiseT, promiseComplex]);

  if (!complex) {
    notFound();
  }

  const { name, description } = getTranslation(complex.translations, locale);

  const desc = formatSeoDescription(description);
  const title = t('meta_title', { name });

  let image: OGImageDescriptor = {
    url: './open-graph/astaya.jpg',
    width: 1024,
    height: 682,
    type: 'image/jpg',
  };

  if (complex?.images[0]) {
    if (complex.images[0]?.sizes?.s1920) {
      image = {
        url: complex.images[0].sizes.s1920,
        width: 1920,
        height: 1080,
        type: 'image/webp',
      };
    } else if (complex.images[0]?.url) {
      image = { url: complex.images[0].url };
    }
  }

  return {
    title,
    description: desc,
    keywords: t('meta_keywords', { name }),
    alternates: {
      canonical: './',
      languages: {
        en: [
          {
            url: `/complexes/${complexId}`,
            title: 'English',
          },
        ],
        ru: [
          {
            url: `/ru/complexes/${complexId}`,
            title: 'Русский',
          },
        ],
        'x-default': `/complexes/${complexId}`,
      },
    },
    openGraph: {
      title,
      description: desc,
      siteName: AppConfig.name,
      url: './',
      images: [image],
      locale,
      type: 'website',
    },
    twitter: {
      title,
      description: desc,
      images: [image], // Must be an absolute URL
    },
  };
}

export async function generateStaticParams() {
  const complexes = await getComplexes();
  const staticParams: PageParams[] = [];

  for (let i = 0; i < locales.length; i += 1) {
    const locale = locales[i];

    for (let j = 0; j < complexes.length; j += 1) {
      const id = complexes[j].id.toString();

      staticParams.push({ locale, complexId: id });
    }
  }
  return staticParams;
}

export const revalidate = 86400;

export default async function Complex({ params }: ComplexIdProps) {
  unstable_setRequestLocale(params.locale);
  const t = await getTranslations({
    locale: params.locale,
    namespace: 'Complex',
  });
  const complex = await getComplex({ params });

  if (!complex) {
    notFound();
  }

  const { locationDetails, images, apartments, translations } = complex;

  const { city = '', country = '' } = getTranslation(
    locationDetails.translations,
    params.locale,
  );

  const { name, description } = getTranslation(translations, params.locale);

  return (
    <main className="max-w-7xl pt-5 md:mx-auto">
      <Container className="hidden md:block">
        <Title title={name} city={city} country={country} showRating={false} />
      </Container>
      <LocaleProvider>
        <Gallery name={name} images={images} />
      </LocaleProvider>
      <Container className="mt-4 block md:hidden">
        <Title title={name} city={city} country={country} showRating={false} />
      </Container>
      <Container>
        <hr className="mt-5 md:mt-10" />
        <section>
          <TextDescription text={description} title={t('About complex')} />
        </section>
        <hr className="mt-5 md:mt-10" />
        <ApartmentsOfComplex apartments={apartments} locale={params.locale} />
        <ContactUs pageName="complex" />
      </Container>
    </main>
  );
}
