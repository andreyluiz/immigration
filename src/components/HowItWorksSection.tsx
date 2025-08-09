import { Icon } from "@iconify/react";
import { useTranslations } from "next-intl";

interface StepProps {
	number: number;
	icon: string;
	title: string;
	description: string;
}

function Step({ number, icon, title, description }: StepProps) {
	return (
		<div className="group relative flex flex-col md:flex-row gap-6 items-start bg-background/60 backdrop-blur-sm border border-border/30 rounded-2xl p-6 transition-all hover:bg-background/80">
			<div className="flex-shrink-0">
				<div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary text-white rounded-full flex items-center justify-center font-extrabold text-xl shadow-lg">
					{number}
				</div>
			</div>

			<div className="flex-1">
				<div className="flex items-center gap-3 mb-3">
					<Icon icon={icon} className="w-6 h-6 text-primary" />
					<h3 className="text-xl font-bold group-hover:text-primary transition-colors">{title}</h3>
				</div>
				<p className="text-foreground/70 leading-relaxed">{description}</p>
			</div>
		</div>
	);
}

export function HowItWorksSection() {
	const t = useTranslations("home.how_it_works");

	const steps = [
		{
			icon: "mdi:message-text",
			title: t("step1.title"),
			description: t("step1.description"),
		},
		{
			icon: "mdi:briefcase",
			title: t("step2.title"),
			description: t("step2.description"),
		},
		{
			icon: "mdi:airplane",
			title: t("step3.title"),
			description: t("step3.description"),
		},
		{
			icon: "mdi:chart-line",
			title: t("step4.title"),
			description: t("step4.description"),
		},
	];

	return (
		<section className="relative py-16 md:py-24 bg-muted md:px-0 px-4 overflow-hidden">
			<div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
			<div className="relative container mx-auto max-w-4xl">
				<div className="text-center max-w-2xl mx-auto mb-12">
					<h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-br from-foreground via-foreground to-foreground/70">
						{t("title")}
					</h2>
					<div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-4" />
					<p className="text-lg text-foreground/80">{t("description")}</p>
				</div>

				<div className="grid gap-8 md:gap-12">
					{steps.map((step, index) => (
						<Step
							key={`step-${index + 1}`}
							number={index + 1}
							icon={step.icon}
							title={step.title}
							description={step.description}
						/>
					))}
				</div>

				<div className="text-center mt-12">
					<p className="text-lg text-foreground/70 mb-6">{t("cta_text")}</p>
					<a
						href="#contact-form"
						className="inline-flex items-center gap-2 px-8 py-4 rounded-md font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-primary text-white"
					>
						{t("cta_button")}
						<Icon icon="mdi:arrow-right" className="w-5 h-5" />
					</a>
				</div>
			</div>
		</section>
	);
}
