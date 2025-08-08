import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PricingSection } from "@/components/PricingSection";

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <PricingSection />
      </main>

      <Footer />
    </div>
  );
}