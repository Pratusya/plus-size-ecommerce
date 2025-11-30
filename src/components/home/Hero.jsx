import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../common/Button';

const Hero = () => {
  const words = ['Celebrate', 'Every', 'Body'];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-blush-pink via-snow-white to-cloud-gray">
      {/* Floating Decorative Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 rounded-full bg-royal-purple/10"
          animate={{ y: [0, -30, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-40 right-20 w-48 h-48 rounded-full bg-sunset-orange/10"
          animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
        <motion.div
          className="absolute bottom-20 left-1/4 w-32 h-32 rounded-full bg-rose-gold/10"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        />
        <motion.div
          className="absolute bottom-40 right-1/3 w-24 h-24 rounded-full bg-royal-purple/5"
          animate={{ y: [0, 15, 0], x: [0, 10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold font-poppins leading-tight mb-6">
              {words.map((word, index) => (
                <motion.span
                  key={index}
                  variants={wordVariants}
                  className={`inline-block mr-4 ${
                    index === 2 ? 'gradient-text' : 'text-deep-charcoal'
                  }`}
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            <motion.p
              variants={wordVariants}
              className="text-lg sm:text-xl text-slate max-w-xl mx-auto lg:mx-0 mb-8"
            >
              Discover fashion that fits your style and celebrates your confidence. 
              Premium plus-size clothing for men, women, and kids.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={wordVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link to="/women">
                <Button size="lg">
                  Shop Women
                </Button>
              </Link>
              <Link to="/men">
                <Button variant="secondary" size="lg">
                  Shop Men
                </Button>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={wordVariants}
              className="flex gap-8 mt-12 justify-center lg:justify-start"
            >
              {[
                { value: '50K+', label: 'Happy Customers' },
                { value: '2XL-6XL', label: 'Size Range' },
                { value: '4.9', label: 'Average Rating' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <motion.span
                    className="block text-2xl sm:text-3xl font-bold gradient-text"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 + index * 0.2 }}
                  >
                    {stat.value}
                  </motion.span>
                  <span className="text-sm text-slate">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image Collage */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative hidden lg:block"
          >
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                className="space-y-4"
                initial={{ y: 50 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <div className="aspect-[3/4] rounded-2xl overflow-hidden card-shadow">
                  <img
                    src="https://picsum.photos/seed/hero1/400/533"
                    alt="Fashion model"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden card-shadow">
                  <img
                    src="https://picsum.photos/seed/hero2/400/400"
                    alt="Fashion model"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
              <motion.div
                className="space-y-4 mt-12"
                initial={{ y: -50 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <div className="aspect-square rounded-2xl overflow-hidden card-shadow">
                  <img
                    src="https://picsum.photos/seed/hero3/400/400"
                    alt="Fashion model"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[3/4] rounded-2xl overflow-hidden card-shadow">
                  <img
                    src="https://picsum.photos/seed/hero4/400/533"
                    alt="Fashion model"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>

            {/* Floating Badge */}
            <motion.div
              className="absolute -left-8 top-1/3 bg-white rounded-xl shadow-lg p-4"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, type: 'spring' }}
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-emerald-success rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-deep-charcoal">Free Shipping</p>
                  <p className="text-sm text-slate">On orders $50+</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <svg className="w-8 h-8 text-royal-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero;
