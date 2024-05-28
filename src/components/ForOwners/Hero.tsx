import Image from 'next/image';
import { useTranslations } from 'next-intl';

import bgImage from '@/public/assets/images/forOwners-bg.webp';

import { EmailStroke, PhoneStroke, WhatsappStroke } from '../svg';
import LeaveRequest from './LeaveRequest';

interface HeroProps {
  className?: string;
  contacts: HostContacts;
}

export default function Hero(props: HeroProps) {
  const { className = '', contacts, ...otherProps } = props;
  const t = useTranslations('ForOwnersPageText');
  const tContact = useTranslations('ContactUs');
  return (
    <section className={`${className} relative`} {...otherProps}>
      <Image
        className="object-cover brightness-[0.3]"
        src={bgImage}
        fill
        alt="ASTAY For Owners"
        priority
        loading="eager"
        placeholder="blur"
      />
      <div className="inset-full absolute mt-5 flex flex-col items-center justify-center px-5 text-white sm:mt-20 sm:px-10 md:mt-24">
        <div className="text-center">
          <h1 className="text-2xl font-medium uppercase sm:text-3xl md:text-4xl lg:text-5xl">
            {t('Hero Title')}
          </h1>
          <p className="mt-2 sm:mt-5 sm:text-lg lg:text-2xl">
            {t('Hero Text')}
          </p>
        </div>
        <LeaveRequest />
        <div className=" mt-5 flex flex-wrap items-center justify-center text-white *:mx-3 *:my-4 xs:flex-nowrap sm:mt-10 sm:*:mx-5">
          <a
            href={`tel:${contacts?.phone}`}
            target="_blank"
            className="flex items-center"
          >
            <PhoneStroke size={24} className="mr-2" />
            <span>{tContact('Phone')}</span>
          </a>
          <a
            href={contacts?.whatsapp || ''}
            target="_blank"
            className="flex items-center"
          >
            <WhatsappStroke size={24} className="mr-2" />
            <span>Whatsapp</span>
          </a>
          <a
            href={`mailto:${contacts?.email}`}
            target="_blank"
            className="flex items-center"
          >
            <EmailStroke size={24} className="mr-2" />
            <span>{tContact('Email')}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
