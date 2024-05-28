export const NUMBER_OF_REVIEWS_TO_FETCH = 7;
export const baseReviewQuery: GetFromServer<ReqReviewFields> = {
  limit: NUMBER_OF_REVIEWS_TO_FETCH,
  where: {
    status: true,
  },
  // fields: {
  //   id: true,
  //   avatar: true,
  //   name: true,
  //   review: true,
  //   reviewDate: true,
  //   roomType: true,
  //   reiting_score: true,
  // },
};
