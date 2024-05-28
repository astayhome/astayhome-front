import type { FC } from 'react';

import MainLogo from '@/components/svg/MainLogo';

export enum EAppLogo {
  LOGO = 'logo',
  TEXT = 'text',
}

interface IAppLogoProps {
  className?: string;
  type?: EAppLogo;
}

const AppLogo: FC<IAppLogoProps> = ({
  className = 'text-textPrim',
  type = EAppLogo.TEXT,
}) => {
  switch (type) {
    case EAppLogo.LOGO:
      return (
        <MainLogo
          width={120}
          height={50}
          className={`${className} transition-colors`}
        />
      );
    case EAppLogo.TEXT:
      return (
        <MainLogo
          width={120}
          height={50}
          className={`${className} transition-colors`}
        />
      );
    default:
      return '';
  }
};

export default AppLogo;
