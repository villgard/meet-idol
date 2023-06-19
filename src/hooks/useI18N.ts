import { useI18n } from "vue-i18n";
import { computed } from "vue";
import {i18n, localeObjects } from "@/utils/locale";

export const useI18N = (prefix?: string) => {
  const i18nHook = useI18n();

  const localeObject = computed(() => localeObjects[i18nHook.locale.value]);
  const isRussian = computed(() => i18nHook.locale.value === 'ru');

  function setLocale(locale: string) {
    if (Object.keys(localeObjects).includes(locale)) {
      i18n.global.locale = locale as 'ru' | 'en';
      localStorage.setItem('i18n_locale', locale);
      document.documentElement.setAttribute('lang', locale);
    }
  }

  function tWithPrefix(path: string, ...args) {
    return i18nHook.t(`${prefix ? `${prefix}.` : ''}${path}`, ...args);
  }

  return {
    ...i18nHook,
    t: tWithPrefix,
    localeObject,
    isRussian,
    localeObjects,
    setLocale,
  }
}
