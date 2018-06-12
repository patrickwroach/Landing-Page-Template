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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "a527f5bb5085aae46c331ca351d55112.jpg";

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "752fe63ffbb358fc924329596598eb98.jpg";

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(3);

__webpack_require__(4);

var _background = __webpack_require__(0);

var _background2 = _interopRequireDefault(_background);

var _backgroundHighlight = __webpack_require__(1);

var _backgroundHighlight2 = _interopRequireDefault(_backgroundHighlight);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bundle.css";

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
 * - autoSmoothScroll -
 * Licence MIT
 * Written by Gabriel Delépine
 * Current version  1.3.1 (2014-10-22)
 * Previous version 1.3.0 (2014-07-23)
 * Previous version 1.2.0 (2014-02-13)
 * Previous version 1.0.1 (2013-11-08)
 * Previous version 1.0.0 (2013-10-27)
 * Requirement : None, it is a framework-free function (i.e. you do not need to include any other file in your page such as jQuery)
 * Fork-me on github : https://github.com/Yappli/smooth-scroll
 * */
(function (window, undefined) // Code in a function to create an isolate scope
{
    'use strict';

    var height_fixed_header = 0,
        // For layout with header with position:fixed. Write here the height of your header for your anchor don't be hiden behind
    speed = 500,
        moving_frequency = 15,
        // Affects performance ! High number makes scroll more smooth
    links = document.getElementsByTagName('a'),
        href;

    for (var i = 0; i < links.length; i++) {
        href = links[i].attributes.href === undefined ? null : links[i].attributes.href.nodeValue.toString();
        if (href !== null && href.length > 1 && href.indexOf('#') != -1) // href.substr(0, 1) == '#'
            {
                links[i].onclick = function () {
                    var element,
                        href = this.attributes.href.nodeValue.toString(),
                        url = href.substr(0, href.indexOf('#')),
                        id = href.substr(href.indexOf('#') + 1);
                    if (element = document.getElementById(id)) {

                        var hop_count = (speed - speed % moving_frequency) / moving_frequency,
                            // Always make an integer
                        getScrollTopDocumentAtBegin = getScrollTopDocument(),
                            gap = (getScrollTopElement(element) - getScrollTopDocumentAtBegin) / hop_count;

                        if (window.history && typeof window.history.pushState == 'function') window.history.pushState({}, undefined, url + '#' + id); // Change URL for modern browser

                        for (var i = 1; i <= hop_count; i++) {
                            (function () {
                                var hop_top_position = gap * i;
                                setTimeout(function () {
                                    window.scrollTo(0, hop_top_position + getScrollTopDocumentAtBegin);
                                }, moving_frequency * i);
                            })();
                        }

                        return false;
                    }
                };
            }
    }

    var getScrollTopElement = function getScrollTopElement(e) {
        var top = height_fixed_header * -1;

        while (e.offsetParent != undefined && e.offsetParent != null) {
            top += e.offsetTop + (e.clientTop != null ? e.clientTop : 0);
            e = e.offsetParent;
        }

        return top;
    };

    var getScrollTopDocument = function getScrollTopDocument() {
        return window.pageYOffset !== undefined ? window.pageYOffset : document.documentElement.scrollTop !== undefined ? document.documentElement.scrollTop : document.body.scrollTop;
    };
})(window);

/***/ })
/******/ ]);