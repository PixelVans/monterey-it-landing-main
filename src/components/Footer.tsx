import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background relative overflow-hidden">
      {/* CTA Section */}
      <div className="border-b border-background/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Get{" "}
              <span className="text-accent">IT Support</span>{" "}
              That Works?
            </h2>
            <p className="text-lg text-background/70 mb-8 max-w-2xl mx-auto">
              Stop stressing over tech problems. Let Monterey Bay's trusted IT experts handle it while you focus on your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent" size="xl">
                <Phone className="w-5 h-5" />
                Call (831) 555-MBITS
              </Button>
              <Button variant="heroOutline" size="xl" className="border-background/30 text-slate-900 hover:bg-background/10 hover:border-background/50 hover:text-accent-foreground">
                Start Your Service Request
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">M</span>
              </div>
              <div>
                <span className="font-bold text-lg">MBITS</span>
                <span className="text-background/60 text-sm block">Monterey Bay IT Services</span>
              </div>
            </div>
            <p className="text-background/60 max-w-md mb-6">
              Managed IT services for Monterey Bay businesses. Proactive, reliable, and transparently priced
            </p>
            <div className="flex items-center gap-6 text-sm text-background/60">
              <a href="#" className="hover:text-accent transition-colors">Facebook</a>
              <a href="#" className="hover:text-accent transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-accent transition-colors">Google</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-3 text-background/60">
              <li><a href="#services" className="hover:text-accent transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#process" className="hover:text-accent transition-colors">How It Works</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-background/60">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-accent" />
                (831) 555-MBITS
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-accent" />
                help@mbits.com
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-accent mt-0.5" />
                <span>Serving all of<br />Monterey County, CA</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-background/50">
          <p>© {new Date().getFullYear()} Monterey Bay IT Services. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
