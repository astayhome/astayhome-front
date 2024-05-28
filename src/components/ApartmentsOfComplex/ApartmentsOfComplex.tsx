import Image from 'next/image';
import { useTranslations } from 'next-intl';

import getTranslation from '@/hooks/getTranslations';
import { Link } from '@/libs/i18nNavigation';

interface ApartmentsOfComplexProps {
  className?: string;
  apartments: ApartmentWithRoomTypeAndImages[];
  locale?: string;
}

export default function ApartmentsOfComplex(props: ApartmentsOfComplexProps) {
  const { className = '', apartments, locale, ...otherProps } = props;
  const t = useTranslations('Complex');
  if (!apartments || apartments.length <= 0) {
    return (
      <section className={`${className}`} {...otherProps}>
        <h2 className="mt-10 text-lg font-medium lg:text-3xl">
          {t('Apartments in this complex')}
        </h2>
        <div className=" mt-8 flex flex-col items-center justify-center text-2xl font-semibold md:mt-10">
          <h3>{t('No apartments have been added')}</h3>
          <p className="underline">{t('Please come back later')}</p>
        </div>
        <hr className="my-5 md:my-10" />
      </section>
    );
  }

  return (
    <section className={`${className}`} {...otherProps}>
      <h2 className="mt-10 text-lg font-medium lg:text-3xl">
        {t('Apartments in this complex')}
      </h2>
      <div className="mt-3 flex flex-wrap items-center justify-center gap-7 text-white md:mt-10">
        {apartments.map(
          ({
            id,
            room_type: { translations },
            images,
            guests = 0,
            bedrooms = 0,
          }) => {
            const { type } = getTranslation(translations, locale);

            let image = '/open-graph/astaya.jpg';
            if (images && images[0] && images[0]?.url) {
              image = images[0].url;
            }

            return (
              <Link
                href={{
                  pathname: '/apartment/[apartmentId]',
                  params: {
                    apartmentId: id,
                  },
                }}
                key={id}
                className="flex-auto overflow-hidden rounded-xl transition-all duration-[400ms] hover:scale-105 sm:max-w-64"
              >
                <Image
                  src={image}
                  width={650}
                  height={650}
                  loading="lazy"
                  quality={70}
                  alt={type}
                  className="size-full object-cover"
                />
                <div className="min-h-40 rounded-b-xl border border-placeholder px-4 py-6 text-textPrim">
                  <h3 className="text-xl font-medium uppercase sm:text-2xl">
                    {type}
                  </h3>
                  <ul>
                    <li>
                      {guests} {t('guests', { count: guests })}
                    </li>
                    <li>
                      {bedrooms} {t('rooms', { count: bedrooms })}
                    </li>
                  </ul>
                </div>
              </Link>
            );
          },
        )}
      </div>
    </section>
  );
}
