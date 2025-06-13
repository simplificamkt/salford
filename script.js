// script.js
document.addEventListener('DOMContentLoaded', () => {
  // Smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Form validation
  const form = document.getElementById('form');
  const emailInput = document.getElementById('email');
  const msg = document.getElementById('form-msg');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const email = emailInput.value.trim();

    if (validateEmail(email)) {
      msg.textContent = "¡Gracias por suscribirte!";
      msg.style.color = 'green';
      form.reset();
    } else {
      msg.textContent = "Por favor ingresa un correo válido.";
      msg.style.color = 'red';
    }
  });

  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  // Animaciones con IntersectionObserver
  const sections = document.querySelectorAll('section');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1
  });

  sections.forEach(section => {
    section.classList.add('invisible');
    observer.observe(section);
  });
});
