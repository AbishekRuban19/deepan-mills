# 🌾 Deepan Mills - Modern E-Commerce Web Application

A clean, high-performance, and elegant e-commerce website redesign for **Deepan Mills** (Theni, Tamil Nadu).

Designed specifically to avoid the cluttered, outdated ("kasa kasa") look of traditional templates. Built with a warm, minimalist organic aesthetic, full product catalog with weight-based dynamic pricing, slide-over cart drawer, UPI/Card/COD simulated payment gateway, and 1-click WhatsApp order generation.

---

## 📁 Project Structure (All Source Code Files)

```text
deepan-mills/
├── index.html        # Main semantic HTML5 structure, responsive layout & modals
├── styles.css        # Luxury organic typography, color variables, animations & invoice print styles
├── products.js       # Authentic Tamil Nadu product database (Tamil names, weights, prices, nutrition)
├── app.js            # Reactive application logic (Cart, Variant pricing, Search, WhatsApp & Checkout)
├── package.json      # Quick dev server script for team leads & npm users
└── README.md         # Documentation & handover instructions
```

---

## 💻 How to Open and Work with VS Code

### Step 1: Open the Project in VS Code
1. Open **Visual Studio Code**.
2. Click **File** > **Open Folder...** (or press `Ctrl + K Ctrl + O`).
3. Browse to and select:
   ```text
   C:\Users\abish\.gemini\antigravity\scratch\deepan-mills
   ```
4. Or, in your terminal / command prompt, run:
   ```bash
   code "C:\Users\abish\.gemini\antigravity\scratch\deepan-mills"
   ```

### Step 2: How to Preview and Run the Website
You have three easy ways to run the website:

- **Option A (Instant - Zero Install):**
  Simply double-click `index.html` in Windows File Explorer or in VS Code to open it directly in Google Chrome / Edge / Firefox.

- **Option B (VS Code Live Server extension):**
  If you have the popular **Live Server** extension installed in VS Code:
  Right-click `index.html` inside VS Code and choose **"Open with Live Server"**.

- **Option C (Using Terminal / npm):**
  Inside the VS Code terminal (`Ctrl + ~`), run:
  ```bash
  npm start
  ```
  Then open `http://localhost:3000` in your browser.

---

## 🌟 Key Features Built for the Client

1. **"Not Kasa Kasa" Clean Aesthetics**:
   - Palette inspired by natural organic brands: Heritage Forest Green (`#19382B`), Harvest Amber (`#D97706`), Warm Oatmeal Canvas (`#FAF7F2`).
   - Clean spacing, readable typography (Outfit + Plus Jakarta Sans + Playfair Display).
2. **Authentic Theni Mills Catalog**:
   - 12 authentic regional staples: **Karuppu Kavuni Black Rice**, **Mappillai Samba Red Rice**, **Poongar Rice**, **Kuthiraivali (Barnyard)**, **Thinai (Foxtail)**, **Varagu (Kodo)**, **Vaagai Wood-Pressed Sesame & Groundnut Oils**, **Sprouted Ragi Flour**, and **24-Grain Health Mix**.
   - Includes authentic Tamil names (e.g., `பாரம்பரிய கருப்பு கவுனி அரிசி`).
3. **Dynamic Weight & Price Selector**:
   - Customers can switch between **500g**, **1 Kg**, and **5 Kg** packs on any product card.
   - Price and savings badge update instantly without refreshing the page.
4. **Slide-Over Cart Drawer**:
   - Quantity controls, instant subtotal calculation.
   - **Free Shipping Progress Tracker**: Dynamic progress bar toward the ₹799 free shipping threshold.
   - Persistent Cart: Saved in browser `localStorage` so items aren't lost on refresh.
5. **Two Purchase Flows**:
   - **Flow A - Simulated Indian Payment Gateway**:
     - Customer enters delivery address.
     - Supports **UPI QR Code** (GPay / PhonePe / Paytm to `deepanmills@okaxis`), **Credit/Debit Cards**, and **Cash on Delivery (COD)**.
     - Generates an instant Order ID (`#DM-XXXXX`) and printable/downloadable invoice.
   - **Flow B - 1-Click WhatsApp Order**:
     - Essential for Indian mill customers! Pre-formats the complete bill with quantities, prices, and delivery total, redirecting straight to the mill's hotline (`+91 63797 90035`).
6. **Traditional Grain & Health Science Guide**:
   - Interactive comparison table comparing polished white supermarket rice vs traditional Theni grains (Glycemic Index, Dietary Fiber, Cooking Water Ratios).
7. **Credentials & Trust**:
   - Prominently showcases the client's **MSME Best Entrepreneur Award** and **Grameena Award**.

---

## 🤝 Handing Over to Your Team Lead / Client

When your team lead or client asks for the deliverables:
1. **Source Code**:
   Zip the `deepan-mills` folder and share it, or push it to your GitHub/GitLab repository.
2. **Live Deployment (100% Free)**:
   - You can drag-and-drop this folder directly into [Netlify Drop](https://app.netlify.com/drop) or [Vercel](https://vercel.com) to get a live, working URL in 30 seconds to share with your client on WhatsApp or email.
