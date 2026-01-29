import { useRef, ReactNode } from "react";
import { motion, useScroll, useTransform, MotionValue } from "motion/react";

interface ParallaxSectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  // Parallax configuration
  contentYOffset?: [number, number]; // [start, end] in pixels for content movement
  contentXOffset?: [number, number]; // [start, end] for horizontal movement
  opacity?: [number, number, number]; // [start, mid, end] opacity values
  scale?: [number, number]; // [start, end] scale values
  direction?: "up" | "down" | "left" | "right";
}

export function ParallaxSection({
  children,
  id,
  className = "",
  contentYOffset = [100, -100],
  opacity = [0, 1, 0.8],
  scale = [0.95, 1],
  direction = "up",
}: ParallaxSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Transform values based on scroll progress
  const y = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    direction === "up" 
      ? [contentYOffset[0], 0, contentYOffset[1]]
      : [contentYOffset[1], 0, contentYOffset[0]]
  );

  const x = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    direction === "left" 
      ? [100, 0, -100]
      : direction === "right"
        ? [-100, 0, 100]
        : [0, 0, 0]
  );

  const contentOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [opacity[0], opacity[1], opacity[1], opacity[2]]);
  const contentScale = useTransform(scrollYProgress, [0, 0.5, 1], [scale[0], scale[1], scale[0]]);

  return (
    <section
      ref={sectionRef}
      id={id}
      className={`parallax-section ${className}`}
    >
      <motion.div
        className="parallax-content"
        style={{
          y,
          x,
          opacity: contentOpacity,
          scale: contentScale,
        }}
      >
        {children}
      </motion.div>
    </section>
  );
}

// Parallax element for individual items within a section
interface ParallaxElementProps {
  children: ReactNode;
  className?: string;
  speed?: number; // Parallax speed multiplier (1 = normal, 2 = faster, 0.5 = slower)
  direction?: "vertical" | "horizontal";
  offset?: number; // Max offset in pixels
}

export function ParallaxElement({
  children,
  className = "",
  speed = 1,
  direction = "vertical",
  offset = 100,
}: ParallaxElementProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: elementRef,
    offset: ["start end", "end start"],
  });

  const movement = useTransform(
    scrollYProgress,
    [0, 1],
    [offset * speed, -offset * speed]
  );

  const style = direction === "vertical" 
    ? { y: movement } 
    : { x: movement };

  return (
    <motion.div
      ref={elementRef}
      className={`parallax-element ${className}`}
      style={style}
    >
      {children}
    </motion.div>
  );
}

// Image-specific parallax with zoom effect
interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  zoomOnScroll?: boolean;
  parallaxSpeed?: number;
}

export function ParallaxImage({
  src,
  alt,
  className = "",
  zoomOnScroll = true,
  parallaxSpeed = 0.5,
}: ParallaxImageProps) {
  const imageRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100 * parallaxSpeed, -100 * parallaxSpeed]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], zoomOnScroll ? [1, 1.1, 1] : [1, 1, 1]);

  return (
    <motion.div
      ref={imageRef}
      className={`parallax-image-wrapper overflow-hidden ${className}`}
      style={{ y }}
    >
      <motion.img
        src={src}
        alt={alt}
        className="parallax-image"
        style={{ scale }}
      />
    </motion.div>
  );
}

// Text reveal with parallax
interface ParallaxTextProps {
  children: ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
}

export function ParallaxText({
  children,
  className = "",
  direction = "up",
  delay = 0,
}: ParallaxTextProps) {
  const textRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: textRef,
    offset: ["start end", "center center"],
  });

  const getTransform = () => {
    switch (direction) {
      case "up":
        return { y: useTransform(scrollYProgress, [0, 1], [80, 0]) };
      case "down":
        return { y: useTransform(scrollYProgress, [0, 1], [-80, 0]) };
      case "left":
        return { x: useTransform(scrollYProgress, [0, 1], [80, 0]) };
      case "right":
        return { x: useTransform(scrollYProgress, [0, 1], [-80, 0]) };
    }
  };

  const opacity = useTransform(scrollYProgress, [0, 0.8], [0, 1]);
  const transform = getTransform();

  return (
    <motion.div
      ref={textRef}
      className={`parallax-text ${className}`}
      style={{
        ...transform,
        opacity,
      }}
    >
      {children}
    </motion.div>
  );
}
