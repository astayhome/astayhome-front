/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

import format from 'date-fns/format';
import { useRouter, useSearchParams } from 'next/navigation';
import { useLocale } from 'next-intl';
import { type FC, type FormEvent, Suspense, useState } from 'react';
import type { RangeKeyDict } from 'react-date-range';

import { DATA_ACTION_TYPES } from '@/context/actionTypes';
import createQuery from '@/hooks/createQuery';
import { useDataContext } from '@/hooks/useDataContext';
import type { HeaderTranslation } from '@/libs/actions/getLocalization/getLocalization';
import { formatCheckDate } from '@/libs/datesUtils';
import { formatGuests } from '@/libs/guestsUtils';
import { EHeaderOpions } from '@/types/enums';
import { localStorSearchKey } from '@/utils/AppConfig';

import {
  AppCounter,
  AppDateRange,
  AppSearchOptionButton,
  AppSearchOptionWrapper,
} from '../atoms';
import SkeletonDateRange from '../atoms/SkeletonDateRange';

enum ESearchMenu {
  LOCATION = 'location',
  CHECK_IN = 'checkIn',
  CHECK_OUT = 'checkOut',
  GUESTS = 'guests',
}

interface IAppSearchBarProps {
  menu: EHeaderOpions | null;
  isActiveHeader: boolean;
  translate: HeaderTranslation;
}

const AppSearchBar: FC<IAppSearchBarProps> = ({
  menu,
  isActiveHeader,
  translate,
}) => {
  const router = useRouter();
  const [searchMenu, setSearchMenu] = useState<ESearchMenu | null>(null);
  const { search, dispatch } = useDataContext()!;
  const { checkIn, checkOut, guests } = search;
  const searchParams = useSearchParams();
  const locale = useLocale();
  const pathname = locale === 'en' ? '/' : `/${locale}/`;

  // @ts-ignore
  const handleOnBlur = (event?: FocusEvent<HTMLElement>) => {
    const { relatedTarget } = event || {};
    if (!relatedTarget) {
      setSearchMenu(null);
      return;
    }
    const relatedTargetClassList = Array.from(
      (relatedTarget as Element)?.classList,
    );
    // @ts-ignore
    const result = relatedTargetClassList.some((className) => {
      const prefix = ['rdr', 'btn'];
      if (prefix.includes(className.slice(0, 3))) return true;
    });
    if (!result) setSearchMenu(null);
  };

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

  const handleOnSubmit = (event?: FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    // if (!isMainPage) closeSearch();
    setSearchMenu(null);
    const params = new URLSearchParams(searchParams);
    const newQuery = createQuery(search);

    if (Object.keys(newQuery).length <= 1) {
      localStorage.removeItem(localStorSearchKey);
      router.replace(`${pathname}?${params}`);
      return;
    }

    params.set('location', newQuery.location);
    if (newQuery.checkIn) {
      params.set('checkIn', format(newQuery.checkIn, 'yyyy-MM-dd'));
    }
    if (newQuery.checkOut) {
      params.set('checkOut', format(newQuery.checkOut, 'yyyy-MM-dd'));
    }
    if (newQuery.guests) {
      params.set('guests', newQuery.guests.guests);
      params.set('rooms', newQuery.guests.rooms);
    }

    localStorage.setItem(localStorSearchKey, JSON.stringify(search));
    router.replace(`${pathname}?${params}`);
  };

  const resetDate = () => {
    dispatch({
      type: DATA_ACTION_TYPES.RESET_DATES,
      payload: null,
    });
    handleOnBlur();
    localStorage.removeItem(localStorSearchKey);
    router.replace(pathname);
  };

  const onClearGuests = () => {
    dispatch({
      type: DATA_ACTION_TYPES.RESET_GUESTS,
      payload: null,
    });
    handleOnBlur();
    localStorage.removeItem(localStorSearchKey);
    router.replace(pathname);
  };

  const dateRangeStyle =
    'left-4 right-4 searchbar:left-auto searchbar:right-1/2 searchbar:translate-x-1/2 searchbar:w-[850px] h-[436px]';

  return (
    <div className={`${isActiveHeader ? 'visible' : 'invisible'} px-4`}>
      <div
        className={`${
          !isActiveHeader && 'z-[100] translate-y-[-75px] scale-50 opacity-0'
        } mx-auto mt-2 hidden max-w-[850px] rounded-full border border-stroke bg-white duration-300 md:flex`}
      >
        <form
          className={`${
            menu === EHeaderOpions.FIND_EXPERIENCES
              ? 'grid-cols-2'
              : 'grid-cols-[0.8fr,0.7fr,0.7fr,auto]'
          } grid grow`}
          onSubmit={handleOnSubmit}
        >
          {/* location */}
          <AppSearchOptionButton
            translate={translate}
            separator
            relative
            type="inputText"
            title={translate.Location}
            placeholder={translate.where_going}
            active={searchMenu === ESearchMenu.LOCATION}
            value={translate.value}
            onChange={() => {}}
            onFocus={() => {}}
            onBlur={() => {}}
            onClear={() => {}}
          />

          {/* check in */}
          <AppSearchOptionButton
            translate={translate}
            separator
            title={translate.Check_in}
            placeholder={translate.add_dates}
            active={searchMenu === ESearchMenu.CHECK_IN}
            value={formatCheckDate(checkIn, locale)}
            onFocus={() => setSearchMenu(ESearchMenu.CHECK_IN)}
            onBlur={handleOnBlur}
            onClear={resetDate}
          >
            {/* date picker */}
            <AppSearchOptionWrapper className={dateRangeStyle}>
              {searchMenu === ESearchMenu.CHECK_IN && (
                <AppDateRange
                  checkIn={checkIn}
                  checkOut={checkOut}
                  onChange={(range: RangeKeyDict) => setNewDate(range)}
                />
              )}
            </AppSearchOptionWrapper>
          </AppSearchOptionButton>
          {/* check out */}
          <AppSearchOptionButton
            translate={translate}
            separator
            title={translate.Check_out}
            placeholder={translate.add_dates}
            active={searchMenu === ESearchMenu.CHECK_OUT}
            value={formatCheckDate(checkOut, locale)}
            onFocus={() => setSearchMenu(ESearchMenu.CHECK_OUT)}
            onBlur={handleOnBlur}
            onClear={resetDate}
          >
            {/* date picker */}
            <AppSearchOptionWrapper className={dateRangeStyle}>
              <Suspense fallback={<SkeletonDateRange />}>
                {searchMenu === ESearchMenu.CHECK_OUT && (
                  <AppDateRange
                    checkIn={checkIn}
                    checkOut={checkOut}
                    onChange={(range: RangeKeyDict) => setNewDate(range)}
                  />
                )}
              </Suspense>
            </AppSearchOptionWrapper>
          </AppSearchOptionButton>
          {/* guests */}
          <AppSearchOptionButton
            translate={translate}
            relative
            withSearch
            title={translate.Guests}
            placeholder={translate.add_guests}
            active={searchMenu === ESearchMenu.GUESTS}
            value={formatGuests(guests, locale)}
            onFocus={() => setSearchMenu(ESearchMenu.GUESTS)}
            onBlur={handleOnBlur}
            onClear={onClearGuests}
            isSearch={!!searchMenu}
            onSearch={() => setSearchMenu(ESearchMenu.LOCATION)}
          >
            <AppSearchOptionWrapper className="right-0 w-96">
              <div>
                <div className="flex border-b border-stroke py-4">
                  <div className="grow">
                    <p className="font-medium">{translate.Guests}</p>
                    <p className="text-sm leading-4 text-placeholder">
                      {translate.How_many_guests}
                    </p>
                  </div>
                  <AppCounter
                    value={guests.guests}
                    maxValue={16}
                    onIncrease={() =>
                      dispatch({
                        type: DATA_ACTION_TYPES.INCREASE_GUESTS,
                        payload: 1,
                      })
                    }
                    onDescrease={() =>
                      dispatch({
                        type: DATA_ACTION_TYPES.DECREASE_GUESTS,
                        payload: 1,
                      })
                    }
                  />
                </div>
              </div>
              <div>
                <div className="flex py-4">
                  <div className="grow">
                    <p className="font-medium">{translate.Rooms}</p>
                    <p className="text-sm leading-4 text-placeholder">
                      {translate.How_many_rooms}
                    </p>
                  </div>
                  <AppCounter
                    value={guests.rooms}
                    maxValue={5}
                    onIncrease={() =>
                      dispatch({
                        type: DATA_ACTION_TYPES.INCREASE_ROOMS,
                        payload: 1,
                      })
                    }
                    onDescrease={() =>
                      dispatch({
                        type: DATA_ACTION_TYPES.DECREASE_ROOMS,
                        payload: 1,
                      })
                    }
                  />
                </div>
              </div>
            </AppSearchOptionWrapper>
          </AppSearchOptionButton>
        </form>
      </div>
    </div>
  );
};

export default AppSearchBar;
