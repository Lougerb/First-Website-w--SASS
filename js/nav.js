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

exitBtn.addEventListener("click", exitNav());

document.addEventListener("mouseup", function (e) {
  if (mobileNav.contains(e.target)) {
    return null;
  } else {
    exitNav();
  }
});
document.addEventListener("scroll", function (e) {
  if (mobileNav.contains(e.target)) {
    return null;
  } else {
    exitNav();
  }
});
//ADD A FUNCTION WHEN DESKTOP MODE, NAV STYLE WILL BACK TO NORMAL
const desktopNav = function () {
  const currentWidth = window.innerWidth;
  if (currentWidth > 800) {
    mobileNav.style.marginLeft = "0vw";
  } else {
    mobileNav.style.marginLeft = "-50vw";
  }
};
window.onresize = desktopNav;
// document.addEventListener("change", desktopNav());
//stage new 2

// const widthChange = function (widthC) {
//   if (widthC.matches) {
//     hamburgerBtn.addEventListener("click", function () {
//       toggleShow("block", "none", "0vw");
//     });

//     exitBtn.addEventListener("click", function () {
//       toggleShow("none", "block", "-50vw");
//     });
//   }
// };

// widthChange(mediaQ800);
// mediaQ800.addEventListener("change", widthChange);
