import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';
import { FilterProvider } from './context/FilterContext';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import ProductListing from './pages/ProductListing';
import ProductDetail from './pages/ProductDetail';
import About from './pages/About';
import Contact from './pages/Contact';
import SizeGuide from './pages/SizeGuide';
import FAQ from './pages/FAQ';
import ShippingReturns from './pages/ShippingReturns';
import Wishlist from './pages/Wishlist';

function App() {
  return (
    <CartProvider>
      <WishlistProvider>
        <FilterProvider>
          <Router>
            <Layout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/men" element={<ProductListing />} />
                <Route path="/women" element={<ProductListing />} />
                <Route path="/kids" element={<ProductListing />} />
                <Route path="/new-arrivals" element={<ProductListing />} />
                <Route path="/sale" element={<ProductListing />} />
                <Route path="/search" element={<ProductListing />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/size-guide" element={<SizeGuide />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/shipping-returns" element={<ShippingReturns />} />
                <Route path="/wishlist" element={<Wishlist />} />
              </Routes>
            </Layout>
          </Router>
        </FilterProvider>
      </WishlistProvider>
    </CartProvider>
  );
}

export default App;
