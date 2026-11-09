import { profile } from "@/data/profile";
import type { Locale } from "@/i18n/config";

type AboutProps = {
  lang: Locale;
};

export function About({ lang }: AboutProps) {
  return (
    <div className="max-w-prose space-y-4 leading-relaxed text-muted">
      {profile.about[lang].map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </div>
  );
}
