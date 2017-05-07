(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.crud = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _view = require('./view');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var crud = exports.crud = function () {
	function crud(_methods, _key, _value) {
		_classCallCheck(this, crud);

		this.methods = _methods;
		this.key = _key;
		this.value = _value;

		if (this.methods === 'create') {
			this.create();
		}
		if (this.methods === 'delete') {
			this.delete();
		}
	}

	_createClass(crud, [{
		key: 'create',
		value: function create() {

			// temporary array to push the information
			var data = [];

			// new array to restore everything
			var newTasks = [];
			newTasks = this.value;

			data.task = JSON.parse(localStorage.getItem('new-tasks')) || [];

			data.task.push(newTasks);

			// storing the data
			var storeTasks = localStorage.setItem("new-tasks", JSON.stringify(data.task));

			// print result
			_view.templates.task(this.key, this.value);
		}
	}, {
		key: 'update',
		value: function update() {}
	}, {
		key: 'delete',
		value: function _delete() {

			$('[data-id=' + this.key + ']').fadeOut();

			// localStorage.removeItem('tasks'+this.key);
		}
	}]);

	return crud;
}();

},{"./view":5}],2:[function(require,module,exports){
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

var _model = require('./model');

var _view = require('./view');

var _controller = require('./controller');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

$(document).ready(function ($) {

	// if the initial data is not there yet do it
	if (localStorage.tasks == null || localStorage.tasks == 'undefined') {
		location.reload();
		_model.model.loadJson();
	}

	// print the data
	_model.model.loadLocalStorage();

	// adding task
	$('#addTask').on('click', function (event) {
		var key = '5';
		var taskVal = $('#add-task').val();
		var createTasks = new _controller.crud('create', key, taskVal);
		$('#add-task').val('');
	});

	// deleting task
	$('.deleteTask').on('click', function (event) {

		var dataKey = $(this).attr('data-id');
		var deleteTasks = new _controller.crud('delete', dataKey, null);
	});
});

},{"./controller":1,"./interactions":2,"./model":4,"./view":5}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.model = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _view = require("./view");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var model = exports.model = function () {
	function model() {
		_classCallCheck(this, model);
	}

	_createClass(model, null, [{
		key: "loadJson",


		// getting initial data for tasks
		value: function loadJson() {

			var buildObj = {};

			$.getJSON("js/data.json", function (data) {

				$.each(data.projectTasks, function (key, val) {

					buildObj[key] = val;
				});

				var storeTasks = localStorage.setItem("tasks", JSON.stringify(buildObj));
			});
		}
	}, {
		key: "loadLocalStorage",
		value: function loadLocalStorage() {

			try {

				var getTasks = localStorage.getItem("tasks");
				var getData = JSON.parse(getTasks);

				var newGetTasks = localStorage.getItem("new-tasks");
				var newGetData = JSON.parse(newGetTasks);

				// from JSON
				$.each(getData, function (i, el) {
					_view.templates.task(i, el);
				});

				// from localStorage
				$.each(newGetData, function (i, el) {
					console.log(i, el);
					_view.templates.task(i, el);
				});
			} catch (err) {
				console.log(err);
			}
		}
	}]);

	return model;
}();

},{"./view":5}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// const template = {};

var taskInput = $('#add-task').val();

var templates = exports.templates = function () {
	function templates() {
		_classCallCheck(this, templates);
	}

	_createClass(templates, null, [{
		key: 'task',
		value: function task(key, _value) {

			var template = '\n\t\t<li data-id="' + key + '">\n\t\t\t<input type="text" value="' + _value + '" disabled>\n\t\t\t<span data-id="' + key + '" class="deleteTask"><i class="fa fa-minus-circle" aria-hidden="true"></i><span>\n\t\t</li>\n\t\t';

			$('#to-do-list').prepend(template);
		}
	}]);

	return templates;
}();

},{}]},{},[3]);
