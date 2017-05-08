


export class validationForm {

	constructor(input, type) {
		this.input = input;
		this.type = type;

		let exec = this.verifyErrors();

        console.log('hey', this.input);
	}

    static feedback(error){

       let inputStatus = error;

       console.log('daqui', inputStatus);

       if(inputStatus !== 'ok'){
            return 'error';
         }else{
             return 'ok';
         }
    }

    verifyErrors() {

        let status = this.input;

        if(this.type == 'text'){

            if(status.length < 3){
                $(".alert").fadeIn();
                $(".alert").append('this value is too short');
            }
            if(status.length > 50){
                $(".alert").fadeIn();
                $(".alert").append('this value is too long');
            }

            if(status.length > 3 && status.length < 50){
                $(".alert").fadeOut();
                validationForm.feedback('ok');
            }
        }        
    }


}
