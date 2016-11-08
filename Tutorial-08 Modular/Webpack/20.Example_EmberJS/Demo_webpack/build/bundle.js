webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _ember = __webpack_require__(1);

	var _ember2 = _interopRequireDefault(_ember);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**************************
	* Application
	**************************/
	// 建立應用程式。
	// Application 擁有基底變數、事件
	// http://emberjs.com/api/classes/Ember.Application.html
	var Songs = _ember2.default.Application.create({
	    mixmaster: 'Jacky',
	    totalReviews: 0,
	    rootElement: '#app',
	    ready: function ready() {
	        console.log('Ember sings helloooooooooo!');
	    }
	});

	/**************************
	* Models
	**************************/
	// 宣告類別於應用程式內。
	Songs.Song = _ember2.default.Object.extend({ title: null, artist: null, genre: null, listens: 0 });

	/**************************
	* Views
	**************************/
	// 建立文字輸入框控制顯示元件。
	Songs.ReviewTextArea = _ember2.default.TextArea.extend({ placeholder: 'Enter your review' });

	/**************************
	* Controllers
	**************************/

/***/ }
]);