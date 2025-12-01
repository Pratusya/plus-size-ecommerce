import { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProductById, getProductsByCategory } from '../data/products';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { formatPrice, calculateDiscount, isLightColor } from '../utils/helpers';
import Badge from '../components/common/Badge';
import Button from '../components/common/Button';
import ProductCard from '../components/product/ProductCard';
import SizeChart from '../components/product/SizeChart';

const ProductDetail = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [isSizeChartOpen, setIsSizeChartOpen] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();

  // Get product data using useMemo to avoid setState in effect
  const product = useMemo(() => getProductById(id), [id]);
  
  // Get related products using useMemo
  const relatedProducts = useMemo(() => {
    if (!product) return [];
    return getProductsByCategory(product.category)
      .filter(p => p.id !== product.id)
      .slice(0, 4);
  }, [product]);

  // Set initial color when product changes
  const effectiveSelectedColor = selectedColor || (product?.colors[0]?.name ?? '');

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl text-medium-gray">Product not found</p>
          <Link to="/" className="text-deep-teal hover:underline mt-4 inline-block">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  const inWishlist = isInWishlist(product.id);
  const discount = calculateDiscount(product.price, product.salePrice);

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size');
      return;
    }
    addToCart(product, effectiveSelectedColor, selectedSize, quantity);
  };

  const handleQuantityChange = (delta) => {
    setQuantity(prev => Math.max(1, Math.min(10, prev + delta)));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-light-gray py-3">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <nav className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-medium-gray hover:text-deep-teal">Home</Link>
            <span className="text-medium-gray">/</span>
            <Link to={`/${product.category}`} className="text-medium-gray hover:text-deep-teal capitalize">
              {product.category}
            </Link>
            <span className="text-medium-gray">/</span>
            <span className="text-charcoal">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product Details */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div 
              className="relative aspect-[3/4] rounded-xl overflow-hidden bg-light-gray cursor-zoom-in"
              onMouseEnter={() => setIsZoomed(true)}
              onMouseLeave={() => setIsZoomed(false)}
            >
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className={`w-full h-full object-cover transition-transform duration-500 ${
                  isZoomed ? 'scale-110' : 'scale-100'
                }`}
              />
              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                {product.isNew && <Badge variant="new" size="lg">New Arrival</Badge>}
                {product.isSale && <Badge variant="sale" size="lg">-{discount}% Off</Badge>}
              </div>
            </div>

            {/* Thumbnail Gallery */}
            <div className="flex gap-3 overflow-x-auto pb-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`flex-shrink-0 w-20 h-24 rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === index
                      ? 'border-deep-teal'
                      : 'border-transparent hover:border-soft-gray'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} - View ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:py-4">
            {/* Category */}
            <p className="text-sm text-medium-gray uppercase tracking-wider mb-2">
              {product.category} / {product.subcategory}
            </p>

            {/* Name */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-charcoal font-montserrat">
              {product.name}
            </h1>

            {/* Price */}
            <div className="flex items-center gap-3 mt-4">
              <span className="text-2xl md:text-3xl font-bold text-deep-teal">
                {formatPrice(product.salePrice || product.price)}
              </span>
              {product.salePrice && (
                <span className="text-lg text-medium-gray line-through">
                  {formatPrice(product.price)}
                </span>
              )}
            </div>

            {/* Description */}
            <p className="text-medium-gray mt-6 leading-relaxed">
              {product.description}
            </p>

            {/* Color Selection */}
            <div className="mt-8">
              <p className="text-sm font-semibold text-charcoal mb-3">
                Color: <span className="font-normal">{effectiveSelectedColor}</span>
              </p>
              <div className="flex gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={`relative w-12 h-12 rounded-full border-2 transition-all ${
                      effectiveSelectedColor === color.name
                        ? 'border-deep-teal scale-110'
                        : 'border-soft-gray hover:border-medium-gray'
                    }`}
                    style={{ backgroundColor: color.hex }}
                    title={color.name}
                  >
                    {effectiveSelectedColor === color.name && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`absolute inset-0 m-auto h-6 w-6 ${
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
            <div className="mt-8">
              <div className="flex items-center justify-between mb-3">
                <p className="text-sm font-semibold text-charcoal">Size</p>
                <button
                  onClick={() => setIsSizeChartOpen(true)}
                  className="text-sm text-deep-teal hover:underline"
                >
                  Size Guide
                </button>
              </div>
              <div className="flex flex-wrap gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-6 py-3 text-sm font-medium rounded-lg border-2 transition-all ${
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
            <div className="mt-8">
              <p className="text-sm font-semibold text-charcoal mb-3">Quantity</p>
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-soft-gray rounded-lg">
                  <button
                    onClick={() => handleQuantityChange(-1)}
                    disabled={quantity <= 1}
                    className="p-3 text-medium-gray hover:text-charcoal disabled:opacity-50 transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                    </svg>
                  </button>
                  <span className="px-6 text-lg font-medium text-charcoal">{quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(1)}
                    disabled={quantity >= 10}
                    className="p-3 text-medium-gray hover:text-charcoal disabled:opacity-50 transition-colors"
                    aria-label="Increase quantity"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mt-8">
              <Button
                variant="coral"
                size="lg"
                onClick={handleAddToCart}
                className="flex-grow"
              >
                Add to Cart
              </Button>
              <button
                onClick={() => toggleWishlist(product)}
                className={`p-4 rounded-lg border-2 transition-colors ${
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

            {/* Product Details */}
            <div className="mt-10 space-y-6 border-t border-soft-gray pt-8">
              <div>
                <h3 className="text-sm font-semibold text-charcoal mb-2">Material</h3>
                <p className="text-medium-gray">{product.material}</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-charcoal mb-2">Fit</h3>
                <p className="text-medium-gray">{product.fit}</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-charcoal mb-2">Care Instructions</h3>
                <p className="text-medium-gray">{product.careInstructions}</p>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="mt-8 grid grid-cols-3 gap-4 p-4 bg-light-gray rounded-lg">
              <div className="text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto text-deep-teal mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
                <p className="text-xs text-medium-gray">Free Shipping $75+</p>
              </div>
              <div className="text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto text-deep-teal mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                <p className="text-xs text-medium-gray">30-Day Returns</p>
              </div>
              <div className="text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto text-deep-teal mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <p className="text-xs text-medium-gray">Secure Payment</p>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16 pt-12 border-t border-soft-gray">
            <h2 className="text-2xl md:text-3xl font-bold text-charcoal font-montserrat mb-8">
              You May Also Like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Size Chart Modal */}
      <SizeChart
        isOpen={isSizeChartOpen}
        onClose={() => setIsSizeChartOpen(false)}
        category={product.category}
      />
    </div>
  );
};

export default ProductDetail;
