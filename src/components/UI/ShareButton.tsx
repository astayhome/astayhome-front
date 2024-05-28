'use client';

import { useState } from 'react';

import SharedModal from '../Modals/SharedModal/SharedModal';
import { Share } from '../svg';

interface ShareButtonProps {
  className?: string;
  labelBtn: string;
  sharedText: string;
}

export default function ShareButton(props: ShareButtonProps) {
  const {
    className = '',
    labelBtn = 'Share',
    sharedText = 'Rooms with beautiful view',
    ...otherProps
  } = props;
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <div>
      <button
        type="button"
        aria-label={labelBtn}
        className={`${className} flex items-center justify-center gap-2 transition-all hover:scale-105`}
        onClick={() => setIsOpenModal(true)}
        {...otherProps}
      >
        <Share />
        <span>{labelBtn}</span>
      </button>
      <SharedModal
        isOpen={isOpenModal}
        onClose={() => setIsOpenModal(false)}
        title={sharedText}
      />
    </div>
  );
}
