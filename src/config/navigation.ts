import { PRIVATE_ROUTES } from './routes';

export interface INavItem {
  label: string;
  to: string;
}

export const navigationItems: INavItem[] = [
  {
    label: 'dashboard',
    to: `/${PRIVATE_ROUTES.DASHBOARD}`
  }
];
