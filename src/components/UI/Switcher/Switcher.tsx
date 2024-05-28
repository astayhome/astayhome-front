'use client';

import { useTranslations } from 'next-intl';
import { type ChangeEvent, type ChangeEventHandler, useState } from 'react';

interface SwitcherProps {
  className?: string;
  checked?: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export default function Switcher(props: SwitcherProps) {
  const { className = '', checked = true, onChange, ...otherProps } = props;
  const [isChecked, setIsChecked] = useState(checked);
  const t = useTranslations('SwitcherTransfer');

  const handlerOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event);
    setIsChecked((prev) => !prev);
  };

  return (
    <label
      htmlFor="transfer"
      className={`${className} flex w-full cursor-pointer select-none items-center justify-evenly`}
      {...otherProps}
    >
      <span className="text-base font-semibold">
        {t('Do you need transfer?')}
      </span>
      <div className="relative flex items-center justify-center">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handlerOnChange}
          id="transfer"
          name="transfer"
          className="h-7 w-14 cursor-pointer appearance-none rounded-full bg-red-600 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-offset-2 focus:ring-offset-black"
        />
        <span className="absolute right-0.5 top-1.5 text-xs font-medium uppercase text-white">
          {t('NO')}
        </span>
        <span className="absolute right-[29px] top-1.5 text-xs font-medium uppercase text-white">
          {t('YES')}
        </span>
        <span className="absolute right-7 size-7 rounded-full bg-gray-200 transition-transform" />
      </div>
    </label>
  );
}
