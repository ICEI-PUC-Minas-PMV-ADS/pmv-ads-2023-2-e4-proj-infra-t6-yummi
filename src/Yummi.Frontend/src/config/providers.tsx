import { QueryClientProvider } from '@tanstack/react-query';
import { ConfigProvider as ThemeProvider } from 'antd';
import type { PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';
import { createQueryClient } from './libs';
import { theme } from './theme';

export const Providers = ({ children }: PropsWithChildren) => {
  const { t } = useTranslation();

  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={createQueryClient(t)}>
        {children}
      </QueryClientProvider>
    </ThemeProvider>
  );
};
