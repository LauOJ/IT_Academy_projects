"use strict";
var car;
var carForm = document.getElementById("carForm");
var wheelForm = document.getElementById("wheelForm");
var carArray = [];
// FUNCIÓ PER VALIDAR COTXE
function validateCar() {
    var controlErrores = 0;
    var matricula = document.getElementById("inputMatricula");
    var color = document.getElementById("inputColor");
    var marca = document.getElementById("inputMarca");
    var errorMatricula = document.getElementById("errorMatricula");
    var errorColor = document.getElementById("errorColor");
    var errorMarcaCotxe = document.getElementById("errorMarcaCotxe");
    var MatriculaRegex = /^[a-zA-Z]{4}[\d]{3}$/;
    if (!matricula.value.match(MatriculaRegex)) {
        matricula.classList.add("is-invalid");
        errorMatricula.textContent = "La matrícula ha de tenir quatre lletres i tres números";
        controlErrores++;
    }
    else {
        matricula.classList.remove("is-invalid");
    }
    if (color.value == "") {
        color.classList.add("is-invalid");
        errorColor.textContent = "Aquest camp és obligatori";
        controlErrores++;
    }
    else {
        color.classList.remove("is-invalid");
    }
    if (marca.value == "") {
        marca.classList.add("is-invalid");
        errorMarcaCotxe.textContent = "Aquest camp és obligatori";
        controlErrores++;
    }
    else {
        marca.classList.remove("is-invalid");
    }
    if (controlErrores == 0) {
        createCar(matricula.value, color.value, marca.value);
    }
}
//FUNCIO PER CREAR EL COTXE
function createCar(matriculaValor, colorValor, marcaValor) {
    car = new Car(matriculaValor, colorValor, marcaValor);
    var carForm = document.getElementById("carForm");
    var carInfo = document.getElementById("carInfo");
    var wheelForm = document.getElementById("wheelForm");
    carInfo.classList.add("resultat");
    carForm.classList.add("noForm");
    wheelForm.classList.remove("noForm");
    document.getElementById("carInfo").innerHTML =
        "<b>COTXE</b> <br> MATRÍCULA: " +
            car.plate +
            " <br> COLOR: " +
            car.color +
            " <br> MARCA: " +
            car.brand;
    //  " <br> RODES: " + JSON.stringify(car.wheels);
    carArray.push(Car);
    console.log(carArray);
}
// FUNCIÓ PER VALIDAR RODES
function validateWheels() {
    var controlErrores = 0;
    for (var i = 0; i < 4; i++) {
        //VARIABLES GENÈRIQUES
        var marca = document.getElementById("marca" + i);
        var diametre = document.getElementById("diametre" + i);
        var errorMarca = document.getElementById("errorMarca" + i);
        var errorDiametre = document.getElementById("errorDiametre" + i);
        var minDiametre = 0.2;
        var maxDiametre = 4;
        if (marca.value == "") {
            marca.classList.add("is-invalid");
            errorMarca.textContent = "Aquest camp és obligatori";
            controlErrores++;
        }
        else {
            marca.classList.remove("is-invalid");
        }
        if (Number(diametre.value) < minDiametre || Number(diametre.value) > maxDiametre) {
            diametre.classList.add("is-invalid");
            errorDiametre.textContent = "El diàmetre ha d'estar entre 0.2 i 4";
            controlErrores++;
        }
        else {
            diametre.classList.remove("is-invalid");
        }
    }
    if (controlErrores == 0) {
        for (var i = 0; i < 4; i++) {
            var marca = document.getElementById("marca" + i);
            var diametre = document.getElementById("diametre" + i);
            car.addWheel(new Wheel(Number(diametre.value), marca.value));
        }
    }
    var wheelInfo = document.getElementById("wheelInfo");
    wheelInfo.classList.add("resultat");
    wheelInfo.classList.remove("noForm");
    var wheelInfoBtn = document.getElementById("wheelInfoBtn");
    wheelInfoBtn.classList.remove("noForm");
    document.getElementById("wheelInfo").innerHTML =
        "<b>RODES</b> <br>" + JSON.stringify(car.wheels);
}
// CREAR UN COTXE NOU
function nouCotxe() {
    var carForm = document.getElementById("carForm");
    var wheelForm = document.getElementById("wheelForm");
    var carInfo = document.getElementById("carInfo");
    wheelForm.reset();
    carForm.reset();
    carInfo.classList.remove("resultat");
    carInfo.innerHTML = "";
    carForm.classList.remove("noForm");
    wheelForm.classList.add("noForm");
    var wheelInfoBtn = document.getElementById("wheelInfoBtn");
    var wheelInfo = document.getElementById("wheelInfo");
    wheelInfo.classList.remove("resultat");
    wheelInfo.classList.add("noForm");
    wheelInfoBtn.classList.add("noForm");
}
