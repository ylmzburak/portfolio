import type { Metadata } from "next";
import { inter } from "@/lib/fonts";
import { defaultLocale } from "@/i18n/config";
import "../globals.css";

export const metadata: Metadata = {
  robots: { index: false },
};

export default function RedirectLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang={defaultLocale} className={`${inter.variable} antialiased`}>
      <head>
        <meta httpEquiv="refresh" content={`0; url=/${defaultLocale}/`} />
      </head>
      <body>{children}</body>
    </html>
  );
}
