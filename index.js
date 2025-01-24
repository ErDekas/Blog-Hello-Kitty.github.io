// Función ejecutada al cargar el DOM
document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.getElementById("heroCarousel");
  const backgroundImages = [
    "assets/fondo1.jpg",
    "assets/fondo2.webp",
    "assets/fondo3.jpg",
  ];
  let currentImageIndex = 0;
  let cycleInterval;
  let isPaused = false;

  const carouselItem = carousel.querySelector(".carousel-item");
  const imgElement = carouselItem.querySelector("img");

  // Cambiar imagen del carrusel
  function changeImage(direction) {
    imgElement.classList.add("fade-out");
    setTimeout(() => {
      if (direction === "next") {
        currentImageIndex = (currentImageIndex + 1) % backgroundImages.length;
      } else if (direction === "prev") {
        currentImageIndex =
          (currentImageIndex - 1 + backgroundImages.length) %
          backgroundImages.length;
      }
      imgElement.src = backgroundImages[currentImageIndex];
      imgElement.classList.remove("fade-out");
    }, 500);
  }

  // Ciclar imágenes automáticamente
  function cycleBackground() {
    if (isPaused) return;
    changeImage("next");
  }

  // Botones de navegación manual
  const prevButton = carousel.querySelector(".carousel-control-prev");
  const nextButton = carousel.querySelector(".carousel-control-next");

  prevButton.addEventListener("click", () => changeImage("prev"));
  nextButton.addEventListener("click", () => changeImage("next"));

  // Pausar el ciclado cuando se haga hover en el carrusel
  carousel.addEventListener("mouseenter", () => {
    isPaused = true;
  });

  carousel.addEventListener("mouseleave", () => {
    isPaused = false;
  });

  // Empezar a ciclar cada 5 segundos
  cycleInterval = setInterval(cycleBackground, 5000);
});
