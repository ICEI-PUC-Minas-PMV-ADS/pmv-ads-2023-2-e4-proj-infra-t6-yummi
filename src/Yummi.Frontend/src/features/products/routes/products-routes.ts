import { RouteObject } from 'react-router-dom';

export const productsRoutes: RouteObject[] = [
  {
    path: '/products',
    lazy: () => import('@/features/products/containers/list-products')
  },
  {
    path: '/products/create',
    lazy: () => import('@/features/products/containers/create-product')
  },
  {
    path: '/products/:id',
    lazy: () => import('@/features/products/containers/product-details')
  },
  {
    path: '/products/:id/edit',
    lazy: () => import('@/features/products/containers/edit-product')
  }
];
