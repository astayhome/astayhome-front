import { ReservationActionTypes } from '../actionTypes';
import { type Guests } from '../reducer';
import type {
  IContactState,
  ITransferFromState,
  ITransferState,
  ITransferToState,
} from './index.ts';

export type IInitialReservationState = {
  name: string | null;
  email: string | null;
  phoneNumber: string | null;
  location: string;
  locale: string;
  checkIn: Date | null;
  checkOut: Date | null;
  guests: Guests;
  transfer: ITransferState;
  maxRooms: number;
  maxGuests: number;
  isAvailableApart: boolean;
};

export type ReservationAction =
  | { type: ReservationActionTypes.RESET_DATES; payload: any }
  | {
      type: ReservationActionTypes.SEARCH_DATA;
      payload: IInitialReservationState;
    }
  | { type: ReservationActionTypes.SET_CONTACT; payload: IContactState | null }
  | { type: ReservationActionTypes.SET_CHECK_IN; payload: Date | null }
  | { type: ReservationActionTypes.SET_CHECK_OUT; payload: Date | null }
  | {
      type: ReservationActionTypes.TRANSFER_FROM;
      payload: ITransferFromState | null;
    }
  | {
      type: ReservationActionTypes.TRANSFER_TO;
      payload: ITransferToState | null;
    };

export const initialReservationState: IInitialReservationState = {
  location: 'Pattaya',
  locale: 'en',
  name: null,
  email: null,
  phoneNumber: null,
  checkIn: null,
  checkOut: null,
  guests: { guests: 1, rooms: 1 },
  transfer: {
    from: {},
    to: {},
  },
  maxRooms: 1,
  maxGuests: 1,
  isAvailableApart: true,
};

export const dataReservationReducer = (
  state: IInitialReservationState,
  action: ReservationAction,
) => {
  const { type, payload } = action;
  const { transfer } = state;
  switch (type) {
    case ReservationActionTypes.RESET_DATES: {
      return initialReservationState;
    }

    case ReservationActionTypes.SEARCH_DATA: {
      return {
        ...state,
        ...payload,
        checkIn: payload.checkIn,
        checkOut: payload.checkOut,
      };
    }

    case ReservationActionTypes.SET_CONTACT: {
      return { ...state, ...payload };
    }

    case ReservationActionTypes.SET_CHECK_OUT: {
      return { ...state, checkOut: payload };
    }

    case ReservationActionTypes.SET_CHECK_IN: {
      return { ...state, checkIn: payload };
    }

    case ReservationActionTypes.TRANSFER_FROM: {
      return { ...state, transfer: { from: payload, to: transfer.to } };
    }

    case ReservationActionTypes.TRANSFER_TO: {
      return { ...state, transfer: { to: payload, from: transfer.from } };
    }

    default: {
      return state;
    }
  }
};
