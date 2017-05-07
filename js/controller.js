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
	}
	create(){

		// temporary array to push the information
		let data = [];

		// new array to restore everything
		let newTasks = [];
		newTasks = this.value;
		
		data.task = JSON.parse(localStorage.getItem('new-tasks')) || [];

		data.task.push(newTasks);

		// storing the data
		let storeTasks = localStorage.setItem("new-tasks", JSON.stringify(data.task));

		// print result
		templates.task(this.key, this.value);


	}
	update(){

	}
	delete(){
		
		$('[data-id=' + this.key + ']').fadeOut();

		// localStorage.removeItem('tasks'+this.key);
	}

}