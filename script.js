// ============================================
// MODERN PORTFOLIO - JavaScript
// Enhanced with Cosmic Galaxy Theme
// ============================================

// ============================================
// THREE.JS COSMIC GALAXY BACKGROUND
// ============================================

const initThreeJS = () => {
    const canvas = document.getElementById('bg-canvas');
    if (!canvas || typeof THREE === 'undefined') return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Create galaxy particles
    const galaxyGeometry = new THREE.BufferGeometry();
    const galaxyCount = 5000;
    const posArray = new Float32Array(galaxyCount * 3);
    const colorsArray = new Float32Array(galaxyCount * 3);
    const sizesArray = new Float32Array(galaxyCount);

    // Realistic space color palette (NASA/Hubble-inspired)
    const cosmicColors = [
        { r: 0.93, g: 0.93, b: 0.98 },  // White-blue stars (hottest)
        { r: 0.95, g: 0.87, b: 0.65 },  // Warm yellow stars
        { r: 0.98, g: 0.65, b: 0.45 },  // Orange-red stars
        { r: 0.55, g: 0.75, b: 0.95 },  // Light blue
        { r: 0.08, g: 0.65, b: 0.88 },  // Deep sky blue
        { r: 0.08, g: 0.72, b: 0.65 },  // Teal
        { r: 0.20, g: 0.45, b: 0.70 },  // Space navy
    ];

    // Create spiral galaxy effect
    const branches = 5;
    const spin = 1.5;
    const randomness = 0.4;
    const randomnessPower = 3;

    for (let i = 0; i < galaxyCount; i++) {
        const i3 = i * 3;
        
        // Spiral galaxy distribution
        const radius = Math.random() * 8 + 0.5;
        const spinAngle = radius * spin;
        const branchAngle = ((i % branches) / branches) * Math.PI * 2;
        
        const randomX = Math.pow(Math.random(), randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * randomness * radius;
        const randomY = Math.pow(Math.random(), randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * randomness * radius * 0.3;
        const randomZ = Math.pow(Math.random(), randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * randomness * radius;
        
        posArray[i3] = Math.cos(branchAngle + spinAngle) * radius + randomX;
        posArray[i3 + 1] = randomY;
        posArray[i3 + 2] = Math.sin(branchAngle + spinAngle) * radius + randomZ;

        // Color based on distance from center (more purple in center, blue/cyan at edges)
        const colorIndex = Math.floor(Math.random() * cosmicColors.length);
        const mixRatio = radius / 8;
        
        // Inner stars are more purple/white, outer are more blue/cyan
        if (Math.random() > 0.8) {
            // Bright white stars
            colorsArray[i3] = 0.95;
            colorsArray[i3 + 1] = 0.95;
            colorsArray[i3 + 2] = 1.0;
        } else {
            const color = cosmicColors[colorIndex];
            colorsArray[i3] = color.r;
            colorsArray[i3 + 1] = color.g;
            colorsArray[i3 + 2] = color.b;
        }
        
        // Vary star sizes
        sizesArray[i] = Math.random() * 0.02 + 0.005;
    }

    galaxyGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    galaxyGeometry.setAttribute('color', new THREE.BufferAttribute(colorsArray, 3));
    galaxyGeometry.setAttribute('size', new THREE.BufferAttribute(sizesArray, 1));

    // Particle material with glow effect
    const galaxyMaterial = new THREE.PointsMaterial({
        size: 0.025,
        vertexColors: true,
        transparent: true,
        opacity: 0.9,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
    });

    const galaxyMesh = new THREE.Points(galaxyGeometry, galaxyMaterial);
    galaxyMesh.rotation.x = Math.PI * 0.15;
    scene.add(galaxyMesh);

    // Create distant stars (background)
    const starsGeometry = new THREE.BufferGeometry();
    const starsCount = 3000;
    const starsPositions = new Float32Array(starsCount * 3);
    const starsColors = new Float32Array(starsCount * 3);

    for (let i = 0; i < starsCount * 3; i += 3) {
        // Distribute stars in a sphere around the scene
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        const radius = 15 + Math.random() * 20;
        
        starsPositions[i] = radius * Math.sin(phi) * Math.cos(theta);
        starsPositions[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
        starsPositions[i + 2] = radius * Math.cos(phi);

        // Mostly white/blue stars
        const brightness = 0.5 + Math.random() * 0.5;
        starsColors[i] = brightness;
        starsColors[i + 1] = brightness;
        starsColors[i + 2] = brightness + Math.random() * 0.2;
    }

    starsGeometry.setAttribute('position', new THREE.BufferAttribute(starsPositions, 3));
    starsGeometry.setAttribute('color', new THREE.BufferAttribute(starsColors, 3));

    const starsMaterial = new THREE.PointsMaterial({
        size: 0.015,
        vertexColors: true,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending,
    });

    const starsMesh = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(starsMesh);

    // Create nebula dust clouds
    const dustGeometry = new THREE.BufferGeometry();
    const dustCount = 500;
    const dustPositions = new Float32Array(dustCount * 3);
    const dustColors = new Float32Array(dustCount * 3);

    for (let i = 0; i < dustCount * 3; i += 3) {
        dustPositions[i] = (Math.random() - 0.5) * 15;
        dustPositions[i + 1] = (Math.random() - 0.5) * 8;
        dustPositions[i + 2] = (Math.random() - 0.5) * 15;

        // Realistic nebula dust (blue/teal tones)
        dustColors[i] = 0.1 + Math.random() * 0.2;
        dustColors[i + 1] = 0.4 + Math.random() * 0.3;
        dustColors[i + 2] = 0.6 + Math.random() * 0.3;
    }

    dustGeometry.setAttribute('position', new THREE.BufferAttribute(dustPositions, 3));
    dustGeometry.setAttribute('color', new THREE.BufferAttribute(dustColors, 3));

    const dustMaterial = new THREE.PointsMaterial({
        size: 0.08,
        vertexColors: true,
        transparent: true,
        opacity: 0.15,
        blending: THREE.AdditiveBlending,
    });

    const dustMesh = new THREE.Points(dustGeometry, dustMaterial);
    scene.add(dustMesh);

    camera.position.z = 6;
    camera.position.y = 2;

    // Mouse movement effect
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = (e.clientX / window.innerWidth) * 2 - 1;
        mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    });

    // Animation loop
    const clock = new THREE.Clock();

    const animate = () => {
        requestAnimationFrame(animate);
        
        const elapsedTime = clock.getElapsedTime();

        // Smooth mouse follow
        targetX += (mouseX - targetX) * 0.02;
        targetY += (mouseY - targetY) * 0.02;

        // Rotate galaxy slowly
        galaxyMesh.rotation.y = elapsedTime * 0.03 + targetX * 0.2;
        galaxyMesh.rotation.x = Math.PI * 0.15 + targetY * 0.1;

        // Background stars rotate very slowly
        starsMesh.rotation.y = elapsedTime * 0.01;
        starsMesh.rotation.x = elapsedTime * 0.005;

        // Dust particles float
        dustMesh.rotation.y = elapsedTime * 0.02;
        dustMesh.position.y = Math.sin(elapsedTime * 0.2) * 0.3;

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
// CUSTOM CURSOR
// ============================================

const initCursor = () => {
    const cursorGlow = document.querySelector('.cursor-glow');
    const cursorDot = document.querySelector('.cursor-dot');

    if (!cursorGlow || !cursorDot || window.innerWidth <= 768) return;

    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        // Dot follows immediately
        cursorDot.style.left = `${mouseX - 4}px`;
        cursorDot.style.top = `${mouseY - 4}px`;
    });

    // Smooth cursor follow
    const animateCursor = () => {
        cursorX += (mouseX - cursorX) * 0.12;
        cursorY += (mouseY - cursorY) * 0.12;

        cursorGlow.style.left = `${cursorX - 15}px`;
        cursorGlow.style.top = `${cursorY - 15}px`;

        requestAnimationFrame(animateCursor);
    };
    animateCursor();

    // Cursor hover effect
    const hoverElements = document.querySelectorAll('a, button, .btn, .skill-card, .project-card, .contact-card, .social-link, .hamburger');

    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => cursorGlow.classList.add('hover'));
        el.addEventListener('mouseleave', () => cursorGlow.classList.remove('hover'));
    });
};

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
    if (!navbar) return;

    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY;
        
        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
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

    const roles = ['Backend Specialist', 'Cloud Architect', 'DevOps Engineer', 'Problem Solver'];
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
    initCursor();
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
