const BrandStory = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=800&h=800&fit=crop"
                alt="Diverse group of people celebrating body positivity"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-warm-coral/10 rounded-full -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-deep-teal/10 rounded-full -z-10" />
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <span className="text-warm-coral font-semibold text-sm uppercase tracking-wider">
              Our Story
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal font-montserrat mt-2 mb-6">
              Fashion Should Make Everyone Feel{' '}
              <span className="text-deep-teal">Beautiful</span>
            </h2>
            <div className="space-y-4 text-medium-gray leading-relaxed">
              <p>
                At CurvyChic, we believe that fashion is for every body. Born from a passion 
                to create stylish, comfortable clothing for plus-size individuals, we&apos;re 
                redefining what it means to dress with confidence.
              </p>
              <p>
                Our designs celebrate curves, embrace comfort, and prioritize quality. 
                We work with diverse models and listen to our community to create pieces 
                that truly fit and flatter.
              </p>
              <p>
                Every stitch tells a story of inclusivity, self-love, and the belief that 
                looking good should never be a privilege reserved for a select few.
              </p>
            </div>

            {/* Values */}
            <div className="grid grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-soft-cream rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-deep-teal"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <h4 className="font-semibold text-charcoal text-sm">Body Positive</h4>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-soft-cream rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-deep-teal"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h4 className="font-semibold text-charcoal text-sm">Quality First</h4>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-soft-cream rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-deep-teal"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h4 className="font-semibold text-charcoal text-sm">Sustainable</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
