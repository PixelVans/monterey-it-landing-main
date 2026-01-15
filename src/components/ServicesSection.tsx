import { Button } from "@/components/ui/button";
import { 
  Monitor, 
  Server, 
  Wifi, 
  HardDrive, 
  Shield, 
  Laptop,
  ArrowRight 
} from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Endpoint Management & System Maintenance",
    description:
      "Ongoing management of workstations and systems to ensure stability, performance, and reliability. Issues are addressed proactively, not after productivity is lost.",
  },
  {
    icon: Server,
    title: "Managed IT Infrastructure",
    description:
      "Continuous monitoring, maintenance, and optimization of your core technology systems to prevent disruptions and support long-term business operations.",
  },
  {
    icon: Wifi,
    title: "Network Setup & Wi-Fi Optimization",
    description:
      "Professional network design, installation, and ongoing optimization to ensure reliable, secure connectivity across your workspace.",
  },
  {
    icon: HardDrive,
    title: "Data Backup & Continuity Planning",
    description:
      "Automated backup systems and disaster recovery planning to protect critical business data and ensure operational continuity.",
  },
  {
    icon: Shield,
    title: "Cybersecurity Strategy & Risk Mitigation",
    description:
      "Layered security strategy including endpoint protection, firewall management, monitoring, and risk mitigation tailored to small businesses.",
  },
  {
    icon: Laptop,
    title: "Device Lifecycle Management",
    description:
      "Standardized setup, configuration, management, and replacement planning for laptops, desktops, and mobile devices across your organization.",
  },
];

const ServicesSection = () => {
  return (
    <section
      id="services"
      className="py-24 lg:py-32 bg-background relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
            Our Services
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            IT Services We Provide
          </h2>
          <p className="text-lg text-muted-foreground">
            Proactive, managed technology systems for Monterey Bay businesses.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative bg-card rounded-2xl p-6 lg:p-8 shadow-soft border border-border/50 hover-lift cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-orange-900 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-6 h-6 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Arrow indicator */}
              <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowRight className="w-5 h-5 text-primary" />
              </div>
            </div>
          ))}
        </div>

        {/* Positioning Line */}
        <p className="text-center max-w-2xl mx-auto mt-10 text-sm text-muted-foreground">
          All services are delivered as part of a cohesive IT management strategy,
          not one-off fixes.
        </p>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="gradient" size="lg">
            View Managed IT Services
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
