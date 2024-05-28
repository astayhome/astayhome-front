'use client';

import { useState } from 'react';

export type ServiceCardData = {
  title: string;
  desc: string;
  Img: JSX.Element;
};

interface CardProps {
  className?: string;
  isCardOpen?: boolean;
  data: ServiceCardData;
}

export default function Card(props: CardProps) {
  const { className = '', isCardOpen = false, data, ...otherProps } = props;
  const { desc = '', title = '', Img = null } = data;
  const [isOpen, setIsOpen] = useState(isCardOpen);
  return (
    <button
      className={`${className} flex justify-center gap-2`}
      type="button"
      aria-label="services card"
      onClick={() => setIsOpen((prev) => !prev)}
      {...otherProps}
    >
      <div
        className={`${isOpen ? 'bg-gold' : 'bg-primary'} flex size-[50px] min-w-[50px] items-center justify-center rounded-full text-white transition-colors duration-300 md:size-[60px] md:min-w-[60px]`}
      >
        {Img}
      </div>
      <div>
        <h4 className="text-start font-semibold sm:text-lg md:text-xl">
          {title}
        </h4>
        <p
          className={`${isOpen ? 'active' : ''} contentCard overflow-hidden text-start text-sm transition-all md:text-base`}
        >
          {desc}
        </p>
      </div>
    </button>
  );
}
