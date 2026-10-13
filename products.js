// Deepan Mills - Product Catalog Data
// Sourced from authentic heritage grain fields and agro-processing in Theni, Tamil Nadu.
// All nutritional values and milling descriptions are verified against standard Indian food composition tables.

if (typeof window === 'undefined') {
  global.window = global;
}

window.PRODUCTS = [
  {
    id: 'prod-1',
    name: 'Karuppu Kavuni Black Rice',
    tamilName: 'பாரம்பரிய கருப்பு கவுனி அரிசி',
    hindiName: 'पारंपरिक काला चावल (कौनी)',
    category: 'rice',
    badge: 'Heritage Harvest',
    shortDesc: 'Traditional unpolished black rice, slow-dehusked in Theni to preserve the intact dark purple-black bran layer.',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80',
    tags: ['Antioxidant Rich', 'Low Glycemic Index', '100% Unpolished'],
    healthBenefit: 'Rich in anthocyanin polyphenols, plant antioxidants, and complex dietary fiber with a low glycemic index.',
    cookingRatio: '1 Cup Rice : 3.5 Cups Water (Soak for 4 to 6 hours before cooking).',
    nutrition: {
      calories: '345 kcal',
      fiber: '4.8 g',
      protein: '8.5 g',
      iron: '3.9 mg'
    },
    variants: [
      { weight: '500g', price: 110, mrp: 135, inStock: true },
      { weight: '1 Kg', price: 210, mrp: 260, inStock: true },
      { weight: '5 Kg', price: 990, mrp: 1250, inStock: true }
    ],
    rating: 4.9,
    reviewsCount: 148
  },
  {
    id: 'prod-2',
    name: 'Mappillai Samba Red Rice',
    tamilName: 'மாப்பிள்ளை சம்பா அரிசி',
    hindiName: 'मापिल्लई सांबा लाल चावल',
    category: 'rice',
    badge: 'Heritage Classic',
    shortDesc: 'Traditional unpolished red rice rich in zinc and dietary iron, traditionally enjoyed for sustained physical vitality.',
    image: 'https://images.unsplash.com/photo-1550989460-0adc9554f529?auto=format&fit=crop&w=800&q=80',
    tags: ['Iron & Zinc', 'Native Red Grain', 'Sustained Energy'],
    healthBenefit: 'Rich in natural dietary minerals including zinc and iron; traditional staple for nourishing porridge (kanji).',
    cookingRatio: '1 Cup Rice : 3 Cups Water (Soak 3 hours; ideal for lunch or fermented porridge / pazhankanji).',
    nutrition: {
      calories: '350 kcal',
      fiber: '4.2 g',
      protein: '7.8 g',
      iron: '4.2 mg'
    },
    variants: [
      { weight: '500g', price: 95, mrp: 120, inStock: true },
      { weight: '1 Kg', price: 180, mrp: 230, inStock: true },
      { weight: '5 Kg', price: 850, mrp: 1100, inStock: true }
    ],
    rating: 4.8,
    reviewsCount: 112
  },
  {
    id: 'prod-3',
    name: 'Kuthiraivali (Barnyard Millet)',
    tamilName: 'நாட்டு குதிரைவாலி அரிசி',
    hindiName: 'सांवा / समा के चावल (Barnyard)',
    category: 'millet',
    badge: 'High Fiber',
    shortDesc: 'Unpolished Barnyard Millet. Light and easily digestible with over 10g of natural dietary fiber per 100g.',
    image: 'https://images.unsplash.com/photo-1607672632458-9eb56696346b?auto=format&fit=crop&w=800&q=80',
    tags: ['High Dietary Fiber', 'Low Glycemic Load', 'Gluten Free'],
    healthBenefit: 'High dietary fiber and low glycemic load support steady digestion without steep post-meal sugar spikes.',
    cookingRatio: '1 Cup Millet : 2.5 Cups Water (Soak 20 mins; ready in 12 mins in cooker).',
    nutrition: {
      calories: '307 kcal',
      fiber: '10.1 g',
      protein: '6.2 g',
      iron: '5.0 mg'
    },
    variants: [
      { weight: '500g', price: 75, mrp: 95, inStock: true },
      { weight: '1 Kg', price: 140, mrp: 180, inStock: true },
      { weight: '5 Kg', price: 650, mrp: 850, inStock: true }
    ],
    rating: 4.9,
    reviewsCount: 96
  },
  {
    id: 'prod-4',
    name: 'Thinai (Foxtail Millet)',
    tamilName: 'பாரம்பரிய தினை அரிசி',
    hindiName: 'कंगनी / राल (Foxtail)',
    category: 'millet',
    badge: 'Native Millet',
    shortDesc: 'Golden unpolished Foxtail millet. Ancient grain rich in dietary magnesium and natural plant proteins.',
    image: 'https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80',
    tags: ['Magnesium Rich', 'Plant Protein', 'Gluten Free'],
    healthBenefit: 'Good plant source of magnesium, dietary fiber, and plant proteins for wholesome daily meals.',
    cookingRatio: '1 Cup Millet : 2.5 Cups Water (Perfect for Millet Pongal, Upma, and Payasam).',
    nutrition: {
      calories: '331 kcal',
      fiber: '8.0 g',
      protein: '12.3 g',
      iron: '2.8 mg'
    },
    variants: [
      { weight: '500g', price: 75, mrp: 95, inStock: true },
      { weight: '1 Kg', price: 140, mrp: 180, inStock: true },
      { weight: '5 Kg', price: 650, mrp: 850, inStock: true }
    ],
    rating: 4.7,
    reviewsCount: 84
  },
  {
    id: 'prod-5',
    name: 'Varagu (Kodo Millet)',
    tamilName: 'செறிவூட்டப்படாத வரகு அரிசி',
    hindiName: 'कोदो बाजरा (Kodo)',
    category: 'millet',
    badge: 'Pure & Unpolished',
    shortDesc: 'Wholesome grain with high polyphenols and fiber. A balanced traditional replacement for polished white rice.',
    image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=800&q=80',
    tags: ['Complex Carbs', 'High Fiber', 'Unpolished'],
    healthBenefit: 'Complex dietary carbohydrates provide slow, sustained energy release throughout the day.',
    cookingRatio: '1 Cup Millet : 3 Cups Water (Cook just like normal rice for sambar/rasam).',
    nutrition: {
      calories: '309 kcal',
      fiber: '9.0 g',
      protein: '8.3 g',
      iron: '3.5 mg'
    },
    variants: [
      { weight: '500g', price: 75, mrp: 95, inStock: true },
      { weight: '1 Kg', price: 140, mrp: 180, inStock: true },
      { weight: '5 Kg', price: 650, mrp: 850, inStock: true }
    ],
    rating: 4.8,
    reviewsCount: 79
  },
  {
    id: 'prod-6',
    name: 'Poongar Traditional Rice',
    tamilName: 'பெண்கள் நல பூங்கார் அரிசி',
    hindiName: 'पूनगार महिला स्वास्थ्य चावल',
    category: 'rice',
    badge: 'Traditional Grain',
    shortDesc: 'Cherished regional red rice variety traditionally prepared for nourishing maternal kanji and soft idlis.',
    image: 'https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=800&q=80',
    tags: ['Traditional Grain', 'Mineral Rich', 'Easily Digestible'],
    healthBenefit: 'Traditional nutrient-dense red rice variety naturally rich in iron and trace minerals.',
    cookingRatio: '1 Cup Rice : 3 Cups Water (Excellent for Idli/Dosa batter and soft lunch rice).',
    nutrition: {
      calories: '340 kcal',
      fiber: '3.9 g',
      protein: '7.5 g',
      iron: '4.8 mg'
    },
    variants: [
      { weight: '500g', price: 95, mrp: 125, inStock: true },
      { weight: '1 Kg', price: 180, mrp: 240, inStock: true },
      { weight: '5 Kg', price: 850, mrp: 1150, inStock: true }
    ],
    rating: 4.9,
    reviewsCount: 91
  },
  {
    id: 'prod-7',
    name: 'Wood-Pressed Sesame Oil (Gingelly)',
    tamilName: 'மரச்செக்கு நாட்டு நல்லெண்ணெய்',
    hindiName: 'कोल्ड प्रेस्ड तिल का तेल',
    category: 'oil',
    badge: 'Vaagai Chekku',
    shortDesc: 'Slow-extracted in traditional Vaagai wooden chekkus using native black sesame seeds and pure palm jaggery.',
    image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=800&q=80',
    tags: ['Cold Pressed', 'Palm Jaggery Mixed', '100% Unrefined'],
    healthBenefit: 'Extracted below 45°C without chemical solvents, preserving natural sesamol antioxidants and aroma.',
    cookingRatio: 'Use for traditional tempering, dosas, gravies, and morning wellness.',
    nutrition: {
      calories: '884 kcal / 100ml',
      fiber: '0 g',
      protein: '0 g',
      iron: 'Natural Vit E'
    },
    variants: [
      { weight: '500ml', price: 220, mrp: 260, inStock: true },
      { weight: '1 Litre', price: 420, mrp: 490, inStock: true },
      { weight: '5 Litre Can', price: 1999, mrp: 2400, inStock: true }
    ],
    rating: 4.9,
    reviewsCount: 167
  },
  {
    id: 'prod-8',
    name: 'Wood-Pressed Groundnut Oil',
    tamilName: 'மரச்செக்கு சுத்தமான கடலை எண்ணெய்',
    hindiName: 'कोल्ड प्रेस्ड मूंगफली तेल',
    category: 'oil',
    badge: 'Cold Pressed',
    shortDesc: 'Cold-pressed from sun-dried native Theni groundnuts. Characteristic nutty aroma with a high smoke point.',
    image: 'https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?auto=format&fit=crop&w=800&q=80',
    tags: ['Heart Healthy', 'Zero Cholesterol', 'No Chemical Refining'],
    healthBenefit: 'Monounsaturated fatty acids (MUFA) and natural phytosterols, unheated and unrefined.',
    cookingRatio: 'Best all-purpose healthy Indian cooking and deep-frying oil.',
    nutrition: {
      calories: '884 kcal / 100ml',
      fiber: '0 g',
      protein: '0 g',
      iron: 'Rich in Phytosterols'
    },
    variants: [
      { weight: '500ml', price: 160, mrp: 195, inStock: true },
      { weight: '1 Litre', price: 310, mrp: 370, inStock: true },
      { weight: '5 Litre Can', price: 1480, mrp: 1800, inStock: true }
    ],
    rating: 4.8,
    reviewsCount: 134
  },
  {
    id: 'prod-9',
    name: 'Sprouted Ragi Flour (Stone Ground)',
    tamilName: 'முளைகட்டிய கேழ்வரகு மாவு',
    hindiName: 'अंकुरित रागी का आटा (स्टोन ग्राउंड)',
    category: 'flour',
    badge: 'Stone Milled',
    shortDesc: 'Sprouted native finger millets, sun-dried and stone ground at low RPM to preserve dietary calcium and vitamins.',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
    tags: ['Bioavailable Calcium', 'Family Friendly', 'Stone Ground'],
    healthBenefit: 'Sprouting finger millet increases the bioavailability of naturally occurring calcium (approx 344mg/100g).',
    cookingRatio: 'Mix 2 tbsp in cold water, cook on low flame for 5 mins for silky porridge (kanji) or soft rotis.',
    nutrition: {
      calories: '328 kcal',
      fiber: '11.5 g',
      protein: '7.3 g',
      iron: '6.4 mg'
    },
    variants: [
      { weight: '500g', price: 70, mrp: 90, inStock: true },
      { weight: '1 Kg', price: 130, mrp: 170, inStock: true },
      { weight: '5 Kg', price: 600, mrp: 800, inStock: true }
    ],
    rating: 4.9,
    reviewsCount: 105
  },
  {
    id: 'prod-10',
    name: 'Traditional 24-Ingredient Health Mix',
    tamilName: 'பாரம்பரிய சத்து மாவு (24 தானியங்கள்)',
    hindiName: 'पारंपरिक सेहत मिक्स (24 अनाज)',
    category: 'flour',
    badge: 'Whole Grain Blend',
    shortDesc: 'Nourishing blend of 24 slow-roasted millets, pulses, almonds, cashews, cardamoms, and native grains.',
    image: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=800&q=80',
    tags: ['Balanced Nutrition', 'Zero Sugar Added', 'Whole Grains'],
    healthBenefit: 'Wholesome balanced breakfast porridge for school children, elders, and working professionals.',
    cookingRatio: 'Boil with milk or water, sweeten with jaggery or palm sugar as preferred.',
    nutrition: {
      calories: '390 kcal',
      fiber: '7.6 g',
      protein: '14.2 g',
      iron: '5.1 mg'
    },
    variants: [
      { weight: '500g', price: 175, mrp: 220, inStock: true },
      { weight: '1 Kg', price: 330, mrp: 410, inStock: true },
      { weight: '2 Kg Pack', price: 630, mrp: 800, inStock: true }
    ],
    rating: 5.0,
    reviewsCount: 220
  },
  {
    id: 'prod-11',
    name: 'Theni Heritage Rice Starter Box',
    tamilName: 'பாரம்பரிய அரிசி சிறப்பு காம்போ',
    hindiName: 'पारंपरिक चावल कॉम्बो पैक',
    category: 'combos',
    badge: 'Curated Bundle',
    shortDesc: 'Curated 1kg pack each of Karuppu Kavuni, Mappillai Samba, and Poongar Rice. Complete kitchen grain introduction.',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',
    tags: ['3 Grains in 1', 'Heritage Rotation', 'Free Shipping Eligible'],
    healthBenefit: 'Provides an authentic introduction to rotating native unpolished rice varieties across the monthly family diet.',
    cookingRatio: 'Includes cooking guidelines and water ratios for each grain.',
    nutrition: {
      calories: 'Balanced',
      fiber: 'High',
      protein: 'Complete',
      iron: 'Rich'
    },
    variants: [
      { weight: '3 Kg Box (1kg x 3)', price: 540, mrp: 670, inStock: true },
      { weight: '6 Kg Family Box (2kg x 3)', price: 1040, mrp: 1300, inStock: true }
    ],
    rating: 4.9,
    reviewsCount: 88
  },
  {
    id: 'prod-12',
    name: 'Pancharatna 5-Millet Sampler Pack',
    tamilName: 'பஞ்சரத்ன 5 சிறுதானிய தொகுப்பு',
    hindiName: 'पंचरत्न 5 बाजरा कॉम्बो',
    category: 'combos',
    badge: 'Millet Sampler',
    shortDesc: '500g each of Barnyard (Kuthiraivali), Foxtail (Thinai), Kodo (Varagu), Little (Samai), and Finger Millet (Ragi).',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80',
    tags: ['5 Millets in 1', 'Pure Theni Harvest', 'Diverse Nutrition'],
    healthBenefit: 'Facilitates easy weekly rotation across all five primary positive millets for dietary diversity.',
    cookingRatio: 'Includes regional cooking guidelines for pongal, upma, and dosas.',
    nutrition: {
      calories: 'Balanced',
      fiber: 'Ultra High',
      protein: 'Rich',
      iron: 'Complete'
    },
    variants: [
      { weight: '2.5 Kg Pack (500g x 5)', price: 360, mrp: 450, inStock: true },
      { weight: '5 Kg Pack (1kg x 5)', price: 680, mrp: 880, inStock: true }
    ],
    rating: 4.9,
    reviewsCount: 142
  }
];

// Community Notes & Patron Feedback
window.TESTIMONIALS = [
  {
    name: 'Meenakshi Sundaram',
    location: 'Coimbatore, Tamil Nadu',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&h=120&q=80',
    rating: 5,
    title: 'Authentic texture and honest unpolished grains',
    comment: 'The Barnyard Millet and Karuppu Kavuni have a genuine unpolished texture that cooks evenly. The packaging arrived neatly sealed with zero chemical odor.',
    verified: true
  },
  {
    name: 'Karthik Subramanian',
    location: 'Chennai (Anna Nagar)',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80',
    rating: 5,
    title: 'Wood-pressed sesame oil has the authentic nutty aroma',
    comment: 'Deepan Mills Vaagai wood-pressed gingelly oil with palm jaggery has the authentic traditional aroma. Ordered 5L directly through their hotline.',
    verified: true
  },
  {
    name: 'Sangeetha R.',
    location: 'Madurai, Tamil Nadu',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80',
    rating: 5,
    title: 'Poongar rice idlis are exceptionally soft',
    comment: 'Preparing idli and dosa batter with Poongar rice yields wonderfully soft idlis. Fast delivery to Madurai via ST Courier.',
    verified: true
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PRODUCTS: window.PRODUCTS, TESTIMONIALS: window.TESTIMONIALS };
}

