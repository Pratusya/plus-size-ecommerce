# CurvyStyle - Plus Size E-Commerce

A modern, inclusive e-commerce website for plus-size clothing featuring stunning animations and a beautiful design system.

## ✨ Features

- **Responsive Design**: Optimized for mobile, tablet, and desktop
- **Advanced Animations**: Powered by Framer Motion
- **Product Catalog**: 32+ products across Men, Women, and Kids categories
- **Shopping Cart**: Slide-in cart with quantity management
- **Wishlist**: Save favorite items for later
- **Size Guide**: Interactive size charts for all categories
- **Beautiful UI**: Custom design system with Royal Purple and Sunset Orange palette

## 🛠️ Tech Stack

- **React 19** with Vite
- **Tailwind CSS 4** for styling
- **React Router 7** for navigation
- **Framer Motion** for animations
- **Context API** for state management

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/plus-size-ecommerce.git
cd plus-size-ecommerce
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/       # Header, Footer, Layout, MobileMenu
│   ├── common/       # Button, Input, Badge, Modal, Toast, Loader
│   ├── product/      # ProductCard, ProductGrid, ProductFilters, etc.
│   ├── cart/         # CartSlideIn, CartItem, CartSummary
│   ├── home/         # Hero, Marquee, FeaturedProducts, etc.
│   └── animations/   # FadeIn, SlideIn, Parallax, ScrollReveal
├── context/          # CartContext, WishlistContext, UIContext
├── data/             # Product data
├── pages/            # All page components
├── hooks/            # Custom hooks
└── styles/           # Global styles
```

## 🎨 Design System

### Colors
- **Royal Purple**: #6B5B95 (primary)
- **Sunset Orange**: #F7882F (accent)
- **Blush Pink**: #FFEEF2 (background)
- **Rose Gold**: #B76E79 (luxury accent)

### Typography
- **Headings**: Poppins
- **Body**: Nunito Sans

## 📱 Pages

- **Home**: Hero, Featured Products, Categories, Testimonials
- **Product Listing**: Filterable product grid (Men, Women, Kids, Sale)
- **Product Detail**: Image gallery, size selection, add to cart
- **About**: Brand story and team
- **Contact**: Contact form and information
- **Size Guide**: Interactive size charts
- **FAQ**: Searchable frequently asked questions
- **Shipping & Returns**: Shipping options and return policy

## 🧪 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## ♿ Accessibility

- ARIA labels on interactive elements
- Keyboard navigation support
- Reduced motion support
- Color contrast compliance

## 📄 License

MIT License
