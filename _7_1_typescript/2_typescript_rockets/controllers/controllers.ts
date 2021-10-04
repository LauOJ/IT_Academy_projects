
alert("Si vols jugar, crea dos coets aleatoris, aposta per un dels dos i accelera'ls. Guanyarà el primer que surti volant!");
let rockets: object[] = [];
let rocket1: Rocket;
let rocket2: Rocket;

//****VARIABLES PER DETECTAR ELS CLICS****

let creaEsq = <HTMLElement>document.getElementById("creaEsq");
let creaDre =<HTMLElement>document.getElementById("creaDre");

let accEsq = <HTMLElement>document.getElementById("accEsq");
let accDre =<HTMLElement>document.getElementById("accDre");

let freEsq = <HTMLElement>document.getElementById("freEsq");
let freDre =<HTMLElement>document.getElementById("freDre");

let mosEsq = <HTMLElement>document.getElementById("mosEsq");
let mosDre =<HTMLElement>document.getElementById("mosDre");

let ranEsq = <HTMLElement>document.getElementById("ranEsq");
let ranDre =<HTMLElement>document.getElementById("ranDre");


//****COET DE L'ESQUERRA****

//crear
    creaEsq.onclick = function (){
       createRocketEsq();
       (document.getElementById("velActual1") as HTMLElement).innerHTML = "La potència inicial del coet "+rocket1.codi +" és de 0";
    }

//accelerar
    accEsq.onclick = function (){
        rocket1.accelerar();
        (document.getElementById("velActual1") as HTMLElement).innerHTML = "La potència actual del coet "+rocket1.codi +" és de "+rocket1.potenciaActualCoet;
        if (rocket1.potenciaActualCoet === rocket1.maxPotencia()){
            (document.getElementById("coet1") as unknown as HTMLElement).classList.add("rocket1");
        }
     }

//frenar
    freEsq.onclick = function (){
        rocket1.frenar();
        (document.getElementById("velActual1") as HTMLElement).innerHTML = "La potència actual del coet "+rocket1.codi +" és de "+rocket1.potenciaActualCoet;
     }

//mostrar
    mosEsq.onclick = function (){
        (document.getElementById("infoCoet1") as HTMLElement).innerHTML = "El coet vermell té el codi "+rocket1.codi+", té "+rocket1.numPropulsors+" propulsors, una potència inicial de 0 i una potència màxima de "+rocket1.maxPotencia();
    }  

//random
    ranEsq.onclick = function (){
        createRocketRandomEsq();
        (document.getElementById("velActual1") as HTMLElement).innerHTML = "La potència inicial del coet "+rocket1.codi +" és de 0";
 }


//****COET DE LA DRETA****

//crear
    creaDre.onclick = function (){
        createRocketDre();
        (document.getElementById("velActual2") as HTMLElement).innerHTML = "La potència inicial del coet "+rocket2.codi +" és de 0";
    }

//accelerar
    accDre.onclick = function (){
        rocket2.accelerar();
        (document.getElementById("velActual2") as HTMLElement).innerHTML = "La potència actual del coet "+rocket2.codi +" és de "+rocket2.potenciaActualCoet;
        if (rocket2.potenciaActualCoet === rocket2.maxPotencia()){
            (document.getElementById("coet2") as unknown as HTMLElement).classList.add("rocket1");
        }
    }

//frenar
    freDre.onclick = function (){
        rocket2.frenar();
        (document.getElementById("velActual2") as HTMLElement).innerHTML = "La potència actual del coet "+rocket2.codi +" és de "+rocket2.potenciaActualCoet;
    }

//mostrar
    mosDre.onclick = function (){
        (document.getElementById("infoCoet2") as HTMLElement).innerHTML = "El coet negre té el codi "+rocket2.codi+", té "+rocket2.numPropulsors+" propulsors, una potència inicial de 0 i una potència màxima de "+rocket2.maxPotencia();
    }  

//random
    ranDre.onclick = function (){
        createRocketRandomDre();
        (document.getElementById("velActual2") as HTMLElement).innerHTML = "La potència inicial del coet "+rocket2.codi +" és de 0";
}


/***** FUNCIONS PER ALS COETS MANUALS *****/

function createRocketEsq(){

    let numProp;
    let codiCoet: any = prompt("Quin codi tindrà el coet? \n (ha de ser un codi de 8 dígits entre lletres majúscules i números");

    let codiRegex: RegExp = /[A-Z-0-9]{8}/gmi;

    if (!codiCoet.match(codiRegex)) {

        alert("El codi no és correcte");
       
    } else {

        rocket1= new Rocket(codiCoet);
        numProp = Number(prompt("Quants propulsors tindrà el coet?"));

        for(let i = 0; i < numProp; i++ ){

        let prop = Number(prompt("Màxmia potència del propulsor " + [i]));
        rocket1.addPropulsor(new Propulsor(prop));
    }
    }

    rockets.push(rocket1);
    console.log(rocket1);
    console.log(rockets);
    

}

function createRocketDre(){

    let numProp;
    let codiCoet: any = prompt("Quin codi tindrà el coet? \n (ha de ser un codi de 8 dígits entre lletres majúscules i números");

    let codiRegex: RegExp = /[A-Z-0-9]{8}/gmi;

    if (!codiCoet.match(codiRegex)) {

        alert("El codi no és correcte");
       
    } else {

        rocket2= new Rocket(codiCoet);
        numProp = Number(prompt("Quants propulsors tindrà el coet?"));

        for(let i = 0; i < numProp; i++ ){

        let prop = Number(prompt("Màxmia potència del propulsor " + [i]));
        rocket2.addPropulsor(new Propulsor(prop));
    }
    }

    rockets.push(rocket2);
    console.log(rocket2);
    console.log(rockets);
    

}

/***** FUNCIONS PER ALS COETS ALEATORIS *****/

function createRocketRandomEsq(){

    let potencies = [10,20,30,40,50];
   
    rocket1= new Rocket(stringGen(8));
    rocket1.numPropulsors = Math.floor( Math.random() * 3 )+1;


        for(let i = 0; i < rocket1.numPropulsors; i++ ){

        let prop = Math.floor( Math.random() * potencies.length );
  
        rocket1.addPropulsor(new Propulsor(potencies[prop]));
    }
    

    rockets.push(rocket1);
    console.log(rocket1);
    console.log(rockets);
    
}

function createRocketRandomDre(){

    let potencies = [10,20,30,40,50];
   
    rocket2= new Rocket(stringGen(8));
    rocket2.numPropulsors = Math.floor( Math.random() * 3 )+1;


        for(let i = 0; i < rocket1.numPropulsors; i++ ){

        let prop = Math.floor( Math.random() * potencies.length );

        rocket2.addPropulsor(new Propulsor(potencies[prop]));
    }
    

    rockets.push(rocket2);
    console.log(rocket2);
    console.log(rockets);
    
}


//funció per crear un codi random
function stringGen(len: number) {
    var text = "";
    
    var charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    
    for (var i = 0; i < len; i++)
      text += charset.charAt(Math.floor(Math.random() * charset.length));
    
    return text;
  }


