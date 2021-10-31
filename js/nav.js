// sticky-nav
let sticky = document.querySelector("header");
window.onscroll = () => {
  this.scrollY > 180
    ? sticky.classList.add("sticky")
    : sticky.classList.remove("sticky");
};

// side-nav
const sideNav = document.querySelector(".side-nav");
const sideNavBtn = document.querySelector(".side-nav-btn");
const sideNavClose = document.querySelector(".side-nav-close");

sideNavBtn.addEventListener("click", () => {
  sideNav.classList.toggle("active");
  sideNavBtn.classList.toggle("active");
});

sideNavClose.addEventListener("click", () => {
  sideNav.classList.remove("active");
  sideNavBtn.classList.remove("active");
});

// side-nav-dropdown
const dropBtn = document.querySelectorAll(".drop-btn");
const sideNavDrop = document.querySelectorAll(".side-nav-drop");

dropBtn.forEach((btn, idx) => {
  btn.addEventListener("click", () => {
    sideNavDrop[idx].classList.toggle("active");
  });
});
