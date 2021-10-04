let car: Car;
const carForm: any = document.getElementById("carForm");
const wheelForm: any = document.getElementById("wheelForm");
let carArray: object[] = [];

// FUNCIÓ PER VALIDAR COTXE
function validateCar() {

  let matricula = document.getElementById("inputMatricula");
  let color = document.getElementById("inputColor");
  let marca = document.getElementById("inputMarca");

//  TREURE IS-INVALID I WAS-VALIDATED PER TORNAR A COMENÇAR

  (matricula as unknown as HTMLElement).classList.remove("is-invalid");
  (color as unknown as HTMLElement).classList.remove("is-invalid");
  (marca as unknown as HTMLElement).classList.remove("is-invalid");

  (matricula as unknown as HTMLElement).classList.remove("was-validated");
  (color as unknown as HTMLElement).classList.remove("was-validated");
  (marca as unknown as HTMLElement).classList.remove("was-validated");
  
  let matriculaValor = (
    document.getElementById("inputMatricula") as HTMLInputElement
  ).value;

  let colorValor = (document.getElementById("inputColor") as HTMLInputElement)
    .value;
  let marcaValor = (document.getElementById("inputMarca") as HTMLInputElement)
    .value;

  let MatriculaRegex: RegExp = /^[a-zA-Z]{4}[\d]{3}$/;

  if (matriculaValor == "") {
    (matricula as HTMLElement).classList.add("is-invalid");

    (document.getElementById("errorMatricula") as HTMLElement).textContent =
      "Aquest camp és obligatori";
  } else if (!matriculaValor.match(MatriculaRegex)) {
    (matricula as HTMLElement).classList.add("is-invalid");

    (document.getElementById("errorMatricula") as HTMLElement).textContent =
      "La matrícula ha de tenir quatre lletres i tres números";
  } else {
    (matricula as HTMLElement).classList.add("was-validated");
  }

  if (colorValor == "") {
    (color as HTMLElement).classList.add("is-invalid");

    (document.getElementById("errorColor") as HTMLElement).textContent =
      "Aquest camp és obligatori";
  } else {
    (color as HTMLElement).classList.add("was-validated");
  }

  if (marcaValor == "") {
    (marca as HTMLElement).classList.add("is-invalid");

    (document.getElementById("errorMarca") as HTMLElement).textContent =
      "Aquest camp és obligatori";
  } else {
    (marca as HTMLElement).classList.add("was-validated");
  }

  if (
    (matricula as HTMLElement).classList.contains("was-validated") &&
    (color as HTMLElement).classList.contains("was-validated") &&
    (marca as HTMLElement).classList.contains("was-validated")
  ) {
    createCar(matriculaValor, colorValor, marcaValor);
  }

  (document.getElementById("carForm") as HTMLFormElement).reset();
}

//FUNCIO PER CREAR EL COTXE
function createCar(
  matriculaValor: string,
  colorValor: string,
  marcaValor: string
) {
  car = new Car(matriculaValor, colorValor, marcaValor);

  //car.addWheel(new Wheel(2, "SEAT"));

  let carForm = document.getElementById("carForm") as HTMLElement;
  let carInfo = document.getElementById("carInfo") as HTMLElement;
  let wheelForm = document.getElementById("wheelForm") as HTMLElement;

  carInfo.classList.add("resultat");

  carForm.classList.add("noForm");

  wheelForm.classList.remove("noForm");

  (document.getElementById("carInfo") as HTMLElement).innerHTML =
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
  let marca1 = document.getElementById("marca1") as unknown as string;
  let diametre1 = document.getElementById("diametre1") as unknown as number;
  let marca2 = document.getElementById("marca2") as unknown as string;
  let diametre2 = document.getElementById("diametre2") as unknown as number;
  let marca3 = document.getElementById("marca3") as unknown as string;
  let diametre3 = document.getElementById("diametre3") as unknown as number;
  let marca4 = document.getElementById("marca4") as unknown as string;
  let diametre4 = document.getElementById("diametre4") as unknown as number;

  //TREURE ELS WAS-VALIDATED PER TORNAR A COMENÇAR
  (marca1 as unknown as HTMLElement).classList.remove("was-validated");
  (diametre1 as unknown as HTMLElement).classList.remove("was-validated");
  (marca2 as unknown as HTMLElement).classList.remove("was-validated");
  (diametre2 as unknown as HTMLElement).classList.remove("was-validated");
  (marca3 as unknown as HTMLElement).classList.remove("was-validated");
  (diametre3 as unknown as HTMLElement).classList.remove("was-validated");
  (marca4 as unknown as HTMLElement).classList.remove("was-validated");
  (diametre4 as unknown as HTMLElement).classList.remove("was-validated"); 

  //VARIABLES PER AL VALOR DELS INPUTS
  let marca1Valor = (document.getElementById("marca1") as HTMLInputElement)
    .value;

  let diametre1Valor = +(
    document.getElementById("diametre1") as HTMLInputElement
  ).value;

  let marca2Valor = (document.getElementById("marca2") as HTMLInputElement)
    .value;

  let diametre2Valor = +(
    document.getElementById("diametre2") as HTMLInputElement
  ).value;

  let marca3Valor = (document.getElementById("marca3") as HTMLInputElement)
    .value;

  let diametre3Valor = +(
    document.getElementById("diametre3") as HTMLInputElement
  ).value;

  let marca4Valor = (document.getElementById("marca4") as HTMLInputElement)
    .value;

  let diametre4Valor = +(
    document.getElementById("diametre4") as HTMLInputElement
  ).value;

  //VALIDAR
  let minDiametre: number = 0.2;
  let maxDiametre: number = 4;

  //RODA 1
  if (marca1Valor == "") {
    (marca1 as unknown as HTMLElement).classList.add("is-invalid");

    (document.getElementById("errorMarca1") as HTMLElement).textContent =
      "Aquest camp és obligatori";
  } else {
    (marca1 as unknown as HTMLElement).classList.add("was-validated");
  }

  if (diametre1Valor == 0) {
    (diametre1 as unknown as HTMLElement).classList.add("is-invalid");

    (document.getElementById("errorDiametre1") as HTMLElement).textContent =
      "Aquest camp és obligatori";
  } else if (
    (diametre1Valor as unknown as number) < minDiametre ||
    (diametre1Valor as unknown as number) > maxDiametre
  ) {
    (diametre1 as unknown as HTMLElement).classList.add("is-invalid");

    (document.getElementById("errorDiametre1") as HTMLElement).textContent =
      "El diàmetre ha d'estar entre 0.2 i 4";
  } else {
    (diametre1 as unknown as HTMLElement).classList.add("was-validated");
  }

  //RODA 2
  if (marca2Valor == "") {
    (marca2 as unknown as HTMLElement).classList.add("is-invalid");

    (document.getElementById("errorMarca2") as HTMLElement).textContent =
      "Aquest camp és obligatori";
  } else {
    (marca2 as unknown as HTMLElement).classList.add("was-validated");
  }

  if (diametre2Valor == 0) {
    (diametre2 as unknown as HTMLElement).classList.add("is-invalid");

    (document.getElementById("errorDiametre2") as HTMLElement).textContent =
      "Aquest camp és obligatori";
  } else if (
    (diametre2Valor as unknown as number) < minDiametre ||
    (diametre2Valor as unknown as number) > maxDiametre
  ) {
    (diametre2 as unknown as HTMLElement).classList.add("is-invalid");

    (document.getElementById("errorDiametre2") as HTMLElement).textContent =
      "El diàmetre ha d'estar entre 0.2 i 4";
  } else {
    (diametre2 as unknown as HTMLElement).classList.add("was-validated");
  }

  //RODA 3
  if (marca3Valor == "") {
    (marca3 as unknown as HTMLElement).classList.add("is-invalid");

    (document.getElementById("errorMarca3") as HTMLElement).textContent =
      "Aquest camp és obligatori";
  } else {
    (marca3 as unknown as HTMLElement).classList.add("was-validated");
  }

  if (diametre3Valor == 0) {
    (diametre3 as unknown as HTMLElement).classList.add("is-invalid");

    (document.getElementById("errorDiametre3") as HTMLElement).textContent =
      "Aquest camp és obligatori";
  } else if (
    (diametre3Valor as unknown as number) < minDiametre ||
    (diametre3Valor as unknown as number) > maxDiametre
  ) {
    (diametre3 as unknown as HTMLElement).classList.add("is-invalid");

    (document.getElementById("errorDiametre3") as HTMLElement).textContent =
      "El diàmetre ha d'estar entre 0.2 i 4";
  } else {
    (diametre3 as unknown as HTMLElement).classList.add("was-validated");
  }

  //RODA 4
  if (marca4Valor == "") {
    (marca4 as unknown as HTMLElement).classList.add("is-invalid");

    (document.getElementById("errorMarca4") as HTMLElement).textContent =
      "Aquest camp és obligatori";
  } else {
    (marca4 as unknown as HTMLElement).classList.add("was-validated");
  }

  if (diametre4Valor == 0) {
    (diametre4 as unknown as HTMLElement).classList.add("is-invalid");

    (document.getElementById("errorDiametre4") as HTMLElement).textContent =
      "Aquest camp és obligatori";
  } else if (
    (diametre4Valor as unknown as number) < minDiametre ||
    (diametre4Valor as unknown as number) > maxDiametre
  ) {
    (diametre4 as unknown as HTMLElement).classList.add("is-invalid");

    (document.getElementById("errorDiametre4") as HTMLElement).textContent =
      "El diàmetre ha d'estar entre 0.2 i 4";
  } else {
    (diametre4 as unknown as HTMLElement).classList.add("was-validated");
  }

  // AFEGIR LES 4 RODES
  if (
    (marca1 as unknown as HTMLElement).classList.contains("was-validated") &&
    (diametre1 as unknown as HTMLElement).classList.contains("was-validated") &&
    (marca2 as unknown as HTMLElement).classList.contains("was-validated") &&
    (diametre2 as unknown as HTMLElement).classList.contains("was-validated") &&
    (marca3 as unknown as HTMLElement).classList.contains("was-validated") &&
    (diametre3 as unknown as HTMLElement).classList.contains("was-validated") &&
    (marca4 as unknown as HTMLElement).classList.contains("was-validated") &&
    (diametre4 as unknown as HTMLElement).classList.contains("was-validated")
  ) {

    (marca1 as unknown as HTMLElement).classList.remove("is-invalid");
    (diametre1 as unknown as HTMLElement).classList.remove("is-invalid");
    (marca2 as unknown as HTMLElement).classList.remove("is-invalid");
    (diametre2 as unknown as HTMLElement).classList.remove("is-invalid");
    (marca3 as unknown as HTMLElement).classList.remove("is-invalid");
    (diametre3 as unknown as HTMLElement).classList.remove("is-invalid");
    (marca4 as unknown as HTMLElement).classList.remove("is-invalid");
    (diametre4 as unknown as HTMLElement).classList.remove("is-invalid");

    car.addWheel(new Wheel(diametre1Valor as unknown as number, marca1Valor));
    car.addWheel(new Wheel(diametre2Valor as unknown as number, marca2Valor));
    car.addWheel(new Wheel(diametre3Valor as unknown as number, marca3Valor));
    car.addWheel(new Wheel(diametre4Valor as unknown as number, marca4Valor));

    let wheelInfo = document.getElementById("wheelInfo") as HTMLElement;
    wheelInfo.classList.add("resultat");
    wheelInfo.classList.remove("noForm");
    let wheelInfoBtn = document.getElementById("wheelInfoBtn") as HTMLElement;
    wheelInfoBtn.classList.remove("noForm");

    (document.getElementById("wheelInfo") as HTMLElement).innerHTML =
        "<b>RODES</b> <br>" + JSON.stringify(car.wheels);
  }
}

// CREAR UN COTXE NOU
function nouCotxe() {
  const carForm: any = document.getElementById("carForm");
  const wheelForm: any = document.getElementById("wheelForm");
  let carInfo = document.getElementById("carInfo") as HTMLElement;

  (document.getElementById("wheelForm") as HTMLFormElement).reset();

  carInfo.classList.remove("resultat");

  (document.getElementById("carInfo") as HTMLElement).innerHTML = "";

  (carForm as HTMLFormElement).classList.remove("noForm");

  (wheelForm as HTMLFormElement).classList.add("noForm");

  let wheelInfo = document.getElementById("wheelInfo") as HTMLElement;
  wheelInfo.classList.remove("resultat");
  wheelInfo.classList.add("noForm");
  let wheelInfoBtn = document.getElementById("wheelInfoBtn") as HTMLElement;
  wheelInfoBtn.classList.add("noForm");
}
