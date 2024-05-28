/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TelegramIcon,
  TelegramShareButton,
  ViberIcon,
  ViberShareButton,
  VKIcon,
  VKShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from 'react-share';

import IoMdClose from '@/components/svg/ico/IoMdClose';

interface SharedModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}

export default function SharedModal(props: SharedModalProps) {
  const { className = '', isOpen, onClose, title, ...otherProps } = props;
  const [showModal, setShowModal] = useState(isOpen);
  const currentUrl = useRef<string>('');
  useEffect(() => {
    currentUrl.current = window.location.href;
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className={`${className} inset-full fixed  z-50  flex  items-center justify-center overflow-hidden bg-neutral-800/70  outline-none focus:outline-none`}
      {...otherProps}
      onClick={handleClose}
    >
      <div
        className="
          relative 
          mx-auto"
      >
        {/* content */}
        <div
          className={`
            h-full
            transition-all
            duration-300
            ${showModal ? 'translate-y-0' : 'translate-y-full'}
            ${showModal ? 'opacity-100' : 'opacity-0'}
          `}
        >
          <div
            className="
            relative
            rounded-lg
              border-0
              bg-white 
              p-4 
              shadow-lg 
              outline-none 
              transition-all 
              focus:outline-none 
            "
          >
            {/* header */}

            <button
              type="button"
              aria-label="Close Modal"
              className="
                    absolute
                    left-2
                    top-2
                    z-30 
                    rounded-full
                    border
                    p-1
                    shadow-lg
                    transition
                    hover:scale-110
                  "
              onClick={handleClose}
            >
              <IoMdClose size={25} />
            </button>
            {/* body */}
            <div className="relative flex flex-auto flex-wrap items-center justify-center px-3 *:mx-2.5 md:p-6">
              <FacebookShareButton
                url={currentUrl.current}
                className="transition-all hover:scale-105"
              >
                <FacebookIcon round />
              </FacebookShareButton>
              <LinkedinShareButton
                url={currentUrl.current}
                title={title}
                className="transition-all hover:scale-105"
              >
                <LinkedinIcon round />
              </LinkedinShareButton>
              <TelegramShareButton
                url={currentUrl.current}
                title={title}
                className="transition-all hover:scale-105"
              >
                <TelegramIcon round />
              </TelegramShareButton>
              <ViberShareButton
                url={currentUrl.current}
                title={title}
                className="transition-all hover:scale-105"
              >
                <ViberIcon round />
              </ViberShareButton>
              <WhatsappShareButton
                url={currentUrl.current}
                title={title}
                className="transition-all hover:scale-105"
              >
                <WhatsappIcon round />
              </WhatsappShareButton>
              <VKShareButton
                url={currentUrl.current}
                title={title}
                className="transition-all hover:scale-105"
              >
                <VKIcon round />
              </VKShareButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
