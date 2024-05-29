/* eslint-disable react/no-danger */
import { getLocale, getTranslations } from 'next-intl/server';
import sanitizeHtml from 'sanitize-html';

import getTranslation from '@/hooks/getTranslations';

import { Dot } from '../svg';

interface DescriptionProps {
  className?: string;
  data: ApartmentFullData;
}

interface TextDescriptionProps {
  className?: string;
  text: string;
  title: string;
}

export function TextDescription(props: TextDescriptionProps) {
  const { className = '', text, title, ...otherProps } = props;
  return (
    <div className={`${className} mt-5`} {...otherProps}>
      <h2 className="text-lg font-medium lg:text-3xl">{title}</h2>
      <div
        className="mt-3"
        dangerouslySetInnerHTML={{ __html: sanitizeHtml(text) }}
      />
    </div>
  );
}

export default async function Description(props: DescriptionProps) {
  const { className = '', data, ...otherProps } = props;
  const locale = await getLocale();
  const t = await getTranslations('Description');
  const {
    roomCategory,
    locationDetails,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    guests = 0,
    bedrooms = 0,
    bathrooms = 0,
    translations,
  } = data;

  const { description } = getTranslation(translations, locale);
  const { category } = getTranslation(roomCategory?.translations, locale);
  const { country } = getTranslation(locationDetails?.translations, locale);

  return (
    <div className={`${className} flex flex-col`} {...otherProps}>
      <div>
        <h2 className="text-lg font-medium first-letter:uppercase lg:text-3xl">
          {category} {t('Room')} {t('in')} {t('Pattaya')}, {country}
        </h2>
        <div className="flex flex-wrap items-center gap-2 text-sm">
          <div className="flex items-center justify-center gap-1">
            <span itemProp="ratingValue">
              {guests} {t('guests', { count: guests })}
            </span>
          </div>
          <Dot className="size-1" />
          <div className="flex items-center justify-center gap-2">
            <span>
              {bedrooms} {t('bedroom', { count: bedrooms })}
            </span>
          </div>
          <Dot className="size-1" />
          <div className="flex items-center justify-center gap-2">
            <span>
              {bathrooms} {t('bathroom', { count: bathrooms })}
            </span>
          </div>
        </div>
      </div>
      <hr className="mt-5" />
      {/* <Statistic className="mt-5 md:mt-10" /> */}
      <TextDescription text={description} title={t('About apartment')} />
      <hr className="mt-5 md:mt-10" />
    </div>
  );
}
