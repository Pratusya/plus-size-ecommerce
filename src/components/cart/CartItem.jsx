import { motion } from 'framer-motion';
import { useCart } from '../../context/CartContext';
import { useUI } from '../../context/UIContext';

const CartItem = ({ item, index }) => {
  const { updateQuantity, removeFromCart } = useCart();
  const { addToast } = useUI();

  const handleRemove = () => {
    removeFromCart(index);
    addToast(`${item.name} removed from cart`, 'info');
  };

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity < 1) {
      handleRemove();
      return;
    }
    updateQuantity(index, newQuantity);
  };

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, x: 20 },
        visible: { opacity: 1, x: 0 }
      }}
      exit={{ opacity: 0, x: -100 }}
      className="flex gap-4 p-4 bg-cloud-gray rounded-xl"
    >
      {/* Image */}
      <div className="w-20 h-24 rounded-lg overflow-hidden flex-shrink-0 bg-white">
        <img
          src={item.images[0]}
          alt={item.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Details */}
      <div className="flex-1 min-w-0">
        <h4 className="font-semibold text-deep-charcoal truncate">
          {item.name}
        </h4>
        <p className="text-sm text-slate">
          {item.selectedSize} / {item.selectedColor}
        </p>
        <p className="text-royal-purple font-bold mt-1">
          ${item.price.toFixed(2)}
        </p>

        {/* Quantity Controls */}
        <div className="flex items-center gap-2 mt-2">
          <motion.button
            onClick={() => handleQuantityChange(item.quantity - 1)}
            className="w-7 h-7 rounded-md bg-white border border-silver-mist flex items-center justify-center text-deep-charcoal"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            -
          </motion.button>
          <motion.span
            key={item.quantity}
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            className="w-8 text-center font-semibold"
          >
            {item.quantity}
          </motion.span>
          <motion.button
            onClick={() => handleQuantityChange(item.quantity + 1)}
            className="w-7 h-7 rounded-md bg-white border border-silver-mist flex items-center justify-center text-deep-charcoal"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            +
          </motion.button>
        </div>
      </div>

      {/* Remove Button */}
      <motion.button
        onClick={handleRemove}
        className="self-start p-2 text-slate hover:text-red-500 transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Remove item"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      </motion.button>
    </motion.div>
  );
};

export default CartItem;
