import {
  ComplexValidation,
  type PageComplex,
} from '@/validations/ComlexValidation';

import { fetchData } from '../helpers/fetchData';
import { baseQuery } from './fetchConfig';

interface GetComplexesProps {
  params: { complexId: string };
}

export type ComplexesData = Omit<Complexes, 'images'> & {
  images: ImagesData[];
};

export type ComplexData = Omit<
  Complexes,
  'images' | 'apartments' | 'locationDetails'
> & {
  images: ImagesData[];
  apartments: ApartmentWithRoomTypeAndImages[];
  locationDetails: LocationDetails;
};

export async function getComplexes() {
  try {
    const data = await fetchData<ReqComplexesFields, ComplexesData[]>(
      '/api/complexes',
      {
        ...baseQuery,
        include: [{ relation: 'images' }],
      },
      ['/api/complexes'],
    );

    return data;
  } catch (error: any) {
    console.log(error);
    return null;
  }
}

export async function getComplex({ params }: GetComplexesProps) {
  try {
    const newParams = {
      complexId: Number(params.complexId),
    };

    const {
      data: { complexId },
    } = ComplexValidation.safeParse(newParams) as {
      success: boolean;
      data: PageComplex;
    };

    const request: GetFromServer<ReqComplexesFields> = {
      include: [
        { relation: 'images' },
        { relation: 'locationDetails' },
        {
          relation: 'apartments',
          scope: {
            include: [{ relation: 'room_type' }, { relation: 'images' }],
          },
        },
      ],
    };

    const data = await fetchData<ReqComplexesFields, ComplexData>(
      `/api/complexes/${complexId}`,
      request,
      [`/api/complexes/${complexId}`],
    );
    return data;
  } catch (error: any) {
    console.log(error);
    return null;
  }
}
