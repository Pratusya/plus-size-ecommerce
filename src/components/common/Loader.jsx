import { motion } from 'framer-motion';

const Loader = ({ 
  size = 'md', 
  variant = 'spinner',
  className = '' 
}) => {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  if (variant === 'spinner') {
    return (
      <div className={`${sizes[size]} ${className}`}>
        <motion.div
          className="w-full h-full border-4 border-cloud-gray border-t-royal-purple rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        />
      </div>
    );
  }

  if (variant === 'dots') {
    return (
      <div className={`flex gap-1 ${className}`}>
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className={`${size === 'sm' ? 'w-2 h-2' : size === 'lg' ? 'w-4 h-4' : 'w-3 h-3'} bg-royal-purple rounded-full`}
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              delay: i * 0.15
            }}
          />
        ))}
      </div>
    );
  }

  if (variant === 'skeleton') {
    return (
      <div className={`bg-cloud-gray rounded-lg overflow-hidden ${className}`}>
        <motion.div
          className="w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent"
          animate={{ x: ['-100%', '100%'] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
        />
      </div>
    );
  }

  return null;
};

// Skeleton Components
export const SkeletonText = ({ lines = 1, className = '' }) => (
  <div className={`space-y-2 ${className}`}>
    {Array(lines).fill(0).map((_, i) => (
      <div
        key={i}
        className="h-4 bg-cloud-gray rounded shimmer"
        style={{ width: i === lines - 1 ? '70%' : '100%' }}
      />
    ))}
  </div>
);

export const SkeletonCard = ({ className = '' }) => (
  <div className={`bg-white rounded-2xl overflow-hidden ${className}`}>
    <div className="aspect-[3/4] bg-cloud-gray shimmer" />
    <div className="p-4 space-y-3">
      <div className="h-4 bg-cloud-gray rounded shimmer w-3/4" />
      <div className="h-4 bg-cloud-gray rounded shimmer w-1/2" />
      <div className="h-6 bg-cloud-gray rounded shimmer w-1/3" />
    </div>
  </div>
);

export default Loader;
