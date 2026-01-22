import { motion } from "motion/react";

interface HamburgerIconProps {
  isOpen: boolean;
  className?: string;
  isLight?: boolean;
}

export function HamburgerIcon({ isOpen, className = "", isLight = false }: HamburgerIconProps) {
  const lineColor = isLight ? "bg-black" : "bg-white";

  return (
    <motion.div
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className={`w-5 h-4 flex flex-col justify-center items-center relative ${className}`}
    >
      {/* Top Line */}
      <motion.span
        variants={{
          closed: { rotate: 0, y: 0 },
          open: { rotate: 45, y: 6 }
        }}
        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        className={`absolute w-5 h-[1.5px] ${lineColor} rounded-full top-0`}
      />
      
      {/* Middle Line */}
      <motion.span
        variants={{
          closed: { opacity: 1, x: 0 },
          open: { opacity: 0, x: -20 }
        }}
        transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
        className={`absolute w-5 h-[1.5px] ${lineColor} rounded-full top-1.5`}
      />
      
      {/* Bottom Line */}
      <motion.span
        variants={{
          closed: { rotate: 0, y: 0 },
          open: { rotate: -45, y: -6 }
        }}
        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        className={`absolute w-5 h-[1.5px] ${lineColor} rounded-full top-3`}
      />
    </motion.div>
  );
}
