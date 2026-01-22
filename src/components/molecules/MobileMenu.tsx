import { motion } from "motion/react";
import { X } from "lucide-react";
import { Logo } from "../atoms/Logo";
import { MobileNavLink } from "../atoms/NavLink";
import { MotionButton } from "../atoms/Button";
import { useNavigate } from "react-router-dom";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  isLight?: boolean;
}

export function MobileMenu({ isOpen, onClose, isLight = false }: MobileMenuProps) {
  const navigate = useNavigate();
  
  if (!isOpen) return null;

  const handleGetInTouch = () => {
    onClose();
    navigate('/contact');
  };

  return (
    <>
      {/* Full screen overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 999999,
          backgroundColor: '#000000',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Header with Logo and Close */}
        <div style={{ 
          padding: '20px 24px', 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
        }}>
          <Logo size="sm" />
          
          <motion.button
            onClick={onClose}
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              backdropFilter: 'blur(10px)',
              color: '#ffffff',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            aria-label="Close menu"
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.12)' }}
            whileTap={{ scale: 0.95 }}
          >
            <X style={{ width: 22, height: 22 }} />
          </motion.button>
        </div>

        {/* Links Container */}
        <div style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '40px',
          padding: '40px 24px',
        }}>
          <MobileNavLink href="#hero" onClick={onClose} delay={0.1} isLight={false}>
            Home
          </MobileNavLink>
          <MobileNavLink href="#about" onClick={onClose} delay={0.15} isLight={false}>
            About Us
          </MobileNavLink>
          <MobileNavLink href="#pricing" onClick={onClose} delay={0.2} isLight={false}>
            Pricing
          </MobileNavLink>
          <MobileNavLink href="#faq" onClick={onClose} delay={0.25} isLight={false}>
            FAQs
          </MobileNavLink>

          <motion.button
            onClick={handleGetInTouch}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              marginTop: '24px',
              padding: '16px 40px',
              borderRadius: '100px',
              backgroundColor: '#ffffff',
              color: '#000000',
              border: 'none',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: 600,
              boxShadow: '0 4px 20px rgba(255, 255, 255, 0.2)',
            }}
          >
            Get in touch
          </motion.button>
        </div>
      </motion.div>
    </>
  );
}
