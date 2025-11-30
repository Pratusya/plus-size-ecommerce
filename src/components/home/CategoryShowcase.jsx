import { Link } from 'react-router-dom';

const categories = [
  {
    name: "Women's",
    href: '/women',
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&h=800&fit=crop',
    description: 'Stylish essentials for every occasion'
  },
  {
    name: "Men's",
    href: '/men',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop',
    description: 'Comfortable fits for the modern man'
  },
  {
    name: "Kids'",
    href: '/kids',
    image: 'https://images.unsplash.com/photo-1503944168849-8bf86875bbd8?w=600&h=800&fit=crop',
    description: 'Fun and comfortable for little ones'
  }
];

const CategoryShowcase = () => {
  return (
    <section className="py-16 md:py-24 bg-soft-cream">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal font-montserrat mb-4">
            Shop by Category
          </h2>
          <p className="text-medium-gray text-lg">
            Find your perfect fit in our inclusive collections
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {categories.map((category) => (
            <Link
              key={category.name}
              to={category.href}
              className="group relative overflow-hidden rounded-xl aspect-[3/4] product-card"
            >
              {/* Image */}
              <img
                src={category.image}
                alt={`Shop ${category.name} collection`}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-white font-montserrat mb-2">
                  {category.name}
                </h3>
                <p className="text-white/80 text-sm md:text-base mb-4">
                  {category.description}
                </p>
                <span className="inline-flex items-center gap-2 text-white font-semibold group-hover:gap-3 transition-all">
                  Shop Now
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
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryShowcase;
