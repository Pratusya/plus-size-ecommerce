import { motion } from 'framer-motion';

const Marquee = () => {
  const messages = [
    '✨ FREE SHIPPING ON ORDERS $50+',
    '🎉 NEW ARRIVALS WEEKLY',
    '💝 SIZES 2XL - 6XL',
    '🌟 EASY RETURNS',
    '✨ FREE SHIPPING ON ORDERS $50+',
    '🎉 NEW ARRIVALS WEEKLY',
    '💝 SIZES 2XL - 6XL',
    '🌟 EASY RETURNS'
  ];

  return (
    <div className="bg-gradient-to-r from-royal-purple to-sunset-orange py-3 overflow-hidden">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ 
          duration: 25, 
          repeat: Infinity, 
          ease: 'linear' 
        }}
      >
        {messages.map((message, index) => (
          <span
            key={index}
            className="mx-8 text-white font-semibold text-sm tracking-wide"
          >
            {message}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
