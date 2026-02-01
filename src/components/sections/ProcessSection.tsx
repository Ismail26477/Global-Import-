import {
  Globe,
  Package,
  Search,
  Ship,
  FileText,
  Truck,
} from "lucide-react";

const steps = [
  {
    icon: Globe,
    title: "Global Sourcing",
    description: "Find the right manufacturers and suppliers worldwide",
    step: 1,
  },
  {
    icon: Package,
    title: "End-to-End Procurement",
    description: "Complete sourcing support from negotiation to delivery",
    step: 2,
  },
  {
    icon: Search,
    title: "Quality Inspection",
    description: "Pre-production, during, and pre-shipment quality checks",
    step: 3,
  },
  {
    icon: Ship,
    title: "International Shipping",
    description: "Sea freight, air freight, and express courier services",
    step: 4,
  },
  {
    icon: FileText,
    title: "Custom Clearance",
    description: "Expert customs handling and regulatory compliance",
    step: 5,
  },
  {
    icon: Truck,
    title: "Last Mile Delivery",
    description: "Direct delivery to your doorstep across India",
    step: 6,
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="section-padding bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-gold font-medium uppercase tracking-wider text-xs md:text-sm">
            Our Process
          </span>
          <h2 className="font-heading text-2xl md:text-4xl lg:text-5xl text-navy-dark mt-2 mb-3 md:mb-4">
            How We Work
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
            Complete end-to-end service flow for your import and sourcing needs
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-white rounded-2xl p-4 md:p-8 shadow-sm card-hover group"
            >
              {/* Step Number */}
              <div className="absolute -top-3 -left-3 w-9 h-9 md:w-12 md:h-12 rounded-full bg-gold flex items-center justify-center font-heading font-bold text-sm md:text-xl text-navy-dark shadow-lg">
                {step.step}
              </div>

              {/* Icon */}
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl bg-navy/5 flex items-center justify-center mb-4 md:mb-6 group-hover:bg-gold/10 transition-colors">
                <step.icon className="w-6 h-6 md:w-8 md:h-8 text-navy group-hover:text-gold transition-colors" />
              </div>

              {/* Content */}
              <h3 className="font-heading font-semibold text-sm md:text-xl text-navy-dark mb-2 md:mb-3 leading-tight">
                {step.title}
              </h3>
              <p className="text-xs md:text-base text-muted-foreground leading-snug">
                {step.description}
              </p>

              {/* Connector Line (desktop only) */}
              {index < steps.length - 1 && index !== 2 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gold/30" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
