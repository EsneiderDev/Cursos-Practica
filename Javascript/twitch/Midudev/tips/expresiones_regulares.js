/*Math.random().toString(36).slice(2);
crypto.randomUUID()

var kvArray = [{clave:1, valor:10},
               {clave:2, valor:20},
               {clave:3, valor: 30}];

var reformattedArray = kvArray.map(function(obj){
   var rObj = {};
   rObj[obj.clave] = obj.valor;
   return rObj;
});
console.log(reformattedArray);*/

/*
const string = 'This is a JavaScript test ver lol jjireh Lorem ipsum, dolor sit amet consectetur adipisicing elit'

function reverse(text) {  
    return text.split(' ', 4).join('');
}

reverse(string); */

formDataPermisos = {
  "GestiondeMaestros.id_permiso":0,
  "GestiondeMaestros.ver":"on",
  "GestiondeMaestros.crear":"on",
  "GestiondeMaestros.actualizar":"on",
  "GestiondeMaestros.eliminar":"on",
  "GestiondeMaestros.id_cargo":0,
  "Maestros.id_permiso":0,
  "Maestros.vher":"on",
  "Maestros.crear":"on",
  "Maestros.actualizar":"on",
  "Maestros.eliminar":"on",
  "Maestros.id_cargo":1,
  "Configurardías.id_permiso":0,
  "Configurardías.ver":"on",
  "Configurardías.crear":"on",
  "Configurardías.actualizar":"on",
  "Configurardías.eliminar":"on",
  "Configurardías.id_cargo":0,
  "ConfiguracióndeContratos.id_permiso":0,
  "ConfiguracióndeContratos.id_cargo":0,
  "ConfigurarOpciones.id_permiso":0,
  "ConfigurarOpciones.id_cargo":0
}

let datos = {}
let datosInterno = {};
let papa='';
let contador=0
for (const propiedad in formDataPermisos) {
contador+=1;
const element = formDataPermisos[propiedad]
let valor = propiedad.replace(/[é]/g, "e").replace(/[í]/g, "i").replace(/[ó]/g, "o").substring(0, propiedad.indexOf('.'));
let valor2 = propiedad.substring(propiedad.length, propiedad.indexOf('.') + 1);
//valor2 == 'id_cargo' ? delete formDataPermisos.propiedad : '';
datosInterno.id_empleado = '1';
if(datos[papa] === undefined && papa==''){
  papa=valor;
  datosInterno={};
  datosInterno[valor2] = element;
  delete datosInterno.id_cargo;
}else if(datos[papa] === undefined && papa!=valor){
  datos[papa]=datosInterno;
  papa=valor;
  datosInterno={};
  datosInterno[valor2] = element;
  delete datosInterno.id_cargo;
}else{
  datosInterno[valor2] = element;
  if(contador==Object.keys(formDataPermisos).length){
    datos[papa]=datosInterno;
    delete datosInterno.id_cargo;
  }
}
}
console.log(datos)

/*const letras = "Modulo de seguridad > Permisos. > Crear perfil";
let arr2 = letras.replace('.', '').split('>').map( elem => elem.trim() )
console.log( arr2 )*/

/*const person1 = { name: "David", age: "Ortega" };
const person2 = { name: "David", age: "Ortega" };
console.log( JSON.stringify( person1 ) === JSON.stringify( person2 ) );*/

let registro = { "primer_nombre": "WEEE", "segundo_nombre": "WEEE", "primer_apellido": "WEE", 	                         "segundo_apellido": "DE LA HOZ", "id_perfil": 37, "tarjeta_profesional": 123654, "id_sede_principal": 1, "multisede": 1, "p_salud": 1,"especialidades": 32, "id": 25,
    "id_sedes": [ "1", "7" ], "id_especialidades": [ "27", "28", "30","32", "22" ],
    "estado": 1
}

let respuesta = { "primer_nombre": "WEEE", "segundo_nombre": "WEEE", "primer_apellido": "WEE",
    "segundo_apellido": "DE LA HOZ","id_perfil": 37, "tarjeta_profesional": 123654, "id_sede_principal": 1,
    "multisede": 1,"p_salud": 1, "especialidades": 33, "id": 25,
    "id_sedes": [ "1", "7" ], "id_especialidades": [ "27", "28", "30","32" ],
    "estado": 1
}

jsonDiff( registro, respuesta );

function jsonDiff( registro, respuesta ){
	if(true){
		let cambios = {};
    //let diferencia = [];
    Reflect.set(cambios,'id', respuesta['id']);
    for (const property in respuesta) {
    	if(registro[property]!=respuesta[property]){
        if( typeof respuesta[property] == "number" || typeof respuesta[property] == "string"){
        	Reflect.set(cambios, property, respuesta[property])
        }
        if( Array.isArray(registro[property]), Array.isArray(respuesta[property])){
            if( registro[property].length != respuesta[property].length ){
              var difer = [];
              var elem;
              for (const element of respuesta[property]) {
                difer.push(false == ( element == registro[property].find(elem => elem === element )) ? element : '' );
                //console.log( elem )
              }
              for (const element of registro[property]) {
                difer.push(false == ( element == respuesta[property].find(elem => elem === element )) ? element : '' );
                //console.log( elem )
              }
              difer = difer.filter( n => { if((n !== '') || (n !== undefined)){ return n} } )
              if( difer.length !== 0) Reflect.set(cambios, property, difer )
            }
        }
      }
    }
    	return cambios;
  }else{
  	return respuesta;
  }
}


/*const diferenciaDeArreglos = (arr1, arr2) => {
  if(arr1 > arr2){
    return arr1.filter(elemento => arr2.indexOf(elemento) == -1);
  }else{
    return arr2.filter(elemento => arr1.indexOf(elemento) == -1);
  }
}

const arr1 = [ "27", "42" ];
const arr2 = [ "27", "42", "54"  ];

const existenEnWorldPeroNoEn3 = diferenciaDeArreglos( arr1, arr2);
console.log("Existen en arr1 pero no en arr2: ", existenEnWorldPeroNoEn3);

const existenEn3PeroNoEnWorld = diferenciaDeArreglos( arr2, arr1);
console.log("Existen en arr2 pero no en arr1: ", existenEn3PeroNoEnWorld);*/
