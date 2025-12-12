import { Clock, DollarSign, Building2 } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Fast, Local Support",
    description: "On-site or remote help with response times under 20 minutes. We're right here in Monterey County, ready to help.",
  },
  {
    icon: DollarSign,
    title: "Transparent, Upfront Pricing",
    description: "Clear rates, no surprises, honest diagnostics. You'll know exactly what you're paying for before we start.",
  },
  {
    icon: Building2,
    title: "Small-Business Focused",
    description: "Tailored IT solutions without enterprise-level pricing. We understand the unique needs of local businesses.",
  },
];

const WhyChooseSection = () => {
  return (
    <section id="about" className="py-24 lg:py-32 bg-card relative overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute inset-0 circuit-pattern opacity-50" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Why Choose MBITS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Why Monterey Bay Businesses{" "}
            <span className="gradient-text">Choose MBITS</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Monterey Bay IT Services delivers dependable computer repair and managed IT support for small and mid-sized businesses.
             Whether you need immediate help or want to prevent problems before they happen, we’re your local technology partner.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative bg-background rounded-2xl p-8 shadow-soft border border-border/50 hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>

              {/* Hover gradient */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
