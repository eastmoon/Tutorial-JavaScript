/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var template = __webpack_require__(1);

	console.log("Holle World !!");


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = function anonymous(locals, filters, escape, rethrow) {
	    escape = escape || function(html) {
	        return String(html).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&#39;").replace(/"/g, "&quot;");
	    };
	    var __stack = {
	        lineno: 1,
	        input: '<!-- views/pages/home.ejs -->\r\n<!DOCTYPE html>\r\n<html>\r\n<head>\r\n  <% include src/views/partials/head %>\r\n</head>\r\n<body class="container">\r\n  <header>\r\n    <% include src/views/partials/header %>\r\n  </header>\r\n\r\n  <main>\r\n    <div class="jumbotron">\r\n      <h1>Check this out</h1>\r\n      <p>It\'s using EJS template</p>\r\n    </div>\r\n  </main>\r\n\r\n  <footer>\r\n    <% include src/views/partials/footer %>\r\n  </footer>\r\n</body>\r\n</html>\r\n',
	        filename: "."
	    };
	    function rethrow(err, str, filename, lineno) {
	        var lines = str.split("\n"), start = Math.max(lineno - 3, 0), end = Math.min(lines.length, lineno + 3);
	        var context = lines.slice(start, end).map(function(line, i) {
	            var curr = i + start + 1;
	            return (curr == lineno ? " >> " : "    ") + curr + "| " + line;
	        }).join("\n");
	        err.path = filename;
	        err.message = (filename || "ejs") + ":" + lineno + "\n" + context + "\n\n" + err.message;
	        throw err;
	    }
	    try {
	        var buf = [];
	        with (locals || {}) {
	            (function() {
	                buf.push("<!-- views/pages/home.ejs -->\n<!DOCTYPE html>\n<html>\n<head>\n  " + function() {
	                    var buf = [];
	                    buf.push("<!-- views/partials/header.ejs -->\n<div>\n  It is header.\n</div>\n");
	                    return buf.join("");
	                }() + '\n</head>\n<body class="container">\n  <header>\n    ' + function() {
	                    var buf = [];
	                    buf.push('<!-- views/partials/head.ejs -->\n\n<meta charset="utf-8">\n<title>Node EJS Demo</title>\n<style>\n    body { background-color: #888888; }\n</style>\n');
	                    return buf.join("");
	                }() + '\n  </header>\n\n  <main>\n    <div class="jumbotron">\n      <h1>Check this out</h1>\n      <p>It\'s using EJS template</p>\n    </div>\n  </main>\n\n  <footer>\n    ' + function() {
	                    var buf = [];
	                    buf.push("<!-- views/partials/footer.ejs -->\n<div>\n  It is footer.\n</div>\n");
	                    return buf.join("");
	                }() + "\n  </footer>\n</body>\n</html>\n");
	            })();
	        }
	        return buf.join("");
	    } catch (err) {
	        rethrow(err, __stack.input, __stack.filename, __stack.lineno);
	    }
	}

/***/ }
/******/ ]);