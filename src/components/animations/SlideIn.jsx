import { motion } from 'framer-motion';
import { usePrefersReducedMotion } from '../../hooks/useMediaQuery';

const SlideIn = ({ 
  children, 
  direction = 'left', 
  delay = 0, 
  duration = 0.5, 
  className = '',
  distance = 100 
}) => {
  const prefersReducedMotion = usePrefersReducedMotion();

  const directions = {
    left: { x: -distance, y: 0 },
    right: { x: distance, y: 0 },
    up: { x: 0, y: distance },
    down: { x: 0, y: -distance }
  };

  return (
    <motion.div
      initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: prefersReducedMotion ? 0 : duration,
        delay: prefersReducedMotion ? 0 : delay,
        ease: [0.25, 0.1, 0.25, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default SlideIn;
