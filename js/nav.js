`use strict`;

const hamburgerCheckBox = document.getElementById("nav-toggle");
const hamburgerBtn = document.getElementById("nav-hamburger");
const exitBtn = document.getElementById("nav-exit");
const mobileNav = document.querySelector(".nav-wrapper");
const mediaQ800 = window.matchMedia("(min-width: 800px)");

const toggleShow = function (exitDisplay, borgarDisplay, navDisplay) {
  exitBtn.style.display = exitDisplay;
  hamburgerBtn.style.display = borgarDisplay;
  mobileNav.style.marginLeft = navDisplay;
};

const exitNav = function () {
  toggleShow("none", "block", "-50vw");
};

hamburgerBtn.addEventListener("click", function () {
  toggleShow("block", "none", "0vw");
});

// exitBtn.addEventListener("mouseup", exitNav());

document.addEventListener("mouseup", function (e) {
  const currentWidth = window.innerWidth;
  if (currentWidth < 800) {
    if (mobileNav.contains(e.target)) {
      return null;
    } else {
      exitNav();
    }
  } else {
    return null;
  }
});

document.addEventListener("scroll", function (e) {
  if (mobileNav.contains(e.target)) {
    return null;
  } else {
    exitNav();
  }
});

const desktopNav = function () {
  const currentWidth = window.innerWidth;
  if (currentWidth > 800) {
    mobileNav.style.marginLeft = "0vw";
  } else {
    exitNav();
  }
};
window.onresize = desktopNav;
