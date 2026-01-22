import React, { useState } from "react";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { X } from "lucide-react";
import imgDAppUx1 from "figma:asset/49638aafa53220174ac60fea951139384144d06c.png";
import "../styles/navbar-glass.css";
import "../styles/contact-page.css";
import { Footer } from "../components/organisms/Footer";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    alert("Form submitted successfully!");
  };

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-black min-h-[100vh] px-8  w-full h-full" style={{ height: '100vh' }}>
    <section className="bg-black min-h-[100vh]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 md:px-20 py-5 md:py-8 pointer-events-none bg-black/50 backdrop-blur-md">
        {/* Logo */}
        <div className="flex items-center gap-2 md:gap-3 pointer-events-auto cursor-pointer" onClick={() => navigate('/')}>
          <img alt="" className="w-7 h-7 md:w-[30px] md:h-[34px]" src={imgDAppUx1} loading="lazy" />
          <p className="font-semibold text-white text-base md:text-[20px] tracking-[-0.4px]">dApp Studio</p>
        </div>
        
        {/* Desktop Navigation */}
        <div id="floating-navbar" className="hidden lg:flex navbar-glass pointer-events-auto">
          <a href="/#hero" className="nav-link dark">Home</a>
          <a href="/#about" className="nav-link dark">About Us</a>
          <a href="/#pricing" className="nav-link dark">Pricing</a>
          <a href="/#faq" className="nav-link dark">FAQs</a>
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
          className="hidden lg:block bg-white px-4 md:px-6 py-2 md:py-3 rounded-[100px] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] active:scale-95 pointer-events-auto"
        >
          <p className="font-medium text-black text-sm md:text-[16px] tracking-[-0.32px]">Get in touch</p>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          className="lg:hidden fixed top-0 left-0 right-0 z-40 bg-white/10 backdrop-blur-xl border-b border-white/20 shadow-2xl h-[50vh] overflow-hidden pointer-events-auto"
        >
          <div className="px-4 py-4 h-full flex flex-col rounded-b-[10px]" style={{ paddingTop: '200px' }}>
            <motion.div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <img alt="" className="w-7 h-7" src={imgDAppUx1} loading="lazy" />
                <p className="font-semibold text-white text-base tracking-[-0.4px]">dApp Studio</p>
              </div>
              <motion.button
                onClick={() => setMobileMenuOpen(false)}
                className="text-white p-2 -mr-2"
                whileTap={{ scale: 0.9, rotate: 90 }}
              >
                <X className="w-6 h-6" />
              </motion.button>
            </motion.div>
            
            <div className="flex flex-col gap-3 mb-6 flex-1">
              <a href="/" className=" text-white text-[18px] py-2 border-b border-white/10">Home</a>
              <a href="#" className=" text-white text-[18px] py-2 border-b border-white/10">About Us</a>
              <a href="#" className=" text-white text-[18px] py-2 border-b border-white/10">Pricing</a>
              <a href="#" className=" text-white text-[18px] py-2 border-b border-white/10">FAQs</a>
            </div>
            
            <button className="w-full bg-white px-6 py-3 rounded-[100px]">
              <p className="font-medium text-black text-[16px]">Get in touch</p>
            </button>
          </div>
        </motion.div>
      )}

      {/* Main Content - Flex Layout */}
      <div className="contact-page-wrapper">
        <div className="contact-page-container">
          <div className="contact-content-grid">
            {/* Left Side - Contact Information */}
            <motion.div 
              className="contact-left-side"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              >
                <h1 className="contact-heading">
                  Let's Build{" "} 
                  <span 
                    className="contact-heading-gradient"
                    style={{
                      WebkitTextFillColor: "transparent",
                      backgroundImage: "linear-gradient(92deg, rgb(119, 235, 255) 5%, rgb(84, 118, 239) 22%, rgb(3, 146, 255) 49%, rgb(119, 235, 255) 76%, rgb(0, 69, 223) 100%)"
                    }}
                  >
                    Something <br /> Amazing Together
                  </span>
                </h1>
                <p className="contact-description">
                  Share your project details and let's create beautiful, functional digital experiences.
                </p>
              </motion.div>

              {/* Contact Details */}
              <motion.div 
                className="contact-links"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              >
                <motion.div 
                  className="contact-link-item"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <svg className="contact-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:hello@dappstudio.com" className="contact-link-text">
                    hello@dappstudio.com
                  </a>
                </motion.div>

                <motion.div 
                  className="contact-link-item"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <svg className="contact-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ transform: 'rotate(45deg)' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  <a href="https://t.me/dappstudio" target="_blank" rel="noopener noreferrer" className="contact-link-text">
                    @dappstudio
                  </a>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right Side - Contact Form */}
            <motion.div 
              className="contact-form-wrapper"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            >
              <div className="contact-form-container">
                {/* Name and Email Row */}
                <motion.div 
                  className="contact-form-row"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                >
                  <div className="contact-form-field">
                    <label className="contact-form-label">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="contact-form-input"
                      placeholder="Ex. Micheal Bay"
                    />
                  </div>
                  <div className="contact-form-field">
                    <label className="contact-form-label">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="contact-form-input"
                      placeholder="Enter Email Address"
                    />
                  </div>
                </motion.div>

                {/* Phone and Communication Method Row */}
                <motion.div 
                  className="contact-form-row"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
                >
                  <div className="contact-form-field">
                    <label className="contact-form-label">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="contact-form-input"
                      placeholder="Enter Phone Number"
                    />
                  </div>
                  <div className="contact-form-field">
                    <label className="contact-form-label">
                      Fastest Way to Reach You
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="contact-form-input"
                      placeholder="e.g. Telegram, Discord, WhatsApp, etc."
                    />
                  </div>
                </motion.div>

                {/* Message Field */}
                <motion.div 
                  className="contact-form-field-full"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
                >
                  <label className="contact-form-label">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="contact-form-textarea"
                    placeholder="Your Message"
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.div 
                  className="contact-form-submit"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
                >
                  <motion.button
                    onClick={handleSubmit}
                    className="contact-submit-button"
                    whileHover={{ scale: 1.02, boxShadow: "0 0 25px rgba(255, 255, 255, 0.4)" }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    Submit Form
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
    </div>
  );
}
