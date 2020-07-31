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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./styles/styles.scss":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./styles/styles.scss ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\n___CSS_LOADER_EXPORT___.push([module.i, \"@import url(https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"* {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box; }\\n\\n#content {\\n  background: #ffd600; }\\n\\n.navbar {\\n  display: flex;\\n  align-items: center;\\n  background-color: #4a4a4a;\\n  width: 100%;\\n  height: 5rem;\\n  color: white;\\n  padding: 17px 2rem; }\\n  .navbar a {\\n    color: white;\\n    margin-left: 9%; }\\n    .navbar a:hover {\\n      color: wheat;\\n      text-decoration: none; }\\n  .navbar ul {\\n    list-style: none;\\n    display: flex;\\n    margin-left: auto;\\n    align-items: center; }\\n    .navbar ul li {\\n      padding: 5px 1rem;\\n      cursor: pointer;\\n      margin: auto 0.5rem; }\\n      .navbar ul li:hover {\\n        color: wheat; }\\n\\n.wrapper {\\n  display: grid;\\n  grid-template-columns: 10% 85%; }\\n\\naside {\\n  position: relative;\\n  background-color: #4a4a4a;\\n  color: white;\\n  min-height: 100vh; }\\n  aside h3 {\\n    writing-mode: vertical-rl;\\n    text-orientation: mixed;\\n    transform: rotate(180deg);\\n    position: absolute;\\n    right: 0; }\\n\\n.main-div {\\n  color: white;\\n  position: relative;\\n  display: none; }\\n  .main-div h1 {\\n    font-weight: 900;\\n    font-size: 20vw;\\n    margin: 1rem; }\\n  .main-div p {\\n    color: #4a4a4a;\\n    width: 50%;\\n    font-size: 1.2rem;\\n    margin: 10px 1.5rem; }\\n\\n.active {\\n  display: block; }\\n\\n.products {\\n  display: grid;\\n  grid-template-columns: repeat(3, 1fr);\\n  grid-gap: 1rem;\\n  margin: 1rem; }\\n  .products > div {\\n    background-color: #4a4a4a;\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    border-radius: 7px;\\n    height: fit-content;\\n    justify-content: center; }\\n    .products > div img {\\n      width: 100%;\\n      border-top-left-radius: 7px;\\n      border-top-right-radius: 7px; }\\n    .products > div p {\\n      padding: 5px;\\n      color: white;\\n      text-align: center;\\n      background-color: grey;\\n      border-radius: 20px;\\n      cursor: pointer;\\n      margin: 5px 0; }\\n\\n.breakfast {\\n  margin: 2rem 0;\\n  background-color: #4a4a4a;\\n  min-width: 88.8vw;\\n  width: 100%; }\\n  .breakfast h1 {\\n    font-size: 2rem;\\n    text-align: center; }\\n    .breakfast h1 span {\\n      color: #ffd600; }\\n  .breakfast .image-wrapper {\\n    display: grid;\\n    grid-template-columns: repeat(3, 1fr); }\\n    .breakfast .image-wrapper img {\\n      width: 100%; }\\n\\n.contact-header {\\n  font-size: 3rem !important;\\n  text-align: center; }\\n\\n.form-wrapper {\\n  display: flex;\\n  justify-content: center; }\\n  .form-wrapper form {\\n    display: flex;\\n    flex-direction: column;\\n    width: 50%; }\\n    .form-wrapper form input {\\n      height: 2rem;\\n      margin-bottom: 1rem;\\n      border-radius: 4px;\\n      border: 1px solid rgba(0, 0, 0, 0.25);\\n      padding: 0 5px; }\\n      .form-wrapper form input:focus {\\n        outline: none; }\\n    .form-wrapper form textarea {\\n      margin-bottom: 1rem;\\n      border: 1px solid rgba(0, 0, 0, 0.25);\\n      padding: 0 5px;\\n      border-radius: 3px; }\\n      .form-wrapper form textarea:focus {\\n        outline: none; }\\n    .form-wrapper form button {\\n      background-color: #4a4a4a;\\n      color: white;\\n      height: 2.5rem;\\n      border: 1px solid rgba(0, 0, 0, 0.25);\\n      padding: 0 5px;\\n      border-radius: 3px; }\\n      .form-wrapper form button:focus {\\n        outline: none; }\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./styles/styles.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tools */ \"./src/tools.js\");\n\n_tools__WEBPACK_IMPORTED_MODULE_0__[\"contactWrapper\"].className = 'main-div';\n_tools__WEBPACK_IMPORTED_MODULE_0__[\"contactWrapper\"].id = '3';\n_tools__WEBPACK_IMPORTED_MODULE_0__[\"contactHeader\"].className = 'contact-header';\n_tools__WEBPACK_IMPORTED_MODULE_0__[\"formDiv\"].className = 'form-wrapper';\n_tools__WEBPACK_IMPORTED_MODULE_0__[\"name\"].type = 'text';\n_tools__WEBPACK_IMPORTED_MODULE_0__[\"email\"].type = 'email';\n_tools__WEBPACK_IMPORTED_MODULE_0__[\"submit\"].type = 'submit';\n_tools__WEBPACK_IMPORTED_MODULE_0__[\"name\"].placeholder = 'Enter your name';\n_tools__WEBPACK_IMPORTED_MODULE_0__[\"email\"].placeholder = 'Enter your email';\n_tools__WEBPACK_IMPORTED_MODULE_0__[\"textarea\"].placeholder = 'Message';\n_tools__WEBPACK_IMPORTED_MODULE_0__[\"textarea\"].rows = '6';\n_tools__WEBPACK_IMPORTED_MODULE_0__[\"submit\"].innerHTML = 'Send';\n_tools__WEBPACK_IMPORTED_MODULE_0__[\"contactHeader\"].innerHTML = 'CONTACT';\n[_tools__WEBPACK_IMPORTED_MODULE_0__[\"name\"], _tools__WEBPACK_IMPORTED_MODULE_0__[\"email\"], _tools__WEBPACK_IMPORTED_MODULE_0__[\"textarea\"], _tools__WEBPACK_IMPORTED_MODULE_0__[\"submit\"]].forEach(element => _tools__WEBPACK_IMPORTED_MODULE_0__[\"form\"].appendChild(element));\n_tools__WEBPACK_IMPORTED_MODULE_0__[\"formDiv\"].appendChild(_tools__WEBPACK_IMPORTED_MODULE_0__[\"form\"]);\n_tools__WEBPACK_IMPORTED_MODULE_0__[\"contactWrapper\"].appendChild(_tools__WEBPACK_IMPORTED_MODULE_0__[\"contactHeader\"]);\n_tools__WEBPACK_IMPORTED_MODULE_0__[\"contactWrapper\"].appendChild(_tools__WEBPACK_IMPORTED_MODULE_0__[\"formDiv\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (_tools__WEBPACK_IMPORTED_MODULE_0__[\"contactWrapper\"]);\n\n//# sourceURL=webpack:///./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/*! exports provided: aside, section */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tools */ \"./src/tools.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"aside\", function() { return _tools__WEBPACK_IMPORTED_MODULE_0__[\"aside\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"section\", function() { return _tools__WEBPACK_IMPORTED_MODULE_0__[\"section\"]; });\n\n\n_tools__WEBPACK_IMPORTED_MODULE_0__[\"section\"].className = 'main-div active';\n_tools__WEBPACK_IMPORTED_MODULE_0__[\"section\"].id = '1';\n_tools__WEBPACK_IMPORTED_MODULE_0__[\"title\"].className = 'main-title';\n_tools__WEBPACK_IMPORTED_MODULE_0__[\"title\"].innerHTML = 'FOOD';\n_tools__WEBPACK_IMPORTED_MODULE_0__[\"text\"].innerHTML = 'Baked chicken is a very tast dish for the whole family. ' + 'The combination of delicate aromas and roasting make the ' + 'chicken terribly tasty, juicy, with a crispy crust.';\n[_tools__WEBPACK_IMPORTED_MODULE_0__[\"title\"], _tools__WEBPACK_IMPORTED_MODULE_0__[\"text\"]].forEach(item => _tools__WEBPACK_IMPORTED_MODULE_0__[\"section\"].appendChild(item));\n_tools__WEBPACK_IMPORTED_MODULE_0__[\"breakfast\"].className = 'breakfast';\n_tools__WEBPACK_IMPORTED_MODULE_0__[\"imageDiv\"].className = 'image-wrapper';\n_tools__WEBPACK_IMPORTED_MODULE_0__[\"breakHeader\"].innerHTML = 'CHOOSE YOUR';\n_tools__WEBPACK_IMPORTED_MODULE_0__[\"span\"].innerHTML = 'BREAKFAST';\n\nfunction foodPics(img) {\n  const tag = Object(_tools__WEBPACK_IMPORTED_MODULE_0__[\"newTag\"])('img');\n  tag.src = img;\n  _tools__WEBPACK_IMPORTED_MODULE_0__[\"imageDiv\"].appendChild(tag);\n  return tag;\n}\n\nconst foods = ['https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80', 'https://images.unsplash.com/photo-1571860155542-28f639eeab61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80', 'https://images.unsplash.com/photo-1590288488147-f46142daf112?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=498&q=80'];\nfoods.forEach(item => foodPics(item));\n_tools__WEBPACK_IMPORTED_MODULE_0__[\"breakHeader\"].appendChild(_tools__WEBPACK_IMPORTED_MODULE_0__[\"span\"]);\n[_tools__WEBPACK_IMPORTED_MODULE_0__[\"breakHeader\"], _tools__WEBPACK_IMPORTED_MODULE_0__[\"imageDiv\"]].forEach(item => _tools__WEBPACK_IMPORTED_MODULE_0__[\"breakfast\"].appendChild(item));\n_tools__WEBPACK_IMPORTED_MODULE_0__[\"sidenote\"].innerHTML = 'FOOD';\n_tools__WEBPACK_IMPORTED_MODULE_0__[\"aside\"].appendChild(_tools__WEBPACK_IMPORTED_MODULE_0__[\"sidenote\"]);\n_tools__WEBPACK_IMPORTED_MODULE_0__[\"section\"].appendChild(_tools__WEBPACK_IMPORTED_MODULE_0__[\"breakfast\"]);\n\n\n//# sourceURL=webpack:///./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/styles.scss */ \"./styles/styles.scss\");\n/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_styles_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tools */ \"./src/tools.js\");\n/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabs */ \"./src/tabs.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _shop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shop */ \"./src/shop.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\n\n\nconst content = document.getElementById('content');\nconst div = Object(_tools__WEBPACK_IMPORTED_MODULE_1__[\"newTag\"])('div');\ndiv.className = 'wrapper';\n[_home__WEBPACK_IMPORTED_MODULE_3__[\"aside\"], _home__WEBPACK_IMPORTED_MODULE_3__[\"section\"], _shop__WEBPACK_IMPORTED_MODULE_4__[\"default\"], _contact__WEBPACK_IMPORTED_MODULE_5__[\"default\"]].forEach(item => div.appendChild(item));\n[_tabs__WEBPACK_IMPORTED_MODULE_2__[\"default\"], div].forEach(item => content.appendChild(item));\nconst btn = document.getElementById('tab-menu');\nconst tabContents = div.getElementsByTagName('section');\nbtn.addEventListener('click', e => {\n  const button = e.target.nodeName === 'LI';\n  if (!button) return;\n  const tabs = e.target.dataset.tab;\n  const tabContent = document.getElementById(tabs); // eslint-disable-next-line no-plusplus\n\n  for (let i = 0; i < tabContents.length; i++) {\n    if (tabContents[i] !== tabContents[tabs - 1]) {\n      tabContents[i].classList.remove('active');\n    }\n\n    tabContent.classList.add('active');\n  }\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/shop.js":
/*!*********************!*\
  !*** ./src/shop.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tools */ \"./src/tools.js\");\n\n_tools__WEBPACK_IMPORTED_MODULE_0__[\"mainWrapper\"].className = 'main-div';\n_tools__WEBPACK_IMPORTED_MODULE_0__[\"mainWrapper\"].id = '2';\n_tools__WEBPACK_IMPORTED_MODULE_0__[\"productWrapper\"].className = 'products';\n\nfunction product(img) {\n  const tag = Object(_tools__WEBPACK_IMPORTED_MODULE_0__[\"newTag\"])('div');\n  const productImage = Object(_tools__WEBPACK_IMPORTED_MODULE_0__[\"newTag\"])('img');\n  const choose = Object(_tools__WEBPACK_IMPORTED_MODULE_0__[\"newTag\"])('p');\n  productImage.src = img;\n  choose.innerHTML = 'Choose';\n  tag.appendChild(productImage);\n  tag.appendChild(choose);\n  return tag;\n}\n\nconst newProduct = src => product(src);\n\nconst images = _tools__WEBPACK_IMPORTED_MODULE_0__[\"links\"].map(item => newProduct(item));\nimages.forEach(item => _tools__WEBPACK_IMPORTED_MODULE_0__[\"productWrapper\"].appendChild(item));\n_tools__WEBPACK_IMPORTED_MODULE_0__[\"mainWrapper\"].appendChild(_tools__WEBPACK_IMPORTED_MODULE_0__[\"productWrapper\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (_tools__WEBPACK_IMPORTED_MODULE_0__[\"mainWrapper\"]);\n\n//# sourceURL=webpack:///./src/shop.js?");

/***/ }),

/***/ "./src/tabs.js":
/*!*********************!*\
  !*** ./src/tabs.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tools */ \"./src/tools.js\");\n\n_tools__WEBPACK_IMPORTED_MODULE_0__[\"navbar\"].className = 'navbar';\n_tools__WEBPACK_IMPORTED_MODULE_0__[\"navbar\"].id = 'nav';\n_tools__WEBPACK_IMPORTED_MODULE_0__[\"brand\"].href = '/';\n_tools__WEBPACK_IMPORTED_MODULE_0__[\"brand\"].innerHTML = 'SERVICE';\n_tools__WEBPACK_IMPORTED_MODULE_0__[\"list\"].id = 'tab-menu';\n_tools__WEBPACK_IMPORTED_MODULE_0__[\"menu\"].dataset.tab = '1';\n_tools__WEBPACK_IMPORTED_MODULE_0__[\"shop\"].dataset.tab = '2';\n_tools__WEBPACK_IMPORTED_MODULE_0__[\"order\"].dataset.tab = '3';\n_tools__WEBPACK_IMPORTED_MODULE_0__[\"navbar\"].appendChild(_tools__WEBPACK_IMPORTED_MODULE_0__[\"brand\"]);\n_tools__WEBPACK_IMPORTED_MODULE_0__[\"menu\"].innerHTML = 'MENU';\n_tools__WEBPACK_IMPORTED_MODULE_0__[\"shop\"].innerHTML = 'SHOP';\n_tools__WEBPACK_IMPORTED_MODULE_0__[\"order\"].innerHTML = 'CONTACTS';\n[_tools__WEBPACK_IMPORTED_MODULE_0__[\"menu\"], _tools__WEBPACK_IMPORTED_MODULE_0__[\"shop\"], _tools__WEBPACK_IMPORTED_MODULE_0__[\"order\"]].forEach(item => _tools__WEBPACK_IMPORTED_MODULE_0__[\"list\"].appendChild(item));\n_tools__WEBPACK_IMPORTED_MODULE_0__[\"navbar\"].appendChild(_tools__WEBPACK_IMPORTED_MODULE_0__[\"list\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (_tools__WEBPACK_IMPORTED_MODULE_0__[\"navbar\"]);\n\n//# sourceURL=webpack:///./src/tabs.js?");

/***/ }),

/***/ "./src/tools.js":
/*!**********************!*\
  !*** ./src/tools.js ***!
  \**********************/
/*! exports provided: newTag, contactWrapper, contactHeader, formDiv, form, name, email, textarea, submit, section, title, text, aside, sidenote, breakfast, breakHeader, span, imageDiv, navbar, brand, list, menu, shop, order, mainWrapper, productWrapper, links */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"newTag\", function() { return newTag; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"contactWrapper\", function() { return contactWrapper; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"contactHeader\", function() { return contactHeader; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"formDiv\", function() { return formDiv; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"form\", function() { return form; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"name\", function() { return name; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"email\", function() { return email; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"textarea\", function() { return textarea; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"submit\", function() { return submit; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"section\", function() { return section; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"title\", function() { return title; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"text\", function() { return text; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"aside\", function() { return aside; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sidenote\", function() { return sidenote; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"breakfast\", function() { return breakfast; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"breakHeader\", function() { return breakHeader; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"span\", function() { return span; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"imageDiv\", function() { return imageDiv; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"navbar\", function() { return navbar; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"brand\", function() { return brand; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"list\", function() { return list; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"menu\", function() { return menu; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"shop\", function() { return shop; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"order\", function() { return order; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mainWrapper\", function() { return mainWrapper; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"productWrapper\", function() { return productWrapper; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"links\", function() { return links; });\nfunction Element(tag) {\n  this.tag = document.createElement(tag);\n}\n\nconst newTag = tag => new Element(tag).tag;\n\nconst section = newTag('section');\nconst title = newTag('h1');\nconst text = newTag('p');\nconst aside = newTag('aside');\nconst sidenote = newTag('h3');\nconst breakfast = newTag('div');\nconst breakHeader = newTag('h1');\nconst span = newTag('span');\nconst imageDiv = newTag('div');\nconst navbar = newTag('nav');\nconst brand = newTag('a');\nconst list = newTag('ul');\nconst menu = newTag('li');\nconst shop = newTag('li');\nconst order = newTag('li');\nconst productWrapper = newTag('div');\nconst mainWrapper = newTag('section');\nconst contactWrapper = newTag('section');\nconst formDiv = newTag('div');\nconst contactHeader = newTag('h1');\nconst form = newTag('form');\nconst name = newTag('input');\nconst email = newTag('input');\nconst textarea = newTag('textarea');\nconst submit = newTag('button');\nconst links = ['https://images.unsplash.com/photo-1514218953589-2d7d37efd2dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80', 'https://images.unsplash.com/photo-1565461863445-bc2ae630fc53?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=457&q=80', 'https://images.unsplash.com/photo-1568623269068-c31912c211d4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80'];\n\n\n//# sourceURL=webpack:///./src/tools.js?");

/***/ }),

/***/ "./styles/styles.scss":
/*!****************************!*\
  !*** ./styles/styles.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./styles/styles.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./styles/styles.scss?");

/***/ })

/******/ });