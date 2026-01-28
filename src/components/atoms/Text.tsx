import { ReactNode } from "react";

interface TextProps {
  children: ReactNode;
  variant?: 'body-lg' | 'body' | 'body-sm' | 'caption' | 'small';
  weight?: 'light' | 'regular' | 'medium' | 'semibold' | 'bold';
  color?: 'primary' | 'secondary' | 'white' | 'black' | 'muted';
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
    'body-lg': 'text-body-lg',
    'body': 'text-body-base',
    'body-sm': 'text-body-sm',
    'caption': 'text-sm md:text-base',
    'small': 'text-xs md:text-sm'
  };

  const weights = {
    light: 'font-light',
    regular: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold'
  };

  const colors = {
    primary: 'text-black',
    secondary: 'text-[#909090]',
    white: 'text-white',
    black: 'text-black',
    muted: 'text-muted'
  };

  return (
    <Tag className={`font-body ${weights[weight]} ${variants[variant]} ${colors[color]} ${className}`}>
      {children}
    </Tag>
  );
}
