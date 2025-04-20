import { routing } from "@/i18n/routing";
import type { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { Inter } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "European Immigration Mentorship | For Brazilians",
  description:
    "Professional mentorship for Brazilians looking to immigrate to Europe. Get personalized guidance on the entire immigration process.",
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={`${inter.variable} antialiased`}>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
