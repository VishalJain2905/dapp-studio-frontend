import { useState } from "react";

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
  fallback?: string;
  loading?: 'lazy' | 'eager';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  objectFit?: 'cover' | 'contain' | 'fill' | 'scale-down' | 'none';
}

export function Image({ 
  src, 
  alt, 
  className = '', 
  fallback,
  loading = 'lazy',
  size = 'full',
  rounded = 'none',
  objectFit = 'cover'
}: ImageProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const sizes = {
    xs: 'w-8 h-8',
    sm: 'w-12 h-12', 
    md: 'w-16 h-16',
    lg: 'w-24 h-24',
    xl: 'w-32 h-32',
    full: 'w-full h-full'
  };

  const roundedClasses = {
    none: '',
    sm: 'rounded-sm',
    md: 'rounded-md', 
    lg: 'rounded-lg',
    full: 'rounded-full'
  };

  const objectFitClasses = {
    cover: 'object-cover',
    contain: 'object-contain',
    fill: 'object-fill',
    'scale-down': 'object-scale-down',
    none: 'object-none'
  };

  const baseClasses = `${sizes[size]} ${roundedClasses[rounded]} ${objectFitClasses[objectFit]}`;

  const handleError = () => {
    setHasError(true);
    setIsLoading(false);
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  if (hasError && fallback) {
    return (
      <img 
        src={fallback}
        alt={alt}
        className={`${baseClasses} ${className}`}
        loading={loading}
      />
    );
  }

  if (hasError && !fallback) {
    return (
      <div className={`${baseClasses} bg-gray-200 flex items-center justify-center ${className}`}>
        <svg className="w-1/3 h-1/3 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
          <path 
            fillRule="evenodd" 
            d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" 
            clipRule="evenodd" 
          />
        </svg>
      </div>
    );
  }

  return (
    <div className={`${baseClasses} ${className} relative`}>
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
          <svg className="w-1/3 h-1/3 text-gray-300 animate-spin" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
        </div>
      )}
      <img 
        src={src}
        alt={alt}
        className={`${baseClasses} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        loading={loading}
        onError={handleError}
        onLoad={handleLoad}
      />
    </div>
  );
}

// Specialized image components for common use cases
interface AvatarProps extends Omit<ImageProps, 'size' | 'rounded'> {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

export function Avatar({ size = 'md', ...props }: AvatarProps) {
  return <Image {...props} size={size} rounded="full" />;
}

interface LogoImageProps extends Omit<ImageProps, 'rounded' | 'objectFit'> {
  variant?: 'icon' | 'full';
}

export function LogoImage({ variant = 'full', ...props }: LogoImageProps) {
  return <Image {...props} objectFit="contain" />;
}
