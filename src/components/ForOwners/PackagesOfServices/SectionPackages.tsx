'use client';

import { useTranslations } from 'next-intl';

import Check from '@/components/svg/ui/Check';

import type { PackagesData } from './PackagesOfServices';

interface SectionPackagesProps {
  className?: string;
  name: string;
  desc: string;
  onClick: () => void;
  servicePackage: PackagesData[];
}

export default function SectionPackages(props: SectionPackagesProps) {
  const {
    className = '',
    name = '',
    desc = '',
    servicePackage,
    onClick,
    ...otherProps
  } = props;

  const t = useTranslations('ForOwnersPageText');

  return (
    <div
      className={`${className} mx-5 mb-10 flex max-w-md flex-1 flex-col overflow-hidden rounded-lg border border-textPrim`}
      {...otherProps}
    >
      <h3 className="sm-py-6 bg-primary px-7 py-3 text-xl font-semibold uppercase text-white sm:text-2xl">
        {name}
      </h3>
      <div className="flex flex-auto flex-col p-4 sm:p-7">
        <p>{desc}</p>
        <ul className="mt-4 flex-auto sm:mt-9">
          {servicePackage.map(({ id, text }) => (
            <li
              key={id}
              className="mt-3 flex items-center gap-5 rounded-lg bg-white p-3"
            >
              <Check height={21} className="text-primary" /> {text}
            </li>
          ))}
        </ul>
        <p className="mt-5">{t('Packages Service1.endTitle')}</p>
        <button
          onClick={onClick}
          className="specialHover mt-4 h-12 w-full rounded-full bg-primary text-center font-bold text-white transition-all sm:text-lg"
          type="button"
        >
          {t('Leave request')}
        </button>
      </div>
    </div>
  );
}
