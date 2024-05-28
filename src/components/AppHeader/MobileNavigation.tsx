import getLocalization from '@/libs/actions/getLocalization/getLocalization';

import { AppMobileNavigation } from './atoms';

interface MobileNavigationProps {
  className?: string;
  locale: string;
}

export default async function MobileNavigation({
  className,
  locale,
}: MobileNavigationProps) {
  const translate = await getLocalization(locale);

  return <AppMobileNavigation className={className} translate={translate} />;
}
