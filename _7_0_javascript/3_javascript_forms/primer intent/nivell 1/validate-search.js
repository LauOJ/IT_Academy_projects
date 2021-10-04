const form = document.getElementById("form");

const cerca = document.getElementById("cerca");

form.addEventListener("submit", (e) =>{
    e.preventDefault();

    checkInputs();
})

function checkInputs(){
    const cercaValue = cerca.value.trim();

   //CHECKING SEARCH
   if(cercaValue === '') {
    setErrorFor(cerca, 'Has d\'escriure alguna cosa');
    } else if (cercaValue.length < 3){
        setErrorFor(cerca, 'Ha de ser una paraula més llarga');
    } else {
    setSuccessFor(cerca);
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


