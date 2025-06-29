// code du header qui disparait progréssivement avec le scrool 
let lastScrollY = window.scrollY;
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
  if (window.scrollY > lastScrollY) {
    // On scroll vers le bas → cacher le header
    header.classList.add('hide');
  } else {
    // On scroll vers le haut → montrer le header
    header.classList.remove('hide');
  }
  lastScrollY = window.scrollY;
});









// Slideshow automatique avec animation du texte
const slides = document.querySelectorAll('.slider-item');
let currentSlide = 0;
const slideInterval = 4000; // 4 secondes

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

// Initialisation
showSlide(currentSlide);
setInterval(nextSlide, slideInterval);





// Toggle de la liste ul au clic sur l'image de chaque .cart
document.querySelectorAll('.col14 .cart h2').forEach(h2 => {
    h2.addEventListener('click', function(e) {
        const cart = this.closest('.cart');
        cart.classList.toggle('show-ul');
    });
});










  // Affichage du menu mobile
  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");

  menuToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
  });

  // Accordéon
  const accordionItems = document.querySelectorAll(".accordion-item");

  accordionItems.forEach(item => {
    const header = item.querySelector(".accordion-header");
    header.addEventListener("click", () => {
      item.classList.toggle("active");
    });
  });
