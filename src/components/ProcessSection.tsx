import { MessageSquare, Settings, CreditCard } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Assess & Understand Your Environment",
    description:
      "We start with a discovery conversation and a high-level assessment of your current systems, risks, and business needs. This helps us understand how your technology is being used—and where it needs improvement.",
  },
  {
    number: "02",
    icon: Settings,
    title: "Implement & Manage Your IT Systems",
    description:
      "We design, configure, and manage your core IT infrastructure, including devices, networks, security, and backups. Systems are continuously monitored and maintained to prevent disruption to operations.",
  },
  {
    number: "03",
    icon: CreditCard,
    title: "Predictable, Ongoing Management",
    description:
      "You receive clear service coverage, defined responsibilities, and predictable pricing. We take long-term ownership of the systems we manage so your technology stays stable as your business grows.",
  },
];

const ProcessSection = () => {
  return (
    <section
      id="process"
      className="py-24 lg:py-32 bg-background relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 circuit-pattern opacity-30" />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
            How Our Service Works
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            A Simple, Structured Approach to Managed IT
          </h2>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 items-stretch">
          {steps.map((step, index) => (
            <div key={step.number} className="relative h-full">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-1/2 w-full h-px bg-gradient-to-r from-primary/30 to-accent/30" />
              )}

              <div className="relative bg-card rounded-3xl p-8 h-full flex flex-col text-center border border-border/50 shadow-soft transition hover:-translate-y-1 hover:shadow-elevated">
                {/* Step number */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
                  <span className="text-primary-foreground font-bold text-lg">
                    {step.number.slice(1)}
                  </span>
                </div>

                {/* Icon */}
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mt-4 mb-6">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {step.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed flex-grow">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
