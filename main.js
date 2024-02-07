const siteBody = document.getElementsByTagName("body")[0];
const nav = siteBody.querySelector("nav");
const mobileNav = nav.querySelector("#mobile-nav");

const navList = ["home", "about", "projects", "skills", "contact"];

//Nav event delegate
nav.addEventListener("click", (el) => {
  navList.forEach((link) => {
    if (el.target.classList.contains(`${link}`)) {
      closeMobileNav();

      siteBody
        .getElementsByTagName("main")[0]
        .querySelector(`#${link}`)
        .scrollIntoView({ behavior: "smooth" });
    } else {
      return;
    }
  });
});

//Open mobile nav
const mobileNavHamburger = document
  .getElementById("hamburger")
  .addEventListener("click", () => {
    if (
      !siteBody.classList.contains("fixed") ? openMobileNav() : closeMobileNav()
    );
  });

function openMobileNav() {
  mobileNav.classList.remove("animate-slideOut");
  siteBody.classList.remove("relative");
  mobileNav.classList.add("animate-slideIn");
  siteBody.classList.add("fixed");
}

function closeMobileNav() {
  mobileNav.classList.remove("animate-slideIn");
  siteBody.classList.remove("fixed");
  mobileNav.classList.add("animate-slideOut");
  siteBody.classList.add("relative");
}
