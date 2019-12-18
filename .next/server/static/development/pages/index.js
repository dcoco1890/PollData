module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./comps/Inform.js":
/*!*************************!*\
  !*** ./comps/Inform.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-chartjs-2 */ "react-chartjs-2");
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Inform = props => {
  const {
    choices = [],
    stats = {}
  } = props;
  const counts = choices.map((choice, i) => {
    return stats[i + 1] || 0;
  });
  const totalCount = counts.reduce((total, count) => total + count, 0);
  const chartData = {
    labels: choices,
    datasets: [{
      lineTension: 0,
      backgroundColor: "rgba(68, 204, 153, 0.05)",
      borderColor: "rgba(68, 204, 153, 0.9)",
      borderWidth: 2,
      borderJoinStyle: "round",
      pointRadius: 5,
      pointBorderColor: "#fff",
      pointBackgroundColor: "rgba(68, 204, 153, 0.9)",
      pointBorderWidth: 3,
      data: counts
    }]
  };
  const chartOptions = {
    layout: {
      padding: {
        top: 25,
        bottom: 75,
        left: 75,
        right: 75
      }
    },
    maintainAspectRatio: false,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          display: false
        }
      }]
    },
    legend: {
      display: false
    },
    title: {
      display: true,
      text: "POLL COUNTS",
      padding: 10,
      lineHeight: 4,
      fontSize: 20,
      fontColor: "#677"
    }
  };
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "position-relative h-50 w-100 d-flex align-items-center border-bottom border-gray"
  }, __jsx(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__["Line"], {
    data: chartData,
    width: 100,
    height: 50,
    options: chartOptions
  })), __jsx("div", {
    className: "position-relative h-50 w-100 d-flex flex-wrap align-items-start align-content-start"
  }, __jsx("div", {
    className: "d-flex flex-wrap w-100 text-center justify-content-center align-items-center align-content-center",
    style: {
      height: "calc(100% - 150px)"
    }
  }, __jsx("span", {
    className: "d-block w-100 text-uppercase pb-2 font-weight-bold text-secondary",
    style: {
      fontSize: "1.25rem"
    }
  }, "Total Count"), __jsx("span", {
    className: "d-block w-100 text-dark",
    style: {
      fontSize: "5rem"
    }
  }, totalCount)), __jsx("div", {
    className: "w-100 d-flex justify-content-between align-items-center text-center border-top border-gray",
    style: {
      height: 100
    }
  }, counts.map((count, index) => {
    const className = ["h-100 position-relative d-flex align-items-center", index > 0 ? "border-left border-gray" : ""].join(" ");
    return __jsx("div", {
      key: index,
      className: className,
      style: {
        width: "20%",
        fontSize: "2rem"
      }
    }, __jsx("span", {
      className: "d-block w-100 p-3 text-dark"
    }, count));
  })), __jsx("div", {
    className: "w-100 d-flex justify-content-between align-items-center text-center border-top border-gray bg-light",
    style: {
      height: 50
    }
  }, choices.map((choice, index) => {
    const className = ["h-100 position-relative d-flex align-items-center", index > 0 ? "border-left border-gray" : ""].join(" ");
    return __jsx("div", {
      key: index,
      className: className,
      style: {
        width: "20%",
        fontSize: "0.7rem"
      }
    }, __jsx("span", {
      className: "d-block w-100 text-uppercase p-3 font-weight-bold text-secondary"
    }, choice));
  }))));
};

Inform.getInitialProps = ({
  query
}) => {
  return console.log("GAY");
};

/* harmony default export */ __webpack_exports__["default"] = (Inform);

/***/ }),

/***/ "./comps/Layout.js":
/*!*************************!*\
  !*** ./comps/Layout.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Layout = props => {
  return __jsx("div", null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, __jsx("meta", {
    charSet: "utf-8"
  }), __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1, shrink-to-fit=no"
  }), __jsx("link", {
    rel: "stylesheet",
    href: "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css",
    integrity: "sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm",
    crossOrigin: "anonymous"
  }), __jsx("title", null, props.pageTitle || "PollData")), __jsx("main", {
    className: "container-fluid position-absolute h-100 bg-light-gray"
  }, __jsx("div", {
    className: "row position-absolute w-100 h-100"
  }, props.children)));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./comps/Question.js":
/*!***************************!*\
  !*** ./comps/Question.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\Herman\\Documents\\BootCamp\\2\\React-Pract\\PollData\\comps\\Question.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const Question = props => {
  const {
    0: answer,
    1: setAnswer
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  const {
    0: chosen,
    1: setChosen
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, __jsx("span", {
    className: "d-block w-100 h1 text-dark",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, props.question), __jsx("div", {
    className: "my-5 pt-0 pb-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, props.answers.map((choice, index) => {
    const selected = answer && answer === index + 1;
    const labelClass = ["custom-control-label pl-5 position-relative", selected ? "checked" : ""].join(" ");
    return __jsx("div", {
      key: index,
      className: "custom-control custom-radio py-3 ml-2 d-flex align-items-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: undefined
    }, __jsx("input", {
      type: "radio",
      className: "custom-control-input",
      value: index,
      name: "your-answer",
      id: `radio-num-${index + 1}`,
      checked: selected,
      onChange: evt => setAnswer(evt.target.id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: undefined
    }), __jsx("label", {
      className: labelClass,
      onClick: evt => {
        setChosen(true);
        setAnswer(index + 1);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: undefined
    }, choice));
  })), __jsx("button", {
    className: "btn btn-primary text-uppercase my-5 ml-4 px-5 py-3 d-block",
    disabled: !chosen,
    onClick: async evt => {
      evt.preventDefault();
      const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default()("http://localhost:3000/api/answers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()({
          choice: answer
        })
      }).then(res => {
        return res.json();
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }, "Submit"));
};

/* harmony default export */ __webpack_exports__["default"] = (Question);

/***/ }),

/***/ "./comps/Section.js":
/*!**************************!*\
  !*** ./comps/Section.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
const uno = "align-items-center align-content-center px-5 border-right border-gray";
const dos = "position-relative h-100 align-items-start align-content-between bg-white px-0";
/* harmony default export */ __webpack_exports__["default"] = (props => __jsx("section", {
  className: `col-md-${props.col} d-flex flex-wrap ${props.uno ? uno : dos}`
}, props.children));

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-properties */ "core-js/library/fn/object/define-properties");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptors */ "core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _comps_Layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../comps/Layout */ "./comps/Layout.js");
/* harmony import */ var _comps_Section__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../comps/Section */ "./comps/Section.js");
/* harmony import */ var _comps_Question__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../comps/Question */ "./comps/Question.js");
/* harmony import */ var _comps_Inform__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../comps/Inform */ "./comps/Inform.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var pusher_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! pusher-js */ "pusher-js");
/* harmony import */ var pusher_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(pusher_js__WEBPACK_IMPORTED_MODULE_15__);







var _jsxFileName = "C:\\Users\\Herman\\Documents\\BootCamp\\2\\React-Pract\\PollData\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }










class Index extends react__WEBPACK_IMPORTED_MODULE_8___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: {}
    };
  }

  static async getInitialProps(ctx) {
    const {
      asPath
    } = ctx;
    console.log(asPath);
    const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_14___default()("http://localhost:3000/api/answers");
    const json = await res.json();
    return {
      json
    };
  }

  componentDidMount() {
    this.pusher = new pusher_js__WEBPACK_IMPORTED_MODULE_15___default.a("8cece438a57bacfb0865", {
      cluster: "mt1",
      encrypted: true
    });
    this.channel = this.pusher.subscribe("poll-board");
    this.channel.bind("new-answer", ({
      choice,
      count
    }) => {
      let {
        answers
      } = this.state;
      answers = _objectSpread({}, answers, {
        [choice]: count
      });
      console.log(answers);
      this.setState({
        answers
      });
    });
    this.setState({
      answers: this.props.json
    });
  } //   componentDidMount() {
  //   this.pusher = new Pusher("8cece438a57bacfb0865", {
  //     cluster: "mt1",
  //     encrypted: true
  //   });
  //   this.channel = this.pusher.subscribe("poll-board");
  // this.channel.bind("new-answer", ({ choice, count }) => {
  //   let { answers } = this.state;
  //   answers = { ...answers, [choice]: count };
  //   this.setState({ answers });
  // });
  // this.pusher.connection.bind("connected", () => {
  //   API.getPollData().then(response => {
  //     console.log(response.data);
  //     const answers = response.data.answers;
  //     this.setState({ answers });
  //   });
  // });
  //   }


  componentWillUnmount() {
    this.pusher.disconnect();
  }

  render() {
    const choices = ["Red", "Green", "Blue", "Yellow", "Clear"];
    const question = "What is your favorite color?";
    return __jsx(_comps_Layout__WEBPACK_IMPORTED_MODULE_9__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, __jsx(_comps_Section__WEBPACK_IMPORTED_MODULE_10__["default"], {
      col: "7",
      uno: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }, __jsx("span", {
      style: {
        marginTop: -50
      },
      className: "jsx-104230438" + " " + "d-block w-100 h5 text-uppercase text-primary font-weight-bold mb-4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }, "Poll for the Day"), __jsx(_comps_Question__WEBPACK_IMPORTED_MODULE_11__["default"], {
      question: question,
      answers: choices,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    })), __jsx(_comps_Section__WEBPACK_IMPORTED_MODULE_10__["default"], {
      col: "5",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }, __jsx(_comps_Inform__WEBPACK_IMPORTED_MODULE_12__["default"], {
      choices: choices,
      stats: this.state.answers,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
      id: "104230438",
      __self: this
    }, ".custom-control-label{background:transparent;color:#aaa;font-size:2rem;font-weight:300;cursor:pointer;line-height:2rem;}.custom-control-label:before,.custom-control-label:after{top:0;left:-10px;height:2.25rem;width:2.25rem;cursor:pointer;box-shadow:none !important;}.custom-control-label.checked{color:#5091a8 !important;}button.btn{-webkit-letter-spacing:0.15rem;-moz-letter-spacing:0.15rem;-ms-letter-spacing:0.15rem;letter-spacing:0.15rem;font-size:1rem;font-weight:600;width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcSGVybWFuXFxEb2N1bWVudHNcXEJvb3RDYW1wXFwyXFxSZWFjdC1QcmFjdFxcUG9sbERhdGFcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvRjJCLEFBR29DLEFBVWpCLEFBU21CLEFBSUYsTUFaWixXQUNJLE1BWEosRUFtQmIsT0FQZ0IsRUFYQyxZQVlBLEdBWEMsWUFZVyxJQVhaLGVBQ0UsUUFXbkIsU0FWQSxZQWtCaUIsZUFDQyxnQkFDTCxXQUNiIiwiZmlsZSI6IkM6XFxVc2Vyc1xcSGVybWFuXFxEb2N1bWVudHNcXEJvb3RDYW1wXFwyXFxSZWFjdC1QcmFjdFxcUG9sbERhdGFcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcHMvTGF5b3V0XCI7XHJcbmltcG9ydCBTZWN0aW9uIGZyb20gXCIuLi9jb21wcy9TZWN0aW9uXCI7XHJcbmltcG9ydCBRdWVzdGlvbiBmcm9tIFwiLi4vY29tcHMvUXVlc3Rpb25cIjtcclxuaW1wb3J0IEluZm9ybSBmcm9tIFwiLi4vY29tcHMvSW5mb3JtXCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBmZXRjaCBmcm9tIFwiaXNvbW9ycGhpYy11bmZldGNoXCI7XHJcblxyXG5pbXBvcnQgUHVzaGVyIGZyb20gXCJwdXNoZXItanNcIjtcclxuXHJcbmNsYXNzIEluZGV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgYW5zd2Vyczoge31cclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKGN0eCkge1xyXG4gICAgY29uc3QgeyBhc1BhdGggfSA9IGN0eDtcclxuICAgIGNvbnNvbGUubG9nKGFzUGF0aCk7XHJcblxyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2Fuc3dlcnNcIik7XHJcbiAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgIHJldHVybiB7IGpzb24gfTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5wdXNoZXIgPSBuZXcgUHVzaGVyKFwiOGNlY2U0MzhhNTdiYWNmYjA4NjVcIiwge1xyXG4gICAgICBjbHVzdGVyOiBcIm10MVwiLFxyXG4gICAgICBlbmNyeXB0ZWQ6IHRydWVcclxuICAgIH0pO1xyXG4gICAgdGhpcy5jaGFubmVsID0gdGhpcy5wdXNoZXIuc3Vic2NyaWJlKFwicG9sbC1ib2FyZFwiKTtcclxuICAgIHRoaXMuY2hhbm5lbC5iaW5kKFwibmV3LWFuc3dlclwiLCAoeyBjaG9pY2UsIGNvdW50IH0pID0+IHtcclxuICAgICAgbGV0IHsgYW5zd2VycyB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgYW5zd2VycyA9IHsgLi4uYW5zd2VycywgW2Nob2ljZV06IGNvdW50IH07XHJcbiAgICAgIGNvbnNvbGUubG9nKGFuc3dlcnMpO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgYW5zd2VycyB9KTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGFuc3dlcnM6IHRoaXMucHJvcHMuanNvblxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIC8vICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgLy8gICB0aGlzLnB1c2hlciA9IG5ldyBQdXNoZXIoXCI4Y2VjZTQzOGE1N2JhY2ZiMDg2NVwiLCB7XHJcbiAgLy8gICAgIGNsdXN0ZXI6IFwibXQxXCIsXHJcbiAgLy8gICAgIGVuY3J5cHRlZDogdHJ1ZVxyXG4gIC8vICAgfSk7XHJcbiAgLy8gICB0aGlzLmNoYW5uZWwgPSB0aGlzLnB1c2hlci5zdWJzY3JpYmUoXCJwb2xsLWJvYXJkXCIpO1xyXG4gIC8vIHRoaXMuY2hhbm5lbC5iaW5kKFwibmV3LWFuc3dlclwiLCAoeyBjaG9pY2UsIGNvdW50IH0pID0+IHtcclxuICAvLyAgIGxldCB7IGFuc3dlcnMgfSA9IHRoaXMuc3RhdGU7XHJcbiAgLy8gICBhbnN3ZXJzID0geyAuLi5hbnN3ZXJzLCBbY2hvaWNlXTogY291bnQgfTtcclxuICAvLyAgIHRoaXMuc2V0U3RhdGUoeyBhbnN3ZXJzIH0pO1xyXG4gIC8vIH0pO1xyXG4gIC8vIHRoaXMucHVzaGVyLmNvbm5lY3Rpb24uYmluZChcImNvbm5lY3RlZFwiLCAoKSA9PiB7XHJcbiAgLy8gICBBUEkuZ2V0UG9sbERhdGEoKS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAvLyAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XHJcbiAgLy8gICAgIGNvbnN0IGFuc3dlcnMgPSByZXNwb25zZS5kYXRhLmFuc3dlcnM7XHJcbiAgLy8gICAgIHRoaXMuc2V0U3RhdGUoeyBhbnN3ZXJzIH0pO1xyXG4gIC8vICAgfSk7XHJcbiAgLy8gfSk7XHJcbiAgLy8gICB9XHJcblxyXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgdGhpcy5wdXNoZXIuZGlzY29ubmVjdCgpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgY2hvaWNlcyA9IFtcIlJlZFwiLCBcIkdyZWVuXCIsIFwiQmx1ZVwiLCBcIlllbGxvd1wiLCBcIkNsZWFyXCJdO1xyXG4gICAgY29uc3QgcXVlc3Rpb24gPSBcIldoYXQgaXMgeW91ciBmYXZvcml0ZSBjb2xvcj9cIjtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgPFNlY3Rpb24gY29sPXtcIjdcIn0gdW5vPXt0cnVlfT5cclxuICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImQtYmxvY2sgdy0xMDAgaDUgdGV4dC11cHBlcmNhc2UgdGV4dC1wcmltYXJ5IGZvbnQtd2VpZ2h0LWJvbGQgbWItNFwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblRvcDogLTUwIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIFBvbGwgZm9yIHRoZSBEYXlcclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDxRdWVzdGlvbiBxdWVzdGlvbj17cXVlc3Rpb259IGFuc3dlcnM9e2Nob2ljZXN9IC8+XHJcbiAgICAgICAgPC9TZWN0aW9uPlxyXG4gICAgICAgIDxTZWN0aW9uIGNvbD17XCI1XCJ9PlxyXG4gICAgICAgICAgPEluZm9ybSBjaG9pY2VzPXtjaG9pY2VzfSBzdGF0cz17dGhpcy5zdGF0ZS5hbnN3ZXJzfSAvPlxyXG4gICAgICAgIDwvU2VjdGlvbj5cclxuICAgICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxyXG4gICAgICAgICAgLmN1c3RvbS1jb250cm9sLWxhYmVsIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjYWFhO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDJyZW07XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmN1c3RvbS1jb250cm9sLWxhYmVsOmJlZm9yZSxcclxuICAgICAgICAgIC5jdXN0b20tY29udHJvbC1sYWJlbDphZnRlciB7XHJcbiAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgbGVmdDogLTEwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMi4yNXJlbTtcclxuICAgICAgICAgICAgd2lkdGg6IDIuMjVyZW07XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5jdXN0b20tY29udHJvbC1sYWJlbC5jaGVja2VkIHtcclxuICAgICAgICAgICAgY29sb3I6ICM1MDkxYTggIWltcG9ydGFudDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBidXR0b24uYnRuIHtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMTVyZW07XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8L0xheW91dD5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\Herman\\\\Documents\\\\BootCamp\\\\2\\\\React-Pract\\\\PollData\\\\pages\\\\index.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Herman\Documents\BootCamp\2\React-Pract\PollData\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/object/define-properties":
/*!**************************************************************!*\
  !*** external "core-js/library/fn/object/define-properties" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptors":
/*!*************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptors" ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "pusher-js":
/*!****************************!*\
  !*** external "pusher-js" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("pusher-js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-chartjs-2":
/*!**********************************!*\
  !*** external "react-chartjs-2" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-chartjs-2");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map