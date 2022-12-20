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
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getPostData\": () => (/* binding */ getPostData),\n/* harmony export */   \"getPostList\": () => (/* binding */ getPostList),\n/* harmony export */   \"getPostMetadata\": () => (/* binding */ getPostMetadata)\n/* harmony export */ });\n/* harmony import */ var unified__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! unified */ \"unified\");\n/* harmony import */ var remark_parse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! remark-parse */ \"remark-parse\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var highlight_js_styles_default_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! highlight.js/styles/default.css */ \"./node_modules/highlight.js/styles/default.css\");\n/* harmony import */ var highlight_js_styles_default_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(highlight_js_styles_default_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var remark_rehype__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! remark-rehype */ \"remark-rehype\");\n/* harmony import */ var rehype_format__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rehype-format */ \"rehype-format\");\n/* harmony import */ var rehype_stringify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rehype-stringify */ \"rehype-stringify\");\n/* harmony import */ var remark_prism__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! remark-prism */ \"remark-prism\");\n/* harmony import */ var remark_prism__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(remark_prism__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var rehype_raw__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rehype-raw */ \"rehype-raw\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([unified__WEBPACK_IMPORTED_MODULE_0__, remark_parse__WEBPACK_IMPORTED_MODULE_1__, remark_rehype__WEBPACK_IMPORTED_MODULE_5__, rehype_format__WEBPACK_IMPORTED_MODULE_6__, rehype_stringify__WEBPACK_IMPORTED_MODULE_7__, rehype_raw__WEBPACK_IMPORTED_MODULE_9__]);\n([unified__WEBPACK_IMPORTED_MODULE_0__, remark_parse__WEBPACK_IMPORTED_MODULE_1__, remark_rehype__WEBPACK_IMPORTED_MODULE_5__, rehype_format__WEBPACK_IMPORTED_MODULE_6__, rehype_stringify__WEBPACK_IMPORTED_MODULE_7__, rehype_raw__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\n\n\n\nasync function getPostData(id) {\n    const fullPath = path__WEBPACK_IMPORTED_MODULE_3___default().join(\"./articles/\", `${id}.mdx`);\n    const fileContents = fs__WEBPACK_IMPORTED_MODULE_2___default().readFileSync(fullPath, \"utf8\");\n    const processedContent = await (0,unified__WEBPACK_IMPORTED_MODULE_0__.unified)().use(remark_parse__WEBPACK_IMPORTED_MODULE_1__[\"default\"]).use((remark_prism__WEBPACK_IMPORTED_MODULE_8___default())).use(remark_rehype__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        allowDangerousHtml: true\n    }).use(rehype_raw__WEBPACK_IMPORTED_MODULE_9__[\"default\"]).use(rehype_format__WEBPACK_IMPORTED_MODULE_6__[\"default\"]).use(rehype_stringify__WEBPACK_IMPORTED_MODULE_7__[\"default\"]).process(fileContents);\n    let contentHtml = processedContent.toString();\n    let metadata = await getPostMetadata(id);\n    return {\n        contentHtml,\n        metadata\n    };\n}\nasync function getPostMetadata(id) {\n    return {\n        ...JSON.parse(fs__WEBPACK_IMPORTED_MODULE_2___default().readFileSync(path__WEBPACK_IMPORTED_MODULE_3___default().join(\"./articles/\", \"metadata.json\"), \"utf8\")).articles[id],\n        id: id\n    };\n}\nasync function getPostList() {\n    let articles = JSON.parse(fs__WEBPACK_IMPORTED_MODULE_2___default().readFileSync(path__WEBPACK_IMPORTED_MODULE_3___default().join(\"./articles/\", \"metadata.json\"), \"utf8\")).articles;\n    return Object.keys(articles);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvZ2V0UG9zdERhdGEudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBa0M7QUFDSztBQUNuQjtBQUNJO0FBQ2lCO0FBQ0E7QUFDQTtBQUNNO0FBQ1I7QUFDSjtBQWU1QixlQUFlUyxXQUFXLENBQUNDLEVBQVUsRUFBaUI7SUFDNUQsTUFBTUMsUUFBUSxHQUFHUixnREFBUyxDQUFDLGFBQWEsRUFBRSxDQUFDLEVBQUVPLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0RCxNQUFNRyxZQUFZLEdBQUdYLHNEQUFlLENBQUNTLFFBQVEsRUFBRSxNQUFNLENBQUM7SUFFdEQsTUFBTUksZ0JBQWdCLEdBQUcsTUFBTWYsZ0RBQU8sRUFBRSxDQUN0Q2dCLEdBQUcsQ0FBQ2Ysb0RBQVcsQ0FBQyxDQUNoQmUsR0FBRyxDQUFDVCxxREFBVyxDQUFDLENBQ2hCUyxHQUFHLENBQUNaLHFEQUFZLEVBQUU7UUFBRWEsa0JBQWtCLEVBQUUsSUFBSTtLQUFFLENBQUMsQ0FDL0NELEdBQUcsQ0FBQ1Isa0RBQVMsQ0FBQyxDQUNkUSxHQUFHLENBQUNYLHFEQUFZLENBQUMsQ0FDakJXLEdBQUcsQ0FBQ1Ysd0RBQWUsQ0FBQyxDQUNwQlksT0FBTyxDQUFDTCxZQUFZLENBQUM7SUFDdkIsSUFBSU0sV0FBVyxHQUFHSixnQkFBZ0IsQ0FBQ0ssUUFBUSxFQUFFO0lBQzdDLElBQUlDLFFBQVEsR0FBRyxNQUFNQyxlQUFlLENBQUNaLEVBQUUsQ0FBQztJQUV4QyxPQUFPO1FBQ05TLFdBQVc7UUFDWEUsUUFBUTtLQUNSLENBQUM7Q0FDRjtBQUVNLGVBQWVDLGVBQWUsQ0FBQ1osRUFBVSxFQUF5QjtJQUN4RSxPQUFPO1FBQ04sR0FBR2EsSUFBSSxDQUFDQyxLQUFLLENBQ1p0QixzREFBZSxDQUFDQyxnREFBUyxDQUFDLGFBQWEsRUFBRSxlQUFlLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FDbEUsQ0FBQ3NCLFFBQVEsQ0FBQ2YsRUFBRSxDQUFDO1FBQ2RBLEVBQUUsRUFBRUEsRUFBRTtLQUNOLENBQUM7Q0FDRjtBQUVNLGVBQWVnQixXQUFXLEdBQXNCO0lBQ3RELElBQUlELFFBQVEsR0FBR0YsSUFBSSxDQUFDQyxLQUFLLENBQ3hCdEIsc0RBQWUsQ0FBQ0MsZ0RBQVMsQ0FBQyxhQUFhLEVBQUUsZUFBZSxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQ2xFLENBQUNzQixRQUFRO0lBQ1YsT0FBT0UsTUFBTSxDQUFDQyxJQUFJLENBQUNILFFBQVEsQ0FBQyxDQUFDO0NBQzdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanNpbWlhbi5jb20vLi9saWIvZ2V0UG9zdERhdGEudHM/MzAwOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1bmlmaWVkIH0gZnJvbSBcInVuaWZpZWRcIjtcbmltcG9ydCByZW1hcmtQYXJzZSBmcm9tIFwicmVtYXJrLXBhcnNlXCI7XG5pbXBvcnQgZnMgZnJvbSBcImZzXCI7XG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xuaW1wb3J0IFwiaGlnaGxpZ2h0LmpzL3N0eWxlcy9kZWZhdWx0LmNzc1wiO1xuaW1wb3J0IHJlbWFya1JlaHlwZSBmcm9tIFwicmVtYXJrLXJlaHlwZVwiO1xuaW1wb3J0IHJlaHlwZUZvcm1hdCBmcm9tIFwicmVoeXBlLWZvcm1hdFwiO1xuaW1wb3J0IHJlaHlwZVN0cmluZ2lmeSBmcm9tIFwicmVoeXBlLXN0cmluZ2lmeVwiO1xuaW1wb3J0IHJlbWFya1ByaXNtIGZyb20gXCJyZW1hcmstcHJpc21cIjtcbmltcG9ydCByZWh5cGVSYXcgZnJvbSBcInJlaHlwZS1yYXdcIjtcblxuZXhwb3J0IHR5cGUgUG9zdE1ldGFkYXRhID0ge1xuXHRpZDogc3RyaW5nO1xuXHRkYXRlQ3JlYXRlZDogc3RyaW5nO1xuXHR0aXRsZTogc3RyaW5nO1xuXHRzdWJ0aXRsZT86IHN0cmluZztcblx0aGlkZGVuPzogc3RyaW5nO1xuXHR0YWdzOiBzdHJpbmdbXTtcbn07XG5leHBvcnQgdHlwZSBQb3N0ID0ge1xuXHRjb250ZW50SHRtbDogc3RyaW5nO1xuXHRtZXRhZGF0YTogUG9zdE1ldGFkYXRhO1xufTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFBvc3REYXRhKGlkOiBzdHJpbmcpOiBQcm9taXNlPFBvc3Q+IHtcblx0Y29uc3QgZnVsbFBhdGggPSBwYXRoLmpvaW4oXCIuL2FydGljbGVzL1wiLCBgJHtpZH0ubWR4YCk7XG5cdGNvbnN0IGZpbGVDb250ZW50cyA9IGZzLnJlYWRGaWxlU3luYyhmdWxsUGF0aCwgXCJ1dGY4XCIpO1xuXG5cdGNvbnN0IHByb2Nlc3NlZENvbnRlbnQgPSBhd2FpdCB1bmlmaWVkKClcblx0XHQudXNlKHJlbWFya1BhcnNlKVxuXHRcdC51c2UocmVtYXJrUHJpc20pXG5cdFx0LnVzZShyZW1hcmtSZWh5cGUsIHsgYWxsb3dEYW5nZXJvdXNIdG1sOiB0cnVlIH0pXG5cdFx0LnVzZShyZWh5cGVSYXcpXG5cdFx0LnVzZShyZWh5cGVGb3JtYXQpXG5cdFx0LnVzZShyZWh5cGVTdHJpbmdpZnkpXG5cdFx0LnByb2Nlc3MoZmlsZUNvbnRlbnRzKTtcblx0bGV0IGNvbnRlbnRIdG1sID0gcHJvY2Vzc2VkQ29udGVudC50b1N0cmluZygpO1xuXHRsZXQgbWV0YWRhdGEgPSBhd2FpdCBnZXRQb3N0TWV0YWRhdGEoaWQpO1xuXG5cdHJldHVybiB7XG5cdFx0Y29udGVudEh0bWwsXG5cdFx0bWV0YWRhdGEsXG5cdH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQb3N0TWV0YWRhdGEoaWQ6IHN0cmluZyk6IFByb21pc2U8UG9zdE1ldGFkYXRhPiB7XG5cdHJldHVybiB7XG5cdFx0Li4uSlNPTi5wYXJzZShcblx0XHRcdGZzLnJlYWRGaWxlU3luYyhwYXRoLmpvaW4oXCIuL2FydGljbGVzL1wiLCBcIm1ldGFkYXRhLmpzb25cIiksIFwidXRmOFwiKVxuXHRcdCkuYXJ0aWNsZXNbaWRdLFxuXHRcdGlkOiBpZCxcblx0fTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFBvc3RMaXN0KCk6IFByb21pc2U8c3RyaW5nW10+IHtcblx0bGV0IGFydGljbGVzID0gSlNPTi5wYXJzZShcblx0XHRmcy5yZWFkRmlsZVN5bmMocGF0aC5qb2luKFwiLi9hcnRpY2xlcy9cIiwgXCJtZXRhZGF0YS5qc29uXCIpLCBcInV0ZjhcIilcblx0KS5hcnRpY2xlcztcblx0cmV0dXJuIE9iamVjdC5rZXlzKGFydGljbGVzKTtcbn1cbiJdLCJuYW1lcyI6WyJ1bmlmaWVkIiwicmVtYXJrUGFyc2UiLCJmcyIsInBhdGgiLCJyZW1hcmtSZWh5cGUiLCJyZWh5cGVGb3JtYXQiLCJyZWh5cGVTdHJpbmdpZnkiLCJyZW1hcmtQcmlzbSIsInJlaHlwZVJhdyIsImdldFBvc3REYXRhIiwiaWQiLCJmdWxsUGF0aCIsImpvaW4iLCJmaWxlQ29udGVudHMiLCJyZWFkRmlsZVN5bmMiLCJwcm9jZXNzZWRDb250ZW50IiwidXNlIiwiYWxsb3dEYW5nZXJvdXNIdG1sIiwicHJvY2VzcyIsImNvbnRlbnRIdG1sIiwidG9TdHJpbmciLCJtZXRhZGF0YSIsImdldFBvc3RNZXRhZGF0YSIsIkpTT04iLCJwYXJzZSIsImFydGljbGVzIiwiZ2V0UG9zdExpc3QiLCJPYmplY3QiLCJrZXlzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/getPostData.ts\n");

/***/ }),

/***/ "./pages/articles/[id].tsx":
/*!*********************************!*\
  !*** ./pages/articles/[id].tsx ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Tag\": () => (/* binding */ Tag),\n/* harmony export */   \"default\": () => (/* binding */ Article),\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_getPostData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/getPostData */ \"./lib/getPostData.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_getPostData__WEBPACK_IMPORTED_MODULE_1__]);\n_lib_getPostData__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst getStaticProps = async ({ params  })=>{\n    const postData = await (0,_lib_getPostData__WEBPACK_IMPORTED_MODULE_1__.getPostData)(params.id);\n    return {\n        props: {\n            postData\n        }\n    };\n};\nconst getStaticPaths = async ()=>{\n    const ids = await (0,_lib_getPostData__WEBPACK_IMPORTED_MODULE_1__.getPostList)();\n    let paths = ids.map((x)=>({\n            params: {\n                id: x\n            }\n        })\n    );\n    console.log(paths);\n    return {\n        paths,\n        fallback: \"blocking\"\n    };\n};\nfunction Article({ postData  }) {\n    console.log(postData.metadata);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: \"header\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: postData.metadata.title\n                    }, void 0, false, {\n                        fileName: \"/Users/jsimian/dev/jsimian.com/apps/site/pages/articles/[id].tsx\",\n                        lineNumber: 23,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"datePublished\",\n                        children: [\n                            \" \",\n                            \"First published on: \",\n                            postData.metadata.dateCreated,\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/jsimian/dev/jsimian.com/apps/site/pages/articles/[id].tsx\",\n                        lineNumber: 24,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"tags\",\n                        children: [\n                            \"Tags:\",\n                            postData.metadata.tags.map((x)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Tag, {\n                                    tagName: x\n                                }, void 0, false, {\n                                    fileName: \"/Users/jsimian/dev/jsimian.com/apps/site/pages/articles/[id].tsx\",\n                                    lineNumber: 31,\n                                    columnNumber: 7\n                                }, this)\n                            )\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/jsimian/dev/jsimian.com/apps/site/pages/articles/[id].tsx\",\n                        lineNumber: 28,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jsimian/dev/jsimian.com/apps/site/pages/articles/[id].tsx\",\n                lineNumber: 22,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                dangerouslySetInnerHTML: {\n                    __html: postData.contentHtml\n                }\n            }, void 0, false, {\n                fileName: \"/Users/jsimian/dev/jsimian.com/apps/site/pages/articles/[id].tsx\",\n                lineNumber: 35,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true);\n};\nconst Tag = ({ tagName  })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"code\", {\n        className: \"tagElement\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n            children: [\n                \"#\",\n                tagName\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/jsimian/dev/jsimian.com/apps/site/pages/articles/[id].tsx\",\n            lineNumber: 43,\n            columnNumber: 4\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/jsimian/dev/jsimian.com/apps/site/pages/articles/[id].tsx\",\n        lineNumber: 42,\n        columnNumber: 3\n    }, undefined);\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcnRpY2xlcy9baWRdLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFBdUU7QUFHaEUsTUFBTUUsY0FBYyxHQUFtQixPQUFPLEVBQUVDLE1BQU0sR0FBRSxHQUFLO0lBQ25FLE1BQU1DLFFBQVEsR0FBRyxNQUFNSiw2REFBVyxDQUFDRyxNQUFNLENBQUVFLEVBQUUsQ0FBVztJQUV4RCxPQUFPO1FBQUVDLEtBQUssRUFBRTtZQUFFRixRQUFRO1NBQUU7S0FBRSxDQUFDO0NBQy9CLENBQUM7QUFFSyxNQUFNRyxjQUFjLEdBQW1DLFVBQVk7SUFDekUsTUFBTUMsR0FBRyxHQUFHLE1BQU1QLDZEQUFXLEVBQUU7SUFDL0IsSUFBSVEsS0FBSyxHQUFRRCxHQUFHLENBQUNFLEdBQUcsQ0FBQyxDQUFDQyxDQUFTLEdBQUssQ0FBQztZQUFFUixNQUFNLEVBQUU7Z0JBQUVFLEVBQUUsRUFBRU0sQ0FBQzthQUFFO1NBQUUsQ0FBQztJQUFBLENBQUM7SUFDaEVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSixLQUFLLENBQUMsQ0FBQztJQUVuQixPQUFPO1FBQUVBLEtBQUs7UUFBRUssUUFBUSxFQUFFLFVBQVU7S0FBRSxDQUFDO0NBQ3ZDLENBQUM7QUFFYSxTQUFTQyxPQUFPLENBQUMsRUFBRVgsUUFBUSxHQUFzQixFQUFFO0lBQ2pFUSxPQUFPLENBQUNDLEdBQUcsQ0FBQ1QsUUFBUSxDQUFDWSxRQUFRLENBQUMsQ0FBQztJQUMvQixxQkFDQzs7MEJBQ0MsOERBQUNDLFFBQU07Z0JBQUNDLFNBQVMsRUFBQyxRQUFROztrQ0FDekIsOERBQUNDLElBQUU7a0NBQUVmLFFBQVEsQ0FBQ1ksUUFBUSxDQUFDSSxLQUFLOzs7Ozs0QkFBTTtrQ0FDbEMsOERBQUNDLEdBQUM7d0JBQUNILFNBQVMsRUFBQyxlQUFlOzs0QkFDMUIsR0FBRzs0QkFBQyxzQkFDZTs0QkFBQ2QsUUFBUSxDQUFDWSxRQUFRLENBQUNNLFdBQVc7NEJBQUUsR0FBRzs7Ozs7OzRCQUNwRDtrQ0FDSiw4REFBQ0QsR0FBQzt3QkFBQ0gsU0FBUyxFQUFDLE1BQU07OzRCQUFDLE9BRW5COzRCQUFDZCxRQUFRLENBQUNZLFFBQVEsQ0FBQ08sSUFBSSxDQUFDYixHQUFHLENBQUMsQ0FBQ0MsQ0FBUyxpQkFDckMsOERBQUNhLEdBQUc7b0NBQUNDLE9BQU8sRUFBRWQsQ0FBQzs7Ozs7d0NBQUk7NEJBQ25CLENBQUM7Ozs7Ozs0QkFDQzs7Ozs7O29CQUNJOzBCQUNULDhEQUFDZSxLQUFHO2dCQUFDQyx1QkFBdUIsRUFBRTtvQkFBRUMsTUFBTSxFQUFFeEIsUUFBUSxDQUFDeUIsV0FBVztpQkFBRTs7Ozs7b0JBQUk7O29CQUNoRSxDQUNGO0NBQ0Y7QUFFTSxNQUFNTCxHQUFHLEdBQUcsQ0FBQyxFQUFFQyxPQUFPLEdBQXVCLEdBQUs7SUFDeEQscUJBQ0MsOERBQUNLLE1BQUk7UUFBQ1osU0FBUyxFQUFDLFlBQVk7a0JBQzNCLDRFQUFDYSxHQUFDOztnQkFBQyxHQUFDO2dCQUFDTixPQUFPOzs7Ozs7cUJBQUs7Ozs7O2lCQUNYLENBQ047Q0FDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanNpbWlhbi5jb20vLi9wYWdlcy9hcnRpY2xlcy9baWRdLnRzeD84YjQ4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldFBvc3REYXRhLCBnZXRQb3N0TGlzdCwgUG9zdCB9IGZyb20gXCIuLi8uLi9saWIvZ2V0UG9zdERhdGFcIjtcbmltcG9ydCB7IEdldFN0YXRpY1BhdGhzLCBHZXRTdGF0aWNQcm9wcyB9IGZyb20gXCJuZXh0XCI7XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wczogR2V0U3RhdGljUHJvcHMgPSBhc3luYyAoeyBwYXJhbXMgfSkgPT4ge1xuXHRjb25zdCBwb3N0RGF0YSA9IGF3YWl0IGdldFBvc3REYXRhKHBhcmFtcyEuaWQgYXMgc3RyaW5nKTtcblxuXHRyZXR1cm4geyBwcm9wczogeyBwb3N0RGF0YSB9IH07XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHM6IEdldFN0YXRpY1BhdGhzPHsgaWQ6IHN0cmluZyB9PiA9IGFzeW5jICgpID0+IHtcblx0Y29uc3QgaWRzID0gYXdhaXQgZ2V0UG9zdExpc3QoKTtcblx0bGV0IHBhdGhzOiBhbnkgPSBpZHMubWFwKCh4OiBzdHJpbmcpID0+ICh7IHBhcmFtczogeyBpZDogeCB9IH0pKTtcblx0Y29uc29sZS5sb2cocGF0aHMpO1xuXG5cdHJldHVybiB7IHBhdGhzLCBmYWxsYmFjazogXCJibG9ja2luZ1wiIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcnRpY2xlKHsgcG9zdERhdGEgfTogeyBwb3N0RGF0YTogUG9zdCB9KSB7XG5cdGNvbnNvbGUubG9nKHBvc3REYXRhLm1ldGFkYXRhKTtcblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PGhlYWRlciBjbGFzc05hbWU9XCJoZWFkZXJcIj5cblx0XHRcdFx0PGgxPntwb3N0RGF0YS5tZXRhZGF0YS50aXRsZX08L2gxPlxuXHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJkYXRlUHVibGlzaGVkXCI+XG5cdFx0XHRcdFx0e1wiIFwifVxuXHRcdFx0XHRcdEZpcnN0IHB1Ymxpc2hlZCBvbjoge3Bvc3REYXRhLm1ldGFkYXRhLmRhdGVDcmVhdGVkfXtcIiBcIn1cblx0XHRcdFx0PC9wPlxuXHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJ0YWdzXCI+XG5cdFx0XHRcdFx0VGFnczpcblx0XHRcdFx0XHR7cG9zdERhdGEubWV0YWRhdGEudGFncy5tYXAoKHg6IHN0cmluZykgPT4gKFxuXHRcdFx0XHRcdFx0PFRhZyB0YWdOYW1lPXt4fSAvPlxuXHRcdFx0XHRcdCkpfVxuXHRcdFx0XHQ8L3A+XG5cdFx0XHQ8L2hlYWRlcj5cblx0XHRcdDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBwb3N0RGF0YS5jb250ZW50SHRtbCB9fSAvPlxuXHRcdDwvPlxuXHQpO1xufVxuXG5leHBvcnQgY29uc3QgVGFnID0gKHsgdGFnTmFtZSB9OiB7IHRhZ05hbWU6IHN0cmluZyB9KSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PGNvZGUgY2xhc3NOYW1lPVwidGFnRWxlbWVudFwiPlxuXHRcdFx0PGE+I3t0YWdOYW1lfTwvYT5cblx0XHQ8L2NvZGU+XG5cdCk7XG59O1xuIl0sIm5hbWVzIjpbImdldFBvc3REYXRhIiwiZ2V0UG9zdExpc3QiLCJnZXRTdGF0aWNQcm9wcyIsInBhcmFtcyIsInBvc3REYXRhIiwiaWQiLCJwcm9wcyIsImdldFN0YXRpY1BhdGhzIiwiaWRzIiwicGF0aHMiLCJtYXAiLCJ4IiwiY29uc29sZSIsImxvZyIsImZhbGxiYWNrIiwiQXJ0aWNsZSIsIm1ldGFkYXRhIiwiaGVhZGVyIiwiY2xhc3NOYW1lIiwiaDEiLCJ0aXRsZSIsInAiLCJkYXRlQ3JlYXRlZCIsInRhZ3MiLCJUYWciLCJ0YWdOYW1lIiwiZGl2IiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJjb250ZW50SHRtbCIsImNvZGUiLCJhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/articles/[id].tsx\n");

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