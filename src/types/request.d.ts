type ReqHostContacts = {
  id?: boolean;
  phone?: boolean;
  email?: boolean;
  name?: boolean;
  telegram?: boolean;
  whatsapp?: boolean;
  instagram?: boolean;
  youtube?: boolean;
  firstCardOwnerName?: boolean;
  secondCardOwnerName?: boolean;
  firstCardNumber?: boolean;
  secondCardNumber?: boolean;
  firstCardDescription?: boolean;
  firstCardProvider?: boolean;
  secondCardProvider?: boolean;
  secondCardDescription?: boolean;
  address?: boolean;
  workTime?: boolean;
};

type ReqComplexesFields = {
  id?: boolean;
  name?: boolean;
  description?: boolean;
  address?: boolean;
  images?: boolean;
  geo_data?: boolean;
  complexServicesIds?: any;
  location_id?: boolean;
};

type ReqApartmentsFields = {
  id?: boolean;
  name?: boolean;
  description?: boolean;
  host_name?: boolean;
  guests?: boolean;
  bathrooms?: boolean;
  bedrooms?: boolean;
  beds?: boolean;
  neighbourhood?: boolean;
  disabledDates?: boolean;
  price?: boolean;
  price_low_season?: boolean;
  price_high_season?: boolean;
  discount?: boolean;
  isAvailable?: boolean;
  complex_id?: boolean;
  location_id?: boolean;
  isVisible?: boolean;
  oldPrice?: boolean;
  number_of_reviews?: boolean;
  availability_365?: boolean;
  review_scores_rating?: boolean;
  room_type_id?: boolean;
};

type ResBooking = {
  message: string;
  status: string;
  data: Booking | null;
};

interface Booking {
  id: number;
  name: string;
  location: string;
  email: string;
  phoneNumber: string;
  checkIn: string;
  checkOut: string;
  paymentStatus: boolean;
  isAvailableApart: boolean;
  paymentUrl: string;
  guests: Guests;
  maxGuests: number;
  maxRooms: number;
  bookingAmount: any;
  price: number;
  oldPrice: any;
  apartmentId: number;
  customerId: number;
  isArchived: boolean;
  isReviewed: boolean;
  status: string;
  discount: number;
  notes: string;
  paymentMethod: any;
  actuallyPaid: number;
  bookingDates: string[];
  createdAt: string;
  originalApartmentPrice: number;
  priceOfBooking: number;
  discountFromApartment: number;
  customer: Customer;
  transfers: {
    from: TransfersFromAndTo;
    to: TransfersFromAndTo;
  };
  hostContacts: HostContacts;
}

type Guests = {
  guests: number;
  rooms: number;
};

interface Customer {
  id: number;
  name: string;
  email: string;
  phone: any;
  birthDate: any;
  address: string;
  country: string;
  gender: any;
  additionalContactInfo: string;
  additionalNotes: string;
  firstRequest: string;
  accountStatus: string;
  createdAt: string;
}

interface TransfersFromAndTo {
  id: number;
  type: string;
  date: string;
  flightNumber: any;
  nameOfSignage: any;
  guests: number;
  amountBags: number;
  phone: string;
  city: string;
  time: string;
  notes: any;
  comments: any;
  status: boolean;
  isArchived: boolean;
  price: any;
  discount: any;
  createdAt: string;
  bookingId: number;
  customerId: number;
}

type ReqReviewFields = {
  id?: boolean;
  listing_id?: boolean;
  complex_id?: boolean;
  avatar?: boolean;
  roomType?: boolean;
  reviewDate?: boolean;
  review?: boolean;
  name?: boolean;
  reiting_score?: boolean;
  createdAt?: boolean;
};

type ReqRelation =
  | 'in_complex'
  | 'images'
  | 'locationDetails'
  | 'apartments'
  | 'photos'
  | 'room_type'
  | 'reviews'
  | 'amenities'
  | 'roomCategory';

type ReqIncludes<> = {
  relation?: ReqRelation;
  scope?: {
    offset?: number;
    limit?: number;
    skip?: number;
    order?: string;
    where?: Record<string, unknown>;
    fields?: Record<string, boolean>;
    include?: Array<Record<string, unknown>>;
  };
};

type GetFromServer<T> = {
  offset?: number;
  limit?: number;
  skip?: number;
  order?: 'asc' | 'desc' | string;
  where?: Record<string, unknown>;
  fields?: Partial<T>;
  include?: ReqIncludes[] | ReqRelation[];
};

type PartOfApartment = Pick<
  Apartments,
  | 'id'
  | 'name'
  | 'description'
  | 'guests'
  | 'discount'
  | 'bedrooms'
  | 'price'
  | 'isAvailable'
  | 'isVisible'
  | 'oldPrice'
  | 'review_scores_rating'
>;

type ListingCards = Omit<PartOfApartment, 'images'> & {
  images: Array<ImagesData>;
};

interface POSTError extends Error {
  message?: string;
  cause?: {
    statusCode: number;
    name: string;
    message: string;
    code: string;
    details: Detail[];
  };
}

interface POSTErrorOptions {
  statusCode: number;
  name: string;
  message: string;
  code: string;
  details: Detail[];
}

interface POSTErrorResponse {
  error: {
    statusCode: number;
    name: string;
    message: string;
    code: string;
    details: Detail[];
  };
}

interface Detail {
  path: string;
  code: string;
  message: string;
  info: {
    format: string;
  };
}
