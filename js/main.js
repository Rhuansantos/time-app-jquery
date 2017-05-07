import * as progressBar from './interactions'; 
// import {loadJson as localStorage } from './model'; 
import { model} from './model';
import {templates as view} from './view'; 
import {crud} from './controller'; 


jQuery(document).ready(function($) {

	$('#addTask').click(function(event) {

		let taskVal = $('#add-task').val();
		let createTasks = new crud('create');

	});

	$('.deleteTask').click(function(event) {

		let dataKey = $(this).attr('data-id');
		console.log(dataKey);
		let deleteTasks = new crud('delete', dataKey);

	});

	model.loadJson();
	model.loadLocalStorage();


});

