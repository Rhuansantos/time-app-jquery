import * as progressBar from './interactions';
import {validationForm} from './validationForm';
import {model} from './model';
import {templates} from './view'; 
import {crud} from './controller';

let editKey = 0;
let taskEditInput = null;

$(document).ready(function($) {


	// if the initial data is not there yet do it
	if(localStorage.tasks == null || localStorage.tasks == 'undefined'){
		model.loadJson();
		// location.reload();
	}

	// print the data
	model.loadLocalStorage();

	//adding new element
    $('#addTask').click(function(event) {

    	const taskInput = $('#add-task').val();
    	const validateTask = new validationForm(taskInput, 'text');
  
    });

	$($).on('click', '#to-do-list > li', function test(event) {

		let dataKey =  $(this).attr('data-id');

		editKey =  $(this).index()+1;

		taskEditInput = $('#to-do-list > li:nth-child('+ editKey +') > input[type="text"]').val();

		templates.editModal(taskEditInput, dataKey);

		$('#update').val(taskEditInput);
				

	});


	$($).on('click', '#save-update', function test(event) {

		taskEditInput = $('#update').val();

		let dataKey =  $(this).attr('data-id');

		console.log(dataKey);

		let deleteTasks = new crud('delete', dataKey, null);
		let updateTasks = new crud('update', editKey, taskEditInput);

		$('#layer, #delete-confirmation').fadeOut();
			

	});

		

	// deleting task
	$($).on('click', '.deleteTask', function(event) {

		const dataKey =  $(this).attr('data-id');

		templates.deleteModal();

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
