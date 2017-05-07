import {templates} from './view'; 

$.getJSON( "js/data.json", function( data ) {
	
  $.each( data, function( key, val ) {
  	console.log(data.tasks);
  	templates.task(data.tasks[1]);
  });
 
});

