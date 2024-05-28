'use client';

import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import { useState } from 'react';

import getTranslation from '@/hooks/getTranslations';

interface AmenitiesProps {
  className?: string;
  amenity: Amenity[];
}

export default function Amenities(props: AmenitiesProps) {
  const { className = '', amenity = [], ...otherProps } = props;
  const [amenities, setAmenities] = useState(amenity.slice(0, 5));
  const [showMore, setShowMore] = useState(false);
  const t = useTranslations('Amenities');
  const locale = useLocale();

  const onClick = () => {
    if (showMore) {
      setShowMore(false);
      setAmenities([...amenity.slice(0, 5)]);
      return;
    }
    setShowMore(true);
    setAmenities([...amenities, ...amenity.slice(5)]);
  };
  return (
    <section className={`${className} mt-5 md:mt-10`} {...otherProps}>
      <h2 className="text-lg font-medium lg:text-3xl">
        {t('What this place offers')}
      </h2>
      <div className="mt-3 flex flex-col items-center justify-center md:mt-7 md:justify-evenly lg:flex-row">
        <div className="grid w-full grid-cols-[repeat(auto-fill,_minmax(120px,_1fr))] *:mx-2 *:my-3 md:grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] md:*:mx-3 md:*:my-4">
          {amenities.map((data) => {
            const { id, translations, icon } = data;
            const { title, description } = getTranslation(translations, locale);
            const formatTitle = title.charAt(0).toUpperCase() + title.slice(1);
            return (
              <div key={id} className="flex items-center" title={description}>
                <Image
                  className="mr-3"
                  width={30}
                  height={30}
                  src={icon}
                  loading="lazy"
                  alt={title}
                />
                <p className="line-clamp-1">{formatTitle}</p>
              </div>
            );
          })}
        </div>
        <div className="mt-10 lg:mt-0 lg:flex-auto">
          <button
            type="button"
            className="h-14 w-60 rounded-lg border border-textPrim px-4 py-2 font-semibold hover:bg-gray-light"
            onClick={onClick}
          >
            {showMore
              ? t('Show less')
              : t(`Show all amenities`, { count: amenity.length })}
          </button>
        </div>
      </div>
    </section>
  );
}
