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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
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


const Inform = ({
  choices,
  stats
}) => {
  const counts = choices.map(choice => stats[choice] || 0);
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
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__["Line"], {
    data: chartData,
    width: 100,
    height: 50,
    options: chartOptions
  }));
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
      _utils_API__WEBPACK_IMPORTED_MODULE_1__["default"].submitChoice(answer);
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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _comps_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../comps/Layout */ "./comps/Layout.js");
/* harmony import */ var _comps_Section__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../comps/Section */ "./comps/Section.js");
/* harmony import */ var _comps_Question__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../comps/Question */ "./comps/Question.js");
/* harmony import */ var _comps_Inform__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../comps/Inform */ "./comps/Inform.js");
/* harmony import */ var _utils_API__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/API */ "./utils/API.js");


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






const choices = ["Red", "Green", "Blue", "Yellow", "Clear"];
const question = "What is your favorite color?";

const Index = () => {
  const {
    0: data,
    1: setData
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({});
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    const fetchData = async () => {
      const resp = await _utils_API__WEBPACK_IMPORTED_MODULE_6__["default"].getPollData();
      setData(resp.data);
    };

    fetchData();
  }, []);
  return __jsx(_comps_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], null, __jsx(_comps_Section__WEBPACK_IMPORTED_MODULE_3__["default"], {
    col: "7",
    uno: true
  }, __jsx("span", {
    style: {
      marginTop: -50
    },
    className: "jsx-1788310052" + " " + "d-block w-100 h5 text-uppercase text-primary font-weight-bold mb-4"
  }, "Poll for the Day"), __jsx(_comps_Question__WEBPACK_IMPORTED_MODULE_4__["default"], {
    question: question,
    answers: choices
  })), __jsx(_comps_Section__WEBPACK_IMPORTED_MODULE_3__["default"], {
    col: "5"
  }, __jsx(_comps_Inform__WEBPACK_IMPORTED_MODULE_5__["default"], {
    choices: choices,
    stats: choices
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1788310052"
  }, ".custom-control-label{background:transparent;color:#aaa;font-size:2rem;font-weight:300;cursor:pointer;line-height:2rem;}.custom-control-label:before,.custom-control-label:after{top:0;left:-10px;height:2.25rem;width:2.25rem;cursor:pointer;box-shadow:none !important;}.custom-control-label.checked{color:#5091a8 !important;}button.btn{-webkit-letter-spacing:0.15rem;-moz-letter-spacing:0.15rem;-ms-letter-spacing:0.15rem;letter-spacing:0.15rem;font-size:1rem;font-weight:600;width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcSGVybWFuXFxEb2N1bWVudHNcXEJvb3RDYW1wXFwyXFxSZWFjdC1QcmFjdFxcUG9sbERhdGFcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQ3lCLEFBR2tDLEFBVWpCLEFBU21CLEFBSUYsTUFaWixXQUNJLE1BWEosRUFtQmIsT0FQZ0IsRUFYQyxZQVlBLEdBWEMsWUFZVyxJQVhaLGVBQ0UsUUFXbkIsU0FWQSxZQWtCaUIsZUFDQyxnQkFDTCxXQUNiIiwiZmlsZSI6IkM6XFxVc2Vyc1xcSGVybWFuXFxEb2N1bWVudHNcXEJvb3RDYW1wXFwyXFxSZWFjdC1QcmFjdFxcUG9sbERhdGFcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcHMvTGF5b3V0XCI7XHJcbmltcG9ydCBTZWN0aW9uIGZyb20gXCIuLi9jb21wcy9TZWN0aW9uXCI7XHJcbmltcG9ydCBRdWVzdGlvbiBmcm9tIFwiLi4vY29tcHMvUXVlc3Rpb25cIjtcclxuaW1wb3J0IEluZm9ybSBmcm9tIFwiLi4vY29tcHMvSW5mb3JtXCI7XHJcbmltcG9ydCBBUEkgZnJvbSBcIi4uL3V0aWxzL0FQSVwiO1xyXG5cclxuY29uc3QgY2hvaWNlcyA9IFtcIlJlZFwiLCBcIkdyZWVuXCIsIFwiQmx1ZVwiLCBcIlllbGxvd1wiLCBcIkNsZWFyXCJdO1xyXG5jb25zdCBxdWVzdGlvbiA9IFwiV2hhdCBpcyB5b3VyIGZhdm9yaXRlIGNvbG9yP1wiO1xyXG5cclxuY29uc3QgSW5kZXggPSAoKSA9PiB7XHJcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoe30pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBjb25zdCByZXNwID0gYXdhaXQgQVBJLmdldFBvbGxEYXRhKCk7XHJcblxyXG4gICAgICBzZXREYXRhKHJlc3AuZGF0YSk7XHJcbiAgICB9O1xyXG4gICAgZmV0Y2hEYXRhKCk7XHJcbiAgfSwgW10pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICA8U2VjdGlvbiBjb2w9e1wiN1wifSB1bm89e3RydWV9PlxyXG4gICAgICAgIDxzcGFuXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJkLWJsb2NrIHctMTAwIGg1IHRleHQtdXBwZXJjYXNlIHRleHQtcHJpbWFyeSBmb250LXdlaWdodC1ib2xkIG1iLTRcIlxyXG4gICAgICAgICAgc3R5bGU9e3sgbWFyZ2luVG9wOiAtNTAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBQb2xsIGZvciB0aGUgRGF5XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDxRdWVzdGlvbiBxdWVzdGlvbj17cXVlc3Rpb259IGFuc3dlcnM9e2Nob2ljZXN9IC8+XHJcbiAgICAgIDwvU2VjdGlvbj5cclxuICAgICAgPFNlY3Rpb24gY29sPXtcIjVcIn0+XHJcbiAgICAgICAgPEluZm9ybSBjaG9pY2VzPXtjaG9pY2VzfSBzdGF0cz17Y2hvaWNlc30gLz5cclxuICAgICAgPC9TZWN0aW9uPlxyXG4gICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxyXG4gICAgICAgIC5jdXN0b20tY29udHJvbC1sYWJlbCB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgIGNvbG9yOiAjYWFhO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmN1c3RvbS1jb250cm9sLWxhYmVsOmJlZm9yZSxcclxuICAgICAgICAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6YWZ0ZXIge1xyXG4gICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgbGVmdDogLTEwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDIuMjVyZW07XHJcbiAgICAgICAgICB3aWR0aDogMi4yNXJlbTtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jdXN0b20tY29udHJvbC1sYWJlbC5jaGVja2VkIHtcclxuICAgICAgICAgIGNvbG9yOiAjNTA5MWE4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBidXR0b24uYnRuIHtcclxuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjE1cmVtO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\Herman\\\\Documents\\\\BootCamp\\\\2\\\\React-Pract\\\\PollData\\\\pages\\\\index.js */"));
};

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
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/answers");
  }
});

/***/ }),

/***/ 4:
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

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

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