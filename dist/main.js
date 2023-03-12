/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_example__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/example */ \"./src/scripts/example.js\");\n/* harmony import */ var _scripts_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/player */ \"./src/scripts/player.js\");\n/* harmony import */ var _scripts_inputs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/inputs */ \"./src/scripts/inputs.js\");\n//entry file - what webpack is looking at\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  console.log('hello world');\n  //grabbing main from our html (index.html)\n  // const main = document.getElementById(\"main\");\n\n  //making new instance of our example class & passing in main\n  // new Example(main);\n  const canvas = document.getElementById(\"game-screen\");\n  const ctx = canvas.getContext(\"2d\");\n\n  //background\n  // const img = document.getElementById(\"cave\");\n  // ctx.drawImage(img, 0, 0)\n  // const img = new Image();\n  // img.onload = () => {\n  //     ctx.drawImage(img, 0, 0);\n  // }\n  // img.src = \"./assets/cavefloor.png\";\n  // img.addEventListener(\"load\", (e) => {\n  //     ctx.drawImage(img, 0, 0);\n  // });\n\n  // window.img = img;\n\n  window.ctx = ctx;\n  window.Player = _scripts_player__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n\n  //options {name: \"me\", pos: [375, 250]}\n  const a = new _scripts_player__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n    name: \"me\",\n    pos: [375, 250]\n  });\n  window.a = a;\n  function gameLoop() {\n    a.draw();\n    a.move();\n  }\n  setInterval(gameLoop, 1000 / 75);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ3dDO0FBQ0Y7QUFDRTtBQUV4Q0csUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxNQUFNO0VBQ2hEQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxhQUFhLENBQUM7RUFDMUI7RUFDQTs7RUFFQTtFQUNBO0VBQ0EsTUFBTUMsTUFBTSxHQUFHSixRQUFRLENBQUNLLGNBQWMsQ0FBQyxhQUFhLENBQUM7RUFDckQsTUFBTUMsR0FBRyxHQUFHRixNQUFNLENBQUNHLFVBQVUsQ0FBQyxJQUFJLENBQUM7O0VBRW5DO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0VBRUE7O0VBSUFDLE1BQU0sQ0FBQ0YsR0FBRyxHQUFHQSxHQUFHO0VBQ2hCRSxNQUFNLENBQUNWLE1BQU0sR0FBR0EsdURBQU07O0VBRXRCO0VBQ0EsTUFBTVcsQ0FBQyxHQUFHLElBQUlYLHVEQUFNLENBQUM7SUFBQ1ksSUFBSSxFQUFFLElBQUk7SUFBRUMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUc7RUFBQyxDQUFDLENBQUM7RUFDbkRILE1BQU0sQ0FBQ0MsQ0FBQyxHQUFHQSxDQUFDO0VBR1osU0FBU0csUUFBUUEsQ0FBQSxFQUFHO0lBQ2hCSCxDQUFDLENBQUNJLElBQUksRUFBRTtJQUNSSixDQUFDLENBQUNLLElBQUksRUFBRTtFQUNaO0VBRUFDLFdBQVcsQ0FBQ0gsUUFBUSxFQUFFLElBQUksR0FBQyxFQUFFLENBQUM7QUFDbEMsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2l6YXJkLXdvcmxkLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiLy9lbnRyeSBmaWxlIC0gd2hhdCB3ZWJwYWNrIGlzIGxvb2tpbmcgYXRcbmltcG9ydCBFeGFtcGxlIGZyb20gXCIuL3NjcmlwdHMvZXhhbXBsZVwiO1xuaW1wb3J0IFBsYXllciBmcm9tIFwiLi9zY3JpcHRzL3BsYXllclwiO1xuaW1wb3J0ICogYXMgZGlyIGZyb20gXCIuL3NjcmlwdHMvaW5wdXRzXCI7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnaGVsbG8gd29ybGQnKVxuICAgIC8vZ3JhYmJpbmcgbWFpbiBmcm9tIG91ciBodG1sIChpbmRleC5odG1sKVxuICAgIC8vIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XG4gICAgXG4gICAgLy9tYWtpbmcgbmV3IGluc3RhbmNlIG9mIG91ciBleGFtcGxlIGNsYXNzICYgcGFzc2luZyBpbiBtYWluXG4gICAgLy8gbmV3IEV4YW1wbGUobWFpbik7XG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lLXNjcmVlblwiKTtcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG4gICAgLy9iYWNrZ3JvdW5kXG4gICAgLy8gY29uc3QgaW1nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYXZlXCIpO1xuICAgIC8vIGN0eC5kcmF3SW1hZ2UoaW1nLCAwLCAwKVxuICAgIC8vIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuICAgIC8vIGltZy5vbmxvYWQgPSAoKSA9PiB7XG4gICAgLy8gICAgIGN0eC5kcmF3SW1hZ2UoaW1nLCAwLCAwKTtcbiAgICAvLyB9XG4gICAgLy8gaW1nLnNyYyA9IFwiLi9hc3NldHMvY2F2ZWZsb29yLnBuZ1wiO1xuICAgIC8vIGltZy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoZSkgPT4ge1xuICAgIC8vICAgICBjdHguZHJhd0ltYWdlKGltZywgMCwgMCk7XG4gICAgLy8gfSk7XG5cbiAgICAvLyB3aW5kb3cuaW1nID0gaW1nO1xuXG4gICAgXG4gICAgXG4gICAgd2luZG93LmN0eCA9IGN0eDtcbiAgICB3aW5kb3cuUGxheWVyID0gUGxheWVyO1xuXG4gICAgLy9vcHRpb25zIHtuYW1lOiBcIm1lXCIsIHBvczogWzM3NSwgMjUwXX1cbiAgICBjb25zdCBhID0gbmV3IFBsYXllcih7bmFtZTogXCJtZVwiLCBwb3M6IFszNzUsIDI1MF19KVxuICAgIHdpbmRvdy5hID0gYTtcblxuICAgIFxuICAgIGZ1bmN0aW9uIGdhbWVMb29wKCkge1xuICAgICAgICBhLmRyYXcoKTtcbiAgICAgICAgYS5tb3ZlKCk7XG4gICAgfVxuXG4gICAgc2V0SW50ZXJ2YWwoZ2FtZUxvb3AsIDEwMDAvNzUpXG59KTtcbiJdLCJuYW1lcyI6WyJFeGFtcGxlIiwiUGxheWVyIiwiZGlyIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY29uc29sZSIsImxvZyIsImNhbnZhcyIsImdldEVsZW1lbnRCeUlkIiwiY3R4IiwiZ2V0Q29udGV4dCIsIndpbmRvdyIsImEiLCJuYW1lIiwicG9zIiwiZ2FtZUxvb3AiLCJkcmF3IiwibW92ZSIsInNldEludGVydmFsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/example.js":
/*!********************************!*\
  !*** ./src/scripts/example.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass Example {\n  constructor(ele) {\n    this.ele = ele;\n    this.ele.innerHTML = \"<h1>It's CAPY ALIVEEEE!!!</h1>\";\n\n    //remember to bind this to handleClick\n    //if we define it like this, it will always be bound\n    this.handleClick = this.handleClick.bind(this);\n    this.ele.addEventListener(\"click\", this.handleClick);\n  }\n  handleClick() {\n    this.ele.children[0].innerText = \"Ouch!\";\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Example);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9leGFtcGxlLmpzLmpzIiwibWFwcGluZ3MiOiI7QUFBQSxNQUFNQSxPQUFPLENBQUM7RUFDVkMsV0FBV0EsQ0FBQ0MsR0FBRyxFQUFFO0lBQ2IsSUFBSSxDQUFDQSxHQUFHLEdBQUdBLEdBQUc7SUFDZCxJQUFJLENBQUNBLEdBQUcsQ0FBQ0MsU0FBUyxHQUFHLGdDQUFnQzs7SUFFckQ7SUFDQTtJQUNBLElBQUksQ0FBQ0MsV0FBVyxHQUFHLElBQUksQ0FBQ0EsV0FBVyxDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQzlDLElBQUksQ0FBQ0gsR0FBRyxDQUFDSSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDRixXQUFXLENBQUM7RUFDeEQ7RUFFQUEsV0FBV0EsQ0FBQSxFQUFHO0lBQ1YsSUFBSSxDQUFDRixHQUFHLENBQUNLLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsU0FBUyxHQUFHLE9BQU87RUFDNUM7QUFDSjtBQUVBLCtEQUFlUixPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2l6YXJkLXdvcmxkLy4vc3JjL3NjcmlwdHMvZXhhbXBsZS5qcz9mY2VlIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEV4YW1wbGUge1xuICAgIGNvbnN0cnVjdG9yKGVsZSkge1xuICAgICAgICB0aGlzLmVsZSA9IGVsZVxuICAgICAgICB0aGlzLmVsZS5pbm5lckhUTUwgPSBcIjxoMT5JdCdzIENBUFkgQUxJVkVFRUUhISE8L2gxPlwiXG5cbiAgICAgICAgLy9yZW1lbWJlciB0byBiaW5kIHRoaXMgdG8gaGFuZGxlQ2xpY2tcbiAgICAgICAgLy9pZiB3ZSBkZWZpbmUgaXQgbGlrZSB0aGlzLCBpdCB3aWxsIGFsd2F5cyBiZSBib3VuZFxuICAgICAgICB0aGlzLmhhbmRsZUNsaWNrID0gdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmVsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5oYW5kbGVDbGljaylcbiAgICB9XG5cbiAgICBoYW5kbGVDbGljaygpIHtcbiAgICAgICAgdGhpcy5lbGUuY2hpbGRyZW5bMF0uaW5uZXJUZXh0ID0gXCJPdWNoIVwiXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFeGFtcGxlOyJdLCJuYW1lcyI6WyJFeGFtcGxlIiwiY29uc3RydWN0b3IiLCJlbGUiLCJpbm5lckhUTUwiLCJoYW5kbGVDbGljayIsImJpbmQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2hpbGRyZW4iLCJpbm5lclRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/example.js\n");

/***/ }),

/***/ "./src/scripts/inputs.js":
/*!*******************************!*\
  !*** ./src/scripts/inputs.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"keyD\": function() { return /* binding */ keyD; },\n/* harmony export */   \"keyDU\": function() { return /* binding */ keyDU; },\n/* harmony export */   \"keyL\": function() { return /* binding */ keyL; },\n/* harmony export */   \"keyLU\": function() { return /* binding */ keyLU; },\n/* harmony export */   \"keyR\": function() { return /* binding */ keyR; },\n/* harmony export */   \"keyRU\": function() { return /* binding */ keyRU; },\n/* harmony export */   \"keyU\": function() { return /* binding */ keyU; },\n/* harmony export */   \"keyUU\": function() { return /* binding */ keyUU; }\n/* harmony export */ });\n//all my event listeners for key presses (player movement)\n\nconst keyR = document.addEventListener(\"keydown\", e => {\n  if (e.key === \"ArrowRight\") {\n    a.velX = 3;\n    // console.log(e.key)\n  }\n});\n\nconst keyL = document.addEventListener(\"keydown\", e => {\n  if (e.key === \"ArrowLeft\") {\n    a.velX = -3;\n    // console.log(e.key)\n  }\n});\n\nconst keyRU = document.addEventListener(\"keyup\", e => {\n  if (e.key === \"ArrowRight\") {\n    a.velX = 0;\n    // console.log(e.key)\n  }\n});\n\nconst keyLU = document.addEventListener(\"keyup\", e => {\n  if (e.key === \"ArrowLeft\") {\n    a.velX = 0;\n    // console.log(e.key)\n  }\n});\n\nconst keyU = document.addEventListener(\"keydown\", e => {\n  if (e.key === \"ArrowUp\") {\n    a.velY = -3;\n    // console.log(e.key)\n  }\n});\n\nconst keyD = document.addEventListener(\"keydown\", e => {\n  if (e.key === \"ArrowDown\") {\n    a.velY = 3;\n    // console.log(e.key)\n  }\n});\n\nconst keyUU = document.addEventListener(\"keyup\", e => {\n  if (e.key === \"ArrowUp\") {\n    a.velY = 0;\n    // console.log(e.key)\n  }\n});\n\nconst keyDU = document.addEventListener(\"keyup\", e => {\n  if (e.key === \"ArrowDown\") {\n    a.velY = 0;\n    // console.log(e.key)\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9pbnB1dHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFFTyxNQUFNQSxJQUFJLEdBQUdDLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsU0FBUyxFQUFHQyxDQUFDLElBQUs7RUFDNUQsSUFBSUEsQ0FBQyxDQUFDQyxHQUFHLEtBQUssWUFBWSxFQUFFO0lBQ3hCQyxDQUFDLENBQUNDLElBQUksR0FBRyxDQUFDO0lBQ1Y7RUFDSjtBQUNKLENBQUMsQ0FBQzs7QUFFSyxNQUFNQyxJQUFJLEdBQUdOLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsU0FBUyxFQUFHQyxDQUFDLElBQUs7RUFDNUQsSUFBSUEsQ0FBQyxDQUFDQyxHQUFHLEtBQUssV0FBVyxFQUFFO0lBQ3ZCQyxDQUFDLENBQUNDLElBQUksR0FBRyxDQUFDLENBQUM7SUFDWDtFQUNKO0FBQ0osQ0FBQyxDQUFDOztBQUVLLE1BQU1FLEtBQUssR0FBR1AsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUdDLENBQUMsSUFBSztFQUMzRCxJQUFJQSxDQUFDLENBQUNDLEdBQUcsS0FBSyxZQUFZLEVBQUU7SUFDeEJDLENBQUMsQ0FBQ0MsSUFBSSxHQUFHLENBQUM7SUFDVjtFQUNKO0FBQ0osQ0FBQyxDQUFDOztBQUVLLE1BQU1HLEtBQUssR0FBR1IsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUdDLENBQUMsSUFBSztFQUMzRCxJQUFJQSxDQUFDLENBQUNDLEdBQUcsS0FBSyxXQUFXLEVBQUU7SUFDdkJDLENBQUMsQ0FBQ0MsSUFBSSxHQUFHLENBQUM7SUFDVjtFQUNKO0FBQ0osQ0FBQyxDQUFDOztBQUVLLE1BQU1JLElBQUksR0FBR1QsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUdDLENBQUMsSUFBSztFQUM1RCxJQUFJQSxDQUFDLENBQUNDLEdBQUcsS0FBSyxTQUFTLEVBQUU7SUFDckJDLENBQUMsQ0FBQ00sSUFBSSxHQUFHLENBQUMsQ0FBQztJQUNYO0VBQ0o7QUFDSixDQUFDLENBQUM7O0FBRUssTUFBTUMsSUFBSSxHQUFHWCxRQUFRLENBQUNDLGdCQUFnQixDQUFDLFNBQVMsRUFBR0MsQ0FBQyxJQUFLO0VBQzVELElBQUlBLENBQUMsQ0FBQ0MsR0FBRyxLQUFLLFdBQVcsRUFBRTtJQUN2QkMsQ0FBQyxDQUFDTSxJQUFJLEdBQUcsQ0FBQztJQUNWO0VBQ0o7QUFDSixDQUFDLENBQUM7O0FBRUssTUFBTUUsS0FBSyxHQUFHWixRQUFRLENBQUNDLGdCQUFnQixDQUFDLE9BQU8sRUFBR0MsQ0FBQyxJQUFLO0VBQzNELElBQUlBLENBQUMsQ0FBQ0MsR0FBRyxLQUFLLFNBQVMsRUFBRTtJQUNyQkMsQ0FBQyxDQUFDTSxJQUFJLEdBQUcsQ0FBQztJQUNWO0VBQ0o7QUFDSixDQUFDLENBQUM7O0FBRUssTUFBTUcsS0FBSyxHQUFHYixRQUFRLENBQUNDLGdCQUFnQixDQUFDLE9BQU8sRUFBR0MsQ0FBQyxJQUFLO0VBQzNELElBQUlBLENBQUMsQ0FBQ0MsR0FBRyxLQUFLLFdBQVcsRUFBRTtJQUN2QkMsQ0FBQyxDQUFDTSxJQUFJLEdBQUcsQ0FBQztJQUNWO0VBQ0o7QUFDSixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aXphcmQtd29ybGQvLi9zcmMvc2NyaXB0cy9pbnB1dHMuanM/OGU2ZSJdLCJzb3VyY2VzQ29udGVudCI6WyIvL2FsbCBteSBldmVudCBsaXN0ZW5lcnMgZm9yIGtleSBwcmVzc2VzIChwbGF5ZXIgbW92ZW1lbnQpXG5cbmV4cG9ydCBjb25zdCBrZXlSID0gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtcbiAgICBpZiAoZS5rZXkgPT09IFwiQXJyb3dSaWdodFwiKSB7XG4gICAgICAgIGEudmVsWCA9IDM7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGUua2V5KVxuICAgIH1cbn0pXG5cbmV4cG9ydCBjb25zdCBrZXlMID0gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtcbiAgICBpZiAoZS5rZXkgPT09IFwiQXJyb3dMZWZ0XCIpIHtcbiAgICAgICAgYS52ZWxYID0gLTM7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGUua2V5KVxuICAgIH1cbn0pXG5cbmV4cG9ydCBjb25zdCBrZXlSVSA9IGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCAoZSkgPT4ge1xuICAgIGlmIChlLmtleSA9PT0gXCJBcnJvd1JpZ2h0XCIpIHtcbiAgICAgICAgYS52ZWxYID0gMDtcbiAgICAgICAgLy8gY29uc29sZS5sb2coZS5rZXkpXG4gICAgfVxufSlcblxuZXhwb3J0IGNvbnN0IGtleUxVID0gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIChlKSA9PiB7XG4gICAgaWYgKGUua2V5ID09PSBcIkFycm93TGVmdFwiKSB7XG4gICAgICAgIGEudmVsWCA9IDA7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGUua2V5KVxuICAgIH1cbn0pXG5cbmV4cG9ydCBjb25zdCBrZXlVID0gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtcbiAgICBpZiAoZS5rZXkgPT09IFwiQXJyb3dVcFwiKSB7XG4gICAgICAgIGEudmVsWSA9IC0zO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhlLmtleSlcbiAgICB9XG59KVxuXG5leHBvcnQgY29uc3Qga2V5RCA9IGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XG4gICAgaWYgKGUua2V5ID09PSBcIkFycm93RG93blwiKSB7XG4gICAgICAgIGEudmVsWSA9IDM7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGUua2V5KVxuICAgIH1cbn0pXG5cbmV4cG9ydCBjb25zdCBrZXlVVSA9IGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCAoZSkgPT4ge1xuICAgIGlmIChlLmtleSA9PT0gXCJBcnJvd1VwXCIpIHtcbiAgICAgICAgYS52ZWxZID0gMDtcbiAgICAgICAgLy8gY29uc29sZS5sb2coZS5rZXkpXG4gICAgfVxufSlcblxuZXhwb3J0IGNvbnN0IGtleURVID0gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIChlKSA9PiB7XG4gICAgaWYgKGUua2V5ID09PSBcIkFycm93RG93blwiKSB7XG4gICAgICAgIGEudmVsWSA9IDA7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGUua2V5KVxuICAgIH1cbn0pIl0sIm5hbWVzIjpbImtleVIiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwia2V5IiwiYSIsInZlbFgiLCJrZXlMIiwia2V5UlUiLCJrZXlMVSIsImtleVUiLCJ2ZWxZIiwia2V5RCIsImtleVVVIiwia2V5RFUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/inputs.js\n");

/***/ }),

/***/ "./src/scripts/player.js":
/*!*******************************!*\
  !*** ./src/scripts/player.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _inputs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inputs */ \"./src/scripts/inputs.js\");\n\n\n//canvas width = 750\n//canvas height = 500\nclass Player {\n  constructor(options) {\n    this.name = options[\"name\"];\n    this.posX = options[\"pos\"][0];\n    this.posY = options[\"pos\"][1];\n    this.velX = 0;\n    this.velY = 0;\n    this.draw();\n    // document.addEventListener(\"keydown\", this.changeDir)\n  }\n\n  draw() {\n    // debugger\n    ctx.clearRect(0, 0, 750, 500);\n    ctx.beginPath();\n    ctx.arc(this.posX, this.posY, 10, 0, Math.PI * 2, false);\n    ctx.strokeStyle = \"black\";\n    ctx.fillStyle = \"red\";\n    ctx.fill();\n    ctx.stroke();\n  }\n  move(e) {\n    this.posX += this.velX;\n    this.posY += this.velY;\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Player);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9wbGF5ZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBK0I7O0FBRS9CO0FBQ0E7QUFDQSxNQUFNQyxNQUFNLENBQUM7RUFDVEMsV0FBV0EsQ0FBQ0MsT0FBTyxFQUFFO0lBQ2pCLElBQUksQ0FBQ0MsSUFBSSxHQUFHRCxPQUFPLENBQUMsTUFBTSxDQUFDO0lBQzNCLElBQUksQ0FBQ0UsSUFBSSxHQUFHRixPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzdCLElBQUksQ0FBQ0csSUFBSSxHQUFHSCxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRTdCLElBQUksQ0FBQ0ksSUFBSSxHQUFHLENBQUM7SUFDYixJQUFJLENBQUNDLElBQUksR0FBRyxDQUFDO0lBRWIsSUFBSSxDQUFDQyxJQUFJLEVBQUU7SUFDWDtFQUNKOztFQUVBQSxJQUFJQSxDQUFBLEVBQUc7SUFDSDtJQUNBQyxHQUFHLENBQUNDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7SUFDN0JELEdBQUcsQ0FBQ0UsU0FBUyxFQUFFO0lBQ2ZGLEdBQUcsQ0FBQ0csR0FBRyxDQUFDLElBQUksQ0FBQ1IsSUFBSSxFQUFFLElBQUksQ0FBQ0MsSUFBSSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUVRLElBQUksQ0FBQ0MsRUFBRSxHQUFHLENBQUMsRUFBRSxLQUFLLENBQUM7SUFDeERMLEdBQUcsQ0FBQ00sV0FBVyxHQUFHLE9BQU87SUFDekJOLEdBQUcsQ0FBQ08sU0FBUyxHQUFHLEtBQUs7SUFDckJQLEdBQUcsQ0FBQ1EsSUFBSSxFQUFFO0lBQ1ZSLEdBQUcsQ0FBQ1MsTUFBTSxFQUFFO0VBQ2hCO0VBRUFDLElBQUlBLENBQUNDLENBQUMsRUFBRTtJQUNKLElBQUksQ0FBQ2hCLElBQUksSUFBSSxJQUFJLENBQUNFLElBQUk7SUFDdEIsSUFBSSxDQUFDRCxJQUFJLElBQUksSUFBSSxDQUFDRSxJQUFJO0VBQzFCO0FBRUo7QUFLQSwrREFBZVAsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL3dpemFyZC13b3JsZC8uL3NyYy9zY3JpcHRzL3BsYXllci5qcz82NDcxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGRpciBmcm9tIFwiLi9pbnB1dHNcIlxuXG4vL2NhbnZhcyB3aWR0aCA9IDc1MFxuLy9jYW52YXMgaGVpZ2h0ID0gNTAwXG5jbGFzcyBQbGF5ZXIge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gb3B0aW9uc1tcIm5hbWVcIl07XG4gICAgICAgIHRoaXMucG9zWCA9IG9wdGlvbnNbXCJwb3NcIl1bMF07XG4gICAgICAgIHRoaXMucG9zWSA9IG9wdGlvbnNbXCJwb3NcIl1bMV07XG5cbiAgICAgICAgdGhpcy52ZWxYID0gMDtcbiAgICAgICAgdGhpcy52ZWxZID0gMDtcblxuICAgICAgICB0aGlzLmRyYXcoKTtcbiAgICAgICAgLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5jaGFuZ2VEaXIpXG4gICAgfVxuXG4gICAgZHJhdygpIHtcbiAgICAgICAgLy8gZGVidWdnZXJcbiAgICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCA3NTAsIDUwMCk7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LmFyYyh0aGlzLnBvc1gsIHRoaXMucG9zWSwgMTAsIDAsIE1hdGguUEkgKiAyLCBmYWxzZSk7XG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwicmVkXCJcbiAgICAgICAgY3R4LmZpbGwoKVxuICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgfVxuICAgIFxuICAgIG1vdmUoZSkge1xuICAgICAgICB0aGlzLnBvc1ggKz0gdGhpcy52ZWxYO1xuICAgICAgICB0aGlzLnBvc1kgKz0gdGhpcy52ZWxZO1xuICAgIH1cblxufVxuXG5cblxuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7Il0sIm5hbWVzIjpbImRpciIsIlBsYXllciIsImNvbnN0cnVjdG9yIiwib3B0aW9ucyIsIm5hbWUiLCJwb3NYIiwicG9zWSIsInZlbFgiLCJ2ZWxZIiwiZHJhdyIsImN0eCIsImNsZWFyUmVjdCIsImJlZ2luUGF0aCIsImFyYyIsIk1hdGgiLCJQSSIsInN0cm9rZVN0eWxlIiwiZmlsbFN0eWxlIiwiZmlsbCIsInN0cm9rZSIsIm1vdmUiLCJlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/player.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aXphcmQtd29ybGQvLi9zcmMvaW5kZXguc2Nzcz85NzQ1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.scss\n");

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
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;