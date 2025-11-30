import Hero from '../components/home/Hero';
import Marquee from '../components/home/Marquee';
import FeaturedProducts from '../components/home/FeaturedProducts';
import CategoryShowcase from '../components/home/CategoryShowcase';
import BrandStory from '../components/home/BrandStory';
import Testimonials from '../components/home/Testimonials';
import Newsletter from '../components/home/Newsletter';

const Home = () => {
  return (
    <>
      <Hero />
      <Marquee />
      <FeaturedProducts />
      <CategoryShowcase />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </>
  );
};

export default Home;
