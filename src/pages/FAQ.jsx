import { useState } from 'react';

const faqData = [
  {
    category: 'Shipping',
    questions: [
      {
        q: 'How long does shipping take?',
        a: 'Standard shipping typically takes 5-7 business days within the continental US. Express shipping (2-3 business days) is available for an additional fee. International shipping times vary by destination.'
      },
      {
        q: 'Do you offer free shipping?',
        a: 'Yes! We offer free standard shipping on all orders over $75 within the continental United States. No promo code needed – the discount is automatically applied at checkout.'
      },
      {
        q: 'Can I track my order?',
        a: 'Absolutely! Once your order ships, you\'ll receive an email with tracking information. You can also track your order by logging into your account and viewing your order history.'
      },
      {
        q: 'Do you ship internationally?',
        a: 'Yes, we ship to select international destinations. Shipping rates and delivery times vary by location. Please note that international orders may be subject to customs duties and taxes.'
      }
    ]
  },
  {
    category: 'Returns',
    questions: [
      {
        q: 'What is your return policy?',
        a: 'We offer a 30-day return policy for unworn items with tags attached. Items must be in their original condition. Sale items are final sale and cannot be returned.'
      },
      {
        q: 'How do I start a return?',
        a: 'Visit our Returns Portal and enter your order number and email. You\'ll receive a prepaid shipping label. Simply pack your items securely and drop off at any authorized shipping location.'
      },
      {
        q: 'How long do refunds take?',
        a: 'Once we receive your return, please allow 5-7 business days for processing. Refunds will be issued to your original payment method and may take an additional 3-5 business days to appear in your account.'
      },
      {
        q: 'Can I exchange an item?',
        a: 'We recommend returning the item for a refund and placing a new order for the desired size or color. This ensures you get your new item as quickly as possible.'
      }
    ]
  },
  {
    category: 'Sizing',
    questions: [
      {
        q: 'How do I find my size?',
        a: 'We recommend using our Size Guide page to take accurate measurements. Our sizes are designed specifically for plus-size bodies, not just scaled up from straight sizes.'
      },
      {
        q: 'What if I\'m between sizes?',
        a: 'If you\'re between sizes, we generally recommend sizing up for a more comfortable fit. Check the specific product page for fit notes, as some styles run smaller or larger.'
      },
      {
        q: 'Are your sizes true to size?',
        a: 'Yes! Our clothes are designed to fit as expected based on the measurements in our size chart. We test all our garments on plus-size fit models to ensure accurate sizing.'
      },
      {
        q: 'Do you offer petite or tall sizes?',
        a: 'Currently, we offer standard length in all our styles. We\'re working on expanding to include petite and tall options in the future. Sign up for our newsletter to be notified!'
      }
    ]
  },
  {
    category: 'Orders',
    questions: [
      {
        q: 'Can I modify or cancel my order?',
        a: 'We process orders quickly! If you need to make changes, please contact us within 1 hour of placing your order. After that, we may not be able to modify it.'
      },
      {
        q: 'What payment methods do you accept?',
        a: 'We accept all major credit cards (Visa, Mastercard, American Express, Discover), PayPal, Apple Pay, Google Pay, and Shop Pay.'
      },
      {
        q: 'Is my payment information secure?',
        a: 'Absolutely! We use industry-standard SSL encryption to protect your personal and payment information. We never store your full credit card number.'
      },
      {
        q: 'Do you offer gift cards?',
        a: 'Yes! Digital gift cards are available in amounts from $25 to $250. They\'re delivered via email and never expire.'
      }
    ]
  }
];

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState('Shipping');
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const currentCategory = faqData.find(cat => cat.category === activeCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-12 md:py-16 bg-soft-cream">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal font-montserrat mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-medium-gray text-lg max-w-2xl mx-auto">
            Find answers to common questions about shopping with CurvyChic.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="max-w-[900px] mx-auto px-4 md:px-8">
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {faqData.map((category) => (
              <button
                key={category.category}
                onClick={() => {
                  setActiveCategory(category.category);
                  setOpenQuestion(null);
                }}
                className={`px-5 py-2 rounded-full font-medium transition-all ${
                  activeCategory === category.category
                    ? 'bg-deep-teal text-white'
                    : 'bg-light-gray text-medium-gray hover:text-charcoal'
                }`}
              >
                {category.category}
              </button>
            ))}
          </div>

          {/* Questions */}
          <div className="space-y-4">
            {currentCategory?.questions.map((item, index) => (
              <div
                key={index}
                className="border border-soft-gray rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleQuestion(index)}
                  className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-light-gray/50 transition-colors"
                >
                  <span className="font-semibold text-charcoal pr-8">{item.q}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-5 w-5 text-deep-teal flex-shrink-0 transition-transform ${
                      openQuestion === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openQuestion === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="p-5 pt-0 text-medium-gray leading-relaxed">
                    {item.a}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-12 text-center p-8 bg-soft-cream rounded-xl">
            <h3 className="text-xl font-bold text-charcoal font-montserrat mb-2">
              Still have questions?
            </h3>
            <p className="text-medium-gray mb-4">
              Our customer service team is happy to help!
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-deep-teal text-white font-semibold rounded-lg hover:bg-deep-teal/90 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
