'use client';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './SwiperModal.scss';

import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import openGraph from '@/public/open-graph/astaya.jpg';

import IoMdClose from '../../svg/ico/IoMdClose';

interface Props {
  isOpenModal: boolean;
  setIsOpenModal: (prev: boolean) => void;
  images: ImagesData[];
  slideNumber?: number;
  title?: string;
}

export default function SwiperModal({
  images,
  title = 'Photos',
  isOpenModal,
  setIsOpenModal,
  slideNumber = 0,
}: Props) {
  const [showModal, setShowModal] = useState(isOpenModal);

  const handleClose = useCallback(() => {
    setShowModal(false);
    setTimeout(() => {
      setIsOpenModal(false);
    }, 500);
  }, [setIsOpenModal]);

  useEffect(() => {
    setShowModal(isOpenModal);
    if (isOpenModal) document.body.style.overflow = 'hidden';
    if (!isOpenModal) document.body.style.overflow = '';
  }, [isOpenModal]);

  if (!isOpenModal) {
    return null;
  }

  return (
    <div
      className="
          inset-full
          fixed z-50 flex items-center  
          justify-center 
          overflow-hidden
          bg-black/90
          outline-none
          focus:outline-none 
        "
    >
      <div
        className="
          relative 
          size-full
          "
      >
        {/* content */}
        <div
          className={`transition-all  duration-500 ${showModal ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}
        >
          <div
            className="
              relative
              flex
              flex-col
              rounded-lg
              border-0 
              shadow-lg 
              outline-none 
              transition-all 
              focus:outline-none 
            "
          >
            {/* header */}
            <div
              className="
                fixed
                left-0
                top-0
                z-50
                flex
                w-full
                items-center
                justify-center
                rounded-t
                sm:p-6
                "
            >
              <button
                type="button"
                aria-label="Close Modal"
                className="
                    absolute
                    left-9
                    p-2
                    text-white
                    opacity-60
                    transition
                    hover:opacity-100
                  "
                onClick={handleClose}
              >
                <IoMdClose size={35} />
              </button>
              <div className="rounded-lg bg-black/60 px-6 py-2 text-lg font-semibold text-white">
                {title}
              </div>
            </div>
            {/* body */}
            <div className="relative flex h-screen select-none  items-center overflow-hidden p-2">
              <Swiper
                pagination={{
                  type: 'fraction',
                }}
                navigation
                initialSlide={slideNumber}
                modules={[Pagination, Navigation]}
                className="mySwiper"
              >
                {images.map(({ id, url }) => (
                  <SwiperSlide key={id}>
                    <div className="relative h-[calc(100vh-100px)] w-screen overflow-hidden">
                      <Image
                        className="object-contain"
                        src={url || openGraph}
                        fill
                        loading="lazy"
                        quality={100}
                        alt=""
                      />
                    </div>
                    <div className="swiper-lazy-preloader" />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
