import { useContext } from 'react';

import { DataReservationContext } from '@/context/store';

export const useReservationContext = () => useContext(DataReservationContext);
