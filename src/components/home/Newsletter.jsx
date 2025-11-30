import { useState } from 'react';
import { motion } from 'framer-motion';
import FadeIn from '../animations/FadeIn';
import Button from '../common/Button';
import { useUI } from '../../context/UIContext';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { addToast } = useUI();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      addToast('Please enter your email', 'warning');
      return;
    }
    // Simulate subscription
    setIsSubmitted(true);
    addToast('Successfully subscribed!', 'success');
    setEmail('');
  };

  return (
    <section className="py-16 lg:py-24 bg-cloud-gray relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236B5B95' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          className="bg-white rounded-3xl p-8 md:p-12 card-shadow relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Decorative Elements */}
          <motion.div
            className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-royal-purple/10 to-sunset-orange/10 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          />
          <motion.div
            className="absolute -bottom-16 -left-16 w-48 h-48 bg-gradient-to-br from-sunset-orange/10 to-rose-gold/10 rounded-full"
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10">
            <FadeIn>
              <span className="text-sunset-orange font-semibold uppercase tracking-wide">
                Join the Community
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-poppins text-deep-charcoal mt-2 mb-4">
                Get <span className="gradient-text">20% Off</span> Your First Order
              </h2>
              <p className="text-slate mb-6">
                Subscribe to our newsletter for exclusive offers, new arrivals, 
                and style tips delivered straight to your inbox.
              </p>

              {/* Benefits */}
              <div className="flex flex-wrap gap-4">
                {[
                  'Exclusive Discounts',
                  'Early Access',
                  'Style Tips',
                  'Free Shipping Codes'
                ].map((benefit, index) => (
                  <motion.span
                    key={index}
                    className="flex items-center gap-2 text-sm text-deep-charcoal"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <svg className="w-5 h-5 text-emerald-success" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {benefit}
                  </motion.span>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center p-8 bg-blush-pink rounded-2xl"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', delay: 0.2 }}
                    className="w-16 h-16 bg-emerald-success rounded-full flex items-center justify-center mx-auto mb-4"
                  >
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </motion.div>
                  <h3 className="text-xl font-semibold text-deep-charcoal mb-2">
                    You&apos;re on the list!
                  </h3>
                  <p className="text-slate">
                    Check your email for your 20% discount code.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full px-6 py-4 rounded-xl border-2 border-silver-mist focus:border-royal-purple focus:outline-none text-lg"
                    />
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    Subscribe & Get 20% Off
                  </Button>
                  <p className="text-xs text-slate text-center">
                    By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
                  </p>
                </form>
              )}
            </FadeIn>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
