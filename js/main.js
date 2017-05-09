import * as progressBar from './interactions';
import {validationForm} from './validationForm';
import {model} from './model';
import {templates} from './view'; 
import {crud} from './controller';


$(document).ready(function($) {

	// if the initial data is not there yet do it
	if(localStorage.tasks == null || localStorage.tasks == 'undefined'){
		location.reload();
		model.loadJson();
	}

	// print the data
	model.loadLocalStorage();

	//adding new element
    $('#addTask').click(function(event) {

    	const taskInput = $('#add-task').val();
    	const validateTask = new validationForm(taskInput, 'text');
  
    });

	$($).on('click', '#to-do-list > li', '.editTask', function(event) {

		// const dataKey =  $(this).attr('data-id');

		const dataKey =  $(this).index()+1;

		console.log(dataKey);
		const taskInput = $('#to-do-list > li:nth-child('+ dataKey +') > input[type="text"]').val();

		// templates.editModal(taskInput);



		// const updateTasks = new crud('update', dataKey, taskInput);



	});

	// deleting task
	$($).on('click', '.deleteTask', function(event) {

		const dataKey =  $(this).attr('data-id');

		templates.deleteModal();
		// confirmation modal
		// modal();

		$('#delete-yes').click(function(event) {

			const deleteTasks = new crud('delete', dataKey, null);

			$('#delete-confirmation').addClass('animated hinge').delay(1200).queue(function(next){

			    $('#delete-confirmation').hide();
			    $('#delete-confirmation').removeClass("animated hinge");

			    next();
			});;

	
  			$('#layer').fadeOut(1200);


		});


	});


});
