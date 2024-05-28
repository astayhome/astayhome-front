'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

import openGraph from '@/public/open-graph/astaya.jpg';

import SwiperModal from '../../Modals/Swiper/SwiperModal';
import FourSquad from '../../svg/ui/FourSquad';
import Container from '../Container';

const MobileSwiper = dynamic(() => import('./MobileSwiper'));

interface GalleryProps {
  className?: string;
  imgs?: string[];
  images: ImagesData[];
  name: string;
}

export default function Gallery(props: GalleryProps) {
  const { className = '', images = [], name = '', ...otherProps } = props;

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [initialSlide, setInitialSlide] = useState(0);
  const t = useTranslations('Gallery');

  const onClick = (event: any) => {
    const target = event.target as HTMLImageElement;
    const number = Number(target.dataset.slideNumber) || 0;
    setInitialSlide(number);
    setIsOpenModal(true);
  };

  return (
    <>
      <Container>
        <section
          className={`${className} relative mt-7 hidden grid-cols-3 grid-rows-2 gap-5 overflow-hidden rounded-2xl md:grid md:min-h-[300px] lg:grid-cols-4`}
          {...otherProps}
        >
          <div className=" relative col-span-2 row-span-2 aspect-[3/2] overflow-hidden bg-grayPrim">
            <Image
              data-slide-number={0}
              className="size-full select-none object-cover brightness-100 transition-all hover:brightness-75"
              src={images[0]?.url || openGraph}
              priority
              fill
              alt={name}
              onClick={onClick}
              quality={100}
            />
          </div>
          <div className=" relative overflow-hidden bg-grayPrim">
            <Image
              data-slide-number={1}
              className="size-full select-none object-cover brightness-100 transition-all hover:brightness-75"
              src={images[1]?.url || openGraph}
              priority
              fill
              alt={name}
              onClick={onClick}
              quality={100}
            />
          </div>
          <div className=" relative overflow-hidden bg-grayPrim">
            <Image
              data-slide-number={2}
              className="size-full select-none object-cover brightness-100 transition-all hover:brightness-75"
              src={images[2]?.url || openGraph}
              priority
              fill
              alt={name}
              onClick={onClick}
              quality={100}
            />
          </div>
          <div className="relative hidden overflow-hidden bg-grayPrim lg:block">
            <Image
              data-slide-number={3}
              className="size-full select-none object-cover brightness-100 transition-all hover:brightness-75"
              src={images[3]?.url || openGraph}
              priority
              fill
              alt={name}
              onClick={onClick}
              quality={100}
            />
          </div>
          <div className="relative hidden overflow-hidden bg-grayPrim lg:block">
            <Image
              data-slide-number={4}
              className="size-full select-none object-cover brightness-100 transition-all hover:brightness-75"
              src={images[4]?.url || openGraph}
              priority
              fill
              alt={name}
              onClick={onClick}
              quality={100}
            />
          </div>
          <button
            className="absolute bottom-5 right-5 flex h-10 w-40 items-center justify-center gap-1 rounded-md border border-stroke bg-white text-sm font-semibold transition-all hover:scale-105 hover:bg-gray-light"
            type="button"
            aria-label="See all photos"
            data-slide-number={0}
            onClick={onClick}
          >
            <FourSquad size={16} />
            <span className="leading-none">{t('Show all photos')}</span>
          </button>
        </section>
      </Container>

      <section className="md:hidden">
        <MobileSwiper images={images} alt={name} />
      </section>
      <SwiperModal
        slideNumber={initialSlide}
        images={images}
        isOpenModal={isOpenModal}
        setIsOpenModal={setIsOpenModal}
        title={t('Photos')}
      />
    </>
  );
}
