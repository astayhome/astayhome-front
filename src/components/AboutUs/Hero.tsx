import Image from 'next/image';
import { useTranslations } from 'next-intl';

import bgImage from '@/public/assets/images/aboutUs-bg.webp';

interface HeroProps {
  className?: string;
}

export default function Hero(props: HeroProps) {
  const { className = '', ...otherProps } = props;
  const t = useTranslations('AboutUsPageText');

  return (
    <section className={`${className} relative`} {...otherProps}>
      <Image
        className="object-cover"
        src={bgImage}
        fill
        alt="view form pool"
        priority
        loading="eager"
        placeholder="blur"
      />
      <h1 className="absolute left-[15%] top-[15%] text-4xl font-extrabold uppercase text-white md:text-6xl lg:sm:text-[80px]">
        {t('About Us')}
      </h1>
    </section>
  );
}
