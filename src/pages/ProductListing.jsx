import { useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import { products, getProductsByCategory, getSaleProducts, getNewArrivals } from '../data/products';
import ProductGrid from '../components/product/ProductGrid';
import ProductFilters from '../components/product/ProductFilters';
import FadeIn from '../components/animations/FadeIn';

const ProductListing = () => {
  const { category } = useParams();
  const [filters, setFilters] = useState({
    category: [],
    sizes: [],
    colors: [],
    priceMin: 0,
    priceMax: 200,
    sortBy: 'featured'
  });
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  const pageTitle = useMemo(() => {
    switch (category) {
      case 'men': return "Men's Collection";
      case 'women': return "Women's Collection";
      case 'kids': return "Kids Collection";
      case 'sale': return "Sale Items";
      case 'new-arrivals': return "New Arrivals";
      default: return "All Products";
    }
  }, [category]);

  const pageDescription = useMemo(() => {
    switch (category) {
      case 'men': return "Discover stylish and comfortable fashion designed for the modern man.";
      case 'women': return "Elegant and confident styles for every occasion.";
      case 'kids': return "Fun and durable clothing for active kids.";
      case 'sale': return "Shop our best deals and save big on your favorites.";
      case 'new-arrivals': return "Be the first to shop our latest arrivals.";
      default: return "Explore our complete collection of plus-size fashion.";
    }
  }, [category]);

  const filteredProducts = useMemo(() => {
    let result;

    // Get base products based on route
    if (category === 'sale') {
      result = getSaleProducts();
    } else if (category === 'new-arrivals') {
      result = getNewArrivals();
    } else if (category) {
      result = getProductsByCategory(category);
    } else {
      result = [...products];
    }

    // Apply filters
    if (filters.sizes.length > 0) {
      result = result.filter(product =>
        product.sizes.some(size => filters.sizes.includes(size))
      );
    }

    if (filters.colors.length > 0) {
      result = result.filter(product =>
        product.colors.some(color => filters.colors.includes(color.name))
      );
    }

    if (filters.priceMin > 0 || filters.priceMax < 200) {
      result = result.filter(product =>
        product.price >= filters.priceMin && product.price <= filters.priceMax
      );
    }

    // Apply sorting
    switch (filters.sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        // Keep original order for 'featured'
        break;
    }

    return result;
  }, [category, filters]);

  const subcategories = useMemo(() => {
    if (!category || category === 'sale' || category === 'new-arrivals') return [];
    const categoryProducts = getProductsByCategory(category);
    return [...new Set(categoryProducts.map(p => p.subcategory))];
  }, [category]);

  return (
    <div className="pt-24 pb-16 min-h-screen bg-snow-white">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-royal-purple to-sunset-orange py-12 mb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-poppins text-white mb-4">
              {pageTitle}
            </h1>
            <p className="text-white/80 max-w-2xl">
              {pageDescription}
            </p>
          </FadeIn>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Toolbar */}
        <FadeIn className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <p className="text-slate">
            Showing <span className="font-semibold text-deep-charcoal">{filteredProducts.length}</span> products
          </p>

          <div className="flex items-center gap-4">
            {/* Mobile Filter Toggle */}
            <motion.button
              onClick={() => setIsFiltersOpen(!isFiltersOpen)}
              className="lg:hidden flex items-center gap-2 px-4 py-2 border-2 border-silver-mist rounded-xl"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
              Filters
            </motion.button>

            {/* Sort Dropdown */}
            <select
              value={filters.sortBy}
              onChange={(e) => setFilters({ ...filters, sortBy: e.target.value })}
              className="px-4 py-2 border-2 border-silver-mist rounded-xl focus:border-royal-purple focus:outline-none bg-white"
            >
              <option value="featured">Featured</option>
              <option value="newest">Newest</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </FadeIn>

        <div className="flex gap-8">
          {/* Sidebar Filters - Desktop */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <ProductFilters
              filters={filters}
              onFilterChange={setFilters}
              categories={subcategories}
            />
          </aside>

          {/* Mobile Filters */}
          {isFiltersOpen && (
            <div className="lg:hidden fixed inset-0 z-50">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onClick={() => setIsFiltersOpen(false)}
                className="absolute inset-0 bg-midnight/60 backdrop-blur-sm"
              />
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                className="absolute left-0 top-0 bottom-0 w-80 max-w-full bg-white overflow-y-auto"
              >
                <div className="p-4 border-b border-cloud-gray flex items-center justify-between">
                  <h2 className="font-semibold text-lg">Filters</h2>
                  <button onClick={() => setIsFiltersOpen(false)}>
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div className="p-4">
                  <ProductFilters
                    filters={filters}
                    onFilterChange={setFilters}
                    categories={subcategories}
                  />
                </div>
              </motion.div>
            </div>
          )}

          {/* Product Grid */}
          <div className="flex-1">
            <ProductGrid products={filteredProducts} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListing;
