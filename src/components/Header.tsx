import Image from "next/image";
import Link from "next/link";

export interface HeaderProps {
  title?: string;
}

export function Header({ title = "European Immigration" }: HeaderProps) {
  return (
    <header className="w-full py-4 px-4 md:px-8 bg-background border-b">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Image
            src="https://placehold.co/40x40/0047ab/FFFFFF/png?text=IM"
            alt="Logo"
            width={40}
            height={40}
            className="rounded-md"
          />
          <span className="text-xl font-bold text-primary">{title}</span>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="#services"
            className="text-foreground hover:text-primary transition-colors"
          >
            Services
          </Link>
          <Link
            href="#about"
            className="text-foreground hover:text-primary transition-colors"
          >
            About Us
          </Link>
          <Link
            href="#testimonials"
            className="text-foreground hover:text-primary transition-colors"
          >
            Testimonials
          </Link>
          <Link
            href="#contact"
            className="text-foreground hover:text-primary transition-colors"
          >
            Contact
          </Link>
        </nav>

        <Link
          href="#contact"
          className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
        >
          Get Started
        </Link>
      </div>
    </header>
  );
}
