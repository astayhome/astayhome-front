/* eslint-disable consistent-return */

'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useLocale } from 'next-intl';
import { type FC, useCallback, useMemo, useState } from 'react';
import type { RangeKeyDict } from 'react-date-range';

import { DATA_ACTION_TYPES } from '@/context/actionTypes';
import createQuery from '@/hooks/createQuery';
import { useDataContext } from '@/hooks/useDataContext';
import type { HeaderTranslation } from '@/libs/actions/getLocalization/getLocalization';
import { localStorSearchKey } from '@/utils/AppConfig';

import { AppDateRange } from '../AppHeader/atoms';
import Heading from '../Heading';
import Counter from '../Inputs/Counter';
import Modal from './Modal';

interface Props {
  isOpenModal: boolean;
  setIsOpenModal: (prev: boolean) => void;
  translate: HeaderTranslation;
}

enum STEPS {
  DATE = 0,
  INFO = 1,
}

const SearchModal: FC<Props> = ({ isOpenModal, setIsOpenModal, translate }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const locale = useLocale();
  const pathname = locale === 'en' ? '/' : `/${locale}/`;
  const { search, dispatch } = useDataContext()!;
  const { guests, checkIn, checkOut } = search;
  const [step, setStep] = useState(STEPS.DATE);

  const onBack = useCallback(() => {
    setStep((value) => value - 1);
  }, []);

  const onClear = useCallback(() => {
    dispatch({
      type: DATA_ACTION_TYPES.RESET_DATES,
      payload: null,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onNext = useCallback(() => {
    setStep((value) => value + 1);
  }, []);

  const setNewDate = ({ selection }: RangeKeyDict) => {
    dispatch({
      type: DATA_ACTION_TYPES.SET_CHECK_IN,
      payload: selection?.startDate || null,
    });
    dispatch({
      type: DATA_ACTION_TYPES.SET_CHECK_OUT,
      payload: selection?.endDate || selection?.startDate || null,
    });
  };

  const onSubmit = useCallback(async () => {
    const format = await import('date-fns/format').then((mod) => mod.default);

    if (step !== STEPS.INFO) {
      return onNext();
    }

    const params = new URLSearchParams(searchParams);
    const newQuery = createQuery(search);

    if (Object.keys(newQuery).length <= 1) {
      setStep(STEPS.DATE);
      setIsOpenModal(false);
      localStorage.removeItem(localStorSearchKey);
      router.replace(pathname);
      return;
    }
    if (Object.keys(newQuery).length <= 2) {
      params.set('location', newQuery.location);
      params.set('guests', newQuery.guests.guests);
      params.set('rooms', newQuery.guests.rooms);

      setStep(STEPS.DATE);
      setIsOpenModal(false);
      localStorage.setItem(localStorSearchKey, JSON.stringify(search));
      router.replace(`${pathname}?${params}`);
      return;
    }

    params.set('location', newQuery.location);
    params.set('checkIn', format(newQuery.checkIn, 'yyyy-MM-dd'));
    params.set('checkOut', format(newQuery.checkOut, 'yyyy-MM-dd'));
    params.set('guests', newQuery.guests.guests);
    params.set('rooms', newQuery.guests.rooms);

    setStep(STEPS.DATE);
    setIsOpenModal(false);

    localStorage.setItem(localStorSearchKey, JSON.stringify(search));

    router.replace(`${pathname}?${params}`);
  }, [onNext, pathname, router, search, searchParams, setIsOpenModal, step]);

  const actionLabel = useMemo(() => {
    if (step === STEPS.INFO) {
      return translate.Search;
    }

    return translate.Next;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step]);

  const secondaryActionLabel = useMemo(() => {
    if (step === STEPS.DATE) {
      return translate.Clear;
    }

    return translate.Back;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step]);

  let bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading
        title={translate["When's your trip?"]}
        subtitle={translate['Feel free to chose best dates!']}
      />
      <AppDateRange
        className="md:p-4"
        checkIn={checkIn}
        checkOut={checkOut}
        onChange={(range: RangeKeyDict) => setNewDate(range)}
        months={1}
      />
    </div>
  );

  if (step === STEPS.INFO) {
    bodyContent = (
      <div className="flex flex-col gap-4">
        <Heading
          title={translate['More information']}
          subtitle={translate['Find your perfect place!']}
        />
        <Counter
          onIncrease={(value) =>
            dispatch({
              type: DATA_ACTION_TYPES.INCREASE_GUESTS,
              payload: value,
            })
          }
          onDecrease={(value) =>
            dispatch({
              type: DATA_ACTION_TYPES.DECREASE_GUESTS,
              payload: value,
            })
          }
          value={guests.guests}
          title={translate.Guests}
          subtitle={translate.How_many_guests}
        />
        <hr />
        <Counter
          onIncrease={(value) =>
            dispatch({
              type: DATA_ACTION_TYPES.INCREASE_ROOMS,
              payload: value,
            })
          }
          onDecrease={(value) =>
            dispatch({
              type: DATA_ACTION_TYPES.DECREASE_ROOMS,
              payload: value,
            })
          }
          value={guests.rooms}
          title={translate.Rooms}
          subtitle={translate.How_many_rooms}
        />
      </div>
    );
  }

  return (
    <Modal
      isOpen={isOpenModal}
      title={translate.Filters}
      actionLabel={actionLabel}
      onSubmit={onSubmit}
      secondaryActionLabel={secondaryActionLabel}
      secondaryAction={step === STEPS.DATE ? onClear : onBack}
      onClose={() => setIsOpenModal(false)}
      body={bodyContent}
    />
  );
};

export default SearchModal;
