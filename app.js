// Deepan Mills - Interactive Application Logic with Multilingual Support (EN, TA, HI)
// & Role-Based Access Control (Customer & Manager Gatekeeper)

// --- MULTILINGUAL DICTIONARY (English, Tamil, Hindi) ---
const TRANSLATIONS = {
  en: {
    langName: 'English',
    announcement: '🌾 Direct from Theni Soil • 100% Unpolished & Chemical-Free',
    announcementSub: 'Tamil Nadu MSME & Grameena Award Winner',
    brandTagline: 'Tradition • Purity • Health',
    navHome: 'Deepan Mills',
    navShop: 'Shop Grains',
    navGuide: 'Cooking & Health',
    navAwards: 'MSME Award',
    navReviews: 'Reviews',
    navContact: 'Contact',
    btnWaHeader: 'WhatsApp',
    btnCartHeader: 'Cart',
    heroBadge1: 'MSME Best Entrepreneur Award Winner',
    heroBadge2: 'Grameena Award',
    heroHeadline: 'Deepan Mills <br><span class="font-serif italic text-amber-700">Theni District</span> Agricultural Heritage.',
    heroSubtitle: 'Situated in the agricultural heartlands of Theni, Tamil Nadu, Deepan Mills specializes in reviving traditional native crops. We provide authentic unpolished millets, heritage Karuppu Kavuni and Mappillai Samba rice, slow stone-ground flours, and wood-pressed Vaagai oils.',
    catalogEyebrow: 'Direct From Our Mill',
    catalogTitle: 'Choose Your Heritage Grains & Oils',
    catalogSub: 'Browse authentic native crops from Theni. Click any product to explore nutritional benefits, traditional milling, and select pack size to view prices.',
    catAll: 'All Products (12)',
    catRice: '🍚 Heritage Rice (பாரம்பரிய அரிசி)',
    catMillet: '🌾 Millets (சிறுதானியங்கள்)',
    catOil: '🫒 Cold-Pressed Oils (மரச்செக்கு)',
    catFlour: '🥣 Stone Flours (பாரம்பரிய மாவு)',
    catCombos: '🎁 Value Combos',
    labelFilterBy: 'Filter by Health Need:',
    btnAdd: 'Add',
    btnViewDetails: 'View Details & Price',
    drawerTitle: 'Your Basket',
    lblSubtotal: 'Items Subtotal:',
    lblDelivery: 'Estimated Delivery:',
    lblTotal: 'Total Payable:',
    btnCheckoutSubmit: 'Proceed to Checkout',
    btnCheckoutWa: 'Order via WhatsApp (Instant Bill)'
  },
  ta: {
    langName: 'தமிழ்',
    announcement: '🌾 தேனி மண்ணிலிருந்து நேரடியாக • 100% தீட்டப்படாத நவதானியங்கள்',
    announcementSub: 'தமிழ்நாடு MSME மற்றும் கிராமீனா விருது பெற்ற நிறுவனம்',
    brandTagline: 'பாரம்பரியம் • தூய்மை • நல்வாழ்வு',
    navHome: 'ஆலை அறிமுகம்',
    navShop: 'தானியங்கள்',
    navGuide: 'சமையல் வழிகாட்டி',
    navAwards: 'MSME விருது',
    navReviews: 'கருத்துகள்',
    navContact: 'தொடர்பு',
    btnWaHeader: 'வாட்ஸ்அப்',
    btnCartHeader: 'கூடை',
    heroBadge1: 'MSME சிறந்த தொழில்முனைவோர் விருது',
    heroBadge2: 'கிராமீனா விருது பெற்ற நிறுவனம்',
    heroHeadline: 'தீபன் மில்ஸ் ஆலை அறிமுகம் <br><span class="font-serif italic text-amber-700">தேனி மாவட்டத்தின்</span> உன்னத விவசாய பாரம்பரியம்.',
    heroSubtitle: 'தேனியின் வளமான மண்ணில் விளைந்த பாரம்பரிய நவதானியங்கள், கருப்பு கவுனி, மாப்பிள்ளை சம்பா அரிசி, கல் செக்கு மற்றும் மரச்செக்கு எண்ணெய்கள். ரசாயனங்கள் அற்ற ஆரோக்கியமான உணவை உங்கள் இல்லத்திற்கு சேர்க்கிறோம்.',
    catalogEyebrow: 'எங்கள் ஆலை தயாரிப்புகள்',
    catalogTitle: 'பாரம்பரிய தானியங்கள் & மரச்செக்கு எண்ணெய்கள்',
    catalogSub: 'தேனியின் பாரம்பரிய நவதானியங்களை ஆராயுங்கள். தயாரிப்பைத் தேர்ந்தெடுத்து நன்மைகள், சமையல் முறை மற்றும் விலையை அறியவும்.',
    catAll: 'அனைத்து பொருட்கள் (12)',
    catRice: '🍚 பாரம்பரிய அரிசி',
    catMillet: '🌾 நாட்டுச் சிறுதானியங்கள்',
    catOil: '🫒 மரச்செக்கு எண்ணெய்கள்',
    catFlour: '🥣 சத்து மாவு வகைகள்',
    catCombos: '🎁 சிறப்பு காம்போ',
    labelFilterBy: 'மருத்துவ தேவைக்கேற்ப:',
    btnAdd: 'சேர்',
    btnViewDetails: 'விவரம் & விலை பார்க்க',
    drawerTitle: 'உங்கள் கூடை',
    lblSubtotal: 'பொருட்களின் மொத்த விலை:',
    lblDelivery: 'டெலிவரி கட்டணம்:',
    lblTotal: 'செலுத்த வேண்டிய தொகை:',
    btnCheckoutSubmit: 'ஆர்டர் செய்ய தொடர்க',
    btnCheckoutWa: 'வாட்ஸ்அப் மூலம் உடனடி ஆர்டர்'
  },
  hi: {
    langName: 'हिन्दी',
    announcement: '🌾 थेनी की मिट्टी से सीधे • 100% बिना पॉलिश व प्राकृतिक अनाज',
    announcementSub: 'तमिलनाडु MSME और ग्रामीण पुरस्कार विजेता मिल',
    brandTagline: 'परंपरा • शुद्धता • स्वास्थ्य',
    navHome: 'मिल के बारे में',
    navShop: 'अनाज खरीदें',
    navGuide: 'स्वास्थ्य और गाइड',
    navAwards: 'MSME पुरस्कार',
    navReviews: 'समीक्षाएं',
    navContact: 'संपर्क',
    btnWaHeader: 'व्हाट्सएप',
    btnCartHeader: 'कार्ट',
    heroBadge1: 'MSME सर्वश्रेष्ठ उद्यमी पुरस्कार विजेता',
    heroBadge2: 'ग्रामीण पुरस्कार प्राप्त',
    heroHeadline: 'दीपन मिल्स का परिचय <br><span class="font-serif italic text-amber-700">थेनी जिले की</span> समृद्ध कृषि धरोहर।',
    heroSubtitle: 'थेनी, तमिलनाडु की उपजाऊ भूमि से सीधे प्राप्त पारंपरिक बाजरा, काला व लाल चावल, पत्थर की चक्की का आटा और लकड़ी कोल्हू का शुद्ध तेल। बिना किसी पॉलिश या रसायन के।',
    catalogEyebrow: 'सीधे हमारी मिल से',
    catalogTitle: 'पारंपरिक अनाज और शुद्ध तेल चुनें',
    catalogSub: 'थेनी के पारंपरिक अनाज देखें। पोषण लाभ, पीसने की विधि और पैकेट मूल्य देखने के लिए उत्पाद पर क्लिक करें।',
    catAll: 'सभी उत्पाद (12)',
    catRice: '🍚 पारंपरिक चावल',
    catMillet: '🌾 बाजरा / मिलेट्स',
    catOil: '🫒 कोल्ड प्रेस्ड तेल',
    catFlour: '🥣 पारंपरिक आटा व सत्तू',
    catCombos: '🎁 विशेष कॉम्बो',
    labelFilterBy: 'स्वास्थ्य लाभ के अनुसार:',
    btnAdd: 'जोड़ें',
    btnViewDetails: 'विवरण व मूल्य देखें',
    drawerTitle: 'आपकी टोकरी',
    lblSubtotal: 'सामग्रियों का मूल्य:',
    lblDelivery: 'डिलीवरी शुल्क:',
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

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  // Load saved language
  try {
    const savedLang = localStorage.getItem('deepan_lang');
    if (savedLang && TRANSLATIONS[savedLang]) {
      currentLang = savedLang;
    }
  } catch (e) {
    currentLang = 'en';
  }

  // Load auth state
  try {
    const savedUser = localStorage.getItem('deepan_auth_user');
    if (savedUser) {
      currentUser = JSON.parse(savedUser);
    }
  } catch (e) {
    currentUser = null;
  }

  // Load saved cart from localStorage
  try {
    const savedCart = localStorage.getItem('deepan_mills_cart');
    if (savedCart) {
      cart = JSON.parse(savedCart);
    }
  } catch (e) {
    cart = [];
  }

  // Set default variants (0th variant)
  PRODUCTS.forEach(p => {
    selectedVariantMap[p.id] = 0;
  });

  // Apply Auth State, Language & Render
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

// --- AUTHENTICATION & ACCESS CONTROL LOGIC ---
function switchLoginRole(role) {
  const custTab = document.getElementById('role-tab-customer');
  const mgrTab = document.getElementById('role-tab-manager');
  const custForm = document.getElementById('customer-login-form');
  const mgrForm = document.getElementById('manager-login-form');

  if (role === 'customer') {
    custTab.className = 'py-2.5 rounded-xl text-xs font-extrabold transition-all flex items-center justify-center gap-1.5 bg-white text-[#19382B] shadow-sm';
    mgrTab.className = 'py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 text-stone-600 hover:text-stone-900';
    custForm.classList.remove('hidden');
    mgrForm.classList.add('hidden');
  } else {
    mgrTab.className = 'py-2.5 rounded-xl text-xs font-extrabold transition-all flex items-center justify-center gap-1.5 bg-white text-[#19382B] shadow-sm';
    custTab.className = 'py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 text-stone-600 hover:text-stone-900';
    mgrForm.classList.remove('hidden');
    custForm.classList.add('hidden');
  }
}

function handleCustomerLogin(e) {
  e.preventDefault();
  const name = document.getElementById('cust-login-name').value || 'Anitha Kannan';
  const phone = document.getElementById('cust-login-phone').value || '9840123456';
  setAuthSession({ role: 'customer', name, phone });
}

function loginDemoCustomer() {
  setAuthSession({ role: 'customer', name: 'Anitha Kannan', phone: '9840123456' });
}

function handleManagerLogin(e) {
  e.preventDefault();
  setAuthSession({ role: 'manager', name: 'Mill Manager', pin: '2026' }, true);
}

function loginDemoManager() {
  setAuthSession({ role: 'manager', name: 'Mill Manager', pin: '2026' }, true);
}

function setAuthSession(user, redirectManager = false) {
  currentUser = user;
  try {
    localStorage.setItem('deepan_auth_user', JSON.stringify(currentUser));
  } catch (e) {}

  showToast(`Welcome ${user.name}! Access granted.`, 'success');

  if (redirectManager) {
    setTimeout(() => {
      window.location.href = 'dashboard.html';
    }, 700);
  } else {
    updateAuthUI();
    // Smooth scroll down to products
    setTimeout(() => {
      const prodSec = document.getElementById('protected-store-section');
      if (prodSec) {
        prodSec.scrollIntoView({ behavior: 'smooth' });
      }
    }, 200);
  }
}

function handleLogout() {
  currentUser = null;
  try {
    localStorage.removeItem('deepan_auth_user');
  } catch (e) {}

  showToast('Logged out successfully. Information locked.', 'info');
  updateAuthUI();

  // Scroll back to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateAuthUI() {
  const guestActions = document.getElementById('header-guest-actions');
  const authActions = document.getElementById('header-auth-actions');
  const protectedStore = document.getElementById('protected-store-section');
  const mobileBar = document.getElementById('mobile-bottom-bar');
  const mobileAuth = document.getElementById('mobile-auth-links');
  const userNameEl = document.getElementById('header-user-name');
  const statusBadge = document.getElementById('auth-status-badge');
  const btnCust = document.getElementById('header-btn-customer');
  const btnMgr = document.getElementById('header-btn-manager');

  if (!currentUser) {
    // STATE: GUEST (Not Logged In)
    if (guestActions) guestActions.classList.remove('hidden');
    if (authActions) authActions.classList.add('hidden');
    if (protectedStore) protectedStore.classList.add('hidden');
    if (mobileBar) mobileBar.classList.add('hidden');
    
    if (mobileAuth) {
      mobileAuth.innerHTML = `
        <a href="#portal-login" class="w-full py-2.5 rounded-xl bg-[#19382B] text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow">
          <i data-lucide="lock" class="w-4 h-4 text-amber-300"></i>
          <span>Login to View Store</span>
        </a>
      `;
    }
  } else {
    // STATE: LOGGED IN
    if (guestActions) guestActions.classList.add('hidden');
    if (authActions) authActions.classList.remove('hidden');
    if (protectedStore) protectedStore.classList.remove('hidden');
    if (mobileBar) mobileBar.classList.remove('hidden');

    if (userNameEl) userNameEl.innerText = currentUser.name;
    if (statusBadge) statusBadge.innerText = `${currentUser.role.toUpperCase()}: ${currentUser.name}`;

    if (currentUser.role === 'customer') {
      if (btnCust) btnCust.classList.remove('hidden');
      if (btnMgr) btnMgr.classList.add('hidden');
    } else {
      if (btnCust) btnCust.classList.add('hidden');
      if (btnMgr) btnMgr.classList.remove('hidden');
    }

    if (mobileAuth) {
      mobileAuth.innerHTML = `
        <div class="grid grid-cols-2 gap-2">
          <a href="${currentUser.role === 'customer' ? 'customer-dashboard.html' : 'dashboard.html'}" class="p-2 rounded-xl bg-amber-50 text-amber-900 border border-amber-200 text-center font-bold text-xs">
            ${currentUser.role === 'customer' ? 'My Account' : 'Manager Portal'}
          </a>
          <button onclick="handleLogout()" class="p-2 rounded-xl bg-rose-50 text-rose-700 border border-rose-200 text-center font-bold text-xs">
            Sign Out
          </button>
        </div>
      `;
    }
  }

  if (window.lucide) window.lucide.createIcons();
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

// --- RENDER PRODUCTS ---
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
      prod.tags.some(t => t.toLowerCase().includes(q));

    const tagMatch = !currentDietTag || 
      prod.tags.some(tag => tag.toLowerCase().includes(currentDietTag.toLowerCase()));

    return catMatch && searchMatch && tagMatch;
  });

  if (filtered.length === 0) {
    container.innerHTML = '';
    emptyView.classList.remove('hidden');
    return;
  }

  emptyView.classList.add('hidden');

  container.innerHTML = filtered.map(prod => {
    const activeVarIdx = selectedVariantMap[prod.id] || 0;
    const localizedTitle = currentLang === 'ta' && prod.tamilName ? prod.tamilName :
                           currentLang === 'hi' && prod.hindiName ? prod.hindiName : prod.name;
    const subTitle = currentLang === 'en' ? (prod.tamilName || '') : prod.name;
    const packList = prod.variants.map(v => v.weight).join(' • ');

    return `
      <div class="product-card bg-white rounded-3xl p-4 flex flex-col justify-between group hover:shadow-xl transition-all duration-300 border border-stone-200/80 hover:border-amber-400/80 cursor-pointer" 
           data-product-id="${prod.id}"
           onclick="openQuickView('${prod.id}')">
        <div>
          <!-- Product Visual with Quality Badge (No open prices) -->
          <div class="relative rounded-2xl overflow-hidden aspect-[4/3] bg-stone-100 mb-3.5">
            <img src="${prod.image}" 
                 alt="${prod.name}" 
                 loading="lazy"
                 class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
            
            <div class="absolute top-2.5 left-2.5">
              <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                prod.badge === 'Bestseller' ? 'bg-amber-500 text-stone-950' :
                prod.badge === 'Low GI' ? 'bg-emerald-600 text-white' :
                'bg-[#19382B] text-amber-200'
              } shadow-sm">
                ${prod.badge}
              </span>
            </div>

            <div class="absolute bottom-2.5 right-2.5 px-2.5 py-1 rounded-xl bg-white/95 backdrop-blur-sm text-stone-800 text-[10px] font-bold flex items-center gap-1 shadow">
              <i data-lucide="eye" class="w-3 h-3 text-amber-700"></i>
              <span>View Details</span>
            </div>
          </div>

          <!-- Product Titles & Heritage Info -->
          <div class="space-y-1 mb-2">
            ${subTitle ? `
              <div class="flex items-center gap-1 text-[11px] font-semibold text-amber-700">
                <i data-lucide="sparkles" class="w-3 h-3"></i>
                <span>${subTitle}</span>
              </div>
            ` : ''}
            <h3 class="font-heading font-bold text-base text-stone-900 leading-snug group-hover:text-emerald-900 transition-colors">
              ${localizedTitle}
            </h3>
            <p class="text-xs text-stone-500 line-clamp-2 leading-relaxed">
              ${prod.shortDesc}
            </p>
          </div>

          <!-- Dietary & Health Tags -->
          <div class="flex flex-wrap gap-1.5 mb-3">
            ${prod.tags.slice(0, 2).map(tag => `
              <span class="text-[10px] font-medium px-2 py-0.5 rounded-md bg-stone-100 text-stone-600 border border-stone-200">
                ${tag}
              </span>
            `).join('')}
          </div>
        </div>

        <!-- Available Packs & View Action (Price shown after product is selected inside) -->
        <div class="pt-2 border-t border-stone-100 space-y-2.5" onclick="event.stopPropagation()">
          <div class="flex items-center justify-between text-xs">
            <span class="text-[10px] font-extrabold uppercase tracking-wider text-stone-400">Available Packs:</span>
            <span class="text-[11px] font-bold text-[#19382B] bg-emerald-50 px-2 py-0.5 rounded-lg border border-emerald-200">
              ${packList}
            </span>
          </div>

          <button onclick="openQuickView('${prod.id}')" 
                  class="w-full py-2.5 px-3.5 rounded-xl bg-[#19382B] hover:bg-[#132C22] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-all hover:scale-[1.02] active:scale-95 group/btn"
                  title="View details, cooking guide & select pack price">
            <i data-lucide="eye" class="w-3.5 h-3.5 text-amber-300"></i>
            <span>${t.btnViewDetails || 'View Details & Price'}</span>
            <i data-lucide="arrow-right" class="w-3.5 h-3.5 text-stone-300 group-hover/btn:translate-x-1 transition-transform"></i>
          </button>
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

  showToast(`Added ${product.name} (${variant.weight}) to your basket!`, 'success');

  const cartBtn = document.getElementById('cart-toggle-btn');
  if (cartBtn) {
    cartBtn.classList.remove('animate-cart-bump');
    void cartBtn.offsetWidth;
    cartBtn.classList.add('animate-cart-bump');
  }
}

function quickAdd(productId) {
  addToCart(productId, 0, 1);
  toggleCartDrawer(true);
}

function buyNow(productId, variantIdx) {
  addToCart(productId, variantIdx, 1);
  openCheckoutModal();
}

function updateCartUI() {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  const isFreeDelivery = subtotal >= 799 || subtotal === 0;
  const deliveryFee = subtotal === 0 ? 0 : (subtotal >= 799 ? 0 : 60);
  const totalAmount = subtotal + deliveryFee;

  const badge = document.getElementById('cart-count-badge');
  const headerTotal = document.getElementById('header-cart-total');
  const mobileCount = document.getElementById('mobile-cart-count');
  const drawerCount = document.getElementById('cart-drawer-count');

  if (badge) badge.innerText = totalItems;
  if (headerTotal) headerTotal.innerText = `• ₹${subtotal}`;
  if (mobileCount) mobileCount.innerText = totalItems;
  if (drawerCount) drawerCount.innerText = totalItems;

  const subtotalElem = document.getElementById('cart-subtotal');
  const deliveryElem = document.getElementById('cart-delivery-fee');
  const totalElem = document.getElementById('cart-total-amount');

  if (subtotalElem) subtotalElem.innerText = `₹${subtotal}`;
  if (deliveryElem) deliveryElem.innerText = isFreeDelivery ? 'FREE (Special Offer)' : `₹${deliveryFee}`;
  if (totalElem) totalElem.innerText = `₹${totalAmount}`;

  const progressElem = document.getElementById('shipping-progress-bar');
  const trackerText = document.getElementById('shipping-tracker-text');
  const freeBadge = document.getElementById('shipping-free-badge');

  if (subtotal >= 799) {
    if (progressElem) progressElem.style.width = '100%';
    if (trackerText) trackerText.innerText = 'You unlocked FREE Shipping across Tamil Nadu!';
    if (freeBadge) freeBadge.classList.remove('hidden');
  } else {
    const diff = 799 - subtotal;
    const pct = Math.min(100, Math.round((subtotal / 799) * 100));
    if (progressElem) progressElem.style.width = `${pct}%`;
    if (trackerText) trackerText.innerText = `Add ₹${diff} more for FREE Express Shipping!`;
    if (freeBadge) freeBadge.classList.add('hidden');
  }

  const itemsContainer = document.getElementById('cart-items-container');
  const emptyMsg = document.getElementById('cart-empty-message');
  const cartFooter = document.getElementById('cart-footer');

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
    <div class="py-3 flex items-center justify-between gap-3">
      <div class="flex items-center gap-3">
        <img src="${item.image}" alt="${item.name}" class="w-14 h-14 rounded-xl object-cover border border-stone-200">
        <div>
          <h4 class="font-heading font-bold text-xs text-stone-900 leading-tight">${item.name}</h4>
          <p class="text-[10px] text-amber-800 font-semibold">${item.weight}</p>
          <div class="text-xs font-extrabold text-[#19382B] mt-0.5">₹${item.price} <span class="text-[10px] text-stone-400 font-normal">each</span></div>
        </div>
      </div>

      <div class="flex items-center gap-3">
        <div class="flex items-center border border-stone-200 rounded-lg bg-stone-50 overflow-hidden">
          <button onclick="updateCartQuantity(${idx}, -1)" class="px-2 py-1 text-stone-600 hover:bg-stone-200 text-xs font-bold">-</button>
          <span class="px-2.5 py-1 text-xs font-bold text-stone-800">${item.quantity}</span>
          <button onclick="updateCartQuantity(${idx}, 1)" class="px-2 py-1 text-stone-600 hover:bg-stone-200 text-xs font-bold">+</button>
        </div>

        <button onclick="removeCartItem(${idx})" class="text-stone-400 hover:text-rose-600 p-1" title="Remove item">
          <i data-lucide="trash-2" class="w-4 h-4"></i>
        </button>
      </div>
    </div>
  `).join('');

  if (window.lucide) {
    window.lucide.createIcons();
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

// --- WHATSAPP ORDER GENERATOR ---
function checkoutViaWhatsApp() {
  if (cart.length === 0) {
    showToast('Your basket is empty. Please add grains first!', 'error');
    return;
  }

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const delivery = subtotal >= 799 ? 'FREE Delivery' : '₹60 Delivery Fee';
  const total = subtotal >= 799 ? subtotal : subtotal + 60;

  let msg = `*🌾 Deepan Mills - Customer Order Request*\n`;
  if (currentUser) {
    msg += `Customer: ${currentUser.name} (Ph: ${currentUser.phone || ''})\n`;
  }
  msg += `--------------------------------------\n`;
  cart.forEach((item, i) => {
    msg += `${i + 1}. *${item.name}* (${item.weight})\n`;
    msg += `   Qty: ${item.quantity} x ₹${item.price} = ₹${item.quantity * item.price}\n`;
  });
  msg += `--------------------------------------\n`;
  msg += `*Items Subtotal:* ₹${subtotal}\n`;
  msg += `*Shipping:* ${delivery}\n`;
  msg += `*Grand Total Payable:* ₹${total}\n\n`;
  msg += `Please confirm my order and share delivery details to my address. Thank you!`;

  const phone = '916379790035';
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank');
}

// --- CHECKOUT & PAYMENT MODAL ---
function openCheckoutModal() {
  if (cart.length === 0) {
    showToast('Your basket is empty. Add grains to proceed!', 'error');
    return;
  }

  toggleCartDrawer(false);

  const modal = document.getElementById('checkout-modal');
  const totalElem = document.getElementById('checkout-modal-total');
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const total = subtotal >= 799 ? subtotal : subtotal + 60;

  if (totalElem) totalElem.innerText = `₹${total}`;

  // Pre-fill user details if logged in
  if (currentUser) {
    const nameInput = document.getElementById('cust-name');
    const phoneInput = document.getElementById('cust-phone');
    if (nameInput && currentUser.name) nameInput.value = currentUser.name;
    if (phoneInput && currentUser.phone) phoneInput.value = currentUser.phone;
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

  document.getElementById('pay-box-upi').classList.add('hidden');
  document.getElementById('pay-box-card').classList.add('hidden');
  document.getElementById('pay-box-cod').classList.add('hidden');

  const targetBox = document.getElementById(`pay-box-${method}`);
  if (targetBox) {
    targetBox.classList.remove('hidden');
  }
}

function handlePlaceOrder(e) {
  e.preventDefault();

  const name = document.getElementById('cust-name').value;
  const phone = document.getElementById('cust-phone').value;
  const address = document.getElementById('cust-address').value;
  const city = document.getElementById('cust-city').value;
  const pincode = document.getElementById('cust-pincode').value;
  const paymentMethod = document.querySelector('input[name="payment_method"]:checked').value;

  const orderId = '#DM-' + Math.floor(10000 + Math.random() * 90000);
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const total = subtotal >= 799 ? subtotal : subtotal + 60;

  document.getElementById('success-order-id').innerText = orderId;
  document.getElementById('success-customer-info').innerText = `${name}, ${address}, ${city} - ${pincode} (Ph: ${phone})`;
  document.getElementById('success-payment-method').innerText = paymentMethod === 'upi' ? 'UPI / GPay' : (paymentMethod === 'card' ? 'Online Card' : 'Cash on Delivery');
  document.getElementById('success-total-paid').innerText = `₹${total}`;
  document.getElementById('success-date').innerText = new Date().toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });

  const successItems = document.getElementById('success-items-list');
  successItems.innerHTML = cart.map(item => `
    <div class="flex justify-between py-1 text-xs">
      <span>${item.name} (${item.weight}) x ${item.quantity}</span>
      <span class="font-bold">₹${item.price * item.quantity}</span>
    </div>
  `).join('');

  closeCheckoutModal();
  cart = [];
  saveCart();
  updateCartUI();

  const successModal = document.getElementById('success-modal');
  if (successModal) {
    successModal.classList.remove('opacity-0', 'pointer-events-none');
    successModal.classList.add('opacity-100', 'pointer-events-auto');
  }

  showToast(`Congratulations! Order ${orderId} placed successfully.`, 'success');
}

function closeSuccessModal() {
  const successModal = document.getElementById('success-modal');
  if (successModal) {
    successModal.classList.remove('opacity-100', 'pointer-events-auto');
    successModal.classList.add('opacity-0', 'pointer-events-none');
    document.body.classList.remove('overflow-hidden');
  }
}

// --- INTERACTIVE PRODUCT DETAIL & PRICING MODAL ---
// (Prices are revealed inside after product & pack selection)
let currentQuickViewState = {
  productId: null,
  variantIdx: 0,
  quantity: 1
};

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

function quickViewWhatsAppOrder() {
  const prod = PRODUCTS.find(p => p.id === currentQuickViewState.productId);
  if (!prod) return;
  const variant = prod.variants[currentQuickViewState.variantIdx] || prod.variants[0];
  const qty = currentQuickViewState.quantity;
  const totalPrice = variant.price * qty;

  let msg = `*🌾 Deepan Mills - Product Inquiry & Order*\n`;
  if (currentUser) {
    msg += `Customer: ${currentUser.name} (Ph: ${currentUser.phone || ''})\n`;
  }
  msg += `--------------------------------------\n`;
  msg += `Product: *${prod.name}* (${prod.tamilName || ''})\n`;
  msg += `Selected Pack: *${variant.weight}*\n`;
  msg += `Pack Price: ₹${variant.price} (MRP: ₹${variant.mrp})\n`;
  msg += `Quantity: ${qty}\n`;
  msg += `Total Amount: *₹${totalPrice}*\n`;
  msg += `--------------------------------------\n`;
  msg += `Please confirm availability and dispatch to my location. Thank you!`;

  const phone = '916379790035';
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank');
}

function renderQuickViewModal() {
  const prod = PRODUCTS.find(p => p.id === currentQuickViewState.productId);
  const content = document.getElementById('quickview-content');
  if (!prod || !content) return;

  const currentVariant = prod.variants[currentQuickViewState.variantIdx] || prod.variants[0];
  const discountPercent = Math.round(((currentVariant.mrp - currentVariant.price) / currentVariant.mrp) * 100);
  const savings = currentVariant.mrp - currentVariant.price;

  const localizedTitle = currentLang === 'ta' && prod.tamilName ? prod.tamilName :
                         currentLang === 'hi' && prod.hindiName ? prod.hindiName : prod.name;
  const subTitle = currentLang === 'en' ? (prod.tamilName || '') : prod.name;

  content.innerHTML = `
    <!-- Modal Header -->
    <div class="flex justify-between items-start pb-4 border-b border-stone-200">
      <div>
        <div class="flex items-center gap-2 mb-1">
          <span class="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-amber-500 text-stone-950 shadow-sm">
            ${prod.badge}
          </span>
          ${subTitle ? `<span class="text-xs font-bold text-amber-800">${subTitle}</span>` : ''}
        </div>
        <h3 class="font-heading font-extrabold text-2xl sm:text-3xl text-[#19382B] leading-tight">${localizedTitle}</h3>
        <p class="text-xs text-stone-500 mt-0.5">Deepan Mills • Theni Agricultural Heritage</p>
      </div>
      <button onclick="closeQuickView()" class="p-2 rounded-xl text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors" title="Close">
        <i data-lucide="x" class="w-5 h-5"></i>
      </button>
    </div>

    <!-- Modal Body: 2 Columns on Desktop -->
    <div class="grid grid-cols-1 md:grid-cols-12 gap-6 mt-6 items-start">
      
      <!-- Left Column: Visual & Mill Authenticity -->
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
            <span>Slow-milled to preserve bran & germ</span>
          </div>
          <div class="flex items-center gap-2">
            <i data-lucide="check" class="w-3.5 h-3.5 text-emerald-600 shrink-0"></i>
            <span>No paraffin, wax or synthetic agents</span>
          </div>
        </div>
      </div>

      <!-- Right Column: Details, Nutritional Facts, Pack Selection & Revealed Price -->
      <div class="md:col-span-7 space-y-4">
        
        <!-- About the harvest -->
        <div>
          <h4 class="text-xs font-extrabold uppercase tracking-wider text-stone-500 mb-1">About This Harvest</h4>
          <p class="text-xs sm:text-sm text-stone-700 leading-relaxed">${prod.shortDesc}</p>
        </div>

        <!-- Health Benefits -->
        <div class="p-3 bg-emerald-50/70 rounded-2xl border border-emerald-200 space-y-1">
          <div class="flex items-center gap-1.5 text-[11px] font-extrabold text-emerald-950 uppercase tracking-wider">
            <i data-lucide="heart" class="w-3.5 h-3.5 text-emerald-600"></i>
            <span>Health & Wellness Benefit</span>
          </div>
          <p class="text-xs text-emerald-900 leading-normal">${prod.healthBenefit}</p>
        </div>

        <!-- Cooking Ratio -->
        <div class="p-3 bg-amber-50/70 rounded-2xl border border-amber-200 space-y-1">
          <div class="flex items-center gap-1.5 text-[11px] font-extrabold text-amber-950 uppercase tracking-wider">
            <i data-lucide="soup" class="w-3.5 h-3.5 text-amber-700"></i>
            <span>Traditional Cooking & Preparation</span>
          </div>
          <p class="text-xs text-amber-900 leading-normal">${prod.cookingRatio}</p>
        </div>

        <!-- Nutrition Facts (Per 100g) -->
        <div>
          <span class="block text-[10px] font-extrabold uppercase tracking-wider text-stone-400 mb-1.5">Nutritional Facts (Per 100g)</span>
          <div class="grid grid-cols-4 gap-2 text-center">
            <div class="bg-stone-50 p-2 rounded-xl border border-stone-200">
              <span class="text-[10px] text-stone-400 block font-semibold">Calories</span>
              <span class="text-xs font-black text-stone-800">${prod.nutrition.calories}</span>
            </div>
            <div class="bg-stone-50 p-2 rounded-xl border border-stone-200">
              <span class="text-[10px] text-stone-400 block font-semibold">Fiber</span>
              <span class="text-xs font-black text-emerald-700">${prod.nutrition.fiber}</span>
            </div>
            <div class="bg-stone-50 p-2 rounded-xl border border-stone-200">
              <span class="text-[10px] text-stone-400 block font-semibold">Protein</span>
              <span class="text-xs font-black text-stone-800">${prod.nutrition.protein}</span>
            </div>
            <div class="bg-stone-50 p-2 rounded-xl border border-stone-200">
              <span class="text-[10px] text-stone-400 block font-semibold">Iron / Min.</span>
              <span class="text-xs font-black text-amber-700">${prod.nutrition.iron}</span>
            </div>
          </div>
        </div>

        <!-- PACK WEIGHT SELECTOR (Selected Inside!) -->
        <div class="pt-2 border-t border-stone-200">
          <div class="flex items-center justify-between mb-2">
            <label class="text-xs font-black uppercase tracking-wider text-stone-800 flex items-center gap-1.5">
              <i data-lucide="scale" class="w-3.5 h-3.5 text-amber-600"></i>
              <span>Select Pack Size:</span>
            </label>
            <span class="text-[10px] text-stone-400 font-semibold">Choose weight to see price</span>
          </div>

          <div class="grid grid-cols-${prod.variants.length} gap-2">
            ${prod.variants.map((v, idx) => `
              <button type="button" 
                      onclick="selectQuickViewVariant(${idx})" 
                      class="py-2.5 px-3 rounded-xl text-xs font-black text-center transition-all ${
                        idx === currentQuickViewState.variantIdx 
                          ? 'bg-[#19382B] text-white shadow-md ring-2 ring-amber-400' 
                          : 'bg-stone-100 hover:bg-stone-200 text-stone-700 border border-stone-200'
                      }">
                ${v.weight}
              </button>
            `).join('')}
          </div>
        </div>

        <!-- REVEALED PRICE CARD (Shown after product is selected inside) -->
        <div class="p-3.5 bg-gradient-to-r from-emerald-50 to-amber-50/50 rounded-2xl border border-emerald-300 shadow-sm space-y-1.5">
          <div class="flex items-center justify-between">
            <span class="text-[11px] font-bold text-stone-500 uppercase tracking-wider">
              Selected: <strong class="text-stone-900">${currentVariant.weight}</strong>
            </span>
            ${discountPercent > 0 ? `
              <span class="px-2 py-0.5 rounded-md bg-rose-600 text-white text-[10px] font-black uppercase tracking-wider shadow-sm">
                Save ₹${savings} (${discountPercent}% OFF)
              </span>
            ` : ''}
          </div>

          <div class="flex items-baseline gap-2">
            <span class="text-2xl sm:text-3xl font-black text-[#19382B]">₹${currentVariant.price}</span>
            <span class="text-sm text-stone-400 line-through">₹${currentVariant.mrp}</span>
            <span class="text-xs text-stone-500 font-medium">/ ${currentVariant.weight}</span>
          </div>

          <div class="flex items-center gap-1.5 text-[11px] text-emerald-800 font-semibold">
            <i data-lucide="check-circle-2" class="w-3.5 h-3.5 text-emerald-600"></i>
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
            <span class="text-xl font-black text-[#19382B]">₹${currentVariant.price * currentQuickViewState.quantity}</span>
          </div>
        </div>

        <!-- ACTION BUTTONS -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
          <button onclick="addQuickViewToCart()" 
                  class="py-3 px-4 rounded-xl bg-[#19382B] hover:bg-[#132C22] text-white font-bold text-xs shadow-md hover:shadow-lg flex items-center justify-center gap-2 transition-all hover:scale-[1.01] active:scale-95">
            <i data-lucide="plus" class="w-4 h-4 text-amber-300"></i>
            <span>Add to Basket (₹${currentVariant.price * currentQuickViewState.quantity})</span>
          </button>

          <button onclick="quickViewWhatsAppOrder()" 
                  class="py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md flex items-center justify-center gap-2 transition-all hover:scale-[1.01] active:scale-95">
            <i data-lucide="message-circle" class="w-4 h-4"></i>
            <span>Order via WhatsApp</span>
          </button>
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
    <div class="p-6 rounded-3xl bg-[#FAF7F2] border border-stone-200 flex flex-col justify-between space-y-4">
      <div class="space-y-3">
        <div class="flex items-center gap-1 text-amber-500">
          ${Array(5).fill(0).map(() => `<i data-lucide="star" class="w-4 h-4 fill-amber-400"></i>`).join('')}
        </div>
        <h4 class="font-heading font-bold text-sm text-stone-900 leading-snug">"${t.title}"</h4>
        <p class="text-xs text-stone-600 leading-relaxed italic">"${t.comment}"</p>
      </div>

      <div class="flex items-center gap-3 pt-3 border-t border-stone-200">
        <img src="${t.avatar}" alt="${t.name}" class="w-10 h-10 rounded-full object-cover">
        <div>
          <div class="flex items-center gap-1.5">
            <span class="font-bold text-xs text-stone-900">${t.name}</span>
            <i data-lucide="badge-check" class="w-3.5 h-3.5 text-emerald-600"></i>
          </div>
          <span class="text-[11px] text-stone-500">${t.location}</span>
        </div>
      </div>
    </div>
  `).join('');

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// --- TOAST NOTIFICATIONS ---
function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast-anim flex items-center gap-2.5 px-4 py-3 rounded-2xl shadow-xl text-xs font-bold text-white transition-all pointer-events-auto ${
    type === 'success' ? 'bg-[#19382B] border border-emerald-500' :
    type === 'error' ? 'bg-rose-700' : 'bg-stone-900'
  }`;

  toast.innerHTML = `
    <i data-lucide="${type === 'success' ? 'check-circle-2' : 'info'}" class="w-4 h-4 ${type === 'success' ? 'text-amber-300' : 'text-white'}"></i>
    <span>${message}</span>
  `;

  container.appendChild(toast);
  if (window.lucide) window.lucide.createIcons();

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

// --- CONTACT SUBMIT ---
function handleContactSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('contact-name').value;
  const phone = document.getElementById('contact-phone').value;
  const message = document.getElementById('contact-message').value;

  const waText = `*Wholesale Inquiry for Deepan Mills*\nName: ${name}\nPhone: ${phone}\nRequirement: ${message}`;
  const url = `https://wa.me/916379790035?text=${encodeURIComponent(waText)}`;
  
  showToast('Inquiry sent! Redirecting to WhatsApp Hotline...', 'success');
  setTimeout(() => {
    window.open(url, '_blank');
  }, 700);

  document.getElementById('contact-form').reset();
}

// --- SETUP EVENT LISTENERS & FILTERS ---
function setupEventListeners() {
  const langBtn = document.getElementById('lang-menu-btn');
  const langDropdown = document.getElementById('lang-dropdown');
  if (langBtn && langDropdown) {
    langBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      langDropdown.classList.toggle('hidden');
    });

    document.addEventListener('click', (e) => {
      if (!langBtn.contains(e.target) && !langDropdown.contains(e.target)) {
        langDropdown.classList.add('hidden');
      }
    });
  }

  const cartToggleBtn = document.getElementById('cart-toggle-btn');
  if (cartToggleBtn) {
    cartToggleBtn.addEventListener('click', () => toggleCartDrawer(true));
  }

  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileNavPanel = document.getElementById('mobile-nav-panel');
  if (mobileMenuBtn && mobileNavPanel) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileNavPanel.classList.toggle('hidden');
    });
  }

  const cartOverlay = document.getElementById('cart-drawer-overlay');
  if (cartOverlay) {
    cartOverlay.addEventListener('click', (e) => {
      if (e.target === cartOverlay) {
        toggleCartDrawer(false);
      }
    });
  }

  document.querySelectorAll('.cat-pill').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.cat-pill').forEach(b => {
        b.classList.remove('bg-[#19382B]', 'text-white', 'active');
        b.classList.add('bg-white', 'text-stone-700');
      });
      btn.classList.add('bg-[#19382B]', 'text-white', 'active');
      btn.classList.remove('bg-white', 'text-stone-700');

      currentCategory = btn.dataset.category;
      renderProducts();
    });
  });

  document.querySelectorAll('.diet-tag').forEach(tagBtn => {
    tagBtn.addEventListener('click', () => {
      const tag = tagBtn.dataset.tag;
      if (currentDietTag === tag) {
        currentDietTag = null;
        tagBtn.classList.remove('bg-amber-600', 'text-white');
        tagBtn.classList.add('bg-stone-100', 'text-stone-700');
        document.getElementById('reset-filters-btn').classList.add('hidden');
      } else {
        document.querySelectorAll('.diet-tag').forEach(tb => {
          tb.classList.remove('bg-amber-600', 'text-white');
          tb.classList.add('bg-stone-100', 'text-stone-700');
        });
        currentDietTag = tag;
        tagBtn.classList.add('bg-amber-600', 'text-white');
        tagBtn.classList.remove('bg-stone-100', 'text-stone-700');
        document.getElementById('reset-filters-btn').classList.remove('hidden');
      }
      renderProducts();
    });
  });

  const resetFiltersBtn = document.getElementById('reset-filters-btn');
  if (resetFiltersBtn) {
    resetFiltersBtn.addEventListener('click', resetAllFilters);
  }

  const searchInput = document.getElementById('product-search-input');
  const clearSearchBtn = document.getElementById('clear-search-btn');

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      if (searchQuery.length > 0) {
        clearSearchBtn.classList.remove('hidden');
      } else {
        clearSearchBtn.classList.add('hidden');
      }
      renderProducts();
    });
  }

  if (clearSearchBtn) {
    clearSearchBtn.addEventListener('click', () => {
      searchInput.value = '';
      searchQuery = '';
      clearSearchBtn.classList.add('hidden');
      renderProducts();
    });
  }
}

function filterCategory(cat) {
  const btn = document.querySelector(`.cat-pill[data-category="${cat}"]`);
  if (btn) btn.click();
}

function resetAllFilters() {
  currentCategory = 'all';
  currentDietTag = null;
  searchQuery = '';
  
  const searchInput = document.getElementById('product-search-input');
  if (searchInput) searchInput.value = '';

  const clearBtn = document.getElementById('clear-search-btn');
  if (clearBtn) clearBtn.classList.add('hidden');

  document.querySelectorAll('.cat-pill').forEach(b => {
    b.classList.remove('bg-[#19382B]', 'text-white', 'active');
    b.classList.add('bg-white', 'text-stone-700');
    if (b.dataset.category === 'all') {
      b.classList.add('bg-[#19382B]', 'text-white', 'active');
      b.classList.remove('bg-white', 'text-stone-700');
    }
  });

  document.querySelectorAll('.diet-tag').forEach(tb => {
    tb.classList.remove('bg-amber-600', 'text-white');
    tb.classList.add('bg-stone-100', 'text-stone-700');
  });

  document.getElementById('reset-filters-btn').classList.add('hidden');
  renderProducts();
}
