import {templates} from './view'; 


export class model {

constuctor(){
	this.tasks = {};
}

// getting initial data for tasks
static loadJson(){

	let buildObj = {};

	$.getJSON( "js/data.json", function( data ) {

	  $.each( data.projectTasks, function( key, val ) {

	  	buildObj[key] = val;

	  });

	  let storeTasks = localStorage.setItem("tasks", JSON.stringify(buildObj));
	 
	});


}

static loadLocalStorage(){

		let getTasks   = localStorage.getItem("tasks");	
		let getData = JSON.parse(getTasks);

  		$.each(getData, function(i, el) {
	
			templates.task(i ,el);

		});
	}	

}





