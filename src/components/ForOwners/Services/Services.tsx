import { useTranslations } from 'next-intl';

import {
  BellBoy,
  Bullhorn,
  CleanInHands,
  HomeInHand,
  Housekeeping,
  PhotoCamera,
  PriceOptimization,
  ThaiBaht,
} from '@/components/svg';

import type { ServiceCardData } from './ServiceCards/Card/Card';
import ServiceCards from './ServiceCards/ServiceCards';

interface ServicesProps {
  className?: string;
}

export default function Services(props: ServicesProps) {
  const { className = '', ...otherProps } = props;
  const t = useTranslations('ForOwnersPageText');
  const care = useTranslations('ForOwnersPageText.Properties1');
  const management = useTranslations('ForOwnersPageText.Properties2');
  const serviceCareData: ServiceCardData[] = [
    {
      title: care('Inspection/Maintenance.title'),
      desc: care('Inspection/Maintenance.value'),
      Img: <Housekeeping size={40} className="size-8 md:size-10" />,
    },
    {
      title: care('Housekeeping.title'),
      desc: care('Housekeeping.value'),
      Img: <HomeInHand size={40} className="size-8 md:size-10" />,
    },
    {
      title: care('Linen and toiletries.title'),
      desc: care('Linen and toiletries.value'),
      Img: <CleanInHands size={40} className="size-8 md:size-10" />,
    },
    {
      title: care('Bill payments.title'),
      desc: care('Bill payments.value'),
      Img: <ThaiBaht size={40} className="size-8 md:size-10" />,
    },
  ];

  const serviceManagementData: ServiceCardData[] = [
    {
      title: management('Multiple listings.title'),
      desc: management('Multiple listings.value'),
      Img: <Bullhorn size={40} className="size-8 md:size-10" />,
    },
    {
      title: management('Professional photography.title'),
      desc: management('Professional photography.value'),
      Img: <PhotoCamera size={40} className="size-8 md:size-10" />,
    },
    {
      title: management('Price optimization.title'),
      desc: management('Price optimization.value'),
      Img: <PriceOptimization size={40} className="size-8 md:size-10" />,
    },
    {
      title: management('Guest vetting/Check in.title'),
      desc: management('Guest vetting/Check in.value'),
      Img: <BellBoy size={40} className="size-8 md:size-10" />,
    },
  ];

  return (
    <section className={`${className} text-black`} {...otherProps}>
      <h2 className="text-center text-2xl font-bold md:text-4xl">
        <span className="text-primary">{t('Services Title.first')}</span>{' '}
        {t('Services Title.second')}
      </h2>
      <p className="mt-3 text-center text-lg">{t('Services Text')}</p>
      <div className="mx-auto mt-7 flex max-w-5xl flex-col items-center lg:flex-row lg:items-start lg:justify-evenly">
        <ServiceCards
          className="max-w-sm lg:ml-14"
          title={t('Services Property1.title')}
          propertyName={t('Services Property1.value')}
          data={serviceCareData}
        />
        <ServiceCards
          className="mt-7 max-w-sm lg:ml-14 lg:mt-0"
          title={t('Services Property2.title')}
          propertyName={t('Services Property2.value')}
          data={serviceManagementData}
        />
      </div>
    </section>
  );
}
