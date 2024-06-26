var swiper = new Swiper(".carousel-content", {
  loop: true,
  slidesPerView: "auto",
  centeredSlides: true,
  autoHeight: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var nav = document.querySelector("nav");

window.addEventListener("scroll", function () {
  if (window.pageYOffset >= 100) {
    nav.classList.add("scroll");
    nav.classList.add("bg-custom-nav", "shadow");
  } else {
    nav.classList.remove("scroll");
    nav.classList.remove("bg-custom-nav", "shadow");
  }
});
