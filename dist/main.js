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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_example__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/example */ \"./src/scripts/example.js\");\n/* harmony import */ var _scripts_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/player */ \"./src/scripts/player.js\");\n/* harmony import */ var _scripts_inputs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/inputs */ \"./src/scripts/inputs.js\");\n//entry file - what webpack is looking at\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  console.log('hello world');\n  //grabbing main from our html (index.html)\n  // const main = document.getElementById(\"main\");\n\n  //making new instance of our example class & passing in main\n  // new Example(main);\n  const canvas = document.getElementById(\"game-screen\");\n  const ctx = canvas.getContext(\"2d\");\n  window.ctx = ctx;\n  window.Player = _scripts_player__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n\n  //options {name: \"me\", pos: [375, 250]}\n  const a = new _scripts_player__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n    name: \"me\",\n    pos: [375, 250]\n  });\n  window.a = a;\n  function gameLoop() {\n    a.draw();\n    a.move();\n  }\n  setInterval(gameLoop, 1000 / 75);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ3dDO0FBQ0Y7QUFDRTtBQUV4Q0csUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxNQUFNO0VBQ2hEQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxhQUFhLENBQUM7RUFDMUI7RUFDQTs7RUFFQTtFQUNBO0VBQ0EsTUFBTUMsTUFBTSxHQUFHSixRQUFRLENBQUNLLGNBQWMsQ0FBQyxhQUFhLENBQUM7RUFDckQsTUFBTUMsR0FBRyxHQUFHRixNQUFNLENBQUNHLFVBQVUsQ0FBQyxJQUFJLENBQUM7RUFHbkNDLE1BQU0sQ0FBQ0YsR0FBRyxHQUFHQSxHQUFHO0VBQ2hCRSxNQUFNLENBQUNWLE1BQU0sR0FBR0EsdURBQU07O0VBRXRCO0VBQ0EsTUFBTVcsQ0FBQyxHQUFHLElBQUlYLHVEQUFNLENBQUM7SUFBQ1ksSUFBSSxFQUFFLElBQUk7SUFBRUMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUc7RUFBQyxDQUFDLENBQUM7RUFDbkRILE1BQU0sQ0FBQ0MsQ0FBQyxHQUFHQSxDQUFDO0VBR1osU0FBU0csUUFBUUEsQ0FBQSxFQUFHO0lBQ2hCSCxDQUFDLENBQUNJLElBQUksRUFBRTtJQUNSSixDQUFDLENBQUNLLElBQUksRUFBRTtFQUNaO0VBRUFDLFdBQVcsQ0FBQ0gsUUFBUSxFQUFFLElBQUksR0FBQyxFQUFFLENBQUM7QUFDbEMsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2l6YXJkLXdvcmxkLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiLy9lbnRyeSBmaWxlIC0gd2hhdCB3ZWJwYWNrIGlzIGxvb2tpbmcgYXRcbmltcG9ydCBFeGFtcGxlIGZyb20gXCIuL3NjcmlwdHMvZXhhbXBsZVwiO1xuaW1wb3J0IFBsYXllciBmcm9tIFwiLi9zY3JpcHRzL3BsYXllclwiO1xuaW1wb3J0ICogYXMgZGlyIGZyb20gXCIuL3NjcmlwdHMvaW5wdXRzXCI7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnaGVsbG8gd29ybGQnKVxuICAgIC8vZ3JhYmJpbmcgbWFpbiBmcm9tIG91ciBodG1sIChpbmRleC5odG1sKVxuICAgIC8vIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XG4gICAgXG4gICAgLy9tYWtpbmcgbmV3IGluc3RhbmNlIG9mIG91ciBleGFtcGxlIGNsYXNzICYgcGFzc2luZyBpbiBtYWluXG4gICAgLy8gbmV3IEV4YW1wbGUobWFpbik7XG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lLXNjcmVlblwiKTtcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIFxuICAgIFxuICAgIHdpbmRvdy5jdHggPSBjdHg7XG4gICAgd2luZG93LlBsYXllciA9IFBsYXllcjtcblxuICAgIC8vb3B0aW9ucyB7bmFtZTogXCJtZVwiLCBwb3M6IFszNzUsIDI1MF19XG4gICAgY29uc3QgYSA9IG5ldyBQbGF5ZXIoe25hbWU6IFwibWVcIiwgcG9zOiBbMzc1LCAyNTBdfSlcbiAgICB3aW5kb3cuYSA9IGE7XG5cbiAgICBcbiAgICBmdW5jdGlvbiBnYW1lTG9vcCgpIHtcbiAgICAgICAgYS5kcmF3KCk7XG4gICAgICAgIGEubW92ZSgpO1xuICAgIH1cblxuICAgIHNldEludGVydmFsKGdhbWVMb29wLCAxMDAwLzc1KVxufSk7XG4iXSwibmFtZXMiOlsiRXhhbXBsZSIsIlBsYXllciIsImRpciIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNvbnNvbGUiLCJsb2ciLCJjYW52YXMiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJ3aW5kb3ciLCJhIiwibmFtZSIsInBvcyIsImdhbWVMb29wIiwiZHJhdyIsIm1vdmUiLCJzZXRJbnRlcnZhbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"keyD\": function() { return /* binding */ keyD; },\n/* harmony export */   \"keyDU\": function() { return /* binding */ keyDU; },\n/* harmony export */   \"keyL\": function() { return /* binding */ keyL; },\n/* harmony export */   \"keyLU\": function() { return /* binding */ keyLU; },\n/* harmony export */   \"keyR\": function() { return /* binding */ keyR; },\n/* harmony export */   \"keyRU\": function() { return /* binding */ keyRU; },\n/* harmony export */   \"keyU\": function() { return /* binding */ keyU; },\n/* harmony export */   \"keyUU\": function() { return /* binding */ keyUU; }\n/* harmony export */ });\nconst keyR = document.addEventListener(\"keydown\", e => {\n  if (e.key === \"ArrowRight\") {\n    a.velX = 3;\n    // console.log(e.key)\n  }\n});\n\nconst keyL = document.addEventListener(\"keydown\", e => {\n  if (e.key === \"ArrowLeft\") {\n    a.velX = -3;\n    // console.log(e.key)\n  }\n});\n\nconst keyRU = document.addEventListener(\"keyup\", e => {\n  if (e.key === \"ArrowRight\") {\n    a.velX = 0;\n    // console.log(e.key)\n  }\n});\n\nconst keyLU = document.addEventListener(\"keyup\", e => {\n  if (e.key === \"ArrowLeft\") {\n    a.velX = 0;\n    // console.log(e.key)\n  }\n});\n\nconst keyU = document.addEventListener(\"keydown\", e => {\n  if (e.key === \"ArrowUp\") {\n    a.velY = -3;\n    // console.log(e.key)\n  }\n});\n\nconst keyD = document.addEventListener(\"keydown\", e => {\n  if (e.key === \"ArrowDown\") {\n    a.velY = 3;\n    // console.log(e.key)\n  }\n});\n\nconst keyUU = document.addEventListener(\"keyup\", e => {\n  if (e.key === \"ArrowUp\") {\n    a.velY = 0;\n    // console.log(e.key)\n  }\n});\n\nconst keyDU = document.addEventListener(\"keyup\", e => {\n  if (e.key === \"ArrowDown\") {\n    a.velY = 0;\n    // console.log(e.key)\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9pbnB1dHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBTyxNQUFNQSxJQUFJLEdBQUdDLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsU0FBUyxFQUFHQyxDQUFDLElBQUs7RUFDNUQsSUFBSUEsQ0FBQyxDQUFDQyxHQUFHLEtBQUssWUFBWSxFQUFFO0lBQ3hCQyxDQUFDLENBQUNDLElBQUksR0FBRyxDQUFDO0lBQ1Y7RUFDSjtBQUNKLENBQUMsQ0FBQzs7QUFFSyxNQUFNQyxJQUFJLEdBQUdOLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsU0FBUyxFQUFHQyxDQUFDLElBQUs7RUFDNUQsSUFBSUEsQ0FBQyxDQUFDQyxHQUFHLEtBQUssV0FBVyxFQUFFO0lBQ3ZCQyxDQUFDLENBQUNDLElBQUksR0FBRyxDQUFDLENBQUM7SUFDWDtFQUNKO0FBQ0osQ0FBQyxDQUFDOztBQUVLLE1BQU1FLEtBQUssR0FBR1AsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUdDLENBQUMsSUFBSztFQUMzRCxJQUFJQSxDQUFDLENBQUNDLEdBQUcsS0FBSyxZQUFZLEVBQUU7SUFDeEJDLENBQUMsQ0FBQ0MsSUFBSSxHQUFHLENBQUM7SUFDVjtFQUNKO0FBQ0osQ0FBQyxDQUFDOztBQUVLLE1BQU1HLEtBQUssR0FBR1IsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUdDLENBQUMsSUFBSztFQUMzRCxJQUFJQSxDQUFDLENBQUNDLEdBQUcsS0FBSyxXQUFXLEVBQUU7SUFDdkJDLENBQUMsQ0FBQ0MsSUFBSSxHQUFHLENBQUM7SUFDVjtFQUNKO0FBQ0osQ0FBQyxDQUFDOztBQUVLLE1BQU1JLElBQUksR0FBR1QsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUdDLENBQUMsSUFBSztFQUM1RCxJQUFJQSxDQUFDLENBQUNDLEdBQUcsS0FBSyxTQUFTLEVBQUU7SUFDckJDLENBQUMsQ0FBQ00sSUFBSSxHQUFHLENBQUMsQ0FBQztJQUNYO0VBQ0o7QUFDSixDQUFDLENBQUM7O0FBRUssTUFBTUMsSUFBSSxHQUFHWCxRQUFRLENBQUNDLGdCQUFnQixDQUFDLFNBQVMsRUFBR0MsQ0FBQyxJQUFLO0VBQzVELElBQUlBLENBQUMsQ0FBQ0MsR0FBRyxLQUFLLFdBQVcsRUFBRTtJQUN2QkMsQ0FBQyxDQUFDTSxJQUFJLEdBQUcsQ0FBQztJQUNWO0VBQ0o7QUFDSixDQUFDLENBQUM7O0FBRUssTUFBTUUsS0FBSyxHQUFHWixRQUFRLENBQUNDLGdCQUFnQixDQUFDLE9BQU8sRUFBR0MsQ0FBQyxJQUFLO0VBQzNELElBQUlBLENBQUMsQ0FBQ0MsR0FBRyxLQUFLLFNBQVMsRUFBRTtJQUNyQkMsQ0FBQyxDQUFDTSxJQUFJLEdBQUcsQ0FBQztJQUNWO0VBQ0o7QUFDSixDQUFDLENBQUM7O0FBRUssTUFBTUcsS0FBSyxHQUFHYixRQUFRLENBQUNDLGdCQUFnQixDQUFDLE9BQU8sRUFBR0MsQ0FBQyxJQUFLO0VBQzNELElBQUlBLENBQUMsQ0FBQ0MsR0FBRyxLQUFLLFdBQVcsRUFBRTtJQUN2QkMsQ0FBQyxDQUFDTSxJQUFJLEdBQUcsQ0FBQztJQUNWO0VBQ0o7QUFDSixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aXphcmQtd29ybGQvLi9zcmMvc2NyaXB0cy9pbnB1dHMuanM/OGU2ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3Qga2V5UiA9IGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XG4gICAgaWYgKGUua2V5ID09PSBcIkFycm93UmlnaHRcIikge1xuICAgICAgICBhLnZlbFggPSAzO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhlLmtleSlcbiAgICB9XG59KVxuXG5leHBvcnQgY29uc3Qga2V5TCA9IGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XG4gICAgaWYgKGUua2V5ID09PSBcIkFycm93TGVmdFwiKSB7XG4gICAgICAgIGEudmVsWCA9IC0zO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhlLmtleSlcbiAgICB9XG59KVxuXG5leHBvcnQgY29uc3Qga2V5UlUgPSBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgKGUpID0+IHtcbiAgICBpZiAoZS5rZXkgPT09IFwiQXJyb3dSaWdodFwiKSB7XG4gICAgICAgIGEudmVsWCA9IDA7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGUua2V5KVxuICAgIH1cbn0pXG5cbmV4cG9ydCBjb25zdCBrZXlMVSA9IGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCAoZSkgPT4ge1xuICAgIGlmIChlLmtleSA9PT0gXCJBcnJvd0xlZnRcIikge1xuICAgICAgICBhLnZlbFggPSAwO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhlLmtleSlcbiAgICB9XG59KVxuXG5leHBvcnQgY29uc3Qga2V5VSA9IGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XG4gICAgaWYgKGUua2V5ID09PSBcIkFycm93VXBcIikge1xuICAgICAgICBhLnZlbFkgPSAtMztcbiAgICAgICAgLy8gY29uc29sZS5sb2coZS5rZXkpXG4gICAgfVxufSlcblxuZXhwb3J0IGNvbnN0IGtleUQgPSBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT4ge1xuICAgIGlmIChlLmtleSA9PT0gXCJBcnJvd0Rvd25cIikge1xuICAgICAgICBhLnZlbFkgPSAzO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhlLmtleSlcbiAgICB9XG59KVxuXG5leHBvcnQgY29uc3Qga2V5VVUgPSBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgKGUpID0+IHtcbiAgICBpZiAoZS5rZXkgPT09IFwiQXJyb3dVcFwiKSB7XG4gICAgICAgIGEudmVsWSA9IDA7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGUua2V5KVxuICAgIH1cbn0pXG5cbmV4cG9ydCBjb25zdCBrZXlEVSA9IGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCAoZSkgPT4ge1xuICAgIGlmIChlLmtleSA9PT0gXCJBcnJvd0Rvd25cIikge1xuICAgICAgICBhLnZlbFkgPSAwO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhlLmtleSlcbiAgICB9XG59KSJdLCJuYW1lcyI6WyJrZXlSIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImtleSIsImEiLCJ2ZWxYIiwia2V5TCIsImtleVJVIiwia2V5TFUiLCJrZXlVIiwidmVsWSIsImtleUQiLCJrZXlVVSIsImtleURVIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/inputs.js\n");

/***/ }),

/***/ "./src/scripts/player.js":
/*!*******************************!*\
  !*** ./src/scripts/player.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _inputs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inputs */ \"./src/scripts/inputs.js\");\n\n\n//canvas width = 750\n//canvas height = 500\nclass Player {\n  constructor(options) {\n    this.name = options[\"name\"];\n    this.posX = options[\"pos\"][0];\n    this.posY = options[\"pos\"][1];\n    this.velX = 0;\n    this.velY = 0;\n    this.draw();\n    // document.addEventListener(\"keydown\", this.changeDir)\n  }\n\n  draw() {\n    // debugger\n    ctx.clearRect(0, 0, 750, 500);\n    ctx.beginPath();\n    ctx.arc(this.posX, this.posY, 10, 0, Math.PI * 2, false);\n    ctx.strokeStyle = \"black\";\n    ctx.fillStyle = \"red\";\n    ctx.fill();\n    ctx.stroke();\n  }\n\n  // changeDir (e) {\n  //     if (e.key === \"ArrowLeft\") {\n  //         this.velX = -1;\n  //     }\n  // }\n\n  move(e) {\n    // debugger\n    // let velX = 1;\n    // addEventListener(\"keydown\", (e) => {\n    // if (e.key === \"ArrowLeft\") {\n    // debugger\n    // this.posX += -velX;\n    // this.draw();\n    // }\n    // })\n\n    this.posX += this.velX;\n    this.posY += this.velY;\n\n    // console.log([this.posX, this.posY])\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Player);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9wbGF5ZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBK0I7O0FBRS9CO0FBQ0E7QUFDQSxNQUFNQyxNQUFNLENBQUM7RUFDVEMsV0FBV0EsQ0FBQ0MsT0FBTyxFQUFFO0lBQ2pCLElBQUksQ0FBQ0MsSUFBSSxHQUFHRCxPQUFPLENBQUMsTUFBTSxDQUFDO0lBQzNCLElBQUksQ0FBQ0UsSUFBSSxHQUFHRixPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzdCLElBQUksQ0FBQ0csSUFBSSxHQUFHSCxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRTdCLElBQUksQ0FBQ0ksSUFBSSxHQUFHLENBQUM7SUFDYixJQUFJLENBQUNDLElBQUksR0FBRyxDQUFDO0lBRWIsSUFBSSxDQUFDQyxJQUFJLEVBQUU7SUFDWDtFQUNKOztFQUVBQSxJQUFJQSxDQUFBLEVBQUc7SUFDSDtJQUNBQyxHQUFHLENBQUNDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7SUFDN0JELEdBQUcsQ0FBQ0UsU0FBUyxFQUFFO0lBQ2ZGLEdBQUcsQ0FBQ0csR0FBRyxDQUFDLElBQUksQ0FBQ1IsSUFBSSxFQUFFLElBQUksQ0FBQ0MsSUFBSSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUVRLElBQUksQ0FBQ0MsRUFBRSxHQUFHLENBQUMsRUFBRSxLQUFLLENBQUM7SUFDeERMLEdBQUcsQ0FBQ00sV0FBVyxHQUFHLE9BQU87SUFDekJOLEdBQUcsQ0FBQ08sU0FBUyxHQUFHLEtBQUs7SUFDckJQLEdBQUcsQ0FBQ1EsSUFBSSxFQUFFO0lBQ1ZSLEdBQUcsQ0FBQ1MsTUFBTSxFQUFFO0VBQ2hCOztFQUVBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0VBRUFDLElBQUlBLENBQUNDLENBQUMsRUFBRTtJQUNKO0lBQ0E7SUFDQTtJQUNJO0lBQ0k7SUFDQTtJQUNBO0lBQ0E7SUFDQTs7SUFFQSxJQUFJLENBQUNoQixJQUFJLElBQUksSUFBSSxDQUFDRSxJQUFJO0lBQ3RCLElBQUksQ0FBQ0QsSUFBSSxJQUFJLElBQUksQ0FBQ0UsSUFBSTs7SUFFdEI7RUFDWjtBQUdKOztBQUtBLCtEQUFlUCxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2l6YXJkLXdvcmxkLy4vc3JjL3NjcmlwdHMvcGxheWVyLmpzPzY0NzEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZGlyIGZyb20gXCIuL2lucHV0c1wiXG5cbi8vY2FudmFzIHdpZHRoID0gNzUwXG4vL2NhbnZhcyBoZWlnaHQgPSA1MDBcbmNsYXNzIFBsYXllciB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICB0aGlzLm5hbWUgPSBvcHRpb25zW1wibmFtZVwiXTtcbiAgICAgICAgdGhpcy5wb3NYID0gb3B0aW9uc1tcInBvc1wiXVswXTtcbiAgICAgICAgdGhpcy5wb3NZID0gb3B0aW9uc1tcInBvc1wiXVsxXTtcblxuICAgICAgICB0aGlzLnZlbFggPSAwO1xuICAgICAgICB0aGlzLnZlbFkgPSAwO1xuXG4gICAgICAgIHRoaXMuZHJhdygpO1xuICAgICAgICAvLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLmNoYW5nZURpcilcbiAgICB9XG5cbiAgICBkcmF3KCkge1xuICAgICAgICAvLyBkZWJ1Z2dlclxuICAgICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIDc1MCwgNTAwKTtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHguYXJjKHRoaXMucG9zWCwgdGhpcy5wb3NZLCAxMCwgMCwgTWF0aC5QSSAqIDIsIGZhbHNlKTtcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gXCJibGFja1wiO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJyZWRcIlxuICAgICAgICBjdHguZmlsbCgpXG4gICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICB9XG5cbiAgICAvLyBjaGFuZ2VEaXIgKGUpIHtcbiAgICAvLyAgICAgaWYgKGUua2V5ID09PSBcIkFycm93TGVmdFwiKSB7XG4gICAgLy8gICAgICAgICB0aGlzLnZlbFggPSAtMTtcbiAgICAvLyAgICAgfVxuICAgIC8vIH1cbiAgICBcbiAgICBtb3ZlKGUpIHtcbiAgICAgICAgLy8gZGVidWdnZXJcbiAgICAgICAgLy8gbGV0IHZlbFggPSAxO1xuICAgICAgICAvLyBhZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT4ge1xuICAgICAgICAgICAgLy8gaWYgKGUua2V5ID09PSBcIkFycm93TGVmdFwiKSB7XG4gICAgICAgICAgICAgICAgLy8gZGVidWdnZXJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnBvc1ggKz0gLXZlbFg7XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5kcmF3KCk7XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIC8vIH0pXG5cbiAgICAgICAgICAgICAgICB0aGlzLnBvc1ggKz0gdGhpcy52ZWxYO1xuICAgICAgICAgICAgICAgIHRoaXMucG9zWSArPSB0aGlzLnZlbFk7XG5cbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhbdGhpcy5wb3NYLCB0aGlzLnBvc1ldKVxuICAgIH1cblxuXG59XG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IFBsYXllcjsiXSwibmFtZXMiOlsiZGlyIiwiUGxheWVyIiwiY29uc3RydWN0b3IiLCJvcHRpb25zIiwibmFtZSIsInBvc1giLCJwb3NZIiwidmVsWCIsInZlbFkiLCJkcmF3IiwiY3R4IiwiY2xlYXJSZWN0IiwiYmVnaW5QYXRoIiwiYXJjIiwiTWF0aCIsIlBJIiwic3Ryb2tlU3R5bGUiLCJmaWxsU3R5bGUiLCJmaWxsIiwic3Ryb2tlIiwibW92ZSIsImUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/player.js\n");

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