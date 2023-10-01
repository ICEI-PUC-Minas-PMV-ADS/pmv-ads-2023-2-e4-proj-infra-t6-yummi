import { RouteObject } from 'react-router-dom';

export const companiesRoutes: RouteObject[] = [
  {
    path: '/companies',
    lazy: () => import('@/features/companies/containers/list-companies')
  },
  {
    path: '/companies/create',
    lazy: () => import('@/features/companies/containers/create-company')
  },
  {
    path: '/companies/:id/edit',
    lazy: () => import('@/features/companies/containers/edit-company')
  }
];
