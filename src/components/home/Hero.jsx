import { Link } from 'react-router-dom';
import Button from '../common/Button';

const Hero = () => {
  return (
    <section className="relative h-[400px] md:h-[600px] lg:h-[700px] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1920&h=1080&fit=crop')`,
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-rich-navy/80 via-rich-navy/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative max-w-[1400px] mx-auto px-4 md:px-8 h-full flex items-center">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-montserrat leading-tight mb-4 md:mb-6">
            Fashion That Celebrates{' '}
            <span className="text-warm-coral">Every Curve</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-6 md:mb-8 leading-relaxed">
            Discover our inclusive collection designed to make you look and feel amazing. 
            Because style has no size limit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/women">
              <Button variant="coral" size="lg">
                Shop Women
              </Button>
            </Link>
            <Link to="/men">
              <Button variant="secondary" size="lg" className="border-white text-white hover:bg-white hover:text-rich-navy">
                Shop Men
              </Button>
            </Link>
          </div>

          {/* Trust Badge */}
          <div className="mt-8 md:mt-12 flex items-center gap-6 text-white/80">
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-sm">Free Shipping $75+</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
              <span className="text-sm">Easy Returns</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
};

export default Hero;
