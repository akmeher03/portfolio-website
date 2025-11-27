// Navbar scroll effect
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80; // Adjust for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Scroll reveal animation
const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    const revealPoint = 100;

    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - revealPoint) {
            element.classList.add('active');
        }
    });
};

// Initial check on page load
window.addEventListener('load', revealOnScroll);

// Check on scroll
window.addEventListener('scroll', revealOnScroll);

// Animate skill cards on hover
const skillCategories = document.querySelectorAll('.skill-category');

skillCategories.forEach(category => {
    const tags = category.querySelectorAll('.skill-tag');
    
    category.addEventListener('mouseenter', () => {
        tags.forEach((tag, index) => {
            setTimeout(() => {
                tag.style.transform = 'scale(1.05)';
            }, index * 50);
        });
    });
    
    category.addEventListener('mouseleave', () => {
        tags.forEach(tag => {
            tag.style.transform = 'scale(1)';
        });
    });
});

// Parallax effect for hero section
const hero = document.querySelector('.hero');

window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        hero.style.opacity = 1 - (scrolled / 600);
    }
});

// Add floating animation to project cards
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach((card, index) => {
    // Stagger the initial animation
    setTimeout(() => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
    }, index * 200);
});

// Add typing effect to hero subtitle (optional enhancement)
const subtitle = document.querySelector('.hero .subtitle');
const subtitleText = subtitle.textContent;
subtitle.textContent = '';
let charIndex = 0;

function typeWriter() {
    if (charIndex < subtitleText.length) {
        subtitle.textContent += subtitleText.charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, 100);
    }
}

// Start typing effect after page load
window.addEventListener('load', () => {
    setTimeout(typeWriter, 500);
});

// Add cursor pointer style to interactive elements
const interactiveElements = document.querySelectorAll('.skill-category, .project-card, .contact-item');

interactiveElements.forEach(element => {
    element.style.cursor = 'pointer';
});

// Dynamic background gradient movement
let gradientPosition = 0;

function animateBackground() {
    gradientPosition += 0.5;
    document.body.style.backgroundPosition = `${gradientPosition}px ${gradientPosition}px`;
    requestAnimationFrame(animateBackground);
}

// Add console message for visitors who check the console
console.log('%c👋 Hello, fellow developer!', 'color: #667eea; font-size: 20px; font-weight: bold;');
console.log('%cThanks for checking out my portfolio!', 'color: #f5576c; font-size: 14px;');
console.log('%cFeel free to reach out: meherak2000@gmail.com', 'color: #00f2fe; font-size: 12px;');

// Add active state to nav links based on scroll position
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= (sectionTop - 100)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Add particle effect on mouse move (optional enhancement)
document.addEventListener('mousemove', (e) => {
    const particle = document.createElement('div');
    particle.style.position = 'fixed';
    particle.style.width = '5px';
    particle.style.height = '5px';
    particle.style.borderRadius = '50%';
    particle.style.background = 'rgba(102, 126, 234, 0.5)';
    particle.style.left = e.clientX + 'px';
    particle.style.top = e.clientY + 'px';
    particle.style.pointerEvents = 'none';
    particle.style.transition = 'all 1s ease';
    
    document.body.appendChild(particle);
    
    setTimeout(() => {
        particle.style.opacity = '0';
        particle.style.transform = 'scale(2)';
    }, 10);
    
    setTimeout(() => {
        particle.remove();
    }, 1000);
});

// Throttle the particle effect to avoid performance issues
let lastParticleTime = 0;
const particleThrottle = 100; // ms

document.addEventListener('mousemove', (e) => {
    const now = Date.now();
    if (now - lastParticleTime < particleThrottle) return;
    lastParticleTime = now;
    
    // Particle creation code here (already included above)
});

// Add intersection observer for better performance
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

revealElements.forEach(element => {
    observer.observe(element);
});
