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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MainLayout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Header */ \"./components/Header.tsx\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Footer */ \"./components/Footer.tsx\");\n/* harmony import */ var _components_Alert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Alert */ \"./components/Alert.tsx\");\n/* harmony import */ var _hooks_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../hooks/redux */ \"./hooks/redux.ts\");\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.m.js\");\n/* harmony import */ var _components_asideMenu_Backdrop__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/asideMenu/Backdrop */ \"./components/asideMenu/Backdrop.tsx\");\n/* harmony import */ var _components_HorizontalMenu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/HorizontalMenu */ \"./components/HorizontalMenu.tsx\");\n/* harmony import */ var _components_header_CallToOrder__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/header/CallToOrder */ \"./components/header/CallToOrder.tsx\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _redux_reducers_app__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../redux/reducers/app */ \"./redux/reducers/app.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst AsideMenu = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(()=>__webpack_require__.e(/*! import() */ \"components_AsideMenu_tsx\").then(__webpack_require__.bind(__webpack_require__, /*! ../components/AsideMenu */ \"./components/AsideMenu.tsx\")), {\n    loadableGenerated: {\n        modules: [\n            \"../layouts/Main.tsx -> \" + \"../components/AsideMenu\"\n        ]\n    },\n    ssr: false\n});\n_c = AsideMenu;\n\n\n\n\n\nconst shopBaseUrl =  false || \"\";\nfunction MainLayout(param) {\n    let { children, title, metaData, mainMenu, footerMenu, noIndex, basicSettings } = param;\n    _s();\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_12__.useDispatch)();\n    const { canonicalUrl, imgUrl, description } = metaData || {};\n    const asideIsOpened = (0,_hooks_redux__WEBPACK_IMPORTED_MODULE_7__.useAppSelector)((state)=>state.asideMenu.isOpened);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (basicSettings) {\n            dispatch((0,_redux_reducers_app__WEBPACK_IMPORTED_MODULE_13__.setBasicSettings)(basicSettings));\n        }\n    }, [\n        dispatch,\n        basicSettings\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        charSet: \"UTF-8\"\n                    }, void 0, false, {\n                        fileName: \"/home/chandan/Downloads/apps/website/layouts/Main.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1.0\"\n                    }, void 0, false, {\n                        fileName: \"/home/chandan/Downloads/apps/website/layouts/Main.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        httpEquiv: \"X-UA-Compatible\",\n                        content: \"ie=edge\"\n                    }, void 0, false, {\n                        fileName: \"/home/chandan/Downloads/apps/website/layouts/Main.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"apple-touch-icon\",\n                        href: \"fabicon.png\"\n                    }, void 0, false, {\n                        fileName: \"/home/chandan/Downloads/apps/website/layouts/Main.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        type: \"image/png\",\n                        href: \"/favicon.png\"\n                    }, void 0, false, {\n                        fileName: \"/home/chandan/Downloads/apps/website/layouts/Main.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        type: \"image/png\",\n                        sizes: \"16x16\",\n                        href: \"/favicon.png\"\n                    }, void 0, false, {\n                        fileName: \"/home/chandan/Downloads/apps/website/layouts/Main.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"manifest\",\n                        href: \"/site.webmanifest\"\n                    }, void 0, false, {\n                        fileName: \"/home/chandan/Downloads/apps/website/layouts/Main.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"mask-icon\",\n                        href: \"/safari-pinned-tab.svg\",\n                        color: \"#5bbad5\"\n                    }, void 0, false, {\n                        fileName: \"/home/chandan/Downloads/apps/website/layouts/Main.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 5\n                    }, this),\n                    canonicalUrl && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"canonical\",\n                        href: canonicalUrl\n                    }, void 0, false, {\n                        fileName: \"/home/chandan/Downloads/apps/website/layouts/Main.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 22\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"msapplication-TileColor\",\n                        content: \"#da532c\"\n                    }, void 0, false, {\n                        fileName: \"/home/chandan/Downloads/apps/website/layouts/Main.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"theme-color\",\n                        content: \"#ffffff\"\n                    }, void 0, false, {\n                        fileName: \"/home/chandan/Downloads/apps/website/layouts/Main.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        property: \"og:type\",\n                        content: \"website\"\n                    }, void 0, false, {\n                        fileName: \"/home/chandan/Downloads/apps/website/layouts/Main.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        property: \"og:author\",\n                        content: \"Lacspace\"\n                    }, void 0, false, {\n                        fileName: \"/home/chandan/Downloads/apps/website/layouts/Main.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        property: \"og:title\",\n                        content: title || \"SparkHue | Discover The Spark In Every Purchase. Shop unlimited item just in few clicks. We are here to serve you the best items in quality product.\"\n                    }, void 0, false, {\n                        fileName: \"/home/chandan/Downloads/apps/website/layouts/Main.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        property: \"og:url\",\n                        content: canonicalUrl || shopBaseUrl\n                    }, void 0, false, {\n                        fileName: \"/home/chandan/Downloads/apps/website/layouts/Main.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        property: \"og:image\",\n                        content: imgUrl || shopBaseUrl + \"/og.jpeg\"\n                    }, void 0, false, {\n                        fileName: \"/home/chandan/Downloads/apps/website/layouts/Main.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 5\n                    }, this),\n                    description && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        property: \"og:description\",\n                        content: description\n                    }, void 0, false, {\n                        fileName: \"/home/chandan/Downloads/apps/website/layouts/Main.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: title || \"SparkHue | Discover The Spark In Every Purchase. Shop unlimited item just in few clicks. We are here to serve you the best items in quality product.\"\n                    }, void 0, false, {\n                        fileName: \"/home/chandan/Downloads/apps/website/layouts/Main.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"preconnect\",\n                        href:  false || \"https://api.boundless-commerce.com\",\n                        crossOrigin: \"use-credentials\"\n                    }, void 0, false, {\n                        fileName: \"/home/chandan/Downloads/apps/website/layouts/Main.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 5\n                    }, this),\n                    noIndex && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"robots\",\n                        content: \"noindex\"\n                    }, void 0, false, {\n                        fileName: \"/home/chandan/Downloads/apps/website/layouts/Main.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/chandan/Downloads/apps/website/layouts/Main.tsx\",\n                lineNumber: 34,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Alert__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/chandan/Downloads/apps/website/layouts/Main.tsx\",\n                lineNumber: 60,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (0,clsx__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(\"page-layout page-layout_main mars-full-theme\", {\n                    \"page-layout_aside-opened\": asideIsOpened\n                }),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header_CallToOrder__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {}, void 0, false, {\n                        fileName: \"/home/chandan/Downloads/apps/website/layouts/Main.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                        fileName: \"/home/chandan/Downloads/apps/website/layouts/Main.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 5\n                    }, this),\n                    mainMenu && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_HorizontalMenu__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                        menuList: mainMenu\n                    }, void 0, false, {\n                        fileName: \"/home/chandan/Downloads/apps/website/layouts/Main.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 18\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                        className: \"page-layout__main\",\n                        children: children\n                    }, void 0, false, {\n                        fileName: \"/home/chandan/Downloads/apps/website/layouts/Main.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        menuList: footerMenu\n                    }, void 0, false, {\n                        fileName: \"/home/chandan/Downloads/apps/website/layouts/Main.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_asideMenu_Backdrop__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                        fileName: \"/home/chandan/Downloads/apps/website/layouts/Main.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/chandan/Downloads/apps/website/layouts/Main.tsx\",\n                lineNumber: 61,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AsideMenu, {\n                menuList: mainMenu\n            }, void 0, false, {\n                fileName: \"/home/chandan/Downloads/apps/website/layouts/Main.tsx\",\n                lineNumber: 71,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(MainLayout, \"P+sQrCeH45z1J8eSVSfkpPub3yY=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_12__.useDispatch,\n        _hooks_redux__WEBPACK_IMPORTED_MODULE_7__.useAppSelector\n    ];\n});\n_c1 = MainLayout;\nvar _c, _c1;\n$RefreshReg$(_c, \"AsideMenu\");\n$RefreshReg$(_c1, \"MainLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O3dCQUFDd0MsVUFBVTVCOzs7Ozs7a0NBQ3ZDLDhEQUFDNkI7d0JBQUtGLFdBQVU7a0NBQ2Q5Qjs7Ozs7O2tDQUVGLDhEQUFDaEIsMERBQU1BO3dCQUFDK0MsVUFBVTNCOzs7Ozs7a0NBQ2xCLDhEQUFDZCxzRUFBYUE7Ozs7Ozs7Ozs7OzBCQUVmLDhEQUFDRjtnQkFBVTJDLFVBQVU1Qjs7Ozs7Ozs7QUFHeEI7R0FyRHdCSjs7UUFDTk4scURBQVdBO1FBRU5QLHdEQUFjQTs7O01BSGJhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2xheW91dHMvTWFpbi50c3g/MjYwZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnO1xuaW1wb3J0IHtSZWFjdE5vZGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXInO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL0Zvb3Rlcic7XG5pbXBvcnQgQWxlcnRXaWRnZXQgZnJvbSAnLi4vY29tcG9uZW50cy9BbGVydCc7XG5pbXBvcnQge3VzZUFwcFNlbGVjdG9yfSBmcm9tICcuLi9ob29rcy9yZWR1eCc7XG5pbXBvcnQge1Jvb3RTdGF0ZX0gZnJvbSAnLi4vcmVkdXgvc3RvcmUnO1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5jb25zdCBBc2lkZU1lbnUgPSBkeW5hbWljKCgpID0+IGltcG9ydCgnLi4vY29tcG9uZW50cy9Bc2lkZU1lbnUnKSwge3NzcjogZmFsc2V9KTtcbmltcG9ydCBBc2lkZUJhY2tkcm9wIGZyb20gJy4uL2NvbXBvbmVudHMvYXNpZGVNZW51L0JhY2tkcm9wJztcbmltcG9ydCBIb3Jpem9udGFsTWVudSBmcm9tICcuLi9jb21wb25lbnRzL0hvcml6b250YWxNZW51JztcbmltcG9ydCBDYWxsVG9PcmRlciBmcm9tICcuLi9jb21wb25lbnRzL2hlYWRlci9DYWxsVG9PcmRlcic7XG5pbXBvcnQge0lNZW51SXRlbX0gZnJvbSAnLi4vQHR5cGVzL2NvbXBvbmVudHMnO1xuaW1wb3J0IHtJQmFzaWNTZXR0aW5nc30gZnJvbSAnLi4vQHR5cGVzL3NldHRpbmdzJztcbmltcG9ydCB7dXNlRGlzcGF0Y2h9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7c2V0QmFzaWNTZXR0aW5nc30gZnJvbSAnLi4vcmVkdXgvcmVkdWNlcnMvYXBwJztcblxuY29uc3Qgc2hvcEJhc2VVcmwgPSBwcm9jZXNzLmVudi5CT1VORExFU1NfQkFTRV9VUkwgfHwgJyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1haW5MYXlvdXQoe2NoaWxkcmVuLCB0aXRsZSwgbWV0YURhdGEsIG1haW5NZW51LCBmb290ZXJNZW51LCBub0luZGV4LCBiYXNpY1NldHRpbmdzfTogSU1haW5MYXlvdXRQcm9wcykge1xuXHRjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG5cdGNvbnN0IHtjYW5vbmljYWxVcmwsIGltZ1VybCwgZGVzY3JpcHRpb259ID0gbWV0YURhdGEgfHwge307XG5cdGNvbnN0IGFzaWRlSXNPcGVuZWQgPSB1c2VBcHBTZWxlY3Rvcigoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gc3RhdGUuYXNpZGVNZW51LmlzT3BlbmVkKTtcblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGlmIChiYXNpY1NldHRpbmdzKSB7XG5cdFx0XHRkaXNwYXRjaChzZXRCYXNpY1NldHRpbmdzKGJhc2ljU2V0dGluZ3MpKTtcblx0XHR9XG5cdH0sIFtkaXNwYXRjaCwgYmFzaWNTZXR0aW5nc10pO1xuXG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxIZWFkPlxuXHRcdFx0XHQ8bWV0YSBjaGFyU2V0PSdVVEYtOCcgLz5cblx0XHRcdFx0PG1ldGEgbmFtZT0ndmlld3BvcnQnIGNvbnRlbnQ9J3dpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjAnIC8+XG5cdFx0XHRcdDxtZXRhIGh0dHBFcXVpdj0nWC1VQS1Db21wYXRpYmxlJyBjb250ZW50PSdpZT1lZGdlJyAvPlxuXG5cdFx0XHRcdDxsaW5rIHJlbD0nYXBwbGUtdG91Y2gtaWNvbicgaHJlZj0nZmFiaWNvbi5wbmcnIC8+XG5cdFx0XHRcdDxsaW5rIHJlbD0naWNvbicgdHlwZT0naW1hZ2UvcG5nJyBocmVmPScvZmF2aWNvbi5wbmcnIC8+XG5cdFx0XHRcdDxsaW5rIHJlbD0naWNvbicgdHlwZT0naW1hZ2UvcG5nJyBzaXplcz0nMTZ4MTYnIGhyZWY9Jy9mYXZpY29uLnBuZycgLz5cblx0XHRcdFx0PGxpbmsgcmVsPSdtYW5pZmVzdCcgaHJlZj0nL3NpdGUud2VibWFuaWZlc3QnIC8+XG5cdFx0XHRcdDxsaW5rIHJlbD0nbWFzay1pY29uJyBocmVmPScvc2FmYXJpLXBpbm5lZC10YWIuc3ZnJyBjb2xvcj0nIzViYmFkNScgLz5cblx0XHRcdFx0e2Nhbm9uaWNhbFVybCAmJiA8bGluayByZWw9J2Nhbm9uaWNhbCcgaHJlZj17Y2Fub25pY2FsVXJsfSAvPn1cblx0XHRcdFx0PG1ldGEgbmFtZT0nbXNhcHBsaWNhdGlvbi1UaWxlQ29sb3InIGNvbnRlbnQ9JyNkYTUzMmMnIC8+XG5cdFx0XHRcdDxtZXRhIG5hbWU9J3RoZW1lLWNvbG9yJyBjb250ZW50PScjZmZmZmZmJyAvPlxuXG5cdFx0XHRcdDxtZXRhIHByb3BlcnR5PSdvZzp0eXBlJyBjb250ZW50PSd3ZWJzaXRlJyAvPlxuXHRcdFx0XHQ8bWV0YSBwcm9wZXJ0eT0nb2c6YXV0aG9yJyBjb250ZW50PSdMYWNzcGFjZScgLz5cblx0XHRcdFx0PG1ldGEgcHJvcGVydHk9J29nOnRpdGxlJyBjb250ZW50PXt0aXRsZSB8fCAnU3BhcmtIdWUgfCBEaXNjb3ZlciBUaGUgU3BhcmsgSW4gRXZlcnkgUHVyY2hhc2UuIFNob3AgdW5saW1pdGVkIGl0ZW0ganVzdCBpbiBmZXcgY2xpY2tzLiBXZSBhcmUgaGVyZSB0byBzZXJ2ZSB5b3UgdGhlIGJlc3QgaXRlbXMgaW4gcXVhbGl0eSBwcm9kdWN0Lid9IC8+XG5cdFx0XHRcdDxtZXRhIHByb3BlcnR5PSdvZzp1cmwnIGNvbnRlbnQ9e2Nhbm9uaWNhbFVybCB8fCBzaG9wQmFzZVVybH0gLz5cblx0XHRcdFx0PG1ldGEgcHJvcGVydHk9J29nOmltYWdlJyBjb250ZW50PXtpbWdVcmwgfHwgKHNob3BCYXNlVXJsICsgJy9vZy5qcGVnJyl9IC8+XG5cdFx0XHRcdHtkZXNjcmlwdGlvbiAmJiA8bWV0YSBwcm9wZXJ0eT0nb2c6ZGVzY3JpcHRpb24nIGNvbnRlbnQ9e2Rlc2NyaXB0aW9ufSAvPn1cblxuXHRcdFx0XHQ8dGl0bGU+e3RpdGxlIHx8ICdTcGFya0h1ZSB8IERpc2NvdmVyIFRoZSBTcGFyayBJbiBFdmVyeSBQdXJjaGFzZS4gU2hvcCB1bmxpbWl0ZWQgaXRlbSBqdXN0IGluIGZldyBjbGlja3MuIFdlIGFyZSBoZXJlIHRvIHNlcnZlIHlvdSB0aGUgYmVzdCBpdGVtcyBpbiBxdWFsaXR5IHByb2R1Y3QuJ308L3RpdGxlPlxuXG5cdFx0XHRcdDxsaW5rIHJlbD0ncHJlY29ubmVjdCcgaHJlZj17cHJvY2Vzcy5lbnYuQk9VTkRMRVNTX0FQSV9CQVNFX1VSTCB8fCAnaHR0cHM6Ly9hcGkuYm91bmRsZXNzLWNvbW1lcmNlLmNvbSd9IGNyb3NzT3JpZ2luPXsndXNlLWNyZWRlbnRpYWxzJ30gLz5cblx0XHRcdFx0e25vSW5kZXggJiYgPG1ldGEgbmFtZT0ncm9ib3RzJyBjb250ZW50PSdub2luZGV4JyAvPn1cblx0XHRcdDwvSGVhZD5cblx0XHRcdDxBbGVydFdpZGdldCAvPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e2Nsc3goJ3BhZ2UtbGF5b3V0IHBhZ2UtbGF5b3V0X21haW4gbWFycy1mdWxsLXRoZW1lJywgeydwYWdlLWxheW91dF9hc2lkZS1vcGVuZWQnOiBhc2lkZUlzT3BlbmVkfSl9PlxuXHRcdFx0XHQ8Q2FsbFRvT3JkZXIgLz5cblx0XHRcdFx0PEhlYWRlciAvPlxuXHRcdFx0XHR7bWFpbk1lbnUgJiYgPEhvcml6b250YWxNZW51IG1lbnVMaXN0PXttYWluTWVudX0gLz59XG5cdFx0XHRcdDxtYWluIGNsYXNzTmFtZT0ncGFnZS1sYXlvdXRfX21haW4nPlxuXHRcdFx0XHRcdHtjaGlsZHJlbn1cblx0XHRcdFx0PC9tYWluPlxuXHRcdFx0XHQ8Rm9vdGVyIG1lbnVMaXN0PXtmb290ZXJNZW51fS8+XG5cdFx0XHRcdDxBc2lkZUJhY2tkcm9wIC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxBc2lkZU1lbnUgbWVudUxpc3Q9e21haW5NZW51fS8+XG5cdFx0PC8+XG5cdCk7XG59XG5cbmludGVyZmFjZSBJTWFpbkxheW91dFByb3BzIHtcblx0Y2hpbGRyZW46IFJlYWN0Tm9kZSB8IFJlYWN0Tm9kZVtdO1xuXHR0aXRsZT86IHN0cmluZztcblx0bWV0YURhdGE/OiBJTWV0YURhdGE7XG5cdG1haW5NZW51OiBJTWVudUl0ZW0gW107XG5cdGZvb3Rlck1lbnU6IElNZW51SXRlbSBbXTtcblx0bm9JbmRleD86IGJvb2xlYW47XG5cdGJhc2ljU2V0dGluZ3M/OiBJQmFzaWNTZXR0aW5nc1xufVxuXG5pbnRlcmZhY2UgSU1ldGFEYXRhIHtcblx0Y2Fub25pY2FsVXJsPzogc3RyaW5nO1xuXHRpbWdVcmw/OiBzdHJpbmcgfCBudWxsO1xuXHRkZXNjcmlwdGlvbj86IHN0cmluZyB8IG51bGw7XG59Il0sIm5hbWVzIjpbImR5bmFtaWMiLCJ1c2VFZmZlY3QiLCJIZWFkIiwiSGVhZGVyIiwiRm9vdGVyIiwiQWxlcnRXaWRnZXQiLCJ1c2VBcHBTZWxlY3RvciIsImNsc3giLCJBc2lkZU1lbnUiLCJzc3IiLCJBc2lkZUJhY2tkcm9wIiwiSG9yaXpvbnRhbE1lbnUiLCJDYWxsVG9PcmRlciIsInVzZURpc3BhdGNoIiwic2V0QmFzaWNTZXR0aW5ncyIsInNob3BCYXNlVXJsIiwicHJvY2VzcyIsImVudiIsIkJPVU5ETEVTU19CQVNFX1VSTCIsIk1haW5MYXlvdXQiLCJjaGlsZHJlbiIsInRpdGxlIiwibWV0YURhdGEiLCJtYWluTWVudSIsImZvb3Rlck1lbnUiLCJub0luZGV4IiwiYmFzaWNTZXR0aW5ncyIsImRpc3BhdGNoIiwiY2Fub25pY2FsVXJsIiwiaW1nVXJsIiwiZGVzY3JpcHRpb24iLCJhc2lkZUlzT3BlbmVkIiwic3RhdGUiLCJhc2lkZU1lbnUiLCJpc09wZW5lZCIsIm1ldGEiLCJjaGFyU2V0IiwibmFtZSIsImNvbnRlbnQiLCJodHRwRXF1aXYiLCJsaW5rIiwicmVsIiwiaHJlZiIsInR5cGUiLCJzaXplcyIsImNvbG9yIiwicHJvcGVydHkiLCJCT1VORExFU1NfQVBJX0JBU0VfVVJMIiwiY3Jvc3NPcmlnaW4iLCJkaXYiLCJjbGFzc05hbWUiLCJtZW51TGlzdCIsIm1haW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./layouts/Main.tsx\n"));

/***/ })

});