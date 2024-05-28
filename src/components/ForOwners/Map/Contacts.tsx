'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';

import { Instagram, Telegram, Whatsapp, Youtube } from '@/components/svg';
import ButtonSubmit from '@/components/UI/ButtonSubmit';

import ContactModal from '../../Modals/ContactModal/ContactModal';

interface ContactsProps {
  className?: string;
  contacts: HostContacts;
}

type Socials = {
  link: string;
  img: React.ReactNode;
};

const styles = 'size-7 sm:size-8';

export default function Contacts(props: ContactsProps) {
  const { className = '', contacts, ...otherProps } = props;
  const [isOpenModal, setIsOpenModal] = useState(false);
  const t = useTranslations('ContactUs');

  const socials: Socials[] = [
    {
      link: contacts?.whatsapp || '',
      img: <Whatsapp className={styles} title="Whatsapp" fill="#fff" />,
    },
    {
      link: contacts?.telegram || '',
      img: <Telegram className={styles} title="Telegram" fill="#fff" />,
    },
    {
      link: contacts?.instagram || '',
      img: <Instagram className={styles} title="Instagram" fill="#fff" />,
    },
    {
      link: contacts?.youtube || '',
      img: <Youtube className={styles} title="Youtube" fill="#fff" />,
    },
  ];

  return (
    <>
      <address
        className={`${className} sm: bottom-7 left-7 z-30 mx-auto w-full rounded-2xl bg-primary80 p-5 not-italic text-white md:absolute md:w-[400px]`}
        {...otherProps}
      >
        <h2 className="text-3xl font-bold md:text-4xl">{t('Contacts')}</h2>
        <div>
          <h3 className="font-semibold md:text-lg">{t('Address')}:</h3>
          <p>{contacts?.address}</p>
        </div>
        <div className="mt-5">
          <h3 className="font-semibold md:text-lg">{t('Work Time')}:</h3>
          <p>{contacts?.workTime}</p>
        </div>
        <div className="mt-5">
          <h3 className="font-semibold md:text-lg">{t('Phones')}:</h3>
          <a href={`tel:${contacts?.phone}`}>{contacts?.phone}</a>
        </div>
        <div className="mt-5">
          <h3 className=" font-semibold md:text-lg">{t('E-mail')}:</h3>
          <a href={`mailto:${contacts?.email}`}>{contacts?.email}</a>
        </div>
        <div className=" mt-5 flex flex-col items-center justify-center">
          <ButtonSubmit
            onClick={() => setIsOpenModal((prev) => !prev)}
            className="flex-auto rounded-full px-16 py-3 font-bold last:mt-5 sm:text-lg lg:flex-none"
            title={t('Contact us')}
          />
          {/* <button
            className="rounded-full bg-white px-12 py-3 font-semibold text-textPrim transition-all hover:bg-gold hover:text-white active:scale-90 active:bg-gold active:text-white sm:text-lg"
            type="button"
            onClick={() => setIsOpenModal((prev) => !prev)}
          >
            {t('Contact us')}
          </button> */}
          <div className="mt-5 flex w-full items-center justify-evenly gap-3">
            {socials.map(({ link, img }) => (
              <a href={link} target="_blank" key={link}>
                {img}
              </a>
            ))}
          </div>
        </div>
      </address>
      <ContactModal
        isOpenModal={isOpenModal}
        setIsOpenModal={setIsOpenModal}
        pageName="forOwners"
        modalName={t('Contacts')}
        withMessage={false}
      />
    </>
  );
}
