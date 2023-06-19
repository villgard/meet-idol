export const detectBrowserLocale = (): string => {
  let lang;

  if (navigator.languages && navigator.languages.length) {
    [lang] = navigator.languages;
  } else {
    lang = navigator.language || "en";
  }

  return lang.split("-")[0];
};