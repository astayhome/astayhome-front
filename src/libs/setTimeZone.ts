import Cookies from './Cookies';

export function setTimeZone() {
  const tzOffset = new Date().getTimezoneOffset().toString();
  const { timeZone } = Intl.DateTimeFormat().resolvedOptions();
  Cookies.set('time-zone', timeZone);
  Cookies.set('time-zone-offset', tzOffset);
}
