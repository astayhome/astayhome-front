/* eslint-disable @typescript-eslint/naming-convention */

import { notFound } from 'next/navigation';
import type { Metadata } from 'next/types';
import { getTranslations } from 'next-intl/server';
import { Suspense } from 'react';

import ContactUs from '@/components/ContactUs/ContactUs';
import PaymentInfo from '@/components/PaymentInfo/PaymentInfo';
import Reviews from '@/components/Reviews/Reviews';
import Amenities from '@/components/UI/Amenities';
import Container from '@/components/UI/Container';
import Description from '@/components/UI/Description';
import Gallery from '@/components/UI/Gallery/Gallery';
import Loader from '@/components/UI/Loader';
import GoogleMap from '@/components/UI/Map';
import Title from '@/components/UI/Title';
import getTranslation from '@/hooks/getTranslations';
import { getApartment } from '@/libs/actions/getApartments/getApartments';
import { getCountReviews } from '@/libs/actions/getReviews/getReviews';
import validationBookingToken from '@/libs/actions/validationBookingToken/validationBookingToken';
import { LocaleProvider } from '@/providers/localeProvired';
import { AppConfig } from '@/utils/AppConfig';

type PaymentProps = {
  params: { locale: string; apartmentId: string; token: string };
  searchParams: { token: string };
};

export async function generateMetadata({
  params: { locale },
}: Omit<PaymentProps, 'children'>): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'PaymentPage' });
  return {
    title: t('meta_title'),
    description: t('meta_description'),
    alternates: {
      canonical: '',
    },
    openGraph: {
      title: t('meta_title'),
      description: t('meta_description'),
      siteName: AppConfig.name,
      url: './',
      images: [
        {
          url: './open-graph/astaya.jpg',
          width: 1024,
          height: 682,
          type: 'image/jpg',
        },
      ],
      locale,
      type: 'website',
    },
    twitter: {
      title: t('meta_title'),
      description: t('meta_description'),
      images: [
        {
          url: './open-graph/astaya.jpg',
          width: 1024,
          height: 682,
          type: 'image/jpg',
        },
      ],
    },
  };
}

export const revalidate = 0;

export default async function Payment(props: PaymentProps) {
  const validate = await validationBookingToken(props.searchParams.token);

  if (!validate?.data || validate.status === 'error') notFound();

  const { apartmentId } = validate.data;

  const promiseApartment: Promise<ApartmentFullData> = getApartment({
    params: { apartmentId },
  });
  const promiseCountReview = getCountReviews({
    apartmentId: Number(apartmentId),
  });

  const [apartment, countReviews] = await Promise.all([
    promiseApartment,
    promiseCountReview,
  ]);

  if (!apartment) {
    notFound();
  }

  const { amenities, images, room_type, id, translations, in_complex } =
    apartment;

  const { name } = getTranslation(translations, props.params.locale);
  const { city = '', country = '' } = getTranslation(
    apartment.locationDetails.translations,
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
            <PaymentInfo
              data={validate.data}
              className="order-first md:order-last md:col-span-4 lg:col-span-3"
            />
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
