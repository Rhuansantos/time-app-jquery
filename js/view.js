import {modal} from './interactions';
let taskInput = $('#add-task').val();

export class templates {
	
	static task (key, _value) {

		let template = `
		<li data-id="${key}">
			<input type="text" value="${_value}" disabled>
			<span data-id="${key}" class="editTask"><i class="fa fa-pencil" aria-hidden="true"></i></span>
			<span data-id="${key}" class="deleteTask"><i class="fa fa-minus-circle" aria-hidden="true"></i><span>
		</li>
		`;

		$('#to-do-list').prepend(template);
	}


	static editModal (_value) {

		let template = `
		 	<div id="update-confirmation">
		 		<input type="text" id="update" value="${_value}">
		 		<h4>Do you wanna save your changes?</h4>
		 		<button id="delete-yes">Yes</button>
		 		<button id="delete-no">No</button>
 			</div>
		`;

		modal();

	   if($('#update-confirmation').length < 1){

	   		$('#delete-confirmation').prepend(template);
	   }
		
	}

	static deleteModal () {

		let template = `
			<div id="delete-modal">
		 		<h4>Are you sure that you want to delete this item?</h4>
		 		<button id="delete-yes">Yes</button>
		 		<button id="delete-no">No</button>
	 		</div>
		`;

		modal();

	  if($('#delete-modal').length < 1){
	  	
		$('#delete-confirmation').prepend(template);

		}
	}

}