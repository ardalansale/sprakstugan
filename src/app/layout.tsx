// src/app/[locale]/layout.tsx
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import Header from '@/components/Header';
import '../globals.css'; // eller '@/app/globals.css' beroende på struktur

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  title: "Språkstugan",
  description: "Lär dig svenska på ett enkelt sätt",
};

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { locale?: string };
}) {
  const locale = params.locale ?? 'sv'; // fallback till svenska
  const messages = await getMessages(locale);

  return (
    <html lang={locale}>
      <body className={`${openSans.variable} font-sans antialiased`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
