
let car: Car;
const carForm: any = document.getElementById("carForm");
const wheelForm: any = document.getElementById("wheelForm");
let carArray: object[] = [];




// FUNCIÓ PER VALIDAR COTXE
function validateCar() {

  let controlErrores = 0;

  let matricula = <HTMLInputElement>document.getElementById("inputMatricula");
  let color = <HTMLInputElement>document.getElementById("inputColor");
  let marca = <HTMLInputElement>document.getElementById("inputMarca");

  let errorMatricula = <HTMLInputElement>document.getElementById("errorMatricula");
  let errorColor = <HTMLInputElement>document.getElementById("errorColor");
  let errorMarcaCotxe = <HTMLInputElement>document.getElementById("errorMarcaCotxe");


  let MatriculaRegex: RegExp = /^[a-zA-Z]{4}[\d]{3}$/;

  if (!matricula.value.match(MatriculaRegex)) {
    matricula.classList.add("is-invalid");
    errorMatricula.textContent = "La matrícula ha de tenir quatre lletres i tres números";
      controlErrores++;
  } else {
    matricula.classList.remove("is-invalid");
  }

  if (color.value == "") {
    color.classList.add("is-invalid");
    errorColor.textContent = "Aquest camp és obligatori";
    controlErrores++;
  } else {
    color.classList.remove("is-invalid");
  }

  if (marca.value == "") {
    marca.classList.add("is-invalid");
    errorMarcaCotxe.textContent = "Aquest camp és obligatori";
    controlErrores++;
  } else {
    marca.classList.remove("is-invalid");
  }

  if (controlErrores == 0){
 
    createCar(matricula.value, color.value, marca.value);
  }

}

//FUNCIO PER CREAR EL COTXE
function createCar(
  matriculaValor: string,
  colorValor: string,
  marcaValor: string
) {
  car = new Car(matriculaValor, colorValor, marcaValor);

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
  
let controlErrores = 0;

  for (let i = 0; i < 4; i++) {

    
//VARIABLES GENÈRIQUES

  let marca = <HTMLInputElement>document.getElementById("marca"+i);
  let diametre = <HTMLInputElement>document.getElementById("diametre"+i);
  let errorMarca = <HTMLElement>document.getElementById("errorMarca"+i);
  let errorDiametre = <HTMLElement>document.getElementById("errorDiametre"+i);

  let minDiametre: number = 0.2;
  let maxDiametre: number = 4;


    if (marca.value == "") {
      marca.classList.add("is-invalid");
      errorMarca.textContent = "Aquest camp és obligatori";
      controlErrores++;
    } else {

      marca.classList.remove("is-invalid");
 
        }
     

    if (Number(diametre.value) < minDiametre || Number(diametre.value) > maxDiametre) {

      diametre.classList.add("is-invalid");
          (errorDiametre as HTMLElement).textContent = "El diàmetre ha d'estar entre 0.2 i 4";
          controlErrores++;

    } else {

      diametre.classList.remove("is-invalid");
    }
 
 
    }

if (controlErrores == 0){
  for (let i = 0; i < 4; i++){
  let marca = <HTMLInputElement>document.getElementById("marca"+i);
  let diametre = <HTMLInputElement>document.getElementById("diametre"+i);
    car.addWheel(new Wheel(Number(diametre.value), marca.value));
  }
}

let wheelInfo = document.getElementById("wheelInfo") as HTMLElement;
    wheelInfo.classList.add("resultat");
    wheelInfo.classList.remove("noForm");
    let wheelInfoBtn = document.getElementById("wheelInfoBtn") as HTMLElement;
    wheelInfoBtn.classList.remove("noForm");

    (document.getElementById("wheelInfo") as HTMLElement).innerHTML =
      "<b>RODES</b> <br>" + JSON.stringify(car.wheels);

  }


// CREAR UN COTXE NOU

function nouCotxe() {
  const carForm = <HTMLFormElement>document.getElementById("carForm");
  const wheelForm = <HTMLFormElement>document.getElementById("wheelForm");
  let carInfo = <HTMLElement>document.getElementById("carInfo");

  wheelForm.reset();
  carForm.reset();

  carInfo.classList.remove("resultat");
  carInfo.innerHTML = "";

  carForm.classList.remove("noForm");
  wheelForm.classList.add("noForm");

  let wheelInfoBtn = <HTMLElement>document.getElementById("wheelInfoBtn");
  let wheelInfo = <HTMLElement>document.getElementById("wheelInfo");

  wheelInfo.classList.remove("resultat");
  wheelInfo.classList.add("noForm");
  wheelInfoBtn.classList.add("noForm");
}
