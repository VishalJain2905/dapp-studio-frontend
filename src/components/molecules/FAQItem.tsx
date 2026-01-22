import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface FAQItemProps {
  question: string;
  answer: string;
  index?: number;
}

export function FAQItem({ question, answer, index = 0 }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      className="pb-5 relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={false}
    >
      <motion.button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left group"
        whileTap={{ scale: 0.995 }}
      >
        <motion.p 
          className="font-medium text-white text-lg md:text-[20px] pr-4 tracking-[-0.01em]"
          animate={{ 
            color: isOpen ? "#77EBFF" : "#ffffff" 
          }}
          transition={{ duration: 0.3 }}
        >
          {question}
        </motion.p>
        <motion.div
          animate={{ 
            rotate: isOpen ? 180 : 0,
            backgroundColor: isOpen ? "rgba(119, 235, 255, 0.1)" : "transparent"
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="w-8 h-8 flex items-center justify-center rounded-full flex-shrink-0"
        >
          <svg 
            className="w-5 h-5" 
            fill="none" 
            viewBox="0 0 24 24"
          >
            <path 
              d="M6.75 9L12 14.25L17.25 9" 
              stroke={isOpen ? "#77EBFF" : "#FDFDFD"}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </motion.button>
      
      {/* Animated accordion content */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ 
              height: "auto", 
              opacity: 1,
              transition: {
                height: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
                opacity: { duration: 0.3, delay: 0.1 }
              }
            }}
            exit={{ 
              height: 0, 
              opacity: 0,
              transition: {
                height: { duration: 0.3, ease: "easeInOut" },
                opacity: { duration: 0.2 }
              }
            }}
            className="overflow-hidden"
          >
            <motion.p 
              initial={{ y: -10 }}
              animate={{ y: 0 }}
              exit={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="text-white/80 text-base md:text-[18px] leading-relaxed pt-4"
            >
              {answer}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Animated gradient line */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/20 overflow-hidden">
        <motion.div 
          className="h-full"
          style={{
            background: isOpen 
              ? "linear-gradient(90deg, #77EBFF 0%, #5476EF 50%, #77EBFF 100%)"
              : "#ffffff"
          }}
          initial={{ scaleX: 0 }}
          animate={{ 
            scaleX: isHovered || isOpen ? 1 : 0,
            opacity: isHovered || isOpen ? 1 : 0.5
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
}
