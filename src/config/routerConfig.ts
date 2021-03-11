import { PRIVATE_ROUTES, PUBLIC_ROUTES } from './routes';
import { ComponentType } from "react";
import { WithHelmetProps } from "../common/components/HOC/withHelmet";
import AuthenticationSwitch from "../pages/Authentication/AuthenticationSwitch";
import LoginPage from "../pages/Authentication/LoginPage/LoginPage";
import DashboardSwitch from "../pages/Dashboard/DashboardSwitch";
import DashboardPage from "../pages/Dashboard/DashboardPage/DashboardPage";

export interface IRoute {
  exact?: boolean;
  Component: ComponentType<any & WithHelmetProps>;
  messagePrefix?: string;
  path: string;
  nestedRoutes?: INestedRoute[]
}

export interface INestedRoute extends Pick<IRoute, Exclude<keyof IRoute, 'path'>> {
  path: (parentUrl: string) => string;
}

export const DEFAULT_ROUTE: string = `/${PUBLIC_ROUTES.AUTH}/${PUBLIC_ROUTES.LOGIN}`;

export const GLOBAL_ROUTES: IRoute[] = [
  {
    Component: AuthenticationSwitch,
    path: `/${PUBLIC_ROUTES.AUTH}`,
    nestedRoutes: [
      {
        exact: true,
        Component: LoginPage,
        messagePrefix: 'authPage',
        path: matchUrl => `${matchUrl}`,
      },
      {
        Component: LoginPage,
        messagePrefix: 'loginPage',
        path: matchUrl => `${matchUrl}/${PUBLIC_ROUTES.LOGIN}`,
      }
    ]
  },
  {
    exact: true,
    Component: DashboardSwitch,
    path: `/${PRIVATE_ROUTES.DASHBOARD}`,
    nestedRoutes: [
      {
        exact: true,
        Component: DashboardPage,
        messagePrefix: 'dashboardPage',
        path: matchUrl => `${matchUrl}`,
      }
    ]
  }
];
