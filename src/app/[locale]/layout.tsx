import { GoogleTagManager } from "@next/third-parties/google";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { CookieBanner } from "@/components/CookieBanner";
import { routing } from "@/i18n/routing";
import "../globals.css";
import { getTranslations } from "next-intl/server";

const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
});

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;
	if (!hasLocale(routing.locales, locale)) {
		notFound();
	}
	const t = await getTranslations({ locale, namespace: "metadata" });

	return {
		title: t("title"),
		description: t("description"),
	};
}

export default async function RootLayout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	if (!hasLocale(routing.locales, locale)) {
		notFound();
	}

	return (
		<html lang={locale}>
			<GoogleTagManager gtmId="GTM-5ZBS58ZJ" />
			<body className={`${inter.variable} antialiased`}>
				<NextIntlClientProvider>
					{children}
					<CookieBanner />
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
