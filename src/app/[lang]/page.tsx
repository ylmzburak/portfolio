import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

export default async function Page({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  const dictionary = getDictionary(lang);

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">{dictionary.sections.about}</h1>
      <p className="text-muted">{dictionary.actions.downloadCv}</p>
    </main>
  );
}
