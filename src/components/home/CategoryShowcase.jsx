import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import FadeIn from '../animations/FadeIn';
import { categories } from '../../data/products';

const CategoryShowcase = () => {
  return (
    <section className="py-16 lg:py-24 bg-cloud-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold font-poppins text-deep-charcoal mb-4">
            Shop by <span className="gradient-text">Category</span>
          </h2>
          <p className="text-slate max-w-2xl mx-auto">
            Explore our curated collections designed with your comfort and style in mind
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <FadeIn key={category.id} delay={index * 0.1}>
              <Link to={`/${category.id}`}>
                <motion.div
                  className="relative group rounded-2xl overflow-hidden aspect-[4/5] card-shadow"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Image */}
                  <motion.img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-midnight/20 to-transparent" />

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <motion.h3
                      className="text-2xl font-bold font-poppins text-white mb-2"
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      {category.name}
                    </motion.h3>
                    
                    <motion.p
                      className="text-silver-mist mb-4 text-sm"
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      {category.description}
                    </motion.p>

                    <motion.span
                      className="inline-flex items-center gap-2 text-white font-semibold group-hover:text-sunset-orange transition-colors"
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      Shop Now
                      <motion.svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        whileHover={{ x: 5 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </motion.svg>
                    </motion.span>
                  </div>

                  {/* Hover Border Effect */}
                  <motion.div
                    className="absolute inset-0 border-4 border-transparent group-hover:border-sunset-orange rounded-2xl transition-colors duration-300"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />
                </motion.div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryShowcase;
