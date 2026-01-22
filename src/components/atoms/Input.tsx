import { forwardRef, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: 'default' | 'ghost' | 'outline';
  inputSize?: 'sm' | 'md' | 'lg';
  isError?: boolean;
  label?: string;
  helperText?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ 
    variant = 'default', 
    inputSize = 'md', 
    isError = false,
    label,
    helperText,
    className = '', 
    ...props 
  }, ref) => {
    const baseStyles = "transition-all duration-200 focus:outline-none w-full";
    
    const variants = {
      default: 'bg-white border border-gray-300 text-black focus:border-[#77EBFF] focus:ring-2 focus:ring-[#77EBFF]/20',
      ghost: 'bg-transparent border-b border-white/20 text-white placeholder-white/60 focus:border-[#77EBFF]',
      outline: 'bg-transparent border border-white/20 text-white placeholder-white/60 focus:border-[#77EBFF] focus:ring-2 focus:ring-[#77EBFF]/20'
    };

    const sizes = {
      sm: 'px-3 py-2 text-sm rounded-md',
      md: 'px-4 py-3 text-base rounded-lg', 
      lg: 'px-6 py-4 text-lg rounded-xl'
    };

    const errorStyles = isError 
      ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' 
      : '';

    const inputClasses = `${baseStyles} ${variants[variant]} ${sizes[inputSize]} ${errorStyles} ${className}`;

    return (
      <div className="w-full">
        {label && (
          <label className="block font-medium text-sm text-white mb-2">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={inputClasses}
          {...props}
        />
        {helperText && (
          <p className={`mt-1 text-sm ${
            isError ? 'text-red-400' : 'text-white/60'
          }`}>
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

// Specialized input components
interface TextareaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  variant?: 'default' | 'ghost' | 'outline';
  inputSize?: 'sm' | 'md' | 'lg';
  isError?: boolean;
  label?: string;
  helperText?: string;
  rows?: number;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ 
    variant = 'default', 
    inputSize = 'md', 
    isError = false,
    label,
    helperText,
    className = '',
    rows = 4,
    ...props 
  }, ref) => {
    const baseStyles = "transition-all duration-200 focus:outline-none w-full resize-vertical";
    
    const variants = {
      default: 'bg-white border border-gray-300 text-black focus:border-[#77EBFF] focus:ring-2 focus:ring-[#77EBFF]/20',
      ghost: 'bg-transparent border-b border-white/20 text-white placeholder-white/60 focus:border-[#77EBFF]',
      outline: 'bg-transparent border border-white/20 text-white placeholder-white/60 focus:border-[#77EBFF] focus:ring-2 focus:ring-[#77EBFF]/20'
    };

    const sizes = {
      sm: 'px-3 py-2 text-sm rounded-md',
      md: 'px-4 py-3 text-base rounded-lg', 
      lg: 'px-6 py-4 text-lg rounded-xl'
    };

    const errorStyles = isError 
      ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' 
      : '';

    const textareaClasses = `${baseStyles} ${variants[variant]} ${sizes[inputSize]} ${errorStyles} ${className}`;

    return (
      <div className="w-full">
        {label && (
          <label className="block font-medium text-sm text-white mb-2">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          className={textareaClasses}
          rows={rows}
          {...props}
        />
        {helperText && (
          <p className={`mt-1 text-sm ${
            isError ? 'text-red-400' : 'text-white/60'
          }`}>
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';
