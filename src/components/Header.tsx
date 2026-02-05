import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";



const Header = ({ onContactClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  


  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">M</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg leading-tight text-foreground">MBITS</span>
              <span className="text-xs text-muted-foreground leading-tight hidden sm:block">Monterey Bay IT</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <a href="#services" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Services
            </a>
            <a href="#about" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Why MBITS
            </a>
            <a href="#process" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              How It Works
            </a>
            <a href="#trust" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Trust
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
           <a href="tel:+18314173101">
            <Button variant="heroOutline" size="default">
              <Phone className="w-4 h-4" />
              Call Now (831) 417-3101
            </Button>
          </a>

          <Button variant="hero" size="default" onClick={onContactClick}>
            Get Help Now
          </Button>

            
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border/50 animate-fade-in">
            <nav className="flex flex-col gap-4">
              <a href="#services" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2">
                Services
              </a>
              <a href="#about" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2">
                Why MBITS
              </a>
              <a href="#process" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2">
                How It Works
              </a>
              <a href="#trust" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2">
                Trust
              </a>
              <div className="flex flex-col gap-2 pt-4">
                <Button variant="heroOutline" size="default" className="w-full">
                  <Phone className="w-4 h-4" />
                  Call Now
                </Button>
                <Button variant="hero" size="default" className="w-full">
                  Get Help Now
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
