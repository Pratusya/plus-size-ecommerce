import { createContext, useContext, useState } from 'react';

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [filters, setFilters] = useState({
    category: 'all',
    subcategory: 'all',
    sizes: [],
    colors: [],
    priceRange: { min: 0, max: Infinity },
    sortBy: 'featured'
  });

  const updateFilter = (filterName, value) => {
    setFilters(prev => ({
      ...prev,
      [filterName]: value
    }));
  };

  const toggleSize = (size) => {
    setFilters(prev => ({
      ...prev,
      sizes: prev.sizes.includes(size)
        ? prev.sizes.filter(s => s !== size)
        : [...prev.sizes, size]
    }));
  };

  const toggleColor = (color) => {
    setFilters(prev => ({
      ...prev,
      colors: prev.colors.includes(color)
        ? prev.colors.filter(c => c !== color)
        : [...prev.colors, color]
    }));
  };

  const setPriceRange = (min, max) => {
    setFilters(prev => ({
      ...prev,
      priceRange: { min, max }
    }));
  };

  const setSortBy = (sortBy) => {
    setFilters(prev => ({
      ...prev,
      sortBy
    }));
  };

  const clearFilters = () => {
    setFilters({
      category: 'all',
      subcategory: 'all',
      sizes: [],
      colors: [],
      priceRange: { min: 0, max: Infinity },
      sortBy: 'featured'
    });
  };

  const clearSizeFilters = () => {
    setFilters(prev => ({
      ...prev,
      sizes: []
    }));
  };

  const clearColorFilters = () => {
    setFilters(prev => ({
      ...prev,
      colors: []
    }));
  };

  const applyFilters = (products) => {
    let filtered = [...products];

    // Filter by subcategory
    if (filters.subcategory && filters.subcategory !== 'all') {
      filtered = filtered.filter(p => p.subcategory === filters.subcategory);
    }

    // Filter by sizes
    if (filters.sizes.length > 0) {
      filtered = filtered.filter(p => 
        filters.sizes.some(size => p.sizes.includes(size))
      );
    }

    // Filter by colors
    if (filters.colors.length > 0) {
      filtered = filtered.filter(p => 
        filters.colors.some(colorName => 
          p.colors.some(c => c.name === colorName)
        )
      );
    }

    // Filter by price range
    if (filters.priceRange.min > 0 || filters.priceRange.max < Infinity) {
      filtered = filtered.filter(p => {
        const price = p.salePrice || p.price;
        return price >= filters.priceRange.min && price <= filters.priceRange.max;
      });
    }

    // Sort products
    switch (filters.sortBy) {
      case 'price-low':
        filtered.sort((a, b) => (a.salePrice || a.price) - (b.salePrice || b.price));
        break;
      case 'price-high':
        filtered.sort((a, b) => (b.salePrice || b.price) - (a.salePrice || a.price));
        break;
      case 'newest':
        filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      case 'featured':
      default:
        // Keep original order or prioritize sale/new items
        filtered.sort((a, b) => {
          const aScore = (a.isNew ? 1 : 0) + (a.isSale ? 1 : 0);
          const bScore = (b.isNew ? 1 : 0) + (b.isSale ? 1 : 0);
          return bScore - aScore;
        });
        break;
    }

    return filtered;
  };

  const getActiveFilterCount = () => {
    let count = 0;
    if (filters.subcategory !== 'all') count++;
    count += filters.sizes.length;
    count += filters.colors.length;
    if (filters.priceRange.min > 0 || filters.priceRange.max < Infinity) count++;
    return count;
  };

  return (
    <FilterContext.Provider value={{
      filters,
      updateFilter,
      toggleSize,
      toggleColor,
      setPriceRange,
      setSortBy,
      clearFilters,
      clearSizeFilters,
      clearColorFilters,
      applyFilters,
      getActiveFilterCount
    }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilters = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error('useFilters must be used within a FilterProvider');
  }
  return context;
};

export default FilterContext;
