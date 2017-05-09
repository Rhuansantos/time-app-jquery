import * as progressBar from './interactions';
import {modal} from './interactions';
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
    	
    	let taskInput = $('#add-task').val();
    	let validateTask = new validationForm(taskInput, 'text');
  
    });

	// deleting task
	$($).on('click', '.deleteTask', function(event) {

		const dataKey =  $(this).attr('data-id');

		// confirmation modal
		modal();

		$('#delete-yes').click(function(event) {

			let deleteTasks = new crud('delete', dataKey, null);

			$('#delete-confirmation').addClass('animated hinge').delay(1200).queue(function(next){

			    $('#delete-confirmation').hide();
			    $('#delete-confirmation').removeClass("animated hinge");

			    next();
			});;

	
  			$('#layer').fadeOut(1200);


		});


	});


});
