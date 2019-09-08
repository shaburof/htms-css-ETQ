const navigation = qs(".navigation");
const hiddenNavigation = qs(".navigation__hidden-bg");
const bodyHiddenBgShadow = qs(".body__hidden-bg-shadow");
const navigationMobileHamburger = qs(".navigation__mobile--hamburger");
const navigationMobileNavs = qs(".navigation__mobile-navs");
const navigationMobileNavsCloseButton = qs(".navigation__mobile-navs--close");

// show subNavigation menu on mouseoven on small navigation menu
navigation.addEventListener("mouseover", () => {
  if (window.innerWidth > 1000) {
    bodyHiddenBgShadow.style.opacity = "1";
    qs("body").style.overflow = "hidden";
    setTimeout(() => {
      qs(".navigation__hidden-bg--photos").style.animation =
        "600ms navigation-photo-animation forwards";
      qs(".navigation__hidden-bg--title").style.animation =
        "600ms navigation-photo-animation forwards";
    }, 300);
  }
});

// hide subNavigation menu on mouseoven on small navigation menu
hiddenNavigation.addEventListener("mouseleave", () => {
  if (window.innerWidth > 1000) {
    bodyHiddenBgShadow.style.opacity = "0";
    qs("body").style.overflow = "auto";
    setTimeout(() => {
      qs(".navigation__hidden-bg--photos").style.animation = "unset";
      qs(".navigation__hidden-bg--title").style.animation = "unset";
    }, 300);
  }
});

// open mobile navigation bar
navigationMobileHamburger.addEventListener("click", () => {
  navigationMobileNavs.style.display = "flex";
  setTimeout(() => (navigationMobileNavs.style.opacity = "1"), 0);
});

// in windows width over then 1000px close mobile navigation bar
window.addEventListener("resize", () => {
  const windowWidth = window.innerWidth;
  if (windowWidth >= 1000) {
    navigationMobileNavs.style.opacity = "0";
    setTimeout(() => (navigationMobileNavs.style.display = "none"), 200);
  }
});

//close mobile navigation bar
navigationMobileNavsCloseButton.addEventListener("click", () => {
  navigationMobileNavs.style.opacity = "0";
  setTimeout(() => (navigationMobileNavs.style.display = "none"), 200);
});

function qs(selector) {
  return document.querySelector(selector);
}

