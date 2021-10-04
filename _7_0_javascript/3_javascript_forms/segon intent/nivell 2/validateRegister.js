const form = document.getElementById('myFormId');

function registerValidate() {
	var acumErrores = 0;
	
	form.classList.remove('is-invalid');
	
	var inputEmail = document.getElementById('inputEmail');
	
	var inputPassword = document.forms["myForm"]["inputPassword"];

	var inputPassword2 = document.forms["myForm"]["inputPassword2"];
	
	var inputProvince = document.forms["myForm"]["inputProvince"];
	

	if(inputEmail.value == "") {
		inputEmail.classList.add("is-invalid");
		document.getElementById("errorEmail").textContent = "Es campo es obligatorio";
        acumErrores ++;
    }else if(!validar_email(inputEmail.value)){
		inputEmail.classList.add("is-invalid");
		document.getElementById("errorEmail").textContent = "El email no cumple el formato";
		acumErrores ++;
	}

	let upper  =/[A-Z]/;
	let number = /[0-9]/;

    if(inputPassword.value == "") {
		inputPassword.classList.add("is-invalid");
		document.getElementById("errorPassword").textContent = "Es campo es obligatorio";
		acumErrores ++;

	} else if (inputPassword.value.length < 8) {
		inputPassword.classList.add("is-invalid");
		document.getElementById("errorPassword").textContent = "Ha de tenir un mínim de 8 caràcters";
		acumErrores ++;

	} else if (!number.test(inputPassword.value)) {
		inputPassword.classList.add("is-invalid");
		document.getElementById("errorPassword").textContent = "Ha de tenir almenys un número";
		acumErrores ++;
			
	} else if (!upper.test(inputPassword.value)) {
		inputPassword.classList.add("is-invalid");
		document.getElementById("errorPassword").textContent = "Ha de tenir almenys una majúscula";
		acumErrores ++;
	
	  } 

	if(inputPassword2.value == "") {
		inputPassword2.classList.add("is-invalid");
		document.getElementById("errorPassword2").textContent = "Aquest camp és obligatori";
		acumErrores ++;
	} else if (inputPassword2.value !== inputPassword.value) {
		inputPassword2.classList.add("is-invalid");
		document.getElementById("errorPassword2").textContent = "Les contrassenyes no conincideixen";
		acumErrores ++;
	}
	
    if(inputProvince.value == "") {
		inputProvince.classList.add("is-invalid");
		document.getElementById("errorProvince").textContent = "La provincia es obligatoria";
		acumErrores ++;
	}
	
	if (acumErrores > 0){
        return false;
    }else{
		return true;
	}
}



form.addEventListener('blur', (event) => {
	console.log(event);
	if(event.target.value!='') event.target.classList.remove('is-invalid');
    //registerValidate();
}, true);

function validar_email(email) {
	var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return regex.test(email) ? true : false;
}
