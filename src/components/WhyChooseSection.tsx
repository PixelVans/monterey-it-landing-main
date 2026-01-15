import { Clock, DollarSign, Building2 } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Local, Responsive IT Management",
    description:
      "Proactive monitoring and local expertise when needed. Our team is based in Monterey County and stays close to your systems, not just your support tickets.",
  },
  {
    icon: DollarSign,
    title: "Transparent, Upfront Pricing",
    description:
      "Clear scopes and defined service coverage with no surprises. You’ll always know what’s included and how your IT environment is managed.",
  },
  {
    icon: Building2,
    title: "Built for Small & Growing Businesses",
    description:
      "Right-sized IT systems and management without unnecessary enterprise complexity or cost.",
  },
];

const WhyChooseSection = () => {
  return (
    <section
      id="about"
      className="py-24 lg:py-32 bg-card relative overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 circuit-pattern opacity-40" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 text-primary text-sm font-medium mb-6 backdrop-blur">
            Why Choose MBITS
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Why Monterey Bay Businesses{" "}
            <span className="gradient-text">Choose MBITS</span>
          </h2>

          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
            Monterey Bay IT Services delivers proactive IT management and
            technology systems designed to support small and mid-sized
            businesses.
            <span className="block mt-3">
              We focus on prevention, stability, and long-term reliability — not
              just fixing problems after they occur.
            </span>
          </p>
        </div>

      <div className="flex items-center justify-center gap-6 mb-12">
        <div className="h-px w-16 bg-orange-600 " />
         <p className="text-sm font-mono text-muted-foreground tracking-wide">
          Designed for businesses that want <span className="font-bold">IT handled</span>, not constantly dealt with.
        </p>
        <div className="h-px w-16 bg-orange-600 " />
      </div>



        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative bg-background rounded-2xl p-8 border border-border/50
                         shadow-soft transition-all duration-300
                         hover:-translate-y-1 hover:shadow-xl"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div
                className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/15 to-accent/15
                           flex items-center justify-center mb-6
                           group-hover:scale-110 transition-transform duration-300"
              >
                <feature.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>

              {/* Soft depth glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/8 to-accent/8 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
