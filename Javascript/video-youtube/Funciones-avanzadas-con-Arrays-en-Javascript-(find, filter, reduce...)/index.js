const productos = [
    { nombre: 'Ordenador PC', precio: 777, departamento: 'Tecnologia'},
    { nombre: 'Sartenes Verdes', precio: 40, departamento: 'Hogar'},
    { nombre: 'Reloj Calculadora', precio: 75, departamento: 'Tecnologia'},
    { nombre: 'Máquina Palomitas', precio: 33, departamento: 'Hogar'},
    { nombre: 'Mueble TV', precio: 120, departamento: 'Hogar'},
    { nombre: 'Tuppers', precio: 10, departamento: 'Hogar'},
] 

                        // =============== FIND =================

const muebleTv = productos.find( item => {
    //return item.nombre === 'Mueble TV'
    return (/Mueble/g).test(item.nombre)
})
//console.log( muebleTv ); // 1er return { nombre: 'Mueble TV', precio: 120, departamento: 'Hogar' }
                         // 2do return { nombre: 'Mueble TV', precio: 120, departamento: 'Hogar' }

                         

                        // ============ MAP =====================

// SIN HACER COPIA AL OBJETO
/*
const productosIva = productos.map( item => {
    item.precio = item.precio + item.precio*0.21
    return item
})
 */
// console.log( productosIva );
// COMO ES VALOR POR REFERENCIA AL ARRAY ORIGINAL TAMBIEN SE LE CAMBIO
// console.log( productos );

// CON HACER COPIA AL OBJETO
const productosIva2 = productos.map( item => {
    let newPrecio = item.precio + item.precio * 0.21
    // return item
    return {...item, precio: newPrecio}
})
console.log(productosIva2, productos);
/* 
[
    { nombre: 'Ordenador PC', precio: 940.17, departamento: 'Tecnologia'},
    { nombre: 'Sartenes Verdes', precio: 47.19, departamento: 'Hogar' },
    { nombre: 'Reloj Calculadora', precio: 90.75, departamento: 'Tecnologia'},
    { nombre: 'Máquina Palomitas', precio: 39.93, departamento: 'Hogar' },
    { nombre: 'Mueble TV', precio: 145.2, departamento: 'Hogar' },
    { nombre: 'Tuppers', precio: 12.1, departamento: 'Hogar' }
]
[
    { nombre: 'Ordenador PC', precio: 777, departamento: 'Tecnologia' },
    { nombre: 'Sartenes Verdes', precio: 39, departamento: 'Hogar' },
    { nombre: 'Reloj Calculadora', precio: 75, departamento: 'Tecnologia'},
    { nombre: 'Máquina Palomitas', precio: 33, departamento: 'Hogar' },
    { nombre: 'Mueble TV', precio: 120, departamento: 'Hogar' },
    { nombre: 'Tuppers', precio: 10, departamento: 'Hogar' }
]
*/

                        // ============ FILTER  =================

const productosDelHogar = productos.filter( item => {
    return item.departamento === 'Hogar';
})
console.log( productosDelHogar );
/* 
[
    { nombre: 'Sartenes Verdes', precio: 39, departamento: 'Hogar' },
    { nombre: 'Máquina Palomitas', precio: 33, departamento: 'Hogar' },
    { nombre: 'Mueble TV', precio: 120, departamento: 'Hogar' },
    { nombre: 'Tuppers', precio: 10, departamento: 'Hogar' }
]
*/

                        // ============== EVERY =================

const ckeck = productos.every(item => {
    return item.precio >= 100
})
console.log( ckeck ); // false

                        // =============== SOME =================


const valid = productos.some( item => item.precio >= 500 )
console.log( valid ); // true

        
                        // =============== REDUCE =================

const precioTotal = productos.reduce( (total, item) => {
    return total + item.precio;
}, 0)
console.log( precioTotal ); // 1055
