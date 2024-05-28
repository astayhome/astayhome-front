/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

'use client';

import { useCallback, useEffect, useState } from 'react';

import IoMdClose from '../svg/ico/IoMdClose';
import Button from '../UI/Button';

interface ModalProps {
  btnType?: 'button' | 'reset' | 'submit';
  isOpen?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel: string;
  disabled?: boolean;
  secondaryAction?: () => void;
  secondaryActionLabel?: string;
  hideFooter?: boolean;
  useGap?: boolean;
  customClassNameSize?: string;
  noScroll?: boolean;
}

const Modal: React.FC<ModalProps> = ({
  btnType,
  isOpen,
  onClose,
  onSubmit,
  title,
  hideFooter = false,
  useGap = true,
  body,
  actionLabel,
  footer,
  disabled,
  secondaryAction,
  secondaryActionLabel,
  customClassNameSize = 'md:h-auto md:w-4/6 lg:h-auto lg:w-3/6 xl:w-2/5',
  noScroll = false,
}) => {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen);
    if (!noScroll) {
      if (isOpen) document.body.style.overflow = 'hidden';
      if (!isOpen) document.body.style.overflow = '';
    }
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }

    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [onClose, disabled]);

  const handleSubmit = useCallback(
    (e: any) => {
      e.preventDefault();
      if (disabled) {
        return;
      }

      onSubmit();
    },
    [onSubmit, disabled],
  );

  const handleSecondaryAction = useCallback(() => {
    if (disabled || !secondaryAction) {
      return;
    }

    secondaryAction();
  }, [secondaryAction, disabled]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="
          inset-full
          fixed 
          z-50 
          flex 
          items-center
          justify-center
          bg-neutral-800/70 
          outline-none focus:outline-none 
        "
    >
      <div
        className={`relative mx-auto size-full ${customClassNameSize} md:my-6`}
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
            className={`${useGap ? 'gap-2  sm:gap-12' : ''} relative flex size-full flex-col rounded-lg border-0 bg-white shadow-lg outline-none transition-all focus:outline-none md:h-auto lg:h-auto`}
          >
            {/* header */}
            <div
              className="
                relative 
                flex 
                items-center
                justify-center
                rounded-t
                border-b
                p-6
                "
            >
              <button
                type="button"
                aria-label="Close Modal"
                className="
                    absolute
                    left-9 
                    border-0
                    p-1
                    transition
                    hover:opacity-70
                  "
                onClick={handleClose}
              >
                <IoMdClose size={18} />
              </button>
              <div className="text-lg font-semibold">{title}</div>
            </div>
            {/* body */}
            <div className="relative flex flex-auto items-center justify-center overflow-y-auto px-3 *:w-full md:p-6">
              {body}
            </div>
            {/* footer */}
            {!hideFooter && (
              <div className="flex flex-auto flex-col gap-2 px-3 md:p-6">
                <div
                  className="
                    flex 
                    w-full 
                    flex-row 
                    items-center 
                    gap-4
                  "
                >
                  {secondaryAction && secondaryActionLabel && (
                    <Button
                      className="mb-3 rounded-lg"
                      disabled={disabled}
                      label={secondaryActionLabel}
                      onClick={handleSecondaryAction}
                      outline
                    />
                  )}
                  <Button
                    type={btnType}
                    className="mb-3 rounded-lg"
                    disabled={disabled}
                    label={actionLabel}
                    onClick={handleSubmit}
                  />
                </div>
                {footer}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
