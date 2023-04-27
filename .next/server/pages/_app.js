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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./hooks/useSpoilers.tsx":
/*!*******************************!*\
  !*** ./hooks/useSpoilers.tsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SpoilersProvider\": () => (/* binding */ SpoilersProvider),\n/* harmony export */   \"defaultSpoilersContextValue\": () => (/* binding */ defaultSpoilersContextValue),\n/* harmony export */   \"useSpoilers\": () => (/* binding */ useSpoilers)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _data_item_unlocks_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/item_unlocks.json */ \"./data/item_unlocks.json\");\n\n\n\nconst defaultSpoilersContextValue = {\n    items: _data_item_unlocks_json__WEBPACK_IMPORTED_MODULE_2__.items\n};\nconst SpoilersContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n    spoilers: defaultSpoilersContextValue,\n    setSpoilers: ()=>{}\n});\nconst SpoilersProvider = ({ children  })=>{\n    const { 0: spoilers1 , 1: setSpoilers  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(defaultSpoilersContextValue);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const storageSpoilers = localStorage.getItem(\"spoilers\");\n        if (!storageSpoilers) {\n            setSpoilers((spoilers)=>({\n                    ...spoilers,\n                    loading: false\n                })\n            );\n            return;\n        }\n        const parsedSpoilers = JSON.parse(storageSpoilers);\n        if (!parsedSpoilers) {\n            localStorage.delete(\"spoilers\");\n            setSpoilers((spoilers)=>({\n                    ...spoilers,\n                    loading: false\n                })\n            );\n            return;\n        }\n        parsedSpoilers.characters = new Set(parsedSpoilers?.characters);\n        setSpoilers({\n            ...parsedSpoilers,\n            loading: false\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SpoilersContext.Provider, {\n        value: {\n            spoilers: spoilers1,\n            setSpoilers: setSpoilers\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/home/nrichman/projects/fh-party-items/hooks/useSpoilers.tsx\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, undefined);\n};\nconst useSpoilers = ()=>{\n    const { spoilers , setSpoilers  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(SpoilersContext);\n    const updateSpoilers = (newSpoilers)=>{\n        localStorage.setItem(\"spoilers\", JSON.stringify({\n            ...newSpoilers\n        }));\n        setSpoilers(newSpoilers);\n    };\n    return {\n        spoilers,\n        updateSpoilers\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rcy91c2VTcG9pbGVycy50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUF1RTtBQUVoQjtBQU9oRCxNQUFNSywyQkFBMkIsR0FBYTtJQUNuREMsS0FBSyxFQUFFRiwwREFBcUI7Q0FDN0IsQ0FBQztBQUVGLE1BQU1HLGVBQWUsaUJBQUdQLG9EQUFhLENBQTJCO0lBQzlEUSxRQUFRLEVBQUVILDJCQUEyQjtJQUNyQ0ksV0FBVyxFQUFFLElBQU0sRUFBRztDQUN2QixDQUFDO0FBRUssTUFBTUMsZ0JBQWdCLEdBQUcsQ0FBQyxFQUFFQyxRQUFRLEdBQUUsR0FBSztJQUNoRCxNQUFNLEVBbkJSLEdBbUJTSCxTQUFRLEdBbkJqQixHQW1CbUJDLFdBQVcsTUFBSU4sK0NBQVEsQ0FDdENFLDJCQUEyQixDQUM1QjtJQUVESCxnREFBUyxDQUFDLElBQU07UUFDZCxNQUFNVSxlQUFlLEdBQUdDLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLFVBQVUsQ0FBQztRQUN4RCxJQUFJLENBQUNGLGVBQWUsRUFBRTtZQUNwQkgsV0FBVyxDQUFDLENBQUNELFFBQVEsR0FBSyxDQUFDO29CQUFFLEdBQUdBLFFBQVE7b0JBQUVPLE9BQU8sRUFBRSxLQUFLO2lCQUFFLENBQUM7WUFBQSxDQUFDLENBQUM7WUFDN0QsT0FBTztTQUNSO1FBRUQsTUFBTUMsY0FBYyxHQUFHQyxJQUFJLENBQUNDLEtBQUssQ0FBQ04sZUFBZSxDQUFDO1FBQ2xELElBQUksQ0FBQ0ksY0FBYyxFQUFFO1lBQ25CSCxZQUFZLENBQUNNLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUNoQ1YsV0FBVyxDQUFDLENBQUNELFFBQVEsR0FBSyxDQUFDO29CQUFFLEdBQUdBLFFBQVE7b0JBQUVPLE9BQU8sRUFBRSxLQUFLO2lCQUFFLENBQUM7WUFBQSxDQUFDLENBQUM7WUFDN0QsT0FBTztTQUNSO1FBRURDLGNBQWMsQ0FBQ0ksVUFBVSxHQUFHLElBQUlDLEdBQUcsQ0FBQ0wsY0FBYyxFQUFFSSxVQUFVLENBQUMsQ0FBQztRQUNoRVgsV0FBVyxDQUFDO1lBQUUsR0FBR08sY0FBYztZQUFFRCxPQUFPLEVBQUUsS0FBSztTQUFFLENBQUMsQ0FBQztLQUNwRCxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRVAscUJBQ0UsOERBQUNSLGVBQWUsQ0FBQ2UsUUFBUTtRQUFDQyxLQUFLLEVBQUU7WUFBRWYsUUFBUSxFQUFSQSxTQUFRO1lBQUVDLFdBQVcsRUFBRUEsV0FBVztTQUFFO2tCQUNwRUUsUUFBUTs7Ozs7aUJBQ2dCLENBQzNCO0NBQ0gsQ0FBQztBQUVLLE1BQU1hLFdBQVcsR0FBRyxJQUFNO0lBQy9CLE1BQU0sRUFBRWhCLFFBQVEsR0FBRUMsV0FBVyxHQUFFLEdBQUdSLGlEQUFVLENBQUNNLGVBQWUsQ0FBQztJQUU3RCxNQUFNa0IsY0FBYyxHQUFHLENBQUNDLFdBQXFCLEdBQUs7UUFDaERiLFlBQVksQ0FBQ2MsT0FBTyxDQUNsQixVQUFVLEVBQ1ZWLElBQUksQ0FBQ1csU0FBUyxDQUFDO1lBQ2IsR0FBR0YsV0FBVztTQUNmLENBQUMsQ0FDSCxDQUFDO1FBQ0ZqQixXQUFXLENBQUNpQixXQUFXLENBQUMsQ0FBQztLQUMxQjtJQUVELE9BQU87UUFBRWxCLFFBQVE7UUFBRWlCLGNBQWM7S0FBRSxDQUFDO0NBQ3JDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nbG9vbWhhdmVuLWNhcmQtYnJvd3Nlci8uL2hvb2tzL3VzZVNwb2lsZXJzLnRzeD85OWYyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFNwb2lsZXJzIH0gZnJvbSBcIi4uL2NvbW1vbi90eXBlc1wiO1xuaW1wb3J0IGRlZmF1bHRTcG9pbGVycyBmcm9tIFwiLi4vZGF0YS9pdGVtX3VubG9ja3MuanNvblwiXG5cbmludGVyZmFjZSBTcG9pbGVyc0NvbnRleHRJbnRlcmZhY2Uge1xuICBzcG9pbGVyczogU3BvaWxlcnM7XG4gIHNldFNwb2lsZXJzOiAoc2M6IFNwb2lsZXJzKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgY29uc3QgZGVmYXVsdFNwb2lsZXJzQ29udGV4dFZhbHVlOiBTcG9pbGVycyA9IHtcbiAgaXRlbXM6IGRlZmF1bHRTcG9pbGVycy5pdGVtcyxcbn07XG5cbmNvbnN0IFNwb2lsZXJzQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8U3BvaWxlcnNDb250ZXh0SW50ZXJmYWNlPih7XG4gIHNwb2lsZXJzOiBkZWZhdWx0U3BvaWxlcnNDb250ZXh0VmFsdWUsXG4gIHNldFNwb2lsZXJzOiAoKSA9PiB7IH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IFNwb2lsZXJzUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IFtzcG9pbGVycywgc2V0U3BvaWxlcnNdID0gdXNlU3RhdGU8U3BvaWxlcnM+KFxuICAgIGRlZmF1bHRTcG9pbGVyc0NvbnRleHRWYWx1ZVxuICApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgc3RvcmFnZVNwb2lsZXJzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzcG9pbGVyc1wiKTtcbiAgICBpZiAoIXN0b3JhZ2VTcG9pbGVycykge1xuICAgICAgc2V0U3BvaWxlcnMoKHNwb2lsZXJzKSA9PiAoeyAuLi5zcG9pbGVycywgbG9hZGluZzogZmFsc2UgfSkpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHBhcnNlZFNwb2lsZXJzID0gSlNPTi5wYXJzZShzdG9yYWdlU3BvaWxlcnMpO1xuICAgIGlmICghcGFyc2VkU3BvaWxlcnMpIHtcbiAgICAgIGxvY2FsU3RvcmFnZS5kZWxldGUoXCJzcG9pbGVyc1wiKTtcbiAgICAgIHNldFNwb2lsZXJzKChzcG9pbGVycykgPT4gKHsgLi4uc3BvaWxlcnMsIGxvYWRpbmc6IGZhbHNlIH0pKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBwYXJzZWRTcG9pbGVycy5jaGFyYWN0ZXJzID0gbmV3IFNldChwYXJzZWRTcG9pbGVycz8uY2hhcmFjdGVycyk7XG4gICAgc2V0U3BvaWxlcnMoeyAuLi5wYXJzZWRTcG9pbGVycywgbG9hZGluZzogZmFsc2UgfSk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxTcG9pbGVyc0NvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgc3BvaWxlcnMsIHNldFNwb2lsZXJzOiBzZXRTcG9pbGVycyB9fT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L1Nwb2lsZXJzQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCB1c2VTcG9pbGVycyA9ICgpID0+IHtcbiAgY29uc3QgeyBzcG9pbGVycywgc2V0U3BvaWxlcnMgfSA9IHVzZUNvbnRleHQoU3BvaWxlcnNDb250ZXh0KTtcblxuICBjb25zdCB1cGRhdGVTcG9pbGVycyA9IChuZXdTcG9pbGVyczogU3BvaWxlcnMpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgIFwic3BvaWxlcnNcIixcbiAgICAgIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgLi4ubmV3U3BvaWxlcnMsXG4gICAgICB9KVxuICAgICk7XG4gICAgc2V0U3BvaWxlcnMobmV3U3BvaWxlcnMpO1xuICB9O1xuXG4gIHJldHVybiB7IHNwb2lsZXJzLCB1cGRhdGVTcG9pbGVycyB9O1xufTtcbiJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiZGVmYXVsdFNwb2lsZXJzIiwiZGVmYXVsdFNwb2lsZXJzQ29udGV4dFZhbHVlIiwiaXRlbXMiLCJTcG9pbGVyc0NvbnRleHQiLCJzcG9pbGVycyIsInNldFNwb2lsZXJzIiwiU3BvaWxlcnNQcm92aWRlciIsImNoaWxkcmVuIiwic3RvcmFnZVNwb2lsZXJzIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImxvYWRpbmciLCJwYXJzZWRTcG9pbGVycyIsIkpTT04iLCJwYXJzZSIsImRlbGV0ZSIsImNoYXJhY3RlcnMiLCJTZXQiLCJQcm92aWRlciIsInZhbHVlIiwidXNlU3BvaWxlcnMiLCJ1cGRhdGVTcG9pbGVycyIsIm5ld1Nwb2lsZXJzIiwic2V0SXRlbSIsInN0cmluZ2lmeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./hooks/useSpoilers.tsx\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _public_global_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../public/global.css */ \"./public/global.css\");\n/* harmony import */ var _public_global_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_global_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_useSpoilers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useSpoilers */ \"./hooks/useSpoilers.tsx\");\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_hooks_useSpoilers__WEBPACK_IMPORTED_MODULE_2__.SpoilersProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/home/nrichman/projects/fh-party-items/pages/_app.tsx\",\n            lineNumber: 7,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/nrichman/projects/fh-party-items/pages/_app.tsx\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUE4QjtBQUMwQjtBQUV4RCxTQUFTQyxLQUFLLENBQUMsRUFBRUMsU0FBUyxHQUFFQyxTQUFTLEdBQUUsRUFBRTtJQUN2QyxxQkFDRSw4REFBQ0gsZ0VBQWdCO2tCQUNmLDRFQUFDRSxTQUFTO1lBQUUsR0FBR0MsU0FBUzs7Ozs7Z0JBQUk7Ozs7O1lBQ1gsQ0FDbkI7Q0FDSDtBQUVELGlFQUFlRixLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nbG9vbWhhdmVuLWNhcmQtYnJvd3Nlci8uL3BhZ2VzL19hcHAudHN4PzJmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi4vcHVibGljL2dsb2JhbC5jc3NcIjtcbmltcG9ydCB7IFNwb2lsZXJzUHJvdmlkZXIgfSBmcm9tIFwiLi4vaG9va3MvdXNlU3BvaWxlcnNcIjtcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHJldHVybiAoXG4gICAgPFNwb2lsZXJzUHJvdmlkZXI+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC9TcG9pbGVyc1Byb3ZpZGVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiJdLCJuYW1lcyI6WyJTcG9pbGVyc1Byb3ZpZGVyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./public/global.css":
/*!***************************!*\
  !*** ./public/global.css ***!
  \***************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "./data/item_unlocks.json":
/*!********************************!*\
  !*** ./data/item_unlocks.json ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"items":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,51,54,56,65,66,68,76,77,81,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,100,101,104,105,106,109,112,113,117,119,120,121,122,123,124,125,126,127,156,159,174,175,181,185,187,188,189,191,195,212,223,232,236,244,245]}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();