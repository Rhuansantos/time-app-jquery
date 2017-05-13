import {templates} from './view'; 


export class model {

// getting initial data for tasks
static loadJson(){

	let buildObj = [];

	$.getJSON( "js/data.json", function( data ) {

	  $.each( data.projectTasks, function( key, val ) {

	  	buildObj[key] = val;
	  	// buildObj.data = val;

	  });

	  console.log(buildObj);

	  let storeTasks = localStorage.setItem("tasks", JSON.stringify(buildObj));
	
	});


}

static loadLocalStorage(){

	try {
		
		let getTasks   	= localStorage.getItem("tasks");	
		let getData 	= JSON.parse(getTasks);

		// from JSON
  		$.each(getData, function(i, el) {
			templates.task(i ,el);
		});

	}
	catch(err) {
	    console.log(err);
	}

	}	

}





