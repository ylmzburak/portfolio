import type { Locale } from "./config";

/**
 * Returns the same page in another locale.
 * "/de/projects/cinetime/" + "en" → "/en/projects/cinetime/"
 */
export function switchLocalePath(pathname: string, locale: Locale): string {
  const segments = pathname.split("/").filter(Boolean);
  segments[0] = locale;
  return `/${segments.join("/")}/`;
}
