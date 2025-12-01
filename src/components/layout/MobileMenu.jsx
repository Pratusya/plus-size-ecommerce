import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const MobileMenu = ({ isOpen, onClose, navLinks }) => {
  const location = useLocation();

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
        className={`fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 lg:hidden ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-in Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-80 max-w-[85vw] bg-white z-50 transform transition-transform duration-300 ease-out lg:hidden ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-soft-gray">
          <Link
            to="/"
            onClick={onClose}
            className="text-2xl font-bold font-montserrat text-deep-teal"
          >
            <span className="text-warm-coral">Curvy</span>Chic
          </Link>
          <button
            onClick={onClose}
            className="p-2 text-charcoal hover:text-deep-teal transition-colors"
            aria-label="Close menu"
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

        {/* Navigation Links */}
        <nav className="px-6 py-6">
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.href}
                  onClick={onClose}
                  className={`block py-3 px-4 text-lg font-medium rounded-lg transition-colors ${
                    location.pathname === link.href
                      ? 'bg-soft-cream text-deep-teal'
                      : 'text-charcoal hover:bg-light-gray hover:text-deep-teal'
                  } ${link.name === 'Sale' ? 'text-warm-coral' : ''}`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Divider */}
          <div className="my-6 border-t border-soft-gray" />

          {/* Additional Links */}
          <ul className="space-y-2">
            <li>
              <Link
                to="/about"
                onClick={onClose}
                className="block py-3 px-4 text-base text-medium-gray hover:text-deep-teal transition-colors"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/size-guide"
                onClick={onClose}
                className="block py-3 px-4 text-base text-medium-gray hover:text-deep-teal transition-colors"
              >
                Size Guide
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={onClose}
                className="block py-3 px-4 text-base text-medium-gray hover:text-deep-teal transition-colors"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                to="/faq"
                onClick={onClose}
                className="block py-3 px-4 text-base text-medium-gray hover:text-deep-teal transition-colors"
              >
                FAQ
              </Link>
            </li>
          </ul>
        </nav>

        {/* Bottom Section */}
        <div className="absolute bottom-0 left-0 right-0 px-6 py-4 border-t border-soft-gray bg-light-gray">
          <p className="text-sm text-medium-gray text-center">
            Free shipping on orders over $75
          </p>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
