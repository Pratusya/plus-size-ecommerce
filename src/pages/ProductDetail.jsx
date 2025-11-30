import { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getProductById, getRelatedProducts } from '../data/products';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { useUI } from '../context/UIContext';
import ImageGallery from '../components/product/ImageGallery';
import ProductGrid from '../components/product/ProductGrid';
import SizeChart from '../components/product/SizeChart';
import Button from '../components/common/Button';
import FadeIn from '../components/animations/FadeIn';

const ProductDetail = () => {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [isSizeChartOpen, setIsSizeChartOpen] = useState(false);

  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const { addToast } = useUI();

  const product = useMemo(() => getProductById(id), [id]);
  const relatedProducts = useMemo(() => product ? getRelatedProducts(id) : [], [id, product]);
  
  // Initialize selected color when product changes
  const initialColor = product?.colors[0]?.name || '';

  const inWishlist = product ? isInWishlist(product.id) : false;

  const handleAddToCart = () => {
    if (!selectedSize) {
      addToast('Please select a size', 'warning');
      return;
    }
    addToCart(product, selectedSize, selectedColor || initialColor, quantity);
    addToast(`${product.name} added to cart!`, 'success');
  };

  const handleWishlist = () => {
    toggleWishlist(product);
    addToast(
      inWishlist ? 'Removed from wishlist' : 'Added to wishlist!',
      inWishlist ? 'info' : 'success'
    );
  };

  if (!product) {
    return (
      <div className="pt-24 pb-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-deep-charcoal mb-4">Product not found</h2>
          <Link to="/" className="text-royal-purple hover:text-sunset-orange">
            Return to home
          </Link>
        </div>
      </div>
    );
  }

  const tabs = [
    { id: 'description', label: 'Description' },
    { id: 'details', label: 'Details' },
    { id: 'reviews', label: `Reviews (${product.reviews})` }
  ];

  return (
    <div className="pt-24 pb-16 min-h-screen bg-snow-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center gap-2 text-sm">
            <li><Link to="/" className="text-slate hover:text-royal-purple">Home</Link></li>
            <li className="text-slate">/</li>
            <li><Link to={`/${product.category}`} className="text-slate hover:text-royal-purple capitalize">{product.category}</Link></li>
            <li className="text-slate">/</li>
            <li className="text-deep-charcoal font-medium">{product.name}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <FadeIn>
            <ImageGallery images={product.images} productName={product.name} />
          </FadeIn>

          {/* Product Info */}
          <FadeIn delay={0.2}>
            <div className="space-y-6">
              {/* Category & Rating */}
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate uppercase tracking-wide">
                  {product.category} / {product.subcategory}
                </span>
                <div className="flex items-center gap-2">
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
                  <span className="text-slate">{product.rating} ({product.reviews} reviews)</span>
                </div>
              </div>

              {/* Name & Price */}
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold font-poppins text-deep-charcoal mb-4">
                  {product.name}
                </h1>
                <div className="flex items-center gap-4">
                  <span className="text-3xl font-bold text-royal-purple">
                    ${product.price.toFixed(2)}
                  </span>
                  {product.originalPrice && (
                    <>
                      <span className="text-xl text-slate line-through">
                        ${product.originalPrice.toFixed(2)}
                      </span>
                      <span className="px-3 py-1 bg-sunset-orange text-white text-sm font-semibold rounded-full">
                        Save ${(product.originalPrice - product.price).toFixed(2)}
                      </span>
                    </>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="text-slate leading-relaxed">
                {product.description}
              </p>

              {/* Color Selection */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="font-semibold text-deep-charcoal">
                    Color: {selectedColor || initialColor}
                  </label>
                </div>
                <div className="flex gap-3">
                  {product.colors.map((color) => (
                    <motion.button
                      key={color.name}
                      onClick={() => setSelectedColor(color.name)}
                      className={`w-12 h-12 rounded-full border-2 ${
                        (selectedColor || initialColor) === color.name
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

              {/* Size Selection */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="font-semibold text-deep-charcoal">
                    Size: {selectedSize}
                  </label>
                  <button
                    onClick={() => setIsSizeChartOpen(true)}
                    className="text-sm text-royal-purple hover:text-sunset-orange transition-colors"
                  >
                    Size Guide
                  </button>
                </div>
                <div className="flex flex-wrap gap-3">
                  {product.sizes.map((size) => (
                    <motion.button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-6 py-3 rounded-xl border-2 font-semibold transition-colors ${
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

              {/* Quantity */}
              <div>
                <label className="font-semibold text-deep-charcoal block mb-3">
                  Quantity
                </label>
                <div className="flex items-center gap-4">
                  <div className="flex items-center border-2 border-silver-mist rounded-xl">
                    <motion.button
                      onClick={() => setQuantity(q => Math.max(1, q - 1))}
                      className="w-12 h-12 flex items-center justify-center text-deep-charcoal hover:bg-cloud-gray transition-colors rounded-l-xl"
                      whileTap={{ scale: 0.9 }}
                    >
                      -
                    </motion.button>
                    <span className="w-16 text-center font-semibold text-lg">{quantity}</span>
                    <motion.button
                      onClick={() => setQuantity(q => q + 1)}
                      className="w-12 h-12 flex items-center justify-center text-deep-charcoal hover:bg-cloud-gray transition-colors rounded-r-xl"
                      whileTap={{ scale: 0.9 }}
                    >
                      +
                    </motion.button>
                  </div>
                  
                  {product.inStock ? (
                    <span className="flex items-center gap-2 text-emerald-success">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      In Stock
                    </span>
                  ) : (
                    <span className="text-red-500">Out of Stock</span>
                  )}
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-4">
                <Button onClick={handleAddToCart} className="flex-1" size="lg">
                  Add to Cart - ${(product.price * quantity).toFixed(2)}
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

              {/* Shipping Info */}
              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-cloud-gray">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blush-pink rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-royal-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-deep-charcoal text-sm">Free Shipping</p>
                    <p className="text-xs text-slate">On orders $50+</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blush-pink rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-royal-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-deep-charcoal text-sm">Easy Returns</p>
                    <p className="text-xs text-slate">30 day return policy</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Tabs */}
        <div className="mt-16">
          <div className="border-b border-cloud-gray">
            <div className="flex gap-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`pb-4 font-semibold transition-colors relative ${
                    activeTab === tab.id ? 'text-royal-purple' : 'text-slate hover:text-deep-charcoal'
                  }`}
                >
                  {tab.label}
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-royal-purple to-sunset-orange"
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="py-8">
            {activeTab === 'description' && (
              <FadeIn>
                <div className="prose max-w-none">
                  <p className="text-slate leading-relaxed">
                    {product.description}
                  </p>
                  <p className="text-slate leading-relaxed mt-4">
                    Our plus-size clothing is designed with your comfort and confidence in mind. 
                    We use premium fabrics that feel great against your skin and are built to last. 
                    Each piece is thoughtfully designed to flatter your figure while providing 
                    all-day comfort.
                  </p>
                </div>
              </FadeIn>
            )}
            
            {activeTab === 'details' && (
              <FadeIn>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold text-deep-charcoal mb-4">Product Details</h3>
                    <ul className="space-y-2 text-slate">
                      <li>• Premium quality fabric blend</li>
                      <li>• Relaxed, comfortable fit</li>
                      <li>• Machine washable</li>
                      <li>• Imported</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-deep-charcoal mb-4">Care Instructions</h3>
                    <ul className="space-y-2 text-slate">
                      <li>• Machine wash cold with like colors</li>
                      <li>• Tumble dry low</li>
                      <li>• Do not bleach</li>
                      <li>• Iron on low heat if needed</li>
                    </ul>
                  </div>
                </div>
              </FadeIn>
            )}
            
            {activeTab === 'reviews' && (
              <FadeIn>
                <div className="text-center py-8">
                  <p className="text-slate">Customer reviews coming soon!</p>
                </div>
              </FadeIn>
            )}
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <FadeIn>
              <h2 className="text-2xl font-bold font-poppins text-deep-charcoal mb-8">
                You May Also Like
              </h2>
            </FadeIn>
            <ProductGrid products={relatedProducts} columns={4} />
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
