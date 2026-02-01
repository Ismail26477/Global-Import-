import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=1920&q=80",
    title: "Global Shipping Excellence",
    subtitle: "Container ships delivering worldwide",
  },
  {
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1920&q=80",
    title: "Air Freight Solutions",
    subtitle: "Fast and reliable air cargo services",
  },
  {
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1920&q=80",
    title: "Warehouse Operations",
    subtitle: "State-of-the-art storage facilities",
  },
  {
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1920&q=80",
    title: "Global Trade Network",
    subtitle: "Connecting markets across continents",
  },
  {
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1920&q=80",
    title: "Quality Inspection",
    subtitle: "Rigorous quality control standards",
  },
];

const stats = [
  { value: "500+", label: "Products Sourced" },
  { value: "50+", label: "Countries Served" },
  { value: "98%", label: "Success Rate" },
];

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative h-[90vh] md:h-screen min-h-[520px] md:min-h-[700px] overflow-hidden"
    >
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={cn("hero-slide", index === currentSlide && "active")}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="gradient-overlay absolute inset-0" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-gold/20 text-gold rounded-full text-sm font-medium mb-6 animate-fade-in">
              Trusted by 500+ Businesses
            </span>

            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight animate-fade-in-up">
              Connecting Global Markets with{" "}
              <span className="text-gradient-gold">
                Trusted Trade Solutions
              </span>
            </h1>

            <p
              className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              Your reliable partner for international import-export, sourcing,
              logistics, and compliance services. We bridge the gap between
              global suppliers and your business needs.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <Button
                onClick={() => scrollToSection("#contact")}
                className="btn-gold text-lg px-8 py-6"
              >
                Request a Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>

              {/* Fixed mobile color */}
              <Button
                onClick={() => scrollToSection("#products")}
                className="text-lg px-8 py-6 bg-white text-navy-dark hover:bg-white/90"
              >
                View Products
              </Button>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="absolute bottom-0 left-0 right-0">
          <div className="container mx-auto px-4">
            <div className="glass rounded-t-2xl py-6 px-8">
              <div className="grid grid-cols-3 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="font-heading text-2xl md:text-4xl font-bold text-navy-dark">
                      {stat.value}
                    </div>
                    <div className="text-sm md:text-base text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows - Desktop Only */}
      <button
        onClick={prevSlide}
        className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full glass items-center justify-center text-navy-dark hover:bg-white transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full glass items-center justify-center text-navy-dark hover:bg-white transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-32 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "w-3 h-3 rounded-full transition-all",
              index === currentSlide
                ? "bg-gold w-8"
                : "bg-white/50 hover:bg-white/80"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
