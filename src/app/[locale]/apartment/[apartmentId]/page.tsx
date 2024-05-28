/* eslint-disable @typescript-eslint/no-throw-literal */
/* eslint-disable @typescript-eslint/naming-convention */
import 'swiper/css';
import 'swiper/css/pagination';

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { unstable_setRequestLocale } from 'next-intl/server';
import { Suspense } from 'react';

import ContactUs from '@/components/ContactUs/ContactUs';
import Reservation from '@/components/Reservation/Reservation';
import Reviews from '@/components/Reviews/Reviews';
import Amenities from '@/components/UI/Amenities';
import Container from '@/components/UI/Container';
import Description from '@/components/UI/Description';
import Gallery from '@/components/UI/Gallery/Gallery';
import Loader from '@/components/UI/Loader';
import GoogleMap from '@/components/UI/Map';
import Title from '@/components/UI/Title';
import { ReservationProvider } from '@/context/store';
import getTranslation from '@/hooks/getTranslations';
import {
  getApartment,
  getApartments,
} from '@/libs/actions/getApartments/getApartments';
import { getCountReviews } from '@/libs/actions/getReviews/getReviews';
import { formatSeoDescription } from '@/libs/formatSeoDescription';
import { LocaleProvider } from '@/providers/localeProvired';
import { AppConfig, locales } from '@/utils/AppConfig';

type PageParams = {
  locale: string;
  apartmentId: string;
};

type PageProps = {
  params: PageParams;
};

export async function generateMetadata({
  params: { locale, apartmentId },
}: Omit<PageProps, 'children'>): Promise<Metadata> {
  const promiseApartment = getApartment({ params: { apartmentId } });

  const [apartment] = await Promise.all([promiseApartment]);

  if (!apartment) {
    notFound();
  }

  const { name, description } = getTranslation(apartment.translations, locale);
  const desc = formatSeoDescription(description);

  let image: OGImageDescriptor = {
    url: './open-graph/astaya.jpg',
    width: 1024,
    height: 682,
    type: 'image/jpg',
  };

  if (apartment?.images && apartment?.images[0]) {
    if (apartment.images[0]?.sizes?.s1920) {
      image = {
        url: apartment.images[0].sizes.s1920,
        width: 1920,
        height: 1080,
        type: 'image/webp',
      };
    } else if (apartment.images[0]?.url) {
      image = { url: apartment.images[0].url };
    }
  }

  return {
    title: name,
    description: desc,
    alternates: {
      canonical: './',
      languages: {
        en: [
          {
            url: `/apartment/${apartmentId}`,
            title: 'English',
          },
        ],
        ru: [
          {
            url: `/ru/apartment/${apartmentId}`,
            title: 'Русский',
          },
        ],
        'x-default': `/apartment/${apartmentId}`,
      },
    },
    openGraph: {
      title: name,
      description: desc,
      siteName: AppConfig.name,
      url: './',
      images: [image],
      locale,
      type: 'website',
    },
    twitter: {
      title: name,
      description: desc,
      images: [image], // Must be an absolute URL
    },
  };
}

export async function generateStaticParams() {
  const data = await getApartments({ limit: 5000 });
  const staticParams: PageParams[] = [];

  // @ts-ignore
  if (!data?.apartments || data?.cause?.code) {
    for (let i = 0; i < locales.length; i += 1) {
      const locale = locales[i];
      staticParams.push({ locale, apartmentId: '' });
    }
    return staticParams;
  }

  for (let i = 0; i < locales.length; i += 1) {
    const locale = locales[i];

    for (let j = 0; j < data.apartments.length; j += 1) {
      const id = data.apartments[j].id.toString();

      staticParams.push({ locale, apartmentId: id });
    }
  }
  return staticParams;
}

export const revalidate = 86400;

export default async function Apartment(props: PageProps) {
  unstable_setRequestLocale(props.params.locale);

  const promiseApartment: Promise<ApartmentFullData> = getApartment(props);
  const promiseCountReview = getCountReviews({
    apartmentId: Number(props.params.apartmentId),
  });

  const [apartment, countReviews] = await Promise.all([
    promiseApartment,
    promiseCountReview,
  ]);

  // @ts-ignore
  if (!apartment || !apartment.isVisible || apartment?.cause?.code) {
    notFound();
  }

  const {
    amenities,
    images,
    locationDetails,
    room_type,
    id,
    translations,
    in_complex,
  } = apartment;

  const { name } = getTranslation(translations, props.params.locale);
  const { city = '', country = '' } = getTranslation(
    locationDetails.translations,
    props.params.locale,
  );
  const { type = '' } = getTranslation(
    room_type.translations,
    props.params.locale,
  );
  const location: number[] = [
    Number(in_complex.geo_data[0].lat) || 51,
    Number(in_complex.geo_data[0].lng) || -0.09,
  ];

  return (
    <Suspense fallback={<Loader className="min-h-[calc(100vh-85px)]" />}>
      <main className="min-h-[calc(100vh-258px)] max-w-7xl md:mx-auto md:pt-5">
        <Container className="hidden md:block">
          <Title
            title={name}
            city={city}
            country={country}
            countReviews={countReviews}
          />
        </Container>
        <LocaleProvider>
          <Gallery images={images} name={name} />
        </LocaleProvider>
        <Container className="mt-4 block md:hidden">
          <Title
            title={name}
            city={city}
            country={country}
            countReviews={countReviews}
          />
        </Container>
        <Container>
          <section className=" mt-5 grid grid-cols-1 md:grid-cols-8 md:gap-8 lg:grid-cols-7 lg:gap-14 xl:gap-24">
            <Description
              className=" col-span-4 mt-10 md:mt-0"
              data={apartment}
            />
            <LocaleProvider>
              <ReservationProvider>
                <Reservation
                  className="order-first md:order-last md:col-span-4 lg:col-span-3"
                  apartmentData={apartment}
                  countReviews={countReviews}
                />
              </ReservationProvider>
            </LocaleProvider>
          </section>
          <LocaleProvider>
            <Amenities amenity={amenities} />
          </LocaleProvider>
          <Reviews
            locale={props.params.locale}
            apartmentId={id}
            roomType={type}
          />
          <GoogleMap center={location} />
          <ContactUs pageName="apartment" />
        </Container>
      </main>
    </Suspense>
  );
}
