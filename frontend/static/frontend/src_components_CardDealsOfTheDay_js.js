/*! For license information please see src_components_CardDealsOfTheDay_js.js.LICENSE.txt */
"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([["src_components_CardDealsOfTheDay_js"],{"./src/components/CardDealsOfTheDay.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bootstrap_icons_icons_stopwatch_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-icons/icons/stopwatch.svg */ "./node_modules/bootstrap-icons/icons/stopwatch.svg");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");\n/* harmony import */ var react_countdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-countdown */ "./node_modules/react-countdown/dist/index.es.js");\n\n\n\n\n\n// Random component\nconst Completionist = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Deals End!");\n\n// Renderer callback with condition\nconst renderer = ({\n  hours,\n  minutes,\n  seconds,\n  completed\n}) => {\n  if (completed) {\n    // Render a completed state\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Completionist, null);\n  } else {\n    // Render a countdown\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {\n      className: "text-muted small"\n    }, hours, ":", minutes, ":", seconds, " Left");\n  }\n};\nconst CardDealsOfTheDay = props => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {\n    className: "card"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {\n    className: "card-body"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h5", {\n    className: "card-title pb-3 border-bottom"\n  }, props.title, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(bootstrap_icons_icons_stopwatch_svg__WEBPACK_IMPORTED_MODULE_1__["default"], {\n    className: "text-primary"\n  }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_countdown__WEBPACK_IMPORTED_MODULE_2__["default"], {\n    date: props.endDate,\n    renderer: renderer\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {\n    className: "float-end"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {\n    to: props.to,\n    className: "btn btn-sm btn-outline-primary"\n  }, "View All"))), props.children));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CardDealsOfTheDay);\n\n//# sourceURL=webpack://frontend/./src/components/CardDealsOfTheDay.js?')}}]);