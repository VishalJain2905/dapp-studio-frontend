import imgDAppUx1 from "figma:asset/49638aafa53220174ac60fea951139384144d06c.png";

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function Logo({ size = 'md', className = '' }: LogoProps) {
  const sizes = {
    sm: 'w-7 h-7',
    md: 'w-7 h-7 md:w-[30px] md:h-[34px]',
    lg: 'w-10 h-10'
  };

  return (
    <div className={`flex items-center gap-2 md:gap-3 ${className}`}>
      <img alt="dApp Studio Logo" className={sizes[size]} src={imgDAppUx1} />
      <p className="font-semibold text-white text-base md:text-[20px] tracking-[-0.4px]">
        dApp Studio
      </p>
    </div>
  );
}
