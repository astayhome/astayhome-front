'use client';

import type { FC } from 'react';
import { useCallback } from 'react';

import AiOutlineMinus from '../svg/ico/ai/AiOutlineMinus';
import AiOutlinePlus from '../svg/ico/ai/AiOutlinePlus';

interface CounterProps {
  title: string;
  subtitle: string;
  value: number;
  onIncrease: (value: number) => void;
  onDecrease: (value: number) => void;
}

const Counter: FC<CounterProps> = ({
  title,
  subtitle,
  value,
  onIncrease,
  onDecrease,
}) => {
  const onAdd = useCallback(() => {
    onIncrease(value);
  }, [onIncrease, value]);

  const onReduce = useCallback(() => {
    onDecrease(value);
  }, [onDecrease, value]);

  return (
    <div className="flex flex-row items-center justify-between">
      <div className="flex flex-col">
        <div className="font-medium">{title}</div>
        <div className="font-light text-gray-600">{subtitle}</div>
      </div>
      <div className="flex flex-row items-center gap-4">
        <button
          type="button"
          aria-label="Decrease"
          onClick={onReduce}
          className="
            flex
            size-10
            cursor-pointer
            items-center
            justify-center
            rounded-full
            border
            border-neutral-400
            text-neutral-600
            transition
            hover:opacity-80"
        >
          <AiOutlineMinus />
        </button>
        <div
          className="
            text-xl 
            font-light 
            text-neutral-600
          "
        >
          {value}
        </div>
        <button
          type="button"
          aria-label="Increase"
          onClick={onAdd}
          className="
            flex
            size-10
            cursor-pointer
            items-center
            justify-center
            rounded-full
            border
            border-neutral-400
            text-neutral-600
            transition
            hover:opacity-80
          "
        >
          <AiOutlinePlus />
        </button>
      </div>
    </div>
  );
};

export default Counter;
