import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { NavLink } from "@/components/ui/NavLink";
import { useTranslations } from "next-intl";

export function Header() {
  const t = useTranslations("home.nav");

  return (
    <header className="w-full py-4 px-4 md:px-8 bg-background border-b">
      <div className="container mx-auto flex justify-between items-center">
        <Logo title={t("title")} />

        <nav className="hidden md:flex items-center gap-6">
          <NavLink href="#services">{t("services")}</NavLink>
          <NavLink href="#about">{t("about")}</NavLink>
          <NavLink href="#testimonials">{t("testimonials")}</NavLink>
          <NavLink href="#contact">{t("contact")}</NavLink>
        </nav>

        <Button asChild className="hidden md:block">
          <a href="#contact-form">{t("get_started")}</a>
        </Button>
      </div>
    </header>
  );
}
