import { useTranslations } from "next-intl";
import Image from "next/image";

export function AboutSection() {
  const t = useTranslations("home.about");

  return (
    <section id="about" className="py-16 md:py-24 bg-background md:px-0 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-xl order-2 md:order-1">
            <Image
              src="/team.webp"
              alt="Our Team"
              fill
              className="object-cover"
            />
          </div>

          <div className="flex flex-col gap-6 order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold">{t("title")}</h2>

            <div className="space-y-4">
              <p className="text-foreground/80">{t("description_1")}</p>

              <p className="text-foreground/80">{t("description_2")}</p>

              <p className="text-foreground/80">{t("description_3")}</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-6">
              <div className="text-center">
                <span className="text-3xl font-bold text-primary block">
                  15+
                </span>
                <span className="text-sm text-foreground/70">
                  {t("years_experience")}
                </span>
              </div>

              <div className="text-center">
                <span className="text-3xl font-bold text-primary block">
                  500+
                </span>
                <span className="text-sm text-foreground/70">
                  {t("clients_served")}
                </span>
              </div>

              <div className="text-center">
                <span className="text-3xl font-bold text-primary block">
                  98%
                </span>
                <span className="text-sm text-foreground/70">
                  {t("success_rate")}
                </span>
              </div>

              <div className="text-center">
                <span className="text-3xl font-bold text-primary block">
                  12
                </span>
                <span className="text-sm text-foreground/70">
                  {t("team_members")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
