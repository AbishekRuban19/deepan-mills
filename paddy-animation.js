/**
 * Deepan Mills - Realistic Moving Paddy Field Wind Animation Canvas
 * 
 * Simulates a lush green South Indian (Theni, Tamil Nadu) rice paddy field gently swaying in the breeze:
 * - Natural individual rice plants & tillers swaying left and right with depth and perspective.
 * - Multi-tier perspective: Distant field terraces (40-60%), Mid-field rows (58-80%), Foreground clumps (78-100%).
 * - Traveling wind wave propagation (wind ripples / காற்றில் அலையடிக்கும் நெற்பயிர்) passing across crops.
 * - Drooping golden-green grain panicles (நெற்கதிர்) with individual husked grains and slender blade leaves.
 * - Sunlit wind wave shimmer reflecting off leaves as wind bends them towards the morning light.
 * - Floating sunlit pollen motes in warm Tamil Nadu agricultural atmosphere.
 * - Performance optimized: pauses when offscreen via IntersectionObserver, respects prefers-reduced-motion.
 */

(function () {
  'use strict';

  const CONFIG = {
    bgClumpCount: 55,
    midClumpCount: 45,
    fgClumpCount: 30,
    pollenCount: 22,
    windBaseSpeed: 1.4,        // rad/s
    waveFrequency: 0.0022,     // wave spatial frequency
    gustPeriod: 0.28,          // slow ambient gust variation
    maxPixelRatio: 2
  };

  class PaddyFieldAnimation {
    constructor(canvasId) {
      this.canvas = document.getElementById(canvasId);
      if (!this.canvas) return;

      this.ctx = this.canvas.getContext('2d', { alpha: true });
      if (!this.ctx) return;

      this.isRunning = false;
      this.animationFrameId = null;
      this.lastTime = 0;
      this.elapsedTime = 0;
      this.reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      this.bgClumps = [];
      this.midClumps = [];
      this.fgClumps = [];
      this.pollen = [];

      this.init();
    }

    init() {
      this.resize();
      this.createClumps();
      this.createPollen();

      // Handle window resize smoothly
      let resizeTimeout;
      window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
          this.resize();
          this.createClumps();
          this.createPollen();
          if (this.reducedMotion) this.renderStaticFrame();
        }, 150);
      });

      // Handle prefers-reduced-motion changes
      const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      motionQuery.addEventListener?.('change', (e) => {
        this.reducedMotion = e.matches;
        if (this.reducedMotion) {
          this.stop();
          this.renderStaticFrame();
        } else {
          this.start();
        }
      });

      // Pause when hero section is not visible on screen
      const heroSection = document.getElementById('hero');
      if (heroSection && 'IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !this.reducedMotion) {
              this.start();
            } else {
              this.stop();
            }
          });
        }, { threshold: 0.05 });
        observer.observe(heroSection);
      } else {
        if (!this.reducedMotion) this.start();
      }

      // Page visibility API (pause when tab hidden)
      document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
          this.stop();
        } else if (!this.reducedMotion) {
          this.start();
        }
      });

      if (this.reducedMotion) {
        this.renderStaticFrame();
      }
    }

    resize() {
      const rect = this.canvas.parentElement.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, CONFIG.maxPixelRatio);

      this.width = rect.width;
      this.height = rect.height;

      this.canvas.width = Math.round(this.width * dpr);
      this.canvas.height = Math.round(this.height * dpr);

      this.ctx.resetTransform?.();
      this.ctx.scale(dpr, dpr);
    }

    // Create realistic clumps (hills of rice / குத்து நெல்) across 3 depth tiers
    createClumps() {
      const w = this.width;
      const h = this.height;

      this.bgClumps = [];
      this.midClumps = [];
      this.fgClumps = [];

      // 1. Far Tier: Field rows from y = 42% to 62%
      for (let i = 0; i < CONFIG.bgClumpCount; i++) {
        const x = (i / CONFIG.bgClumpCount) * w + (Math.random() - 0.5) * (w / CONFIG.bgClumpCount) * 1.2;
        const yBase = h * 0.44 + Math.random() * (h * 0.18);
        const baseHeight = h * 0.10 + Math.random() * (h * 0.08);
        const tillerCount = 2 + Math.floor(Math.random() * 3);
        const tillers = [];

        for (let t = 0; t < tillerCount; t++) {
          const fanAngle = (t - (tillerCount - 1) / 2) * 0.09 + (Math.random() - 0.5) * 0.04;
          tillers.push({
            height: baseHeight * (0.85 + Math.random() * 0.3),
            tilt: fanAngle,
            speed: 0.85 + Math.random() * 0.35,
            phase: Math.random() * Math.PI * 2,
            stiffness: 0.7 + Math.random() * 0.5,
            color: Math.random() > 0.5 ? '#3C7348' : '#498254',
            width: 1.1 + Math.random() * 0.6
          });
        }
        this.bgClumps.push({ x, y: yBase, tillers });
      }

      // 2. Mid Tier: Vibrant green rows from y = 58% to 80%
      for (let i = 0; i < CONFIG.midClumpCount; i++) {
        const x = (i / CONFIG.midClumpCount) * w + (Math.random() - 0.5) * (w / CONFIG.midClumpCount) * 1.2;
        const yBase = h * 0.58 + Math.random() * (h * 0.22);
        const baseHeight = h * 0.18 + Math.random() * (h * 0.12);
        const tillerCount = 3 + Math.floor(Math.random() * 3);
        const tillers = [];

        for (let t = 0; t < tillerCount; t++) {
          const fanAngle = (t - (tillerCount - 1) / 2) * 0.11 + (Math.random() - 0.5) * 0.05;
          const height = baseHeight * (0.88 + Math.random() * 0.28);
          
          // Leaves along tiller
          const leaves = [];
          const leafCount = 1 + Math.floor(Math.random() * 2);
          for (let l = 0; l < leafCount; l++) {
            leaves.push({
              attachRatio: 0.35 + Math.random() * 0.45,
              length: height * (0.42 + Math.random() * 0.28),
              side: l % 2 === 0 ? 1 : -1,
              spread: 0.45 + Math.random() * 0.4,
              phaseOffset: Math.random() * 1.5
            });
          }

          tillers.push({
            height,
            tilt: fanAngle,
            speed: 0.95 + Math.random() * 0.4,
            phase: Math.random() * Math.PI * 2,
            stiffness: 0.85 + Math.random() * 0.4,
            color: Math.random() > 0.4 ? '#2E663B' : '#397B48',
            grainColor: '#CBB258',
            width: 1.6 + Math.random() * 0.8,
            hasPanicle: Math.random() > 0.35,
            panicleSide: Math.random() > 0.5 ? 1 : -1,
            leaves
          });
        }
        this.midClumps.push({ x, y: yBase, tillers });
      }

      // 3. Foreground Tier: Prominent, detailed stalks & golden panicles from y = 78% to 102%
      for (let i = 0; i < CONFIG.fgClumpCount; i++) {
        const x = (i / CONFIG.fgClumpCount) * w + (Math.random() - 0.5) * (w / CONFIG.fgClumpCount) * 1.1;
        const yBase = h * 0.80 + Math.random() * (h * 0.22);
        const baseHeight = h * 0.28 + Math.random() * (h * 0.16);
        const tillerCount = 3 + Math.floor(Math.random() * 3);
        const tillers = [];

        for (let t = 0; t < tillerCount; t++) {
          const fanAngle = (t - (tillerCount - 1) / 2) * 0.14 + (Math.random() - 0.5) * 0.06;
          const height = baseHeight * (0.9 + Math.random() * 0.25);
          
          const leaves = [];
          const leafCount = 2 + Math.floor(Math.random() * 2);
          for (let l = 0; l < leafCount; l++) {
            leaves.push({
              attachRatio: 0.3 + Math.random() * 0.5,
              length: height * (0.45 + Math.random() * 0.35),
              side: l % 2 === 0 ? 1 : -1,
              spread: 0.5 + Math.random() * 0.55,
              phaseOffset: Math.random() * 1.8
            });
          }

          tillers.push({
            height,
            tilt: fanAngle,
            speed: 1.05 + Math.random() * 0.4,
            phase: Math.random() * Math.PI * 2,
            stiffness: 1.0 + Math.random() * 0.35,
            color: '#1C4F2B',
            highlightColor: '#439452',
            grainColor: '#D4B84D',
            grainAccent: '#E8D272',
            width: 2.4 + Math.random() * 1.2,
            grainCount: 7 + Math.floor(Math.random() * 5),
            hasPanicle: true,
            panicleSide: Math.random() > 0.45 ? 1 : -1,
            leaves
          });
        }
        this.fgClumps.push({ x, y: yBase, tillers });
      }
    }

    createPollen() {
      this.pollen = [];
      const w = this.width;
      const h = this.height;
      for (let i = 0; i < CONFIG.pollenCount; i++) {
        this.pollen.push({
          x: Math.random() * w,
          y: h * 0.25 + Math.random() * (h * 0.7),
          radius: 0.9 + Math.random() * 1.6,
          speedX: 0.35 + Math.random() * 0.65,
          speedY: (Math.random() - 0.5) * 0.2,
          alpha: 0.2 + Math.random() * 0.45,
          pulseSpeed: 1.2 + Math.random() * 2,
          pulsePhase: Math.random() * Math.PI * 2
        });
      }
    }

    // Multi-harmonic traveling wind wave passing across the field
    getWind(x, y, t) {
      // Primary wave traveling horizontally across the field
      const wave1 = Math.sin(x * CONFIG.waveFrequency - t * CONFIG.windBaseSpeed);
      // Secondary diagonal wave creating organic eddies
      const wave2 = Math.cos(x * (CONFIG.waveFrequency * 1.7) + y * 0.001 - t * (CONFIG.windBaseSpeed * 0.8) + 1.2);
      // Intermittent slow breeze gusts
      const gust = Math.sin(t * CONFIG.gustPeriod - x * 0.0005);
      const gustMultiplier = gust > 0 ? 1 + gust * 0.9 : 0.82;

      return (wave1 * 0.65 + wave2 * 0.35) * gustMultiplier;
    }

    // Warm morning sunlight glow from the Western Ghats sunrise
    drawSunlightAtmosphere() {
      const w = this.width;
      const h = this.height;

      const sunX = w * 0.85;
      const sunY = h * 0.05;
      const radius = Math.max(w, h) * 0.75;

      const grad = this.ctx.createRadialGradient(sunX, sunY, 10, sunX, sunY, radius);
      grad.addColorStop(0, 'rgba(255, 235, 160, 0.22)');
      grad.addColorStop(0.35, 'rgba(255, 242, 190, 0.10)');
      grad.addColorStop(0.7, 'rgba(250, 247, 240, 0.03)');
      grad.addColorStop(1, 'rgba(250, 247, 240, 0)');

      this.ctx.fillStyle = grad;
      this.ctx.fillRect(0, 0, w, h);
    }

    // Subtle sunlit wave shimmer travelling across the crops (bent leaves catching the sun)
    drawWindWaveShimmer(t) {
      const w = this.width;
      const h = this.height;
      const ctx = this.ctx;

      // Calculate traveling wave band center
      const waveCenter = ((t * 180) % (w + 400)) - 200;
      const waveWidth = 260;

      const grad = ctx.createLinearGradient(waveCenter - waveWidth, 0, waveCenter + waveWidth, 0);
      grad.addColorStop(0, 'rgba(235, 255, 190, 0)');
      grad.addColorStop(0.5, 'rgba(255, 245, 185, 0.07)');
      grad.addColorStop(1, 'rgba(235, 255, 190, 0)');

      ctx.save();
      ctx.fillStyle = grad;
      ctx.fillRect(0, h * 0.40, w, h * 0.60);
      ctx.restore();
    }

    // Render distant field terrace clumps
    drawBgClumps(t) {
      const ctx = this.ctx;
      ctx.save();
      ctx.lineCap = 'round';

      for (let i = 0; i < this.bgClumps.length; i++) {
        const clump = this.bgClumps[i];
        for (let j = 0; j < clump.tillers.length; j++) {
          const p = clump.tillers[j];
          const wind = this.getWind(clump.x, clump.y, t);
          const sway = (wind * 0.55 + Math.sin(t * p.speed + p.phase) * 0.25) * (p.height * 0.24) * p.stiffness;

          const tipX = clump.x + sway + p.tilt * p.height;
          const tipY = clump.y - p.height;
          const cpX = clump.x + sway * 0.35;
          const cpY = clump.y - p.height * 0.52;

          ctx.strokeStyle = p.color;
          ctx.globalAlpha = 0.58;
          ctx.lineWidth = p.width;

          ctx.beginPath();
          ctx.moveTo(clump.x, clump.y);
          ctx.quadraticCurveTo(cpX, cpY, tipX, tipY);
          ctx.stroke();
        }
      }
      ctx.restore();
    }

    // Render mid-distance rows of lush rice plants with arched leaves
    drawMidClumps(t) {
      const ctx = this.ctx;
      ctx.save();
      ctx.lineCap = 'round';

      for (let i = 0; i < this.midClumps.length; i++) {
        const clump = this.midClumps[i];
        for (let j = 0; j < clump.tillers.length; j++) {
          const p = clump.tillers[j];
          const wind = this.getWind(clump.x, clump.y, t);
          const sway = (wind * 0.72 + Math.sin(t * p.speed + p.phase) * 0.28) * (p.height * 0.26) * p.stiffness;

          const tipX = clump.x + sway + p.tilt * p.height;
          const tipY = clump.y - p.height;
          const cpX = clump.x + sway * 0.38;
          const cpY = clump.y - p.height * 0.5;

          // Main Stem
          ctx.strokeStyle = p.color;
          ctx.globalAlpha = 0.85;
          ctx.lineWidth = p.width;

          ctx.beginPath();
          ctx.moveTo(clump.x, clump.y);
          ctx.quadraticCurveTo(cpX, cpY, tipX, tipY);
          ctx.stroke();

          // Blade Leaves
          if (p.leaves) {
            for (let l = 0; l < p.leaves.length; l++) {
              const leaf = p.leaves[l];
              const r = leaf.attachRatio;
              const attachX = (1 - r) * (1 - r) * clump.x + 2 * (1 - r) * r * cpX + r * r * tipX;
              const attachY = (1 - r) * (1 - r) * clump.y + 2 * (1 - r) * r * cpY + r * r * tipY;

              const leafSway = sway * 0.65 + Math.sin(t * p.speed + p.phase + leaf.phaseOffset) * 9;
              const leafTipX = attachX + leaf.side * (leaf.length * leaf.spread) + leafSway;
              const leafTipY = attachY - leaf.length * 0.55 + Math.abs(leafSway) * 0.22;

              const leafCpX = attachX + leaf.side * (leaf.length * 0.62) * leaf.spread + leafSway * 0.5;
              const leafCpY = attachY - leaf.length * 0.6;

              ctx.lineWidth = Math.max(1, p.width * 0.7);
              ctx.beginPath();
              ctx.moveTo(attachX, attachY);
              ctx.quadraticCurveTo(leafCpX, leafCpY, leafTipX, leafTipY);
              ctx.stroke();
            }
          }

          // Developing Rice Panicle (ear)
          if (p.hasPanicle) {
            const panicleAngle = p.panicleSide * 20 + sway * 0.4;
            const earTipX = tipX + panicleAngle;
            const earTipY = tipY + 15;
            const earCpX = tipX + panicleAngle * 0.6;
            const earCpY = tipY - 4;

            ctx.strokeStyle = p.grainColor;
            ctx.lineWidth = 1.3;
            ctx.beginPath();
            ctx.moveTo(tipX, tipY);
            ctx.quadraticCurveTo(earCpX, earCpY, earTipX, earTipY);
            ctx.stroke();
          }
        }
      }
      ctx.restore();
    }

    // Render detailed foreground clumps with mature golden grain panicles
    drawFgClumps(t) {
      const ctx = this.ctx;
      ctx.save();

      for (let i = 0; i < this.fgClumps.length; i++) {
        const clump = this.fgClumps[i];
        for (let j = 0; j < clump.tillers.length; j++) {
          const p = clump.tillers[j];
          const wind = this.getWind(clump.x, clump.y, t);
          const sway = (wind * 0.88 + Math.sin(t * p.speed + p.phase) * 0.32) * (p.height * 0.30) * p.stiffness;

          const tipX = clump.x + sway + p.tilt * p.height;
          const tipY = clump.y - p.height;
          const cpX = clump.x + sway * 0.40;
          const cpY = clump.y - p.height * 0.48;

          // Strong Tiller Stem with Natural Gradient
          const stemGrad = ctx.createLinearGradient(clump.x, clump.y, tipX, tipY);
          stemGrad.addColorStop(0, p.color);
          stemGrad.addColorStop(0.65, p.highlightColor);
          stemGrad.addColorStop(1, p.grainColor);

          ctx.strokeStyle = stemGrad;
          ctx.globalAlpha = 0.95;
          ctx.lineWidth = p.width;
          ctx.lineCap = 'round';

          ctx.beginPath();
          ctx.moveTo(clump.x, clump.y);
          ctx.quadraticCurveTo(cpX, cpY, tipX, tipY);
          ctx.stroke();

          // Arching Slender Leaves
          if (p.leaves) {
            for (let l = 0; l < p.leaves.length; l++) {
              const leaf = p.leaves[l];
              const r = leaf.attachRatio;
              const attachX = (1 - r) * (1 - r) * clump.x + 2 * (1 - r) * r * cpX + r * r * tipX;
              const attachY = (1 - r) * (1 - r) * clump.y + 2 * (1 - r) * r * cpY + r * r * tipY;

              const leafSway = sway * 0.78 + Math.sin(t * p.speed + p.phase + leaf.phaseOffset) * 12;
              const leafTipX = attachX + leaf.side * (leaf.length * leaf.spread) + leafSway;
              const leafTipY = attachY - leaf.length * 0.5 + Math.abs(leafSway) * 0.28;

              const leafCpX = attachX + leaf.side * (leaf.length * 0.6) * leaf.spread + leafSway * 0.5;
              const leafCpY = attachY - leaf.length * 0.7;

              ctx.strokeStyle = leaf.side > 0 ? '#3C844E' : '#2A6A3F';
              ctx.lineWidth = Math.max(1.2, p.width * 0.68);
              ctx.beginPath();
              ctx.moveTo(attachX, attachY);
              ctx.quadraticCurveTo(leafCpX, leafCpY, leafTipX, leafTipY);
              ctx.stroke();
            }
          }

          // Mature Golden Drooping Rice Panicle (நெற்கதிர்) with individual grains
          if (p.hasPanicle) {
            const panicleBend = p.panicleSide * (28 + Math.abs(sway) * 0.38);
            const earTipX = tipX + panicleBend;
            const earTipY = tipY + 26;
            const earCpX = tipX + panicleBend * 0.62;
            const earCpY = tipY - 6;

            // Panicle central rachis
            ctx.strokeStyle = p.grainColor;
            ctx.lineWidth = 1.6;
            ctx.beginPath();
            ctx.moveTo(tipX, tipY);
            ctx.quadraticCurveTo(earCpX, earCpY, earTipX, earTipY);
            ctx.stroke();

            // Individual Golden Rice Grains
            ctx.fillStyle = p.grainAccent;
            const grains = p.grainCount;
            for (let g = 0; g < grains; g++) {
              const gr = (g + 1) / (grains + 1);
              const gx = (1 - gr) * (1 - gr) * tipX + 2 * (1 - gr) * gr * earCpX + gr * gr * earTipX;
              const gy = (1 - gr) * (1 - gr) * tipY + 2 * (1 - gr) * gr * earCpY + gr * gr * earTipY;

              const side = g % 2 === 0 ? 1 : -1;
              const angle = Math.atan2(earTipY - tipY, earTipX - tipX) + (side * 0.62);
              const grainDist = 2.6;
              const finalGx = gx + Math.cos(angle) * grainDist;
              const finalGy = gy + Math.sin(angle) * grainDist;

              ctx.save();
              ctx.translate(finalGx, finalGy);
              ctx.rotate(angle);
              ctx.beginPath();
              ctx.ellipse(0, 0, 3.0, 1.3, 0, 0, Math.PI * 2);
              ctx.fill();

              // Tiny awn tip
              ctx.strokeStyle = p.grainColor;
              ctx.lineWidth = 0.55;
              ctx.beginPath();
              ctx.moveTo(3.0, 0);
              ctx.lineTo(5.2, 0);
              ctx.stroke();
              ctx.restore();
            }
          }
        }
      }
      ctx.restore();
    }

    // Render gentle floating sunlit pollen motes
    drawPollen(t, dt) {
      const ctx = this.ctx;
      const w = this.width;
      const h = this.height;

      ctx.save();
      for (let i = 0; i < this.pollen.length; i++) {
        const dot = this.pollen[i];
        const wind = this.getWind(dot.x, dot.y, t);
        dot.x += (dot.speedX + wind * 0.4) * (dt * 60);
        dot.y += (dot.speedY + Math.sin(t * 1.5 + i) * 0.15) * (dt * 60);

        if (dot.x > w + 15) dot.x = -15;
        if (dot.x < -15) dot.x = w + 15;
        if (dot.y > h) dot.y = h * 0.25;
        if (dot.y < h * 0.2) dot.y = h * 0.95;

        const pulse = Math.sin(t * dot.pulseSpeed + dot.pulsePhase) * 0.25;
        const alpha = Math.max(0.08, dot.alpha + pulse);

        ctx.fillStyle = `rgba(255, 235, 165, ${alpha.toFixed(2)})`;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
    }

    render(t, dt) {
      this.ctx.clearRect(0, 0, this.width, this.height);

      // 1. Atmosphere Sunlight Wash
      this.drawSunlightAtmosphere();

      // 2. Traveling Sunlit Wind Wave Shimmer
      this.drawWindWaveShimmer(t);

      // 3. Far Tier: Field Terraces & Swaying Crops
      this.drawBgClumps(t);

      // 4. Mid Tier: Lush Green Rows & Arched Leaves
      this.drawMidClumps(t);

      // 5. Near Tier: Detailed Swaying Tillers & Golden Panicles
      this.drawFgClumps(t);

      // 6. Floating Sunlit Pollen Motes
      this.drawPollen(t, dt);
    }

    renderStaticFrame() {
      this.render(1.2, 0.016);
    }

    loop(timestamp) {
      if (!this.isRunning) return;

      if (!this.lastTime) this.lastTime = timestamp;
      const dt = Math.min((timestamp - this.lastTime) / 1000, 0.08);
      this.lastTime = timestamp;
      this.elapsedTime += dt;

      this.render(this.elapsedTime, dt);

      this.animationFrameId = requestAnimationFrame(this.loop.bind(this));
    }

    start() {
      if (this.isRunning || this.reducedMotion) return;
      this.isRunning = true;
      this.lastTime = 0;
      this.animationFrameId = requestAnimationFrame(this.loop.bind(this));
    }

    stop() {
      if (!this.isRunning) return;
      this.isRunning = false;
      if (this.animationFrameId) {
        cancelAnimationFrame(this.animationFrameId);
        this.animationFrameId = null;
      }
    }
  }

  // Auto-instantiate when DOM is loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      new PaddyFieldAnimation('paddy-wind-canvas');
    });
  } else {
    new PaddyFieldAnimation('paddy-wind-canvas');
  }
})();
