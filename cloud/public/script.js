document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
  
        if (name === '' || email === '' || message === '') {
          alert('Please fill in all fields.');
        } else {
          alert('Thank you for your message!');
          contactForm.reset();
        }
      });
    }
  });
  