/* eslint-disable tailwindcss/no-custom-classname */
import type { FC } from 'react';

import BiMinus from '@/components/svg/ico/bi/BiMinus';
import BiPlus from '@/components/svg/ico/bi/BiPlus';

// icons

interface IAppCounterProps {
  value: number;
  maxValue: number;
  onIncrease: () => void;
  onDescrease: () => void;
}

/* ---------------------------------------- -- ---------------------------------------- */
/* ---- btnIncrease and btnDecrease are need for onBlure() <AppSearchOptionButton/> --- */
/* ---------------------------------------- -- ---------------------------------------- */

const AppCounter: FC<IAppCounterProps> = ({
  value,
  maxValue,
  onIncrease,
  onDescrease,
}) => {
  return (
    <div className="flex items-center">
      <button
        type="button"
        aria-label="Minus"
        tabIndex={0}
        className={`${
          !value && 'cursor-not-allowed opacity-40'
        } btnDecrease inline-block rounded-full border border-textPrim p-[7px] outline-none duration-300 active:scale-90`}
        onClick={onDescrease}
      >
        <BiMinus className="h-4 text-textPrim" />
      </button>
      <span className="inline-block w-9 text-center">{value}</span>
      <button
        type="button"
        aria-label="Plus"
        tabIndex={0}
        className={`${
          value === maxValue && 'cursor-not-allowed opacity-40'
        } btnIncrease inline-block rounded-full border border-textPrim p-[7px] outline-none duration-300 active:scale-90`}
        onClick={onIncrease}
      >
        <BiPlus className="h-4 text-textPrim" />
      </button>
    </div>
  );
};

export default AppCounter;
