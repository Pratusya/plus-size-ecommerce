import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-soft-cream">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal font-montserrat mb-6">
              Fashion for <span className="text-warm-coral">Every Body</span>
            </h1>
            <p className="text-xl text-medium-gray leading-relaxed">
              At CurvyChic, we believe that style knows no size. We&apos;re on a mission to 
              revolutionize plus-size fashion with pieces that are as beautiful as they are comfortable.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&h=1000&fit=crop"
                alt="CurvyChic founder"
                className="rounded-2xl shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-warm-coral/10 rounded-full -z-10" />
            </div>
            <div>
              <span className="text-warm-coral font-semibold text-sm uppercase tracking-wider">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal font-montserrat mt-2 mb-6">
                Born from a Gap in the Market
              </h2>
              <div className="space-y-4 text-medium-gray leading-relaxed">
                <p>
                  CurvyChic was founded in 2020 by Sarah Mitchell, a plus-size woman who was tired 
                  of choosing between style and fit. After years of struggling to find clothes that 
                  made her feel confident and beautiful, she decided to create her own.
                </p>
                <p>
                  What started as a small online boutique has grown into a beloved brand serving 
                  thousands of customers across the country. Our team of designers understands 
                  plus-size bodies because we are plus-size ourselves.
                </p>
                <p>
                  Every piece in our collection is designed from the ground up for curves, not 
                  just sized up from straight sizes. This means better proportions, more comfortable 
                  fits, and styles that truly flatter.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section id="body-positivity" className="py-16 md:py-24 bg-light-gray">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <span className="text-deep-teal font-semibold text-sm uppercase tracking-wider">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal font-montserrat mt-2">
              What We Stand For
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-warm-coral/10 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-warm-coral" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-charcoal font-montserrat mb-4">
                Body Positivity
              </h3>
              <p className="text-medium-gray">
                We celebrate all bodies and believe everyone deserves to feel beautiful. Our 
                marketing features real customers of all shapes and sizes, unretouched and authentic.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-deep-teal/10 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-deep-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-charcoal font-montserrat mb-4">
                Quality First
              </h3>
              <p className="text-medium-gray">
                We use premium fabrics and careful construction to create clothes that look great 
                and last. No cheap materials or shoddy stitching here.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-success-green/10 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-success-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-charcoal font-montserrat mb-4" id="sustainability">
                Sustainability
              </h3>
              <p className="text-medium-gray">
                We&apos;re committed to reducing our environmental impact through ethical manufacturing, 
                sustainable materials, and minimal packaging.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <span className="text-warm-coral font-semibold text-sm uppercase tracking-wider">
              Our Team
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal font-montserrat mt-2">
              The Faces Behind CurvyChic
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden bg-light-gray">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop"
                  alt="Sarah Mitchell - Founder & CEO"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-bold text-charcoal">Sarah Mitchell</h3>
              <p className="text-medium-gray text-sm">Founder & CEO</p>
            </div>

            <div className="text-center">
              <div className="w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden bg-light-gray">
                <img
                  src="https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=300&h=300&fit=crop"
                  alt="Jessica Chen - Head of Design"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-bold text-charcoal">Jessica Chen</h3>
              <p className="text-medium-gray text-sm">Head of Design</p>
            </div>

            <div className="text-center">
              <div className="w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden bg-light-gray">
                <img
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop"
                  alt="Maya Johnson - Customer Experience"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-bold text-charcoal">Maya Johnson</h3>
              <p className="text-medium-gray text-sm">Customer Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-deep-teal">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-montserrat mb-6">
            Ready to Feel Amazing?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of happy customers who&apos;ve discovered the joy of clothes that 
            actually fit and flatter. Your perfect style is waiting.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/women"
              className="inline-flex items-center justify-center px-8 py-3 bg-warm-coral text-white font-semibold rounded-lg hover:bg-warm-coral/90 transition-colors"
            >
              Shop Now
            </Link>
            <Link
              to="/size-guide"
              className="inline-flex items-center justify-center px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-deep-teal transition-colors"
            >
              View Size Guide
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
