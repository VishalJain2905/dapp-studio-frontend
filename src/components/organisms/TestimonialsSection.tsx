import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { fadeLeftVariant, staggerContainer } from "../../utils/animations";
import avatarKai from "../../assets/test.png";
import avatarLeo from "../../assets/test2.png";
import avatarNiko from "../../assets/test3.png";
import "../../styles/testimonials.css";

// Testimonials data
const testimonials = [
  {
    name: "Kai Mercer",
    company: "SomeCompany LLC.",
    testimonial: "They're the goat they coached me through everything at the end, the bot works perfect. Highly recommended.",
    avatarUrl: avatarKai
  },
  {
    name: "Leo vance",
    company: "SomeCompany LLC.",
    testimonial: "Insanely fast and helpful. They handled everything from start to finish, and the final product turned out way better than I expected.",
    avatarUrl: avatarLeo
  },
  {
    name: "Niko raines",
    company: "SomeCompany LLC.",
    testimonial: "Top-notch work. From UI to backend! they handled it all like pros. If you're on the fence, just go for it.",
    avatarUrl: avatarNiko
  },
  {
    name: "Sarah Chen",
    company: "StartupX",
    testimonial: "Exceeded all expectations. The team delivered a flawless product on time and within budget. Will definitely work with them again.",
    avatarUrl: avatarKai
  },
  {
    name: "Marcus Webb",
    company: "CloudScale",
    testimonial: "Professional, responsive, and incredibly talented. They turned our vision into reality with precision.",
    avatarUrl: avatarLeo
  },
  {
    name: "Elena Torres",
    company: "InnovateTech",
    testimonial: "Best decision we made was hiring this team. Our app performance improved by 300% after their optimization.",
    avatarUrl: avatarNiko
  },
  {
    name: "James Liu",
    company: "FintechPro",
    testimonial: "Security-first approach and clean code. Exactly what we needed for our fintech platform. Highly recommend!",
    avatarUrl: avatarKai
  },
  {
    name: "Amanda Foster",
    company: "HealthSync",
    testimonial: "They understood our healthcare compliance needs perfectly. The solution they built is robust and scalable.",
    avatarUrl: avatarLeo
  },
  {
    name: "Ryan Cooper",
    company: "E-Commerce Plus",
    testimonial: "Our conversion rate doubled after the redesign. The UX improvements were game-changing for our business.",
    avatarUrl: avatarNiko
  },
];

// Single Testimonial Card Component
interface TestimonialItemProps {
  name: string;
  company: string;
  testimonial: string;
  avatarUrl: string;
  isLast?: boolean;
}

const TestimonialItem: React.FC<TestimonialItemProps> = ({ name, company, testimonial, avatarUrl, isLast }) => {
  return (
    <div className={`testimonial-item ${!isLast ? '' : 'testimonial-item--last'}`}>
      {/* Mobile Layout - Stacked */}
      <div className="testimonial-mobile">
        {/* Avatar and Name/Company Row */}
        <div className="testimonial-mobile-header">
          <img 
            src={avatarUrl}
            alt={name}
            className="testimonial-avatar"
            loading="lazy"
          />
          <div className="testimonial-mobile-info">
            <p className="testimonial-name testimonial-name--mobile">
              {name}
            </p>
            <p className="testimonial-company testimonial-company--mobile">
              {company}
            </p>
          </div>
        </div>
        
        {/* Testimonial Text Block */}
        <p className="testimonial-text testimonial-text--mobile">
          {testimonial}
        </p>
      </div>

      {/* Desktop Layout - Horizontal */}
      <div className="testimonial-desktop">
        {/* Avatar */}
        <img 
          src={avatarUrl}
          alt={name}
          className="testimonial-avatar"
          loading="lazy"
        />
        
        {/* Name and Company */}
        <div className="testimonial-desktop-info">
          <p className="testimonial-name testimonial-name--desktop">
            {name}
          </p>
          <p className="testimonial-company testimonial-company--desktop">
            {company}
          </p>
        </div>
        
        {/* Testimonial Text */}
        <p className="testimonial-text testimonial-text--desktop">
          {testimonial}
        </p>
      </div>
    </div>
  );
};

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollComplete, setScrollComplete] = useState(false);

  // Parallax scroll tracking
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Title parallax - slides from left
  const titleX = useTransform(scrollYProgress, [0, 0.3], [-80, 0]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.25], [0, 1]);

  // Container parallax
  const containerY = useTransform(scrollYProgress, [0.1, 0.4], [60, 0]);
  const containerOpacity = useTransform(scrollYProgress, [0.1, 0.35], [0, 1]);

  useEffect(() => {
    // Browser handles scrolling naturally - no manual intervention
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="testimonials-section"
    >
      <motion.div
        className="testimonials-container testimonials-stagger-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <motion.h2
          variants={fadeLeftVariant}
          className="testimonials-title testimonials-fade-left"
          style={{ x: titleX, opacity: titleOpacity }}
        >
          Why businesses love<br />
          our web solutions
        </motion.h2>

        {/* Testimonials Scroll Container with Parallax */}
        <motion.div
          ref={scrollContainerRef}
          className="testimonials-scroll-container"
          style={{ y: containerY, opacity: containerOpacity }}
        >
          {/* Fade gradient at top */}
          <div className="testimonials-fade-top" />
          
          {/* Testimonials List - All testimonials with scroll */}
          <div className="testimonials-list">
            {testimonials.map((testimonial, index) => (
              <TestimonialItem
                key={`${testimonial.name}-${index}`}
                name={testimonial.name}
                company={testimonial.company}
                testimonial={testimonial.testimonial}
                avatarUrl={testimonial.avatarUrl}
                isLast={index === testimonials.length - 1}
              />
            ))}
          </div>
          
          {/* Fade gradient at bottom */}
          <div className="testimonials-fade-bottom" />
        </motion.div>
      </motion.div>
    </section>
  );
}
