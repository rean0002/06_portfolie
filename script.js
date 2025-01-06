let currentSlide = 0;
const slides = document.querySelectorAll(".carousel-item");

// Funktion til at vise et specifikt slide
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active"); // Fjern 'active' fra alle slides
    if (i === index) slide.classList.add("active"); // Tilføj 'active' til det aktuelle slide
  });
}

// Funktion til næste slide
function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length; // Gå til næste slide, loop tilbage til starten
  showSlide(currentSlide);
}

// Funktion til forrige slide
function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length; // Gå til forrige slide, loop til slutningen
  showSlide(currentSlide);
}

// Initialisering: Vis første slide
showSlide(currentSlide);
