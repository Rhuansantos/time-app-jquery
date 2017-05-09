import {crud} from './controller';

export class validationForm {

	constructor(input, type) {
		this.input = input;
		this.type = type;

		let exec = this.verifyErrors();

	}

    verifyErrors() {

        let status = this.input;

        if(this.type == 'text'){

            if(status.length <= 4){

              if($('.error-msg').length < 1){
                  $(".alert").fadeIn();
                  $(".alert").append('<span class="error-msg">this value is too short</span>');
              }

            }
            if(status.length >= 50){
                if($('.error-msg').length < 1){
                  $(".alert").fadeIn();
                  $(".alert").append('<span class="error-msg">this value is too long</span>');
                }
            }

            if(status.length >= 4 && status.length <= 50){
                $(".alert").fadeOut();
                $(".error-msg").remove();

                  let taskVal = $('#add-task').val(); 
                  let key = '5';
                  let createTasks = new crud('create', key, taskVal);
                 
                 
                 $('#add-task').val('');
            }
        }        
    }
}
