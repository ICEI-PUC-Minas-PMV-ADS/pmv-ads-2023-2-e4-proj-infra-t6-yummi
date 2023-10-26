import { assetsRoutes } from '@/features/assets/routes';
import { ErrorPage, LayoutPage } from '@/features/common/containers';
import { usersRoutes } from '@/features/users/routes';
import { workOrdersRoutes } from '@/features/work-orders/routes';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutPage />,
    errorElement: <ErrorPage />,
    children: [
      ...assetsRoutes,
      ...usersRoutes,
      ...workOrdersRoutes,
      {
        path: '*',
        lazy: () => import('@/features/common/containers/not-found-page')
      }
    ]
  }
]);
