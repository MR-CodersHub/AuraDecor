/**
 * @fileoverview AuraDecor - Premium Handicraft & Home Decor E-Commerce
 * @description Main JavaScript file — Vanilla ES6, no frameworks, no jQuery.
 * @version 1.0.0
 */

'use strict';

/** Base path for generated page links (root index vs. pages/ folder). */
const PAGES_BASE = window.location.pathname.replace(/\\/g, '/').includes('/pages/') ? '' : 'pages/';

/* ============================================================
   1. PRODUCT DATA
   ============================================================ */

/** @type {Array<Object>} Master product catalogue */
const products = [
  {
    id: 1,
    name: "Terracotta Sunrise Vase",
    category: "Pottery & Ceramics",
    categorySlug: "pottery-ceramics",
    price: 2850,
    originalPrice: 3500,
    image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=600",
    images: [
      "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=600",
      "https://images.unsplash.com/photo-1610701596061-2ecf227e85b2?w=600",
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=600"
    ],
    description: "Hand-thrown terracotta vase with a warm sunrise glaze, perfect for dried florals.",
    fullDescription: "Each piece is lovingly hand-thrown on a traditional potter's wheel in the clay-rich ateliers of Rajasthan. The warm sunrise glaze transitions from deep ochre at the base to a luminous amber at the rim, capturing the essence of a desert dawn. No two pieces are identical — slight variations in form and glaze are the hallmark of authentic handcraft.",
    materials: "Natural terracotta clay, mineral oxide glaze",
    dimensions: "H 28cm × D 14cm",
    weight: "0.8kg",
    artisan: "Priya Sharma",
    origin: "Rajasthan, India",
    inStock: true,
    isNew: false,
    isBestseller: true,
    rating: 4.8,
    reviews: 112,
    tags: ["vase", "terracotta", "pottery", "home-decor"]
  },
  {
    id: 2,
    name: "Indigo Block-Print Cushion Cover",
    category: "Handmade Textiles",
    categorySlug: "handmade-textiles",
    price: 850,
    originalPrice: 1100,
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600",
    images: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600",
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=600"
    ],
    description: "Hand block-printed cushion cover in traditional indigo and white motifs.",
    fullDescription: "Crafted by master block printers in the ancient city of Bagru, this cushion cover features hand-carved wooden block prints dipped in natural indigo dye. Each print is precisely aligned by eye, lending an organic rhythm that machines cannot replicate.",
    materials: "100% cotton, natural indigo dye",
    dimensions: "45cm × 45cm",
    weight: "0.2kg",
    artisan: "Ramesh Chand",
    origin: "Bagru, Rajasthan",
    inStock: true,
    isNew: true,
    isBestseller: false,
    rating: 4.6,
    reviews: 74,
    tags: ["cushion", "textile", "block-print", "indigo"]
  },
  {
    id: 3,
    name: "Sheesham Wood Serving Tray",
    category: "Wooden Handicrafts",
    categorySlug: "wooden-handicrafts",
    price: 1950,
    originalPrice: 2400,
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600",
    images: [
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600"
    ],
    description: "Solid sheesham wood serving tray with hand-carved floral border.",
    fullDescription: "Hewn from a single slab of aged sheesham (Indian rosewood), this generous serving tray is hand-carved with a delicate floral border by artisans in Saharanpur. The natural grain of the wood gleams beneath a food-safe beeswax finish.",
    materials: "Sheesham wood, beeswax finish",
    dimensions: "50cm × 30cm × 4cm",
    weight: "1.1kg",
    artisan: "Mohammed Yusuf",
    origin: "Saharanpur, UP, India",
    inStock: true,
    isNew: false,
    isBestseller: true,
    rating: 4.9,
    reviews: 203,
    tags: ["tray", "wood", "serving", "kitchen"]
  },
  {
    id: 4,
    name: "Macramé Wall Hanging",
    category: "Wall Art & Hangings",
    categorySlug: "wall-art-hangings",
    price: 3200,
    originalPrice: 3200,
    image: "https://images.unsplash.com/photo-1518893494013-481c1d8ed3fd?w=600",
    images: [
      "https://images.unsplash.com/photo-1518893494013-481c1d8ed3fd?w=600",
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=600"
    ],
    description: "Boho-chic macramé wall hanging handknotted from natural cotton rope.",
    fullDescription: "Every knot in this expansive wall hanging is tied by hand over the course of three full days. Using a centuries-old knotting vocabulary — square knots, lark's-head knots, spiral half-hitches — our artisan builds a living tapestry that casts beautiful shadows in natural light.",
    materials: "3mm natural cotton rope, driftwood dowel",
    dimensions: "W 60cm × L 90cm",
    weight: "0.6kg",
    artisan: "Ananya Verma",
    origin: "Goa, India",
    inStock: true,
    isNew: true,
    isBestseller: false,
    rating: 4.7,
    reviews: 89,
    tags: ["macrame", "wall-art", "boho", "cotton"]
  },
  {
    id: 5,
    name: "Rattan Pendant Lamp Shade",
    category: "Handmade Lighting",
    categorySlug: "handmade-lighting",
    price: 4100,
    originalPrice: 5000,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600",
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600",
      "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=600"
    ],
    description: "Handwoven rattan pendant lamp shade casting warm dappled light.",
    fullDescription: "Woven from sustainably harvested rattan cane, this pendant shade creates a magical lattice of light and shadow. The weaving follows a traditional pattern from coastal Karnataka, updated with an open-top design to allow heat to escape freely. Compatible with standard E27 fittings.",
    materials: "Natural rattan, steel frame",
    dimensions: "D 40cm × H 30cm",
    weight: "0.7kg",
    artisan: "Kavitha Nair",
    origin: "Karnataka, India",
    inStock: true,
    isNew: false,
    isBestseller: true,
    rating: 4.8,
    reviews: 156,
    tags: ["lamp", "rattan", "lighting", "pendant"]
  },
  {
    id: 6,
    name: "Dhokra Brass Elephant Figurine",
    category: "Metal Crafts",
    categorySlug: "metal-crafts",
    price: 2200,
    originalPrice: 2700,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600",
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600"
    ],
    description: "Lost-wax cast brass elephant in the ancient Dhokra tribal tradition.",
    fullDescription: "Using the 4,000-year-old lost-wax (cire-perdue) casting technique, tribal artisans in Bastar shape this elephant in beeswax, encase it in clay, then pour molten brass. When the clay mould is broken, a one-of-a-kind sculpture emerges. No two are alike.",
    materials: "Recycled brass alloy",
    dimensions: "H 12cm × L 15cm",
    weight: "0.9kg",
    artisan: "Sukdev Jangde",
    origin: "Bastar, Chhattisgarh, India",
    inStock: true,
    isNew: false,
    isBestseller: false,
    rating: 4.5,
    reviews: 61,
    tags: ["brass", "elephant", "dhokra", "figurine"]
  },
  {
    id: 7,
    name: "Hand-painted Warli Art Frame",
    category: "Wall Art & Hangings",
    categorySlug: "wall-art-hangings",
    price: 1750,
    originalPrice: 2000,
    image: "https://images.unsplash.com/photo-1579783901586-d88db74b4fe4?w=600",
    images: [
      "https://images.unsplash.com/photo-1579783901586-d88db74b4fe4?w=600",
      "https://images.unsplash.com/photo-1518893494013-481c1d8ed3fd?w=600"
    ],
    description: "Traditional Warli tribal art hand-painted on canvas, framed in mango wood.",
    fullDescription: "The Warli people of Maharashtra have painted their world in circles, triangles and squares for millennia. This original painting, executed with a bamboo pen dipped in rice paste on red ochre-primed canvas, depicts a harvest celebration scene teeming with figures, animals and trees.",
    materials: "Canvas, natural rice paste pigment, mango wood frame",
    dimensions: "40cm × 50cm",
    weight: "0.5kg",
    artisan: "Jivya Soma Mashe",
    origin: "Palghar, Maharashtra, India",
    inStock: true,
    isNew: false,
    isBestseller: false,
    rating: 4.6,
    reviews: 48,
    tags: ["warli", "art", "painting", "tribal"]
  },
  {
    id: 8,
    name: "Jute & Cotton Storage Basket",
    category: "Decorative Accessories",
    categorySlug: "decorative-accessories",
    price: 1200,
    originalPrice: 1500,
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=600",
    images: [
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=600",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600"
    ],
    description: "Coiled jute and cotton storage basket with leather handles.",
    fullDescription: "Spun from hand-twisted jute and cotton cord, this storage basket is coiled and stitched by women artisans in a fair-trade collective in West Bengal. The sturdy leather handles are reclaimed from offcuts at a local tannery. Perfect for magazines, throws or plant pots.",
    materials: "Jute, cotton, reclaimed leather",
    dimensions: "D 35cm × H 25cm",
    weight: "0.5kg",
    artisan: "Mina Biswas",
    origin: "West Bengal, India",
    inStock: true,
    isNew: true,
    isBestseller: false,
    rating: 4.4,
    reviews: 93,
    tags: ["basket", "jute", "storage", "organizer"]
  },
  {
    id: 9,
    name: "Blue Pottery Chai Cups Set",
    category: "Tableware & Kitchen Decor",
    categorySlug: "tableware-kitchen",
    price: 1600,
    originalPrice: 2000,
    image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=600",
    images: [
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=600",
      "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=600"
    ],
    description: "Set of 6 Jaipur blue pottery chai cups with cobalt floral motifs.",
    fullDescription: "Jaipur's legendary blue pottery uses a unique quartz-based clay that produces an exceptionally smooth, translucent body. Each cup is hand-decorated with cobalt and turquoise oxide glazes in intricate floral patterns before a single firing. Lead-free and food-safe.",
    materials: "Quartz-based clay, cobalt oxide glaze",
    dimensions: "D 7cm × H 8cm (each)",
    weight: "1.2kg (set)",
    artisan: "Gopal Saini",
    origin: "Jaipur, Rajasthan, India",
    inStock: true,
    isNew: false,
    isBestseller: true,
    rating: 4.9,
    reviews: 287,
    tags: ["cups", "blue-pottery", "chai", "tableware"]
  },
  {
    id: 10,
    name: "Hand-carved Neem Wood Spatula Set",
    category: "Tableware & Kitchen Decor",
    categorySlug: "tableware-kitchen",
    price: 650,
    originalPrice: 800,
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600",
    images: [
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600"
    ],
    description: "Antibacterial neem wood cooking spatulas, hand-carved set of 3.",
    fullDescription: "Neem wood's natural antibacterial properties make it the ideal kitchen companion. Each spatula in this set of three is hand-carved to a different head shape — flat, slotted, and angled — from a single branch of a mature neem tree felled in its natural cycle. Finished with food-grade coconut oil.",
    materials: "Neem wood, coconut oil finish",
    dimensions: "30cm / 28cm / 25cm (lengths)",
    weight: "0.3kg",
    artisan: "Devaraj Pillai",
    origin: "Tamil Nadu, India",
    inStock: true,
    isNew: false,
    isBestseller: false,
    rating: 4.7,
    reviews: 134,
    tags: ["spatula", "neem", "kitchen", "wood"]
  },
  {
    id: 11,
    name: "Madhubani Art Greeting Cards Pack",
    category: "Handmade Gifts",
    categorySlug: "handmade-gifts",
    price: 480,
    originalPrice: 600,
    image: "https://images.unsplash.com/photo-1579783901586-d88db74b4fe4?w=600",
    images: [
      "https://images.unsplash.com/photo-1579783901586-d88db74b4fe4?w=600",
      "https://images.unsplash.com/photo-1518893494013-481c1d8ed3fd?w=600"
    ],
    description: "Pack of 8 hand-painted Madhubani art greeting cards with envelopes.",
    fullDescription: "Painted by women artists from the Mithila region of Bihar, each card in this pack depicts a scene from Hindu mythology rendered in the vivid, double-line style of Madhubani. Natural mineral pigments on handmade lokta paper ensure the colours remain rich for decades.",
    materials: "Handmade lokta paper, natural mineral pigments",
    dimensions: "14cm × 10cm (each card)",
    weight: "0.1kg",
    artisan: "Sita Devi Collective",
    origin: "Madhubani, Bihar, India",
    inStock: true,
    isNew: true,
    isBestseller: false,
    rating: 4.5,
    reviews: 55,
    tags: ["cards", "madhubani", "gift", "art"]
  },
  {
    id: 12,
    name: "Copper Hammered Water Bottle",
    category: "Metal Crafts",
    categorySlug: "metal-crafts",
    price: 1800,
    originalPrice: 2200,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600"
    ],
    description: "Pure copper water bottle with hand-hammered texture, Ayurveda-approved.",
    fullDescription: "Storing water in copper is an Ayurvedic practice thousands of years old. This bottle is hand-hammered by coppersmiths in Moradabad using a technique called takaai, creating the distinctive faceted surface that also improves grip. The threaded lid ensures a leak-proof seal.",
    materials: "99.5% pure copper",
    dimensions: "H 26cm × D 7cm, 1 litre capacity",
    weight: "0.4kg",
    artisan: "Hafiz Khan",
    origin: "Moradabad, UP, India",
    inStock: true,
    isNew: false,
    isBestseller: true,
    rating: 4.8,
    reviews: 342,
    tags: ["copper", "bottle", "ayurveda", "kitchen"]
  },
  {
    id: 13,
    name: "Handloom Ikat Throw Blanket",
    category: "Handmade Textiles",
    categorySlug: "handmade-textiles",
    price: 3800,
    originalPrice: 4500,
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600",
    images: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600",
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=600"
    ],
    description: "Handloom double-ikat throw in earthy terracotta and sage tones.",
    fullDescription: "Double-ikat — where both warp and weft threads are resist-dyed before weaving — is one of the world's most demanding textile arts. This throw from Patan, Gujarat, takes a master weaver nearly two weeks to complete. The geometric pattern locks together perfectly only when the weave is complete.",
    materials: "100% handspun cotton",
    dimensions: "150cm × 110cm",
    weight: "0.9kg",
    artisan: "Rohit Salvi",
    origin: "Patan, Gujarat, India",
    inStock: false,
    isNew: false,
    isBestseller: true,
    rating: 4.9,
    reviews: 178,
    tags: ["ikat", "throw", "textile", "handloom"]
  },
  {
    id: 14,
    name: "Bamboo Wind Chimes",
    category: "Decorative Accessories",
    categorySlug: "decorative-accessories",
    price: 750,
    originalPrice: 950,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600",
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600",
      "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=600"
    ],
    description: "Hand-cut bamboo wind chimes with mellow earthy tones.",
    fullDescription: "Cut and tuned by hand from mature Moso bamboo grown in Assam, these wind chimes produce a soft, mellow resonance quite unlike metal counterparts. Each tube is cut to a precise length to create a pentatonic scale — naturally pleasing whatever the wind's mood.",
    materials: "Moso bamboo, jute cord",
    dimensions: "L 45cm total",
    weight: "0.2kg",
    artisan: "Biren Das",
    origin: "Assam, India",
    inStock: true,
    isNew: true,
    isBestseller: false,
    rating: 4.3,
    reviews: 41,
    tags: ["wind-chime", "bamboo", "decor", "garden"]
  },
  {
    id: 15,
    name: "Papier-mâché Kashmir Bowl",
    category: "Decorative Accessories",
    categorySlug: "decorative-accessories",
    price: 2100,
    originalPrice: 2600,
    image: "https://images.unsplash.com/photo-1610701596061-2ecf227e85b2?w=600",
    images: [
      "https://images.unsplash.com/photo-1610701596061-2ecf227e85b2?w=600",
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=600"
    ],
    description: "Hand-painted Kashmiri papier-mâché bowl with intricate chinar leaf motifs.",
    fullDescription: "The craft of Kashmiri papier-mâché (kar i qalamdani) is a meticulous process: waste paper is pulped, moulded, dried, lacquered, and then painstakingly painted over many sessions with the finest squirrel-hair brushes. This bowl features the iconic chinar leaf of Kashmir rendered in gold and deep crimson.",
    materials: "Recycled paper pulp, lacquer, mineral pigments, 24k gold leaf highlights",
    dimensions: "D 20cm × H 8cm",
    weight: "0.3kg",
    artisan: "Ghulam Nabi",
    origin: "Srinagar, Kashmir, India",
    inStock: true,
    isNew: false,
    isBestseller: false,
    rating: 4.6,
    reviews: 67,
    tags: ["kashmir", "papier-mache", "bowl", "decor"]
  },
  {
    id: 16,
    name: "Handwoven Seagrass Placemat Set",
    category: "Tableware & Kitchen Decor",
    categorySlug: "tableware-kitchen",
    price: 980,
    originalPrice: 1200,
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=600",
    images: [
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=600",
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600"
    ],
    description: "Set of 4 oval seagrass placemats with natural herringbone weave.",
    fullDescription: "Harvested from tidal flats along the Kerala coastline, seagrass is dried, dyed with plant-based colours, then woven into these placemats on small hand looms. The herringbone pattern gives them an elegant structure that complements both rustic and contemporary table settings. Heat-resistant and spot-washable.",
    materials: "Seagrass, plant-based dye",
    dimensions: "45cm × 30cm (each)",
    weight: "0.4kg (set)",
    artisan: "Leela Krishnan",
    origin: "Kerala, India",
    inStock: true,
    isNew: false,
    isBestseller: false,
    rating: 4.5,
    reviews: 88,
    tags: ["placemat", "seagrass", "table", "kitchen"]
  },
  {
    id: 17,
    name: "Resin & Pressed Flower Wall Clock",
    category: "Wall Art & Hangings",
    categorySlug: "wall-art-hangings",
    price: 2650,
    originalPrice: 3000,
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=600",
    images: [
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=600",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600"
    ],
    description: "Handmade clear resin wall clock with real pressed wildflowers.",
    fullDescription: "Real wildflowers — marigolds, lavender sprigs, ferns and Queen Anne's Lace — are pressed and dried, then carefully arranged in a crystal-clear resin disc. A precision quartz movement keeps perfect time behind this living botanical art piece.",
    materials: "Bio-resin, real pressed flowers, quartz clock movement",
    dimensions: "D 30cm",
    weight: "0.7kg",
    artisan: "Nandita Reddy",
    origin: "Bangalore, Karnataka, India",
    inStock: true,
    isNew: true,
    isBestseller: false,
    rating: 4.7,
    reviews: 102,
    tags: ["clock", "resin", "flowers", "wall-art"]
  },
  {
    id: 18,
    name: "Hand-stitched Kantha Quilt",
    category: "Handmade Textiles",
    categorySlug: "handmade-textiles",
    price: 5500,
    originalPrice: 6500,
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600",
    images: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600",
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=600"
    ],
    description: "Queen-size Kantha quilt hand-stitched from recycled saris.",
    fullDescription: "Kantha is the art of layering old saris and binding them with the simplest running stitch, creating a dense, quilted textile of extraordinary warmth and beauty. This queen-size quilt comprises seven layers of recycled Bengali saris, united by millions of tiny stitches over six weeks of patient, meditative work.",
    materials: "Recycled cotton saris",
    dimensions: "230cm × 200cm",
    weight: "1.8kg",
    artisan: "Ruma Ghosh",
    origin: "Murshidabad, West Bengal, India",
    inStock: true,
    isNew: false,
    isBestseller: true,
    rating: 4.9,
    reviews: 231,
    tags: ["kantha", "quilt", "textile", "recycled"]
  },
  {
    id: 19,
    name: "Iron Jali Candle Lantern",
    category: "Handmade Lighting",
    categorySlug: "handmade-lighting",
    price: 1450,
    originalPrice: 1800,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600",
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600"
    ],
    description: "Hand-forged iron jali lantern with geometric cutwork pattern.",
    fullDescription: "Forged and chiselled by hand in a traditional blacksmith's workshop in Jodhpur, this jali (lattice) lantern casts mesmerising geometric shadow patterns across walls and ceilings. The black oxide finish prevents rust and suits both indoor and sheltered outdoor use. Fits standard tealight candles.",
    materials: "Hand-forged iron, black oxide finish",
    dimensions: "H 22cm × D 14cm",
    weight: "0.9kg",
    artisan: "Shankar Lal",
    origin: "Jodhpur, Rajasthan, India",
    inStock: true,
    isNew: false,
    isBestseller: false,
    rating: 4.6,
    reviews: 73,
    tags: ["lantern", "iron", "candle", "jali"]
  },
  {
    id: 20,
    name: "Bamboo Photo Frame Set",
    category: "Decorative Accessories",
    categorySlug: "decorative-accessories",
    price: 1100,
    originalPrice: 1400,
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600",
    images: [
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600"
    ],
    description: "Set of 3 bamboo photo frames in graduated sizes, eco-friendly.",
    fullDescription: "Three graduated frames — 4×6, 5×7, and 8×10 inches — crafted from certified sustainable bamboo with a natural carbonised finish. The frames can stand or hang and include acid-free backing boards to protect your photos. A thoughtful, planet-friendly gift.",
    materials: "Sustainable bamboo, glass, acid-free board",
    dimensions: "4×6, 5×7, 8×10 inches",
    weight: "0.8kg (set)",
    artisan: "Arvind Bose",
    origin: "Tripura, India",
    inStock: true,
    isNew: false,
    isBestseller: false,
    rating: 4.4,
    reviews: 59,
    tags: ["frame", "bamboo", "photo", "eco"]
  },
  {
    id: 21,
    name: "Handmade Soy Wax Candle Set",
    category: "Handmade Gifts",
    categorySlug: "handmade-gifts",
    price: 1350,
    originalPrice: 1600,
    image: "https://images.unsplash.com/photo-1610701596061-2ecf227e85b2?w=600",
    images: [
      "https://images.unsplash.com/photo-1610701596061-2ecf227e85b2?w=600",
      "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=600"
    ],
    description: "Set of 3 hand-poured soy wax candles with sandalwood, jasmine and rose scents.",
    fullDescription: "Hand-poured in small batches in a studio in Pondicherry, these candles use 100% natural soy wax sourced from Indian farms. The fragrance oils are phthalate-free blends of pure essential oils — sandalwood-vetiver, jasmine-ylang ylang, and Indian rose-geranium. Cotton wicks ensure a clean, even burn.",
    materials: "Soy wax, cotton wick, phthalate-free fragrance oils",
    dimensions: "H 8cm × D 7cm (each)",
    weight: "0.6kg (set)",
    artisan: "Chitra Subramaniam",
    origin: "Pondicherry, India",
    inStock: true,
    isNew: true,
    isBestseller: false,
    rating: 4.7,
    reviews: 119,
    tags: ["candle", "soy", "gift", "fragrance"]
  },
  {
    id: 22,
    name: "Recycled Glass Mosaic Planter",
    category: "Pottery & Ceramics",
    categorySlug: "pottery-ceramics",
    price: 1900,
    originalPrice: 2300,
    image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=600",
    images: [
      "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=600",
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=600"
    ],
    description: "Ceramic planter encrusted with recycled glass mosaic in ocean hues.",
    fullDescription: "A sturdy ceramic body is hand-encrusted with shards of recycled glass in cobalt, turquoise and seafoam greens, grouted with white cement and sealed for outdoor durability. Each shard is individually placed to build up the fluid wave-like pattern. Drainage hole included.",
    materials: "Ceramic, recycled glass mosaic, white cement grout",
    dimensions: "D 22cm × H 18cm",
    weight: "1.3kg",
    artisan: "Farida Sheikh",
    origin: "Mumbai, Maharashtra, India",
    inStock: true,
    isNew: false,
    isBestseller: false,
    rating: 4.5,
    reviews: 44,
    tags: ["planter", "mosaic", "glass", "recycled"]
  },
  {
    id: 23,
    name: "Pattachitra Silk Scarf",
    category: "Handmade Gifts",
    categorySlug: "handmade-gifts",
    price: 2400,
    originalPrice: 2900,
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=600",
    images: [
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=600",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600"
    ],
    description: "Hand-painted Pattachitra motifs on pure silk scarf, Odisha.",
    fullDescription: "The ancient scroll painting art of Odisha's Puri district is transferred here onto the finest mulberry silk. Artisans use the traditional Pattachitra palette of natural colours — conch shell white, lamp black, indigo, and mineral reds — to depict scenes from the Jagannath temple lore. Dry clean only.",
    materials: "Pure mulberry silk, natural mineral pigments",
    dimensions: "180cm × 50cm",
    weight: "0.1kg",
    artisan: "Aparna Mahapatra",
    origin: "Puri, Odisha, India",
    inStock: true,
    isNew: false,
    isBestseller: false,
    rating: 4.8,
    reviews: 36,
    tags: ["scarf", "silk", "pattachitra", "gift"]
  },
  {
    id: 24,
    name: "Wrought Iron Wall Hooks Set",
    category: "Metal Crafts",
    categorySlug: "metal-crafts",
    price: 1250,
    originalPrice: 1500,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600",
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600"
    ],
    description: "Set of 5 hand-forged wrought iron wall hooks with leaf design.",
    fullDescription: "Hand-forged over an open coal forge by a third-generation blacksmith in Jaipur, each hook in this set of five bears a hand-hammered leaf at its tip. The varying patina across the set proves each is individually made. Mount them in a row in the hallway, or scatter them around the home — they hold up to 5kg each.",
    materials: "Wrought iron, beeswax finish",
    dimensions: "L 12cm × projection 8cm (each)",
    weight: "1.0kg (set)",
    artisan: "Raju Sharma",
    origin: "Jaipur, Rajasthan, India",
    inStock: true,
    isNew: false,
    isBestseller: false,
    rating: 4.6,
    reviews: 81,
    tags: ["hooks", "iron", "wall", "storage"]
  }
];

/* ============================================================
   2. THEME TOGGLE
   ============================================================ */

/**
 * Initialises the light/dark theme system.
 * Reads saved preference from localStorage, applies it, and wires the toggle button.
 */
function initTheme() {
  const savedTheme = localStorage.getItem('aura-theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  const toggleBtn = document.getElementById('theme-toggle');
  if (!toggleBtn) return;

  toggleBtn.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('aura-theme', next);
    updateThemeIcon(next);
  });
}

/**
 * Updates the theme toggle button's icon.
 * @param {string} theme - 'light' or 'dark'
 */
function updateThemeIcon(theme) {
  const btn = document.getElementById('theme-toggle');
  if (!btn) return;
  const icon = btn.querySelector('i') || btn.querySelector('span.icon');
  if (icon) {
    icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
  }
  btn.setAttribute('title', theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode');
  btn.setAttribute('aria-label', btn.getAttribute('title'));
}

/* ============================================================
   3. RTL / LTR TOGGLE
   ============================================================ */

/**
 * Initialises the RTL/LTR direction system.
 * Reads saved direction from localStorage and wires the toggle button.
 */
function initRTL() {
  const savedDir = localStorage.getItem('aura-dir') || 'ltr';
  document.documentElement.setAttribute('dir', savedDir);
  updateRTLButton(savedDir);

  const toggleBtn = document.getElementById('rtl-toggle');
  if (!toggleBtn) return;

  toggleBtn.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('dir');
    const next = current === 'rtl' ? 'ltr' : 'rtl';
    document.documentElement.setAttribute('dir', next);
    localStorage.setItem('aura-dir', next);
    updateRTLButton(next);
  });
}

/**
 * Updates the RTL toggle button label/icon.
 * @param {string} dir - 'ltr' or 'rtl'
 */
function updateRTLButton(dir) {
  const btn = document.getElementById('rtl-toggle');
  if (!btn) return;
  btn.textContent = dir === 'rtl' ? 'LTR' : 'RTL';
  btn.setAttribute('title', dir === 'rtl' ? 'Switch to Left-to-Right' : 'Switch to Right-to-Left');
  btn.setAttribute('aria-label', btn.getAttribute('title'));
}

/* ============================================================
   4. NAVBAR
   ============================================================ */

/**
 * Initialises navbar sticky-scroll behaviour and active link highlighting.
 */
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  // Sticky on scroll
  const onScroll = () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // Run on load

  // Active page highlighting
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = navbar.querySelectorAll('a[href]');
  navLinks.forEach(link => {
    const href = link.getAttribute('href').split('/').pop();
    if (href === currentPath) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    }
  });
}

/* ============================================================
   5. MOBILE MENU
   ============================================================ */

/**
 * Initialises mobile hamburger menu: toggle, outside click, link click close.
 */
function initMobileMenu() {
  const navbar = document.querySelector('.navbar');
  const hamburger = document.querySelector('.hamburger, .nav-toggle, [data-nav-toggle]');
  if (!navbar || !hamburger) return;

  const openMenu = () => {
    navbar.classList.add('navbar-open');
    document.body.style.overflow = 'hidden';
    hamburger.setAttribute('aria-expanded', 'true');
    const firstLink = document.querySelector('.mobile-menu .mobile-nav-link');
    if (firstLink) requestAnimationFrame(() => firstLink.focus());
  };

  const closeMenu = () => {
    navbar.classList.remove('navbar-open');
    document.body.style.overflow = '';
    hamburger.setAttribute('aria-expanded', 'false');
  };

  hamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    navbar.classList.contains('navbar-open') ? closeMenu() : openMenu();
  });

  // Handle navigation link clicks
  navbar.querySelectorAll('.nav-links a, .mobile-menu a').forEach(link => {
    link.addEventListener('click', (e) => {
      // If it's a dropdown toggle on mobile screen
      if (link.parentElement.classList.contains('has-dropdown') && window.innerWidth <= 1024) {
        // If clicking the "Home" dropdown label, toggle the dropdown menu
        const dropdown = link.parentElement.querySelector('.dropdown-menu');
        if (dropdown && e.target === link) {
          e.preventDefault();
          link.parentElement.classList.toggle('dropdown-open');
          dropdown.style.display = link.parentElement.classList.contains('dropdown-open') ? 'block' : 'none';
          return;
        }
      }
      closeMenu();
    });
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (navbar.classList.contains('navbar-open') && !navbar.contains(e.target)) {
      closeMenu();
    }
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navbar.classList.contains('navbar-open')) {
      closeMenu();
    }
  });

  // Auto-close when window resizes back to desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth > 1024 && navbar.classList.contains('navbar-open')) {
      closeMenu();
    }
  });
}

/* ============================================================
   6. CART SYSTEM
   ============================================================ */

let cart = [];

/**
 * Loads cart from localStorage.
 */
function loadCart() {
  try {
    cart = JSON.parse(localStorage.getItem('aura-cart')) || [];
  } catch {
    cart = [];
  }
}

/**
 * Saves cart to localStorage.
 */
function saveCart() {
  localStorage.setItem('aura-cart', JSON.stringify(cart));
}

/**
 * Adds a product to cart or increases its quantity.
 * @param {number} productId
 * @param {number} [qty=1]
 */
function addToCart(productId, qty = 1) {
  let product = null;
  if (typeof window.SHOP_PRODUCTS !== 'undefined') {
    const sp = window.SHOP_PRODUCTS.find(p => p.id === productId);
    if (sp) product = { id: sp.id, name: sp.name, price: sp.price, image: sp.img };
  }
  if (!product) {
    product = products.find(p => p.id === productId);
  }
  if (!product) return;
  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.qty = Math.min(existing.qty + qty, 99);
  } else {
    cart.push({
      id: productId,
      qty,
      name: product.name,
      price: product.price,
      image: product.image || product.img || (product.images && product.images[0]) || ''
    });
  }
  saveCart();
  updateCartCount();
  renderCart();
  openCart();
}

/**
 * Removes a product entirely from the cart.
 * @param {number} productId
 */
function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  saveCart();
  updateCartCount();
  renderCart();
}

/**
 * Updates the quantity of a cart item. Removes if qty reaches 0.
 * @param {number} productId
 * @param {number} qty
 */
function updateQty(productId, qty) {
  if (qty <= 0) {
    removeFromCart(productId);
    return;
  }
  const item = cart.find(i => i.id === productId);
  if (item) {
    item.qty = Math.min(qty, 99);
    saveCart();
    updateCartCount();
    renderCart();
  }
}

/**
 * Calculates cart totals.
 * @returns {{ subtotal: number, itemCount: number }}
 */
function getCartTotal() {
  let subtotal = 0;
  let itemCount = 0;
  cart.forEach(item => {
    let price = item.price;
    if (price === undefined) {
      let product = products.find(p => p.id === item.id);
      if (!product && typeof window.SHOP_PRODUCTS !== 'undefined') {
        product = window.SHOP_PRODUCTS.find(p => p.id === item.id);
      }
      price = product ? product.price : 0;
    }
    subtotal += price * item.qty;
    itemCount += item.qty;
  });
  return { subtotal, itemCount };
}

/**
 * Builds and injects cart drawer HTML.
 */
function renderCart() {
  const cartItemsEl = document.getElementById('cart-items');
  const cartSubtotalEl = document.getElementById('cart-subtotal');
  const footerPanel = document.getElementById('cartFooterPanel');
  if (!cartItemsEl) return;

  if (cart.length === 0) {
    cartItemsEl.innerHTML = `
      <div class="cart-empty">
        <i class="fas fa-shopping-bag cart-empty-icon" style="font-size:3rem;margin-bottom:0.8rem;color:var(--warm-sand);"></i>
        <h4 class="cart-empty-title">Your cart is empty</h4>
        <p class="cart-empty-text">Looks like you haven't added any handcrafted treasures yet.</p>
        <a href="${PAGES_BASE}services.html" class="btn btn-primary" style="margin-top:0.8rem;">Explore Collections</a>
      </div>`;
    if (cartSubtotalEl) cartSubtotalEl.textContent = '₹0';
    if (footerPanel) footerPanel.style.display = 'none';
    return;
  }

  if (footerPanel) footerPanel.style.display = 'block';

  cartItemsEl.innerHTML = cart.map(item => {
    let p = null;
    if (typeof window.SHOP_PRODUCTS !== 'undefined') {
      const sp = window.SHOP_PRODUCTS.find(prod => prod.id === item.id);
      if (sp) p = { id: sp.id, name: sp.name, price: sp.price, image: sp.img };
    }
    if (!p) {
      p = products.find(prod => prod.id === item.id);
    }
    if (!p && item.name && item.price) {
      p = item;
    }
    if (!p) return '';
    const imgUrl = (item && item.image) || p.image || p.img || (p.images && p.images[0]) || 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400';
    const itemName = item.name || p.name;
    const itemPrice = item.price !== undefined ? item.price : p.price;
    return `
      <div class="cart-item" data-id="${p.id}">
        <img class="cart-item-img" src="${imgUrl}" alt="${itemName}" loading="lazy" onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400';">
        <div class="cart-item-info">
          <p class="cart-item-name">${itemName}</p>
          <p class="cart-item-price">₹${itemPrice.toLocaleString('en-IN')}</p>
          <div class="cart-item-footer">
            <div class="qty-control">
              <button class="qty-btn" aria-label="Decrease quantity"
                onclick="updateQty(${p.id}, ${item.qty - 1})">−</button>
              <span class="qty-value">${item.qty}</span>
              <button class="qty-btn" aria-label="Increase quantity"
                onclick="updateQty(${p.id}, ${item.qty + 1})">+</button>
            </div>
            <button class="cart-item-remove" aria-label="Remove from cart"
              onclick="removeFromCart(${p.id})">
              <i class="fas fa-trash-can"></i>
            </button>
          </div>
        </div>
      </div>`;
  }).join('');

  const { subtotal } = getCartTotal();
  if (cartSubtotalEl) cartSubtotalEl.textContent = `₹${subtotal.toLocaleString('en-IN')}`;
}

/**
 * Updates the cart item count badge in the navbar.
 */
function updateCartCount() {
  const { itemCount } = getCartTotal();
  document.querySelectorAll('.cart-count, [data-cart-count]').forEach(el => {
    el.textContent = itemCount;
    el.style.display = itemCount > 0 ? 'inline-flex' : 'none';
  });
}

/** Opens the cart drawer. */
function openCart() {
  const drawer = document.getElementById('cart-drawer');
  const overlay = document.getElementById('cart-overlay');
  renderCart();
  if (drawer) drawer.classList.add('open');
  if (overlay) overlay.classList.add('open');
  document.body.classList.add('cart-open');
  document.body.style.overflow = 'hidden';
}

/** Closes the cart drawer. */
function closeCart() {
  const drawer = document.getElementById('cart-drawer');
  const overlay = document.getElementById('cart-overlay');
  if (drawer) drawer.classList.remove('open');
  if (overlay) overlay.classList.remove('open');
  document.body.classList.remove('cart-open');
  document.body.style.overflow = '';
}

/**
 * Wires up all cart-related event listeners and loads persisted data.
 */
function initCartSystem() {
  loadCart();
  updateCartCount();
  renderCart();

  // Open cart
  document.querySelectorAll('[data-open-cart], .cart-trigger, #cart-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openCart();
    });
  });

  // Close cart
  document.querySelectorAll('[data-close-cart], .cart-close, #cartClose').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      closeCart();
    });
  });

  const overlay = document.getElementById('cart-overlay');
  if (overlay) overlay.addEventListener('click', closeCart);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeCart();
  });
}

// Global exposure for onclick handlers
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateQty = updateQty;
window.openCart = openCart;
window.closeCart = closeCart;
window.renderCart = renderCart;
window.openCheckout = openCheckout;
window.closeCheckout = closeCheckout;
window.handlePlaceOrder = handlePlaceOrder;

/**
 * Opens a real checkout modal with order summary, delivery details, and payment options.
 */
function openCheckout() {
  closeCart();
  if (!cart || cart.length === 0) {
    if (typeof showToast === 'function') {
      showToast('Your cart is empty. Add items before checking out.', 'info');
    }
    return;
  }

  let modal = document.getElementById('checkout-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.id = 'checkout-modal';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    document.body.appendChild(modal);
  }

  const { subtotal } = getCartTotal();
  const shipping = subtotal >= 2000 ? 0 : 150;
  const total = subtotal + shipping;

  const itemsHtml = cart.map(item => {
    let p = null;
    if (typeof window.SHOP_PRODUCTS !== 'undefined') {
      const sp = window.SHOP_PRODUCTS.find(x => x.id === item.id);
      if (sp) p = { name: sp.name, price: sp.price, image: sp.img };
    }
    if (!p) p = products.find(x => x.id === item.id);
    const name = item.name || (p && p.name) || 'Artisan Decor';
    const price = item.price !== undefined ? item.price : (p ? p.price : 0);
    const img = (item && item.image) || (p && (p.image || p.img)) || 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=120';
    return `
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:12px;padding-bottom:12px;border-bottom:1px solid var(--border-color);">
        <img src="${img}" alt="${name}" style="width:52px;height:52px;border-radius:8px;object-fit:cover;flex-shrink:0;">
        <div style="flex:1;min-width:0;">
          <p style="font-size:0.9rem;font-weight:600;margin:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${name}</p>
          <span style="font-size:0.8rem;color:var(--text-secondary);">Qty: ${item.qty} × ₹${price.toLocaleString('en-IN')}</span>
        </div>
        <strong style="font-size:0.95rem;color:var(--charcoal-brown);">₹${(price * item.qty).toLocaleString('en-IN')}</strong>
      </div>
    `;
  }).join('');

  modal.innerHTML = `
    <div class="modal" style="max-width: 640px; width: 94%; max-height: 92vh; overflow-y: auto; padding: 0;">
      <div class="modal-header" style="padding: 1.2rem 1.5rem; border-bottom: 1px solid var(--border-color);">
        <div style="display:flex;align-items:center;gap:10px;">
          <span style="display:inline-flex;align-items:center;justify-content:center;width:34px;height:34px;border-radius:50%;background:rgba(185,104,78,0.12);color:var(--terracotta);"><i class="fas fa-lock"></i></span>
          <div>
            <h3 class="modal-title" style="margin:0;font-size:1.25rem;">Secure Checkout</h3>
            <span style="font-size:0.75rem;color:var(--deep-olive);font-weight:600;"><i class="fas fa-shield-halved"></i> 256-bit SSL Protected</span>
          </div>
        </div>
        <button class="modal-close" type="button" onclick="closeCheckout()" aria-label="Close checkout" style="cursor:pointer;border:none;background:none;font-size:1.4rem;">&times;</button>
      </div>
      <div class="modal-body" id="checkout-modal-body" style="padding: 1.5rem;">
        <form id="checkout-form" onsubmit="handlePlaceOrder(event)">
          <div style="margin-bottom: 1.5rem;">
            <h4 style="font-family:var(--font-serif);font-size:1.05rem;margin-bottom:0.8rem;color:var(--charcoal-brown);">Order Summary</h4>
            <div style="max-height: 180px; overflow-y: auto; padding-right: 6px; margin-bottom: 1rem;">
              ${itemsHtml}
            </div>
            <div style="background:var(--bg-secondary);padding:1rem;border-radius:10px;font-size:0.875rem;">
              <div style="display:flex;justify-content:space-between;margin-bottom:6px;">
                <span>Subtotal</span>
                <span>₹${subtotal.toLocaleString('en-IN')}</span>
              </div>
              <div style="display:flex;justify-content:space-between;margin-bottom:6px;">
                <span>Shipping</span>
                <span>${shipping === 0 ? '<strong style="color:var(--deep-olive);">FREE</strong>' : '₹' + shipping}</span>
              </div>
              <div style="display:flex;justify-content:space-between;font-weight:700;font-size:1.05rem;border-top:1px dashed var(--border-color);padding-top:8px;margin-top:6px;color:var(--terracotta);">
                <span>Total Amount</span>
                <span>₹${total.toLocaleString('en-IN')}</span>
              </div>
            </div>
          </div>

          <div style="margin-bottom: 1.5rem;">
            <h4 style="font-family:var(--font-serif);font-size:1.05rem;margin-bottom:0.8rem;color:var(--charcoal-brown);">Delivery Address</h4>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:10px;">
              <input type="text" class="form-control" name="name" placeholder="Full Name" required style="width:100%;padding:9px 12px;border:1px solid var(--border-color);border-radius:8px;font-size:0.875rem;">
              <input type="tel" class="form-control" name="phone" placeholder="Phone (+91)" required pattern="[0-9]{10}" title="10-digit mobile number" style="width:100%;padding:9px 12px;border:1px solid var(--border-color);border-radius:8px;font-size:0.875rem;">
            </div>
            <input type="text" class="form-control" name="address" placeholder="Street Address / Flat / Landmark" required style="width:100%;padding:9px 12px;border:1px solid var(--border-color);border-radius:8px;font-size:0.875rem;margin-bottom:10px;">
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
              <input type="text" class="form-control" name="city" placeholder="City" required style="width:100%;padding:9px 12px;border:1px solid var(--border-color);border-radius:8px;font-size:0.875rem;">
              <input type="text" class="form-control" name="pincode" placeholder="Pincode" required pattern="[0-9]{6}" style="width:100%;padding:9px 12px;border:1px solid var(--border-color);border-radius:8px;font-size:0.875rem;">
            </div>
          </div>

          <div style="margin-bottom: 1.5rem;">
            <h4 style="font-family:var(--font-serif);font-size:1.05rem;margin-bottom:0.8rem;color:var(--charcoal-brown);">Payment Method</h4>
            <div style="display:flex;flex-direction:column;gap:8px;font-size:0.875rem;">
              <label style="display:flex;align-items:center;gap:10px;padding:10px 14px;border:1.5px solid var(--terracotta);border-radius:8px;cursor:pointer;background:rgba(185,104,78,0.04);">
                <input type="radio" name="payment" value="UPI / QR" checked>
                <span><strong>UPI / QR Code</strong> (Google Pay, PhonePe, Paytm)</span>
              </label>
              <label style="display:flex;align-items:center;gap:10px;padding:10px 14px;border:1px solid var(--border-color);border-radius:8px;cursor:pointer;">
                <input type="radio" name="payment" value="Card / Netbanking">
                <span>Credit / Debit Card or Netbanking</span>
              </label>
              <label style="display:flex;align-items:center;gap:10px;padding:10px 14px;border:1px solid var(--border-color);border-radius:8px;cursor:pointer;">
                <input type="radio" name="payment" value="Cash on Delivery">
                <span>Cash on Delivery (COD)</span>
              </label>
            </div>
          </div>

          <button class="btn btn-primary w-100" type="submit" style="width:100%;padding:0.9rem;font-weight:700;font-size:1rem;border-radius:8px;display:flex;align-items:center;justify-content:center;gap:8px;background:var(--terracotta);color:#fff;border:none;cursor:pointer;">
            <i class="fas fa-lock"></i> Place Order (₹${total.toLocaleString('en-IN')})
          </button>
        </form>
      </div>
    </div>
  `;

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCheckout() {
  const modal = document.getElementById('checkout-modal');
  if (modal) modal.classList.remove('open');
  document.body.style.overflow = '';
}

function handlePlaceOrder(e) {
  e.preventDefault();
  const form = e.target;
  const paymentMethod = form.querySelector('input[name="payment"]:checked')?.value || 'UPI';
  const orderId = 'AD-' + Math.floor(100000 + Math.random() * 900000);

  const body = document.getElementById('checkout-modal-body');
  if (body) {
    body.innerHTML = `
      <div style="text-align:center;padding:2rem 1rem;">
        <div style="width:72px;height:72px;border-radius:50%;background:#e8f5e9;color:#2e7d32;display:flex;align-items:center;justify-content:center;margin:0 auto 1.25rem;font-size:2.2rem;">
          <i class="fas fa-check"></i>
        </div>
        <h3 style="font-family:var(--font-serif);font-size:1.75rem;margin-bottom:0.4rem;color:var(--charcoal-brown);">Order Placed Successfully!</h3>
        <p style="color:var(--terracotta);font-weight:700;margin-bottom:1rem;font-size:1.05rem;">Order #${orderId}</p>
        <p style="color:var(--text-secondary);max-width:440px;margin:0 auto 1.5rem;line-height:1.6;font-size:0.92rem;">
          Thank you for supporting authentic artisan families! We have received your order and are lovingly preparing your handcrafted pieces in Jaipur.
        </p>
        <div style="background:var(--bg-secondary);padding:1rem 1.4rem;border-radius:10px;margin:0 auto 1.8rem;max-width:380px;text-align:left;font-size:0.875rem;">
          <div style="display:flex;justify-content:space-between;margin-bottom:6px;">
            <span style="color:var(--text-secondary);">Estimated Delivery:</span>
            <strong style="color:var(--charcoal-brown);">3–5 Business Days</strong>
          </div>
          <div style="display:flex;justify-content:space-between;">
            <span style="color:var(--text-secondary);">Payment:</span>
            <strong style="color:var(--charcoal-brown);">${paymentMethod} (Confirmed)</strong>
          </div>
        </div>
        <button class="btn btn-primary" type="button" onclick="closeCheckout()" style="padding:0.75rem 2.2rem;font-weight:700;background:var(--terracotta);color:#fff;border:none;border-radius:8px;cursor:pointer;">Continue Shopping</button>
      </div>
    `;
  }

  // Clear cart
  cart = [];
  saveCart();
  updateCartCount();
  renderCart();
}

/* ============================================================
   7. WISHLIST SYSTEM
   ============================================================ */

let wishlist = [];

/**
 * Loads wishlist from localStorage.
 */
function loadWishlist() {
  try {
    wishlist = JSON.parse(localStorage.getItem('aura-wishlist')) || [];
  } catch {
    wishlist = [];
  }
}

/**
 * Saves wishlist to localStorage.
 */
function saveWishlist() {
  localStorage.setItem('aura-wishlist', JSON.stringify(wishlist));
}

/**
 * Adds a product ID to the wishlist (if not already present).
 * @param {number} productId
 */
function addToWishlist(productId) {
  if (!wishlist.includes(productId)) {
    wishlist.push(productId);
    saveWishlist();
    updateWishlistCount();
  }
}

/**
 * Removes a product ID from the wishlist.
 * @param {number} productId
 */
function removeFromWishlist(productId) {
  wishlist = wishlist.filter(id => id !== productId);
  saveWishlist();
  updateWishlistCount();
}

/**
 * Checks whether a product is in the wishlist.
 * @param {number} productId
 * @returns {boolean}
 */
function isInWishlist(productId) {
  return wishlist.includes(productId);
}

/**
 * Toggles a product in the wishlist.
 * @param {number} productId
 * @returns {{ added: boolean }}
 */
function toggleWishlist(productId) {
  if (isInWishlist(productId)) {
    removeFromWishlist(productId);
    return { added: false };
  } else {
    addToWishlist(productId);
    return { added: true };
  }
}

/**
 * Updates the wishlist count badge in the navbar.
 */
function updateWishlistCount() {
  document.querySelectorAll('.wishlist-count, [data-wishlist-count]').forEach(el => {
    el.textContent = wishlist.length;
    el.style.display = wishlist.length > 0 ? 'flex' : 'none';
  });
}

/**
 * Displays a toast notification.
 * @param {string} message
 * @param {'success'|'error'|'info'|'warning'} [type='success']
 */
function showToast(message, type = 'success') {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.setAttribute('aria-live', 'polite');
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  const icons = { success: 'fa-check-circle', error: 'fa-times-circle', info: 'fa-info-circle', warning: 'fa-exclamation-circle' };
  toast.innerHTML = `<i class="fas ${icons[type] || icons.success}"></i><span>${message}</span>`;
  container.appendChild(toast);

  // Trigger animation
  requestAnimationFrame(() => toast.classList.add('show'));

  setTimeout(() => {
    toast.classList.remove('show');
    toast.addEventListener('transitionend', () => toast.remove(), { once: true });
  }, 3000);
}

/**
 * Wires up all wishlist-related event listeners.
 */
function initWishlistSystem() {
  loadWishlist();
  updateWishlistCount();

  // Delegate wishlist button clicks
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-wishlist-btn]');
    if (!btn) return;
    const id = parseInt(btn.dataset.productId, 10);
    const result = toggleWishlist(id);
    btn.classList.toggle('active', result.added);
    const product = products.find(p => p.id === id);
    if (product) {
      showToast(
        result.added ? `"${product.name}" added to wishlist` : `"${product.name}" removed from wishlist`,
        result.added ? 'success' : 'info'
      );
    }
  });
}

/* ============================================================
   8. TOAST (helper — already defined above in wishlist section)
   ============================================================ */
// showToast() is defined in the Wishlist section above and is globally accessible.

/* ============================================================
   9. PRODUCT FILTERING & SEARCH
   ============================================================ */

let activeFilters = {
  category: '',
  priceMin: 0,
  priceMax: Infinity,
  search: '',
  inStock: false,
  sortBy: 'newest'
};

/**
 * Filters the products array based on provided filter criteria.
 * @param {{ category?: string, priceMin?: number, priceMax?: number, search?: string, inStock?: boolean }} filters
 * @returns {Array<Object>}
 */
function filterProducts(filters) {
  return products.filter(p => {
    if (filters.category && p.categorySlug !== filters.category) return false;
    if (filters.priceMin != null && p.price < filters.priceMin) return false;
    if (filters.priceMax != null && p.price > filters.priceMax) return false;
    if (filters.inStock && !p.inStock) return false;
    if (filters.search) {
      const q = filters.search.toLowerCase();
      const haystack = `${p.name} ${p.description} ${p.category} ${p.tags.join(' ')}`.toLowerCase();
      if (!haystack.includes(q)) return false;
    }
    return true;
  });
}

/**
 * Sorts a products array by a given criterion.
 * @param {Array<Object>} list
 * @param {'newest'|'price-asc'|'price-desc'|'bestseller'|'rating'} sortBy
 * @returns {Array<Object>}
 */
function sortProducts(list, sortBy) {
  const copy = [...list];
  switch (sortBy) {
    case 'price-asc':
      return copy.sort((a, b) => a.price - b.price);
    case 'price-desc':
      return copy.sort((a, b) => b.price - a.price);
    case 'bestseller':
      return copy.sort((a, b) => Number(b.isBestseller) - Number(a.isBestseller));
    case 'rating':
      return copy.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    case 'newest':
    default:
      return copy.sort((a, b) => Number(b.isNew) - Number(a.isNew) || a.id - b.id);
  }
}

/**
 * Builds and injects product card HTML into a container element.
 * @param {Array<Object>} list - Products to render
 * @param {string} containerId - ID of the container element
 */
function renderProducts(list, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  if (list.length === 0) {
    container.innerHTML = `
      <div class="no-products">
        <i class="fas fa-search"></i>
        <h3>No products found</h3>
        <p>Try adjusting your filters or search term.</p>
        <button class="btn btn-outline" onclick="clearAllFilters()">Clear Filters</button>
      </div>`;
    return;
  }

  container.innerHTML = list.map(p => {
    const discount = p.originalPrice > p.price
      ? Math.round((1 - p.price / p.originalPrice) * 100)
      : 0;
    const inWishlist = isInWishlist(p.id);
    const stars = renderStars(p.rating || 0);

    return `
      <article class="product-card reveal" data-id="${p.id}">
        <a href="${PAGES_BASE}service-details.html?id=${p.id}" class="product-card__image-link">
          <img src="${p.image}" alt="${p.name}" loading="lazy" class="product-card__img">
          ${p.isNew ? '<span class="badge badge-new">New</span>' : ''}
          ${p.isBestseller && !p.isNew ? '<span class="badge badge-bestseller">Bestseller</span>' : ''}
          ${discount > 0 ? `<span class="badge badge-sale">−${discount}%</span>` : ''}
          ${!p.inStock ? '<span class="badge badge-oos">Out of Stock</span>' : ''}
        </a>
        <div class="product-card__body">
          <p class="product-card__category">${p.category}</p>
          <h3 class="product-card__name">
            <a href="${PAGES_BASE}service-details.html?id=${p.id}">${p.name}</a>
          </h3>
          <div class="product-card__rating" aria-label="${p.rating} out of 5 stars">
            ${stars}
            <span class="review-count">(${p.reviews})</span>
          </div>
          <div class="product-card__price">
            <span class="price-current">₹${p.price.toLocaleString('en-IN')}</span>
            ${p.originalPrice > p.price ? `<span class="price-original">₹${p.originalPrice.toLocaleString('en-IN')}</span>` : ''}
          </div>
        </div>
        <div class="product-card__actions">
          <button class="btn btn-primary btn-sm"
            ${!p.inStock ? 'disabled' : ''}
            onclick="addToCart(${p.id})">
            <i class="fas fa-shopping-bag"></i>
            ${p.inStock ? 'Add to Cart' : 'Out of Stock'}
          </button>
          <button class="btn-icon wishlist-btn ${inWishlist ? 'active' : ''}"
            data-wishlist-btn data-product-id="${p.id}"
            aria-label="${inWishlist ? 'Remove from wishlist' : 'Add to wishlist'}">
            <i class="fa${inWishlist ? 's' : 'r'} fa-heart"></i>
          </button>
        </div>
      </article>`;
  }).join('');

  // Re-observe new elements for scroll reveal
  observeRevealElements();
}

/**
 * Generates HTML star rating string.
 * @param {number} rating - 0–5
 * @returns {string}
 */
function renderStars(rating) {
  return [1, 2, 3, 4, 5].map(i => {
    if (i <= Math.floor(rating)) return '<i class="fas fa-star"></i>';
    if (i - 0.5 <= rating) return '<i class="fas fa-star-half-alt"></i>';
    return '<i class="far fa-star"></i>';
  }).join('');
}

let filterDebounceTimer = null;

/**
 * Wires up the shop page filters, search, sort and renders products.
 */
function initShopPage() {
  const applyFilters = () => {
    const filtered = filterProducts(activeFilters);
    const sorted = sortProducts(filtered, activeFilters.sortBy);
    renderProducts(sorted, 'products-grid');
    const countEl = document.getElementById('products-count');
    if (countEl) countEl.textContent = `${sorted.length} product${sorted.length !== 1 ? 's' : ''} found`;
    showActiveFilters();
  };

  // Initial render
  applyFilters();

  // Category filter buttons
  document.querySelectorAll('[data-category-filter]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-category-filter]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeFilters.category = btn.dataset.categoryFilter === 'all' ? '' : btn.dataset.categoryFilter;
      applyFilters();
    });
  });

  // Sort select
  const sortSelect = document.getElementById('sort-select');
  if (sortSelect) {
    sortSelect.addEventListener('change', () => {
      activeFilters.sortBy = sortSelect.value;
      applyFilters();
    });
  }

  // Search input with 300ms debounce
  const searchInput = document.getElementById('product-search');
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      clearTimeout(filterDebounceTimer);
      filterDebounceTimer = setTimeout(() => {
        activeFilters.search = searchInput.value.trim();
        applyFilters();
      }, 300);
    });
  }

  // In-stock checkbox
  const inStockCheck = document.getElementById('filter-in-stock');
  if (inStockCheck) {
    inStockCheck.addEventListener('change', () => {
      activeFilters.inStock = inStockCheck.checked;
      applyFilters();
    });
  }

  // Filter form submit
  const filterForm = document.getElementById('filter-form');
  if (filterForm) {
    filterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(filterForm);
      activeFilters.priceMin = Number(formData.get('price-min')) || 0;
      activeFilters.priceMax = Number(formData.get('price-max')) || Infinity;
      applyFilters();
    });
  }
}

/**
 * Renders active filter tags below the filter bar.
 */
function showActiveFilters() {
  const container = document.getElementById('active-filters');
  if (!container) return;
  const tags = [];

  if (activeFilters.category) {
    tags.push({ label: `Category: ${activeFilters.category}`, clear: () => { activeFilters.category = ''; } });
  }
  if (activeFilters.search) {
    tags.push({ label: `Search: "${activeFilters.search}"`, clear: () => { activeFilters.search = ''; const inp = document.getElementById('product-search'); if (inp) inp.value = ''; } });
  }
  if (activeFilters.inStock) {
    tags.push({ label: 'In Stock Only', clear: () => { activeFilters.inStock = false; const cb = document.getElementById('filter-in-stock'); if (cb) cb.checked = false; } });
  }
  if (activeFilters.priceMin > 0 || activeFilters.priceMax < Infinity) {
    tags.push({ label: `₹${activeFilters.priceMin}–₹${activeFilters.priceMax < Infinity ? activeFilters.priceMax : '∞'}`, clear: () => { activeFilters.priceMin = 0; activeFilters.priceMax = Infinity; } });
  }

  if (tags.length === 0) {
    container.innerHTML = '';
    return;
  }

  container.innerHTML = `
    ${tags.map((t, i) => `
      <span class="filter-tag">
        ${t.label}
        <button class="filter-tag-remove" data-tag-index="${i}" aria-label="Remove filter">×</button>
      </span>`).join('')}
    <button class="btn-link" onclick="clearAllFilters()">Clear All</button>`;

  container.querySelectorAll('.filter-tag-remove').forEach(btn => {
    btn.addEventListener('click', () => {
      tags[parseInt(btn.dataset.tagIndex, 10)].clear();
      const filtered = filterProducts(activeFilters);
      const sorted = sortProducts(filtered, activeFilters.sortBy);
      renderProducts(sorted, 'products-grid');
      showActiveFilters();
    });
  });
}

/**
 * Resets all active filters to defaults and re-renders.
 */
function clearAllFilters() {
  activeFilters = { category: '', priceMin: 0, priceMax: Infinity, search: '', inStock: false, sortBy: activeFilters.sortBy };
  const searchInput = document.getElementById('product-search');
  if (searchInput) searchInput.value = '';
  const inStockCheck = document.getElementById('filter-in-stock');
  if (inStockCheck) inStockCheck.checked = false;
  document.querySelectorAll('[data-category-filter]').forEach(b => b.classList.remove('active'));
  const allBtn = document.querySelector('[data-category-filter="all"]');
  if (allBtn) allBtn.classList.add('active');
  const filtered = filterProducts(activeFilters);
  const sorted = sortProducts(filtered, activeFilters.sortBy);
  renderProducts(sorted, 'products-grid');
  showActiveFilters();
}

/* ============================================================
   10. PRODUCT DETAIL PAGE
   ============================================================ */

/**
 * Initialises all product detail page interactions.
 */
function initProductDetail() {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get('id'), 10);
  const product = products.find(p => p.id === id) || products[0];

  // Populate detail fields
  populateProductDetail(product);
  initProductGallery(product);
  initImageZoom();
  initLightbox(product.images);
  initQuantityControls();
  renderRelatedProducts(product);

  // Add to cart button on detail page
  const addBtn = document.getElementById('detail-add-to-cart');
  if (addBtn) {
    addBtn.addEventListener('click', () => {
      const qty = parseInt(document.getElementById('detail-qty')?.value || '1', 10);
      addToCart(product.id, qty);
      openCart();
    });
  }

  // Wishlist button on detail page
  const wishBtn = document.getElementById('detail-wishlist-btn');
  if (wishBtn) {
    wishBtn.dataset.wishlistBtn = '';
    wishBtn.dataset.productId = product.id;
    wishBtn.classList.toggle('active', isInWishlist(product.id));
  }
}

/**
 * Populates the product detail page with product data.
 * @param {Object} product
 */
function populateProductDetail(product) {
  const setEl = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  const setHtml = (id, val) => { const el = document.getElementById(id); if (el) el.innerHTML = val; };

  setEl('detail-name', product.name);
  setEl('detail-category', product.category);
  setEl('detail-price', `₹${product.price.toLocaleString('en-IN')}`);
  setEl('detail-original-price', product.originalPrice > product.price ? `₹${product.originalPrice.toLocaleString('en-IN')}` : '');
  setEl('detail-description', product.fullDescription);
  setEl('detail-materials', product.materials);
  setEl('detail-dimensions', product.dimensions);
  setEl('detail-weight', product.weight);
  setEl('detail-artisan', product.artisan);
  setEl('detail-origin', product.origin);
  setHtml('detail-rating', renderStars(product.rating || 0) + ` <span class="review-count">(${product.reviews} reviews)</span>`);

  document.title = `${product.name} — AuraDecor`;
}

/**
 * Initialises the product image gallery thumbnails.
 * @param {Object} product
 */
function initProductGallery(product) {
  const mainImg = document.getElementById('gallery-main');
  const thumbsContainer = document.getElementById('gallery-thumbs');
  if (!mainImg || !thumbsContainer) return;

  mainImg.src = product.images[0];
  mainImg.alt = product.name;

  thumbsContainer.innerHTML = product.images.map((src, i) => `
    <button class="gallery-thumb ${i === 0 ? 'active' : ''}" data-index="${i}" aria-label="View image ${i + 1}">
      <img src="${src}" alt="${product.name} view ${i + 1}" loading="lazy">
    </button>`).join('');

  thumbsContainer.addEventListener('click', (e) => {
    const btn = e.target.closest('.gallery-thumb');
    if (!btn) return;
    const idx = parseInt(btn.dataset.index, 10);

    // Fade transition
    mainImg.style.opacity = '0';
    setTimeout(() => {
      mainImg.src = product.images[idx];
      mainImg.style.opacity = '1';
    }, 200);

    thumbsContainer.querySelectorAll('.gallery-thumb').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });

  mainImg.style.transition = 'opacity 0.2s ease';
}

/**
 * Initialises mousemove image zoom on the main gallery image.
 */
function initImageZoom() {
  const container = document.querySelector('.gallery-main-wrap');
  const img = document.getElementById('gallery-main');
  if (!container || !img) return;

  const lens = document.createElement('div');
  lens.className = 'zoom-lens';
  container.appendChild(lens);

  container.addEventListener('mousemove', (e) => {
    const rect = container.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    img.style.transformOrigin = `${x}% ${y}%`;
  });

  container.addEventListener('mouseenter', () => { img.style.transform = 'scale(1.5)'; });
  container.addEventListener('mouseleave', () => { img.style.transform = 'scale(1)'; });
  img.style.transition = 'transform 0.3s ease';
}

let lightboxImages = [];
let lightboxIndex = 0;
let lightboxEl = null;
let touchStartX = 0;

/**
 * Creates the lightbox DOM element (once) and stores image list.
 * @param {string[]} images
 */
function initLightbox(images) {
  lightboxImages = images;

  if (!lightboxEl) {
    lightboxEl = document.createElement('div');
    lightboxEl.id = 'lightbox';
    lightboxEl.setAttribute('role', 'dialog');
    lightboxEl.setAttribute('aria-modal', 'true');
    lightboxEl.setAttribute('aria-label', 'Image lightbox');
    lightboxEl.innerHTML = `
      <button class="lightbox-close" aria-label="Close lightbox"><i class="fas fa-times"></i></button>
      <button class="lightbox-prev" aria-label="Previous image"><i class="fas fa-chevron-left"></i></button>
      <button class="lightbox-next" aria-label="Next image"><i class="fas fa-chevron-right"></i></button>
      <div class="lightbox-inner">
        <img id="lightbox-img" src="" alt="Lightbox image">
        <p class="lightbox-counter"></p>
      </div>`;
    document.body.appendChild(lightboxEl);

    lightboxEl.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
    lightboxEl.querySelector('.lightbox-prev').addEventListener('click', prevLightboxImage);
    lightboxEl.querySelector('.lightbox-next').addEventListener('click', nextLightboxImage);
    lightboxEl.addEventListener('click', (e) => { if (e.target === lightboxEl) closeLightbox(); });

    document.addEventListener('keydown', (e) => {
      if (!lightboxEl.classList.contains('open')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prevLightboxImage();
      if (e.key === 'ArrowRight') nextLightboxImage();
    });

    // Touch support
    lightboxEl.addEventListener('touchstart', (e) => { touchStartX = e.changedTouches[0].screenX; }, { passive: true });
    lightboxEl.addEventListener('touchend', (e) => {
      const diff = touchStartX - e.changedTouches[0].screenX;
      if (Math.abs(diff) > 50) { diff > 0 ? nextLightboxImage() : prevLightboxImage(); }
    });
  }

  // Open on main image click
  const mainImg = document.getElementById('gallery-main');
  if (mainImg) {
    mainImg.style.cursor = 'zoom-in';
    mainImg.addEventListener('click', () => {
      const activeThumb = document.querySelector('.gallery-thumb.active');
      const idx = activeThumb ? parseInt(activeThumb.dataset.index, 10) : 0;
      openLightbox(lightboxImages, idx);
    });
  }
}

/**
 * Opens the lightbox at a given index.
 * @param {string[]} images
 * @param {number} startIndex
 */
function openLightbox(images, startIndex = 0) {
  lightboxImages = images;
  lightboxIndex = startIndex;
  updateLightboxImage();
  lightboxEl.classList.add('open');
  document.body.style.overflow = 'hidden';
}

/** Closes the lightbox. */
function closeLightbox() {
  if (!lightboxEl) return;
  lightboxEl.classList.remove('open');
  document.body.style.overflow = '';
}

/** Navigates to the previous lightbox image. */
function prevLightboxImage() {
  lightboxIndex = (lightboxIndex - 1 + lightboxImages.length) % lightboxImages.length;
  updateLightboxImage();
}

/** Navigates to the next lightbox image. */
function nextLightboxImage() {
  lightboxIndex = (lightboxIndex + 1) % lightboxImages.length;
  updateLightboxImage();
}

/** Updates the lightbox image and counter. */
function updateLightboxImage() {
  const img = document.getElementById('lightbox-img');
  const counter = lightboxEl.querySelector('.lightbox-counter');
  if (img) {
    img.style.opacity = '0';
    setTimeout(() => {
      img.src = lightboxImages[lightboxIndex];
      img.style.opacity = '1';
    }, 150);
    img.style.transition = 'opacity 0.15s ease';
  }
  if (counter) counter.textContent = `${lightboxIndex + 1} / ${lightboxImages.length}`;
}

/**
 * Renders up to 4 related products based on category.
 * @param {Object} product - Current product
 */
function renderRelatedProducts(product) {
  const container = document.getElementById('related-products');
  if (!container) return;
  const related = products
    .filter(p => p.id !== product.id && p.categorySlug === product.categorySlug)
    .slice(0, 4);
  if (related.length === 0) {
    container.style.display = 'none';
    return;
  }
  renderProducts(related, 'related-products');
}

/**
 * Initialises the quantity +/− controls on the product detail page.
 */
function initQuantityControls() {
  const qtyInput = document.getElementById('detail-qty');
  const minusBtn = document.getElementById('qty-minus');
  const plusBtn = document.getElementById('qty-plus');
  if (!qtyInput) return;

  if (minusBtn) {
    minusBtn.addEventListener('click', () => {
      const val = parseInt(qtyInput.value, 10);
      if (val > 1) qtyInput.value = val - 1;
    });
  }
  if (plusBtn) {
    plusBtn.addEventListener('click', () => {
      const val = parseInt(qtyInput.value, 10);
      if (val < 99) qtyInput.value = val + 1;
    });
  }
  qtyInput.addEventListener('change', () => {
    let val = parseInt(qtyInput.value, 10);
    if (isNaN(val) || val < 1) val = 1;
    if (val > 99) val = 99;
    qtyInput.value = val;
  });
}

/* ============================================================
   11. BLOG FILTERS
   ============================================================ */

/**
 * Initialises blog category filter buttons.
 * Categories: all, artisan-story, craft-technique, home-styling, sustainability
 */
function initBlogFilters() {
  const filterBtns = document.querySelectorAll('[data-blog-filter]');
  const blogCards = document.querySelectorAll('[data-blog-category]');
  if (!filterBtns.length || !blogCards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const category = btn.dataset.blogFilter;
      blogCards.forEach(card => {
        const show = category === 'all' || card.dataset.blogCategory === category;
        card.style.display = show ? '' : 'none';
        if (show) {
          card.classList.add('reveal');
          observeRevealElements();
        }
      });
    });
  });
}

/* ============================================================
   12. FAQ ACCORDION
   ============================================================ */

/**
 * Initialises FAQ accordion with animated max-height transitions.
 * Single-open mode: opening one item closes others.
 */
function initAccordion() {
  const items = document.querySelectorAll('.accordion-item');
  if (!items.length) return;

  items.forEach(item => {
    const trigger = item.querySelector('.accordion-trigger, .accordion-header');
    const content = item.querySelector('.accordion-content, .accordion-body');
    if (!trigger || !content) return;

    trigger.setAttribute('aria-expanded', 'false');
    content.style.maxHeight = '0';
    content.style.overflow = 'hidden';
    content.style.transition = 'max-height 0.35s ease';

    trigger.addEventListener('click', () => {
      const isOpen = item.classList.contains('active');

      // Close all (single-open mode)
      items.forEach(other => {
        if (other !== item) {
          other.classList.remove('active');
          other.querySelector('.accordion-trigger, .accordion-header')?.setAttribute('aria-expanded', 'false');
          const otherContent = other.querySelector('.accordion-content, .accordion-body');
          if (otherContent) otherContent.style.maxHeight = '0';
        }
      });

      // Toggle current
      if (isOpen) {
        item.classList.remove('active');
        trigger.setAttribute('aria-expanded', 'false');
        content.style.maxHeight = '0';
      } else {
        item.classList.add('active');
        trigger.setAttribute('aria-expanded', 'true');
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });
  });
}

/* ============================================================
   13. SCROLL REVEAL
   ============================================================ */

let revealObserver = null;

/**
 * Sets up IntersectionObserver to animate .reveal elements into view.
 * Applies stagger delays to .reveal-child elements inside .reveal-stagger parents.
 */
function initScrollReveal() {
  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach(el => el.classList.add('visible'));
    return;
  }

  revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        el.classList.add('visible');

        // Stagger children
        if (el.classList.contains('reveal-stagger')) {
          el.querySelectorAll('.reveal-child').forEach((child, i) => {
            child.style.transitionDelay = `${i * 80}ms`;
            child.classList.add('visible');
          });
        }

        revealObserver.unobserve(el);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  observeRevealElements();
}

/**
 * Instructs the observer to watch all current .reveal elements.
 */
function observeRevealElements() {
  if (!revealObserver) return;
  document.querySelectorAll('.reveal:not(.visible), .reveal-left:not(.visible), .reveal-right:not(.visible), .reveal-scale:not(.visible)').forEach(el => revealObserver.observe(el));
}

/* ============================================================
   14. SMOOTH SCROLL
   ============================================================ */

/**
 * Adds smooth scrolling to all anchor links pointing to on-page IDs.
 */
function initSmoothScroll() {
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href^="#"]');
    if (!link) return;
    const targetId = link.getAttribute('href');
    if (targetId === '#') return;
    const target = document.querySelector(targetId);
    if (!target) return;
    e.preventDefault();
    const offset = document.querySelector('.navbar')?.offsetHeight || 70;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  });
}

/* ============================================================
   15. BACK TO TOP
   ============================================================ */

/**
 * Shows/hides the back-to-top button and scrolls to top on click.
 */
function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;

  const toggle = () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  };

  window.addEventListener('scroll', toggle, { passive: true });
  toggle();

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ============================================================
   16. NEWSLETTER FORMS
   ============================================================ */

/**
 * Validates and handles newsletter form submissions.
 * Prevents double submit and shows inline success message.
 */
function initNewsletterForms() {
  const forms = document.querySelectorAll('.newsletter-form, [data-newsletter-form]');
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (form.dataset.submitting === 'true') return;

      const emailInput = form.querySelector('input[type="email"]');
      if (!emailInput) return;

      if (!validateEmail(emailInput.value)) {
        showError(emailInput, 'Please enter a valid email address.');
        return;
      }

      clearError(emailInput);
      form.dataset.submitting = 'true';
      const btn = form.querySelector('button[type="submit"]');
      if (btn) { btn.disabled = true; btn.textContent = 'Subscribing…'; }

      // Simulate async submission
      setTimeout(() => {
        form.innerHTML = `
          <div class="newsletter-success">
            <i class="fas fa-check-circle"></i>
            <p>Thank you for subscribing! Check your inbox for a welcome gift.</p>
          </div>`;
      }, 800);
    });
  });
}

/* ============================================================
   17. FORM VALIDATION UTILITIES
   ============================================================ */

/**
 * Validates an email address.
 * @param {string} email
 * @returns {boolean}
 */
function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email).trim());
}

/**
 * Validates a phone number (supports Indian formats and international).
 * @param {string} phone
 * @returns {boolean}
 */
function validatePhone(phone) {
  return /^[+]?[\d\s\-().]{7,15}$/.test(String(phone).trim());
}

/**
 * Validates that a value is not blank.
 * @param {string} value
 * @returns {boolean}
 */
function validateRequired(value) {
  return String(value).trim().length > 0;
}

/**
 * Validates password strength.
 * @param {string} pass
 * @returns {{ valid: boolean, strength: 'weak'|'medium'|'strong' }}
 */
function validatePassword(pass) {
  if (pass.length < 6) return { valid: false, strength: 'weak' };
  const hasUpper = /[A-Z]/.test(pass);
  const hasLower = /[a-z]/.test(pass);
  const hasDigit = /\d/.test(pass);
  const hasSpecial = /[^A-Za-z0-9]/.test(pass);
  const score = [hasUpper, hasLower, hasDigit, hasSpecial].filter(Boolean).length;
  if (pass.length >= 8 && score >= 3) return { valid: true, strength: 'strong' };
  if (pass.length >= 6 && score >= 2) return { valid: true, strength: 'medium' };
  return { valid: true, strength: 'weak' };
}

/**
 * Marks a form field as invalid and shows an error message.
 * @param {HTMLElement} fieldEl - The input element
 * @param {string} message - Error text
 */
function showError(fieldEl, message) {
  fieldEl.classList.add('error');
  let errEl = fieldEl.parentElement.querySelector('.field-error');
  if (!errEl) {
    errEl = document.createElement('span');
    errEl.className = 'field-error';
    errEl.setAttribute('role', 'alert');
    fieldEl.parentElement.appendChild(errEl);
  }
  errEl.textContent = message;
}

/**
 * Clears error state from a form field.
 * @param {HTMLElement} fieldEl
 */
function clearError(fieldEl) {
  fieldEl.classList.remove('error');
  const errEl = fieldEl.parentElement.querySelector('.field-error');
  if (errEl) errEl.remove();
}

/**
 * Initialises the contact form with validation and success handling.
 */
function initContactForm() {
  const form = document.querySelector('.contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    const name = form.querySelector('[name="name"]');
    const email = form.querySelector('[name="email"]');
    const phone = form.querySelector('[name="phone"]');
    const subject = form.querySelector('[name="subject"]');
    const message = form.querySelector('[name="message"]');

    [name, email, phone, subject, message].forEach(el => { if (el) clearError(el); });

    if (name && !validateRequired(name.value)) { showError(name, 'Name is required.'); isValid = false; }
    if (email && !validateEmail(email.value)) { showError(email, 'Enter a valid email.'); isValid = false; }
    if (phone && phone.value && !validatePhone(phone.value)) { showError(phone, 'Enter a valid phone number.'); isValid = false; }
    if (subject && !validateRequired(subject.value)) { showError(subject, 'Subject is required.'); isValid = false; }
    if (message && message.value.trim().length < 10) { showError(message, 'Message must be at least 10 characters.'); isValid = false; }

    if (!isValid) return;

    const btn = form.querySelector('[type="submit"]');
    if (btn) { btn.disabled = true; btn.textContent = 'Sending…'; }

    setTimeout(() => {
      showToast('Message sent! We\'ll reply within 24 hours.', 'success');
      form.reset();
      if (btn) { btn.disabled = false; btn.textContent = 'Send Message'; }
    }, 1000);
  });
}

/**
 * Initialises login form with validation.
 */
function initAuthForms() {
  const form = document.querySelector('.login-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    const email = form.querySelector('[name="email"]');
    const password = form.querySelector('[name="password"]');

    [email, password].forEach(el => { if (el) clearError(el); });

    if (email && !validateEmail(email.value)) { showError(email, 'Enter a valid email.'); isValid = false; }
    if (password && !validateRequired(password.value)) { showError(password, 'Password is required.'); isValid = false; }

    if (!isValid) return;

    const btn = form.querySelector('[type="submit"]');
    if (btn) { btn.disabled = true; btn.textContent = 'Logging in…'; }

    // Simulate async login
    setTimeout(() => {
      showToast('Welcome back!', 'success');
      if (btn) { btn.disabled = false; btn.textContent = 'Log In'; }
    }, 1000);
  });
}

/**
 * Initialises registration form with full validation including password confirmation.
 */
function initRegisterForm() {
  const form = document.querySelector('.register-form');
  if (!form) return;

  const passwordInput = form.querySelector('[name="password"]');
  const strengthBar = form.querySelector('.password-strength-bar');

  if (passwordInput && strengthBar) {
    passwordInput.addEventListener('input', () => {
      const { strength } = validatePassword(passwordInput.value);
      strengthBar.className = `password-strength-bar strength-${strength}`;
      strengthBar.setAttribute('data-strength', strength);
    });
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    const firstName = form.querySelector('[name="first-name"]');
    const lastName = form.querySelector('[name="last-name"]');
    const email = form.querySelector('[name="email"]');
    const phone = form.querySelector('[name="phone"]');
    const password = form.querySelector('[name="password"]');
    const confirmPassword = form.querySelector('[name="confirm-password"]');

    [firstName, lastName, email, phone, password, confirmPassword].forEach(el => { if (el) clearError(el); });

    if (firstName && !validateRequired(firstName.value)) { showError(firstName, 'First name is required.'); isValid = false; }
    if (lastName && !validateRequired(lastName.value)) { showError(lastName, 'Last name is required.'); isValid = false; }
    if (email && !validateEmail(email.value)) { showError(email, 'Enter a valid email.'); isValid = false; }
    if (phone && phone.value && !validatePhone(phone.value)) { showError(phone, 'Enter a valid phone number.'); isValid = false; }

    if (password) {
      const { valid, strength } = validatePassword(password.value);
      if (!valid || password.value.length < 6) { showError(password, 'Password must be at least 6 characters.'); isValid = false; }
      else if (strength === 'weak') { showError(password, 'Password is too weak. Add numbers or special characters.'); isValid = false; }
    }

    if (confirmPassword && password && confirmPassword.value !== password.value) {
      showError(confirmPassword, 'Passwords do not match.');
      isValid = false;
    }

    if (!isValid) return;

    const btn = form.querySelector('[type="submit"]');
    if (btn) { btn.disabled = true; btn.textContent = 'Creating Account…'; }

    setTimeout(() => {
      showToast('Account created! Please check your email.', 'success');
      form.reset();
      if (btn) { btn.disabled = false; btn.textContent = 'Create Account'; }
    }, 1200);
  });
}

/**
 * Initialises a pricing enquiry form with validation.
 */
function initPricingForm() {
  const form = document.querySelector('.pricing-enquiry-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    const name = form.querySelector('[name="name"]');
    const email = form.querySelector('[name="email"]');
    const business = form.querySelector('[name="business"]');
    const quantity = form.querySelector('[name="quantity"]');

    [name, email, business, quantity].forEach(el => { if (el) clearError(el); });

    if (name && !validateRequired(name.value)) { showError(name, 'Name is required.'); isValid = false; }
    if (email && !validateEmail(email.value)) { showError(email, 'Enter a valid email.'); isValid = false; }
    if (business && !validateRequired(business.value)) { showError(business, 'Business name is required.'); isValid = false; }

    if (!isValid) return;

    const btn = form.querySelector('[type="submit"]');
    if (btn) { btn.disabled = true; btn.textContent = 'Sending Enquiry…'; }

    setTimeout(() => {
      showToast('Enquiry sent! Our team will contact you within 2 business days.', 'success');
      form.reset();
      if (btn) { btn.disabled = false; btn.textContent = 'Send Enquiry'; }
    }, 1000);
  });
}

/* ============================================================
   18. PASSWORD TOGGLE
   ============================================================ */

/**
 * Finds all password fields with [data-password-toggle] buttons and
 * wires them to toggle between 'password' and 'text' input types.
 */
function initPasswordToggles() {
  document.querySelectorAll('[data-password-toggle]').forEach(btn => {
    const targetId = btn.dataset.passwordToggle;
    const input = targetId
      ? document.getElementById(targetId)
      : btn.closest('.input-wrap, .field-wrap')?.querySelector('input');
    if (!input) return;

    btn.setAttribute('type', 'button');
    btn.setAttribute('aria-label', 'Show password');

    btn.addEventListener('click', () => {
      const isPassword = input.type === 'password';
      input.type = isPassword ? 'text' : 'password';
      btn.setAttribute('aria-label', isPassword ? 'Hide password' : 'Show password');

      const icon = btn.querySelector('i');
      if (icon) {
        icon.className = isPassword ? 'fas fa-eye-slash' : 'fas fa-eye';
      }
    });
  });
}

/* ============================================================
   19. PRICE RANGE SLIDER
   ============================================================ */

/**
 * Initialises a price range slider (single or dual) if #price-range exists.
 * Updates displayed min/max values and triggers filter updates on change.
 */
function initPriceRange() {
  const slider = document.getElementById('price-range');
  if (!slider) return;

  const minDisplay = document.getElementById('price-min-display');
  const maxDisplay = document.getElementById('price-max-display');

  const update = () => {
    const val = parseInt(slider.value, 10);
    if (maxDisplay) maxDisplay.textContent = `₹${val.toLocaleString('en-IN')}`;
    activeFilters.priceMax = val;
    clearTimeout(filterDebounceTimer);
    filterDebounceTimer = setTimeout(() => {
      const filtered = filterProducts(activeFilters);
      const sorted = sortProducts(filtered, activeFilters.sortBy);
      renderProducts(sorted, 'products-grid');
      showActiveFilters();
    }, 300);
  };

  // Set min display once
  if (minDisplay) minDisplay.textContent = `₹${parseInt(slider.min || '0', 10).toLocaleString('en-IN')}`;
  if (maxDisplay) maxDisplay.textContent = `₹${parseInt(slider.max || '10000', 10).toLocaleString('en-IN')}`;

  slider.addEventListener('input', update);

  // Dual range (optional second slider)
  const sliderMin = document.getElementById('price-range-min');
  const sliderMax = document.getElementById('price-range-max');
  if (sliderMin && sliderMax) {
    const updateDual = () => {
      let lo = parseInt(sliderMin.value, 10);
      let hi = parseInt(sliderMax.value, 10);
      if (lo > hi) [lo, hi] = [hi, lo];
      if (minDisplay) minDisplay.textContent = `₹${lo.toLocaleString('en-IN')}`;
      if (maxDisplay) maxDisplay.textContent = `₹${hi.toLocaleString('en-IN')}`;
      activeFilters.priceMin = lo;
      activeFilters.priceMax = hi;
      clearTimeout(filterDebounceTimer);
      filterDebounceTimer = setTimeout(() => {
        const filtered = filterProducts(activeFilters);
        const sorted = sortProducts(filtered, activeFilters.sortBy);
        renderProducts(sorted, 'products-grid');
        showActiveFilters();
      }, 300);
    };
    sliderMin.addEventListener('input', updateDual);
    sliderMax.addEventListener('input', updateDual);
  }
}

/* ============================================================
   21. UTILITY: DEBOUNCE
   ============================================================ */

/**
 * Returns a debounced version of the given function.
 * @param {Function} fn
 * @param {number} delay - Milliseconds
 * @returns {Function}
 */
function debounce(fn, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

/* ============================================================
   22. UTILITY: FORMAT CURRENCY
   ============================================================ */

/**
 * Formats a number as Indian Rupee.
 * @param {number} amount
 * @returns {string}
 */
function formatINR(amount) {
  return `₹${Number(amount).toLocaleString('en-IN')}`;
}

/* ============================================================
   23. UTILITY: GET URL PARAM
   ============================================================ */

/**
 * Returns a URL query parameter value.
 * @param {string} name
 * @returns {string|null}
 */
function getUrlParam(name) {
  return new URLSearchParams(window.location.search).get(name);
}

/* ============================================================
   24. HERO SLIDER (optional)
   ============================================================ */

/**
 * Initialises a simple auto-playing hero slider if .hero-slider exists.
 * Adds prev/next buttons support and dot indicators.
 */
function initHeroSlider() {
  const slider = document.querySelector('.hero-slider');
  if (!slider) return;

  const slides = slider.querySelectorAll('.hero-slide');
  if (slides.length < 2) return;

  let currentSlide = 0;
  let sliderInterval;

  const goTo = (index) => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (index + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
    updateDots();
  };

  const start = () => { sliderInterval = setInterval(() => goTo(currentSlide + 1), 5000); };
  const stop = () => clearInterval(sliderInterval);

  slides[0].classList.add('active');

  // Dots
  const dotsContainer = slider.querySelector('.slider-dots');
  if (dotsContainer) {
    slides.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.className = `slider-dot${i === 0 ? ' active' : ''}`;
      dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
      dot.addEventListener('click', () => { stop(); goTo(i); start(); });
      dotsContainer.appendChild(dot);
    });
  }

  const updateDots = () => {
    slider.querySelectorAll('.slider-dot').forEach((dot, i) => {
      dot.classList.toggle('active', i === currentSlide);
    });
  };

  // Prev/Next
  slider.querySelector('.slider-prev')?.addEventListener('click', () => { stop(); goTo(currentSlide - 1); start(); });
  slider.querySelector('.slider-next')?.addEventListener('click', () => { stop(); goTo(currentSlide + 1); start(); });

  // Pause on hover
  slider.addEventListener('mouseenter', stop);
  slider.addEventListener('mouseleave', start);

  start();
}

/* ============================================================
   25. COOKIE CONSENT BANNER
   ============================================================ */

/**
 * Shows a cookie consent banner if consent has not been recorded.
 */
function initCookieBanner() {
  if (localStorage.getItem('aura-cookie-consent')) return;
  const banner = document.getElementById('cookie-banner');
  if (!banner) return;

  banner.classList.add('visible');

  banner.querySelector('[data-accept-cookies]')?.addEventListener('click', () => {
    localStorage.setItem('aura-cookie-consent', 'accepted');
    banner.classList.remove('visible');
  });

  banner.querySelector('[data-decline-cookies]')?.addEventListener('click', () => {
    localStorage.setItem('aura-cookie-consent', 'declined');
    banner.classList.remove('visible');
  });
}

/* ============================================================
   26. SEARCH OVERLAY
   ============================================================ */

/**
 * Initialises a full-screen search overlay with live product suggestions.
 */
function initSearchOverlay() {
  const overlay = document.getElementById('search-overlay');
  const openBtns = document.querySelectorAll('[data-open-search]');
  const closeBtn = overlay?.querySelector('[data-close-search]');
  const input = overlay?.querySelector('.search-overlay-input');
  const results = overlay?.querySelector('.search-overlay-results');

  if (!overlay) return;

  const open = () => {
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    setTimeout(() => input?.focus(), 100);
  };

  const close = () => {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
    if (input) input.value = '';
    if (results) results.innerHTML = '';
  };

  openBtns.forEach(btn => btn.addEventListener('click', open));
  closeBtn?.addEventListener('click', close);
  overlay.addEventListener('click', (e) => { if (e.target === overlay) close(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && overlay.classList.contains('open')) close(); });

  if (input && results) {
    input.addEventListener('input', debounce(() => {
      const q = input.value.trim();
      if (q.length < 2) { results.innerHTML = ''; return; }

      const hits = filterProducts({ search: q }).slice(0, 6);
      if (hits.length === 0) {
        results.innerHTML = `<p class="search-no-results">No results for "<strong>${q}</strong>"</p>`;
        return;
      }

      results.innerHTML = hits.map(p => `
        <a class="search-result-item" href="${PAGES_BASE}service-details.html?id=${p.id}">
          <img src="${p.image}" alt="${p.name}" loading="lazy">
          <div>
            <p class="search-result-name">${p.name}</p>
            <p class="search-result-price">${formatINR(p.price)}</p>
          </div>
        </a>`).join('');
    }, 300));
  }
}

/* ============================================================
   27. QUICK VIEW MODAL
   ============================================================ */

/**
 * Initialises a quick-view modal that shows product details in a dialog.
 */
function initQuickView() {
  const modal = document.getElementById('quick-view-modal');
  if (!modal) return;

  document.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-quick-view]');
    if (!btn) return;
    const id = parseInt(btn.dataset.quickView, 10);
    const product = products.find(p => p.id === id);
    if (!product) return;

    const body = modal.querySelector('.quick-view-body');
    if (body) {
      const discount = product.originalPrice > product.price
        ? Math.round((1 - product.price / product.originalPrice) * 100) : 0;

      body.innerHTML = `
        <div class="quick-view-gallery">
          <img src="${product.image}" alt="${product.name}">
        </div>
        <div class="quick-view-info">
          <p class="qv-category">${product.category}</p>
          <h2 class="qv-name">${product.name}</h2>
          <div class="qv-rating">${renderStars(product.rating || 0)} <span>(${product.reviews})</span></div>
          <div class="qv-price">
            <span class="price-current">${formatINR(product.price)}</span>
            ${discount > 0 ? `<span class="price-original">${formatINR(product.originalPrice)}</span>
              <span class="price-discount">Save ${discount}%</span>` : ''}
          </div>
          <p class="qv-desc">${product.description}</p>
          <ul class="qv-meta">
            <li><strong>Artisan:</strong> ${product.artisan}</li>
            <li><strong>Origin:</strong> ${product.origin}</li>
            <li><strong>Materials:</strong> ${product.materials}</li>
          </ul>
          <div class="qv-actions">
            <button class="btn btn-primary" onclick="addToCart(${product.id}); closeQuickView();">
              <i class="fas fa-shopping-bag"></i> Add to Cart
            </button>
            <a href="${PAGES_BASE}service-details.html?id=${product.id}" class="btn btn-outline">
              View Full Details
            </a>
          </div>
        </div>`;
    }

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  });

  const closeQuickView = () => {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  };
  window.closeQuickView = closeQuickView;

  modal.querySelector('[data-close-modal], .modal-close')?.addEventListener('click', closeQuickView);
  modal.addEventListener('click', (e) => { if (e.target === modal) closeQuickView(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && modal.classList.contains('open')) closeQuickView(); });
}

/* ============================================================
   28. STICKY ADD-TO-CART (Product Detail)
   ============================================================ */

/**
 * Shows a sticky bottom bar with product name and add-to-cart when
 * the main ATC button scrolls out of view on the product detail page.
 */
function initStickyATC() {
  const mainBtn = document.getElementById('detail-add-to-cart');
  const stickyBar = document.getElementById('sticky-atc');
  if (!mainBtn || !stickyBar) return;

  const observer = new IntersectionObserver(([entry]) => {
    stickyBar.classList.toggle('visible', !entry.isIntersecting);
  }, { threshold: 0 });

  observer.observe(mainBtn);

  stickyBar.querySelector('[data-sticky-atc]')?.addEventListener('click', () => {
    mainBtn.click();
  });
}

/* ============================================================
   29. REVIEW RATING PICKER
   ============================================================ */

/**
 * Initialises interactive star rating pickers in review forms.
 */
function initRatingPicker() {
  document.querySelectorAll('.rating-picker').forEach(picker => {
    const stars = picker.querySelectorAll('.rating-star');
    const input = picker.querySelector('input[type="hidden"]');

    stars.forEach((star, i) => {
      star.addEventListener('mouseenter', () => {
        stars.forEach((s, j) => s.classList.toggle('hovered', j <= i));
      });
      star.addEventListener('mouseleave', () => {
        stars.forEach(s => s.classList.remove('hovered'));
      });
      star.addEventListener('click', () => {
        const val = i + 1;
        if (input) input.value = val;
        stars.forEach((s, j) => s.classList.toggle('selected', j <= i));
      });
    });
  });
}

/* ============================================================
   30. DOMContentLoaded — INIT ALL
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  // Core UI
  initTheme();
  initRTL();
  initNavbar();
  initMobileMenu();
  initScrollReveal();
  initSmoothScroll();
  initBackToTop();

  // Commerce
  initCartSystem();
  initWishlistSystem();

  // UI components
  initAccordion();
  initNewsletterForms();
  initPasswordToggles();
  initHeroSlider();
  initCookieBanner();
  initSearchOverlay();
  initQuickView();
  initRatingPicker();
  initPriceRange();

  // Page-specific
  if (document.querySelector('.products-grid')) initShopPage();
  if (document.querySelector('.product-gallery')) {
    initProductDetail();
    initStickyATC();
  }
  if (document.querySelector('.contact-form'))          initContactForm();
  if (document.querySelector('.login-form'))            initAuthForms();
  if (document.querySelector('.register-form'))         initRegisterForm();
  if (document.querySelector('.pricing-enquiry-form'))  initPricingForm();
  if (document.querySelector('.blog-filters'))          initBlogFilters();
  if (document.querySelector('.collections-filter-bar')) initCollectionsFilter();
});

/**
 * Initialises interactive category filtering on Homepage Collections section.
 */
function initCollectionsFilter() {
  const filterBar = document.querySelector('.collections-filter-bar');
  if (!filterBar) return;

  const tabs = filterBar.querySelectorAll('.filter-tab');
  const cards = document.querySelectorAll('.collections-bento-grid .bento-card');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const filter = tab.getAttribute('data-filter');

      // Update tab active states
      tabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      // Filter cards with smooth fade
      cards.forEach(card => {
        const cat = card.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          card.classList.remove('is-hidden');
          card.style.opacity = '0';
          card.style.transform = 'translateY(12px)';
          requestAnimationFrame(() => {
            card.style.transition = 'opacity 0.35s ease, transform 0.35s ease';
            card.style.opacity = '1';
            card.style.transform = 'none';
          });
        } else {
          card.classList.add('is-hidden');
        }
      });
    });
  });
}

/* ============================================================
   END OF main.js — AuraDecor
   ============================================================ */
