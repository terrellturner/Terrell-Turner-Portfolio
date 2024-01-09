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

  siteBody.classList.remove("relative");
  siteBody.classList.add("fixed");
}

function closeMobileNav() {
  mobileNav.classList.add("animate-slideOut");

  siteBody.classList.remove("fixed");
  siteBody.classList.add("relative");
}
