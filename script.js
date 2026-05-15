document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => {
        observer.observe(el);
    });

    // Contact Form Logic
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            formStatus.textContent = 'Sending message...';
            formStatus.className = 'form-status';

            // Simulate form submission
            setTimeout(() => {
                formStatus.textContent = 'Thanks! Your message has been sent.';
                formStatus.className = 'form-status success';
                contactForm.reset();
            }, 1500);
        });
    }
});