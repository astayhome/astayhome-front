import { notFound } from 'next/navigation';
import type { Metadata } from 'next/types';
import { getTranslations } from 'next-intl/server';

import LeaveReviewForm from '@/components/LeaveReviewForm/LeaveReviewForm';
import validationReviewToken from '@/libs/actions/validationReviewToken/validationReviewToken';
import { LocaleProvider } from '@/providers/localeProvired';
import { AppConfig } from '@/utils/AppConfig';

type LeaveReviewProps = {
  // eslint-disable-next-line react/no-unused-prop-types
  params: { locale: string };
  searchParams: { token: string };
};

export async function generateMetadata({
  params: { locale },
}: Omit<LeaveReviewProps, 'children'>): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'LeaveReviewPage' });
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

export default async function LeaveReview({ searchParams }: LeaveReviewProps) {
  const review = await validationReviewToken(searchParams.token);

  if (!review || review.status === 'error') {
    notFound();
  }

  return (
    <main className="feedback mx-auto h-full min-h-[calc(100vh-85px)] px-4  md:px-14">
      <LocaleProvider>
        <LeaveReviewForm tokenReview={searchParams.token} />
      </LocaleProvider>
    </main>
  );
}
