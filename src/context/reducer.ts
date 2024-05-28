/* eslint-disable default-case */
import { DATA_ACTION_TYPES } from './actionTypes';

export type Guests = {
  guests: number;
  rooms: number;
};

export type IInitialState = {
  location: string;
  checkIn: Date | null;
  checkOut: Date | null;
  guests: Guests;
};

export type SearchAction =
  | { type: DATA_ACTION_TYPES.SET_LOCATION; payload: string }
  | { type: DATA_ACTION_TYPES.SET_CHECK_IN; payload: Date | null }
  | { type: DATA_ACTION_TYPES.SET_CHECK_OUT; payload: Date | null }
  | { type: DATA_ACTION_TYPES.SET_GUESTS; payload: Guests }
  | { type: DATA_ACTION_TYPES.RESET_DATES; payload: any }
  | { type: DATA_ACTION_TYPES.RESET_GUESTS; payload: any }
  | { type: DATA_ACTION_TYPES.INCREASE_GUESTS; payload: number }
  | { type: DATA_ACTION_TYPES.INCREASE_ROOMS; payload: number }
  | { type: DATA_ACTION_TYPES.DECREASE_GUESTS; payload: number }
  | { type: DATA_ACTION_TYPES.DECREASE_ROOMS; payload: number };

export const initialState: IInitialState = {
  location: 'Pattaya',
  checkIn: null,
  checkOut: null,
  guests: { guests: 0, rooms: 0 },
};

export const dataReducer = (state: IInitialState, action: SearchAction) => {
  const { type, payload } = action;
  const { guests, rooms } = state.guests;
  switch (type) {
    case DATA_ACTION_TYPES.SET_LOCATION: {
      return { ...state, location: payload };
    }

    case DATA_ACTION_TYPES.SET_CHECK_IN: {
      if (state.guests.guests <= 0 && state.guests.rooms <= 0) {
        return {
          ...state,
          checkIn: payload,
          guests: { guests: 1, rooms: 1 },
        };
      }

      return { ...state, checkIn: payload };
    }

    case DATA_ACTION_TYPES.SET_CHECK_OUT: {
      return { ...state, checkOut: payload };
    }

    case DATA_ACTION_TYPES.SET_GUESTS: {
      return { ...state, guests: payload };
    }

    case DATA_ACTION_TYPES.RESET_DATES: {
      return initialState;
    }

    case DATA_ACTION_TYPES.RESET_GUESTS: {
      return { ...state, guests: initialState.guests };
    }

    case DATA_ACTION_TYPES.INCREASE_GUESTS: {
      if (guests >= 16) return state;
      if (guests <= 0) {
        return {
          ...state,
          guests: {
            ...state.guests,
            rooms: rooms + 1,
            guests: guests + 1,
          },
        };
      }
      return { ...state, guests: { ...state.guests, guests: guests + 1 } };
    }

    case DATA_ACTION_TYPES.INCREASE_ROOMS: {
      if (rooms >= 5) return state;
      if (guests <= 0) {
        return {
          ...state,
          guests: {
            ...state.guests,
            rooms: rooms + 1,
            guests: guests + 1,
          },
        };
      }
      return { ...state, guests: { ...state.guests, rooms: rooms + 1 } };
    }

    case DATA_ACTION_TYPES.DECREASE_GUESTS: {
      if (guests <= 0) return state;
      if (guests <= 1 && rooms >= 1) return state;
      return { ...state, guests: { ...state.guests, guests: guests - 1 } };
    }

    case DATA_ACTION_TYPES.DECREASE_ROOMS: {
      if (state.guests.rooms <= 1) return state;
      return { ...state, guests: { ...state.guests, rooms: rooms - 1 } };
    }

    default: {
      return state;
    }
  }
};
