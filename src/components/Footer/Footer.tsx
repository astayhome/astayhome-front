/* eslint-disable tailwindcss/no-custom-classname */

import { getTranslations } from 'next-intl/server';

import getContacts from '@/libs/actions/getContacts/getContacts';
import { Link } from '@/libs/i18nNavigation';

import { AppLogo } from '../AppHeader/atoms';
import { Dot, Instagram, Telegram, Whatsapp, Youtube } from '../svg';
import Container from '../UI/Container';
import FooterLink from './FooterLink';

interface FooterProps {
  className?: string;
  locale: string;
}

async function Footer(props: FooterProps) {
  const { className = '', locale, ...otherProps } = props;
  const t = await getTranslations({ locale, namespace: 'Header' });
  const contacts = await getContacts();

  return (
    <footer className={`${className} bg-gray-light p-4 lg:p-0`} {...otherProps}>
      <Container className="footerDivineLine mx-auto grid items-center justify-center gap-5 p-4 lg:grid-cols-[0.5fr,4fr,0.5fr] lg:justify-start lg:gap-0 lg:py-[29px]">
        <div className="col-span-1 flex justify-center lg:justify-start">
          <Link prefetch={false} href="/" aria-label="Main page">
            <AppLogo />
          </Link>
        </div>
        <nav className="col-span-1 flex flex-wrap justify-center *:my-2 sm:gap-5 sm:*:m-2.5">
          <FooterLink
            className="flex-[1_1_50%] text-center sm:flex-none"
            href="/"
          >
            {t('Apartments')}
          </FooterLink>
          <FooterLink
            className="flex-[1_1_50%] text-center sm:flex-none"
            href="/transfers"
          >
            {t('Transfers')}
          </FooterLink>
          <FooterLink
            className="flex-[1_1_50%] text-center sm:flex-none"
            href="/for-owners"
          >
            {t('For Owners')}
          </FooterLink>
          <FooterLink
            className="flex-[1_1_50%] text-center sm:flex-none"
            href="/complexes"
          >
            {t('All_Complexes')}
          </FooterLink>
          <FooterLink
            className="flex-[1_1_50%] text-center sm:flex-none"
            href="/about-us"
          >
            {t('About_us')}
          </FooterLink>
        </nav>
        <address className="col-span-1 flex justify-center font-normal lg:justify-end">
          <a
            target="_blank"
            href={`tel:${contacts?.phone}`}
            className="whitespace-nowrap not-italic"
          >
            {contacts?.phone}
          </a>
        </address>
      </Container>
      <Container className="mx-auto">
        <hr />
      </Container>
      <Container className="mx-auto flex flex-wrap-reverse items-center justify-center gap-3 pt-4 sm:justify-between lg:py-[29px]">
        <div className="mt-4 flex flex-wrap-reverse items-center justify-center gap-1 gap-x-2 text-sm sm:mt-0 sm:justify-start sm:gap-2 md:text-base">
          <span className=" flex-[1_1_100%] text-center sm:flex-none">
            &copy; {new Date().getFullYear()} ASTAY
          </span>
          <Dot className="hidden text-grayPrim sm:block" />
          <Link
            className="hover:underline"
            prefetch={false}
            href="/privacy-policy"
          >
            Privacy Policy
          </Link>
        </div>
        <address className="flex items-center justify-center *:mx-5 sm:*:mx-2.5">
          <a
            target="_blank"
            aria-label="Whatsapp"
            title="Whatsapp"
            href={contacts?.whatsapp}
          >
            <Whatsapp className="size-7 md:size-6" />
          </a>
          <a
            target="_blank"
            aria-label="Telegram"
            title="Telegram"
            href={contacts?.telegram}
          >
            <Telegram className="size-7 md:size-6" />
          </a>
          <a
            target="_blank"
            aria-label="Instagram"
            title="Instagram"
            href={contacts?.instagram}
          >
            <Instagram className="size-7 md:size-6" fill="currentColor" />
          </a>
          <a
            target="_blank"
            aria-label="Youtube"
            title="Youtube"
            href={contacts?.youtube}
          >
            <Youtube className="size-7 md:size-6" />
          </a>
        </address>
      </Container>
    </footer>
  );
}

export default Footer;
