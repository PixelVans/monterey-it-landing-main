import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, Timer, ShieldCheck, Users } from "lucide-react";
import heroImage from "@/assets/hero-it.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 animated-gradient" />
      <div className="absolute inset-0 circuit-pattern" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96  rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            
            
            <h1 className="text-4xl sm:text-5xl mt-10 sm:mt-0 lg:text-5xl font-bold text-foreground leading-tight mb-6">
              Technology Systems & IT Management
                For {" "}
              <span className="gradient-text">Monterey Bay</span>{" "}
              Businesses
            </h1>
            
           <p className="text-sm sm:text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
          Monterey Bay IT Services helps local businesses design, manage, and maintain reliable technology systems that support long-term growth, security, and operational continuity.
          From network and device management to security, monitoring, and long-term IT planning, we take ownership of your technology so it works quietly in the background.
        </p>

            
            
      <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
        <Button variant="hero" size="xl">
          Request an IT Assessment
        </Button>

        <Button variant="heroOutline" size="xl">
          Talk With an IT Advisor
          <ArrowRight className="w-5 h-5" />
        </Button>
      </div>


    {/* Trust Indicators */}
    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 sm:gap-10 mt-7 pt-10 border-t border-slate-300">

      {/* Item */}
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <Users className="w-4 h-4 text-orange-600" />
          <span className="text-sm sm:text-lg font-bold text-foreground">500+</span>
        </div>
        <span className="text-xs sm:text-sm text-muted-foreground">
          Businesses Managed
        </span>
      </div>

      <div className="w-px h-8 bg-border hidden md:block" />

      {/* Item */}
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-orange-600" />
          <span className="text-sm sm:text-lg font-bold text-foreground">99.9%</span>
        </div>
        <span className="text-xs sm:text-sm text-muted-foreground">
          Uptime Target
        </span>
      </div>

      <div className="w-px h-8 bg-border hidden md:block" />

      {/* Item — Demoted */}
      <div className="flex flex-col opacity-60">
        <div className="flex items-center gap-2">
          <Timer className="w-4 h-4 text-orange-600" />
          <span className="text-xs sm:text-sm font-medium text-foreground">
            ~20 min
          </span>
        </div>
        <span className="text-[10px] sm:text-xs text-muted-foreground">
          Typical Response
        </span>
      </div>

    </div>



          </div>

          {/* Hero Image */}
          <div className="relative animate-slide-in-right">
            <div className="inline-flex w-full border-2 border-blue-300 items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Serving Monterey County Since 2010
            </div>
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-2xl" />
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent/20 rounded-full blur-xl" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-xl" />
              
              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-elevated border border-border/50">
                <img
                  src={heroImage}
                  alt="Professional IT technician managing server infrastructure in Monterey Bay"
                  className="w-full h-auto object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 to-transparent" />
              </div>

              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl shadow-card p-4 border-2 border-slate-400 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    <span className="text-accent text-xl">✓</span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Systems Monitored</div>
                    <div className="text-sm text-muted-foreground">24/7</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
