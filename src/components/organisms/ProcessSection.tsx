import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "motion/react";
import "../../styles/process-section.css";

// Process Data
const processSteps = [
  {
    id: "01",
    title: "Discover",
    items: [
      "Strategic Insight",
      "User Research",
      "Goal Alignment",
      "Competitive Analysis",
      "Product Vision"
    ]
  },
  {
    id: "02",
    title: "Design",
    items: [
      "Wireframe Flow",
      "Visual Identity",
      "UX Mapping",
      "UI Prototypes",
      "Interaction Design"
    ]
  },
  {
    id: "03",
    title: "Develop",
    items: [
      "Technical Architecture",
      "Front-End Development",
      "Back-End Integration",
      "Quality Assurance & Testing",
      "Performance Optimization"
    ]
  },
  {
    id: "04",
    title: "Evolve",
    items: [
      "User Feedback Analysis",
      "Continuous Improvement",
      "Feature Enhancements",
      "Usage Analytics",
      "Maintenance & Support"
    ]
  }
];

// Process Visual Component (Minimalist Wireframe Cube)
function ProcessVisual() {
  const visualRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(visualRef, { amount: 0.1 });

  return (
    <div ref={visualRef} className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] flex items-center justify-center" style={{ perspective: "1000px" }}>
      <div className="relative w-[160px] h-[160px]" style={{ transformStyle: "preserve-3d" }}>
        <motion.div
           className="relative w-full h-full"
           style={{ transformStyle: "preserve-3d" }}
           animate={isInView ? { 
             rotateX: [0, 360],
             rotateY: [0, 360],
           } : {}}
           transition={{ 
             duration: 25,
             ease: "linear",
             repeat: Infinity
           }}
        >
          {/* Front */}
          <div className="absolute inset-0 border border-white/20 bg-white/5" style={{ transform: "translateZ(80px)" }} />
          {/* Back */}
          <div className="absolute inset-0 border border-white/20 bg-white/5" style={{ transform: "translateZ(-80px) rotateY(180deg)" }} />
          {/* Right */}
          <div className="absolute inset-0 border border-white/20 bg-white/5" style={{ transform: "rotateY(90deg) translateZ(80px)" }} />
          {/* Left */}
          <div className="absolute inset-0 border border-white/20 bg-white/5" style={{ transform: "rotateY(-90deg) translateZ(80px)" }} />
          {/* Top */}
          <div className="absolute inset-0 border border-white/20 bg-white/5" style={{ transform: "rotateX(90deg) translateZ(80px)" }} />
          {/* Bottom */}
          <div className="absolute inset-0 border border-white/20 bg-white/5" style={{ transform: "rotateX(-90deg) translateZ(80px)" }} />
          
          {/* Internal Wireframe structure */}
          <div className="absolute inset-4 border border-white/10" style={{ transform: "translateZ(40px)" }} />
          <div className="absolute inset-4 border border-white/10" style={{ transform: "translateZ(-40px)" }} />
          
          {/* Inner Glowing Core */}
          <div 
            className="absolute top-1/2 left-1/2 w-20 h-20 -translate-x-1/2 -translate-y-1/2 rounded-full blur-xl"
            style={{ 
              transform: "translateZ(0)",
              background: "rgba(119, 235, 255, 0.3)"
            }}
          />
        </motion.div>
      </div>
    </div>
  );
}

export function ProcessSection() {
  const [activeStep, setActiveStep] = useState<string | null>("01");

  const toggleStep = (id: string) => {
    setActiveStep(activeStep === id ? null : id);
  };

  return (
    <section className="process-section">
      <div className="process-container">
        
        {/* Left Column: Heading & Visual */}
        <div className="process-left-content">
          <div>
            <h2 className="process-title">
              Our simple, Smart<br />
              and Scalable process
            </h2>
            <p className="process-description mt-6">
              We separate our work into focused phases to ensure clarity, quality, and speed. From the initial idea to the final product, every step is calculated.
            </p>
          </div>
          
          <div className="process-visual hidden md:flex items-center justify-center">
            <ProcessVisual />
          </div>
        </div>

        {/* Right Column: Accordion */}
        <div className="process-accordion">
          {processSteps.map((step) => (
            <div 
              key={step.id} 
              className={`accordion-item ${activeStep === step.id ? 'active' : ''}`}
              onClick={() => toggleStep(step.id)}
            >
              <button className="accordion-header">
                <span className="accordion-title">{step.title}</span>
                <div className="accordion-icon" />
              </button>
              
              <AnimatePresence>
                {activeStep === step.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="accordion-content-inner">
                      <div className="process-list">
                        {step.items.map((item, index) => (
                          <div key={index} className="process-list-item">
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Visual for Mobile (shown below accordion or between) */}
        <div className="process-visual flex md:hidden items-center justify-center mx-auto mt-12">
          <ProcessVisual />
        </div>

      </div>
    </section>
  );
}
