import { motion } from 'framer-motion';

const Badge = ({
  children,
  variant = 'default',
  size = 'md',
  animated = false,
  className = ''
}) => {
  const variants = {
    default: 'bg-cloud-gray text-deep-charcoal',
    primary: 'bg-royal-purple text-white',
    secondary: 'bg-sunset-orange text-white',
    success: 'bg-emerald-success text-white',
    sale: 'bg-gradient-to-r from-sunset-orange to-rose-gold text-white',
    new: 'bg-royal-purple text-white',
    outline: 'border-2 border-royal-purple text-royal-purple bg-transparent'
  };

  const sizes = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-1.5 text-base'
  };

  const Component = animated ? motion.span : 'span';

  return (
    <Component
      className={`inline-flex items-center font-semibold rounded-full ${variants[variant]} ${sizes[size]} ${className}`}
      {...(animated && {
        initial: { scale: 0.8, opacity: 0 },
        animate: { scale: 1, opacity: 1 },
        whileHover: { scale: 1.05 }
      })}
    >
      {children}
    </Component>
  );
};

export default Badge;
