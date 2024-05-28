/* eslint-disable @typescript-eslint/consistent-type-imports */
// Use type safe message keys with `next-intl`
type Messages = typeof import('../locales/en.json');
declare interface IntlMessages extends Messages {}

type KeyOfType<Type, ValueType> = keyof {
  [Key in keyof Type as Type[Key] extends ValueType ? Key : never]: any;
};

type OptionsForFormattedPrice = {
  locales?: string;
  currency?: string;
  currencyDisplay?: 'narrowSymbol' | 'symbol' | 'name' | 'code';
  minimumFractionDigits?: number;
  maximumFractionDigits?: number;
};

type OGImageDescriptor = {
  url: string | URL;
  secureUrl?: string | URL;
  alt?: string;
  type?: string;
  width?: string | number;
  height?: string | number;
};

type NavigationLinks =
  | '/'
  | '/complexes'
  | '/transfers'
  | '/for-owners'
  | '/about-us'
  | '/privacy-policy';

interface ImgSvgProps {
  title?: string;
  className?: string;
  fill?: string;
  width?: number;
  height?: number;
}
interface IcoSvgProps {
  title?: string;
  className?: string;
  fill?: string;
  size?: number;
  width?: number;
  height?: number;
}

type IconElType = (props: IconBaseProps) => JSX.Element;

type PageSearchParams = {
  location: string;
  guests: string;
  rooms: string;
  checkIn?: Date | undefined;
  checkOut?: Date | undefined;
};

type PageProps<SearchParams = {}> = {
  params: { locale: string; [x: string]: string };
  searchParams: SearchParams;
};

type LayoutProps = Omit<PageProps, 'children'> & {
  children: ReactNode;
};

interface GeoData {
  lat: number;
  lng: number;
}

type AllHostContacts = Array<HostContacts>;

type HostContacts = {
  id: number;
  userId: string;
  phone: string;
  email: string;
  name: string;
  telegram: string;
  whatsapp: string;
  instagram: string;
  youtube: string;
  firstCardOwnerName: string;
  secondCardOwnerName: string;
  firstCardNumber: string;
  secondCardNumber: string;
  firstCardDescription: string;
  firstCardProvider: string;
  secondCardProvider: string;
  secondCardDescription: string;
  address: string;
  workTime: string;
};

type Complexes = {
  id: number;
  name: string;
  description: string;
  address: string;
  geo_data: GeoData[];
  complexServicesIds: null | number[];
  location_id: number;
  images: ImagesData[];
  translations: DefaultTranslate;
};

type Apartments = {
  id: number;
  name: string;
  description: string;
  host_name: string;
  guests: number;
  bathrooms: number;
  bedrooms: number;
  beds: number;
  neighborhood: string[];
  disabledDates: string[];
  hostDisabledDates: string[];
  price: number;
  price_low_season: number;
  price_high_season: number;
  discount: number;
  isAvailable: boolean;
  isPromotion: boolean;
  isVisible: boolean;
  complex_id: number;
  location_id: number;
  oldPrice: string;
  number_of_reviews: number;
  availability_365: number;
  review_scores_rating: number;
  room_type_id: number;
  amenityIds: number[];
  roomCategoryId: number;
  images: ImagesData[];
  translations: DefaultTranslate;
};

type ImagesData = {
  id: number;
  url: string;
  order_number: number;
  apartment_id: number;
  complex_id: number;
  service_id: number;
  sizes?: {
    s650: string;
    s720: string;
    s1920: string;
    s1366: string;
  };
};

type Review = {
  id: number;
  listing_id: number;
  complex_id: number;
  avatar: string;
  roomType: DefaultTranslate | null;
  reviewDate: string;
  review: string;
  name: string;
  positive_review?: string;
  negative_review?: string;
  reiting_score: number;
  createdAt: string;
};

interface LocationDetails {
  id: number;
  name: string;
  latitude: string;
  longitude: string;
  city: string;
  country: string;
  translations: DefaultTranslate;
}

interface Amenity {
  id: number;
  description: string;
  icon: string;
  title: string;
  translations: DefaultTranslate;
}

interface RoomType {
  id: number;
  type: string;
  description: string;
  color: string;
  translations: DefaultTranslate;
}

interface RoomCategory {
  id: number;
  category: string;
  description: string;
  color: string;
  translations: DefaultTranslate;
}

type ApartmentWthImages = Omit<Apartments, 'images'> & {
  images: Array<ImagesData>;
};

type ApartmentWithRoomTypeAndImages = Omit<
  Apartments,
  'room_type' | 'images'
> & {
  room_type: RoomType;
  images: ImagesData[];
};

type ApartmentCardsData = Omit<
  Apartments,
  'locationDetails' | 'roomCategory' | 'images'
> & {
  locationDetails: LocationDetails;
  roomCategory: RoomCategory;
  images: ImagesData[];
};

type ApartmentFullData = Omit<
  Apartments,
  | 'in_complex'
  | 'locationDetails'
  | 'room_type'
  | 'amenities'
  | 'roomCategory'
  | 'images'
> & {
  locationDetails: LocationDetails;
  room_type: RoomType;
  amenities: Amenity[];
  roomCategory: RoomCategory;
  images: ImagesData[];
  in_complex: Complexes;
};

type ContactsData = {
  phone: string;
  whatsapp: string;
  telegram: string;
  instagram: string;
  youtube: string;
};

type FAQData = {
  question: string;
  answer: string;
};
