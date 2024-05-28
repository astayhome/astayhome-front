'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';

import ContactModal from '@/components/Modals/ContactModal/ContactModal';

import SectionPackages from './SectionPackages';

interface PackagesOfServicesProps {
  className?: string;
}
export type PackagesData = {
  id: string;
  text: string;
};

export default function PackagesOfServices(props: PackagesOfServicesProps) {
  const { className = '', ...otherProps } = props;
  const [isOpenModal, setIsOpenModal] = useState(false);
  const t = useTranslations('ForOwnersPageText');
  const packages1 = useTranslations(
    'ForOwnersPageText.Packages Service1.packages',
  );
  const packages2 = useTranslations(
    'ForOwnersPageText.Packages Service2.packages',
  );

  const package1: PackagesData[] = [
    {
      id: 'asdasd3',
      text: packages1('Property preparation'),
    },
    {
      id: 'asdasd4',
      text: packages1('Photo / video shoots'),
    },
    {
      id: 'asdasd5',
      text: packages1('Marketing plan'),
    },
    {
      id: 'asdasd6',
      text: packages1('Listing creation'),
    },
    {
      id: 'asdasd7',
      text: packages1('Air conditioning maintenance'),
    },
    {
      id: 'asdasd8',
      text: packages1('Water, electric, check'),
    },
    {
      id: 'asdasd9',
      text: packages1('Air conditioning maintenance'),
    },
    {
      id: 'asdasd10',
      text: packages1('Insect control'),
    },
    {
      id: 'asdasd11',
      text: packages1('Bill payments'),
    },
    {
      id: 'asdasd12',
      text: packages1('Finance report'),
    },
  ];

  const package2: PackagesData[] = [
    {
      id: 'asdasda3',
      text: packages2('Full ventilation'),
    },
    {
      id: 'asdasda4',
      text: packages2('Fresh clean'),
    },
    {
      id: 'asdasda5',
      text: packages2('Deep clean with laundry'),
    },
    {
      id: 'asdasda6',
      text: packages2('Water, electric, check'),
    },
    {
      id: 'asdasda7',
      text: packages2('Air conditioning maintenance'),
    },
    {
      id: 'asdasda8',
      text: packages2('Laundry services'),
    },
    {
      id: 'asdasda9',
      text: packages2('Insect control'),
    },
    {
      id: 'asdasda10',
      text: packages2('Bill payments'),
    },
    {
      id: 'asdasda11',
      text: packages2('Finance report'),
    },
  ];

  return (
    <section className={`${className} pt-5 md:pt-10`} {...otherProps}>
      <h2 className="text-center text-3xl font-bold md:text-4xl">
        {t('Packages Title')}
      </h2>
      <div className="mx-auto mt-5 flex max-w-7xl flex-col items-center justify-around md:mt-10 md:flex-row md:items-stretch">
        <SectionPackages
          servicePackage={package1}
          onClick={() => setIsOpenModal((prev) => !prev)}
          name={t('Packages Service1.title')}
          desc={t('Packages Service1.subTitle')}
        />
        <SectionPackages
          servicePackage={package2}
          onClick={() => setIsOpenModal((prev) => !prev)}
          name={t('Packages Service2.title')}
          desc={t('Packages Service2.subTitle')}
        />
      </div>
      <ContactModal
        isOpenModal={isOpenModal}
        setIsOpenModal={setIsOpenModal}
        pageName="forOwners"
      />
    </section>
  );
}
