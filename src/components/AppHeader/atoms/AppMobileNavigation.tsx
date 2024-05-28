'use client';

import { useSelectedLayoutSegment } from 'next/navigation';

import BiSearch from '@/components/svg/ico/bi/BiSearch';
import BiTransferAlt from '@/components/svg/ico/bi/BiTransferAlt';
import FaPeopleRoof from '@/components/svg/ico/fa/FaPeopleRoof';
import LocaleSelectorMobile from '@/components/UI/LocaleSelection/LocaleSelectorMobile/LocaleSelectorMobile';
import type { HeaderTranslation } from '@/libs/actions/getLocalization/getLocalization';
import { Link } from '@/libs/i18nNavigation';

interface NavLins {
  href: NavigationLinks;
  Img: IconElType;
  title: 'Apartments' | 'Transfers' | 'For Owners mobile';
}

const navLinks: NavLins[] = [
  {
    href: '/',
    Img: BiSearch,
    title: 'Apartments',
  },
  {
    href: '/transfers',
    Img: BiTransferAlt,
    title: 'Transfers',
  },
  {
    href: '/for-owners',
    Img: FaPeopleRoof,
    title: 'For Owners mobile',
  },
];

interface AppMobileNavigationProps {
  className?: string;
  translate: HeaderTranslation;
}

function AppMobileNavigation({
  className = '',
  translate,
}: AppMobileNavigationProps) {
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : '/';

  return (
    <div
      className={`${className} sticky bottom-0 z-40 h-[70px] w-full border-t border-gray-light bg-white px-2 md:hidden`}
    >
      <div className="mx-auto grid size-full grid-cols-4 items-start sm:max-w-screen-sm">
        {navLinks.map(({ href, Img, title }) => (
          <Link
            prefetch={false}
            key={href}
            aria-current={pathname === href ? 'page' : undefined}
            href={href}
            className="mt-2.5 flex flex-col items-center"
          >
            <Img
              className={`${pathname === href ? 'text-gold' : 'text-textPrim'} specialIconHover size-6`}
            />
            <span
              className={`${pathname === href ? 'font-semibold' : ''} mt-1 text-xs text-black`}
            >
              {translate[title]}
            </span>
          </Link>
        ))}
        <LocaleSelectorMobile translate={translate} className="mt-2.5" />
      </div>
    </div>
  );
}

export default AppMobileNavigation;
