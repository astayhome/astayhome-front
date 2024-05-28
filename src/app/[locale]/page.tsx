import { Suspense } from 'react';

import ContactUs from '@/components/ContactUs/ContactUs';
import ListingSection from '@/components/listings/ListingSection';
import SectionSkeleton from '@/components/listings/skeleton/SectionSkeleton';
import MainHeroTitle from '@/components/MainHeroTitle/MainHeroTitle';
import Reviews from '@/components/Reviews/Reviews';
import ReviewsSkeleton from '@/components/Reviews/ReviewsSkeleton';
import Container from '@/components/UI/Container';
import Loader from '@/components/UI/Loader';
import { LocaleProvider } from '@/providers/localeProvired';

export default function Index({
  params: { locale },
  searchParams,
}: PageProps<PageSearchParams>) {
  return (
    <Container className="mx-auto mt-24 flex-auto md:mt-60 xl:mt-44">
      <main>
        <LocaleProvider>
          <MainHeroTitle />
        </LocaleProvider>
        <Suspense fallback={<SectionSkeleton />}>
          <ListingSection searchParams={searchParams} />
        </Suspense>
        <Suspense fallback={<ReviewsSkeleton />}>
          <Reviews locale={locale} />
        </Suspense>
        <Suspense fallback={<Loader />}>
          <ContactUs pageName="main" />
        </Suspense>
      </main>
    </Container>
  );
}
