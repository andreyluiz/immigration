import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { NavLink } from "@/components/ui/NavLink";

export interface HeaderProps {
  title?: string;
}

export function Header({ title = "European Immigration" }: HeaderProps) {
  return (
    <header className="w-full py-4 px-4 md:px-8 bg-background border-b">
      <div className="container mx-auto flex justify-between items-center">
        <Logo title={title} />

        <nav className="hidden md:flex items-center gap-6">
          <NavLink href="#services">Services</NavLink>
          <NavLink href="#about">About Us</NavLink>
          <NavLink href="#testimonials">Testimonials</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </nav>

        <Button asChild>
          <a href="#contact">Get Started</a>
        </Button>
      </div>
    </header>
  );
}
