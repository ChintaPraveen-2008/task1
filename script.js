// ===== NAVBAR SCROLL EFFECT =====

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

  navbar.classList.toggle("scrolled", window.scrollY > 50);

});

// ===== MOBILE MENU =====

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {

  navLinks.classList.toggle("active");

});

// ===== SCROLL REVEAL ANIMATION =====

const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {

    if(entry.isIntersecting){

      entry.target.classList.add("show");

    }

  });

});

hiddenElements.forEach((el) => observer.observe(el));