// ============================================
// GEEKY TERMINAL PORTFOLIO - JavaScript
// ============================================

// Matrix Rain Animation
const canvas = document.getElementById('matrix-canvas');
const ctx = canvas.getContext('2d');

// Set canvas size
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// Matrix characters
const matrixChars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ{}[]<>/\\|;:,.!@#$%^&*()+=';
const fontSize = 14;
const columns = Math.floor(canvas.width / fontSize);
const drops = Array(columns).fill(1);

function drawMatrix() {
    // Semi-transparent black to create trail effect
    ctx.fillStyle = 'rgba(13, 17, 23, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Green text
    ctx.fillStyle = '#00ff41';
    ctx.font = `${fontSize}px JetBrains Mono, monospace`;

    drops.forEach((y, i) => {
        const char = matrixChars[Math.floor(Math.random() * matrixChars.length)];
        const x = i * fontSize;

        // Vary the brightness
        const brightness = Math.random();
        if (brightness > 0.98) {
            ctx.fillStyle = '#ffffff'; // Bright white flash
        } else if (brightness > 0.9) {
            ctx.fillStyle = '#00ff41'; // Matrix green
        } else {
            ctx.fillStyle = '#008f11'; // Darker green
        }

        ctx.fillText(char, x, y * fontSize);

        // Reset drop to top with random probability
        if (y * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    });
}

// Run matrix animation
setInterval(drawMatrix, 50);

// ============================================
// CUSTOM CURSOR
// ============================================

const cursor = document.querySelector('.cursor');
const cursorDot = document.querySelector('.cursor-dot');

if (cursor && cursorDot) {
    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        // Dot follows immediately
        cursorDot.style.left = `${mouseX - 3}px`;
        cursorDot.style.top = `${mouseY - 3}px`;
    });

    // Smooth cursor follow
    function animateCursor() {
        cursorX += (mouseX - cursorX) * 0.15;
        cursorY += (mouseY - cursorY) * 0.15;

        cursor.style.left = `${cursorX - 10}px`;
        cursor.style.top = `${cursorY - 10}px`;

        requestAnimationFrame(animateCursor);
    }
    animateCursor();

    // Cursor hover effect
    const hoverElements = document.querySelectorAll('a, button, .btn, .skill-category, .project-card, .contact-item, .social-link, .hamburger');

    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
    });
}

// ============================================
// MOBILE HAMBURGER MENU
// ============================================

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });
}

// ============================================
// NAVBAR SCROLL EFFECT
// ============================================

const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ============================================
// SMOOTH SCROLL FOR NAVIGATION
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

// ============================================
// SCROLL REVEAL ANIMATION
// ============================================

const revealElements = document.querySelectorAll('.reveal');

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

revealElements.forEach(element => {
    revealObserver.observe(element);
});

// ============================================
// ACTIVE NAV LINK HIGHLIGHT
// ============================================

const sections = document.querySelectorAll('section');
const navLinksAll = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= (sectionTop - 150)) {
            current = section.getAttribute('id');
        }
    });

    navLinksAll.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ============================================
// TYPING EFFECT FOR SUBTITLE
// ============================================

const subtitle = document.querySelector('.hero .subtitle');
if (subtitle) {
    const originalText = 'Senior Software Engineer';
    const cursor = subtitle.querySelector('.typing-cursor');

    // Clear text initially
    subtitle.childNodes.forEach(node => {
        if (node.nodeType === Node.TEXT_NODE) {
            node.textContent = '';
        }
    });

    let charIndex = 0;

    function typeWriter() {
        if (charIndex < originalText.length) {
            // Insert text before the cursor
            const textNode = document.createTextNode(originalText.charAt(charIndex));
            subtitle.insertBefore(textNode, cursor);
            charIndex++;
            setTimeout(typeWriter, 80);
        }
    }

    // Start typing after page load
    window.addEventListener('load', () => {
        setTimeout(typeWriter, 800);
    });
}

// ============================================
// SKILL CARDS ANIMATION
// ============================================

const skillCategories = document.querySelectorAll('.skill-category');

skillCategories.forEach(category => {
    const tags = category.querySelectorAll('.skill-tag');

    category.addEventListener('mouseenter', () => {
        tags.forEach((tag, index) => {
            setTimeout(() => {
                tag.style.transform = 'translateY(-3px) scale(1.02)';
            }, index * 30);
        });
    });

    category.addEventListener('mouseleave', () => {
        tags.forEach(tag => {
            tag.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// ============================================
// GLITCH EFFECT ON HOVER
// ============================================

const glitchTitle = document.querySelector('.hero h1');

if (glitchTitle) {
    glitchTitle.addEventListener('mouseenter', () => {
        glitchTitle.style.animation = 'glitch 0.3s linear infinite';
    });

    glitchTitle.addEventListener('mouseleave', () => {
        glitchTitle.style.animation = 'glitch 3s infinite';
    });
}

// ============================================
// PARALLAX EFFECT FOR HERO
// ============================================

const hero = document.querySelector('.hero');

window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    if (hero && scrolled < 800) {
        hero.style.transform = `translateY(${scrolled * 0.3}px)`;
        hero.style.opacity = Math.max(0, 1 - (scrolled / 700));
    }
});

// ============================================
// CONSOLE EASTER EGG
// ============================================

console.log('%c⚡ Welcome to my Portfolio! ⚡', 'color: #00ff41; font-size: 24px; font-weight: bold; text-shadow: 0 0 10px #00ff41;');
console.log('%c$ whoami', 'color: #00d9ff; font-size: 14px; font-family: JetBrains Mono, monospace;');
console.log('%c> Auroshish Kumar Meher - Senior Software Engineer', 'color: #bd93f9; font-size: 12px; font-family: JetBrains Mono, monospace;');
console.log('%c$ cat contact.txt', 'color: #00d9ff; font-size: 14px; font-family: JetBrains Mono, monospace;');
console.log('%c> meherak2000@gmail.com', 'color: #ff79c6; font-size: 12px; font-family: JetBrains Mono, monospace;');
console.log('%c\n// If you\'re reading this, you\'re my kind of person! 🚀', 'color: #8b949e; font-size: 11px;');

// ============================================
// PERFORMANCE: Throttle scroll events
// ============================================

let ticking = false;

function onScroll() {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            // Scroll-related animations are handled above
            ticking = false;
        });
        ticking = true;
    }
}

window.addEventListener('scroll', onScroll, { passive: true });

// ============================================
// PRELOADER (Optional - adds polish)
// ============================================

window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});
