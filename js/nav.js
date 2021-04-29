`use strict`;

const hamburgerCheckBox = document.getElementById("nav-toggle");
const hamburgerBtn = document.getElementById("nav-hamburger");
const exitBtn = document.getElementById("nav-exit");
const mobileNav = document.querySelector(".nav-wrapper");
// const mediaQ800 = window.matchMedia("(min-width: 800px)");

const toggleShow = function (exitDisplay, borgarDisplay, navDisplay) {
  exitBtn.style.display = exitDisplay;
  hamburgerBtn.style.display = borgarDisplay;
  mobileNav.style.marginLeft = navDisplay;
};

hamburgerBtn.addEventListener("click", function () {
  toggleShow("block", "none", "0vw", mediaQ800);
});

exitBtn.addEventListener("click", function () {
  toggleShow("none", "block", "-50vw", mediaQ800);
});
//xD
//xd2
//ADD A FUNCTION WHEN DESKTOP MODE, NAV STYLE WILL BACK TO NORMAL

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
