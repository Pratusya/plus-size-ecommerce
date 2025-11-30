import { useState, useMemo, useLayoutEffect, useRef } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { getProductsByCategory, getNewArrivals, getSaleProducts, searchProducts, sortOptions } from '../data/products';
import { useFilters } from '../context/FilterContext';
import { getCategoryName } from '../utils/helpers';
import ProductGrid from '../components/product/ProductGrid';
import ProductFilters from '../components/product/ProductFilters';

const ProductListing = () => {
  const { category } = useParams();
  const location = useLocation();
  const { filters, setSortBy, applyFilters, clearFilters } = useFilters();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const prevPathRef = useRef(location.pathname);
  const prevSearchRef = useRef('');

  // Determine page type
  const isNewArrivals = location.pathname === '/new-arrivals';
  const isSale = location.pathname === '/sale';
  const isSearch = location.pathname === '/search';
  const searchQuery = new URLSearchParams(location.search).get('q') || '';

  // Clear filters when route changes using layout effect
  useLayoutEffect(() => {
    if (prevPathRef.current !== location.pathname || prevSearchRef.current !== searchQuery) {
      clearFilters();
      prevPathRef.current = location.pathname;
      prevSearchRef.current = searchQuery;
    }
  }, [location.pathname, searchQuery, clearFilters]);

  // Get products using useMemo to avoid setState in effect
  const products = useMemo(() => {
    if (isNewArrivals) {
      return getNewArrivals();
    } else if (isSale) {
      return getSaleProducts();
    } else if (isSearch && searchQuery) {
      return searchProducts(searchQuery);
    } else if (category) {
      return getProductsByCategory(category);
    } else {
      return getProductsByCategory();
    }
  }, [category, isNewArrivals, isSale, isSearch, searchQuery]);

  const filteredProducts = applyFilters(products);

  const getPageTitle = () => {
    if (isNewArrivals) return 'New Arrivals';
    if (isSale) return 'Sale';
    if (isSearch) return `Search Results for "${searchQuery}"`;
    return getCategoryName(category);
  };

  const getPageDescription = () => {
    if (isNewArrivals) return 'Fresh styles just landed. Be the first to shop our newest arrivals.';
    if (isSale) return 'Limited time offers on your favorite styles. Shop now and save!';
    if (isSearch) return `Found ${filteredProducts.length} products matching your search.`;
    if (category === 'men') return 'Comfortable and stylish clothing designed for the modern man.';
    if (category === 'women') return 'Celebrate your curves with our flattering and fashionable collection.';
    if (category === 'kids') return "Fun, comfortable, and durable clothing for active kids.";
    return 'Explore our full range of plus-size fashion.';
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <div className="bg-soft-cream py-12 md:py-16">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal font-montserrat mb-4">
            {getPageTitle()}
          </h1>
          <p className="text-medium-gray text-lg max-w-2xl mx-auto">
            {getPageDescription()}
          </p>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Toolbar */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
          <p className="text-medium-gray">
            Showing <span className="font-semibold text-charcoal">{filteredProducts.length}</span> products
          </p>

          <div className="flex items-center gap-4">
            {/* Mobile Filter Button */}
            <button
              onClick={() => setIsFilterOpen(true)}
              className="lg:hidden flex items-center gap-2 px-4 py-2 border border-soft-gray rounded-lg hover:border-deep-teal transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                />
              </svg>
              Filters
            </button>

            {/* Sort Dropdown */}
            <select
              value={filters.sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-soft-gray rounded-lg focus:outline-none focus:border-deep-teal bg-white text-charcoal"
            >
              {sortOptions.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Desktop Sidebar Filters */}
          <aside className="hidden lg:block w-[280px] flex-shrink-0">
            <div className="sticky top-24">
              <ProductFilters />
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-grow">
            <ProductGrid products={filteredProducts} />
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      {isFilterOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-50 lg:hidden"
            onClick={() => setIsFilterOpen(false)}
          />
          <div className="fixed top-0 left-0 h-full w-80 max-w-[85vw] bg-white z-50 overflow-y-auto lg:hidden animate-slideIn">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold font-montserrat">Filters</h2>
                <button
                  onClick={() => setIsFilterOpen(false)}
                  className="p-2 text-medium-gray hover:text-charcoal"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <ProductFilters onClose={() => setIsFilterOpen(false)} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductListing;
