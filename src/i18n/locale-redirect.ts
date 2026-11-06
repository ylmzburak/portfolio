import { defaultLocale, locales } from "./config";

// Runs in <head> on the root page.
// Picks the first supported locale from the browser's language preferences.
export const localeRedirectScript = `(() => {
  const supported = ${JSON.stringify(locales)};
  const preferred = navigator.languages ?? [navigator.language];
  const match = preferred
    .map((tag) => tag.slice(0, 2).toLowerCase())
    .find((code) => supported.includes(code));
  location.replace("/" + (match ?? ${JSON.stringify(defaultLocale)}) + "/");
})();`;
