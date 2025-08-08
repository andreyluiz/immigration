import { Icon } from "@iconify/react";
import Image from "next/image";
import { useMessages, useTranslations } from "next-intl";

interface TestimonialCardProps {
	quote: string;
	author: string;
	role: string;
	image: string;
	country: string;
}

function TestimonialCard({
	quote,
	author,
	role,
	image,
	country,
}: TestimonialCardProps) {
	return (
		<div className="bg-background rounded-lg p-6 shadow-sm border">
			<div className="flex gap-4 items-center mb-4">
				<div className="relative w-16 h-16 rounded-full overflow-hidden">
					<Image src={image} alt={author} fill className="object-cover" />
				</div>
				<div>
					<p className="font-bold">{author}</p>
					<p className="text-sm text-foreground/70">{role}</p>
					<div className="flex items-center gap-1 mt-1">
						<Icon icon="mdi:map-marker" className="w-4 h-4 text-secondary" />
						<p className="text-xs text-foreground/60">{country}</p>
					</div>
				</div>
			</div>

			<div className="relative">
				<Icon
					icon="mdi:format-quote-open"
					className="w-8 h-8 text-primary/20 absolute -left-1 -top-1"
				/>
				<p className="text-foreground/80 italic pl-6">{quote}</p>
			</div>

			<div className="mt-4 flex gap-1">
				{[...Array(5)].map((_) => (
					<Icon
						key={Math.random()}
						icon="mdi:star"
						className="w-5 h-5 text-secondary"
					/>
				))}
			</div>
		</div>
	);
}

export function TestimonialsSection() {
	const t = useTranslations("home.testimonials");
	const messages = useMessages();

	const testimonials = messages.home.testimonials
		.list as TestimonialCardProps[];

	return (
		<section id="testimonials" className="py-16 md:py-24 bg-muted md:px-0 px-4">
			<div className="container mx-auto">
				<div className="text-center max-w-3xl mx-auto mb-12">
					<h2 className="text-3xl md:text-4xl font-bold mb-4">{t("title")}</h2>
					<p className="text-lg text-foreground/80">{t("description")}</p>
				</div>

				<div className="grid md:grid-cols-3 gap-6 md:gap-8">
					{testimonials.map((testimonial, index) => (
						<TestimonialCard
							key={`testimonial-${testimonial.author}-${index}`}
							quote={testimonial.quote}
							author={testimonial.author}
							role={testimonial.role}
							image={testimonial.image}
							country={testimonial.country}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
