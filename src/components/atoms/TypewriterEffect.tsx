import React, { useEffect } from "react";
import { motion, useAnimation, useInView } from "motion/react";

interface TypewriterEffectProps {
  text: string;
  className?: string;
  cursorColor?: string;
  speed?: number;
  delay?: number;
  firstWordColor?: string;
  glow?: boolean; // New prop for neon glow effect
}

export const TypewriterEffect: React.FC<TypewriterEffectProps> = ({
  text,
  className = "",
  cursorColor = "#F59E0B",
  speed = 0.05,
  delay = 0,
  firstWordColor,
  glow = false,
}) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const words = text.split(" ");
  const firstWord = words[0];
  const firstWordLength = firstWord.length;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: speed,
        delayChildren: delay,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, display: "none" },
    visible: {
      opacity: 1,
      display: "inline-block",
      transition: { duration: 0 },
    },
  };

  const glowStyle = {
    textShadow: `
      0 0 5px #fff,
      0 0 10px #fff,
      0 0 20px #fff,
      0 0 40px #0ff,
      0 0 80px #0ff,
      0 0 90px #0ff,
      0 0 100px #0ff,
      0 0 150px #0ff
    `
  };

  return (
    <motion.span
      ref={ref}
      className={`inline-block ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      {text.split("").map((char, index) => {
        // Determine if this character belongs to the first word
        const isFirstWord = index < firstWordLength;
        const color = isFirstWord && firstWordColor ? firstWordColor : "inherit"; 
        
        return (
          <motion.span
            key={index}
            variants={letterVariants}
            style={{ 
              color: color,
              ...(glow ? glowStyle : {}),
              ...(char === " " ? { width: "0.3em" } : {}) 
            }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        );
      })}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        style={{
          display: "inline-block",
          marginLeft: "2px",
          width: "2px",
          height: "1em",
          backgroundColor: cursorColor,
          verticalAlign: "text-bottom",
        }}
        className="cursor"
      />
    </motion.span>
  );
};
