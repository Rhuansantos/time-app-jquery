
let task = $('#add-task').val();

import * as progressBar from './interactions'; 
import * as model from './model'; 
// import * as view from './view';
// import {templates} from './view'; 
import {crud} from './controller'; 





$('#addTask').click(function(event) {
	// let task = $('#add-task').val();
	let createTask = new crud('create', view.template.task, task);

});