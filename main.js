// Theme toggle with localStorage
const themeToggle = document.getElementById('themeToggle');
const root = document.documentElement;
const stored = localStorage.getItem('theme');

if (stored) root.setAttribute('data-theme', stored);
else root.setAttribute('data-theme', 'dark');

themeToggle.addEventListener('click', () => {
  const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
});

// Expand / collapse details
document.querySelectorAll('.js-toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    const id = btn.getAttribute('aria-controls');
    const section = document.getElementById(id);
    const open = btn.getAttribute('aria-expanded') === 'true';
    section.style.display = open ? 'none' : 'block';
    btn.setAttribute('aria-expanded', String(!open));
    btn.textContent = open ? 'Details' : 'Hide';
  });
});

// Reveal on scroll
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      io.unobserve(e.target);
    }
  });
},{ threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Year
document.getElementById('year').textContent = new Date().getFullYear();
