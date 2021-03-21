/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app/App.js":
/*!************************!*\
  !*** ./src/app/App.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _slides_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slides.js */ \"./src/app/slides.js\");\n\r\n\r\n\r\n (0,_slides_js__WEBPACK_IMPORTED_MODULE_0__.slides)()\r\n\r\n const cards = Array.from(document.querySelectorAll('.card'));\r\n const sliderContainer = document.querySelector('.slider-container');\r\n const main = document.querySelector(\"main\")\r\nconst homes = Array.from(document.querySelectorAll('.fa-home'));\r\nconst body = document.querySelector(\"body\")\r\n\r\n cards.forEach((card)=>{\r\n    card.addEventListener('click', ()=>{\r\n  \r\n        main.style.display = \"none\";\r\n        sliderContainer.style.display = \"inline-flex\"\r\n      \r\n     })\r\n\r\n })\r\n homes.forEach((home)=>{\r\n    home.addEventListener('click', ()=>{\r\n\r\n        main.style.display = \"block\";\r\n        sliderContainer.style.display = \"none\";\r\n  \r\n     })\r\n\r\n })\n\n//# sourceURL=webpack://brochure/./src/app/App.js?");

/***/ }),

/***/ "./src/app/slides.js":
/*!***************************!*\
  !*** ./src/app/slides.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"slides\": () => (/* binding */ slides)\n/* harmony export */ });\n\r\nfunction slides(){\r\n\r\n    const slider = document.querySelector('.slider-container'),\r\n    slides = Array.from(document.querySelectorAll('.slide'))\r\n  \r\nlet isDragging = false,\r\n    startPos = 0,\r\n    currentTranslate = 0,\r\n    prevTranslate = 0,\r\n    animationID = 0,\r\n    currentIndex = 0\r\n\r\n    // Disable context menu\r\n    // window.oncontextmenu = function (event) {\r\n    // event.preventDefault()\r\n    // event.stopPropagation()\r\n    // return false\r\n    // }\r\n\r\n\r\n    slides.forEach((slide, index) => {\r\n        const slideImage = slide.querySelector('img')\r\n        slideImage.addEventListener('dragstart', (e)=>{\r\n            e.preventDefault()\r\n        })\r\n\r\n        // Touch events\r\n        slide.addEventListener('touchstart', touchStart(index))\r\n        slide.addEventListener('touchend', touchEnd)\r\n        slide.addEventListener('touchmove', touchMove)\r\n\r\n        // Mouse events\r\n        slide.addEventListener('mousedown', touchStart(index))\r\n        slide.addEventListener('mouseup', touchEnd)\r\n        slide.addEventListener('mouseleave', touchEnd)\r\n        slide.addEventListener('mousemove', touchMove)\r\n     \r\n    })\r\n\r\n    function touchStart(index){\r\n        return function(event){\r\n            currentIndex = index;\r\n            startPos = getPositionX(event)\r\n            isDragging = true\r\n            // https://css-tricks.com/using-requestanimationframe/\r\n            animationID = requestAnimationFrame(animation)\r\n            slider.classList.add('grabbing')\r\n        }\r\n    }\r\n    function touchEnd(){\r\n        isDragging = false\r\n        cancelAnimationFrame(animationID)\r\n\r\n        const movedBy = currentTranslate - prevTranslate\r\n\r\n        if(movedBy < -100 && currentIndex < slides.length -1){\r\n            currentIndex ++\r\n        }\r\n\r\n        if(movedBy > 100 && currentIndex > 0){\r\n            currentIndex --\r\n        }\r\n        setPositionByIndex()\r\n\r\n        slider.classList.remove('grabbing')\r\n    }\r\n\r\n    function touchMove(event){\r\n        if(isDragging){\r\n           const currentPosition = getPositionX(event)\r\n           currentTranslate = prevTranslate + currentPosition - startPos\r\n        }\r\n\r\n    }\r\n   \r\n    function getPositionX(event) {\r\n        return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX\r\n      }\r\n\r\n      function animation(){\r\n        setSliderPosition()\r\n          if(isDragging) requestAnimationFrame(animation)\r\n      }\r\n\r\n      function setSliderPosition() {\r\n        slider.style.transform = `translateX(${currentTranslate}px)`\r\n      }\r\n\r\n      function setPositionByIndex(){\r\n          currentTranslate = currentIndex * -window.innerWidth;\r\n          prevTranslate = currentTranslate\r\n          setSliderPosition()\r\n      }\r\n}\r\n\n\n//# sourceURL=webpack://brochure/./src/app/slides.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app/App.js");
/******/ 	
/******/ })()
;