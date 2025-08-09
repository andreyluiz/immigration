import { Icon } from "@iconify/react";
import { useMessages, useTranslations } from "next-intl";
import { ContactForm } from "./ContactForm";

export function ContactSection() {
	const t = useTranslations("home");

	const messages = useMessages();

	const faq = messages.home.faq.questions as {
		question: string;
		answer: string;
	}[];

	return (
		<section id="contact" className="relative py-16 md:py-24 bg-background md:px-0 px-4 overflow-hidden">
			<div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
			<div className="relative container mx-auto">
				<div className="text-center max-w-3xl mx-auto mb-12">
					<h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-br from-foreground via-foreground to-foreground/70">
						{t("contact.title")}
					</h2>
					<div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-4" />
					<p className="text-lg text-foreground/80">
						{t("contact.description")}
					</p>
				</div>

				<div className="grid md:grid-cols-2 gap-12 items-start">
					<div className="space-y-6">
						<div className="bg-gradient-to-br from-muted/80 to-muted/40 backdrop-blur-sm rounded-2xl p-6 border border-border/30">
							<h3 className="text-xl font-bold mb-4 flex items-center gap-2">
								<Icon
									icon="mdi:frequently-asked-questions"
									className="text-primary"
								/>
								{t("faq.title")}
							</h3>

							<div className="space-y-4">
								{faq.map((question) => (
									<div key={question.question} className="group rounded-xl p-2 transition-colors hover:bg-background/50">
										<p className="font-medium group-hover:text-primary transition-colors">{question.question}</p>
										<p className="text-sm text-foreground/70 mt-1 leading-relaxed">
											{question.answer}
										</p>
									</div>
								))}
							</div>
						</div>

						<div className="flex flex-col gap-3">
							<a
								href="mailto:contato@queroimigrar.com.br"
								className="inline-flex items-center gap-2 w-fit text-primary hover:text-primary/80 transition-colors font-semibold"
							>
								<Icon icon="mdi:email" className="w-5 h-5" />
								<span>contato@queroimigrar.com.br</span>
							</a>
						</div>
					</div>

					<div id="contact-form" className="bg-gradient-to-br from-background to-background/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-border/30 shadow-lg">
						<ContactForm />
					</div>
				</div>
			</div>
		</section>
	);
}
