import { library, icon } from "@fortawesome/fontawesome-svg-core";
import { faReact } from "@fortawesome/free-brands-svg-icons";

const techEls = document.getElementsByClassName("tech-skill-item");

const techNames = [
  "JavaScript",
  "HTML+CSS",
  "C#",
  "React",
  "Vue",
  "Figma",
  "InDesign",
  "",
];

const siteBody = document.getElementsByTagName("body")[0];

//Open mobile nav

const mobileNav = document.getElementById("mobile-nav");

const mobileNavHamburger = document
  .getElementById("hamburger")
  .addEventListener("click", mobileNavTap);

function mobileNavTap() {
  //Check <body> for fixed
  if (!siteBody.classList.contains("fixed")) {
    mobileNav.classList.remove("animate-slideOut");
    openMobileNav();
  } else {
    mobileNav.classList.remove("animate-slideIn");
    closeMobileNav();
  }
}

function openMobileNav() {
  mobileNav.classList.add("animate-slideIn");

  toggleMobileNavContactBtns();

  siteBody.classList.remove("relative");
  siteBody.classList.add("fixed");
}

function closeMobileNav() {
  mobileNav.classList.add("animate-slideOut");

  siteBody.classList.remove("fixed");
  siteBody.classList.add("relative");
}

function toggleMobileNavContactBtns() {
  mobileNav.querySelector("#mobileContactBtns").classList.add("grid");
  mobileNav.querySelector("#mobileContactBtns").classList.remove("hidden");
}

//Styling mobile About Me cards
const aboutCards = document.getElementById("about-me-cards").children;

console.log(aboutCards[0]);

const observerOptions = {
  threshold: 0,
  rootMargin: "0px -50% 0px -50%",
};

const observer = new IntersectionObserver((el) => {
  el.forEach((el) => {
    if (el.isIntersecting) {
      el.target.classList.remove("about-card-animation-out");
      el.target.classList.add("about-card-animation-in");
    } else {
      el.target.classList.remove("about-card-animation-in");
      el.target.classList.add("about-card-animation-out");
    }
  });
}, observerOptions);

for (const card of aboutCards) {
  observer.observe(card);
}
