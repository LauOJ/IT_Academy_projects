// VARIABLES PER A CADA FORM
const form_login = document.getElementById("loginFormId");
const form_cerca = document.getElementById("cercaFormId");
const form_register = document.getElementById("registerFormId");


// FUNCIÓ PER VALIDAR LOGIN
function loginValidate() {
  var acumErrores = 0;

 form_login.classList.remove("is-invalid");

  var inputEmail = document.getElementById("inputEmail");

  var inputPassword = document.forms["loginForm"]["inputPassword"];

  if (inputEmail.value == "") {
    inputEmail.classList.add("is-invalid");
    document.getElementById("errorEmail").textContent =
      "Es campo es obligatorio";
    acumErrores++;
  } else if (!validar_email(inputEmail.value)) {
    inputEmail.classList.add("is-invalid");
    document.getElementById("errorEmail").textContent =
      "El email no cumple el formato";
    acumErrores++;
  }

  if (inputPassword.value == "") {
    inputPassword.classList.add("is-invalid");
    document.getElementById("errorPassword").textContent =
      "Es campo es obligatorio";
    acumErrores++;
  }

  if (acumErrores > 0) {
    return false;
  } else {
    return true;
  }
}

// FUNCIÓ PER VALIDAR CERCA
function cercaValidate() {
  var acumErrores = 0;

  //form_cerca.classList.remove("is-invalid");

  var inputCerca = document.forms["cercaForm"]["inputCerca"];

  if (inputCerca.value == "") {
    inputCerca.classList.add("is-invalid");
    document.getElementById("errorCerca").textContent =
      "Aquest camp és obligatori";
    acumErrores++;
  }

  if (acumErrores > 0) {
    return false;
  } else {
    return true;
  }
}

// FUNCIÓ PER VALIDAR REGISTER
function registerValidate() {
	var acumErrores = 0;
	
	form_register.classList.remove('is-invalid');
	
	var inputEmail = document.getElementById('inputEmail');
	
	var inputPassword = document.forms["registerForm"]["inputPassword"];

	var inputPassword2 = document.forms["registerForm"]["inputPassword2"];
	
	var inputProvince = document.forms["registerForm"]["inputProvince"];
	

	if(inputEmail.value == "") {
		inputEmail.classList.add("is-invalid");
		document.getElementById("errorEmail").textContent = "Es campo es obligatorio";
        acumErrores ++;
    }else if(!validar_email(inputEmail.value)){
		inputEmail.classList.add("is-invalid");
		document.getElementById("errorEmail").textContent = "El email no cumple el formato";
		acumErrores ++;
	}

    if(inputPassword.value == "") {
		inputPassword.classList.add("is-invalid");
		document.getElementById("errorPassword").textContent = "Es campo es obligatorio";
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

if (form_cerca) {
  form_cerca.addEventListener(
    "blur",
    (event) => {
      console.log(event);
      if (event.target.value != "") event.target.classList.remove("is-invalid");
      //registerValidate();
    },
    true
  );
}

if (form_login) {
  form_login.addEventListener(
    "blur",
    (event) => {
      console.log(event);
      if (event.target.value != "") event.target.classList.remove("is-invalid");
      //registerValidate();
    },
    true
  );
}

if (form_register) {
  form_register.addEventListener(
    "blur",
    (event) => {
      console.log(event);
      if (event.target.value != "") event.target.classList.remove("is-invalid");
      //registerValidate();
    },
    true
  );
}

function validar_email(email) {
  var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email) ? true : false;
}
