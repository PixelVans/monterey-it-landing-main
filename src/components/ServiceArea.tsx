import { MapPin } from "lucide-react";

const ServiceAreaSection = () => {
  return (
    <section id="service-area" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute inset-0 circuit-pattern opacity-30" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <MapPin className="w-4 h-4" />
            Service Area
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Serving the{" "}
            <span className="gradient-text">Monterey Peninsula</span>
          </h2>

          <p className="text-lg text-muted-foreground">
            We provide fast, reliable on-site and remote IT support across Monterey,
            Seaside, Marina, Pacific Grove, Carmel, and surrounding areas.
          </p>
        </div>

        {/* Map Card */}
        <div className="relative bg-card rounded-2xl shadow-soft border border-border/50 overflow-hidden hover-lift">
          <iframe
            title="Monterey Peninsula Service Area Map"
            src="https://www.google.com/maps?q=Monterey+Peninsula+California&z=10&output=embed"
            width="100%"
            height="480"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          {/* Soft overlay gradient */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default ServiceAreaSection;
