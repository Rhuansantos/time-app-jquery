import {templates} from './view'; 

let userTasks = {};


// getting initial data for tasks
$.getJSON( "js/data.json", function( data ) {

  $.each( data.projectTasks, function( key, val ) {

  	// console.log(data.projectTasks);

  	let storeTasks = localStorage.setItem("tasks"+key+"", JSON.stringify(data.projectTasks[key]));
  	let getTasks   = localStorage.getItem("tasks"+key+"");
	let convertTasks = {};
	convertTasks[key]   = JSON.parse(getTasks);

	console.log(convertTasks);

	$.each(convertTasks, function(i, el) {

		templates.task(i ,el);

	});

  });
 
});