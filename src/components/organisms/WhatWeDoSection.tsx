import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { useInView } from "motion/react";
import "../../styles/what-we-do.css";


// Service card data (Text Only)
const serviceCards = [
  {
    id: 1,
    title: "Build Smarter,\nLaunch Faster",
    description: "We craft high-performance web and mobile apps that are fast, scalable, and user-focused helping you go from idea to launch with confidence and speed.",
  },
  {
    id: 2,
    title: "Tailored Systems,\nTotal Control",
    description: "From custom dashboards to complex integrations, we build tech that fits your workflow — giving you full control without the technical hassle.",
  },
  {
    id: 3,
    title: "Engineered to\nScale Securely",
    description: "Our solutions are built on rock-solid architecture that scales effortlessly and keeps your data safe — so you can grow without limits.",
  },
  {
    id: 4,
    title: "Innovate\nBeyond Limits",
    description: "Leverage the power of AI, automation, and Web3. We build intelligent, next-gen solutions that move your business into the future.",
  }
];

export function WhatWeDoSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  
  // Detection for performance: Is the section in view?
  const isVisible = useInView(sectionRef, { amount: 0.1 });

  // Parallax scroll tracking
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Parallax transforms - text from left, carousel from right
  const textX = useTransform(scrollYProgress, [0, 0.3, 0.5], [-100, 0, 0]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  
  const carouselX = useTransform(scrollYProgress, [0, 0.3, 0.5], [100, 0, 0]);
  const carouselOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  // Subtle vertical parallax for depth
  const contentY = useTransform(scrollYProgress, [0.5, 1], [0, -50]);

  return (
    <section ref={sectionRef} className="what-we-do-section">
      <motion.div 
        className="wwd-container"
        style={{ y: contentY }}
      >
        
        {/* Left Column: Text Content with Parallax */}
        <motion.div 
          className="wwd-content"
          style={{ 
            x: textX, 
            opacity: textOpacity 
          }}
        >
          <h2 className="wwd-title">
            Technology built for 
            <br />
            clarity and trust 
          </h2>
          <p className="wwd-description">
            TechVirtue Infotech was started in 2024 by Tarun Bhati. After working across a range of industries and project types, Tarun had repeatedly seen the same issue. Businesses would hire developers who could write code, but were not on the same page about the project's purpose. 
            He wanted to change this dynamic. TechVirtue started as a company that wanted to build solutions through clear communication and only build products that actually help clients. That philosophy is still at the heart of all of our services and all of our product decisions. 
            We believe that good software is built when the business logic is known as clearly as the technology.  

          </p> 
        </motion.div>

        {/* Right Column: 3D Carousel with Parallax */}
        <motion.div 
          className="wwd-grid-wrapper"
          style={{ 
            x: carouselX, 
            opacity: carouselOpacity 
          }}
        >
          <div className={`wwd-carousel-inner ${!isVisible ? 'wwd-carousel-paused' : ''}`}>
            {serviceCards.map((card, i) => (
              <div 
                key={card.id} 
                className="wwd-card-wrapper"
                style={{ "--index": i } as any}
              >
                <div className="wwd-card">
                  {/* Content Only */}
                  <div className="wwd-card-content">
                    <h3 className="wwd-card-title">
                      {card.title.split('\n').map((line, i) => (
                        <React.Fragment key={i}>
                          {line}
                          <br />
                        </React.Fragment>
                      ))}
                    </h3>
                    <p className="wwd-card-description">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
}
