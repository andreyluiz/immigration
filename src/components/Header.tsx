import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { NavLink } from "@/components/ui/NavLink";
import { Link } from "@/i18n/navigation";

export function Header() {
	const t = useTranslations("home.nav");

	return (
		<header className="w-full sticky top-0 z-50 py-4 px-4 md:px-8 backdrop-blur-md bg-background/70 border-b">
			<div className="container mx-auto flex justify-between items-center">
				<Logo title={t("title")} />

				<nav className="hidden md:flex items-center gap-6">
					<NavLink href="/#services">{t("services")}</NavLink>
					<NavLink href="/#about">{t("about")}</NavLink>
					<NavLink href="/#testimonials">{t("testimonials")}</NavLink>
					<Link
						href="/pricing"
						className="text-foreground hover:text-primary transition-colors"
					>
						{t("pricing")}
					</Link>
					<NavLink href="/#contact">{t("contact")}</NavLink>
				</nav>

				<Button asChild className="hidden md:block shadow-sm hover:shadow-md transition-shadow">
					<a href="/#contact-form">{t("get_started")}</a>
				</Button>
			</div>
		</header>
	);
}
