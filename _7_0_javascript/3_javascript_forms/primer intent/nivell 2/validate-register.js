const form = document.getElementById("form");

const email = document.getElementById("email");

const password = document.getElementById("password");

const password2 = document.getElementById("password2");

const provincia = document.getElementById("provincia");

form.addEventListener("submit", (e) =>{
    e.preventDefault();

    checkInputs();
})

function checkInputs(){
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();
  const provinciaValue = provincia.value.trim();
  
     //CHECKING EMAIL
    if(emailValue === '') {
    setErrorFor(email, 'Aquest camp és obligatori');
    } else if (!isEmail(emailValue)) {
    setErrorFor(email, 'No és un email vàlid');
    } else {
    setSuccessFor(email);
    }  

//CHECKING PASSWORD

let upper  =/[A-Z]/;
let number = /[0-9]/;

if(passwordValue === '') {

    setErrorFor(password, 'Aquest camp és obligatori');

} else if (passwordValue.length < 8){

    setErrorFor(password, 'Ha de tenir més de 8 caràcters');

} else if (!number.test(passwordValue)) {

    setErrorFor(password, 'Ha de tenir almenys un número');

} else if (!upper.test(passwordValue)) {

    setErrorFor(password, 'Ha de tenir almenys una majúscula');

  } else {  
      setSuccessFor(password);
}

//CHECKING PASSWORD2
if(password2Value === '') {
    setErrorFor(password2, 'Aquest camp és obligatori');
} else if(passwordValue !== password2Value) {
    setErrorFor(password2, 'Les contrassenyes no són iguals');
} else{
    setSuccessFor(password2);
}

//CHECKING PROVINCIA
if(provinciaValue === '') {
    setErrorFor(provincia, 'Aquest camp és obligatori');
} else {
    setSuccessFor(provincia);
}

}




function setErrorFor(input, message) {
const formControl = input.parentElement;
const small = formControl.querySelector('small');
formControl.className = 'form-control error';
small.innerText = message;
}

function setSuccessFor(input) {
const formControl = input.parentElement;
formControl.className = 'form-control success';
}


function isEmail(email) {
return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

