import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getFeaturedProducts } from '../../data/products';
import ProductCard from '../product/ProductCard';
import FadeIn from '../animations/FadeIn';

const FeaturedProducts = () => {
  const products = getFeaturedProducts();
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-snow-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold font-poppins text-deep-charcoal mb-2">
                Featured <span className="gradient-text">Products</span>
              </h2>
              <p className="text-slate">Our most loved styles picked just for you</p>
            </div>
            
            <div className="hidden md:flex gap-2">
              <motion.button
                onClick={() => scroll('left')}
                className="p-3 rounded-full border-2 border-silver-mist hover:border-royal-purple transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Scroll left"
              >
                <svg className="w-5 h-5 text-deep-charcoal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </motion.button>
              <motion.button
                onClick={() => scroll('right')}
                className="p-3 rounded-full border-2 border-silver-mist hover:border-royal-purple transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Scroll right"
              >
                <svg className="w-5 h-5 text-deep-charcoal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.button>
            </div>
          </div>
        </FadeIn>

        {/* Horizontal Scroll Container */}
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {products.map((product, index) => (
            <div 
              key={product.id} 
              className="flex-shrink-0 w-72 snap-start"
            >
              <ProductCard product={product} index={index} />
            </div>
          ))}
        </div>

        {/* View All Link */}
        <FadeIn className="text-center mt-10">
          <Link to="/new-arrivals">
            <motion.span
              className="inline-flex items-center gap-2 text-royal-purple font-semibold hover:text-sunset-orange transition-colors"
              whileHover={{ x: 5 }}
            >
              View all new arrivals
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.span>
          </Link>
        </FadeIn>
      </div>
    </section>
  );
};

export default FeaturedProducts;
