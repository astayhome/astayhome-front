import dynamic from 'next/dynamic';

export const AppClearButton = dynamic(() => import('./AppClearButton'));
export const AppCounter = dynamic(() => import('./AppCounter'));
export const AppDateRange = dynamic(() => import('./AppDateRange'));
export const AppMobileNavigation = dynamic(
  () => import('./AppMobileNavigation'),
);
export const AppHeaderLink = dynamic(() => import('./AppHeaderLink'));
export const AppLogo = dynamic(() => import('./AppLogo'));
export { EAppLogo } from './AppLogo';
export const AppSearchOptionButton = dynamic(
  () => import('./AppSearchOptionButton'),
);
export const AppSearchOptionWrapper = dynamic(
  () => import('./AppSearchOptionWrapper'),
);
