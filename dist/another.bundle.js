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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index2.js":
/*!***********************!*\
  !*** ./src/index2.js ***!
  \***********************/
/*! exports provided: moduleOneElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"moduleOneElement\", function() { return moduleOneElement; });\nconst mainScreen = document.querySelector(`#root`);\r\n\r\nconst screenAppend = (screen) => {\r\n  mainScreen.innerHTML = screen;\r\n};\r\n\r\nconst moduleOneElement = screenAppend(` <section class=\"game game--genre\">\r\n\r\n\r\n  <header class=\"game__header\">\r\n    <a class=\"game__back\" href=\"#\">\r\n      <span class=\"visually-hidden\">Сыграть ещё раз</span>\r\n      <img class=\"game__logo\" src=\"img/melody-logo-ginger.png\" alt=\"Угадай мелодию\">\r\n    </a>\r\n\r\n    <svg xmlns=\"http://www.w3.org/2000/svg\" class=\"timer\" viewBox=\"0 0 780 780\">\r\n      <circle class=\"timer__line\" cx=\"390\" cy=\"390\" r=\"370\"\r\n              style=\"filter: url(#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center\"/>\r\n    </svg>\r\n\r\n    <div class=\"timer__value\" xmlns=\"http://www.w3.org/1999/xhtml\">\r\n      <span class=\"timer__mins\">05</span>\r\n      <span class=\"timer__dots\">:</span>\r\n      <span class=\"timer__secs\">00</span>\r\n    </div>\r\n\r\n    <div class=\"game__mistakes\">\r\n      <div class=\"wrong\"></div>\r\n      <div class=\"wrong\"></div>\r\n      <div class=\"wrong\"></div>\r\n    </div>\r\n  </header>\r\n\r\n  <section class=\"game__screen\">\r\n    <h2 class=\"game__title\">Выберите инди-рок треки</h2>\r\n    <form class=\"game__tracks\">\r\n      <div class=\"track\">\r\n        <button class=\"track__button track__button--play\" type=\"button\"></button>\r\n        <div class=\"track__status\">\r\n          <audio></audio>\r\n        </div>\r\n        <div class=\"game__answer\">\r\n          <input class=\"game__input visually-hidden\" type=\"checkbox\" name=\"answer\" value=\"answer-1\" id=\"answer-1\">\r\n          <label class=\"game__check\" for=\"answer-1\">Отметить</label>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"track\">\r\n        <button class=\"track__button track__button--play\" type=\"button\"></button>\r\n        <div class=\"track__status\">\r\n          <audio></audio>\r\n        </div>\r\n        <div class=\"game__answer\">\r\n          <input class=\"game__input visually-hidden\" type=\"checkbox\" name=\"answer\" value=\"answer-1\" id=\"answer-2\">\r\n          <label class=\"game__check\" for=\"answer-2\">Отметить</label>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"track\">\r\n        <button class=\"track__button track__button--pause\" type=\"button\"></button>\r\n        <div class=\"track__status\">\r\n          <audio></audio>\r\n        </div>\r\n        <div class=\"game__answer\">\r\n          <input class=\"game__input visually-hidden\" type=\"checkbox\" name=\"answer\" value=\"answer-1\" id=\"answer-3\">\r\n          <label class=\"game__check\" for=\"answer-3\">Отметить</label>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"track\">\r\n        <button class=\"track__button track__button--play\" type=\"button\"></button>\r\n        <div class=\"track__status\">\r\n          <audio></audio>\r\n        </div>\r\n        <div class=\"game__answer\">\r\n          <input class=\"game__input visually-hidden\" type=\"checkbox\" name=\"answer\" value=\"answer-1\" id=\"answer-4\">\r\n          <label class=\"game__check\" for=\"answer-4\">Отметить</label>\r\n        </div>\r\n      </div>\r\n\r\n      <button class=\"game__submit button\" type=\"submit\">Ответить</button>\r\n    </form>\r\n  </section>\r\n</section>`);\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/index2.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_index2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/index2.js */ \"./src/index2.js\");\n\r\nconsole.log(mainScreen);\r\n\r\n\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ })

/******/ });