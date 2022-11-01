
/* Object.freeze() - Congela un objeto */

const obj = {
    prop: 42
}

Object.freeze( obj ); // Congela el objeto
obj.prop = 45;

/* Object.seal() - Sellamos el objeto */
const perro = {}
perro.raza = 'Siberian Husky'
Object.seal(perro)
// Sellamos el objeto
perro.raza = 'Pug'
// Podemos cambiar propiedades que ya existe
perro.nombre = 'Max'
// Error: no podemos añadir propiedades nuevas

/* Object.create() */
const persona = {
    esHumano: false,
    introduccion: function () {  
        console.log(`Mi nombre es ${this.nombre} \n¿Soy humano? ${this.esHumano}`);
    }
}
const yo = Object.create(persona)
yo.nombre = 'Juan'
yo.esHumano = true
yo.introduccion()

/* Yo, es lo mismo */
class hola {}
class Persona extends hola { // <-- Puede extender
    esHumano = false;
    introduccion = () =>  {  
        console.log(`Mi nombre es ${this.nombre} \n¿Soy humano? ${this.esHumano}`);
    }
}
const yo = new Persona()
yo.nombre = 'Juan'
yo.esHumano = true
yo.introduccion()

/* Object.fromEntries() */
const entries = new Map([
    ['nombre', 'edad'],
    ['Esneider', 25]
])
const obj = Object.fromEntries(entries)
console.log(obj);

/* Object.assign() */
const objetivo = { a:1, b:2 }
const origen = { b:4, c:5 }
const origenDevuelto = Object.assign( objetivo, origen )
console.log( origenDevuelto ); 
// { a: 1, b: 4, c: 5 }
console.log( origenDevuelto === origen);
// false
