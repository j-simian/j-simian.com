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
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getPostData\": () => (/* binding */ getPostData)\n/* harmony export */ });\n/* harmony import */ var unified__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! unified */ \"unified\");\n/* harmony import */ var remark_parse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! remark-parse */ \"remark-parse\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var highlight_js_styles_default_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! highlight.js/styles/default.css */ \"./node_modules/highlight.js/styles/default.css\");\n/* harmony import */ var highlight_js_styles_default_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(highlight_js_styles_default_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var remark_rehype__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! remark-rehype */ \"remark-rehype\");\n/* harmony import */ var rehype_format__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rehype-format */ \"rehype-format\");\n/* harmony import */ var rehype_stringify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rehype-stringify */ \"rehype-stringify\");\n/* harmony import */ var remark_prism__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! remark-prism */ \"remark-prism\");\n/* harmony import */ var remark_prism__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(remark_prism__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var rehype_raw__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rehype-raw */ \"rehype-raw\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([unified__WEBPACK_IMPORTED_MODULE_0__, remark_parse__WEBPACK_IMPORTED_MODULE_1__, remark_rehype__WEBPACK_IMPORTED_MODULE_5__, rehype_format__WEBPACK_IMPORTED_MODULE_6__, rehype_stringify__WEBPACK_IMPORTED_MODULE_7__, rehype_raw__WEBPACK_IMPORTED_MODULE_9__]);\n([unified__WEBPACK_IMPORTED_MODULE_0__, remark_parse__WEBPACK_IMPORTED_MODULE_1__, remark_rehype__WEBPACK_IMPORTED_MODULE_5__, rehype_format__WEBPACK_IMPORTED_MODULE_6__, rehype_stringify__WEBPACK_IMPORTED_MODULE_7__, rehype_raw__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\n\n\n\nasync function getPostData(id) {\n    const fullPath = path__WEBPACK_IMPORTED_MODULE_3___default().join(\"./articles/\", `${id}.mdx`);\n    const fileContents = fs__WEBPACK_IMPORTED_MODULE_2___default().readFileSync(fullPath, \"utf8\");\n    const processedContent = await (0,unified__WEBPACK_IMPORTED_MODULE_0__.unified)().use(remark_parse__WEBPACK_IMPORTED_MODULE_1__[\"default\"]).use((remark_prism__WEBPACK_IMPORTED_MODULE_8___default())).use(remark_rehype__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        allowDangerousHtml: true\n    }).use(rehype_raw__WEBPACK_IMPORTED_MODULE_9__[\"default\"]).use(rehype_format__WEBPACK_IMPORTED_MODULE_6__[\"default\"]).use(rehype_stringify__WEBPACK_IMPORTED_MODULE_7__[\"default\"]).process(fileContents);\n    let contentHtml = processedContent.toString();\n    console.log(contentHtml);\n    return {\n        id,\n        contentHtml\n    };\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvZ2V0UG9zdERhdGEudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWtDO0FBQ0s7QUFDbkI7QUFDSTtBQUNpQjtBQUNBO0FBQ0E7QUFDTTtBQUNSO0FBQ0o7QUFDNUIsZUFBZVMsV0FBVyxDQUFDQyxFQUFVLEVBQUU7SUFDN0MsTUFBTUMsUUFBUSxHQUFHUixnREFBUyxDQUFDLGFBQWEsRUFBRSxDQUFDLEVBQUVPLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0RCxNQUFNRyxZQUFZLEdBQUdYLHNEQUFlLENBQUNTLFFBQVEsRUFBRSxNQUFNLENBQUM7SUFFdEQsTUFBTUksZ0JBQWdCLEdBQUcsTUFBTWYsZ0RBQU8sRUFBRSxDQUN0Q2dCLEdBQUcsQ0FBQ2Ysb0RBQVcsQ0FBQyxDQUNoQmUsR0FBRyxDQUFDVCxxREFBVyxDQUFDLENBQ2hCUyxHQUFHLENBQUNaLHFEQUFZLEVBQUU7UUFBRWEsa0JBQWtCLEVBQUUsSUFBSTtLQUFFLENBQUMsQ0FDL0NELEdBQUcsQ0FBQ1Isa0RBQVMsQ0FBQyxDQUNkUSxHQUFHLENBQUNYLHFEQUFZLENBQUMsQ0FDakJXLEdBQUcsQ0FBQ1Ysd0RBQWUsQ0FBQyxDQUNwQlksT0FBTyxDQUFDTCxZQUFZLENBQUM7SUFDdkIsSUFBSU0sV0FBVyxHQUFHSixnQkFBZ0IsQ0FBQ0ssUUFBUSxFQUFFO0lBQzdDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsV0FBVyxDQUFDLENBQUM7SUFFekIsT0FBTztRQUNOVCxFQUFFO1FBQ0ZTLFdBQVc7S0FDWCxDQUFDO0NBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc2ltaWFuLmNvbS8uL2xpYi9nZXRQb3N0RGF0YS50cz8zMDA4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVuaWZpZWQgfSBmcm9tIFwidW5pZmllZFwiO1xuaW1wb3J0IHJlbWFya1BhcnNlIGZyb20gXCJyZW1hcmstcGFyc2VcIjtcbmltcG9ydCBmcyBmcm9tIFwiZnNcIjtcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XG5pbXBvcnQgXCJoaWdobGlnaHQuanMvc3R5bGVzL2RlZmF1bHQuY3NzXCI7XG5pbXBvcnQgcmVtYXJrUmVoeXBlIGZyb20gXCJyZW1hcmstcmVoeXBlXCI7XG5pbXBvcnQgcmVoeXBlRm9ybWF0IGZyb20gXCJyZWh5cGUtZm9ybWF0XCI7XG5pbXBvcnQgcmVoeXBlU3RyaW5naWZ5IGZyb20gXCJyZWh5cGUtc3RyaW5naWZ5XCI7XG5pbXBvcnQgcmVtYXJrUHJpc20gZnJvbSBcInJlbWFyay1wcmlzbVwiO1xuaW1wb3J0IHJlaHlwZVJhdyBmcm9tIFwicmVoeXBlLXJhd1wiO1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFBvc3REYXRhKGlkOiBzdHJpbmcpIHtcblx0Y29uc3QgZnVsbFBhdGggPSBwYXRoLmpvaW4oXCIuL2FydGljbGVzL1wiLCBgJHtpZH0ubWR4YCk7XG5cdGNvbnN0IGZpbGVDb250ZW50cyA9IGZzLnJlYWRGaWxlU3luYyhmdWxsUGF0aCwgXCJ1dGY4XCIpO1xuXG5cdGNvbnN0IHByb2Nlc3NlZENvbnRlbnQgPSBhd2FpdCB1bmlmaWVkKClcblx0XHQudXNlKHJlbWFya1BhcnNlKVxuXHRcdC51c2UocmVtYXJrUHJpc20pXG5cdFx0LnVzZShyZW1hcmtSZWh5cGUsIHsgYWxsb3dEYW5nZXJvdXNIdG1sOiB0cnVlIH0pXG5cdFx0LnVzZShyZWh5cGVSYXcpXG5cdFx0LnVzZShyZWh5cGVGb3JtYXQpXG5cdFx0LnVzZShyZWh5cGVTdHJpbmdpZnkpXG5cdFx0LnByb2Nlc3MoZmlsZUNvbnRlbnRzKTtcblx0bGV0IGNvbnRlbnRIdG1sID0gcHJvY2Vzc2VkQ29udGVudC50b1N0cmluZygpO1xuXHRjb25zb2xlLmxvZyhjb250ZW50SHRtbCk7XG5cblx0cmV0dXJuIHtcblx0XHRpZCxcblx0XHRjb250ZW50SHRtbCxcblx0fTtcbn1cbiJdLCJuYW1lcyI6WyJ1bmlmaWVkIiwicmVtYXJrUGFyc2UiLCJmcyIsInBhdGgiLCJyZW1hcmtSZWh5cGUiLCJyZWh5cGVGb3JtYXQiLCJyZWh5cGVTdHJpbmdpZnkiLCJyZW1hcmtQcmlzbSIsInJlaHlwZVJhdyIsImdldFBvc3REYXRhIiwiaWQiLCJmdWxsUGF0aCIsImpvaW4iLCJmaWxlQ29udGVudHMiLCJyZWFkRmlsZVN5bmMiLCJwcm9jZXNzZWRDb250ZW50IiwidXNlIiwiYWxsb3dEYW5nZXJvdXNIdG1sIiwicHJvY2VzcyIsImNvbnRlbnRIdG1sIiwidG9TdHJpbmciLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/getPostData.ts\n");

/***/ }),

/***/ "./pages/articles/[id].tsx":
/*!*********************************!*\
  !*** ./pages/articles/[id].tsx ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Article),\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_getPostData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/getPostData */ \"./lib/getPostData.ts\");\n/* harmony import */ var glob__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! glob */ \"glob\");\n/* harmony import */ var glob__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(glob__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_3__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_getPostData__WEBPACK_IMPORTED_MODULE_1__]);\n_lib_getPostData__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nconst getStaticProps = async ({ params  })=>{\n    const postData = await (0,_lib_getPostData__WEBPACK_IMPORTED_MODULE_1__.getPostData)(params.id);\n    return {\n        props: {\n            postData\n        }\n    };\n};\nconst getStaticPaths = async ()=>{\n    let paths = [];\n    (0,glob__WEBPACK_IMPORTED_MODULE_2__.glob)(path__WEBPACK_IMPORTED_MODULE_3___default().join(\"./articles\", \"**.mdx\"), {}, (_, files)=>{\n        paths = files;\n    });\n    return {\n        paths,\n        fallback: \"blocking\"\n    };\n};\nfunction Article({ postData  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            postData.title,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/jsimian/dev/jsimian.com/apps/site/pages/articles/[id].tsx\",\n                lineNumber: 26,\n                columnNumber: 4\n            }, this),\n            postData.id,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/jsimian/dev/jsimian.com/apps/site/pages/articles/[id].tsx\",\n                lineNumber: 28,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                dangerouslySetInnerHTML: {\n                    __html: postData.contentHtml\n                }\n            }, void 0, false, {\n                fileName: \"/Users/jsimian/dev/jsimian.com/apps/site/pages/articles/[id].tsx\",\n                lineNumber: 29,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true);\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcnRpY2xlcy9baWRdLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBb0Q7QUFFeEI7QUFDSjtBQUdqQixNQUFNRyxjQUFjLEdBQW1CLE9BQU8sRUFBRUMsTUFBTSxHQUFFLEdBQUs7SUFDbkUsTUFBTUMsUUFBUSxHQUFHLE1BQU1MLDZEQUFXLENBQUNJLE1BQU0sQ0FBRUUsRUFBRSxDQUFDO0lBRTlDLE9BQU87UUFBRUMsS0FBSyxFQUFFO1lBQUVGLFFBQVE7U0FBRTtLQUFFLENBQUM7Q0FDL0IsQ0FBQztBQUVLLE1BQU1HLGNBQWMsR0FBbUMsVUFBWTtJQUN6RSxJQUFJQyxLQUFLLEdBQWEsRUFBRTtJQUN4QlIsMENBQUksQ0FBQ0MsZ0RBQVMsQ0FBQyxZQUFZLEVBQUUsUUFBUSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUNTLENBQUMsRUFBRUMsS0FBSyxHQUFLO1FBQ3pESCxLQUFLLEdBQUdHLEtBQUssQ0FBQztLQUNkLENBQUMsQ0FBQztJQUVILE9BQU87UUFBRUgsS0FBSztRQUFFSSxRQUFRLEVBQUUsVUFBVTtLQUFFLENBQUM7Q0FDdkMsQ0FBQztBQUVhLFNBQVNDLE9BQU8sQ0FBQyxFQUFFVCxRQUFRLEdBQUUsRUFBRTtJQUM3QyxxQkFDQzs7WUFDRUEsUUFBUSxDQUFDVSxLQUFLOzBCQUNmLDhEQUFDQyxJQUFFOzs7O29CQUFHO1lBQ0xYLFFBQVEsQ0FBQ0MsRUFBRTswQkFDWiw4REFBQ1UsSUFBRTs7OztvQkFBRzswQkFDTiw4REFBQ0MsS0FBRztnQkFBQ0MsdUJBQXVCLEVBQUU7b0JBQUVDLE1BQU0sRUFBRWQsUUFBUSxDQUFDZSxXQUFXO2lCQUFFOzs7OztvQkFBSTs7b0JBQ2hFLENBQ0Y7Q0FDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2pzaW1pYW4uY29tLy4vcGFnZXMvYXJ0aWNsZXMvW2lkXS50c3g/OGI0OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRQb3N0RGF0YSB9IGZyb20gXCIuLi8uLi9saWIvZ2V0UG9zdERhdGFcIjtcbmltcG9ydCB7IEdldFN0YXRpY1BhdGhzLCBHZXRTdGF0aWNQcm9wcyB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgeyBnbG9iIH0gZnJvbSBcImdsb2JcIjtcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wczogR2V0U3RhdGljUHJvcHMgPSBhc3luYyAoeyBwYXJhbXMgfSkgPT4ge1xuXHRjb25zdCBwb3N0RGF0YSA9IGF3YWl0IGdldFBvc3REYXRhKHBhcmFtcyEuaWQpO1xuXG5cdHJldHVybiB7IHByb3BzOiB7IHBvc3REYXRhIH0gfTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRoczogR2V0U3RhdGljUGF0aHM8eyBpZDogc3RyaW5nIH0+ID0gYXN5bmMgKCkgPT4ge1xuXHRsZXQgcGF0aHM6IHN0cmluZ1tdID0gW107XG5cdGdsb2IocGF0aC5qb2luKFwiLi9hcnRpY2xlc1wiLCBcIioqLm1keFwiKSwge30sIChfLCBmaWxlcykgPT4ge1xuXHRcdHBhdGhzID0gZmlsZXM7XG5cdH0pO1xuXG5cdHJldHVybiB7IHBhdGhzLCBmYWxsYmFjazogXCJibG9ja2luZ1wiIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcnRpY2xlKHsgcG9zdERhdGEgfSkge1xuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHR7cG9zdERhdGEudGl0bGV9XG5cdFx0XHQ8YnIgLz5cblx0XHRcdHtwb3N0RGF0YS5pZH1cblx0XHRcdDxiciAvPlxuXHRcdFx0PGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHBvc3REYXRhLmNvbnRlbnRIdG1sIH19IC8+XG5cdFx0PC8+XG5cdCk7XG59XG4iXSwibmFtZXMiOlsiZ2V0UG9zdERhdGEiLCJnbG9iIiwicGF0aCIsImdldFN0YXRpY1Byb3BzIiwicGFyYW1zIiwicG9zdERhdGEiLCJpZCIsInByb3BzIiwiZ2V0U3RhdGljUGF0aHMiLCJwYXRocyIsImpvaW4iLCJfIiwiZmlsZXMiLCJmYWxsYmFjayIsIkFydGljbGUiLCJ0aXRsZSIsImJyIiwiZGl2IiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJjb250ZW50SHRtbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/articles/[id].tsx\n");

/***/ }),

/***/ "./node_modules/highlight.js/styles/default.css":
/*!******************************************************!*\
  !*** ./node_modules/highlight.js/styles/default.css ***!
  \******************************************************/
/***/ (() => {



/***/ }),

/***/ "glob":
/*!***********************!*\
  !*** external "glob" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("glob");

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