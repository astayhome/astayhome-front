/* ------------------------ import styles on the page ----------------------- */
// import 'swiper/css';
// import 'swiper/css/pagination';
import Image from 'next/image';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import openGraph from '@/public/open-graph/astaya.jpg';

interface MobileSwiperProps {
  className?: string;
  images?: ImagesData[];
  alt?: string;
}

export default function MobileSwiper(props: MobileSwiperProps) {
  const { className = '', images, alt = '', ...otherProps } = props;

  if (!images || images.length <= 0) {
    return null;
  }

  return (
    <Swiper
      slidesPerView={1}
      pagination={{
        clickable: true,
        dynamicBullets: true,
      }}
      modules={[Pagination]}
      className={`${className} mySwiper`}
      {...otherProps}
    >
      {images.map(({ id, url }) => (
        <SwiperSlide key={id}>
          <div className="relative h-[40vh] w-screen overflow-hidden">
            <Image
              className="object-contain"
              fill
              id={id.toString()}
              src={url || openGraph}
              loading="lazy"
              quality={100}
              alt={alt}
            />
          </div>
          <div className="swiper-lazy-preloader" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
