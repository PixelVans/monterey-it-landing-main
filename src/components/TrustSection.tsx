import { CheckCircle, Zap, BadgeDollarSign } from "lucide-react";
import supportImage from "@/assets/it-support.jpg";

const trustFeatures = [
  {
    icon: BadgeDollarSign,
    title: "Transparent Pricing",
    description: "No hidden fees or surprise charges. Clear estimates before we start any work.",
  },
  {
    icon: Zap,
    title: "Fast, Reliable Support",
    description: "Same-day service for most issues. We understand that downtime costs money.",
  },
  {
    icon: CheckCircle,
    title: "No-Fix, No-Fee Guarantee",
    description: "If we can't solve your problem, you don't pay. It's that simple.",
  },
];

const TrustSection = () => {
  return (
    <section id="trust" className="py-24 lg:py-32 bg-card relative overflow-hidden">
      {/* Subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <div className="relative order-2 lg:order-1">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl blur-xl" />
              
              <div className="relative rounded-3xl overflow-hidden shadow-elevated border border-border/50">
                <img
                  src={supportImage}
                  alt="IT support technician helping a business owner with computer issues"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Stats card */}
              <div className="absolute -bottom-6 -right-6 bg-card rounded-2xl shadow-card p-6 border border-border/50">
                <div className="text-3xl font-bold text-primary mb-1">15+ Years</div>
                <div className="text-sm text-muted-foreground">Serving Monterey Bay</div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Why Trust Us
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              You're In{" "}
              <span className="gradient-text">Good Hands</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-10">
              We've built our reputation on honest service, fair pricing, and treating every client like a neighbor—because you are.
            </p>

            {/* Trust Features */}
            <div className="space-y-6">
              {trustFeatures.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
