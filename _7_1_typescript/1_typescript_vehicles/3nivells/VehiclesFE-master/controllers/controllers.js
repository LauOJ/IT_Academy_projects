"use strict";
var car;
var carForm = document.getElementById("carForm");
var wheelForm = document.getElementById("wheelForm");
var carArray = [];
// FUNCIÓ PER VALIDAR COTXE
function validateCar() {
    var matricula = document.getElementById("inputMatricula");
    var color = document.getElementById("inputColor");
    var marca = document.getElementById("inputMarca");
    //  TREURE IS-INVALID I WAS-VALIDATED PER TORNAR A COMENÇAR
    matricula.classList.remove("is-invalid");
    color.classList.remove("is-invalid");
    marca.classList.remove("is-invalid");
    matricula.classList.remove("was-validated");
    color.classList.remove("was-validated");
    marca.classList.remove("was-validated");
    var matriculaValor = document.getElementById("inputMatricula").value;
    var colorValor = document.getElementById("inputColor")
        .value;
    var marcaValor = document.getElementById("inputMarca")
        .value;
    var MatriculaRegex = /^[a-zA-Z]{4}[\d]{3}$/;
    if (matriculaValor == "") {
        matricula.classList.add("is-invalid");
        document.getElementById("errorMatricula").textContent =
            "Aquest camp és obligatori";
    }
    else if (!matriculaValor.match(MatriculaRegex)) {
        matricula.classList.add("is-invalid");
        document.getElementById("errorMatricula").textContent =
            "La matrícula ha de tenir quatre lletres i tres números";
    }
    else {
        matricula.classList.add("was-validated");
    }
    if (colorValor == "") {
        color.classList.add("is-invalid");
        document.getElementById("errorColor").textContent =
            "Aquest camp és obligatori";
    }
    else {
        color.classList.add("was-validated");
    }
    if (marcaValor == "") {
        marca.classList.add("is-invalid");
        document.getElementById("errorMarca").textContent =
            "Aquest camp és obligatori";
    }
    else {
        marca.classList.add("was-validated");
    }
    if (matricula.classList.contains("was-validated") &&
        color.classList.contains("was-validated") &&
        marca.classList.contains("was-validated")) {
        createCar(matriculaValor, colorValor, marcaValor);
    }
    document.getElementById("carForm").reset();
}
//FUNCIO PER CREAR EL COTXE
function createCar(matriculaValor, colorValor, marcaValor) {
    car = new Car(matriculaValor, colorValor, marcaValor);
    //car.addWheel(new Wheel(2, "SEAT"));
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
    //VARIABLES PER ALS INPUTSz
    var marca1 = document.getElementById("marca1");
    var diametre1 = document.getElementById("diametre1");
    var marca2 = document.getElementById("marca2");
    var diametre2 = document.getElementById("diametre2");
    var marca3 = document.getElementById("marca3");
    var diametre3 = document.getElementById("diametre3");
    var marca4 = document.getElementById("marca4");
    var diametre4 = document.getElementById("diametre4");
    //TREURE ELS WAS-VALIDATED PER TORNAR A COMENÇAR
    marca1.classList.remove("was-validated");
    diametre1.classList.remove("was-validated");
    marca2.classList.remove("was-validated");
    diametre2.classList.remove("was-validated");
    marca3.classList.remove("was-validated");
    diametre3.classList.remove("was-validated");
    marca4.classList.remove("was-validated");
    diametre4.classList.remove("was-validated");
    //VARIABLES PER AL VALOR DELS INPUTS
    var marca1Valor = document.getElementById("marca1")
        .value;
    var diametre1Valor = +document.getElementById("diametre1").value;
    var marca2Valor = document.getElementById("marca2")
        .value;
    var diametre2Valor = +document.getElementById("diametre2").value;
    var marca3Valor = document.getElementById("marca3")
        .value;
    var diametre3Valor = +document.getElementById("diametre3").value;
    var marca4Valor = document.getElementById("marca4")
        .value;
    var diametre4Valor = +document.getElementById("diametre4").value;
    //VALIDAR
    var minDiametre = 0.2;
    var maxDiametre = 4;
    //RODA 1
    if (marca1Valor == "") {
        marca1.classList.add("is-invalid");
        document.getElementById("errorMarca1").textContent =
            "Aquest camp és obligatori";
    }
    else {
        marca1.classList.add("was-validated");
    }
    if (diametre1Valor == 0) {
        diametre1.classList.add("is-invalid");
        document.getElementById("errorDiametre1").textContent =
            "Aquest camp és obligatori";
    }
    else if (diametre1Valor < minDiametre ||
        diametre1Valor > maxDiametre) {
        diametre1.classList.add("is-invalid");
        document.getElementById("errorDiametre1").textContent =
            "El diàmetre ha d'estar entre 0.2 i 4";
    }
    else {
        diametre1.classList.add("was-validated");
    }
    //RODA 2
    if (marca2Valor == "") {
        marca2.classList.add("is-invalid");
        document.getElementById("errorMarca2").textContent =
            "Aquest camp és obligatori";
    }
    else {
        marca2.classList.add("was-validated");
    }
    if (diametre2Valor == 0) {
        diametre2.classList.add("is-invalid");
        document.getElementById("errorDiametre2").textContent =
            "Aquest camp és obligatori";
    }
    else if (diametre2Valor < minDiametre ||
        diametre2Valor > maxDiametre) {
        diametre2.classList.add("is-invalid");
        document.getElementById("errorDiametre2").textContent =
            "El diàmetre ha d'estar entre 0.2 i 4";
    }
    else {
        diametre2.classList.add("was-validated");
    }
    //RODA 3
    if (marca3Valor == "") {
        marca3.classList.add("is-invalid");
        document.getElementById("errorMarca3").textContent =
            "Aquest camp és obligatori";
    }
    else {
        marca3.classList.add("was-validated");
    }
    if (diametre3Valor == 0) {
        diametre3.classList.add("is-invalid");
        document.getElementById("errorDiametre3").textContent =
            "Aquest camp és obligatori";
    }
    else if (diametre3Valor < minDiametre ||
        diametre3Valor > maxDiametre) {
        diametre3.classList.add("is-invalid");
        document.getElementById("errorDiametre3").textContent =
            "El diàmetre ha d'estar entre 0.2 i 4";
    }
    else {
        diametre3.classList.add("was-validated");
    }
    //RODA 4
    if (marca4Valor == "") {
        marca4.classList.add("is-invalid");
        document.getElementById("errorMarca4").textContent =
            "Aquest camp és obligatori";
    }
    else {
        marca4.classList.add("was-validated");
    }
    if (diametre4Valor == 0) {
        diametre4.classList.add("is-invalid");
        document.getElementById("errorDiametre4").textContent =
            "Aquest camp és obligatori";
    }
    else if (diametre4Valor < minDiametre ||
        diametre4Valor > maxDiametre) {
        diametre4.classList.add("is-invalid");
        document.getElementById("errorDiametre4").textContent =
            "El diàmetre ha d'estar entre 0.2 i 4";
    }
    else {
        diametre4.classList.add("was-validated");
    }
    // AFEGIR LES 4 RODES
    if (marca1.classList.contains("was-validated") &&
        diametre1.classList.contains("was-validated") &&
        marca2.classList.contains("was-validated") &&
        diametre2.classList.contains("was-validated") &&
        marca3.classList.contains("was-validated") &&
        diametre3.classList.contains("was-validated") &&
        marca4.classList.contains("was-validated") &&
        diametre4.classList.contains("was-validated")) {
        marca1.classList.remove("is-invalid");
        diametre1.classList.remove("is-invalid");
        marca2.classList.remove("is-invalid");
        diametre2.classList.remove("is-invalid");
        marca3.classList.remove("is-invalid");
        diametre3.classList.remove("is-invalid");
        marca4.classList.remove("is-invalid");
        diametre4.classList.remove("is-invalid");
        car.addWheel(new Wheel(diametre1Valor, marca1Valor));
        car.addWheel(new Wheel(diametre2Valor, marca2Valor));
        car.addWheel(new Wheel(diametre3Valor, marca3Valor));
        car.addWheel(new Wheel(diametre4Valor, marca4Valor));
        var wheelInfo = document.getElementById("wheelInfo");
        wheelInfo.classList.add("resultat");
        wheelInfo.classList.remove("noForm");
        var wheelInfoBtn = document.getElementById("wheelInfoBtn");
        wheelInfoBtn.classList.remove("noForm");
        document.getElementById("wheelInfo").innerHTML =
            "<b>RODES</b> <br>" + JSON.stringify(car.wheels);
    }
}
// CREAR UN COTXE NOU
function nouCotxe() {
    var carForm = document.getElementById("carForm");
    var wheelForm = document.getElementById("wheelForm");
    var carInfo = document.getElementById("carInfo");
    document.getElementById("wheelForm").reset();
    carInfo.classList.remove("resultat");
    document.getElementById("carInfo").innerHTML = "";
    carForm.classList.remove("noForm");
    wheelForm.classList.add("noForm");
    var wheelInfo = document.getElementById("wheelInfo");
    wheelInfo.classList.remove("resultat");
    wheelInfo.classList.add("noForm");
    var wheelInfoBtn = document.getElementById("wheelInfoBtn");
    wheelInfoBtn.classList.add("noForm");
}
