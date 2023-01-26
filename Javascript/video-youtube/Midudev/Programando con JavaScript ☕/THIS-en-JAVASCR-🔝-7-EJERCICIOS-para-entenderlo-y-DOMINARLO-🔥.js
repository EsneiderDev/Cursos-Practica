// Link Video: https://youtu.be/MO7Iqx6j0_M
// https://dmitripavlutin.com/javascript-this-interview-questions/#question-1-variable-vs-property


/* THIS en JAVASCRIPT 🔝 7 EJERCICIOS para entenderlo y DOMINARLO 🔥 */

/*      === Question 1: Variable vs property ===     */

const objeto_1 = {
    message: 'Hello, World!',
    
    getMessage() {
        const message = 'Hello, Earth!';
        return this.message;
    }
}

console.log(objeto_1.getMessage()); // Hello, World!

// Note: object.getMessage() is a method invocation, that's why this inside the method equals object.

       // ⚠️ Puede que el metodo de ejecucion sea otro, por ejemplo en la imprecion objeto_1.getMessage("Hello my Mon") puede remplazar el mensaje con message, pasando por parametro. Puede haber varias formas.
// Note: There's also a variable declaration const message = 'Hello, Earth!' inside the method. The variable doesn't influence anyhow the value of this.message.
//      Hay tambien hay declaracion de una variable  const message = 'Helli, Earth' dentro del metodo. La variable no influye de ninguna manera ele el mavor de this.message


/*  === Question 2: Cat name ===  */

function Pet(name) {
    this.name = name;

    this.getName = () => this.name;
}

const dog = new Pet('Firulay');
console.log( dog.getName() );        // Firulay 

const { getName } = dog;
console.log( getName() );            // Firulay

// En forma de clase. 
class Pet {
    constructor(name) {
        this.name = name;
        this.getName = () => this.name;
    }
}


/*  === Question 3: Delayed greeting === */

const objeto_3 = {
    message: 'Hello, World!',
    logMessage(){
        console.log(this.message);
    }
}

// Lo que pasa aquí es que en el contesto de ejecucion de este logMessage despues que pase un segundo no sera el objeto
// porque si te fijas esta pasando como parametro para tener la referencia de la funcion, no se esta ejecutando directamente
// por lo tanto el contexto de ejecucion de este metodo va ser el 'window' ¿y cuándo sea el window que pasara?, el 'this.message' sera undefined
setTimeout( objeto_3.logMessage, 1000);                // undefined

// Para arreglar esto seria
setTimeout(()=> objeto_3.logMessage(), 1000);          // Hello, World!
// Otra forma seria bindinando el valor de objeto_3
// explicación: Creame una funcion como logMessage donde el valor de 'this' sea el de este object
setTimeout(objeto_3.logMessage.bind(objeto_3), 1000);  // Hello, World!




/*  === QUESTION 4: Delayed greeting (Saludo retrasado) === */

// How can you call logMessage function so that it logs "Hello, World!"
// Como puedes llamar la funcion de logMessage para que logue "Hello, World!"

const object = {
    message: 'Hello, Word!'
}

function logMessage() {
    console.log(this.message);
}

// Explicar: Esto lo que hace es devolvernos una nueva funcion y le tendriamos que volver a ejecutarla, Esto obviamente no es lo idéal hay otra forma de hacer la funcion y llamarla directamente. 
logMessage.bind(object)()

logMessage.apply(object)

// Using func.call() method
logMessage.call(object)

//EJEMPLO de mdn web docs Mozilla
    function Product(name, price) {
        this.name = name;
        this.price = price;   
    }

    function Food(name, price) {
        Product.call(this, name, price)
        this.category = 'Food';
        this.showFood = () => `El precio es ${this.price}`
    }

    console.log( new Food('Queso', '15.000') );
    let footVeryExpensive =  new Food('Queso', '15.000') // Food { name: 'Queso', price: '15.000', category: 'Food' }

    const { showFood } = footVeryExpensive;
    console.log( showFood() );

/*  === Question 5: Greeting and farewell === */

// That logs to console the following code snippet: 

const object5 = {
    who: 'World',

    greet() {
        return `Hello, ${this.who}`;
    },

    farewell: () => {
        return `Goodbye, ${this.who}`;
    }
}

// No hace parte del scope
console.log(this.who);              // undefined  
// Hace parte del scope de object5
console.log(object5.who);

console.log(object5.greet())        // Hello, World
//Explicacion: El scope superior del this.who en la funcion farewell es el window porque es un objeto no una funcion como lo vimos en la Question 2
console.log(object5.farewell())     // Goodbye, undefined


/*  == Question 6: Tricky length == */
// What logs to console the following code snippet
// Que loguea la consola el sigueiente snippet

var length = 4;
function callback() {
  console.log(this.length); // What is logged?
}
const object6 = {
  length: 5,
  method(callback) {
    //1. console.log(this.length)                // 4 
    // De esta forma si da 5 porque llama al objeto de adentro.
    
    //2. callback.bind(object6)()                // 5 el console.log(this.length) cambia de 4 a 5
    // ⬆️ ¿Porque ha hecho esto de arriba? si imprimimos console.log(arguments) el primer argumento es el callback
    
    // console.log(arguments);                   // {'0':ƒ callback(),'1': 1,'2': 2, length:3, callee:ƒ method(), __proto__:{...}}
    // console.log(arguments.length);            // 3
    
    // Lo que contiene el scope.
    // console.log(this)                         // { length: 5, method: ƒ method() }

    // Como podemos ejecutar el callback sin pasar algun argumento
    console.log( argument[0][0]());                 // Estos son los argumentos que tiene, la funcion, el 1 y el 2
    
    callback();
  }
};
object6.method(callback, 1, 2);                  //  4



/*      == Question 7: Calling arguments ==    */
// What logs to console the following code snippet:      

var length = 4;
function callback() {
  console.log(this.length); // What is logged?
}
const object7 = {
  length: 5,
  method() {
    arguments[0]();
  }
};
// Explicacion: Ya esta explicado en la Question 6
object.method(callback, 1, 2);                  // 3
