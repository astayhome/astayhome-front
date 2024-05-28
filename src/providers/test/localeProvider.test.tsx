/* eslint-disable testing-library/prefer-screen-queries */
import { render } from '@testing-library/react';
import { useMessages, useTimeZone } from 'next-intl';
import type { ReactNode } from 'react';

import { LocaleProvider } from '@/providers/localeProvired';

type Props = {
  children: ReactNode;
};

jest.mock('next-intl', () => ({
  useMessages: jest.fn(() => ({ 'en-US': { greeting: 'Hello!' } })),
  NextIntlClientProvider: ({ children }: Props) => children,
  useTimeZone: jest.fn(() => 'UTC'),
}));

describe('LocaleProvider', () => {
  it('renders children with messages and timeZone', () => {
    const { getByText } = render(
      <LocaleProvider>
        <div>Child Component</div>
      </LocaleProvider>,
    );

    expect(getByText('Child Component')).toBeInTheDocument();

    expect(useMessages).toHaveBeenCalled();
    expect(useTimeZone).toHaveBeenCalled();
  });
});
