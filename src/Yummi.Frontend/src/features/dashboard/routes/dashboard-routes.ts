import { RouteObject } from 'react-router-dom';

export const dashboardRoutes: RouteObject[] = [
  {
    path: '/',
    lazy: () => import('@/features/dashboard/containers/reports')
  }
];
