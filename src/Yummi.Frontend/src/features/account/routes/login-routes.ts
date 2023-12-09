import { RouteObject } from 'react-router-dom';

export const usersRoutes: RouteObject[] = [
  {
    path: '/login',
    lazy: () => import('@/features/account/containers/login')
  },
  {
    path: '/users/create',
    lazy: () => import('@/features/account/containers/create-account')
  },
  {
    path: '/users/:id/edit',
    lazy: () => import('@/features/account/containers/forget-password')
  }
];
