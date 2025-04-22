import { Icon } from "@iconify/react";
import { useMessages, useTranslations } from "next-intl";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="bg-background rounded-lg p-6 shadow-sm border transition-all hover:shadow-md hover:translate-y-[-2px]">
      <Icon icon={icon} className="w-12 h-12 text-primary mb-4" />
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-foreground/70">{description}</p>
    </div>
  );
}

export function ServicesSection() {
  const t = useTranslations("home.services");
  const messages = useMessages();

  const servicesList = messages.home.services.list as ServiceCardProps[];

  return (
    <section id="services" className="py-16 md:py-24 bg-muted md:px-0 px-4">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("title")}</h2>
          <p className="text-lg text-foreground/80">{t("description")}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {servicesList.map((service: ServiceCardProps, index: number) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
