import { ContextProvider } from '@/context/store';
import getContacts from '@/libs/actions/getContacts/getContacts';
import getLocalization from '@/libs/actions/getLocalization/getLocalization';

import AppHeader from './AppHeader';

interface HeaderProps {
  className?: string;
  locale: string;
}

export async function Header({ className, locale }: HeaderProps) {
  const contacts = await getContacts();

  const translate = await getLocalization(locale);

  return (
    <ContextProvider>
      <AppHeader className={className} t={translate} contacts={contacts} />
    </ContextProvider>
  );
}
