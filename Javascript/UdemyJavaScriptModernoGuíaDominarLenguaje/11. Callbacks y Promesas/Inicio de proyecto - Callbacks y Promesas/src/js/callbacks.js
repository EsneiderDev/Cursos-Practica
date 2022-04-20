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

// =============== VIDEO 4: CallBack ===============
export const buscarHeroeVideo4 = ( id, fn ) => {
    let heroe = heroes[id];
    fn(heroe);
}

// =============== VIDEO 5 y 6 ===============
export const buscarHeroe = ( key, fn ) => {
    let heroe = heroes[key]
    if( heroe ){
        fn( null, heroe )
    }else{
        fn(`No existe un héroe con el id ${ key }`)
    }
} 