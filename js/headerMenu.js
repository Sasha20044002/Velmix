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
