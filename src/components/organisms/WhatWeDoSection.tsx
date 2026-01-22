import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useInView } from "motion/react";
import "../../styles/what-we-do.css";

gsap.registerPlugin(ScrollTrigger);

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
  const textContentRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  
  // Detection for performance: Is the section in view?
  const isVisible = useInView(sectionRef, { amount: 0.1 });

  useGSAP(() => {
    if (!textContentRef.current) return;

    // "Dheere dheere" (slowly) animation from bottom
    gsap.from(textContentRef.current.children, {
      y: 60,
      opacity: 0,
      duration: 1.5,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: textContentRef.current,
        start: "top 85%", // Starts when the top of text is at 85% of viewport
        toggleActions: "play none none none",
      }
    });

    // Carousel entry animation
    gsap.from(".wwd-grid-wrapper", {
      scale: 0.95,
      opacity: 0,
      duration: 2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".wwd-grid-wrapper",
        start: "top 90%",
      }
    });
  }, { scope: containerRef });

  return (
    <section ref={sectionRef} className="what-we-do-section">
      <div className="wwd-container">
        
        {/* Left Column: Text Content (GSAP Animated) */}
        <div 
          className="wwd-content"
          ref={textContentRef}
        >
          <h2 className="wwd-title">
            The Right Tech Partner for
            <br />
            What's Next.
          </h2>
          <p className="wwd-description">
            Online sales, ad clicks, content downloads, foot traffic, and more: drive the actions your business needs the most with customized channel strategy.
          </p> 
        </div>

        {/* Right Column: 3D Carousel (Text Only) */}
        <div className="wwd-grid-wrapper">
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
        </div>

      </div>
    </section>
  );
}
