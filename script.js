
// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(10, 10, 10, 0.98)';
        navbar.style.backdropFilter = 'blur(20px)';
    } else {
        navbar.style.background = 'rgba(10, 10, 10, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Animate elements on scroll
document.addEventListener('DOMContentLoaded', function() {
    const animateElements = document.querySelectorAll('.feature-card, .step, .pricing-card, .admin-feature, .faq-item');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Pricing button interactions
document.querySelectorAll('.pricing-btn').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Create QR code popup simulation
        const popup = document.createElement('div');
        popup.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
            padding: 2rem;
            border-radius: 20px;
            border: 2px solid #00ffff;
            z-index: 10000;
            text-align: center;
            box-shadow: 0 0 50px rgba(0, 255, 255, 0.5);
        `;
        
        popup.innerHTML = `
            <h3 style="color: #00ffff; margin-bottom: 1rem;">QR Payment Code</h3>
            <div style="width: 200px; height: 200px; background: #fff; margin: 1rem auto; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 3rem;">
                <i class="fas fa-qrcode" style="color: #000;"></i>
            </div>
            <p style="color: #ccc; margin-bottom: 1rem;">Scan this QR code with any UPI app</p>
            <button onclick="this.parentElement.remove()" style="background: #39ff14; color: #000; border: none; padding: 0.5rem 1rem; border-radius: 5px; cursor: pointer;">Close</button>
        `;
        
        // Add backdrop
        const backdrop = document.createElement('div');
        backdrop.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            z-index: 9999;
        `;
        backdrop.onclick = () => {
            backdrop.remove();
            popup.remove();
        };
        
        document.body.appendChild(backdrop);
        document.body.appendChild(popup);
    });
});

// FAQ toggle functionality
document.querySelectorAll('.faq-item h3').forEach(question => {
    question.addEventListener('click', function() {
        const answer = this.nextElementSibling;
        const isVisible = answer.style.display === 'block';
        
        // Close all other FAQ items
        document.querySelectorAll('.faq-item p').forEach(p => {
            p.style.display = 'none';
        });
        
        // Toggle current item
        answer.style.display = isVisible ? 'none' : 'block';
        
        // Add animation
        if (!isVisible) {
            answer.style.animation = 'fadeIn 0.3s ease';
        }
    });
});

// Add fadeIn animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(-10px); }
        to { opacity: 1; transform: translateY(0); }
    }
`;
document.head.appendChild(style);

// Floating particles effect
function createParticle() {
    const particle = document.createElement('div');
    particle.style.cssText = `
        position: fixed;
        width: 2px;
        height: 2px;
        background: #00ffff;
        pointer-events: none;
        z-index: 1;
        border-radius: 50%;
        animation: float-particle 15s linear infinite;
    `;
    
    particle.style.left = Math.random() * 100 + 'vw';
    particle.style.top = '100vh';
    
    document.body.appendChild(particle);
    
    setTimeout(() => {
        particle.remove();
    }, 15000);
}

// Add particle animation
const particleStyle = document.createElement('style');
particleStyle.textContent = `
    @keyframes float-particle {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(particleStyle);

// Create particles periodically
setInterval(createParticle, 3000);

// Button hover effects
document.querySelectorAll('.glow-btn').forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.animation = 'glow-pulse 1s ease-in-out infinite alternate';
    });
    
    button.addEventListener('mouseleave', function() {
        this.style.animation = '';
    });
});

// Add glow-pulse animation
const glowStyle = document.createElement('style');
glowStyle.textContent = `
    @keyframes glow-pulse {
        from { box-shadow: 0 0 20px #00ffff; }
        to { box-shadow: 0 0 40px #00ffff, 0 0 60px #00ffff; }
    }
`;
document.head.appendChild(glowStyle);

// Initialize all animations when page loads
window.addEventListener('load', function() {
    // Add entrance animation to hero content
    const heroContent = document.querySelector('.hero-content');
    heroContent.style.animation = 'fadeInUp 1s ease-out';
    
    // Add staggered animation to feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
});

// Add fadeInUp animation
const fadeUpStyle = document.createElement('style');
fadeUpStyle.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(fadeUpStyle);

console.log('🚀 HostBotPro website loaded successfully!');
