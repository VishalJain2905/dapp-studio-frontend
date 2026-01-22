import React from "react";
import { useNavigate } from "react-router-dom";
import imgDAppUx1 from "figma:asset/49638aafa53220174ac60fea951139384144d06c.png";

export function Footer() {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="bg-black px-[20px] md:px-[80px] py-[60px] md:py-[80px] relative overflow-hidden" style={{ zIndex: 100, pointerEvents: 'auto', paddingBottom: '2rem' }}>
      <div className="max-w-[1200px] mx-auto relative">
        {/* Logo - Desktop */}
        <div 
          className="hidden md:flex items-center gap-[8px] mb-[24px] h-[34px] cursor-pointer hover:opacity-80 transition-opacity"
          onClick={handleLogoClick}
        >
          <img 
            src={imgDAppUx1} 
            alt="dApp Studio" 
            className="w-[30px] h-[34px] object-cover"
            loading="lazy"
          />
          <p className="font-semibold text-white text-[20px] tracking-[-0.4px] leading-normal">
            dApp Studio
          </p>
        </div>

        {/* Logo & Social - Mobile */}
        <div className="md:hidden flex items-center justify-between mb-[40px]">
          <div 
            className="flex items-center gap-[8px] cursor-pointer hover:opacity-80 transition-opacity"
            onClick={handleLogoClick}
          >
            <img 
              src={imgDAppUx1} 
              alt="dApp Studio" 
              className="w-[30px] h-[34px] object-cover"
              loading="lazy"
            />
            <p className="font-semibold text-white text-[20px] tracking-[-0.4px] leading-normal">
              dApp Studio
            </p>
          </div>
          
          {/* Social Media Icons - Mobile */}
          <div className="flex gap-[8px]">
            <a 
              href="https://twitter.com/dappstudio" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[rgba(255,255,255,0.1)] p-[8px] rounded-[40px] hover:bg-[rgba(255,255,255,0.2)] transition-colors"
              aria-label="X (Twitter)"
            >
              <svg className="w-[24px] h-[24px]" fill="none" viewBox="0 0 24 24">
                <path 
                  d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" 
                  fill="white"
                />
              </svg>
            </a>
            <a 
              href="https://linkedin.com/company/dappstudio" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[rgba(255,255,255,0.1)] p-[8px] rounded-[40px] hover:bg-[rgba(255,255,255,0.2)] transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-[24px] h-[24px]" fill="none" viewBox="0 0 24 24">
                <path 
                  d="M19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19ZM18.5 18.5V13.2C18.5 12.3354 18.1565 11.5062 17.5452 10.8948C16.9338 10.2835 16.1046 9.94 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17C14.6813 12.17 15.0374 12.3175 15.2999 12.5801C15.5625 12.8426 15.71 13.1987 15.71 13.57V18.5H18.5ZM6.88 8.56C7.32556 8.56 7.75288 8.383 8.06794 8.06794C8.383 7.75288 8.56 7.32556 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19C6.43178 5.19 6.00193 5.36805 5.68499 5.68499C5.36805 6.00193 5.19 6.43178 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56ZM8.27 18.5V10.13H5.5V18.5H8.27Z" 
                  fill="white"
                />
              </svg>
            </a>
            <a 
              href="https://t.me/dappstudio" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[rgba(255,255,255,0.1)] p-[8px] rounded-[40px] hover:bg-[rgba(255,255,255,0.2)] transition-colors"
              aria-label="Telegram"
            >
              <svg className="w-[24px] h-[24px]" fill="none" viewBox="0 0 24 24">
                <path 
                  d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16.64 8.8C16.49 10.38 15.84 14.22 15.51 15.99C15.37 16.74 15.09 16.99 14.83 17.01C14.25 17.07 13.81 16.63 13.25 16.27C12.37 15.69 11.87 15.33 11.02 14.77C10.03 14.12 10.67 13.76 11.24 13.18C11.39 13.03 13.95 10.7 14 10.49C14.0069 10.4582 14.006 10.4252 13.9973 10.3938C13.9886 10.3624 13.9724 10.3337 13.95 10.31C13.89 10.26 13.81 10.28 13.74 10.29C13.65 10.31 12.25 11.24 9.52 13.08C9.12 13.35 8.76 13.49 8.44 13.48C8.08 13.47 7.4 13.28 6.89 13.11C6.26 12.91 5.77 12.8 5.81 12.45C5.83 12.27 6.08 12.09 6.55 11.9C9.47 10.63 11.41 9.79 12.38 9.39C15.16 8.23 15.73 8.03 16.11 8.03C16.19 8.03 16.38 8.05 16.5 8.15C16.6 8.23 16.63 8.34 16.64 8.42C16.63 8.48 16.65 8.66 16.64 8.8Z" 
                  fill="white"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Divider - Desktop only */}
        <div className="hidden md:block w-full h-[1px] bg-white opacity-20 mb-[24px]" />

        {/* Mobile Content */}
        <div className="md:hidden">
          {/* Tagline */}
          <h3 className="font-medium text-white text-[24px] leading-[1.4] mb-[24px]">
            Your Gateway to<br />Web Innovation
          </h3>
          
          {/* Get in touch button */}
          <button 
            onClick={() => navigate('/contact')}
            className="block bg-white text-black font-medium text-[16px] tracking-[-0.32px] px-[24px] py-[14px] rounded-[100px] hover:bg-gray-100 transition-colors w-full mb-[40px] text-center cursor-pointer"
          >
            Get in touch
          </button>

          {/* Quick Links & Contact */}
          <div className="flex gap-[40px] mb-[40px]">
            {/* Quick Links */}
            <div className="flex-1">
              <h4 className="font-medium text-white text-[14px] leading-[1.4] mb-[16px]">
                Quick Links
              </h4>
              <nav className="flex flex-col gap-[12px]">
                <button onClick={() => { navigate('/'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="font-normal text-white opacity-60 text-[14px] leading-[1.4] hover:opacity-100 transition-opacity text-left cursor-pointer">
                  Home
                </button>
                <button onClick={() => { navigate('/#about'); }} className="font-normal text-white opacity-60 text-[14px] leading-[1.4] hover:opacity-100 transition-opacity text-left cursor-pointer">
                  About
                </button>
                <button onClick={() => { navigate('/#pricing'); }} className="font-normal text-white opacity-60 text-[14px] leading-[1.4] hover:opacity-100 transition-opacity text-left cursor-pointer">
                  Pricing
                </button>
                <button onClick={() => { navigate('/#testimonials'); }} className="font-normal text-white opacity-60 text-[14px] leading-[1.4] hover:opacity-100 transition-opacity text-left cursor-pointer">
                  Testimonials
                </button>
                <button onClick={() => { navigate('/#faq'); }} className="font-normal text-white opacity-60 text-[14px] leading-[1.4] hover:opacity-100 transition-opacity text-left cursor-pointer">
                  FAQs
                </button>
              </nav>
            </div>

            {/* Contact Info */}
            <div className="flex-1">
              <h4 className="font-medium text-white text-[14px] leading-[1.4] mb-[16px]">
                Contact us
              </h4>
              <div className="flex flex-col gap-[12px]">
                <a 
                  href="tel:+18919891191" 
                  className="font-normal text-white opacity-60 text-[14px] leading-[1.4] hover:opacity-100 transition-opacity cursor-pointer"
                >
                  +1 891 989-11-91
                </a>
                <a 
                  href="mailto:help@logoipsum.com" 
                  className="font-normal text-white opacity-60 text-[14px] leading-[1.4] hover:opacity-100 transition-opacity cursor-pointer"
                >
                  help@logoipsum.com
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <p className="font-normal text-white opacity-40 text-[12px] leading-[1.4] text-center">
            © 2025 dApp Studio. All Rights Reserve
          </p>
        </div>

        {/* Desktop Content */}
        <div className="hidden md:flex gap-[32px] md:gap-[24px] relative">
          {/* Left Column - Tagline & Copyright */}
          <div className="flex flex-col justify-between flex-1 min-w-0">
            <div>
              <h3 className="font-medium text-white text-[24px] leading-[1.4]">
                Your Gateway to<br />Web Innovation
              </h3>
            </div>
            <p className="font-normal text-white opacity-40 text-[12px] leading-[1.4]">
              © 2025 dApp Studio. All Rights Reserve
            </p>
          </div>

          {/* Middle Column - Quick Links */}
          <div className="flex-1 min-w-0">
            <h4 className="font-medium text-white text-[14px] leading-[1.4] mb-[8px]">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-[8px]">
              <button onClick={() => { navigate('/'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="font-normal text-white opacity-60 text-[14px] leading-[1.4] hover:opacity-100 transition-opacity text-left cursor-pointer">
                Home
              </button>
              <button onClick={() => { navigate('/#about'); }} className="font-normal text-white opacity-60 text-[14px] leading-[1.4] hover:opacity-100 transition-opacity text-left cursor-pointer">
                About
              </button>
              <button onClick={() => { navigate('/#pricing'); }} className="font-normal text-white opacity-60 text-[14px] leading-[1.4] hover:opacity-100 transition-opacity text-left cursor-pointer">
                Pricing
              </button>
              <button onClick={() => { navigate('/#testimonials'); }} className="font-normal text-white opacity-60 text-[14px] leading-[1.4] hover:opacity-100 transition-opacity text-left cursor-pointer">
                Testimonials
              </button>
              <button onClick={() => { navigate('/#faq'); }} className="font-normal text-white opacity-60 text-[14px] leading-[1.4] hover:opacity-100 transition-opacity text-left cursor-pointer">
                FAQs
              </button>
            </nav>
          </div>

          {/* Right Column - Contact & Social */}
          <div className="flex flex-col justify-between flex-1 min-w-0 relative">
            {/* Top section with Contact Info and Button */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-[24px] mb-[24px]">
              {/* Contact Info & Social */}
              <div className="flex flex-col gap-[24px]">
                {/* Contact Info */}
                <div>
                  <h4 className="font-medium text-white text-[14px] leading-[1.4] mb-[20px]">
                    Contact us
                  </h4>
                  <div className="flex flex-col gap-[6px]">
                    <a 
                      href="tel:+18919891191" 
                      className="font-normal text-white opacity-60 text-[14px] leading-[1.4] hover:opacity-100 transition-opacity cursor-pointer"
                    >
                      +1 891 989-11-91
                    </a>
                    <a 
                      href="mailto:help@logoipsum.com" 
                      className="font-normal text-white opacity-60 text-[14px] leading-[1.4] hover:opacity-100 transition-opacity cursor-pointer"
                    >
                      help@logoipsum.com
                    </a>
                  </div>
                </div>

                {/* Social Media Icons */}
                <div className="flex gap-[8px]">
                  <a 
                    href="https://twitter.com/dappstudio" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[rgba(255,255,255,0.1)] p-[8px] rounded-[40px] hover:bg-[rgba(255,255,255,0.2)] transition-colors"
                    aria-label="X (Twitter)"
                  >
                    <svg className="w-[24px] h-[24px]" fill="none" viewBox="0 0 24 24">
                      <path 
                        d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" 
                        fill="white"
                      />
                    </svg>
                  </a>
                  <a 
                    href="https://linkedin.com/company/dappstudio" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[rgba(255,255,255,0.1)] p-[8px] rounded-[40px] hover:bg-[rgba(255,255,255,0.2)] transition-colors"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-[24px] h-[24px]" fill="none" viewBox="0 0 24 24">
                      <path 
                        d="M19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19ZM18.5 18.5V13.2C18.5 12.3354 18.1565 11.5062 17.5452 10.8948C16.9338 10.2835 16.1046 9.94 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17C14.6813 12.17 15.0374 12.3175 15.2999 12.5801C15.5625 12.8426 15.71 13.1987 15.71 13.57V18.5H18.5ZM6.88 8.56C7.32556 8.56 7.75288 8.383 8.06794 8.06794C8.383 7.75288 8.56 7.32556 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19C6.43178 5.19 6.00193 5.36805 5.68499 5.68499C5.36805 6.00193 5.19 6.43178 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56ZM8.27 18.5V10.13H5.5V18.5H8.27Z" 
                        fill="white"
                      />
                    </svg>
                  </a>
                  <a 
                    href="https://t.me/dappstudio" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[rgba(255,255,255,0.1)] p-[8px] rounded-[40px] hover:bg-[rgba(255,255,255,0.2)] transition-colors"
                    aria-label="Telegram"
                  >
                    <svg className="w-[24px] h-[24px]" fill="none" viewBox="0 0 24 24">
                      <path 
                        d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16.64 8.8C16.49 10.38 15.84 14.22 15.51 15.99C15.37 16.74 15.09 16.99 14.83 17.01C14.25 17.07 13.81 16.63 13.25 16.27C12.37 15.69 11.87 15.33 11.02 14.77C10.03 14.12 10.67 13.76 11.24 13.18C11.39 13.03 13.95 10.7 14 10.49C14.0069 10.4582 14.006 10.4252 13.9973 10.3938C13.9886 10.3624 13.9724 10.3337 13.95 10.31C13.89 10.26 13.81 10.28 13.74 10.29C13.65 10.31 12.25 11.24 9.52 13.08C9.12 13.35 8.76 13.49 8.44 13.48C8.08 13.47 7.4 13.28 6.89 13.11C6.26 12.91 5.77 12.8 5.81 12.45C5.83 12.27 6.08 12.09 6.55 11.9C9.47 10.63 11.41 9.79 12.38 9.39C15.16 8.23 15.73 8.03 16.11 8.03C16.19 8.03 16.38 8.05 16.5 8.15C16.6 8.23 16.63 8.34 16.64 8.42C16.63 8.48 16.65 8.66 16.64 8.8Z" 
                        fill="white"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Get in touch button */}
              <button 
                onClick={() => navigate('/contact')}
                className="bg-white text-black font-medium text-[16px] tracking-[-0.32px] px-[24px] py-[14px] rounded-[100px] hover:bg-gray-100 transition-colors md:w-[170px] md:flex-shrink-0 text-center cursor-pointer"
              >
                Get in touch
              </button>
            </div>

            {/* Scroll to top button - Desktop only */}
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="hidden md:flex bg-white rounded-full w-[50px] h-[50px] items-center justify-center ml-auto hover:bg-gray-100 transition-colors absolute bottom-0 right-0 cursor-pointer"
              aria-label="Scroll to top"
            >
              <svg className="w-[24px] h-[24px] -rotate-90" fill="none" viewBox="0 0 50 50">
                <path 
                  d="M27 18L34 25M34 25L27 32M34 25H16" 
                  stroke="#0D0D0D" 
                  strokeWidth="1.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
