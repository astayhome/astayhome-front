'use client';

import type { ReactNode } from 'react';

import { Link, usePathname } from '@/libs/i18nNavigation';

interface FooterLinkProps {
  className?: string;
  href: NavigationLinks;
  children: ReactNode;
}

function FooterLink(props: FooterLinkProps) {
  const { className = '', href, children, ...otherProps } = props;
  const pathname = usePathname();
  const active = pathname === href;
  if (active) {
    return (
      <span
        className={`${className} font-semibold underline transition-all`}
        {...otherProps}
      >
        {children}
      </span>
    );
  }
  return (
    <Link
      href={href}
      prefetch={false}
      className={`${className} transition-all hover:underline`}
      {...otherProps}
    >
      {children}
    </Link>
  );
}

export default FooterLink;
