import { type Config } from 'tailwindcss';
import colors from './colors';

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  corePlugins: {
    preflight: false
  },
  theme: {
    screens: {
      xs: '480px',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      xxl: '1600px'
    },
    extend: {
      colors,
      fontFamily: {
        sans: ['Inter Variable, sans-serif']
      }
    }
  },
  plugins: []
};

export default config;
