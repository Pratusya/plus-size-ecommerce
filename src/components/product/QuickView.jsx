import { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../common/Modal';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import { formatPrice, calculateDiscount, isLightColor } from '../../utils/helpers';
import Badge from '../common/Badge';

const QuickView = ({ product, isOpen, onClose }) => {
  const [selectedColor, setSelectedColor] = useState(product?.colors[0]?.name || '');
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();

  if (!product) return null;

  const inWishlist = isInWishlist(product.id);
  const discount = calculateDiscount(product.price, product.salePrice);

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size');
      return;
    }
    addToCart(product, selectedColor, selectedSize, quantity);
    onClose();
  };

  const handleQuantityChange = (delta) => {
    setQuantity(prev => Math.max(1, Math.min(10, prev + delta)));
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Image */}
        <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover"
          />
          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {product.isNew && <Badge variant="new">New</Badge>}
            {product.isSale && <Badge variant="sale">-{discount}%</Badge>}
          </div>
        </div>

        {/* Product Info */}
        <div className="flex flex-col">
          {/* Category */}
          <p className="text-sm text-medium-gray uppercase tracking-wider">
            {product.category} / {product.subcategory}
          </p>

          {/* Name */}
          <h2 className="text-2xl font-bold text-charcoal font-montserrat mt-2">
            {product.name}
          </h2>

          {/* Price */}
          <div className="flex items-center gap-3 mt-3">
            <span className="text-2xl font-bold text-deep-teal">
              {formatPrice(product.salePrice || product.price)}
            </span>
            {product.salePrice && (
              <span className="text-lg text-medium-gray line-through">
                {formatPrice(product.price)}
              </span>
            )}
          </div>

          {/* Description */}
          <p className="text-medium-gray mt-4 line-clamp-3">
            {product.description}
          </p>

          {/* Color Selection */}
          <div className="mt-6">
            <p className="text-sm font-semibold text-charcoal mb-2">
              Color: <span className="font-normal">{selectedColor}</span>
            </p>
            <div className="flex gap-2">
              {product.colors.map((color) => (
                <button
                  key={color.name}
                  onClick={() => setSelectedColor(color.name)}
                  className={`relative w-10 h-10 rounded-full border-2 transition-all ${
                    selectedColor === color.name
                      ? 'border-deep-teal scale-110'
                      : 'border-soft-gray hover:border-medium-gray'
                  }`}
                  style={{ backgroundColor: color.hex }}
                  title={color.name}
                >
                  {selectedColor === color.name && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`absolute inset-0 m-auto h-5 w-5 ${
                        isLightColor(color.hex) ? 'text-charcoal' : 'text-white'
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

          {/* Size Selection */}
          <div className="mt-6">
            <p className="text-sm font-semibold text-charcoal mb-2">Size</p>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 text-sm font-medium rounded-lg border transition-all ${
                    selectedSize === size
                      ? 'bg-deep-teal text-white border-deep-teal'
                      : 'bg-white text-charcoal border-soft-gray hover:border-deep-teal'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mt-6">
            <p className="text-sm font-semibold text-charcoal mb-2">Quantity</p>
            <div className="flex items-center gap-3">
              <div className="flex items-center border border-soft-gray rounded-lg">
                <button
                  onClick={() => handleQuantityChange(-1)}
                  disabled={quantity <= 1}
                  className="p-2 text-medium-gray hover:text-charcoal disabled:opacity-50 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                  </svg>
                </button>
                <span className="px-4 text-charcoal font-medium">{quantity}</span>
                <button
                  onClick={() => handleQuantityChange(1)}
                  disabled={quantity >= 10}
                  className="p-2 text-medium-gray hover:text-charcoal disabled:opacity-50 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 mt-8">
            <button
              onClick={handleAddToCart}
              className="flex-grow py-3 bg-warm-coral text-white font-semibold rounded-lg hover:bg-warm-coral/90 transition-colors btn-cart"
            >
              Add to Cart
            </button>
            <button
              onClick={() => toggleWishlist(product)}
              className={`p-3 rounded-lg border transition-colors ${
                inWishlist
                  ? 'bg-warm-coral border-warm-coral text-white'
                  : 'bg-white border-soft-gray text-medium-gray hover:border-warm-coral hover:text-warm-coral'
              }`}
              aria-label={inWishlist ? 'Remove from wishlist' : 'Add to wishlist'}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill={inWishlist ? 'currentColor' : 'none'}
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </button>
          </div>

          {/* View Full Details Link */}
          <Link
            to={`/product/${product.id}`}
            onClick={onClose}
            className="text-center text-deep-teal font-medium hover:underline mt-4"
          >
            View Full Details
          </Link>
        </div>
      </div>
    </Modal>
  );
};

export default QuickView;
