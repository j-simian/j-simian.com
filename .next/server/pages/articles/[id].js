/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/articles/[id]";
exports.ids = ["pages/articles/[id]"];
exports.modules = {

/***/ "./lib/getPostData.ts":
/*!****************************!*\
  !*** ./lib/getPostData.ts ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getPostData\": () => (/* binding */ getPostData)\n/* harmony export */ });\n/* harmony import */ var unified__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! unified */ \"unified\");\n/* harmony import */ var remark_parse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! remark-parse */ \"remark-parse\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var highlight_js_styles_default_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! highlight.js/styles/default.css */ \"./node_modules/highlight.js/styles/default.css\");\n/* harmony import */ var highlight_js_styles_default_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(highlight_js_styles_default_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var remark_rehype__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! remark-rehype */ \"remark-rehype\");\n/* harmony import */ var rehype_format__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rehype-format */ \"rehype-format\");\n/* harmony import */ var rehype_stringify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rehype-stringify */ \"rehype-stringify\");\n/* harmony import */ var remark_prism__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! remark-prism */ \"remark-prism\");\n/* harmony import */ var remark_prism__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(remark_prism__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var rehype_raw__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rehype-raw */ \"rehype-raw\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([unified__WEBPACK_IMPORTED_MODULE_0__, remark_parse__WEBPACK_IMPORTED_MODULE_1__, remark_rehype__WEBPACK_IMPORTED_MODULE_5__, rehype_format__WEBPACK_IMPORTED_MODULE_6__, rehype_stringify__WEBPACK_IMPORTED_MODULE_7__, rehype_raw__WEBPACK_IMPORTED_MODULE_9__]);\n([unified__WEBPACK_IMPORTED_MODULE_0__, remark_parse__WEBPACK_IMPORTED_MODULE_1__, remark_rehype__WEBPACK_IMPORTED_MODULE_5__, rehype_format__WEBPACK_IMPORTED_MODULE_6__, rehype_stringify__WEBPACK_IMPORTED_MODULE_7__, rehype_raw__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\n\n\n\nasync function getPostData(id) {\n    const fullPath = path__WEBPACK_IMPORTED_MODULE_3___default().join(\"./articles/\", `${id}.mdx`);\n    const fileContents = fs__WEBPACK_IMPORTED_MODULE_2___default().readFileSync(fullPath, \"utf8\");\n    const processedContent = await (0,unified__WEBPACK_IMPORTED_MODULE_0__.unified)().use(remark_parse__WEBPACK_IMPORTED_MODULE_1__[\"default\"]).use((remark_prism__WEBPACK_IMPORTED_MODULE_8___default())).use(remark_rehype__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        allowDangerousHtml: true\n    }).use(rehype_raw__WEBPACK_IMPORTED_MODULE_9__[\"default\"]).use(rehype_format__WEBPACK_IMPORTED_MODULE_6__[\"default\"]).use(rehype_stringify__WEBPACK_IMPORTED_MODULE_7__[\"default\"]).process(fileContents);\n    let contentHtml = processedContent.toString();\n    return {\n        id,\n        contentHtml\n    };\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvZ2V0UG9zdERhdGEudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWtDO0FBQ0s7QUFDbkI7QUFDSTtBQUNpQjtBQUNBO0FBQ0E7QUFDTTtBQUNSO0FBQ0o7QUFFNUIsZUFBZVMsV0FBVyxDQUFDQyxFQUFVLEVBQUU7SUFDN0MsTUFBTUMsUUFBUSxHQUFHUixnREFBUyxDQUFDLGFBQWEsRUFBRSxDQUFDLEVBQUVPLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0RCxNQUFNRyxZQUFZLEdBQUdYLHNEQUFlLENBQUNTLFFBQVEsRUFBRSxNQUFNLENBQUM7SUFFdEQsTUFBTUksZ0JBQWdCLEdBQUcsTUFBTWYsZ0RBQU8sRUFBRSxDQUN0Q2dCLEdBQUcsQ0FBQ2Ysb0RBQVcsQ0FBQyxDQUNoQmUsR0FBRyxDQUFDVCxxREFBVyxDQUFDLENBQ2hCUyxHQUFHLENBQUNaLHFEQUFZLEVBQUU7UUFBRWEsa0JBQWtCLEVBQUUsSUFBSTtLQUFFLENBQUMsQ0FDL0NELEdBQUcsQ0FBQ1Isa0RBQVMsQ0FBQyxDQUNkUSxHQUFHLENBQUNYLHFEQUFZLENBQUMsQ0FDakJXLEdBQUcsQ0FBQ1Ysd0RBQWUsQ0FBQyxDQUNwQlksT0FBTyxDQUFDTCxZQUFZLENBQUM7SUFDdkIsSUFBSU0sV0FBVyxHQUFHSixnQkFBZ0IsQ0FBQ0ssUUFBUSxFQUFFO0lBRTdDLE9BQU87UUFDTlYsRUFBRTtRQUNGUyxXQUFXO0tBQ1gsQ0FBQztDQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanNpbWlhbi5jb20vLi9saWIvZ2V0UG9zdERhdGEudHM/MzAwOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1bmlmaWVkIH0gZnJvbSBcInVuaWZpZWRcIjtcbmltcG9ydCByZW1hcmtQYXJzZSBmcm9tIFwicmVtYXJrLXBhcnNlXCI7XG5pbXBvcnQgZnMgZnJvbSBcImZzXCI7XG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xuaW1wb3J0IFwiaGlnaGxpZ2h0LmpzL3N0eWxlcy9kZWZhdWx0LmNzc1wiO1xuaW1wb3J0IHJlbWFya1JlaHlwZSBmcm9tIFwicmVtYXJrLXJlaHlwZVwiO1xuaW1wb3J0IHJlaHlwZUZvcm1hdCBmcm9tIFwicmVoeXBlLWZvcm1hdFwiO1xuaW1wb3J0IHJlaHlwZVN0cmluZ2lmeSBmcm9tIFwicmVoeXBlLXN0cmluZ2lmeVwiO1xuaW1wb3J0IHJlbWFya1ByaXNtIGZyb20gXCJyZW1hcmstcHJpc21cIjtcbmltcG9ydCByZWh5cGVSYXcgZnJvbSBcInJlaHlwZS1yYXdcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFBvc3REYXRhKGlkOiBzdHJpbmcpIHtcblx0Y29uc3QgZnVsbFBhdGggPSBwYXRoLmpvaW4oXCIuL2FydGljbGVzL1wiLCBgJHtpZH0ubWR4YCk7XG5cdGNvbnN0IGZpbGVDb250ZW50cyA9IGZzLnJlYWRGaWxlU3luYyhmdWxsUGF0aCwgXCJ1dGY4XCIpO1xuXG5cdGNvbnN0IHByb2Nlc3NlZENvbnRlbnQgPSBhd2FpdCB1bmlmaWVkKClcblx0XHQudXNlKHJlbWFya1BhcnNlKVxuXHRcdC51c2UocmVtYXJrUHJpc20pXG5cdFx0LnVzZShyZW1hcmtSZWh5cGUsIHsgYWxsb3dEYW5nZXJvdXNIdG1sOiB0cnVlIH0pXG5cdFx0LnVzZShyZWh5cGVSYXcpXG5cdFx0LnVzZShyZWh5cGVGb3JtYXQpXG5cdFx0LnVzZShyZWh5cGVTdHJpbmdpZnkpXG5cdFx0LnByb2Nlc3MoZmlsZUNvbnRlbnRzKTtcblx0bGV0IGNvbnRlbnRIdG1sID0gcHJvY2Vzc2VkQ29udGVudC50b1N0cmluZygpO1xuXG5cdHJldHVybiB7XG5cdFx0aWQsXG5cdFx0Y29udGVudEh0bWwsXG5cdH07XG59XG4iXSwibmFtZXMiOlsidW5pZmllZCIsInJlbWFya1BhcnNlIiwiZnMiLCJwYXRoIiwicmVtYXJrUmVoeXBlIiwicmVoeXBlRm9ybWF0IiwicmVoeXBlU3RyaW5naWZ5IiwicmVtYXJrUHJpc20iLCJyZWh5cGVSYXciLCJnZXRQb3N0RGF0YSIsImlkIiwiZnVsbFBhdGgiLCJqb2luIiwiZmlsZUNvbnRlbnRzIiwicmVhZEZpbGVTeW5jIiwicHJvY2Vzc2VkQ29udGVudCIsInVzZSIsImFsbG93RGFuZ2Vyb3VzSHRtbCIsInByb2Nlc3MiLCJjb250ZW50SHRtbCIsInRvU3RyaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/getPostData.ts\n");

/***/ }),

/***/ "./pages/articles/[id].tsx":
/*!*********************************!*\
  !*** ./pages/articles/[id].tsx ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Article),\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_getPostData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/getPostData */ \"./lib/getPostData.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_getPostData__WEBPACK_IMPORTED_MODULE_1__]);\n_lib_getPostData__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst getStaticProps = async ({ params  })=>{\n    const postData = await (0,_lib_getPostData__WEBPACK_IMPORTED_MODULE_1__.getPostData)(params.id);\n    return {\n        props: {\n            postData\n        }\n    };\n};\nconst getStaticPaths = async ()=>{\n    const ids = [\n        \"1\"\n    ];\n    let paths = ids.map((x)=>({\n            params: {\n                id: x\n            }\n        })\n    );\n    console.log(paths);\n    return {\n        paths,\n        fallback: \"blocking\"\n    };\n};\nfunction Article({ postData  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            postData.title,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/jsimian/dev/jsimian.com/apps/site/pages/articles/[id].tsx\",\n                lineNumber: 24,\n                columnNumber: 4\n            }, this),\n            postData.id,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/jsimian/dev/jsimian.com/apps/site/pages/articles/[id].tsx\",\n                lineNumber: 26,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                dangerouslySetInnerHTML: {\n                    __html: postData.contentHtml\n                }\n            }, void 0, false, {\n                fileName: \"/Users/jsimian/dev/jsimian.com/apps/site/pages/articles/[id].tsx\",\n                lineNumber: 27,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true);\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcnRpY2xlcy9baWRdLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUFvRDtBQUs3QyxNQUFNQyxjQUFjLEdBQW1CLE9BQU8sRUFBRUMsTUFBTSxHQUFFLEdBQUs7SUFDbkUsTUFBTUMsUUFBUSxHQUFHLE1BQU1ILDZEQUFXLENBQUNFLE1BQU0sQ0FBRUUsRUFBRSxDQUFXO0lBRXhELE9BQU87UUFBRUMsS0FBSyxFQUFFO1lBQUVGLFFBQVE7U0FBRTtLQUFFLENBQUM7Q0FDL0IsQ0FBQztBQUVLLE1BQU1HLGNBQWMsR0FBbUMsVUFBWTtJQUN6RSxNQUFNQyxHQUFHLEdBQUc7UUFBQyxHQUFHO0tBQUM7SUFDakIsSUFBSUMsS0FBSyxHQUFRRCxHQUFHLENBQUNFLEdBQUcsQ0FBQyxDQUFDQyxDQUFDLEdBQUssQ0FBQztZQUFFUixNQUFNLEVBQUU7Z0JBQUVFLEVBQUUsRUFBRU0sQ0FBQzthQUFFO1NBQUUsQ0FBQztJQUFBLENBQUM7SUFDeERDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSixLQUFLLENBQUMsQ0FBQztJQUVuQixPQUFPO1FBQUVBLEtBQUs7UUFBRUssUUFBUSxFQUFFLFVBQVU7S0FBRSxDQUFDO0NBQ3ZDLENBQUM7QUFFYSxTQUFTQyxPQUFPLENBQUMsRUFBRVgsUUFBUSxHQUFPLEVBQUU7SUFDbEQscUJBQ0M7O1lBQ0VBLFFBQVEsQ0FBQ1ksS0FBSzswQkFDZiw4REFBQ0MsSUFBRTs7OztvQkFBRztZQUNMYixRQUFRLENBQUNDLEVBQUU7MEJBQ1osOERBQUNZLElBQUU7Ozs7b0JBQUc7MEJBQ04sOERBQUNDLEtBQUc7Z0JBQUNDLHVCQUF1QixFQUFFO29CQUFFQyxNQUFNLEVBQUVoQixRQUFRLENBQUNpQixXQUFXO2lCQUFFOzs7OztvQkFBSTs7b0JBQ2hFLENBQ0Y7Q0FDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2pzaW1pYW4uY29tLy4vcGFnZXMvYXJ0aWNsZXMvW2lkXS50c3g/OGI0OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRQb3N0RGF0YSB9IGZyb20gXCIuLi8uLi9saWIvZ2V0UG9zdERhdGFcIjtcbmltcG9ydCB7IEdldFN0YXRpY1BhdGhzLCBHZXRTdGF0aWNQcm9wcyB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgeyBnbG9iIH0gZnJvbSBcImdsb2JcIjtcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wczogR2V0U3RhdGljUHJvcHMgPSBhc3luYyAoeyBwYXJhbXMgfSkgPT4ge1xuXHRjb25zdCBwb3N0RGF0YSA9IGF3YWl0IGdldFBvc3REYXRhKHBhcmFtcyEuaWQgYXMgc3RyaW5nKTtcblxuXHRyZXR1cm4geyBwcm9wczogeyBwb3N0RGF0YSB9IH07XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHM6IEdldFN0YXRpY1BhdGhzPHsgaWQ6IHN0cmluZyB9PiA9IGFzeW5jICgpID0+IHtcblx0Y29uc3QgaWRzID0gW1wiMVwiXTtcblx0bGV0IHBhdGhzOiBhbnkgPSBpZHMubWFwKCh4KSA9PiAoeyBwYXJhbXM6IHsgaWQ6IHggfSB9KSlcblx0Y29uc29sZS5sb2cocGF0aHMpO1xuXG5cdHJldHVybiB7IHBhdGhzLCBmYWxsYmFjazogXCJibG9ja2luZ1wiIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcnRpY2xlKHsgcG9zdERhdGEgfTogYW55KSB7XG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdHtwb3N0RGF0YS50aXRsZX1cblx0XHRcdDxiciAvPlxuXHRcdFx0e3Bvc3REYXRhLmlkfVxuXHRcdFx0PGJyIC8+XG5cdFx0XHQ8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogcG9zdERhdGEuY29udGVudEh0bWwgfX0gLz5cblx0XHQ8Lz5cblx0KTtcbn1cbiJdLCJuYW1lcyI6WyJnZXRQb3N0RGF0YSIsImdldFN0YXRpY1Byb3BzIiwicGFyYW1zIiwicG9zdERhdGEiLCJpZCIsInByb3BzIiwiZ2V0U3RhdGljUGF0aHMiLCJpZHMiLCJwYXRocyIsIm1hcCIsIngiLCJjb25zb2xlIiwibG9nIiwiZmFsbGJhY2siLCJBcnRpY2xlIiwidGl0bGUiLCJiciIsImRpdiIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwiY29udGVudEh0bWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/articles/[id].tsx\n");

/***/ }),

/***/ "./node_modules/highlight.js/styles/default.css":
/*!******************************************************!*\
  !*** ./node_modules/highlight.js/styles/default.css ***!
  \******************************************************/
/***/ (() => {



/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "remark-prism":
/*!*******************************!*\
  !*** external "remark-prism" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("remark-prism");

/***/ }),

/***/ "rehype-format":
/*!********************************!*\
  !*** external "rehype-format" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = import("rehype-format");;

/***/ }),

/***/ "rehype-raw":
/*!*****************************!*\
  !*** external "rehype-raw" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = import("rehype-raw");;

/***/ }),

/***/ "rehype-stringify":
/*!***********************************!*\
  !*** external "rehype-stringify" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = import("rehype-stringify");;

/***/ }),

/***/ "remark-parse":
/*!*******************************!*\
  !*** external "remark-parse" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = import("remark-parse");;

/***/ }),

/***/ "remark-rehype":
/*!********************************!*\
  !*** external "remark-rehype" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = import("remark-rehype");;

/***/ }),

/***/ "unified":
/*!**************************!*\
  !*** external "unified" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = import("unified");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/articles/[id].tsx"));
module.exports = __webpack_exports__;

})();