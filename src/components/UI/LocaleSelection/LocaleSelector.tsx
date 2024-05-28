'use client';

import { useParams } from 'next/navigation';
import { useLocale } from 'next-intl';
import type { MouseEventHandler } from 'react';
import { useState, useTransition } from 'react';

import useQuery from '@/hooks/useQuery';
import useWindowClick from '@/hooks/useWindowClick';
import type { Langs } from '@/libs/actions/getLocalization/getLocalization';
import { usePathname, useRouter } from '@/libs/i18nNavigation';
import { AppConfig } from '@/utils/AppConfig';

import { Languages } from '../../svg';
import LocaleItem from './LocaleItem';

interface LocaleSelectionProps {
  className?: string;
  langs: Langs;
}

const LANGUAGE_SELECTOR_ID = 'language-selector';

export default function LocaleSelector({
  className = '',
  langs,
}: LocaleSelectionProps) {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const params = useParams();
  const query = useQuery();
  const [isOpen, setIsOpen] = useState(false);
  const [isPending, startTransition] = useTransition();

  const handleLanguageChange: MouseEventHandler<HTMLAnchorElement> = (
    event,
  ) => {
    event.preventDefault();
    const target = event.target as HTMLAnchorElement;
    setIsOpen(false);
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`.
        { pathname, params, query },
        { locale: target.dataset.value, scroll: false },
      );
    });
  };

  useWindowClick({
    htmlEl: 'button',
    elId: LANGUAGE_SELECTOR_ID,
    setIsOpen,
  });

  return (
    <div
      className={`${isPending ? 'pointer-events-none' : ''} ${className} z-40 flex items-center`}
    >
      <div className="relative text-center">
        <div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="flex w-full items-center justify-center rounded-full p-3 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-0"
            id={LANGUAGE_SELECTOR_ID}
            aria-haspopup="true"
            aria-expanded={isOpen}
          >
            {langs[locale]}
            <Languages className="-mr-1 ml-2 size-5" aria-hidden="true" />
          </button>
        </div>
        {isOpen && (
          <div
            className="absolute left-0 mt-2 w-full origin-top-right rounded-md bg-white p-1 shadow-lg"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="language-selector"
          >
            <div className="w-full p-1" role="none">
              {AppConfig.locales.map((language: any) => {
                return (
                  <LocaleItem
                    key={language}
                    translate={langs}
                    language={language}
                    onClick={handleLanguageChange}
                  />
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
