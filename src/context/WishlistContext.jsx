import { createContext, useContext, useReducer, useEffect } from 'react';

const WishlistContext = createContext();

const initialState = {
  items: []
};

// Load wishlist from localStorage
const loadWishlistFromStorage = () => {
  try {
    const storedWishlist = localStorage.getItem('curvychic_wishlist');
    if (storedWishlist) {
      return { items: JSON.parse(storedWishlist) };
    }
  } catch (error) {
    console.error('Error loading wishlist from localStorage:', error);
  }
  return initialState;
};

const wishlistReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_WISHLIST': {
      const exists = state.items.some(item => item.id === action.payload.id);
      if (exists) {
        return state;
      }
      return { ...state, items: [...state.items, action.payload] };
    }

    case 'REMOVE_FROM_WISHLIST': {
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload)
      };
    }

    case 'CLEAR_WISHLIST': {
      return { ...state, items: [] };
    }

    default:
      return state;
  }
};

export const WishlistProvider = ({ children }) => {
  const [state, dispatch] = useReducer(wishlistReducer, initialState, loadWishlistFromStorage);

  // Save to localStorage whenever items change
  useEffect(() => {
    localStorage.setItem('curvychic_wishlist', JSON.stringify(state.items));
  }, [state.items]);

  const addToWishlist = (product) => {
    dispatch({
      type: 'ADD_TO_WISHLIST',
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        salePrice: product.salePrice,
        image: product.images[0],
        category: product.category
      }
    });
  };

  const removeFromWishlist = (productId) => {
    dispatch({ type: 'REMOVE_FROM_WISHLIST', payload: productId });
  };

  const clearWishlist = () => {
    dispatch({ type: 'CLEAR_WISHLIST' });
  };

  const isInWishlist = (productId) => {
    return state.items.some(item => item.id === productId);
  };

  const toggleWishlist = (product) => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const getWishlistCount = () => {
    return state.items.length;
  };

  return (
    <WishlistContext.Provider value={{
      items: state.items,
      addToWishlist,
      removeFromWishlist,
      clearWishlist,
      isInWishlist,
      toggleWishlist,
      getWishlistCount
    }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};

export default WishlistContext;
