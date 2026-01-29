import React, { useState, useRef } from "react";
import svgPaths from "../../imports/svg-9lc68yt85q";
import { motion, useScroll, useTransform, useMotionValueEvent, useSpring } from "motion/react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../atoms/Logo";
import { MobileMenu } from "../molecules/MobileMenu";
import "../../styles/navbar-glass.css";
import "../../styles/hero-buttons.css";
import "../../styles/hero-section.css";
import { fadeUpVariant, staggerContainer, fadeLeftVariant } from "../../utils/animations";


export function HeroSection() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navbarHidden, setNavbarHidden] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const isLight = false;

  // Ref for entrance animations
  const contentRef = useRef<HTMLDivElement>(null);

  // Scroll-based parallax effect for hero
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end start"]
  });

  // Smooth spring for parallax values
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Hero parallax transforms - fade, scale, blur as tech overlaps
  const heroOpacity = useTransform(smoothProgress, [0, 0.3, 0.5], [1, 0.8, 0.3]);
  const heroScale = useTransform(smoothProgress, [0, 0.3, 0.6], [1, 0.98, 0.92]);
  const heroBlur = useTransform(smoothProgress, [0, 0.3, 0.6], [0, 2, 8]);
  const heroY = useTransform(smoothProgress, [0, 0.5], ["0%", "-10%"]);
  const heroFilter = useTransform(heroBlur, (v) => `blur(${v}px)`);

  // Scroll animation for navbar hide
  const { scrollY } = useScroll();
  
  useMotionValueEvent(scrollY, "change", (latest) => {
    setNavbarHidden(latest > 100);
  });


  return (
    <div ref={wrapperRef} className="hero-tech-wrapper">
      {/* Hero Section - Sticky Background with Parallax */}
      <motion.div 
        className="hero-sticky-container"
        style={{
          opacity: heroOpacity,
          scale: heroScale,
          y: heroY,
          filter: heroFilter
        }}
      >
        <section
          ref={heroRef}
          className="hero-section"
        >
          {/* Navigation - Slides up when scrolling */}
          <motion.nav 
            className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-4 md:px-20 py-5 md:py-8 pointer-events-none"
            initial={{ y: 0, opacity: 1 }}
            animate={{ 
              y: navbarHidden ? -100 : 0, 
              opacity: navbarHidden ? 0 : 1 
            }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Logo */}
            <div className="pointer-events-auto cursor-pointer" onClick={() => navigate('/')}>
              <Logo />
            </div>

            {/* Desktop Navigation */}
            <div id="floating-navbar" className="hidden lg:flex navbar-glass pointer-events-auto">
              <a href="#hero" className="nav-link dark">Home</a>
              <a href="#about" className="nav-link dark">About Us</a>
              <a href="#pricing" className="nav-link dark">Pricing</a>
              <a href="#faq" className="nav-link dark">FAQs</a>
            </div>

            {/* Mobile Menu Toggle */}
            <motion.button
              className="lg:hidden p-2 -mr-2 relative z-30 w-10 h-10 flex items-center justify-center pointer-events-auto"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              whileTap={{ scale: 0.9 }}
            >
              <motion.div
                initial={false}
                animate={mobileMenuOpen ? "open" : "closed"}
                className="w-5 h-4 flex flex-col justify-center items-center relative"
              >
                <motion.span
                  variants={{ closed: { rotate: 0, y: 0 }, open: { rotate: 45, y: 6 } }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  className="absolute w-5 h-[1.5px] bg-white rounded-full"
                  style={{ top: 0 }}
                />
                <motion.span
                  variants={{ closed: { opacity: 1, x: 0 }, open: { opacity: 0, x: -20 } }}
                  transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                  className="absolute w-5 h-[1.5px] bg-white rounded-full"
                  style={{ top: 6 }}
                />
                <motion.span
                  variants={{ closed: { rotate: 0, y: 0 }, open: { rotate: -45, y: -6 } }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  className="absolute w-5 h-[1.5px] bg-white rounded-full"
                  style={{ top: 12 }}
                />
              </motion.div>
            </motion.button>

            {/* CTA Button - Desktop Only */}
            <button
              onClick={() => navigate('/contact')}
              className="hidden lg:block bg-white px-4 md:px-6 py-2 md:py-3 rounded-[100px] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] active:scale-95 pointer-events-auto"
            >
              <p className="font-medium text-black text-sm md:text-[16px] tracking-[-0.32px]">Get in touch</p>
            </button>
          </motion.nav>

          {/* Mobile Menu */}
          <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} isLight={isLight} />

          {/* Background - Spline 3D */}
          <div className="hero-background">
            <div className={`spline-loader-overlay ${iframeLoaded ? 'hidden' : ''}`} />
            <iframe
              src="https://my.spline.design/nexbotrobotcharacterconcept-gZvfIbak9q2Fo9QSNrw6NE60/?logo=0&ui_loading=0"
              title="3D Cyber Mannequin"
              loading="lazy"
              onLoad={() => setIframeLoaded(true)}
              className="hero-iframe"
              style={{ 
                willChange: 'transform',
                containIntrinsicSize: '100% 100%'
              }}
            />
          </div>

          

          {/* Hero Content */}
          <motion.div
            ref={contentRef}
            className="hero-content"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            {/* Mobile Layout */}
            <div className="hero-mobile-layout">
              <motion.h1
                variants={fadeUpVariant}
                className="hero-mobile-title"
              >
                Engineering the Future<br />
                of Digital Innovation.
              </motion.h1>

              <motion.p
                variants={fadeUpVariant}
                className="hero-mobile-description"
              >
                We build advanced, secure, and scalable solutions for forward-thinking companies.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                variants={fadeUpVariant}
                className="hero-cta-container-mobile"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="hero-primary-btn"
                >
                  <p>View Services</p>
                </motion.button>

                <motion.button
                  onClick={() => navigate('/contact')}
                  className="hero-get-in-touch-btn mobile pointer-events-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="hero-btn-content">
                    <div className="px-[10px] py-[6px]">
                      <span className="hero-btn-text">Get In Touch</span>
                    </div>
                    <div className="hero-btn-icon">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 34 34">
                        <path d={svgPaths.p269080} fill="black" />
                      </svg>
                    </div>
                  </div>
                </motion.button>
              </motion.div>
            </div>

            {/* Desktop Layout */}
            <div className="hero-desktop-layout">
              <motion.h1
                variants={fadeLeftVariant}
                className="hero-desktop-title"
              >
                Engineering the Future<br />
                of Digital Innovation.
              </motion.h1>

              <motion.p
                variants={fadeLeftVariant}
                className="hero-desktop-description"
              >
                We build advanced, secure, and scalable solutions<br />
                for forward-thinking companies.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                variants={fadeUpVariant}
                className="hero-cta-container-desktop"
              >
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255,255,255,0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  className="hero-primary-btn"
                >
                  <p>View Services</p>
                </motion.button>

                <motion.button
                  onClick={() => navigate('/contact')}
                  className="hero-get-in-touch-btn pointer-events-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="shimmer-overlay"></div>
                  <div className="hero-btn-content">
                    <span className="hero-btn-text">Get In Touch</span>
                    <div className="hero-btn-icon">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 34 34">
                        <path d={svgPaths.p269080} fill="black" />
                      </svg>
                    </div>
                  </div>
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </section>
      </motion.div>

      {/* Client Logos Bar */}
      <section className="client-logos-section">

        {/* Scroll Down Indicator */}
        <div className="scroll-chevron" onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 13L12 18L17 13M7 6L12 11L17 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        {/* Client Logos */}
        <div className="client-logos-container">
          <div className="client-logos-wrapper">
            {/* First Set */}
            <ClientLogoGroup />
            {/* Second Set for Infinite Scroll */}
            <ClientLogoGroup />
            {/* Third Set for Ultrawide Screens */}
            <ClientLogoGroup />
          </div>
        </div>
      </section>
    </div>
  );
}

function ClientLogoGroup() {
  return (
    <div className="client-logos-group">
      <div className="client-logo">
        <span className="client-logo-text" style={{ fontWeight: 700, letterSpacing: '0.02em' }}>LITTLE<br/>WOODROW'S</span>
      </div>
      <div className="client-logo">
        <span className="client-logo-text">CLUBVOGUE</span>
      </div>
      <div className="client-logo">
        <span className="client-logo-text" style={{ fontSize: '12px' }}>
          <span style={{ display: 'block', textAlign: 'center' }}>⛰️</span>
          SOCORRO
        </span>
      </div>
      <div className="client-logo">
        <span className="client-logo-text" style={{ fontSize: '11px', letterSpacing: '0.05em' }}>HOMETAXSOLUTIONS</span>
      </div>
      <div className="client-logo">
        <span className="client-logo-text" style={{ fontStyle: 'italic' }}>Miracle<br/>Milkookies</span>
      </div>
      <div className="client-logo">
        <span className="client-logo-text" style={{ fontWeight: 800, letterSpacing: '0.1em' }}>BRIGADE</span>
      </div>
      <div className="client-logo">
        <span className="client-logo-text" style={{ fontWeight: 700 }}>LA CALLE</span>
      </div>
    </div>
  );
}
