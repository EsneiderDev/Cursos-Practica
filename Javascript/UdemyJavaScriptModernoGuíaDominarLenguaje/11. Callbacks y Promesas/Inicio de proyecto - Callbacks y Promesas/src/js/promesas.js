const heroes = {
    capi: {
        nombre: 'Capitán América',
        poder: 'Aguantar inyecciones sin morir'
    },
    iron: {
        nombre: 'Ironman',
        poder: 'Absurda cantidad de dinero'
    },
    spider: {
        nombre: 'Spideman',
        poder: 'La mejor reaccion alergica a las picaduras de arañas'
    },
}

// =============== VIDEO 7, 8, 9, 11, 12: Promesas ===============
export const buscarHeroePromise = ( id ) => {

    const heroe = heroes[id];

    return new Promise( (resolve, reject) => {

        if (heroe) {
            resolve( heroe );
        } else {
            reject( `No existe un héroe con el id ${ id }` );
        }

    })
} 



// =============== VIDEO 10: Promise.rice ===============
const promesaLenta = new Promise( (resolve, reject) => {
    setTimeout( () => resolve('Promesa Lenta'), 2000);
})

const promesaMedia = new Promise( (resolve, reject) => {
    setTimeout( () => resolve('Promesa Media'), 1500);
})

const promesaRapida = new Promise( (resolve, reject) => {
    setTimeout( () => resolve('Promesa Rápida'), 1000);
})

export {
    promesaLenta,
    promesaMedia,
    promesaRapida
}


// =============== VIDEO 11, 12, 13: Async ===============
export const buscarHeroePromiseAsync = async ( id ) => {

    const heroe = heroes[id];

    if (heroe) {
        return heroe;
    } else {
        throw `No existe un héroe con el id ${ id }`;
    }

}  

// =============== VIDEO 13: Pro Tip Mejora el uso del await ===============
export const buscarHeroePromise2 = ( id ) => {

    const heroe = heroes[id];

    return new Promise( (resolve, reject) => {

        if (heroe) {
            setTimeout(() => resolve( heroe ), 1000); 
        } else {
            reject( `No existe un héroe con el id ${ id }` );
        }

    })
}

