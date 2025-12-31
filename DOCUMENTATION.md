# Portfolio Website - Complete Documentation

## 📚 Table of Contents

1. [Project Overview](#project-overview)
2. [File Structure](#file-structure)
3. [Technology Stack](#technology-stack)
4. [HTML Structure (index.html)](#html-structure-indexhtml)
5. [CSS Architecture (style.css)](#css-architecture-stylecss)
6. [JavaScript Functionality (script.js)](#javascript-functionality-scriptjs)
7. [Visual Design System](#visual-design-system)
8. [Interactive Features](#interactive-features)
9. [Responsive Design](#responsive-design)
10. [Performance Optimizations](#performance-optimizations)
11. [How to Customize](#how-to-customize)
12. [Deployment](#deployment)

---

## 🎯 Project Overview

This is a **modern, single-page portfolio website** for Auroshish Kumar Meher, a Senior Software Engineer. The website features:

- **Milky Way Night Sky Background** - An interactive 3D star field created with Three.js
- **Glassmorphism Design** - Semi-transparent cards with backdrop blur effects
- **Smooth Animations** - Scroll reveals, typing effects, and hover interactions
- **Fully Responsive** - Works on all devices from mobile to desktop
- **Dark Space Theme** - Eye-pleasing cyan-teal color palette

### Design Philosophy

The design follows a **"Universe/Space" theme** with:
- Deep dark backgrounds simulating the night sky
- Cyan-teal accent colors for a calming, professional look
- Subtle gradients and glows mimicking nebulae
- Interactive star particles that respond to mouse movement

---

## 📁 File Structure

```
portfolio-website/
├── index.html          # Main HTML structure (833 lines)
├── style.css           # Complete CSS styling (2114 lines)
├── script.js           # JavaScript functionality (833 lines)
├── README.md           # Project readme
├── DOCUMENTATION.md    # This file
└── img/                # Image assets folder
```

### File Responsibilities

| File | Purpose | Size |
|------|---------|------|
| `index.html` | Semantic HTML structure, content, SVG icons | ~833 lines |
| `style.css` | All visual styling, animations, responsive design | ~2114 lines |
| `script.js` | Three.js 3D background, interactions, animations | ~833 lines |

---

## 🛠 Technology Stack

### Core Technologies

1. **HTML5** - Semantic markup with accessibility features
2. **CSS3** - Modern CSS with custom properties, flexbox, grid
3. **Vanilla JavaScript** - No framework dependencies
4. **Three.js (r128)** - 3D graphics library for star background

### External Resources

```html
<!-- Three.js for 3D animations -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>

<!-- Google Fonts -->
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">

<!-- Tech Icons from Devicons CDN -->
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg">
```

### Fonts Used

| Font | Usage | Purpose |
|------|-------|---------|
| Space Grotesk | Headings, titles | Modern, tech feel |
| JetBrains Mono | Code, labels, badges | Monospace for technical elements |
| Inter | Body text (fallback) | Clean readability |

---

## 🏗 HTML Structure (index.html)

### Document Head (Lines 1-19)

```html
<head>
    <!-- Meta tags for SEO and mobile -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Auroshish Kumar Meher - Senior Software Engineer...">
    <meta name="keywords" content="Software Engineer, DevOps, Kubernetes...">
    <meta name="author" content="Auroshish Kumar Meher">
    <meta name="theme-color" content="#0a0a0f">
    
    <!-- Stylesheets and fonts -->
    <link rel="stylesheet" href="style.css">
    <link href="https://fonts.googleapis.com/css2?family=..." rel="stylesheet">
    
    <!-- Three.js library -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
</head>
```

### Background Layers (Lines 22-44)

The background is built from multiple layers:

```html
<!-- 3D Canvas for Three.js stars -->
<canvas id="bg-canvas"></canvas>

<!-- CSS-based static star layer -->
<div class="stars-layer"></div>

<!-- CSS Milky Way band gradient -->
<div class="milky-way"></div>

<!-- CSS shooting star animations -->
<div class="shooting-stars">
    <div class="shooting-star"></div>
    <!-- ... 4 shooting stars total -->
</div>

<!-- CSS nebula orbs (gradient blobs) -->
<div class="gradient-orbs">
    <div class="orb orb-1"></div>
    <!-- ... 4 orbs total -->
</div>
```

**Layer Stacking Order (z-index):**
1. `-3` - Milky Way band
2. `-2` - Static stars layer
3. `-1` - Three.js canvas, shooting stars, gradient orbs
4. `0` - Main content
5. `1000` - Navigation

### Navigation (Lines 47-70)

```html
<nav id="navbar">
    <div class="nav-container">
        <!-- Logo with animated dot -->
        <a href="#home" class="logo">
            <span class="logo-text">AKM</span>
            <span class="logo-dot"></span>  <!-- Pulsing cyan dot -->
        </a>

        <!-- Mobile hamburger menu -->
        <button class="hamburger" id="hamburger">
            <span></span><span></span><span></span>
        </button>

        <!-- Navigation links -->
        <ul class="nav-links" id="nav-links">
            <li><a href="#home" class="nav-link active">Home</a></li>
            <li><a href="#about" class="nav-link">About</a></li>
            <!-- ... more links -->
        </ul>
    </div>
</nav>
```

### Sections Overview

| Section | ID | Lines | Description |
|---------|-----|-------|-------------|
| Hero | `#home` | 73-176 | Landing view with intro, stats, CTA buttons |
| About | `#about` | 178-263 | Personal intro, 3D rotating tech cube |
| Experience | `#experience` | 265-384 | Timeline of work experience at Subex |
| Education | `#education` | 386-427 | Academic background, IIIT Bhubaneswar |
| Skills | `#skills` | 429-542 | 6 skill category cards |
| Projects | `#projects` | 544-739 | Featured project cards (Memories, Quiz App) |
| Contact | `#contact` | 741-815 | Email, phone, social links |
| Footer | `.footer` | 817-833 | Branding and quick links |

### Hero Section Structure

```html
<section id="home" class="hero">
    <div class="hero-container">
        <div class="hero-content">
            <!-- Availability badge with green pulsing dot -->
            <div class="hero-badge">
                <span class="status-dot"></span>
                <span>Available for opportunities</span>
            </div>
            
            <!-- Name with gradient text -->
            <h1 class="hero-title">
                <span class="greeting">Hi, I'm</span>
                <span class="name">Auroshish Kumar Meher</span>
            </h1>
            
            <!-- Role with typing effect -->
            <div class="hero-role">
                <span class="role-text">Senior Software Engineer</span>
                <span class="role-separator">•</span>
                <span class="role-highlight">Backend & Microservices</span>
            </div>
            
            <!-- Description paragraph -->
            <p class="hero-description">...</p>

            <!-- Animated stat counters -->
            <div class="hero-stats">
                <div class="stat-item">
                    <span class="stat-number" data-count="2.5">0</span>
                    <span class="stat-suffix">+</span>
                    <span class="stat-label">Years Experience</span>
                </div>
                <!-- ... more stats -->
            </div>
            
            <!-- Call-to-action buttons -->
            <div class="hero-cta">
                <a href="resume-link" class="btn btn-primary">View Resume</a>
                <a href="#contact" class="btn btn-secondary">Let's Talk</a>
            </div>
        </div>

        <!-- 3D Code window card -->
        <div class="hero-visual">
            <div class="hero-3d-card">
                <div class="code-window">...</div>
            </div>
        </div>
    </div>

    <!-- Scroll indicator (hides on scroll) -->
    <a href="#about" class="scroll-indicator">
        <span class="scroll-text">Scroll to explore</span>
        <div class="scroll-arrow">...</div>
    </a>
</section>
```

### Timeline Component Pattern

Used in Experience and Education sections:

```html
<div class="timeline">
    <div class="timeline-item reveal-up">
        <div class="timeline-marker">
            <div class="marker-dot"></div>
        </div>
        <div class="timeline-content">
            <div class="timeline-header">
                <div class="company-info">
                    <h3 class="company-name">Company Name</h3>
                    <span class="job-title">Job Title</span>
                </div>
                <div class="timeline-meta">
                    <span class="duration">Date Range</span>
                    <span class="location">📍 Location</span>
                </div>
            </div>
            <ul class="timeline-achievements">
                <li>
                    <span class="achievement-icon"></span>  <!-- CSS dot -->
                    <span>Achievement description</span>
                </li>
            </ul>
            <div class="tech-stack">
                <span class="tech-pill">Technology</span>
            </div>
        </div>
    </div>
</div>
```

### Skill Card Pattern

```html
<div class="skill-card reveal-up" data-tilt>
    <div class="skill-icon-wrapper">
        <div class="skill-icon">
            <svg>...</svg>  <!-- Category icon -->
        </div>
    </div>
    <h3 class="skill-title">Languages</h3>
    <div class="skill-tags">
        <span class="skill-tag" data-level="expert">Java</span>
        <span class="skill-tag" data-level="advanced">Python</span>
    </div>
</div>
```

### Project Card Pattern

```html
<article class="project-card featured reveal-up">
    <div class="project-badge">Featured</div>
    <div class="project-content">
        <div class="project-header">
            <span class="project-year">2024</span>
            <h3 class="project-title">Project Name</h3>
            <p class="project-subtitle">Brief tagline</p>
        </div>
        
        <p class="project-description">...</p>
        
        <div class="project-metrics">
            <div class="metric">
                <span class="metric-value">3</span>
                <span class="metric-label">Microservices</span>
            </div>
        </div>

        <div class="project-features">
            <div class="feature-item">
                <span class="feature-icon"></span>  <!-- CSS dot -->
                <span>Feature description</span>
            </div>
        </div>
        
        <div class="project-tech">
            <span class="tech-badge">React.js</span>
        </div>
        
        <div class="project-links">
            <a href="..." class="project-link primary">Live Demo</a>
            <a href="..." class="project-link">View Code</a>
        </div>
    </div>
    <div class="project-glow"></div>  <!-- Hover glow effect -->
</article>
```

---

## 🎨 CSS Architecture (style.css)

### CSS Custom Properties (Lines 8-85)

The entire design system is controlled via CSS variables:

```css
:root {
    /* === Background Colors === */
    --bg-primary: #030712;      /* Darkest - main background */
    --bg-secondary: #0f172a;    /* Slightly lighter */
    --bg-tertiary: #1e293b;     /* Cards, sections */
    --bg-card: rgba(15, 23, 42, 0.85);
    --bg-glass: rgba(255, 255, 255, 0.03);
    
    /* === Text Colors === */
    --text-primary: #f1f5f9;    /* Main text - soft white */
    --text-secondary: rgba(241, 245, 249, 0.75);
    --text-muted: rgba(241, 245, 249, 0.5);
    
    /* === Accent Colors (Cyan-Teal Palette) === */
    --accent-primary: #38bdf8;   /* Main cyan */
    --accent-secondary: #0ea5e9; /* Darker cyan */
    --accent-tertiary: #7dd3fc;  /* Lighter cyan */
    --accent-cyan: #22d3ee;      /* Bright cyan */
    --accent-teal: #2dd4bf;      /* Teal accent */
    --accent-green: #22c55e;     /* Availability indicator */
    
    /* === Gradients === */
    --gradient-primary: linear-gradient(135deg, #0ea5e9 0%, #38bdf8 50%, #7dd3fc 100%);
    --gradient-text: linear-gradient(135deg, #38bdf8 0%, #22d3ee 50%, #2dd4bf 100%);
    
    /* === Shadows & Glows === */
    --shadow-glow: 0 0 40px rgba(56, 189, 248, 0.2);
    --shadow-glow-lg: 0 0 80px rgba(56, 189, 248, 0.25);
    
    /* === Spacing Scale === */
    --spacing-xs: 0.5rem;   /* 8px */
    --spacing-sm: 1rem;     /* 16px */
    --spacing-md: 1.5rem;   /* 24px */
    --spacing-lg: 2rem;     /* 32px */
    --spacing-xl: 3rem;     /* 48px */
    --spacing-2xl: 4rem;    /* 64px */
    --spacing-3xl: 6rem;    /* 96px */
    
    /* === Border Radius === */
    --radius-sm: 8px;
    --radius-md: 12px;
    --radius-lg: 16px;
    --radius-xl: 24px;
    --radius-full: 9999px;
    
    /* === Transitions === */
    --transition-fast: 0.15s ease;
    --transition-base: 0.3s ease;
    --transition-slow: 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}
```

### CSS Reset & Base Styles (Lines 87-130)

```css
*, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
    scroll-padding-top: 100px;  /* Offset for fixed navbar */
}

body {
    font-family: 'Space Grotesk', -apple-system, BlinkMacSystemFont, sans-serif;
    background: var(--gradient-galaxy);
    color: var(--text-primary);
    line-height: 1.6;
    overflow-x: hidden;
}

/* Cosmic overlay on body */
body::before {
    content: '';
    position: fixed;
    /* Multiple radial gradients for nebula effect */
    background: 
        radial-gradient(ellipse at 50% 30%, rgba(56, 189, 248, 0.06) 0%, transparent 50%),
        radial-gradient(ellipse at 70% 60%, rgba(34, 211, 238, 0.04) 0%, transparent 45%),
        radial-gradient(ellipse at 30% 70%, rgba(45, 212, 191, 0.03) 0%, transparent 40%);
    pointer-events: none;
    z-index: 0;
}
```

### Background Effects (Lines 150-350)

#### Static Stars Layer (CSS-only stars)

```css
.stars-layer::before,
.stars-layer::after {
    background-image: 
        radial-gradient(2px 2px at 20px 30px, rgba(255,255,255,0.9), transparent),
        radial-gradient(2px 2px at 40px 70px, rgba(255,255,255,0.8), transparent),
        /* ... multiple star positions */;
    background-repeat: repeat;
    background-size: 600px 300px;
    animation: twinkle 8s ease-in-out infinite;
}

@keyframes twinkle {
    0%, 100% { opacity: 0.8; }
    50% { opacity: 0.4; }
}
```

#### Shooting Stars Animation

```css
.shooting-star {
    width: 100px;
    height: 2px;
    background: linear-gradient(90deg, rgba(255,255,255,0.9) 0%, transparent 100%);
    animation: shooting 3s ease-in-out infinite;
}

@keyframes shooting {
    0% { transform: translateX(0) translateY(0) rotate(-45deg); opacity: 0; }
    10% { opacity: 1; }
    100% { transform: translateX(-500px) translateY(500px) rotate(-45deg); opacity: 0; }
}
```

#### Nebula Orbs

```css
.orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(120px);
    animation: nebula-float 30s ease-in-out infinite;
}

.orb-1 {
    width: 900px;
    height: 900px;
    background: radial-gradient(circle, rgba(56, 189, 248, 0.12) 0%, transparent 70%);
}

@keyframes nebula-float {
    0%, 100% { transform: translate(0, 0) scale(1); }
    50% { transform: translate(-15px, 20px) scale(0.98); }
}
```

### Component Styles

#### Gradient Text Effect

```css
.section-title {
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}
```

#### Glassmorphism Cards

```css
.timeline-content {
    background: rgba(13, 17, 23, 0.8);
    border: 1px solid rgba(88, 166, 255, 0.1);
    border-radius: var(--radius-xl);
    backdrop-filter: blur(10px);
}

.timeline-content:hover {
    border-color: rgba(88, 166, 255, 0.3);
    box-shadow: var(--shadow-glow), 0 0 30px rgba(88, 166, 255, 0.15);
}
```

#### Bullet Point Dots (CSS-only)

```css
.achievement-icon {
    width: 6px;
    height: 6px;
    min-width: 6px;
    background: var(--accent-primary);
    border-radius: 50%;
    flex-shrink: 0;
    margin-top: 8px;
}
```

#### Button Styles

```css
.btn-primary {
    background: var(--gradient-primary);
    color: white;
    box-shadow: 
        0 4px 20px rgba(88, 166, 255, 0.4),
        0 0 30px rgba(88, 166, 255, 0.2);
}

.btn-primary:hover {
    transform: translateY(-3px);
    box-shadow: 
        0 8px 30px rgba(88, 166, 255, 0.5),
        0 0 50px rgba(88, 166, 255, 0.3);
}

/* Shine effect on hover */
.btn-glow {
    position: absolute;
    left: -100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
    transition: left 0.5s ease;
}

.btn-primary:hover .btn-glow {
    left: 100%;  /* Slides across the button */
}
```

### Animation Keyframes

```css
/* Fade in from bottom */
@keyframes fadeInUp {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
}

/* Slide in from left */
@keyframes slideIn {
    to { opacity: 1; transform: translateX(0); }
}

/* Floating card animation */
@keyframes cardFloat {
    0%, 100% { transform: rotateY(-5deg) rotateX(5deg) translateY(0); }
    50% { transform: rotateY(5deg) rotateX(-5deg) translateY(-20px); }
}

/* Rotating 3D cube */
@keyframes rotateCube {
    from { transform: rotateX(0) rotateY(0); }
    to { transform: rotateX(360deg) rotateY(360deg); }
}

/* Pulsing glow for timeline dots */
@keyframes starPulse {
    0%, 100% { box-shadow: var(--shadow-glow), 0 0 20px rgba(88, 166, 255, 0.5); }
    50% { box-shadow: var(--shadow-glow), 0 0 35px rgba(88, 166, 255, 0.8); }
}

/* Green availability indicator */
@keyframes pulse-green {
    0%, 100% { 
        opacity: 1; 
        box-shadow: 0 0 12px var(--accent-green);
    }
    50% { 
        opacity: 0.7; 
        box-shadow: 0 0 20px var(--accent-green);
    }
}
```

### Reveal Animation Classes

```css
.reveal-up,
.reveal-left,
.reveal-right {
    opacity: 0;
    transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.reveal-up { transform: translateY(50px); }
.reveal-left { transform: translateX(-50px); }
.reveal-right { transform: translateX(50px); }

.reveal-up.active,
.reveal-left.active,
.reveal-right.active {
    opacity: 1;
    transform: translate(0);
}
```

### Responsive Breakpoints

```css
/* Tablet */
@media (max-width: 1024px) {
    .hero-container { grid-template-columns: 1fr; }
    .hero-visual { display: none; }
    .project-card.featured { grid-column: span 1; }
}

/* Mobile */
@media (max-width: 768px) {
    .hamburger { display: flex; }
    .nav-links { 
        position: fixed; 
        right: -100%; 
        /* Full-screen mobile menu */
    }
    .nav-links.active { right: 0; }
}

/* Small mobile */
@media (max-width: 480px) {
    .hero-stats { flex-direction: column; }
    .hero-role { flex-direction: column; }
}

/* Accessibility - reduced motion */
@media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
        animation-duration: 0.01ms !important;
        transition-duration: 0.01ms !important;
    }
}
```

---

## ⚡ JavaScript Functionality (script.js)

### Module Structure

The JavaScript is organized into independent, self-contained modules:

```javascript
// === MODULES ===
initThreeJS()          // 3D Milky Way background (Lines 10-420)
initMobileMenu()       // Hamburger menu toggle (Lines 422-450)
initNavScroll()        // Navbar background on scroll (Lines 452-480)
initSmoothScroll()     // Anchor link smooth scrolling (Lines 482-500)
initActiveNav()        // Highlight current section in nav (Lines 502-530)
initScrollReveal()     // Animate elements on scroll (Lines 532-565)
initCounters()         // Animate stat numbers (Lines 567-615)
initTiltEffect()       // 3D tilt on skill cards (Lines 617-650)
initHeroCard()         // Mouse tracking for hero card (Lines 652-680)
initTypingEffect()     // Role text typing animation (Lines 682-725)
initParallax()         // Parallax scroll for orbs (Lines 727-745)
initConsoleEasterEgg() // Developer console message (Lines 747-760)

// === INITIALIZATION ===
document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    initNavScroll();
    initSmoothScroll();
    // ... all modules
});
```

### Three.js Milky Way Background

This is the most complex part of the codebase. Here's how it works:

#### Scene Setup

```javascript
const initThreeJS = () => {
    const canvas = document.getElementById('bg-canvas');
    
    // Create scene, camera, renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, innerWidth/innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
```

#### Star Layers (5 different layers)

1. **Milky Way Band** (25,000 stars) - Dense diagonal band across sky
2. **Nebula Glow** (3,000 particles) - Soft haze effect
3. **Field Stars** (8,000 stars) - Scattered across entire view
4. **Bright Stars** (80 stars) - Large twinkling stars
5. **Faint Background** (5,000 stars) - Very dim distant stars

#### Creating the Milky Way Band

```javascript
const milkyWayCount = 25000;
const milkyWayGeometry = new THREE.BufferGeometry();
const milkyWayPositions = new Float32Array(milkyWayCount * 3);
const milkyWayColors = new Float32Array(milkyWayCount * 3);

for (let i = 0; i < milkyWayCount; i++) {
    const i3 = i * 3;
    
    // Create diagonal band position
    const t = (Math.random() - 0.5) * 2;  // -1 to 1
    const gaussianSpread = (Math.random() + Math.random() + Math.random()) / 3 - 0.5;
    
    const x = t * 35;                                  // Spread horizontally
    const y = t * 12 + gaussianSpread * 8 * bandWidth; // Diagonal + thickness
    const z = -5 - Math.random() * 15;                 // Depth variation
    
    milkyWayPositions[i3] = x;
    milkyWayPositions[i3 + 1] = y + 5;
    milkyWayPositions[i3 + 2] = z;
    
    // Color based on position (brighter in center)
    const distFromCenter = Math.abs(gaussianSpread);
    const brightness = 0.35 + Math.random() * 0.65;
    
    if (distFromCenter < 0.15) {
        // Core - bright white/cyan
        milkyWayColors[i3] = 0.85 * brightness;
        milkyWayColors[i3 + 1] = 0.95 * brightness;
        milkyWayColors[i3 + 2] = 0.98 * brightness;
    }
    // ... more color variations
}

// Create material and mesh
const milkyWayMaterial = new THREE.PointsMaterial({
    size: 0.025,
    vertexColors: true,
    transparent: true,
    opacity: 0.9,
    blending: THREE.AdditiveBlending,  // Stars add light together
});

const milkyWayMesh = new THREE.Points(milkyWayGeometry, milkyWayMaterial);
scene.add(milkyWayMesh);
```

#### Mouse Interaction

```javascript
// Track mouse position
document.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX / window.innerWidth) * 2 - 1;   // -1 to 1
    mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
});

// Click scatter effect
document.addEventListener('click', (e) => {
    const clickX = (e.clientX / window.innerWidth) * 2 - 1;
    const clickY = -(e.clientY / window.innerHeight) * 2 + 1;
    
    const scatterCenter = new THREE.Vector3(clickX * 15, clickY * 10, 0);
    
    // Push nearby stars away
    for (let i = 0; i < milkyWayCount; i++) {
        const distance = /* calculate distance from click */;
        
        if (distance < 8) {
            const force = (1 - distance / 8) * 1.2;
            milkyWayVelocities[i3] += (dx / distance) * force;
            milkyWayVelocities[i3 + 1] += (dy / distance) * force;
        }
    }
});
```

#### Animation Loop

```javascript
const animate = () => {
    requestAnimationFrame(animate);
    
    // Smooth mouse follow
    targetMouseX += (mouseX - targetMouseX) * 0.03;
    targetMouseY += (mouseY - targetMouseY) * 0.03;

    // Update star positions (velocity + return to original)
    for (let i = 0; i < milkyWayCount; i++) {
        // Apply velocity
        mwPos[i3] += milkyWayVelocities[i3];
        milkyWayVelocities[i3] *= 0.95;  // Friction
        
        // Pull back to original position
        mwPos[i3] += (milkyWayOriginal[i3] - mwPos[i3]) * 0.02;
        
        // Mouse attraction
        if (distance < 8) {
            mwPos[i3] += dx * pull * 0.02;
        }
    }
    
    // Twinkle bright stars
    for (let i = 0; i < brightCount; i++) {
        const twinkle = 0.75 + 0.25 * Math.sin(time * 1.5 + phase);
        brightColors[i3] = twinkle;
    }
    
    renderer.render(scene, camera);
};
```

### Navigation Scroll Effect

```javascript
const initNavScroll = () => {
    const navbar = document.getElementById('navbar');
    const scrollIndicator = document.querySelector('.scroll-indicator');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');  // Add background blur
        } else {
            navbar.classList.remove('scrolled');
        }

        // Hide scroll indicator when scrolled
        if (scrollIndicator) {
            if (window.scrollY > 10) {
                scrollIndicator.classList.add('hidden');
            } else {
                scrollIndicator.classList.remove('hidden');
            }
        }
    }, { passive: true });  // Performance optimization
};
```

### Counter Animation

```javascript
const initCounters = () => {
    const counters = document.querySelectorAll('.stat-number');

    const animateCounter = (counter) => {
        const target = parseFloat(counter.getAttribute('data-count'));
        const duration = 2000;
        const startTime = performance.now();
        const isDecimal = target % 1 !== 0;

        const updateCounter = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const current = target * easeOutQuart;

            counter.textContent = isDecimal 
                ? current.toFixed(1)   // For "2.5"
                : Math.floor(current); // For "300"

            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            }
        };

        requestAnimationFrame(updateCounter);
    };

    // Use IntersectionObserver to trigger when visible
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);  // Only animate once
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter));
};
```

### Scroll Reveal Animation

```javascript
const initScrollReveal = () => {
    const revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Get delay from CSS variable --delay
                const delay = getComputedStyle(entry.target).getPropertyValue('--delay');
                entry.target.style.transitionDelay = delay;
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    revealElements.forEach(element => revealObserver.observe(element));
};
```

### Typing Effect

```javascript
const initTypingEffect = () => {
    const roleHighlight = document.querySelector('.role-highlight');
    const roles = ['Backend Engineer', 'Full Stack Developer', 'Problem Solver'];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const type = () => {
        const currentRole = roles[roleIndex];
        
        if (isDeleting) {
            // Delete characters
            roleHighlight.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
        } else {
            // Add characters
            roleHighlight.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
        }

        // Determine next action
        if (!isDeleting && charIndex === currentRole.length) {
            setTimeout(() => { isDeleting = true; }, 2000);  // Pause before deleting
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;  // Next role
        }

        setTimeout(type, isDeleting ? 50 : 100);  // Typing speed
    };

    setTimeout(type, 3000);  // Start after page loads
};
```

### 3D Tilt Effect for Cards

```javascript
const initTiltEffect = () => {
    const cards = document.querySelectorAll('[data-tilt]');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            // Calculate rotation based on mouse position
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;

            card.style.transform = `
                perspective(1000px) 
                rotateX(${rotateX}deg) 
                rotateY(${rotateY}deg) 
                translateZ(10px)
            `;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
        });
    });
};
```

---

## 🎨 Visual Design System

### Color Palette

| Color | Variable | Hex | Usage |
|-------|----------|-----|-------|
| Primary Cyan | `--accent-primary` | `#38bdf8` | Main accent, buttons |
| Secondary Cyan | `--accent-secondary` | `#0ea5e9` | Darker accents |
| Bright Cyan | `--accent-cyan` | `#22d3ee` | Highlights |
| Teal | `--accent-teal` | `#2dd4bf` | Gradient endpoints |
| Green | `--accent-green` | `#22c55e` | Availability badge |
| Background | `--bg-primary` | `#030712` | Main dark background |

### Typography Scale

```
Headings (Space Grotesk):
  - Hero name: clamp(2.5rem, 5vw, 4rem)
  - Section titles: clamp(2rem, 4vw, 3rem)
  - Card titles: 1.3rem - 1.5rem

Body Text (Space Grotesk):
  - Base: 1rem (16px)
  - Large: 1.1rem
  - Small: 0.85rem - 0.9rem

Code/Labels (JetBrains Mono):
  - Base: 0.85rem - 0.95rem
  - Tags: 0.75rem - 0.8rem
```

### Spacing System

```
xs:  0.5rem  (8px)   - Small gaps, tag padding
sm:  1rem   (16px)   - Standard padding
md:  1.5rem (24px)   - Card padding, gaps
lg:  2rem   (32px)   - Section margins
xl:  3rem   (48px)   - Between major elements
2xl: 4rem   (64px)   - Section padding
3xl: 6rem   (96px)   - Major sections
```

---

## 🖱 Interactive Features

### Feature List

1. **Milky Way Stars** - Follow mouse, scatter on click
2. **Navigation** - Background appears on scroll
3. **Scroll Indicator** - Hides when scrolling begins
4. **Stat Counters** - Animate when scrolled into view
5. **Section Reveals** - Fade/slide in on scroll
6. **Skill Cards** - 3D tilt effect on hover
7. **Hero Card** - Tracks mouse for parallax
8. **Role Text** - Cycles through job titles with typing
9. **Buttons** - Shine animation on hover
10. **Timeline Dots** - Pulsing glow effect

### Accessibility Features

- `scroll-behavior: smooth` - Native smooth scrolling
- `prefers-reduced-motion` - Disables animations if requested
- Semantic HTML (`<section>`, `<article>`, `<nav>`)
- ARIA labels on interactive elements
- Keyboard-navigable links

---

## 📱 Responsive Design

### Breakpoints

| Breakpoint | Target Devices | Changes |
|------------|----------------|---------|
| > 1024px | Desktop | Full layout, all animations |
| 768-1024px | Tablet | Single column, hidden 3D card |
| 480-768px | Mobile | Mobile nav, stacked layouts |
| < 480px | Small mobile | Smaller text, vertical stats |

### Key Mobile Changes

1. **Navigation** - Hamburger menu with slide-out drawer
2. **Hero** - Single column, no 3D code card
3. **Grid layouts** - Collapse to single column
4. **Custom cursor** - Disabled (touch devices)
5. **Tilt effect** - Disabled (no hover on touch)
6. **3D cube** - Smaller size

---

## ⚡ Performance Optimizations

### Implemented Optimizations

1. **Passive Event Listeners** - For scroll events
   ```javascript
   window.addEventListener('scroll', handler, { passive: true });
   ```

2. **Intersection Observer** - Instead of scroll listeners for reveals
   ```javascript
   new IntersectionObserver((entries) => { ... }, { threshold: 0.1 });
   ```

3. **Limited Pixel Ratio** - Prevents high DPI overhead
   ```javascript
   renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
   ```

4. **CSS transforms** - GPU-accelerated animations
   ```css
   transform: translateY(-10px);  /* Better than top: -10px */
   ```

5. **will-change** - Hints for browser optimization (implicit via transforms)

6. **Lazy animations** - Only trigger when visible

---

## 🔧 How to Customize

### Change Colors

Edit CSS variables in `:root`:

```css
:root {
    --accent-primary: #your-color;
    --accent-secondary: #your-darker-color;
    /* Update gradients too */
    --gradient-primary: linear-gradient(135deg, #color1, #color2);
}
```

### Add New Sections

1. Add HTML section:
   ```html
   <section id="new-section" class="section">
       <div class="container">
           <div class="section-header">
               <span class="section-tag">Tag</span>
               <h2 class="section-title">Title</h2>
           </div>
           <!-- Content -->
       </div>
   </section>
   ```

2. Add navigation link:
   ```html
   <li><a href="#new-section" class="nav-link">New Section</a></li>
   ```

### Update Personal Info

Search and replace in `index.html`:
- Name: "Auroshish Kumar Meher"
- Title: "Senior Software Engineer"
- Email: "meherak2000@gmail.com"
- Phone: "+91-6372084390"
- GitHub: "akmeher03"
- LinkedIn: "auroshishkumarmeher"

### Modify Star Colors

In `script.js`, find star color assignments:

```javascript
// Change Milky Way colors
milkyWayColors[i3] = 0.85 * brightness;     // R
milkyWayColors[i3 + 1] = 0.95 * brightness; // G
milkyWayColors[i3 + 2] = 0.98 * brightness; // B
```

---

## 🚀 Deployment

### GitHub Pages (Current)

Repository: `https://github.com/akmeher03/portfolio-website`

Push changes:
```bash
git add -A
git commit -m "Your message"
git push origin main
```

The site auto-deploys from the main branch.

### Local Development

```bash
# Clone repo
git clone https://github.com/akmeher03/portfolio-website.git
cd portfolio-website

# Serve locally (any method)
python3 -m http.server 8080
# or
npx serve .
# or use Live Server extension in VS Code
```

Open `http://localhost:8080` in browser.

---

## 📝 Summary

This portfolio website is a **single-page application** built with:

- **Pure HTML/CSS/JS** - No frameworks, maximum control
- **Three.js** - For the interactive Milky Way background
- **CSS Custom Properties** - Easy theming and maintenance
- **Modern CSS** - Flexbox, Grid, backdrop-filter, gradients
- **Intersection Observer** - Efficient scroll-based animations
- **Responsive Design** - Works on all screen sizes

The codebase is organized for maintainability:
- All styles in one CSS file with clear sections
- All JavaScript in modular functions
- Semantic HTML with clear structure
- CSS variables for easy customization

---

*Documentation created: January 2026*
*Last updated: January 2026*
