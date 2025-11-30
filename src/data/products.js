// Product images using placeholder service
const getProductImage = (category, index) => 
  `https://picsum.photos/seed/${category}${index}/600/800`;

const getProductImages = (category, id) => [
  getProductImage(category, id),
  getProductImage(category, `${id}a`),
  getProductImage(category, `${id}b`),
  getProductImage(category, `${id}c`),
];

export const products = [
  // Men's Products (12)
  {
    id: 1,
    name: "Classic Comfort Polo",
    category: "men",
    subcategory: "shirts",
    price: 45.00,
    originalPrice: 60.00,
    description: "A timeless polo shirt designed for ultimate comfort. Made with breathable cotton blend fabric that moves with you throughout the day.",
    sizes: ["2XL", "3XL", "4XL", "5XL", "6XL"],
    colors: [
      { name: "Navy", hex: "#1e3a5f" },
      { name: "White", hex: "#ffffff" },
      { name: "Burgundy", hex: "#722f37" }
    ],
    images: getProductImages("men", 1),
    rating: 4.8,
    reviews: 124,
    inStock: true,
    isNew: false,
    isSale: true,
    tags: ["bestseller", "comfortable"]
  },
  {
    id: 2,
    name: "Executive Button-Down Shirt",
    category: "men",
    subcategory: "shirts",
    price: 65.00,
    description: "Elevate your professional wardrobe with this tailored button-down shirt. Features wrinkle-resistant fabric and reinforced seams.",
    sizes: ["2XL", "3XL", "4XL", "5XL", "6XL"],
    colors: [
      { name: "Light Blue", hex: "#add8e6" },
      { name: "White", hex: "#ffffff" },
      { name: "Lavender", hex: "#e6e6fa" }
    ],
    images: getProductImages("men", 2),
    rating: 4.6,
    reviews: 89,
    inStock: true,
    isNew: true,
    isSale: false,
    tags: ["professional", "formal"]
  },
  {
    id: 3,
    name: "Relaxed Fit Chinos",
    category: "men",
    subcategory: "pants",
    price: 55.00,
    originalPrice: 70.00,
    description: "The perfect everyday chinos with a relaxed fit and stretch waistband for all-day comfort. Available in classic colors.",
    sizes: ["2XL", "3XL", "4XL", "5XL", "6XL"],
    colors: [
      { name: "Khaki", hex: "#c3b091" },
      { name: "Navy", hex: "#1e3a5f" },
      { name: "Olive", hex: "#556b2f" }
    ],
    images: getProductImages("men", 3),
    rating: 4.7,
    reviews: 156,
    inStock: true,
    isNew: false,
    isSale: true,
    tags: ["casual", "comfortable"]
  },
  {
    id: 4,
    name: "Premium Denim Jeans",
    category: "men",
    subcategory: "pants",
    price: 75.00,
    description: "High-quality denim jeans with extra stretch for mobility. Classic five-pocket design with modern styling.",
    sizes: ["2XL", "3XL", "4XL", "5XL", "6XL"],
    colors: [
      { name: "Dark Wash", hex: "#1a1a2e" },
      { name: "Medium Wash", hex: "#4a6fa5" },
      { name: "Black", hex: "#000000" }
    ],
    images: getProductImages("men", 4),
    rating: 4.9,
    reviews: 203,
    inStock: true,
    isNew: false,
    isSale: false,
    tags: ["bestseller", "denim"]
  },
  {
    id: 5,
    name: "All-Weather Bomber Jacket",
    category: "men",
    subcategory: "jackets",
    price: 120.00,
    description: "A versatile bomber jacket perfect for transitional weather. Water-resistant exterior with cozy fleece lining.",
    sizes: ["2XL", "3XL", "4XL", "5XL", "6XL"],
    colors: [
      { name: "Black", hex: "#000000" },
      { name: "Forest Green", hex: "#228b22" },
      { name: "Navy", hex: "#1e3a5f" }
    ],
    images: getProductImages("men", 5),
    rating: 4.8,
    reviews: 78,
    inStock: true,
    isNew: true,
    isSale: false,
    tags: ["outerwear", "seasonal"]
  },
  {
    id: 6,
    name: "Lightweight Windbreaker",
    category: "men",
    subcategory: "jackets",
    price: 85.00,
    originalPrice: 100.00,
    description: "Stay protected from the elements with this packable windbreaker. Features adjustable hood and zippered pockets.",
    sizes: ["2XL", "3XL", "4XL", "5XL", "6XL"],
    colors: [
      { name: "Red", hex: "#cc0000" },
      { name: "Royal Blue", hex: "#4169e1" },
      { name: "Gray", hex: "#808080" }
    ],
    images: getProductImages("men", 6),
    rating: 4.5,
    reviews: 67,
    inStock: true,
    isNew: false,
    isSale: true,
    tags: ["activewear", "lightweight"]
  },
  {
    id: 7,
    name: "Performance Athletic Tee",
    category: "men",
    subcategory: "activewear",
    price: 35.00,
    description: "Engineered for performance with moisture-wicking fabric. Perfect for workouts or casual everyday wear.",
    sizes: ["2XL", "3XL", "4XL", "5XL", "6XL"],
    colors: [
      { name: "Heather Gray", hex: "#9e9e9e" },
      { name: "Black", hex: "#000000" },
      { name: "Electric Blue", hex: "#0892d0" }
    ],
    images: getProductImages("men", 7),
    rating: 4.7,
    reviews: 145,
    inStock: true,
    isNew: false,
    isSale: false,
    tags: ["activewear", "sporty"]
  },
  {
    id: 8,
    name: "Compression Athletic Shorts",
    category: "men",
    subcategory: "activewear",
    price: 40.00,
    description: "Athletic shorts with built-in compression liner. Features quick-dry technology and secure zip pocket.",
    sizes: ["2XL", "3XL", "4XL", "5XL", "6XL"],
    colors: [
      { name: "Black", hex: "#000000" },
      { name: "Navy", hex: "#1e3a5f" },
      { name: "Charcoal", hex: "#36454f" }
    ],
    images: getProductImages("men", 8),
    rating: 4.6,
    reviews: 92,
    inStock: true,
    isNew: true,
    isSale: false,
    tags: ["activewear", "sporty"]
  },
  {
    id: 9,
    name: "Cozy Henley Long Sleeve",
    category: "men",
    subcategory: "shirts",
    price: 42.00,
    description: "A wardrobe essential henley made from soft cotton blend. Perfect layering piece for cooler days.",
    sizes: ["2XL", "3XL", "4XL", "5XL", "6XL"],
    colors: [
      { name: "Oatmeal", hex: "#f5f5dc" },
      { name: "Charcoal", hex: "#36454f" },
      { name: "Forest Green", hex: "#228b22" }
    ],
    images: getProductImages("men", 9),
    rating: 4.8,
    reviews: 118,
    inStock: true,
    isNew: false,
    isSale: false,
    tags: ["casual", "comfortable"]
  },
  {
    id: 10,
    name: "Graphic Print Tee",
    category: "men",
    subcategory: "shirts",
    price: 32.00,
    originalPrice: 40.00,
    description: "Express yourself with our bold graphic tees. Featuring original designs on premium cotton fabric.",
    sizes: ["2XL", "3XL", "4XL", "5XL", "6XL"],
    colors: [
      { name: "White", hex: "#ffffff" },
      { name: "Black", hex: "#000000" },
      { name: "Navy", hex: "#1e3a5f" }
    ],
    images: getProductImages("men", 10),
    rating: 4.4,
    reviews: 76,
    inStock: true,
    isNew: false,
    isSale: true,
    tags: ["casual", "trendy"]
  },
  {
    id: 11,
    name: "Tailored Dress Pants",
    category: "men",
    subcategory: "pants",
    price: 80.00,
    description: "Sophisticated dress pants with modern tailoring. Features hidden stretch waistband for comfort.",
    sizes: ["2XL", "3XL", "4XL", "5XL", "6XL"],
    colors: [
      { name: "Black", hex: "#000000" },
      { name: "Charcoal", hex: "#36454f" },
      { name: "Navy", hex: "#1e3a5f" }
    ],
    images: getProductImages("men", 11),
    rating: 4.7,
    reviews: 134,
    inStock: true,
    isNew: false,
    isSale: false,
    tags: ["formal", "professional"]
  },
  {
    id: 12,
    name: "Fleece Zip Hoodie",
    category: "men",
    subcategory: "jackets",
    price: 68.00,
    description: "Ultra-soft fleece hoodie with full zip front. Features kangaroo pockets and adjustable drawstring hood.",
    sizes: ["2XL", "3XL", "4XL", "5XL", "6XL"],
    colors: [
      { name: "Heather Gray", hex: "#9e9e9e" },
      { name: "Black", hex: "#000000" },
      { name: "Burgundy", hex: "#722f37" }
    ],
    images: getProductImages("men", 12),
    rating: 4.9,
    reviews: 187,
    inStock: true,
    isNew: false,
    isSale: false,
    tags: ["casual", "comfortable", "bestseller"]
  },

  // Women's Products (12)
  {
    id: 13,
    name: "Floral Wrap Dress",
    category: "women",
    subcategory: "dresses",
    price: 85.00,
    description: "A stunning wrap dress with beautiful floral print. Features adjustable tie waist and flutter sleeves.",
    sizes: ["2XL", "3XL", "4XL", "5XL", "6XL"],
    colors: [
      { name: "Blush Floral", hex: "#ffc0cb" },
      { name: "Navy Floral", hex: "#1e3a5f" },
      { name: "Sage Floral", hex: "#9dc183" }
    ],
    images: getProductImages("women", 13),
    rating: 4.9,
    reviews: 234,
    inStock: true,
    isNew: true,
    isSale: false,
    tags: ["bestseller", "romantic"]
  },
  {
    id: 14,
    name: "Elegant Midi Dress",
    category: "women",
    subcategory: "dresses",
    price: 95.00,
    originalPrice: 120.00,
    description: "Sophisticated midi dress perfect for special occasions. Features elegant draping and hidden back zip.",
    sizes: ["2XL", "3XL", "4XL", "5XL", "6XL"],
    colors: [
      { name: "Emerald", hex: "#50c878" },
      { name: "Wine", hex: "#722f37" },
      { name: "Black", hex: "#000000" }
    ],
    images: getProductImages("women", 14),
    rating: 4.8,
    reviews: 156,
    inStock: true,
    isNew: false,
    isSale: true,
    tags: ["elegant", "occasion"]
  },
  {
    id: 15,
    name: "Relaxed Linen Blouse",
    category: "women",
    subcategory: "tops",
    price: 52.00,
    description: "Breathable linen blouse perfect for warm weather. Features relaxed fit and button front closure.",
    sizes: ["2XL", "3XL", "4XL", "5XL", "6XL"],
    colors: [
      { name: "White", hex: "#ffffff" },
      { name: "Dusty Rose", hex: "#dcae96" },
      { name: "Sky Blue", hex: "#87ceeb" }
    ],
    images: getProductImages("women", 15),
    rating: 4.6,
    reviews: 98,
    inStock: true,
    isNew: false,
    isSale: false,
    tags: ["casual", "summer"]
  },
  {
    id: 16,
    name: "Ruffle Sleeve Top",
    category: "women",
    subcategory: "tops",
    price: 45.00,
    description: "Feminine top with beautiful ruffle sleeve detail. Pairs perfectly with jeans or dress pants.",
    sizes: ["2XL", "3XL", "4XL", "5XL", "6XL"],
    colors: [
      { name: "Coral", hex: "#ff7f50" },
      { name: "Ivory", hex: "#fffff0" },
      { name: "Lavender", hex: "#e6e6fa" }
    ],
    images: getProductImages("women", 16),
    rating: 4.7,
    reviews: 112,
    inStock: true,
    isNew: true,
    isSale: false,
    tags: ["feminine", "trendy"]
  },
  {
    id: 17,
    name: "High-Waist Wide Leg Pants",
    category: "women",
    subcategory: "bottoms",
    price: 65.00,
    originalPrice: 80.00,
    description: "Chic wide-leg pants with flattering high waist. Features hidden elastic for comfort and pockets.",
    sizes: ["2XL", "3XL", "4XL", "5XL", "6XL"],
    colors: [
      { name: "Black", hex: "#000000" },
      { name: "Camel", hex: "#c19a6b" },
      { name: "Navy", hex: "#1e3a5f" }
    ],
    images: getProductImages("women", 17),
    rating: 4.8,
    reviews: 178,
    inStock: true,
    isNew: false,
    isSale: true,
    tags: ["elegant", "comfortable"]
  },
  {
    id: 18,
    name: "Stretch Skinny Jeans",
    category: "women",
    subcategory: "bottoms",
    price: 70.00,
    description: "Figure-flattering skinny jeans with super stretch. Designed for all-day comfort and style.",
    sizes: ["2XL", "3XL", "4XL", "5XL", "6XL"],
    colors: [
      { name: "Dark Indigo", hex: "#1a1a2e" },
      { name: "Light Wash", hex: "#a8c0d6" },
      { name: "Black", hex: "#000000" }
    ],
    images: getProductImages("women", 18),
    rating: 4.9,
    reviews: 267,
    inStock: true,
    isNew: false,
    isSale: false,
    tags: ["bestseller", "denim"]
  },
  {
    id: 19,
    name: "Cozy Lounge Set",
    category: "women",
    subcategory: "loungewear",
    price: 75.00,
    description: "Ultra-soft matching lounge set perfect for relaxing at home. Includes pullover top and jogger pants.",
    sizes: ["2XL", "3XL", "4XL", "5XL", "6XL"],
    colors: [
      { name: "Blush", hex: "#ffc0cb" },
      { name: "Heather Gray", hex: "#9e9e9e" },
      { name: "Sage", hex: "#9dc183" }
    ],
    images: getProductImages("women", 19),
    rating: 4.9,
    reviews: 198,
    inStock: true,
    isNew: false,
    isSale: false,
    tags: ["comfortable", "bestseller"]
  },
  {
    id: 20,
    name: "Soft Modal Pajama Set",
    category: "women",
    subcategory: "loungewear",
    price: 58.00,
    originalPrice: 72.00,
    description: "Luxuriously soft pajama set made from eco-friendly modal fabric. Button-front top with matching pants.",
    sizes: ["2XL", "3XL", "4XL", "5XL", "6XL"],
    colors: [
      { name: "Dusty Pink", hex: "#dcae96" },
      { name: "Seafoam", hex: "#9fe2bf" },
      { name: "Navy", hex: "#1e3a5f" }
    ],
    images: getProductImages("women", 20),
    rating: 4.7,
    reviews: 143,
    inStock: true,
    isNew: false,
    isSale: true,
    tags: ["sleepwear", "comfortable"]
  },
  {
    id: 21,
    name: "Structured Blazer",
    category: "women",
    subcategory: "tops",
    price: 110.00,
    description: "Professional blazer with flattering structure. Perfect for office or dressed-up casual looks.",
    sizes: ["2XL", "3XL", "4XL", "5XL", "6XL"],
    colors: [
      { name: "Black", hex: "#000000" },
      { name: "Blush", hex: "#ffc0cb" },
      { name: "Navy", hex: "#1e3a5f" }
    ],
    images: getProductImages("women", 21),
    rating: 4.8,
    reviews: 87,
    inStock: true,
    isNew: true,
    isSale: false,
    tags: ["professional", "versatile"]
  },
  {
    id: 22,
    name: "Flowy Maxi Skirt",
    category: "women",
    subcategory: "bottoms",
    price: 55.00,
    description: "Beautiful flowy maxi skirt with elastic waistband. Perfect for summer days or vacation wear.",
    sizes: ["2XL", "3XL", "4XL", "5XL", "6XL"],
    colors: [
      { name: "Terracotta", hex: "#e2725b" },
      { name: "Ocean Blue", hex: "#4f42b5" },
      { name: "Olive", hex: "#556b2f" }
    ],
    images: getProductImages("women", 22),
    rating: 4.6,
    reviews: 76,
    inStock: true,
    isNew: false,
    isSale: false,
    tags: ["bohemian", "summer"]
  },
  {
    id: 23,
    name: "V-Neck Cardigan",
    category: "women",
    subcategory: "tops",
    price: 62.00,
    description: "Classic V-neck cardigan perfect for layering. Made from soft yarn with button front closure.",
    sizes: ["2XL", "3XL", "4XL", "5XL", "6XL"],
    colors: [
      { name: "Cream", hex: "#fffdd0" },
      { name: "Rose", hex: "#ff007f" },
      { name: "Forest Green", hex: "#228b22" }
    ],
    images: getProductImages("women", 23),
    rating: 4.7,
    reviews: 134,
    inStock: true,
    isNew: false,
    isSale: false,
    tags: ["layering", "classic"]
  },
  {
    id: 24,
    name: "Asymmetrical Tunic",
    category: "women",
    subcategory: "tops",
    price: 48.00,
    originalPrice: 60.00,
    description: "Modern asymmetrical tunic with unique hemline. Pairs beautifully with leggings or skinny jeans.",
    sizes: ["2XL", "3XL", "4XL", "5XL", "6XL"],
    colors: [
      { name: "Black", hex: "#000000" },
      { name: "Burgundy", hex: "#722f37" },
      { name: "Teal", hex: "#008080" }
    ],
    images: getProductImages("women", 24),
    rating: 4.5,
    reviews: 89,
    inStock: true,
    isNew: false,
    isSale: true,
    tags: ["modern", "trendy"]
  },

  // Kids Products (8)
  {
    id: 25,
    name: "Dinosaur Print Tee",
    category: "kids",
    subcategory: "tops",
    price: 22.00,
    description: "Fun dinosaur print t-shirt that kids love! Made from 100% cotton for softness and durability.",
    sizes: ["8", "10", "12", "14", "16", "18"],
    colors: [
      { name: "Green", hex: "#228b22" },
      { name: "Blue", hex: "#4169e1" },
      { name: "Orange", hex: "#ff8c00" }
    ],
    images: getProductImages("kids", 25),
    rating: 4.9,
    reviews: 156,
    inStock: true,
    isNew: false,
    isSale: false,
    tags: ["playful", "comfortable"]
  },
  {
    id: 26,
    name: "Rainbow Stripe Dress",
    category: "kids",
    subcategory: "dresses",
    price: 35.00,
    originalPrice: 45.00,
    description: "Cheerful rainbow stripe dress perfect for play and parties. Features pockets and twirl-worthy skirt.",
    sizes: ["8", "10", "12", "14", "16", "18"],
    colors: [
      { name: "Rainbow", hex: "#ff69b4" },
      { name: "Pastel Rainbow", hex: "#ffc0cb" }
    ],
    images: getProductImages("kids", 26),
    rating: 4.8,
    reviews: 123,
    inStock: true,
    isNew: false,
    isSale: true,
    tags: ["playful", "colorful"]
  },
  {
    id: 27,
    name: "Comfort Joggers",
    category: "kids",
    subcategory: "bottoms",
    price: 28.00,
    description: "Super comfortable joggers for active kids. Features elastic waist and reinforced knees.",
    sizes: ["8", "10", "12", "14", "16", "18"],
    colors: [
      { name: "Navy", hex: "#1e3a5f" },
      { name: "Gray", hex: "#808080" },
      { name: "Black", hex: "#000000" }
    ],
    images: getProductImages("kids", 27),
    rating: 4.7,
    reviews: 98,
    inStock: true,
    isNew: true,
    isSale: false,
    tags: ["active", "durable"]
  },
  {
    id: 28,
    name: "Graphic Hoodie",
    category: "kids",
    subcategory: "tops",
    price: 38.00,
    description: "Cozy hoodie with fun graphic print. Features kangaroo pocket and soft fleece lining.",
    sizes: ["8", "10", "12", "14", "16", "18"],
    colors: [
      { name: "Purple", hex: "#6b5b95" },
      { name: "Red", hex: "#cc0000" },
      { name: "Teal", hex: "#008080" }
    ],
    images: getProductImages("kids", 28),
    rating: 4.8,
    reviews: 112,
    inStock: true,
    isNew: false,
    isSale: false,
    tags: ["cozy", "fun"]
  },
  {
    id: 29,
    name: "Denim Overall Shorts",
    category: "kids",
    subcategory: "bottoms",
    price: 32.00,
    description: "Classic denim overall shorts for everyday adventures. Features adjustable straps and multiple pockets.",
    sizes: ["8", "10", "12", "14", "16", "18"],
    colors: [
      { name: "Light Wash", hex: "#a8c0d6" },
      { name: "Medium Wash", hex: "#4a6fa5" }
    ],
    images: getProductImages("kids", 29),
    rating: 4.6,
    reviews: 78,
    inStock: true,
    isNew: false,
    isSale: false,
    tags: ["classic", "durable"]
  },
  {
    id: 30,
    name: "Sports Active Set",
    category: "kids",
    subcategory: "activewear",
    price: 42.00,
    originalPrice: 52.00,
    description: "Matching activewear set for sports and play. Moisture-wicking fabric keeps kids comfortable.",
    sizes: ["8", "10", "12", "14", "16", "18"],
    colors: [
      { name: "Blue/Black", hex: "#4169e1" },
      { name: "Pink/Gray", hex: "#ff69b4" },
      { name: "Green/Navy", hex: "#228b22" }
    ],
    images: getProductImages("kids", 30),
    rating: 4.9,
    reviews: 145,
    inStock: true,
    isNew: true,
    isSale: true,
    tags: ["sporty", "active"]
  },
  {
    id: 31,
    name: "Cozy Fleece Jacket",
    category: "kids",
    subcategory: "outerwear",
    price: 45.00,
    description: "Warm fleece jacket perfect for cool weather. Features full zip front and zippered pockets.",
    sizes: ["8", "10", "12", "14", "16", "18"],
    colors: [
      { name: "Navy", hex: "#1e3a5f" },
      { name: "Coral", hex: "#ff7f50" },
      { name: "Forest Green", hex: "#228b22" }
    ],
    images: getProductImages("kids", 31),
    rating: 4.8,
    reviews: 89,
    inStock: true,
    isNew: false,
    isSale: false,
    tags: ["warm", "outdoor"]
  },
  {
    id: 32,
    name: "Character Print PJs",
    category: "kids",
    subcategory: "sleepwear",
    price: 28.00,
    description: "Fun character print pajama set for bedtime. Super soft cotton blend for comfortable sleep.",
    sizes: ["8", "10", "12", "14", "16", "18"],
    colors: [
      { name: "Space Print", hex: "#1a1a2e" },
      { name: "Unicorn Print", hex: "#ffc0cb" },
      { name: "Dinosaur Print", hex: "#228b22" }
    ],
    images: getProductImages("kids", 32),
    rating: 4.7,
    reviews: 167,
    inStock: true,
    isNew: false,
    isSale: false,
    tags: ["sleepwear", "fun"]
  }
];

export const categories = [
  {
    id: "men",
    name: "Men",
    description: "Stylish and comfortable fashion for the modern man",
    image: "https://picsum.photos/seed/mencat/800/600",
    subcategories: ["shirts", "pants", "jackets", "activewear"]
  },
  {
    id: "women",
    name: "Women",
    description: "Elegant and confident styles for every occasion",
    image: "https://picsum.photos/seed/womencat/800/600",
    subcategories: ["dresses", "tops", "bottoms", "loungewear"]
  },
  {
    id: "kids",
    name: "Kids",
    description: "Fun and durable clothing for active kids",
    image: "https://picsum.photos/seed/kidscat/800/600",
    subcategories: ["tops", "bottoms", "dresses", "activewear", "outerwear", "sleepwear"]
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah M.",
    rating: 5,
    text: "Finally found a brand that truly understands plus-size fashion! The quality is amazing and the fit is perfect. I've never felt more confident!",
    image: "https://picsum.photos/seed/test1/100/100",
    location: "New York, NY"
  },
  {
    id: 2,
    name: "Marcus J.",
    rating: 5,
    text: "The men's collection is fantastic. Great styles that actually fit well. The chinos are now my go-to pants for work!",
    image: "https://picsum.photos/seed/test2/100/100",
    location: "Los Angeles, CA"
  },
  {
    id: 3,
    name: "Jennifer L.",
    rating: 5,
    text: "Love shopping here for my kids! The clothes are durable, comfortable, and they actually love wearing them. Win-win!",
    image: "https://picsum.photos/seed/test3/100/100",
    location: "Chicago, IL"
  },
  {
    id: 4,
    name: "David R.",
    rating: 4,
    text: "Great quality and fast shipping. The bomber jacket exceeded my expectations. Will definitely be ordering more!",
    image: "https://picsum.photos/seed/test4/100/100",
    location: "Houston, TX"
  },
  {
    id: 5,
    name: "Ashley T.",
    rating: 5,
    text: "The loungewear set is absolutely divine! So soft and comfortable. I basically live in it on weekends now.",
    image: "https://picsum.photos/seed/test5/100/100",
    location: "Miami, FL"
  }
];

export const getProductById = (id) => products.find(p => p.id === parseInt(id));

export const getProductsByCategory = (category) => products.filter(p => p.category === category);

export const getFeaturedProducts = () => products.filter(p => p.tags?.includes('bestseller') || p.isNew).slice(0, 8);

export const getSaleProducts = () => products.filter(p => p.isSale);

export const getNewArrivals = () => products.filter(p => p.isNew);

export const getRelatedProducts = (productId, limit = 4) => {
  const product = getProductById(productId);
  if (!product) return [];
  return products
    .filter(p => p.id !== productId && p.category === product.category)
    .slice(0, limit);
};
