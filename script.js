/* ── iOS viewport height fix ──────────────────────────── */
function setVH() {
  document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
}
setVH();
window.addEventListener('resize', setVH, { passive: true });

/* ── Page intro — dismiss after animation ─────────────── */
const pageIntro = document.getElementById('page-intro');
if (pageIntro) {
  setTimeout(() => {
    pageIntro.classList.add('intro-done');
    setTimeout(() => { pageIntro.style.display = 'none'; }, 700);
  }, 2700);
}

/* ── Hamburger / mobile nav ───────────────────────────── */
const hamburger  = document.getElementById('hamburger');
const mobileNav  = document.getElementById('mobile-nav');
const mobileLinks = document.querySelectorAll('.mobile-nav-link, .mobile-nav-cta');

function openNav() {
  hamburger.classList.add('is-open');
  hamburger.setAttribute('aria-expanded', 'true');
  mobileNav.classList.add('is-open');
  mobileNav.setAttribute('aria-hidden', 'false');
  header.classList.add('nav-is-open');
  document.body.style.overflow = 'hidden';
}

function closeNav() {
  hamburger.classList.remove('is-open');
  hamburger.setAttribute('aria-expanded', 'false');
  mobileNav.classList.remove('is-open');
  mobileNav.setAttribute('aria-hidden', 'true');
  header.classList.remove('nav-is-open');
  document.body.style.overflow = '';
}

hamburger.addEventListener('click', () =>
  mobileNav.classList.contains('is-open') ? closeNav() : openNav()
);

mobileLinks.forEach(l => l.addEventListener('click', closeNav));

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && mobileNav.classList.contains('is-open')) closeNav();
});

/* ── Header: opaque on scroll ─────────────────────────── */
const header = document.querySelector('.site-header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

/* ── Scroll-reveal — standard fade ───────────────────── */
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal, .reveal-children, .reveal-img')
  .forEach(el => revealObserver.observe(el));

/* ── Scroll-reveal — staggered for specific grids ──────── */
const staggerObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      staggerObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.06 });

document.querySelectorAll('.process-steps, .services-grid')
  .forEach(el => staggerObserver.observe(el));

/* ── Smooth scroll for anchor links ──────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

/* ── WhatsApp conversion tracking ────────────────────── */
document.querySelectorAll('a[href*="wa.me"]').forEach(link => {
  link.addEventListener('click', () => {
    if (typeof gtag === 'function') {
      gtag('event', 'whatsapp_click', {
        event_category: 'lead',
        event_label: 'whatsapp'
      });
    }
  });
});

/* ── Very subtle parallax on hero image ──────────────── */
const heroImg = document.querySelector('.hero-img');
if (heroImg && window.matchMedia('(min-width: 769px)').matches) {
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if (scrollY < window.innerHeight * 1.2) {
      heroImg.style.transform = `translateY(${scrollY * 0.12}px)`;
    }
  }, { passive: true });
}
