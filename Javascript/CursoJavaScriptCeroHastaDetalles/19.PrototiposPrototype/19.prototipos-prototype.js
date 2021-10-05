
function Persona() {
    
    this.nombre   = "Esneider";
    this.apellido = "Olivo";
    this.edad     = 24;
    this.pais     = "Colombia";

    this.imprimirInfo = function () { 
        console.log( this.nombre + " " + this.apellido + "("+this.edad+") "+this.pais);
    }
}


Persona.prototype.pais = "Colombia";


var es = new Persona();


es.imprimirInfo();






