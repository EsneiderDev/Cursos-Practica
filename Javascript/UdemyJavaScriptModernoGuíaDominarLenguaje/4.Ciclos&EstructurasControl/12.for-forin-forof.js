

const heroes = ['Batman', 'Superman', 'Mujer Maravilla', 'Aquiaman'];

console.warn('For Tradicional');

for (let index = 0; index < heroes.length; index++) {
    const element =  heroes[index];
    console.log(element);
}   //    Batman
    //     Superman
    //     Mujer Maravilla
    //     Aquiaman

console.warn(' \n For in');

for (const i in heroes) {
    console.log( heroes[i] );

    /* if (Object.hasOwnProperty.call(heroes, i)) {
        const element = heroes[i];
        console.log( element );
    } */
}

console.warn(' \n For Of');

for (const heroe of heroes) {
    console.log( heroe );
}
// Nota: Extrae el valor que se encuentra dentro del arreglo y lo regresa a heroe 