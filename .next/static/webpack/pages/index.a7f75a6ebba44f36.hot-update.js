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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _articles_id___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./articles/[id] */ \"./pages/articles/[id].tsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\n\n\nfunction buildPostList(postList) {\n    var _this1 = this;\n    return postList.reverse().map(function(x) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Card, {\n            postData: x\n        }, void 0, false, {\n            fileName: \"/Users/jsimian/dev/jsimian.com/apps/site/pages/index.tsx\",\n            lineNumber: 18,\n            columnNumber: 53\n        }, _this1);\n    });\n}\nvar Home = function(param) {\n    var postList = param.postList;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: buildPostList(postList)\n    }, void 0, false, {\n        fileName: \"/Users/jsimian/dev/jsimian.com/apps/site/pages/index.tsx\",\n        lineNumber: 22,\n        columnNumber: 9\n    }, _this);\n};\n_c = Home;\nvar Card = function(param) {\n    var postData = param.postData;\n    var _this2 = _this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"postCard\",\n        onClick: function(_) {\n            return next_router__WEBPACK_IMPORTED_MODULE_2___default().push(\"/articles/\".concat(postData.id));\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: postData.title\n            }, void 0, false, {\n                fileName: \"/Users/jsimian/dev/jsimian.com/apps/site/pages/index.tsx\",\n                lineNumber: 31,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"subtitle\",\n                children: postData.subtitle\n            }, void 0, false, {\n                fileName: \"/Users/jsimian/dev/jsimian.com/apps/site/pages/index.tsx\",\n                lineNumber: 32,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"metaContainer\",\n                style: {\n                    display: \"flex\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"tags\",\n                        children: [\n                            \"Tags:\",\n                            postData.tags.map(function(x) {\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_articles_id___WEBPACK_IMPORTED_MODULE_1__.Tag, {\n                                    tagName: x\n                                }, void 0, false, {\n                                    fileName: \"/Users/jsimian/dev/jsimian.com/apps/site/pages/index.tsx\",\n                                    lineNumber: 37,\n                                    columnNumber: 7\n                                }, _this2);\n                            })\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/jsimian/dev/jsimian.com/apps/site/pages/index.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 5\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Date published: \",\n                            postData.dateCreated\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/jsimian/dev/jsimian.com/apps/site/pages/index.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 4\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jsimian/dev/jsimian.com/apps/site/pages/index.tsx\",\n                lineNumber: 33,\n                columnNumber: 4\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jsimian/dev/jsimian.com/apps/site/pages/index.tsx\",\n        lineNumber: 27,\n        columnNumber: 3\n    }, _this);\n};\n_c1 = Card;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c, _c1;\n$RefreshReg$(_c, \"Home\");\n$RefreshReg$(_c1, \"Card\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBRXNDO0FBQ0w7QUFhakMsU0FBU0UsYUFBYSxDQUFDQyxRQUF3QixFQUFFOztJQUNoRCxPQUFPQSxRQUFRLENBQUNDLE9BQU8sRUFBRSxDQUFDQyxHQUFHLENBQUMsU0FBQ0MsQ0FBZTs2QkFBSyw4REFBQ0MsSUFBSTtZQUFDQyxRQUFRLEVBQUVGLENBQUM7Ozs7O2tCQUFJO0tBQUEsQ0FBQyxDQUFDO0NBQzFFO0FBRUQsSUFBTUcsSUFBSSxHQUFHLGdCQUFnRDtRQUE3Q04sUUFBUSxTQUFSQSxRQUFRO0lBQ3ZCLHFCQUFPLDhEQUFDTyxLQUFHO2tCQUFFUixhQUFhLENBQUNDLFFBQVEsQ0FBQzs7Ozs7YUFBTyxDQUFDO0NBQzVDO0FBRktNLEtBQUFBLElBQUk7QUFJVixJQUFNRixJQUFJLEdBQUcsZ0JBQThDO1FBQTNDQyxRQUFRLFNBQVJBLFFBQVE7O0lBQ3ZCLHFCQUNDLDhEQUFDRSxLQUFHO1FBQ0hDLFNBQVMsRUFBQyxVQUFVO1FBQ3BCQyxPQUFPLEVBQUUsU0FBQ0MsQ0FBQzttQkFBS1osdURBQVcsQ0FBQyxZQUFXLENBQWMsT0FBWk8sUUFBUSxDQUFDTyxFQUFFLENBQUUsQ0FBQztTQUFBOzswQkFFdkQsOERBQUNDLElBQUU7MEJBQUVSLFFBQVEsQ0FBQ1MsS0FBSzs7Ozs7cUJBQU07MEJBQ3pCLDhEQUFDQyxHQUFDO2dCQUFDUCxTQUFTLEVBQUMsVUFBVTswQkFBRUgsUUFBUSxDQUFDVyxRQUFROzs7OztxQkFBSzswQkFDL0MsOERBQUNULEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyxlQUFlO2dCQUFDUyxLQUFLLEVBQUU7b0JBQUVDLE9BQU8sRUFBRSxNQUFNO2lCQUFFOztrQ0FDeEQsOERBQUNILEdBQUM7d0JBQUNQLFNBQVMsRUFBQyxNQUFNOzs0QkFBQyxPQUVuQjs0QkFBQ0gsUUFBUSxDQUFDYyxJQUFJLENBQUNqQixHQUFHLENBQUMsU0FBQ0MsQ0FBUztxREFDNUIsOERBQUNOLDhDQUFHO29DQUFDdUIsT0FBTyxFQUFFakIsQ0FBQzs7Ozs7MENBQUk7NkJBQ25CLENBQUM7Ozs7Ozs2QkFDQztrQ0FDTCw4REFBQ1ksR0FBQzs7NEJBQUMsa0JBQWdCOzRCQUFDVixRQUFRLENBQUNnQixXQUFXOzs7Ozs7NkJBQUs7Ozs7OztxQkFDdkM7Ozs7OzthQUNELENBQ0w7Q0FDRjtBQW5CS2pCLE1BQUFBLElBQUk7O0FBcUJWLCtEQUFlRSxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBHZXRTdGF0aWNQcm9wcyB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgeyBnZXRQb3N0TGlzdCwgZ2V0UG9zdE1ldGFkYXRhLCBQb3N0TWV0YWRhdGEgfSBmcm9tIFwiLi4vbGliL2dldFBvc3REYXRhXCI7XG5pbXBvcnQgeyBUYWcgfSBmcm9tIFwiLi9hcnRpY2xlcy9baWRdXCI7XG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzID0gYXN5bmMgKHsgcGFyYW1zIH0pID0+IHtcblx0Y29uc3QgcG9zdElkcyA9IGF3YWl0IGdldFBvc3RMaXN0KCk7XG5cdGNvbnN0IHBvc3RMaXN0OiBQb3N0TWV0YWRhdGFbXSA9IFtdO1xuXHRmb3IgKGxldCB4IGluIHBvc3RJZHMpIHtcblx0XHRwb3N0TGlzdC5wdXNoKGF3YWl0IGdldFBvc3RNZXRhZGF0YSh4KSk7XG5cdH1cblx0cmV0dXJuIHtcblx0XHRwcm9wczogeyBwb3N0TGlzdDogcG9zdExpc3QgfSxcblx0fTtcbn07XG5cbmZ1bmN0aW9uIGJ1aWxkUG9zdExpc3QocG9zdExpc3Q6IFBvc3RNZXRhZGF0YVtdKSB7XG5cdHJldHVybiBwb3N0TGlzdC5yZXZlcnNlKCkubWFwKCh4OiBQb3N0TWV0YWRhdGEpID0+IDxDYXJkIHBvc3REYXRhPXt4fSAvPik7XG59XG5cbmNvbnN0IEhvbWUgPSAoeyBwb3N0TGlzdCB9OiB7IHBvc3RMaXN0OiBQb3N0TWV0YWRhdGFbXSB9KSA9PiB7XG5cdHJldHVybiA8ZGl2PntidWlsZFBvc3RMaXN0KHBvc3RMaXN0KX08L2Rpdj47XG59O1xuXG5jb25zdCBDYXJkID0gKHsgcG9zdERhdGEgfTogeyBwb3N0RGF0YTogUG9zdE1ldGFkYXRhIH0pID0+IHtcblx0cmV0dXJuIChcblx0XHQ8ZGl2XG5cdFx0XHRjbGFzc05hbWU9XCJwb3N0Q2FyZFwiXG5cdFx0XHRvbkNsaWNrPXsoXykgPT4gUm91dGVyLnB1c2goYC9hcnRpY2xlcy8ke3Bvc3REYXRhLmlkfWApfVxuXHRcdD5cblx0XHRcdDxoMj57cG9zdERhdGEudGl0bGV9PC9oMj5cblx0XHRcdDxwIGNsYXNzTmFtZT1cInN1YnRpdGxlXCI+e3Bvc3REYXRhLnN1YnRpdGxlfTwvcD5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWV0YUNvbnRhaW5lclwiIHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiIH19PlxuXHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJ0YWdzXCI+XG5cdFx0XHRcdFx0VGFnczpcblx0XHRcdFx0XHR7cG9zdERhdGEudGFncy5tYXAoKHg6IHN0cmluZykgPT4gKFxuXHRcdFx0XHRcdFx0PFRhZyB0YWdOYW1lPXt4fSAvPlxuXHRcdFx0XHRcdCkpfVxuXHRcdFx0XHQ8L3A+XG5cdFx0XHQ8cD5EYXRlIHB1Ymxpc2hlZDoge3Bvc3REYXRhLmRhdGVDcmVhdGVkfTwvcD5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJuYW1lcyI6WyJUYWciLCJSb3V0ZXIiLCJidWlsZFBvc3RMaXN0IiwicG9zdExpc3QiLCJyZXZlcnNlIiwibWFwIiwieCIsIkNhcmQiLCJwb3N0RGF0YSIsIkhvbWUiLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiXyIsInB1c2giLCJpZCIsImgyIiwidGl0bGUiLCJwIiwic3VidGl0bGUiLCJzdHlsZSIsImRpc3BsYXkiLCJ0YWdzIiwidGFnTmFtZSIsImRhdGVDcmVhdGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});