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
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });

  return (
    <section ref={sectionRef} className="services-section">
      {/* ONE animation: Simple fade up for the entire container */}
      <motion.div 
        className="services-container"
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Header */}
        <div className="services-header">
          <div className="services-header-left">
            <span className="services-label">[ What we do ]</span>
            <h2 className="services-title">
              We design meaningful not just<br />
              quick impressions
            </h2>
          </div>
          <p className="services-description">
            Quality-driven design at every level. Our integrated approach helps brands go to market faster with confidence.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="services-grid">
          {serviceItems.map((item, index) => (
            <ServiceCard key={`service-${index}`} item={item} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

interface ServiceCardProps {
  item: ServiceItem;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ item }) => {
  return (
    <div className="service-card">
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
    </div>
  );
};
