import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAlternates } from "@/i18n/alternates";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { Section } from "@/components/layout/Section";
import { profile } from "@/data/profile";
import { sectionIds } from "@/lib/sections";
import { sectionComponents } from "@/features/section-components";

export async function generateMetadata({
  params,
}: Pick<PageProps<"/[lang]">, "params">): Promise<Metadata> {
  const { lang } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  return { alternates: getAlternates(lang) };
}

export default async function Page({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  const dictionary = getDictionary(lang);

  return (
    <>
      <h1 className="sr-only">
        {profile.name} – {profile.title[lang]}
      </h1>
      {sectionIds.map((id) => {
        const Content = sectionComponents[id];

        return (
          <Section key={id} id={id} title={dictionary.sections[id]}>
            <Content lang={lang} />
          </Section>
        );
      })}
    </>
  );
}
