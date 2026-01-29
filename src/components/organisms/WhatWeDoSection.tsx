import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import { InfiniteLogoScroller } from "../molecules/InfiniteLogoScroller";
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
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section ref={sectionRef} className="what-we-do-section">
      {/* Infinite Logo Scroller at top */}
      <InfiniteLogoScroller />
      
      {/* ONE animation: Simple fade up for the entire container */}
      <motion.div 
        className="wwd-container"
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        
        {/* Text Content */}
        <div className="wwd-content">
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
        </div>

        {/* 3D Carousel */}
        <div className="wwd-grid-wrapper">
          <div className={`wwd-carousel-inner ${!isInView ? 'wwd-carousel-paused' : ''}`}>
            {serviceCards.map((card, i) => (
              <div 
                key={card.id} 
                className="wwd-card-wrapper"
                style={{ "--index": i } as any}
              >
                <div className="wwd-card">
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
        </div>

      </motion.div>
    </section>
  );
}
