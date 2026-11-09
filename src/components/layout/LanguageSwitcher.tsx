"use client";

import clsx from "clsx";
import { usePathname } from "next/navigation";
import { type Locale, localeNames, locales } from "@/i18n/config";
import { switchLocalePath } from "@/i18n/switch-locale";

type LanguageSwitcherProps = {
  lang: Locale;
  label: string;
};

export function LanguageSwitcher({ lang, label }: LanguageSwitcherProps) {
  const pathname = usePathname();

  return (
    <nav aria-label={label}>
      <ul className="flex items-center gap-2 text-sm font-medium">
        {locales.map((locale, index) => {
          const isCurrent = locale === lang;

          return (
            <li key={locale} className="flex items-center gap-2">
              {index > 0 && (
                <span aria-hidden="true" className="text-muted">
                  |
                </span>
              )}
              <a
                href={switchLocalePath(pathname, locale)}
                hrefLang={locale}
                lang={locale}
                aria-label={localeNames[locale]}
                aria-current={isCurrent ? "true" : undefined}
                className={clsx(
                  "uppercase transition-colors",
                  isCurrent
                    ? "text-foreground"
                    : "text-muted hover:text-foreground",
                )}
              >
                {locale}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
