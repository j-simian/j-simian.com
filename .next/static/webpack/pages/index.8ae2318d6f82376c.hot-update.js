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

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _articles_id___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./articles/[id] */ \"./pages/articles/[id].tsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\n\n\nfunction buildPostList(postList) {\n    var _this1 = this;\n    return postList.reverse().map(function(x) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Card, {\n            postData: x\n        }, void 0, false, {\n            fileName: \"/Users/jsimian/dev/jsimian.com/apps/site/pages/index.tsx\",\n            lineNumber: 18,\n            columnNumber: 53\n        }, _this1);\n    });\n}\nvar Home = function(param) {\n    var postList = param.postList;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: buildPostList(postList)\n    }, void 0, false, {\n        fileName: \"/Users/jsimian/dev/jsimian.com/apps/site/pages/index.tsx\",\n        lineNumber: 22,\n        columnNumber: 9\n    }, _this);\n};\n_c = Home;\nvar Card = function(param) {\n    var postData = param.postData;\n    var _this2 = _this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"postCard\",\n        onClick: function(_) {\n            return next_router__WEBPACK_IMPORTED_MODULE_2___default().push(\"/articles/\".concat(postData.id));\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: postData.title\n            }, void 0, false, {\n                fileName: \"/Users/jsimian/dev/jsimian.com/apps/site/pages/index.tsx\",\n                lineNumber: 31,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"subtitle\",\n                children: postData.subtitle\n            }, void 0, false, {\n                fileName: \"/Users/jsimian/dev/jsimian.com/apps/site/pages/index.tsx\",\n                lineNumber: 32,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"metaContainer\",\n                style: {\n                    display: \"flex\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"tags\",\n                        children: [\n                            \"Tags:\",\n                            postData.tags.map(function(x) {\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_articles_id___WEBPACK_IMPORTED_MODULE_1__.Tag, {\n                                    tagName: x\n                                }, void 0, false, {\n                                    fileName: \"/Users/jsimian/dev/jsimian.com/apps/site/pages/index.tsx\",\n                                    lineNumber: 37,\n                                    columnNumber: 7\n                                }, _this2);\n                            })\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/jsimian/dev/jsimian.com/apps/site/pages/index.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 5\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        style: {\n                            padding: 0\n                        },\n                        children: [\n                            \"Date published: \",\n                            postData.dateCreated\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/jsimian/dev/jsimian.com/apps/site/pages/index.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 5\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jsimian/dev/jsimian.com/apps/site/pages/index.tsx\",\n                lineNumber: 33,\n                columnNumber: 4\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jsimian/dev/jsimian.com/apps/site/pages/index.tsx\",\n        lineNumber: 27,\n        columnNumber: 3\n    }, _this);\n};\n_c1 = Card;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c, _c1;\n$RefreshReg$(_c, \"Home\");\n$RefreshReg$(_c1, \"Card\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBRXNDO0FBQ0w7QUFhakMsU0FBU0UsYUFBYSxDQUFDQyxRQUF3QixFQUFFOztJQUNoRCxPQUFPQSxRQUFRLENBQUNDLE9BQU8sRUFBRSxDQUFDQyxHQUFHLENBQUMsU0FBQ0MsQ0FBZTs2QkFBSyw4REFBQ0MsSUFBSTtZQUFDQyxRQUFRLEVBQUVGLENBQUM7Ozs7O2tCQUFJO0tBQUEsQ0FBQyxDQUFDO0NBQzFFO0FBRUQsSUFBTUcsSUFBSSxHQUFHLGdCQUFnRDtRQUE3Q04sUUFBUSxTQUFSQSxRQUFRO0lBQ3ZCLHFCQUFPLDhEQUFDTyxLQUFHO2tCQUFFUixhQUFhLENBQUNDLFFBQVEsQ0FBQzs7Ozs7YUFBTyxDQUFDO0NBQzVDO0FBRktNLEtBQUFBLElBQUk7QUFJVixJQUFNRixJQUFJLEdBQUcsZ0JBQThDO1FBQTNDQyxRQUFRLFNBQVJBLFFBQVE7O0lBQ3ZCLHFCQUNDLDhEQUFDRSxLQUFHO1FBQ0hDLFNBQVMsRUFBQyxVQUFVO1FBQ3BCQyxPQUFPLEVBQUUsU0FBQ0MsQ0FBQzttQkFBS1osdURBQVcsQ0FBQyxZQUFXLENBQWMsT0FBWk8sUUFBUSxDQUFDTyxFQUFFLENBQUUsQ0FBQztTQUFBOzswQkFFdkQsOERBQUNDLElBQUU7MEJBQUVSLFFBQVEsQ0FBQ1MsS0FBSzs7Ozs7cUJBQU07MEJBQ3pCLDhEQUFDQyxHQUFDO2dCQUFDUCxTQUFTLEVBQUMsVUFBVTswQkFBRUgsUUFBUSxDQUFDVyxRQUFROzs7OztxQkFBSzswQkFDL0MsOERBQUNULEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyxlQUFlO2dCQUFDUyxLQUFLLEVBQUU7b0JBQUVDLE9BQU8sRUFBRSxNQUFNO2lCQUFFOztrQ0FDeEQsOERBQUNILEdBQUM7d0JBQUNQLFNBQVMsRUFBQyxNQUFNOzs0QkFBQyxPQUVuQjs0QkFBQ0gsUUFBUSxDQUFDYyxJQUFJLENBQUNqQixHQUFHLENBQUMsU0FBQ0MsQ0FBUztxREFDNUIsOERBQUNOLDhDQUFHO29DQUFDdUIsT0FBTyxFQUFFakIsQ0FBQzs7Ozs7MENBQUk7NkJBQ25CLENBQUM7Ozs7Ozs2QkFDQztrQ0FDSiw4REFBQ1ksR0FBQzt3QkFBQ0UsS0FBSyxFQUFFOzRCQUFFSSxPQUFPLEVBQUUsQ0FBQzt5QkFBRTs7NEJBQUUsa0JBQWdCOzRCQUFDaEIsUUFBUSxDQUFDaUIsV0FBVzs7Ozs7OzZCQUFLOzs7Ozs7cUJBQy9EOzs7Ozs7YUFDRCxDQUNMO0NBQ0Y7QUFuQktsQixNQUFBQSxJQUFJOztBQXFCViwrREFBZUUsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgR2V0U3RhdGljUHJvcHMgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHsgZ2V0UG9zdExpc3QsIGdldFBvc3RNZXRhZGF0YSwgUG9zdE1ldGFkYXRhIH0gZnJvbSBcIi4uL2xpYi9nZXRQb3N0RGF0YVwiO1xuaW1wb3J0IHsgVGFnIH0gZnJvbSBcIi4vYXJ0aWNsZXMvW2lkXVwiO1xuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzOiBHZXRTdGF0aWNQcm9wcyA9IGFzeW5jICh7IHBhcmFtcyB9KSA9PiB7XG5cdGNvbnN0IHBvc3RJZHMgPSBhd2FpdCBnZXRQb3N0TGlzdCgpO1xuXHRjb25zdCBwb3N0TGlzdDogUG9zdE1ldGFkYXRhW10gPSBbXTtcblx0Zm9yIChsZXQgeCBpbiBwb3N0SWRzKSB7XG5cdFx0cG9zdExpc3QucHVzaChhd2FpdCBnZXRQb3N0TWV0YWRhdGEoeCkpO1xuXHR9XG5cdHJldHVybiB7XG5cdFx0cHJvcHM6IHsgcG9zdExpc3Q6IHBvc3RMaXN0IH0sXG5cdH07XG59O1xuXG5mdW5jdGlvbiBidWlsZFBvc3RMaXN0KHBvc3RMaXN0OiBQb3N0TWV0YWRhdGFbXSkge1xuXHRyZXR1cm4gcG9zdExpc3QucmV2ZXJzZSgpLm1hcCgoeDogUG9zdE1ldGFkYXRhKSA9PiA8Q2FyZCBwb3N0RGF0YT17eH0gLz4pO1xufVxuXG5jb25zdCBIb21lID0gKHsgcG9zdExpc3QgfTogeyBwb3N0TGlzdDogUG9zdE1ldGFkYXRhW10gfSkgPT4ge1xuXHRyZXR1cm4gPGRpdj57YnVpbGRQb3N0TGlzdChwb3N0TGlzdCl9PC9kaXY+O1xufTtcblxuY29uc3QgQ2FyZCA9ICh7IHBvc3REYXRhIH06IHsgcG9zdERhdGE6IFBvc3RNZXRhZGF0YSB9KSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PGRpdlxuXHRcdFx0Y2xhc3NOYW1lPVwicG9zdENhcmRcIlxuXHRcdFx0b25DbGljaz17KF8pID0+IFJvdXRlci5wdXNoKGAvYXJ0aWNsZXMvJHtwb3N0RGF0YS5pZH1gKX1cblx0XHQ+XG5cdFx0XHQ8aDI+e3Bvc3REYXRhLnRpdGxlfTwvaDI+XG5cdFx0XHQ8cCBjbGFzc05hbWU9XCJzdWJ0aXRsZVwiPntwb3N0RGF0YS5zdWJ0aXRsZX08L3A+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1ldGFDb250YWluZXJcIiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiB9fT5cblx0XHRcdFx0PHAgY2xhc3NOYW1lPVwidGFnc1wiPlxuXHRcdFx0XHRcdFRhZ3M6XG5cdFx0XHRcdFx0e3Bvc3REYXRhLnRhZ3MubWFwKCh4OiBzdHJpbmcpID0+IChcblx0XHRcdFx0XHRcdDxUYWcgdGFnTmFtZT17eH0gLz5cblx0XHRcdFx0XHQpKX1cblx0XHRcdFx0PC9wPlxuXHRcdFx0XHQ8cCBzdHlsZT17eyBwYWRkaW5nOiAwIH19PkRhdGUgcHVibGlzaGVkOiB7cG9zdERhdGEuZGF0ZUNyZWF0ZWR9PC9wPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl0sIm5hbWVzIjpbIlRhZyIsIlJvdXRlciIsImJ1aWxkUG9zdExpc3QiLCJwb3N0TGlzdCIsInJldmVyc2UiLCJtYXAiLCJ4IiwiQ2FyZCIsInBvc3REYXRhIiwiSG9tZSIsImRpdiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJfIiwicHVzaCIsImlkIiwiaDIiLCJ0aXRsZSIsInAiLCJzdWJ0aXRsZSIsInN0eWxlIiwiZGlzcGxheSIsInRhZ3MiLCJ0YWdOYW1lIiwicGFkZGluZyIsImRhdGVDcmVhdGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});