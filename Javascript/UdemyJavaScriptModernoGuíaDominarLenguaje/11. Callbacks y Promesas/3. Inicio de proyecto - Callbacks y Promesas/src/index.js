// import './styles.css';
import { saludar } from "./js/componentes";
import { buscarHeroeVideo4  } from './js/callbacks';
// import  { buscarHeroe as buscarHeroeCallback } from './js/callbacks';
// import { buscarHeroePromise } from './js/promesas';
// import { promesaLenta, promesaMedia, promesaRapida } from './js/promesas';
// import { buscarHeroePromise, buscarHeroePromiseAsync } from './js/promesas'; // Video 11
// import  { obtenerHeroesArr } from './js/await'; // Video 12, 13
// import { obtenerHeroeAwait } from "./js/await"; // video 14
import { heroeCiclo, heroeIdAwait } from "./js/await"; // video 15


const nombre = 'Esneider';
 saludar( nombre );


const heroeId  = 'capi';
const heroeId1  = 'capi';
const heroeId2 = 'iron';


// =============== VIDEO 4:  CallBack ===============
buscarHeroeVideo4(heroeId, (heroe) => {
    console.log('VIDEO 4: Callback: ', heroe)
})

// =============== VIDEO 5: Argumentos estándar de los CallBack ===============
/* buscarHeroeCallback(heroeId1, ( err, heroe) => {
    if( err ){
        console.log('Error VIDEO 5: Argumentos estandares de los CallBack: ', err );
    }else{
        console.log('VIDEO 5: Argumentos estandares de los CallBack: \n ', heroe );
    }
}) */


// =============== VIDEO 6: CallBack hell ===============
/* buscarHeroeCallback( heroeId1, ( err,  heroe1 ) => {
    
    if( err ){ console.error( err ) }

    buscarHeroeCallback( heroeId2, ( err2, heroe2 ) => {

        if( err ){ console.error( err ) }
        console.log(` VIDEO 6: CallBack hell \n Enviando a ${heroe1.nombre } y ${heroe2.nombre} a la misión`);

    })
}) */
 
// =============== VIDEO 7: Promesas ===============

/* buscarHeroePromise( heroeId1 ).then( heroe  => {
    console.log( `VIDEO 7: Promesas \n Enviando a ${ heroe.nombre} a la mision` );
}).catch( err => {
    console.log( err );
}) */


// =============== VIDEO 8: Promise.all ===============
/* Promise.all( [buscarHeroePromise(heroeId1), buscarHeroePromise(heroeId2)])
.then( ([heroe1, heroe2]) => { // <== [heroe1, heroe2] Asi se desestruturacion de arreglos como un argumento a una función
    console.log(` VIDEO 8: Promise.all \n Enviando a ${heroe1.nombre } y ${heroe2.nombre} a la misión`);
}) */

// =============== VIDEO 9: Promise.catch ===============
/* Promise.all( [buscarHeroePromise(heroeId1), buscarHeroePromise(heroeId2)])
.then( ([heroe1, heroe2]) => { // <== [heroe1, heroe2] Asi se desestruturacion de arreglos como un argumento a una función
    console.log(` VIDEO 9: Promise.all \n Enviando a ${heroe1.nombre } y ${heroe2.nombre} a la misión`);
}).catch( err => {
    alert(err) 
}).finally( () => {
    console.log('Se termino el Promise.all');
}) */

// =============== VIDEO 10: Promise.rice ===============
// promesaLenta.then( console.log )
// promesaMedia.then( console.log )
// promesaRapida.then( console.log )

/* Promise.race( [promesaLenta, promesaMedia, promesaRapida] )
       .then( console.log )
       .catch( console.warn ) */



// =============== VIDEO 11: Async ===============
/* buscarHeroePromise( 'capi2' )
        .then( console.log )
        .catch( console.warn )

buscarHeroePromiseAsync( 'iron2')
        .then( console.log )
        .catch( console.warn ) */

// =============== VIDEO 12: await ===============
// const heroes = obtenerHeroesArr();
// console.log( heroes ); // da un falso positivo
// console.log( heroes ); // Promise {<pending>}

// obtenerHeroesArr().then( console.table )

// =============== VIDEO 13: Mejora el uso del await ===============
/* console.time('await');
obtenerHeroesArr().then( heroes => { 
    console.table(heroes)
    console.timeEnd('await') 
}) */

// =============== VIDEO 14: Manejo de errores en el await ===============
/* console.time('await')
obtenerHeroeAwait('capi2')
    .then( heroes => { 
        console.log( heroes )
        console.timeEnd('await') 
    }).catch( console.warn ) */

// =============== VIDEO 15: for awair, if await ===============
// heroeCiclo()
// heroeIdAwait('iron')