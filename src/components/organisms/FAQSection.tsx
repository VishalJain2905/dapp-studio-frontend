import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { FAQItem } from "../molecules/FAQItem";
import { fadeUpVariant, staggerContainer, staggerItem } from "../../utils/animations";

const faqData = [
  {
    question: "What technologies do you use?",
    answer: "Our team works with modern frameworks and languages like React, Angular, Node.js, Express, MongoDB, MySQL, and more tailored to your project's needs."
  },
  {
    question: "Is my data and project information secure?",
    answer: "Yes, we follow strict data privacy, version control and security protocols to ensure your information is protected at every stage."
  },
  {
    question: "Can you redesign or upgrade my existing website?",
    answer: "Yes, we can improve, redesign or rebuild your existing platform to be faster, more responsive and aligned with modern standards."
  },
  {
    question: "Do you offer post-launch support?",
    answer: "Yes, we provide maintenance, bug fixes, performance optimization, and feature updates as part of our post-launch support packages."
  },
  {
    question: "How involved will I need to be during the project?",
    answer: "We encourage regular collaboration but handle the technical heavy lifting. You will be involved in key decisions, feedback and approvals."
  }
];

export function FAQSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  return (
    <section ref={sectionRef} className="bg-black py-12 md:py-20 px-4 md:px-20">
      <motion.div 
        className="max-w-4xl mx-auto"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={staggerContainer}
      >
        <motion.h2 
          variants={fadeUpVariant}
          className="text-white text-[32px] md:text-[60px] text-center mb-[10px]"
        >
          Still Got Questions?
        </motion.h2>
        
        <motion.p 
          variants={fadeUpVariant}
          className="text-[#909090] text-[16px] tracking-[-0.44px] text-center mb-12 md:mb-16 leading-[33px]"
        >
          No worries. We've answered the most common stuff below. If it's not here, just reach out.
        </motion.p>
        
        {/* FAQ Items with staggered reveal */}
        <motion.div 
          className="space-y-5"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
              }
            }
          }}
        >
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { 
                  opacity: 0, 
                  y: 30,
                  scale: 0.98
                },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 80,
                    damping: 15
                  }
                }
              }}
            >
              <FAQItem
                question={faq.question}
                answer={faq.answer}
                index={index}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
