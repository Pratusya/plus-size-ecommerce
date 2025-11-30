import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FilterSection = ({ title, id, isOpen, onToggle, children }) => (
  <div className="border-b border-cloud-gray pb-4">
    <button
      onClick={() => onToggle(id)}
      className="w-full flex items-center justify-between py-2"
    >
      <span className="font-semibold font-poppins text-deep-charcoal">{title}</span>
      <motion.svg
        className="w-5 h-5 text-slate"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.2 }}
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </motion.svg>
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="overflow-hidden"
        >
          <div className="pt-2">
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const ProductFilters = ({ 
  filters, 
  onFilterChange, 
  categories = [],
  priceRange = [0, 200] 
}) => {
  const [openSections, setOpenSections] = useState(['category', 'size', 'color', 'price']);

  const toggleSection = (section) => {
    setOpenSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section) 
        : [...prev, section]
    );
  };

  const sizes = ['2XL', '3XL', '4XL', '5XL', '6XL'];
  const colors = [
    { name: 'Black', hex: '#000000' },
    { name: 'White', hex: '#ffffff' },
    { name: 'Navy', hex: '#1e3a5f' },
    { name: 'Red', hex: '#cc0000' },
    { name: 'Pink', hex: '#ffc0cb' },
    { name: 'Green', hex: '#228b22' }
  ];

  const clearFilters = () => {
    onFilterChange({
      category: [],
      sizes: [],
      colors: [],
      priceMin: priceRange[0],
      priceMax: priceRange[1],
      sortBy: 'featured'
    });
  };

  return (
    <div className="bg-white rounded-2xl p-6 card-shadow">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold font-poppins text-deep-charcoal">Filters</h2>
        <motion.button
          onClick={clearFilters}
          className="text-sm text-royal-purple hover:text-sunset-orange transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Clear all
        </motion.button>
      </div>

      <div className="space-y-4">
        {/* Category */}
        <FilterSection title="Category" id="category" isOpen={openSections.includes('category')} onToggle={toggleSection}>
          <div className="space-y-2">
            {categories.map((cat) => (
              <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                <motion.div
                  className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                    filters.category?.includes(cat)
                      ? 'bg-royal-purple border-royal-purple'
                      : 'border-silver-mist group-hover:border-royal-purple'
                  }`}
                  whileTap={{ scale: 0.9 }}
                >
                  {filters.category?.includes(cat) && (
                    <motion.svg
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-3 h-3 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </motion.svg>
                  )}
                </motion.div>
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={filters.category?.includes(cat)}
                  onChange={() => {
                    const newCategories = filters.category?.includes(cat)
                      ? filters.category.filter(c => c !== cat)
                      : [...(filters.category || []), cat];
                    onFilterChange({ ...filters, category: newCategories });
                  }}
                />
                <span className="text-deep-charcoal capitalize">{cat}</span>
              </label>
            ))}
          </div>
        </FilterSection>

        {/* Size */}
        <FilterSection title="Size" id="size" isOpen={openSections.includes('size')} onToggle={toggleSection}>
          <div className="flex flex-wrap gap-2">
            {sizes.map((size) => (
              <motion.button
                key={size}
                onClick={() => {
                  const newSizes = filters.sizes?.includes(size)
                    ? filters.sizes.filter(s => s !== size)
                    : [...(filters.sizes || []), size];
                  onFilterChange({ ...filters, sizes: newSizes });
                }}
                className={`px-4 py-2 rounded-lg border-2 font-medium transition-colors ${
                  filters.sizes?.includes(size)
                    ? 'bg-royal-purple border-royal-purple text-white'
                    : 'border-silver-mist text-deep-charcoal hover:border-royal-purple'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {size}
              </motion.button>
            ))}
          </div>
        </FilterSection>

        {/* Color */}
        <FilterSection title="Color" id="color" isOpen={openSections.includes('color')} onToggle={toggleSection}>
          <div className="flex flex-wrap gap-3">
            {colors.map((color) => (
              <motion.button
                key={color.name}
                onClick={() => {
                  const newColors = filters.colors?.includes(color.name)
                    ? filters.colors.filter(c => c !== color.name)
                    : [...(filters.colors || []), color.name];
                  onFilterChange({ ...filters, colors: newColors });
                }}
                className={`relative w-8 h-8 rounded-full border-2 ${
                  filters.colors?.includes(color.name)
                    ? 'ring-2 ring-royal-purple ring-offset-2'
                    : ''
                }`}
                style={{ 
                  backgroundColor: color.hex,
                  borderColor: color.hex === '#ffffff' ? '#e0e0e0' : color.hex
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                title={color.name}
              >
                {filters.colors?.includes(color.name) && (
                  <motion.svg
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className={`w-4 h-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${
                      color.hex === '#ffffff' || color.hex === '#ffc0cb' ? 'text-deep-charcoal' : 'text-white'
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </motion.svg>
                )}
              </motion.button>
            ))}
          </div>
        </FilterSection>

        {/* Price Range */}
        <FilterSection title="Price" id="price" isOpen={openSections.includes('price')} onToggle={toggleSection}>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="text-sm text-slate">Min</label>
                <input
                  type="number"
                  value={filters.priceMin || priceRange[0]}
                  onChange={(e) => onFilterChange({ ...filters, priceMin: Number(e.target.value) })}
                  className="w-full mt-1 px-3 py-2 border-2 border-silver-mist rounded-lg focus:border-royal-purple focus:outline-none"
                  min={priceRange[0]}
                  max={priceRange[1]}
                />
              </div>
              <div className="flex-1">
                <label className="text-sm text-slate">Max</label>
                <input
                  type="number"
                  value={filters.priceMax || priceRange[1]}
                  onChange={(e) => onFilterChange({ ...filters, priceMax: Number(e.target.value) })}
                  className="w-full mt-1 px-3 py-2 border-2 border-silver-mist rounded-lg focus:border-royal-purple focus:outline-none"
                  min={priceRange[0]}
                  max={priceRange[1]}
                />
              </div>
            </div>
            <input
              type="range"
              min={priceRange[0]}
              max={priceRange[1]}
              value={filters.priceMax || priceRange[1]}
              onChange={(e) => onFilterChange({ ...filters, priceMax: Number(e.target.value) })}
              className="w-full accent-royal-purple"
            />
          </div>
        </FilterSection>
      </div>
    </div>
  );
};

export default ProductFilters;
