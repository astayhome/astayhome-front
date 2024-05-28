import Link from 'next/link';
import { type FC } from 'react';

import BiChevronLeft from '@/components/svg/ico/bi/BiChevronLeft';
import BiSearch from '@/components/svg/ico/bi/BiSearch';
import useQuery from '@/hooks/useQuery';
import type { HeaderTranslation } from '@/libs/actions/getLocalization/getLocalization';
import { usePathname } from '@/libs/i18nNavigation';

interface SearchProps {
  className?: string;
  translate: HeaderTranslation;
  openModal: () => void;
}

const AppSearchBarMobile: FC<SearchProps> = ({
  className = '',
  translate,
  openModal,
}) => {
  const pathname = usePathname();
  const query = useQuery();
  const showGoBack = pathname !== '/' || Object.keys(query).length > 0;

  return (
    <>
      {/* mobile search button */}
      <div className={`${className} container block w-full md:hidden`}>
        <div className="relative flex h-12 items-center justify-center rounded-full bg-gray-light">
          {showGoBack && (
            <Link
              prefetch={false}
              href="/"
              className="absolute left-1 rounded-full bg-white p-2 shadow-md duration-300 active:scale-90"
            >
              <BiChevronLeft className="size-5" />
            </Link>
          )}
          <button
            type="button"
            className="mx-11 flex size-full items-center justify-center"
            onClick={openModal}
          >
            <BiSearch className="mr-1 h-5 text-primary" />
            <span className="text-sm font-medium tracking-wide">
              {translate.where_going}
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default AppSearchBarMobile;
