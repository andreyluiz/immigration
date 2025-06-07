import { useMessages, useTranslations } from "next-intl";
import Link from "next/link";
import { LanguageSelector } from "./LanguageSelector";

export function Footer() {
  const t = useTranslations("home.footer");
  const currentYear = new Date().getFullYear();
  const messages = useMessages();

  const quickLinks = messages.home.footer.quick_links.links as {
    title: string;
    href: string;
    target?: string;
  }[];

  // const socialLinks = messages.home.footer.social.links as {
  //   title: string;
  //   href: string;
  //   icon: string;
  // }[];

  return (
    <footer className="w-full py-8 bg-muted mt-12 md:px-0 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">{t("title")}</h3>
            <p className="text-sm text-foreground/80 max-w-xs">
              {t("description")}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">{t("quick_links.title")}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground/80 hover:text-primary transition-colors"
                    target={link.target}
                    rel={
                      link.target === "_blank"
                        ? "noopener noreferrer"
                        : undefined
                    }
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">{t("social.title")}</h3>
            {/* <div className="flex gap-4 mb-4">
              {socialLinks.map((link) => (
                <a
                  key={link.title}
                  href={link.href}
                  className="text-foreground hover:text-primary transition-colors"
                >
                  <Icon icon={link.icon} width={20} height={20} />
                </a>
              ))}
            </div> */}
            <p className="text-sm text-foreground/80">
              {t("social.email")}: contato@queroimigrar.com.br
            </p>
            <div className="mt-4">
              <LanguageSelector />
            </div>
          </div>
        </div>

        <div className="border-t border-foreground/10 mt-8 pt-6 text-center text-sm text-foreground/70">
          <p>
            © {currentYear} {t("copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
}
