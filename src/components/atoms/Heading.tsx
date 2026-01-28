import { ReactNode } from "react";

interface HeadingProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  variant?: 'hero' | 'section' | 'card' | 'default';
  children: ReactNode;
  className?: string;
}

export function Heading({ level = 1, variant = 'default', children, className = '' }: HeadingProps) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  const variantStyles = {
    hero: 'text-heading-hero font-display font-medium',
    section: 'text-heading-section font-display font-medium',
    card: 'text-heading-card font-display font-medium',
    default: 'font-display font-medium'
  };

  const defaultSizes = {
    1: 'text-4xl md:text-5xl lg:text-6xl',
    2: 'text-3xl md:text-4xl lg:text-5xl',
    3: 'text-2xl md:text-3xl lg:text-4xl',
    4: 'text-xl md:text-2xl lg:text-3xl',
    5: 'text-lg md:text-xl lg:text-2xl',
    6: 'text-base md:text-lg lg:text-xl'
  };

  const styles = variant === 'default' 
    ? `${variantStyles.default} ${defaultSizes[level]}`
    : variantStyles[variant];

  return (
    <Tag className={`${styles} ${className}`}>
      {children}
    </Tag>
  );
}
