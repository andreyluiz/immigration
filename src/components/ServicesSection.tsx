import { Icon } from "@iconify/react";

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
  const services = [
    {
      icon: "mdi:passport",
      title: "Visa & Documentation",
      description:
        "We guide you through the complex visa application process and help prepare all necessary documentation.",
    },
    {
      icon: "mdi:certificate",
      title: "Education Equivalence",
      description:
        "Get assistance with validating your Brazilian degrees and certificates for European recognition.",
    },
    {
      icon: "mdi:briefcase",
      title: "Job Search Support",
      description:
        "Receive personalized guidance on finding employment opportunities that match your skills and experience.",
    },
    {
      icon: "mdi:home",
      title: "Housing Assistance",
      description:
        "Learn how to find accommodation and navigate the housing market in your destination country.",
    },
    {
      icon: "mdi:translate",
      title: "Language Solutions",
      description:
        "Access resources and strategies for overcoming language barriers in your new European home.",
    },
    {
      icon: "mdi:account-group",
      title: "Cultural Integration",
      description:
        "Prepare for cultural differences and learn how to adapt smoothly to your new environment.",
    },
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Immigration Services
          </h2>
          <p className="text-lg text-foreground/80">
            Comprehensive support for every step of your European immigration
            journey.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
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
