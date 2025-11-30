import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FadeIn from '../components/animations/FadeIn';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const faqCategories = [
    {
      category: 'Orders & Shipping',
      faqs: [
        {
          question: 'How long does shipping take?',
          answer: 'Standard shipping takes 5-7 business days. Express shipping takes 2-3 business days. Orders placed before 2 PM EST ship same day!'
        },
        {
          question: 'Do you offer free shipping?',
          answer: 'Yes! We offer free standard shipping on all orders over $50. This applies to all US orders.'
        },
        {
          question: 'Can I track my order?',
          answer: 'Absolutely! Once your order ships, you\'ll receive an email with tracking information. You can also track your order in your account dashboard.'
        },
        {
          question: 'Do you ship internationally?',
          answer: 'Yes, we ship to over 15 countries worldwide. International shipping rates and delivery times vary by location.'
        }
      ]
    },
    {
      category: 'Returns & Exchanges',
      faqs: [
        {
          question: 'What is your return policy?',
          answer: 'We offer a 30-day return policy on all unworn items with original tags attached. Simply initiate a return through your account or contact customer service.'
        },
        {
          question: 'How do I exchange an item?',
          answer: 'The easiest way to exchange is to return the original item for a refund and place a new order. This ensures you get your new size/color quickly!'
        },
        {
          question: 'When will I receive my refund?',
          answer: 'Refunds are processed within 3-5 business days of receiving your return. It may take an additional 5-10 days for the refund to appear in your account.'
        }
      ]
    },
    {
      category: 'Sizing & Fit',
      faqs: [
        {
          question: 'How do I find my size?',
          answer: 'Check out our detailed Size Guide page for measurements and tips. If you\'re between sizes, we recommend sizing up for a more comfortable fit.'
        },
        {
          question: 'What size range do you offer?',
          answer: 'We offer sizes 2XL through 6XL for adults, and sizes 8-18 for kids. Our goal is to provide stylish options for everyone!'
        },
        {
          question: 'Do your clothes run true to size?',
          answer: 'Our clothes are designed to be true to size with a comfortable, relaxed fit. Each product page includes specific fit notes.'
        }
      ]
    },
    {
      category: 'Payment & Security',
      faqs: [
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept all major credit cards (Visa, Mastercard, American Express, Discover), PayPal, and Apple Pay.'
        },
        {
          question: 'Is my payment information secure?',
          answer: 'Absolutely! We use industry-standard SSL encryption and never store your full credit card information. All payments are processed securely through Stripe.'
        },
        {
          question: 'Do you offer payment plans?',
          answer: 'Yes! We partner with Afterpay and Klarna to offer flexible payment options. Split your purchase into 4 interest-free payments.'
        }
      ]
    }
  ];

  const filteredFaqs = faqCategories.map(category => ({
    ...category,
    faqs: category.faqs.filter(faq => 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.faqs.length > 0);

  const toggleFaq = (categoryIndex, faqIndex) => {
    const key = `${categoryIndex}-${faqIndex}`;
    setOpenIndex(openIndex === key ? null : key);
  };

  return (
    <div className="pt-24 pb-16 min-h-screen bg-snow-white">
      {/* Hero */}
      <section className="bg-gradient-to-r from-royal-purple to-sunset-orange py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold font-poppins text-white mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
              Find answers to common questions about orders, shipping, returns, and more
            </p>
            
            {/* Search */}
            <div className="max-w-md mx-auto relative">
              <input
                type="text"
                placeholder="Search questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 pl-12 rounded-xl border-2 border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder:text-white/60 focus:outline-none focus:border-white"
              />
              <svg
                className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/60"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-slate text-lg">No results found for &quot;{searchQuery}&quot;</p>
            </div>
          ) : (
            filteredFaqs.map((category, categoryIndex) => (
              <FadeIn key={categoryIndex} delay={categoryIndex * 0.1} className="mb-10">
                <h2 className="text-2xl font-bold font-poppins text-deep-charcoal mb-6">
                  {category.category}
                </h2>
                <div className="space-y-4">
                  {category.faqs.map((faq, faqIndex) => {
                    const key = `${categoryIndex}-${faqIndex}`;
                    const isOpen = openIndex === key;
                    
                    return (
                      <motion.div
                        key={faqIndex}
                        className="bg-white rounded-xl card-shadow overflow-hidden"
                        initial={false}
                      >
                        <button
                          onClick={() => toggleFaq(categoryIndex, faqIndex)}
                          className="w-full flex items-center justify-between p-6 text-left"
                        >
                          <span className="font-semibold text-deep-charcoal pr-4">
                            {faq.question}
                          </span>
                          <motion.svg
                            className="w-5 h-5 text-royal-purple flex-shrink-0"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </motion.svg>
                        </button>
                        
                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              <div className="px-6 pb-6 text-slate">
                                {faq.answer}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  })}
                </div>
              </FadeIn>
            ))
          )}

          {/* Still need help */}
          <FadeIn className="mt-12">
            <div className="bg-blush-pink rounded-2xl p-8 text-center">
              <h2 className="text-xl font-bold font-poppins text-deep-charcoal mb-2">
                Still have questions?
              </h2>
              <p className="text-slate mb-6">
                Our customer support team is here to help!
              </p>
              <motion.a
                href="/contact"
                className="inline-block px-8 py-3 bg-gradient-to-r from-royal-purple to-sunset-orange text-white font-semibold rounded-xl"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Contact Us
              </motion.a>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
