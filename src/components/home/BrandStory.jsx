import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FadeIn from '../animations/FadeIn';

const BrandStory = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const stats = [
    { value: '50,000+', label: 'Happy Customers' },
    { value: '99%', label: 'Satisfaction Rate' },
    { value: '15+', label: 'Countries Served' },
    { value: '10K+', label: '5-Star Reviews' }
  ];

  return (
    <section ref={sectionRef} className="py-16 lg:py-24 bg-snow-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <FadeIn direction="left">
            <motion.div
              style={{ y }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden card-shadow">
                <img
                  src="https://picsum.photos/seed/story1/600/750"
                  alt="Our story"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating Stats Card */}
              <motion.div
                className="absolute -right-8 -bottom-8 bg-white rounded-2xl p-6 shadow-xl"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, type: 'spring' }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-royal-purple to-sunset-orange rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <div>
                    <motion.span
                      className="block text-3xl font-bold gradient-text"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.7 }}
                    >
                      50K+
                    </motion.span>
                    <span className="text-slate">Happy Customers</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </FadeIn>

          {/* Content */}
          <motion.div style={{ opacity }}>
            <FadeIn direction="right">
              <span className="text-sunset-orange font-semibold uppercase tracking-wide">
                Our Story
              </span>
              
              <h2 className="text-3xl sm:text-4xl font-bold font-poppins text-deep-charcoal mt-4 mb-6">
                Fashion That <span className="gradient-text">Celebrates</span> You
              </h2>
              
              <div className="space-y-4 text-slate">
                <p>
                  We believe that style has no size limit. CurvyStyle was born from a simple idea: 
                  everyone deserves to feel confident and beautiful in their clothes.
                </p>
                <p>
                  Our journey started when we noticed a gap in the market for truly stylish, 
                  well-fitting plus-size clothing. We set out to create fashion that doesn&apos;t 
                  just fit your body, but fits your life.
                </p>
                <p>
                  Today, we&apos;re proud to serve thousands of customers who trust us to help them 
                  look and feel their best. Every piece we create is designed with care, quality, 
                  and your comfort in mind.
                </p>
              </div>

              {/* Values */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                {[
                  { icon: '✨', title: 'Quality First', desc: 'Premium fabrics & craftsmanship' },
                  { icon: '💜', title: 'Body Positive', desc: 'Celebrating every body type' },
                  { icon: '🌱', title: 'Sustainable', desc: 'Eco-friendly practices' },
                  { icon: '🤝', title: 'Inclusive', desc: 'Fashion for everyone' }
                ].map((value, index) => (
                  <motion.div
                    key={index}
                    className="p-4 bg-cloud-gray rounded-xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <span className="text-2xl">{value.icon}</span>
                    <h4 className="font-semibold text-deep-charcoal mt-2">{value.title}</h4>
                    <p className="text-sm text-slate">{value.desc}</p>
                  </motion.div>
                ))}
              </div>
            </FadeIn>
          </motion.div>
        </div>

        {/* Stats */}
        <FadeIn className="mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-cloud-gray rounded-xl"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <motion.span
                  className="block text-3xl sm:text-4xl font-bold gradient-text"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  {stat.value}
                </motion.span>
                <span className="text-slate">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default BrandStory;
