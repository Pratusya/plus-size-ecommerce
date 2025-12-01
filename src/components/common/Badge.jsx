import { cn } from '../../utils/helpers';

const Badge = ({
  children,
  variant = 'default',
  size = 'md',
  className = ''
}) => {
  const variants = {
    default: 'bg-deep-teal text-white',
    sale: 'bg-warm-coral text-white',
    new: 'bg-warm-gold text-white',
    success: 'bg-success-green text-white',
    outline: 'bg-transparent border border-deep-teal text-deep-teal'
  };

  const sizes = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-1.5 text-base'
  };

  return (
    <span
      className={cn(
        'inline-flex items-center justify-center font-semibold rounded-md',
        variants[variant],
        sizes[size],
        className
      )}
    >
      {children}
    </span>
  );
};

export default Badge;
