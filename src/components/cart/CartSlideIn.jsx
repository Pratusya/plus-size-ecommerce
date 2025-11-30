import { motion, AnimatePresence } from 'framer-motion';
import { useUI } from '../../context/UIContext';
import { useCart } from '../../context/CartContext';
import CartItem from './CartItem';
import CartSummary from './CartSummary';

const CartSlideIn = () => {
  const { isCartOpen, closeCart } = useUI();
  const { items, getCartTotal, getCartCount } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 bg-midnight/60 backdrop-blur-sm z-50"
          />

          {/* Cart Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-white z-50 shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-cloud-gray">
              <div className="flex items-center gap-3">
                <h2 className="text-xl font-bold font-poppins text-deep-charcoal">
                  Shopping Cart
                </h2>
                <AnimatePresence>
                  {getCartCount() > 0 && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      className="px-2 py-1 bg-sunset-orange text-white text-sm font-semibold rounded-full"
                    >
                      {getCartCount()}
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
              <motion.button
                onClick={closeCart}
                className="p-2 rounded-full hover:bg-cloud-gray transition-colors"
                whileHover={{ rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="w-6 h-6 text-slate" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col items-center justify-center h-full text-center"
                >
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <svg className="w-24 h-24 text-silver-mist mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                  </motion.div>
                  <h3 className="text-lg font-semibold text-deep-charcoal mb-2">
                    Your cart is empty
                  </h3>
                  <p className="text-slate mb-4">
                    Looks like you haven&apos;t added anything yet
                  </p>
                  <motion.button
                    onClick={closeCart}
                    className="px-6 py-3 bg-gradient-to-r from-sunset-orange to-rose-gold text-white font-semibold rounded-xl"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Start Shopping
                  </motion.button>
                </motion.div>
              ) : (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={{
                    visible: {
                      transition: {
                        staggerChildren: 0.1
                      }
                    }
                  }}
                  className="space-y-4"
                >
                  {items.map((item, index) => (
                    <CartItem key={`${item.id}-${item.selectedSize}-${item.selectedColor}`} item={item} index={index} />
                  ))}
                </motion.div>
              )}
            </div>

            {/* Summary */}
            {items.length > 0 && (
              <CartSummary total={getCartTotal()} />
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartSlideIn;
