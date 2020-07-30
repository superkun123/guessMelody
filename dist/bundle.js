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

/***/ "./src/game-artist.js":
/*!****************************!*\
  !*** ./src/game-artist.js ***!
  \****************************/
/*! exports provided: moduleArtists */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"moduleArtists\", function() { return moduleArtists; });\n/* harmony import */ var _result_success_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./result-success.js */ \"./src/result-success.js\");\n/* harmony import */ var _welcome_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./welcome.js */ \"./src/welcome.js\");\n\r\n\r\nconst mainScreen = document.querySelector(`#root`);\r\nconst moduleArtists = () => {\r\n  mainScreen.innerHTML = `<section class=\"game game--artist\">\r\n  <header class=\"game__header\">\r\n    <a class=\"game__back\" href=\"#\">\r\n      <span class=\"visually-hidden\">Сыграть ещё раз</span>\r\n      <img class=\"game__logo\" src=\"img/melody-logo-ginger.png\" alt=\"Угадай мелодию\">\r\n    </a>\r\n\r\n    <svg xmlns=\"http://www.w3.org/2000/svg\" class=\"timer\" viewBox=\"0 0 780 780\">\r\n      <circle class=\"timer__line\" cx=\"390\" cy=\"390\" r=\"370\" style=\"filter: url(#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center\" />\r\n    </svg>\r\n\r\n    <div class=\"timer__value\" xmlns=\"http://www.w3.org/1999/xhtml\">\r\n      <span class=\"timer__mins\">05</span>\r\n      <span class=\"timer__dots\">:</span>\r\n      <span class=\"timer__secs\">00</span>\r\n    </div>\r\n\r\n    <div class=\"game__mistakes\">\r\n      <div class=\"wrong\"></div>\r\n      <div class=\"wrong\"></div>\r\n      <div class=\"wrong\"></div>\r\n    </div>\r\n  </header>\r\n\r\n  <section class=\"game__screen\">\r\n    <h2 class=\"game__title\">Кто исполняет эту песню?</h2>\r\n    <div class=\"game__track\">\r\n      <div class=\"track\">\r\n        <button class=\"track__button track__button--play\" type=\"button\"></button>\r\n        <div class=\"track__status\">\r\n          <audio></audio>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <form class=\"game__artist\">\r\n      <div class=\"artist\">\r\n        <input class=\"artist__input visually-hidden\" type=\"radio\" name=\"answer\" value=\"artist-1\" id=\"answer-1\">\r\n        <label class=\"artist__name\" for=\"answer-1\">\r\n          <img class=\"artist__picture\" src=\"http://placehold.it/134x134\" alt=\"Пелагея\">\r\n          Пелагея\r\n        </label>\r\n      </div>\r\n\r\n      <div class=\"artist\">\r\n        <input class=\"artist__input visually-hidden\" type=\"radio\" name=\"answer\" value=\"artist-2\" id=\"answer-2\">\r\n        <label class=\"artist__name\" for=\"answer-2\">\r\n          <img class=\"artist__picture\" src=\"http://placehold.it/134x134\" alt=\"Пелагея\">\r\n          Краснознаменная дивизия имени моей бабушки\r\n        </label>\r\n      </div>\r\n\r\n      <div class=\"artist\">\r\n        <input class=\"artist__input visually-hidden\" type=\"radio\" name=\"answer\" value=\"artist-3\" id=\"answer-3\">\r\n        <label class=\"artist__name\" for=\"answer-3\">\r\n          <img class=\"artist__picture\" src=\"http://placehold.it/134x134\" alt=\"Пелагея\">\r\n          Lorde\r\n        </label>\r\n      </div>\r\n    </form>\r\n  </section>\r\n</section>`;\r\n\r\n  const answerArtists = document.querySelectorAll(`.artist__picture`);\r\n  for (let i = 0; i < answerArtists.length; i++) {\r\n    answerArtists[i].addEventListener(`click`, () => {\r\n      Object(_result_success_js__WEBPACK_IMPORTED_MODULE_0__[\"moduleWin\"])();\r\n    });\r\n  }\r\n\r\n\r\n  const toMainScreen = document.querySelector(`.game__back`);\r\n  toMainScreen.addEventListener(`click`, () => {\r\n    Object(_welcome_js__WEBPACK_IMPORTED_MODULE_1__[\"moduleWelcome\"])();\r\n  });\r\n\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/game-artist.js?");

/***/ }),

/***/ "./src/genre.js":
/*!**********************!*\
  !*** ./src/genre.js ***!
  \**********************/
/*! exports provided: moduleGenre, total */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"moduleGenre\", function() { return moduleGenre; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"total\", function() { return total; });\n/* harmony import */ var _game_artist_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game-artist.js */ \"./src/game-artist.js\");\n/* harmony import */ var _welcome_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./welcome.js */ \"./src/welcome.js\");\n\r\n\r\n\r\nconst mainScreen = document.querySelector(`#root`);\r\nlet total;\r\n\r\n\r\nconst moduleGenre = () => {\r\n  mainScreen.innerHTML = `section class=\"game game--genre\">\r\n  <header class=\"game__header\">\r\n    <a class=\"game__back\" href=\"#\">\r\n      <span class=\"visually-hidden\">Сыграть ещё раз</span>\r\n      <img class=\"game__logo\" src=\"img/melody-logo-ginger.png\" alt=\"Угадай мелодию\">\r\n    </a>\r\n\r\n    <svg xmlns=\"http://www.w3.org/2000/svg\" class=\"timer\" viewBox=\"0 0 780 780\">\r\n      <circle class=\"timer__line\" cx=\"390\" cy=\"390\" r=\"370\"\r\n              style=\"filter: url(#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center\"/>\r\n    </svg>\r\n\r\n    <div class=\"timer__value\" xmlns=\"http://www.w3.org/1999/xhtml\">\r\n      <span class=\"timer__mins\">05</span>\r\n      <span class=\"timer__dots\">:</span>\r\n      <span class=\"timer__secs\">00</span>\r\n    </div>\r\n\r\n    <div class=\"game__mistakes\">\r\n      <div class=\"wrong\"></div>\r\n      <div class=\"wrong\"></div>\r\n      <div class=\"wrong\"></div>\r\n    </div>Z dxthf j\r\n  </header>\r\n\r\n  <section class=\"game__screen\">\r\n    <h2 class=\"game__title\">Выберите инди-рок треки</h2>\r\n    <form class=\"game__tracks\">\r\n      <div class=\"track\">\r\n        <button class=\"track__button track__button--play\" type=\"button\"></button>\r\n        <div class=\"track__status\">\r\n          <audio></audio>\r\n        </div>\r\n        <div class=\"game__answer\">\r\n          <input class=\"game__input visually-hidden\" type=\"checkbox\" name=\"answer\" value=\"answer-1\" id=\"answer-1\">\r\n          <label class=\"game__check\" for=\"answer-1\">Отметить</label>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"track\">\r\n        <button class=\"track__button track__button--play\" type=\"button\"></button>\r\n        <div class=\"track__status\">\r\n          <audio></audio>\r\n        </div>\r\n        <div class=\"game__answer\">\r\n          <input class=\"game__input visually-hidden\" type=\"checkbox\" name=\"answer\" value=\"answer-1\" id=\"answer-2\">\r\n          <label class=\"game__check\" for=\"answer-2\">Отметить</label>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"track\">\r\n        <button class=\"track__button track__button--pause\" type=\"button\"></button>\r\n        <div class=\"track__status\">\r\n          <audio></audio>\r\n        </div>\r\n        <div class=\"game__answer\">\r\n          <input class=\"game__input visually-hidden\" type=\"checkbox\" name=\"answer\" value=\"answer-1\" id=\"answer-3\">\r\n          <label class=\"game__check\" for=\"answer-3\">Отметить</label>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"track\">\r\n        <button class=\"track__button track__button--play\" type=\"button\"></button>\r\n        <div class=\"track__status\">\r\n          <audio></audio>\r\n        </div>\r\n        <div class=\"game__answer\">\r\n          <input class=\"game__input visually-hidden\" type=\"checkbox\" name=\"answer\" value=\"answer-1\" id=\"answer-4\">\r\n          <label class=\"game__check\" for=\"answer-4\">Отметить</label>\r\n        </div>\r\n      </div>\r\n\r\n      <button class=\"game__submit button\" type=\"submit\">Ответить</button>\r\n    </form>\r\n  </section>\r\n</section>`;\r\n\r\n  const toMainScreen = document.querySelector(`.game__back`);\r\n  const answerBtn = document.querySelector(`.game__submit`);\r\n  const resultModule = () => {\r\n    const choiceAnswer = document.querySelectorAll(`.game__input`);\r\n    let answerValue = [];\r\n    answerBtn.setAttribute(`disabled`, `disabled`);\r\n    for (let i = 0; i < choiceAnswer.length; i++) {\r\n      choiceAnswer[2].classList.add(`true__answer`);\r\n      choiceAnswer[i].addEventListener(`click`, (event) => {\r\n        answerBtn.removeAttribute(`disabled`, `disabled`);\r\n        answerBtn.addEventListener(`click`, () => {\r\n          if (event.target.classList.contains(`true__answer`) && event.target.checked) {\r\n            answerValue.push(1);\r\n          } else if (event.target.checked) {\r\n            answerValue.push(-2);\r\n          } else {\r\n            answerValue.push(`Ошибка`);\r\n          }\r\n          Object(_game_artist_js__WEBPACK_IMPORTED_MODULE_0__[\"moduleArtists\"])();\r\n        });\r\n      });\r\n    }\r\n    return answerValue;\r\n  };\r\n\r\n  total = resultModule();\r\n\r\n  toMainScreen.addEventListener(`click`, () => {\r\n    Object(_welcome_js__WEBPACK_IMPORTED_MODULE_1__[\"moduleWelcome\"])();\r\n  });\r\n\r\n\r\n  answerBtn.addEventListener(`click`, () => {\r\n    Object(_game_artist_js__WEBPACK_IMPORTED_MODULE_0__[\"moduleArtists\"])();\r\n  });\r\n\r\n};\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/genre.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _welcome_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./welcome.js */ \"./src/welcome.js\");\n\r\nObject(_welcome_js__WEBPACK_IMPORTED_MODULE_0__[\"moduleWelcome\"])();\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ }),

/***/ "./src/result-success.js":
/*!*******************************!*\
  !*** ./src/result-success.js ***!
  \*******************************/
/*! exports provided: moduleWin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"moduleWin\", function() { return moduleWin; });\n/* harmony import */ var _welcome__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./welcome */ \"./src/welcome.js\");\n/* harmony import */ var _genre__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./genre */ \"./src/genre.js\");\n\r\n\r\nconst mainScreen = document.querySelector(`#root`);\r\nconst moduleWin = () => {\r\n  let summ = _genre__WEBPACK_IMPORTED_MODULE_1__[\"total\"].reduce(function (previousValue, value) {\r\n    return previousValue + value;\r\n  });\r\n  mainScreen.innerHTML = `<section class=\"result\">\r\n  <div class=\"result__logo\"><img src=\"img/melody-logo.png\" alt=\"Угадай мелодию\" width=\"186\" height=\"83\"></div>\r\n  <h2 class=\"result__title\">Вы настоящий меломан!</h2>\r\n  <p class=\"result__total\">За 3 минуты и 25 секунд вы набрали ${summ}  баллов (8 быстрых), совершив 3 ошибки</p>\r\n  <p class=\"result__text\">Вы заняли 2 место из 10. Это лучше чем у 80% игроков</p>\r\n  <button class=\"replay\" type=\"button\">Сыграть ещё раз</button>\r\n</section>`;\r\n  const replay = document.querySelector(`.replay`);\r\n  replay.addEventListener(`click`, () => {\r\n    Object(_welcome__WEBPACK_IMPORTED_MODULE_0__[\"moduleWelcome\"])();\r\n  });\r\n};\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/result-success.js?");

/***/ }),

/***/ "./src/welcome.js":
/*!************************!*\
  !*** ./src/welcome.js ***!
  \************************/
/*! exports provided: moduleWelcome */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"moduleWelcome\", function() { return moduleWelcome; });\n/* harmony import */ var _genre__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./genre */ \"./src/genre.js\");\n\r\n\r\nconst mainScreen = document.querySelector(`#root`);\r\nconst moduleWelcome = () => {\r\n  mainScreen.innerHTML = `<section class=\"welcome\">\r\n  <div class=\"welcome__logo\"><img src=\"img/melody-logo.png\" alt=\"Угадай мелодию\" width=\"186\" height=\"83\"></div>\r\n  <button class=\"welcome__button\"><span class=\"visually-hidden\">Начать игру</span></button>\r\n  <h2 class=\"welcome__rules-title\">Правила игры</h2>\r\n  <p class=\"welcome__text\">Правила просты:</p>\r\n  <ul class=\"welcome__rules-list\">\r\n    <li>За 5 минут нужно ответить на все вопросы.</li>\r\n    <li>Можно допустить 3 ошибки.</li>\r\n  </ul>\r\n  <p class=\"welcome__text\">Удачи!</p>\r\n</section>`;\r\n  const play = document.querySelector(`.welcome__button`);\r\n  play.addEventListener(`click`, () => {\r\n    Object(_genre__WEBPACK_IMPORTED_MODULE_0__[\"moduleGenre\"])();\r\n  });\r\n};\r\n\r\nmoduleWelcome();\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/welcome.js?");

/***/ })

/******/ });