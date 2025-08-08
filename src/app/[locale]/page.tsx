import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { CvBanner } from "@/components/CvBanner";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { ServicesSection } from "@/components/ServicesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";

export default function Home() {
	return (
		<div className="flex flex-col min-h-screen">
			<Header />
			<CvBanner />

			<main className="flex-grow">
				<HeroSection />
				<ServicesSection />
				<HowItWorksSection />
				<AboutSection />
				<TestimonialsSection />
				<ContactSection />
			</main>

			<Footer />
		</div>
	);
}
