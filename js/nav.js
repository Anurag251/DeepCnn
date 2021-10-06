// sticky-nav
let sticky = document.querySelector("header");
window.onscroll = () => {
  this.scrollY > 180
    ? sticky.classList.add("sticky")
    : sticky.classList.remove("sticky");
};
