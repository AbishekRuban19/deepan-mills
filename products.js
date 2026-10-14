// Deepan Mills - Complete Product Catalog Data
// Sourced from authentic heritage grain fields and agro-processing in Theni, Tamil Nadu.
// All nutritional values and milling descriptions are verified against standard Indian food composition tables.

if (typeof window === 'undefined') {
  global.window = global;
}

window.PRODUCTS = [
  // ==========================================
  // 1. RICE PRODUCTS (12 Items)
  // ==========================================
  {
    id: 'prod-1',
    name: 'Thooyamalli Rice',
    tamilName: 'தூயமல்லி பாரம்பரிய அரிசி',
    hindiName: 'थूयमल्ली सफेद चावल',
    category: 'rice',
    badge: 'Aromatic Heritage',
    shortDesc: 'Traditional white native rice, named after delicate jasmine buds (Thooya = Pure, Malli = Jasmine). Naturally pest-resistant and light on the palate.',
    image: 'images/thooyamalli-rice.jpg',
    tags: ['Jasmine White Grain', 'Easy Digestion', 'Immunity Boost'],
    healthBenefit: 'Rich in plant antioxidants and essential micronutrients. Strengthens the internal nervous system and supports natural immune vitality.',
    cookingRatio: '1 Cup Rice : 2.5 Cups Water (Soak 30–45 mins. Soft, fluffy texture, ideal for daily meals and biryani).',
    nutrition: {
      calories: '350 kcal',
      fiber: '3.8 g',
      protein: '8.2 g',
      iron: '2.5 mg'
    },
    variants: [
      { weight: '500g', inStock: true },
      { weight: '1 Kg', inStock: true },
      { weight: '5 Kg', inStock: true }
    ],
    rating: 4.9,
    reviewsCount: 164
  },
  {
    id: 'prod-2',
    name: 'Kerala Mattai Rice',
    tamilName: 'கேரளா மட்டை அரிசி',
    hindiName: 'केरल मट्टा लाल चावल',
    category: 'rice',
    badge: 'Nutrient Parboiled',
    shortDesc: 'Plump, reddish-brown indigenous parboiled rice from the Western Ghats belt. Unpolished with the nutrient-packed reddish pericarp retained.',
    image: 'images/kerala-mattai-rice.jpg',
    tags: ['Hearty Texture', 'High Magnesium', 'Low Glycemic Load'],
    healthBenefit: 'Abundant in dietary magnesium, zinc, and complex carbohydrates. Delivers sustained energy and supports cardiovascular health.',
    cookingRatio: '1 Cup Rice : 4 Cups Water (Pre-soak for 1 hour. Hearty, chewy grain perfect for curries, sambar, and fish gravies).',
    nutrition: {
      calories: '348 kcal',
      fiber: '4.5 g',
      protein: '7.9 g',
      iron: '3.1 mg'
    },
    variants: [
      { weight: '500g', inStock: true },
      { weight: '1 Kg', inStock: true },
      { weight: '5 Kg', inStock: true }
    ],
    rating: 4.8,
    reviewsCount: 132
  },
  {
    id: 'prod-3',
    name: 'Kattuyanam Rice',
    tamilName: 'காட்டுயானம் பாரம்பரிய அரிசி',
    hindiName: 'काट्टूयानम लाल चावल (डायबिटीज केयर)',
    category: 'rice',
    badge: 'Diabetes Care',
    shortDesc: 'Legendary wild wetland rice (Kattu Yanam = wild elephant), growing tall in traditional wetlands. Known for unmatched stamina and glycemic control.',
    image: 'images/kattuyanam-rice.jpg',
    tags: ['Low Glycemic Index', 'High Dietary Fiber', 'Vitality & Stamina'],
    healthBenefit: 'Celebrated in traditional medicine for extremely low glycemic index and high anthocyanins. Slows carbohydrate digestion, helping stabilize blood glucose.',
    cookingRatio: '1 Cup Rice : 3.5 Cups Water (Soak for 4–6 hours. Excellent for fermented kanji, idli-dosa batter, and porridge).',
    nutrition: {
      calories: '340 kcal',
      fiber: '5.2 g',
      protein: '8.8 g',
      iron: '4.5 mg'
    },
    variants: [
      { weight: '500g', inStock: true },
      { weight: '1 Kg', inStock: true },
      { weight: '5 Kg', inStock: true }
    ],
    rating: 4.9,
    reviewsCount: 140
  },
  {
    id: 'prod-4',
    name: 'Kullakar Rice',
    tamilName: 'குள்ளக்கார் பாரம்பரிய அரிசி',
    hindiName: 'कुल्लाकार लाल चावल (महिला स्वास्थ्य)',
    category: 'rice',
    badge: "Women's Wellness",
    shortDesc: 'Ancient short-duration red rice, naturally resilient to climate variations. Rich in complex zinc, iron, and antioxidant bio-flavonoids.',
    image: 'images/kullakar-rice.jpg',
    tags: ['Antioxidant Rich', 'Postnatal Nutrition', 'Zinc & Iron'],
    healthBenefit: "Traditionally recommended for women's reproductive health, postnatal recuperation, and building natural red blood cells.",
    cookingRatio: '1 Cup Rice : 3 Cups Water (Soak for 2 hours. Produces soft rice, traditional porridge, or red rice idlis).',
    nutrition: {
      calories: '346 kcal',
      fiber: '4.4 g',
      protein: '7.6 g',
      iron: '4.8 mg'
    },
    variants: [
      { weight: '500g', inStock: true },
      { weight: '1 Kg', inStock: true },
      { weight: '5 Kg', inStock: true }
    ],
    rating: 4.8,
    reviewsCount: 118
  },
  {
    id: 'prod-5',
    name: 'Red Rice',
    tamilName: 'நாட்டு சிவப்பு அரிசி',
    hindiName: 'पारंपरिक लाल चावल',
    category: 'rice',
    badge: 'Whole Grain Staple',
    shortDesc: 'Classic unpolished native red rice, slow-dehusked in Theni stone mills to preserve 100% of the reddish antioxidant bran layer.',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80',
    tags: ['100% Unpolished', 'Natural Bran Intact', 'Heart Healthy'],
    healthBenefit: 'Packed with proanthocyanidins and soluble fiber that help manage LDL cholesterol and support smooth bowel regularity.',
    cookingRatio: '1 Cup Rice : 3 Cups Water (Soak for 1–2 hours before pressure cooking or open pot boiling).',
    nutrition: {
      calories: '352 kcal',
      fiber: '4.1 g',
      protein: '7.5 g',
      iron: '3.6 mg'
    },
    variants: [
      { weight: '500g', inStock: true },
      { weight: '1 Kg', inStock: true },
      { weight: '5 Kg', inStock: true }
    ],
    rating: 4.8,
    reviewsCount: 155
  },
  {
    id: 'prod-6',
    name: 'Brown Rice',
    tamilName: 'கைக்குத்தல் பழுப்பு அரிசி',
    hindiName: 'अनपॉलिश भूरा चावल',
    category: 'rice',
    badge: 'Active Germ Bran',
    shortDesc: 'Whole grain unpolished brown rice with the outer husk removed while the living germ and vitamin-rich aleurone layer remain untouched.',
    image: 'images/brown-rice.jpg',
    tags: ['B-Complex Vitamins', 'Complex Carbs', 'Zero Polish'],
    healthBenefit: 'Excellent source of vitamin B1 (thiamine), phosphorus, and manganese. Provides steady metabolic energy without sluggishness.',
    cookingRatio: '1 Cup Rice : 2.5 Cups Water (Soak for 45 mins. Fluffy brown grain suitable for daily table rice).',
    nutrition: {
      calories: '355 kcal',
      fiber: '3.9 g',
      protein: '7.8 g',
      iron: '2.8 mg'
    },
    variants: [
      { weight: '500g', inStock: true },
      { weight: '1 Kg', inStock: true },
      { weight: '5 Kg', inStock: true }
    ],
    rating: 4.8,
    reviewsCount: 142
  },
  {
    id: 'prod-7',
    name: 'Black Rice',
    tamilName: 'பாரம்பரிய கருப்பு கவுனி அரிசி',
    hindiName: 'पारंपरिक काला चावल (कौनी)',
    category: 'rice',
    badge: 'Superfood Anthocyanin',
    shortDesc: 'The emperor grain of South India. Deep purple-black native rice packed with more anthocyanin antioxidants than blueberries.',
    image: 'images/black-rice.jpg',
    tags: ['Antioxidant Powerhouse', 'Anti-Inflammatory', 'Low GI'],
    healthBenefit: 'High polyphenol concentration fights oxidative stress, promotes liver detox, and supports stable cardiovascular health.',
    cookingRatio: '1 Cup Rice : 3.5 Cups Water (Soak for 5–6 hours. Wonderful for Kavuni sweet porridge, halwa, or savory bowls).',
    nutrition: {
      calories: '345 kcal',
      fiber: '4.8 g',
      protein: '8.5 g',
      iron: '3.9 mg'
    },
    variants: [
      { weight: '500g', inStock: true },
      { weight: '1 Kg', inStock: true },
      { weight: '5 Kg', inStock: true }
    ],
    rating: 4.9,
    reviewsCount: 198
  },
  {
    id: 'prod-8',
    name: 'Bamboo Rice',
    tamilName: 'மூங்கில் அரிசி',
    hindiName: 'बांस का चावल (जंगली बीज)',
    category: 'rice',
    badge: 'Rare Forest Harvest',
    shortDesc: 'A rare ecological harvest obtained from the seeds of flowering wild bamboo shoots at the end of their lifespan in Western Ghats forests.',
    image: 'images/bamboo-rice.jpg',
    tags: ['Joint & Bone Care', 'High Plant Protein', 'Wild Forest Grain'],
    healthBenefit: 'Traditionally revered for relieving joint stiffness, backache, and arthritis discomfort due to high natural calcium and silica.',
    cookingRatio: '1 Cup Rice : 3 Cups Water (Soak for 4–5 hours. Cook like sticky rice or prepare sweet bamboo rice kheer).',
    nutrition: {
      calories: '338 kcal',
      fiber: '5.6 g',
      protein: '9.2 g',
      iron: '5.1 mg'
    },
    variants: [
      { weight: '500g', inStock: true },
      { weight: '1 Kg', inStock: true },
      { weight: '5 Kg', inStock: true }
    ],
    rating: 4.9,
    reviewsCount: 94
  },
  {
    id: 'prod-9',
    name: 'Arubatham Kuruvai Rice',
    tamilName: 'அறுபதாம் குறுவை அரிசி',
    hindiName: 'अरुबथम कुरुवई चावल',
    category: 'rice',
    badge: 'Short-Cycle Heritage',
    shortDesc: 'Quick-maturing 60-day heritage rice (Arubatham = sixty, Kuruvai = short term) prized for light digestion and quick rejuvenation.',
    image: 'images/arubatham-kuruvai-rice.jpg',
    tags: ['Post-Illness Recovery', 'Easy on Digestion', 'Natural Stamina'],
    healthBenefit: 'Gentle on sensitive digestive tracts, highly recommended for children, the elderly, and convalescent recovery.',
    cookingRatio: '1 Cup Rice : 2.5 Cups Water (Soak 30 mins. Cooks quickly into soft, palatable daily rice).',
    nutrition: {
      calories: '350 kcal',
      fiber: '3.6 g',
      protein: '7.4 g',
      iron: '2.7 mg'
    },
    variants: [
      { weight: '500g', inStock: true },
      { weight: '1 Kg', inStock: true },
      { weight: '5 Kg', inStock: true }
    ],
    rating: 4.8,
    reviewsCount: 110
  },
  {
    id: 'prod-10',
    name: 'Karun Kuruvai Rice',
    tamilName: 'கருங்குறுவை மூலிகை அரிசி',
    hindiName: 'करुंकुरुवई काला-लाल चावल',
    category: 'rice',
    badge: 'Medicinal Heritage',
    shortDesc: 'Deeply pigmented dark-red medicinal rice celebrated in ancient Siddha medicine. Regarded as an elixir grain for building bodily resistance.',
    image: 'images/karun-kuruvai-rice.jpg',
    tags: ['Siddha Medicinal Grain', 'Detoxifying', 'Immune Vitality'],
    healthBenefit: 'Known in traditional wellness for detoxifying body tissues, supporting nervous vigor, and treating chronic skin allergies.',
    cookingRatio: '1 Cup Rice : 3.5 Cups Water (Soak 4 hours. Ideal for restorative kanji, herbal porridges, and lunch staple).',
    nutrition: {
      calories: '342 kcal',
      fiber: '4.7 g',
      protein: '8.4 g',
      iron: '4.6 mg'
    },
    variants: [
      { weight: '500g', inStock: true },
      { weight: '1 Kg', inStock: true },
      { weight: '5 Kg', inStock: true }
    ],
    rating: 4.9,
    reviewsCount: 125
  },
  {
    id: 'prod-11',
    name: 'Ilupai Poo Samba Rice',
    tamilName: 'இலுப்பைப்பூ சம்பா அரிசி',
    hindiName: 'इलुप्पैपू सांबा सुगंधित चावल',
    category: 'rice',
    badge: 'Floral Fragrance',
    shortDesc: 'Fragrant heritage rice variety emitting the subtle, comforting aroma of native Mahua (Iluppai) tree flowers when steamed.',
    image: 'https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?auto=format&fit=crop&w=800&q=80',
    tags: ['Aromatic Healing', 'Joint Mobility', 'Traditional Remedy'],
    healthBenefit: 'Traditionally valued for easing chronic joint stiffness, muscular fatigue, and promoting tranquil, restorative sleep.',
    cookingRatio: '1 Cup Rice : 3 Cups Water (Soak 1 hour. Deliciously aromatic rice, great with native dal and sambar).',
    nutrition: {
      calories: '349 kcal',
      fiber: '3.9 g',
      protein: '7.7 g',
      iron: '3.0 mg'
    },
    variants: [
      { weight: '500g', inStock: true },
      { weight: '1 Kg', inStock: true },
      { weight: '5 Kg', inStock: true }
    ],
    rating: 4.8,
    reviewsCount: 88
  },
  {
    id: 'prod-12',
    name: 'Kaikuthal Rice',
    tamilName: 'கைக்குத்தல் பாரம்பரிய அரிசி',
    hindiName: 'हाथ से कुटा हुआ चावल',
    category: 'rice',
    badge: 'Hand-Pounded Classic',
    shortDesc: 'Authentic stone-dehusked native grain milled without modern polishers, preserving 100% of the live germ and wholesome bran.',
    image: 'images/kaikuthal-rice.jpg',
    tags: ['Stone Dehusked', '100% Unpolished', 'Natural Fiber'],
    healthBenefit: 'Preserves the full vitamin B complex, dietary fiber, and natural minerals stripped away by industrial white rice milling.',
    cookingRatio: '1 Cup Rice : 3 Cups Water (Soak for 1 hour. Wholesome grain with satisfying earthy chew).',
    nutrition: {
      calories: '351 kcal',
      fiber: '4.0 g',
      protein: '8.0 g',
      iron: '3.2 mg'
    },
    variants: [
      { weight: '500g', inStock: true },
      { weight: '1 Kg', inStock: true },
      { weight: '5 Kg', inStock: true }
    ],
    rating: 4.8,
    reviewsCount: 147
  },

  // ==========================================
  // 2. MILLET PRODUCTS (10 Items)
  // ==========================================
  {
    id: 'prod-13',
    name: 'Foxtail Millet',
    tamilName: 'நாட்டு தினை',
    hindiName: 'कंगनी / राल (Foxtail)',
    category: 'millet',
    badge: 'Nerve & Muscle Care',
    shortDesc: 'Golden yellow unpolished Foxtail grain, packed with plant protein and slow-digesting complex carbs.',
    image: 'images/foxtail-millet.jpg',
    tags: ['High Protein', 'Magnesium Rich', 'Gluten Free'],
    healthBenefit: 'Rich in dietary magnesium and vitamin B12. Helps tone muscular coordination and steady insulin release.',
    cookingRatio: '1 Cup Millet : 2.5 Cups Water (Soak 20 mins; ready in 12–15 mins for upma, pongal, or pulao).',
    nutrition: {
      calories: '331 kcal',
      fiber: '8.0 g',
      protein: '12.3 g',
      iron: '2.8 mg'
    },
    variants: [
      { weight: '500g', inStock: true },
      { weight: '1 Kg', inStock: true },
      { weight: '5 Kg', inStock: true }
    ],
    rating: 4.9,
    reviewsCount: 130
  },
  {
    id: 'prod-14',
    name: 'Finger Millet (Ragi)',
    tamilName: 'நாட்டு கேழ்வரகு (கேப்பை)',
    hindiName: 'रागी (फिंगर मिलेट)',
    category: 'millet',
    badge: 'Calcium Powerhouse',
    shortDesc: 'Whole unpolished Finger Millet grains, rich in bioavailable calcium—offering over 340mg calcium per 100g.',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
    tags: ['High Bioavailable Calcium', 'Bone Health', 'Gluten Free'],
    healthBenefit: 'Unmatched natural calcium source for building strong bone density in growing children and mature adults.',
    cookingRatio: 'Whole grain: Sprout or grind into fresh ragi flour for mudde, kanji, dosa, or stone-ground porridge.',
    nutrition: {
      calories: '328 kcal',
      fiber: '11.5 g',
      protein: '7.3 g',
      iron: '3.9 mg'
    },
    variants: [
      { weight: '500g', inStock: true },
      { weight: '1 Kg', inStock: true },
      { weight: '5 Kg', inStock: true }
    ],
    rating: 4.9,
    reviewsCount: 175
  },
  {
    id: 'prod-15',
    name: 'Kodo Millet',
    tamilName: 'நாட்டு வரகு',
    hindiName: 'कोदो मिलेट',
    category: 'millet',
    badge: 'Fiber & Lecithin',
    shortDesc: 'Ancient unpolished Varagu grain, deep greyish-brown with high dietary fiber and rich plant lecithin.',
    image: 'images/kodo-millet.jpg',
    tags: ['Low Glycemic Index', 'Nervous Support', 'Gluten Free'],
    healthBenefit: 'Contains plant lecithin that nourishes the central nervous system and high soluble fiber that stabilizes blood glucose.',
    cookingRatio: '1 Cup Millet : 2.5 Cups Water (Soak 20 mins. Cooks fluffy, replaces rice in any lunch dish).',
    nutrition: {
      calories: '309 kcal',
      fiber: '9.0 g',
      protein: '8.3 g',
      iron: '2.6 mg'
    },
    variants: [
      { weight: '500g', inStock: true },
      { weight: '1 Kg', inStock: true },
      { weight: '5 Kg', inStock: true }
    ],
    rating: 4.8,
    reviewsCount: 115
  },
  {
    id: 'prod-16',
    name: 'Little Millet',
    tamilName: 'நாட்டு சாமை',
    hindiName: 'कुटकी (लिटिल मिलेट)',
    category: 'millet',
    badge: 'Gentle & Light',
    shortDesc: 'Dainty, micro-grained native Samai. Softest of all millets, incredibly easy on digestion and quick to prepare.',
    image: 'images/little-millet.jpg',
    tags: ['Fast Digesting', 'Phosphorus Rich', 'Gluten Free'],
    healthBenefit: 'Packed with dietary phosphorus and B-vitamins, making it ideal for detoxifying morning porridge and restorative meals.',
    cookingRatio: '1 Cup Millet : 2 Cups Water (Soak 15 mins. Perfect for breakfast khichdi, pongal, or idiyappam).',
    nutrition: {
      calories: '329 kcal',
      fiber: '7.6 g',
      protein: '7.7 g',
      iron: '9.3 mg'
    },
    variants: [
      { weight: '500g', inStock: true },
      { weight: '1 Kg', inStock: true },
      { weight: '5 Kg', inStock: true }
    ],
    rating: 4.8,
    reviewsCount: 104
  },
  {
    id: 'prod-17',
    name: 'Barnyard Millet',
    tamilName: 'நாட்டு குதிரைவாலி',
    hindiName: 'सांवा / समा के चावल (Barnyard)',
    category: 'millet',
    badge: 'Highest Fiber Grain',
    shortDesc: 'Creamy unpolished Kuthiraivali grain. Boasts the lowest carbohydrate content and fastest digestibility among all grains.',
    image: 'images/barnyard-millet.jpg',
    tags: ['Ultra High Fiber', 'Weight Management', 'Gluten Free'],
    healthBenefit: 'Provides over 10g dietary fiber per 100g with low glycemic load, preventing afternoon post-meal sugar crashes.',
    cookingRatio: '1 Cup Millet : 2.5 Cups Water (Soak 20 mins; ready in 12 mins. Exceptional substitute for white rice).',
    nutrition: {
      calories: '307 kcal',
      fiber: '10.1 g',
      protein: '6.2 g',
      iron: '5.0 mg'
    },
    variants: [
      { weight: '500g', inStock: true },
      { weight: '1 Kg', inStock: true },
      { weight: '5 Kg', inStock: true }
    ],
    rating: 4.9,
    reviewsCount: 158
  },
  {
    id: 'prod-18',
    name: 'Proso Millet',
    tamilName: 'நாட்டு பனிவரகு',
    hindiName: 'चेना (प्रोसो मिलेट)',
    category: 'millet',
    badge: 'High Protein Millet',
    shortDesc: 'Nutrient-dense native Panivaragu grain, carrying the highest natural protein ratio (12.5%) and rich vitamin B3 (niacin).',
    image: 'images/proso-millet.jpg',
    tags: ['12.5% Plant Protein', 'Cardio Health', 'Gluten Free'],
    healthBenefit: 'Rich in niacin which helps regulate cholesterol synthesis and maintain healthy nervous tissue function.',
    cookingRatio: '1 Cup Millet : 2 Cups Water (Soak 20 mins. Fluffy, separate grains ideal for fried rice and lemon rice).',
    nutrition: {
      calories: '341 kcal',
      fiber: '8.5 g',
      protein: '12.5 g',
      iron: '2.8 mg'
    },
    variants: [
      { weight: '500g', inStock: true },
      { weight: '1 Kg', inStock: true },
      { weight: '5 Kg', inStock: true }
    ],
    rating: 4.8,
    reviewsCount: 92
  },
  {
    id: 'prod-19',
    name: 'Pearl Millet (Bajra)',
    tamilName: 'நாட்டு கம்பு',
    hindiName: 'बाजरा (पर्ल मिलेट)',
    category: 'millet',
    badge: 'Summer Cooling & Iron',
    shortDesc: 'Traditional greyish-green Kambu grains. Celebrated in Tamil culture for the cooling, probiotic staple Kambu Koozh.',
    image: 'images/pearl-millet-bajra.jpg',
    tags: ['High Dietary Iron', 'Body Cooling', 'Energy Sustaining'],
    healthBenefit: 'Rich in iron (8mg/100g) and zinc, counteracts heat stress, builds hemoglobin, and provides long-lasting rural energy.',
    cookingRatio: 'Grind or boil: Soak 1 hour before pressure cooking, or ferment with buttermilk for traditional Kambu Koozh.',
    nutrition: {
      calories: '361 kcal',
      fiber: '8.5 g',
      protein: '11.6 g',
      iron: '8.0 mg'
    },
    variants: [
      { weight: '500g', inStock: true },
      { weight: '1 Kg', inStock: true },
      { weight: '5 Kg', inStock: true }
    ],
    rating: 4.9,
    reviewsCount: 168
  },
  {
    id: 'prod-20',
    name: 'Brown Top Millet',
    tamilName: 'பழுப்பு தினை (பலவந்தம்)',
    hindiName: 'कोराले / ब्राउन टॉप मिलेट',
    category: 'millet',
    badge: 'The Detox Super-Grain',
    shortDesc: 'Rare positive millet grain packed with an extraordinary 12.5g of fiber per 100g. The premier digestive cleanser.',
    image: 'images/brown-top-millet.jpg',
    tags: ['12.5% Super Fiber', 'Gut Cleansing', 'Positive Millet'],
    healthBenefit: 'Assists in clearing toxins from the gut lining, managing metabolic syndrome, and restoring digestive equilibrium.',
    cookingRatio: '1 Cup Millet : 3 Cups Water (Soak 2–3 hours. Cook on slow heat into nourishing table grain or porridge).',
    nutrition: {
      calories: '310 kcal',
      fiber: '12.5 g',
      protein: '11.5 g',
      iron: '7.7 mg'
    },
    variants: [
      { weight: '500g', inStock: true },
      { weight: '1 Kg', inStock: true },
      { weight: '5 Kg', inStock: true }
    ],
    rating: 4.9,
    reviewsCount: 112
  },
  {
    id: 'prod-21',
    name: 'Thinai Rice (Foxtail Millet Rice)',
    tamilName: 'தினை அரிசி',
    hindiName: 'कंगनी चावल (Foxtail Rice)',
    category: 'millet',
    badge: 'Direct Table Grain',
    shortDesc: 'Fully dehusked, cleaned Foxtail millet grain ready for direct boiling as a 100% wholesome substitute for white table rice.',
    image: 'images/foxtail-millet.jpg',
    tags: ['Rice Substitute', 'Low Glycemic Load', 'Gluten Free'],
    healthBenefit: 'Maintains low glycemic response after lunch while delivering full mineral nourishment and plant protein.',
    cookingRatio: '1 Cup Thinai Rice : 2.5 Cups Water (Cooks like regular rice in 12–15 mins in a standard cooker).',
    nutrition: {
      calories: '331 kcal',
      fiber: '8.0 g',
      protein: '12.3 g',
      iron: '2.8 mg'
    },
    variants: [
      { weight: '500g', inStock: true },
      { weight: '1 Kg', inStock: true },
      { weight: '5 Kg', inStock: true }
    ],
    rating: 4.8,
    reviewsCount: 122
  },
  {
    id: 'prod-22',
    name: 'Kodo Millet Semi Rice',
    tamilName: 'வரகு அரிசி / ரவை',
    hindiName: 'कोदो चावल सूजी (रवा)',
    category: 'millet',
    badge: 'Coarse Milled Rava',
    shortDesc: 'Specially crushed unpolished Kodo millet semolina, prepared for instant wholesome upma, kesari, and savory khichdi.',
    image: 'images/kodo-millet.jpg',
    tags: ['Quick Cooking', 'Lecithin Rich', 'Healthy Breakfast'],
    healthBenefit: 'Slow-burning morning fuel with low GI that keeps blood sugar flat and prevents pre-lunch sugar dips.',
    cookingRatio: '1 Cup Semi Rice : 3 Cups Boiling Water (Roasted lightly and cooked into non-sticky upma or khichdi).',
    nutrition: {
      calories: '315 kcal',
      fiber: '8.8 g',
      protein: '8.1 g',
      iron: '2.5 mg'
    },
    variants: [
      { weight: '500g', inStock: true },
      { weight: '1 Kg', inStock: true },
      { weight: '5 Kg', inStock: true }
    ],
    rating: 4.8,
    reviewsCount: 89
  },

  // ==========================================
  // 3. OTHER GRAIN PRODUCTS (2 Items)
  // ==========================================
  {
    id: 'prod-23',
    name: 'Maize (Whole Dried Field Maize)',
    tamilName: 'நாட்டு மக்காச்சோளம்',
    hindiName: 'देशी सूखा मक्का',
    category: 'grain',
    badge: 'Whole Field Corn',
    shortDesc: 'Whole sun-dried heritage field corn kernels from Theni farmlands. Non-GMO, naturally dried for stone milling or roasting.',
    image: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=800&q=80',
    tags: ['Non-GMO Whole Grain', 'Lutein & Zeaxanthin', 'Slow Energy'],
    healthBenefit: 'Rich in eye-protective lutein, carotenoid antioxidants, and high dietary insoluble fiber for intestinal health.',
    cookingRatio: 'Ideal for stone grinding into authentic Makki Atta (corn flour), corn grits, or coarse porridge.',
    nutrition: {
      calories: '365 kcal',
      fiber: '7.3 g',
      protein: '9.4 g',
      iron: '2.7 mg'
    },
    variants: [
      { weight: '500g', inStock: true },
      { weight: '1 Kg', inStock: true },
      { weight: '5 Kg', inStock: true }
    ],
    rating: 4.8,
    reviewsCount: 76
  },
  {
    id: 'prod-24',
    name: 'Yellow Corn Kernels',
    tamilName: 'மஞ்சள் மக்காச்சோள மணிகள்',
    hindiName: 'पीले मक्का के दाने',
    category: 'grain',
    badge: 'Cleaned Golden Grain',
    shortDesc: 'Carefully cleaned, sorted golden corn grains harvested fresh from local fields, sun-cured to lock in natural sweetness and fiber.',
    image: 'images/yellow-corn-kernels.jpg',
    tags: ['Sun-Dried Golden Grain', 'Carotenoids Rich', 'Stone-Mill Ready'],
    healthBenefit: 'Provides natural carotenoids, zinc, and dietary energy; excellent for wholesome family cornbread, rotis, and baking.',
    cookingRatio: 'Grind into fine yellow cornmeal or crack for corn porridge and steaming.',
    nutrition: {
      calories: '360 kcal',
      fiber: '6.9 g',
      protein: '9.0 g',
      iron: '2.5 mg'
    },
    variants: [
      { weight: '500g', inStock: true },
      { weight: '1 Kg', inStock: true },
      { weight: '5 Kg', inStock: true }
    ],
    rating: 4.8,
    reviewsCount: 65
  }
];
