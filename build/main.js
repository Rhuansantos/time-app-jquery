(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var crud = exports.crud = function () {
	function crud(_methods, _view) {
		_classCallCheck(this, crud);

		this.methods = _methods;
		this.view = _view;

		if (this.methods == 'create') {
			this.create();
		}
	}

	_createClass(crud, [{
		key: 'create',
		value: function create() {
			$('#to-do-list').append(this.view);
		}
	}, {
		key: 'update',
		value: function update() {}
	}, {
		key: 'delete',
		value: function _delete() {}
	}]);

	return crud;
}();

},{}],2:[function(require,module,exports){
'use strict';

// ========================= Progress Bar =========================
// on page load...
moveProgressBar();
$(window).resize(function () {
    moveProgressBar();
});

// SIGNATURE PROGRESS
function moveProgressBar() {
    var getPercent = $('.progress-wrap').data('progress-percent') / 100;
    var getProgressWrapWidth = $('.progress-wrap').width();
    var progressTotal = getPercent * getProgressWrapWidth;
    var animationLength = 2500;

    $('.progress-bar').stop().animate({
        left: progressTotal
    }, animationLength);
}

// ========================= Progress Bar =========================


// ========================= modal =========================
$('#layer').click(function (event) {
    /* Act on the event */
    // alert('ok');
    $('#modal').fadeOut();
    $('#layer').fadeOut();
});

// ========================= modal =========================

},{}],3:[function(require,module,exports){
'use strict';

var _interactions = require('./interactions');

var progressBar = _interopRequireWildcard(_interactions);

var _view = require('./view');

var view = _interopRequireWildcard(_view);

var _controller = require('./controller');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var createTask = new _controller.crud('create', view.template.task);

},{"./controller":1,"./interactions":2,"./view":4}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var template = {};

template.task = "\n\t<li>1</li>\n\t<li>2</li>\n\t<li>3</li>\n";

template.client = "\n\t<li>1</li>\n\t<li>2</li>\n\t<li>3</li>\n";

exports.template = template;

},{}]},{},[3]);
