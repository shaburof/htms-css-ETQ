import "../css/main.scss";
import "../css/footwear.scss";

import "./navigationBarHandler";
import "./footwear";
import "./footer";

// for show/hide scroll up button
const scrollUpButton = qs(".scroll-button");

// for scroll change navigation bar from white to black
const navigationDesktop = qs(".navigation__desktop");
const navigationMobile = qs(".navigation__mobile");

// add event listener for vertical scroll
document.addEventListener("scroll", () => {
  const windowY = window.scrollY;

  if (windowY >= 1000) {
    scrollUpButton.style.opacity = "1";
  } else {
    scrollUpButton.style.opacity = "0";
  }

  if (windowY >= 100) {
    navigationDesktop.classList.add("navidation__desktop--white");
    navigationMobile.classList.add("navigation__mobile--white");
  } else {
    navigationDesktop.classList.remove("navidation__desktop--white");
    navigationMobile.classList.remove("navigation__mobile--white");
  }
});

// function
// ----------------------------------
function dd(data) {
  console.log(data);
}
function qs(selector) {
  return document.querySelector(selector);
}
