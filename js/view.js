import {modal} from './interactions';
let taskInput = $('#add-task').val();

export class templates {
	
	static task (key, _value) {

		let template = `
		<li data-id="${key}">
			<input type="text" value="${_value}" disabled>
		</li>
		<span data-id="${key}" class="deleteTask"><i class="fa fa-minus-circle" aria-hidden="true"></i><span>
		`;

		$('#to-do-list').prepend(template);
	}


	static editModal (_value, _key) {

		$('.modal-content').remove();

		let template = `
		 	<div id="update-confirmation"  class="modal-content">
		 		<input type="text" id="update" value="${_value}">
		 		<button id="save-update" data-id="${_key}">Save changes</button>
 			</div>
		`;

	
		modal();
		console.log('function-1');
	   if($('#update-confirmation').length < 1){

	   		$('#delete-confirmation').prepend(template);
	   }
		
	}

	static deleteModal () {

		$('.modal-content').remove();

		let template = `
			<div id="delete-modal" class="modal-content">
		 		<h4>Are you sure that you want to delete this item?</h4>
		 		<button id="delete-yes">Yes</button>
		 		<button id="delete-no">No</button>
	 		</div>
		`;

		modal();
		console.log('function-2');

	  	if($('#delete-modal').length < 1){

			$('#delete-confirmation').prepend(template);

		}
	}

}