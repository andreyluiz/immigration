import { Icon } from "@iconify/react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  const t = useTranslations("home.hero");

  return (
    <section className="relative overflow-hidden py-16 md:py-24 bg-gradient-to-br from-background to-muted md:px-0 px-4">
      <div className="absolute inset-0 z-0 opacity-10">
        <Image
          src="/paris.webp"
          alt="Paris Eiffel Tower"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="relative z-10 container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
              {t("title_1")}{" "}
              <span className="text-primary">{t("title_2")}</span>
            </h1>

            <p className="text-lg md:text-xl text-foreground/80 max-w-xl">
              {t("description")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Link
                href="#contact-form"
                className="px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors text-center font-medium"
              >
                {t("get_started")}
              </Link>
              <Link
                href="#services"
                className="px-6 py-3 bg-transparent border border-primary text-primary rounded-md hover:bg-primary/10 transition-colors text-center font-medium"
              >
                {t("learn_more")}
              </Link>
            </div>
          </div>

          <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/passport.webp"
              alt="Immigration Mentorship"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
