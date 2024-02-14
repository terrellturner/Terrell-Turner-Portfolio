const siteBody = document.getElementsByTagName("body")[0];

const nav = siteBody.querySelector("nav");
const header = siteBody.querySelector("header");

const mobileNav = nav.querySelector("#mobile-nav");
const navList = ["home", "about", "projects", "skills", "contact"];

let pageScrollPos = 0;
let navScrollThreshold = 0;
const navThreshold = 0.023;

document.addEventListener("scroll", () => {
  pageScrollPos =
    window.scrollY / (document.body.offsetHeight - window.innerHeight);
  navScrollHandler();
});

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

function navScrollHandler() {
  if (navScrollThreshold < 0.00025) {
    header.classList.remove("transition-transform");
    header.classList.remove("fixed");
    header.classList.add("relative");
  }

  if (pageScrollPos > navScrollThreshold && pageScrollPos > navThreshold) {
    header.classList.add("-translate-y-24");
    header.classList.remove("relative");
    header.classList.add("fixed");
  } else if (pageScrollPos < navScrollThreshold) {
    header.classList.add("transition-transform");
    header.classList.remove("-translate-y-24");
    header.classList.add("fixed");
  }

  navScrollThreshold = pageScrollPos <= 0 ? 0 : pageScrollPos;
}

//Open mobile nav
const mobileNavHamburger = document
  .getElementById("hamburger")
  .addEventListener("click", () => {
    if (
      document.body.style.overflowY === "hidden"
        ? closeMobileNav()
        : openMobileNav()
    );
  });

function openMobileNav() {
  mobileNav.classList.remove("animate-slideOut");
  mobileNav.classList.add("animate-slideIn");
  document.body.style.overflowY = "hidden";
}

function closeMobileNav() {
  document.body.style.overflowY = "visible";
  mobileNav.classList.remove("animate-slideIn");
  mobileNav.classList.add("animate-slideOut");
}
