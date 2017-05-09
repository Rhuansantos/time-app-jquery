import {templates} from './view'; 

export class crud {

	constructor(_methods, _key, _value) {
		this.methods = _methods;
		this.key = _key;
		this.value = _value;

		if(this.methods === 'create'){
			this.create();
		}
		if(this.methods === 'delete'){
			this.delete();
		}
		if(this.methods === 'update'){
			this.update();
		}
	}
	create(){

		// temporary array to push the information
		let data = [];

		// new array to restore everything
		let newTasks = [];
		newTasks = this.value;
		
		data.task = JSON.parse(localStorage.getItem('tasks')) || [];

		data.task.push(newTasks);

		// storing the data
		let storeTasks = localStorage.setItem("tasks", JSON.stringify(data.task));

		// print result
		templates.task(this.key, this.value);


	}
	update(){

		let data = [];

		// new array to restore everything
		let newTasks = [];
		newTasks = this.value;

		data.task = JSON.parse(localStorage.getItem('tasks')) || [];

		data.task.push(newTasks);

		// storing the data
		let storeTasks = localStorage.setItem("tasks", JSON.stringify(data.task));

		// print result
		templates.task(this.key, this.value);

	}
	delete(){

		let data = [];

		data.task = JSON.parse(localStorage.getItem('tasks')) || [];

		data.task.splice(this.key, 1);

		let storeTasks = localStorage.setItem("tasks", JSON.stringify(data.task));
		
		// $('[data-id=' + this.key + ']').fadeOut();

	}

}