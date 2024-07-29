/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ScreenSection.js":
/*!******************************!*\
  !*** ./src/ScreenSection.js ***!
  \******************************/
/***/ ((module) => {

eval("let ALL_SCREEN_SECTIONS = [];\n\n\n\nfunction generate_px_string(value)\n\t{\n\treturn `${value}px`;\n\t}\n\n\n\n\nclass ScreenSection\n \t{\n\tconstructor(x_pos, y_pos, width, height,)\n\t\t{\n\n\t\tconsole.log(`\n\t\t'constructor' is called for Screen Section\t\t\t\n\t\t\tx_pos:${x_pos}\n\t\t\ty_pos:${y_pos}\n\t\t\twidth:${width}\n\t\t\theight:${height}\t\t\n\t\t\t`);\n\t\tthis.x_pos = x_pos;\n\t\tthis.y_pos = y_pos;\n\t\tthis.width = width;  \t\n\t\tthis.height = height;\n\t\tthis.element_pointer  = null;\n\n\t\tALL_SCREEN_SECTIONS.push(this);\n\t\t}\n\n\n\tset_style(x_pos, y_pos, height, width)\n\t\t{\n\t\tconsole.log(\"setting the style...\")\n\t\tif (this.has_already_made_element() === false)\n\t\t\t{\n\t\t\tconsole.error(\"style setting failed due to absence of element_pointer\")\n\t\t\treturn 0;\n\t\t\t}\n\t\t\n\t\tthis.element_pointer.style.top = generate_px_string(y_pos);\n\t\tthis.element_pointer.style.left = generate_px_string(x_pos);\n\t\tthis.element_pointer.style.height = generate_px_string(height);\n\t\tthis.element_pointer.style.width = generate_px_string(width);\n\n\t\tconsole.log(\"set the style with no error :)\")\n\t\treturn 1;\n\t\t}\n\n\n\tmake_html_component()\n\t\t{\n\t\tconsole.log(\"calling make_html_component\");\n\n\t\tif (this.has_already_made_element() === true)\n\t\t\t{\n\t\t\tconsole.error(\"already created the element, cant create anymore\");\n\t\t\tconsole.log(`component creation failed`);\t\t\t\t\n\t\t\treturn 0;\n\t\t\t}\n\t\t\t\n\t\tconsole.log(`creating the component`);\t\n\n\t\tlet output = document.createElement(\"div\");\n\t\tconsole.log(`setting the element pointer`);\t\t\t\n\t\tthis.element_pointer = output;\t\t\n\n\n\t\tthis.set_style(\n\t\t\tthis.x_pos,\n\t\t\tthis.y_pos,\n\t\t\tthis.width,\n\t\t\tthis.height,\n\t\t\t);\n\n\n\t\toutput.style.position = \"absolute\";\n\t\toutput.style.backgroundColor = \"red\";\n\n\t\toutput.innerText = \".\";\n\n\n\n\n\n\t\tconsole.log(`component creation done ok`);\t\n\t\treturn 1;\n\t\t}\n\n\n\thas_already_made_element()\n\t\t{\n\t\tconsole.log(`calling has_already_made_element`);\n\t\tconsole.log(`element_pointer = ${this.element_pointer}`)\n\t\tlet output = this.element_pointer !== null;\n\t\tconsole.log(`has_already_made_element = ${output}`);\n\t\treturn output;\n\t\t}\n\n\n\n\tput_on_screen(document)\n\t\t{\n\t\tconsole.log(`calling put_on_screen`);\n\t\tconsole.log('creating the component')\n\t\tlet status_of_component_making = this.make_html_component();\n\n\t\tif (status_of_component_making === 0)\n\t\t\t{\n\t\t\tconsole.error(\"html compnent was already created, aborting adding to body\");\n\t\t\treturn 0;\n\t\t\t}\n\n\t\tconsole.log(`has_already_made_element = ${this.has_already_made_element()}`);\n\t\tdocument.body.appendChild(\n\t\t\tthis.element_pointer\n\t\t\t);\n\n\n\n\t\treturn 1;\n\t\t}\n\n\n\tupdate()\n\t\t{\n\t\tconsole.log(\"calling update\");\n\n\t\tif (this.has_already_made_element() === false)\n\t\t\t{\n\t\t\tconsole.error(\"updating failed, cause no pointer to element exists\");\n\t\t\treturn 0;\n\t\t\t}\n\n\t\tthis.element_pointer.style.bottom = generate_px_string(this.y_pos); \n\t\tthis.element_pointer.style.left = generate_px_string(this.x_pos);\n\t\tthis.element_pointer.style.width = generate_px_string(this.width);\n\t\tthis.element_pointer.style.height = generate_px_string(this.height);\t\t\n\t\treturn 1;\n\t\t}\n\t}\n\n\n\n\n\nmodule.exports = \n\t{\n\tALL_SCREEN_SECTIONS,\n\tScreenSection\n\t};\n\n//# sourceURL=webpack://hcjs__alfiter/./src/ScreenSection.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("ss = __webpack_require__(/*! ./ScreenSection.js */ \"./src/ScreenSection.js\");\n\n\n\n\n\n\n//# sourceURL=webpack://hcjs__alfiter/./src/index.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;