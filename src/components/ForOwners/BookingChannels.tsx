import Image from 'next/image';
import { useTranslations } from 'next-intl';

import airbnb from '@/public/assets/images/bookingChannels/airbnb.png';
import booking from '@/public/assets/images/bookingChannels/booking.png';
import dubizzle from '@/public/assets/images/bookingChannels/dubizzle.png';
import expedia from '@/public/assets/images/bookingChannels/expedia.png';
import propFinder from '@/public/assets/images/bookingChannels/property_finder.png';
import vrbo from '@/public/assets/images/bookingChannels/vrbo.png';

interface BookingChannelsProps {
  className?: string;
}

export default function BookingChannels(props: BookingChannelsProps) {
  const { className = '', ...otherProps } = props;
  const t = useTranslations('ForOwnersPageText.Booking Title');

  return (
    <section className={`${className}`} {...otherProps}>
      <h2 className="text-center text-2xl font-bold md:text-4xl">
        <span className="text-primary">{t('first')}</span> {t('second')}
      </h2>
      <div className=" mt-2 flex flex-wrap justify-evenly xs:mt-0">
        <div className="flex flex-col items-center *:mt-2 *:h-auto *:max-w-48 *:flex-auto xs:justify-center sm:*:mt-5 sm:*:max-w-60 lg:*:max-w-72">
          <Image
            src={airbnb}
            loading="lazy"
            width={385}
            height={145}
            alt="AirBnB"
            placeholder="blur"
            quality={100}
          />
          <Image
            src={dubizzle}
            loading="lazy"
            width={385}
            height={145}
            alt="Dubizzle"
            placeholder="blur"
            quality={100}
          />
          <Image
            src={vrbo}
            loading="lazy"
            width={385}
            height={145}
            alt="Vrbo"
            placeholder="blur"
            quality={100}
          />
        </div>
        <div className="flex flex-col items-center *:mt-2 *:h-auto *:max-w-48 *:flex-auto xs:justify-center sm:*:mt-5 sm:*:max-w-60 lg:*:max-w-72">
          <Image
            src={booking}
            loading="lazy"
            width={385}
            height={145}
            alt="Booking"
            placeholder="blur"
            quality={100}
          />
          <Image
            src={expedia}
            loading="lazy"
            width={385}
            height={145}
            alt="Expedia"
            placeholder="blur"
            quality={100}
          />
          <Image
            src={propFinder}
            loading="lazy"
            width={385}
            height={145}
            alt="Property Finder"
            placeholder="blur"
            quality={100}
          />
        </div>
      </div>
    </section>
  );
}
