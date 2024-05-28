'use server';

import { postData } from '../helpers/postData';

export type FormTransferFrom = {
  date: string;
  flightNumber: string;
  nameOfSignage: string;
  guests: string;
  amountBags: string;
  phone: string;
  agreeWithTerms: boolean;
  email: string;
  name: string;
};

export type FormTransferTo = {
  location: string;
  date: string;
  time: string;
  guests: string;
  amountBags: string;
  phone: string;
  agreeWithTerms: boolean;
  email: string;
  name: string;
};

type ContactInfo = {
  phone: string;
  email: string;
  name: string;
};

type SendTransfer = {
  type: 'arrival' | 'departure';
  flightNumber?: string;
  nameOfSignage?: string;
  city?: string;
  time?: string;
  date: string;
  guests: number;
  amountBags: number;
  contactInfo: ContactInfo;
};

export async function sendTransferFrom(formData: FormTransferFrom) {
  const {
    amountBags,
    flightNumber,
    date,
    guests,
    nameOfSignage,
    phone,
    email,
    name,
  } = formData;

  try {
    const res = await postData<SendTransfer>('/api/transfers', {
      type: 'arrival',
      amountBags: Number(amountBags),
      guests: Number(guests),
      flightNumber,
      date: new Date(date).toISOString(),
      nameOfSignage,
      contactInfo: {
        phone,
        email,
        name,
      },
    });

    return { statusCode: res.status };
  } catch (err: unknown) {
    const error = err as POSTError;
    console.log('Error Transfer From ---->', error.message);

    return { statusCode: error.cause.statusCode };
  }
}

export async function sendTransferTo(formData: FormTransferTo) {
  const { amountBags, location, time, date, guests, phone, email, name } =
    formData;

  try {
    const res = await postData<SendTransfer>('/api/transfers', {
      type: 'departure',
      city: location,
      amountBags: Number(amountBags),
      guests: Number(guests),
      date: new Date(date).toISOString(),
      time,
      contactInfo: {
        phone,
        email,
        name,
      },
    });

    return { statusCode: res.status };
  } catch (err: unknown) {
    const error = err as POSTError;
    console.log('Error Transfer To ---->', error.message);

    return { statusCode: error.cause.statusCode };
  }
}
