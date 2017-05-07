// const template = {};

let taskInput = $('#add-task').val();

export class templates {
	
	static task (_value) {
		console.log('method task loaded', _value);
		let template = `
		<li>
			<input type="text" value="${_value}" disabled>
			<i class="fa fa-minus-circle" aria-hidden="true"></i>
		</li>
		`;

		$('#to-do-list').append(template);
	}

}