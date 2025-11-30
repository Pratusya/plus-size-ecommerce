import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import CartItem from './CartItem';
import CartSummary from './CartSummary';

const CartSlideIn = () => {
  const { items, isOpen, closeCart } = useCart();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Slide-in Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-full md:w-[420px] bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-soft-gray">
            <h2 className="text-xl font-semibold font-montserrat text-charcoal">
              Shopping Cart ({items.length})
            </h2>
            <button
              onClick={closeCart}
              className="p-2 text-medium-gray hover:text-charcoal hover:bg-light-gray rounded-lg transition-colors"
              aria-label="Close cart"
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

          {/* Cart Content */}
          {items.length === 0 ? (
            <div className="flex-grow flex flex-col items-center justify-center px-6 py-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-20 w-20 text-soft-gray mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
              <h3 className="text-lg font-medium text-charcoal mb-2">
                Your cart is empty
              </h3>
              <p className="text-medium-gray text-center mb-6">
                Looks like you haven&apos;t added anything to your cart yet.
              </p>
              <Link
                to="/women"
                onClick={closeCart}
                className="px-6 py-3 bg-deep-teal text-white font-semibold rounded-lg hover:bg-deep-teal/90 transition-colors"
              >
                Start Shopping
              </Link>
            </div>
          ) : (
            <>
              {/* Cart Items */}
              <div className="flex-grow overflow-y-auto px-6 py-4">
                <div className="space-y-4">
                  {items.map((item, index) => (
                    <CartItem key={`${item.id}-${item.selectedColor}-${item.selectedSize}`} item={item} index={index} />
                  ))}
                </div>
              </div>

              {/* Cart Summary */}
              <CartSummary onClose={closeCart} />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default CartSlideIn;
