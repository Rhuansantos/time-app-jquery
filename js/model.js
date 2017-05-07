import {templates} from './view'; 

// getting initial data for tasks
$.getJSON( "js/data.json", function( data ) {

  $.each( data.projectTasks, function( key, val ) {
  	templates.task(data.projectTasks[key]);
  });
 
});

