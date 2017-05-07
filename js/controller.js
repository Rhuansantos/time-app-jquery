export class crud {
	constructor(_methods, _view) {
		this.methods = _methods;
		this.view = _view;

		if(this.methods == 'create'){
			this.create();
		}
	}
	create(){
		$('#to-do-list').append(this.view);
	}
	update(){

	}
	delete(){

	}
}


