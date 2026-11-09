import { profile } from "@/data/profile";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { sectionIds } from "@/lib/sections";
import { LanguageSwitcher } from "./LanguageSwitcher";

type SidebarProps = {
  lang: Locale;
};

export function Sidebar({ lang }: SidebarProps) {
  const dictionary = getDictionary(lang);

  return (
    <div className="flex flex-col gap-8 lg:h-full">
      <header>
        <p className="text-3xl font-bold tracking-tight lg:text-4xl">
          {profile.name}
        </p>
        <p className="mt-2 text-lg font-medium">{profile.title[lang]}</p>
        <p className="mt-3 text-muted">{profile.tagline[lang]}</p>
      </header>

      <nav aria-label={dictionary.nav.label} className="hidden lg:block">
        <ul className="flex flex-col gap-3">
          {sectionIds.map((id) => (
            <li key={id}>
              <a
                href={`/${lang}/#${id}`}
                className="text-muted transition-colors hover:text-foreground"
              >
                {dictionary.sections[id]}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex items-center gap-4">
        <LanguageSwitcher lang={lang} label={dictionary.language.switch} />
      </div>

      <div className="flex flex-col gap-6 lg:mt-auto">
        <a
          href={`/cv/cv-${lang}.pdf`}
          download
          className="inline-flex w-fit items-center rounded-full bg-primary px-5 py-2.5 font-medium text-on-primary transition-opacity hover:opacity-90"
        >
          {dictionary.actions.downloadCv}
        </a>

        <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
          <li>
            <a href={`mailto:${profile.email}`} className="hover:text-primary">
              {profile.email}
            </a>
          </li>
          <li>
            <a href={profile.links.linkedin} className="hover:text-primary">
              LinkedIn
            </a>
          </li>
          <li>
            <a href={profile.links.github} className="hover:text-primary">
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
