interface DividerProps {
  orientation?: 'horizontal' | 'vertical';
  className?: string;
  color?: string;
}

export function Divider({ 
  orientation = 'horizontal', 
  className = '',
  color = 'bg-black'
}: DividerProps) {
  const baseStyles = orientation === 'horizontal' 
    ? 'w-full h-px' 
    : 'w-px h-full';

  return <div className={`${baseStyles} ${color} ${className}`} />;
}
