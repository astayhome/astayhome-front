'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';

import ContactModal from '../Modals/ContactModal/ContactModal';
import ButtonSubmit from '../UI/ButtonSubmit';

interface AskQuestionProps {
  className?: string;
  pageName: string;
}

export default function AskQuestion(props: AskQuestionProps) {
  const { className = '', pageName, ...otherProps } = props;
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations('ForOwnersPageText');
  return (
    <>
      <div
        className={`${className} mt-5 flex justify-center md:mt-10`}
        {...otherProps}
      >
        <ButtonSubmit
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex-auto rounded-full px-12 py-2 font-bold last:mt-5 sm:text-lg lg:flex-none"
          title={t('Ask a question')}
        />

        {/* <button
          className="rounded-full border border-primary bg-transparent px-10 py-2 font-bold text-primary transition-all hover:bg-primary hover:text-white active:scale-90 active:border-gold active:bg-gold active:text-white"
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {t('Ask a question')}
        </button> */}
      </div>
      <ContactModal
        isOpenModal={isOpen}
        setIsOpenModal={setIsOpen}
        pageName={pageName}
        withMessage
        headerText={t('ModalText')}
        modalName={t('Ask a question')}
      />
    </>
  );
}
