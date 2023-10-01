import { RouteObject } from 'react-router-dom';

export const unitsRoutes: RouteObject[] = [
  {
    path: '/units',
    lazy: () => import('@/features/units/containers/list-units')
  },
  {
    path: '/units/create',
    lazy: () => import('@/features/units/containers/create-unit')
  },
  {
    path: '/units/:id/edit',
    lazy: () => import('@/features/units/containers/edit-unit')
  }
];
