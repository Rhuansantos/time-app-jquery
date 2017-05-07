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
		// console.log();
	}
	update(){

	}
	delete(){
		
		$('[data-id=' + this.key + ']').fadeOut();

		// localStorage.removeItem('tasks'+this.key);
	}

}