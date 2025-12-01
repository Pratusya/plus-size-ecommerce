import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { formatPrice } from '../../utils/helpers';

const CartSummary = ({ onClose }) => {
  const { getCartTotal } = useCart();
  const subtotal = getCartTotal();
  const shipping = subtotal >= 75 ? 0 : 7.99;
  const total = subtotal + shipping;

  return (
    <div className="border-t border-soft-gray px-6 py-4 bg-white">
      {/* Subtotal */}
      <div className="space-y-2 mb-4">
        <div className="flex justify-between text-sm">
          <span className="text-medium-gray">Subtotal</span>
          <span className="text-charcoal font-medium">{formatPrice(subtotal)}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-medium-gray">Shipping</span>
          <span className="text-charcoal font-medium">
            {shipping === 0 ? (
              <span className="text-success-green">FREE</span>
            ) : (
              formatPrice(shipping)
            )}
          </span>
        </div>
        {shipping > 0 && (
          <p className="text-xs text-medium-gray">
            Add {formatPrice(75 - subtotal)} more for free shipping
          </p>
        )}
      </div>

      {/* Total */}
      <div className="flex justify-between items-center py-3 border-t border-soft-gray mb-4">
        <span className="text-lg font-semibold text-charcoal">Total</span>
        <span className="text-xl font-bold text-deep-teal">{formatPrice(total)}</span>
      </div>

      {/* Buttons */}
      <div className="space-y-3">
        <button
          className="w-full py-3 bg-warm-coral text-white font-semibold rounded-lg hover:bg-warm-coral/90 transition-colors btn-cart"
          onClick={() => alert('Checkout functionality would go here!')}
        >
          Proceed to Checkout
        </button>
        <button
          onClick={onClose}
          className="w-full py-3 bg-transparent border border-deep-teal text-deep-teal font-semibold rounded-lg hover:bg-deep-teal hover:text-white transition-colors"
        >
          Continue Shopping
        </button>
      </div>

      {/* Trust Badges */}
      <div className="mt-4 pt-4 border-t border-soft-gray">
        <div className="flex items-center justify-center gap-4 text-xs text-medium-gray">
          <div className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
            Secure Checkout
          </div>
          <div className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
            Easy Returns
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartSummary;
