import { Icon } from "@iconify/react";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-8 bg-muted mt-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">
              European Immigration Mentorship
            </h3>
            <p className="text-sm text-foreground/80 max-w-xs">
              Professional mentorship for Brazilians looking to immigrate to
              Europe. We provide personalized guidance for your immigration
              journey.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#services"
                  className="text-sm text-foreground/80 hover:text-primary transition-colors"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="text-sm text-foreground/80 hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#testimonials"
                  className="text-sm text-foreground/80 hover:text-primary transition-colors"
                >
                  Success Stories
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-sm text-foreground/80 hover:text-primary transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Connect With Us</h3>
            <div className="flex gap-4 mb-4">
              <a
                href="#"
                className="text-foreground hover:text-primary transition-colors"
              >
                <Icon icon="mdi:instagram" width={20} height={20} />
              </a>
              <a
                href="#"
                className="text-foreground hover:text-primary transition-colors"
              >
                <Icon icon="mdi:facebook" width={20} height={20} />
              </a>
              <a
                href="#"
                className="text-foreground hover:text-primary transition-colors"
              >
                <Icon icon="mdi:linkedin" width={20} height={20} />
              </a>
              <a
                href="#"
                className="text-foreground hover:text-primary transition-colors"
              >
                <Icon icon="mdi:whatsapp" width={20} height={20} />
              </a>
            </div>
            <p className="text-sm text-foreground/80">
              Email: contact@example.com
              <br />
              Phone: +55 11 99999-9999
            </p>
          </div>
        </div>

        <div className="border-t border-foreground/10 mt-8 pt-6 text-center text-sm text-foreground/70">
          <p>
            © {currentYear} European Immigration Mentorship. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
