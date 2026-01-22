import { useRef } from "react";
import { MainLayout } from "../components/templates/MainLayout";
import "./style.css";

// Static imports for performance - No lazy loading
import { HeroSection } from "../components/organisms/HeroSection";
import { WhatWeDoSection } from "../components/organisms/WhatWeDoSection";
import { CardScannerSection } from "../components/organisms/CardScannerSection";
import { ProcessSection } from "../components/organisms/ProcessSection";
import { BenefitsSection } from "../components/organisms/BenefitsSection";
import { PricingSection } from "../components/organisms/PricingSection";
import { TestimonialsSection } from "../components/organisms/TestimonialsSection";
import { OurWorkSection } from "../components/organisms/OurWorkSection";
import { FAQSection } from "../components/organisms/FAQSection";



export function HomePage() {
  const container = useRef<HTMLDivElement>(null);



  return (
   <MainLayout>
  <div ref={container} className="card-wrap">

    {/* Hero + Technologies Section (Merged) */}
    <div id="hero" className="card card-hero-tech">
      <HeroSection />
    </div>

    <div id="about" className="card card-what">
      <div className="cards_wrap__card-stick">
        <WhatWeDoSection />
      </div>
    </div>


    <div className="card card-scanner">
      <div className="cards_wrap__card-stick">
        <CardScannerSection />
      </div>
    </div>
    
    <div className="card card-work">
      <div className="cards_wrap__card-stick">
        <OurWorkSection />
      </div>
    </div>


    <div className="card card-process">
      <div className="cards_wrap__card-stick">
        <ProcessSection />
      </div>
    </div>

    <div className="card card-benefits">
      <div className="cards_wrap__card-stick">
        <BenefitsSection />
      </div>
    </div>

    <div id="pricing" className="card card-pricing">
      <div className="cards_wrap__card-stick">
        <PricingSection />
      </div>
    </div>

    <div className="card card-testimonials">
      <div className="cards_wrap__card-stick">
        <TestimonialsSection />
      </div>
    </div>

    <div id="faq" className="card card-faq">
      <div className="cards_wrap__card-stick last">
        <FAQSection />
      </div>
    </div>

  </div>
</MainLayout>

  );
}
