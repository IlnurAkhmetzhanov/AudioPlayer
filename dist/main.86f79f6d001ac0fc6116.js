/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.scss":
/*!********************!*\
  !*** ./index.scss ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./data.ts":
/*!*****************!*\
  !*** ./data.ts ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   weathers: () => (/* binding */ weathers)
/* harmony export */ });
var weathers = [
    {
        name: "summer",
        bg: "./backgrounds/summer-bg.jpg",
        icon: "./icons/sun.svg",
        sound: "./sounds/summer.mp3",
    },
    {
        name: "rain",
        bg: "./backgrounds/rainy-bg.jpg",
        icon: "./icons/cloud-rain.svg",
        sound: "./sounds/rain.mp3",
    },
    {
        name: "rain",
        bg: "./backgrounds/winter-bg.jpg",
        icon: "./icons/cloud-snow.svg",
        sound: "./sounds/winter.mp3",
    },
];


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ "./data.ts");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.scss */ "./index.scss");


var root = document.querySelector("#weathers");
var range = document.querySelector("#range");
var audio = new Audio();
audio.volume = 0;
var currentWeather = "";
var weathersRef = [];
range.addEventListener("input", function (e) {
    var element = e.currentTarget;
    var value = element.value;
    audio.volume = Number(value) / 100;
});
var resetIcons = function (refs) {
    refs.forEach(function (e, index) {
        e.src = _data__WEBPACK_IMPORTED_MODULE_0__.weathers[index].icon;
    });
};
function renderItem(item, index) {
    var app = document.getElementById("app");
    var weatherContainer = document.createElement("div");
    var weatherIcon = document.createElement("img");
    weatherContainer.className = "weatherContainer";
    weatherIcon.className = "weatherIcon";
    weatherIcon.src = item.icon;
    weatherContainer.style.backgroundImage = "url(".concat(item.bg, ")");
    weathersRef.push(weatherIcon);
    weatherContainer.onclick = function () {
        resetIcons(weathersRef);
        currentWeather = item.name;
        app.style.backgroundImage = "url(".concat(item.bg, ")");
        if (audio.src &&
            !audio.src.includes(item.sound.slice(1, item.sound.length))) {
            weatherIcon.src = "./icons/pause.svg";
            audio.src = item.sound;
            audio.play();
            return;
        }
        if (currentWeather === item.name && audio.paused) {
            weatherIcon.src = "./icons/pause.svg";
            audio.src = item.sound;
            audio.play();
            return;
        }
        if (currentWeather === item.name && !audio.paused) {
            weatherIcon.src = item.icon;
            audio.pause();
            return;
        }
    };
    weatherContainer.append(weatherIcon);
    root.append(weatherContainer);
}
_data__WEBPACK_IMPORTED_MODULE_0__.weathers.forEach(renderItem);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LDJDQUFRLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vaW5kZXguc2Nzcz9lOWVjIiwid2VicGFjazovLy8uL2RhdGEudHMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vLy4vaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiZXhwb3J0IGludGVyZmFjZSBXZWF0aGVyIHtcbiAgbmFtZTogc3RyaW5nO1xuICBiZzogc3RyaW5nO1xuICBpY29uOiBzdHJpbmc7XG4gIHNvdW5kOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCB3ZWF0aGVyczogV2VhdGhlcltdID0gW1xuICB7XG4gICAgbmFtZTogXCJzdW1tZXJcIixcbiAgICBiZzogXCIuL2JhY2tncm91bmRzL3N1bW1lci1iZy5qcGdcIixcbiAgICBpY29uOiBcIi4vaWNvbnMvc3VuLnN2Z1wiLFxuICAgIHNvdW5kOiBcIi4vc291bmRzL3N1bW1lci5tcDNcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwicmFpblwiLFxuICAgIGJnOiBcIi4vYmFja2dyb3VuZHMvcmFpbnktYmcuanBnXCIsXG4gICAgaWNvbjogXCIuL2ljb25zL2Nsb3VkLXJhaW4uc3ZnXCIsXG4gICAgc291bmQ6IFwiLi9zb3VuZHMvcmFpbi5tcDNcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwicmFpblwiLFxuICAgIGJnOiBcIi4vYmFja2dyb3VuZHMvd2ludGVyLWJnLmpwZ1wiLFxuICAgIGljb246IFwiLi9pY29ucy9jbG91ZC1zbm93LnN2Z1wiLFxuICAgIHNvdW5kOiBcIi4vc291bmRzL3dpbnRlci5tcDNcIixcbiAgfSxcbl07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IFdlYXRoZXIgfSBmcm9tIFwiLi9kYXRhXCI7XG5pbXBvcnQgeyB3ZWF0aGVycyB9IGZyb20gXCIuL2RhdGFcIjtcbmltcG9ydCBcIi4vaW5kZXguc2Nzc1wiO1xuXG5jb25zdCByb290OiBFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN3ZWF0aGVyc1wiKTtcbmNvbnN0IHJhbmdlOiBFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyYW5nZVwiKTtcbmNvbnN0IGF1ZGlvOiBIVE1MQXVkaW9FbGVtZW50ID0gbmV3IEF1ZGlvKCk7XG5hdWRpby52b2x1bWUgPSAwO1xubGV0IGN1cnJlbnRXZWF0aGVyOiBzdHJpbmcgPSBcIlwiO1xuY29uc3Qgd2VhdGhlcnNSZWY6IEhUTUxJbWFnZUVsZW1lbnRbXSA9IFtdO1xuXG5yYW5nZS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgZnVuY3Rpb24gKGU6IElucHV0RXZlbnQpIHtcbiAgY29uc3QgZWxlbWVudCA9IGUuY3VycmVudFRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICBjb25zdCB2YWx1ZTogc3RyaW5nID0gZWxlbWVudC52YWx1ZTtcbiAgYXVkaW8udm9sdW1lID0gTnVtYmVyKHZhbHVlKSAvIDEwMDtcbn0pO1xuXG5jb25zdCByZXNldEljb25zID0gKHJlZnM6IEhUTUxJbWFnZUVsZW1lbnRbXSkgPT4ge1xuICByZWZzLmZvckVhY2goKGU6IEhUTUxJbWFnZUVsZW1lbnQsIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICBlLnNyYyA9IHdlYXRoZXJzW2luZGV4XS5pY29uO1xuICB9KTtcbn07XG5cbmZ1bmN0aW9uIHJlbmRlckl0ZW0oaXRlbTogV2VhdGhlciwgaW5kZXg6IG51bWJlcikge1xuICBjb25zdCBhcHA6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIik7XG4gIGNvbnN0IHdlYXRoZXJDb250YWluZXI6IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3Qgd2VhdGhlckljb246IEhUTUxJbWFnZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICB3ZWF0aGVyQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwid2VhdGhlckNvbnRhaW5lclwiO1xuICB3ZWF0aGVySWNvbi5jbGFzc05hbWUgPSBcIndlYXRoZXJJY29uXCI7XG4gIHdlYXRoZXJJY29uLnNyYyA9IGl0ZW0uaWNvbjtcbiAgd2VhdGhlckNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7aXRlbS5iZ30pYDtcbiAgd2VhdGhlcnNSZWYucHVzaCh3ZWF0aGVySWNvbik7XG5cbiAgd2VhdGhlckNvbnRhaW5lci5vbmNsaWNrID0gKCkgPT4ge1xuICAgIHJlc2V0SWNvbnMod2VhdGhlcnNSZWYpO1xuICAgIGN1cnJlbnRXZWF0aGVyID0gaXRlbS5uYW1lO1xuICAgIGFwcC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7aXRlbS5iZ30pYDtcblxuICAgIGlmIChcbiAgICAgIGF1ZGlvLnNyYyAmJlxuICAgICAgIWF1ZGlvLnNyYy5pbmNsdWRlcyhpdGVtLnNvdW5kLnNsaWNlKDEsIGl0ZW0uc291bmQubGVuZ3RoKSlcbiAgICApIHtcbiAgICAgIHdlYXRoZXJJY29uLnNyYyA9IFwiLi9pY29ucy9wYXVzZS5zdmdcIjtcbiAgICAgIGF1ZGlvLnNyYyA9IGl0ZW0uc291bmQ7XG4gICAgICBhdWRpby5wbGF5KCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGN1cnJlbnRXZWF0aGVyID09PSBpdGVtLm5hbWUgJiYgYXVkaW8ucGF1c2VkKSB7XG4gICAgICB3ZWF0aGVySWNvbi5zcmMgPSBcIi4vaWNvbnMvcGF1c2Uuc3ZnXCI7XG4gICAgICBhdWRpby5zcmMgPSBpdGVtLnNvdW5kO1xuICAgICAgYXVkaW8ucGxheSgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChjdXJyZW50V2VhdGhlciA9PT0gaXRlbS5uYW1lICYmICFhdWRpby5wYXVzZWQpIHtcbiAgICAgIHdlYXRoZXJJY29uLnNyYyA9IGl0ZW0uaWNvbjtcbiAgICAgIGF1ZGlvLnBhdXNlKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9O1xuICB3ZWF0aGVyQ29udGFpbmVyLmFwcGVuZCh3ZWF0aGVySWNvbik7XG4gIHJvb3QuYXBwZW5kKHdlYXRoZXJDb250YWluZXIpO1xufVxuXG53ZWF0aGVycy5mb3JFYWNoKHJlbmRlckl0ZW0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9