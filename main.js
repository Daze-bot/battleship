/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/BlackOpsOne-Regular.ttf */ "./src/fonts/BlackOpsOne-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../imgs/navy.jpg */ "./src/imgs/navy.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../imgs/gun-pointer.png */ "./src/imgs/gun-pointer.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --playerBoardSize: min(70vh, 70vw);\n  --waterColor: #2a4043;\n}\n\n@font-face {\n  font-family: 'black-ops';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n* {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \n      Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n  font-size: 16px;\n  list-style: none;\n}\n\nbody {\n  min-height: 100vh;\n  position: relative;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-position: center;\n  background-size: cover;\n  display: grid;\n  grid-template: 100px 1fr / 5fr 4fr;\n  align-items: center;\n  justify-items: center;\n}\n\n.gameName {\n  grid-area: 1/1/2/3;\n  font-size: 4rem;\n  font-family: 'black-ops';\n  text-shadow: -2px 1px 2px red;\n}\n\n.playerBoard {\n  grid-area: 2/1/3/2;\n  height: var(--playerBoardSize);\n  width: var(--playerBoardSize);\n  display: grid;\n  grid-template: 10% 1fr / 10% 1fr;\n  position: relative;\n}\n\n.opponentBoard {\n  grid-area: 2/2/3/3;\n  height: calc(var(--playerBoardSize) * .8);\n  width: calc(var(--playerBoardSize) * .8);\n  display: grid;\n  grid-template: 10% 1fr / 10% 1fr;\n  position: relative;\n}\n\n.playerName,\n.opponentName {\n  position: absolute;\n  justify-self: center;\n  top: -40px;\n  font-size: 2rem;\n  font-family: 'black-ops';\n}\n\n.rowMarkers {\n  grid-area: 2/1/3/2;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n}\n\n.columnMarkers {\n  grid-area: 1/2/2/3;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n\n.rowLabel, \n.columnLabel {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 1.5rem;\n}\n\n.rowLabel {\n  height: 10%;\n  width: 100%;\n}\n\n.columnLabel {\n  height: 100%;\n  width: 10%;\n}\n\n.playerGameSquares,\n.opponentGameSquares {\n  grid-area: 2/2/3/3;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  border: 1px solid black;\n  border-radius: 4px;\n  background-color: rgba(255, 255, 255, 0.7);\n}\n\n.playerSquare,\n.opponentSquare {\n  border: 1px solid rgba(0, 0, 0, 0.3);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n}\n\n.playerSquare {\n  background-position: center;\n  background-size: cover;\n}\n\n.opponentGameSquares:hover {\n  cursor: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") 16 16, auto;\n}\n\n.opponentSquare:hover {\n  box-shadow: 0 0 2px 2px red;\n  border-radius: 8px;\n}\n\n.targetHit {\n  position: absolute;\n  height: 130%;\n  width: 130%;\n}\n\n.targetMiss {\n  height: 80%;\n  width: 80%;\n  opacity: .8;\n}\n\n.newGameOptions {\n  grid-area: 2/1/3/3;\n}\n\n.playerNameSelection {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10vh;\n  margin-bottom: 50vh;\n}\n\n.nameInput label,\n.nameInput input {\n  display: block;\n  width: 100%;\n  text-align: center;\n  font-family: 'black-ops';\n}\n\n.nameInput label {\n  margin-bottom: 8px;\n  font-size: 2rem;\n}\n\n.nameInput input {\n  appearance: none;\n  outline: none;\n  border: 1px solid var(--waterColor);\n  border-radius: 10px;\n  font-size: 3rem;\n  padding-top: 4px;\n  padding-bottom: 4px;\n  background: none;\n}\n\n.nameInput input:hover {\n  box-shadow: inset 0 0 8px var(--waterColor);\n}\n\n.nameInput input:focus {\n  box-shadow: inset 0 0 0 4px var(--waterColor);\n}\n\n.startGame,\n.resetGame,\n.helperBtn {\n  padding: 20px 40px;\n  font-size: 2rem;\n  font-family: 'black-ops';\n  border: none;\n  background-color: black;\n  box-shadow: 0 0 4px red;\n  color: white;\n  border-radius: 10px;\n  cursor: pointer;\n}\n\n.startGame:hover,\n.resetGame:hover,\n.helperBtn:hover {\n  background-color: white;\n  color: black;\n}\n\n.alertBox {\n  position: fixed;\n  z-index: 500;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.20);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 15vh;\n  text-align: center;\n}\n\n.alertTextBox {\n  font-size: 4rem;\n  text-shadow: 0 0 6px white;\n  color: rgb(167, 0, 0);\n  font-weight: 700;\n  text-align: center;\n}\n\n.placementHelper {\n  grid-area: 2/2/3/3;\n  height: calc(var(--playerBoardSize) * .8);\n  width: calc(var(--playerBoardSize) * .8);\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: start;\n  gap: 30%;\n  margin: 10px;\n}\n\n.helperText {\n  background-color: rgba(255, 255, 255, 0.8);\n  padding: 10px;\n  border: 2px solid red;\n  border-radius: 10px;\n  font-size: 3rem;\n  font-weight: 700;\n}\n\n.validPlacement {\n  background-color: rgba(0, 128, 0, 0.8);\n}\n\n.invalidPlacement {\n  background-color: rgba(255, 0, 0, 0.8);\n}\n\n.hidden {\n  display: none;\n}", "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n  --playerBoardSize: min(70vh, 70vw);\n  --waterColor: #2a4043;\n}\n\n@font-face {\n  font-family: 'black-ops';\n  src: url(../fonts/BlackOpsOne-Regular.ttf);\n}\n\n* {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \n      Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n  font-size: 16px;\n  list-style: none;\n}\n\nbody {\n  min-height: 100vh;\n  position: relative;\n  background-image: url(../imgs/navy.jpg);\n  background-position: center;\n  background-size: cover;\n  display: grid;\n  grid-template: 100px 1fr / 5fr 4fr;\n  align-items: center;\n  justify-items: center;\n}\n\n.gameName {\n  grid-area: 1/1/2/3;\n  font-size: 4rem;\n  font-family: 'black-ops';\n  text-shadow: -2px 1px 2px red;\n}\n\n.playerBoard {\n  grid-area: 2/1/3/2;\n  height: var(--playerBoardSize);\n  width: var(--playerBoardSize);\n  display: grid;\n  grid-template: 10% 1fr / 10% 1fr;\n  position: relative;\n}\n\n.opponentBoard {\n  grid-area: 2/2/3/3;\n  height: calc(var(--playerBoardSize) * .8);\n  width: calc(var(--playerBoardSize) * .8);\n  display: grid;\n  grid-template: 10% 1fr / 10% 1fr;\n  position: relative;\n}\n\n.playerName,\n.opponentName {\n  position: absolute;\n  justify-self: center;\n  top: -40px;\n  font-size: 2rem;\n  font-family: 'black-ops';\n}\n\n.rowMarkers {\n  grid-area: 2/1/3/2;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n}\n\n.columnMarkers {\n  grid-area: 1/2/2/3;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n\n.rowLabel, \n.columnLabel {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 1.5rem;\n}\n\n.rowLabel {\n  height: 10%;\n  width: 100%;\n}\n\n.columnLabel {\n  height: 100%;\n  width: 10%;\n}\n\n.playerGameSquares,\n.opponentGameSquares {\n  grid-area: 2/2/3/3;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  border: 1px solid black;\n  border-radius: 4px;\n  background-color: rgba(255, 255, 255, 0.7);\n}\n\n.playerSquare,\n.opponentSquare {\n  border: 1px solid rgba(0, 0, 0, 0.3);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n}\n\n.playerSquare {\n  background-position: center;\n  background-size: cover;\n}\n\n.opponentGameSquares:hover {\n  cursor: url(../imgs/gun-pointer.png) 16 16, auto;\n}\n\n.opponentSquare:hover {\n  box-shadow: 0 0 2px 2px red;\n  border-radius: 8px;\n}\n\n.targetHit {\n  position: absolute;\n  height: 130%;\n  width: 130%;\n}\n\n.targetMiss {\n  height: 80%;\n  width: 80%;\n  opacity: .8;\n}\n\n.newGameOptions {\n  grid-area: 2/1/3/3;\n}\n\n.playerNameSelection {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10vh;\n  margin-bottom: 50vh;\n}\n\n.nameInput label,\n.nameInput input {\n  display: block;\n  width: 100%;\n  text-align: center;\n  font-family: 'black-ops';\n}\n\n.nameInput label {\n  margin-bottom: 8px;\n  font-size: 2rem;\n}\n\n.nameInput input {\n  appearance: none;\n  outline: none;\n  border: 1px solid var(--waterColor);\n  border-radius: 10px;\n  font-size: 3rem;\n  padding-top: 4px;\n  padding-bottom: 4px;\n  background: none;\n}\n\n.nameInput input:hover {\n  box-shadow: inset 0 0 8px var(--waterColor);\n}\n\n.nameInput input:focus {\n  box-shadow: inset 0 0 0 4px var(--waterColor);\n}\n\n.startGame,\n.resetGame,\n.helperBtn {\n  padding: 20px 40px;\n  font-size: 2rem;\n  font-family: 'black-ops';\n  border: none;\n  background-color: black;\n  box-shadow: 0 0 4px red;\n  color: white;\n  border-radius: 10px;\n  cursor: pointer;\n}\n\n.startGame:hover,\n.resetGame:hover,\n.helperBtn:hover {\n  background-color: white;\n  color: black;\n}\n\n.alertBox {\n  position: fixed;\n  z-index: 500;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.20);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 15vh;\n  text-align: center;\n}\n\n.alertTextBox {\n  font-size: 4rem;\n  text-shadow: 0 0 6px white;\n  color: rgb(167, 0, 0);\n  font-weight: 700;\n  text-align: center;\n}\n\n.placementHelper {\n  grid-area: 2/2/3/3;\n  height: calc(var(--playerBoardSize) * .8);\n  width: calc(var(--playerBoardSize) * .8);\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: start;\n  gap: 30%;\n  margin: 10px;\n}\n\n.helperText {\n  background-color: rgba(255, 255, 255, 0.8);\n  padding: 10px;\n  border: 2px solid red;\n  border-radius: 10px;\n  font-size: 3rem;\n  font-weight: 700;\n}\n\n.validPlacement {\n  background-color: rgba(0, 128, 0, 0.8);\n}\n\n.invalidPlacement {\n  background-color: rgba(255, 0, 0, 0.8);\n}\n\n.hidden {\n  display: none;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/imgs/ships sync \\.svg$":
/*!**************************************************!*\
  !*** ./src/imgs/ships/ sync nonrecursive \.svg$ ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./battleship.svg": "./src/imgs/ships/battleship.svg",
	"./carrier.svg": "./src/imgs/ships/carrier.svg",
	"./destroyer.svg": "./src/imgs/ships/destroyer.svg",
	"./patrol-boat.svg": "./src/imgs/ships/patrol-boat.svg",
	"./submarine.svg": "./src/imgs/ships/submarine.svg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/imgs/ships sync \\.svg$";

/***/ }),

/***/ "./src/scripts/DOMcreateBoards.js":
/*!****************************************!*\
  !*** ./src/scripts/DOMcreateBoards.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createOpponentBoard": () => (/* binding */ createOpponentBoard),
/* harmony export */   "createPlayerBoard": () => (/* binding */ createPlayerBoard)
/* harmony export */ });
function createPlayerBoard(userName) {
  let playerBoard = document.createElement('div');
  playerBoard.classList.add('playerBoard');

  let rowMarkers = document.createElement('div');
  rowMarkers.classList.add('rowMarkers');
  for (let i = 0; i < 10; i++) {
    let rowLabel = document.createElement('div');
    rowLabel.classList.add('rowLabel');
    rowLabel.textContent = String.fromCharCode(97 + i).toUpperCase();
    rowMarkers.appendChild(rowLabel);
  }
  playerBoard.appendChild(rowMarkers);

  let columnMarkers = document.createElement('div');
  columnMarkers.classList.add('columnMarkers');
  for (let i = 0; i < 10; i++) {
    let columnLabel = document.createElement('div');
    columnLabel.classList.add('columnLabel');
    columnLabel.textContent = `${i + 1}`;
    columnMarkers.appendChild(columnLabel);
  }
  playerBoard.appendChild(columnMarkers);

  let gameSquares = document.createElement('div');
  gameSquares.classList.add('playerGameSquares');
  for (let i = 0; i < 100; i++) {
    let playerSquare = document.createElement('div');
    let formattedNum = (i).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
    playerSquare.id = 'p' + formattedNum;
    playerSquare.classList.add('playerSquare');
    gameSquares.appendChild(playerSquare);
  }
  playerBoard.appendChild(gameSquares);

  let playerName = document.createElement('p');
  playerName.classList.add('playerName');
  playerName.textContent = userName;
  playerBoard.appendChild(playerName);

  return playerBoard;
}

function createOpponentBoard() {
  let playerBoard = document.createElement('div');
  playerBoard.classList.add('opponentBoard');

  let rowMarkers = document.createElement('div');
  rowMarkers.classList.add('rowMarkers');
  for (let i = 0; i < 10; i++) {
    let rowLabel = document.createElement('div');
    rowLabel.classList.add('rowLabel');
    rowLabel.textContent = String.fromCharCode(97 + i).toUpperCase();
    rowMarkers.appendChild(rowLabel);
  }
  playerBoard.appendChild(rowMarkers);

  let columnMarkers = document.createElement('div');
  columnMarkers.classList.add('columnMarkers');
  for (let i = 0; i < 10; i++) {
    let columnLabel = document.createElement('div');
    columnLabel.classList.add('columnLabel');
    columnLabel.textContent = `${i + 1}`;
    columnMarkers.appendChild(columnLabel);
  }
  playerBoard.appendChild(columnMarkers);

  let gameSquares = document.createElement('div');
  gameSquares.classList.add('opponentGameSquares');
  for (let i = 0; i < 100; i++) {
    let playerSquare = document.createElement('div');
    let formattedNum = (i).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
    playerSquare.id = 'o' + formattedNum;
    playerSquare.classList.add('opponentSquare');
    gameSquares.appendChild(playerSquare);
  }
  playerBoard.appendChild(gameSquares);

  let opponentName = document.createElement('p');
  opponentName.classList.add('opponentName');
  opponentName.textContent = 'Computer';
  playerBoard.appendChild(opponentName);

  return playerBoard;
}




/***/ }),

/***/ "./src/scripts/DOMscreens.js":
/*!***********************************!*\
  !*** ./src/scripts/DOMscreens.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "alertGameOver": () => (/* binding */ alertGameOver),
/* harmony export */   "alertGameStart": () => (/* binding */ alertGameStart),
/* harmony export */   "alertSunkShip": () => (/* binding */ alertSunkShip),
/* harmony export */   "customAlertScreen": () => (/* binding */ customAlertScreen),
/* harmony export */   "hideAlert": () => (/* binding */ hideAlert),
/* harmony export */   "newGame": () => (/* binding */ newGame),
/* harmony export */   "shipPlacementHelper": () => (/* binding */ shipPlacementHelper)
/* harmony export */ });
function newGame() {
  let newGame = document.createElement('div');
  newGame.classList.add('newGameOptions');

  let playerNameSelection = document.createElement('form');
  playerNameSelection.classList.add('playerNameSelection');
  playerNameSelection.setAttribute('action', "");
  playerNameSelection.setAttribute('autocomplete', 'off');
  newGame.appendChild(playerNameSelection);

  let nameInput = document.createElement('div');
  nameInput.classList.add('nameInput');
  playerNameSelection.appendChild(nameInput);

  let label = document.createElement('label');
  label.setAttribute('for', 'userPlayerName');
  label.textContent = 'Enter Your Name:'
  nameInput.appendChild(label);

  let input = document.createElement('input');
  input.name = 'userPlayerName';
  input.type = 'text';
  input.id = 'userPlayerName';
  input.maxLength = '12';
  nameInput.appendChild(input);
  let playerName = localStorage.getItem('battleshipPlayerName') || "";
  input.value = playerName;

  let playBtn = document.createElement('button');
  playBtn.classList.add('startGame');
  playBtn.type = 'button';
  playBtn.textContent = "Start Game!";
  playerNameSelection.appendChild(playBtn);

  return newGame;
}

function shipPlacementHelper() {
  let helperDiv = document.createElement('div');
  helperDiv.classList.add('placementHelper');

  let btn = document.createElement('button');
  btn.classList.add('helperBtn', 'horizontal');
  btn.textContent = "Rotate Ship";
  btn.addEventListener('click', () => {
    btn.classList.toggle('horizontal');
  })
  helperDiv.appendChild(btn);

  let text = document.createElement('p');
  text.classList.add('helperText');
  helperDiv.appendChild(text);

  return helperDiv;
}

function customAlertScreen() {
  let alertBox = document.createElement('div');
  alertBox.classList.add('alertBox', 'hidden');

  let textBox = document.createElement('div');
  textBox.classList.add('alertTextBox');
  alertBox.appendChild(textBox);

  return alertBox;
}

function alertGameStart() {
  let alertBox = document.querySelector('.alertBox');
  alertBox.classList.remove('hidden');

  let textBox = document.querySelector('.alertTextBox');
  textBox.textContent = 'Click on an enemy square to launch your attack!';

  setTimeout(hideAlert, 3000);
}

function alertSunkShip(player, shipName) {
  let alertBox = document.querySelector('.alertBox');
  alertBox.classList.remove('hidden');

  let textBox = document.querySelector('.alertTextBox');
  textBox.textContent = `${player}'s ${shipName} has been sunk!`;

  setTimeout(hideAlert, 1500);
}

function alertGameOver(playerName) {
  let alertBox = document.querySelector('.alertBox');
  alertBox.classList.remove('hidden');
  alertBox.classList.add('winnerScreen');

  let textBox = document.querySelector('.alertTextBox');
  textBox.textContent = `${playerName} Wins!`;

  let resetBtn = document.createElement('button');
  resetBtn.classList.add('resetGame');
  resetBtn.textContent = 'New Game';

  resetBtn.addEventListener('click', () => {
    window.location.reload();
  })

  alertBox.appendChild(resetBtn);
}

function hideAlert() {
  let alertBox = document.querySelector('.alertBox');
  if (alertBox.classList.contains('winnerScreen')) {
    return;
  }
  alertBox.classList.add('hidden');
}



/***/ }),

/***/ "./src/scripts/Gameboard.js":
/*!**********************************!*\
  !*** ./src/scripts/Gameboard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Gameboard": () => (/* binding */ Gameboard)
/* harmony export */ });
/* harmony import */ var _DOMscreens__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOMscreens */ "./src/scripts/DOMscreens.js");


class Gameboard {
  constructor(player) {
    this.player = player;
    this.board = [];
    for (let i = 0; i < 10; i++) {
      this.board.push(["", "", "", "", "", "", "", "", "", ""]);
    }
  }

  placeShip(column, row, ship) {
    this.board[column][row] = ship;
  }

  receiveAttack(column, row) {
    if (this.board[column][row] !== "") {
      this.board[column][row].hit();
      if (this.board[column][row].isSunk === true) {
        (0,_DOMscreens__WEBPACK_IMPORTED_MODULE_0__.alertSunkShip)(this.player, this.board[column][row].name);
      }
      this.board[column][row] = 'hit';
    } else {
      this.board[column][row] = 'miss';
    }
  }

  reportMisses() {
    let missLog = [];
    for (let i = 0; i < this.board.length; i++) {
      for (let j = 0; j < this.board[i].length; j++) {
        if (this.board[i][j] === 'miss') {
          missLog.push((i, j));
        }
      }
    }
    return missLog;
  }

  reportHits() {
    let hitLog = [];
    for (let i = 0; i < this.board.length; i++) {
      for (let j = 0; j < this.board[i].length; j++) {
        if (this.board[i][j] === 'hit') {
          hitLog.push((i, j));
        }
      }
    }
    return hitLog;
  }

  checkAllShipsSunk() {
    for (let i = 0; i < this.board.length; i++) {
      for (let j = 0; j < this.board[i].length; j++) {
        if (this.board[i][j] !== 'hit' &&
            this.board[i][j] !=='miss' &&
            this.board[i][j] !== "") {
          return false;
        }
      }
    }
    return true;
  }

  notYetGuessed(column, row) {
    if (this.board[column][row] !== 'hit' &&
        this.board[column][row] !== 'miss') {
      return true;
    }
    return false;
  }

  isEmpty(column, row) {
    if (this.board[column][row] === "") {
      return true;
    }
    return false;
  }

  containsShip(column, row) {
    if (this.board[column][row] !== 'hit' &&
        this.board[column][row] !== 'miss' &&
        this.board[column][row] !== "") {
      return true;
    }
    return false;
  }
}




/***/ }),

/***/ "./src/scripts/Player.js":
/*!*******************************!*\
  !*** ./src/scripts/Player.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Player": () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ship */ "./src/scripts/Ship.js");
/* harmony import */ var _Gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Gameboard */ "./src/scripts/Gameboard.js");
/* harmony import */ var _backGroundImgLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./backGroundImgLoader */ "./src/scripts/backGroundImgLoader.js");
/* harmony import */ var _imgs_explosion_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../imgs/explosion.svg */ "./src/imgs/explosion.svg");
/* harmony import */ var _imgs_circle_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../imgs/circle.svg */ "./src/imgs/circle.svg");
/* harmony import */ var _DOMscreens__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DOMscreens */ "./src/scripts/DOMscreens.js");







class Player {
  constructor(name) {
    this.name = name;
    this.turn = false;
    this.gameboard = new _Gameboard__WEBPACK_IMPORTED_MODULE_1__.Gameboard(this.name);
    this.carrier = new _Ship__WEBPACK_IMPORTED_MODULE_0__.Ship('Carrier', 5);
    this.battleship = new _Ship__WEBPACK_IMPORTED_MODULE_0__.Ship('Battleship', 4);
    this.destroyer = new _Ship__WEBPACK_IMPORTED_MODULE_0__.Ship('Destroyer', 3);
    this.submarine = new _Ship__WEBPACK_IMPORTED_MODULE_0__.Ship('Submarine', 3);
    this.patrolBoat = new _Ship__WEBPACK_IMPORTED_MODULE_0__.Ship('Patrol Boat', 2);
    this.allShips = [this.carrier, this.battleship, this.destroyer, this.submarine, this.patrolBoat];
  }

  makeAttack(column, row, opponentBoard) {
    if (opponentBoard.checkAllShipsSunk() === true || this.turn === false) {
      return;
    }
    if (opponentBoard.notYetGuessed(column, row)) {
      opponentBoard.receiveAttack(column, row);
    }
    return;
  }

  AIMove(userPlayer) {
    if (this.gameboard.checkAllShipsSunk() === true) {
      return;
    }
    let woundedShip = userPlayer.allShips.some(ship => {
      return ship.partialHit();
    })
    if (woundedShip === true) {
      let hitLocations = [];
      for (let column = 0; column < userPlayer.gameboard.board.length; column++) {
        for (let row = 0; row < userPlayer.gameboard.board[column].length; row++) {
          if (userPlayer.gameboard.board[column][row] === 'hit') {
            hitLocations.push(`${column}${row}`);
          }
        }
      }
      let woundedLocations = [];
      hitLocations.forEach(location => {
        let hitColumn = Number(location.slice(0, 1));
        let hitRow = Number(location.slice(1, 2));
        if (hitColumn === 0 && hitRow === 0) {
          if (userPlayer.gameboard.containsShip(hitColumn + 1, hitRow) ||
              userPlayer.gameboard.containsShip(hitColumn, hitRow + 1)) {
            woundedLocations.push(location);
          }
        } else if (hitColumn === 0 && hitRow === 9) {
          if (userPlayer.gameboard.containsShip(hitColumn + 1, hitRow) ||
              userPlayer.gameboard.containsShip(hitColumn, hitRow - 1)) {
            woundedLocations.push(location);
          }
        } else if (hitColumn === 9 && hitRow === 0) {
          if (userPlayer.gameboard.containsShip(hitColumn - 1, hitRow) ||
              userPlayer.gameboard.containsShip(hitColumn, hitRow + 1)) {
            woundedLocations.push(location);
          }
        } else if (hitColumn === 9 && hitRow === 9) {
          if (userPlayer.gameboard.containsShip(hitColumn - 1, hitRow) ||
              userPlayer.gameboard.containsShip(hitColumn, hitRow - 1)) {
            woundedLocations.push(location);
          }
        } else if (hitColumn === 0) {
          if (userPlayer.gameboard.containsShip(hitColumn + 1, hitRow) ||
              userPlayer.gameboard.containsShip(hitColumn, hitRow + 1) ||
              userPlayer.gameboard.containsShip(hitColumn, hitRow - 1)) {
            woundedLocations.push(location);
          }
        } else if (hitColumn === 9) {
          if (userPlayer.gameboard.containsShip(hitColumn - 1, hitRow) ||
              userPlayer.gameboard.containsShip(hitColumn, hitRow + 1) ||
              userPlayer.gameboard.containsShip(hitColumn, hitRow - 1)) {
            woundedLocations.push(location);
          }
        } else if (hitRow === 0) {
          if (userPlayer.gameboard.containsShip(hitColumn + 1, hitRow) ||
              userPlayer.gameboard.containsShip(hitColumn - 1, hitRow) ||
              userPlayer.gameboard.containsShip(hitColumn, hitRow + 1)) {
            woundedLocations.push(location);
          }
        } else if (hitRow === 9) {
          if (userPlayer.gameboard.containsShip(hitColumn + 1, hitRow) ||
              userPlayer.gameboard.containsShip(hitColumn - 1, hitRow) ||
              userPlayer.gameboard.containsShip(hitColumn, hitRow - 1)) {
            woundedLocations.push(location);
          }
        } else {
          if (userPlayer.gameboard.containsShip(hitColumn + 1, hitRow) ||
              userPlayer.gameboard.containsShip(hitColumn - 1, hitRow) ||
              userPlayer.gameboard.containsShip(hitColumn, hitRow + 1) ||
              userPlayer.gameboard.containsShip(hitColumn, hitRow - 1)) {
            woundedLocations.push(location);
          }
        }
      })
      let randomWound = woundedLocations[Math.floor(Math.random() * woundedLocations.length)];
      let woundColumn = Number(randomWound.slice(0, 1));
      let woundRow = Number(randomWound.slice(1, 2));
      let woundGuesses = [];
      if (woundColumn === 0 && woundRow === 0) {
        woundGuesses.push(`${woundColumn + 1}${woundRow}`);
        woundGuesses.push(`${woundColumn}${woundRow + 1}`);
      } else if (woundColumn === 0 && woundRow === 9) {
        woundGuesses.push(`${woundColumn + 1}${woundRow}`);
        woundGuesses.push(`${woundColumn}${woundRow - 1}`);
      } else if (woundColumn === 9 && woundRow === 0) {
        woundGuesses.push(`${woundColumn - 1}${woundRow}`);
        woundGuesses.push(`${woundColumn}${woundRow + 1}`);
      } else if (woundColumn === 9 && woundRow === 9) {
        woundGuesses.push(`${woundColumn - 1}${woundRow}`);
        woundGuesses.push(`${woundColumn}${woundRow - 1}`);
      } else if (woundColumn === 0) {
        woundGuesses.push(`${woundColumn + 1}${woundRow}`);
        woundGuesses.push(`${woundColumn}${woundRow + 1}`);
        woundGuesses.push(`${woundColumn}${woundRow - 1}`);
      } else if (woundColumn === 9) {
        woundGuesses.push(`${woundColumn - 1}${woundRow}`);
        woundGuesses.push(`${woundColumn}${woundRow + 1}`);
        woundGuesses.push(`${woundColumn}${woundRow - 1}`);
      } else if (woundRow === 0) {
        woundGuesses.push(`${woundColumn + 1}${woundRow}`);
        woundGuesses.push(`${woundColumn - 1}${woundRow}`);
        woundGuesses.push(`${woundColumn}${woundRow + 1}`);
      } else if (woundRow === 9) {
        woundGuesses.push(`${woundColumn + 1}${woundRow}`);
        woundGuesses.push(`${woundColumn - 1}${woundRow}`);
        woundGuesses.push(`${woundColumn}${woundRow - 1}`);
      } else {
        woundGuesses.push(`${woundColumn + 1}${woundRow}`);
        woundGuesses.push(`${woundColumn - 1}${woundRow}`);
        woundGuesses.push(`${woundColumn}${woundRow + 1}`);
        woundGuesses.push(`${woundColumn}${woundRow - 1}`);
      }      
      let validGuesses = woundGuesses.filter(item => {
        let itemColumn = item.slice(0, 1);
        let itemRow = item.slice(1, 2);
        return userPlayer.gameboard.notYetGuessed(itemColumn, itemRow);
      })

      console.log(validGuesses);

      let randomWoundGuess = validGuesses[Math.floor(Math.random() * validGuesses.length)];
      this.makeAttack(randomWoundGuess.slice(0, 1), randomWoundGuess.slice(1, 2), userPlayer.gameboard)
      userPlayer.renderPlayerBoard();
    } else {
      let notGuessed = []
      for (let i = 0; i < userPlayer.gameboard.board.length; i++) {
        for (let j = 0; j < userPlayer.gameboard.board[i].length; j++) {
          if (userPlayer.gameboard.notYetGuessed(i, j) === true) {
            notGuessed.push(`${i}${j}`);
          }
        }
      }
      if (notGuessed.length > 0) {
        let randomGuess = notGuessed[Math.floor(Math.random() * notGuessed.length)];
        let randomColumn = randomGuess.slice(0, 1);
        let randomRow = randomGuess.slice(1, 2);
        this.makeAttack(randomColumn, randomRow, userPlayer.gameboard);
        userPlayer.renderPlayerBoard();
      }
    }
  }

  renderPlayerBoard() {
    for (let i = 0; i < this.gameboard.board.length; i++) {
      for (let j = 0; j < this.gameboard.board[i].length; j++) {
        if (this.gameboard.board[i][j] !== 'hit' &&
            this.gameboard.board[i][j] !== 'miss' &&
            this.gameboard.board[i][j] !== "") {
          let square = document.getElementById(`p${j}${i}`);
          let shipName = this.gameboard.board[i][j].name.toLowerCase().replace(/\s/g, '-');
          square.style.backgroundImage = `url(${_backGroundImgLoader__WEBPACK_IMPORTED_MODULE_2__.bgImages[`${shipName}.svg`]})`;
        } else if (this.gameboard.board[i][j] === 'miss') {
          let square = document.getElementById(`p${j}${i}`);
          let missIMG = document.createElement('img');
          missIMG.classList.add('targetMiss');
          missIMG.src = _imgs_circle_svg__WEBPACK_IMPORTED_MODULE_4__;
          while (square.hasChildNodes()) {
            square.removeChild(square.lastChild);
          }
          square.appendChild(missIMG);
          square.style.background = 'none';
        } else if (this.gameboard.board[i][j] === 'hit') {
          let square = document.getElementById(`p${j}${i}`);
          let hitIMG = document.createElement('img');
          hitIMG.classList.add('targetHit');
          hitIMG.src = _imgs_explosion_svg__WEBPACK_IMPORTED_MODULE_3__;
          while (square.hasChildNodes()) {
            square.removeChild(square.lastChild);
          }
          square.appendChild(hitIMG);
          square.style.background = 'none';
        }
      }
    }
  }

  renderOpponentBoard() {
    for (let i = 0; i < this.gameboard.board.length; i++) {
      for (let j = 0; j < this.gameboard.board[i].length; j++) {
        if (this.gameboard.board[i][j] === 'miss') {
          let square = document.getElementById(`o${j}${i}`);
          let missIMG = document.createElement('img');
          missIMG.classList.add('targetMiss');
          missIMG.src = _imgs_circle_svg__WEBPACK_IMPORTED_MODULE_4__;
          while (square.hasChildNodes()) {
            square.removeChild(square.lastChild);
          }
          square.appendChild(missIMG);
          square.style.background = 'none';
        } else if (this.gameboard.board[i][j] === 'hit') {
          let square = document.getElementById(`o${j}${i}`);
          let hitIMG = document.createElement('img');
          hitIMG.classList.add('targetHit');
          hitIMG.src = _imgs_explosion_svg__WEBPACK_IMPORTED_MODULE_3__;
          while (square.hasChildNodes()) {
            square.removeChild(square.lastChild);
          }
          square.appendChild(hitIMG);
        }
      }
    }
  }

  winGame() {
    (0,_DOMscreens__WEBPACK_IMPORTED_MODULE_5__.alertGameOver)(this.name);
  }
}




/***/ }),

/***/ "./src/scripts/Ship.js":
/*!*****************************!*\
  !*** ./src/scripts/Ship.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ship": () => (/* binding */ Ship)
/* harmony export */ });
class Ship {
  constructor(name, length) {
    this.name = name;
    this.length = length;
    this.health = length;
    this.isSunk = false;
  }

  hit() {
    this.health -= 1;
    this.checkSunk();
  }

  checkHealth() {
    return this.health;
  }

  checkSunk() {
    if (this.health <= 0) {
      this.isSunk = true;
    } else {
      this.isSunk = false;
    }
  }

  partialHit() {
    if (this.isSunk === false && this.health < this.length) {
      return true;
    } else {
      return false;
    }
  }
}




/***/ }),

/***/ "./src/scripts/backGroundImgLoader.js":
/*!********************************************!*\
  !*** ./src/scripts/backGroundImgLoader.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bgImages": () => (/* binding */ bgImages)
/* harmony export */ });
function importAll(r) {
  let imgs = {};
  r.keys().map((item, index) => { imgs[item.replace('./', '')] = r(item); });
  return imgs;
}

const bgImages = importAll(__webpack_require__("./src/imgs/ships sync \\.svg$"));



/***/ }),

/***/ "./src/scripts/gameLoop.js":
/*!*********************************!*\
  !*** ./src/scripts/gameLoop.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gameLoop": () => (/* binding */ gameLoop)
/* harmony export */ });
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Player */ "./src/scripts/Player.js");
/* harmony import */ var _placeUserShips__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./placeUserShips */ "./src/scripts/placeUserShips.js");
/* harmony import */ var _DOMscreens__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DOMscreens */ "./src/scripts/DOMscreens.js");
/* harmony import */ var _placeComputerShips__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./placeComputerShips */ "./src/scripts/placeComputerShips.js");





async function gameLoop(userName) {
  const userPlayer = new _Player__WEBPACK_IMPORTED_MODULE_0__.Player(userName);
  await (0,_placeUserShips__WEBPACK_IMPORTED_MODULE_1__.placeUserShips)(userPlayer);
  userPlayer.renderPlayerBoard();
  userPlayer.turn = true;

  const computerPlayer = new _Player__WEBPACK_IMPORTED_MODULE_0__.Player('Computer');
  (0,_placeComputerShips__WEBPACK_IMPORTED_MODULE_3__.placeComputerShip)(computerPlayer, computerPlayer.carrier);
  (0,_placeComputerShips__WEBPACK_IMPORTED_MODULE_3__.placeComputerShip)(computerPlayer, computerPlayer.battleship);
  (0,_placeComputerShips__WEBPACK_IMPORTED_MODULE_3__.placeComputerShip)(computerPlayer, computerPlayer.destroyer);
  (0,_placeComputerShips__WEBPACK_IMPORTED_MODULE_3__.placeComputerShip)(computerPlayer, computerPlayer.submarine);
  (0,_placeComputerShips__WEBPACK_IMPORTED_MODULE_3__.placeComputerShip)(computerPlayer, computerPlayer.patrolBoat);
  computerPlayer.renderOpponentBoard();

  playTurn(userPlayer, computerPlayer);
}

function playTurn(userPlayer, computerPlayer) {
  (0,_DOMscreens__WEBPACK_IMPORTED_MODULE_2__.alertGameStart)();
  
  let opponentSquares = document.querySelectorAll('.opponentSquare');
  opponentSquares.forEach(square => {
    square.addEventListener('click', () => {
      let squareColumn = square.id.slice(2, 3);
      let squareRow = square.id.slice(1, 2);
      if (computerPlayer.gameboard.notYetGuessed(squareColumn, squareRow) === false ||
          computerPlayer.gameboard.checkAllShipsSunk() === true ||
          userPlayer.gameboard.checkAllShipsSunk() === true ||
          userPlayer.turn === false) {
        return;
      }
      userPlayer.makeAttack(squareColumn, squareRow, computerPlayer.gameboard);
      userPlayer.turn = false;
      computerPlayer.turn = true;
      computerPlayer.renderOpponentBoard();
      if (computerPlayer.gameboard.checkAllShipsSunk() === true) {
        userPlayer.winGame();
      }

      // .5s delay before each CPU move
      setTimeout(function() {
        // No additional delay if no ships sunk on player move
        if (document.querySelector('.alertBox').classList.contains('hidden')) {
          setTimeout(function() {
            computerPlayer.AIMove(userPlayer);
            userPlayer.turn = true;
            computerPlayer.turn = false;
            if (userPlayer.gameboard.checkAllShipsSunk() === true) {
              computerPlayer.winGame();
            }
          }, 0) 
        // Additional delay if player sunk a CPU ship to allow popup alert       
        } else {
          setTimeout(function() {
            computerPlayer.AIMove(userPlayer);
            userPlayer.turn = true;
            computerPlayer.turn = false;
            if (userPlayer.gameboard.checkAllShipsSunk() === true) {
              computerPlayer.winGame();
            }
          }, 1250)
        }}, 500);   
    });
  })
}



/***/ }),

/***/ "./src/scripts/initLoad.js":
/*!*********************************!*\
  !*** ./src/scripts/initLoad.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initLoad": () => (/* binding */ initLoad)
/* harmony export */ });
/* harmony import */ var _gameLoop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameLoop */ "./src/scripts/gameLoop.js");
/* harmony import */ var _DOMscreens__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOMscreens */ "./src/scripts/DOMscreens.js");



function initLoad() {
  document.body.appendChild(createHeader());
  document.body.appendChild((0,_DOMscreens__WEBPACK_IMPORTED_MODULE_1__.newGame)());
  document.body.appendChild((0,_DOMscreens__WEBPACK_IMPORTED_MODULE_1__.customAlertScreen)());

  let startGame = document.querySelector('.startGame');
  startGame.addEventListener('click', () => initiateGame());

  let nameInput = document.querySelector('#userPlayerName');
  nameInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      initiateGame();
    }
  })
}

function initiateGame() {
  let playerName = document.querySelector('#userPlayerName').value;
  if (playerName === "") {
    playerName = 'User Player';
  }

  window.localStorage.setItem('battleshipPlayerName', `${playerName}`);

  let newGameOptions = document.querySelector('.newGameOptions');
  document.body.removeChild(newGameOptions);

  (0,_gameLoop__WEBPACK_IMPORTED_MODULE_0__.gameLoop)(playerName);
}

function createHeader() {
  let gameName = document.createElement('header');
  gameName.classList.add('gameName');
  gameName.textContent = 'BATTLESHIP';
  return gameName;
}



/***/ }),

/***/ "./src/scripts/placeComputerShips.js":
/*!*******************************************!*\
  !*** ./src/scripts/placeComputerShips.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "placeComputerShip": () => (/* binding */ placeComputerShip)
/* harmony export */ });
function placeComputerShip(cpu, ship) {
  let validLocations = [];
  let randomNum = Math.floor(Math.random() * 2);
  let direction;

  if (randomNum === 0) {
    direction = 'horizontal';
  } else if (randomNum === 1) {
    direction = 'vertical';
  }

  for (let column = 0; column < cpu.gameboard.board.length; column++) {
    for (let row = 0; row < cpu.gameboard.board[column].length; row++) {
      if (direction === 'horizontal') {
        if (column + (ship.length - 1) <= 9) {
          let possibleLocations = [];
          for (let i = 0; i < ship.length; i++) {
            let shipColumn = column + i;
            let shipRow = row;
            possibleLocations.push(`${shipColumn}${shipRow}`);
          }
          checkValidity(possibleLocations);
        }
      } else {
        if (row + (ship.length - 1) <= 9) {
          let possibleLocations = [];
          for (let i = 0; i < ship.length; i++) {
            let shipColumn = column;
            let shipRow = row + i;
            possibleLocations.push(`${shipColumn}${shipRow}`);
          }
          checkValidity(possibleLocations);
        }
      }
    }
  }

  let randomArray = validLocations[Math.floor(Math.random() * validLocations.length)];
  placeShip(randomArray);

  function checkValidity(array) {
    let validPlacement = array.every(location => {
      return cpu.gameboard.isEmpty(location.slice(0, 1), location.slice(1, 2));
    })
    if (validPlacement === true) {
      validLocations.push(array);
    }
  }

  function placeShip(array) {
    array.forEach(location => {
      let locationColumn = location.slice(0, 1);
      let locationRow = location.slice(1, 2);
      cpu.gameboard.placeShip(locationColumn, locationRow, ship);
    })
  }
}



/***/ }),

/***/ "./src/scripts/placeUserShips.js":
/*!***************************************!*\
  !*** ./src/scripts/placeUserShips.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "placeUserShips": () => (/* binding */ placeUserShips)
/* harmony export */ });
/* harmony import */ var _DOMcreateBoards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOMcreateBoards */ "./src/scripts/DOMcreateBoards.js");
/* harmony import */ var _DOMscreens__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOMscreens */ "./src/scripts/DOMscreens.js");



function placeUserShips(player) {
  return new Promise((resolve) => {
    document.body.appendChild((0,_DOMcreateBoards__WEBPACK_IMPORTED_MODULE_0__.createPlayerBoard)(player.name));
    document.body.appendChild((0,_DOMscreens__WEBPACK_IMPORTED_MODULE_1__.shipPlacementHelper)());

    let ships = [player.carrier, player.battleship, player.destroyer, player.submarine, player.patrolBoat];
    let index = 0;
    
    showHelperText(ships[index]);

    let playerSquares = document.querySelectorAll('.playerSquare');
    playerSquares.forEach(square => {
      square.addEventListener('mouseover', () => {
        placementHover(player, ships[index], square);
      })
      square.addEventListener('mouseout', () => {
        playerSquares.forEach(box => {
          box.classList.remove('validPlacement', 'invalidPlacement');
        })
      })
      square.addEventListener('click', () => {
        if (square.classList.contains('validPlacement')) {
          placeShip(player, ships[index]);
          index++;
          playerSquares.forEach(box => {
            box.classList.remove('validPlacement');
          })
          if (index < 5) {
            showHelperText(ships[index]);
          } else {
            runGame(player);
            resolve();
          }
        }  
      })
    })
  })
}

function showHelperText(ship) {  
  let helperText = document.querySelector('.helperText');
  helperText.textContent = `Select the location of your ${ship.name}`;
}

function runGame(player)  {
  let helper = document.querySelector('.placementHelper');
  document.body.removeChild(helper);

  let playerBoard = document.querySelector('.playerBoard');
  document.body.removeChild(playerBoard);

  document.body.appendChild((0,_DOMcreateBoards__WEBPACK_IMPORTED_MODULE_0__.createPlayerBoard)(player.name));
  document.body.appendChild((0,_DOMcreateBoards__WEBPACK_IMPORTED_MODULE_0__.createOpponentBoard)());
}

function placementHover(player, ship, square) {
  let shipLocations = [];
  let squareColumn = Number(square.id.slice(2, 3));
  let squareRow = Number(square.id.slice(1, 2));

  let rotateBtn = document.querySelector('.helperBtn');
  if (rotateBtn.classList.contains('horizontal')) {
    if (squareColumn + (ship.length - 1) > 9) {
      for (let i = 0; i < ship.length; i++) {
        let shipColumn = squareColumn + i;
        let shipRow = squareRow;
        if (shipColumn <= 9 && shipRow <= 9) {
          let shipID = document.querySelector(`#p${shipRow}${shipColumn}`);
          shipID.classList.add('invalidPlacement');
        }
      }
    } else {
      for (let i = 0; i < ship.length; i++) {
        let shipColumn = squareColumn + i;
        let shipRow = squareRow;
        shipLocations.push(`${shipColumn}${shipRow}`);
      }
      checkValidity();
    }
  } else {
    if (squareRow + (ship.length - 1) > 9) {
      for (let i = 0; i < ship.length; i++) {
        let shipColumn = squareColumn;
        let shipRow = squareRow + i;
        if (shipColumn <= 9 && shipRow <= 9) {
          let shipID = document.querySelector(`#p${shipRow}${shipColumn}`);
          shipID.classList.add('invalidPlacement');
        }
      }
    } else {
      for (let i = 0; i < ship.length; i++) {
        let shipColumn = squareColumn;
        let shipRow = squareRow + i;
        shipLocations.push(`${shipColumn}${shipRow}`);
      }
      checkValidity();
    }
  }

  function checkValidity() {
    let validPlacement = shipLocations.every(location => {
      return player.gameboard.isEmpty(location.slice(0, 1), location.slice(1, 2));
    })

    if (validPlacement === true) {
      shipLocations.forEach(location => {
        let shipID = document.querySelector(`#p${location.slice(1, 2)}${location.slice(0, 1)}`);
        shipID.classList.add('validPlacement');
      })
    } else {
      shipLocations.forEach(location => {
        let shipID = document.querySelector(`#p${location.slice(1, 2)}${location.slice(0, 1)}`);
        shipID.classList.add('invalidPlacement');
      })
    }
  }
}

function placeShip(player, ship) {
  let shipLocations = document.querySelectorAll('.validPlacement');
  shipLocations.forEach(location => {
    let locationColumn = location.id.slice(2, 3);
    let locationRow = location.id.slice(1, 2);
    player.gameboard.placeShip(locationColumn, locationRow, ship);
    player.renderPlayerBoard();
  })
}



/***/ }),

/***/ "./src/fonts/BlackOpsOne-Regular.ttf":
/*!*******************************************!*\
  !*** ./src/fonts/BlackOpsOne-Regular.ttf ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "b8437be32fe8faca71ed.ttf";

/***/ }),

/***/ "./src/imgs/circle.svg":
/*!*****************************!*\
  !*** ./src/imgs/circle.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "db880e01a83d878a9455.svg";

/***/ }),

/***/ "./src/imgs/explosion.svg":
/*!********************************!*\
  !*** ./src/imgs/explosion.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "5f9f7d1ec0fc2626585a.svg";

/***/ }),

/***/ "./src/imgs/gun-pointer.png":
/*!**********************************!*\
  !*** ./src/imgs/gun-pointer.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ae82bc826353892b71bb.png";

/***/ }),

/***/ "./src/imgs/navy.jpg":
/*!***************************!*\
  !*** ./src/imgs/navy.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "8024b9daeabfbda7be47.jpg";

/***/ }),

/***/ "./src/imgs/ships/battleship.svg":
/*!***************************************!*\
  !*** ./src/imgs/ships/battleship.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "678ab7f7b77a866da209.svg";

/***/ }),

/***/ "./src/imgs/ships/carrier.svg":
/*!************************************!*\
  !*** ./src/imgs/ships/carrier.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "8fb13901d38756bdf2b5.svg";

/***/ }),

/***/ "./src/imgs/ships/destroyer.svg":
/*!**************************************!*\
  !*** ./src/imgs/ships/destroyer.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "4e59ab79d3e1bdf48cbd.svg";

/***/ }),

/***/ "./src/imgs/ships/patrol-boat.svg":
/*!****************************************!*\
  !*** ./src/imgs/ships/patrol-boat.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "60d43116f404239e10b0.svg";

/***/ }),

/***/ "./src/imgs/ships/submarine.svg":
/*!**************************************!*\
  !*** ./src/imgs/ships/submarine.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "e2623a9f352ae7ecb016.svg";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/battleship/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ "./src/css/style.css");
/* harmony import */ var _scripts_initLoad__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/initLoad */ "./src/scripts/initLoad.js");



(0,_scripts_initLoad__WEBPACK_IMPORTED_MODULE_1__.initLoad)();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sTUFBTSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxNQUFNLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxNQUFNLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE9BQU8sWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsT0FBTyxPQUFPLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxX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Ozs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7OztXQ0FBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7O0FDQXlCO0FBQ3FCOztBQUU5QywyREFBUSxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jc3Mvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2Nzcy9zdHlsZS5jc3M/OWZjZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW1ncy9zaGlwcy8gc3luYyBub25yZWN1cnNpdmUgXFwuc3ZnJCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvRE9NY3JlYXRlQm9hcmRzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2NyaXB0cy9ET01zY3JlZW5zLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2NyaXB0cy9HYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zY3JpcHRzL1BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvU2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvYmFja0dyb3VuZEltZ0xvYWRlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvZ2FtZUxvb3AuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zY3JpcHRzL2luaXRMb2FkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2NyaXB0cy9wbGFjZUNvbXB1dGVyU2hpcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zY3JpcHRzL3BsYWNlVXNlclNoaXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9CbGFja09wc09uZS1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2ltZ3MvbmF2eS5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuLi9pbWdzL2d1bi1wb2ludGVyLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgLS1wbGF5ZXJCb2FyZFNpemU6IG1pbig3MHZoLCA3MHZ3KTtcXG4gIC0td2F0ZXJDb2xvcjogIzJhNDA0MztcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ2JsYWNrLW9wcyc7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxufVxcblxcbioge1xcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLCBcXG4gICAgICBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcXFwiQXBwbGUgQ29sb3IgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgU3ltYm9sXFxcIjtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuYm9keSB7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGU6IDEwMHB4IDFmciAvIDVmciA0ZnI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZ2FtZU5hbWUge1xcbiAgZ3JpZC1hcmVhOiAxLzEvMi8zO1xcbiAgZm9udC1zaXplOiA0cmVtO1xcbiAgZm9udC1mYW1pbHk6ICdibGFjay1vcHMnO1xcbiAgdGV4dC1zaGFkb3c6IC0ycHggMXB4IDJweCByZWQ7XFxufVxcblxcbi5wbGF5ZXJCb2FyZCB7XFxuICBncmlkLWFyZWE6IDIvMS8zLzI7XFxuICBoZWlnaHQ6IHZhcigtLXBsYXllckJvYXJkU2l6ZSk7XFxuICB3aWR0aDogdmFyKC0tcGxheWVyQm9hcmRTaXplKTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlOiAxMCUgMWZyIC8gMTAlIDFmcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLm9wcG9uZW50Qm9hcmQge1xcbiAgZ3JpZC1hcmVhOiAyLzIvMy8zO1xcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLXBsYXllckJvYXJkU2l6ZSkgKiAuOCk7XFxuICB3aWR0aDogY2FsYyh2YXIoLS1wbGF5ZXJCb2FyZFNpemUpICogLjgpO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGU6IDEwJSAxZnIgLyAxMCUgMWZyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ucGxheWVyTmFtZSxcXG4ub3Bwb25lbnROYW1lIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgdG9wOiAtNDBweDtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGZvbnQtZmFtaWx5OiAnYmxhY2stb3BzJztcXG59XFxuXFxuLnJvd01hcmtlcnMge1xcbiAgZ3JpZC1hcmVhOiAyLzEvMy8yO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jb2x1bW5NYXJrZXJzIHtcXG4gIGdyaWQtYXJlYTogMS8yLzIvMztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5yb3dMYWJlbCwgXFxuLmNvbHVtbkxhYmVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLnJvd0xhYmVsIHtcXG4gIGhlaWdodDogMTAlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5jb2x1bW5MYWJlbCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAlO1xcbn1cXG5cXG4ucGxheWVyR2FtZVNxdWFyZXMsXFxuLm9wcG9uZW50R2FtZVNxdWFyZXMge1xcbiAgZ3JpZC1hcmVhOiAyLzIvMy8zO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcXG59XFxuXFxuLnBsYXllclNxdWFyZSxcXG4ub3Bwb25lbnRTcXVhcmUge1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnBsYXllclNxdWFyZSB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG5cXG4ub3Bwb25lbnRHYW1lU3F1YXJlczpob3ZlciB7XFxuICBjdXJzb3I6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIikgMTYgMTYsIGF1dG87XFxufVxcblxcbi5vcHBvbmVudFNxdWFyZTpob3ZlciB7XFxuICBib3gtc2hhZG93OiAwIDAgMnB4IDJweCByZWQ7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVxcblxcbi50YXJnZXRIaXQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgaGVpZ2h0OiAxMzAlO1xcbiAgd2lkdGg6IDEzMCU7XFxufVxcblxcbi50YXJnZXRNaXNzIHtcXG4gIGhlaWdodDogODAlO1xcbiAgd2lkdGg6IDgwJTtcXG4gIG9wYWNpdHk6IC44O1xcbn1cXG5cXG4ubmV3R2FtZU9wdGlvbnMge1xcbiAgZ3JpZC1hcmVhOiAyLzEvMy8zO1xcbn1cXG5cXG4ucGxheWVyTmFtZVNlbGVjdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEwdmg7XFxuICBtYXJnaW4tYm90dG9tOiA1MHZoO1xcbn1cXG5cXG4ubmFtZUlucHV0IGxhYmVsLFxcbi5uYW1lSW5wdXQgaW5wdXQge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiAnYmxhY2stb3BzJztcXG59XFxuXFxuLm5hbWVJbnB1dCBsYWJlbCB7XFxuICBtYXJnaW4tYm90dG9tOiA4cHg7XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi5uYW1lSW5wdXQgaW5wdXQge1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS13YXRlckNvbG9yKTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBwYWRkaW5nLXRvcDogNHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDRweDtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxufVxcblxcbi5uYW1lSW5wdXQgaW5wdXQ6aG92ZXIge1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDhweCB2YXIoLS13YXRlckNvbG9yKTtcXG59XFxuXFxuLm5hbWVJbnB1dCBpbnB1dDpmb2N1cyB7XFxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCA0cHggdmFyKC0td2F0ZXJDb2xvcik7XFxufVxcblxcbi5zdGFydEdhbWUsXFxuLnJlc2V0R2FtZSxcXG4uaGVscGVyQnRuIHtcXG4gIHBhZGRpbmc6IDIwcHggNDBweDtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGZvbnQtZmFtaWx5OiAnYmxhY2stb3BzJztcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgYm94LXNoYWRvdzogMCAwIDRweCByZWQ7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc3RhcnRHYW1lOmhvdmVyLFxcbi5yZXNldEdhbWU6aG92ZXIsXFxuLmhlbHBlckJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuXFxuLmFsZXJ0Qm94IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHotaW5kZXg6IDUwMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIwKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxNXZoO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uYWxlcnRUZXh0Qm94IHtcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXG4gIHRleHQtc2hhZG93OiAwIDAgNnB4IHdoaXRlO1xcbiAgY29sb3I6IHJnYigxNjcsIDAsIDApO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnBsYWNlbWVudEhlbHBlciB7XFxuICBncmlkLWFyZWE6IDIvMi8zLzM7XFxuICBoZWlnaHQ6IGNhbGModmFyKC0tcGxheWVyQm9hcmRTaXplKSAqIC44KTtcXG4gIHdpZHRoOiBjYWxjKHZhcigtLXBsYXllckJvYXJkU2l6ZSkgKiAuOCk7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgZ2FwOiAzMCU7XFxuICBtYXJnaW46IDEwcHg7XFxufVxcblxcbi5oZWxwZXJUZXh0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLnZhbGlkUGxhY2VtZW50IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTI4LCAwLCAwLjgpO1xcbn1cXG5cXG4uaW52YWxpZFBsYWNlbWVudCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC44KTtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGtDQUFrQztFQUNsQyxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsNENBQTBDO0FBQzVDOztBQUVBO0VBQ0U7NEZBQzBGO0VBQzFGLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1YsU0FBUztFQUNULGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLHlEQUF1QztFQUN2QywyQkFBMkI7RUFDM0Isc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixrQ0FBa0M7RUFDbEMsbUJBQW1CO0VBQ25CLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysd0JBQXdCO0VBQ3hCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQiw4QkFBOEI7RUFDOUIsNkJB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QWE7QUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAtLXBsYXllckJvYXJkU2l6ZTogbWluKDcwdmgsIDcwdncpO1xcbiAgLS13YXRlckNvbG9yOiAjMmE0MDQzO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnYmxhY2stb3BzJztcXG4gIHNyYzogdXJsKC4uL2ZvbnRzL0JsYWNrT3BzT25lLVJlZ3VsYXIudHRmKTtcXG59XFxuXFxuKiB7XFxuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sIFxcbiAgICAgIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFxcXCJBcHBsZSBDb2xvciBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBTeW1ib2xcXFwiO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2ltZ3MvbmF2eS5qcGcpO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlOiAxMDBweCAxZnIgLyA1ZnIgNGZyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmdhbWVOYW1lIHtcXG4gIGdyaWQtYXJlYTogMS8xLzIvMztcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXG4gIGZvbnQtZmFtaWx5OiAnYmxhY2stb3BzJztcXG4gIHRleHQtc2hhZG93OiAtMnB4IDFweCAycHggcmVkO1xcbn1cXG5cXG4ucGxheWVyQm9hcmQge1xcbiAgZ3JpZC1hcmVhOiAyLzEvMy8yO1xcbiAgaGVpZ2h0OiB2YXIoLS1wbGF5ZXJCb2FyZFNpemUpO1xcbiAgd2lkdGg6IHZhcigtLXBsYXllckJvYXJkU2l6ZSk7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZTogMTAlIDFmciAvIDEwJSAxZnI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5vcHBvbmVudEJvYXJkIHtcXG4gIGdyaWQtYXJlYTogMi8yLzMvMztcXG4gIGhlaWdodDogY2FsYyh2YXIoLS1wbGF5ZXJCb2FyZFNpemUpICogLjgpO1xcbiAgd2lkdGg6IGNhbGModmFyKC0tcGxheWVyQm9hcmRTaXplKSAqIC44KTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlOiAxMCUgMWZyIC8gMTAlIDFmcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnBsYXllck5hbWUsXFxuLm9wcG9uZW50TmFtZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIHRvcDogLTQwcHg7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBmb250LWZhbWlseTogJ2JsYWNrLW9wcyc7XFxufVxcblxcbi5yb3dNYXJrZXJzIHtcXG4gIGdyaWQtYXJlYTogMi8xLzMvMjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY29sdW1uTWFya2VycyB7XFxuICBncmlkLWFyZWE6IDEvMi8yLzM7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucm93TGFiZWwsIFxcbi5jb2x1bW5MYWJlbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi5yb3dMYWJlbCB7XFxuICBoZWlnaHQ6IDEwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uY29sdW1uTGFiZWwge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwJTtcXG59XFxuXFxuLnBsYXllckdhbWVTcXVhcmVzLFxcbi5vcHBvbmVudEdhbWVTcXVhcmVzIHtcXG4gIGdyaWQtYXJlYTogMi8yLzMvMztcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XFxufVxcblxcbi5wbGF5ZXJTcXVhcmUsXFxuLm9wcG9uZW50U3F1YXJlIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5wbGF5ZXJTcXVhcmUge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuXFxuLm9wcG9uZW50R2FtZVNxdWFyZXM6aG92ZXIge1xcbiAgY3Vyc29yOiB1cmwoLi4vaW1ncy9ndW4tcG9pbnRlci5wbmcpIDE2IDE2LCBhdXRvO1xcbn1cXG5cXG4ub3Bwb25lbnRTcXVhcmU6aG92ZXIge1xcbiAgYm94LXNoYWRvdzogMCAwIDJweCAycHggcmVkO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG5cXG4udGFyZ2V0SGl0IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGhlaWdodDogMTMwJTtcXG4gIHdpZHRoOiAxMzAlO1xcbn1cXG5cXG4udGFyZ2V0TWlzcyB7XFxuICBoZWlnaHQ6IDgwJTtcXG4gIHdpZHRoOiA4MCU7XFxuICBvcGFjaXR5OiAuODtcXG59XFxuXFxuLm5ld0dhbWVPcHRpb25zIHtcXG4gIGdyaWQtYXJlYTogMi8xLzMvMztcXG59XFxuXFxuLnBsYXllck5hbWVTZWxlY3Rpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMHZoO1xcbiAgbWFyZ2luLWJvdHRvbTogNTB2aDtcXG59XFxuXFxuLm5hbWVJbnB1dCBsYWJlbCxcXG4ubmFtZUlucHV0IGlucHV0IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LWZhbWlseTogJ2JsYWNrLW9wcyc7XFxufVxcblxcbi5uYW1lSW5wdXQgbGFiZWwge1xcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4ubmFtZUlucHV0IGlucHV0IHtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0td2F0ZXJDb2xvcik7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgcGFkZGluZy10b3A6IDRweDtcXG4gIHBhZGRpbmctYm90dG9tOiA0cHg7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbn1cXG5cXG4ubmFtZUlucHV0IGlucHV0OmhvdmVyIHtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCA4cHggdmFyKC0td2F0ZXJDb2xvcik7XFxufVxcblxcbi5uYW1lSW5wdXQgaW5wdXQ6Zm9jdXMge1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgNHB4IHZhcigtLXdhdGVyQ29sb3IpO1xcbn1cXG5cXG4uc3RhcnRHYW1lLFxcbi5yZXNldEdhbWUsXFxuLmhlbHBlckJ0biB7XFxuICBwYWRkaW5nOiAyMHB4IDQwcHg7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBmb250LWZhbWlseTogJ2JsYWNrLW9wcyc7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGJveC1zaGFkb3c6IDAgMCA0cHggcmVkO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnN0YXJ0R2FtZTpob3ZlcixcXG4ucmVzZXRHYW1lOmhvdmVyLFxcbi5oZWxwZXJCdG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi5hbGVydEJveCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiA1MDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yMCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTV2aDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmFsZXJ0VGV4dEJveCB7XFxuICBmb250LXNpemU6IDRyZW07XFxuICB0ZXh0LXNoYWRvdzogMCAwIDZweCB3aGl0ZTtcXG4gIGNvbG9yOiByZ2IoMTY3LCAwLCAwKTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5wbGFjZW1lbnRIZWxwZXIge1xcbiAgZ3JpZC1hcmVhOiAyLzIvMy8zO1xcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLXBsYXllckJvYXJkU2l6ZSkgKiAuOCk7XFxuICB3aWR0aDogY2FsYyh2YXIoLS1wbGF5ZXJCb2FyZFNpemUpICogLjgpO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gIGdhcDogMzAlO1xcbiAgbWFyZ2luOiAxMHB4O1xcbn1cXG5cXG4uaGVscGVyVGV4dCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgcmVkO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi52YWxpZFBsYWNlbWVudCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDEyOCwgMCwgMC44KTtcXG59XFxuXFxuLmludmFsaWRQbGFjZW1lbnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuOCk7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsInZhciBtYXAgPSB7XG5cdFwiLi9iYXR0bGVzaGlwLnN2Z1wiOiBcIi4vc3JjL2ltZ3Mvc2hpcHMvYmF0dGxlc2hpcC5zdmdcIixcblx0XCIuL2NhcnJpZXIuc3ZnXCI6IFwiLi9zcmMvaW1ncy9zaGlwcy9jYXJyaWVyLnN2Z1wiLFxuXHRcIi4vZGVzdHJveWVyLnN2Z1wiOiBcIi4vc3JjL2ltZ3Mvc2hpcHMvZGVzdHJveWVyLnN2Z1wiLFxuXHRcIi4vcGF0cm9sLWJvYXQuc3ZnXCI6IFwiLi9zcmMvaW1ncy9zaGlwcy9wYXRyb2wtYm9hdC5zdmdcIixcblx0XCIuL3N1Ym1hcmluZS5zdmdcIjogXCIuL3NyYy9pbWdzL3NoaXBzL3N1Ym1hcmluZS5zdmdcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zcmMvaW1ncy9zaGlwcyBzeW5jIFxcXFwuc3ZnJFwiOyIsImZ1bmN0aW9uIGNyZWF0ZVBsYXllckJvYXJkKHVzZXJOYW1lKSB7XG4gIGxldCBwbGF5ZXJCb2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBwbGF5ZXJCb2FyZC5jbGFzc0xpc3QuYWRkKCdwbGF5ZXJCb2FyZCcpO1xuXG4gIGxldCByb3dNYXJrZXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHJvd01hcmtlcnMuY2xhc3NMaXN0LmFkZCgncm93TWFya2VycycpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICBsZXQgcm93TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICByb3dMYWJlbC5jbGFzc0xpc3QuYWRkKCdyb3dMYWJlbCcpO1xuICAgIHJvd0xhYmVsLnRleHRDb250ZW50ID0gU3RyaW5nLmZyb21DaGFyQ29kZSg5NyArIGkpLnRvVXBwZXJDYXNlKCk7XG4gICAgcm93TWFya2Vycy5hcHBlbmRDaGlsZChyb3dMYWJlbCk7XG4gIH1cbiAgcGxheWVyQm9hcmQuYXBwZW5kQ2hpbGQocm93TWFya2Vycyk7XG5cbiAgbGV0IGNvbHVtbk1hcmtlcnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29sdW1uTWFya2Vycy5jbGFzc0xpc3QuYWRkKCdjb2x1bW5NYXJrZXJzJyk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgIGxldCBjb2x1bW5MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbHVtbkxhYmVsLmNsYXNzTGlzdC5hZGQoJ2NvbHVtbkxhYmVsJyk7XG4gICAgY29sdW1uTGFiZWwudGV4dENvbnRlbnQgPSBgJHtpICsgMX1gO1xuICAgIGNvbHVtbk1hcmtlcnMuYXBwZW5kQ2hpbGQoY29sdW1uTGFiZWwpO1xuICB9XG4gIHBsYXllckJvYXJkLmFwcGVuZENoaWxkKGNvbHVtbk1hcmtlcnMpO1xuXG4gIGxldCBnYW1lU3F1YXJlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBnYW1lU3F1YXJlcy5jbGFzc0xpc3QuYWRkKCdwbGF5ZXJHYW1lU3F1YXJlcycpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwMDsgaSsrKSB7XG4gICAgbGV0IHBsYXllclNxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxldCBmb3JtYXR0ZWROdW0gPSAoaSkudG9Mb2NhbGVTdHJpbmcoJ2VuLVVTJywge21pbmltdW1JbnRlZ2VyRGlnaXRzOiAyLCB1c2VHcm91cGluZzpmYWxzZX0pO1xuICAgIHBsYXllclNxdWFyZS5pZCA9ICdwJyArIGZvcm1hdHRlZE51bTtcbiAgICBwbGF5ZXJTcXVhcmUuY2xhc3NMaXN0LmFkZCgncGxheWVyU3F1YXJlJyk7XG4gICAgZ2FtZVNxdWFyZXMuYXBwZW5kQ2hpbGQocGxheWVyU3F1YXJlKTtcbiAgfVxuICBwbGF5ZXJCb2FyZC5hcHBlbmRDaGlsZChnYW1lU3F1YXJlcyk7XG5cbiAgbGV0IHBsYXllck5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHBsYXllck5hbWUuY2xhc3NMaXN0LmFkZCgncGxheWVyTmFtZScpO1xuICBwbGF5ZXJOYW1lLnRleHRDb250ZW50ID0gdXNlck5hbWU7XG4gIHBsYXllckJvYXJkLmFwcGVuZENoaWxkKHBsYXllck5hbWUpO1xuXG4gIHJldHVybiBwbGF5ZXJCb2FyZDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlT3Bwb25lbnRCb2FyZCgpIHtcbiAgbGV0IHBsYXllckJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHBsYXllckJvYXJkLmNsYXNzTGlzdC5hZGQoJ29wcG9uZW50Qm9hcmQnKTtcblxuICBsZXQgcm93TWFya2VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICByb3dNYXJrZXJzLmNsYXNzTGlzdC5hZGQoJ3Jvd01hcmtlcnMnKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgbGV0IHJvd0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcm93TGFiZWwuY2xhc3NMaXN0LmFkZCgncm93TGFiZWwnKTtcbiAgICByb3dMYWJlbC50ZXh0Q29udGVudCA9IFN0cmluZy5mcm9tQ2hhckNvZGUoOTcgKyBpKS50b1VwcGVyQ2FzZSgpO1xuICAgIHJvd01hcmtlcnMuYXBwZW5kQ2hpbGQocm93TGFiZWwpO1xuICB9XG4gIHBsYXllckJvYXJkLmFwcGVuZENoaWxkKHJvd01hcmtlcnMpO1xuXG4gIGxldCBjb2x1bW5NYXJrZXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbHVtbk1hcmtlcnMuY2xhc3NMaXN0LmFkZCgnY29sdW1uTWFya2VycycpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICBsZXQgY29sdW1uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb2x1bW5MYWJlbC5jbGFzc0xpc3QuYWRkKCdjb2x1bW5MYWJlbCcpO1xuICAgIGNvbHVtbkxhYmVsLnRleHRDb250ZW50ID0gYCR7aSArIDF9YDtcbiAgICBjb2x1bW5NYXJrZXJzLmFwcGVuZENoaWxkKGNvbHVtbkxhYmVsKTtcbiAgfVxuICBwbGF5ZXJCb2FyZC5hcHBlbmRDaGlsZChjb2x1bW5NYXJrZXJzKTtcblxuICBsZXQgZ2FtZVNxdWFyZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZ2FtZVNxdWFyZXMuY2xhc3NMaXN0LmFkZCgnb3Bwb25lbnRHYW1lU3F1YXJlcycpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwMDsgaSsrKSB7XG4gICAgbGV0IHBsYXllclNxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxldCBmb3JtYXR0ZWROdW0gPSAoaSkudG9Mb2NhbGVTdHJpbmcoJ2VuLVVTJywge21pbmltdW1JbnRlZ2VyRGlnaXRzOiAyLCB1c2VHcm91cGluZzpmYWxzZX0pO1xuICAgIHBsYXllclNxdWFyZS5pZCA9ICdvJyArIGZvcm1hdHRlZE51bTtcbiAgICBwbGF5ZXJTcXVhcmUuY2xhc3NMaXN0LmFkZCgnb3Bwb25lbnRTcXVhcmUnKTtcbiAgICBnYW1lU3F1YXJlcy5hcHBlbmRDaGlsZChwbGF5ZXJTcXVhcmUpO1xuICB9XG4gIHBsYXllckJvYXJkLmFwcGVuZENoaWxkKGdhbWVTcXVhcmVzKTtcblxuICBsZXQgb3Bwb25lbnROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBvcHBvbmVudE5hbWUuY2xhc3NMaXN0LmFkZCgnb3Bwb25lbnROYW1lJyk7XG4gIG9wcG9uZW50TmFtZS50ZXh0Q29udGVudCA9ICdDb21wdXRlcic7XG4gIHBsYXllckJvYXJkLmFwcGVuZENoaWxkKG9wcG9uZW50TmFtZSk7XG5cbiAgcmV0dXJuIHBsYXllckJvYXJkO1xufVxuXG5leHBvcnQge1xuICBjcmVhdGVQbGF5ZXJCb2FyZCxcbiAgY3JlYXRlT3Bwb25lbnRCb2FyZCxcbn07XG4iLCJmdW5jdGlvbiBuZXdHYW1lKCkge1xuICBsZXQgbmV3R2FtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBuZXdHYW1lLmNsYXNzTGlzdC5hZGQoJ25ld0dhbWVPcHRpb25zJyk7XG5cbiAgbGV0IHBsYXllck5hbWVTZWxlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gIHBsYXllck5hbWVTZWxlY3Rpb24uY2xhc3NMaXN0LmFkZCgncGxheWVyTmFtZVNlbGVjdGlvbicpO1xuICBwbGF5ZXJOYW1lU2VsZWN0aW9uLnNldEF0dHJpYnV0ZSgnYWN0aW9uJywgXCJcIik7XG4gIHBsYXllck5hbWVTZWxlY3Rpb24uc2V0QXR0cmlidXRlKCdhdXRvY29tcGxldGUnLCAnb2ZmJyk7XG4gIG5ld0dhbWUuYXBwZW5kQ2hpbGQocGxheWVyTmFtZVNlbGVjdGlvbik7XG5cbiAgbGV0IG5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBuYW1lSW5wdXQuY2xhc3NMaXN0LmFkZCgnbmFtZUlucHV0Jyk7XG4gIHBsYXllck5hbWVTZWxlY3Rpb24uYXBwZW5kQ2hpbGQobmFtZUlucHV0KTtcblxuICBsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICd1c2VyUGxheWVyTmFtZScpO1xuICBsYWJlbC50ZXh0Q29udGVudCA9ICdFbnRlciBZb3VyIE5hbWU6J1xuICBuYW1lSW5wdXQuYXBwZW5kQ2hpbGQobGFiZWwpO1xuXG4gIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGlucHV0Lm5hbWUgPSAndXNlclBsYXllck5hbWUnO1xuICBpbnB1dC50eXBlID0gJ3RleHQnO1xuICBpbnB1dC5pZCA9ICd1c2VyUGxheWVyTmFtZSc7XG4gIGlucHV0Lm1heExlbmd0aCA9ICcxMic7XG4gIG5hbWVJbnB1dC5hcHBlbmRDaGlsZChpbnB1dCk7XG4gIGxldCBwbGF5ZXJOYW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2JhdHRsZXNoaXBQbGF5ZXJOYW1lJykgfHwgXCJcIjtcbiAgaW5wdXQudmFsdWUgPSBwbGF5ZXJOYW1lO1xuXG4gIGxldCBwbGF5QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIHBsYXlCdG4uY2xhc3NMaXN0LmFkZCgnc3RhcnRHYW1lJyk7XG4gIHBsYXlCdG4udHlwZSA9ICdidXR0b24nO1xuICBwbGF5QnRuLnRleHRDb250ZW50ID0gXCJTdGFydCBHYW1lIVwiO1xuICBwbGF5ZXJOYW1lU2VsZWN0aW9uLmFwcGVuZENoaWxkKHBsYXlCdG4pO1xuXG4gIHJldHVybiBuZXdHYW1lO1xufVxuXG5mdW5jdGlvbiBzaGlwUGxhY2VtZW50SGVscGVyKCkge1xuICBsZXQgaGVscGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGhlbHBlckRpdi5jbGFzc0xpc3QuYWRkKCdwbGFjZW1lbnRIZWxwZXInKTtcblxuICBsZXQgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGJ0bi5jbGFzc0xpc3QuYWRkKCdoZWxwZXJCdG4nLCAnaG9yaXpvbnRhbCcpO1xuICBidG4udGV4dENvbnRlbnQgPSBcIlJvdGF0ZSBTaGlwXCI7XG4gIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBidG4uY2xhc3NMaXN0LnRvZ2dsZSgnaG9yaXpvbnRhbCcpO1xuICB9KVxuICBoZWxwZXJEaXYuYXBwZW5kQ2hpbGQoYnRuKTtcblxuICBsZXQgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgdGV4dC5jbGFzc0xpc3QuYWRkKCdoZWxwZXJUZXh0Jyk7XG4gIGhlbHBlckRpdi5hcHBlbmRDaGlsZCh0ZXh0KTtcblxuICByZXR1cm4gaGVscGVyRGl2O1xufVxuXG5mdW5jdGlvbiBjdXN0b21BbGVydFNjcmVlbigpIHtcbiAgbGV0IGFsZXJ0Qm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGFsZXJ0Qm94LmNsYXNzTGlzdC5hZGQoJ2FsZXJ0Qm94JywgJ2hpZGRlbicpO1xuXG4gIGxldCB0ZXh0Qm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRleHRCb3guY2xhc3NMaXN0LmFkZCgnYWxlcnRUZXh0Qm94Jyk7XG4gIGFsZXJ0Qm94LmFwcGVuZENoaWxkKHRleHRCb3gpO1xuXG4gIHJldHVybiBhbGVydEJveDtcbn1cblxuZnVuY3Rpb24gYWxlcnRHYW1lU3RhcnQoKSB7XG4gIGxldCBhbGVydEJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbGVydEJveCcpO1xuICBhbGVydEJveC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcblxuICBsZXQgdGV4dEJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbGVydFRleHRCb3gnKTtcbiAgdGV4dEJveC50ZXh0Q29udGVudCA9ICdDbGljayBvbiBhbiBlbmVteSBzcXVhcmUgdG8gbGF1bmNoIHlvdXIgYXR0YWNrISc7XG5cbiAgc2V0VGltZW91dChoaWRlQWxlcnQsIDMwMDApO1xufVxuXG5mdW5jdGlvbiBhbGVydFN1bmtTaGlwKHBsYXllciwgc2hpcE5hbWUpIHtcbiAgbGV0IGFsZXJ0Qm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFsZXJ0Qm94Jyk7XG4gIGFsZXJ0Qm94LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuXG4gIGxldCB0ZXh0Qm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFsZXJ0VGV4dEJveCcpO1xuICB0ZXh0Qm94LnRleHRDb250ZW50ID0gYCR7cGxheWVyfSdzICR7c2hpcE5hbWV9IGhhcyBiZWVuIHN1bmshYDtcblxuICBzZXRUaW1lb3V0KGhpZGVBbGVydCwgMTUwMCk7XG59XG5cbmZ1bmN0aW9uIGFsZXJ0R2FtZU92ZXIocGxheWVyTmFtZSkge1xuICBsZXQgYWxlcnRCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWxlcnRCb3gnKTtcbiAgYWxlcnRCb3guY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gIGFsZXJ0Qm94LmNsYXNzTGlzdC5hZGQoJ3dpbm5lclNjcmVlbicpO1xuXG4gIGxldCB0ZXh0Qm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFsZXJ0VGV4dEJveCcpO1xuICB0ZXh0Qm94LnRleHRDb250ZW50ID0gYCR7cGxheWVyTmFtZX0gV2lucyFgO1xuXG4gIGxldCByZXNldEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICByZXNldEJ0bi5jbGFzc0xpc3QuYWRkKCdyZXNldEdhbWUnKTtcbiAgcmVzZXRCdG4udGV4dENvbnRlbnQgPSAnTmV3IEdhbWUnO1xuXG4gIHJlc2V0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgfSlcblxuICBhbGVydEJveC5hcHBlbmRDaGlsZChyZXNldEJ0bik7XG59XG5cbmZ1bmN0aW9uIGhpZGVBbGVydCgpIHtcbiAgbGV0IGFsZXJ0Qm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFsZXJ0Qm94Jyk7XG4gIGlmIChhbGVydEJveC5jbGFzc0xpc3QuY29udGFpbnMoJ3dpbm5lclNjcmVlbicpKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGFsZXJ0Qm94LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xufVxuXG5leHBvcnQge1xuICBuZXdHYW1lLFxuICBjdXN0b21BbGVydFNjcmVlbixcbiAgYWxlcnRHYW1lU3RhcnQsXG4gIGFsZXJ0U3Vua1NoaXAsXG4gIGFsZXJ0R2FtZU92ZXIsXG4gIGhpZGVBbGVydCxcbiAgc2hpcFBsYWNlbWVudEhlbHBlcixcbiB9OyIsImltcG9ydCB7IGFsZXJ0U3Vua1NoaXAgfSBmcm9tIFwiLi9ET01zY3JlZW5zXCI7XG5cbmNsYXNzIEdhbWVib2FyZCB7XG4gIGNvbnN0cnVjdG9yKHBsYXllcikge1xuICAgIHRoaXMucGxheWVyID0gcGxheWVyO1xuICAgIHRoaXMuYm9hcmQgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgIHRoaXMuYm9hcmQucHVzaChbXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIl0pO1xuICAgIH1cbiAgfVxuXG4gIHBsYWNlU2hpcChjb2x1bW4sIHJvdywgc2hpcCkge1xuICAgIHRoaXMuYm9hcmRbY29sdW1uXVtyb3ddID0gc2hpcDtcbiAgfVxuXG4gIHJlY2VpdmVBdHRhY2soY29sdW1uLCByb3cpIHtcbiAgICBpZiAodGhpcy5ib2FyZFtjb2x1bW5dW3Jvd10gIT09IFwiXCIpIHtcbiAgICAgIHRoaXMuYm9hcmRbY29sdW1uXVtyb3ddLmhpdCgpO1xuICAgICAgaWYgKHRoaXMuYm9hcmRbY29sdW1uXVtyb3ddLmlzU3VuayA9PT0gdHJ1ZSkge1xuICAgICAgICBhbGVydFN1bmtTaGlwKHRoaXMucGxheWVyLCB0aGlzLmJvYXJkW2NvbHVtbl1bcm93XS5uYW1lKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuYm9hcmRbY29sdW1uXVtyb3ddID0gJ2hpdCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYm9hcmRbY29sdW1uXVtyb3ddID0gJ21pc3MnO1xuICAgIH1cbiAgfVxuXG4gIHJlcG9ydE1pc3NlcygpIHtcbiAgICBsZXQgbWlzc0xvZyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5ib2FyZC5sZW5ndGg7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmJvYXJkW2ldLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGlmICh0aGlzLmJvYXJkW2ldW2pdID09PSAnbWlzcycpIHtcbiAgICAgICAgICBtaXNzTG9nLnB1c2goKGksIGopKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbWlzc0xvZztcbiAgfVxuXG4gIHJlcG9ydEhpdHMoKSB7XG4gICAgbGV0IGhpdExvZyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5ib2FyZC5sZW5ndGg7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmJvYXJkW2ldLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGlmICh0aGlzLmJvYXJkW2ldW2pdID09PSAnaGl0Jykge1xuICAgICAgICAgIGhpdExvZy5wdXNoKChpLCBqKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGhpdExvZztcbiAgfVxuXG4gIGNoZWNrQWxsU2hpcHNTdW5rKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5ib2FyZC5sZW5ndGg7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmJvYXJkW2ldLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGlmICh0aGlzLmJvYXJkW2ldW2pdICE9PSAnaGl0JyAmJlxuICAgICAgICAgICAgdGhpcy5ib2FyZFtpXVtqXSAhPT0nbWlzcycgJiZcbiAgICAgICAgICAgIHRoaXMuYm9hcmRbaV1bal0gIT09IFwiXCIpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBub3RZZXRHdWVzc2VkKGNvbHVtbiwgcm93KSB7XG4gICAgaWYgKHRoaXMuYm9hcmRbY29sdW1uXVtyb3ddICE9PSAnaGl0JyAmJlxuICAgICAgICB0aGlzLmJvYXJkW2NvbHVtbl1bcm93XSAhPT0gJ21pc3MnKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaXNFbXB0eShjb2x1bW4sIHJvdykge1xuICAgIGlmICh0aGlzLmJvYXJkW2NvbHVtbl1bcm93XSA9PT0gXCJcIikge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbnRhaW5zU2hpcChjb2x1bW4sIHJvdykge1xuICAgIGlmICh0aGlzLmJvYXJkW2NvbHVtbl1bcm93XSAhPT0gJ2hpdCcgJiZcbiAgICAgICAgdGhpcy5ib2FyZFtjb2x1bW5dW3Jvd10gIT09ICdtaXNzJyAmJlxuICAgICAgICB0aGlzLmJvYXJkW2NvbHVtbl1bcm93XSAhPT0gXCJcIikge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5leHBvcnQgeyBHYW1lYm9hcmQgfTtcbiIsImltcG9ydCB7IFNoaXAgfSBmcm9tIFwiLi9TaGlwXCI7XG5pbXBvcnQgeyBHYW1lYm9hcmQgfSBmcm9tIFwiLi9HYW1lYm9hcmRcIjtcbmltcG9ydCB7IGJnSW1hZ2VzIH0gZnJvbSBcIi4vYmFja0dyb3VuZEltZ0xvYWRlclwiO1xuaW1wb3J0IEhpdCBmcm9tICcuLi9pbWdzL2V4cGxvc2lvbi5zdmcnO1xuaW1wb3J0IENpcmNsZSBmcm9tICcuLi9pbWdzL2NpcmNsZS5zdmcnO1xuaW1wb3J0IHsgYWxlcnRHYW1lT3ZlciB9IGZyb20gXCIuL0RPTXNjcmVlbnNcIjtcblxuY2xhc3MgUGxheWVyIHtcbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy50dXJuID0gZmFsc2U7XG4gICAgdGhpcy5nYW1lYm9hcmQgPSBuZXcgR2FtZWJvYXJkKHRoaXMubmFtZSk7XG4gICAgdGhpcy5jYXJyaWVyID0gbmV3IFNoaXAoJ0NhcnJpZXInLCA1KTtcbiAgICB0aGlzLmJhdHRsZXNoaXAgPSBuZXcgU2hpcCgnQmF0dGxlc2hpcCcsIDQpO1xuICAgIHRoaXMuZGVzdHJveWVyID0gbmV3IFNoaXAoJ0Rlc3Ryb3llcicsIDMpO1xuICAgIHRoaXMuc3VibWFyaW5lID0gbmV3IFNoaXAoJ1N1Ym1hcmluZScsIDMpO1xuICAgIHRoaXMucGF0cm9sQm9hdCA9IG5ldyBTaGlwKCdQYXRyb2wgQm9hdCcsIDIpO1xuICAgIHRoaXMuYWxsU2hpcHMgPSBbdGhpcy5jYXJyaWVyLCB0aGlzLmJhdHRsZXNoaXAsIHRoaXMuZGVzdHJveWVyLCB0aGlzLnN1Ym1hcmluZSwgdGhpcy5wYXRyb2xCb2F0XTtcbiAgfVxuXG4gIG1ha2VBdHRhY2soY29sdW1uLCByb3csIG9wcG9uZW50Qm9hcmQpIHtcbiAgICBpZiAob3Bwb25lbnRCb2FyZC5jaGVja0FsbFNoaXBzU3VuaygpID09PSB0cnVlIHx8IHRoaXMudHVybiA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKG9wcG9uZW50Qm9hcmQubm90WWV0R3Vlc3NlZChjb2x1bW4sIHJvdykpIHtcbiAgICAgIG9wcG9uZW50Qm9hcmQucmVjZWl2ZUF0dGFjayhjb2x1bW4sIHJvdyk7XG4gICAgfVxuICAgIHJldHVybjtcbiAgfVxuXG4gIEFJTW92ZSh1c2VyUGxheWVyKSB7XG4gICAgaWYgKHRoaXMuZ2FtZWJvYXJkLmNoZWNrQWxsU2hpcHNTdW5rKCkgPT09IHRydWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IHdvdW5kZWRTaGlwID0gdXNlclBsYXllci5hbGxTaGlwcy5zb21lKHNoaXAgPT4ge1xuICAgICAgcmV0dXJuIHNoaXAucGFydGlhbEhpdCgpO1xuICAgIH0pXG4gICAgaWYgKHdvdW5kZWRTaGlwID09PSB0cnVlKSB7XG4gICAgICBsZXQgaGl0TG9jYXRpb25zID0gW107XG4gICAgICBmb3IgKGxldCBjb2x1bW4gPSAwOyBjb2x1bW4gPCB1c2VyUGxheWVyLmdhbWVib2FyZC5ib2FyZC5sZW5ndGg7IGNvbHVtbisrKSB7XG4gICAgICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IHVzZXJQbGF5ZXIuZ2FtZWJvYXJkLmJvYXJkW2NvbHVtbl0ubGVuZ3RoOyByb3crKykge1xuICAgICAgICAgIGlmICh1c2VyUGxheWVyLmdhbWVib2FyZC5ib2FyZFtjb2x1bW5dW3Jvd10gPT09ICdoaXQnKSB7XG4gICAgICAgICAgICBoaXRMb2NhdGlvbnMucHVzaChgJHtjb2x1bW59JHtyb3d9YCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsZXQgd291bmRlZExvY2F0aW9ucyA9IFtdO1xuICAgICAgaGl0TG9jYXRpb25zLmZvckVhY2gobG9jYXRpb24gPT4ge1xuICAgICAgICBsZXQgaGl0Q29sdW1uID0gTnVtYmVyKGxvY2F0aW9uLnNsaWNlKDAsIDEpKTtcbiAgICAgICAgbGV0IGhpdFJvdyA9IE51bWJlcihsb2NhdGlvbi5zbGljZSgxLCAyKSk7XG4gICAgICAgIGlmIChoaXRDb2x1bW4gPT09IDAgJiYgaGl0Um93ID09PSAwKSB7XG4gICAgICAgICAgaWYgKHVzZXJQbGF5ZXIuZ2FtZWJvYXJkLmNvbnRhaW5zU2hpcChoaXRDb2x1bW4gKyAxLCBoaXRSb3cpIHx8XG4gICAgICAgICAgICAgIHVzZXJQbGF5ZXIuZ2FtZWJvYXJkLmNvbnRhaW5zU2hpcChoaXRDb2x1bW4sIGhpdFJvdyArIDEpKSB7XG4gICAgICAgICAgICB3b3VuZGVkTG9jYXRpb25zLnB1c2gobG9jYXRpb24pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChoaXRDb2x1bW4gPT09IDAgJiYgaGl0Um93ID09PSA5KSB7XG4gICAgICAgICAgaWYgKHVzZXJQbGF5ZXIuZ2FtZWJvYXJkLmNvbnRhaW5zU2hpcChoaXRDb2x1bW4gKyAxLCBoaXRSb3cpIHx8XG4gICAgICAgICAgICAgIHVzZXJQbGF5ZXIuZ2FtZWJvYXJkLmNvbnRhaW5zU2hpcChoaXRDb2x1bW4sIGhpdFJvdyAtIDEpKSB7XG4gICAgICAgICAgICB3b3VuZGVkTG9jYXRpb25zLnB1c2gobG9jYXRpb24pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChoaXRDb2x1bW4gPT09IDkgJiYgaGl0Um93ID09PSAwKSB7XG4gICAgICAgICAgaWYgKHVzZXJQbGF5ZXIuZ2FtZWJvYXJkLmNvbnRhaW5zU2hpcChoaXRDb2x1bW4gLSAxLCBoaXRSb3cpIHx8XG4gICAgICAgICAgICAgIHVzZXJQbGF5ZXIuZ2FtZWJvYXJkLmNvbnRhaW5zU2hpcChoaXRDb2x1bW4sIGhpdFJvdyArIDEpKSB7XG4gICAgICAgICAgICB3b3VuZGVkTG9jYXRpb25zLnB1c2gobG9jYXRpb24pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChoaXRDb2x1bW4gPT09IDkgJiYgaGl0Um93ID09PSA5KSB7XG4gICAgICAgICAgaWYgKHVzZXJQbGF5ZXIuZ2FtZWJvYXJkLmNvbnRhaW5zU2hpcChoaXRDb2x1bW4gLSAxLCBoaXRSb3cpIHx8XG4gICAgICAgICAgICAgIHVzZXJQbGF5ZXIuZ2FtZWJvYXJkLmNvbnRhaW5zU2hpcChoaXRDb2x1bW4sIGhpdFJvdyAtIDEpKSB7XG4gICAgICAgICAgICB3b3VuZGVkTG9jYXRpb25zLnB1c2gobG9jYXRpb24pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChoaXRDb2x1bW4gPT09IDApIHtcbiAgICAgICAgICBpZiAodXNlclBsYXllci5nYW1lYm9hcmQuY29udGFpbnNTaGlwKGhpdENvbHVtbiArIDEsIGhpdFJvdykgfHxcbiAgICAgICAgICAgICAgdXNlclBsYXllci5nYW1lYm9hcmQuY29udGFpbnNTaGlwKGhpdENvbHVtbiwgaGl0Um93ICsgMSkgfHxcbiAgICAgICAgICAgICAgdXNlclBsYXllci5nYW1lYm9hcmQuY29udGFpbnNTaGlwKGhpdENvbHVtbiwgaGl0Um93IC0gMSkpIHtcbiAgICAgICAgICAgIHdvdW5kZWRMb2NhdGlvbnMucHVzaChsb2NhdGlvbik7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGhpdENvbHVtbiA9PT0gOSkge1xuICAgICAgICAgIGlmICh1c2VyUGxheWVyLmdhbWVib2FyZC5jb250YWluc1NoaXAoaGl0Q29sdW1uIC0gMSwgaGl0Um93KSB8fFxuICAgICAgICAgICAgICB1c2VyUGxheWVyLmdhbWVib2FyZC5jb250YWluc1NoaXAoaGl0Q29sdW1uLCBoaXRSb3cgKyAxKSB8fFxuICAgICAgICAgICAgICB1c2VyUGxheWVyLmdhbWVib2FyZC5jb250YWluc1NoaXAoaGl0Q29sdW1uLCBoaXRSb3cgLSAxKSkge1xuICAgICAgICAgICAgd291bmRlZExvY2F0aW9ucy5wdXNoKGxvY2F0aW9uKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoaGl0Um93ID09PSAwKSB7XG4gICAgICAgICAgaWYgKHVzZXJQbGF5ZXIuZ2FtZWJvYXJkLmNvbnRhaW5zU2hpcChoaXRDb2x1bW4gKyAxLCBoaXRSb3cpIHx8XG4gICAgICAgICAgICAgIHVzZXJQbGF5ZXIuZ2FtZWJvYXJkLmNvbnRhaW5zU2hpcChoaXRDb2x1bW4gLSAxLCBoaXRSb3cpIHx8XG4gICAgICAgICAgICAgIHVzZXJQbGF5ZXIuZ2FtZWJvYXJkLmNvbnRhaW5zU2hpcChoaXRDb2x1bW4sIGhpdFJvdyArIDEpKSB7XG4gICAgICAgICAgICB3b3VuZGVkTG9jYXRpb25zLnB1c2gobG9jYXRpb24pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChoaXRSb3cgPT09IDkpIHtcbiAgICAgICAgICBpZiAodXNlclBsYXllci5nYW1lYm9hcmQuY29udGFpbnNTaGlwKGhpdENvbHVtbiArIDEsIGhpdFJvdykgfHxcbiAgICAgICAgICAgICAgdXNlclBsYXllci5nYW1lYm9hcmQuY29udGFpbnNTaGlwKGhpdENvbHVtbiAtIDEsIGhpdFJvdykgfHxcbiAgICAgICAgICAgICAgdXNlclBsYXllci5nYW1lYm9hcmQuY29udGFpbnNTaGlwKGhpdENvbHVtbiwgaGl0Um93IC0gMSkpIHtcbiAgICAgICAgICAgIHdvdW5kZWRMb2NhdGlvbnMucHVzaChsb2NhdGlvbik7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmICh1c2VyUGxheWVyLmdhbWVib2FyZC5jb250YWluc1NoaXAoaGl0Q29sdW1uICsgMSwgaGl0Um93KSB8fFxuICAgICAgICAgICAgICB1c2VyUGxheWVyLmdhbWVib2FyZC5jb250YWluc1NoaXAoaGl0Q29sdW1uIC0gMSwgaGl0Um93KSB8fFxuICAgICAgICAgICAgICB1c2VyUGxheWVyLmdhbWVib2FyZC5jb250YWluc1NoaXAoaGl0Q29sdW1uLCBoaXRSb3cgKyAxKSB8fFxuICAgICAgICAgICAgICB1c2VyUGxheWVyLmdhbWVib2FyZC5jb250YWluc1NoaXAoaGl0Q29sdW1uLCBoaXRSb3cgLSAxKSkge1xuICAgICAgICAgICAgd291bmRlZExvY2F0aW9ucy5wdXNoKGxvY2F0aW9uKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICBsZXQgcmFuZG9tV291bmQgPSB3b3VuZGVkTG9jYXRpb25zW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHdvdW5kZWRMb2NhdGlvbnMubGVuZ3RoKV07XG4gICAgICBsZXQgd291bmRDb2x1bW4gPSBOdW1iZXIocmFuZG9tV291bmQuc2xpY2UoMCwgMSkpO1xuICAgICAgbGV0IHdvdW5kUm93ID0gTnVtYmVyKHJhbmRvbVdvdW5kLnNsaWNlKDEsIDIpKTtcbiAgICAgIGxldCB3b3VuZEd1ZXNzZXMgPSBbXTtcbiAgICAgIGlmICh3b3VuZENvbHVtbiA9PT0gMCAmJiB3b3VuZFJvdyA9PT0gMCkge1xuICAgICAgICB3b3VuZEd1ZXNzZXMucHVzaChgJHt3b3VuZENvbHVtbiArIDF9JHt3b3VuZFJvd31gKTtcbiAgICAgICAgd291bmRHdWVzc2VzLnB1c2goYCR7d291bmRDb2x1bW59JHt3b3VuZFJvdyArIDF9YCk7XG4gICAgICB9IGVsc2UgaWYgKHdvdW5kQ29sdW1uID09PSAwICYmIHdvdW5kUm93ID09PSA5KSB7XG4gICAgICAgIHdvdW5kR3Vlc3Nlcy5wdXNoKGAke3dvdW5kQ29sdW1uICsgMX0ke3dvdW5kUm93fWApO1xuICAgICAgICB3b3VuZEd1ZXNzZXMucHVzaChgJHt3b3VuZENvbHVtbn0ke3dvdW5kUm93IC0gMX1gKTtcbiAgICAgIH0gZWxzZSBpZiAod291bmRDb2x1bW4gPT09IDkgJiYgd291bmRSb3cgPT09IDApIHtcbiAgICAgICAgd291bmRHdWVzc2VzLnB1c2goYCR7d291bmRDb2x1bW4gLSAxfSR7d291bmRSb3d9YCk7XG4gICAgICAgIHdvdW5kR3Vlc3Nlcy5wdXNoKGAke3dvdW5kQ29sdW1ufSR7d291bmRSb3cgKyAxfWApO1xuICAgICAgfSBlbHNlIGlmICh3b3VuZENvbHVtbiA9PT0gOSAmJiB3b3VuZFJvdyA9PT0gOSkge1xuICAgICAgICB3b3VuZEd1ZXNzZXMucHVzaChgJHt3b3VuZENvbHVtbiAtIDF9JHt3b3VuZFJvd31gKTtcbiAgICAgICAgd291bmRHdWVzc2VzLnB1c2goYCR7d291bmRDb2x1bW59JHt3b3VuZFJvdyAtIDF9YCk7XG4gICAgICB9IGVsc2UgaWYgKHdvdW5kQ29sdW1uID09PSAwKSB7XG4gICAgICAgIHdvdW5kR3Vlc3Nlcy5wdXNoKGAke3dvdW5kQ29sdW1uICsgMX0ke3dvdW5kUm93fWApO1xuICAgICAgICB3b3VuZEd1ZXNzZXMucHVzaChgJHt3b3VuZENvbHVtbn0ke3dvdW5kUm93ICsgMX1gKTtcbiAgICAgICAgd291bmRHdWVzc2VzLnB1c2goYCR7d291bmRDb2x1bW59JHt3b3VuZFJvdyAtIDF9YCk7XG4gICAgICB9IGVsc2UgaWYgKHdvdW5kQ29sdW1uID09PSA5KSB7XG4gICAgICAgIHdvdW5kR3Vlc3Nlcy5wdXNoKGAke3dvdW5kQ29sdW1uIC0gMX0ke3dvdW5kUm93fWApO1xuICAgICAgICB3b3VuZEd1ZXNzZXMucHVzaChgJHt3b3VuZENvbHVtbn0ke3dvdW5kUm93ICsgMX1gKTtcbiAgICAgICAgd291bmRHdWVzc2VzLnB1c2goYCR7d291bmRDb2x1bW59JHt3b3VuZFJvdyAtIDF9YCk7XG4gICAgICB9IGVsc2UgaWYgKHdvdW5kUm93ID09PSAwKSB7XG4gICAgICAgIHdvdW5kR3Vlc3Nlcy5wdXNoKGAke3dvdW5kQ29sdW1uICsgMX0ke3dvdW5kUm93fWApO1xuICAgICAgICB3b3VuZEd1ZXNzZXMucHVzaChgJHt3b3VuZENvbHVtbiAtIDF9JHt3b3VuZFJvd31gKTtcbiAgICAgICAgd291bmRHdWVzc2VzLnB1c2goYCR7d291bmRDb2x1bW59JHt3b3VuZFJvdyArIDF9YCk7XG4gICAgICB9IGVsc2UgaWYgKHdvdW5kUm93ID09PSA5KSB7XG4gICAgICAgIHdvdW5kR3Vlc3Nlcy5wdXNoKGAke3dvdW5kQ29sdW1uICsgMX0ke3dvdW5kUm93fWApO1xuICAgICAgICB3b3VuZEd1ZXNzZXMucHVzaChgJHt3b3VuZENvbHVtbiAtIDF9JHt3b3VuZFJvd31gKTtcbiAgICAgICAgd291bmRHdWVzc2VzLnB1c2goYCR7d291bmRDb2x1bW59JHt3b3VuZFJvdyAtIDF9YCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3b3VuZEd1ZXNzZXMucHVzaChgJHt3b3VuZENvbHVtbiArIDF9JHt3b3VuZFJvd31gKTtcbiAgICAgICAgd291bmRHdWVzc2VzLnB1c2goYCR7d291bmRDb2x1bW4gLSAxfSR7d291bmRSb3d9YCk7XG4gICAgICAgIHdvdW5kR3Vlc3Nlcy5wdXNoKGAke3dvdW5kQ29sdW1ufSR7d291bmRSb3cgKyAxfWApO1xuICAgICAgICB3b3VuZEd1ZXNzZXMucHVzaChgJHt3b3VuZENvbHVtbn0ke3dvdW5kUm93IC0gMX1gKTtcbiAgICAgIH0gICAgICBcbiAgICAgIGxldCB2YWxpZEd1ZXNzZXMgPSB3b3VuZEd1ZXNzZXMuZmlsdGVyKGl0ZW0gPT4ge1xuICAgICAgICBsZXQgaXRlbUNvbHVtbiA9IGl0ZW0uc2xpY2UoMCwgMSk7XG4gICAgICAgIGxldCBpdGVtUm93ID0gaXRlbS5zbGljZSgxLCAyKTtcbiAgICAgICAgcmV0dXJuIHVzZXJQbGF5ZXIuZ2FtZWJvYXJkLm5vdFlldEd1ZXNzZWQoaXRlbUNvbHVtbiwgaXRlbVJvdyk7XG4gICAgICB9KVxuXG4gICAgICBjb25zb2xlLmxvZyh2YWxpZEd1ZXNzZXMpO1xuXG4gICAgICBsZXQgcmFuZG9tV291bmRHdWVzcyA9IHZhbGlkR3Vlc3Nlc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB2YWxpZEd1ZXNzZXMubGVuZ3RoKV07XG4gICAgICB0aGlzLm1ha2VBdHRhY2socmFuZG9tV291bmRHdWVzcy5zbGljZSgwLCAxKSwgcmFuZG9tV291bmRHdWVzcy5zbGljZSgxLCAyKSwgdXNlclBsYXllci5nYW1lYm9hcmQpXG4gICAgICB1c2VyUGxheWVyLnJlbmRlclBsYXllckJvYXJkKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBub3RHdWVzc2VkID0gW11cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdXNlclBsYXllci5nYW1lYm9hcmQuYm9hcmQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB1c2VyUGxheWVyLmdhbWVib2FyZC5ib2FyZFtpXS5sZW5ndGg7IGorKykge1xuICAgICAgICAgIGlmICh1c2VyUGxheWVyLmdhbWVib2FyZC5ub3RZZXRHdWVzc2VkKGksIGopID09PSB0cnVlKSB7XG4gICAgICAgICAgICBub3RHdWVzc2VkLnB1c2goYCR7aX0ke2p9YCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobm90R3Vlc3NlZC5sZW5ndGggPiAwKSB7XG4gICAgICAgIGxldCByYW5kb21HdWVzcyA9IG5vdEd1ZXNzZWRbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbm90R3Vlc3NlZC5sZW5ndGgpXTtcbiAgICAgICAgbGV0IHJhbmRvbUNvbHVtbiA9IHJhbmRvbUd1ZXNzLnNsaWNlKDAsIDEpO1xuICAgICAgICBsZXQgcmFuZG9tUm93ID0gcmFuZG9tR3Vlc3Muc2xpY2UoMSwgMik7XG4gICAgICAgIHRoaXMubWFrZUF0dGFjayhyYW5kb21Db2x1bW4sIHJhbmRvbVJvdywgdXNlclBsYXllci5nYW1lYm9hcmQpO1xuICAgICAgICB1c2VyUGxheWVyLnJlbmRlclBsYXllckJvYXJkKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyUGxheWVyQm9hcmQoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmdhbWVib2FyZC5ib2FyZC5sZW5ndGg7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmdhbWVib2FyZC5ib2FyZFtpXS5sZW5ndGg7IGorKykge1xuICAgICAgICBpZiAodGhpcy5nYW1lYm9hcmQuYm9hcmRbaV1bal0gIT09ICdoaXQnICYmXG4gICAgICAgICAgICB0aGlzLmdhbWVib2FyZC5ib2FyZFtpXVtqXSAhPT0gJ21pc3MnICYmXG4gICAgICAgICAgICB0aGlzLmdhbWVib2FyZC5ib2FyZFtpXVtqXSAhPT0gXCJcIikge1xuICAgICAgICAgIGxldCBzcXVhcmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcCR7an0ke2l9YCk7XG4gICAgICAgICAgbGV0IHNoaXBOYW1lID0gdGhpcy5nYW1lYm9hcmQuYm9hcmRbaV1bal0ubmFtZS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1xccy9nLCAnLScpO1xuICAgICAgICAgIHNxdWFyZS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7YmdJbWFnZXNbYCR7c2hpcE5hbWV9LnN2Z2BdfSlgO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZ2FtZWJvYXJkLmJvYXJkW2ldW2pdID09PSAnbWlzcycpIHtcbiAgICAgICAgICBsZXQgc3F1YXJlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHAke2p9JHtpfWApO1xuICAgICAgICAgIGxldCBtaXNzSU1HID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgICAgbWlzc0lNRy5jbGFzc0xpc3QuYWRkKCd0YXJnZXRNaXNzJyk7XG4gICAgICAgICAgbWlzc0lNRy5zcmMgPSBDaXJjbGU7XG4gICAgICAgICAgd2hpbGUgKHNxdWFyZS5oYXNDaGlsZE5vZGVzKCkpIHtcbiAgICAgICAgICAgIHNxdWFyZS5yZW1vdmVDaGlsZChzcXVhcmUubGFzdENoaWxkKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgc3F1YXJlLmFwcGVuZENoaWxkKG1pc3NJTUcpO1xuICAgICAgICAgIHNxdWFyZS5zdHlsZS5iYWNrZ3JvdW5kID0gJ25vbmUnO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZ2FtZWJvYXJkLmJvYXJkW2ldW2pdID09PSAnaGl0Jykge1xuICAgICAgICAgIGxldCBzcXVhcmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcCR7an0ke2l9YCk7XG4gICAgICAgICAgbGV0IGhpdElNRyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgIGhpdElNRy5jbGFzc0xpc3QuYWRkKCd0YXJnZXRIaXQnKTtcbiAgICAgICAgICBoaXRJTUcuc3JjID0gSGl0O1xuICAgICAgICAgIHdoaWxlIChzcXVhcmUuaGFzQ2hpbGROb2RlcygpKSB7XG4gICAgICAgICAgICBzcXVhcmUucmVtb3ZlQ2hpbGQoc3F1YXJlLmxhc3RDaGlsZCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHNxdWFyZS5hcHBlbmRDaGlsZChoaXRJTUcpO1xuICAgICAgICAgIHNxdWFyZS5zdHlsZS5iYWNrZ3JvdW5kID0gJ25vbmUnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyT3Bwb25lbnRCb2FyZCgpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZ2FtZWJvYXJkLmJvYXJkLmxlbmd0aDsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuZ2FtZWJvYXJkLmJvYXJkW2ldLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGlmICh0aGlzLmdhbWVib2FyZC5ib2FyZFtpXVtqXSA9PT0gJ21pc3MnKSB7XG4gICAgICAgICAgbGV0IHNxdWFyZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBvJHtqfSR7aX1gKTtcbiAgICAgICAgICBsZXQgbWlzc0lNRyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgIG1pc3NJTUcuY2xhc3NMaXN0LmFkZCgndGFyZ2V0TWlzcycpO1xuICAgICAgICAgIG1pc3NJTUcuc3JjID0gQ2lyY2xlO1xuICAgICAgICAgIHdoaWxlIChzcXVhcmUuaGFzQ2hpbGROb2RlcygpKSB7XG4gICAgICAgICAgICBzcXVhcmUucmVtb3ZlQ2hpbGQoc3F1YXJlLmxhc3RDaGlsZCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHNxdWFyZS5hcHBlbmRDaGlsZChtaXNzSU1HKTtcbiAgICAgICAgICBzcXVhcmUuc3R5bGUuYmFja2dyb3VuZCA9ICdub25lJztcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmdhbWVib2FyZC5ib2FyZFtpXVtqXSA9PT0gJ2hpdCcpIHtcbiAgICAgICAgICBsZXQgc3F1YXJlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYG8ke2p9JHtpfWApO1xuICAgICAgICAgIGxldCBoaXRJTUcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgICBoaXRJTUcuY2xhc3NMaXN0LmFkZCgndGFyZ2V0SGl0Jyk7XG4gICAgICAgICAgaGl0SU1HLnNyYyA9IEhpdDtcbiAgICAgICAgICB3aGlsZSAoc3F1YXJlLmhhc0NoaWxkTm9kZXMoKSkge1xuICAgICAgICAgICAgc3F1YXJlLnJlbW92ZUNoaWxkKHNxdWFyZS5sYXN0Q2hpbGQpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBzcXVhcmUuYXBwZW5kQ2hpbGQoaGl0SU1HKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHdpbkdhbWUoKSB7XG4gICAgYWxlcnRHYW1lT3Zlcih0aGlzLm5hbWUpO1xuICB9XG59XG5cbmV4cG9ydCB7IFBsYXllciB9O1xuIiwiY2xhc3MgU2hpcCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGxlbmd0aCkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XG4gICAgdGhpcy5oZWFsdGggPSBsZW5ndGg7XG4gICAgdGhpcy5pc1N1bmsgPSBmYWxzZTtcbiAgfVxuXG4gIGhpdCgpIHtcbiAgICB0aGlzLmhlYWx0aCAtPSAxO1xuICAgIHRoaXMuY2hlY2tTdW5rKCk7XG4gIH1cblxuICBjaGVja0hlYWx0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5oZWFsdGg7XG4gIH1cblxuICBjaGVja1N1bmsoKSB7XG4gICAgaWYgKHRoaXMuaGVhbHRoIDw9IDApIHtcbiAgICAgIHRoaXMuaXNTdW5rID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pc1N1bmsgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBwYXJ0aWFsSGl0KCkge1xuICAgIGlmICh0aGlzLmlzU3VuayA9PT0gZmFsc2UgJiYgdGhpcy5oZWFsdGggPCB0aGlzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IHsgU2hpcCB9O1xuIiwiZnVuY3Rpb24gaW1wb3J0QWxsKHIpIHtcbiAgbGV0IGltZ3MgPSB7fTtcbiAgci5rZXlzKCkubWFwKChpdGVtLCBpbmRleCkgPT4geyBpbWdzW2l0ZW0ucmVwbGFjZSgnLi8nLCAnJyldID0gcihpdGVtKTsgfSk7XG4gIHJldHVybiBpbWdzO1xufVxuXG5jb25zdCBiZ0ltYWdlcyA9IGltcG9ydEFsbChyZXF1aXJlLmNvbnRleHQoJy4uL2ltZ3Mvc2hpcHMnLCBmYWxzZSwgL1xcLnN2ZyQvKSk7XG5cbmV4cG9ydCB7IGJnSW1hZ2VzIH07IiwiaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4vUGxheWVyXCI7XG5pbXBvcnQgeyBwbGFjZVVzZXJTaGlwcyB9IGZyb20gXCIuL3BsYWNlVXNlclNoaXBzXCI7XG5pbXBvcnQgeyBhbGVydEdhbWVTdGFydCB9IGZyb20gXCIuL0RPTXNjcmVlbnNcIjtcbmltcG9ydCB7IHBsYWNlQ29tcHV0ZXJTaGlwIH0gZnJvbSBcIi4vcGxhY2VDb21wdXRlclNoaXBzXCI7XG5cbmFzeW5jIGZ1bmN0aW9uIGdhbWVMb29wKHVzZXJOYW1lKSB7XG4gIGNvbnN0IHVzZXJQbGF5ZXIgPSBuZXcgUGxheWVyKHVzZXJOYW1lKTtcbiAgYXdhaXQgcGxhY2VVc2VyU2hpcHModXNlclBsYXllcik7XG4gIHVzZXJQbGF5ZXIucmVuZGVyUGxheWVyQm9hcmQoKTtcbiAgdXNlclBsYXllci50dXJuID0gdHJ1ZTtcblxuICBjb25zdCBjb21wdXRlclBsYXllciA9IG5ldyBQbGF5ZXIoJ0NvbXB1dGVyJyk7XG4gIHBsYWNlQ29tcHV0ZXJTaGlwKGNvbXB1dGVyUGxheWVyLCBjb21wdXRlclBsYXllci5jYXJyaWVyKTtcbiAgcGxhY2VDb21wdXRlclNoaXAoY29tcHV0ZXJQbGF5ZXIsIGNvbXB1dGVyUGxheWVyLmJhdHRsZXNoaXApO1xuICBwbGFjZUNvbXB1dGVyU2hpcChjb21wdXRlclBsYXllciwgY29tcHV0ZXJQbGF5ZXIuZGVzdHJveWVyKTtcbiAgcGxhY2VDb21wdXRlclNoaXAoY29tcHV0ZXJQbGF5ZXIsIGNvbXB1dGVyUGxheWVyLnN1Ym1hcmluZSk7XG4gIHBsYWNlQ29tcHV0ZXJTaGlwKGNvbXB1dGVyUGxheWVyLCBjb21wdXRlclBsYXllci5wYXRyb2xCb2F0KTtcbiAgY29tcHV0ZXJQbGF5ZXIucmVuZGVyT3Bwb25lbnRCb2FyZCgpO1xuXG4gIHBsYXlUdXJuKHVzZXJQbGF5ZXIsIGNvbXB1dGVyUGxheWVyKTtcbn1cblxuZnVuY3Rpb24gcGxheVR1cm4odXNlclBsYXllciwgY29tcHV0ZXJQbGF5ZXIpIHtcbiAgYWxlcnRHYW1lU3RhcnQoKTtcbiAgXG4gIGxldCBvcHBvbmVudFNxdWFyZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcub3Bwb25lbnRTcXVhcmUnKTtcbiAgb3Bwb25lbnRTcXVhcmVzLmZvckVhY2goc3F1YXJlID0+IHtcbiAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBsZXQgc3F1YXJlQ29sdW1uID0gc3F1YXJlLmlkLnNsaWNlKDIsIDMpO1xuICAgICAgbGV0IHNxdWFyZVJvdyA9IHNxdWFyZS5pZC5zbGljZSgxLCAyKTtcbiAgICAgIGlmIChjb21wdXRlclBsYXllci5nYW1lYm9hcmQubm90WWV0R3Vlc3NlZChzcXVhcmVDb2x1bW4sIHNxdWFyZVJvdykgPT09IGZhbHNlIHx8XG4gICAgICAgICAgY29tcHV0ZXJQbGF5ZXIuZ2FtZWJvYXJkLmNoZWNrQWxsU2hpcHNTdW5rKCkgPT09IHRydWUgfHxcbiAgICAgICAgICB1c2VyUGxheWVyLmdhbWVib2FyZC5jaGVja0FsbFNoaXBzU3VuaygpID09PSB0cnVlIHx8XG4gICAgICAgICAgdXNlclBsYXllci50dXJuID09PSBmYWxzZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB1c2VyUGxheWVyLm1ha2VBdHRhY2soc3F1YXJlQ29sdW1uLCBzcXVhcmVSb3csIGNvbXB1dGVyUGxheWVyLmdhbWVib2FyZCk7XG4gICAgICB1c2VyUGxheWVyLnR1cm4gPSBmYWxzZTtcbiAgICAgIGNvbXB1dGVyUGxheWVyLnR1cm4gPSB0cnVlO1xuICAgICAgY29tcHV0ZXJQbGF5ZXIucmVuZGVyT3Bwb25lbnRCb2FyZCgpO1xuICAgICAgaWYgKGNvbXB1dGVyUGxheWVyLmdhbWVib2FyZC5jaGVja0FsbFNoaXBzU3VuaygpID09PSB0cnVlKSB7XG4gICAgICAgIHVzZXJQbGF5ZXIud2luR2FtZSgpO1xuICAgICAgfVxuXG4gICAgICAvLyAuNXMgZGVsYXkgYmVmb3JlIGVhY2ggQ1BVIG1vdmVcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vIE5vIGFkZGl0aW9uYWwgZGVsYXkgaWYgbm8gc2hpcHMgc3VuayBvbiBwbGF5ZXIgbW92ZVxuICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFsZXJ0Qm94JykuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRkZW4nKSkge1xuICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBjb21wdXRlclBsYXllci5BSU1vdmUodXNlclBsYXllcik7XG4gICAgICAgICAgICB1c2VyUGxheWVyLnR1cm4gPSB0cnVlO1xuICAgICAgICAgICAgY29tcHV0ZXJQbGF5ZXIudHVybiA9IGZhbHNlO1xuICAgICAgICAgICAgaWYgKHVzZXJQbGF5ZXIuZ2FtZWJvYXJkLmNoZWNrQWxsU2hpcHNTdW5rKCkgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgY29tcHV0ZXJQbGF5ZXIud2luR2FtZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIDApIFxuICAgICAgICAvLyBBZGRpdGlvbmFsIGRlbGF5IGlmIHBsYXllciBzdW5rIGEgQ1BVIHNoaXAgdG8gYWxsb3cgcG9wdXAgYWxlcnQgICAgICAgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGNvbXB1dGVyUGxheWVyLkFJTW92ZSh1c2VyUGxheWVyKTtcbiAgICAgICAgICAgIHVzZXJQbGF5ZXIudHVybiA9IHRydWU7XG4gICAgICAgICAgICBjb21wdXRlclBsYXllci50dXJuID0gZmFsc2U7XG4gICAgICAgICAgICBpZiAodXNlclBsYXllci5nYW1lYm9hcmQuY2hlY2tBbGxTaGlwc1N1bmsoKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICBjb21wdXRlclBsYXllci53aW5HYW1lKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgMTI1MClcbiAgICAgICAgfX0sIDUwMCk7ICAgXG4gICAgfSk7XG4gIH0pXG59XG5cbmV4cG9ydCB7IGdhbWVMb29wIH07IiwiaW1wb3J0IHsgZ2FtZUxvb3AgfSBmcm9tICcuL2dhbWVMb29wJztcbmltcG9ydCB7IG5ld0dhbWUsIGN1c3RvbUFsZXJ0U2NyZWVuIH0gZnJvbSAnLi9ET01zY3JlZW5zJztcblxuZnVuY3Rpb24gaW5pdExvYWQoKSB7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY3JlYXRlSGVhZGVyKCkpO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG5ld0dhbWUoKSk7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY3VzdG9tQWxlcnRTY3JlZW4oKSk7XG5cbiAgbGV0IHN0YXJ0R2FtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGFydEdhbWUnKTtcbiAgc3RhcnRHYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gaW5pdGlhdGVHYW1lKCkpO1xuXG4gIGxldCBuYW1lSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdXNlclBsYXllck5hbWUnKTtcbiAgbmFtZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgKGUpID0+IHtcbiAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGluaXRpYXRlR2FtZSgpO1xuICAgIH1cbiAgfSlcbn1cblxuZnVuY3Rpb24gaW5pdGlhdGVHYW1lKCkge1xuICBsZXQgcGxheWVyTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1c2VyUGxheWVyTmFtZScpLnZhbHVlO1xuICBpZiAocGxheWVyTmFtZSA9PT0gXCJcIikge1xuICAgIHBsYXllck5hbWUgPSAnVXNlciBQbGF5ZXInO1xuICB9XG5cbiAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdiYXR0bGVzaGlwUGxheWVyTmFtZScsIGAke3BsYXllck5hbWV9YCk7XG5cbiAgbGV0IG5ld0dhbWVPcHRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ld0dhbWVPcHRpb25zJyk7XG4gIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQobmV3R2FtZU9wdGlvbnMpO1xuXG4gIGdhbWVMb29wKHBsYXllck5hbWUpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXIoKSB7XG4gIGxldCBnYW1lTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICBnYW1lTmFtZS5jbGFzc0xpc3QuYWRkKCdnYW1lTmFtZScpO1xuICBnYW1lTmFtZS50ZXh0Q29udGVudCA9ICdCQVRUTEVTSElQJztcbiAgcmV0dXJuIGdhbWVOYW1lO1xufVxuXG5leHBvcnQgeyBpbml0TG9hZCB9OyIsImZ1bmN0aW9uIHBsYWNlQ29tcHV0ZXJTaGlwKGNwdSwgc2hpcCkge1xuICBsZXQgdmFsaWRMb2NhdGlvbnMgPSBbXTtcbiAgbGV0IHJhbmRvbU51bSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpO1xuICBsZXQgZGlyZWN0aW9uO1xuXG4gIGlmIChyYW5kb21OdW0gPT09IDApIHtcbiAgICBkaXJlY3Rpb24gPSAnaG9yaXpvbnRhbCc7XG4gIH0gZWxzZSBpZiAocmFuZG9tTnVtID09PSAxKSB7XG4gICAgZGlyZWN0aW9uID0gJ3ZlcnRpY2FsJztcbiAgfVxuXG4gIGZvciAobGV0IGNvbHVtbiA9IDA7IGNvbHVtbiA8IGNwdS5nYW1lYm9hcmQuYm9hcmQubGVuZ3RoOyBjb2x1bW4rKykge1xuICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IGNwdS5nYW1lYm9hcmQuYm9hcmRbY29sdW1uXS5sZW5ndGg7IHJvdysrKSB7XG4gICAgICBpZiAoZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgaWYgKGNvbHVtbiArIChzaGlwLmxlbmd0aCAtIDEpIDw9IDkpIHtcbiAgICAgICAgICBsZXQgcG9zc2libGVMb2NhdGlvbnMgPSBbXTtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBzaGlwQ29sdW1uID0gY29sdW1uICsgaTtcbiAgICAgICAgICAgIGxldCBzaGlwUm93ID0gcm93O1xuICAgICAgICAgICAgcG9zc2libGVMb2NhdGlvbnMucHVzaChgJHtzaGlwQ29sdW1ufSR7c2hpcFJvd31gKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY2hlY2tWYWxpZGl0eShwb3NzaWJsZUxvY2F0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChyb3cgKyAoc2hpcC5sZW5ndGggLSAxKSA8PSA5KSB7XG4gICAgICAgICAgbGV0IHBvc3NpYmxlTG9jYXRpb25zID0gW107XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgc2hpcENvbHVtbiA9IGNvbHVtbjtcbiAgICAgICAgICAgIGxldCBzaGlwUm93ID0gcm93ICsgaTtcbiAgICAgICAgICAgIHBvc3NpYmxlTG9jYXRpb25zLnB1c2goYCR7c2hpcENvbHVtbn0ke3NoaXBSb3d9YCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNoZWNrVmFsaWRpdHkocG9zc2libGVMb2NhdGlvbnMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbGV0IHJhbmRvbUFycmF5ID0gdmFsaWRMb2NhdGlvbnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdmFsaWRMb2NhdGlvbnMubGVuZ3RoKV07XG4gIHBsYWNlU2hpcChyYW5kb21BcnJheSk7XG5cbiAgZnVuY3Rpb24gY2hlY2tWYWxpZGl0eShhcnJheSkge1xuICAgIGxldCB2YWxpZFBsYWNlbWVudCA9IGFycmF5LmV2ZXJ5KGxvY2F0aW9uID0+IHtcbiAgICAgIHJldHVybiBjcHUuZ2FtZWJvYXJkLmlzRW1wdHkobG9jYXRpb24uc2xpY2UoMCwgMSksIGxvY2F0aW9uLnNsaWNlKDEsIDIpKTtcbiAgICB9KVxuICAgIGlmICh2YWxpZFBsYWNlbWVudCA9PT0gdHJ1ZSkge1xuICAgICAgdmFsaWRMb2NhdGlvbnMucHVzaChhcnJheSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcGxhY2VTaGlwKGFycmF5KSB7XG4gICAgYXJyYXkuZm9yRWFjaChsb2NhdGlvbiA9PiB7XG4gICAgICBsZXQgbG9jYXRpb25Db2x1bW4gPSBsb2NhdGlvbi5zbGljZSgwLCAxKTtcbiAgICAgIGxldCBsb2NhdGlvblJvdyA9IGxvY2F0aW9uLnNsaWNlKDEsIDIpO1xuICAgICAgY3B1LmdhbWVib2FyZC5wbGFjZVNoaXAobG9jYXRpb25Db2x1bW4sIGxvY2F0aW9uUm93LCBzaGlwKTtcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCB7IHBsYWNlQ29tcHV0ZXJTaGlwIH07IiwiaW1wb3J0IHsgY3JlYXRlUGxheWVyQm9hcmQsIGNyZWF0ZU9wcG9uZW50Qm9hcmQgfSBmcm9tIFwiLi9ET01jcmVhdGVCb2FyZHNcIjtcbmltcG9ydCB7IHNoaXBQbGFjZW1lbnRIZWxwZXIgfSBmcm9tIFwiLi9ET01zY3JlZW5zXCI7XG5cbmZ1bmN0aW9uIHBsYWNlVXNlclNoaXBzKHBsYXllcikge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNyZWF0ZVBsYXllckJvYXJkKHBsYXllci5uYW1lKSk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzaGlwUGxhY2VtZW50SGVscGVyKCkpO1xuXG4gICAgbGV0IHNoaXBzID0gW3BsYXllci5jYXJyaWVyLCBwbGF5ZXIuYmF0dGxlc2hpcCwgcGxheWVyLmRlc3Ryb3llciwgcGxheWVyLnN1Ym1hcmluZSwgcGxheWVyLnBhdHJvbEJvYXRdO1xuICAgIGxldCBpbmRleCA9IDA7XG4gICAgXG4gICAgc2hvd0hlbHBlclRleHQoc2hpcHNbaW5kZXhdKTtcblxuICAgIGxldCBwbGF5ZXJTcXVhcmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBsYXllclNxdWFyZScpO1xuICAgIHBsYXllclNxdWFyZXMuZm9yRWFjaChzcXVhcmUgPT4ge1xuICAgICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsICgpID0+IHtcbiAgICAgICAgcGxhY2VtZW50SG92ZXIocGxheWVyLCBzaGlwc1tpbmRleF0sIHNxdWFyZSk7XG4gICAgICB9KVxuICAgICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgKCkgPT4ge1xuICAgICAgICBwbGF5ZXJTcXVhcmVzLmZvckVhY2goYm94ID0+IHtcbiAgICAgICAgICBib3guY2xhc3NMaXN0LnJlbW92ZSgndmFsaWRQbGFjZW1lbnQnLCAnaW52YWxpZFBsYWNlbWVudCcpO1xuICAgICAgICB9KVxuICAgICAgfSlcbiAgICAgIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgaWYgKHNxdWFyZS5jbGFzc0xpc3QuY29udGFpbnMoJ3ZhbGlkUGxhY2VtZW50JykpIHtcbiAgICAgICAgICBwbGFjZVNoaXAocGxheWVyLCBzaGlwc1tpbmRleF0pO1xuICAgICAgICAgIGluZGV4Kys7XG4gICAgICAgICAgcGxheWVyU3F1YXJlcy5mb3JFYWNoKGJveCA9PiB7XG4gICAgICAgICAgICBib3guY2xhc3NMaXN0LnJlbW92ZSgndmFsaWRQbGFjZW1lbnQnKTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIGlmIChpbmRleCA8IDUpIHtcbiAgICAgICAgICAgIHNob3dIZWxwZXJUZXh0KHNoaXBzW2luZGV4XSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJ1bkdhbWUocGxheWVyKTtcbiAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gIFxuICAgICAgfSlcbiAgICB9KVxuICB9KVxufVxuXG5mdW5jdGlvbiBzaG93SGVscGVyVGV4dChzaGlwKSB7ICBcbiAgbGV0IGhlbHBlclRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVscGVyVGV4dCcpO1xuICBoZWxwZXJUZXh0LnRleHRDb250ZW50ID0gYFNlbGVjdCB0aGUgbG9jYXRpb24gb2YgeW91ciAke3NoaXAubmFtZX1gO1xufVxuXG5mdW5jdGlvbiBydW5HYW1lKHBsYXllcikgIHtcbiAgbGV0IGhlbHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGFjZW1lbnRIZWxwZXInKTtcbiAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChoZWxwZXIpO1xuXG4gIGxldCBwbGF5ZXJCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXJCb2FyZCcpO1xuICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHBsYXllckJvYXJkKTtcblxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNyZWF0ZVBsYXllckJvYXJkKHBsYXllci5uYW1lKSk7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY3JlYXRlT3Bwb25lbnRCb2FyZCgpKTtcbn1cblxuZnVuY3Rpb24gcGxhY2VtZW50SG92ZXIocGxheWVyLCBzaGlwLCBzcXVhcmUpIHtcbiAgbGV0IHNoaXBMb2NhdGlvbnMgPSBbXTtcbiAgbGV0IHNxdWFyZUNvbHVtbiA9IE51bWJlcihzcXVhcmUuaWQuc2xpY2UoMiwgMykpO1xuICBsZXQgc3F1YXJlUm93ID0gTnVtYmVyKHNxdWFyZS5pZC5zbGljZSgxLCAyKSk7XG5cbiAgbGV0IHJvdGF0ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWxwZXJCdG4nKTtcbiAgaWYgKHJvdGF0ZUJ0bi5jbGFzc0xpc3QuY29udGFpbnMoJ2hvcml6b250YWwnKSkge1xuICAgIGlmIChzcXVhcmVDb2x1bW4gKyAoc2hpcC5sZW5ndGggLSAxKSA+IDkpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgc2hpcENvbHVtbiA9IHNxdWFyZUNvbHVtbiArIGk7XG4gICAgICAgIGxldCBzaGlwUm93ID0gc3F1YXJlUm93O1xuICAgICAgICBpZiAoc2hpcENvbHVtbiA8PSA5ICYmIHNoaXBSb3cgPD0gOSkge1xuICAgICAgICAgIGxldCBzaGlwSUQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjcCR7c2hpcFJvd30ke3NoaXBDb2x1bW59YCk7XG4gICAgICAgICAgc2hpcElELmNsYXNzTGlzdC5hZGQoJ2ludmFsaWRQbGFjZW1lbnQnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IHNoaXBDb2x1bW4gPSBzcXVhcmVDb2x1bW4gKyBpO1xuICAgICAgICBsZXQgc2hpcFJvdyA9IHNxdWFyZVJvdztcbiAgICAgICAgc2hpcExvY2F0aW9ucy5wdXNoKGAke3NoaXBDb2x1bW59JHtzaGlwUm93fWApO1xuICAgICAgfVxuICAgICAgY2hlY2tWYWxpZGl0eSgpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpZiAoc3F1YXJlUm93ICsgKHNoaXAubGVuZ3RoIC0gMSkgPiA5KSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IHNoaXBDb2x1bW4gPSBzcXVhcmVDb2x1bW47XG4gICAgICAgIGxldCBzaGlwUm93ID0gc3F1YXJlUm93ICsgaTtcbiAgICAgICAgaWYgKHNoaXBDb2x1bW4gPD0gOSAmJiBzaGlwUm93IDw9IDkpIHtcbiAgICAgICAgICBsZXQgc2hpcElEID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3Ake3NoaXBSb3d9JHtzaGlwQ29sdW1ufWApO1xuICAgICAgICAgIHNoaXBJRC5jbGFzc0xpc3QuYWRkKCdpbnZhbGlkUGxhY2VtZW50Jyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBzaGlwQ29sdW1uID0gc3F1YXJlQ29sdW1uO1xuICAgICAgICBsZXQgc2hpcFJvdyA9IHNxdWFyZVJvdyArIGk7XG4gICAgICAgIHNoaXBMb2NhdGlvbnMucHVzaChgJHtzaGlwQ29sdW1ufSR7c2hpcFJvd31gKTtcbiAgICAgIH1cbiAgICAgIGNoZWNrVmFsaWRpdHkoKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjaGVja1ZhbGlkaXR5KCkge1xuICAgIGxldCB2YWxpZFBsYWNlbWVudCA9IHNoaXBMb2NhdGlvbnMuZXZlcnkobG9jYXRpb24gPT4ge1xuICAgICAgcmV0dXJuIHBsYXllci5nYW1lYm9hcmQuaXNFbXB0eShsb2NhdGlvbi5zbGljZSgwLCAxKSwgbG9jYXRpb24uc2xpY2UoMSwgMikpO1xuICAgIH0pXG5cbiAgICBpZiAodmFsaWRQbGFjZW1lbnQgPT09IHRydWUpIHtcbiAgICAgIHNoaXBMb2NhdGlvbnMuZm9yRWFjaChsb2NhdGlvbiA9PiB7XG4gICAgICAgIGxldCBzaGlwSUQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjcCR7bG9jYXRpb24uc2xpY2UoMSwgMil9JHtsb2NhdGlvbi5zbGljZSgwLCAxKX1gKTtcbiAgICAgICAgc2hpcElELmNsYXNzTGlzdC5hZGQoJ3ZhbGlkUGxhY2VtZW50Jyk7XG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICBzaGlwTG9jYXRpb25zLmZvckVhY2gobG9jYXRpb24gPT4ge1xuICAgICAgICBsZXQgc2hpcElEID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3Ake2xvY2F0aW9uLnNsaWNlKDEsIDIpfSR7bG9jYXRpb24uc2xpY2UoMCwgMSl9YCk7XG4gICAgICAgIHNoaXBJRC5jbGFzc0xpc3QuYWRkKCdpbnZhbGlkUGxhY2VtZW50Jyk7XG4gICAgICB9KVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBwbGFjZVNoaXAocGxheWVyLCBzaGlwKSB7XG4gIGxldCBzaGlwTG9jYXRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnZhbGlkUGxhY2VtZW50Jyk7XG4gIHNoaXBMb2NhdGlvbnMuZm9yRWFjaChsb2NhdGlvbiA9PiB7XG4gICAgbGV0IGxvY2F0aW9uQ29sdW1uID0gbG9jYXRpb24uaWQuc2xpY2UoMiwgMyk7XG4gICAgbGV0IGxvY2F0aW9uUm93ID0gbG9jYXRpb24uaWQuc2xpY2UoMSwgMik7XG4gICAgcGxheWVyLmdhbWVib2FyZC5wbGFjZVNoaXAobG9jYXRpb25Db2x1bW4sIGxvY2F0aW9uUm93LCBzaGlwKTtcbiAgICBwbGF5ZXIucmVuZGVyUGxheWVyQm9hcmQoKTtcbiAgfSlcbn1cblxuZXhwb3J0IHtcbiAgcGxhY2VVc2VyU2hpcHMsXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9iYXR0bGVzaGlwL1wiOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vY3NzL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBpbml0TG9hZCB9IGZyb20gJy4vc2NyaXB0cy9pbml0TG9hZCc7XG5cbmluaXRMb2FkKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9