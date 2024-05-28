/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable jsx-a11y/label-has-associated-control */

'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

import bgImage from '@/public/assets/images/transfers-bg.webp';

import TransferFrom from './TransferFrom/TransferFrom';
import TransferTo from './TransferTo/TransferTo';

interface TransferFormProps {
  className?: string;
  isFromFrom?: boolean;
}

export default function TransferForm(props: TransferFormProps) {
  const { className = '', isFromFrom = true, ...otherProps } = props;
  const [isFrom, setIsFrom] = useState(isFromFrom);
  const t = useTranslations('TransferPageText');
  return (
    <section
      className={`${className} relative flex flex-col items-center justify-center`}
      {...otherProps}
    >
      <Image
        src={bgImage}
        fill
        placeholder="blur"
        alt=""
        className="object-cover"
      />
      <div className="absolute z-40 overflow-hidden rounded-xl">
        <div className="flex w-full items-center text-xl font-bold sm:text-2xl">
          <button
            className={`${isFrom ? 'bg-white' : 'bg-white/60'} h-14 w-1/2`}
            type="button"
            onClick={() => setIsFrom(true)}
          >
            {t('From Airport')}
          </button>
          <button
            className={`${isFrom ? 'bg-white/60' : 'bg-white'} h-14 w-1/2`}
            type="button"
            onClick={() => setIsFrom(false)}
          >
            {t('To Airport')}
          </button>
        </div>
        <div className="bg-white p-5 sm:px-12 sm:py-10">
          {isFrom ? <TransferFrom /> : <TransferTo />}
        </div>
      </div>
    </section>
  );
}
