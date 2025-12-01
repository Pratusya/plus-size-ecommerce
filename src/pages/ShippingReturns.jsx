import { Link } from 'react-router-dom';

const ShippingReturns = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-12 md:py-16 bg-soft-cream">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal font-montserrat mb-4">
            Shipping & Returns
          </h1>
          <p className="text-medium-gray text-lg max-w-2xl mx-auto">
            Everything you need to know about getting your order and our hassle-free return policy.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="max-w-[900px] mx-auto px-4 md:px-8">
          {/* Shipping Information */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-charcoal font-montserrat mb-6 flex items-center gap-3">
              <span className="w-10 h-10 bg-deep-teal text-white rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
              </span>
              Shipping Information
            </h2>

            <div className="space-y-8">
              {/* Shipping Options */}
              <div className="bg-light-gray rounded-xl p-6">
                <h3 className="font-semibold text-charcoal mb-4">Shipping Options</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-soft-gray">
                    <div>
                      <p className="font-medium text-charcoal">Standard Shipping</p>
                      <p className="text-sm text-medium-gray">5-7 business days</p>
                    </div>
                    <p className="font-semibold text-deep-teal">$7.99</p>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-soft-gray">
                    <div>
                      <p className="font-medium text-charcoal">Express Shipping</p>
                      <p className="text-sm text-medium-gray">2-3 business days</p>
                    </div>
                    <p className="font-semibold text-deep-teal">$14.99</p>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <div>
                      <p className="font-medium text-charcoal">Next Day Shipping</p>
                      <p className="text-sm text-medium-gray">1 business day</p>
                    </div>
                    <p className="font-semibold text-deep-teal">$24.99</p>
                  </div>
                </div>
              </div>

              {/* Free Shipping */}
              <div className="bg-warm-coral/10 border border-warm-coral/20 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-warm-coral" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <h3 className="font-semibold text-charcoal">Free Shipping on Orders $75+</h3>
                </div>
                <p className="text-medium-gray pl-9">
                  Enjoy free standard shipping on all orders of $75 or more within the continental United States.
                  No promo code needed!
                </p>
              </div>

              {/* Processing Time */}
              <div>
                <h3 className="font-semibold text-charcoal mb-3">Processing Time</h3>
                <p className="text-medium-gray">
                  Orders are typically processed within 1-2 business days. During peak seasons (holidays, sales events),
                  processing may take an additional 1-2 days. You&apos;ll receive an email confirmation once your order ships.
                </p>
              </div>

              {/* International Shipping */}
              <div>
                <h3 className="font-semibold text-charcoal mb-3">International Shipping</h3>
                <p className="text-medium-gray mb-3">
                  We ship to select international destinations. Shipping rates and delivery times vary by location.
                  Please note:
                </p>
                <ul className="list-disc list-inside text-medium-gray space-y-2">
                  <li>International orders may be subject to customs duties and import taxes</li>
                  <li>Delivery typically takes 10-21 business days</li>
                  <li>Tracking is available for all international orders</li>
                  <li>Some items may not be available for international shipping</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Returns & Exchanges */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-charcoal font-montserrat mb-6 flex items-center gap-3">
              <span className="w-10 h-10 bg-warm-coral text-white rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </span>
              Returns & Exchanges
            </h2>

            <div className="space-y-8">
              {/* Return Policy Overview */}
              <div className="bg-light-gray rounded-xl p-6">
                <h3 className="font-semibold text-charcoal mb-4">30-Day Return Policy</h3>
                <p className="text-medium-gray mb-4">
                  We want you to love your purchase! If something doesn&apos;t work out, we accept returns within 30 days
                  of delivery for a full refund to your original payment method.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-success-green flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-medium-gray">Items must be unworn with tags attached</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-success-green flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-medium-gray">Items must be in original condition</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-success-green flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-medium-gray">Free return shipping (US orders)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-success-green flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-medium-gray">Refunds processed within 5-7 days</span>
                  </div>
                </div>
              </div>

              {/* How to Return */}
              <div>
                <h3 className="font-semibold text-charcoal mb-4">How to Start a Return</h3>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-deep-teal text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      1
                    </div>
                    <div>
                      <p className="font-medium text-charcoal">Initiate Your Return</p>
                      <p className="text-sm text-medium-gray">
                        Visit our Returns Portal and enter your order number and email address.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-deep-teal text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      2
                    </div>
                    <div>
                      <p className="font-medium text-charcoal">Print Your Label</p>
                      <p className="text-sm text-medium-gray">
                        You&apos;ll receive a prepaid shipping label via email. Print it and attach it to your package.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-deep-teal text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      3
                    </div>
                    <div>
                      <p className="font-medium text-charcoal">Ship It Back</p>
                      <p className="text-sm text-medium-gray">
                        Drop off your package at any authorized shipping location. We recommend keeping your tracking number.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-deep-teal text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      4
                    </div>
                    <div>
                      <p className="font-medium text-charcoal">Receive Your Refund</p>
                      <p className="text-sm text-medium-gray">
                        Once we receive and process your return, you&apos;ll get a confirmation email and your refund will be issued.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Exceptions */}
              <div className="bg-warm-coral/10 border border-warm-coral/20 rounded-xl p-6">
                <h3 className="font-semibold text-charcoal mb-3">Non-Returnable Items</h3>
                <ul className="list-disc list-inside text-medium-gray space-y-1">
                  <li>Final sale items (marked as such on the product page)</li>
                  <li>Swimwear and intimates (for hygiene reasons)</li>
                  <li>Items that have been worn, washed, or altered</li>
                  <li>Items without original tags</li>
                </ul>
              </div>

              {/* Exchanges */}
              <div>
                <h3 className="font-semibold text-charcoal mb-3">Exchanges</h3>
                <p className="text-medium-gray">
                  We don&apos;t offer direct exchanges. Instead, we recommend returning your item for a refund and placing a new
                  order for the size or color you need. This ensures you get your new item as quickly as possible!
                </p>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="text-center p-8 bg-light-gray rounded-xl">
            <h3 className="text-xl font-bold text-charcoal font-montserrat mb-2">
              Need More Help?
            </h3>
            <p className="text-medium-gray mb-4">
              Our customer service team is available to assist with any questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-deep-teal text-white font-semibold rounded-lg hover:bg-deep-teal/90 transition-colors"
              >
                Contact Us
              </Link>
              <Link
                to="/faq"
                className="inline-flex items-center justify-center px-6 py-3 bg-white border border-deep-teal text-deep-teal font-semibold rounded-lg hover:bg-deep-teal hover:text-white transition-colors"
              >
                View FAQ
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShippingReturns;
