import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useUI } from '../../context/UIContext';

const MobileMenu = () => {
  const { isMobileMenuOpen, closeMobileMenu } = useUI();
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Women', path: '/women' },
    { name: 'Men', path: '/men' },
    { name: 'Kids', path: '/kids' },
    { name: 'Sale', path: '/sale' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Size Guide', path: '/size-guide' },
    { name: 'FAQ', path: '/faq' }
  ];

  const menuVariants = {
    closed: {
      x: '100%',
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40
      }
    },
    open: {
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40
      }
    }
  };

  const linkVariants = {
    closed: { opacity: 0, x: 20 },
    open: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1
      }
    })
  };

  return (
    <AnimatePresence>
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeMobileMenu}
            className="fixed inset-0 bg-midnight/60 backdrop-blur-sm z-50 lg:hidden"
          />

          {/* Menu Panel */}
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed top-0 right-0 bottom-0 w-80 max-w-full bg-white z-50 lg:hidden shadow-2xl"
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-cloud-gray">
                <span className="text-xl font-bold font-poppins">
                  <span className="gradient-text">CURVY</span>
                  <span className="text-deep-charcoal">STYLE</span>
                </span>
                <motion.button
                  onClick={closeMobileMenu}
                  className="p-2 rounded-full hover:bg-cloud-gray transition-colors"
                  whileHover={{ rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg className="w-6 h-6 text-deep-charcoal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.button>
              </div>

              {/* Navigation Links */}
              <nav className="flex-1 overflow-y-auto py-4">
                <ul className="space-y-1 px-4">
                  {navLinks.map((link, i) => (
                    <motion.li
                      key={link.name}
                      custom={i}
                      variants={linkVariants}
                    >
                      <Link
                        to={link.path}
                        onClick={closeMobileMenu}
                        className={`block py-3 px-4 rounded-xl text-lg font-medium transition-colors ${
                          location.pathname === link.path
                            ? 'bg-blush-pink text-royal-purple'
                            : 'text-deep-charcoal hover:bg-cloud-gray'
                        }`}
                      >
                        {link.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              {/* Footer */}
              <div className="p-4 border-t border-cloud-gray">
                <Link
                  to="/wishlist"
                  onClick={closeMobileMenu}
                  className="flex items-center gap-3 py-3 px-4 rounded-xl text-deep-charcoal hover:bg-cloud-gray transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  Wishlist
                </Link>
                
                <div className="mt-4 flex gap-4">
                  {['Instagram', 'Facebook', 'Twitter'].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="p-2 rounded-full bg-cloud-gray text-deep-charcoal hover:bg-royal-purple hover:text-white transition-colors"
                    >
                      <span className="sr-only">{social}</span>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
