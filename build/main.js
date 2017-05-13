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
		if (this.methods === 'update') {
			this.update();
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

			data.task = JSON.parse(localStorage.getItem('tasks')) || [];

			data.task.push(newTasks);

			// storing the data
			var storeTasks = localStorage.setItem("tasks", JSON.stringify(data.task));

			// print result
			_view.templates.task(this.key, this.value);
		}
	}, {
		key: 'update',
		value: function update() {

			var data = [];

			// new array to restore everything
			var newTasks = [];
			newTasks = this.value;

			data.task = JSON.parse(localStorage.getItem('tasks')) || [];

			data.task.push(newTasks);

			// storing the data
			var storeTasks = localStorage.setItem("tasks", JSON.stringify(data.task));

			// print result
			_view.templates.task(this.key, this.value);
		}
	}, {
		key: 'delete',
		value: function _delete() {

			var data = [];

			data.task = JSON.parse(localStorage.getItem('tasks')) || [];

			data.task.splice(this.key, 1);

			var storeTasks = localStorage.setItem("tasks", JSON.stringify(data.task));

			$('[data-id=' + this.key + ']').fadeOut();
		}
	}]);

	return crud;
}();

},{"./view":6}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
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
function modal() {

    $('#delete-confirmation').fadeIn();
    $('#layer').fadeIn();
    $('#delete-confirmation').addClass('animated shake');
}

$('#layer, #delete-no').click(function (event) {

    $('#delete-confirmation').addClass('animated hinge').delay(1200).queue(function (next) {

        $('#delete-confirmation').hide();
        $('#delete-confirmation').removeClass("animated hinge");

        next();
    });;

    $('#layer').fadeOut(1200);
});

exports.modal = modal;

// ========================= modal =========================

},{}],3:[function(require,module,exports){
'use strict';

var _interactions = require('./interactions');

var progressBar = _interopRequireWildcard(_interactions);

var _validationForm = require('./validationForm');

var _model = require('./model');

var _view = require('./view');

var _controller = require('./controller');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var editKey = 0;
var taskEditInput = null;

$(document).ready(function ($) {

	// if the initial data is not there yet do it
	if (localStorage.tasks == null || localStorage.tasks == 'undefined') {
		_model.model.loadJson();
		// location.reload();
	}

	// print the data
	_model.model.loadLocalStorage();

	//adding new element
	$('#addTask').click(function (event) {

		var taskInput = $('#add-task').val();
		var validateTask = new _validationForm.validationForm(taskInput, 'text');
	});

	$($).on('click', '#to-do-list > li', function test(event) {

		var dataKey = $(this).attr('data-id');

		editKey = $(this).index() + 1;

		taskEditInput = $('#to-do-list > li:nth-child(' + editKey + ') > input[type="text"]').val();

		_view.templates.editModal(taskEditInput, dataKey);

		$('#update').val(taskEditInput);
	});

	$($).on('click', '#save-update', function test(event) {

		taskEditInput = $('#update').val();

		var dataKey = $(this).attr('data-id');

		console.log(dataKey);

		var deleteTasks = new _controller.crud('delete', dataKey, null);
		var updateTasks = new _controller.crud('update', editKey, taskEditInput);

		$('#layer, #delete-confirmation').fadeOut();
	});

	// deleting task
	$($).on('click', '.deleteTask', function (event) {

		var dataKey = $(this).attr('data-id');

		_view.templates.deleteModal();

		$('#delete-yes').click(function (event) {

			var deleteTasks = new _controller.crud('delete', dataKey, null);

			$('#delete-confirmation').addClass('animated hinge').delay(1200).queue(function (next) {

				$('#delete-confirmation').hide();
				$('#delete-confirmation').removeClass("animated hinge");

				next();
			});;

			$('#layer').fadeOut(1200);
		});
	});
});

},{"./controller":1,"./interactions":2,"./model":4,"./validationForm":5,"./view":6}],4:[function(require,module,exports){
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

			var buildObj = [];

			$.getJSON("js/data.json", function (data) {

				$.each(data.projectTasks, function (key, val) {

					buildObj[key] = val;
					// buildObj.data = val;
				});

				console.log(buildObj);

				var storeTasks = localStorage.setItem("tasks", JSON.stringify(buildObj));
			});
		}
	}, {
		key: "loadLocalStorage",
		value: function loadLocalStorage() {

			try {

				var getTasks = localStorage.getItem("tasks");
				var getData = JSON.parse(getTasks);

				// from JSON
				$.each(getData, function (i, el) {
					_view.templates.task(i, el);
				});
			} catch (err) {
				console.log(err);
			}
		}
	}]);

	return model;
}();

},{"./view":6}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.validationForm = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _controller = require('./controller');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var validationForm = exports.validationForm = function () {
    function validationForm(input, type) {
        _classCallCheck(this, validationForm);

        this.input = input;
        this.type = type;

        var exec = this.verifyErrors();
    }

    _createClass(validationForm, [{
        key: 'verifyErrors',
        value: function verifyErrors() {

            var status = this.input;

            if (this.type == 'text') {

                if (status.length <= 4) {

                    if ($('.error-msg').length < 1) {
                        $(".alert").fadeIn();
                        $(".alert").append('<span class="error-msg">this value is too short</span>');
                    }
                }
                if (status.length >= 50) {
                    if ($('.error-msg').length < 1) {
                        $(".alert").fadeIn();
                        $(".alert").append('<span class="error-msg">this value is too long</span>');
                    }
                }

                if (status.length >= 4 && status.length <= 50) {
                    $(".alert").fadeOut();
                    $(".error-msg").remove();

                    var taskVal = $('#add-task').val();
                    var key = '5';
                    var createTasks = new _controller.crud('create', key, taskVal);

                    $('#add-task').val('');
                }
            }
        }
    }]);

    return validationForm;
}();

},{"./controller":1}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.templates = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _interactions = require('./interactions');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var taskInput = $('#add-task').val();

var templates = exports.templates = function () {
	function templates() {
		_classCallCheck(this, templates);
	}

	_createClass(templates, null, [{
		key: 'task',
		value: function task(key, _value) {

			var template = '\n\t\t<li data-id="' + key + '">\n\t\t\t<input type="text" value="' + _value + '" disabled>\n\t\t</li>\n\t\t<span data-id="' + key + '" class="deleteTask"><i class="fa fa-minus-circle" aria-hidden="true"></i><span>\n\t\t';

			$('#to-do-list').prepend(template);
		}
	}, {
		key: 'editModal',
		value: function editModal(_value, _key) {

			$('.modal-content').remove();

			var template = '\n\t\t \t<div id="update-confirmation"  class="modal-content">\n\t\t \t\t<input type="text" id="update" value="' + _value + '">\n\t\t \t\t<button id="save-update" data-id="' + _key + '">Save changes</button>\n \t\t\t</div>\n\t\t';

			(0, _interactions.modal)();
			console.log('function-1');
			if ($('#update-confirmation').length < 1) {

				$('#delete-confirmation').prepend(template);
			}
		}
	}, {
		key: 'deleteModal',
		value: function deleteModal() {

			$('.modal-content').remove();

			var template = '\n\t\t\t<div id="delete-modal" class="modal-content">\n\t\t \t\t<h4>Are you sure that you want to delete this item?</h4>\n\t\t \t\t<button id="delete-yes">Yes</button>\n\t\t \t\t<button id="delete-no">No</button>\n\t \t\t</div>\n\t\t';

			(0, _interactions.modal)();
			console.log('function-2');

			if ($('#delete-modal').length < 1) {

				$('#delete-confirmation').prepend(template);
			}
		}
	}]);

	return templates;
}();

},{"./interactions":2}]},{},[3]);
