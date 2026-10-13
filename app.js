// Deepan Mills - Interactive Application Logic
// Handles catalog browsing, variant pricing, slide-over cart, checkout & WhatsApp ordering

// --- STATE MANAGEMENT ---
let cart = [];
let currentCategory = 'all';
let currentDietTag = null;
let searchQuery = '';
const selectedVariantMap = {}; // Maps productId -> variant index

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  // Load saved cart from localStorage
  try {
    const savedCart = localStorage.getItem('deepan_mills_cart');
    if (savedCart) {
      cart = JSON.parse(savedCart);
    }
  } catch (e) {
    console.error('Error loading cart from storage', e);
    cart = [];
  }

  // Set default variants (default to 0th variant)
  PRODUCTS.forEach(p => {
    selectedVariantMap[p.id] = 0;
  });

  // Render initial elements
  renderProducts();
  renderTestimonials();
  updateCartUI();
  setupEventListeners();

  // Initialize Lucide icons
  if (window.lucide) {
    window.lucide.createIcons();
  }
});

// Save cart helper
function saveCart() {
  try {
    localStorage.setItem('deepan_mills_cart', JSON.stringify(cart));
  } catch (e) {
    console.error('Error saving cart', e);
  }
}

// --- RENDER PRODUCTS ---
function renderProducts() {
  const container = document.getElementById('products-grid');
  const emptyView = document.getElementById('no-products-view');
  if (!container) return;

  // Filter products
  const filtered = PRODUCTS.filter(prod => {
    // Category match
    const catMatch = currentCategory === 'all' || prod.category === currentCategory;

    // Search query match (search name, tamilName, shortDesc, tags)
    const q = searchQuery.toLowerCase().trim();
    const searchMatch = !q || 
      prod.name.toLowerCase().includes(q) || 
      prod.tamilName.toLowerCase().includes(q) || 
      prod.shortDesc.toLowerCase().includes(q) ||
      prod.tags.some(t => t.toLowerCase().includes(q));

    // Dietary filter tag match
    const tagMatch = !currentDietTag || 
      prod.tags.some(t => t.toLowerCase().includes(currentDietTag.toLowerCase()));

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
    const currentVariant = prod.variants[activeVarIdx] || prod.variants[0];
    const discountPercent = Math.round(((currentVariant.mrp - currentVariant.price) / currentVariant.mrp) * 100);

    return `
      <div class="product-card bg-white rounded-3xl p-4 flex flex-col justify-between group" data-product-id="${prod.id}">
        
        <div>
          <!-- Image and Badges -->
          <div class="relative rounded-2xl overflow-hidden aspect-[4/3] bg-stone-100 mb-3.5">
            <img src="${prod.image}" 
                 alt="${prod.name}" 
                 loading="lazy"
                 class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
            
            <!-- Category/Special Badge -->
            <div class="absolute top-2.5 left-2.5">
              <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                prod.badge === 'Bestseller' ? 'bg-amber-500 text-stone-950' :
                prod.badge === 'Low GI' ? 'bg-emerald-600 text-white' :
                'bg-[#19382B] text-amber-200'
              } shadow-sm">
                ${prod.badge}
              </span>
            </div>

            <!-- Quick View Icon Button -->
            <button onclick="openQuickView('${prod.id}')" 
                    title="Quick Details & Nutrition"
                    class="absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm text-stone-700 flex items-center justify-center hover:bg-white hover:text-stone-900 shadow transition-all">
              <i data-lucide="eye" class="w-4 h-4"></i>
            </button>
            
            <!-- Savings Badge -->
            ${discountPercent > 0 ? `
              <div class="absolute bottom-2.5 left-2.5 px-2 py-0.5 rounded-md bg-rose-600 text-white text-[10px] font-black tracking-wider shadow">
                SAVE ${discountPercent}%
              </div>
            ` : ''}
          </div>

          <!-- Title & Tamil Name -->
          <div class="space-y-1 mb-2">
            <div class="flex items-center gap-1 text-[11px] font-semibold text-amber-700">
              <i data-lucide="sparkles" class="w-3 h-3"></i>
              <span>${prod.tamilName}</span>
            </div>
            <h3 class="font-heading font-bold text-base text-stone-900 leading-snug">
              ${prod.name}
            </h3>
            <p class="text-xs text-stone-500 line-clamp-2 leading-relaxed">
              ${prod.shortDesc}
            </p>
          </div>

          <!-- Health Tags -->
          <div class="flex flex-wrap gap-1.5 mb-3">
            ${prod.tags.slice(0, 2).map(tag => `
              <span class="text-[10px] font-medium px-2 py-0.5 rounded-md bg-stone-100 text-stone-600 border border-stone-200">
                ${tag}
              </span>
            `).join('')}
          </div>
        </div>

        <div>
          <!-- Weight Selection Pills -->
          <div class="mb-3.5">
            <span class="block text-[10px] font-bold uppercase tracking-wider text-stone-400 mb-1.5">Select Pack Weight:</span>
            <div class="grid grid-cols-${prod.variants.length} gap-1.5">
              ${prod.variants.map((v, idx) => `
                <button type="button" 
                        onclick="selectProductVariant('${prod.id}', ${idx})" 
                        class="weight-pill text-xs font-semibold py-1.5 px-2 rounded-xl border text-center transition-all ${
                          idx === activeVarIdx 
                            ? 'bg-[#19382B] text-white border-[#19382B] shadow-sm' 
                            : 'bg-stone-50 text-stone-700 border-stone-200 hover:border-stone-400'
                        }">
                  ${v.weight}
                </button>
              `).join('')}
            </div>
          </div>

          <!-- Price & Action Button -->
          <div class="pt-3 border-t border-stone-100 flex items-center justify-between gap-2">
            <div>
              <div class="flex items-baseline gap-1.5">
                <span class="text-lg font-black text-[#19382B]">₹${currentVariant.price}</span>
                <span class="text-xs text-stone-400 line-through">₹${currentVariant.mrp}</span>
              </div>
              <span class="text-[10px] text-stone-400 font-medium">Milled Fresh</span>
            </div>

            <div class="flex items-center gap-1.5">
              <button onclick="addToCart('${prod.id}', ${activeVarIdx}, 1)" 
                      class="px-3.5 py-2 rounded-xl bg-[#19382B] hover:bg-[#132C22] text-white text-xs font-bold flex items-center gap-1 shadow-sm transition-all hover:scale-105 active:scale-95"
                      title="Add to shopping basket">
                <i data-lucide="plus" class="w-3.5 h-3.5 text-amber-300"></i>
                <span>Add</span>
              </button>
              
              <button onclick="buyNow('${prod.id}', ${activeVarIdx})" 
                      class="px-2.5 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-stone-950 text-xs font-extrabold shadow-sm transition-all hover:scale-105 active:scale-95"
                      title="Instant Buy Now">
                <i data-lucide="zap" class="w-3.5 h-3.5"></i>
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

// Select weight variant for a product
function selectProductVariant(productId, variantIdx) {
  selectedVariantMap[productId] = variantIdx;
  renderProducts();
}

// --- CART FUNCTIONALITY ---
function addToCart(productId, variantIdx, quantity = 1) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const variant = product.variants[variantIdx] || product.variants[0];

  // Check if item with same productId and same weight already exists
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

  // Show Toast
  showToast(`Added ${product.name} (${variant.weight}) to your basket!`, 'success');

  // Trigger Bump Animation
  const cartBtn = document.getElementById('cart-toggle-btn');
  if (cartBtn) {
    cartBtn.classList.remove('animate-cart-bump');
    void cartBtn.offsetWidth; // Trigger reflow
    cartBtn.classList.add('animate-cart-bump');
  }
}

// Quick Add helper
function quickAdd(productId) {
  addToCart(productId, 0, 1);
  toggleCartDrawer(true);
}

// Buy Now helper (Adds to cart and immediately opens checkout)
function buyNow(productId, variantIdx) {
  addToCart(productId, variantIdx, 1);
  openCheckoutModal();
}

// Update Cart UI everywhere
function updateCartUI() {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  // Delivery rule: Free if subtotal >= 799, otherwise ₹60 (unless subtotal is 0)
  const isFreeDelivery = subtotal >= 799 || subtotal === 0;
  const deliveryFee = subtotal === 0 ? 0 : (subtotal >= 799 ? 0 : 60);
  const totalAmount = subtotal + deliveryFee;

  // Header badges
  const badge = document.getElementById('cart-count-badge');
  const headerTotal = document.getElementById('header-cart-total');
  const mobileCount = document.getElementById('mobile-cart-count');
  const drawerCount = document.getElementById('cart-drawer-count');

  if (badge) badge.innerText = totalItems;
  if (headerTotal) headerTotal.innerText = `• ₹${subtotal}`;
  if (mobileCount) mobileCount.innerText = totalItems;
  if (drawerCount) drawerCount.innerText = totalItems;

  // Cart summary amounts
  const subtotalElem = document.getElementById('cart-subtotal');
  const deliveryElem = document.getElementById('cart-delivery-fee');
  const totalElem = document.getElementById('cart-total-amount');

  if (subtotalElem) subtotalElem.innerText = `₹${subtotal}`;
  if (deliveryElem) deliveryElem.innerText = isFreeDelivery ? 'FREE (Special Offer)' : `₹${deliveryFee}`;
  if (totalElem) totalElem.innerText = `₹${totalAmount}`;

  // Shipping Progress Tracker (Threshold ₹799)
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

  // Render items in Drawer list
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
        <!-- Quantity controls -->
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

// Quantity change handler
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

// Remove single cart item
function removeCartItem(index) {
  if (cart[index]) {
    cart.splice(index, 1);
    saveCart();
    updateCartUI();
  }
}

// Slide-Over Drawer Toggle
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

  let msg = `*🌾 Deepan Mills - New Customer Order Request*\n`;
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

  // Close drawer if open
  toggleCartDrawer(false);

  const modal = document.getElementById('checkout-modal');
  const totalElem = document.getElementById('checkout-modal-total');
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const total = subtotal >= 799 ? subtotal : subtotal + 60;

  if (totalElem) totalElem.innerText = `₹${total}`;

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
  // Toggle active radio pill borders
  document.querySelectorAll('.pay-option').forEach(el => {
    el.classList.remove('border-emerald-600', 'bg-emerald-50/50');
    el.classList.add('border-stone-200');
  });

  const selectedRadio = document.querySelector(`input[name="payment_method"][value="${method}"]`);
  if (selectedRadio) {
    selectedRadio.closest('.pay-option').classList.add('border-emerald-600', 'bg-emerald-50/50');
  }

  // Hide all dynamic boxes
  document.getElementById('pay-box-upi').classList.add('hidden');
  document.getElementById('pay-box-card').classList.add('hidden');
  document.getElementById('pay-box-cod').classList.add('hidden');

  // Show targeted
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

  // Prepare invoice modal data
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

  // Close checkout modal & clear cart
  closeCheckoutModal();
  cart = [];
  saveCart();
  updateCartUI();

  // Show success modal
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

// --- QUICK VIEW MODAL ---
function openQuickView(productId) {
  const prod = PRODUCTS.find(p => p.id === productId);
  if (!prod) return;

  const content = document.getElementById('quickview-content');
  const modal = document.getElementById('quickview-modal');

  content.innerHTML = `
    <div class="flex justify-between items-start pb-4 border-b border-stone-200">
      <div>
        <span class="text-xs font-bold text-amber-700">${prod.tamilName}</span>
        <h3 class="font-heading font-extrabold text-2xl text-[#19382B]">${prod.name}</h3>
      </div>
      <button onclick="closeQuickView()" class="p-2 rounded-xl text-stone-400 hover:text-stone-700 hover:bg-stone-100">
        <i data-lucide="x" class="w-5 h-5"></i>
      </button>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 items-center">
      <div class="rounded-2xl overflow-hidden aspect-[4/3] bg-stone-100 border border-stone-200">
        <img src="${prod.image}" alt="${prod.name}" class="w-full h-full object-cover">
      </div>

      <div class="space-y-4">
        <p class="text-xs text-stone-600 leading-relaxed">${prod.shortDesc}</p>
        
        <div class="p-3 bg-emerald-50 rounded-xl border border-emerald-200">
          <span class="block text-[11px] font-bold text-emerald-950 uppercase tracking-wider">Health Advantage</span>
          <p class="text-xs text-emerald-800 mt-0.5">${prod.healthBenefit}</p>
        </div>

        <div class="p-3 bg-amber-50 rounded-xl border border-amber-200">
          <span class="block text-[11px] font-bold text-amber-950 uppercase tracking-wider">Recommended Cooking Ratio</span>
          <p class="text-xs text-amber-800 mt-0.5">${prod.cookingRatio}</p>
        </div>

        <!-- Nutrition Highlights -->
        <div class="grid grid-cols-4 gap-2 text-center pt-1">
          <div class="bg-stone-50 p-2 rounded-xl border border-stone-200">
            <span class="text-[10px] text-stone-400 block">Calories</span>
            <span class="text-xs font-extrabold text-stone-800">${prod.nutrition.calories}</span>
          </div>
          <div class="bg-stone-50 p-2 rounded-xl border border-stone-200">
            <span class="text-[10px] text-stone-400 block">Fiber</span>
            <span class="text-xs font-extrabold text-stone-800">${prod.nutrition.fiber}</span>
          </div>
          <div class="bg-stone-50 p-2 rounded-xl border border-stone-200">
            <span class="text-[10px] text-stone-400 block">Protein</span>
            <span class="text-xs font-extrabold text-stone-800">${prod.nutrition.protein}</span>
          </div>
          <div class="bg-stone-50 p-2 rounded-xl border border-stone-200">
            <span class="text-[10px] text-stone-400 block">Iron/Minerals</span>
            <span class="text-xs font-extrabold text-stone-800">${prod.nutrition.iron}</span>
          </div>
        </div>

        <div class="pt-2 flex items-center gap-3">
          <button onclick="addToCart('${prod.id}', 0, 1); closeQuickView(); toggleCartDrawer(true);" class="flex-1 py-3 rounded-xl bg-[#19382B] hover:bg-[#132C22] text-white font-bold text-xs shadow flex items-center justify-center gap-2">
            <i data-lucide="plus" class="w-4 h-4 text-amber-300"></i>
            <span>Add 500g to Cart (₹${prod.variants[0].price})</span>
          </button>
        </div>
      </div>
    </div>
  `;

  if (window.lucide) {
    window.lucide.createIcons();
  }

  modal.classList.remove('opacity-0', 'pointer-events-none');
  modal.classList.add('opacity-100', 'pointer-events-auto');
  document.body.classList.add('overflow-hidden');
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
        <!-- 5 Stars -->
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
  // Cart toggle
  const cartToggleBtn = document.getElementById('cart-toggle-btn');
  if (cartToggleBtn) {
    cartToggleBtn.addEventListener('click', () => toggleCartDrawer(true));
  }

  // Mobile menu toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileNavPanel = document.getElementById('mobile-nav-panel');
  if (mobileMenuBtn && mobileNavPanel) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileNavPanel.classList.toggle('hidden');
    });
  }

  // Close drawers when clicking outside
  const cartOverlay = document.getElementById('cart-drawer-overlay');
  if (cartOverlay) {
    cartOverlay.addEventListener('click', (e) => {
      if (e.target === cartOverlay) {
        toggleCartDrawer(false);
      }
    });
  }

  // Category filter tabs
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

  // Dietary tags
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

  // Live Search
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
