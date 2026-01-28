import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Sparkles, Palette, Layout, Code2, Smartphone, Settings } from "lucide-react";
import "../../styles/our-work.css";

interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const serviceItems: ServiceItem[] = [
  {
    title: "Brand Identity",
    description: "Comprehensive brand development including logo design, color palettes, typography systems, and visual guidelines that ensure brand consistency across all touchpoints.",
    icon: <Sparkles size={18} />,
  },
  {
    title: "Illustration",
    description: "Custom illustrations and graphics tailored to your brand's personality. From icons to full-page illustrations that bring your vision to life.",
    icon: <Palette size={18} />,
  },
  {
    title: "UI/UX Design",
    description: "User-centered design solutions that combine aesthetics with functionality. We create intuitive interfaces that delight users and drive engagement.",
    icon: <Layout size={18} />,
  },
  {
    title: "Frontend Design",
    description: "Pixel-perfect frontend development with modern technologies. Responsive, accessible, and performant web experiences that look great everywhere.",
    icon: <Code2 size={18} />,
  },
  {
    title: "Android/iOS App",
    description: "Native and cross-platform mobile app development. From concept to deployment, we build apps that users love to use every day.",
    icon: <Smartphone size={18} />,
  },
  {
    title: "Software Development",
    description: "End-to-end software solutions tailored to your business needs. Scalable, secure, and maintainable systems built with best practices.",
    icon: <Settings size={18} />,
  }
];

export function OurWorkSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section ref={sectionRef} className="services-section">
      <div className="services-container">
        {/* Header */}
        <div className="services-header">
          <div className="services-header-left">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="services-label"
            >
              [ What we do ]
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="services-title"
            >
              We design meaningful not just<br />
              quick impressions
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="services-description"
          >
            Quality-driven design at every level. Our integrated approach helps brands go to market faster with confidence.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="services-grid">
          {serviceItems.map((item, index) => (
            <ServiceCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ServiceCardProps {
  item: ServiceItem;
  index: number;
}

const ServiceCard = ({ item, index }: ServiceCardProps) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0, 0, 0.25, 1] }}
      className="service-card"
    >
      {/* Corner Glow Effects */}
      <div className="corner-glow top-left"></div>
      <div className="corner-glow bottom-right"></div>
      
      {/* Icon */}
      <div className="service-card-icon">
        {item.icon}
      </div>
      
      {/* Title */}
      <h3 className="service-card-title">{item.title}</h3>
      
      {/* Description */}
      <p className="service-card-description">{item.description}</p>
    </motion.div>
  );
};
