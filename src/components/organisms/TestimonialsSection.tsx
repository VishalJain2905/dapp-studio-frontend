import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
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
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });

  return (
    <section 
      ref={sectionRef}
      className="testimonials-section"
    >
      {/* ONE animation: Simple fade up for the entire container */}
      <motion.div
        className="testimonials-container"
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="testimonials-title">
          Why businesses love<br />
          our web solutions
        </h2>

        {/* Testimonials Scroll Container */}
        <div className="testimonials-scroll-container">
          {/* Fade gradient at top */}
          <div className="testimonials-fade-top" />
          
          {/* Testimonials List */}
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
        </div>
      </motion.div>
    </section>
  );
}
