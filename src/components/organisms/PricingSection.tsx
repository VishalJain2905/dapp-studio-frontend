import { useRef } from "react";
import { PricingCard } from "../molecules/PricingCard";
import "../../styles/pricing-cards.css";

const pricingTiers = [
  {
    title: "Starter",
    description: "Best suited for business websites, SaaS platforms, Web3 utilities with backend logic",
    price: "$1,500",
    features: [
      "Clean, modern frontend with responsive design",
      "Basic backend and functionality",
      "Support post delivery",
      "Mobile-friendly performance",
      "Revision cycles"
    ],
    isPopular: false
  },
  {
    title: "Professional",
    description: "Best suited for business websites, SaaS platforms, Web3 utilities with backend logic",
    price: "$4,500",
    features: [
      "Clean, modern frontend with responsive design",
      "Basic backend and functionality",
      "Support post delivery",
      "Mobile-friendly performance",
      "Revision cycles"
    ],
    isPopular: true
  },
  {
    title: "Enterprise",
    description: "Best suited for business websites, SaaS platforms, Web3 utilities with backend logic",
    price: "$10,000",
    features: [
      "Clean, modern frontend with responsive design",
      "Basic backend and functionality",
      "Support post delivery",
      "Mobile-friendly performance",
      "Revision cycles"
    ],
    isPopular: false
  }
];

export function PricingSection() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section ref={sectionRef} className="pricing-section">
      <div className="pricing-section-container">
        {/* Title */}
        <h2 className="pricing-section-title">
          What it Cost to Built it Right
        </h2>
        
        {/* Subtitle */}
        <div className="pricing-section-subtitle-container">
          <p className="pricing-section-subtitle">
            No fluff. Just quality development, clear deliverables, and Pricing that reflects real work
          </p>
        </div>
        
        {/* Pricing Cards Grid */}
        <div className="pricing-cards-grid">
          {pricingTiers.map((tier, index) => (
            <div key={index}>
              <PricingCard
                title={tier.title}
                description={tier.description}
                price={tier.price}
                features={tier.features}
                isPopular={tier.isPopular}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
