'use client';

import { useTranslations } from 'next-intl';
import { useEffect, useRef } from 'react';

interface MainHeroTitileProps {
  className?: string;
}

export default function MainHeroTitle(props: MainHeroTitileProps) {
  const { className = '', ...otherProps } = props;
  const t = useTranslations('MainHero');
  const ref = useRef<HTMLHeadingElement | null>();

  useEffect(() => {
    ref.current.classList.add('animate');
  }, []);

  return (
    <h1 ref={ref} className={`${className} heroTitle`} {...otherProps}>
      <span>{t('rent_an_apart')}</span>
      <span>{` ${t('meeting_in_airport')}`}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="30"
        height="30"
        viewBox="0 0 80 80"
        className="checkSymbol"
      >
        <path
          className="firstPath"
          fill="#bae0bd"
          d="M40,77.5C19.3,77.5,2.5,60.7,2.5,40S19.3,2.5,40,2.5S77.5,19.3,77.5,40S60.7,77.5,40,77.5z"
        />
        <path
          className="secondPath"
          fill="#5e9c76"
          d="M40,3c20.4,0,37,16.6,37,37S60.4,77,40,77S3,60.4,3,40S19.6,3,40,3 M40,2C19,2,2,19,2,40s17,38,38,38	s38-17,38-38S61,2,40,2L40,2z"
        />
        <g transform="matrix(1,0,0,1,0,0)" opacity="1">
          <g
            opacity="1"
            transform="matrix(1,0,0,1,41.356998443603516,38.62799835205078)"
          >
            <path
              className="strokePath"
              strokeLinejoin="miter"
              fillOpacity="0"
              d=" M-18.993,1.459 C-18.993,1.459 -7.356,13.127 -7.356,13.126 C-7.357,13.127 18.993,-13.127 18.993,-13.127"
            />
          </g>
        </g>
      </svg>
    </h1>
  );
}
