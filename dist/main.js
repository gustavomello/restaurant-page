"use strict";
(self["webpackChunkrestaurant"] = self["webpackChunkrestaurant"] || []).push([["main"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _init_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./init.js */ "./src/init.js");

(0,_init_js__WEBPACK_IMPORTED_MODULE_0__["default"])();

/***/ }),

/***/ "./src/init.js":
/*!*********************!*\
  !*** ./src/init.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ initPage)
/* harmony export */ });
function initPage() {
    console.log('I get called from print.js!');
    const page = document.getElementById('content')
    const home = document.createElement('button');
    home.innerHTML = 'Home!';
    home.style.backgroundColor = 'black';
    home.style.color = 'white';
    page.appendChild(home)

  }

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFpQztBQUNqQyxvREFBUTs7Ozs7Ozs7Ozs7Ozs7QUNETztBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2luaXQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGluaXRQYWdlIGZyb20gJy4vaW5pdC5qcyc7XG5pbml0UGFnZSgpOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXRQYWdlKCkge1xuICAgIGNvbnNvbGUubG9nKCdJIGdldCBjYWxsZWQgZnJvbSBwcmludC5qcyEnKTtcbiAgICBjb25zdCBwYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKVxuICAgIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBob21lLmlubmVySFRNTCA9ICdIb21lISc7XG4gICAgaG9tZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnYmxhY2snO1xuICAgIGhvbWUuc3R5bGUuY29sb3IgPSAnd2hpdGUnO1xuICAgIHBhZ2UuYXBwZW5kQ2hpbGQoaG9tZSlcblxuICB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9