import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import { useUI } from '../../context/UIContext';
import Button from '../common/Button';

const QuickView = () => {
  const { isQuickViewOpen, quickViewProduct, closeQuickView, addToast } = useUI();
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);

  const product = quickViewProduct;
  const inWishlist = product ? isInWishlist(product.id) : false;

  const handleAddToCart = () => {
    if (!selectedSize) {
      addToast('Please select a size', 'warning');
      return;
    }
    if (!selectedColor) {
      addToast('Please select a color', 'warning');
      return;
    }
    addToCart(product, selectedSize, selectedColor, quantity);
    addToast(`${product.name} added to cart!`, 'success');
    closeQuickView();
  };

  const handleWishlist = () => {
    toggleWishlist(product);
    addToast(
      inWishlist ? 'Removed from wishlist' : 'Added to wishlist!',
      inWishlist ? 'info' : 'success'
    );
  };

  return (
    <AnimatePresence>
      {isQuickViewOpen && product && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeQuickView}
            className="absolute inset-0 bg-midnight/60 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden"
          >
            <motion.button
              onClick={closeQuickView}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-cloud-gray transition-colors z-10"
              whileHover={{ rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-6 h-6 text-slate" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>

            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Image */}
              <div className="aspect-square bg-cloud-gray">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Details */}
              <div className="p-6 md:p-8 flex flex-col">
                <p className="text-sm text-slate uppercase tracking-wide mb-1">
                  {product.category}
                </p>
                
                <h2 className="text-2xl font-bold font-poppins text-deep-charcoal mb-2">
                  {product.name}
                </h2>

                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl font-bold text-royal-purple">
                    ${product.price.toFixed(2)}
                  </span>
                  {product.originalPrice && (
                    <span className="text-lg text-slate line-through">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-sunset-orange' : 'text-silver-mist'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-slate">({product.reviews} reviews)</span>
                </div>

                <p className="text-slate mb-6 line-clamp-3">
                  {product.description}
                </p>

                {/* Size Selection */}
                <div className="mb-4">
                  <label className="block text-sm font-semibold text-deep-charcoal mb-2">
                    Size
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size) => (
                      <motion.button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-4 py-2 rounded-lg border-2 font-medium transition-colors ${
                          selectedSize === size
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
                </div>

                {/* Color Selection */}
                <div className="mb-4">
                  <label className="block text-sm font-semibold text-deep-charcoal mb-2">
                    Color: {selectedColor}
                  </label>
                  <div className="flex gap-2">
                    {product.colors.map((color) => (
                      <motion.button
                        key={color.name}
                        onClick={() => setSelectedColor(color.name)}
                        className={`w-10 h-10 rounded-full border-2 ${
                          selectedColor === color.name
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
                      />
                    ))}
                  </div>
                </div>

                {/* Quantity */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-deep-charcoal mb-2">
                    Quantity
                  </label>
                  <div className="flex items-center gap-3">
                    <motion.button
                      onClick={() => setQuantity(q => Math.max(1, q - 1))}
                      className="w-10 h-10 rounded-lg border-2 border-silver-mist flex items-center justify-center"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      -
                    </motion.button>
                    <span className="w-12 text-center font-semibold">{quantity}</span>
                    <motion.button
                      onClick={() => setQuantity(q => q + 1)}
                      className="w-10 h-10 rounded-lg border-2 border-silver-mist flex items-center justify-center"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      +
                    </motion.button>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3 mt-auto">
                  <Button onClick={handleAddToCart} className="flex-1">
                    Add to Cart
                  </Button>
                  <motion.button
                    onClick={handleWishlist}
                    className="p-4 border-2 border-silver-mist rounded-xl hover:border-rose-gold transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg
                      className={`w-6 h-6 ${inWishlist ? 'text-rose-gold' : 'text-slate'}`}
                      fill={inWishlist ? 'currentColor' : 'none'}
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default QuickView;
