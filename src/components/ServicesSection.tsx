import { Icon } from "@iconify/react";
import { useMessages, useTranslations } from "next-intl";
import { GlowCard } from "@/components/ui/GlowCard";

interface ServiceCardProps {
	icon: string;
	title: string;
	description: string;
}

function ServiceCard({ icon, title, description }: ServiceCardProps) {
	return (
		<GlowCard tone="primary" hover className="p-6 md:p-8">
			<div className="bg-gradient-to-br from-primary/20 to-primary/10 p-3 rounded-xl w-fit mb-5">
				<Icon icon={icon} className="w-8 h-8 md:w-10 md:h-10 text-primary" />
			</div>
			<h3 className="text-lg md:text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
				{title}
			</h3>
			<p className="text-foreground/70 leading-relaxed">{description}</p>
		</GlowCard>
	);
}

export function ServicesSection() {
	const t = useTranslations("home.services");
	const messages = useMessages();

	const servicesList = messages.home.services.list as ServiceCardProps[];

	return (
		<section id="services" className="relative py-16 md:py-24 bg-background md:px-0 px-4 overflow-hidden">
			<div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
			<div className="relative container mx-auto">
				<div className="text-center max-w-3xl mx-auto mb-12">
					<h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-br from-foreground via-foreground to-foreground/70">
						{t("title")}
					</h2>
					<div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-4" />
					<p className="text-lg text-foreground/80">{t("description")}</p>
				</div>

				<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
					{servicesList.map((service: ServiceCardProps, index: number) => (
						<ServiceCard
							key={`service-${index + 1}`}
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
