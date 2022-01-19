const swiper = new Swiper(".header__slider", {
  loop: true,
  speed: 1000,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1000: {
      allowTouchMove: false,
    },
  },
});

const open = document.getElementById("open-nav");
const close = document.getElementById("close-nav");
const nav = document.getElementById("nav");
const html = document.querySelector("html");

open.addEventListener("click", () => {
  nav.classList.remove("hidden");
  nav.classList.add("visible");
  html.classList.add("fixed");
});

close.addEventListener("click", () => {
  nav.classList.add("hidden");
  html.classList.remove("fixed");
  nav.classList.remove("visible");
});
