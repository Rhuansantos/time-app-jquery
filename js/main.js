import * as progressBar from './interactions';
import {validationForm} from './validationForm';
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


    $('#addTask').click(function(event) {

        const taskInput = $('#add-task').val();

        // instanciate inputs
        let validateName = new validationForm(taskInput, 'text');
       	let inputFeedback = validationForm.feedback();


		 let key = '5';
		 let taskVal = $('#add-task').val();
		 let createTasks = new crud('create', key, taskVal);
		 $('#add-task').val('');
     


    });

	// deleting task
	$($).on('click', '.deleteTask', function(event) {

		const dataKey =  $(this).attr('data-id');
		let deleteTasks = new crud('delete', dataKey, null);

	});


});
