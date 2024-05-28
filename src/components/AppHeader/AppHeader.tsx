/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

'use client';

import { useLocale } from 'next-intl';
import { useCallback, useEffect, useState } from 'react';

import { useDataContext } from '@/hooks/useDataContext';
import type { HeaderTranslation } from '@/libs/actions/getLocalization/getLocalization';
import { formatRangeDate } from '@/libs/datesUtils';
import { formatGuests } from '@/libs/guestsUtils';
import { Link, usePathname } from '@/libs/i18nNavigation';

import { SearchModal } from '../Modals';
import BiSearch from '../svg/ico/bi/BiSearch';
import { Contacts } from '../UI/Contacts';
import LocaleSelector from '../UI/LocaleSelection/LocaleSelector';
import AppHeaderLink from './atoms/AppHeaderLink';
import AppLogo from './atoms/AppLogo';
import AppSearchBar from './molecules/AppSearchBar';
import AppSearchBarMobile from './molecules/AppSearchBarMobile';

interface AppHeaderProps {
  className?: string;
  t: HeaderTranslation;
  contacts: HostContacts;
}

function AppHeader({ className = '', t, contacts }: AppHeaderProps) {
  const pathname = usePathname();
  const locale = useLocale();
  const { langs } = t;
  const {
    search: { checkIn, checkOut, guests },
  } = useDataContext()!;
  const [isMainPage, setIsMainPage] = useState(pathname === '/');
  const [isSnapTop, setIsSnapTop] = useState<boolean>(isMainPage);
  const [isActiveSearch, setIsActiveSearch] = useState<boolean>(isMainPage);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleOnScroll = useCallback(() => {
    if (!isMainPage) return;
    const position = window.scrollY;
    if (position >= 50) {
      setIsSnapTop(false);
      setIsActiveSearch(false);
    } else {
      setIsSnapTop(true);
      setIsActiveSearch(true);
    }
  }, [isMainPage]);

  const headerBehavior = () => {
    const style = [];
    if (!isActiveSearch) {
      style.push('appCloseHeader');
    }
    return style.join(' ');
  };

  useEffect(() => {
    setIsMainPage(pathname === '/');
    if (isMainPage) {
      setIsSnapTop(true);
      setIsActiveSearch(true);
      window.addEventListener('scroll', handleOnScroll);
    } else {
      setIsSnapTop(false);
      setIsActiveSearch(false);
      window.removeEventListener('scroll', handleOnScroll);
    }
    return () => window.removeEventListener('scroll', handleOnScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMainPage, pathname]);

  useEffect(() => {
    if (isOpenModal) document.body.style.overflow = 'hidden';
    if (!isOpenModal) document.body.style.overflow = '';
  }, [isOpenModal]);

  return (
    <>
      <SearchModal
        translate={t}
        isOpenModal={isOpenModal}
        setIsOpenModal={setIsOpenModal}
      />
      <header
        // eslint-disable-next-line tailwindcss/no-custom-classname
        className={`${headerBehavior()} ${className} ${isMainPage ? 'fixed' : 'relative'} appHeader top-0 z-40 w-full bg-white pt-5 shadow-lg duration-300 md:transition-none`}
      >
        {/* header top */}
        <div className="container hidden items-start md:grid md:grid-cols-[auto,1fr,auto] xl:grid-cols-[1.5fr,3fr,1.5fr] 2xl:grid-cols-[1fr,3fr,1fr]">
          {/* left side - logo */}
          <div className="flex h-12 items-center">
            <Link href="/" prefetch={false}>
              <AppLogo className="text-primary" />
            </Link>
          </div>
          {/* small search bar */}
          <button
            type="button"
            className={`${
              isActiveSearch &&
              '-z-50 translate-y-[75px] scale-[1.33] opacity-0'
            } ${
              isMainPage ? 'pl-6' : 'pl-3'
            } relative left-36 mx-auto flex h-12 min-w-[320px] cursor-pointer items-center rounded-full border border-stroke bg-white pr-2 text-left shadow-md duration-200 hover:shadow-lg md:absolute xmd:left-auto xmd:right-1/2 xmd:translate-x-1/2`}
            onClick={() => setIsActiveSearch(true)}
          >
            {!isActiveSearch && isMainPage ? (
              <span className="grow text-sm font-medium tracking-wide text-textPrim">
                <span className="border-r border-stroke py-1 pr-4">
                  {t.Pattaya || (
                    <span className="font-normal text-placeholder">
                      {t.Location}
                    </span>
                  )}
                </span>
                <span className="border-r border-stroke px-4 py-1">
                  {formatRangeDate(checkIn, checkOut, locale) || (
                    <span className="font-normal text-placeholder">
                      {t.add_dates_small_search}
                    </span>
                  )}
                </span>
                <span className="py-1 pl-4">
                  {formatGuests(guests, locale) || (
                    <span className="font-normal text-placeholder">
                      {t.add_guests}
                    </span>
                  )}
                </span>
              </span>
            ) : (
              <span className="grow text-sm font-medium tracking-wide text-placeholder">
                {t.start_search}
              </span>
            )}
            <BiSearch className="ml-3 size-8 rounded-full bg-primary p-2 text-white" />
          </button>
          {/* middle side navigation */}
          <nav className="relative order-last col-span-2 flex items-center justify-center text-black xl:order-none xl:col-span-1">
            <AppHeaderLink
              isSnap={isSnapTop}
              isActiveHeader={isActiveSearch}
              active={pathname === '/'}
              href="/"
            >
              {t.Apartments}
            </AppHeaderLink>
            <AppHeaderLink
              isSnap={isSnapTop}
              isActiveHeader={isActiveSearch}
              active={pathname === '/transfers'}
              href="/transfers"
            >
              {t.Transfers}
            </AppHeaderLink>
            <AppHeaderLink
              isSnap={isSnapTop}
              isActiveHeader={isActiveSearch}
              active={pathname === '/for-owners'}
              href="/for-owners"
            >
              {t['For Owners']}
            </AppHeaderLink>
          </nav>
          {/* right side */}
          <div className="flex items-center justify-end gap-5 text-black">
            <LocaleSelector
              langs={langs}
              className="flex h-10 items-center rounded-full hover:bg-gray-light"
            />
            <Contacts data={contacts} />
          </div>
        </div>
        {/* main search bar */}
        <AppSearchBar
          translate={t}
          menu={null}
          isActiveHeader={isActiveSearch}
        />
        {/* mobile search bar */}
        <AppSearchBarMobile
          translate={t}
          openModal={() => setIsOpenModal(true)}
        />
        {/* bottom navigation
        <AppMobileNavigation /> */}
      </header>
      {/* background layer */}
      {isActiveSearch && !isSnapTop && (
        <div
          className="inset-full fixed z-30 bg-black/40"
          onClick={() => setIsActiveSearch(false)}
        />
      )}
    </>
  );
}

export default AppHeader;
