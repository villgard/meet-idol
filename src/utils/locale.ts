import { createI18n } from 'vue-i18n';
import translates from '@/locales';
import { detectBrowserLocale } from './navigator';

export type LocaleObject = {
  key: string;
  flag: string;
  label: string;
};

export const localeObjects: Record<string, LocaleObject> = {
  en: {
    key: 'en',
    flag: 'en',
    label: 'Eng',
  },
  ru: {
    key: 'ru',
    flag: 'ru',
    label: 'Rus',
  },
};

export const i18n = createI18n({
  legacy: true,
  locale: 'en',
  fallbackLocale: 'ru',
  messages: translates,
  globalInjection: true,
  allowComposition: true,
});

if (localStorage.getItem('i18n_locale') && localStorage.getItem('i18n_locale') !== 'null') {
  i18n.global.locale = localStorage.getItem('i18n_locale') || 'en';
} else {
  i18n.global.locale = detectBrowserLocale();
}

