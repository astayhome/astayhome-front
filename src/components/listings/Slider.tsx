/* eslint-disable tailwindcss/no-custom-classname */

'use client';

/* -------------------------- import stylex on page ------------------------- */
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
import Image from 'next/image';
import { type FC } from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { type NavigationOptions } from 'swiper/types';

import openGraph from '@/public/open-graph/astaya.jpg';
import { defBlur } from '@/utils/defBlurImg';

import BiChevronLeft from '../svg/ico/bi/BiChevronLeft';
import BiChevronRight from '../svg/ico/bi/BiChevronRight';

interface SliderProps {
  className?: string;
  imgs: ImagesData[];
  isRounded?: boolean;
  imgAlt?: string;
  imagePreload?: boolean;
}

const navigation: NavigationOptions = {
  prevEl: '.buttonPrev',
  nextEl: '.buttonNext',
  disabledClass: 'swiper-button-disabled',
};

const Slider: FC<SliderProps> = (props) => {
  const {
    className = '',
    imgAlt = '',
    isRounded = false,
    imagePreload = false,
    imgs,
    ...otherProps
  } = props;

  if (!imgs) {
    return '';
  }

  return (
    <div className={`${className} relative`} {...otherProps}>
      <Swiper
        className="mySwiper group"
        pagination={{
          dynamicBullets: true,
        }}
        loop
        navigation={navigation}
        modules={[Pagination, Navigation]}
      >
        {imgs.slice(0, 3).map(({ id, sizes }, i) => (
          <SwiperSlide key={id}>
            {imagePreload && i <= 0 ? (
              <Image
                className={`${isRounded ? 'rounded-xl' : ''} relative z-20`}
                width={650}
                height={650}
                id={id.toString()}
                src={sizes?.s650 || openGraph}
                placeholder="blur"
                blurDataURL={defBlur}
                priority
                quality={50}
                alt={imgAlt}
              />
            ) : (
              <Image
                className={`${isRounded ? 'rounded-xl' : ''} relative z-20`}
                width={650}
                height={650}
                id={id.toString()}
                src={sizes?.s650 || openGraph}
                placeholder="blur"
                blurDataURL={defBlur}
                loading="lazy"
                quality={50}
                alt={imgAlt}
              />
            )}

            <div className="swiper-lazy-preloader swiper-lazy-preloader-black" />
          </SwiperSlide>
        ))}

        <div className="buttonPrev text-textPrim/50 absolute left-2 top-1/2 z-50 -translate-y-1/2 rounded-full bg-white/50 opacity-0 transition-all hover:bg-white/85 group-hover:opacity-100">
          <BiChevronLeft size={30} />
        </div>
        <div className="buttonNext text-textPrim/50 absolute right-2 top-1/2 z-50 -translate-y-1/2 rounded-full bg-white/50 opacity-0 transition-all hover:bg-white/85 group-hover:opacity-100">
          <BiChevronRight size={30} />
        </div>
      </Swiper>
    </div>
  );
};

export default Slider;
