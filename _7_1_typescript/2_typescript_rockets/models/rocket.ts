class Rocket {
  codi: string;
  propulsors: object[] = new Array();
  potenciaActualCoet: number;
  numPropulsors: number;

  constructor(codi: string) {
    this.codi = codi;
    this.propulsors = [];
    this.potenciaActualCoet = 0;
    this.numPropulsors = 0;
  }

  addPropulsor(propulsor:Propulsor):void{
    this.propulsors.push(propulsor);
    this.numPropulsors++;
}

  maxPotencia() {
    let total: number = 0;
 
    for(let i = 0; i < this.propulsors.length; i++){
  
      total += Object(this.propulsors[i]).potenciaMaxima;
    
    }
    
    return total;
  
  }

  
  accelerar(){

   
  
for(let i = 0; i < this.propulsors.length; i++){



        if(Object(this.propulsors[i]).potenciaActual < Object(this.propulsors[i]).potenciaMaxima){

            Object(this.propulsors[i]).potenciaActual += 10;

            console.log("El propulsor "+i+" té una potència actual de: "+Object(this.propulsors[i]).potenciaActual);

              this.potenciaActualCoet += 10;
       
          }


    }



    console.log("El coet "+ this.codi + " té una potència actual de: "+this.potenciaActualCoet);
    
    // (document.getElementById("velActual1") as HTMLElement).innerHTML = "La potència actual del coet vermell és de "+this.potenciaActualCoet;



}


frenar(){

   
  
  for(let i = 0; i < this.propulsors.length; i++){
  
  
  
          if(Object(this.propulsors[i]).potenciaActual > 0){
  
              Object(this.propulsors[i]).potenciaActual -= 10;
  
              console.log("El propulsor "+i+" té una potència actual de: "+Object(this.propulsors[i]).potenciaActual);
  
                this.potenciaActualCoet -= 10;
         
            }
  
  
      }
  
  
  
      console.log("El coet "+ this.codi + " té una potència actual de: "+this.potenciaActualCoet);
      
      // (document.getElementById("velActual1") as HTMLElement).innerHTML = "La potència actual del coet vermell és de "+this.potenciaActualCoet;
  
  
  
  }
  
  
  }
  
