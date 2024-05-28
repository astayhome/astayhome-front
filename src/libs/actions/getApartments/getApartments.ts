import {
  ParamsValidation,
  QueryValidation,
} from '@/validations/ListingValidation';

import { fetchData } from '../helpers/fetchData';
import { baseQuery, NUMBER_OF_LISTINGS_TO_FETCH } from './fetchConfig';

type ZodRes = {
  success: boolean;
  data: {
    location: string;
    checkIn?: Date;
    checkOut?: Date;
    guests: number;
    rooms: number;
  };
};

interface GetApartmentsProps {
  searchParams?: PageSearchParams;
  limit?: number;
  offset?: number;
}

interface GetApartmentProps {
  params: { apartmentId: string | number };
}

interface ResApartments {
  count: number;
  apartments: ApartmentCardsData[];
}

export async function getApartments({
  searchParams,
  limit = NUMBER_OF_LISTINGS_TO_FETCH,
  offset = 0,
}: GetApartmentsProps): Promise<ResApartments | null> {
  try {
    if (!searchParams || Object.keys(searchParams).length <= 1) {
      const data = await fetchData<ReqApartmentsFields, ResApartments>(
        '/api/apartments',
        { ...baseQuery, limit, offset },
        ['/api/apartments'],
      );

      return data;
    }

    const params = {
      ...searchParams,
      rooms: Number(searchParams.rooms) || 1,
      guests: Number(searchParams.guests) || 1,
    };
    const {
      data: { rooms, guests },
    } = QueryValidation.safeParse(params) as ZodRes;

    const query: GetFromServer<ReqApartmentsFields> = {
      ...baseQuery,
      limit,
      offset,
      where: {
        bedrooms: { gte: rooms },
        guests: { gte: guests },
      },
    };

    const data = await fetchData<ReqApartmentsFields, ResApartments>(
      '/api/apartments',
      query,
      ['/api/apartments'],
    );

    return data;
  } catch (error: any) {
    console.log(error);
    return error;
  }
}

const defaultRequest: GetFromServer<ReqApartmentsFields> = {
  include: [
    'in_complex',
    'images',
    'locationDetails',
    'amenities',
    'room_type',
    'roomCategory',
  ],
};

export async function getApartment(
  { params }: GetApartmentProps,
  request = defaultRequest,
) {
  try {
    const newParams = {
      apartmentId: Number(params.apartmentId),
    };
    const {
      data: { apartmentId },
    } = ParamsValidation.safeParse(newParams) as {
      success: boolean;
      data: { apartmentId: number };
    };

    const data = await fetchData<ReqApartmentsFields, ApartmentFullData>(
      `/api/apartments/${apartmentId}`,
      request,
      [`/api/apartments/${apartmentId}`],
    );
    return data;
  } catch (error: any) {
    console.log(error);
    return error;
  }
}
