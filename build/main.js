(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
'use strict';

var _interactions = require('./interactions');

var progressBar = _interopRequireWildcard(_interactions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

},{"./interactions":1}]},{},[2]);