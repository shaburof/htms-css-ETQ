/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/css/footwear.scss":
/*!*******************************!*\
  !*** ./src/css/footwear.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/css/footwear.scss?");

/***/ }),

/***/ "./src/css/main.scss":
/*!***************************!*\
  !*** ./src/css/main.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/css/main.scss?");

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ../css/main.scss */ \"./src/css/main.scss\");\n\n__webpack_require__(/*! ../css/footwear.scss */ \"./src/css/footwear.scss\");\n\n__webpack_require__(/*! ./navigationBarHandler */ \"./src/js/navigationBarHandler.js\");\n\n__webpack_require__(/*! ./footwear */ \"./src/js/footwear.js\");\n\n__webpack_require__(/*! ./footer */ \"./src/js/footer.js\");\n\n// for show/hide scroll up button\nvar scrollUpButton = qs(\".scroll-button\");\n\n// for scroll change navigation bar from white to black\nvar navigationDesktop = qs(\".navigation__desktop\");\nvar navigationMobile = qs(\".navigation__mobile\");\n\n// add event listener for vertical scroll\ndocument.addEventListener(\"scroll\", function () {\n  var windowY = window.scrollY;\n\n  if (windowY >= 1000) {\n    scrollUpButton.style.opacity = \"1\";\n  } else {\n    scrollUpButton.style.opacity = \"0\";\n  }\n\n  if (windowY >= 100) {\n    navigationDesktop.classList.add(\"navidation__desktop--white\");\n    navigationMobile.classList.add(\"navigation__mobile--white\");\n  } else {\n    navigationDesktop.classList.remove(\"navidation__desktop--white\");\n    navigationMobile.classList.remove(\"navigation__mobile--white\");\n  }\n});\n\n// function\n// ----------------------------------\nfunction dd(data) {\n  console.log(data);\n}\nfunction qs(selector) {\n  return document.querySelector(selector);\n}\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ }),

/***/ "./src/js/footer.js":
/*!**************************!*\
  !*** ./src/js/footer.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar plus1 = qs(\"#plus1\");\nvar plus2 = qs(\"#plus2\");\nvar plus3 = qs(\"#plus3\");\nvar plus4 = qs(\"#plus4\");\n\naddClickEventOnPlusButton(plus1);\naddClickEventOnPlusButton(plus2);\naddClickEventOnPlusButton(plus3);\naddClickEventOnPlusButton(plus4);\n\nfunction addClickEventOnPlusButton(element) {\n  var isOpen = false;\n  element.addEventListener(\"click\", function (event) {\n    var plusMinusButton = element.children[0];\n    var text = element.nextElementSibling;\n    var textWrapper = element.nextElementSibling.children[0];\n\n    if (!isOpen) {\n      plusMinusButton.innerText = \"-\";\n      text.style.height = \"70px\";\n      textWrapper.style.display = \"block\";\n      setTimeout(function () {\n        textWrapper.style.opacity = \"1\";\n        textWrapper.style.transform = \"translateY(0)\";\n      }, 0);\n    } else {\n      plusMinusButton.innerText = \"+\";\n      text.style.transition = \"all 500ms 500ms\";\n      text.style.height = \"0\";\n      textWrapper.style.transition = \"opacity 500ms\";\n      textWrapper.style.opacity = \"0\";\n      setTimeout(function () {\n        textWrapper.style.transform = \"translateY(-45%)\";\n        textWrapper.style.transition = \"all 500ms 300ms\";\n        text.style.transition = \"all 500ms\";\n      }, 500);\n    }\n    isOpen = !isOpen;\n  });\n}\n\nfunction dd(data) {\n  console.log(data);\n}\nfunction qs(selector) {\n  return document.querySelector(selector);\n}\n\n//# sourceURL=webpack:///./src/js/footer.js?");

/***/ }),

/***/ "./src/js/footwear.js":
/*!****************************!*\
  !*** ./src/js/footwear.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar slider = document.querySelector(\".footwear-sections\");\nvar isDown = false;\nvar startX = void 0;\nvar scrollLeft = void 0;\n\nslider.addEventListener(\"mousedown\", function (e) {\n  isDown = true;\n  startX = e.pageX - slider.offsetLeft;\n  scrollLeft = slider.scrollLeft;\n});\nslider.addEventListener(\"mouseleave\", function () {\n  isDown = false;\n});\nslider.addEventListener(\"mouseup\", function () {\n  isDown = false;\n});\nslider.addEventListener(\"mousemove\", function (e) {\n  if (!isDown) return;\n  e.preventDefault();\n  var x = e.pageX - slider.offsetLeft;\n  var walk = (x - startX) * 1;\n  slider.scrollLeft = scrollLeft - walk;\n});\n\n//# sourceURL=webpack:///./src/js/footwear.js?");

/***/ }),

/***/ "./src/js/navigationBarHandler.js":
/*!****************************************!*\
  !*** ./src/js/navigationBarHandler.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar navigation = qs(\".navigation\");\nvar hiddenNavigation = qs(\".navigation__hidden-bg\");\nvar bodyHiddenBgShadow = qs(\".body__hidden-bg-shadow\");\nvar navigationMobileHamburger = qs(\".navigation__mobile--hamburger\");\nvar navigationMobileNavs = qs(\".navigation__mobile-navs\");\nvar navigationMobileNavsCloseButton = qs(\".navigation__mobile-navs--close\");\n\n// show subNavigation menu on mouseoven on small navigation menu\nnavigation.addEventListener(\"mouseover\", function () {\n  if (window.innerWidth > 1000) {\n    bodyHiddenBgShadow.style.opacity = \"1\";\n    qs(\"body\").style.overflow = \"hidden\";\n    setTimeout(function () {\n      qs(\".navigation__hidden-bg--photos\").style.animation = \"600ms navigation-photo-animation forwards\";\n      qs(\".navigation__hidden-bg--title\").style.animation = \"600ms navigation-photo-animation forwards\";\n    }, 300);\n  }\n});\n\n// hide subNavigation menu on mouseoven on small navigation menu\nhiddenNavigation.addEventListener(\"mouseleave\", function () {\n  if (window.innerWidth > 1000) {\n    bodyHiddenBgShadow.style.opacity = \"0\";\n    qs(\"body\").style.overflow = \"auto\";\n    setTimeout(function () {\n      qs(\".navigation__hidden-bg--photos\").style.animation = \"unset\";\n      qs(\".navigation__hidden-bg--title\").style.animation = \"unset\";\n    }, 300);\n  }\n});\n\n// open mobile navigation bar\nnavigationMobileHamburger.addEventListener(\"click\", function () {\n  navigationMobileNavs.style.display = \"flex\";\n  setTimeout(function () {\n    return navigationMobileNavs.style.opacity = \"1\";\n  }, 0);\n});\n\n// in windows width over then 1000px close mobile navigation bar\nwindow.addEventListener(\"resize\", function () {\n  var windowWidth = window.innerWidth;\n  if (windowWidth >= 1000) {\n    navigationMobileNavs.style.opacity = \"0\";\n    setTimeout(function () {\n      return navigationMobileNavs.style.display = \"none\";\n    }, 200);\n  }\n});\n\n//close mobile navigation bar\nnavigationMobileNavsCloseButton.addEventListener(\"click\", function () {\n  navigationMobileNavs.style.opacity = \"0\";\n  setTimeout(function () {\n    return navigationMobileNavs.style.display = \"none\";\n  }, 200);\n});\n\nfunction qs(selector) {\n  return document.querySelector(selector);\n}\n\n//# sourceURL=webpack:///./src/js/navigationBarHandler.js?");

/***/ })

/******/ });