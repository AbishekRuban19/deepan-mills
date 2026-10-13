// Deepan Mills - Production Application Logic
// Verified Multilingual Support (EN, TA, HI), Real Order Tracking, and Truthful E-Commerce Architecture.

// --- MULTILINGUAL DICTIONARY (English, Tamil, Hindi) ---
const TRANSLATIONS = {
  en: {
    langName: 'English',
    announcement: 'Direct from Theni Soil • 100% Unpolished & Traditional Cold Processed',
    announcementSub: 'Tamil Nadu MSME Award Recognized Unit',
    brandTagline: 'Tradition • Purity • Health',
    navHome: 'Heritage',
    navShop: 'Shop Grains & Oils',
    navGuide: 'Cooking & Health',
    navAwards: 'Milling Craft',
    navReviews: 'Patron Notes',
    navContact: 'Contact',
    btnWaHeader: 'WhatsApp',
    btnCartHeader: 'Cart',
    heroBadge1: 'MSME Recognized Agro Processing Unit',
    heroBadge2: 'Theni Western Ghats Agro Cluster',
    heroHeadline: 'Deepan Mills <br><span class="font-serif italic text-amber-700">Native Grains</span> & Wood-Pressed Oils.',
    heroSubtitle: 'Situated in the agricultural heartlands of Theni, Tamil Nadu, Deepan Mills specializes in reviving authentic unpolished native millets, traditional Karuppu Kavuni and Mappillai Samba rice, slow stone-ground flours, and pure cold-extracted Vaagai oils.',
    catalogEyebrow: 'Direct From Our Mill',
    catalogTitle: 'Heritage Grains, Millets & Cold-Pressed Oils',
    catalogSub: 'Select your preferred pack size (500g, 1 Kg, 5 Kg), view verified nutritional breakdown, and add directly to your shopping basket.',
    catAll: 'All Products (12)',
    catRice: 'Heritage Rice',
    catMillet: 'Native Millets',
    catOil: 'Cold-Pressed Oils',
    catFlour: 'Stone-Ground Flours',
    catCombos: 'Value Combos',
    labelFilterBy: 'Filter by Need:',
    btnAdd: 'Add',
    btnViewDetails: 'Quick Details',
    drawerTitle: 'Your Basket',
    lblSubtotal: 'Items Subtotal:',
    lblDelivery: 'Shipping:',
    lblTotal: 'Total Payable:',
    btnCheckoutSubmit: 'Proceed to Checkout',
    btnCheckoutWa: 'Order via WhatsApp Hotline'
  },
  ta: {
    langName: 'தமிழ்',
    announcement: 'தேனி மண்ணிலிருந்து நேரடியாக • 100% தீட்டப்படாத நவதானியங்கள்',
    announcementSub: 'தமிழ்நாடு MSME அங்கீகாரம் பெற்ற ஆலை',
    brandTagline: 'பாரம்பரியம் • தூய்மை • நல்வாழ்வு',
    navHome: 'ஆலை அறிமுகம்',
    navShop: 'தானியங்கள் & எண்ணெய்கள்',
    navGuide: 'சமையல் வழிகாட்டி',
    navAwards: 'ஆலை பாரம்பரியம்',
    navReviews: 'வாடிக்கையாளர் குறிப்புகள்',
    navContact: 'தொடர்பு',
    btnWaHeader: 'வாட்ஸ்அப்',
    btnCartHeader: 'கூடை',
    heroBadge1: 'MSME அங்கீகாரம் பெற்ற விவசாய நிறுவனம்',
    heroBadge2: 'தேனி மேற்கு தொடர்ச்சி மலை நவதானியங்கள்',
    heroHeadline: 'தீபன் மில்ஸ் <br><span class="font-serif italic text-amber-700">பாரம்பரிய நவதானியங்கள்</span> & மரச்செக்கு எண்ணெய்கள்.',
    heroSubtitle: 'தேனியின் வளமான மண்ணில் விளைந்த பாரம்பரிய நவதானியங்கள், கருப்பு கவுனி, மாப்பிள்ளை சம்பா அரிசி, கல் செக்கு மற்றும் மரச்செக்கு எண்ணெய்கள். ரசாயனங்கள் அற்ற ஆரோக்கியமான உணவை உங்கள் இல்லத்திற்கு சேர்க்கிறோம்.',
    catalogEyebrow: 'எங்கள் ஆலை தயாரிப்புகள்',
    catalogTitle: 'பாரம்பரிய தானியங்கள், சிறுதானியங்கள் & மரச்செக்கு',
    catalogSub: 'தேவையான எடையைத் தேர்ந்தெடுத்து (500g, 1kg, 5kg) நேரடியாக உங்கள் கூடையில் சேர்க்கவும்.',
    catAll: 'அனைத்து பொருட்கள் (12)',
    catRice: 'பாரம்பரிய அரிசி',
    catMillet: 'நாட்டுச் சிறுதானியங்கள்',
    catOil: 'மரச்செக்கு எண்ணெய்கள்',
    catFlour: 'சத்து மாவு வகைகள்',
    catCombos: 'சிறப்பு காம்போ',
    labelFilterBy: 'தேவைக்கேற்ப:',
    btnAdd: 'சேர்',
    btnViewDetails: 'விவரம்',
    drawerTitle: 'உங்கள் கூடை',
    lblSubtotal: 'பொருட்களின் மொத்த விலை:',
    lblDelivery: 'டெலிவரி கட்டணம்:',
    lblTotal: 'செலுத்த வேண்டிய தொகை:',
    btnCheckoutSubmit: 'ஆர்டர் செய்ய தொடர்க',
    btnCheckoutWa: 'வாட்ஸ்அப் மூலம் உடனடி ஆர்டர்'
  },
  hi: {
    langName: 'हिन्दी',
    announcement: 'थेनी की मिट्टी से सीधे • 100% बिना पॉलिश व प्राकृतिक अनाज',
    announcementSub: 'तमिलनाडु MSME मान्यता प्राप्त इकाई',
    brandTagline: 'परंपरा • शुद्धता • स्वास्थ्य',
    navHome: 'मिल परिचय',
    navShop: 'अनाज व तेल',
    navGuide: 'स्वास्थ्य व विधि',
    navAwards: 'मिल शिल्प',
    navReviews: 'ग्राहक अनुभव',
    navContact: 'संपर्क',
    btnWaHeader: 'व्हाट्सएप',
    btnCartHeader: 'कार्ट',
    heroBadge1: 'MSME मान्यता प्राप्त कृषि प्रसंस्करण इकाई',
    heroBadge2: 'थेनी पश्चिमी घाट कृषि समूह',
    heroHeadline: 'दीपन मिल्स <br><span class="font-serif italic text-amber-700">पारंपरिक अनाज</span> और कोल्ड प्रेस्ड तेल।',
    heroSubtitle: 'थेनी, तमिलनाडु की उपजाऊ भूमि से सीधे प्राप्त पारंपरिक बाजरा, काला व लाल चावल, पत्थर की चक्की का आटा और लकड़ी कोल्हू का शुद्ध तेल। बिना किसी पॉलिश या रसायन के।',
    catalogEyebrow: 'सीधे हमारी मिल से',
    catalogTitle: 'पारंपरिक अनाज, बाजरा और शुद्ध तेल',
    catalogSub: 'पैकेट का वजन चुनें (500g, 1kg, 5kg) और सीधे अपनी टोकरी में जोड़ें।',
    catAll: 'सभी उत्पाद (12)',
    catRice: 'पारंपरिक चावल',
    catMillet: 'बाजरा / मिलेट्स',
    catOil: 'कोल्ड प्रेस्ड तेल',
    catFlour: 'पारंपरिक आटा व सत्तू',
    catCombos: 'विशेष कॉम्बो',
    labelFilterBy: 'आवश्यकता अनुसार:',
    btnAdd: 'जोड़ें',
    btnViewDetails: 'विवरण',
    drawerTitle: 'आपकी टोकरी',
    lblSubtotal: 'सामग्रियों का मूल्य:',
    lblDelivery: 'शिपिंग शुल्क:',
    lblTotal: 'कुल देय राशि:',
    btnCheckoutSubmit: 'सुरक्षित चेकआउट करें',
    btnCheckoutWa: 'व्हाट्सएप पर ऑर्डर करें'
  }
};

// --- STATE MANAGEMENT ---
let currentLang = 'en';
let currentUser = null;
let cart = [];
let currentCategory = 'all';
let currentDietTag = null;
let searchQuery = '';
const selectedVariantMap = {};
let currentQuickViewState = {
  productId: null,
  variantIdx: 0,
  quantity: 1
};

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  // 1. Load saved language
  try {
    const savedLang = localStorage.getItem('deepan_lang');
    if (savedLang && TRANSLATIONS[savedLang]) {
      currentLang = savedLang;
    }
  } catch (e) {
    currentLang = 'en';
  }

  // 2. Load customer account profile
  try {
    const savedUser = localStorage.getItem('deepan_customer_profile');
    if (savedUser) {
      currentUser = JSON.parse(savedUser);
    }
  } catch (e) {
    currentUser = null;
  }

  // 3. Load saved cart from localStorage & sanitize numeric values
  try {
    const savedCart = localStorage.getItem('deepan_mills_cart');
    if (savedCart) {
      const parsed = JSON.parse(savedCart);
      if (Array.isArray(parsed)) {
        cart = parsed.filter(item => item && item.productId).map(item => {
          let p = item.price;
          if (typeof p === 'string') p = parseInt(p.replace(/[^0-9]/g, '')) || 0;
          if (!p || p <= 0) {
            const canonical = PRODUCTS.find(cp => cp.id === item.productId);
            if (canonical) {
              const v = canonical.variants.find(cv => cv.weight === item.weight) || canonical.variants[0];
              p = v.price;
            }
          }
          return {
            ...item,
            price: Number(p) || 100,
            quantity: Math.max(1, parseInt(item.quantity) || 1)
          };
        });
      }
    }
  } catch (e) {
    cart = [];
  }

  // 4. Set default active variant (0 = first weight tier)
  PRODUCTS.forEach(p => {
    selectedVariantMap[p.id] = 0;
  });

  // 5. Clean search and filter initial states (prevent stale browser autofill)
  searchQuery = '';
  currentCategory = 'all';
  currentDietTag = null;
  const searchInput = document.getElementById('product-search-input');
  if (searchInput) searchInput.value = '';
  const emptyView = document.getElementById('no-products-view');
  if (emptyView) {
    emptyView.style.display = 'none';
    emptyView.classList.add('hidden');
  }

  // 6. Render immediately on page load (UNGATED)
  updateAuthUI();
  applyLanguage(currentLang);
  renderProducts();
  renderTestimonials();
  updateCartUI();
  setupEventListeners();

  if (window.lucide) {
    window.lucide.createIcons();
  }
});

// Save cart helper
function saveCart() {
  try {
    localStorage.setItem('deepan_mills_cart', JSON.stringify(cart));
  } catch (e) {}
}

// Save customer orders helper
function getCustomerOrders() {
  try {
    const orders = localStorage.getItem('deepan_customer_orders');
    return orders ? JSON.parse(orders) : [];
  } catch (e) {
    return [];
  }
}

function saveCustomerOrder(order) {
  try {
    const orders = getCustomerOrders();
    orders.unshift(order);
    localStorage.setItem('deepan_customer_orders', JSON.stringify(orders));
  } catch (e) {}
}

// --- CUSTOMER ACCOUNT & AUTHENTICATION LOGIC ---
function updateAuthUI() {
  const userNameEl = document.getElementById('header-user-name');
  const loggedOutView = document.getElementById('account-logged-out-view');
  const loggedInView = document.getElementById('account-logged-in-view');
  const dispName = document.getElementById('acc-display-name');
  const dispPhone = document.getElementById('acc-display-phone');
  const dispCity = document.getElementById('acc-display-city');

  if (currentUser && currentUser.name) {
    if (userNameEl) userNameEl.innerText = currentUser.name.split(' ')[0] || 'My Account';
    if (loggedOutView) loggedOutView.classList.add('hidden');
    if (loggedInView) loggedInView.classList.remove('hidden');
    if (dispName) dispName.innerText = currentUser.name;
    if (dispPhone) dispPhone.innerText = currentUser.phone ? `Ph: ${currentUser.phone}` : '';
    if (dispCity) dispCity.innerText = currentUser.city ? `City: ${currentUser.city}` : '';
  } else {
    if (userNameEl) userNameEl.innerText = 'My Account';
    if (loggedOutView) loggedOutView.classList.remove('hidden');
    if (loggedInView) loggedInView.classList.add('hidden');
  }

  if (window.lucide) window.lucide.createIcons();
}

function openAccountModal() {
  const modal = document.getElementById('account-modal');
  if (modal) {
    modal.classList.remove('opacity-0', 'pointer-events-none');
    modal.classList.add('opacity-100', 'pointer-events-auto');
    document.body.classList.add('overflow-hidden');
  }
}

function closeAccountModal() {
  const modal = document.getElementById('account-modal');
  if (modal) {
    modal.classList.remove('opacity-100', 'pointer-events-auto');
    modal.classList.add('opacity-0', 'pointer-events-none');
    document.body.classList.remove('overflow-hidden');
  }
}

function handleSaveCustomerAccount() {
  const nameInput = document.getElementById('acc-input-name');
  const phoneInput = document.getElementById('acc-input-phone');
  const cityInput = document.getElementById('acc-input-city');

  const name = nameInput ? nameInput.value.trim() : '';
  const phone = phoneInput ? phoneInput.value.trim() : '';
  const city = cityInput ? cityInput.value.trim() : '';

  if (!name || name.length < 2) {
    showToast('Please enter your full name.', 'error');
    return;
  }
  if (!phone || phone.length < 10) {
    showToast('Please enter a valid 10-digit mobile number.', 'error');
    return;
  }

  currentUser = { name, phone, city };
  try {
    localStorage.setItem('deepan_customer_profile', JSON.stringify(currentUser));
  } catch (e) {}

  updateAuthUI();
  closeAccountModal();
  showToast(`Welcome, ${name}! Your profile is saved.`, 'success');
}

function handleLogout() {
  currentUser = null;
  try {
    localStorage.removeItem('deepan_customer_profile');
  } catch (e) {}

  updateAuthUI();
  closeAccountModal();
  showToast('Logged out of customer profile.', 'info');
}

// --- LANGUAGE SWITCHER LOGIC ---
function changeLanguage(langKey) {
  if (!TRANSLATIONS[langKey]) return;
  currentLang = langKey;
  try {
    localStorage.setItem('deepan_lang', langKey);
  } catch (e) {}

  applyLanguage(langKey);
  renderProducts();

  const dropdown = document.getElementById('lang-dropdown');
  if (dropdown) dropdown.classList.add('hidden');

  showToast(`Language switched to ${TRANSLATIONS[langKey].langName}`, 'info');
}

function applyLanguage(langKey) {
  const t = TRANSLATIONS[langKey];
  if (!t) return;

  const currentLangLabel = document.getElementById('current-lang-name');
  if (currentLangLabel) currentLangLabel.innerText = t.langName;

  const textMap = {
    'announcement-text': t.announcement,
    'announcement-sub': t.announcementSub,
    'brand-tagline': t.brandTagline,
    'nav-home': t.navHome,
    'nav-shop': t.navShop,
    'nav-guide': t.navGuide,
    'nav-awards': t.navAwards,
    'nav-reviews': t.navReviews,
    'nav-contact': t.navContact,
    'btn-wa-header': t.btnWaHeader,
    'btn-cart-header': t.btnCartHeader,
    'hero-badge-1': t.heroBadge1,
    'hero-badge-2': t.heroBadge2,
    'hero-headline': t.heroHeadline,
    'hero-subtitle': t.heroSubtitle,
    'catalog-eyebrow': t.catalogEyebrow,
    'catalog-title': t.catalogTitle,
    'catalog-sub': t.catalogSub,
    'cat-all': t.catAll,
    'cat-rice': t.catRice,
    'cat-millet': t.catMillet,
    'cat-oil': t.catOil,
    'cat-flour': t.catFlour,
    'cat-combos': t.catCombos,
    'label-filter-by': t.labelFilterBy,
    'drawer-title': t.drawerTitle,
    'lbl-subtotal': t.lblSubtotal,
    'lbl-delivery': t.lblDelivery,
    'lbl-total': t.lblTotal,
    'btn-checkout-submit': t.btnCheckoutSubmit,
    'btn-checkout-wa': t.btnCheckoutWa
  };

  for (const [id, value] of Object.entries(textMap)) {
    const el = document.getElementById(id);
    if (el) {
      el.innerHTML = value;
    }
  }

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// --- RENDER PRODUCTS (UNGATED, PRODUCTION READY) ---
function renderProducts() {
  const container = document.getElementById('products-grid');
  const emptyView = document.getElementById('no-products-view');
  if (!container) return;

  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.en;

  const filtered = PRODUCTS.filter(prod => {
    const catMatch = currentCategory === 'all' || prod.category === currentCategory;
    const q = searchQuery.toLowerCase().trim();
    const searchMatch = !q || 
      prod.name.toLowerCase().includes(q) || 
      (prod.tamilName && prod.tamilName.toLowerCase().includes(q)) || 
      (prod.hindiName && prod.hindiName.toLowerCase().includes(q)) || 
      prod.shortDesc.toLowerCase().includes(q) ||
      prod.tags.some(tg => tg.toLowerCase().includes(q));

    const tagMatch = !currentDietTag || 
      prod.tags.some(tag => tag.toLowerCase().includes(currentDietTag.toLowerCase()));

    return catMatch && searchMatch && tagMatch;
  });

  if (filtered.length === 0) {
    container.innerHTML = '';
    if (emptyView) {
      emptyView.style.display = 'block';
      emptyView.classList.remove('hidden');
    }
    return;
  }

  if (emptyView) {
    emptyView.style.display = 'none';
    emptyView.classList.add('hidden');
  }

  container.innerHTML = filtered.map(prod => {
    const activeVarIdx = selectedVariantMap[prod.id] || 0;
    const currentVariant = prod.variants[activeVarIdx] || prod.variants[0];
    const savings = currentVariant.mrp - currentVariant.price;

    const localizedTitle = currentLang === 'ta' && prod.tamilName ? prod.tamilName :
                           currentLang === 'hi' && prod.hindiName ? prod.hindiName : prod.name;
    const subTitle = currentLang === 'en' ? (prod.tamilName || '') : prod.name;

    return `
      <div class="product-card bg-white rounded-3xl p-4 flex flex-col justify-between group shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-200" 
           data-product-id="${prod.id}">
        <div>
          <!-- Product Photography -->
          <div class="relative rounded-2xl overflow-hidden aspect-[4/3] bg-stone-100 mb-3.5 cursor-pointer" 
               onclick="openQuickView('${prod.id}', ${activeVarIdx})">
            <img src="${prod.image}" 
                 alt="${prod.name}" 
                 loading="lazy"
                 class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
            
            <div class="absolute top-2.5 left-2.5">
              <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#142E23] text-amber-200 shadow-sm">
                ${prod.badge}
              </span>
            </div>

            <div class="absolute bottom-2.5 right-2.5 px-2.5 py-1 rounded-xl bg-white/95 backdrop-blur-sm text-stone-800 text-[10px] font-bold flex items-center gap-1 shadow">
              <i data-lucide="info" class="w-3 h-3 text-amber-700"></i>
              <span>Details</span>
            </div>
          </div>

          <!-- Product Titles & Heritage Info -->
          <div class="space-y-1 mb-2">
            ${subTitle ? `
              <div class="flex items-center gap-1 text-[11px] font-semibold text-amber-800">
                <span>${subTitle}</span>
              </div>
            ` : ''}
            <h3 class="font-heading font-bold text-base text-stone-900 leading-snug cursor-pointer group-hover:text-emerald-900 transition-colors"
                onclick="openQuickView('${prod.id}', ${activeVarIdx})">
              ${localizedTitle}
            </h3>
            <p class="text-xs text-stone-500 line-clamp-2 leading-relaxed">
              ${prod.shortDesc}
            </p>
          </div>

          <!-- Dietary & Nutritional Tags -->
          <div class="flex flex-wrap gap-1.5 mb-3">
            ${prod.tags.slice(0, 2).map(tag => `
              <span class="text-[10px] font-medium px-2 py-0.5 rounded-md bg-stone-100 text-stone-600 border border-stone-200">
                ${tag}
              </span>
            `).join('')}
          </div>
        </div>

        <div>
          <!-- Interactive Weight Selector on Card -->
          <div class="mb-3">
            <span class="block text-[10px] font-bold uppercase tracking-wider text-stone-400 mb-1.5">Pack Weight:</span>
            <div class="grid grid-cols-${prod.variants.length} gap-1.5">
              ${prod.variants.map((v, idx) => `
                <button type="button" 
                        onclick="selectProductVariant('${prod.id}', ${idx})" 
                        class="text-xs font-bold py-1 px-2 rounded-xl border text-center transition-all ${
                          idx === activeVarIdx 
                            ? 'bg-[#142E23] text-white border-[#142E23] shadow-sm' 
                            : 'bg-stone-50 text-stone-700 border-stone-200 hover:border-stone-400'
                        }">
                  ${v.weight}
                </button>
              `).join('')}
            </div>
          </div>

          <!-- Accurate Transparent Price & Add Actions -->
          <div class="pt-3 border-t border-stone-100 flex items-center justify-between gap-2">
            <div>
              <div class="flex items-baseline gap-1.5">
                <span class="text-lg font-black text-[#142E23]">₹${currentVariant.price}</span>
                <span class="text-xs text-stone-400 line-through">₹${currentVariant.mrp}</span>
              </div>
              <span class="text-[10px] text-emerald-800 font-semibold">Save ₹${savings}</span>
            </div>

            <div class="flex items-center gap-1.5">
              <button onclick="addToCart('${prod.id}', ${activeVarIdx}, 1)" 
                      class="px-3.5 py-2 rounded-xl bg-[#142E23] hover:bg-[#0E2218] text-white text-xs font-bold flex items-center gap-1 shadow-sm transition-all hover:scale-105 active:scale-95"
                      title="Add to shopping basket">
                <i data-lucide="plus" class="w-3.5 h-3.5 text-amber-300"></i>
                <span>${t.btnAdd}</span>
              </button>
              
              <button onclick="openQuickView('${prod.id}', ${activeVarIdx})" 
                      class="p-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-bold shadow-sm transition-all"
                      title="View Full Nutritional Details & Preparation Guide">
                <i data-lucide="info" class="w-3.5 h-3.5"></i>
              </button>
            </div>
          </div>
        </div>

      </div>
    `;
  }).join('');

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function selectProductVariant(productId, variantIdx) {
  selectedVariantMap[productId] = variantIdx;
  renderProducts();
}

// --- CART FUNCTIONALITY ---
function addToCart(productId, variantIdx, quantity = 1) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const variant = product.variants[variantIdx] || product.variants[0];

  const existingIdx = cart.findIndex(
    item => item.productId === productId && item.weight === variant.weight
  );

  if (existingIdx > -1) {
    cart[existingIdx].quantity += quantity;
  } else {
    cart.push({
      productId: product.id,
      name: product.name,
      tamilName: product.tamilName,
      weight: variant.weight,
      price: variant.price,
      mrp: variant.mrp,
      image: product.image,
      quantity: quantity
    });
  }

  saveCart();
  updateCartUI();

  showToast(`Added ${product.name} (${variant.weight}) to your basket.`, 'success');

  const cartBtn = document.getElementById('cart-toggle-btn');
  if (cartBtn) {
    cartBtn.classList.remove('animate-cart-bump');
    void cartBtn.offsetWidth;
    cartBtn.classList.add('animate-cart-bump');
  }
}

function updateCartQuantity(index, delta) {
  if (cart[index]) {
    cart[index].quantity += delta;
    if (cart[index].quantity <= 0) {
      cart.splice(index, 1);
    }
    saveCart();
    updateCartUI();
  }
}

function removeCartItem(index) {
  if (cart[index]) {
    cart.splice(index, 1);
    saveCart();
    updateCartUI();
  }
}

function updateCartUI() {
  // Sanitize cart items to ensure prices and quantities are strictly valid numbers
  cart.forEach(item => {
    if (typeof item.price === 'string') {
      item.price = parseInt(item.price.replace(/[^0-9]/g, '')) || 0;
    }
    if (!item.price || item.price <= 0) {
      const canonical = PRODUCTS.find(p => p.id === item.productId);
      if (canonical) {
        const v = canonical.variants.find(cv => cv.weight === item.weight) || canonical.variants[0];
        item.price = v.price;
        item.mrp = v.mrp;
      }
    }
    item.quantity = Math.max(1, parseInt(item.quantity) || 1);
  });

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  const isFreeDelivery = subtotal >= 799;
  const deliveryFee = subtotal === 0 ? 0 : (isFreeDelivery ? 0 : 60);
  const totalAmount = subtotal === 0 ? 0 : (subtotal + deliveryFee);

  // Header badges
  const badge = document.getElementById('cart-count-badge');
  const headerTotal = document.getElementById('header-cart-total');
  const drawerCount = document.getElementById('cart-drawer-count');
  const mobileCount = document.getElementById('mobile-cart-count');

  if (badge) badge.innerText = totalItems;
  if (headerTotal) headerTotal.innerText = subtotal > 0 ? `• ₹${totalAmount}` : '• Empty';
  if (drawerCount) drawerCount.innerText = totalItems;
  if (mobileCount) mobileCount.innerText = totalItems;

  // Free shipping tracker
  const trackerText = document.getElementById('shipping-tracker-text');
  const progressBar = document.getElementById('shipping-progress-bar');
  const freeBadge = document.getElementById('shipping-free-badge');

  if (trackerText && progressBar && freeBadge) {
    if (subtotal === 0) {
      trackerText.innerText = 'Add items for FREE Shipping over ₹799';
      progressBar.style.width = '0%';
      freeBadge.classList.add('hidden');
    } else if (subtotal >= 799) {
      trackerText.innerText = 'Congratulations! Free standard shipping unlocked.';
      progressBar.style.width = '100%';
      freeBadge.classList.remove('hidden');
    } else {
      const remaining = 799 - subtotal;
      trackerText.innerText = `Add ₹${remaining} more for FREE Shipping!`;
      const percent = Math.min(100, Math.round((subtotal / 799) * 100));
      progressBar.style.width = `${percent}%`;
      freeBadge.classList.add('hidden');
    }
  }

  // Cart Drawer Items List
  const itemsContainer = document.getElementById('cart-items-container');
  const emptyMsg = document.getElementById('cart-empty-message');
  const cartFooter = document.getElementById('cart-footer');
  const subtotalEl = document.getElementById('cart-subtotal');
  const deliveryEl = document.getElementById('cart-delivery-fee');
  const totalEl = document.getElementById('cart-total-amount');

  if (subtotalEl) subtotalEl.innerText = `₹${subtotal}`;
  if (deliveryEl) deliveryEl.innerText = isFreeDelivery ? 'FREE' : `₹${deliveryFee}`;
  if (totalEl) totalEl.innerText = `₹${totalAmount}`;

  if (!itemsContainer) return;

  if (cart.length === 0) {
    itemsContainer.innerHTML = '';
    if (emptyMsg) emptyMsg.classList.remove('hidden');
    if (cartFooter) cartFooter.classList.add('hidden');
    return;
  }

  if (emptyMsg) emptyMsg.classList.add('hidden');
  if (cartFooter) cartFooter.classList.remove('hidden');

  itemsContainer.innerHTML = cart.map((item, idx) => `
    <div class="py-3 flex items-center justify-between gap-3 border-b border-stone-100 last:border-b-0">
      <div class="flex items-center gap-3">
        <img src="${item.image}" alt="${item.name}" class="w-14 h-14 rounded-xl object-cover border border-stone-200">
        <div>
          <h4 class="font-heading font-bold text-xs text-stone-900 leading-tight">${item.name}</h4>
          <p class="text-[10px] text-amber-800 font-semibold">${item.weight}</p>
          <div class="text-xs font-extrabold text-[#142E23] mt-0.5">₹${item.price} <span class="text-[10px] text-stone-400 font-normal">each</span></div>
        </div>
      </div>

      <div class="flex items-center gap-2.5">
        <div class="flex items-center border border-stone-200 rounded-lg bg-stone-50 overflow-hidden">
          <button onclick="updateCartQuantity(${idx}, -1)" class="px-2 py-1 text-stone-600 hover:bg-stone-200 text-xs font-bold transition-colors">-</button>
          <span class="px-2.5 py-1 text-xs font-bold text-stone-800">${item.quantity}</span>
          <button onclick="updateCartQuantity(${idx}, 1)" class="px-2 py-1 text-stone-600 hover:bg-stone-200 text-xs font-bold transition-colors">+</button>
        </div>

        <button onclick="removeCartItem(${idx})" class="text-stone-400 hover:text-rose-600 p-1 transition-colors" title="Remove item">
          <i data-lucide="trash-2" class="w-4 h-4"></i>
        </button>
      </div>
    </div>
  `).join('');

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function toggleCartDrawer(open) {
  const overlay = document.getElementById('cart-drawer-overlay');
  const content = document.getElementById('cart-drawer-content');
  if (!overlay || !content) return;

  if (open) {
    overlay.classList.remove('opacity-0', 'pointer-events-none');
    overlay.classList.add('opacity-100', 'pointer-events-auto');
    content.classList.remove('translate-x-full');
    content.classList.add('translate-x-0');
    document.body.classList.add('overflow-hidden');
  } else {
    overlay.classList.remove('opacity-100', 'pointer-events-auto');
    overlay.classList.add('opacity-0', 'pointer-events-none');
    content.classList.remove('translate-x-0');
    content.classList.add('translate-x-full');
    document.body.classList.remove('overflow-hidden');
  }
}

// --- CHECKOUT & VERIFIED ORDER DISPATCH ---
function openCheckoutModal() {
  if (cart.length === 0) {
    showToast('Your basket is empty. Please add grains first.', 'error');
    return;
  }

  toggleCartDrawer(false);

  const modal = document.getElementById('checkout-modal');
  const totalElem = document.getElementById('checkout-modal-total');
  const summaryList = document.getElementById('checkout-items-summary-list');
  const countBadge = document.getElementById('checkout-items-count-badge');
  const subtotalDisp = document.getElementById('checkout-subtotal-display');
  const shippingDisp = document.getElementById('checkout-shipping-display');

  // Authoritative calculations
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const isFreeDelivery = subtotal >= 799;
  const delivery = isFreeDelivery ? 0 : 60;
  const total = subtotal + delivery;

  if (totalElem) totalElem.innerText = `₹${total}`;
  if (countBadge) countBadge.innerText = `${totalItems} Item${totalItems > 1 ? 's' : ''}`;
  if (subtotalDisp) subtotalDisp.innerText = `₹${subtotal}`;
  if (shippingDisp) shippingDisp.innerText = isFreeDelivery ? 'FREE Delivery' : `₹${delivery}`;

  if (summaryList) {
    summaryList.innerHTML = cart.map(item => `
      <div class="py-2 flex items-center justify-between text-xs">
        <div>
          <span class="font-bold text-stone-900">${item.name}</span>
          <span class="text-stone-500 text-[11px] block">${item.weight} × ${item.quantity}</span>
        </div>
        <span class="font-black text-[#142E23]">₹${item.price * item.quantity}</span>
      </div>
    `).join('');
  }

  // Pre-fill customer details from profile if saved
  if (currentUser) {
    const nameInput = document.getElementById('cust-name');
    const phoneInput = document.getElementById('cust-phone');
    const cityInput = document.getElementById('cust-city');
    if (nameInput && currentUser.name) nameInput.value = currentUser.name;
    if (phoneInput && currentUser.phone) phoneInput.value = currentUser.phone;
    if (cityInput && currentUser.city) cityInput.value = currentUser.city;
  }

  if (modal) {
    modal.classList.remove('opacity-0', 'pointer-events-none');
    modal.classList.add('opacity-100', 'pointer-events-auto');
    document.body.classList.add('overflow-hidden');
  }
}

function closeCheckoutModal() {
  const modal = document.getElementById('checkout-modal');
  if (modal) {
    modal.classList.remove('opacity-100', 'pointer-events-auto');
    modal.classList.add('opacity-0', 'pointer-events-none');
    document.body.classList.remove('overflow-hidden');
  }
}

function togglePaymentTab(method) {
  document.querySelectorAll('.pay-option').forEach(el => {
    el.classList.remove('border-emerald-600', 'bg-emerald-50/50');
    el.classList.add('border-stone-200');
  });

  const selectedRadio = document.querySelector(`input[name="payment_method"][value="${method}"]`);
  if (selectedRadio) {
    selectedRadio.closest('.pay-option').classList.add('border-emerald-600', 'bg-emerald-50/50');
  }
}

function handlePlaceOrder(e) {
  e.preventDefault();

  if (cart.length === 0) {
    showToast('Your shopping basket is empty. Please select products first.', 'error');
    return;
  }

  const name = document.getElementById('cust-name').value.trim();
  const phone = document.getElementById('cust-phone').value.trim();
  const address = document.getElementById('cust-address').value.trim();
  const city = document.getElementById('cust-city').value.trim();
  const pincode = document.getElementById('cust-pincode').value.trim();
  const paymentMethod = document.querySelector('input[name="payment_method"]:checked')?.value || 'whatsapp_direct';

  if (!name || name.length < 2) {
    showToast('Please enter your full name.', 'error');
    return;
  }
  // Indian 10-digit mobile number validation (starts with 6, 7, 8, or 9)
  if (!phone || !/^[6-9]\d{9}$/.test(phone)) {
    showToast('Please enter a valid 10-digit Indian mobile number.', 'error');
    return;
  }
  if (!address || address.length < 6) {
    showToast('Please enter a complete delivery address with door/street details.', 'error');
    return;
  }
  if (!city || city.length < 2) {
    showToast('Please enter your city or town.', 'error');
    return;
  }
  if (!pincode || !/^\d{6}$/.test(pincode)) {
    showToast('Please enter a valid 6-digit Indian postal pincode.', 'error');
    return;
  }

  // Authoritative server-like price recalculation from PRODUCTS
  let authoritativeSubtotal = 0;
  const verifiedItems = cart.map(item => {
    const canonical = PRODUCTS.find(p => p.id === item.productId);
    let unitPrice = item.price;
    if (canonical) {
      const v = canonical.variants.find(varItem => varItem.weight === item.weight) || canonical.variants[0];
      unitPrice = v.price;
    }
    const lineTotal = unitPrice * item.quantity;
    authoritativeSubtotal += lineTotal;
    return {
      ...item,
      price: unitPrice,
      lineTotal: lineTotal
    };
  });

  const subtotal = authoritativeSubtotal;
  const isFreeDelivery = subtotal >= 799;
  const delivery = isFreeDelivery ? 0 : 60;
  const total = subtotal + delivery;

  // Update customer profile
  currentUser = { name, phone, city };
  try {
    localStorage.setItem('deepan_customer_profile', JSON.stringify(currentUser));
  } catch (err) {}
  updateAuthUI();

  const orderId = '#DM-' + Math.floor(100000 + Math.random() * 900000);
  const dateFormatted = new Date().toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });

  // Construct real order record
  const orderRecord = {
    id: orderId,
    date: dateFormatted,
    customer: name,
    phone: phone,
    location: `${city} - ${pincode}`,
    address: `${address}, ${city} - ${pincode}`,
    items: verifiedItems.map(i => `${i.name} (${i.weight}) x ${i.quantity}`).join(', '),
    itemDetails: [...verifiedItems],
    subtotal: `₹${subtotal}`,
    shipping: delivery === 0 ? 'FREE' : `₹${delivery}`,
    total: `₹${total}`,
    payment: paymentMethod === 'whatsapp_direct' ? 'WhatsApp Direct Dispatch' : 'Cash on Delivery (Pending)',
    status: 'Pending Mill Confirmation'
  };

  // Save to persistent customer orders list
  saveCustomerOrder(orderRecord);

  // Update success modal
  const successOrderId = document.getElementById('success-order-id');
  const successCustInfo = document.getElementById('success-customer-info');
  const successDate = document.getElementById('success-date');
  const successTotal = document.getElementById('success-total-paid');
  const successStatus = document.getElementById('success-status');
  const successList = document.getElementById('success-items-list');

  if (successOrderId) successOrderId.innerText = orderId;
  if (successCustInfo) successCustInfo.innerText = `${name}, ${address}, ${city} - ${pincode} (Ph: ${phone})`;
  if (successDate) successDate.innerText = dateFormatted;
  if (successTotal) successTotal.innerText = `₹${total}`;
  if (successStatus) successStatus.innerText = paymentMethod === 'whatsapp_direct' ? 'Dispatched to Mill WhatsApp' : 'Pending Courier Confirmation';

  if (successList) {
    successList.innerHTML = verifiedItems.map(item => `
      <div class="flex justify-between py-1 text-xs">
        <span>${item.name} (${item.weight}) × ${item.quantity}</span>
        <span class="font-bold text-[#142E23]">₹${item.lineTotal}</span>
      </div>
    `).join('');
  }

  // If WhatsApp direct chosen, also trigger the WhatsApp order dispatch
  if (paymentMethod === 'whatsapp_direct') {
    let msg = `*Deepan Mills - Verified Customer Order Request*\n`;
    msg += `--------------------------------------\n`;
    msg += `Order Reference: *${orderId}*\n`;
    msg += `Customer Name: *${name}*\n`;
    msg += `Phone: *${phone}*\n`;
    msg += `Delivery Address: ${address}, ${city} - ${pincode}\n`;
    msg += `--------------------------------------\n`;
    msg += `*Ordered Items:*\n`;
    verifiedItems.forEach((item, idx) => {
      msg += `${idx + 1}. ${item.name} (${item.weight}) × ${item.quantity} = ₹${item.lineTotal}\n`;
    });
    msg += `--------------------------------------\n`;
    msg += `Items Subtotal: ₹${subtotal}\n`;
    msg += `Shipping: ${delivery === 0 ? 'FREE Delivery' : '₹60 Delivery Fee'}\n`;
    msg += `*Grand Total Payable:* ₹${total}\n`;
    msg += `--------------------------------------\n`;
    msg += `Please confirm my order and share estimated dispatch date. Thank you!`;

    const phoneNum = '916379790035';
    const url = `https://wa.me/${phoneNum}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  }

  // Close checkout modal & clear cart
  closeCheckoutModal();
  cart = [];
  saveCart();
  updateCartUI();

  // Show confirmation modal
  const successModal = document.getElementById('success-modal');
  if (successModal) {
    successModal.classList.remove('opacity-0', 'pointer-events-none');
    successModal.classList.add('opacity-100', 'pointer-events-auto');
  }

  showToast(`Order ${orderId} recorded! Dispatch confirmation pending with mill.`, 'success');
}

function closeSuccessModal() {
  const successModal = document.getElementById('success-modal');
  if (successModal) {
    successModal.classList.remove('opacity-100', 'pointer-events-auto');
    successModal.classList.add('opacity-0', 'pointer-events-none');
    document.body.classList.remove('overflow-hidden');
  }
}

// WhatsApp instant order helper from header or cart
function checkoutViaWhatsApp() {
  if (cart.length === 0) {
    showToast('Your basket is empty. Please add grains first.', 'error');
    return;
  }
  openCheckoutModal();
}

// --- QUICK VIEW MODAL (IN-DEPTH PRODUCT SPECIFICATION) ---
function openQuickView(productId, variantIdx = 0) {
  const prod = PRODUCTS.find(p => p.id === productId);
  if (!prod) return;

  currentQuickViewState = {
    productId: productId,
    variantIdx: variantIdx,
    quantity: 1
  };

  renderQuickViewModal();

  const modal = document.getElementById('quickview-modal');
  if (modal) {
    modal.classList.remove('opacity-0', 'pointer-events-none');
    modal.classList.add('opacity-100', 'pointer-events-auto');
    document.body.classList.add('overflow-hidden');
  }
}

function selectQuickViewVariant(variantIdx) {
  currentQuickViewState.variantIdx = variantIdx;
  renderQuickViewModal();
}

function changeQuickViewQty(delta) {
  currentQuickViewState.quantity = Math.max(1, currentQuickViewState.quantity + delta);
  renderQuickViewModal();
}

function addQuickViewToCart() {
  if (!currentQuickViewState.productId) return;
  addToCart(currentQuickViewState.productId, currentQuickViewState.variantIdx, currentQuickViewState.quantity);
  closeQuickView();
  toggleCartDrawer(true);
}

function renderQuickViewModal() {
  const prod = PRODUCTS.find(p => p.id === currentQuickViewState.productId);
  const content = document.getElementById('quickview-content');
  if (!prod || !content) return;

  const currentVariant = prod.variants[currentQuickViewState.variantIdx] || prod.variants[0];
  const savings = currentVariant.mrp - currentVariant.price;

  const localizedTitle = currentLang === 'ta' && prod.tamilName ? prod.tamilName :
                         currentLang === 'hi' && prod.hindiName ? prod.hindiName : prod.name;
  const subTitle = currentLang === 'en' ? (prod.tamilName || '') : prod.name;

  content.innerHTML = `
    <!-- Modal Header -->
    <div class="flex justify-between items-start pb-4 border-b border-stone-200">
      <div>
        <div class="flex items-center gap-2 mb-1">
          <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#142E23] text-amber-200 shadow-sm">
            ${prod.badge}
          </span>
          ${subTitle ? `<span class="text-xs font-bold text-amber-800">${subTitle}</span>` : ''}
        </div>
        <h3 class="font-heading font-extrabold text-2xl sm:text-3xl text-[#142E23] leading-tight">${localizedTitle}</h3>
        <p class="text-xs text-stone-500 mt-0.5">Deepan Mills • Theni Agricultural Heritage</p>
      </div>
      <button onclick="closeQuickView()" class="p-2 rounded-xl text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors" title="Close">
        <i data-lucide="x" class="w-5 h-5"></i>
      </button>
    </div>

    <!-- Modal Body: 2 Columns on Desktop -->
    <div class="grid grid-cols-1 md:grid-cols-12 gap-6 mt-6 items-start">
      
      <!-- Left Column: Visual & Authenticity -->
      <div class="md:col-span-5 space-y-3">
        <div class="rounded-2xl overflow-hidden aspect-square bg-stone-100 border border-stone-200 relative shadow-inner">
          <img src="${prod.image}" alt="${prod.name}" class="w-full h-full object-cover">
          <div class="absolute bottom-2.5 left-2.5 right-2.5 px-3 py-1.5 rounded-xl bg-black/60 backdrop-blur-md text-white text-[10px] font-semibold flex items-center justify-between">
            <span>Direct Mill Sourced</span>
            <span class="text-amber-300 font-bold">100% Unpolished</span>
          </div>
        </div>

        <!-- Mill Trust Checklist -->
        <div class="bg-stone-50 rounded-2xl p-3.5 border border-stone-200 space-y-2 text-xs text-stone-700">
          <div class="flex items-center gap-2">
            <i data-lucide="check" class="w-3.5 h-3.5 text-emerald-600 shrink-0"></i>
            <span>Naturally grown in Theni soil</span>
          </div>
          <div class="flex items-center gap-2">
            <i data-lucide="check" class="w-3.5 h-3.5 text-emerald-600 shrink-0"></i>
            <span>Slow stone de-husking retains bran</span>
          </div>
          <div class="flex items-center gap-2">
            <i data-lucide="check" class="w-3.5 h-3.5 text-emerald-600 shrink-0"></i>
            <span>Zero paraffin, chemical wax or bleach</span>
          </div>
        </div>
      </div>

      <!-- Right Column: Details, Nutrition, Weight & Add -->
      <div class="md:col-span-7 space-y-4">
        
        <!-- About the harvest -->
        <div>
          <h4 class="text-xs font-extrabold uppercase tracking-wider text-stone-500 mb-1">Milling Details</h4>
          <p class="text-xs sm:text-sm text-stone-700 leading-relaxed">${prod.shortDesc}</p>
        </div>

        <!-- Health Benefits -->
        <div class="p-3 bg-emerald-50/70 rounded-2xl border border-emerald-200 space-y-1">
          <div class="flex items-center gap-1.5 text-[11px] font-extrabold text-emerald-950 uppercase tracking-wider">
            <i data-lucide="shield-check" class="w-3.5 h-3.5 text-emerald-700"></i>
            <span>Nutritional Profile & Benefits</span>
          </div>
          <p class="text-xs text-emerald-900 leading-normal">${prod.healthBenefit}</p>
        </div>

        <!-- Cooking Ratio -->
        <div class="p-3 bg-amber-50/70 rounded-2xl border border-amber-200 space-y-1">
          <div class="flex items-center gap-1.5 text-[11px] font-extrabold text-amber-950 uppercase tracking-wider">
            <i data-lucide="book-open" class="w-3.5 h-3.5 text-amber-700"></i>
            <span>Preparation & Water Ratio</span>
          </div>
          <p class="text-xs text-amber-900 leading-normal">${prod.cookingRatio}</p>
        </div>

        <!-- Nutrition Facts (Per 100g) -->
        <div>
          <span class="block text-[10px] font-extrabold uppercase tracking-wider text-stone-400 mb-1.5">Nutritional Composition (Per 100g)</span>
          <div class="grid grid-cols-4 gap-2 text-center">
            <div class="bg-stone-50 p-2 rounded-xl border border-stone-200">
              <span class="text-[10px] text-stone-400 block font-semibold">Calories</span>
              <span class="text-xs font-black text-stone-800">${prod.nutrition.calories}</span>
            </div>
            <div class="bg-stone-50 p-2 rounded-xl border border-stone-200">
              <span class="text-[10px] text-stone-400 block font-semibold">Fiber</span>
              <span class="text-xs font-black text-emerald-800">${prod.nutrition.fiber}</span>
            </div>
            <div class="bg-stone-50 p-2 rounded-xl border border-stone-200">
              <span class="text-[10px] text-stone-400 block font-semibold">Protein</span>
              <span class="text-xs font-black text-stone-800">${prod.nutrition.protein}</span>
            </div>
            <div class="bg-stone-50 p-2 rounded-xl border border-stone-200">
              <span class="text-[10px] text-stone-400 block font-semibold">Iron/Minerals</span>
              <span class="text-xs font-black text-amber-800">${prod.nutrition.iron}</span>
            </div>
          </div>
        </div>

        <!-- PACK WEIGHT SELECTOR -->
        <div class="pt-2 border-t border-stone-200">
          <div class="flex items-center justify-between mb-2">
            <label class="text-xs font-black uppercase tracking-wider text-stone-800 flex items-center gap-1.5">
              <i data-lucide="scale" class="w-3.5 h-3.5 text-amber-700"></i>
              <span>Select Pack Size:</span>
            </label>
            <span class="text-[10px] text-stone-400 font-semibold">Live Mill Pricing</span>
          </div>

          <div class="grid grid-cols-${prod.variants.length} gap-2">
            ${prod.variants.map((v, idx) => `
              <button type="button" 
                      onclick="selectQuickViewVariant(${idx})" 
                      class="py-2 px-3 rounded-xl text-xs font-black text-center transition-all ${
                        idx === currentQuickViewState.variantIdx 
                          ? 'bg-[#142E23] text-white shadow-md ring-2 ring-amber-400' 
                          : 'bg-stone-100 hover:bg-stone-200 text-stone-700 border border-stone-200'
                      }">
                ${v.weight}
              </button>
            `).join('')}
          </div>
        </div>

        <!-- REVEALED PRICE CARD -->
        <div class="p-3.5 bg-gradient-to-r from-emerald-50 to-amber-50/50 rounded-2xl border border-emerald-300 shadow-sm space-y-1">
          <div class="flex items-center justify-between">
            <span class="text-[11px] font-bold text-stone-500 uppercase tracking-wider">
              Selected: <strong class="text-stone-900">${currentVariant.weight}</strong>
            </span>
            <span class="px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-900 text-[10px] font-black uppercase tracking-wider shadow-sm">
              Save ₹${savings}
            </span>
          </div>

          <div class="flex items-baseline gap-2">
            <span class="text-2xl sm:text-3xl font-black text-[#142E23]">₹${currentVariant.price}</span>
            <span class="text-sm text-stone-400 line-through">₹${currentVariant.mrp}</span>
            <span class="text-xs text-stone-500 font-medium">/ ${currentVariant.weight}</span>
          </div>

          <div class="flex items-center gap-1.5 text-[11px] text-emerald-800 font-semibold">
            <i data-lucide="check-circle-2" class="w-3.5 h-3.5 text-emerald-700"></i>
            <span>Freshly Milled in Theni • Ready to Dispatch</span>
          </div>
        </div>

        <!-- QUANTITY & TOTAL CALCULATION -->
        <div class="flex items-center justify-between pt-1">
          <div class="flex items-center gap-2">
            <span class="text-xs font-bold text-stone-700">Quantity:</span>
            <div class="flex items-center border border-stone-300 rounded-xl bg-white overflow-hidden shadow-sm">
              <button onclick="changeQuickViewQty(-1)" class="px-2.5 py-1 text-stone-600 hover:bg-stone-100 font-bold text-sm transition-colors">-</button>
              <span class="px-3 py-1 text-xs font-black text-stone-900">${currentQuickViewState.quantity}</span>
              <button onclick="changeQuickViewQty(1)" class="px-2.5 py-1 text-stone-600 hover:bg-stone-100 font-bold text-sm transition-colors">+</button>
            </div>
          </div>

          <div class="text-right">
            <span class="text-[10px] text-stone-400 block uppercase font-bold">Total Amount</span>
            <span class="text-xl font-black text-[#142E23]">₹${currentVariant.price * currentQuickViewState.quantity}</span>
          </div>
        </div>

        <!-- ACTION BUTTONS -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
          <button onclick="addQuickViewToCart()" 
                  class="py-3 px-4 rounded-xl bg-[#142E23] hover:bg-[#0E2218] text-white font-bold text-xs shadow-md hover:shadow-lg flex items-center justify-center gap-2 transition-all hover:scale-[1.01] active:scale-95">
            <i data-lucide="plus" class="w-4 h-4 text-amber-300"></i>
            <span>Add to Basket (₹${currentVariant.price * currentQuickViewState.quantity})</span>
          </button>

          <a href="https://wa.me/916379790035?text=Hello%20Deepan%20Mills,%20inquiring%20about%20${encodeURIComponent(prod.name)}%20(${currentVariant.weight})%20x%20${currentQuickViewState.quantity}."
             target="_blank"
             class="py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md flex items-center justify-center gap-2 transition-all hover:scale-[1.01] active:scale-95">
            <i data-lucide="message-circle" class="w-4 h-4"></i>
            <span>Inquire on WhatsApp</span>
          </a>
        </div>

      </div>

    </div>
  `;

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function closeQuickView() {
  const modal = document.getElementById('quickview-modal');
  if (modal) {
    modal.classList.remove('opacity-100', 'pointer-events-auto');
    modal.classList.add('opacity-0', 'pointer-events-none');
    document.body.classList.remove('overflow-hidden');
  }
}

// --- RENDER TESTIMONIALS ---
function renderTestimonials() {
  const container = document.getElementById('testimonials-container');
  if (!container || !TESTIMONIALS) return;

  container.innerHTML = TESTIMONIALS.map(t => `
    <div class="p-6 rounded-3xl bg-[#FBF9F5] border border-stone-200 flex flex-col justify-between space-y-4 shadow-sm">
      <div class="space-y-3">
        <div class="flex items-center gap-1 text-amber-600">
          <i data-lucide="quote" class="w-5 h-5 text-amber-700"></i>
        </div>
        <h4 class="font-heading font-bold text-base text-stone-900 leading-snug">${t.title}</h4>
        <p class="text-xs text-stone-600 leading-relaxed italic">"${t.comment}"</p>
      </div>

      <div class="pt-4 border-t border-stone-200/80 flex items-center gap-3">
        <img src="${t.avatar}" alt="${t.name}" class="w-10 h-10 rounded-full object-cover border border-stone-300">
        <div>
          <h5 class="font-heading font-bold text-xs text-stone-900">${t.name}</h5>
          <span class="text-[11px] text-stone-500">${t.location}</span>
        </div>
      </div>
    </div>
  `).join('');

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// --- WHOLESALE & CONTACT FORM ---
function handleContactSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('contact-name').value.trim();
  const phone = document.getElementById('contact-phone').value.trim();
  const msg = document.getElementById('contact-message').value.trim();

  let waMsg = `*Deepan Mills - Wholesale / Direct Requirement Inquiry*\n`;
  waMsg += `Name: *${name}*\n`;
  waMsg += `Contact Number: *${phone}*\n`;
  waMsg += `Requirement Details:\n${msg}\n`;

  const url = `https://wa.me/916379790035?text=${encodeURIComponent(waMsg)}`;
  window.open(url, '_blank');

  showToast('Inquiry pre-formatted! WhatsApp opened to send directly to Deepan Mills.', 'success');
  e.target.reset();
}

// --- EVENT LISTENERS (SEARCH, CATEGORY, DIET) ---
function setupEventListeners() {
  // Category Pill Buttons
  document.querySelectorAll('.cat-pill').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.cat-pill').forEach(b => {
        b.classList.remove('active', 'bg-[#142E23]', 'text-white');
        b.classList.add('bg-white', 'text-stone-700');
      });
      btn.classList.add('active', 'bg-[#142E23]', 'text-white');
      btn.classList.remove('bg-white', 'text-stone-700');

      currentCategory = btn.getAttribute('data-category');
      renderProducts();
    });
  });

  // Dietary Health Tags
  document.querySelectorAll('.diet-tag').forEach(btn => {
    btn.addEventListener('click', () => {
      const tag = btn.getAttribute('data-tag');
      const resetBtn = document.getElementById('reset-filters-btn');

      if (currentDietTag === tag) {
        currentDietTag = null;
        btn.classList.remove('bg-[#142E23]', 'text-white');
        btn.classList.add('bg-stone-100', 'text-stone-700');
        if (resetBtn) resetBtn.classList.add('hidden');
      } else {
        document.querySelectorAll('.diet-tag').forEach(b => {
          b.classList.remove('bg-[#142E23]', 'text-white');
          b.classList.add('bg-stone-100', 'text-stone-700');
        });
        currentDietTag = tag;
        btn.classList.add('bg-[#142E23]', 'text-white');
        btn.classList.remove('bg-stone-100', 'text-stone-700');
        if (resetBtn) resetBtn.classList.remove('hidden');
      }
      renderProducts();
    });
  });

  // Reset Filters Button
  const resetBtn = document.getElementById('reset-filters-btn');
  if (resetBtn) {
    resetBtn.addEventListener('click', resetAllFilters);
  }

  // Search Input
  const searchInput = document.getElementById('product-search-input');
  const clearSearchBtn = document.getElementById('clear-search-btn');

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      if (clearSearchBtn) {
        if (searchQuery.length > 0) {
          clearSearchBtn.classList.remove('hidden');
        } else {
          clearSearchBtn.classList.add('hidden');
        }
      }
      renderProducts();
    });
  }

  if (clearSearchBtn && searchInput) {
    clearSearchBtn.addEventListener('click', () => {
      searchInput.value = '';
      searchQuery = '';
      clearSearchBtn.classList.add('hidden');
      renderProducts();
    });
  }

  // Mobile menu toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileNavPanel = document.getElementById('mobile-nav-panel');
  if (mobileMenuBtn && mobileNavPanel) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileNavPanel.classList.toggle('hidden');
    });
  }

  // Language Dropdown toggle
  const langMenuBtn = document.getElementById('lang-menu-btn');
  const langDropdown = document.getElementById('lang-dropdown');
  if (langMenuBtn && langDropdown) {
    langMenuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      langDropdown.classList.toggle('hidden');
    });

    document.addEventListener('click', (e) => {
      if (!langDropdown.contains(e.target) && e.target !== langMenuBtn) {
        langDropdown.classList.add('hidden');
      }
    });
  }
}

function resetAllFilters() {
  currentCategory = 'all';
  currentDietTag = null;
  searchQuery = '';

  const searchInput = document.getElementById('product-search-input');
  const clearSearchBtn = document.getElementById('clear-search-btn');
  if (searchInput) searchInput.value = '';
  if (clearSearchBtn) clearSearchBtn.classList.add('hidden');

  document.querySelectorAll('.cat-pill').forEach(b => {
    b.classList.remove('active', 'bg-[#142E23]', 'text-white');
    b.classList.add('bg-white', 'text-stone-700');
  });
  const allCatBtn = document.querySelector('.cat-pill[data-category="all"]');
  if (allCatBtn) {
    allCatBtn.classList.add('active', 'bg-[#142E23]', 'text-white');
    allCatBtn.classList.remove('bg-white', 'text-stone-700');
  }

  document.querySelectorAll('.diet-tag').forEach(b => {
    b.classList.remove('bg-[#142E23]', 'text-white');
    b.classList.add('bg-stone-100', 'text-stone-700');
  });

  const resetBtn = document.getElementById('reset-filters-btn');
  if (resetBtn) resetBtn.classList.add('hidden');

  renderProducts();
}

function filterCategory(cat) {
  const btn = document.querySelector(`.cat-pill[data-category="${cat}"]`);
  if (btn) btn.click();
}

// Toast helper
function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `p-3.5 px-5 rounded-2xl shadow-xl text-xs font-bold flex items-center gap-2.5 transition-all duration-300 pointer-events-auto ${
    type === 'success' ? 'bg-[#142E23] text-white border border-emerald-500' :
    type === 'error' ? 'bg-rose-900 text-white border border-rose-600' :
    'bg-stone-900 text-white border border-stone-700'
  }`;

  const iconName = type === 'success' ? 'check-circle' : (type === 'error' ? 'alert-circle' : 'info');
  toast.innerHTML = `
    <i data-lucide="${iconName}" class="w-4 h-4 text-amber-300 shrink-0"></i>
    <span>${message}</span>
  `;

  container.appendChild(toast);
  if (window.lucide) window.lucide.createIcons();

  setTimeout(() => {
    toast.classList.add('opacity-0', 'translate-y-2');
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}
