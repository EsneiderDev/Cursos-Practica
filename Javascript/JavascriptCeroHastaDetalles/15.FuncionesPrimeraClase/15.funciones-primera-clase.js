
function a() {
    console.log('Funcion a');
}

a();

/* a.nombre = 'Maria'; */ // console => a   --> ƒ
                    // console => a.nombre  --> "Maria"


/* a.apply = "Nancy"; */ // console => a.pply --> 'Nancy'

a.nombre = "Paola";

a.direccion = {
    pais: "Colombia",
    ciudad: "Soledad",
    edificio: {
        piso: "Segundo piso",
        nombre: "Alameda"
    }
}

// console => a.direccion --> {pais: 'Colombia', ciudad: 'Soledad', edificio: {…}}
// console => a.edificio  --> {piso: 'Segundo piso', nombre: 'Alameda'}
// console => a.direccion.edificio.piso --> 'Segundo piso'

document.write(a.direccion.edificio.piso+" </br> ");

a.direccion.edificio.piso = 'Tercer piso'; // pagina --> 

alert(a.direccion.edificio.nombre);

document.write(a.direccion.edificio.piso);