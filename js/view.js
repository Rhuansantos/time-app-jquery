// const template = {};

let taskInput = $('#add-task').val();

export class templates {
	
	static task (key, _value) {

		let template = `
		<li>
			<input type="text" value="${_value}" disabled>
			<span data-id="${key}" class="deleteTask"><i class="fa fa-minus-circle" aria-hidden="true"></i><span>
		</li>
		`;

		$('#to-do-list').append(template);
	}

}