// Deepan Mills - Product Catalog Data
// Sourced authentic heritage grains, millets, cold-pressed oils, and stone-ground flours from Theni, Tamil Nadu

const PRODUCTS = [
  {
    id: 'prod-1',
    name: 'Karuppu Kavuni Rice',
    tamilName: 'பாரம்பரிய கருப்பு கவுனி அரிசி',
    hindiName: 'पारंपरिक काला चावल (कौनी)',
    category: 'rice',
    badge: 'Bestseller',
    shortDesc: 'Ancient Emperor black rice packed with anthocyanins, antioxidants, and anti-inflammatory properties.',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80',
    tags: ['Diabetic Friendly', 'High Antioxidants', 'Zero Polish'],
    healthBenefit: 'Rich in Anthocyanin (natural cancer-fighting antioxidant) & Low Glycemic Index.',
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
    name: 'Mappillai Samba Rice',
    tamilName: 'மாப்பிள்ளை சம்பா அரிசி',
    hindiName: 'मापिल्लई सांबा लाल चावल',
    category: 'rice',
    badge: 'Heritage Classic',
    shortDesc: 'Legendary red rice known to build muscle stamina, boost vitality, and heal stomach ulcers.',
    image: 'https://images.unsplash.com/photo-1550989460-0adc9554f529?auto=format&fit=crop&w=800&q=80',
    tags: ['Stamina Booster', 'Ulcer Healing', 'High Iron'],
    healthBenefit: 'Rich in zinc and iron; boosts hemoglobin and aids nervous system strength.',
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
    badge: 'Low GI',
    shortDesc: 'Premium unpolished Barnyard Millet. Super light on digestion with 6x more dietary fiber than white rice.',
    image: 'https://images.unsplash.com/photo-1607672632458-9eb56696346b?auto=format&fit=crop&w=800&q=80',
    tags: ['Low GI', 'Weight Loss', 'Gluten Free'],
    healthBenefit: 'Regulates blood glucose spikes, ideal for daily diabetic friendly meals and light dinners.',
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
    badge: 'Heart Healthy',
    shortDesc: 'Golden unpolished Foxtail millet. Traditional grain rich in Vitamin B12, magnesium, and nervous system support.',
    image: 'https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80',
    tags: ['Heart Health', 'Gluten Free', 'High Magnesium'],
    healthBenefit: 'Supports cardiac wellness, balances cholesterol levels, and strengthens bone density.',
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
    badge: 'Pure & Clean',
    shortDesc: 'Naturally detoxifying grain with high polyphenols and fiber. Ideal replacement for white ponni rice.',
    image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=800&q=80',
    tags: ['Detox Grain', 'Fiber Rich', 'Diabetic Diet'],
    healthBenefit: 'Slow digesting complex carbohydrates prevent sluggishness after meals.',
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
    badge: "Women's Wellness",
    shortDesc: 'Specially cherished for women during pregnancy, postnatal care, and hormonal balance.',
    image: 'https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=800&q=80',
    tags: ["Women's Health", 'Easily Digestible', 'Iron & Zinc'],
    healthBenefit: 'High trace minerals regulate hemoglobin and soothe maternal digestion.',
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
    badge: 'Wood Pressed',
    shortDesc: 'Slow-extracted in traditional Vaagai wooden chekku using native black sesame seeds and pure palm jaggery.',
    image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=800&q=80',
    tags: ['Cold Pressed', 'Palm Jaggery Mixed', '100% Unrefined'],
    healthBenefit: 'Zero heat damage retains sesamol antioxidants, vitamin E, and natural nutty aroma.',
    cookingRatio: 'Use for traditional tempering, dosas, gravies, and oil pulling.',
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
    badge: 'Pure & Cold Pressed',
    shortDesc: 'Extracted from sun-dried native Theni groundnuts. Sweet, nutty aroma with a high natural smoking point.',
    image: 'https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?auto=format&fit=crop&w=800&q=80',
    tags: ['Heart Healthy', 'Zero Cholesterol', 'No Chemical Refining'],
    healthBenefit: 'Monounsaturated fats (MUFA) keep heart arteries clean without trans-fats.',
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
    badge: 'Calcium Rich',
    shortDesc: 'Sprouted native finger millets, sun-dried and stone ground at low RPM to preserve delicate nutrients.',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
    tags: ['10x Calcium', 'Baby & Elder Friendly', 'Stone Ground'],
    healthBenefit: 'Sprouting multiplies bioavailable calcium by 3x and boosts iron absorption.',
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
    badge: 'Whole Family Health',
    shortDesc: 'Nourishing blend of 24 roasted millets, pulses, nuts (almonds, cashews, cardamoms), and heritage grains.',
    image: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=800&q=80',
    tags: ['Complete Meal', 'Zero Sugar Added', 'Immunity Drink'],
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
    badge: 'Best Value Offer',
    shortDesc: 'Curated 1kg pack each of Karuppu Kavuni, Mappillai Samba, and Poongar Rice. Free trial recipe booklet included.',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',
    tags: ['Save 18%', '3 Varieties in 1', 'Free Shipping'],
    healthBenefit: 'Complete rotational staple for the whole month for holistic family nutrition.',
    cookingRatio: 'Includes complete printed regional cooking chart inside.',
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
    badge: 'Daily Wellness',
    shortDesc: '500g each of Barnyard (Kuthiraivali), Foxtail (Thinai), Kodo (Varagu), Little (Samai), and Finger Millet (Ragi).',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80',
    tags: ['Millet Beginner Choice', '5 Types in 1', 'Pure Theni Harvest'],
    healthBenefit: 'Allows easy weekly rotation across all 5 essential positive grains.',
    cookingRatio: 'Includes quick QR code with video recipe guide for pongal, upma, dosa.',
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

// Testimonials data
const TESTIMONIALS = [
  {
    name: 'Dr. Meenakshi Sundaram',
    location: 'Coimbatore, Tamil Nadu',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&h=120&q=80',
    rating: 5,
    title: 'Remarkable improvement in blood sugar levels',
    comment: 'I recommend Deepan Mills Barnyard Millet and Karuppu Kavuni to my diabetic patients. The unpolished grain texture and freshness from Theni processing make a genuine difference.',
    verified: true
  },
  {
    name: 'Karthik Subramanian',
    location: 'Chennai (Anna Nagar)',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80',
    rating: 5,
    title: 'Wood pressed sesame oil has the authentic grandma kitchen aroma',
    comment: 'We used to buy branded oils in supermarkets that smelled artificial. Deepan Mills wood-pressed gingelly oil with palm jaggery is pure nostalgia. Ordered 5L directly via WhatsApp.',
    verified: true
  },
  {
    name: 'Sangeetha R.',
    location: 'Madurai',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80',
    rating: 5,
    title: 'Poongar rice idlis are exceptionally soft and healthy',
    comment: 'Making batter with Poongar rice and black kavuni has replaced white rice completely at our home. Delivery to Madurai was within 24 hours. The packaging is neat and eco-friendly.',
    verified: true
  }
];
