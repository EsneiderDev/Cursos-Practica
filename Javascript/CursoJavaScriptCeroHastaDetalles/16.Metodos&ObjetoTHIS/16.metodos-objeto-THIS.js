
// -----------------   IMPRIMIR DENTRO DEL OBJETO CON  FUNCION TRADICIONAL Y FUNCION DE FLECHA ----------------- 

// 1: FUNCION TRADICIONAL
console.log('\n PERSONA 1 \n ');
console.log('-- 1: FUNCION TRADICIONAL -- ');
var persona = {
    nombre: "E",
    apellido: "B",
    imprimirNombre:  function(){
        console.log("Funcion tradicional - nombre completo ");
    }
}  
// persona.imprimirNombre; // console => persona.imprimirNombre -->   () => { console.log( nombre );}
persona.imprimirNombre(); // nombre completo


// 2: FUNCION DE FLECHA
console.log('-- 1: FUNCION DE FLECHA -- ');
var persona = {
    nombre: "E",
    apellido: "B",
    imprimirNombre:  () => {
        console.log("funcion de flacha - nombre completo ");
    }
}  
// persona.imprimirNombre; // console => persona.imprimirNombre -->   () => { console.log( nombre );}
persona.imprimirNombre(); // nombre completo



// ----------------- ESTANDAR Y FLECHA: IMPRIMIR VALOR "nombre" DEL OBJETO "persona2"  DENTRO DEL METODO: (PRESENTARA ERROR) -----------------

/* var persona2 = {
    nombre: "M",
    apellido: "O",
    imprimirNombre2: function(){
        console.log(nombre);
    }
} 
persona2.imprimirNombre2();  // Uncaught ReferenceError: nombre is not defined

*/

/* var persona2 = {
    nombre: "M",
    apellido: "O",
    imprimirNombre2: () => {
        console.log(nombre);
    }
} 

persona2.imprimirNombre2();  // Uncaught ReferenceError: nombre is not defined
// NOTA: No hace referencia al nombre del objeto con valor "M"

*/

// ----------------- ESTANDAR Y FLECHA: IMPRIMIR VALOR "nombre" DEL OBJETO GLOBAL Y NO DEL OBJETO "persona3" DENTRO OBJETO GLOBAL -----------------
console.log('\n PERSONA 3  \n '+"Imprimir nombre del objeto globla y no del contexto \n ");
/* 
//variable global
var nombre = "Andres"; // No necesitamos imprimir la global sino la de adentro

// 1: tradicional
console.log('1. Tradicional: ');
var persona3 = {
    nombre: "M",
    apellido: "O",
    imprimirNombre3: function(){
        console.log(nombre);
    }
}

persona3.imprimirNombre3(); // Andres

// 2: flecha
console.log('2. Flecha: ');
var persona3 = {
    nombre: "M",
    apellido: "O",
    imprimirNombre3: () => {
        console.log(nombre);
    }
}  

persona3.imprimirNombre3(); // Andres
                            // Console => this --> Window {window: Window, self: Window, document: document, name: '', location: Location, …}
// hace referencia al valor que esta arriba al objeto global. 
*/

// ----------------- ESTANDAR Y FLECHA DIFERENCIAS: IMPRIMIR VALORES DENTRE DEL CONTEXTO DEL OBJETO "persona4" DE FORMA INTERTA Y NO DEL OBJETO GLOBAL (THIS) -----------------
console.log('\n PERSONA 4  \n '+"Imprimir nombre del contexto y no del objeto globla \n ");

var persona4 = {
    nombre: "M",
    apellido: "O",
    // 1: tradicional
    
    imprimirNombre4: function() {
        console.log( this ); // Con la funcion tradicional hace referencia al objeto del contexto actual
    },
    // 2: Fecha 
    
    imprimirApellido: () => {
        console.log( this ); // con la funcion de flacha hace referencia al objeto global
    }
}

console.log( 'Tradicional: apunta al contexto: ');
persona4.imprimirNombre4();  //  {nombre: 'M', apellido: 'O', imprimirNombre4: ƒ, imprimirApellido: ƒ}
console.log( 'fecha: apunta al objeto globla: ');
persona4.imprimirApellido(); //   Window {window: Window, self: Window, document: document, name: '', location: Location, …}
 

// ----------------- ESTANDAR Y FLECHA: IMPRIMIR VALORES DENTRE DEL CONTEXTO DEL OBJETO "persona5" DE FORMA INTERTA Y NO DEL OBJETO GLOBAL (THIS) -----------------
console.log('\n PERSONA 5  \n '+"Imprimir nombre del contexto y no del objeto globla \n ");
/* 
this.apellido = "Apellido-Global";

var persona5 = {
    nombre: "Esneider",
    apellido: "Olivo",
    //1. tradicional imprimir nombre
    imprimirNombre5Tradicional: function() {
        console.log( this.nombre ); // Con la funcion tradicional hace referencia al objeto 
    },
    //2. flecha: imprimir nombre
    imprimirNombre5Flecha: () => {  
        console.log( this.persona5.nombre );
    },
    // 1: tradicional
    imprimirApellido2Tradicionla: function(){
        console.log( this.apellido ); // con la funcion de flacha hace referencia al objeto global
    },
    // 2: flacha
    imprimirApellido2Flecha: () =>  {
        console.log("Error: ", this.apellido, ", Bueno: ", persona5.apellido ); // con la funcion de flacha hace referencia al objeto global
    }, 
    imprimirNombreApellido: function () {  
        console.log( this.nombre + " " + this.apellido ); // Esneider Olivo
    },
    direccion: {
        pais: "Costa Rica",
        obtenerPais: function () { 
            console.log( this );
        },
        obtenerPais2:  () =>  { 
            console.log( this );
        }
    }
}

console.log('Imprimir nombre: tradicional ');
persona5.imprimirNombre5Tradicional();                   // Ensieder 

console.log('Imprimir nombre: fecha: ');
persona5.imprimirNombre5Flecha();                        // Esneider

console.log('Imprimir apellido: tradicional ');
persona5.imprimirApellido2Tradicionla();                 // olivo
//NOTA: hace referencia al apellido del contexto del objeto Persona5

console.log('Imprimir apellido: flecha ');
persona5.imprimirApellido2Flecha();                      // Apellido-Global
//NOTA: hace referencia al apellido del contexto del objeto global

persona5.imprimirNombreApellido();                       // Esneider Olivo
 
persona5.nombre = "NombCambiado";
persona5.imprimirNombre5Tradicional();                   // Esneider --> NombCmabiado
// NOTA: Cambia el nombre por el objeto global 

persona5.direccion.obtenerPais();                        // {pais: 'Costa Rica', obtenerPais: ƒ}
persona5.direccion.obtenerPais2();                       // Window {window: Window, self: Window, document: document, name: '', location: Location, …}
*/

// ----------------- ESTANDAR Y FLECHA: IMPRIMIR VALORES DENTRE DEL CONTEXTO DEL OBJETO "persona6" CON "THIS" -----------------
console.log('\n PERSONA 6 \n Imprimir propiedades dentro del contexto de persona 6 con THIS \n ');
/* 
var persona6 = {
    nombre: "Esneider",
    apellido: "Olivo",
    imprimirNombre6: function() {
        console.log( this.nombre + " " + this.apellido ); // Con la funcion tradicional hace referencia al objeto 
    },
    direccion: {
        pais: "Costa Rica",
        obtenerPais: function () { 
            console.log( this.pais ); // Costa Rica
            console.log( this ); // {pais: 'Costa Rica', obtenerPais: ƒ}
        }
    }
} 

persona6.imprimirNombre6();         // Esneider Olivo
persona6.direccion.obtenerPais();   // Costa Rica  
                                    //{pais: 'Costa Rica', obtenerPais: ƒ}
 */


console.log('\n PERSONA 7 \n ');
/* 
var persona7 = {
    nombre: "Esneider",
    apellido: "Olivo",
    imprimirNombre7: function() {
        console.log( this.nombre + " " + this.apellido );   // Esneider Olivo
    },                                                      // NOTA: Con la funcion tradicional hace referencia al objeto 
    direccion: {
        pais: "Colombia",
        obtenerPais3: function () { 

            console.log( "La direccion es en " + this.pais );

            var nuevaDireccion = function () { 
                console.log( this );
            }

            nuevaDireccion(); // Window {window: Window, self: Window, document: document, name: '', location: Location, …}
        }
    }
} 

persona7.imprimirNombre7();          // Esneider Olivo
persona7.direccion.obtenerPais3();   // La direccion es en Colombia
*/

console.log(' \n PERSONA 8 \n ');

let persona8 = {
    nombre: "Esneider",
    apellido: "Olivo",
    imprimirNombre8: function() {
        console.log( this.nombre + " " + this.apellido ); // Con la funcion tradicional hace referencia al objeto 
    },
    direccion: {
        pais:   "Colombia",
        departamento: "Atlantico",
        obtenerDireccion: function () { 
            
            console.log(" la ciudad es " + this.departamento);
            // Nota: depatamento hace parte del objeto this en el "objeto direcccion" ese instante

            var nuevoDireccionPais = function () {
                console.log( this );                                // Window {window: Window, self: Window, document: document, name: '', location: Location, …}
                console.log( this.pais );                           // undefined 
                //NOTA: lanzara undefined porque esta contenida en un metodo y no hace parte del objeto glogal.
            }

            nuevoDireccionPais();                                   // undefindes
            // NOTA: Lanza "UNDEFINED" por no hace referencia al objeto global porque pais esta contenida en el metodo obtenerDireccion
            //       La funcion nuevoDireccionPais no puede llamar lo que esta contenido en el "Objeto direccion" 

            var nuevoDireccionPaisFecha = () => {
                console.log( this );                                
                console.log( this.pais );                           
                //NOTA: Trae los valores del objeto global en este caso "Direccion"
            }

            nuevoDireccionPaisFecha();                              // {pais: 'Colombia', departamento: 'Atlantico', obtenerDireccion: ƒ}
                                                                    // Colombia

            var nuevaDireccion0 = function () { 
                console.log( this );                                // Window {window: Window, self: Window, document: document, name: '', location: Location, …}
                console.log( "La direccion es en " + this.pais );   // La direccion es en undefined
            }

            nuevaDireccion0();                                      // La direccion es en undefined 
            // NOTA: Lanza "UNDEFINED" por No hace referencia al objeto global porque pais esta contenida en el metodo obtenerDireccion
            //       La funcion nuevoDireccionPais no puede llamar lo que esta contenido en el "Objeto direccion" 

            //SOLUCION DE ESTE PROBLEMA SERIA

            // 1: 
            var self = this;
            
            var nuevaDireccion2 = function () { 
                console.log( self );                                // {pais: 'Colombia', obtenerPais4: ƒ}
                console.log( "La direccion es en " + self.pais );   // La direccion es en Colombia
            }

            // 2:
            var nuevaDireccion3 = () => { 
                console.log( this );                                // {pais: 'Colombia', obtenerPais4: ƒ}
                console.log( "La direccion es en " + this.pais );   // La direccion es en Colombia
            }

            nuevaDireccion2(); 
            nuevaDireccion3(); 

            var nuevaDireccion4 = function () { 
                console.log( this );                                // {pais: 'Colombia', obtenerPais4: ƒ}
                console.log( "La direccion es en " + this.pais );   // La direccion es en Colombia
            }

            nuevaDireccion4();

        }
    }
} 

persona8.direccion.obtenerDireccion();     /* la ciudad es Atlantico
                                            undefined                                                               16.metodos-objeto-THIS.js:153
                                            {pais: 'Colombia', departamento: 'Atlantico', obtenerDireccion: ƒ}      16.metodos-objeto-THIS.js:165
                                            La direccion es en Colombia                                             16.metodos-objeto-THIS.js:166
                                            {pais: 'Colombia', departamento: 'Atlantico', obtenerDireccion: ƒ}      16.metodos-objeto-THIS.js:171 
                                            La direccion es en Colombia                                             16.metodos-objeto-THIS.js:172 */





