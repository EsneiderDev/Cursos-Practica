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








