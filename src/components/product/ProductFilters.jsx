import { useFilters } from '../../context/FilterContext';
import { categories, sizes, colors, priceRanges } from '../../data/products';

const ProductFilters = ({ onClose }) => {
  const {
    filters,
    updateFilter,
    toggleSize,
    toggleColor,
    setPriceRange,
    clearFilters,
    getActiveFilterCount
  } = useFilters();

  const activeFilterCount = getActiveFilterCount();

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-soft-gray">
        <h3 className="text-lg font-semibold text-charcoal font-montserrat">
          Filters
          {activeFilterCount > 0 && (
            <span className="ml-2 px-2 py-0.5 bg-deep-teal text-white text-xs rounded-full">
              {activeFilterCount}
            </span>
          )}
        </h3>
        {activeFilterCount > 0 && (
          <button
            onClick={clearFilters}
            className="text-sm text-warm-coral hover:text-warm-coral/80 transition-colors"
          >
            Clear All
          </button>
        )}
      </div>

      {/* Category Filter */}
      <div className="py-4 border-b border-soft-gray">
        <h4 className="text-sm font-semibold text-charcoal mb-3">Category</h4>
        <div className="space-y-2">
          {categories.map((category) => (
            <label
              key={category.id}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <input
                type="radio"
                name="subcategory"
                checked={filters.subcategory === category.id}
                onChange={() => updateFilter('subcategory', category.id)}
                className="w-4 h-4 text-deep-teal border-soft-gray focus:ring-deep-teal"
              />
              <span className="text-sm text-medium-gray group-hover:text-charcoal transition-colors">
                {category.name}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Size Filter */}
      <div className="py-4 border-b border-soft-gray">
        <h4 className="text-sm font-semibold text-charcoal mb-3">Size</h4>
        <div className="flex flex-wrap gap-2">
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => toggleSize(size)}
              className={`px-3 py-1.5 text-sm rounded-lg border transition-all ${
                filters.sizes.includes(size)
                  ? 'bg-deep-teal text-white border-deep-teal'
                  : 'bg-white text-medium-gray border-soft-gray hover:border-deep-teal hover:text-deep-teal'
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Color Filter */}
      <div className="py-4 border-b border-soft-gray">
        <h4 className="text-sm font-semibold text-charcoal mb-3">Color</h4>
        <div className="flex flex-wrap gap-2">
          {colors.map((color) => (
            <button
              key={color.name}
              onClick={() => toggleColor(color.name)}
              className={`relative w-8 h-8 rounded-full border-2 transition-all ${
                filters.colors.includes(color.name)
                  ? 'border-deep-teal scale-110'
                  : 'border-soft-gray hover:border-medium-gray'
              }`}
              style={{ backgroundColor: color.hex }}
              title={color.name}
              aria-label={`Filter by ${color.name}`}
            >
              {filters.colors.includes(color.name) && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`absolute inset-0 m-auto h-4 w-4 ${
                    color.name === 'White' ? 'text-charcoal' : 'text-white'
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Price Range Filter */}
      <div className="py-4">
        <h4 className="text-sm font-semibold text-charcoal mb-3">Price Range</h4>
        <div className="space-y-2">
          {priceRanges.map((range) => (
            <label
              key={range.id}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <input
                type="radio"
                name="priceRange"
                checked={
                  filters.priceRange.min === range.min &&
                  filters.priceRange.max === range.max
                }
                onChange={() => setPriceRange(range.min, range.max)}
                className="w-4 h-4 text-deep-teal border-soft-gray focus:ring-deep-teal"
              />
              <span className="text-sm text-medium-gray group-hover:text-charcoal transition-colors">
                {range.name}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Mobile Close Button */}
      {onClose && (
        <div className="mt-4 lg:hidden">
          <button
            onClick={onClose}
            className="w-full py-3 bg-deep-teal text-white font-semibold rounded-lg hover:bg-deep-teal/90 transition-colors"
          >
            Apply Filters
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductFilters;
