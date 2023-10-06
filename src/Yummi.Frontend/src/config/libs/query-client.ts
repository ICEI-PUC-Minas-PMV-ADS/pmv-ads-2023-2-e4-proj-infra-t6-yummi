import { MutationCache, QueryClient } from '@tanstack/react-query';
import { notification } from 'antd';
import { TFunction } from 'i18next';

export const createQueryClient = (t: TFunction) =>
  new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false
      }
    },
    mutationCache: new MutationCache({
      onError(error) {
        if (error instanceof Error) {
          notification.error({
            message: t('errors:title'),
            description: t(`errors:${error.message}`) || t('errors:unknown')
          });
        }
      }
    })
  });
