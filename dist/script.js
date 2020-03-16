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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./css/style.css":
/*!***********************!*\
  !*** ./css/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./js/form-submission.js":
/*!*******************************!*\
  !*** ./js/form-submission.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class FormSubmission {
  constructor(form, modal) {
    this.form = document.querySelector(form);
    this.modal = document.querySelector(modal);
    this.init();
  }

  init() {
    this.button = this.form.querySelector('.form__button');
    this.modalClose = this.modal.querySelector('.modal__close-button');
    this.modalText = this.modal.querySelector('.modal__text');
    this.actions();
  }
  
  _closePopup() {
    this.modal.classList.add('visually-hidden');
  }

  actions() {
    this.button.addEventListener('click', (evt) => {
      if(this.form.checkValidity()) {
        evt.preventDefault();
        let subject = document.querySelector('#user-subject').value.toString();
        subject = subject ? `<b>Тема:</b> ${subject}` : `<b>Без темы</b>`;
        let describe = document.querySelector('#user-comment').value.toString();
        describe = describe ? `<b>Описание:</b> ${describe}` : `<b>Без описания</b>`;
        this.modalText.innerHTML = `<h3>Письмо отправлено!</h3><p>${subject}</p><p>${describe}</p>`;
        this.modal.classList.remove('visually-hidden');
        this.modalClose.focus();
      }
    });
    document.addEventListener('keydown', evt => {
      if (evt.code === 'Escape') this._closePopup();
    });
    this.modal.addEventListener( 'click', evt => {
      const target = evt.target;
      if (target.closest('.modal__box')) return null;
      this._closePopup();
    });
    this.modalClose.addEventListener('keydown', evt => {
      if (evt.code === 'Enter') this._closePopup();
    });
    this.modalClose.addEventListener('click', () => this._closePopup());
    this.form.querySelectorAll('input').forEach(input => {
      input.addEventListener('focus', () => {
        input.maxLength = '120';
      })
    });
    this.form.comment.addEventListener('focus', () => {
      this.form.comment.maxLength = '900';
    })
  }
}

/* harmony default export */ __webpack_exports__["default"] = (FormSubmission);


/***/ }),

/***/ "./js/gallery.js":
/*!***********************!*\
  !*** ./js/gallery.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Gallery {
  constructor(element) {
    this.gallery = document.querySelector(element);
    this.init();
  }

  init() {
    this.galleryItems = this.gallery.querySelectorAll('.gallery__item');
    this.filters = document.querySelector('.portfolio__filter');
    this.actions();
  }

  _sortArayRandomly(array) {
    const arrayCopy = [...array];
    function compareRandom(a, b) {
      return Math.random() - 0.5;
    }
    arrayCopy.sort(compareRandom);
    return arrayCopy;
  }

  _mixGallery(collection) {
    const array = [...collection];
    while (this.gallery.firstChild) {
      this.gallery.removeChild(this.gallery.firstChild);
    }
    this._sortArayRandomly(array).forEach(item => {
      this.gallery.appendChild(item);
    })
  }

  actions() {
    this.filters.addEventListener('click', (evt) => {
      const target = evt.target;
      if (target.closest('.filter__link') && !target.closest('.filter__link--active')) {
        this._mixGallery(this.galleryItems);
        this.filters.querySelectorAll('.filter__link').forEach(item => {
          item.classList.remove('filter__link--active')
        });
        target.closest('.filter__link').classList.add('filter__link--active');
      }
    });
    this.gallery.addEventListener('click', (evt) => {
      const target = evt.target;
      if (target.closest('.gallery__item')) {
        if(target.closest('.gallery__item--active')) {
          target.closest('.gallery__item--active').classList.toggle('gallery__item--active');
        } else {
          this.galleryItems.forEach(item => item.classList.remove('gallery__item--active'));
          target.closest('.gallery__item').classList.add('gallery__item--active');
        }
      }
    });
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Gallery);


/***/ }),

/***/ "./js/navigation.js":
/*!**************************!*\
  !*** ./js/navigation.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Navigation {
  constructor(element) {
    this.nav = document.querySelector(element);
    this.actions();
  }

  actions() {
    this.nav.addEventListener('click', (evt) => {
      const target = evt.target;
      if (target.closest('.main-nav__link')) {
        this.nav.querySelectorAll('.main-nav__link').forEach(item => {
          item.classList.remove('main-nav__link--current');
        });
        target.closest('.main-nav__link').classList.add('main-nav__link--current');
      }
    })
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Navigation);


/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider */ "./js/slider.js");
/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navigation */ "./js/navigation.js");
/* harmony import */ var _gallery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gallery */ "./js/gallery.js");
/* harmony import */ var _form_submission__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form-submission */ "./js/form-submission.js");





document.addEventListener('DOMContentLoaded', () => {
  const slider = new _slider__WEBPACK_IMPORTED_MODULE_0__["default"]('.slider');
  const navigation = new _navigation__WEBPACK_IMPORTED_MODULE_1__["default"]('.main-nav');
  const gallery = new _gallery__WEBPACK_IMPORTED_MODULE_2__["default"]('.gallery__list');
  const formSubmission = new _form_submission__WEBPACK_IMPORTED_MODULE_3__["default"]('.form', '.modal');
});


/***/ }),

/***/ "./js/slider.js":
/*!**********************!*\
  !*** ./js/slider.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Slider {
  constructor(element) {
    this.slider = document.querySelector(element);
    this.init();
  }

  init() {
    this.slides = this.slider.querySelectorAll('.slider__item');
    this.phones = this.slider.querySelectorAll('.slider__img-box');
    this.previous = this.slider.querySelector('.slider__arrow-left');
    this.next = this.slider.querySelector('.slider__arrow-right');
    this.actions();
  }

  _findCurrentSlide(elements) {
    for(let i = 0; i < elements.length; i++) {
      if (!elements[i].classList.contains('visually-hidden')) {
        return i;
      }
    }
  }

  _changeBackgroundColor(elem) {
    if (elem.classList.contains('slider__item--3-phones')) {
      this.slider.style.backgroundColor = "#648BF0";
      this.slider.style.borderColor = "#5780e7";
    } else if (elem.classList.contains('slider__item--2-phones')) {
      this.slider.style.backgroundColor = "#f06c64";
      this.slider.style.borderColor = "#ea676b";
    }
  }

  actions() {
    this.previous.addEventListener('click', () => {
      const i = this._findCurrentSlide(this.slides);
      const j = (i - 1 < 0) ? this.slides.length - 1 : i - 1;
      this.slides[i].classList.add('slip-left');
      this.slides[j].classList.add('slip-right');
      setTimeout(() => {
        this.slides[i].classList.remove('slip-left');
        this.slides[i].classList.add('visually-hidden');
        this._changeBackgroundColor(this.slides[j]);
        this.slides[j].classList.remove('visually-hidden');
        this.slides[j].classList.remove('slip-right');
      }, 500);
    })
    this.next.addEventListener('click', () => {
      const i = this._findCurrentSlide(this.slides);
      const j = (i + 1 === this.slides.length) ? 0 : i + 1;
      this.slides[i].classList.add('slip-right');
      this.slides[j].classList.add('slip-left');
      setTimeout(() => {
        this.slides[i].classList.remove('slip-right');
        this.slides[i].classList.add('visually-hidden');
        this._changeBackgroundColor(this.slides[j]);
        this.slides[j].classList.remove('visually-hidden');
        this.slides[j].classList.remove('slip-left');
      }, 500);
    })
    this.phones.forEach((item) => {
      const screen = item.querySelector('.slider__img-screen');
      if( screen !== null) {
        item.addEventListener('click', (evt) => {
          const target = evt.target;
          if (!target.closest('.slider__img-shadow')) {
            screen.classList.toggle('visually-hidden');
          }
        })
      }
    })
  }
}
/* harmony default export */ __webpack_exports__["default"] = (Slider);


/***/ }),

/***/ 0:
/*!********************************************!*\
  !*** multi ./js/script.js ./css/style.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./js/script.js */"./js/script.js");
module.exports = __webpack_require__(/*! ./css/style.css */"./css/style.css");


/***/ })

/******/ });
//# sourceMappingURL=script.js.map