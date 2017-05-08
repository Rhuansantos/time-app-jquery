import * as progressBar from './interactions';
import {model} from './model';
import {templates as view} from './view';
import {crud} from './controller';


$(document).ready(function($) {

	// if the initial data is not there yet do it
	if(localStorage.tasks == null || localStorage.tasks == 'undefined'){
		location.reload();
		model.loadJson();
	}

	// print the data
	model.loadLocalStorage();

	// adding task
	$('#addTask').on('click', function(event) {
		let key = '5';
		let taskVal = $('#add-task').val();
		let createTasks = new crud('create', key, taskVal);
		$('#add-task').val('');

	});

	// deleting task
	$('.deleteTask').on('click', function(event) {

		let dataKey = $(this).attr('data-id');
		let deleteTasks = new crud('delete', dataKey, null);

	});






});
