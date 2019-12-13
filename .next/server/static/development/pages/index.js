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
    return stats[i] || 0;
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_API__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/API */ "./utils/API.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Question = props => {
  const {
    0: answer,
    1: setAnswer
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  return __jsx("div", null, __jsx("span", {
    className: "d-block w-100 h1 text-dark"
  }, props.question), __jsx("div", {
    className: "my-5 pt-0 pb-5"
  }, props.answers.map((choice, index) => {
    const selected = answer && answer === index + 1;
    const labelClass = ["custom-control-label pl-5 position-relative", selected ? "checked" : ""].join(" ");
    return __jsx("div", {
      key: index,
      className: "custom-control custom-radio py-3 ml-2 d-flex align-items-center"
    }, __jsx("input", {
      type: "radio",
      className: "custom-control-input",
      value: index,
      name: "your-answer",
      id: `radio-num-${index + 1}`,
      checked: selected,
      onChange: evt => setAnswer(evt.target.id)
    }), __jsx("label", {
      className: labelClass,
      onClick: evt => setAnswer(index + 1)
    }, choice));
  })), __jsx("button", {
    className: "btn btn-primary text-uppercase my-5 ml-4 px-5 py-3 d-block",
    disabled: !answer,
    onClick: evt => {
      evt.preventDefault();
      _utils_API__WEBPACK_IMPORTED_MODULE_1__["default"].submitChoice({
        choice: answer
      });
    }
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
/* harmony import */ var _utils_API__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utils/API */ "./utils/API.js");
/* harmony import */ var pusher_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! pusher-js */ "pusher-js");
/* harmony import */ var pusher_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(pusher_js__WEBPACK_IMPORTED_MODULE_14__);









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

  componentDidMount() {
    this.pusher = new pusher_js__WEBPACK_IMPORTED_MODULE_14___default.a("3aae232a0153a63c4ccc", {
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
      this.setState({
        answers
      });
    });
    this.pusher.connection.bind("connected", () => {
      _utils_API__WEBPACK_IMPORTED_MODULE_13__["default"].getPollData().then(response => {
        const answers = response.data.answers;
        this.setState({
          answers
        });
      });
    });
  }

  componentWillUnmount() {
    this.pusher.disconnect();
  }

  render() {
    const choices = ["Red", "Green", "Blue", "Yellow", "Clear"];
    const question = "What is your favorite color?";
    return __jsx(_comps_Layout__WEBPACK_IMPORTED_MODULE_9__["default"], null, __jsx(_comps_Section__WEBPACK_IMPORTED_MODULE_10__["default"], {
      col: "7",
      uno: true
    }, __jsx("span", {
      style: {
        marginTop: -50
      },
      className: "jsx-104230438" + " " + "d-block w-100 h5 text-uppercase text-primary font-weight-bold mb-4"
    }, "Poll for the Day"), __jsx(_comps_Question__WEBPACK_IMPORTED_MODULE_11__["default"], {
      question: question,
      answers: choices
    })), __jsx(_comps_Section__WEBPACK_IMPORTED_MODULE_10__["default"], {
      col: "5"
    }, __jsx(_comps_Inform__WEBPACK_IMPORTED_MODULE_12__["default"], {
      choices: choices,
      stats: this.state.answers
    })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
      id: "104230438"
    }, ".custom-control-label{background:transparent;color:#aaa;font-size:2rem;font-weight:300;cursor:pointer;line-height:2rem;}.custom-control-label:before,.custom-control-label:after{top:0;left:-10px;height:2.25rem;width:2.25rem;cursor:pointer;box-shadow:none !important;}.custom-control-label.checked{color:#5091a8 !important;}button.btn{-webkit-letter-spacing:0.15rem;-moz-letter-spacing:0.15rem;-ms-letter-spacing:0.15rem;letter-spacing:0.15rem;font-size:1rem;font-weight:600;width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcSGVybWFuXFxEb2N1bWVudHNcXEJvb3RDYW1wXFwyXFxSZWFjdC1QcmFjdFxcUG9sbERhdGFcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0RDJCLEFBR29DLEFBVWpCLEFBU21CLEFBSUYsTUFaWixXQUNJLE1BWEosRUFtQmIsT0FQZ0IsRUFYQyxZQVlBLEdBWEMsWUFZVyxJQVhaLGVBQ0UsUUFXbkIsU0FWQSxZQWtCaUIsZUFDQyxnQkFDTCxXQUNiIiwiZmlsZSI6IkM6XFxVc2Vyc1xcSGVybWFuXFxEb2N1bWVudHNcXEJvb3RDYW1wXFwyXFxSZWFjdC1QcmFjdFxcUG9sbERhdGFcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wcy9MYXlvdXRcIjtcclxuaW1wb3J0IFNlY3Rpb24gZnJvbSBcIi4uL2NvbXBzL1NlY3Rpb25cIjtcclxuaW1wb3J0IFF1ZXN0aW9uIGZyb20gXCIuLi9jb21wcy9RdWVzdGlvblwiO1xyXG5pbXBvcnQgSW5mb3JtIGZyb20gXCIuLi9jb21wcy9JbmZvcm1cIjtcclxuaW1wb3J0IEFQSSBmcm9tIFwiLi4vdXRpbHMvQVBJXCI7XHJcblxyXG5pbXBvcnQgUHVzaGVyIGZyb20gXCJwdXNoZXItanNcIjtcclxuXHJcbmNsYXNzIEluZGV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgYW5zd2Vyczoge31cclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHRoaXMucHVzaGVyID0gbmV3IFB1c2hlcihwcm9jZXNzLmVudi5QVVNIRVJfQVBQX0tFWSwge1xyXG4gICAgICBjbHVzdGVyOiBwcm9jZXNzLmVudi5QVVNIRVJfQVBQX0NMVVNURVIsXHJcbiAgICAgIGVuY3J5cHRlZDogdHJ1ZVxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5jaGFubmVsID0gdGhpcy5wdXNoZXIuc3Vic2NyaWJlKFwicG9sbC1ib2FyZFwiKTtcclxuXHJcbiAgICB0aGlzLmNoYW5uZWwuYmluZChcIm5ldy1hbnN3ZXJcIiwgKHsgY2hvaWNlLCBjb3VudCB9KSA9PiB7XHJcbiAgICAgIGxldCB7IGFuc3dlcnMgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgIGFuc3dlcnMgPSB7IC4uLmFuc3dlcnMsIFtjaG9pY2VdOiBjb3VudCB9O1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgYW5zd2VycyB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMucHVzaGVyLmNvbm5lY3Rpb24uYmluZChcImNvbm5lY3RlZFwiLCAoKSA9PiB7XHJcbiAgICAgIEFQSS5nZXRQb2xsRGF0YSgpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGNvbnN0IGFuc3dlcnMgPSByZXNwb25zZS5kYXRhLmFuc3dlcnM7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGFuc3dlcnMgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgIHRoaXMucHVzaGVyLmRpc2Nvbm5lY3QoKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IGNob2ljZXMgPSBbXCJSZWRcIiwgXCJHcmVlblwiLCBcIkJsdWVcIiwgXCJZZWxsb3dcIiwgXCJDbGVhclwiXTtcclxuICAgIGNvbnN0IHF1ZXN0aW9uID0gXCJXaGF0IGlzIHlvdXIgZmF2b3JpdGUgY29sb3I/XCI7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8TGF5b3V0PlxyXG4gICAgICAgIDxTZWN0aW9uIGNvbD17XCI3XCJ9IHVubz17dHJ1ZX0+XHJcbiAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJkLWJsb2NrIHctMTAwIGg1IHRleHQtdXBwZXJjYXNlIHRleHQtcHJpbWFyeSBmb250LXdlaWdodC1ib2xkIG1iLTRcIlxyXG4gICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Ub3A6IC01MCB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBQb2xsIGZvciB0aGUgRGF5XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8UXVlc3Rpb24gcXVlc3Rpb249e3F1ZXN0aW9ufSBhbnN3ZXJzPXtjaG9pY2VzfSAvPlxyXG4gICAgICAgIDwvU2VjdGlvbj5cclxuICAgICAgICA8U2VjdGlvbiBjb2w9e1wiNVwifT5cclxuICAgICAgICAgIDxJbmZvcm0gY2hvaWNlcz17Y2hvaWNlc30gc3RhdHM9e3RoaXMuc3RhdGUuYW5zd2Vyc30gLz5cclxuICAgICAgICA8L1NlY3Rpb24+XHJcbiAgICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcclxuICAgICAgICAgIC5jdXN0b20tY29udHJvbC1sYWJlbCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICBjb2xvcjogI2FhYTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5jdXN0b20tY29udHJvbC1sYWJlbDpiZWZvcmUsXHJcbiAgICAgICAgICAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6YWZ0ZXIge1xyXG4gICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgIGxlZnQ6IC0xMHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDIuMjVyZW07XHJcbiAgICAgICAgICAgIHdpZHRoOiAyLjI1cmVtO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuY3VzdG9tLWNvbnRyb2wtbGFiZWwuY2hlY2tlZCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNTA5MWE4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgYnV0dG9uLmJ0biB7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjE1cmVtO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\Herman\\\\Documents\\\\BootCamp\\\\2\\\\React-Pract\\\\PollData\\\\pages\\\\index.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./utils/API.js":
/*!**********************!*\
  !*** ./utils/API.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ({
  submitChoice: function (choice) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/answer", choice);
  },
  getPollData: function () {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/answers");
  }
});

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Herman\Documents\BootCamp\2\React-Pract\PollData\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

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

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

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