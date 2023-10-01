import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import * as en from '@/translations/en';
import * as pt from '@/translations/pt';

const i18nInstance = i18n.use(initReactI18next).init({
  resources: { en, pt },
  lng: 'pt',
  fallbackLng: 'pt',
  interpolation: { escapeValue: false }
});

export default i18nInstance;
