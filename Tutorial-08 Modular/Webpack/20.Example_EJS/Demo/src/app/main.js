'use strict';

// Import ejs template, and Webpack will compiled into bundle.js.
var head = require("../views/partials/head.ejs");
var footer = require("../views/partials/footer.ejs");
var html = null;

// Pass object with data, it will output html elements.
html = head({noun: "World"});
console.log(html);
document.getElementById("head").innerHTML = html;

// Pass object with data, it will output html elements.
html = footer({});
console.log(html);
document.getElementById("footer").innerHTML = html;
