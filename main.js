  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('nav a');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 70;
      if (pageYOffset >= sectionTop) {
        current = section.getAttribute('id');
      }
    });
    navLinks.forEach(link => {
      link.classList.remove('active');
      if(link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  });


  const form = document.getElementById('contact-form');
  const response = document.getElementById('form-response');

  form.addEventListener('submit', e => {
    e.preventDefault();
    response.textContent = 'Sending message...';

    setTimeout(() => {
      response.textContent = 'Thank you for your message! I will get back to you soon.';
      form.reset();
    }, 1500);
  });