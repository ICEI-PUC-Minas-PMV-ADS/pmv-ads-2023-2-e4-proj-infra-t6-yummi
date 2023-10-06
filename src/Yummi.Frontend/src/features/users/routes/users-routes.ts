import { RouteObject } from 'react-router-dom';

export const usersRoutes: RouteObject[] = [
  {
    path: '/users',
    lazy: () => import('@/features/users/containers/list-users')
  },
  {
    path: '/users/create',
    lazy: () => import('@/features/users/containers/create-user')
  },
  {
    path: '/users/:id/edit',
    lazy: () => import('@/features/users/containers/edit-user')
  }
];
