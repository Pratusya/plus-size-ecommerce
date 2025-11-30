import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import { formatPrice, calculateDiscount } from '../../utils/helpers';
import Badge from '../common/Badge';
import QuickView from './QuickView';

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();

  const inWishlist = isInWishlist(product.id);
  const discount = calculateDiscount(product.price, product.salePrice);

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    // Add with first available color and size
    addToCart(product, product.colors[0].name, product.sizes[0], 1);
  };

  const handleWishlistToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product);
  };

  const handleQuickView = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsQuickViewOpen(true);
  };

  return (
    <>
      <article
        className="group relative bg-white border border-soft-gray rounded-xl overflow-hidden product-card"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image Container */}
        <Link to={`/product/${product.id}`} className="block relative aspect-[3/4] overflow-hidden">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          
          {/* Secondary Image on Hover */}
          {product.images[1] && (
            <img
              src={product.images[1]}
              alt={`${product.name} - alternate view`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                isHovered ? 'opacity-100' : 'opacity-0'
              }`}
              loading="lazy"
            />
          )}

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {product.isNew && <Badge variant="new">New</Badge>}
            {product.isSale && <Badge variant="sale">-{discount}%</Badge>}
          </div>

          {/* Wishlist Button */}
          <button
            onClick={handleWishlistToggle}
            className={`absolute top-3 right-3 p-2 rounded-full transition-all ${
              inWishlist 
                ? 'bg-warm-coral text-white' 
                : 'bg-white/90 text-medium-gray hover:text-warm-coral'
            }`}
            aria-label={inWishlist ? 'Remove from wishlist' : 'Add to wishlist'}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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

          {/* Quick View Button */}
          <div
            className={`absolute bottom-3 left-3 right-3 transition-all duration-300 ${
              isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <button
              onClick={handleQuickView}
              className="w-full py-2 bg-white/95 text-charcoal font-semibold rounded-lg hover:bg-white transition-colors"
            >
              Quick View
            </button>
          </div>
        </Link>

        {/* Product Info */}
        <div className="p-4">
          {/* Category */}
          <p className="text-xs text-medium-gray uppercase tracking-wider mb-1">
            {product.subcategory}
          </p>

          {/* Product Name */}
          <Link to={`/product/${product.id}`}>
            <h3 className="text-base font-semibold text-charcoal hover:text-deep-teal transition-colors line-clamp-1">
              {product.name}
            </h3>
          </Link>

          {/* Price */}
          <div className="flex items-center gap-2 mt-2">
            <span className="text-lg font-bold text-deep-teal">
              {formatPrice(product.salePrice || product.price)}
            </span>
            {product.salePrice && (
              <span className="text-sm text-medium-gray line-through">
                {formatPrice(product.price)}
              </span>
            )}
          </div>

          {/* Color Options */}
          <div className="flex items-center gap-1 mt-3">
            {product.colors.slice(0, 4).map((color) => (
              <span
                key={color.name}
                className="w-4 h-4 rounded-full border border-soft-gray"
                style={{ backgroundColor: color.hex }}
                title={color.name}
              />
            ))}
            {product.colors.length > 4 && (
              <span className="text-xs text-medium-gray ml-1">
                +{product.colors.length - 4}
              </span>
            )}
          </div>

          {/* Quick Add Button */}
          <button
            onClick={handleQuickAdd}
            className="w-full mt-4 py-2 bg-warm-coral text-white font-semibold rounded-lg hover:bg-warm-coral/90 transition-colors btn-cart"
          >
            Add to Cart
          </button>
        </div>
      </article>

      {/* Quick View Modal */}
      <QuickView
        product={product}
        isOpen={isQuickViewOpen}
        onClose={() => setIsQuickViewOpen(false)}
      />
    </>
  );
};

export default ProductCard;
