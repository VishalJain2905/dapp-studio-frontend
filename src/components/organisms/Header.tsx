import { useState } from "react";
import { motion } from "motion/react";
import { Logo } from "../atoms/Logo";
import { Button } from "../atoms/Button";
import { HamburgerIcon } from "../atoms/HamburgerIcon";
import { DesktopNav } from "../molecules/DesktopNav";
import { MobileMenu } from "../molecules/MobileMenu";

interface HeaderProps {
  isLight: boolean;
}

export function Header({ isLight }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="relative z-10 flex items-center justify-between px-4 md:px-20 py-5 md:py-8">
        {/* Logo */}
        <Logo />

        {/* Desktop Navigation */}
        <DesktopNav isLight={isLight} />

        {/* Mobile Menu Toggle */}
        <div className={`lg:hidden navbar-glass flex items-center justify-center ${isLight ? 'light' : ''}`}>
          <motion.button
            className="relative z-30 w-10 h-10 flex items-center justify-center"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            whileTap={{ scale: 0.9 }}
          >
            <HamburgerIcon isOpen={mobileMenuOpen} isLight={isLight} />
          </motion.button>
        </div>

        {/* CTA Button - Desktop Only */}
        <div className="hidden lg:block">
          <Button variant="primary" size="md">
            Get in touch
          </Button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} isLight={isLight} />
    </>
  );
}
