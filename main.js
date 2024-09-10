// Scroll Effect On Nav
window.addEventListener("scroll", function () {
  var navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Show the button when the user scrolls down 200px from the top
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  var scrollToTopBtn = document.getElementById("scrollToTopBtn");
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
}

// Scroll the page to the top smoothly when the button is clicked
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Animation left to middle
ScrollReveal().reveal(".reveal-left", {
  origin: "left",
  distance: "100px",
  duration: 3000,
  delay: 200,
  reset: true,
});

// Animation right to middle
ScrollReveal().reveal(".reveal-right", {
  origin: "right",
  distance: "100px",
  duration: 3000,
  delay: 200,
  reset: true,
});

// Animation top to middle
ScrollReveal().reveal(".reveal-top", {
  origin: "top",
  distance: "100px",
  duration: 3000,
  delay: 200,
  reset: true,
});

// Animation bottom to middle
ScrollReveal().reveal(".reveal-bottom", {
  origin: "bottom",
  distance: "100px",
  duration: 3000,
  delay: 200,
  reset: true,
});

// Mobile Navbar
const menuButton = document.querySelector(".navUp_menuLine");
const closeButton = document.querySelector(".close");
const mobileNavMenu = document.querySelector(".mobile_nav_menu");

menuButton.addEventListener("click", () => {
  mobileNavMenu.classList.add("show");
});

closeButton.addEventListener("click", () => {
  mobileNavMenu.classList.remove("show");
});
