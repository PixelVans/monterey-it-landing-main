import { useState } from "react";

import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import ServicesSection from "@/components/ServicesSection";
import TrustSection from "@/components/TrustSection";
import ProcessSection from "@/components/ProcessSection";
import ServiceAreaSection from "@/components/ServiceArea";
import Footer from "@/components/Footer";

import ContactDialog from "@/components/contact/ContactDialog";

const Index = () => {
  const [contactOpen, setContactOpen] = useState(false);

  const openContact = () => setContactOpen(true);

  return (
    <div className="min-h-screen bg-background">
      <Header onContactClick={openContact} />

      <main>
        <HeroSection />
        <WhyChooseSection />
        <ServicesSection />
        <ServiceAreaSection />
        <TrustSection />
        <ProcessSection />
      </main>

      <Footer onContactClick={openContact} />

      <ContactDialog
        open={contactOpen}
        onOpenChange={setContactOpen}
      />
    </div>
  );
};

export default Index;
