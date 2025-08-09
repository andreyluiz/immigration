import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/Button";

export function HeroSection() {
	const t = useTranslations("home.hero");

	return (
		<section className="relative overflow-hidden py-20 md:py-28 bg-gradient-to-br from-background via-background to-muted md:px-0 px-4">
			{/* Soft gradient and radial glow background */}
			<div className="absolute inset-0 z-0">
				<div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
				<div className="absolute -top-24 -left-24 w-[480px] h-[480px] bg-gradient-radial from-primary/15 via-transparent to-transparent rounded-full blur-3xl" />
				<div className="absolute -bottom-24 -right-24 w-[540px] h-[540px] bg-gradient-radial from-secondary/15 via-transparent to-transparent rounded-full blur-3xl" />
				<div className="absolute inset-0 opacity-10">
					<Image
						src="/paris.webp"
						alt="Paris Eiffel Tower"
						fill
						className="object-cover"
						priority
					/>
				</div>
			</div>

			<div className="relative z-10 container mx-auto">
				<div className="grid md:grid-cols-2 gap-12 items-center">
					<div className="flex flex-col gap-6">
						<h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight bg-gradient-to-br from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
							{t("title_1")} {" "}
							<span className="text-primary">{t("title_2")}</span>
						</h1>

						<div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />

						<p className="text-lg md:text-xl text-foreground/80 max-w-xl leading-relaxed">
							{t("description")}
						</p>

						<div className="flex flex-col sm:flex-row gap-4 mt-2">
							<Button
								asChild
								size="lg"
								className="text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
							>
								<Link href="#contact-form">{t("get_started")}</Link>
							</Button>
							<Button
								asChild
								size="lg"
								variant="accent"
								className="text-lg font-semibold bg-transparent text-primary border border-primary hover:bg-primary/10 hover:text-primary transition-all"
							>
								<Link href="#services">{t("learn_more")}</Link>
							</Button>
						</div>
					</div>

					<div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-border/30 bg-gradient-to-br from-background/80 to-background/50 backdrop-blur-sm group">
						<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-primary/10 to-secondary/10" />
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

