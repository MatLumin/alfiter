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

eval("let ALL_SCREEN_SECTIONS = [];\n\n\n\nfunction generate_px_string(value)\n\t{\n\treturn `${value}px`;\n\t}\n\nconst URL__GET_CONTENT_PLUGIN_BY_UI = \"da__alfiter/get_content_plugin_by_uti/?uti=\";\nconst URL__GET_SCREEN_SECTION_BY_UTI = \"da__alfiter/get_screen_section_data_by_uti?uti=\";\n\nclass ScreenSection\n \t{\n \t//design rule, get everyting from the server\n\tconstructor(x_pos, y_pos, height, width, uti, content_uti)\n\t\t{\n\n\t\tthis.uti = uti;\n\n\n\t\tthis.x_pos = x_pos;\n\t\tthis.y_pos = y_pos;\n\t\tthis.width = width;  \t\n\t\tthis.height = height;\n\n\t\tthis.content_url = \"NONE\";\n\t\tthis.content_uti = content_uti;\n\n\t\tthis.element_pointer  = null;\n\n\t\t}\n\n\n\tasync get_data_from_server()\n\t\t{\n\t\tconsole.log(\"called get_data_from_server\");\n\t\tlet url = URL__GET_SCREEN_SECTION_BY_UTI+this.uti;\n\t\tconsole.log(`url = ${url}`)\n\t\tlet response = await fetch\n\t\t\t(\n\t\t\t\turl,\n\t\t\t\t{\n\t\t\t\t\"headers\":\n\t\t\t\t\t{\n\t\t\t\t\t//\"Access-Control-Allow-Origin\":\"127.0.0.1\",\n\t\t\t\t\t}\n\t\t\t\t\n\t\t\t\t}\n\t\t\t);\n\n\t\tlet response_json = await response.json();\n\t\tconsole.log(`response json`);\n\t\tconsole.log(response_json);\t\t\n\t\treturn response_json;\n\t\t}\n\n\n\tasync get_data_from_server_and_assign_to_self()\n\t\t{\n\t\tlet response_json = await this.get_data_from_server();\n\t\tlet data = response_json[\"data\"];\n\t\tconsole.log(\"data:\");\n\t\tconsole.log(data);\n\t\tlet start_x = data[\"start_x\"];\n\t\tlet start_y = data[\"start_y\"];\n\t\tlet height = data[\"height\"];\n\t\tlet width = data[\"width\"];\n\t\tlet content_uti = data[\"content_plugin\"][\"uti\"];\n\t\tlet content_url = \"https:\" + \"//\" + data[\"host\"]+ \"/da__alfiter/\" + data[\"content_plugin\"][\"related_file\"][\"url\"];\n\n\t\tthis.x_pos = start_x;\n\t\tthis.y_pos = start_y;\n\n\t\tthis.height = height;\n\t\tthis.width = width;\n\n\t\tthis.content_uti = content_uti;\n\t\tthis.content_url = content_url;\n\t\t}\n\n\n\tasync update()\n\t\t{\t\t\t\n\t\tawait this.get_data_from_server_and_assign_to_self();\n\t\tthis.render_self();\n\t\t}\n\n\n\tset_style(x_pos, y_pos, height, width)\n\t\t{\n\t\tconsole.log(\"setting the style...\")\n\t\tif (this.has_already_made_element() === false)\n\t\t\t{\n\t\t\tconsole.error(\"style setting failed due to absence of element_pointer\")\n\t\t\treturn 0;\n\t\t\t}\n\t\t\n\t\tthis.element_pointer.style.top = generate_px_string(y_pos);\n\t\tthis.element_pointer.style.left = generate_px_string(x_pos);\n\t\tthis.element_pointer.style.height = generate_px_string(height);\n\t\tthis.element_pointer.style.width = generate_px_string(width);\n\n\t\tconsole.log(\"set the style with no error :)\")\n\t\treturn 1;\n\t\t}\n\n\n\tset_content()\n\t\t{\n\t\tconsole.log(\"set_inner_html is called\");\n\t\tif (this.has_already_made_element() === false)\n\t\t\t{\n\t\t\tconsole.error(\"content setting failed due to absence of element_pointer\");\n\t\t\treturn 0\n\t\t\t}\n\n\t\tthis.element_pointer.src = this.content_url;\n\t\treturn 1;\n\t\t}\n\n\n\tget_needed_css_values()\n\t\t{\n\t\tconsole.log(\"calling the get_needed_css_values\");\n\t\tif (this.has_already_made_element() === false)\n\t\t\t{\n\t\t\tconsole.error(\"element_pointer is null so cant return any css values\");\n\t\t\treturn null;\n\t\t\t}\n\n\t\tlet output = {\n\t\t\t\t\"top\":this.element_pointer.style.top,\n\t\t\t\t\"left\":this.element_pointer.style.left,\n\t\t\t\t\"height\":this.element_pointer.style.height,\n\t\t\t\t\"width\":this.element_pointer.style.width,\t\t\t\n\t\t\t\t};\n\t\treturn output;\n\t\t}\n\n\n\tmake_html_component()\n\t\t{\n\t\tconsole.log(\"calling make_html_component\");\n\n\t\tif (this.has_already_made_element() === true)\n\t\t\t{\n\t\t\tconsole.error(\"already created the element, cant create anymore\");\n\t\t\tconsole.log(`component creation failed`);\t\t\t\t\n\t\t\treturn 0;\n\t\t\t}\n\t\t\t\n\t\tconsole.log(`creating the component`);\t\n\n\t\tlet output = document.createElement(\"iframe\");\n\t\toutput.style.overflow = \"hidden\";\n\t\tconsole.log(`setting the element pointer`);\t\t\t\n\t\tthis.element_pointer = output;\t\t\n\n\n\t\tthis.set_style(\n\t\t\tthis.x_pos,\n\t\t\tthis.y_pos,\n\t\t\tthis.height,\n\t\t\tthis.width,\n\t\t\t);\n\n\t\tthis.set_content();\n\n\t\toutput.style.position = \"absolute\";\n\t\toutput.style.backgroundColor = \"red\";\n\t\toutput.style.borderStyle = \"none\";\n\n\t\tconsole.log(`component creation done ok`);\t\n\t\treturn 1;\n\t\t}\n\n\n\thas_already_made_element()\n\t\t{\n\t\tconsole.log(`calling has_already_made_element`);\n\t\tconsole.log(`element_pointer = ${this.element_pointer}`)\n\t\tlet output = this.element_pointer !== null;\n\t\tconsole.log(`has_already_made_element = ${output}`);\n\t\treturn output;\n\t\t}\n\n\n\tput_on_screen(document)\n\t\t{\n\t\tconsole.log(`calling put_on_screen`);\n\t\tconsole.log('creating the component')\n\t\tlet status_of_component_making = this.make_html_component();\n\n\t\tif (status_of_component_making === 0)\n\t\t\t{\n\t\t\tconsole.error(\"html compnent was already created, aborting adding to body\");\n\t\t\treturn 0;\n\t\t\t}\n\n\t\tconsole.log(`has_already_made_element = ${this.has_already_made_element()}`);\n\t\tdocument.body.appendChild(\n\t\t\tthis.element_pointer\n\t\t\t);\n\n\n\n\t\treturn 1;\n\t\t}\n\n\n\trender_self()\n\t\t{\n\t\tconsole.log(\"calling render\");\n\t\tif (this.has_already_made_element() === false)\n\t\t\t{\n\t\t\tconsole.error(\"rendering failed, cause no pointer to element exists; call 'put_on_screen' first\");\n\t\t\treturn 0;\n\t\t\t}\n\t\t\n\n\t\tconsole.log(\"updating the style\")\n\t\tthis.set_style(\n\t\t\tthis.x_pos,\n\t\t\tthis.y_pos,\n\t\t\tthis.height,\n\t\t\tthis.width\n\t\t\t);\n\n\n\t\tthis.set_content();\n\n\n\t\treturn 1;\n\t\t}\n\n\n\t}\n\n\n\n\n\n\n\n\n\n\nmodule.exports = \n\t{\n\tALL_SCREEN_SECTIONS,\n\tScreenSection\n\t};\n\n\n//# sourceURL=webpack://hcjs__alfiter/./src/ScreenSection.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("ss = __webpack_require__(/*! ./ScreenSection.js */ \"./src/ScreenSection.js\");\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://hcjs__alfiter/./src/index.js?");

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