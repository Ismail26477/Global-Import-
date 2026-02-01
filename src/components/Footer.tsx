import { Globe, Mail, MapPin, Phone } from "lucide-react";

const quickLinks = [
  { name: "Home", href: "#hero" },
  { name: "About Us", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Products", href: "#products" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

const services = [
  "Global Sourcing",
  "Export Management",
  "Import Compliance",
  "Logistics & Freight",
  "Customs Documentation",
  "Quality Inspection",
];

const teamContacts = [
  { name: "Vimal", phone: "+91 9823050721" },
  { name: "Aakash", phone: "+91 9011675477" },
  { name: "Prithvi", phone: "+91 8168619911" },
  { name: "Sagar", phone: "+91 8830783396" },
];

export function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-navy-dark text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center">
                <Globe className="w-6 h-6 text-navy-dark" />
              </div>
              <span className="font-heading font-bold text-xl">Global Imports</span>
            </div>
            <p className="text-white/70 mb-6">
              Connecting Indian businesses with trusted manufacturers worldwide since 2008. Your reliable partner for global trade solutions.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-white/70 hover:text-gold transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-white/70">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Contact Us</h3>
            <div className="space-y-4">
              <a
                href="mailto:globalimportsworldwide@gmail.com"
                className="flex items-start gap-3 text-white/70 hover:text-gold transition-colors"
              >
                <Mail className="w-5 h-5 mt-0.5 shrink-0" />
                <span>globalimportsworldwide@gmail.com</span>
              </a>
              <a
                href="tel:+919270109911"
                className="flex items-center gap-3 text-white/70 hover:text-gold transition-colors"
              >
                <Phone className="w-5 h-5 shrink-0" />
                <span>+91 9270109911</span>
              </a>
              <div className="flex items-start gap-3 text-white/70">
                <MapPin className="w-5 h-5 mt-0.5 shrink-0" />
                <span>Nagpur, Maharashtra, India</span>
              </div>
              <div className="pt-4 border-t border-white/10">
                <h4 className="font-medium mb-2">Team Contacts:</h4>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  {teamContacts.map((contact) => (
                    <a
                      key={contact.name}
                      href={`tel:${contact.phone.replace(/\s/g, "")}`}
                      className="text-white/70 hover:text-gold transition-colors"
                    >
                      {contact.name}: {contact.phone.slice(-10)}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-sm text-center md:text-left">
              © 2024 Global Imports Nagpur. All rights reserved.
            </p>
            <p className="text-white/50 text-sm">
              IEC License: XXXXXXXX | 16+ Years of Excellence in Global Trade
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
