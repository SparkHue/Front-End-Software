"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/about",{

/***/ "./layouts/Main.tsx":
/*!**************************!*\
  !*** ./layouts/Main.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MainLayout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Header */ \"./components/Header.tsx\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Footer */ \"./components/Footer.tsx\");\n/* harmony import */ var _components_Alert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Alert */ \"./components/Alert.tsx\");\n/* harmony import */ var _hooks_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../hooks/redux */ \"./hooks/redux.ts\");\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.m.js\");\n/* harmony import */ var _components_asideMenu_Backdrop__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/asideMenu/Backdrop */ \"./components/asideMenu/Backdrop.tsx\");\n/* harmony import */ var _components_HorizontalMenu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/HorizontalMenu */ \"./components/HorizontalMenu.tsx\");\n/* harmony import */ var _components_header_CallToOrder__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/header/CallToOrder */ \"./components/header/CallToOrder.tsx\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _redux_reducers_app__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../redux/reducers/app */ \"./redux/reducers/app.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst shopBaseUrl =  false || \"\";\nconst AsideMenu = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(()=>__webpack_require__.e(/*! import() */ \"components_AsideMenu_tsx\").then(__webpack_require__.bind(__webpack_require__, /*! ../components/AsideMenu */ \"./components/AsideMenu.tsx\")), {\n    loadableGenerated: {\n        modules: [\n            \"../layouts/Main.tsx -> \" + \"../components/AsideMenu\"\n        ]\n    },\n    ssr: false\n});\n_c = AsideMenu;\nfunction MainLayout(param) {\n    let { children, title, metaData, mainMenu, footerMenu, noIndex, basicSettings } = param;\n    _s();\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_12__.useDispatch)();\n    const { canonicalUrl, imgUrl, description } = metaData || {};\n    const asideIsOpened = (0,_hooks_redux__WEBPACK_IMPORTED_MODULE_7__.useAppSelector)((state)=>state.asideMenu.isOpened);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (basicSettings) {\n            dispatch((0,_redux_reducers_app__WEBPACK_IMPORTED_MODULE_13__.setBasicSettings)(basicSettings));\n        }\n    }, [\n        dispatch,\n        basicSettings\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        charSet: \"UTF-8\"\n                    }, void 0, false, {\n                        fileName: \"/home/chandan/Downloads/apps/website/layouts/Main.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1.0\"\n                    }, void 0, false, {\n                        fileName: \"/home/chandan/Downloads/apps/website/layouts/Main.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        httpEquiv: \"X-UA-Compatible\",\n                        content: \"ie=edge\"\n                    }, void 0, false, {\n                        fileName: \"/home/chandan/Downloads/apps/website/layouts/Main.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"apple-touch-icon\",\n                        href: \"fabicon.png\"\n                    }, void 0, false, {\n                        fileName: \"/home/chandan/Downloads/apps/website/layouts/Main.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        type: \"image/png\",\n                        href: \"/favicon.png\"\n                    }, void 0, false, {\n                        fileName: \"/home/chandan/Downloads/apps/website/layouts/Main.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        type: \"image/png\",\n                        href: \"/favicon.png\"\n                    }, void 0, false, {\n                        fileName: \"/home/chandan/Downloads/apps/website/layouts/Main.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"manifest\",\n                        href: \"/site.webmanifest\"\n                    }, void 0, false, {\n                        fileName: \"/home/chandan/Downloads/apps/website/layouts/Main.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"mask-icon\",\n                        href: \"/favicon.png\",\n                        color: \"#5bbad5\"\n                    }, void 0, false, {\n                        fileName: \"/home/chandan/Downloads/apps/website/layouts/Main.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, this),\n                    canonicalUrl && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"canonical\",\n                        href: canonicalUrl\n                    }, void 0, false, {\n                        fileName: \"/home/chandan/Downloads/apps/website/layouts/Main.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 26\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"msapplication-TileColor\",\n                        content: \"#da532c\"\n                    }, void 0, false, {\n                        fileName: \"/home/chandan/Downloads/apps/website/layouts/Main.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"theme-color\",\n                        content: \"#ffffff\"\n                    }, void 0, false, {\n                        fileName: \"/home/chandan/Downloads/apps/website/layouts/Main.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        property: \"og:type\",\n                        content: \"website\"\n                    }, void 0, false, {\n                        fileName: \"/home/chandan/Downloads/apps/website/layouts/Main.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        property: \"og:author\",\n                        content: \"Lacspace\"\n                    }, void 0, false, {\n                        fileName: \"/home/chandan/Downloads/apps/website/layouts/Main.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        property: \"og:title\",\n                        content: title || \"SparkHue | Discover The Spark In Every Purchase. Shop unlimited items just in few clicks. We are here to serve you the best quality product.\"\n                    }, void 0, false, {\n                        fileName: \"/home/chandan/Downloads/apps/website/layouts/Main.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        property: \"og:url\",\n                        content: canonicalUrl || shopBaseUrl\n                    }, void 0, false, {\n                        fileName: \"/home/chandan/Downloads/apps/website/layouts/Main.tsx\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        property: \"og:image\",\n                        content: imgUrl || shopBaseUrl + \"/SparkHue_Logo.png\"\n                    }, void 0, false, {\n                        fileName: \"/home/chandan/Downloads/apps/website/layouts/Main.tsx\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    }, this),\n                    description && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        property: \"og:description\",\n                        content: description\n                    }, void 0, false, {\n                        fileName: \"/home/chandan/Downloads/apps/website/layouts/Main.tsx\",\n                        lineNumber: 76,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: title || \"SparkHue | Discover The Spark In Every Purchase. Shop unlimited items just in few clicks. We are here to serve you the best items in quality product.\"\n                    }, void 0, false, {\n                        fileName: \"/home/chandan/Downloads/apps/website/layouts/Main.tsx\",\n                        lineNumber: 79,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"preconnect\",\n                        href:  false || \"https://api.boundless-commerce.com\",\n                        crossOrigin: \"use-credentials\"\n                    }, void 0, false, {\n                        fileName: \"/home/chandan/Downloads/apps/website/layouts/Main.tsx\",\n                        lineNumber: 84,\n                        columnNumber: 9\n                    }, this),\n                    noIndex && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"robots\",\n                        content: \"noindex\"\n                    }, void 0, false, {\n                        fileName: \"/home/chandan/Downloads/apps/website/layouts/Main.tsx\",\n                        lineNumber: 92,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/chandan/Downloads/apps/website/layouts/Main.tsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Alert__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/chandan/Downloads/apps/website/layouts/Main.tsx\",\n                lineNumber: 94,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (0,clsx__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(\"page-layout page-layout_main mars-full-theme\", {\n                    \"page-layout_aside-opened\": asideIsOpened\n                }),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header_CallToOrder__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {}, void 0, false, {\n                        fileName: \"/home/chandan/Downloads/apps/website/layouts/Main.tsx\",\n                        lineNumber: 100,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                        fileName: \"/home/chandan/Downloads/apps/website/layouts/Main.tsx\",\n                        lineNumber: 101,\n                        columnNumber: 9\n                    }, this),\n                    mainMenu && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_HorizontalMenu__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                        menuList: mainMenu\n                    }, void 0, false, {\n                        fileName: \"/home/chandan/Downloads/apps/website/layouts/Main.tsx\",\n                        lineNumber: 102,\n                        columnNumber: 22\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                        className: \"page-layout__main\",\n                        children: children\n                    }, void 0, false, {\n                        fileName: \"/home/chandan/Downloads/apps/website/layouts/Main.tsx\",\n                        lineNumber: 103,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        menuList: footerMenu\n                    }, void 0, false, {\n                        fileName: \"/home/chandan/Downloads/apps/website/layouts/Main.tsx\",\n                        lineNumber: 104,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_asideMenu_Backdrop__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                        fileName: \"/home/chandan/Downloads/apps/website/layouts/Main.tsx\",\n                        lineNumber: 105,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/chandan/Downloads/apps/website/layouts/Main.tsx\",\n                lineNumber: 95,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AsideMenu, {\n                menuList: mainMenu\n            }, void 0, false, {\n                fileName: \"/home/chandan/Downloads/apps/website/layouts/Main.tsx\",\n                lineNumber: 107,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(MainLayout, \"P+sQrCeH45z1J8eSVSfkpPub3yY=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_12__.useDispatch,\n        _hooks_redux__WEBPACK_IMPORTED_MODULE_7__.useAppSelector\n    ];\n});\n_c1 = MainLayout;\nvar _c, _c1;\n$RefreshReg$(_c, \"AsideMenu\");\n$RefreshReg$(_c1, \"MainLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFVBQVUzQjs7Ozs7O2tDQUN2Qyw4REFBQzRCO3dCQUFLRixXQUFVO2tDQUFxQjdCOzs7Ozs7a0NBQ3JDLDhEQUFDaEIsMERBQU1BO3dCQUFDOEMsVUFBVTFCOzs7Ozs7a0NBQ2xCLDhEQUFDaEIsc0VBQWFBOzs7Ozs7Ozs7OzswQkFFaEIsOERBQUNTO2dCQUFVaUMsVUFBVTNCOzs7Ozs7OztBQUczQjtHQXRGd0JKOztRQVNMUixxREFBV0E7UUFFTkwsd0RBQWNBOzs7TUFYZGEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGF5b3V0cy9NYWluLnRzeD8yNjBmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkeW5hbWljIGZyb20gXCJuZXh0L2R5bmFtaWNcIjtcbmltcG9ydCB7IFJlYWN0Tm9kZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0hlYWRlclwiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vY29tcG9uZW50cy9Gb290ZXJcIjtcbmltcG9ydCBBbGVydFdpZGdldCBmcm9tIFwiLi4vY29tcG9uZW50cy9BbGVydFwiO1xuaW1wb3J0IHsgdXNlQXBwU2VsZWN0b3IgfSBmcm9tIFwiLi4vaG9va3MvcmVkdXhcIjtcbmltcG9ydCB7IFJvb3RTdGF0ZSB9IGZyb20gXCIuLi9yZWR1eC9zdG9yZVwiO1xuaW1wb3J0IGNsc3ggZnJvbSBcImNsc3hcIjtcbmltcG9ydCBBc2lkZUJhY2tkcm9wIGZyb20gXCIuLi9jb21wb25lbnRzL2FzaWRlTWVudS9CYWNrZHJvcFwiO1xuaW1wb3J0IEhvcml6b250YWxNZW51IGZyb20gXCIuLi9jb21wb25lbnRzL0hvcml6b250YWxNZW51XCI7XG5pbXBvcnQgQ2FsbFRvT3JkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvaGVhZGVyL0NhbGxUb09yZGVyXCI7XG5pbXBvcnQgeyBJTWVudUl0ZW0gfSBmcm9tIFwiLi4vQHR5cGVzL2NvbXBvbmVudHNcIjtcbmltcG9ydCB7IElCYXNpY1NldHRpbmdzIH0gZnJvbSBcIi4uL0B0eXBlcy9zZXR0aW5nc1wiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IHNldEJhc2ljU2V0dGluZ3MgfSBmcm9tIFwiLi4vcmVkdXgvcmVkdWNlcnMvYXBwXCI7XG5cbmNvbnN0IHNob3BCYXNlVXJsID0gcHJvY2Vzcy5lbnYuQk9VTkRMRVNTX0JBU0VfVVJMIHx8IFwiXCI7XG5cbmNvbnN0IEFzaWRlTWVudSA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KFwiLi4vY29tcG9uZW50cy9Bc2lkZU1lbnVcIiksIHtcbiAgc3NyOiBmYWxzZSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYWluTGF5b3V0KHtcblx0Y2hpbGRyZW4sXG5cdHRpdGxlLFxuXHRtZXRhRGF0YSxcblx0bWFpbk1lbnUsXG5cdGZvb3Rlck1lbnUsXG5cdG5vSW5kZXgsXG5cdGJhc2ljU2V0dGluZ3MsXG59OiBJTWFpbkxheW91dFByb3BzKSB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgeyBjYW5vbmljYWxVcmwsIGltZ1VybCwgZGVzY3JpcHRpb24gfSA9IG1ldGFEYXRhIHx8IHt9O1xuICBjb25zdCBhc2lkZUlzT3BlbmVkID0gdXNlQXBwU2VsZWN0b3IoXG4gICAgKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLmFzaWRlTWVudS5pc09wZW5lZFxuICApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGJhc2ljU2V0dGluZ3MpIHtcbiAgICAgIGRpc3BhdGNoKHNldEJhc2ljU2V0dGluZ3MoYmFzaWNTZXR0aW5ncykpO1xuICAgIH1cbiAgfSwgW2Rpc3BhdGNoLCBiYXNpY1NldHRpbmdzXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJVVEYtOFwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXCIgLz5cbiAgICAgICAgPG1ldGEgaHR0cEVxdWl2PVwiWC1VQS1Db21wYXRpYmxlXCIgY29udGVudD1cImllPWVkZ2VcIiAvPlxuXG4gICAgICAgIDxsaW5rIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIiBocmVmPVwiZmFiaWNvbi5wbmdcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgdHlwZT1cImltYWdlL3BuZ1wiIGhyZWY9XCIvZmF2aWNvbi5wbmdcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgdHlwZT1cImltYWdlL3BuZ1wiIGhyZWY9XCIvZmF2aWNvbi5wbmdcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJtYW5pZmVzdFwiIGhyZWY9XCIvc2l0ZS53ZWJtYW5pZmVzdFwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cIm1hc2staWNvblwiIGhyZWY9XCIvZmF2aWNvbi5wbmdcIiBjb2xvcj1cIiM1YmJhZDVcIiAvPlxuICAgICAgICB7Y2Fub25pY2FsVXJsICYmIDxsaW5rIHJlbD1cImNhbm9uaWNhbFwiIGhyZWY9e2Nhbm9uaWNhbFVybH0gLz59XG4gICAgICAgIDxtZXRhIG5hbWU9XCJtc2FwcGxpY2F0aW9uLVRpbGVDb2xvclwiIGNvbnRlbnQ9XCIjZGE1MzJjXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInRoZW1lLWNvbG9yXCIgY29udGVudD1cIiNmZmZmZmZcIiAvPlxuXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dHlwZVwiIGNvbnRlbnQ9XCJ3ZWJzaXRlXCIgLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzphdXRob3JcIiBjb250ZW50PVwiTGFjc3BhY2VcIiAvPlxuICAgICAgICA8bWV0YVxuICAgICAgICAgIHByb3BlcnR5PVwib2c6dGl0bGVcIlxuICAgICAgICAgIGNvbnRlbnQ9e1xuICAgICAgICAgICAgdGl0bGUgfHxcbiAgICAgICAgICAgIFwiU3BhcmtIdWUgfCBEaXNjb3ZlciBUaGUgU3BhcmsgSW4gRXZlcnkgUHVyY2hhc2UuIFNob3AgdW5saW1pdGVkIGl0ZW1zIGp1c3QgaW4gZmV3IGNsaWNrcy4gV2UgYXJlIGhlcmUgdG8gc2VydmUgeW91IHRoZSBiZXN0IHF1YWxpdHkgcHJvZHVjdC5cIlxuICAgICAgICAgIH1cbiAgICAgICAgLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp1cmxcIiBjb250ZW50PXtjYW5vbmljYWxVcmwgfHwgc2hvcEJhc2VVcmx9IC8+XG4gICAgICAgIDxtZXRhXG4gICAgICAgICAgcHJvcGVydHk9XCJvZzppbWFnZVwiXG4gICAgICAgICAgY29udGVudD17aW1nVXJsIHx8IHNob3BCYXNlVXJsICsgXCIvU3BhcmtIdWVfTG9nby5wbmdcIn1cbiAgICAgICAgLz5cbiAgICAgICAge2Rlc2NyaXB0aW9uICYmIChcbiAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCIgY29udGVudD17ZGVzY3JpcHRpb259IC8+XG4gICAgICAgICl9XG5cbiAgICAgICAgPHRpdGxlPlxuICAgICAgICAgIHt0aXRsZSB8fFxuICAgICAgICAgICAgXCJTcGFya0h1ZSB8IERpc2NvdmVyIFRoZSBTcGFyayBJbiBFdmVyeSBQdXJjaGFzZS4gU2hvcCB1bmxpbWl0ZWQgaXRlbXMganVzdCBpbiBmZXcgY2xpY2tzLiBXZSBhcmUgaGVyZSB0byBzZXJ2ZSB5b3UgdGhlIGJlc3QgaXRlbXMgaW4gcXVhbGl0eSBwcm9kdWN0LlwifVxuICAgICAgICA8L3RpdGxlPlxuXG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgcmVsPVwicHJlY29ubmVjdFwiXG4gICAgICAgICAgaHJlZj17XG4gICAgICAgICAgICBwcm9jZXNzLmVudi5CT1VORExFU1NfQVBJX0JBU0VfVVJMIHx8XG4gICAgICAgICAgICBcImh0dHBzOi8vYXBpLmJvdW5kbGVzcy1jb21tZXJjZS5jb21cIlxuICAgICAgICAgIH1cbiAgICAgICAgICBjcm9zc09yaWdpbj17XCJ1c2UtY3JlZGVudGlhbHNcIn1cbiAgICAgICAgLz5cbiAgICAgICAge25vSW5kZXggJiYgPG1ldGEgbmFtZT1cInJvYm90c1wiIGNvbnRlbnQ9XCJub2luZGV4XCIgLz59XG4gICAgICA8L0hlYWQ+XG4gICAgICA8QWxlcnRXaWRnZXQgLz5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtjbHN4KFwicGFnZS1sYXlvdXQgcGFnZS1sYXlvdXRfbWFpbiBtYXJzLWZ1bGwtdGhlbWVcIiwge1xuICAgICAgICAgIFwicGFnZS1sYXlvdXRfYXNpZGUtb3BlbmVkXCI6IGFzaWRlSXNPcGVuZWQsXG4gICAgICAgIH0pfVxuICAgICAgPlxuICAgICAgICA8Q2FsbFRvT3JkZXIgLz5cbiAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICB7bWFpbk1lbnUgJiYgPEhvcml6b250YWxNZW51IG1lbnVMaXN0PXttYWluTWVudX0gLz59XG4gICAgICAgIDxtYWluIGNsYXNzTmFtZT1cInBhZ2UtbGF5b3V0X19tYWluXCI+e2NoaWxkcmVufTwvbWFpbj5cbiAgICAgICAgPEZvb3RlciBtZW51TGlzdD17Zm9vdGVyTWVudX0gLz5cbiAgICAgICAgPEFzaWRlQmFja2Ryb3AgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPEFzaWRlTWVudSBtZW51TGlzdD17bWFpbk1lbnV9IC8+XG4gICAgPC8+XG4gICk7XG59XG5cbmludGVyZmFjZSBJTWFpbkxheW91dFByb3BzIHtcbiAgY2hpbGRyZW46IFJlYWN0Tm9kZSB8IFJlYWN0Tm9kZVtdO1xuICB0aXRsZT86IHN0cmluZztcbiAgbWV0YURhdGE/OiBJTWV0YURhdGE7XG4gIG1haW5NZW51OiBJTWVudUl0ZW1bXTtcbiAgZm9vdGVyTWVudTogSU1lbnVJdGVtW107XG4gIG5vSW5kZXg/OiBib29sZWFuO1xuICBiYXNpY1NldHRpbmdzPzogSUJhc2ljU2V0dGluZ3M7XG59XG5cbmludGVyZmFjZSBJTWV0YURhdGEge1xuICBjYW5vbmljYWxVcmw/OiBzdHJpbmc7XG4gIGltZ1VybD86IHN0cmluZyB8IG51bGw7XG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nIHwgbnVsbDtcbn1cbiJdLCJuYW1lcyI6WyJkeW5hbWljIiwidXNlRWZmZWN0IiwiSGVhZCIsIkhlYWRlciIsIkZvb3RlciIsIkFsZXJ0V2lkZ2V0IiwidXNlQXBwU2VsZWN0b3IiLCJjbHN4IiwiQXNpZGVCYWNrZHJvcCIsIkhvcml6b250YWxNZW51IiwiQ2FsbFRvT3JkZXIiLCJ1c2VEaXNwYXRjaCIsInNldEJhc2ljU2V0dGluZ3MiLCJzaG9wQmFzZVVybCIsInByb2Nlc3MiLCJlbnYiLCJCT1VORExFU1NfQkFTRV9VUkwiLCJBc2lkZU1lbnUiLCJzc3IiLCJNYWluTGF5b3V0IiwiY2hpbGRyZW4iLCJ0aXRsZSIsIm1ldGFEYXRhIiwibWFpbk1lbnUiLCJmb290ZXJNZW51Iiwibm9JbmRleCIsImJhc2ljU2V0dGluZ3MiLCJkaXNwYXRjaCIsImNhbm9uaWNhbFVybCIsImltZ1VybCIsImRlc2NyaXB0aW9uIiwiYXNpZGVJc09wZW5lZCIsInN0YXRlIiwiYXNpZGVNZW51IiwiaXNPcGVuZWQiLCJtZXRhIiwiY2hhclNldCIsIm5hbWUiLCJjb250ZW50IiwiaHR0cEVxdWl2IiwibGluayIsInJlbCIsImhyZWYiLCJ0eXBlIiwiY29sb3IiLCJwcm9wZXJ0eSIsIkJPVU5ETEVTU19BUElfQkFTRV9VUkwiLCJjcm9zc09yaWdpbiIsImRpdiIsImNsYXNzTmFtZSIsIm1lbnVMaXN0IiwibWFpbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./layouts/Main.tsx\n"));

/***/ })

});