// ¿Qué es una IIFE en JavaScript? Ejemplos y explicación Expresión de función ejecutada inmediatamente
// Link: https://youtu.be/yK_vE6ghox8

// IIFE (Immediately Invoked Function Expression)
// Lo pueden llamar de otras formas 1. Selft Executing Anonymous Function o Selft Execution Invoking Funtion pero es exactamente lo mismo. 

// Pocas palabras una funcion que se invoca inmediatamente. 

// Lo que no es una IIFE
const sayHi = () => {}
sayHi();

// Lo que es una IIFE
// Explicacion: Estamos haciendo la expresion y la estamos ejecutando

let a = 'hola';

(()=>{
    let b = 'hola';
    console.log('Hello, World!');
})()
// Nota: Se puede utilizar cuando tienes un solo archivo y tener una variable que no se quiera ejecutar en el contexto global del archivo. 
//       para que no contamien el scope

// tambien se utiliza para hacer un 'async await'
(async ()=>{
    await fetch(`url`)
})()
// ¿Porque se utiliza una IIFE en un archivo con un 'fetch'? Porque en Node.js y otros sitios no puedes tener el "Top-Level-Await" lo que quiere decir esto 
// es que no lo puedes tener en la raiz


const sayHola = () => {
    console.log('Hola');
}
//1.Explicacion: Cuando nosotros ejecutamos esto directamente en la raiz se demora y puede bloquear el fetch principal
sayHola();

// Esto evita, puede desbloquear y quedarse como prioridad antes en el hijo de ejecucion
(async ()=>{
    await fetch(`url`)
})()

// Se puede utilizar así
(function() {
    console.log('Hola');
})()

(function jQuery() {
    console.log('Hola');
})()

// Las IIFE las utilizaban antes y aun las librerias como JQUERY para no entrar a tu scope princital por ejemplo
// jquery.js 
// <script src='http://jquery.com/jquery.js'>
const jQuery = {}
(function jQuery() {
    const settings = {}
    console.log('Hola');
})()
// Nota: Esta forma de trabajo es cambiada cuando utilizamos <script type='module' src='http://jquery.com/jquery.js'/>

// Otra cosa que porque se hacia esto es porque 
 
(function jQuery(w, d) {
    console.log( w );                           // <ref *1> Window [global] {...}
    const settings = {}
    console.log('Hola');
})(window, document, {}) // Tambien le podeamos pasar configuraciones {}, cosas asi. 
// Al pasarle el window y el document lo que hacian era este truco. y se parava por argumentos w haciendo referencia al objeto window y la d para el document