export class crud {

	constructor(_methods, _key) {
		this.methods = _methods;
		this.key = _key;

		if(this.methods === 'create'){
			this.create();
		}
		if(this.methods === 'delete'){
			this.delete();
		}
	}
	create(){

	}
	update(){

	}
	delete(){
		console.log('tasks'+this.key);
		localStorage.removeItem('tasks'+this.key);
	}

}