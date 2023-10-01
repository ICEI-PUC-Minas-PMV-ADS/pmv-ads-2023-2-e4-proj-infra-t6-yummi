import { RouteObject } from 'react-router-dom';

export const workOrdersRoutes: RouteObject[] = [
  {
    path: '/workorders',
    lazy: () => import('@/features/work-orders/containers/list-orders')
  },
  {
    path: '/workorders/create',
    lazy: () => import('@/features/work-orders/containers/create-order')
  },
  {
    path: '/workorders/:id/edit',
    lazy: () => import('@/features/work-orders/containers/edit-order')
  }
];
