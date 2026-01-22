import { Variants } from "motion/react";

// ========================================
// SCROLL ANIMATION VARIANTS
// ========================================

// Fade up animation - elements slide up while fading in
export const fadeUpVariant: Variants = {
  hidden: { 
    opacity: 0, 
    y: 60,
    filter: "blur(10px)"
  },
  visible: { 
    opacity: 1, 
    y: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 15,
      mass: 1
    }
  }
};

// Fade in from left
export const fadeLeftVariant: Variants = {
  hidden: { 
    opacity: 0, 
    x: -80,
    filter: "blur(8px)"
  },
  visible: { 
    opacity: 1, 
    x: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 60,
      damping: 18,
      mass: 1
    }
  }
};

// Fade in from right
export const fadeRightVariant: Variants = {
  hidden: { 
    opacity: 0, 
    x: 80,
    filter: "blur(8px)"
  },
  visible: { 
    opacity: 1, 
    x: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 60,
      damping: 18,
      mass: 1
    }
  }
};

// Scale up with fade
export const scaleUpVariant: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.8,
    filter: "blur(10px)"
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 20,
      mass: 0.8
    }
  }
};

// Stagger container for child animations
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1
    }
  }
};

// Stagger container with faster timing
export const staggerContainerFast: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05
    }
  }
};

// Individual stagger child items
export const staggerItem: Variants = {
  hidden: { 
    opacity: 0, 
    y: 40,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
};

// Text reveal animation (character by character look)
export const textRevealVariant: Variants = {
  hidden: { 
    opacity: 0,
    y: 100,
    rotateX: -80
  },
  visible: { 
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20
    }
  }
};

// Slide reveal with clip path
export const slideRevealVariant: Variants = {
  hidden: { 
    opacity: 0,
    clipPath: "inset(100% 0% 0% 0%)"
  },
  visible: { 
    opacity: 1,
    clipPath: "inset(0% 0% 0% 0%)",
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

// Card hover effect variant
export const cardHoverVariant: Variants = {
  rest: { 
    scale: 1,
    boxShadow: "0 0 0 rgba(255,255,255,0)"
  },
  hover: { 
    scale: 1.02,
    boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 25
    }
  }
};

// Float animation for decorative elements
export const floatVariant: Variants = {
  initial: { y: 0 },
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 4,
      repeat: Infinity,
      repeatType: "loop",
      ease: "easeInOut"
    }
  }
};

// Glow pulse for buttons/CTAs
export const glowPulseVariant: Variants = {
  initial: { 
    boxShadow: "0 0 0 rgba(119, 235, 255, 0)" 
  },
  animate: {
    boxShadow: [
      "0 0 20px rgba(119, 235, 255, 0.2)",
      "0 0 40px rgba(119, 235, 255, 0.4)",
      "0 0 20px rgba(119, 235, 255, 0.2)"
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "loop"
    }
  }
};

// Line draw animation for decorative lines
export const lineDrawVariant: Variants = {
  hidden: { 
    pathLength: 0,
    opacity: 0 
  },
  visible: { 
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { 
        duration: 1.5, 
        ease: "easeInOut" 
      },
      opacity: { 
        duration: 0.3 
      }
    }
  }
};

// Parallax effect utility
export const createParallaxVariant = (yOffset: number): Variants => ({
  hidden: { y: yOffset },
  visible: { 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 30,
      damping: 15
    }
  }
});

// Counter/number animation variant
export const counterVariant: Variants = {
  hidden: { 
    opacity: 0,
    scale: 0.5,
    rotate: -10
  },
  visible: { 
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20
    }
  }
};

// Accordion expand animation
export const accordionVariant: Variants = {
  collapsed: { 
    height: 0,
    opacity: 0,
    transition: {
      height: { duration: 0.3, ease: "easeInOut" },
      opacity: { duration: 0.2 }
    }
  },
  expanded: { 
    height: "auto",
    opacity: 1,
    transition: {
      height: { duration: 0.4, ease: "easeOut" },
      opacity: { duration: 0.3, delay: 0.1 }
    }
  }
};

// Icon rotation animation
export const iconRotateVariant: Variants = {
  collapsed: { rotate: 0 },
  expanded: { 
    rotate: 180,
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  }
};

// Section reveal with mask
export const sectionRevealVariant: Variants = {
  hidden: {
    opacity: 0,
    y: 100,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
      staggerChildren: 0.15
    }
  }
};

// Bounce in for attention-grabbing elements
export const bounceInVariant: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.3,
    y: 50
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 15
    }
  }
};

// Split text animation container
export const splitTextContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.02,
      delayChildren: 0.1
    }
  }
};

// Individual letter/word animation
export const splitTextChild: Variants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    rotateX: -40
  },
  visible: { 
    opacity: 1, 
    y: 0,
    rotateX: 0,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 12
    }
  }
};

