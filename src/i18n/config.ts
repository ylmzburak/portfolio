export const locales = ["de", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "de";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
/** Each locale's name in its own language, for the language switcher. */
export const localeNames: Record<Locale, string> = {
  de: "Deutsch",
  en: "English",
};
