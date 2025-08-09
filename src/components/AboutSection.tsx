import Image from "next/image";
import { useTranslations } from "next-intl";

export function AboutSection() {
	const t = useTranslations("home.about");

	return (
		<section id="about" className="relative py-16 md:py-24 bg-background md:px-0 px-4 overflow-hidden">
			<div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
			<div className="relative container mx-auto">
				<div className="grid md:grid-cols-2 gap-12 items-center">
					<div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-border/30 bg-gradient-to-br from-background/80 to-background/50 backdrop-blur-sm order-2 md:order-1 group">
						<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-primary/10 to-secondary/10" />
						<Image
							src="/team.webp"
							alt="Our Team"
							fill
							className="object-cover"
						/>
					</div>

					<div className="flex flex-col gap-6 order-1 md:order-2">
						<h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-foreground via-foreground to-foreground/70">
							{t("title")}
						</h2>
						<div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />

						<div className="space-y-4 bg-background/60 backdrop-blur-sm border border-border/30 rounded-2xl p-6">
							<p className="text-foreground/80 leading-relaxed">{t("description_1")}</p>
							<p className="text-foreground/80 leading-relaxed">{t("description_2")}</p>
							<p className="text-foreground/80 leading-relaxed">{t("description_3")}</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
