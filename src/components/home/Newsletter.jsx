import { useState } from 'react';
import Button from '../common/Button';
import { isValidEmail } from '../../utils/helpers';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(''); // 'success', 'error', ''
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!email) {
      setStatus('error');
      setMessage('Please enter your email address.');
      return;
    }

    if (!isValidEmail(email)) {
      setStatus('error');
      setMessage('Please enter a valid email address.');
      return;
    }

    // Simulate subscription
    setStatus('success');
    setMessage('Thank you for subscribing! Check your inbox for exclusive offers.');
    setEmail('');
    
    // Reset after 5 seconds
    setTimeout(() => {
      setStatus('');
      setMessage('');
    }, 5000);
  };

  return (
    <section className="py-16 md:py-24 bg-deep-teal">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="max-w-2xl mx-auto text-center">
          {/* Content */}
          <h2 className="text-3xl md:text-4xl font-bold text-white font-montserrat mb-4">
            Join the CurvyChic Family
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Be the first to know about new arrivals, exclusive offers, and body-positive inspiration. 
            Plus, get 15% off your first order!
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-grow px-4 py-3 rounded-lg border-2 border-transparent focus:border-warm-coral focus:outline-none text-charcoal"
              aria-label="Email address"
            />
            <Button type="submit" variant="coral">
              Subscribe
            </Button>
          </form>

          {/* Status Message */}
          {message && (
            <p
              className={`mt-4 text-sm ${
                status === 'success' ? 'text-success-green' : 'text-warm-coral'
              }`}
            >
              {message}
            </p>
          )}

          {/* Privacy Note */}
          <p className="mt-6 text-white/60 text-xs">
            By subscribing, you agree to receive marketing emails. You can unsubscribe at any time. 
            We respect your privacy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
