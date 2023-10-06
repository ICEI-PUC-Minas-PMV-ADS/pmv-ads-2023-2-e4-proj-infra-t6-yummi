import { RouterProvider } from 'react-router-dom';
import './libs/i18n';
import { Providers } from './providers';
import { router } from './routes';
import './theme/globals.css';

export const App = () => {
  return (
    <Providers>
      <RouterProvider router={router} />
    </Providers>
  );
};
