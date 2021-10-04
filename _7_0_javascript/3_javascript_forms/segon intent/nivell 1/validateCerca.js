const form = document.getElementById('myFormId');

function registerValidate() {
	var acumErrores = 0;
	
	form.classList.remove('is-invalid');
	
	
	var inputCerca = document.forms["myForm"]["inputCerca"];
	

	if(inputCerca.value == "") {
		inputCerca.classList.add("is-invalid");
		document.getElementById("errorCerca").textContent = "Aquest camp és obligatori";
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


