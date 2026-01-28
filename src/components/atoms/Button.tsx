import { motion } from "motion/react";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '',
  onClick,
  type = 'button'
}: ButtonProps) {
  const baseStyles = "font-display font-medium tracking-tighter transition-all duration-300";
  
  const variants = {
    primary: 'bg-white text-black rounded-full hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] hover:bg-gradient-to-r hover:from-white hover:to-gray-50 active:scale-95',
    secondary: 'bg-black text-white rounded-full hover:scale-105 active:scale-95',
    ghost: 'bg-transparent text-white hover:bg-white/10'
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-4 md:px-6 py-2 md:py-3 text-sm md:text-base',
    lg: 'px-6 md:px-8 py-3 md:py-4 text-base md:text-lg'
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </button>
  );
}

export function MotionButton({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '',
  onClick,
  whileHover,
  whileTap,
  initial,
  animate,
  transition
}: ButtonProps & {
  whileHover?: any;
  whileTap?: any;
  initial?: any;
  animate?: any;
  transition?: any;
}) {
  const baseStyles = "font-display font-medium tracking-tighter";
  
  const variants = {
    primary: 'bg-white text-black rounded-full',
    secondary: 'bg-black text-white rounded-full',
    ghost: 'bg-transparent text-white'
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-4 md:px-6 py-2 md:py-3 text-sm md:text-base',
    lg: 'px-6 md:px-8 py-3 md:py-4 text-base md:text-lg'
  };

  return (
    <motion.button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      whileHover={whileHover}
      whileTap={whileTap}
      initial={initial}
      animate={animate}
      transition={transition}
    >
      {children}
    </motion.button>
  );
}
