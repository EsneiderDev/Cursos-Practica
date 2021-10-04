/* 
function Persona() { 

}

var juan = Persona();

console.log( juan ); // undefined

*/


/* 
function Persona() { 

    this.nombre    = "Esneider";
    this.apellido  =  "Olivo";
    this.edad      = 23;

    console.log("Paso por aquí");
}


var b = Persona();
console.log(b); // undefined

var e = new Persona(); // Paso por aquí
// Nota: al agregarle new nos agrega el contexto, nos reserva un espacio en memoria al objeto persona

console.log( e );  // Persona {nombre: 'Esneider', apellido: 'Olivo', edad: 23}

console.log( e.nombre );  //Esneider

 */
// ----------------- CREAR FUNCIONES ----------------------------

function Persona2(nombre, apellido) {  
    this.nombre     = nombre,
    this.apellido   = apellido,
    this.edad       = 24

    this.imprimirPersona = function(){  
        return this.nombre + " " + this.apellido +"("+ this.edad+")";
    }
}

var manuel = new Persona2("Manuel", "Buelvas");

console.log( manuel.imprimirPersona());