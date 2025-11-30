import Hero from '../components/home/Hero';
import FeaturedProducts from '../components/home/FeaturedProducts';
import CategoryShowcase from '../components/home/CategoryShowcase';
import BrandStory from '../components/home/BrandStory';
import Newsletter from '../components/home/Newsletter';

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <CategoryShowcase />
      <BrandStory />
      <Newsletter />
    </>
  );
};

export default Home;
