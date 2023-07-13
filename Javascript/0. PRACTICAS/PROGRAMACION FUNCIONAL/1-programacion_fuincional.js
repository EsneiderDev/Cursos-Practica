/* 
    PROGRAMACION FUNCIONAL (Paradigma de programacion funcional(PF) ):
    1. La PF se basa en cálculo lambda
    2. Concretamente en composición de funciones puras
*/

// Por ejemplo el problema de querer incrementar un numero por 1
const inci = x => x + 1;
console.log(inci(2))


/*
const add2 = x => {
  return function(y){ return x + y }
};
*/

const add = x => y => x + y;

const inc = add(1);
const inc2 = add(2);
const inc3 = add(3);

console.log(inc(1))    // 2
console.log(inc2(2))   // 4
console.log(inc3(3))   // 6

// NOTA: Nuestra función add toma un valor X y devuelve una función que toma otro valor Y. Finalmente devuelve la suma de los dos números.

/* 
??  === CARACTERISTICAS DE LA PROGRAMACION FUNCIONAL ===
!1. No hay estado global.
!2. Todas las funciones son puras: Dado un mismo input siempre devolvemos el mismo output.
!3. Todos los valores son inmutables: Lo único que podemos hacer es generar nuevos valores.
!4. No hay bucles: La iteración se realiza usando recursividad.
*/