// script.js
document.addEventListener('DOMContentLoaded', function() {
   const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});


    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            alert('Merci pour votre message ! Je vous répondrai dès que possible.');
            
            contactForm.reset();
        });
    }
});