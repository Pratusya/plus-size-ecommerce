// Mock product data for plus-size e-commerce website
export const products = [
  // Men's Products (10 items)
  {
    id: 1,
    name: "Classic Comfort Polo",
    category: "men",
    subcategory: "tops",
    price: 49.99,
    salePrice: null,
    sizes: ["2XL", "3XL", "4XL", "5XL", "6XL"],
    colors: [
      { name: "Navy", hex: "#1A2332" },
      { name: "Teal", hex: "#0D7377" },
      { name: "White", hex: "#FFFFFF" }
    ],
    images: [
      "https://images.unsplash.com/photo-1625910513413-5fc45b7f9b04?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1625910513389-a7896e5b5ece?w=600&h=800&fit=crop"
    ],
    description: "Our Classic Comfort Polo is designed with your comfort in mind. Made from premium cotton blend fabric that breathes easy and moves with you.",
    material: "60% Cotton, 40% Polyester",
    careInstructions: "Machine wash cold, tumble dry low",
    fit: "Relaxed fit with extended length for comfortable tucking",
    isNew: true,
    isSale: false,
    inStock: true
  },
  {
    id: 2,
    name: "Relaxed Fit Chinos",
    category: "men",
    subcategory: "bottoms",
    price: 64.99,
    salePrice: 49.99,
    sizes: ["2XL", "3XL", "4XL", "5XL"],
    colors: [
      { name: "Khaki", hex: "#C3B091" },
      { name: "Charcoal", hex: "#2D2D2D" },
      { name: "Navy", hex: "#1A2332" }
    ],
    images: [
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&h=800&fit=crop"
    ],
    description: "These Relaxed Fit Chinos offer the perfect balance of style and comfort. Features a stretch waistband for all-day ease.",
    material: "98% Cotton, 2% Spandex",
    careInstructions: "Machine wash cold, hang dry",
    fit: "Relaxed through hip and thigh with straight leg",
    isNew: false,
    isSale: true,
    inStock: true
  },
  {
    id: 3,
    name: "Premium Henley Shirt",
    category: "men",
    subcategory: "tops",
    price: 44.99,
    salePrice: null,
    sizes: ["2XL", "3XL", "4XL", "5XL", "6XL"],
    colors: [
      { name: "Burgundy", hex: "#800020" },
      { name: "Forest Green", hex: "#228B22" },
      { name: "Cream", hex: "#FFF8F0" }
    ],
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&h=800&fit=crop"
    ],
    description: "A timeless henley with a modern fit. Soft cotton fabric with signature button placket detail.",
    material: "100% Premium Cotton",
    careInstructions: "Machine wash cold, tumble dry low",
    fit: "Regular fit with generous body length",
    isNew: false,
    isSale: false,
    inStock: true
  },
  {
    id: 4,
    name: "Performance Joggers",
    category: "men",
    subcategory: "activewear",
    price: 59.99,
    salePrice: null,
    sizes: ["2XL", "3XL", "4XL", "5XL"],
    colors: [
      { name: "Black", hex: "#000000" },
      { name: "Gray", hex: "#757575" },
      { name: "Navy", hex: "#1A2332" }
    ],
    images: [
      "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=600&h=800&fit=crop"
    ],
    description: "Engineered for movement, our Performance Joggers feature moisture-wicking fabric and zippered pockets.",
    material: "88% Polyester, 12% Spandex",
    careInstructions: "Machine wash cold, do not use fabric softener",
    fit: "Athletic fit with tapered leg",
    isNew: true,
    isSale: false,
    inStock: true
  },
  {
    id: 5,
    name: "Quilted Bomber Jacket",
    category: "men",
    subcategory: "outerwear",
    price: 129.99,
    salePrice: 99.99,
    sizes: ["2XL", "3XL", "4XL", "5XL", "6XL"],
    colors: [
      { name: "Olive", hex: "#556B2F" },
      { name: "Black", hex: "#000000" },
      { name: "Navy", hex: "#1A2332" }
    ],
    images: [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&h=800&fit=crop"
    ],
    description: "This quilted bomber jacket combines warmth with style. Featuring a water-resistant shell and cozy insulated lining.",
    material: "Shell: 100% Nylon, Lining: 100% Polyester, Fill: Down alternative",
    careInstructions: "Dry clean recommended",
    fit: "Regular fit, true to size",
    isNew: false,
    isSale: true,
    inStock: true
  },
  {
    id: 6,
    name: "Oxford Button-Down",
    category: "men",
    subcategory: "tops",
    price: 54.99,
    salePrice: null,
    sizes: ["2XL", "3XL", "4XL", "5XL"],
    colors: [
      { name: "Light Blue", hex: "#ADD8E6" },
      { name: "White", hex: "#FFFFFF" },
      { name: "Pink", hex: "#FFC0CB" }
    ],
    images: [
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1598032895397-b9472444bf93?w=600&h=800&fit=crop"
    ],
    description: "A wardrobe essential. Our Oxford Button-Down is perfect for both office and casual occasions.",
    material: "100% Premium Oxford Cotton",
    careInstructions: "Machine wash cold, iron on medium heat",
    fit: "Classic fit with adjustable cuffs",
    isNew: false,
    isSale: false,
    inStock: true
  },
  {
    id: 7,
    name: "Stretch Denim Jeans",
    category: "men",
    subcategory: "bottoms",
    price: 79.99,
    salePrice: null,
    sizes: ["2XL", "3XL", "4XL", "5XL", "6XL"],
    colors: [
      { name: "Dark Wash", hex: "#1A2847" },
      { name: "Medium Wash", hex: "#4A6FA5" },
      { name: "Black", hex: "#000000" }
    ],
    images: [
      "https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1582552938357-32b906df40cb?w=600&h=800&fit=crop"
    ],
    description: "Our Stretch Denim Jeans feature comfort-stretch technology for all-day wear without sacrificing style.",
    material: "98% Cotton, 2% Elastane",
    careInstructions: "Machine wash cold inside out, hang dry",
    fit: "Relaxed fit with straight leg",
    isNew: true,
    isSale: false,
    inStock: true
  },
  {
    id: 8,
    name: "Cozy Fleece Hoodie",
    category: "men",
    subcategory: "tops",
    price: 69.99,
    salePrice: 54.99,
    sizes: ["2XL", "3XL", "4XL", "5XL", "6XL"],
    colors: [
      { name: "Heather Gray", hex: "#9E9E9E" },
      { name: "Navy", hex: "#1A2332" },
      { name: "Black", hex: "#000000" }
    ],
    images: [
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1578768079052-aa76e52ff62e?w=600&h=800&fit=crop"
    ],
    description: "Wrap yourself in comfort with our Cozy Fleece Hoodie. Double-lined hood and kangaroo pocket for extra warmth.",
    material: "80% Cotton, 20% Polyester",
    careInstructions: "Machine wash cold, tumble dry low",
    fit: "Relaxed fit for maximum comfort",
    isNew: false,
    isSale: true,
    inStock: true
  },
  {
    id: 9,
    name: "Athletic Compression Tee",
    category: "men",
    subcategory: "activewear",
    price: 39.99,
    salePrice: null,
    sizes: ["2XL", "3XL", "4XL", "5XL"],
    colors: [
      { name: "Black", hex: "#000000" },
      { name: "Royal Blue", hex: "#4169E1" },
      { name: "Red", hex: "#DC143C" }
    ],
    images: [
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=600&h=800&fit=crop"
    ],
    description: "Designed for performance, our Athletic Compression Tee offers support and moisture management.",
    material: "85% Polyester, 15% Spandex",
    careInstructions: "Machine wash cold, do not use fabric softener",
    fit: "Compression fit for muscle support",
    isNew: false,
    isSale: false,
    inStock: true
  },
  {
    id: 10,
    name: "Wool Blend Peacoat",
    category: "men",
    subcategory: "outerwear",
    price: 189.99,
    salePrice: null,
    sizes: ["2XL", "3XL", "4XL", "5XL"],
    colors: [
      { name: "Charcoal", hex: "#2D2D2D" },
      { name: "Camel", hex: "#C19A6B" },
      { name: "Navy", hex: "#1A2332" }
    ],
    images: [
      "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1548883354-94bcfe321cbb?w=600&h=800&fit=crop"
    ],
    description: "A sophisticated wool blend peacoat that elevates any outfit. Features classic double-breasted design.",
    material: "60% Wool, 30% Polyester, 10% Acrylic",
    careInstructions: "Dry clean only",
    fit: "Tailored fit, size up for layering",
    isNew: true,
    isSale: false,
    inStock: true
  },

  // Women's Products (10 items)
  {
    id: 11,
    name: "Flowing Maxi Dress",
    category: "women",
    subcategory: "dresses",
    price: 89.99,
    salePrice: null,
    sizes: ["2XL", "3XL", "4XL", "5XL", "6XL"],
    colors: [
      { name: "Coral", hex: "#FF6B6B" },
      { name: "Sage", hex: "#87AE73" },
      { name: "Navy", hex: "#1A2332" }
    ],
    images: [
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600&h=800&fit=crop"
    ],
    description: "Our Flowing Maxi Dress celebrates your curves with its flattering empire waist and breathable fabric.",
    material: "95% Rayon, 5% Spandex",
    careInstructions: "Machine wash cold, hang dry",
    fit: "Empire waist, flowing silhouette",
    isNew: true,
    isSale: false,
    inStock: true
  },
  {
    id: 12,
    name: "High-Waist Sculpting Leggings",
    category: "women",
    subcategory: "activewear",
    price: 54.99,
    salePrice: 44.99,
    sizes: ["2XL", "3XL", "4XL", "5XL", "6XL"],
    colors: [
      { name: "Black", hex: "#000000" },
      { name: "Deep Teal", hex: "#0D7377" },
      { name: "Wine", hex: "#722F37" }
    ],
    images: [
      "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=600&h=800&fit=crop"
    ],
    description: "These High-Waist Sculpting Leggings offer comfortable compression and a smoothing effect you'll love.",
    material: "75% Nylon, 25% Spandex",
    careInstructions: "Machine wash cold, lay flat to dry",
    fit: "High-waist with tummy control panel",
    isNew: false,
    isSale: true,
    inStock: true
  },
  {
    id: 13,
    name: "Silk Blend Blouse",
    category: "women",
    subcategory: "tops",
    price: 74.99,
    salePrice: null,
    sizes: ["2XL", "3XL", "4XL", "5XL"],
    colors: [
      { name: "Blush", hex: "#FFB6C1" },
      { name: "Ivory", hex: "#FFFFF0" },
      { name: "Champagne", hex: "#F7E7CE" }
    ],
    images: [
      "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=600&h=800&fit=crop"
    ],
    description: "Effortlessly elegant, our Silk Blend Blouse drapes beautifully and transitions from day to night.",
    material: "70% Silk, 30% Polyester",
    careInstructions: "Hand wash cold or dry clean",
    fit: "Relaxed fit with adjustable tie waist",
    isNew: false,
    isSale: false,
    inStock: true
  },
  {
    id: 14,
    name: "Curve-Hugging Wrap Dress",
    category: "women",
    subcategory: "dresses",
    price: 79.99,
    salePrice: 64.99,
    sizes: ["2XL", "3XL", "4XL", "5XL", "6XL"],
    colors: [
      { name: "Ruby", hex: "#E0115F" },
      { name: "Emerald", hex: "#50C878" },
      { name: "Black", hex: "#000000" }
    ],
    images: [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=600&h=800&fit=crop"
    ],
    description: "Our signature Curve-Hugging Wrap Dress is designed to flatter every curve with its adjustable wrap design.",
    material: "92% Polyester, 8% Spandex",
    careInstructions: "Machine wash cold, hang dry",
    fit: "True wrap design, adjustable fit",
    isNew: false,
    isSale: true,
    inStock: true
  },
  {
    id: 15,
    name: "Boyfriend Cardigan",
    category: "women",
    subcategory: "outerwear",
    price: 64.99,
    salePrice: null,
    sizes: ["2XL", "3XL", "4XL", "5XL", "6XL"],
    colors: [
      { name: "Oatmeal", hex: "#F5F5DC" },
      { name: "Dusty Rose", hex: "#D4A5A5" },
      { name: "Slate", hex: "#708090" }
    ],
    images: [
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1525450824786-227cbef70703?w=600&h=800&fit=crop"
    ],
    description: "Cozy meets chic in our Boyfriend Cardigan. Perfect for layering with its relaxed, oversized fit.",
    material: "55% Acrylic, 30% Polyester, 15% Wool",
    careInstructions: "Hand wash cold, lay flat to dry",
    fit: "Oversized boyfriend fit",
    isNew: true,
    isSale: false,
    inStock: true
  },
  {
    id: 16,
    name: "Stretch Bootcut Jeans",
    category: "women",
    subcategory: "bottoms",
    price: 69.99,
    salePrice: null,
    sizes: ["2XL", "3XL", "4XL", "5XL"],
    colors: [
      { name: "Classic Indigo", hex: "#3F51B5" },
      { name: "Dark Wash", hex: "#1A237E" },
      { name: "Black", hex: "#000000" }
    ],
    images: [
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?w=600&h=800&fit=crop"
    ],
    description: "Our Stretch Bootcut Jeans offer a classic silhouette with modern comfort technology.",
    material: "78% Cotton, 20% Polyester, 2% Spandex",
    careInstructions: "Machine wash cold, tumble dry low",
    fit: "Mid-rise with bootcut leg",
    isNew: false,
    isSale: false,
    inStock: true
  },
  {
    id: 17,
    name: "Peplum Power Top",
    category: "women",
    subcategory: "tops",
    price: 49.99,
    salePrice: null,
    sizes: ["2XL", "3XL", "4XL", "5XL", "6XL"],
    colors: [
      { name: "Royal Purple", hex: "#7851A9" },
      { name: "Coral", hex: "#FF6B6B" },
      { name: "Teal", hex: "#0D7377" }
    ],
    images: [
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1596783047481-18f8f4b5c295?w=600&h=800&fit=crop"
    ],
    description: "Make a statement with our Peplum Power Top. The peplum detail creates a feminine, hourglass silhouette.",
    material: "95% Polyester, 5% Spandex",
    careInstructions: "Machine wash cold, hang dry",
    fit: "Fitted bodice with peplum waist",
    isNew: true,
    isSale: false,
    inStock: true
  },
  {
    id: 18,
    name: "Yoga Flow Pants",
    category: "women",
    subcategory: "activewear",
    price: 59.99,
    salePrice: 49.99,
    sizes: ["2XL", "3XL", "4XL", "5XL", "6XL"],
    colors: [
      { name: "Black", hex: "#000000" },
      { name: "Lavender", hex: "#E6E6FA" },
      { name: "Ocean Blue", hex: "#4682B4" }
    ],
    images: [
      "https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1550345332-09e3ac987658?w=600&h=800&fit=crop"
    ],
    description: "Flow through your practice in these buttery-soft Yoga Flow Pants. Four-way stretch for unlimited movement.",
    material: "87% Nylon, 13% Spandex",
    careInstructions: "Machine wash cold, lay flat to dry",
    fit: "Wide-leg with fold-over waistband",
    isNew: false,
    isSale: true,
    inStock: true
  },
  {
    id: 19,
    name: "Elegant A-Line Skirt",
    category: "women",
    subcategory: "bottoms",
    price: 54.99,
    salePrice: null,
    sizes: ["2XL", "3XL", "4XL", "5XL"],
    colors: [
      { name: "Black", hex: "#000000" },
      { name: "Burgundy", hex: "#800020" },
      { name: "Navy", hex: "#1A2332" }
    ],
    images: [
      "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1590159763121-7c9fd312190d?w=600&h=800&fit=crop"
    ],
    description: "Our Elegant A-Line Skirt is a versatile wardrobe staple. Flattering fit with hidden elastic waistband.",
    material: "100% Polyester",
    careInstructions: "Machine wash cold, hang dry",
    fit: "Pull-on A-line silhouette, knee-length",
    isNew: false,
    isSale: false,
    inStock: true
  },
  {
    id: 20,
    name: "Cozy Cable Knit Sweater",
    category: "women",
    subcategory: "tops",
    price: 79.99,
    salePrice: null,
    sizes: ["2XL", "3XL", "4XL", "5XL", "6XL"],
    colors: [
      { name: "Cream", hex: "#FFF8F0" },
      { name: "Forest Green", hex: "#228B22" },
      { name: "Rust", hex: "#B7410E" }
    ],
    images: [
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&h=800&fit=crop"
    ],
    description: "Wrap yourself in the luxurious comfort of our Cozy Cable Knit Sweater. Perfect for chilly days.",
    material: "50% Acrylic, 30% Nylon, 20% Wool",
    careInstructions: "Hand wash cold, lay flat to dry",
    fit: "Relaxed fit with drop shoulders",
    isNew: true,
    isSale: false,
    inStock: true
  },

  // Kids Products (8 items)
  {
    id: 21,
    name: "Rainbow Graphic Tee",
    category: "kids",
    subcategory: "tops",
    price: 24.99,
    salePrice: null,
    sizes: ["XL", "2XL", "3XL"],
    colors: [
      { name: "White", hex: "#FFFFFF" },
      { name: "Light Pink", hex: "#FFB6C1" },
      { name: "Sky Blue", hex: "#87CEEB" }
    ],
    images: [
      "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1503944168849-8bf86875bbd8?w=600&h=800&fit=crop"
    ],
    description: "Spread joy with our Rainbow Graphic Tee! Soft, durable fabric perfect for play and everyday wear.",
    material: "100% Organic Cotton",
    careInstructions: "Machine wash cold, tumble dry low",
    fit: "Relaxed fit for comfort",
    isNew: true,
    isSale: false,
    inStock: true
  },
  {
    id: 22,
    name: "Comfy Jogger Set",
    category: "kids",
    subcategory: "activewear",
    price: 44.99,
    salePrice: 34.99,
    sizes: ["XL", "2XL", "3XL"],
    colors: [
      { name: "Gray", hex: "#9E9E9E" },
      { name: "Navy", hex: "#1A2332" },
      { name: "Red", hex: "#DC143C" }
    ],
    images: [
      "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=600&h=800&fit=crop"
    ],
    description: "Our Comfy Jogger Set keeps kids cozy and stylish. Matching hoodie and jogger pants combo.",
    material: "80% Cotton, 20% Polyester",
    careInstructions: "Machine wash cold, tumble dry low",
    fit: "Relaxed fit with elastic waistband",
    isNew: false,
    isSale: true,
    inStock: true
  },
  {
    id: 23,
    name: "Denim Adventure Jacket",
    category: "kids",
    subcategory: "outerwear",
    price: 54.99,
    salePrice: null,
    sizes: ["XL", "2XL", "3XL"],
    colors: [
      { name: "Classic Blue", hex: "#4169E1" },
      { name: "Light Wash", hex: "#ADD8E6" }
    ],
    images: [
      "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=600&h=800&fit=crop"
    ],
    description: "Built for adventure! Our Denim Adventure Jacket is durable, stylish, and perfect for any activity.",
    material: "100% Cotton Denim",
    careInstructions: "Machine wash cold, hang dry",
    fit: "Classic fit with adjustable cuffs",
    isNew: false,
    isSale: false,
    inStock: true
  },
  {
    id: 24,
    name: "Fun Print Leggings",
    category: "kids",
    subcategory: "bottoms",
    price: 29.99,
    salePrice: null,
    sizes: ["XL", "2XL", "3XL"],
    colors: [
      { name: "Galaxy Print", hex: "#191970" },
      { name: "Floral", hex: "#FF69B4" },
      { name: "Dinosaur", hex: "#228B22" }
    ],
    images: [
      "https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1503944168849-8bf86875bbd8?w=600&h=800&fit=crop"
    ],
    description: "Express your unique style with our Fun Print Leggings. Stretchy, comfortable, and endlessly fun!",
    material: "92% Polyester, 8% Spandex",
    careInstructions: "Machine wash cold, hang dry",
    fit: "Stretchy fit with elastic waistband",
    isNew: true,
    isSale: false,
    inStock: true
  },
  {
    id: 25,
    name: "Cozy Zip-Up Hoodie",
    category: "kids",
    subcategory: "tops",
    price: 39.99,
    salePrice: 29.99,
    sizes: ["XL", "2XL", "3XL"],
    colors: [
      { name: "Purple", hex: "#9370DB" },
      { name: "Green", hex: "#4CAF50" },
      { name: "Orange", hex: "#FF8C00" }
    ],
    images: [
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?w=600&h=800&fit=crop"
    ],
    description: "Our Cozy Zip-Up Hoodie is perfect for layering. Features kangaroo pocket and durable zipper.",
    material: "80% Cotton, 20% Polyester",
    careInstructions: "Machine wash cold, tumble dry low",
    fit: "Relaxed fit with adjustable hood",
    isNew: false,
    isSale: true,
    inStock: true
  },
  {
    id: 26,
    name: "Active Shorts Set",
    category: "kids",
    subcategory: "activewear",
    price: 34.99,
    salePrice: null,
    sizes: ["XL", "2XL", "3XL"],
    colors: [
      { name: "Blue/White", hex: "#1E90FF" },
      { name: "Red/Black", hex: "#DC143C" },
      { name: "Green/Gray", hex: "#32CD32" }
    ],
    images: [
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=600&h=800&fit=crop"
    ],
    description: "Get moving in our Active Shorts Set! Moisture-wicking fabric keeps kids cool during play and sports.",
    material: "100% Polyester",
    careInstructions: "Machine wash cold, tumble dry low",
    fit: "Athletic fit with elastic waistband",
    isNew: false,
    isSale: false,
    inStock: true
  },
  {
    id: 27,
    name: "Party Perfect Dress",
    category: "kids",
    subcategory: "dresses",
    price: 49.99,
    salePrice: null,
    sizes: ["XL", "2XL", "3XL"],
    colors: [
      { name: "Pink Sparkle", hex: "#FF69B4" },
      { name: "Royal Blue", hex: "#4169E1" },
      { name: "Gold", hex: "#D4AF37" }
    ],
    images: [
      "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&h=800&fit=crop"
    ],
    description: "Every occasion is special in our Party Perfect Dress. Features tulle overlay and sparkle details.",
    material: "100% Polyester with tulle overlay",
    careInstructions: "Hand wash cold, hang dry",
    fit: "Fitted bodice with full skirt",
    isNew: true,
    isSale: false,
    inStock: true
  },
  {
    id: 28,
    name: "Everyday Essential Polo",
    category: "kids",
    subcategory: "tops",
    price: 27.99,
    salePrice: null,
    sizes: ["XL", "2XL", "3XL"],
    colors: [
      { name: "White", hex: "#FFFFFF" },
      { name: "Navy", hex: "#1A2332" },
      { name: "Red", hex: "#DC143C" }
    ],
    images: [
      "https://images.unsplash.com/photo-1625910513413-5fc45b7f9b04?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=800&fit=crop"
    ],
    description: "Classic and comfortable, our Everyday Essential Polo is perfect for school or special occasions.",
    material: "100% Cotton Pique",
    careInstructions: "Machine wash cold, tumble dry low",
    fit: "Classic fit with ribbed collar",
    isNew: false,
    isSale: false,
    inStock: true
  }
];

// Filter options
export const categories = [
  { id: "all", name: "All Categories" },
  { id: "tops", name: "Tops" },
  { id: "bottoms", name: "Bottoms" },
  { id: "dresses", name: "Dresses" },
  { id: "activewear", name: "Activewear" },
  { id: "outerwear", name: "Outerwear" }
];

export const sizes = ["XL", "2XL", "3XL", "4XL", "5XL", "6XL"];

export const colors = [
  { name: "Black", hex: "#000000" },
  { name: "White", hex: "#FFFFFF" },
  { name: "Navy", hex: "#1A2332" },
  { name: "Gray", hex: "#757575" },
  { name: "Red", hex: "#DC143C" },
  { name: "Blue", hex: "#4169E1" },
  { name: "Green", hex: "#228B22" },
  { name: "Pink", hex: "#FFB6C1" },
  { name: "Purple", hex: "#9370DB" },
  { name: "Coral", hex: "#FF6B6B" },
  { name: "Teal", hex: "#0D7377" }
];

export const priceRanges = [
  { id: "all", name: "All Prices", min: 0, max: Infinity },
  { id: "under50", name: "Under $50", min: 0, max: 49.99 },
  { id: "50to100", name: "$50 - $100", min: 50, max: 100 },
  { id: "over100", name: "Over $100", min: 100.01, max: Infinity }
];

export const sortOptions = [
  { id: "featured", name: "Featured" },
  { id: "price-low", name: "Price: Low to High" },
  { id: "price-high", name: "Price: High to Low" },
  { id: "newest", name: "Newest" }
];

// Helper functions
export const getProductById = (id) => {
  return products.find(product => product.id === parseInt(id));
};

export const getProductsByCategory = (category) => {
  if (!category || category === 'all') return products;
  return products.filter(product => product.category === category);
};

export const getFeaturedProducts = () => {
  return products.filter(product => product.isNew || product.isSale).slice(0, 8);
};

export const getNewArrivals = () => {
  return products.filter(product => product.isNew);
};

export const getSaleProducts = () => {
  return products.filter(product => product.isSale);
};

export const searchProducts = (query) => {
  const searchTerm = query.toLowerCase();
  return products.filter(product => 
    product.name.toLowerCase().includes(searchTerm) ||
    product.category.toLowerCase().includes(searchTerm) ||
    product.subcategory.toLowerCase().includes(searchTerm) ||
    product.description.toLowerCase().includes(searchTerm)
  );
};
