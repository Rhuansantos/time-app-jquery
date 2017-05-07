import * as progressBar from './interactions'; 
// import {loadJson as localStorage } from './model'; 
import { model} from './model';
import {templates as view} from './view'; 
import {crud} from './controller'; 


$(document).ready(function($) {

	// if the initial data is not there yet do it
	if(localStorage.tasks == null){
		
		model.loadJson();
	}

	// print the data
	model.loadLocalStorage();

	// adding task
	$('#addTask').click(function(event) {

		let taskVal = $('#add-task').val();
		let createTasks = new crud('create');

	});

	// deleting task
	$('.deleteTask').click(function(event) {

		let dataKey = $(this).attr('data-id');
		console.log(dataKey);
		let deleteTasks = new crud('delete', dataKey);

	});






});

