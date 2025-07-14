var typed = new Typed('#element', {
    strings: ['Frontend Developer', 'And Web Developer.'],
    typeSpeed: 50,
});

// script.js


// Skills animation - animate progress bars when scrolled to
document.addEventListener('DOMContentLoaded', function() {
    const skillsSection = document.querySelector('.skills-section');
    const progressBars = document.querySelectorAll('.progress');
    
    function showProgress() {
        progressBars.forEach(progressBar => {
            const value = progressBar.getAttribute('data-skill');
            progressBar.style.width = value;
        });
    }
    
    function hideProgress() {
        progressBars.forEach(progressBar => {
            progressBar.style.width = 0;
        });
    }
    
    // Intersection Observer for skills animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                showProgress();
            }
        });
    }, {threshold: 0.5});
    
    observer.observe(skillsSection);
    
    // Mobile menu toggle
    const menuIcon = document.querySelector('.fa-bars');
    const closeIcon = document.querySelector('.fa-xmark');
    const navUl = document.querySelector('nav ul');
    
    menuIcon.addEventListener('click', () => {
        navUl.style.right = '0';
    });
    
    closeIcon.addEventListener('click', () => {
        navUl.style.right = '-200px';
    });
    
    // Close menu when clicking on a link (for mobile)
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                navUl.style.right = '-200px';
            }
        });
    });
    
    // Form submission handling
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const formData = new FormData(this);
            
            // Here you would typically send the form data to a server
            // For this example, we'll just show an alert
            alert('Thank you for your message! I will get back to you soon.');
            this.reset();
        });
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});