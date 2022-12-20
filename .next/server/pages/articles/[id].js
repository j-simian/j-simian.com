(() => {
var exports = {};
exports.id = 977;
exports.ids = [977];
exports.modules = {

/***/ 502:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ getPostData)
/* harmony export */ });
/* harmony import */ var unified__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(390);
/* harmony import */ var remark_parse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(688);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var highlight_js_styles_default_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(428);
/* harmony import */ var highlight_js_styles_default_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(highlight_js_styles_default_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var remark_rehype__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(509);
/* harmony import */ var rehype_format__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(920);
/* harmony import */ var rehype_stringify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(575);
/* harmony import */ var remark_prism__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(423);
/* harmony import */ var remark_prism__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(remark_prism__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var rehype_raw__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(871);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([unified__WEBPACK_IMPORTED_MODULE_0__, remark_parse__WEBPACK_IMPORTED_MODULE_1__, remark_rehype__WEBPACK_IMPORTED_MODULE_5__, rehype_format__WEBPACK_IMPORTED_MODULE_6__, rehype_stringify__WEBPACK_IMPORTED_MODULE_7__, rehype_raw__WEBPACK_IMPORTED_MODULE_9__]);
([unified__WEBPACK_IMPORTED_MODULE_0__, remark_parse__WEBPACK_IMPORTED_MODULE_1__, remark_rehype__WEBPACK_IMPORTED_MODULE_5__, rehype_format__WEBPACK_IMPORTED_MODULE_6__, rehype_stringify__WEBPACK_IMPORTED_MODULE_7__, rehype_raw__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










async function getPostData(id) {
    const fullPath = path__WEBPACK_IMPORTED_MODULE_3___default().join("./articles/", `${id}.mdx`);
    const fileContents = fs__WEBPACK_IMPORTED_MODULE_2___default().readFileSync(fullPath, "utf8");
    const processedContent = await (0,unified__WEBPACK_IMPORTED_MODULE_0__.unified)().use(remark_parse__WEBPACK_IMPORTED_MODULE_1__["default"]).use((remark_prism__WEBPACK_IMPORTED_MODULE_8___default())).use(remark_rehype__WEBPACK_IMPORTED_MODULE_5__["default"], {
        allowDangerousHtml: true
    }).use(rehype_raw__WEBPACK_IMPORTED_MODULE_9__["default"]).use(rehype_format__WEBPACK_IMPORTED_MODULE_6__["default"]).use(rehype_stringify__WEBPACK_IMPORTED_MODULE_7__["default"]).process(fileContents);
    let contentHtml = processedContent.toString();
    return {
        id,
        contentHtml
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 370:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Article),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_getPostData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(502);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_getPostData__WEBPACK_IMPORTED_MODULE_1__]);
_lib_getPostData__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const getStaticProps = async ({ params  })=>{
    const postData = await (0,_lib_getPostData__WEBPACK_IMPORTED_MODULE_1__/* .getPostData */ .A)(params.id);
    return {
        props: {
            postData
        }
    };
};
const getStaticPaths = async ()=>{
    const ids = [
        "1"
    ];
    let paths = ids.map((x)=>({
            params: {
                id: x
            }
        })
    );
    console.log(paths);
    return {
        paths,
        fallback: "blocking"
    };
};
function Article({ postData  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            postData.title,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
            postData.id,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                dangerouslySetInnerHTML: {
                    __html: postData.contentHtml
                }
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 428:
/***/ (() => {



/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 423:
/***/ ((module) => {

"use strict";
module.exports = require("remark-prism");

/***/ }),

/***/ 920:
/***/ ((module) => {

"use strict";
module.exports = import("rehype-format");;

/***/ }),

/***/ 871:
/***/ ((module) => {

"use strict";
module.exports = import("rehype-raw");;

/***/ }),

/***/ 575:
/***/ ((module) => {

"use strict";
module.exports = import("rehype-stringify");;

/***/ }),

/***/ 688:
/***/ ((module) => {

"use strict";
module.exports = import("remark-parse");;

/***/ }),

/***/ 509:
/***/ ((module) => {

"use strict";
module.exports = import("remark-rehype");;

/***/ }),

/***/ 390:
/***/ ((module) => {

"use strict";
module.exports = import("unified");;

/***/ }),

/***/ 147:
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ 17:
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
var __webpack_exports__ = (__webpack_exec__(370));
module.exports = __webpack_exports__;

})();