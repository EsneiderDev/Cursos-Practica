/* function Persona() {
    
    this.nombre   = "Esneider";
    this.apellido = "Olivo";
    this.edad     = 24;
    this.pais     = "Costa Rica";

    this.imprimirInfo = function () { 
        console.log( this.nombre + " " + this.apellido + "("+this.edad+") "+this.pais);
    }
}


Persona.prototype.pais = "Colombia";   // console => Persona.prototype.pais --> 'Colombia'


var es = new Persona();

console.log( es);   // Persona {nombre: 'Esneider', apellido: 'Olivo', edad: 24, pais: 'Costa Rica', imprimirInfo: ƒ} => click => [[Prototype]]: Object --> pais: "Colombia" constructor: ƒ Persona()

es.imprimirInfo();  // Esneider Olivo(24) Costa Rica */


// 2. Cuando no se encuentra una propiedad 

function Persona2() {
    
    this.nombre   = "Esneider";
    this.apellido = "Olivo";
    this.edad     = 24;
    /*    this.pais     = "Costa Rica"; */

    this.imprimirInfo = function () { 
        console.log( this.nombre + " " + this.apellido + "("+this.edad+") "+this.pais);
    }
}


Persona2.prototype.pais = "Colombia";   // console => Persona.prototype.pais --> 'Venezuela'


var esn1 = new Persona2();

console.log( esn1 );   // Persona2 {nombre: 'Esneider', apellido: 'Olivo', edad: 24, imprimirInfo: ƒ} (click) -->  [[Prototype]]: Object --> pais: "Colombia" constructor: ƒ Persona()
esn1.imprimirInfo();  // Esneider Olivo(24) Colombia

console.log( esn1.pais );   // Colombia
//Nota: Cuando se llama una propiedad que no se encuentra en el contexto ira a ver en los prototipos


// EL USO DE LOS PROTOTIPOS ES HACER MAS EFICIENTE EL USO DE LOS OBJETOS
console.log("------ Persona 3: un solo prototipo de nuesta funcion ------ ");
function Persona3() {
    this.nombre = "NombreP3";
    this.apellido  ="Apellido3";
    this.edad   = 30;
    this.pais   = "Colombia"
}

Persona3.prototype.imprimirInfo = function () {
    console.log( this.nombre + " " + this.apellido + "("+this.edad+") "+this.pais);
}
var esn2 = new Persona3();

esn2.imprimirInfo(); //NombreP3 Apellido3(30) Colombia Colombia

console.log( esn2 ); // Persona3 {nombre: 'NombreP3', apellido: 'Apellido3', edad: 30, pais: 'Colombia'}, "click" => [[Prototype]]: Object --> imprimirInfo: ƒ ()constructor: ƒ Persona3() [[Prototype]]: Object
                    // console => esn2.imprimirInfo(); -->  NombreP3 Apellido(30) Colombia
console.log( esn2.imprimirInfo()); // NombreP3 Apellido3(30) Colombia
                                   // undefined
// NOTA: La ventaja es que si tuvieramos un millon de registros no tuvieramos un millon de data no repetida, no hay limites de prototipos




// HEMOS ESTADO UTILIZANDO PROTOTIPOS EN TODO EL CURSO SIN DARNOS CUENTA

var a = "Esneider";

console.log( a );

// Otros Prototipos Cuando Concatena 
// console => var a = 1;  a.toString  ò a.



//COLOCAR UN PROTOTIPO A LAS VARIABLES TIPO "NUMBER"

Number.prototype.esPositivo  = function () {  
    if( this > 0 ){
        return true;
    }else{
        return false;
    }
}

// Console => var a = 1;  a.esPositivo(); --> true
// Console => a = -10;    a.esPositivo(); --> false
