import { defaultLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

export default function RootPage() {
  const dictionary = getDictionary(defaultLocale);

  return (
    <main className="p-8">
      <a href={`/${defaultLocale}/`} className="text-primary underline">
        {dictionary.meta.continueToSite}
      </a>
    </main>
  );
}
