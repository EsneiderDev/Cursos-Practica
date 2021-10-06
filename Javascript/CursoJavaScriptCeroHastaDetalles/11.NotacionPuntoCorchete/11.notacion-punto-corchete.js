


var persona = {

    nombre: "Manuel",
    apellido: "Ferreira",
    edad: 23,
    direccion:{
        pais: "Colombia",
        ciudad: "Barranquilla", 
        edificio: {
            nombre: "Los aires",
            telefono: "2222-3333"

        }
    } 
};

/* console.log(persona.nombre, persona.apellido, persona.edad);*/

/* console.log( persona.direccion.pais );
console.log( persona.direccion ); */
/* 
persona.direccion.zipcode = 10101;

console.log( persona.direccion.zipcode );

console.log( persona.direccion.edificio.telefono = 101010)
*/

var edificio = persona.direccion.edificio;

edificio.NoPiso = "Octavo Piso";

console.log(persona); 

// Corchete

console.log ( persona['direccion']["edificio"]);

var campo = "edad";
var campo2 = "edad2";

console.log( persona[campo]); // 23
console.log( persona[campo2]); // UNDEFINED

console.log( persona.edad );
console.log( persona.edad2 ); // UNDEFINED


