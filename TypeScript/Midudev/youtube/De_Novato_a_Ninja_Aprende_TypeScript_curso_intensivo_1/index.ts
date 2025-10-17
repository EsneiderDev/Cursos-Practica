// any lo que hace es omitir los tipos.

// =============================== TIPADOS EN LAS FUNCIONES (38:00) ======================

//const sayHiFromFunction = ( fn: Function) =>{ // <-- Function es el any pero en las funciones jaja
//    fn("Esneider")
//}
//
//sayHiFromFunction( (name: string) => {
//    console.log(`Hola ${name}`)
//})
//
//// Aqui esta el error: usamos la funcion para hacer otra cosa diferente para lo que esperamos que hiciece la funcrion "sayHiFromFunction"
//sayHiFromFunction( () => {
//    return Math.random()
//})

// FORMA DE HACERLO BIEN

const sayHiFromFunction = ( fn: (name: string) => void) =>{ // le decimos que recibe un string y que no devuelve nada.
    fn("Esneider") 
}

const sayHi = (name: string) => {
    console.log(`Hola ${name}`)
}

sayHiFromFunction( sayHi )

// forma de tipar las arrow function
// 1. Primera forma
const sumar = (a: number, b: number): number => {  // no coloque que retorna number, lo infiere por debajo
    return a + b;
}

// 2. segunda forma
const restar: (a: number, b: number) => number = (a, b) => {
    return (a - b);
}

// == never, nunca va a devolver nada, para que no tengas problema en intentar guardar una variable.
function throwError(message: string): never {
    throw new Error(message)
}

// por ejemplo, nunca quevuelve el return implicito
function logMessage(message:string): void {
    console.log(message)
    // throw new Error(message); se encuentra con un throw implicito digamoslo asi.
    // return implicito <--- nunca va a llegar aquí
}

// == inferencias funciones anonimas segun el contexto
const avengers = ['Apidey', 'Huld', 'Avengers']

avengers.forEach( function(avenger) {
    console.log(avenger.toLocaleUpperCase())
});



// inferencias con los objeros
/*let hero = {
    name: 'Thor',
    age: 1500
}

hero.age = 1501

hero.age = 1501


// NO sabemos si es el mismo tipo
function createHero(name: string, age: number) {
    return { name, age }
}

const thor = createHero('Thor', 1500); */

// == y si no sabemos, hay algo qye se llama los Type Alias ==

//type Hero = {
//    name: string,
//    age: number
//}
//
//let hero: Hero = {
//    name: 'Thor',
//    age: 1500
//}

/*function createHero(name: string, age: number): Hero{
    return { name, age } // isActive: true si colocamos la propiedad se queja.
}

const thor = createHero('Thor', 1500);*/

// podemos tambien hacerlo así:
//function createHero(hero: Hero): Hero{
//    const { name, age } = hero;
//    return  {name, age} 
//}
//
//let heroExample: Hero = {
//    name: 'Thor',
//    age: 1500
//}

//const thor = createHero('Thor', 1500); // ahora se queja porque solo le tienes que pasar un argumento y le has pasado dos.
// El espera un objeto.
//const thor = createHero(heroExample);

// == Optional properties == 

type Hero = {
    name: string,
    age: number,
    isActive?: boolean  // si no colocamos ? genera error.
}

let hero: Hero = {
    name: 'Thor',
    age: 1500
}

function createHero(hero: Hero): Hero {
    const { name, age } = hero;
    return  {name, age, isActive: true} // si lo estamos creando es porque esta activo
}

const thor = createHero({ name: 'Thor', age: 1500 }); // --> nos devolveria true