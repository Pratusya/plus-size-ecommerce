import { Link } from 'react-router-dom';
import { useWishlist } from '../context/WishlistContext';
import { formatPrice } from '../utils/helpers';
import Button from '../components/common/Button';

const Wishlist = () => {
  const { items, removeFromWishlist, clearWishlist } = useWishlist();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-white">
        <section className="py-12 md:py-16 bg-soft-cream">
          <div className="max-w-[1400px] mx-auto px-4 md:px-8 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal font-montserrat mb-4">
              My Wishlist
            </h1>
          </div>
        </section>

        <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-16 text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-24 w-24 mx-auto text-soft-gray mb-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
          <h2 className="text-2xl font-bold text-charcoal mb-4">Your wishlist is empty</h2>
          <p className="text-medium-gray mb-8 max-w-md mx-auto">
            Start adding items you love to your wishlist. Click the heart icon on any product to save it for later.
          </p>
          <Link to="/women">
            <Button variant="coral" size="lg">
              Start Shopping
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-12 md:py-16 bg-soft-cream">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal font-montserrat mb-4">
            My Wishlist
          </h1>
          <p className="text-medium-gray text-lg">
            {items.length} item{items.length !== 1 ? 's' : ''} saved
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          {/* Clear All Button */}
          <div className="flex justify-end mb-6">
            <button
              onClick={clearWishlist}
              className="text-sm text-warm-coral hover:underline"
            >
              Clear All
            </button>
          </div>

          {/* Wishlist Items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-soft-gray rounded-xl overflow-hidden product-card"
              >
                <Link to={`/product/${item.id}`} className="block relative aspect-[3/4]">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </Link>

                <div className="p-4">
                  <p className="text-xs text-medium-gray uppercase tracking-wider mb-1 capitalize">
                    {item.category}
                  </p>
                  <Link to={`/product/${item.id}`}>
                    <h3 className="text-base font-semibold text-charcoal hover:text-deep-teal transition-colors line-clamp-1">
                      {item.name}
                    </h3>
                  </Link>

                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-lg font-bold text-deep-teal">
                      {formatPrice(item.salePrice || item.price)}
                    </span>
                    {item.salePrice && (
                      <span className="text-sm text-medium-gray line-through">
                        {formatPrice(item.price)}
                      </span>
                    )}
                  </div>

                  <div className="flex gap-2 mt-4">
                    <Link to={`/product/${item.id}`} className="flex-grow">
                      <Button variant="coral" fullWidth>
                        View Product
                      </Button>
                    </Link>
                    <button
                      onClick={() => removeFromWishlist(item.id)}
                      className="p-2 border border-soft-gray rounded-lg text-medium-gray hover:text-warm-coral hover:border-warm-coral transition-colors"
                      aria-label="Remove from wishlist"
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
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Wishlist;
