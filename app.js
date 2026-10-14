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
    navShop: 'Shop Rice, Millets & Corn',
    navGuide: 'Cooking & Health',
    navAwards: 'Milling Craft',
    navReviews: 'Patron Notes',
    navContact: 'Contact',
    btnWaHeader: 'WhatsApp',
    btnCartHeader: 'Order List',
    heroBadge1: 'MSME Recognized Agro Processing Unit',
    heroBadge2: 'Theni Western Ghats Agro Cluster',
    heroHeadline: 'Deepan Mills <br><span class="font-serif italic text-amber-700">Native Rice, Millets</span> & Golden Corns',
    heroSubtitle: 'Situated in the agricultural heartlands of Theni, Tamil Nadu, Deepan Mills specializes in reviving authentic unpolished native millets, traditional Karuppu Kavuni, Kattuyanam and Mappillai Samba rice, sun-dried golden corns, and freshly stone-ground whole flours.',
    catalogEyebrow: 'Direct From Our Mill',
    catalogTitle: 'Heritage Rice, Native Millets & Golden Corns',
    catalogSub: 'Authentic 100% unpolished grains, slow-processed in Theni. Select your pack size or enter custom kilograms and order directly on WhatsApp.',
    catAll: 'All Products (24)',
    catRice: 'Heritage Rice (12)',
    catMillet: 'Native Millets (10)',
    catGrain: 'Golden Corns & Maize (2)',
    labelFilterBy: 'Filter by Need:',
    btnAdd: 'Add to List',
    btnViewDetails: 'Order on WhatsApp',
    drawerTitle: 'Your WhatsApp Order List',
    lblSubtotal: 'Selected Items:',
    lblDelivery: 'Dispatch Mode:',
    lblTotal: 'Total Items:',
    btnCheckoutSubmit: 'Send Order via WhatsApp',
    btnCheckoutWa: 'Send Order via WhatsApp Hotline'
  },
  ta: {
    langName: 'தமிழ்',
    announcement: 'தேனி மண்ணிலிருந்து நேரடியாக • 100% தீட்டப்படாத நவதானியங்கள்',
    announcementSub: 'தமிழ்நாடு MSME அங்கீகாரம் பெற்ற ஆலை',
    brandTagline: 'பாரம்பரியம் • தூய்மை • நல்வாழ்வு',
    navHome: 'ஆலை அறிமுகம்',
    navShop: 'அரிசி, சிறுதானியங்கள் & சோளம்',
    navGuide: 'சமையல் வழிகாட்டி',
    navAwards: 'ஆலை பாரம்பரியம்',
    navReviews: 'வாடிக்கையாளர் குறிப்புகள்',
    navContact: 'தொடர்பு',
    btnWaHeader: 'வாட்ஸ்அப்',
    btnCartHeader: 'ஆர்டர் பட்டியல்',
    heroBadge1: 'MSME அங்கீகாரம் பெற்ற விவசாய நிறுவனம்',
    heroBadge2: 'தேனி மேற்கு தொடர்ச்சி மலை நவதானியங்கள்',
    heroHeadline: 'தீபன் மில்ஸ் <br><span class="font-serif italic text-amber-700">பாரம்பரிய அரிசி, சிறுதானியங்கள்</span> & நாட்டு மக்காச்சோளம்',
    heroSubtitle: 'தேனியின் வளமான மண்ணில் விளைந்த பாரம்பரிய நவதானியங்கள், தூயமல்லி, கருப்பு கவுனி, மாப்பிள்ளை சம்பா அரிசி, நாட்டுச் சிறுதானியங்கள் மற்றும் சூரிய ஒளியில் உலர்த்திய மஞ்சள் மக்காச்சோளம். ரசாயனங்கள் அற்ற ஆரோக்கியமான உணவை உங்கள் இல்லத்திற்கு சேர்க்கிறோம்.',
    catalogEyebrow: 'எங்கள் ஆலை தயாரிப்புகள்',
    catalogTitle: 'பாரம்பரிய அரிசி, நாட்டுச் சிறுதானியங்கள் & மக்காச்சோளம்',
    catalogSub: 'தேனியில் விளையும் 100% தீட்டப்படாத நவதானியங்கள். எடையைத் தேர்ந்தெடுத்து வாட்ஸ்அப் மூலம் உடனடியாக ஆர்டர் செய்யுங்கள்.',
    catAll: 'அனைத்து பொருட்கள் (24)',
    catRice: 'பாரம்பரிய அரிசி (12)',
    catMillet: 'நாட்டுச் சிறுதானியங்கள் (10)',
    catGrain: 'நாட்டு மக்காச்சோளம் (2)',
    labelFilterBy: 'தேவைக்கேற்ப:',
    btnAdd: 'பட்டியலில் சேர்',
    btnViewDetails: 'வாட்ஸ்அப் ஆர்டர்',
    drawerTitle: 'உங்கள் வாட்ஸ்அப் ஆர்டர் பட்டியல்',
    lblSubtotal: 'தேர்ந்தெடுத்த பொருட்கள்:',
    lblDelivery: 'அனுப்பும் முறை:',
    lblTotal: 'மொத்த பொருட்கள்:',
    btnCheckoutSubmit: 'வாட்ஸ்அப்பில் அனுப்ப',
    btnCheckoutWa: 'வாட்ஸ்அப் மூலம் உடனடி ஆர்டர்'
  },
  hi: {
    langName: 'हिन्दी',
    announcement: 'थेनी की मिट्टी से सीधे • 100% बिना पॉलिश व प्राकृतिक अनाज',
    announcementSub: 'तमिलनाडु MSME मान्यता प्राप्त इकाई',
    brandTagline: 'परंपरा • शुद्धता • स्वास्थ्य',
    navHome: 'मिल परिचय',
    navShop: 'चावल, बाजरा व मक्का',
    navGuide: 'स्वास्थ्य व विधि',
    navAwards: 'मिल शिल्प',
    navReviews: 'ग्राहक अनुभव',
    navContact: 'संपर्क',
    btnWaHeader: 'व्हाट्सएप',
    btnCartHeader: 'ऑर्डर सूची',
    heroBadge1: 'MSME मान्यता प्राप्त कृषि प्रसंस्करण इकाई',
    heroBadge2: 'थेनी पश्चिमी घाट कृषि समूह',
    heroHeadline: 'दीपन मिल्स <br><span class="font-serif italic text-amber-700">पारंपरिक चावल, मिलेट्स</span> व देशी मक्का',
    heroSubtitle: 'थेनी, तमिलनाडु की उपजाऊ भूमि से सीधे प्राप्त पारंपरिक बाजरा, काला व लाल चावल, थूयमल्ली और देशी मक्का। बिना किसी पॉलिश या रसायन के।',
    catalogEyebrow: 'सीधे हमारी मिल से',
    catalogTitle: 'पारंपरिक चावल, बाजरा / मिलेट्स और देशी मक्का',
    catalogSub: 'थेनी के 100% बिना पॉलिश व प्राकृतिक अनाज। पैक का आकार चुनें और सीधे व्हाट्सएप पर ऑर्डर करें।',
    catAll: 'सभी उत्पाद (24)',
    catRice: 'पारंपरिक चावल (12)',
    catMillet: 'बाजरा / मिलेट्स (10)',
    catGrain: 'देशी मक्का व अनाज (2)',
    labelFilterBy: 'आवश्यकता अनुसार:',
    btnAdd: 'सूची में जोड़ें',
    btnViewDetails: 'व्हाट्सएप पर ऑर्डर करें',
    drawerTitle: 'आपकी व्हाट्सएप ऑर्डर सूची',
    lblSubtotal: 'चुनी गई वस्तुएं:',
    lblDelivery: 'भेजने का प्रकार:',
    lblTotal: 'कुल वस्तुएं:',
    btnCheckoutSubmit: 'व्हाट्सएप पर भेजें',
    btnCheckoutWa: 'व्हाट्सएप पर तत्काल ऑर्डर'
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
  quantity: 1,
  isManual: false,
  manualWeight: ''
};

// Initialize on page load with readyState check
function initApp() {
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
        const prodList = window.PRODUCTS || PRODUCTS || [];
        cart = parsed.filter(item => item && item.productId).map(item => {
          let p = item.price;
          if (typeof p === 'string') p = parseInt(p.replace(/[^0-9]/g, '')) || 0;
          if (!p || p <= 0) {
            const canonical = prodList.find(cp => cp.id === item.productId);
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
  const prodList = window.PRODUCTS || PRODUCTS || [];
  prodList.forEach(p => {
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
  try { updateAuthUI(); } catch (e) { console.error('updateAuthUI error:', e); }
  try { applyLanguage(currentLang); } catch (e) { console.error('applyLanguage error:', e); }
  try { renderProducts(); } catch (e) { console.error('renderProducts error:', e); }
  try { renderTestimonials(); } catch (e) { console.error('renderTestimonials error:', e); }
  try { updateCartUI(); } catch (e) { console.error('updateCartUI error:', e); }
  try { setupEventListeners(); } catch (e) { console.error('setupEventListeners error:', e); }
  try { initHeaderScrollEffect(); } catch (e) { console.error('initHeaderScrollEffect error:', e); }
  try { initScrollAnimations(); } catch (e) { console.error('initScrollAnimations error:', e); }

  if (window.lucide) {
    try { window.lucide.createIcons(); } catch (e) {}
  }
}

// Guarantee execution whether script runs before or after DOMContentLoaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

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

// --- CUSTOMER PROFILE & AUTHENTICATION (REMOVED - DIRECT WHATSAPP ORDERING) ---
function updateAuthUI() {
  // Login removed in favor of direct friction-free WhatsApp ordering
}

function openAccountModal() {
  // Customer login removed - redirect to WhatsApp inquiry if called
  window.open('https://wa.me/916379790035?text=Hello%20Deepan%20Mills,%20I%20would%20like%20to%20inquire%20about%20ordering%20traditional%20rice%20and%20millets.', '_blank');
}

function closeAccountModal() {
  // No-op
}

function handleSaveCustomerAccount() {
  // No-op
}

function handleLogout() {
  currentUser = null;
  try {
    localStorage.removeItem('deepan_customer_profile');
  } catch (e) {}
}

// --- GLASSMORPHISM HEADER SCROLL & VIEWPORT INTERSECTION ANIMATIONS ---
let scrollObserver = null;

function initHeaderScrollEffect() {
  const header = document.querySelector('header');
  if (!header) return;

  let ticking = false;
  const updateHeaderState = () => {
    if (window.scrollY > 20) {
      header.classList.add('glass-header-scrolled');
    } else {
      header.classList.remove('glass-header-scrolled');
    }
    ticking = false;
  };

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(updateHeaderState);
      ticking = true;
    }
  }, { passive: true });

  updateHeaderState();
}

function initScrollAnimations() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    document.querySelectorAll('.scroll-reveal, .product-card').forEach(el => {
      el.classList.add('reveal-visible');
    });
    return;
  }

  if (!scrollObserver) {
    scrollObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.05
    });
  }

  // Observe unrevealed product cards with staggered index
  const cards = document.querySelectorAll('.product-card:not(.reveal-visible)');
  cards.forEach((card, idx) => {
    card.style.setProperty('--card-index', idx % 4);
    scrollObserver.observe(card);
  });

  // Observe major section containers
  const sections = document.querySelectorAll('.scroll-reveal:not(.reveal-visible)');
  sections.forEach(sec => {
    scrollObserver.observe(sec);
  });
}

// --- POLICIES MODAL LOGIC ---
const POLICY_CONFIG = {
  shipping: {
    title: 'Shipping & Delivery Policy',
    subtitle: 'Direct Mill-to-Doorstep Pan-India Courier Terms • Theni, Tamil Nadu',
    icon: 'truck',
    iconBg: 'bg-emerald-700 text-white',
    badge: 'Pan-India Delivery',
    badgeClass: 'bg-emerald-100 text-emerald-900 border border-emerald-300',
    waText: 'Hello Deepan Mills, I have a question regarding Shipping and Delivery for my order.'
  },
  returns: {
    title: 'Returns & Guarantee Policy',
    subtitle: '100% Unpolished Purity Guarantee & Transit Replacement • Theni, Tamil Nadu',
    icon: 'badge-check',
    iconBg: 'bg-amber-600 text-white',
    badge: '100% Quality Assurance',
    badgeClass: 'bg-amber-100 text-amber-900 border border-amber-300',
    waText: 'Hello Deepan Mills, I have a query regarding your Returns and Purity Guarantee.'
  },
  terms: {
    title: 'Order Terms & Conditions',
    subtitle: 'Direct Mill WhatsApp Quotation & Transparent Billing • Theni, Tamil Nadu',
    icon: 'file-text',
    iconBg: 'bg-[#142E23] text-amber-300',
    badge: 'Direct Mill Order',
    badgeClass: 'bg-stone-100 text-stone-800 border border-stone-300',
    waText: 'Hello Deepan Mills, I have a question about Order Terms and bulk dispatch.'
  },
  privacy: {
    title: 'Customer Privacy Policy',
    subtitle: 'Strict Confidentiality & Zero Telemarketing Spam Promise • Theni, Tamil Nadu',
    icon: 'lock',
    iconBg: 'bg-blue-700 text-white',
    badge: '100% Data Confidentiality',
    badgeClass: 'bg-blue-100 text-blue-900 border border-blue-300',
    waText: 'Hello Deepan Mills, I have a question about Customer Privacy and my contact details.'
  }
};

function openPoliciesModal(key = 'shipping') {
  const modal = document.getElementById('policies-modal');
  if (!modal) return;

  const validKey = POLICY_CONFIG[key] ? key : 'shipping';
  const cfg = POLICY_CONFIG[validKey];

  // Update header elements to match the clicked policy
  const titleEl = document.getElementById('policy-modal-title');
  const subEl = document.getElementById('policy-modal-subtitle');
  const badgeEl = document.getElementById('policy-modal-badge');
  const iconHolder = document.getElementById('policy-modal-icon-holder');
  const iconContainer = document.getElementById('policy-modal-icon-container');
  const waBtn = document.getElementById('policy-modal-wa-btn');

  if (titleEl) titleEl.textContent = cfg.title;
  if (subEl) subEl.textContent = cfg.subtitle;
  if (badgeEl) {
    badgeEl.textContent = cfg.badge;
    badgeEl.className = `hidden sm:inline-flex text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full ${cfg.badgeClass}`;
  }
  if (iconContainer) {
    iconContainer.className = `w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 shadow-sm transition-colors ${cfg.iconBg}`;
  }
  if (iconHolder) {
    iconHolder.innerHTML = `<i data-lucide="${cfg.icon}" class="w-5 h-5"></i>`;
  }
  if (waBtn) {
    waBtn.href = `https://wa.me/916379790035?text=${encodeURIComponent(cfg.waText)}`;
  }

  // Show ONLY the single selected policy panel; keep all other 3 panels hidden
  const tabs = ['shipping', 'returns', 'terms', 'privacy'];
  tabs.forEach(t => {
    const content = document.getElementById(`policy-tab-${t}`);
    if (content) {
      if (t === validKey) {
        content.classList.remove('hidden');
      } else {
        content.classList.add('hidden');
      }
    }
  });

  // Display modal
  modal.classList.remove('opacity-0', 'pointer-events-none');
  modal.classList.add('opacity-100', 'pointer-events-auto');
  document.body.classList.add('overflow-hidden');

  if (window.lucide) window.lucide.createIcons();
}

function closePoliciesModal() {
  const modal = document.getElementById('policies-modal');
  if (modal) {
    modal.classList.remove('opacity-100', 'pointer-events-auto');
    modal.classList.add('opacity-0', 'pointer-events-none');
    document.body.classList.remove('overflow-hidden');
  }
}

function switchPolicyTab(tab) {
  openPoliciesModal(tab);
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
    'cat-grain': t.catGrain,
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
  const prodList = window.PRODUCTS || PRODUCTS || [];

  const q = (searchQuery || '').toLowerCase().trim();
  const words = q ? q.split(/\s+/).filter(Boolean) : [];

  const filtered = prodList.filter(prod => {
    // Multi-term search across title, native names, category, badge, description, benefits, tags, and weights
    let searchMatch = true;
    if (words.length > 0) {
      const searchableText = [
        prod.name,
        prod.tamilName,
        prod.hindiName,
        prod.category,
        prod.badge,
        prod.shortDesc,
        prod.healthBenefit,
        ...(prod.tags || []),
        ...(prod.variants ? prod.variants.map(v => v.weight) : [])
      ].filter(Boolean).join(' ').toLowerCase();

      searchMatch = words.every(w => searchableText.includes(w));
    }

    // When actively searching, search across all products; otherwise respect category tab
    const catMatch = words.length > 0 ? true : (currentCategory === 'all' || prod.category === currentCategory);

    const tagMatch = !currentDietTag || 
      (prod.tags && prod.tags.some(tag => tag.toLowerCase().includes(currentDietTag.toLowerCase())));

    return catMatch && searchMatch && tagMatch;
  });

  if (filtered.length === 0) {
    container.innerHTML = '';
    if (emptyView) {
      emptyView.style.display = 'block';
      emptyView.classList.remove('hidden');
      const hint = document.getElementById('no-products-query-hint');
      if (hint) {
        if (q) {
          hint.innerText = `No products matched "${searchQuery}". Try searching for "rice", "millet", "corn", or "ragi".`;
        } else {
          hint.innerText = 'Try searching for "Karuppu Kavuni", "Barnyard", "Millet", or reset filters.';
        }
      }
    }
    return;
  }

  if (emptyView) {
    emptyView.style.display = 'none';
    emptyView.classList.add('hidden');
  }

  container.innerHTML = filtered.map(prod => {
    const localizedTitle = currentLang === 'ta' && prod.tamilName ? prod.tamilName :
                           currentLang === 'hi' && prod.hindiName ? prod.hindiName : prod.name;
    const subTitle = currentLang === 'en' ? (prod.tamilName || '') : prod.name;
    const activeVariantIdx = selectedVariantMap[prod.id] !== undefined ? selectedVariantMap[prod.id] : 0;
    const activeVariant = prod.variants[activeVariantIdx] || prod.variants[0];

    return `
      <div class="product-card bg-white rounded-3xl p-4 flex flex-col justify-between group shadow-sm hover:shadow-xl transition-all duration-300 border border-[#CEE1D5] cursor-pointer" 
           data-product-id="${prod.id}"
           onclick="openQuickView('${prod.id}', ${activeVariantIdx})">
        <div>
          <!-- Product Photography -->
          <div class="relative rounded-2xl overflow-hidden aspect-[4/3] bg-stone-100 mb-3.5">
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
              <i data-lucide="message-circle" class="w-3 h-3 text-emerald-700"></i>
              <span>Order Now</span>
            </div>
          </div>

          <!-- Product Titles & Heritage Info -->
          <div class="space-y-1 mb-2">
            ${subTitle ? `
              <div class="flex items-center gap-1 text-[11px] font-semibold text-amber-800">
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
          <!-- Available Pack Sizes & Manual Weight Selection -->
          <div class="mb-3.5">
            <div class="flex items-center justify-between mb-1.5">
              <span class="text-[10px] font-bold uppercase tracking-wider text-stone-400">Select Pack:</span>
              <button type="button" 
                      onclick="event.stopPropagation(); openQuickViewWithManual('${prod.id}')" 
                      class="text-[11px] font-bold text-amber-800 hover:text-amber-950 flex items-center gap-1 transition-colors"
                      title="Need custom kg or bulk quantity?">
                <i data-lucide="edit-3" class="w-3 h-3 text-amber-700"></i>
                <span>+ Manual Kg</span>
              </button>
            </div>
            <div class="flex flex-wrap gap-1.5">
              ${prod.variants.map((v, vIdx) => `
                <button type="button"
                        onclick="event.stopPropagation(); selectProductVariant('${prod.id}', ${vIdx})" 
                        class="text-xs font-bold py-1 px-2.5 rounded-lg transition-all ${
                          vIdx === activeVariantIdx 
                            ? 'bg-[#142E23] text-white shadow-sm ring-1 ring-amber-400' 
                            : 'bg-stone-50 hover:bg-stone-100 text-stone-700 border border-stone-200'
                        }">
                  ${v.weight}
                </button>
              `).join('')}
            </div>
          </div>

          <!-- Direct WhatsApp Order Action -->
          <div class="pt-3 border-t border-stone-100 flex items-center justify-between gap-2">
            <button type="button"
                    onclick="event.stopPropagation(); openQuickView('${prod.id}', ${activeVariantIdx})"
                    class="text-xs font-bold text-stone-600 hover:text-stone-900 flex items-center gap-1 py-1 px-1.5 rounded-lg hover:bg-stone-100 transition-colors">
              <i data-lucide="info" class="w-3.5 h-3.5 text-stone-400"></i>
              <span>Details</span>
            </button>

            <button type="button"
                    onclick="event.stopPropagation(); orderProductOnWhatsApp('${prod.id}')" 
                    class="px-3.5 py-2 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-slate-950 text-xs font-extrabold flex items-center gap-1.5 shadow-sm transition-all hover:scale-105 active:scale-95"
                    title="Order selected pack on WhatsApp">
              <i data-lucide="message-circle" class="w-3.5 h-3.5 text-slate-950"></i>
              <span>${t.btnViewDetails || 'Order on WhatsApp'}</span>
            </button>
          </div>
        </div>

      </div>
    `;
  }).join('');

  if (window.lucide) {
    window.lucide.createIcons();
  }
  try { initScrollAnimations(); } catch (e) {}
}

function selectProductVariant(productId, variantIdx) {
  selectedVariantMap[productId] = variantIdx;
  renderProducts();
}

function orderProductOnWhatsApp(productId) {
  const prod = PRODUCTS.find(p => p.id === productId);
  if (!prod) return;
  const activeIdx = selectedVariantMap[productId] !== undefined ? selectedVariantMap[productId] : 0;
  const variant = prod.variants[activeIdx] || prod.variants[0];
  const weight = variant.weight;
  
  const msg = `Hello Deepan Mills, I would like to order *${prod.name}* (${weight}). Please confirm availability and dispatch details.`;
  const phoneNum = '916379790035';
  const url = `https://wa.me/${phoneNum}?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank');
}

// --- CART FUNCTIONALITY ---
function addToCart(productId, variantIdx, quantity = 1, customWeight = null) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const variant = product.variants[variantIdx] || product.variants[0];
  const weight = customWeight && customWeight.trim() ? customWeight.trim() : variant.weight;

  const existingIdx = cart.findIndex(
    item => item.productId === productId && item.weight === weight
  );

  if (existingIdx > -1) {
    cart[existingIdx].quantity += quantity;
  } else {
    cart.push({
      productId: product.id,
      name: product.name,
      tamilName: product.tamilName,
      weight: weight,
      price: variant.price,
      mrp: variant.mrp,
      image: product.image,
      quantity: quantity
    });
  }

  saveCart();
  updateCartUI();

  showToast(`Added ${product.name} (${weight}) to your basket.`, 'success');

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
  // Sanitize cart items
  cart.forEach(item => {
    item.quantity = Math.max(1, parseInt(item.quantity) || 1);
  });

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Header badges
  const badge = document.getElementById('cart-count-badge');
  const headerTotal = document.getElementById('header-cart-total');
  const drawerCount = document.getElementById('cart-drawer-count');
  const mobileCount = document.getElementById('mobile-cart-count');

  if (badge) badge.innerText = totalItems;
  if (headerTotal) headerTotal.innerText = totalItems > 0 ? `• ${totalItems} ${totalItems === 1 ? 'item' : 'items'}` : '';
  if (drawerCount) drawerCount.innerText = totalItems;
  if (mobileCount) mobileCount.innerText = totalItems;

  // Cart Drawer Items List
  const itemsContainer = document.getElementById('cart-items-container');
  const emptyMsg = document.getElementById('cart-empty-message');
  const cartFooter = document.getElementById('cart-footer');
  const countEl = document.getElementById('cart-total-items-count');

  if (countEl) countEl.innerText = `${totalItems} ${totalItems === 1 ? 'item' : 'items'}`;

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
          <div class="text-xs font-bold text-emerald-800 mt-0.5">Selected Pack: ${item.weight}</div>
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
  const summaryList = document.getElementById('checkout-items-summary-list');
  const countBadge = document.getElementById('checkout-items-count-badge');

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  if (countBadge) countBadge.innerText = `${totalItems} Item${totalItems > 1 ? 's' : ''}`;

  if (summaryList) {
    summaryList.innerHTML = cart.map(item => `
      <div class="py-2 flex items-center justify-between text-xs">
        <div>
          <span class="font-bold text-stone-900">${item.name}</span>
          <span class="text-stone-500 text-[11px] block">${item.weight} × ${item.quantity}</span>
        </div>
        <span class="font-bold text-emerald-800">Pack: ${item.weight}</span>
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

function handlePlaceOrder(e) {
  e.preventDefault();

  if (cart.length === 0) {
    showToast('Your order list is empty. Please select products first.', 'error');
    return;
  }

  const name = document.getElementById('cust-name').value.trim();
  const phone = document.getElementById('cust-phone').value.trim();
  const address = document.getElementById('cust-address').value.trim();
  const city = document.getElementById('cust-city').value.trim();
  const pincode = document.getElementById('cust-pincode').value.trim();

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

  const verifiedItems = cart.map(item => ({
    ...item,
    lineItems: `${item.name} (${item.weight}) × ${item.quantity}`
  }));

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

  // Construct order record
  const orderRecord = {
    id: orderId,
    date: dateFormatted,
    customer: name,
    phone: phone,
    location: `${city} - ${pincode}`,
    address: `${address}, ${city} - ${pincode}`,
    items: verifiedItems.map(i => `${i.name} (${i.weight}) x ${i.quantity}`).join(', '),
    itemDetails: [...verifiedItems],
    payment: 'WhatsApp Direct Hotline',
    status: 'Sent to Mill via WhatsApp'
  };

  saveCustomerOrder(orderRecord);

  // Send directly to WhatsApp
  let msg = `*Deepan Mills - Customer Order Request*\n`;
  msg += `--------------------------------------\n`;
  msg += `Order Reference: *${orderId}*\n`;
  msg += `Customer Name: *${name}*\n`;
  msg += `Phone: *${phone}*\n`;
  msg += `Delivery Address: ${address}, ${city} - ${pincode}\n`;
  msg += `--------------------------------------\n`;
  msg += `*Ordered Items:*\n`;
  verifiedItems.forEach((item, idx) => {
    msg += `${idx + 1}. ${item.name} (${item.weight}) × ${item.quantity}\n`;
  });
  msg += `--------------------------------------\n`;
  msg += `Please confirm product availability and dispatch details. Thank you!`;

  const phoneNum = '916379790035';
  const url = `https://wa.me/${phoneNum}?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank');

  // Update success modal
  const successOrderId = document.getElementById('success-order-id');
  const successCustInfo = document.getElementById('success-customer-info');
  const successDate = document.getElementById('success-date');
  const successStatus = document.getElementById('success-status');
  const successList = document.getElementById('success-items-list');

  if (successOrderId) successOrderId.innerText = orderId;
  if (successCustInfo) successCustInfo.innerText = `${name}, ${address}, ${city} - ${pincode} (Ph: ${phone})`;
  if (successDate) successDate.innerText = dateFormatted;
  if (successStatus) successStatus.innerText = 'Dispatched to Deepan Mills WhatsApp';

  if (successList) {
    successList.innerHTML = verifiedItems.map(item => `
      <div class="flex justify-between py-1 text-xs">
        <span class="font-bold text-stone-800">${item.name}</span>
        <span class="text-emerald-800 font-semibold">${item.weight} × ${item.quantity}</span>
      </div>
    `).join('');
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

  showToast(`Order request ${orderId} sent to WhatsApp!`, 'success');
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
    showToast('Your order list is empty. Please select products first.', 'error');
    return;
  }

  let msg = `*Deepan Mills - Customer Order Request*\n`;
  msg += `--------------------------------------\n`;
  msg += `*Ordered Items:*\n`;
  cart.forEach((item, idx) => {
    msg += `${idx + 1}. ${item.name} (${item.weight}) × ${item.quantity}\n`;
  });
  msg += `--------------------------------------\n`;
  msg += `Please confirm product availability, shipping charges to my delivery address, and payment details.\n\nThank you!`;

  const phoneNum = '916379790035';
  const url = `https://wa.me/${phoneNum}?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank');

  showToast('Opening WhatsApp with your order details...', 'success');
}

// --- QUICK VIEW MODAL (IN-DEPTH PRODUCT SPECIFICATION & PACK SELECTOR) ---
function openQuickView(productId, variantIdx = 0) {
  const prod = PRODUCTS.find(p => p.id === productId);
  if (!prod) return;

  currentQuickViewState = {
    productId: productId,
    variantIdx: variantIdx,
    quantity: 1,
    isManual: false,
    manualWeight: ''
  };

  renderQuickViewModal();

  const modal = document.getElementById('quickview-modal');
  if (modal) {
    modal.classList.remove('opacity-0', 'pointer-events-none');
    modal.classList.add('opacity-100', 'pointer-events-auto');
    document.body.classList.add('overflow-hidden');
  }
}

function openQuickViewWithManual(productId) {
  const prod = PRODUCTS.find(p => p.id === productId);
  if (!prod) return;

  const activeIdx = selectedVariantMap[productId] !== undefined ? selectedVariantMap[productId] : 0;
  openQuickView(productId, activeIdx);
  currentQuickViewState.isManual = true;
  if (!currentQuickViewState.manualWeight) {
    currentQuickViewState.manualWeight = '10 Kg';
  }
  renderQuickViewModal();

  setTimeout(() => {
    const input = document.getElementById('manual-weight-input');
    if (input) {
      input.focus();
      input.select();
    }
  }, 60);
}

function selectQuickViewVariant(variantIdx) {
  currentQuickViewState.isManual = false;
  currentQuickViewState.variantIdx = variantIdx;
  renderQuickViewModal();
}

function toggleQuickViewManualWeight(enable, rerender = true) {
  currentQuickViewState.isManual = enable;
  if (enable && !currentQuickViewState.manualWeight) {
    currentQuickViewState.manualWeight = '10 Kg';
  }
  if (rerender) {
    renderQuickViewModal();
    if (enable) {
      setTimeout(() => {
        const input = document.getElementById('manual-weight-input');
        if (input) {
          input.focus();
          input.select();
        }
      }, 50);
    }
  } else {
    updateQuickViewDisplays();
  }
}

function handleQuickViewManualWeightChange(val) {
  currentQuickViewState.manualWeight = val;
  currentQuickViewState.isManual = true;
  updateQuickViewDisplays();
}

function updateQuickViewDisplays() {
  const prod = PRODUCTS.find(p => p.id === currentQuickViewState.productId);
  if (!prod) return;

  const activeVariant = prod.variants[currentQuickViewState.variantIdx] || prod.variants[0];
  const displayWeight = (currentQuickViewState.isManual && currentQuickViewState.manualWeight && currentQuickViewState.manualWeight.trim()) 
    ? currentQuickViewState.manualWeight.trim() 
    : activeVariant.weight;

  const packDisplayEl = document.getElementById('quickview-selected-pack-display');
  if (packDisplayEl) {
    packDisplayEl.innerText = displayWeight;
  }

  const totalDisplayEl = document.getElementById('quickview-total-weight-display');
  if (totalDisplayEl) {
    totalDisplayEl.innerText = `${displayWeight} × ${currentQuickViewState.quantity}`;
  }

  const waBtn = document.getElementById('quickview-wa-btn');
  if (waBtn) {
    const waOrderText = `Hello Deepan Mills, I would like to order *${prod.name}* (${displayWeight}) x ${currentQuickViewState.quantity}. Please confirm availability and dispatch details.`;
    waBtn.href = `https://wa.me/916379790035?text=${encodeURIComponent(waOrderText)}`;
  }
}

function changeQuickViewQty(delta) {
  currentQuickViewState.quantity = Math.max(1, currentQuickViewState.quantity + delta);
  renderQuickViewModal();
}

function addQuickViewToCart() {
  if (!currentQuickViewState.productId) return;
  const customWeight = (currentQuickViewState.isManual && currentQuickViewState.manualWeight && currentQuickViewState.manualWeight.trim()) 
    ? currentQuickViewState.manualWeight.trim() 
    : null;
  addToCart(currentQuickViewState.productId, currentQuickViewState.variantIdx, currentQuickViewState.quantity, customWeight);
  closeQuickView();
  toggleCartDrawer(true);
}

function renderQuickViewModal() {
  const prod = PRODUCTS.find(p => p.id === currentQuickViewState.productId);
  const content = document.getElementById('quickview-content');
  if (!prod || !content) return;

  const activeVariant = prod.variants[currentQuickViewState.variantIdx] || prod.variants[0];
  const displayWeight = (currentQuickViewState.isManual && currentQuickViewState.manualWeight && currentQuickViewState.manualWeight.trim()) 
    ? currentQuickViewState.manualWeight.trim() 
    : activeVariant.weight;

  const waOrderText = `Hello Deepan Mills, I would like to order *${prod.name}* (${displayWeight}) x ${currentQuickViewState.quantity}. Please confirm availability and dispatch details.`;
  const waUrl = `https://wa.me/916379790035?text=${encodeURIComponent(waOrderText)}`;

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

      <!-- Right Column: Details, Nutrition, Weight, Price & Add -->
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

        <!-- PACK WEIGHT & MANUAL KG SELECTOR -->
        <div class="pt-2 border-t border-stone-200">
          <div class="flex items-center justify-between mb-2">
            <label class="text-xs font-black uppercase tracking-wider text-stone-800 flex items-center gap-1.5">
              <i data-lucide="scale" class="w-3.5 h-3.5 text-amber-700"></i>
              <span>Select Pack Size or Custom Kg:</span>
            </label>
            <span class="text-[10px] text-stone-400 font-semibold">Direct Mill Dispatch</span>
          </div>

          <div class="grid grid-cols-${prod.variants.length + 1} gap-2">
            ${prod.variants.map((v, idx) => `
              <button type="button" 
                      onclick="selectQuickViewVariant(${idx})" 
                      class="py-2.5 px-3 rounded-xl text-center transition-all ${
                        !currentQuickViewState.isManual && idx === currentQuickViewState.variantIdx 
                          ? 'bg-[#142E23] text-white shadow-md ring-2 ring-amber-400' 
                          : 'bg-stone-100 hover:bg-stone-200 text-stone-700 border border-stone-200'
                      }">
                <span class="block text-xs font-black">${v.weight}</span>
              </button>
            `).join('')}
            <button type="button" 
                    onclick="toggleQuickViewManualWeight(true)" 
                    class="py-2.5 px-3 rounded-xl text-center transition-all flex items-center justify-center gap-1.5 ${
                      currentQuickViewState.isManual 
                        ? 'bg-[#142E23] text-white shadow-md ring-2 ring-amber-400' 
                        : 'bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-300'
                    }">
              <i data-lucide="edit-3" class="w-3.5 h-3.5 text-amber-600"></i>
              <span class="text-xs font-black">Manual Kg</span>
            </button>
          </div>

          <!-- Manual Weight Input Field -->
          <div id="manual-weight-container" class="mt-2.5 p-3 rounded-2xl border transition-all ${
            currentQuickViewState.isManual 
              ? 'bg-amber-50/90 border-amber-300 shadow-sm' 
              : 'bg-stone-50 border-stone-200'
          }">
            <div class="flex items-center justify-between mb-1.5">
              <label for="manual-weight-input" class="text-xs font-bold text-stone-800 flex items-center gap-1.5">
                <i data-lucide="pencil" class="w-3.5 h-3.5 text-amber-700"></i>
                <span>Manual Custom Weight / Bulk Quantity:</span>
              </label>
              ${currentQuickViewState.isManual ? `
                <span class="text-[10px] font-bold text-amber-800 bg-amber-200/80 px-2 py-0.5 rounded-md">Active Selection</span>
              ` : `
                <button type="button" onclick="toggleQuickViewManualWeight(true)" class="text-[10px] font-bold text-amber-700 hover:text-amber-900 underline">Switch to Manual</button>
              `}
            </div>
            <div class="flex items-center gap-2">
              <input type="text" 
                     id="manual-weight-input" 
                     value="${currentQuickViewState.manualWeight || ''}"
                     placeholder="e.g. 10 Kg, 25 Kg, 50 Kg bag, 2.5 Litres" 
                     class="flex-1 px-3 py-2 rounded-xl border border-stone-300 bg-white text-xs font-semibold text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#142E23]"
                     onfocus="toggleQuickViewManualWeight(true, false)"
                     oninput="handleQuickViewManualWeightChange(this.value)">
            </div>
            <p class="text-[10px] text-stone-500 mt-1">Specify custom weight or bulk sacks. We mill fresh and pack as per your exact requirement.</p>
          </div>
        </div>

        <!-- ORDER SELECTION CARD (NO PRICES DISPLAYED) -->
        <div class="p-4 bg-emerald-50/70 rounded-2xl border border-emerald-200 shadow-sm space-y-3">
          <div class="flex items-center justify-between">
            <span class="text-xs font-bold text-stone-700 uppercase tracking-wider">
              Selected Pack: <strong id="quickview-selected-pack-display" class="text-[#142E23] text-sm">${displayWeight}</strong>
            </span>
            <span class="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-900 text-[10px] font-bold flex items-center gap-1 shadow-sm">
              <i data-lucide="check" class="w-3 h-3 text-emerald-700"></i>
              <span>Fresh Theni Batch</span>
            </span>
          </div>

          <!-- Quantity Selector -->
          <div class="flex items-center justify-between pt-1">
            <div class="flex items-center gap-2">
              <span class="text-xs font-bold text-stone-700">Quantity:</span>
              <div class="flex items-center border border-stone-300 rounded-xl bg-white overflow-hidden shadow-sm">
                <button type="button" onclick="changeQuickViewQty(-1)" class="px-3 py-1 text-stone-600 hover:bg-stone-100 font-bold text-sm transition-colors">-</button>
                <span class="px-3.5 py-1 text-xs font-black text-stone-900">${currentQuickViewState.quantity}</span>
                <button type="button" onclick="changeQuickViewQty(1)" class="px-3 py-1 text-stone-600 hover:bg-stone-100 font-bold text-sm transition-colors">+</button>
              </div>
            </div>

            <div class="text-right">
              <span class="text-[10px] text-stone-400 block uppercase font-bold">Total Pack Size</span>
              <span id="quickview-total-weight-display" class="text-sm font-black text-[#142E23]">${displayWeight} × ${currentQuickViewState.quantity}</span>
            </div>
          </div>

          <div class="flex items-center gap-1.5 text-[11px] text-emerald-800 font-semibold pt-1 border-t border-emerald-200/60">
            <i data-lucide="shield-check" class="w-3.5 h-3.5 text-emerald-700"></i>
            <span>100% Unpolished & Traditional Cold Processed in Theni</span>
          </div>
        </div>

        <!-- WHATSAPP DIRECT ORDER ACTIONS -->
        <div class="space-y-2 pt-2">
          <a id="quickview-wa-btn"
             href="${waUrl}"
             target="_blank"
             class="w-full py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-slate-950 font-black text-sm shadow-md hover:shadow-lg flex items-center justify-center gap-2 transition-all hover:scale-[1.01] active:scale-95">
            <i data-lucide="message-circle" class="w-5 h-5 text-slate-950"></i>
            <span>Order via WhatsApp (+91 63797 90035)</span>
          </a>

          <button type="button"
                  onclick="addQuickViewToCart()" 
                  class="w-full py-2.5 px-4 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold text-xs border border-stone-200 flex items-center justify-center gap-2 transition-all">
            <i data-lucide="plus" class="w-4 h-4 text-emerald-800"></i>
            <span>Add to Multi-Item Order List</span>
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
  const list = window.TESTIMONIALS || (typeof TESTIMONIALS !== 'undefined' ? TESTIMONIALS : []);
  if (!container || list.length === 0) return;

  container.innerHTML = list.map(t => `
    <div class="p-6 rounded-3xl bg-white border border-[#CEE1D5] flex flex-col justify-between space-y-4 shadow-sm hover:shadow-md hover:border-emerald-400 transition-all">
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
      const trimmed = searchQuery.trim();
      if (clearSearchBtn) {
        if (trimmed.length > 0) {
          clearSearchBtn.classList.remove('hidden');
        } else {
          clearSearchBtn.classList.add('hidden');
        }
      }

      // If user starts searching, ensure category pills visually reflect searching across all products
      if (trimmed.length > 0 && currentCategory !== 'all') {
        currentCategory = 'all';
        document.querySelectorAll('.cat-pill').forEach(b => {
          b.classList.remove('active', 'bg-[#142E23]', 'text-white');
          b.classList.add('bg-white', 'text-stone-700');
        });
        const allBtn = document.querySelector('.cat-pill[data-category="all"]');
        if (allBtn) {
          allBtn.classList.add('active', 'bg-[#142E23]', 'text-white');
          allBtn.classList.remove('bg-white', 'text-stone-700');
        }
      }

      renderProducts();
    });

    searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        searchInput.blur();
      } else if (e.key === 'Escape') {
        searchInput.value = '';
        searchQuery = '';
        if (clearSearchBtn) clearSearchBtn.classList.add('hidden');
        renderProducts();
        searchInput.blur();
      }
    });
  }

  if (clearSearchBtn && searchInput) {
    clearSearchBtn.addEventListener('click', () => {
      searchInput.value = '';
      searchQuery = '';
      clearSearchBtn.classList.add('hidden');
      renderProducts();
      searchInput.focus();
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

  // Escape key listener to dismiss open modals gracefully
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closePoliciesModal();
      closeQuickView();
      if (typeof closeSuccessModal === 'function') closeSuccessModal();
      toggleCartDrawer(false);
    }
  });
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

// Quick Search Helper
function focusSearch() {
  const input = document.getElementById('product-search-input');
  if (input) {
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
    setTimeout(() => {
      input.focus();
      input.select();
    }, 350);
  }
}
window.focusSearch = focusSearch;

