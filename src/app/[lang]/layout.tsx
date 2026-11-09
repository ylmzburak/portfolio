import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { inter } from "@/lib/fonts";
import { siteName, siteUrl } from "@/lib/site";
import { themeInitScript } from "@/lib/theme";
import { isLocale, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import "../globals.css";
import { Sidebar } from "@/components/layout/Sidebar";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: Pick<LayoutProps<"/[lang]">, "params">): Promise<Metadata> {
  const { lang } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  return {
    metadataBase: new URL(siteUrl),
    title: { default: siteName, template: `%s | ${siteName}` },
    description: getDictionary(lang).meta.description,
  };
}

export default async function RootLayout({
  children,
  params,
}: LayoutProps<"/[lang]">) {
  const { lang } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  const dictionary = getDictionary(lang);

  return (
    <html
      lang={lang}
      className={`${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded focus:bg-primary focus:px-4 focus:py-2 focus:text-on-primary"
        >
          {dictionary.meta.skipToContent}
        </a>
        <div className="mx-auto max-w-screen-xl px-6 lg:flex lg:gap-16 lg:px-12">
          <aside className="pt-12 lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-80 lg:shrink-0 lg:flex-col lg:py-24">
            <Sidebar lang={lang} />
          </aside>
          <main id="content" className="lg:flex-1 lg:py-12">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
