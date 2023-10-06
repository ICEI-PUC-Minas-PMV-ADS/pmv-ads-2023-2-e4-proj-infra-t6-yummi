import { RouteObject } from 'react-router-dom';

export const assetsRoutes: RouteObject[] = [
  {
    path: '/assets',
    lazy: () => import('@/features/assets/containers/list-assets')
  },
  {
    path: '/assets/create',
    lazy: () => import('@/features/assets/containers/create-asset')
  },
  {
    path: '/assets/:id',
    lazy: () => import('@/features/assets/containers/asset-details')
  },
  {
    path: '/assets/:id/edit',
    lazy: () => import('@/features/assets/containers/edit-asset')
  }
];
