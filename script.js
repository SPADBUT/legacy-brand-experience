const observerOptions = {
  threshold: 0.12,
};

const fadeElements = document.querySelectorAll('.section-shell, .hero-content, .hero-image, .offering-card, .step-card, .visual-item, .sensory-card, .sensory-hero-image, .curation-image, .detail-image, .contact-copy, .contact-form');

const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      fadeObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

fadeElements.forEach((element) => fadeObserver.observe(element));

const navLinks = document.querySelectorAll('.site-nav a, .cta-button, .hero-cta');
navLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    if (link.hash && document.querySelector(link.hash)) {
      event.preventDefault();
      document.querySelector(link.hash).scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

window.addEventListener('scroll', () => {
  const header = document.querySelector('.site-header');
  if (window.scrollY > 30) {
    header.style.background = 'rgba(17, 17, 16, 0.9)';
  } else {
    header.style.background = 'rgba(17, 17, 16, 0.25)';
  }
});
