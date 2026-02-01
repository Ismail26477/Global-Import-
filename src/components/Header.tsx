import { useState } from "react";
import { Phone, Menu, X, ChevronDown, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const services = [
  { name: "Global Sourcing", href: "#services" },
  { name: "Export Management", href: "#services" },
  { name: "Import Compliance", href: "#services" },
  { name: "Logistics & Freight", href: "#services" },
  { name: "Customs Documentation", href: "#services" },
  { name: "Quality Inspection", href: "#services" },
];

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services", hasDropdown: true },
  { name: "Products", href: "#products" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* ================= HEADER ================= */}
      <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-3 items-center h-[95px]">

            {/* LEFT — Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center">
                <Globe className="w-5 h-5 text-navy-dark" />
              </div>
              <span className="font-heading font-bold text-xl text-navy-dark">
                Global Imports
              </span>
            </div>

            {/* CENTER — Navigation */}
            <nav className="hidden lg:flex items-center justify-center gap-12 font-semibold text-navy-dark">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => link.hasDropdown && setIsServicesOpen(true)}
                  onMouseLeave={() => link.hasDropdown && setIsServicesOpen(false)}
                >
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="flex items-center gap-1 hover:text-gold transition"
                  >
                    {link.name}
                    {link.hasDropdown && (
                      <ChevronDown
                        className={cn(
                          "w-4 h-4 transition-transform",
                          isServicesOpen && "rotate-180"
                        )}
                      />
                    )}
                  </a>

                  {/* Dropdown unchanged */}
                  {link.hasDropdown && isServicesOpen && (
                    <div className="absolute top-full left-0 pt-3">
                      <div className="glass-dark rounded-xl py-3 min-w-[240px] shadow-2xl">
                        {services.map((service) => (
                          <a
                            key={service.name}
                            href={service.href}
                            onClick={(e) => {
                              e.preventDefault();
                              scrollToSection(service.href);
                            }}
                            className="block px-5 py-3 text-white/90 hover:text-gold transition"
                          >
                            {service.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* RIGHT — Call Button */}
            <div className="flex items-center justify-end gap-4">
              <a
                href="tel:+919270109911"
                className="hidden lg:flex items-center gap-3 bg-gold px-6 py-3 rounded-full font-bold text-navy-dark shadow-lg"
              >
                <Phone className="w-5 h-5" />
                +91 9270109911
              </a>

              {/* Mobile Menu */}
              <button
                className="lg:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className="w-7 h-7 text-navy-dark" />
                ) : (
                  <Menu className="w-7 h-7 text-navy-dark" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ================= MOBILE HEADER BAR ================= */}
      <div className="lg:hidden fixed top-0 left-0 w-full bg-white h-[80px] flex items-center justify-between px-5 shadow z-50">
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? (
            <X className="w-7 h-7 text-navy-dark" />
          ) : (
            <Menu className="w-7 h-7 text-navy-dark" />
          )}
        </button>

        <span className="font-bold text-lg text-navy-dark">Global Imports</span>

        <a href="tel:+919270109911">
          <Phone className="w-6 h-6 text-gold" />
        </a>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 pt-[100px] px-8 lg:hidden">
          <nav className="flex flex-col gap-6 text-lg font-semibold text-navy-dark">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="border-b pb-3"
              >
                {link.name}
              </a>
            ))}
            <Button
              onClick={() => scrollToSection("#contact")}
              className="mt-6 btn-gold"
            >
              Get Started
            </Button>
          </nav>
        </div>
      )}
    </>
  );
}
