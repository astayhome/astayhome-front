import Link from 'next/link';

import { Instagram, Telegram, Whatsapp, Youtube } from '../svg';

interface SocialLinksProps {
  className?: string;
  data: HostContacts;
}

type Socials = {
  link: string;
  img: React.ReactNode;
};

const styles = 'w-6 h-6';

export default function SocialLinks(props: SocialLinksProps) {
  const { className = '', data, ...otherProps } = props;
  const socials: Socials[] = [
    {
      link: data?.whatsapp,
      img: (
        <Whatsapp
          className={styles}
          title="Whatsapp"
          fill="var(--color-text)"
        />
      ),
    },
    {
      link: data?.telegram,
      img: (
        <Telegram
          className={styles}
          title="Telegram"
          fill="var(--color-text)"
        />
      ),
    },
    {
      link: data?.instagram,
      img: (
        <Instagram
          className={styles}
          title="Instagram"
          fill="var(--color-text)"
        />
      ),
    },
    {
      link: data?.youtube,
      img: (
        <Youtube className={styles} title="Youtube" fill="var(--color-text)" />
      ),
    },
  ];
  return (
    <div
      className={`${className} flex w-full items-center justify-evenly *:mx-1.5`}
      {...otherProps}
    >
      {socials.map(({ link, img }) => (
        <Link
          prefetch={false}
          target="_blank"
          href={link || ''}
          key={link || ''}
        >
          {img}
        </Link>
      ))}
    </div>
  );
}
