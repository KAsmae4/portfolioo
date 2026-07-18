// ===== NAV: hide on scroll down, show on scroll up, blur bg once scrolled =====
const nav = document.getElementById('nav');
let lastY = window.scrollY;

window.addEventListener('scroll', () => {
  const y = window.scrollY;
  nav.classList.toggle('scrolled', y > 60);

  if (y > lastY && y > 200) {
    nav.classList.add('nav-hidden');
  } else {
    nav.classList.remove('nav-hidden');
  }
  lastY = y;
}, { passive: true });

// ===== MOBILE MENU =====
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');

menuBtn.addEventListener('click', () => {
  const open = mobileMenu.classList.toggle('open');
  menuBtn.classList.toggle('open', open);
  menuBtn.setAttribute('aria-expanded', String(open));
});

mobileMenu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    menuBtn.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
  });
});

// ===== EXPERIENCE TABS =====
const tabBtns = document.querySelectorAll('.tab-btn');
const tabPanels = document.querySelectorAll('.tab-panel');

tabBtns.forEach((btn, i) => {
  btn.addEventListener('click', () => {
    tabBtns.forEach((b) => { b.classList.remove('active'); b.setAttribute('aria-selected', 'false'); });
    tabPanels.forEach((p) => { p.classList.remove('active'); p.hidden = true; });

    btn.classList.add('active');
    btn.setAttribute('aria-selected', 'true');
    tabPanels[i].classList.add('active');
    tabPanels[i].hidden = false;
  });
});

// ===== SCROLL REVEAL =====
const revealTargets = document.querySelectorAll('.section');

const revealObserver = new IntersectionObserver(
  (entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        obs.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

revealTargets.forEach((el) => revealObserver.observe(el));
