// SmartBill Apparel - Modern E-Commerce Application Script

// 1. PRODUCT CATALOG DATASET (41 Premium T-Shirts mapped to local assets)
const PRODUCTS = [
  {
    id: 1,
    title: "Urban Cyber Graphic Tee",
    category: "streetwear",
    price: 899,
    originalPrice: 1299,
    badge: "bestseller",
    badgeText: "Best Seller",
    rating: 4.9,
    reviews: 128,
    gsm: "240 GSM",
    image: "T Shirt Images/1012606297458249375.jpg",
    description: "Premium heavy-weight streetwear tee with cyber-inspired graphic print. Pre-shrunk 100% combed cotton.",
    colors: ["#000000", "#1e1e24", "#3f3f46"],
    sizes: ["S", "M", "L", "XL", "XXL"]
  },
  {
    id: 2,
    title: "Dark Aesthetic Skull Tee",
    category: "streetwear",
    price: 949,
    originalPrice: 1399,
    badge: "trending",
    badgeText: "Trending",
    rating: 4.8,
    reviews: 94,
    gsm: "240 GSM",
    image: "T Shirt Images/1063975480717845653.jpg",
    description: "Intricate dark aesthetic graphics printed on ultra-soft acid wash cotton. Relaxed streetwear fit.",
    colors: ["#18181b", "#27272a"],
    sizes: ["M", "L", "XL", "XXL"]
  },
  {
    id: 3,
    title: "Vintage Washed Heavyweight Tee",
    category: "y2k",
    price: 1099,
    originalPrice: 1599,
    badge: "smart",
    badgeText: "Smart Pick",
    rating: 5.0,
    reviews: 210,
    gsm: "280 GSM",
    image: "T Shirt Images/1759287347416984.jpg",
    description: "Ultra-heavyweight 280 GSM vintage acid-washed cotton tee. Engineered for ultimate drop-shoulder fit.",
    colors: ["#334155", "#1e293b"],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 4,
    title: "Minimalist Statement White Tee",
    category: "minimalist",
    price: 799,
    originalPrice: 1099,
    badge: "new",
    badgeText: "New Arrival",
    rating: 4.7,
    reviews: 56,
    gsm: "220 GSM",
    image: "T Shirt Images/42362052736993700.jpg",
    description: "Clean typography minimal design for everyday luxury wear. High-density embroidery detail on chest.",
    colors: ["#ffffff", "#f4f4f5"],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 5,
    title: "Acid Wash Oversized Street Tee",
    category: "oversized",
    price: 999,
    originalPrice: 1499,
    badge: "sale",
    badgeText: "25% OFF",
    rating: 4.9,
    reviews: 142,
    gsm: "260 GSM",
    image: "T Shirt Images/878483471102125453.jpg",
    description: "Custom bio-washed oversized streetwear silhouette. Soft hand-feel with reinforced double-needle seams.",
    colors: ["#0f172a", "#1e293b"],
    sizes: ["M", "L", "XL", "XXL"]
  },
  {
    id: 6,
    title: "Tokyo Streetwear Graphic Tee",
    category: "streetwear",
    price: 899,
    originalPrice: 1249,
    badge: "trending",
    badgeText: "Hot Drop",
    rating: 4.8,
    reviews: 87,
    gsm: "240 GSM",
    image: "T Shirt Images/904871750133254928.jpg",
    description: "Harajuku inspired Japanese typography print. Perfect boxy fit for layered outfits.",
    colors: ["#000000", "#111827"],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 7,
    title: "Cyberpunk Neon Edition Tee",
    category: "streetwear",
    price: 1149,
    originalPrice: 1699,
    badge: "smart",
    badgeText: "Limited",
    rating: 4.9,
    reviews: 112,
    gsm: "260 GSM",
    image: "T Shirt Images/910008668545378582.jpg",
    description: "High-contrast UV-reactive print graphics with SmartBill verified authenticity tag.",
    colors: ["#09090b", "#18181b"],
    sizes: ["M", "L", "XL"]
  },
  {
    id: 8,
    title: "Retro Sunset Oversized Tee",
    category: "y2k",
    price: 849,
    originalPrice: 1199,
    badge: "bestseller",
    badgeText: "Popular",
    rating: 4.6,
    reviews: 79,
    gsm: "230 GSM",
    image: "T Shirt Images/913456736915611258.jpg",
    description: "Nostalgic retro color palette printed on breathable luxury cotton blend.",
    colors: ["#451a03", "#78350f"],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 9,
    title: "Monochrome Line Art Tee",
    category: "minimalist",
    price: 749,
    originalPrice: 999,
    badge: "",
    badgeText: "",
    rating: 4.7,
    reviews: 43,
    gsm: "220 GSM",
    image: "T Shirt Images/916975174137402218.jpg",
    description: "Abstract fine line continuous drawing print. Minimalist elegance meets modern fit.",
    colors: ["#ffffff", "#f8fafc"],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 10,
    title: "Abstract Portrait Graphic Tee",
    category: "minimalist",
    price: 899,
    originalPrice: 1299,
    badge: "new",
    badgeText: "New",
    rating: 4.8,
    reviews: 38,
    gsm: "240 GSM",
    image: "T Shirt Images/995084480174043868.jpg",
    description: "Artisan vector face illustration printed on heavyweight organic cotton.",
    colors: ["#000000", "#18181b"],
    sizes: ["M", "L", "XL"]
  },
  {
    id: 11,
    title: "America Vintage Heritage Tee",
    category: "y2k",
    price: 1049,
    originalPrice: 1499,
    badge: "trending",
    badgeText: "Vintage",
    rating: 4.9,
    reviews: 165,
    gsm: "250 GSM",
    image: "T Shirt Images/America.jpg",
    description: "Distressed vintage flag graphic tee. Retro aesthetic with soft sun-washed treatment.",
    colors: ["#1e293b", "#334155"],
    sizes: ["S", "M", "L", "XL", "XXL"]
  },
  {
    id: 12,
    title: "Essence Luxury Oversized Tee",
    category: "oversized",
    price: 1299,
    originalPrice: 1899,
    badge: "smart",
    badgeText: "Smart Pick",
    rating: 5.0,
    reviews: 230,
    gsm: "300 GSM",
    image: "T Shirt Images/Beyond garments, our essence_  #fanori.jpg",
    description: "Super heavyweight 300 GSM luxury drop-shoulder tee. Signature SmartBill metal tab detailing.",
    colors: ["#09090b", "#27272a"],
    sizes: ["M", "L", "XL"]
  },
  {
    id: 13,
    title: "Relax & Unwind Typography Tee",
    category: "motivation",
    price: 799,
    originalPrice: 1099,
    badge: "bestseller",
    badgeText: "Top Pick",
    rating: 4.7,
    reviews: 88,
    gsm: "220 GSM",
    image: "T Shirt Images/Bügelbild Statement Shirt T-Shirt Relax Fashion….jpg",
    description: "Casual weekend quote print tee. Ultra-soft bio-washed cotton for supreme comfort.",
    colors: ["#f8fafc", "#e2e8f0"],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 14,
    title: "Streetwear Messaging Graphic Tee",
    category: "streetwear",
    price: 899,
    originalPrice: 1299,
    badge: "",
    badgeText: "",
    rating: 4.6,
    reviews: 52,
    gsm: "240 GSM",
    image: "T Shirt Images/Caixa de Entrada • Conversas.jpg",
    description: "Modern chat notification inspired front graphic print on thick dark tee.",
    colors: ["#18181b", "#09090b"],
    sizes: ["M", "L", "XL"]
  },
  {
    id: 15,
    title: "NEVER Premium 100% Cotton Tee",
    category: "minimalist",
    price: 849,
    originalPrice: 1199,
    badge: "new",
    badgeText: "New",
    rating: 4.8,
    reviews: 64,
    gsm: "240 GSM",
    image: "T Shirt Images/Camiseta Masculina NEVER bco Camisa premium 100% algodão.jpg",
    description: "Crisp white minimalist statement print tee. 100% combed ringspun cotton.",
    colors: ["#ffffff", "#f1f5f9"],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 16,
    title: "Dark Cat Aesthetic Graphic Tee",
    category: "streetwear",
    price: 899,
    originalPrice: 1249,
    badge: "trending",
    badgeText: "Fan Favorite",
    rating: 4.9,
    reviews: 175,
    gsm: "240 GSM",
    image: "T Shirt Images/Camisetas T-Shirt Dark Cat.jpg",
    description: "Mystical feline artwork screen-printed with durable high-density ink.",
    colors: ["#000000", "#18181b"],
    sizes: ["S", "M", "L", "XL", "XXL"]
  },
  {
    id: 17,
    title: "Can't To Can Motivational Tee",
    category: "motivation",
    price: 799,
    originalPrice: 1099,
    badge: "smart",
    badgeText: "Smart Pick",
    rating: 4.9,
    reviews: 190,
    gsm: "220 GSM",
    image: "T Shirt Images/Can’t to Can Motivation T-Shirt 🔥 Minimal Aesthetic White Tee Design.jpg",
    description: "Inspirational strike-through typography tee. Fuel your daily hustle with SmartBill energy.",
    colors: ["#ffffff", "#f8fafc"],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 18,
    title: "Cotton Blend Printed Oversized Tee",
    category: "oversized",
    price: 949,
    originalPrice: 1399,
    badge: "",
    badgeText: "",
    rating: 4.7,
    reviews: 82,
    gsm: "250 GSM",
    image: "T Shirt Images/Cotton Blend Oversized Fit Half Sleeve Printed Round Neck T-Shirt for Women.jpg",
    description: "Relaxed half sleeve oversized round neck tee. Breathable stretch cotton blend.",
    colors: ["#0f172a", "#1e1e24"],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 19,
    title: "Custom Signature Edition Tee",
    category: "streetwear",
    price: 1199,
    originalPrice: 1699,
    badge: "smart",
    badgeText: "Premium",
    rating: 5.0,
    reviews: 310,
    gsm: "280 GSM",
    image: "T Shirt Images/Custom Printed T-Shirt for Men _ Order in Pakistan.jpg",
    description: "Bespoke custom signature drop. SmartBill QR tag for instant invoice verification.",
    colors: ["#09090b", "#18181b"],
    sizes: ["M", "L", "XL", "XXL"]
  },
  {
    id: 20,
    title: "Cute Punk Cat Guitar Tee",
    category: "y2k",
    price: 849,
    originalPrice: 1199,
    badge: "trending",
    badgeText: "Popular",
    rating: 4.8,
    reviews: 120,
    gsm: "230 GSM",
    image: "T Shirt Images/Cute Punk Cat Guitar Printed Short Sleeve T-Shirt….jpg",
    description: "Playful rock punk cat artwork print. Soft wash finish with drop shoulders.",
    colors: ["#18181b", "#27272a"],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 21,
    title: "Y2K Baggy Acid Wash Streetwear Tee",
    category: "y2k",
    price: 1199,
    originalPrice: 1699,
    badge: "bestseller",
    badgeText: "Best Seller",
    rating: 4.9,
    reviews: 245,
    gsm: "280 GSM",
    image: "T Shirt Images/EMMIOL Mens Y2k Baggy Shirts Graphic Tees Oversized Crew Neck Short Sleeve Streetwear Tshirts Summer Tops 2026.jpg",
    description: "Heavyweight 2026 summer Y2K baggy fit tee with authentic vintage acid wash treatment.",
    colors: ["#334155", "#1e293b"],
    sizes: ["M", "L", "XL", "XXL"]
  },
  {
    id: 22,
    title: "Abstract Face Line Art Tee",
    category: "minimalist",
    price: 799,
    originalPrice: 1099,
    badge: "",
    badgeText: "",
    rating: 4.7,
    reviews: 73,
    gsm: "220 GSM",
    image: "T Shirt Images/Face Line Art T-shirt, Abstract Woman Face Line Art T-shirt, Women T-shirt, Women Shirt, Birthday's T-shirt, Face Line Art Shirt - Etsy.jpg",
    description: "Elegantly stylized line art face vector print. Minimalist aesthetic for casual chic.",
    colors: ["#ffffff", "#f8fafc"],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 23,
    title: "Letter Printed Elegant Casual Tee",
    category: "minimalist",
    price: 849,
    originalPrice: 1199,
    badge: "new",
    badgeText: "New",
    rating: 4.6,
    reviews: 58,
    gsm: "230 GSM",
    image: "T Shirt Images/Fashionable Letter Printed Women T-Shirt Comfortable And Relaxed Round Neck Suitable For All Seasons Elegant Casual Top Ly Shipped Summer Pure Top Elegant Party Summer Must-Have.jpg",
    description: "Subtle typography on all-season round neck soft knit tee.",
    colors: ["#f1f5f9", "#e2e8f0"],
    sizes: ["S", "M", "L"]
  },
  {
    id: 24,
    title: "Jawdrobe Oversized Graphic Tee",
    category: "oversized",
    price: 999,
    originalPrice: 1399,
    badge: "sale",
    badgeText: "Sale",
    rating: 4.8,
    reviews: 96,
    gsm: "250 GSM",
    image: "T Shirt Images/Jawdrobe Cotton Blend Oversized Fit Half Sleeve Printed Round Neck T-Shirt for Women.jpg",
    description: "Modern street style graphic tee engineered with wide sleeve cuffs and loose chest measurement.",
    colors: ["#0f172a", "#1e1e24"],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 25,
    title: "Limited Bio Drop Aesthetic Tee",
    category: "streetwear",
    price: 1099,
    originalPrice: 1599,
    badge: "smart",
    badgeText: "Limited Drop",
    rating: 5.0,
    reviews: 140,
    gsm: "270 GSM",
    image: "T Shirt Images/Jetzt Verfügbar - Sei schnell!! Link in der Bio❤️.jpg",
    description: "Exclusive limited batch release with contrast embroidery and SmartBill digital receipt proof.",
    colors: ["#000000", "#18181b"],
    sizes: ["M", "L", "XL"]
  },
  {
    id: 26,
    title: "Just Chill Sloth Graphic Tee",
    category: "motivation",
    price: 749,
    originalPrice: 999,
    badge: "",
    badgeText: "",
    rating: 4.7,
    reviews: 89,
    gsm: "220 GSM",
    image: "T Shirt Images/Just Chill Sloth Shirt _ Cool Relaxing Anti Stress Novelty.jpg",
    description: "Cool relaxing anti-stress sloth illustration. Spread easy vibes everywhere.",
    colors: ["#ffffff", "#f8fafc"],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 27,
    title: "Faith Washed Vintage Heavyweight Tee",
    category: "y2k",
    price: 1049,
    originalPrice: 1499,
    badge: "trending",
    badgeText: "Vintage",
    rating: 4.9,
    reviews: 167,
    gsm: "260 GSM",
    image: "T Shirt Images/Latest Christian Faith Washed T-Shirt Sale.jpg",
    description: "Washed charcoal finish with high-density distressed graphic print.",
    colors: ["#334155", "#1e293b"],
    sizes: ["M", "L", "XL", "XXL"]
  },
  {
    id: 28,
    title: "Do It Yourself Motivational Tee",
    category: "motivation",
    price: 799,
    originalPrice: 1099,
    badge: "smart",
    badgeText: "Smart Pick",
    rating: 4.8,
    reviews: 114,
    gsm: "230 GSM",
    image: "T Shirt Images/MG Clothing _Do It Yourself_ Motivational Tee – Minimalist White.jpg",
    description: "Minimalist white tee for creators and entrepreneurs. 100% fine cotton weave.",
    colors: ["#ffffff", "#f1f5f9"],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 29,
    title: "Summer Funny Graphic Casual Tee",
    category: "motivation",
    price: 749,
    originalPrice: 999,
    badge: "",
    badgeText: "",
    rating: 4.6,
    reviews: 62,
    gsm: "210 GSM",
    image: "T Shirt Images/MIMOORN Women Fashion Summer Funny Printed Casual Graphic T-Shirts.jpg",
    description: "Lightweight summer tee with humorous typography print.",
    colors: ["#ffffff", "#e2e8f0"],
    sizes: ["S", "M", "L"]
  },
  {
    id: 30,
    title: "Statement Faith Vintage Washed Tee",
    category: "y2k",
    price: 999,
    originalPrice: 1399,
    badge: "",
    badgeText: "",
    rating: 4.8,
    reviews: 95,
    gsm: "250 GSM",
    image: "T Shirt Images/Mais que uma peça de roupa, uma declaração de fé….jpg",
    description: "Heavyweight washed cotton with signature statement graphics.",
    colors: ["#18181b", "#27272a"],
    sizes: ["M", "L", "XL"]
  },
  {
    id: 31,
    title: "Letter Graphic Casual Round Neck Tee",
    category: "minimalist",
    price: 849,
    originalPrice: 1199,
    badge: "new",
    badgeText: "New",
    rating: 4.7,
    reviews: 48,
    gsm: "230 GSM",
    image: "T Shirt Images/Men Round Neck Letter Graphic Short Sleeve Casual T-Shirt, For Going Out, For Husband.jpg",
    description: "Versatile round neck casual tee with bold lettering on chest.",
    colors: ["#0f172a", "#1e293b"],
    sizes: ["S", "M", "L", "XL", "XXL"]
  },
  {
    id: 32,
    title: "Streetwear Collection Modern Tee",
    category: "streetwear",
    price: 899,
    originalPrice: 1249,
    badge: "bestseller",
    badgeText: "Top Rated",
    rating: 4.9,
    reviews: 215,
    gsm: "240 GSM",
    image: "T Shirt Images/SHEIN USA.jpg",
    description: "Modern street culture aesthetic with clean cut lines and pre-shrunk cotton fabric.",
    colors: ["#000000", "#18181b"],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 33,
    title: "Slatra Fly Away Embroidered Tee",
    category: "oversized",
    price: 1199,
    originalPrice: 1699,
    badge: "smart",
    badgeText: "Embroidered",
    rating: 5.0,
    reviews: 180,
    gsm: "270 GSM",
    image: "T Shirt Images/Slatra Fly Away Nakış Detay Oversize Tshirt Ürün….jpg",
    description: "Luxury embroidered detail on back and sleeve. Custom boxy streetwear silhouette.",
    colors: ["#09090b", "#1e1e24"],
    sizes: ["M", "L", "XL"]
  },
  {
    id: 34,
    title: "Slatra Graffiti Custom Wash Tee",
    category: "y2k",
    price: 1149,
    originalPrice: 1599,
    badge: "trending",
    badgeText: "Hot Item",
    rating: 4.9,
    reviews: 156,
    gsm: "260 GSM",
    image: "T Shirt Images/Slatra Grafiti Yan Baskı Özel Yıkamalı Kumaş….jpg",
    description: "Custom side graffiti print with mineral wash finish.",
    colors: ["#27272a", "#3f3f46"],
    sizes: ["M", "L", "XL", "XXL"]
  },
  {
    id: 35,
    title: "Smart Lock Tech Edition Tee",
    category: "minimalist",
    price: 999,
    originalPrice: 1399,
    badge: "smart",
    badgeText: "Smart Official",
    rating: 5.0,
    reviews: 340,
    gsm: "250 GSM",
    image: "T Shirt Images/Smart lock t-shurt.jpg",
    description: "Official SmartBill Tech Series Tee. Features smart billing QR badge printed on hem.",
    colors: ["#09090b", "#ffffff"],
    sizes: ["S", "M", "L", "XL", "XXL"]
  },
  {
    id: 36,
    title: "Spidy Drip Unisex Graphic Tee",
    category: "streetwear",
    price: 899,
    originalPrice: 1249,
    badge: "bestseller",
    badgeText: "Best Seller",
    rating: 4.8,
    reviews: 204,
    gsm: "240 GSM",
    image: "T Shirt Images/Spidy drip unisex T-shirt.jpg",
    description: "Spider drip graffiti graphic tee. High density rubberized print detail.",
    colors: ["#000000", "#18181b"],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 37,
    title: "The Peekaboo Panda Graphic Tee",
    category: "motivation",
    price: 799,
    originalPrice: 1099,
    badge: "",
    badgeText: "",
    rating: 4.7,
    reviews: 92,
    gsm: "220 GSM",
    image: "T Shirt Images/The Peekaboo Panda.jpg",
    description: "Cute panda illustration pocket print tee. Organic soft touch cotton.",
    colors: ["#ffffff", "#f1f5f9"],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 38,
    title: "2026 Streetwear Fashion Inspiration Tee",
    category: "streetwear",
    price: 1099,
    originalPrice: 1599,
    badge: "trending",
    badgeText: "2026 Trend",
    rating: 4.9,
    reviews: 138,
    gsm: "260 GSM",
    image: "T Shirt Images/Trending Men’s Oversized Graphic T-Shirt 2026 _ Streetwear Fashion Inspiration.jpg",
    description: "Forward-thinking 2026 streetwear graphic tee with signature relaxed posture fit.",
    colors: ["#18181b", "#09090b"],
    sizes: ["M", "L", "XL", "XXL"]
  },
  {
    id: 39,
    title: "Harajuku Grunge Y2K Acid Wash Tee",
    category: "y2k",
    price: 1249,
    originalPrice: 1799,
    badge: "smart",
    badgeText: "Grunge Drop",
    rating: 5.0,
    reviews: 280,
    gsm: "280 GSM",
    image: "T Shirt Images/Weetiotio Mens Oversized Graphic Tees Streetwear Baggy Shirts Y2k Vintage Acid Wash Cotton Tshirt Harajuku Grunge Shirt Men.jpg",
    description: "Harajuku grunge acid washed baggy streetwear tee. Premium 280 GSM combed cotton.",
    colors: ["#1e293b", "#0f172a"],
    sizes: ["M", "L", "XL", "XXL"]
  },
  {
    id: 40,
    title: "Winning Is The Only Option Hustle Tee",
    category: "motivation",
    price: 849,
    originalPrice: 1199,
    badge: "bestseller",
    badgeText: "Hustle Pick",
    rating: 4.9,
    reviews: 198,
    gsm: "240 GSM",
    image: "T Shirt Images/Winning Is The Only Option _ Hustle & Motivation Tee.jpg",
    description: "High performance motivational typography tee for founders, builders & hustlers.",
    colors: ["#000000", "#18181b"],
    sizes: ["S", "M", "L", "XL", "XXL"]
  },
  {
    id: 41,
    title: "SmartBill Official Limited Tee",
    category: "minimalist",
    price: 1299,
    originalPrice: 1899,
    badge: "smart",
    badgeText: "SmartBill VIP",
    rating: 5.0,
    reviews: 450,
    gsm: "300 GSM",
    image: "T Shirt Images/👇.jpg",
    description: "Flagship SmartBill Apparel edition. High GSM heavyweight construction with instant smart invoice generation built-in.",
    colors: ["#09090b", "#6366f1"],
    sizes: ["S", "M", "L", "XL", "XXL"]
  }
];

// 2. STATE MANAGEMENT
let state = {
  products: [...PRODUCTS],
  cart: [],
  wishlist: new Set(),
  currentCategory: 'all',
  searchQuery: '',
  sortBy: 'featured',
  selectedQuickViewProduct: null,
  selectedQuickViewSize: 'L',
  selectedQuickViewQty: 1,
  appliedPromo: null
};

// 3. INITIALIZATION
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  setupEventListeners();
  updateCartBadge();
  updateWishlistBadge();
});

// 4. EVENT LISTENERS & CATEGORY SELECTION
function setActiveCategory(category) {
  state.currentCategory = category;

  // Sync Catalog Filter Pills
  const filterBtns = document.querySelectorAll('.filter-pill');
  filterBtns.forEach(btn => {
    if (btn.getAttribute('data-category') === category) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Sync Header Nav Links
  const navLinks = document.querySelectorAll('.nav-links a.nav-link-item');
  navLinks.forEach(link => {
    const cat = link.getAttribute('data-category');
    if (cat === category || (category === 'all' && cat === 'all')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  renderProducts();
}

function setupEventListeners() {
  // Category Filter Pills
  const filterBtns = document.querySelectorAll('.filter-pill');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const cat = e.currentTarget.getAttribute('data-category');
      if (cat) setActiveCategory(cat);
    });
  });

  // Header Nav Links
  const navLinks = document.querySelectorAll('.nav-links a.nav-link-item');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const cat = e.currentTarget.getAttribute('data-category');
      if (cat && cat !== 'business') {
        setActiveCategory(cat);
      }
    });
  });

  // Search Inputs
  const searchInput = document.getElementById('catalogSearchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value.toLowerCase().trim();
      renderProducts();
    });
  }

  // Sort Dropdown
  const sortSelect = document.getElementById('sortSelect');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      state.sortBy = e.target.value;
      renderProducts();
    });
  }

  // Cart Drawer Triggers
  const cartBtn = document.getElementById('cartDrawerBtn');
  const closeCartBtn = document.getElementById('closeCartBtn');
  const cartBackdrop = document.getElementById('cartDrawerBackdrop');

  if (cartBtn) cartBtn.addEventListener('click', openCartDrawer);
  if (closeCartBtn) closeCartBtn.addEventListener('click', closeCartDrawer);
  if (cartBackdrop) {
    cartBackdrop.addEventListener('click', (e) => {
      if (e.target === cartBackdrop) closeCartDrawer();
    });
  }

  // Quick View Modal Close
  const closeQV = document.getElementById('closeQuickView');
  const qvBackdrop = document.getElementById('quickViewBackdrop');
  if (closeQV) closeQV.addEventListener('click', closeQuickViewModal);
  if (qvBackdrop) {
    qvBackdrop.addEventListener('click', (e) => {
      if (e.target === qvBackdrop) closeQuickViewModal();
    });
  }

  // Size Chart Modal
  const sizeChartBtn = document.getElementById('sizeChartTrigger');
  const closeSizeChart = document.getElementById('closeSizeChart');
  const sizeChartBackdrop = document.getElementById('sizeChartBackdrop');
  if (sizeChartBtn) sizeChartBtn.addEventListener('click', openSizeChartModal);
  if (closeSizeChart) closeSizeChart.addEventListener('click', closeSizeChartModal);
  if (sizeChartBackdrop) {
    sizeChartBackdrop.addEventListener('click', (e) => {
      if (e.target === sizeChartBackdrop) closeSizeChartModal();
    });
  }

  // Checkout Button -> SmartBill Invoice Generator
  const checkoutBtn = document.getElementById('checkoutBtn');
  const closeReceipt = document.getElementById('closeReceiptModal');
  const receiptBackdrop = document.getElementById('receiptModalBackdrop');
  if (checkoutBtn) checkoutBtn.addEventListener('click', generateSmartBillInvoice);
  if (closeReceipt) closeReceipt.addEventListener('click', closeReceiptModal);
  if (receiptBackdrop) {
    receiptBackdrop.addEventListener('click', (e) => {
      if (e.target === receiptBackdrop) closeReceiptModal();
    });
  }

  // Promo Code Apply
  const applyPromoBtn = document.getElementById('applyPromoBtn');
  if (applyPromoBtn) {
    applyPromoBtn.addEventListener('click', applyPromoCode);
  }
}

// 5. RENDER PRODUCTS GRID
function renderProducts() {
  const container = document.getElementById('productGrid');
  if (!container) return;

  // Filter
  let filtered = state.products.filter(item => {
    const matchesCategory = (state.currentCategory === 'all') || (item.category === state.currentCategory);
    const matchesSearch = !state.searchQuery || 
                          item.title.toLowerCase().includes(state.searchQuery) ||
                          item.description.toLowerCase().includes(state.searchQuery) ||
                          item.gsm.toLowerCase().includes(state.searchQuery);
    return matchesCategory && matchesSearch;
  });

  // Sort
  if (state.sortBy === 'price-low') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (state.sortBy === 'price-high') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (state.sortBy === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  // Count text
  const countEl = document.getElementById('productCountText');
  if (countEl) {
    countEl.textContent = `Showing ${filtered.length} of ${state.products.length} SmartBill T-Shirts`;
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; color: var(--text-muted);">
        <i class="ri-search-line" style="font-size: 48px; color: var(--text-dim); margin-bottom: 12px; display: block;"></i>
        <h3 style="font-size: 20px; color: var(--text-main); margin-bottom: 8px;">No SmartBill T-Shirts Found</h3>
        <p>Try searching for another keyword or change your filter category.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(product => {
    const isWishlisted = state.wishlist.has(product.id);
    const badgeClass = product.badge ? `badge-${product.badge}` : '';

    return `
      <div class="product-card">
        <div class="card-image-wrapper">
          ${product.badge ? `<span class="card-badge ${badgeClass}">${product.badgeText}</span>` : ''}
          <button class="wishlist-btn ${isWishlisted ? 'active' : ''}" onclick="toggleWishlist(${product.id}, event)" title="Add to Wishlist">
            <i class="${isWishlisted ? 'ri-heart-fill' : 'ri-heart-line'}"></i>
          </button>
          <img src="${product.image}" alt="${product.title}" loading="lazy" decoding="async" onerror="this.src='https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=500&auto=format&fit=crop&q=60'">
          <div class="card-overlay">
            <button class="overlay-btn btn-quickview" onclick="openQuickViewModal(${product.id})">
              <i class="ri-eye-line"></i> Quick View
            </button>
            <button class="overlay-btn btn-addcart" onclick="quickAddToCart(${product.id}, event)">
              <i class="ri-shopping-bag-line"></i> Add
            </button>
          </div>
        </div>
        <div class="card-info">
          <span class="card-category">${product.category} • ${product.gsm}</span>
          <h3 class="card-title">${product.title}</h3>
          <div class="card-rating">
            <i class="ri-star-fill"></i>
            <span>${product.rating} (${product.reviews})</span>
          </div>
          <div class="card-bottom">
            <div class="card-price">
              <span class="price-current">₹${product.price}</span>
              ${product.originalPrice ? `<span class="price-original">₹${product.originalPrice}</span>` : ''}
            </div>
            <span class="card-spec">SmartBill GST</span>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// 6. QUICK VIEW MODAL LOGIC
function openQuickViewModal(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  state.selectedQuickViewProduct = product;
  state.selectedQuickViewSize = 'L';
  state.selectedQuickViewQty = 1;

  document.getElementById('qvImage').src = product.image;
  document.getElementById('qvCategory').textContent = `${product.category.toUpperCase()} • ${product.gsm}`;
  document.getElementById('qvTitle').textContent = product.title;
  document.getElementById('qvPriceNow').textContent = `₹${product.price}`;
  document.getElementById('qvPriceOld').textContent = product.originalPrice ? `₹${product.originalPrice}` : '';
  document.getElementById('qvDesc').textContent = product.description;
  document.getElementById('qvRating').textContent = `${product.rating} ★ (${product.reviews} customer reviews)`;
  document.getElementById('qvQtyVal').textContent = '1';

  // Size buttons render
  const sizeContainer = document.getElementById('qvSizes');
  if (sizeContainer) {
    sizeContainer.innerHTML = product.sizes.map(size => `
      <button class="size-btn ${size === state.selectedQuickViewSize ? 'selected' : ''}" onclick="selectQuickViewSize('${size}', this)">
        ${size}
      </button>
    `).join('');
  }

  // Open modal
  const backdrop = document.getElementById('quickViewBackdrop');
  if (backdrop) backdrop.classList.add('active');
}

function closeQuickViewModal() {
  const backdrop = document.getElementById('quickViewBackdrop');
  if (backdrop) backdrop.classList.remove('active');
}

function selectQuickViewSize(size, btnEl) {
  state.selectedQuickViewSize = size;
  const parent = btnEl.parentElement;
  parent.querySelectorAll('.size-btn').forEach(b => b.classList.remove('selected'));
  btnEl.classList.add('selected');
}

function changeQVQty(delta) {
  let newQty = state.selectedQuickViewQty + delta;
  if (newQty < 1) newQty = 1;
  if (newQty > 10) newQty = 10;
  state.selectedQuickViewQty = newQty;
  document.getElementById('qvQtyVal').textContent = newQty;
}

function addQVToCart() {
  if (!state.selectedQuickViewProduct) return;
  addToCart(state.selectedQuickViewProduct, state.selectedQuickViewSize, state.selectedQuickViewQty);
  closeQuickViewModal();
  openCartDrawer();
}

// 7. CART MANAGEMENT
function quickAddToCart(productId, event) {
  if (event) event.stopPropagation();
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;
  addToCart(product, 'L', 1);
  showToast(`Added "${product.title}" to cart!`, 'ri-shopping-bag-3-fill');
}

function addToCart(product, size, qty) {
  const existingIndex = state.cart.findIndex(item => item.product.id === product.id && item.size === size);
  if (existingIndex > -1) {
    state.cart[existingIndex].qty += qty;
  } else {
    state.cart.push({ product, size, qty });
  }
  updateCartBadge();
  renderCartDrawer();
}

function updateCartQty(index, delta) {
  state.cart[index].qty += delta;
  if (state.cart[index].qty <= 0) {
    state.cart.splice(index, 1);
  }
  updateCartBadge();
  renderCartDrawer();
}

function removeFromCart(index) {
  state.cart.splice(index, 1);
  updateCartBadge();
  renderCartDrawer();
  showToast('Item removed from cart', 'ri-delete-bin-line');
}

function updateCartBadge() {
  const totalCount = state.cart.reduce((sum, item) => sum + item.qty, 0);
  const badge = document.getElementById('cartBadge');
  if (badge) {
    badge.textContent = totalCount;
    badge.style.display = totalCount > 0 ? 'flex' : 'none';
  }
}

function renderCartDrawer() {
  const listEl = document.getElementById('cartItemsList');
  if (!listEl) return;

  if (state.cart.length === 0) {
    listEl.innerHTML = `
      <div style="text-align: center; padding: 60px 20px; color: var(--text-muted);">
        <i class="ri-shopping-bag-line" style="font-size: 54px; color: var(--text-dim); margin-bottom: 12px; display: block;"></i>
        <h4 style="font-size: 18px; color: var(--text-main); margin-bottom: 6px;">Your Cart is Empty</h4>
        <p style="font-size: 13px;">Add some fresh SmartBill tees to get started!</p>
      </div>
    `;
    updateCartTotals(0, 0, 0);
    return;
  }

  let subtotal = 0;

  listEl.innerHTML = state.cart.map((item, index) => {
    const itemTotal = item.product.price * item.qty;
    subtotal += itemTotal;

    return `
      <div class="cart-item">
        <img src="${item.product.image}" alt="${item.product.title}" class="cart-item-img">
        <div class="cart-item-info">
          <div>
            <h4 class="cart-item-title">${item.product.title}</h4>
            <div class="cart-item-meta">Size: <strong>${item.size}</strong> • ${item.product.gsm}</div>
          </div>
          <div style="display: flex; align-items: center; justify-content: space-between; margin-top: 8px;">
            <div class="qty-control" style="transform: scale(0.85); transform-origin: left center;">
              <button class="qty-btn" onclick="updateCartQty(${index}, -1)">-</button>
              <span class="qty-val">${item.qty}</span>
              <button class="qty-btn" onclick="updateCartQty(${index}, 1)">+</button>
            </div>
            <span class="cart-item-price">₹${itemTotal}</span>
          </div>
        </div>
        <i class="ri-close-line cart-item-remove" onclick="removeFromCart(${index})" title="Remove item"></i>
      </div>
    `;
  }).join('');

  let discount = 0;
  if (state.appliedPromo === 'SMARTBILL10') {
    discount = Math.round(subtotal * 0.1);
  }

  const shipping = subtotal >= 999 ? 0 : 99;
  const total = subtotal - discount + shipping;

  updateCartTotals(subtotal, discount, shipping, total);
}

function updateCartTotals(subtotal, discount, shipping, total = 0) {
  const subTotalEl = document.getElementById('cartSubtotal');
  const discountEl = document.getElementById('cartDiscount');
  const shippingEl = document.getElementById('cartShipping');
  const totalEl = document.getElementById('cartTotal');
  const freeShipProgress = document.getElementById('freeShippingText');

  if (subTotalEl) subTotalEl.textContent = `₹${subtotal}`;
  if (discountEl) discountEl.textContent = discount > 0 ? `-₹${discount}` : '₹0';
  if (shippingEl) shippingEl.textContent = subtotal > 0 ? (shipping === 0 ? 'FREE' : `₹${shipping}`) : '₹0';
  if (totalEl) totalEl.textContent = `₹${total}`;

  if (freeShipProgress) {
    if (subtotal >= 999) {
      freeShipProgress.innerHTML = `<span style="color: var(--accent); font-weight: 700;"><i class="ri-truck-line"></i> You unlocked FREE Express Shipping!</span>`;
    } else {
      const diff = 999 - subtotal;
      freeShipProgress.innerHTML = `Add <strong>₹${diff}</strong> more to unlock FREE Express Shipping!`;
    }
  }
}

function openCartDrawer() {
  renderCartDrawer();
  const backdrop = document.getElementById('cartDrawerBackdrop');
  if (backdrop) backdrop.classList.add('active');
}

function closeCartDrawer() {
  const backdrop = document.getElementById('cartDrawerBackdrop');
  if (backdrop) backdrop.classList.remove('active');
}

function applyPromoCode() {
  const input = document.getElementById('promoCodeInput');
  if (!input) return;
  const code = input.value.trim().toUpperCase();

  if (code === 'SMARTBILL10') {
    state.appliedPromo = 'SMARTBILL10';
    showToast('Promo Code "SMARTBILL10" Applied (10% OFF)!', 'ri-discount-percent-fill');
    renderCartDrawer();
  } else if (code === '') {
    showToast('Please enter a valid promo code', 'ri-error-warning-line');
  } else {
    showToast('Invalid Code! Try using SMARTBILL10', 'ri-error-warning-line');
  }
}

// 8. WISHLIST MANAGEMENT
function toggleWishlist(productId, event) {
  if (event) event.stopPropagation();
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  if (state.wishlist.has(productId)) {
    state.wishlist.delete(productId);
    showToast(`Removed "${product.title}" from Wishlist`, 'ri-heart-dislike-line');
  } else {
    state.wishlist.add(productId);
    showToast(`Saved "${product.title}" to Wishlist!`, 'ri-heart-fill');
  }

  updateWishlistBadge();
  renderProducts();
}

function updateWishlistBadge() {
  const badge = document.getElementById('wishlistBadge');
  if (badge) {
    badge.textContent = state.wishlist.size;
    badge.style.display = state.wishlist.size > 0 ? 'flex' : 'none';
  }
}

// 9. SMARTBILL DIGITAL RECEIPT GENERATOR MODAL
function generateSmartBillInvoice() {
  if (state.cart.length === 0) {
    showToast('Your cart is empty! Add products first.', 'ri-shopping-cart-2-line');
    return;
  }

  closeCartDrawer();

  const invoiceNo = 'SB-2026-' + Math.floor(100000 + Math.random() * 900000);
  const now = new Date();
  const dateStr = now.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
  const timeStr = now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });

  let subtotal = 0;
  const itemsRowsHTML = state.cart.map(item => {
    const itemTotal = item.product.price * item.qty;
    subtotal += itemTotal;
    return `
      <tr style="border-bottom: 1px dashed #e5e7eb;">
        <td style="padding: 8px 0; font-weight: 600;">${item.product.title} (${item.size})</td>
        <td style="padding: 8px 0; text-align: center;">${item.qty}</td>
        <td style="padding: 8px 0; text-align: right;">₹${item.product.price}</td>
        <td style="padding: 8px 0; text-align: right; font-weight: 700;">₹${itemTotal}</td>
      </tr>
    `;
  }).join('');

  let discount = state.appliedPromo === 'SMARTBILL10' ? Math.round(subtotal * 0.1) : 0;
  const gst = Math.round((subtotal - discount) * 0.05); // 5% GST for apparel
  const shipping = subtotal >= 999 ? 0 : 99;
  const grandTotal = subtotal - discount + gst + shipping;

  const invoiceHTML = `
    <div style="padding: 30px; background: #ffffff; color: #111827; font-family: monospace; border-radius: 12px; border: 1px solid #e5e7eb;">
      <div style="text-align: center; border-bottom: 2px dashed #4f46e5; padding-bottom: 16px; margin-bottom: 20px;">
        <h2 style="margin: 0; color: #4f46e5; font-size: 24px; font-weight: 800; font-family: sans-serif;">SmartBill Apparel Store</h2>
        <p style="margin: 4px 0 0; color: #6b7280; font-size: 13px;">Automated Digital Invoicing System</p>
        <div style="margin-top: 10px; inline-block; background: #e0e7ff; color: #4338ca; padding: 4px 12px; border-radius: 99px; font-size: 12px; font-weight: 700;">
          GSTIN: 33AAACB9876C1Z5 • Verified Store
        </div>
      </div>

      <div style="display: flex; justify-content: space-between; margin-bottom: 20px; font-size: 13px;">
        <div>
          <div><strong>Invoice No:</strong> ${invoiceNo}</div>
          <div><strong>Date:</strong> ${dateStr} at ${timeStr}</div>
        </div>
        <div style="text-align: right;">
          <div><strong>Customer:</strong> SmartBill VIP User</div>
          <div><strong>Payment Mode:</strong> UPI / Instant Bill</div>
        </div>
      </div>

      <table style="width: 100%; border-collapse: collapse; font-size: 13px; margin-bottom: 20px;">
        <thead>
          <tr style="border-bottom: 2px solid #111827; text-align: left;">
            <th style="padding-bottom: 8px;">Item Description</th>
            <th style="padding-bottom: 8px; text-align: center;">Qty</th>
            <th style="padding-bottom: 8px; text-align: right;">Rate</th>
            <th style="padding-bottom: 8px; text-align: right;">Amount</th>
          </tr>
        </thead>
        <tbody>
          ${itemsRowsHTML}
        </tbody>
      </table>

      <div style="border-top: 2px dashed #e5e7eb; padding-top: 12px; margin-top: 12px; font-size: 13px;">
        <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
          <span>Subtotal</span>
          <span>₹${subtotal}</span>
        </div>
        ${discount > 0 ? `
          <div style="display: flex; justify-content: space-between; margin-bottom: 4px; color: #059669;">
            <span>Promo Discount (SMARTBILL10)</span>
            <span>-₹${discount}</span>
          </div>
        ` : ''}
        <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
          <span>GST (5% Apparel Tax)</span>
          <span>₹${gst}</span>
        </div>
        <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
          <span>Express Delivery</span>
          <span>${shipping === 0 ? 'FREE' : '₹' + shipping}</span>
        </div>
        <div style="display: flex; justify-content: space-between; font-size: 18px; font-weight: 800; border-top: 2px solid #111827; padding-top: 10px; margin-top: 6px;">
          <span>Grand Total</span>
          <span style="color: #4f46e5;">₹${grandTotal}</span>
        </div>
      </div>

      <div style="margin-top: 24px; padding: 16px; background: #f9fafb; border-radius: 8px; text-align: center; border: 1px solid #e5e7eb;">
        <div style="font-size: 13px; font-weight: 700; color: #374151; margin-bottom: 6px;">Scan to Verify Digital SmartBill Receipt</div>
        <img src="https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=SmartBill-Verification-${invoiceNo}" alt="SmartBill QR Code" style="width: 100px; height: 100px; margin: 0 auto; display: block; border-radius: 6px;">
        <p style="margin: 8px 0 0; font-size: 11px; color: #9ca3af;">Thank you for shopping at SmartBill Apparel!</p>
      </div>

      <div style="margin-top: 20px; display: flex; gap: 12px; justify-content: center;">
        <button onclick="window.print()" style="background: #4f46e5; color: #fff; border: none; padding: 10px 24px; border-radius: 6px; font-weight: 700; cursor: pointer; display: flex; align-items: center; gap: 8px;">
          <i class="ri-printer-line"></i> Print SmartBill Receipt
        </button>
        <button onclick="clearCartAndCloseReceipt()" style="background: #10b981; color: #fff; border: none; padding: 10px 24px; border-radius: 6px; font-weight: 700; cursor: pointer; display: flex; align-items: center; gap: 8px;">
          <i class="ri-checkbox-circle-line"></i> Complete Order
        </button>
      </div>
    </div>
  `;

  const container = document.getElementById('receiptInvoiceContainer');
  if (container) container.innerHTML = invoiceHTML;

  const backdrop = document.getElementById('receiptModalBackdrop');
  if (backdrop) backdrop.classList.add('active');
}

function closeReceiptModal() {
  const backdrop = document.getElementById('receiptModalBackdrop');
  if (backdrop) backdrop.classList.remove('active');
}

function clearCartAndCloseReceipt() {
  state.cart = [];
  state.appliedPromo = null;
  updateCartBadge();
  renderCartDrawer();
  closeReceiptModal();
  showToast('Order Placed Successfully! SmartBill sent to your WhatsApp.', 'ri-checkbox-circle-fill');
}

// 10. MODAL UTILS
function openSizeChartModal() {
  const backdrop = document.getElementById('sizeChartBackdrop');
  if (backdrop) backdrop.classList.add('active');
}

function closeSizeChartModal() {
  const backdrop = document.getElementById('sizeChartBackdrop');
  if (backdrop) backdrop.classList.remove('active');
}

// 11. TOAST SYSTEM
function showToast(message, iconClass = 'ri-notification-3-line') {
  let container = document.getElementById('toastContainer');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toastContainer';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<i class="${iconClass}"></i> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}
