
import FadeIn from '../components/animations/FadeIn';

const ShippingReturns = () => {
  const shippingOptions = [
    {
      name: 'Standard Shipping',
      time: '5-7 business days',
      price: '$5.99',
      freeAbove: '$50',
      icon: '📦'
    },
    {
      name: 'Express Shipping',
      time: '2-3 business days',
      price: '$12.99',
      freeAbove: '$100',
      icon: '🚀'
    },
    {
      name: 'Next Day Delivery',
      time: '1 business day',
      price: '$24.99',
      freeAbove: null,
      icon: '⚡'
    }
  ];

  const returnSteps = [
    {
      step: 1,
      title: 'Initiate Return',
      description: 'Log in to your account and start a return request, or contact customer service.'
    },
    {
      step: 2,
      title: 'Pack Your Items',
      description: 'Place items in original packaging with tags attached. Include return slip.'
    },
    {
      step: 3,
      title: 'Ship It Back',
      description: 'Use the prepaid label provided or ship to our return center.'
    },
    {
      step: 4,
      title: 'Get Refunded',
      description: 'Refunds processed within 3-5 business days of receiving your return.'
    }
  ];

  return (
    <div className="pt-24 pb-16 min-h-screen bg-snow-white">
      {/* Hero */}
      <section className="bg-gradient-to-r from-royal-purple to-sunset-orange py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold font-poppins text-white mb-4">
              Shipping & Returns
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Fast shipping, easy returns. Shop with confidence.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Shipping Options */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-12">
            <h2 className="text-3xl font-bold font-poppins text-deep-charcoal">
              Shipping <span className="gradient-text">Options</span>
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {shippingOptions.map((option, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <motion.div
                  className="bg-white rounded-2xl p-8 card-shadow text-center"
                  whileHover={{ y: -8 }}
                >
                  <span className="text-5xl">{option.icon}</span>
                  <h3 className="text-xl font-semibold font-poppins text-deep-charcoal mt-4 mb-2">
                    {option.name}
                  </h3>
                  <p className="text-slate mb-4">{option.time}</p>
                  <p className="text-2xl font-bold text-royal-purple mb-2">{option.price}</p>
                  {option.freeAbove && (
                    <p className="text-sm text-emerald-success">
                      Free on orders over {option.freeAbove}
                    </p>
                  )}
                </motion.div>
              </FadeIn>
            ))}
          </div>

          {/* Shipping Info */}
          <FadeIn className="mt-12">
            <div className="bg-blush-pink rounded-2xl p-8">
              <h3 className="text-xl font-bold font-poppins text-deep-charcoal mb-4">
                Shipping Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-slate">
                <div>
                  <h4 className="font-semibold text-deep-charcoal mb-2">Processing Time</h4>
                  <p>Orders placed before 2 PM EST ship same day. Orders placed after 2 PM ship next business day.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-deep-charcoal mb-2">International Shipping</h4>
                  <p>We ship to over 15 countries. International rates calculated at checkout.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-deep-charcoal mb-2">Tracking</h4>
                  <p>All orders include tracking. You&apos;ll receive an email with tracking info once shipped.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-deep-charcoal mb-2">P.O. Boxes</h4>
                  <p>We ship to P.O. boxes via USPS. Some restrictions may apply for large packages.</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Returns */}
      <section className="py-16 bg-cloud-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-12">
            <h2 className="text-3xl font-bold font-poppins text-deep-charcoal">
              Easy <span className="gradient-text">Returns</span>
            </h2>
            <p className="text-slate mt-4 max-w-2xl mx-auto">
              Not happy with your purchase? No problem! We offer a hassle-free 30-day return policy.
            </p>
          </FadeIn>

          {/* Return Steps */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            {returnSteps.map((step, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <motion.div
                  className="relative"
                  whileHover={{ y: -5 }}
                >
                  <div className="bg-white rounded-2xl p-6 card-shadow text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-royal-purple to-sunset-orange rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                      {step.step}
                    </div>
                    <h3 className="font-semibold text-deep-charcoal mb-2">{step.title}</h3>
                    <p className="text-sm text-slate">{step.description}</p>
                  </div>
                  {index < returnSteps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                      <svg className="w-6 h-6 text-sunset-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  )}
                </motion.div>
              </FadeIn>
            ))}
          </div>

          {/* Return Policy Details */}
          <FadeIn>
            <div className="bg-white rounded-2xl p-8 card-shadow">
              <h3 className="text-xl font-bold font-poppins text-deep-charcoal mb-6">
                Return Policy Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-deep-charcoal mb-3 flex items-center gap-2">
                    <span className="text-emerald-success">✓</span> Eligible for Return
                  </h4>
                  <ul className="space-y-2 text-slate">
                    <li>• Items returned within 30 days of delivery</li>
                    <li>• Unworn, unwashed items</li>
                    <li>• Items with original tags attached</li>
                    <li>• Items in original packaging</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-deep-charcoal mb-3 flex items-center gap-2">
                    <span className="text-red-500">✗</span> Not Eligible for Return
                  </h4>
                  <ul className="space-y-2 text-slate">
                    <li>• Final sale items</li>
                    <li>• Underwear and swimwear (for hygiene)</li>
                    <li>• Items returned after 30 days</li>
                    <li>• Items showing signs of wear</li>
                  </ul>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Refund Info */}
          <FadeIn className="mt-8">
            <div className="bg-white rounded-2xl p-8 card-shadow">
              <h3 className="text-xl font-bold font-poppins text-deep-charcoal mb-4">
                Refund Information
              </h3>
              <div className="space-y-4 text-slate">
                <p>
                  <strong className="text-deep-charcoal">Processing Time:</strong> Refunds are processed within 3-5 business days of receiving your return.
                </p>
                <p>
                  <strong className="text-deep-charcoal">Refund Method:</strong> Refunds are issued to the original payment method used for purchase.
                </p>
                <p>
                  <strong className="text-deep-charcoal">Shipping Costs:</strong> Original shipping costs are non-refundable unless the return is due to our error.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Need Help */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center">
            <div className="bg-gradient-to-r from-royal-purple to-sunset-orange rounded-2xl p-8 text-white">
              <h2 className="text-2xl font-bold font-poppins mb-4">
                Need Help with Your Order?
              </h2>
              <p className="mb-6 text-white/80">
                Our customer service team is here to assist you Monday - Friday, 9 AM - 8 PM EST
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="/contact"
                  className="px-8 py-3 bg-white text-royal-purple font-semibold rounded-xl"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Contact Us
                </motion.a>
                <motion.a
                  href="/faq"
                  className="px-8 py-3 border-2 border-white text-white font-semibold rounded-xl"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View FAQ
                </motion.a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default ShippingReturns;
