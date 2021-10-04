"use strict";
var Rocket = /** @class */ (function () {
    function Rocket(codi) {
        this.propulsors = new Array();
        this.codi = codi;
        this.propulsors = [];
        this.potenciaActualCoet = 0;
        this.numPropulsors = 0;
    }
    Rocket.prototype.addPropulsor = function (propulsor) {
        this.propulsors.push(propulsor);
        this.numPropulsors++;
    };
    Rocket.prototype.maxPotencia = function () {
        var total = 0;
        for (var i = 0; i < this.propulsors.length; i++) {
            total += Object(this.propulsors[i]).potenciaMaxima;
        }
        return total;
    };
    Rocket.prototype.accelerar = function () {
        for (var i = 0; i < this.propulsors.length; i++) {
            if (Object(this.propulsors[i]).potenciaActual < Object(this.propulsors[i]).potenciaMaxima) {
                Object(this.propulsors[i]).potenciaActual += 10;
                console.log("El propulsor " + i + " té una potència actual de: " + Object(this.propulsors[i]).potenciaActual);
                this.potenciaActualCoet += 10;
            }
        }
        console.log("El coet " + this.codi + " té una potència actual de: " + this.potenciaActualCoet);
        // (document.getElementById("velActual1") as HTMLElement).innerHTML = "La potència actual del coet vermell és de "+this.potenciaActualCoet;
    };
    Rocket.prototype.frenar = function () {
        for (var i = 0; i < this.propulsors.length; i++) {
            if (Object(this.propulsors[i]).potenciaActual > 0) {
                Object(this.propulsors[i]).potenciaActual -= 10;
                console.log("El propulsor " + i + " té una potència actual de: " + Object(this.propulsors[i]).potenciaActual);
                this.potenciaActualCoet -= 10;
            }
        }
        console.log("El coet " + this.codi + " té una potència actual de: " + this.potenciaActualCoet);
        // (document.getElementById("velActual1") as HTMLElement).innerHTML = "La potència actual del coet vermell és de "+this.potenciaActualCoet;
    };
    return Rocket;
}());
