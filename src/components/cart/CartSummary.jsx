import { useState } from 'react';
import { motion } from 'framer-motion';
import { useUI } from '../../context/UIContext';
import Button from '../common/Button';

const CartSummary = ({ total }) => {
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [promoApplied, setPromoApplied] = useState(false);
  const { addToast, closeCart } = useUI();

  const shipping = total >= 50 ? 0 : 5.99;
  const finalTotal = total - discount + shipping;

  const handleApplyPromo = () => {
    if (promoCode.toUpperCase() === 'SAVE10') {
      const discountAmount = total * 0.1;
      setDiscount(discountAmount);
      setPromoApplied(true);
      addToast('Promo code applied! 10% off', 'success');
    } else if (promoCode.toUpperCase() === 'WELCOME20') {
      const discountAmount = total * 0.2;
      setDiscount(discountAmount);
      setPromoApplied(true);
      addToast('Promo code applied! 20% off', 'success');
    } else {
      addToast('Invalid promo code', 'error');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="border-t border-cloud-gray p-6 bg-white"
    >
      {/* Promo Code */}
      <div className="mb-4">
        <div className="flex gap-2">
          <input
            type="text"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
            placeholder="Promo code"
            disabled={promoApplied}
            className="flex-1 px-4 py-2 border-2 border-silver-mist rounded-xl focus:border-royal-purple focus:outline-none disabled:bg-gray-100"
          />
          <motion.button
            onClick={handleApplyPromo}
            disabled={promoApplied || !promoCode}
            className="px-4 py-2 bg-royal-purple text-white font-semibold rounded-xl disabled:opacity-50"
            whileHover={{ scale: promoApplied ? 1 : 1.02 }}
            whileTap={{ scale: promoApplied ? 1 : 0.98 }}
          >
            {promoApplied ? 'Applied' : 'Apply'}
          </motion.button>
        </div>
        {promoApplied && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm text-emerald-success mt-1"
          >
            ✓ Promo code applied
          </motion.p>
        )}
      </div>

      {/* Summary */}
      <div className="space-y-2 mb-4">
        <div className="flex justify-between text-slate">
          <span>Subtotal</span>
          <span>${total.toFixed(2)}</span>
        </div>
        {discount > 0 && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="flex justify-between text-emerald-success"
          >
            <span>Discount</span>
            <span>-${discount.toFixed(2)}</span>
          </motion.div>
        )}
        <div className="flex justify-between text-slate">
          <span>Shipping</span>
          <span>{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
        </div>
        {shipping > 0 && (
          <p className="text-xs text-royal-purple">
            Add ${(50 - total).toFixed(2)} more for free shipping!
          </p>
        )}
        <div className="flex justify-between text-lg font-bold text-deep-charcoal pt-2 border-t border-cloud-gray">
          <span>Total</span>
          <motion.span
            key={finalTotal}
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
          >
            ${finalTotal.toFixed(2)}
          </motion.span>
        </div>
      </div>

      {/* Checkout Button */}
      <Button
        onClick={() => {
          addToast('Checkout coming soon!', 'info');
          closeCart();
        }}
        className="w-full"
        size="lg"
      >
        Proceed to Checkout
      </Button>

      <p className="text-xs text-slate text-center mt-3">
        Secure checkout powered by Stripe
      </p>
    </motion.div>
  );
};

export default CartSummary;
