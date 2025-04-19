import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24 bg-gradient-to-br from-background to-muted">
      <div className="absolute inset-0 z-0 opacity-10">
        <Image
          src="https://placehold.co/1920x1080/0047ab/FFFFFF/png?text=EU"
          alt="Background Pattern"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="relative z-10 container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
              Your European Dream{" "}
              <span className="text-primary">Starts Here</span>
            </h1>

            <p className="text-lg md:text-xl text-foreground/80 max-w-xl">
              Professional immigration mentorship for Brazilians looking to
              start a new life in Europe. Our expert team guides you through
              every step of your journey.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Link
                href="#contact"
                className="px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors text-center font-medium"
              >
                Get Started
              </Link>
              <Link
                href="#services"
                className="px-6 py-3 bg-transparent border border-primary text-primary rounded-md hover:bg-primary/10 transition-colors text-center font-medium"
              >
                Learn More
              </Link>
            </div>

            <div className="flex items-center gap-2 mt-6">
              <Icon icon="mdi:check-circle" className="text-accent" />
              <p className="text-sm text-foreground/70">
                Over 500+ successful immigrations
              </p>
            </div>
          </div>

          <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="https://placehold.co/600x800/1a1a1a/FFFFFF/png?text=IMMIGRATION+MENTORSHIP"
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
