import { useState } from 'react';
import { motion } from 'framer-motion';

import FadeIn from '../components/animations/FadeIn';
import Button from '../components/common/Button';
import Input from '../components/common/Input';
import { useUI } from '../context/UIContext';

const Contact = () => {
  const { addToast } = useUI();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    addToast('Message sent successfully! We\'ll get back to you soon.', 'success');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Email',
      value: 'hello@curvystyle.com',
      link: 'mailto:hello@curvystyle.com'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: 'Phone',
      value: '1-800-CURVY-STYLE',
      link: 'tel:1-800-278-79-78'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Address',
      value: '123 Fashion Ave, NYC',
      link: '#'
    }
  ];

  return (
    <div className="pt-24 pb-16 min-h-screen bg-snow-white">
      {/* Hero */}
      <section className="bg-gradient-to-r from-royal-purple to-sunset-orange py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold font-poppins text-white mb-4">
              Get in Touch
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Have a question or feedback? We&apos;d love to hear from you!
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <FadeIn>
              <div className="bg-white rounded-2xl p-8 card-shadow">
                <h2 className="text-2xl font-bold font-poppins text-deep-charcoal mb-6">
                  Send us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <Input
                    label="Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <Input
                    label="Email Address"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <Input
                    label="Subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                  <div>
                    <label className="block text-sm font-semibold text-deep-charcoal mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-silver-mist focus:border-royal-purple focus:outline-none resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>
                  <Button type="submit" loading={isSubmitting} className="w-full">
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </div>
            </FadeIn>

            {/* Contact Info */}
            <FadeIn delay={0.2}>
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold font-poppins text-deep-charcoal mb-6">
                    Contact Information
                  </h2>
                  <div className="space-y-4">
                    {contactInfo.map((item, index) => (
                      <motion.a
                        key={index}
                        href={item.link}
                        className="flex items-center gap-4 p-4 bg-white rounded-xl card-shadow hover:shadow-lg transition-shadow"
                        whileHover={{ x: 5 }}
                      >
                        <div className="w-12 h-12 bg-gradient-to-r from-royal-purple to-sunset-orange rounded-full flex items-center justify-center text-white">
                          {item.icon}
                        </div>
                        <div>
                          <p className="text-sm text-slate">{item.title}</p>
                          <p className="font-semibold text-deep-charcoal">{item.value}</p>
                        </div>
                      </motion.a>
                    ))}
                  </div>
                </div>

                {/* Hours */}
                <div className="bg-white rounded-2xl p-6 card-shadow">
                  <h3 className="text-lg font-semibold text-deep-charcoal mb-4">
                    Customer Service Hours
                  </h3>
                  <div className="space-y-2 text-slate">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span className="font-semibold text-deep-charcoal">9AM - 8PM EST</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span className="font-semibold text-deep-charcoal">10AM - 6PM EST</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span className="font-semibold text-deep-charcoal">Closed</span>
                    </div>
                  </div>
                </div>

                {/* Map Placeholder */}
                <div className="bg-cloud-gray rounded-2xl h-64 flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="text-center"
                  >
                    <svg className="w-12 h-12 text-slate mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <p className="text-slate">Map coming soon</p>
                  </motion.div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
