import { motion } from "motion/react";
import React from "react";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  isLight?: boolean;
  className?: string;
  onClick?: () => void;
}

export function NavLink({ href, children, isLight = false, className = '', onClick }: NavLinkProps) {
  const textColor = isLight ? 'text-black' : 'text-white';
  const afterBg = isLight ? 'after:bg-black' : 'after:bg-white';

  return (
    <a
      href={href}
      onClick={onClick}
      className={`text-base tracking-[-0.32px] px-2 py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:transition-all after:duration-300 hover:after:w-full ${textColor} ${afterBg} ${className}`}
    >
      {children}
    </a>
  );
}

export function MobileNavLink({
  href,
  children,
  onClick,
  isLight = false,
  delay = 0
}: NavLinkProps & { delay?: number }) {
  const textColor = isLight ? "text-black" : "text-white";
  const borderColor = isLight ? "border-black/10" : "border-white/10";
  const hoverColor = isLight ? "#000000" : "#ffffff";

  return (
    <motion.a
      href={href}
      onClick={onClick}
      className={`${textColor} text-lg tracking-[-0.32px] py-2 border-b ${borderColor} text-center block w-full`}
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.3, ease: "easeOut" }}
      whileHover={{ x: 10, color: hoverColor }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.a>
  );
}
