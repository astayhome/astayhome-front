'use client';

/* eslint-disable react/jsx-no-constructed-context-values */
import {
  createContext,
  type Dispatch,
  type ReactNode,
  useReducer,
} from 'react';

import {
  dataReducer,
  type IInitialState,
  initialState,
  type SearchAction,
} from './reducer';
import {
  dataReservationReducer,
  type IInitialReservationState,
  initialReservationState,
  type ReservationAction,
} from './Reservation/ruducerReservation';

export const DataContext = createContext<{
  search: IInitialState;
  dispatch: Dispatch<SearchAction>;
} | null>(null);

export const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [search, dispatch] = useReducer(dataReducer, initialState);
  return (
    <DataContext.Provider value={{ search, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

export const DataReservationContext = createContext<{
  booking: IInitialReservationState;
  dispatch: Dispatch<ReservationAction>;
} | null>(null);

export const ReservationProvider = ({ children }: { children: ReactNode }) => {
  const [booking, dispatch] = useReducer(
    dataReservationReducer,
    initialReservationState,
  );
  return (
    <DataReservationContext.Provider value={{ booking, dispatch }}>
      {children}
    </DataReservationContext.Provider>
  );
};
