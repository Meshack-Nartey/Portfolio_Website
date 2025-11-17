// ===== SMOOTH SCROLLING & NAVIGATION =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// ===== CONTACT FORM HANDLING =====
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', async function (e) {
        e.preventDefault();

        const form = this;
        const submitBtn = form.querySelector('button[type="submit"]');
        const statusEl = document.getElementById('contact-msg');

        // Basic extraction & validation
        const name = form.querySelector('input[name="name"]').value.trim();
        const email = form.querySelector('input[name="email"]').value.trim();
        const message = form.querySelector('textarea[name="message"]').value.trim();

        if (!name || !email || !message) {
            statusEl.textContent = 'Please fill in all fields.';
            statusEl.style.color = 'var(--accent-color-dark)';
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            statusEl.textContent = 'Please enter a valid email address.';
            statusEl.style.color = 'var(--accent-color-dark)';
            return;
        }

    // Disable submit while sending and show visual loader
    submitBtn.disabled = true;
    const btnText = submitBtn.querySelector('.btn-text');
    submitBtn.classList.add('loading');
    if (btnText) btnText.textContent = 'Sending...';
    statusEl.textContent = '';

        // Send to Formspree endpoint (replace data-endpoint value with your Formspree URL)
        const endpoint = form.dataset.endpoint || 'https://formspree.io/f/your-form-id';
        const formData = new FormData(form);

        try {
            const res = await fetch(endpoint, {
                method: 'POST',
                headers: { 'Accept': 'application/json' },
                body: formData
            });

            if (res.ok) {
                statusEl.textContent = `Thank you, ${name}! Your message has been sent.`;
                statusEl.classList.remove('msg-error');
                statusEl.classList.add('msg-success');
                form.reset();
            } else {
                const data = await res.json();
                statusEl.textContent = data.error || 'There was a problem sending your message. Please try again later.';
                statusEl.classList.remove('msg-success');
                statusEl.classList.add('msg-error');
            }
        } catch (err) {
            console.error('Form submit error', err);
            statusEl.textContent = 'Network error. Please check your connection and try again.';
            statusEl.classList.remove('msg-success');
            statusEl.classList.add('msg-error');
        } finally {
            // restore button state
            submitBtn.disabled = false;
            submitBtn.classList.remove('loading');
            const btnTextRestore = submitBtn.querySelector('.btn-text');
            if (btnTextRestore) btnTextRestore.textContent = 'Send Message';
        }
    });
}

// ===== ACTIVE NAVIGATION LINK =====
window.addEventListener('scroll', () => {
    let current = '';
    
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ===== ADD ACTIVE STYLE TO NAV LINKS =====
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: #2563eb !important;
        font-weight: bold;
    }
`;
document.head.appendChild(style);

// ===== FADE IN ON SCROLL =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all project cards and skill categories
document.querySelectorAll('.project-card, .skill-category').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ===== MOBILE MENU (Optional enhancement) =====
// Add mobile menu toggle if needed
const navMenu = document.querySelector('.nav-menu');
const navLogo = document.querySelector('.nav-logo');
// Mobile menu toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenuEl = document.getElementById('nav-menu') || navMenu;

if (navToggle && navMenuEl) {
    navToggle.addEventListener('click', function() {
        const expanded = this.getAttribute('aria-expanded') === 'true';
        this.setAttribute('aria-expanded', String(!expanded));
            // Toggle open class
            navMenuEl.classList.toggle('open');
            // Toggle icon between three-dots and times
            const icon = this.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-ellipsis-v');
                icon.classList.toggle('fa-times');
            }
    });

    // Close menu when a nav link is clicked
    navMenuEl.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (navMenuEl.classList.contains('open')) {
                navMenuEl.classList.remove('open');
                navToggle.setAttribute('aria-expanded', 'false');
                const icon = navToggle.querySelector('i');
                if (icon) { icon.classList.remove('fa-times'); icon.classList.add('fa-ellipsis-v'); }
            }
        });
    });

    // Close on Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navMenuEl.classList.contains('open')) {
            navMenuEl.classList.remove('open');
            navToggle.setAttribute('aria-expanded', 'false');
            const icon = navToggle.querySelector('i');
            if (icon) { icon.classList.remove('fa-times'); icon.classList.add('fa-ellipsis-v'); }
        }
    });
}

// ===== TYPING ANIMATION (Optional) =====
function typeWriter(element, text, speed = 100) {
    let index = 0;
    element.innerHTML = '';
    
    function type() {
        if (index < text.length) {
            element.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Optional: Uncomment to add typing animation to hero title
// const heroTitle = document.querySelector('.hero h1');
// if (heroTitle) {
//     const originalText = heroTitle.textContent;
//     typeWriter(heroTitle, originalText, 50);
// }

console.log('Portfolio website loaded successfully!');

// ===== PROJECT DEMO IMAGE MODAL =====
(function() {
    const modal = document.getElementById('image-modal');
    const modalImage = document.getElementById('modal-image');
    const closeBtn = modal ? modal.querySelector('.modal-close') : null;

    function openModal(src, alt = 'Project screenshot') {
        if (!modal || !modalImage) return;
        modalImage.src = src;
        modalImage.alt = alt;
        modal.classList.add('open');
        modal.setAttribute('aria-hidden', 'false');
    }

    function closeModal() {
        if (!modal) return;
        modal.classList.remove('open');
        modal.setAttribute('aria-hidden', 'true');
        // clear src after transition to free memory
        setTimeout(() => { if (modalImage) modalImage.src = ''; }, 300);
    }

    document.querySelectorAll('.view-demo').forEach(btn => {
        btn.addEventListener('click', function(e) {
            // If a Figma link is attached, open it in a new tab (preferred)
            const figmaUrl = this.dataset.figma;
            const imageSrc = this.dataset.image || this.getAttribute('data-image');

            if (figmaUrl) {
                // allow anchor default when target present, but ensure consistent behavior
                e.preventDefault();
                try {
                    window.open(figmaUrl, '_blank', 'noopener');
                } catch (err) {
                    // fallback: set location
                    window.location.href = figmaUrl;
                }
                return;
            }

            // Fallback to image modal if no figma URL provided
            if (imageSrc) {
                e.preventDefault();
                openModal(imageSrc);
            }
        });
    });

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (modal) modal.addEventListener('click', function(e) {
        if (e.target === modal) closeModal();
    });
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') closeModal();
    });
})();
