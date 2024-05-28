import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';
import type { MouseEvent } from 'react';

import type { Langs } from '@/libs/actions/getLocalization/getLocalization';

interface LocaleItemProps {
  className?: string;
  translate: Langs;
  language: 'en' | 'ru';
  onClick: (event: MouseEvent<HTMLAnchorElement>) => void;
}

export default function LocaleItem({
  className = ' ',
  translate,
  language,
  onClick,
}: LocaleItemProps) {
  const pathname = usePathname();
  const locale = useLocale();
  const label = translate[language].toUpperCase();
  const formatePath = pathname.length > 1 ? pathname : '';
  const href = locale === 'ru' ? `/${pathname.slice(4)}` : `/ru${formatePath}`;

  if (locale === language) {
    return (
      <div
        className={`${className} pointer-events-none block w-full items-center rounded bg-gray-light text-center text-sm hover:bg-placeholder hover:text-white`}
        role="menuitem"
      >
        <span className="pointer-events-none select-none truncate">
          {label}
        </span>
      </div>
    );
  }

  return (
    <Link
      prefetch={false}
      href={href}
      key={language}
      locale={language}
      onClick={(event) => onClick(event)}
      data-value={language}
      className={` ${className}
      ${
        locale === language ? 'pointer-events-none bg-gray-light' : ''
      } block w-full items-center rounded text-center text-sm hover:bg-placeholder hover:text-white`}
      role="menuitem"
    >
      <span className="pointer-events-none select-none truncate">{label}</span>
    </Link>
  );
}
