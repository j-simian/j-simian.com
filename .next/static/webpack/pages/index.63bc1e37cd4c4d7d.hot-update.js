"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/articles/[id].tsx":
/*!*********************************!*\
  !*** ./pages/articles/[id].tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Tag\": function() { return /* binding */ Tag; },\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Article; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\nvar _this = undefined;\n\nvar __N_SSG = true;\nfunction Article(param) {\n    var postData = param.postData;\n    var _this1 = this;\n    console.log(postData.metadata);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: \"header\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: postData.metadata.title\n                    }, void 0, false, {\n                        fileName: \"/Users/jsimian/dev/jsimian.com/apps/site/pages/articles/[id].tsx\",\n                        lineNumber: 23,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"datePublished\",\n                        children: [\n                            \" \",\n                            \"First published on: \",\n                            postData.metadata.dateCreated,\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/jsimian/dev/jsimian.com/apps/site/pages/articles/[id].tsx\",\n                        lineNumber: 24,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"tags\",\n                        children: [\n                            \"Tags:\",\n                            postData.metadata.tags.map(function(x) {\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Tag, {\n                                    tagName: x\n                                }, void 0, false, {\n                                    fileName: \"/Users/jsimian/dev/jsimian.com/apps/site/pages/articles/[id].tsx\",\n                                    lineNumber: 31,\n                                    columnNumber: 7\n                                }, _this1);\n                            })\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/jsimian/dev/jsimian.com/apps/site/pages/articles/[id].tsx\",\n                        lineNumber: 28,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jsimian/dev/jsimian.com/apps/site/pages/articles/[id].tsx\",\n                lineNumber: 22,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                dangerouslySetInnerHTML: {\n                    __html: postData.contentHtml\n                }\n            }, void 0, false, {\n                fileName: \"/Users/jsimian/dev/jsimian.com/apps/site/pages/articles/[id].tsx\",\n                lineNumber: 35,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true);\n};\n_c = Article;\nvar Tag = function(param) {\n    var tagName = param.tagName;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"code\", {\n        className: \"tagElement\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n            children: [\n                \"#\",\n                tagName\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/jsimian/dev/jsimian.com/apps/site/pages/articles/[id].tsx\",\n            lineNumber: 43,\n            columnNumber: 4\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/jsimian/dev/jsimian.com/apps/site/pages/articles/[id].tsx\",\n        lineNumber: 42,\n        columnNumber: 3\n    }, _this);\n};\n_c1 = Tag;\nvar _c, _c1;\n$RefreshReg$(_c, \"Article\");\n$RefreshReg$(_c1, \"Tag\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcnRpY2xlcy9baWRdLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7QUFpQmUsU0FBU0EsT0FBTyxDQUFDLEtBQWdDLEVBQUU7UUFBbEMsUUFBVSxHQUFWLEtBQWdDLENBQTlCQyxRQUFROztJQUN6Q0MsT0FBTyxDQUFDQyxHQUFHLENBQUNGLFFBQVEsQ0FBQ0csUUFBUSxDQUFDLENBQUM7SUFDL0IscUJBQ0M7OzBCQUNDLDhEQUFDQyxRQUFNO2dCQUFDQyxTQUFTLEVBQUMsUUFBUTs7a0NBQ3pCLDhEQUFDQyxJQUFFO2tDQUFFTixRQUFRLENBQUNHLFFBQVEsQ0FBQ0ksS0FBSzs7Ozs7NEJBQU07a0NBQ2xDLDhEQUFDQyxHQUFDO3dCQUFDSCxTQUFTLEVBQUMsZUFBZTs7NEJBQzFCLEdBQUc7NEJBQUMsc0JBQ2U7NEJBQUNMLFFBQVEsQ0FBQ0csUUFBUSxDQUFDTSxXQUFXOzRCQUFFLEdBQUc7Ozs7Ozs0QkFDcEQ7a0NBQ0osOERBQUNELEdBQUM7d0JBQUNILFNBQVMsRUFBQyxNQUFNOzs0QkFBQyxPQUVuQjs0QkFBQ0wsUUFBUSxDQUFDRyxRQUFRLENBQUNPLElBQUksQ0FBQ0MsR0FBRyxDQUFDLFNBQUNDLENBQVM7cURBQ3JDLDhEQUFDQyxHQUFHO29DQUFDQyxPQUFPLEVBQUVGLENBQUM7Ozs7OzBDQUFJOzZCQUNuQixDQUFDOzs7Ozs7NEJBQ0M7Ozs7OztvQkFDSTswQkFDVCw4REFBQ0csS0FBRztnQkFBQ0MsdUJBQXVCLEVBQUU7b0JBQUVDLE1BQU0sRUFBRWpCLFFBQVEsQ0FBQ2tCLFdBQVc7aUJBQUU7Ozs7O29CQUFJOztvQkFDaEUsQ0FDRjtDQUNGO0FBcEJ1Qm5CLEtBQUFBLE9BQU87QUFzQnhCLElBQU1jLEdBQUcsR0FBRyxnQkFBc0M7UUFBbkNDLE9BQU8sU0FBUEEsT0FBTztJQUM1QixxQkFDQyw4REFBQ0ssTUFBSTtRQUFDZCxTQUFTLEVBQUMsWUFBWTtrQkFDM0IsNEVBQUNlLEdBQUM7O2dCQUFDLEdBQUM7Z0JBQUNOLE9BQU87Ozs7OztpQkFBSzs7Ozs7YUFDWCxDQUNOO0NBQ0YsQ0FBQztBQU5XRCxNQUFBQSxHQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2FydGljbGVzL1tpZF0udHN4PzhiNDgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0UG9zdERhdGEsIGdldFBvc3RMaXN0LCBQb3N0IH0gZnJvbSBcIi4uLy4uL2xpYi9nZXRQb3N0RGF0YVwiO1xuaW1wb3J0IHsgR2V0U3RhdGljUGF0aHMsIEdldFN0YXRpY1Byb3BzIH0gZnJvbSBcIm5leHRcIjtcblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzOiBHZXRTdGF0aWNQcm9wcyA9IGFzeW5jICh7IHBhcmFtcyB9KSA9PiB7XG5cdGNvbnN0IHBvc3REYXRhID0gYXdhaXQgZ2V0UG9zdERhdGEocGFyYW1zIS5pZCBhcyBzdHJpbmcpO1xuXG5cdHJldHVybiB7IHByb3BzOiB7IHBvc3REYXRhIH0gfTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRoczogR2V0U3RhdGljUGF0aHM8eyBpZDogc3RyaW5nIH0+ID0gYXN5bmMgKCkgPT4ge1xuXHRjb25zdCBpZHMgPSBhd2FpdCBnZXRQb3N0TGlzdCgpO1xuXHRsZXQgcGF0aHM6IGFueSA9IGlkcy5tYXAoKHg6IHN0cmluZykgPT4gKHsgcGFyYW1zOiB7IGlkOiB4IH0gfSkpO1xuXHRjb25zb2xlLmxvZyhwYXRocyk7XG5cblx0cmV0dXJuIHsgcGF0aHMsIGZhbGxiYWNrOiBcImJsb2NraW5nXCIgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFydGljbGUoeyBwb3N0RGF0YSB9OiB7IHBvc3REYXRhOiBQb3N0IH0pIHtcblx0Y29uc29sZS5sb2cocG9zdERhdGEubWV0YWRhdGEpO1xuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8aGVhZGVyIGNsYXNzTmFtZT1cImhlYWRlclwiPlxuXHRcdFx0XHQ8aDE+e3Bvc3REYXRhLm1ldGFkYXRhLnRpdGxlfTwvaDE+XG5cdFx0XHRcdDxwIGNsYXNzTmFtZT1cImRhdGVQdWJsaXNoZWRcIj5cblx0XHRcdFx0XHR7XCIgXCJ9XG5cdFx0XHRcdFx0Rmlyc3QgcHVibGlzaGVkIG9uOiB7cG9zdERhdGEubWV0YWRhdGEuZGF0ZUNyZWF0ZWR9e1wiIFwifVxuXHRcdFx0XHQ8L3A+XG5cdFx0XHRcdDxwIGNsYXNzTmFtZT1cInRhZ3NcIj5cblx0XHRcdFx0XHRUYWdzOlxuXHRcdFx0XHRcdHtwb3N0RGF0YS5tZXRhZGF0YS50YWdzLm1hcCgoeDogc3RyaW5nKSA9PiAoXG5cdFx0XHRcdFx0XHQ8VGFnIHRhZ05hbWU9e3h9IC8+XG5cdFx0XHRcdFx0KSl9XG5cdFx0XHRcdDwvcD5cblx0XHRcdDwvaGVhZGVyPlxuXHRcdFx0PGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHBvc3REYXRhLmNvbnRlbnRIdG1sIH19IC8+XG5cdFx0PC8+XG5cdCk7XG59XG5cbmV4cG9ydCBjb25zdCBUYWcgPSAoeyB0YWdOYW1lIH06IHsgdGFnTmFtZTogc3RyaW5nIH0pID0+IHtcblx0cmV0dXJuIChcblx0XHQ8Y29kZSBjbGFzc05hbWU9XCJ0YWdFbGVtZW50XCI+XG5cdFx0XHQ8YT4je3RhZ05hbWV9PC9hPlxuXHRcdDwvY29kZT5cblx0KTtcbn07XG4iXSwibmFtZXMiOlsiQXJ0aWNsZSIsInBvc3REYXRhIiwiY29uc29sZSIsImxvZyIsIm1ldGFkYXRhIiwiaGVhZGVyIiwiY2xhc3NOYW1lIiwiaDEiLCJ0aXRsZSIsInAiLCJkYXRlQ3JlYXRlZCIsInRhZ3MiLCJtYXAiLCJ4IiwiVGFnIiwidGFnTmFtZSIsImRpdiIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwiY29udGVudEh0bWwiLCJjb2RlIiwiYSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/articles/[id].tsx\n");

/***/ })

});