import imgTexture from "../../assets/225d51d90ac23d1d315ee056047f3310ff4bc3e6.png";
import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import "../../styles/benefit-cards.css";
import { fadeUpVariant, staggerContainer, staggerItem } from "../../utils/animations";

// Background lighting effects components
function LightWavesBackgroundImage({ additionalClassNames = "" }: { additionalClassNames?: string }) {
  return (
    <div className={`benefits-accent-wave ${additionalClassNames}`}>
      <div className="benefits-accent-wave-inner">
        <div className="benefits-accent-wave-content">
          <div className="benefits-accent-wave-svg">
            <svg fill="none" preserveAspectRatio="none" viewBox="0 0 418 515">
              <g filter="url(#filter0_f_light_wave)" opacity="0.5" style={{ mixBlendMode: "plus-lighter" }}>
                <ellipse cx="208.884" cy="257.471" fill="#77EBFF" rx="161.784" ry="210.371" />
              </g>
              <defs>
                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="514.941" id="filter0_f_light_wave" width="417.768" x="0" y="0">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                  <feGaussianBlur result="effect1_foregroundBlur" stdDeviation="23.55" />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function LightWaves() {
  return (
    <div className="benefits-light-waves">
      {/* Large central wave */}
      <div className="benefits-central-wave">
        <div className="benefits-central-wave-inner">
          <svg fill="none" preserveAspectRatio="none" viewBox="0 0 613 665">
            <g filter="url(#filter0_f_central_wave)" style={{ mixBlendMode: "plus-lighter" }}>
              <ellipse cx="306.5" cy="332.5" fill="#77EBFF" rx="248" ry="274" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="665" id="filter0_f_central_wave" width="613" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur" stdDeviation="29.25" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>

      {/* Rotated wave 1 */}
      <div className="benefits-wave" style={{ height: '637.211px', width: '559.219px', top: '100px' }}>
        <div className="benefits-wave-inner" style={{ transform: 'rotate(20.303deg)' }}>
          <div className="benefits-wave-content" style={{ height: '531.585px', width: '399.591px' }}>
            <div className="benefits-wave-content-inner" style={{ inset: '-8.86% -11.79%' }}>
              <svg fill="none" preserveAspectRatio="none" viewBox="0 0 494 626">
                <g filter="url(#filter0_f_rotated_wave_1)" opacity="0.5" style={{ mixBlendMode: "plus-lighter" }}>
                  <ellipse cx="246.896" cy="312.892" fill="#77EBFF" rx="199.796" ry="265.792" />
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="625.785" id="filter0_f_rotated_wave_1" width="493.791" x="0" y="0">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                    <feGaussianBlur result="effect1_foregroundBlur" stdDeviation="23.55" />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Rotated wave 2 */}
      <div className="benefits-wave" style={{ height: '403.543px', width: '411.227px', top: '200px', left: 'calc(50% + 200px)' }}>
        <div className="benefits-wave-inner" style={{ transform: 'rotate(20.303deg)' }}>
          <div className="benefits-wave-content" style={{ height: '310.564px', width: '323.568px' }}>
            <div className="benefits-wave-content-inner" style={{ inset: '-15.17% -14.56%' }}>
              <svg fill="none" preserveAspectRatio="none" viewBox="0 0 418 405">
                <g filter="url(#filter0_f_rotated_wave_2)" opacity="0.5" style={{ mixBlendMode: "plus-lighter" }}>
                  <ellipse cx="208.884" cy="202.382" fill="#77EBFF" rx="161.784" ry="155.282" />
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="404.764" id="filter0_f_rotated_wave_2" width="417.768" x="0" y="0">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                    <feGaussianBlur result="effect1_foregroundBlur" stdDeviation="23.55" />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Smaller accent waves */}
      <LightWavesBackgroundImage additionalClassNames="left-[calc(50%+200px)] top-[420px]" />
      <LightWavesBackgroundImage additionalClassNames="left-[calc(50%-200px)] top-[420px]" />
      <LightWavesBackgroundImage additionalClassNames="left-[50%] top-[500px]" />
    </div>
  );
}

function Container() {
  return (
    <div className="benefits-light-container">
      <div className="benefits-radial-glow">
        <div className="benefits-radial-glow-inner">
          <svg fill="none" preserveAspectRatio="none" viewBox="0 0 1903 1903">
            <g filter="url(#filter0_f_radial_glow)">
              <circle cx="951.12" cy="951.12" fill="url(#paint0_radial_glow)" r="551.12" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1902.24" id="filter0_f_radial_glow" width="1902.24" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur" stdDeviation="200" />
              </filter>
              <radialGradient cx="0" cy="0" gradientTransform="translate(653.828 1422.27) rotate(-47.765) scale(1155.28 1524.42)" gradientUnits="userSpaceOnUse" id="paint0_radial_glow" r="1">
                <stop offset="0.056982" />
                <stop offset="0.970352" stopColor="#268090ff" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>

      <LightWaves />

      {/* Central bright light - static */}
      <div className="benefits-central-light">
        <div className="benefits-central-light-inner">
          <svg fill="none" preserveAspectRatio="none" viewBox="0 0 810 810">
            <g filter="url(#filter0_f_central_light)" style={{ mixBlendMode: "plus-lighter" }}>
              <circle cx="404.822" cy="404.822" fill="#77EBFF" r="371.322" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="809.645" id="filter0_f_central_light" width="809.645" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur" stdDeviation="16.75" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>

      {/* Dark circle overlay */}
      <div className="benefits-dark-circle">
        <svg fill="none" preserveAspectRatio="none" viewBox="0 0 743 743">
          <g filter="url(#filter0_i_dark_circle)">
            <circle cx="371.322" cy="371.322" fill="black" r="371.322" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="742.645" id="filter0_i_dark_circle" width="742.645" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feMorphology in="SourceAlpha" operator="erode" radius="0.5" result="effect1_innerShadow" />
              <feOffset />
              <feGaussianBlur stdDeviation="19.95" />
              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
              <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
              <feBlend in2="shape" mode="normal" result="effect1_innerShadow" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

type BenefitCardProps = {
  title: string;
  description: string;
  opacity?: "dark" | "medium";
};

function BenefitCard({ title, description, opacity = "dark" }: BenefitCardProps) {
  return (
    <div className={`benefit-card ${opacity === "medium" ? "medium-opacity" : ""}`}>
      {/* Title section with border effect and light black glass */}
      <div className="benefit-card-title">
        <p className="benefit-card-title-text">
          {title}
        </p>
      </div>

      {/* Description section */}
      <div className="benefit-card-description">
        <p className="benefit-card-description-text">
          {description}
        </p>
      </div>
    </div>
  );
}

export function BenefitsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useInView(sectionRef, { once: false, amount: 0.1 });

  const springTransition = {
    type: "spring",
    stiffness: 29,
    damping: 6,
    mass: 1,
    duration: 2,
  };

  return (
    <section ref={sectionRef} className="benefits-section">
      {/* Background lighting effects with animation */}
      <motion.div
        initial={{ y: 420, opacity: 0 }}
        animate={isVisible ? { y: 0, opacity: 1 } : { y: 420, opacity: 0 }}
        transition={{ ...springTransition, delay: 0.2 }}
        className="benefits-background"
        style={{ top: '450px' }}
      >
        <Container />
      </motion.div>

      {/* Texture overlay - rotating particle/sprinkles effect */}
      <div className="benefits-texture-overlay">
        <div
          className="benefits-texture-inner rotating-glow"
          style={{
            backgroundImage: `url('${imgTexture}')`,
          }}
        />
      </div>

      {/* Content */}
      <motion.div
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={staggerContainer}
        className="benefits-content"
      >
        {/* Title */}
        <motion.h2
          variants={fadeUpVariant}
          className="benefits-title"
        >
          The key benefits of partnering<br />
          with us for your business<br />
          growth
        </motion.h2>

        {/* Cards Grid - Desktop: 3 columns, Mobile: 1 column */}
        <motion.div
          className="benefits-cards-grid"
          variants={staggerContainer}
        >
          {/* Row 1 */}
          <motion.div variants={staggerItem}>
            <BenefitCard
              title="Increased Productivity"
              description="We build tools, dashboards, and automated systems that streamline your daily operations, helping you and your team work faster and smarter."
            />
          </motion.div>
          <motion.div variants={staggerItem}>
            <BenefitCard
              title="Better Customer Experience"
              description="From sleek UIs to smooth performance, we craft user-first products that boost engagement, reduce bounce rates, and leave a lasting impression."
            />
          </motion.div>
          <motion.div variants={staggerItem}>
            <BenefitCard
              title="24/7 Availablity"
              description="We ensure your platforms are reliable, secure, and up 24/7 with proactive monitoring, fast fixes, and ongoing support when you need it most."
            />
          </motion.div>

          {/* Row 2 */}
          <motion.div variants={staggerItem}>
            <BenefitCard
              title="Cost Reduction"
              description="Our development approach focuses on clean, efficient code, minimizing overhead, reducing technical debt, and keeping maintenance costs low."
            />
          </motion.div>
          <motion.div variants={staggerItem}>
            <BenefitCard
              title="Why Brand Choose Us"
              description="Custom development that actually delivers from clean UI to scalable Web3 infrastructure, we turn ideas into high-performing products"
              opacity="medium"
            />
          </motion.div>
          <motion.div variants={staggerItem}>
            <BenefitCard
              title="Scalablity & Growth"
              description="We build systems that grow with you, whether you're launching an MVP or scaling to 1M+ users, we ensure performance and structure never hold you back."
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
