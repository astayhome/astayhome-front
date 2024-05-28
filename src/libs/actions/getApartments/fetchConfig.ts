export const NUMBER_OF_LISTINGS_TO_FETCH = 10;

export const baseQuery: GetFromServer<ReqApartmentsFields> = {
  where: {
    isVisible: true,
  },
  include: ['images', 'locationDetails', 'roomCategory'],
};
