// https://youtu.be/-HjvUAP2Zvg

/* == == */
/* Map */
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

/* Object */
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object

/* 2ality.com */
//https://2ality.com/2013/10/typeof-null.html


/* DEFINICIÓN DE UN MAP */
/* _________________________________________________________________________________________________  */
/* El objeto Map contiene pares clave-valor y recuerda el orden de inserción original de las claves. 
   Cualquier valor (tanto objetos como valores primitivos) se puede utilizar como clave o como valor. */

// Los dos son similares tanto los Map como los Object 

/* Diferencia */
// 1. Accidental Keys: los map no contienen Key por defectos, los object si por el prototupe.
const p = {
    a: {
        b:{
            c: ''
        }
    }
}
p.d // esto ya lo tengo controlado.
// Nota en contrario puede pasar que tu hagas p.d pero ya exista, tanto lo que viene en el prototipe como otras llaves. 
// para evitarlo necesitarias crear el objeto de esta forma 
const a = Object.create(null);
console.log(a); // [Object: null prototype] {}
//Nota: esta totalmente vacio porque ha extendido de null
// al contrario si hacemos esto
const b = Object.create({});
console.log(b); // {} => Tiene el prototipe adentro, es decir ya tiene metodos.

// 2. Key Types: Las llaves de los map pueden ser functions, objects o primitive en cambio
// 3. Key Order: Map se ordena con el orden de insercion, los Object al parecer estan ordenados no estan. 
// 4. Size: en Map es mucho mas facil retornar la longitud al contrario a un Object
/* Con Map */
const myMap = new Map();
myMap.set('name','Esneider')
myMap.set('age', 25);
console.log(myMap);
console.log(myMap.size); // 2
/* Con Object */
const persona = {
    name: 'Esneider',
    age: 25,
    email: 'example@example.com'
}
console.log( persona );
console.log( Object.keys(persona).length ); // 3

// 5. Iteration: A Map is an iterable, so it can be directly iterated.
// 6. Performance: Performs better in scenarios involving frequent additions and removals of key-value pairs. en cambio los object
//    Not optimized for frecuentes additions and removals of key-value pairs.
const persona2 = {
    name: 'Manuel',
    age: 25,
    email: 'example@example.com'
}

//delete persona2.name; // Nota: Esto es el mal, tiene problema con la complicacion del javascript en el navegador.
//-- Para evitar el delete puedes hacer esto
persona2.name = undefined;
console.log( Object.keys(persona2).length ); // Undefined es un valor. 

//-- En cambio con deleted en MAP --


