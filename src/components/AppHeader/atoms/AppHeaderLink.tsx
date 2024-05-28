'use client';

import type { FC, PropsWithChildren } from 'react';

import { Link } from '@/libs/i18nNavigation';

interface IAppHeaderLinkProps extends PropsWithChildren<any> {
  className?: string;
  href: NavigationLinks;
  active?: boolean;
  isSnap?: boolean;
  isActiveHeader?: boolean;
  onClick?: () => void;
}

const AppHeaderLink: FC<IAppHeaderLinkProps> = ({
  className,
  href,
  children,
  active,
  isSnap,
  isActiveHeader,
  onClick,
}) => {
  const headerMenuBehavior = () => {
    const style = [];
    if (isSnap) style.push('text-black after:bg-gold');
    if (!isSnap) style.push('text-black after:bg-gold');
    if (isActiveHeader) style.push('inline-block');
    if (!isActiveHeader) style.push('hidden');
    return style.join(' ');
  };

  return (
    <Link
      prefetch={false}
      href={href}
      className={`${headerMenuBehavior()} ${
        active
          ? 'opacity-100 after:w-5'
          : 'after:w-2 after:bg-primary after:opacity-0 hover:after:opacity-100'
      } ${className} relative my-3 cursor-pointer px-4 pb-2 after:absolute after:bottom-0 after:right-1/2 after:h-[2px] after:translate-x-1/2 after:rounded-full after:transition-all`}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default AppHeaderLink;
