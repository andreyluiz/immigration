import { Icon } from "@iconify/react";
import { useMessages, useTranslations } from "next-intl";
import { Button } from "./ui/Button";

interface PackageCardProps {
	icon: string;
	title: string;
	description: string;
	price: string;
	payment: string;
}

function PackageCard({
	icon,
	title,
	description,
	price,
	payment,
}: PackageCardProps) {
	return (
		<div className="group relative bg-gradient-to-br from-background to-background/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-border/50 transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:border-primary/30">
			<div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300" />
			<div className="relative z-10">
				<div className="bg-gradient-to-br from-primary/20 to-primary/10 p-4 rounded-xl w-fit mb-6">
					<Icon icon={icon} className="w-10 h-10 text-primary" />
				</div>
				<h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
					{title}
				</h3>
				<div className="text-foreground/70 mb-6 leading-relaxed whitespace-pre-line">
					{description}
				</div>
				<div className="pt-4 border-t border-border/30">
					<div className="text-3xl font-extrabold text-primary mb-1">
						{price}
					</div>
					<div className="text-sm text-foreground/60 font-medium">
						{payment}
					</div>
				</div>
			</div>
		</div>
	);
}

function ExtrasCard({
	icon,
	title,
	description,
	price,
	payment,
}: PackageCardProps) {
	return (
		<div className="group relative bg-gradient-to-br from-secondary/10 to-secondary/5 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-secondary/30 transition-all duration-300 hover:shadow-2xl hover:scale-105">
			<div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300" />
			<div className="relative z-10">
				<div className="bg-gradient-to-br from-secondary/30 to-secondary/20 p-4 rounded-xl w-fit mb-6">
					<Icon icon={icon} className="w-10 h-10 text-secondary" />
				</div>
				<h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-secondary transition-colors">
					{title}
				</h3>
				<div className="text-foreground/70 mb-6 leading-relaxed whitespace-pre-line">
					{description}
				</div>
				<div className="pt-4 border-t border-secondary/30">
					<div className="text-3xl font-extrabold text-secondary mb-1">
						{price}
					</div>
					<div className="text-sm text-foreground/60 font-medium">
						{payment}
					</div>
				</div>
			</div>
		</div>
	);
}

export function PricingSection() {
	const t = useTranslations("home.pricing");
	const messages = useMessages();

	const packagesList = messages.home.pricing.packages as PackageCardProps[];
	const extras = messages.home.pricing.extras as PackageCardProps;
	const reasons = messages.home.pricing.why_choose.reasons as string[];

	return (
		<div className="relative py-20 md:py-32 overflow-hidden">
			<div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/10 via-transparent to-transparent rounded-full blur-3xl" />

			<div className="relative container mx-auto px-4">
				{/* Hero Title */}
				<div className="text-center max-w-5xl mx-auto mb-20">
					<div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
						<Icon icon="mdi:star" className="w-4 h-4" />
						{t("professional_services_badge")}
					</div>
					<h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-br from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent leading-tight">
						{t("title")}
					</h1>
					<div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
				</div>

				{/* Overview */}
				<div className="max-w-4xl mx-auto mb-20 text-center">
					<h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
						{t("overview.title")}
					</h2>
					<p className="text-xl text-foreground/80 leading-relaxed">
						{t("overview.description")}
					</p>
				</div>

				{/* Packages */}
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mb-20">
					{packagesList.map((pkg: PackageCardProps, index: number) => (
						<PackageCard
							key={`package-${index + 1}`}
							icon={pkg.icon}
							title={pkg.title}
							description={pkg.description}
							price={pkg.price}
							payment={pkg.payment}
						/>
					))}
				</div>

				{/* Featured Extras */}
				<div className="mb-20">
					<div className="text-center mb-12">
						<h2 className="text-3xl md:text-4xl font-bold mb-4">
							{t("premium_addon.title")}
						</h2>
						<p className="text-lg text-foreground/70 max-w-2xl mx-auto">
							{t("premium_addon.description")}
						</p>
					</div>
					<div className="max-w-3xl mx-auto">
						<ExtrasCard
							icon={extras.icon}
							title={extras.title}
							description={extras.description}
							price={extras.price}
							payment={extras.payment}
						/>
					</div>
				</div>

				{/* Why Choose Us */}
				<div className="relative bg-gradient-to-br from-muted/80 to-muted/40 backdrop-blur-sm rounded-3xl p-10 md:p-16 mb-20 border border-border/30">
					<div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl" />
					<div className="relative z-10">
						<h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
							{t("why_choose.title")}
						</h2>
						<div className="grid md:grid-cols-3 gap-8">
							{reasons.map((reason: string, index: number) => (
								<div
									key={`reason-${index + 1}`}
									className="group flex items-start p-6 rounded-2xl bg-background/50 backdrop-blur-sm border border-border/30 hover:bg-background/80 transition-all duration-300"
								>
									<div className="bg-gradient-to-br from-accent/20 to-accent/10 p-2 rounded-xl mr-4 group-hover:scale-110 transition-transform">
										<Icon
											icon="mdi:check-circle"
											className="w-5 h-5 text-accent"
										/>
									</div>
									<p className="text-foreground/80 leading-relaxed font-medium">
										{reason}
									</p>
								</div>
							))}
						</div>
					</div>
				</div>

				{/* Call to Action */}
				<div className="text-center max-w-4xl mx-auto">
					<div className="bg-gradient-to-br from-background to-background/80 backdrop-blur-sm rounded-3xl p-10 md:p-16 border border-border/30 shadow-2xl">
						<h2 className="text-3xl md:text-4xl font-bold mb-6">
							{t("next_steps.title")}
						</h2>
						<p className="text-xl text-foreground/80 mb-8 leading-relaxed">
							{t("next_steps.description")}
						</p>
						<div className="mb-8">
							<a
								href={`mailto:${t("next_steps.email")}`}
								className="inline-flex items-center gap-2 text-lg text-primary hover:text-primary/80 font-semibold transition-colors group"
							>
								<Icon
									icon="mdi:email"
									className="w-5 h-5 group-hover:scale-110 transition-transform"
								/>
								{t("next_steps.email")}
							</a>
						</div>
						<div className="inline-block">
							<Button
								asChild
								size="lg"
								className="text-lg flex items-center font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
							>
								<a
									href="/#contact-form"
									className="flex items-center justify-center w-full h-full"
								>
									<Icon icon="mdi:arrow-right" className="w-5 h-5 mr-2" />
									{t("next_steps.cta")}
								</a>
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
