import '@fontsource-variable/inter';
import type { ThemeConfig } from 'antd';
import colors from './colors';

export const theme: ThemeConfig = {
  components: {
    Typography: {
      titleMarginBottom: 0
    }
  },
  token: {
    fontSize: 16,
    colorPrimary: colors['primary-400'],
    fontFamily: 'Inter Variable, sans-serif',
    borderRadius: 8
  }
};
