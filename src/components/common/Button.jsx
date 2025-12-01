import { cn } from '../../utils/helpers';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  onClick,
  type = 'button',
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold transition-all duration-300 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2';
  
  const variants = {
    primary: 'bg-deep-teal text-white hover:bg-deep-teal/90 focus-visible:ring-deep-teal btn-primary',
    secondary: 'bg-transparent border-2 border-deep-teal text-deep-teal hover:bg-deep-teal hover:text-white focus-visible:ring-deep-teal',
    coral: 'bg-warm-coral text-white hover:bg-warm-coral/90 focus-visible:ring-warm-coral btn-cart',
    ghost: 'bg-transparent text-charcoal hover:bg-light-gray focus-visible:ring-medium-gray',
    outline: 'bg-transparent border border-soft-gray text-charcoal hover:border-deep-teal hover:text-deep-teal focus-visible:ring-deep-teal'
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const disabledStyles = 'opacity-50 cursor-not-allowed pointer-events-none';

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        fullWidth && 'w-full',
        disabled && disabledStyles,
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
