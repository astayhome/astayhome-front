'use client';

import { useState } from 'react';

import BiChevronDown from '../svg/ico/bi/BiChevronDown';

interface FAQCardProps {
  className?: string;
  question: string;
  answer: string;
  isOpen?: boolean;
}

export default function FAQCard(props: FAQCardProps) {
  const {
    className = '',
    question,
    answer,
    isOpen = false,
    ...otherProps
  } = props;
  const [isOpenFAQ, setIsOpenFAQ] = useState(isOpen);
  if (!question || !answer) {
    return null;
  }

  return (
    <button
      type="button"
      onClick={() => setIsOpenFAQ((prev) => !prev)}
      className={`${className} mt-5 w-full rounded-xl border border-stroke p-1 text-start shadow-lg sm:px-3 sm:py-4 md:px-5`}
      {...otherProps}
    >
      <div className="flex w-full items-center">
        <BiChevronDown
          className={`${isOpenFAQ ? 'active' : ''} chevronDown min-w-9`}
          size={35}
        />
        <h3 className="font-bold sm:text-lg md:text-xl">{question}</h3>
      </div>
      <p
        className={`${isOpenFAQ ? 'active' : ''} faqContentCard text-sm sm:text-base`}
      >
        {answer}
      </p>
    </button>
  );
}
