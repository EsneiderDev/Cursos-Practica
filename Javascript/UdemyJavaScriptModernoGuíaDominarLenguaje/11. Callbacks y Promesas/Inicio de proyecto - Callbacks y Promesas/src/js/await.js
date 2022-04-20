import { buscarHeroePromiseAsync, buscarHeroePromise2 } from "./promesas"; // Video 12, 13

// =============== VIDEO 12: await ===============

const heroesIds = ['capi', 'iron', 'spider'];

/* 
export const obtenerHeroesArr = () => {
    const heroesArr = [];

    for (const id of heroesIds) {
        buscarHeroePromiseAsync ( id )
        .then( heroe =>  heroesArr.push( heroe ) )
    }

    // Solucion del falso positivo pero No es eficiente hacer esto
    // setTimeout( () => {
    //     console.log('ObtenerHeroes');
    //     console.table( heroesArr );
    // }, 1000)

    return heroesArr;
}
*/

/* Obtener el heroe simulando una peticion a la base de datos o algun recurso 
externo que me regrese una promesaLenta, no es instantaneo para poder esperar ese resultado
para poder insertarlo al arreglo de heroes */
/* 
export const obtenerHeroesArr = async () => {
    const heroesArr = [];

    for (const id of heroesIds) {
        const heroe = await buscarHeroePromiseAsync ( id )
        heroesArr.push( heroe );
    }

    return heroesArr;
} 
*/

// =============== VIDEO 13: Mejora el uso del await ===============
/* 
export const obtenerHeroesArr = async () => {
    const heroesArr = [];

    for (const id of heroesIds) {
        heroesArr.push( buscarHeroePromise2( id ) );
    }

    return await Promise.all( heroesArr ); // "Await" para que no de un falso positivo
}  
*/

// Lo hacemos ma elegante
export const obtenerHeroesArr = async () => {
    return await Promise.all( heroesIds.map( buscarHeroePromise2 ) );
}

// =============== VIDEO 14: Manejo de errores en el await ===============
export const obtenerHeroeAwait = async ( id ) => {

    try {

        const heroe = await buscarHeroePromiseAsync( id );
        return heroe;

    } catch (error) {
        console.log('CATCH');
        // console.log( error ); // No existe un héroe con el id capi2 await.js:71
        // throw error; // No existe un héroe con el id capi2
        return {
            nombre: 'sin nombre',
            poder: 'Sin poder'
        }
    }
}


// =============== VIDEO 15: for awair, if await ===============
const heroesPromesas = heroesIds.map( buscarHeroePromise2 ) // video 15
// const heroesPromesas = heroesIds.map( id => buscarHeroePromise(id) ) // Es lo mismo que tenemos arriba

export const heroeCiclo = async () => {

    console.time('HeroesCiclo');
    
    // for (const heroe of heroesPromesas ) {
    //     console.log( heroe ); // Promise {<pending>} x3
    // }

    // ejecuta primero el timer y despues muestra los registros, no es muy viable
    // heroesPromesas.forEach( async(p) => console.log( await p) ) // HeroesCiclo: 0.046875 ms {...} {...} {...}

    // Es mas viable este
    for await(const heroe of heroesPromesas ) {
        console.log( heroe );
    }

    console.timeEnd('HeroesCiclo');
    
    // const heroes = await Promise.all( heroesPromesas );
    // heroes.forEach( heroe => console.log(heroe) )

}

export const heroeIdAwait = async ( id ) => {

    /* if ( buscarHeroePromiseAsync(id) === "Ironman" ){
        console.log('Es el mejor de todos');
    }else{
        console.log('Naaaa'); // Naaa
    } */

    if (  ( await buscarHeroePromiseAsync(id)).nombre === "Ironman" ){
        console.log('Es el mejor de todos'); //  Es el mejor de todos
    }else{
        console.log('Naaaa'); // Naaa
    }


}