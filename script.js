const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', () => {
  const isOpen = navMenu.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.textContent = isOpen ? '✕' : '☰';
});

navMenu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.textContent = '☰';
  });
});

document.querySelectorAll('[data-service]').forEach((link) => {
  link.addEventListener('click', () => {
    document.getElementById('serviceSelect').value = link.dataset.service;
  });
});

document.getElementById('year').textContent = new Date().getFullYear();

const dateInput = document.querySelector('input[name="date"]');
dateInput.min = new Date().toISOString().split('T')[0];

document.getElementById('bookingForm').addEventListener('submit', (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const formData = new FormData(form);
  const name = String(formData.get('name') || '').trim();
  const service = String(formData.get('service') || '');
  const message = document.getElementById('formMessage');

  message.textContent = `Thanks, ${name}! Your demo request for ${service} has been prepared. This demo does not send or save bookings.`;
  message.style.color = '#287b4b';
  form.reset();
});
