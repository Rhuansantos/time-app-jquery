export class crud {

	constructor(_methods, _view, _value) {
		this.methods = _methods;
		this.view = _view;
		this.value = _value;

		if(this.methods === 'create'){
			this.create();
		}
	}
	create(){
		// console.log('oi eu sou um valor', this.value);
		$('#to-do-list').append(this.view);
	}
	update(){

	}
	delete(){

	}

}