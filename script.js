// ============================================
// MODERN PORTFOLIO - JavaScript
// Milky Way Night Sky Theme
// ============================================

// ============================================
// THREE.JS MILKY WAY BACKGROUND
// ============================================

const initThreeJS = () => {
    const canvas = document.getElementById('bg-canvas');
    if (!canvas || typeof THREE === 'undefined') return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // ========== MILKY WAY BAND (Dense star concentration) ==========
    const milkyWayCount = 25000;
    const milkyWayGeometry = new THREE.BufferGeometry();
    const milkyWayPositions = new Float32Array(milkyWayCount * 3);
    const milkyWayColors = new Float32Array(milkyWayCount * 3);
    const milkyWayOriginal = new Float32Array(milkyWayCount * 3);
    const milkyWayVelocities = new Float32Array(milkyWayCount * 3);

    for (let i = 0; i < milkyWayCount; i++) {
        const i3 = i * 3;
        
        // Create a band across the sky (diagonal like in photos)
        const t = (Math.random() - 0.5) * 2; // -1 to 1 along the band
        const bandWidth = 0.15 + Math.random() * 0.25; // Width variation
        
        // Gaussian-like distribution for band thickness
        const gaussianSpread = (Math.random() + Math.random() + Math.random()) / 3 - 0.5;
        
        // Position along diagonal band
        const x = t * 35;
        const y = t * 12 + gaussianSpread * 8 * bandWidth;
        const z = -5 - Math.random() * 15;
        
        milkyWayPositions[i3] = x;
        milkyWayPositions[i3 + 1] = y + 5; // Shift up slightly
        milkyWayPositions[i3 + 2] = z;
        
        // Store originals
        milkyWayOriginal[i3] = x;
        milkyWayOriginal[i3 + 1] = y + 5;
        milkyWayOriginal[i3 + 2] = z;
        
        milkyWayVelocities[i3] = 0;
        milkyWayVelocities[i3 + 1] = 0;
        milkyWayVelocities[i3 + 2] = 0;

        // Color based on position in band - Cyan/Teal palette
        const distFromCenter = Math.abs(gaussianSpread);
        const brightness = 0.35 + Math.random() * 0.65;
        
        // Core is brighter, cyan-white
        if (distFromCenter < 0.15) {
            // Bright core - white with subtle cyan
            milkyWayColors[i3] = (0.85 + Math.random() * 0.15) * brightness;
            milkyWayColors[i3 + 1] = (0.95 + Math.random() * 0.05) * brightness;
            milkyWayColors[i3 + 2] = (0.98 + Math.random() * 0.02) * brightness;
        } else if (distFromCenter < 0.3) {
            // Inner region - cyan tint
            milkyWayColors[i3] = (0.75 + Math.random() * 0.15) * brightness;
            milkyWayColors[i3 + 1] = (0.9 + Math.random() * 0.1) * brightness;
            milkyWayColors[i3 + 2] = (0.95 + Math.random() * 0.05) * brightness;
        } else {
            // Outer edges - varied cyan/teal/white
            const colorType = Math.random();
            if (colorType > 0.9) {
                // Teal stars
                milkyWayColors[i3] = (0.6 + Math.random() * 0.2) * brightness;
                milkyWayColors[i3 + 1] = (0.9 + Math.random() * 0.1) * brightness;
                milkyWayColors[i3 + 2] = (0.85 + Math.random() * 0.15) * brightness;
            } else if (colorType > 0.8) {
                // Warm accent stars (subtle)
                milkyWayColors[i3] = (0.95 + Math.random() * 0.05) * brightness;
                milkyWayColors[i3 + 1] = (0.85 + Math.random() * 0.1) * brightness;
                milkyWayColors[i3 + 2] = (0.7 + Math.random() * 0.15) * brightness;
            } else {
                // White/light cyan stars
                milkyWayColors[i3] = (0.85 + Math.random() * 0.15) * brightness;
                milkyWayColors[i3 + 1] = (0.92 + Math.random() * 0.08) * brightness;
                milkyWayColors[i3 + 2] = (0.95 + Math.random() * 0.05) * brightness;
            }
        }
    }

    milkyWayGeometry.setAttribute('position', new THREE.BufferAttribute(milkyWayPositions, 3));
    milkyWayGeometry.setAttribute('color', new THREE.BufferAttribute(milkyWayColors, 3));

    const milkyWayMaterial = new THREE.PointsMaterial({
        size: 0.025,
        vertexColors: true,
        transparent: true,
        opacity: 0.9,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
    });

    const milkyWayMesh = new THREE.Points(milkyWayGeometry, milkyWayMaterial);
    scene.add(milkyWayMesh);

    // ========== MILKY WAY GLOW (Nebula haze) ==========
    const glowCount = 3000;
    const glowGeometry = new THREE.BufferGeometry();
    const glowPositions = new Float32Array(glowCount * 3);
    const glowColors = new Float32Array(glowCount * 3);

    for (let i = 0; i < glowCount; i++) {
        const i3 = i * 3;
        
        const t = (Math.random() - 0.5) * 2;
        const gaussianSpread = (Math.random() + Math.random()) / 2 - 0.5;
        
        glowPositions[i3] = t * 30;
        glowPositions[i3 + 1] = t * 10 + gaussianSpread * 5 + 5;
        glowPositions[i3 + 2] = -8 - Math.random() * 10;

        // Soft cyan-teal glow
        const brightness = 0.15 + Math.random() * 0.25;
        glowColors[i3] = 0.5 * brightness;
        glowColors[i3 + 1] = 0.85 * brightness;
        glowColors[i3 + 2] = 0.95 * brightness;
    }

    glowGeometry.setAttribute('position', new THREE.BufferAttribute(glowPositions, 3));
    glowGeometry.setAttribute('color', new THREE.BufferAttribute(glowColors, 3));

    const glowMaterial = new THREE.PointsMaterial({
        size: 0.35,
        vertexColors: true,
        transparent: true,
        opacity: 0.12,
        blending: THREE.AdditiveBlending,
    });

    const glowMesh = new THREE.Points(glowGeometry, glowMaterial);
    scene.add(glowMesh);

    // ========== SCATTERED FIELD STARS (All over the sky) ==========
    const fieldStarCount = 8000;
    const fieldStarGeometry = new THREE.BufferGeometry();
    const fieldStarPositions = new Float32Array(fieldStarCount * 3);
    const fieldStarColors = new Float32Array(fieldStarCount * 3);
    const fieldStarOriginal = new Float32Array(fieldStarCount * 3);
    const fieldStarVelocities = new Float32Array(fieldStarCount * 3);

    for (let i = 0; i < fieldStarCount; i++) {
        const i3 = i * 3;
        
        // Spread across entire sky hemisphere
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.random() * Math.PI * 0.6; // Upper hemisphere
        const radius = 20 + Math.random() * 25;
        
        const x = radius * Math.sin(phi) * Math.cos(theta);
        const y = radius * Math.cos(phi) * 0.6 + Math.random() * 10 - 3;
        const z = radius * Math.sin(phi) * Math.sin(theta) - 15;
        
        fieldStarPositions[i3] = x;
        fieldStarPositions[i3 + 1] = y;
        fieldStarPositions[i3 + 2] = z;
        
        fieldStarOriginal[i3] = x;
        fieldStarOriginal[i3 + 1] = y;
        fieldStarOriginal[i3 + 2] = z;
        
        fieldStarVelocities[i3] = 0;
        fieldStarVelocities[i3 + 1] = 0;
        fieldStarVelocities[i3 + 2] = 0;

        // Harmonious star color variation - cyan/teal palette
        const brightness = 0.35 + Math.random() * 0.65;
        const colorRand = Math.random();
        
        if (colorRand > 0.92) {
            // Cyan stars
            fieldStarColors[i3] = 0.7 * brightness;
            fieldStarColors[i3 + 1] = 0.95 * brightness;
            fieldStarColors[i3 + 2] = 1.0 * brightness;
        } else if (colorRand > 0.85) {
            // Teal stars
            fieldStarColors[i3] = 0.6 * brightness;
            fieldStarColors[i3 + 1] = 0.92 * brightness;
            fieldStarColors[i3 + 2] = 0.88 * brightness;
        } else if (colorRand > 0.80) {
            // Warm accent stars
            fieldStarColors[i3] = 1.0 * brightness;
            fieldStarColors[i3 + 1] = 0.9 * brightness;
            fieldStarColors[i3 + 2] = 0.75 * brightness;
        } else {
            // White/light cyan stars (most common)
            fieldStarColors[i3] = (0.88 + Math.random() * 0.12) * brightness;
            fieldStarColors[i3 + 1] = (0.94 + Math.random() * 0.06) * brightness;
            fieldStarColors[i3 + 2] = (0.96 + Math.random() * 0.04) * brightness;
        }
    }

    fieldStarGeometry.setAttribute('position', new THREE.BufferAttribute(fieldStarPositions, 3));
    fieldStarGeometry.setAttribute('color', new THREE.BufferAttribute(fieldStarColors, 3));

    const fieldStarMaterial = new THREE.PointsMaterial({
        size: 0.04,
        vertexColors: true,
        transparent: true,
        opacity: 0.95,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
    });

    const fieldStarMesh = new THREE.Points(fieldStarGeometry, fieldStarMaterial);
    scene.add(fieldStarMesh);

    // ========== BRIGHT PROMINENT STARS ==========
    const brightCount = 80;
    const brightGeometry = new THREE.BufferGeometry();
    const brightPositions = new Float32Array(brightCount * 3);
    const brightColors = new Float32Array(brightCount * 3);
    const brightPhases = new Float32Array(brightCount);

    for (let i = 0; i < brightCount; i++) {
        const i3 = i * 3;
        
        brightPositions[i3] = (Math.random() - 0.5) * 50;
        brightPositions[i3 + 1] = Math.random() * 20 - 5;
        brightPositions[i3 + 2] = -5 - Math.random() * 20;
        
        brightPhases[i] = Math.random() * Math.PI * 2;

        // Bright stars - white with cyan/teal accents
        const starType = Math.random();
        if (starType > 0.8) {
            // Cyan bright stars
            brightColors[i3] = 0.75;
            brightColors[i3 + 1] = 0.95;
            brightColors[i3 + 2] = 1.0;
        } else if (starType > 0.6) {
            // Teal bright stars
            brightColors[i3] = 0.7;
            brightColors[i3 + 1] = 0.92;
            brightColors[i3 + 2] = 0.9;
        } else {
            // Pure white stars
            brightColors[i3] = 1.0;
            brightColors[i3 + 1] = 1.0;
            brightColors[i3 + 2] = 1.0;
        }
    }

    brightGeometry.setAttribute('position', new THREE.BufferAttribute(brightPositions, 3));
    brightGeometry.setAttribute('color', new THREE.BufferAttribute(brightColors, 3));

    const brightMaterial = new THREE.PointsMaterial({
        size: 0.12,
        vertexColors: true,
        transparent: true,
        opacity: 0.95,
        blending: THREE.AdditiveBlending,
    });

    const brightMesh = new THREE.Points(brightGeometry, brightMaterial);
    scene.add(brightMesh);

    // ========== VERY FAINT BACKGROUND STARS ==========
    const faintCount = 5000;
    const faintGeometry = new THREE.BufferGeometry();
    const faintPositions = new Float32Array(faintCount * 3);
    const faintColors = new Float32Array(faintCount * 3);

    for (let i = 0; i < faintCount; i++) {
        const i3 = i * 3;
        
        faintPositions[i3] = (Math.random() - 0.5) * 80;
        faintPositions[i3 + 1] = Math.random() * 40 - 10;
        faintPositions[i3 + 2] = -30 - Math.random() * 30;

        const brightness = 0.15 + Math.random() * 0.25;
        faintColors[i3] = brightness;
        faintColors[i3 + 1] = brightness;
        faintColors[i3 + 2] = brightness + 0.03;
    }

    faintGeometry.setAttribute('position', new THREE.BufferAttribute(faintPositions, 3));
    faintGeometry.setAttribute('color', new THREE.BufferAttribute(faintColors, 3));

    const faintMaterial = new THREE.PointsMaterial({
        size: 0.015,
        vertexColors: true,
        transparent: true,
        opacity: 0.5,
        blending: THREE.AdditiveBlending,
    });

    const faintMesh = new THREE.Points(faintGeometry, faintMaterial);
    scene.add(faintMesh);

    // Camera position
    camera.position.set(0, 0, 15);
    camera.lookAt(0, 3, 0);

    // ========== MOUSE INTERACTION ==========
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = (e.clientX / window.innerWidth) * 2 - 1;
        mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    });

    // Click scatter effect
    document.addEventListener('click', (e) => {
        const clickX = (e.clientX / window.innerWidth) * 2 - 1;
        const clickY = -(e.clientY / window.innerHeight) * 2 + 1;
        
        const scatterCenter = new THREE.Vector3(clickX * 15, clickY * 10, 0);
        
        // Scatter milky way stars
        const mwPos = milkyWayGeometry.attributes.position.array;
        for (let i = 0; i < milkyWayCount; i++) {
            const i3 = i * 3;
            const dx = mwPos[i3] - scatterCenter.x;
            const dy = mwPos[i3 + 1] - scatterCenter.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 8 && distance > 0) {
                const force = (1 - distance / 8) * 1.2;
                milkyWayVelocities[i3] += (dx / distance) * force;
                milkyWayVelocities[i3 + 1] += (dy / distance) * force;
            }
        }
        
        // Scatter field stars
        const fsPos = fieldStarGeometry.attributes.position.array;
        for (let i = 0; i < fieldStarCount; i++) {
            const i3 = i * 3;
            const dx = fsPos[i3] - scatterCenter.x;
            const dy = fsPos[i3 + 1] - scatterCenter.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 10 && distance > 0) {
                const force = (1 - distance / 10) * 1.5;
                fieldStarVelocities[i3] += (dx / distance) * force;
                fieldStarVelocities[i3 + 1] += (dy / distance) * force;
            }
        }
    });

    // ========== ANIMATION LOOP ==========
    const clock = new THREE.Clock();

    const animate = () => {
        requestAnimationFrame(animate);
        
        const elapsedTime = clock.getElapsedTime();

        // Smooth mouse follow
        targetMouseX += (mouseX - targetMouseX) * 0.03;
        targetMouseY += (mouseY - targetMouseY) * 0.03;

        // Update milky way positions
        const mwPos = milkyWayGeometry.attributes.position.array;
        for (let i = 0; i < milkyWayCount; i++) {
            const i3 = i * 3;
            
            // Apply velocity
            if (Math.abs(milkyWayVelocities[i3]) > 0.001 || Math.abs(milkyWayVelocities[i3 + 1]) > 0.001) {
                mwPos[i3] += milkyWayVelocities[i3];
                mwPos[i3 + 1] += milkyWayVelocities[i3 + 1];
                
                milkyWayVelocities[i3] *= 0.95;
                milkyWayVelocities[i3 + 1] *= 0.95;
                
                mwPos[i3] += (milkyWayOriginal[i3] - mwPos[i3]) * 0.02;
                mwPos[i3 + 1] += (milkyWayOriginal[i3 + 1] - mwPos[i3 + 1]) * 0.02;
            }
            
            // Mouse attraction
            const cursorX = targetMouseX * 10;
            const cursorY = targetMouseY * 8;
            const dx = cursorX - mwPos[i3];
            const dy = cursorY - mwPos[i3 + 1];
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 8 && distance > 0.1) {
                const pull = (1 - distance / 8) * 0.08;
                mwPos[i3] += dx * pull * 0.02;
                mwPos[i3 + 1] += dy * pull * 0.02;
            }
        }
        milkyWayGeometry.attributes.position.needsUpdate = true;

        // Update field star positions
        const fsPos = fieldStarGeometry.attributes.position.array;
        for (let i = 0; i < fieldStarCount; i++) {
            const i3 = i * 3;
            
            if (Math.abs(fieldStarVelocities[i3]) > 0.001 || Math.abs(fieldStarVelocities[i3 + 1]) > 0.001) {
                fsPos[i3] += fieldStarVelocities[i3];
                fsPos[i3 + 1] += fieldStarVelocities[i3 + 1];
                
                fieldStarVelocities[i3] *= 0.96;
                fieldStarVelocities[i3 + 1] *= 0.96;
                
                fsPos[i3] += (fieldStarOriginal[i3] - fsPos[i3]) * 0.015;
                fsPos[i3 + 1] += (fieldStarOriginal[i3 + 1] - fsPos[i3 + 1]) * 0.015;
            }
            
            // Subtle mouse attraction
            const cursorX = targetMouseX * 12;
            const cursorY = targetMouseY * 8;
            const dx = cursorX - fsPos[i3];
            const dy = cursorY - fsPos[i3 + 1];
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 10 && distance > 0.1) {
                const pull = (1 - distance / 10) * 0.05;
                fsPos[i3] += dx * pull * 0.015;
                fsPos[i3 + 1] += dy * pull * 0.015;
            }
        }
        fieldStarGeometry.attributes.position.needsUpdate = true;

        // Subtle scene movement with mouse
        milkyWayMesh.rotation.z = targetMouseX * 0.02;
        milkyWayMesh.rotation.x = targetMouseY * 0.015;
        
        glowMesh.rotation.z = targetMouseX * 0.02;
        glowMesh.rotation.x = targetMouseY * 0.015;
        
        fieldStarMesh.rotation.y = targetMouseX * 0.03;
        fieldStarMesh.rotation.x = targetMouseY * 0.02;

        // Twinkle bright stars
        const brightColors = brightGeometry.attributes.color.array;
        for (let i = 0; i < brightCount; i++) {
            const i3 = i * 3;
            const twinkle = 0.75 + 0.25 * Math.sin(elapsedTime * (1.5 + i * 0.05) + brightPhases[i]);
            brightColors[i3] = twinkle;
            brightColors[i3 + 1] = twinkle;
            brightColors[i3 + 2] = twinkle;
        }
        brightGeometry.attributes.color.needsUpdate = true;

        // Very slow drift
        faintMesh.rotation.y = elapsedTime * 0.002;

        renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
};

// Initialize Three.js when DOM is loaded
document.addEventListener('DOMContentLoaded', initThreeJS);

// ============================================
// MOBILE HAMBURGER MENU
// ============================================

const initMobileMenu = () => {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    if (!hamburger || !navLinks) return;

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
        document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
};

// ============================================
// NAVBAR SCROLL EFFECT
// ============================================

const initNavScroll = () => {
    const navbar = document.getElementById('navbar');
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (!navbar) return;

    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY;
        
        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Hide scroll indicator when user starts scrolling
        if (scrollIndicator) {
            if (currentScroll > 10) {
                scrollIndicator.classList.add('hidden');
            } else {
                scrollIndicator.classList.remove('hidden');
            }
        }
    }, { passive: true });
};

// ============================================
// SMOOTH SCROLL
// ============================================

const initSmoothScroll = () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
};

// ============================================
// ACTIVE NAV LINK HIGHLIGHT
// ============================================

const initActiveNav = () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    if (!sections.length || !navLinks.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, { threshold: 0.3, rootMargin: '-100px 0px -50% 0px' });

    sections.forEach(section => observer.observe(section));
};

// ============================================
// SCROLL REVEAL ANIMATIONS
// ============================================

const initScrollReveal = () => {
    const revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');

    if (!revealElements.length) return;

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add delay based on data attribute or CSS variable
                const delay = getComputedStyle(entry.target).getPropertyValue('--delay') || '0s';
                entry.target.style.transitionDelay = delay;
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    revealElements.forEach(element => revealObserver.observe(element));
};

// ============================================
// COUNTER ANIMATION
// ============================================

const initCounters = () => {
    const counters = document.querySelectorAll('.stat-number');

    if (!counters.length) return;

    const animateCounter = (counter) => {
        const target = parseFloat(counter.getAttribute('data-count'));
        const duration = 2000;
        const startTime = performance.now();
        const isDecimal = target % 1 !== 0;

        const updateCounter = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const current = target * easeOutQuart;

            counter.textContent = isDecimal ? current.toFixed(1) : Math.floor(current);

            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = isDecimal ? target.toFixed(1) : target;
            }
        };

        requestAnimationFrame(updateCounter);
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter));
};

// ============================================
// TILT EFFECT FOR CARDS
// ============================================

const initTiltEffect = () => {
    const cards = document.querySelectorAll('[data-tilt]');

    if (!cards.length || window.innerWidth <= 768) return;

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
        });
    });
};

// ============================================
// HERO 3D CARD MOUSE TRACKING
// ============================================

const initHeroCard = () => {
    const heroCard = document.querySelector('.hero-3d-card');
    const heroSection = document.querySelector('.hero');

    if (!heroCard || !heroSection || window.innerWidth <= 1024) return;

    heroSection.addEventListener('mousemove', (e) => {
        const rect = heroSection.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;

        const rotateY = x * 20;
        const rotateX = -y * 20;

        heroCard.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
    });

    heroSection.addEventListener('mouseleave', () => {
        heroCard.style.transform = 'rotateY(-5deg) rotateX(5deg)';
    });
};

// ============================================
// TYPING EFFECT FOR ROLE
// ============================================

const initTypingEffect = () => {
    const roleHighlight = document.querySelector('.role-highlight');
    if (!roleHighlight) return;

    const roles = ['Backend Engineer', 'Full Stack Developer', 'Problem Solver'];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    const type = () => {
        const currentRole = roles[roleIndex];
        
        if (isDeleting) {
            roleHighlight.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            roleHighlight.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }

        if (!isDeleting && charIndex === currentRole.length) {
            typingSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            typingSpeed = 500;
        }

        setTimeout(type, typingSpeed);
    };

    // Start after initial animation
    setTimeout(type, 3000);
};

// ============================================
// PARALLAX EFFECT
// ============================================

const initParallax = () => {
    const orbs = document.querySelectorAll('.orb');
    
    if (!orbs.length || window.innerWidth <= 768) return;

    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        
        orbs.forEach((orb, index) => {
            const speed = 0.1 * (index + 1);
            orb.style.transform = `translateY(${scrolled * speed}px)`;
        });
    }, { passive: true });
};

// ============================================
// CONSOLE EASTER EGG
// ============================================

const initConsoleEasterEgg = () => {
    console.log('%c👋 Hello there, fellow developer!', 'font-size: 24px; font-weight: bold; color: #6366f1;');
    console.log('%c╔════════════════════════════════════════╗', 'color: #8b5cf6;');
    console.log('%c║   Auroshish Kumar Meher                ║', 'color: #a855f7;');
    console.log('%c║   Senior Software Engineer             ║', 'color: #a855f7;');
    console.log('%c╚════════════════════════════════════════╝', 'color: #8b5cf6;');
    console.log('%c📧 meherak2000@gmail.com', 'color: #22d3ee;');
    console.log('%c💼 linkedin.com/in/auroshishkumarmeher', 'color: #22d3ee;');
    console.log('%c\n🚀 Interested in my code? Check out GitHub: github.com/akmeher03', 'color: #10b981;');
};

// ============================================
// PERFORMANCE: Throttle scroll events
// ============================================

const throttle = (func, limit) => {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
};

// ============================================
// INITIALIZE ALL MODULES
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    initNavScroll();
    initSmoothScroll();
    initActiveNav();
    initScrollReveal();
    initCounters();
    initTiltEffect();
    initHeroCard();
    initTypingEffect();
    initParallax();
    initConsoleEasterEgg();

    // Add loaded class for any entrance animations
    document.body.classList.add('loaded');
});

// Handle page visibility
document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
        // Resume animations if needed
    }
});
