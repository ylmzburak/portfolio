import type { Metadata } from "next";
import { defaultLocale, locales, type Locale } from "./config";

// Builds canonical and hreflang links for a page that exists in every locale.
// `path` is relative to the locale root, e.g. "projects/my-app/".
export function getAlternates(
  locale: Locale,
  path = "",
): Metadata["alternates"] {
  return {
    canonical: `/${locale}/${path}`,
    languages: {
      ...Object.fromEntries(locales.map((l) => [l, `/${l}/${path}`])),
      "x-default": `/${defaultLocale}/${path}`,
    },
  };
}
