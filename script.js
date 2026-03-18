document.addEventListener('DOMContentLoaded', () => {
  // ── Active nav link
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') === page) a.classList.add('active');
  });

  // ── Hamburger
  const ham = document.querySelector('.hamburger');
  const nl  = document.querySelector('.nav-links');
  if (ham && nl) {
    ham.addEventListener('click', () => {
      nl.classList.toggle('open');
      ham.classList.toggle('open');
    });
    nl.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => { nl.classList.remove('open'); ham.classList.remove('open'); });
    });
  }

  // ── Nav scroll shadow
  const nav = document.querySelector('.site-nav');
  window.addEventListener('scroll', () => {
    nav && nav.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });

  // ── Reveal on scroll
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
});
