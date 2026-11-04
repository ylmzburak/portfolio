import type { Locale } from "@/i18n/config";

/**
 * A value that exists in every supported locale.
 * Example: { de: "Projekte", en: "Projects" }
 */
export type Localized<T = string> = Record<Locale, T>;
