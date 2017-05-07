import * as progressBar from './interactions'; 
import * as view from './view';
import {crud} from './controller'; 


var createTask = new crud('create', view.template.task);