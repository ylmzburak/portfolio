import type { Metadata } from "next";
import { inter } from "@/lib/fonts";
import { defaultLocale } from "@/i18n/config";
import { localeRedirectScript } from "@/i18n/locale-redirect";
import "../globals.css";

export const metadata: Metadata = {
  robots: { index: false },
};

const noScriptRedirect = `<meta http-equiv="refresh" content="0; url=/${defaultLocale}/">`;

export default function RedirectLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang={defaultLocale} className={`${inter.variable} antialiased`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: localeRedirectScript }} />
        <noscript dangerouslySetInnerHTML={{ __html: noScriptRedirect }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
