import { ReactNode } from "react";

interface TextProps {
  children: ReactNode;
  variant?: 'body' | 'caption' | 'small';
  weight?: 'regular' | 'medium' | 'semibold';
  color?: 'primary' | 'secondary' | 'white' | 'black';
  className?: string;
  as?: 'p' | 'span' | 'div';
}

export function Text({ 
  children, 
  variant = 'body',
  weight = 'regular',
  color = 'primary',
  className = '',
  as = 'p'
}: TextProps) {
  const Tag = as;

  const variants = {
    body: 'text-base md:text-lg',
    caption: 'text-sm md:text-base',
    small: 'text-xs md:text-sm'
  };

  const weights = {
    regular: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold'
  };

  const colors = {
    primary: 'text-black',
    secondary: 'text-[#909090]',
    white: 'text-white',
    black: 'text-black'
  };

  return (
    <Tag className={`${weights[weight]} ${variants[variant]} ${colors[color]} ${className}`}>
      {children}
    </Tag>
  );
}
