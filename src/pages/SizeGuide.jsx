import { useState } from 'react';
import { motion } from 'framer-motion';

import FadeIn from '../components/animations/FadeIn';

const SizeGuide = () => {
  const [selectedCategory, setSelectedCategory] = useState('women');

  const categories = ['women', 'men', 'kids'];

  const sizeData = {
    women: {
      headers: ['Size', 'US Size', 'Bust', 'Waist', 'Hips'],
      rows: [
        ['2XL', '18-20', '46-48"', '38-40"', '48-50"'],
        ['3XL', '22-24', '50-52"', '42-44"', '52-54"'],
        ['4XL', '26-28', '54-56"', '46-48"', '56-58"'],
        ['5XL', '30-32', '58-60"', '50-52"', '60-62"'],
        ['6XL', '34-36', '62-64"', '54-56"', '64-66"']
      ]
    },
    men: {
      headers: ['Size', 'Chest', 'Waist', 'Hip', 'Neck'],
      rows: [
        ['2XL', '50-52"', '42-44"', '50-52"', '18-18.5"'],
        ['3XL', '54-56"', '46-48"', '54-56"', '19-19.5"'],
        ['4XL', '58-60"', '50-52"', '58-60"', '20-20.5"'],
        ['5XL', '62-64"', '54-56"', '62-64"', '21-21.5"'],
        ['6XL', '66-68"', '58-60"', '66-68"', '22-22.5"']
      ]
    },
    kids: {
      headers: ['Size', 'Age', 'Height', 'Chest', 'Waist'],
      rows: [
        ['8', '7-8', '50-52"', '26-27"', '23-24"'],
        ['10', '9-10', '53-55"', '28-29"', '24-25"'],
        ['12', '11-12', '56-58"', '30-31"', '25-26"'],
        ['14', '13-14', '59-61"', '32-33"', '26-27"'],
        ['16', '15-16', '62-64"', '34-35"', '28-29"'],
        ['18', '17-18', '65-67"', '36-37"', '30-31"']
      ]
    }
  };

  const measurementGuide = [
    {
      title: 'Bust / Chest',
      description: 'Measure around the fullest part of your chest, keeping the tape level.',
      icon: '👕'
    },
    {
      title: 'Waist',
      description: 'Measure around your natural waistline, at the narrowest part of your waist.',
      icon: '📏'
    },
    {
      title: 'Hips',
      description: 'Measure around the fullest part of your hips, about 8" below your waist.',
      icon: '👖'
    }
  ];

  return (
    <div className="pt-24 pb-16 min-h-screen bg-snow-white">
      {/* Hero */}
      <section className="bg-gradient-to-r from-royal-purple to-sunset-orange py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold font-poppins text-white mb-4">
              Size Guide
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Find your perfect fit with our comprehensive size guide
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Tabs */}
          <FadeIn className="flex justify-center gap-4 mb-12">
            {categories.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-8 py-3 rounded-xl font-semibold capitalize transition-colors ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-royal-purple to-sunset-orange text-white'
                    : 'bg-cloud-gray text-deep-charcoal hover:bg-silver-mist'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {cat}
              </motion.button>
            ))}
          </FadeIn>

          {/* How to Measure */}
          <FadeIn className="mb-12">
            <div className="bg-blush-pink rounded-2xl p-8">
              <h2 className="text-2xl font-bold font-poppins text-deep-charcoal mb-6 text-center">
                How to Measure
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {measurementGuide.map((item, index) => (
                  <motion.div
                    key={index}
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <span className="text-4xl">{item.icon}</span>
                    <h3 className="font-semibold text-deep-charcoal mt-2 mb-1">{item.title}</h3>
                    <p className="text-sm text-slate">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Size Table */}
          <FadeIn>
            <div className="bg-white rounded-2xl overflow-hidden card-shadow">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gradient-to-r from-royal-purple to-sunset-orange text-white">
                      {sizeData[selectedCategory].headers.map((header, i) => (
                        <th key={i} className="px-6 py-4 text-left font-semibold">
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {sizeData[selectedCategory].rows.map((row, rowIndex) => (
                      <motion.tr
                        key={rowIndex}
                        className={rowIndex % 2 === 0 ? 'bg-cloud-gray/50' : 'bg-white'}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: rowIndex * 0.05 }}
                      >
                        {row.map((cell, cellIndex) => (
                          <td key={cellIndex} className="px-6 py-4 text-deep-charcoal">
                            {cellIndex === 0 ? (
                              <span className="font-bold text-royal-purple">{cell}</span>
                            ) : cell}
                          </td>
                        ))}
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </FadeIn>

          {/* Tips */}
          <FadeIn className="mt-12">
            <div className="bg-white rounded-2xl p-8 card-shadow">
              <h2 className="text-xl font-bold font-poppins text-deep-charcoal mb-4">
                Sizing Tips
              </h2>
              <ul className="space-y-3 text-slate">
                <li className="flex items-start gap-3">
                  <span className="text-sunset-orange">✓</span>
                  If you&apos;re between sizes, we recommend sizing up for a more comfortable fit.
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-sunset-orange">✓</span>
                  Measure over your undergarments for the most accurate results.
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-sunset-orange">✓</span>
                  Keep the measuring tape snug but not tight.
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-sunset-orange">✓</span>
                  When in doubt, reach out to our customer service team for personalized advice.
                </li>
              </ul>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default SizeGuide;
