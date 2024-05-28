'use client';

import { useParams } from 'next/navigation';
import { useLocale } from 'next-intl';
import type { MouseEventHandler } from 'react';
import { useState, useTransition } from 'react';

import { Languages } from '@/components/svg';
import useQuery from '@/hooks/useQuery';
import useWindowClick from '@/hooks/useWindowClick';
import type { HeaderTranslation } from '@/libs/actions/getLocalization/getLocalization';
import { usePathname, useRouter } from '@/libs/i18nNavigation';
import { AppConfig } from '@/utils/AppConfig';

import LocaleItem from '../LocaleItem';

interface LocaleSelectorMobileProps {
  className?: string;
  translate: HeaderTranslation;
}

const LANGUAGE_SELECTOR_ID = 'mobile-language-selector';

export default function LocaleSelectorMobile({
  className,
  translate,
}: LocaleSelectorMobileProps) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const query = useQuery();
  const [isOpen, setIsOpen] = useState(false);
  const [isPending, startTransition] = useTransition();

  const handleLanguageChange: MouseEventHandler<HTMLAnchorElement> = (
    event,
  ) => {
    event.preventDefault();
    event.stopPropagation();
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
    <button
      type="button"
      id={LANGUAGE_SELECTOR_ID}
      aria-label="menu language"
      className={`${className} relative flex flex-col items-center px-3`}
      onClick={() => setIsOpen((prev) => !prev)}
    >
      <Languages className="size-6 text-textPrim hover:text-gold active:text-gold" />
      <span className="mt-1 text-xs text-black">{translate.langs[locale]}</span>
      {isOpen && (
        <div
          className={`${isPending ? 'pointer-events-none' : ''} border-grayPrim/80 absolute -top-6 left-1/2 z-40 mt-2 w-full -translate-x-1/2 -translate-y-full rounded-md border-2 border-solid bg-white p-1 shadow-lg`}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="language-selector"
        >
          <div className="w-full p-1" role="none">
            {AppConfig.locales.map((language: any) => {
              return (
                <LocaleItem
                  className="py-2 text-xs"
                  key={language}
                  translate={translate.langs}
                  language={language}
                  onClick={handleLanguageChange}
                />
              );
            })}
          </div>
        </div>
      )}
    </button>
  );
}
