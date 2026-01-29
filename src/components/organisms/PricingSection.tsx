import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
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

  // Parallax scroll tracking
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Title parallax - scales up and fades in
  const titleY = useTransform(scrollYProgress, [0, 0.3], [60, 0]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.25], [0, 1]);
  const titleScale = useTransform(scrollYProgress, [0, 0.3], [0.95, 1]);

  // Cards staggered parallax
  const cardsY = useTransform(scrollYProgress, [0.15, 0.4], [80, 0]);
  const cardsOpacity = useTransform(scrollYProgress, [0.1, 0.35], [0, 1]);

  // Depth effect on exit
  const sectionY = useTransform(scrollYProgress, [0.6, 1], [0, -40]);

  return (
    <section ref={sectionRef} className="pricing-section">
      <motion.div 
        className="pricing-section-container"
        style={{ y: sectionY }}
      >
        {/* Title with Parallax */}
        <motion.h2 
          className="pricing-section-title"
          style={{ y: titleY, opacity: titleOpacity, scale: titleScale }}
        >
          What it Costs to Build it Right
        </motion.h2>
        
        {/* Subtitle */}
        <motion.div 
          className="pricing-section-subtitle-container"
          style={{ y: titleY, opacity: titleOpacity }}
        >
          <p className="pricing-section-subtitle">
            No fluff. Just quality development, clear deliverables, and pricing that reflects real work
          </p>
        </motion.div>
        
        {/* Pricing Cards Grid with Parallax */}
        <motion.div 
          className="pricing-cards-grid"
          style={{ y: cardsY, opacity: cardsOpacity }}
        >
          {pricingTiers.map((tier, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <PricingCard
                title={tier.title}
                description={tier.description}
                price={tier.price}
                features={tier.features}
                isPopular={tier.isPopular}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
