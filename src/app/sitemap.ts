import type { MetadataRoute } from 'next';

import { getApartments } from '@/libs/actions/getApartments/getApartments';
import { getComplexes } from '@/libs/actions/getComplexes/getComplexes';
import { baseUrl } from '@/utils/AppConfig';

export const revalidate = 3600 * 12;

async function getDataForSitemap() {
  try {
    const promiseApartments = await getApartments({ limit: 5000 });
    const promiseComplexes = await getComplexes();

    const [apartments, complexes] = await Promise.all([
      promiseApartments,
      promiseComplexes,
    ]);

    const res = {
      apartments: apartments.apartments.map(({ id }) => {
        return {
          url: `${baseUrl}/apartment/${id}`,
          lastModified: new Date(),
          alternates: {
            languages: {
              en: `${baseUrl}/apartment/${id}`,
              ru: `${baseUrl}/ru/apartment/${id}`,
            },
          },
        };
      }),

      complexes: complexes.map(({ id }) => {
        return {
          url: `${baseUrl}/complexes/${id}`,
          lastModified: new Date(),
          alternates: {
            languages: {
              en: `${baseUrl}/complexes/${id}`,
              ru: `${baseUrl}/ru/complexes/${id}`,
            },
          },
        };
      }),
    };

    return res;
  } catch (error) {
    console.log('SITEMAP_ERROR -->', error);

    return { apartments: [], complexes: [] };
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { apartments, complexes } = await getDataForSitemap();

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${baseUrl}`,
          ru: `${baseUrl}/ru`,
        },
      },
    },
    {
      url: `${baseUrl}/complexes`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${baseUrl}/complexes`,
          ru: `${baseUrl}/ru/complexes`,
        },
      },
    },
    {
      url: `${baseUrl}/transfers`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${baseUrl}/transfers`,
          ru: `${baseUrl}/ru/transfers`,
        },
      },
    },
    {
      url: `${baseUrl}/for-owners`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${baseUrl}/for-owners`,
          ru: `${baseUrl}/ru/for-owners`,
        },
      },
    },
    {
      url: `${baseUrl}/about-us`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${baseUrl}/about-us`,
          ru: `${baseUrl}/ru/about-us`,
        },
      },
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${baseUrl}/privacy-policy`,
          ru: `${baseUrl}/ru/privacy-policy`,
        },
      },
    },
    ...apartments,
    ...complexes,
  ];
}
