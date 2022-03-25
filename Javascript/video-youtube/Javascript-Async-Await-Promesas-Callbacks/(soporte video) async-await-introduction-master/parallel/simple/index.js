const { taskOne, taskTwo, primeraTarea, segundaTarea } = require('./tasks');

/* // EXECUTING TWO TASKS IN PARALLEL
async function main() {

  try {
    console.time('tasks time');

    const data = await Promise.all([taskOne(), taskTwo()]);

    console.log('Task One returned: ', data[0]);
    console.log('Task Two returned: ', data[1]);

    console.timeEnd('tasks time');
  }
  catch (e) {
    console.log(e);
  }

}

main(); */


console.log("TAREA POR MI");

async function inicio() { 
  try {

    console.time('Inicio');
    const datos = await Promise.all([primeraTarea(), segundaTarea()])
    
    console.log('Tarea 1°: ', datos[0]);
    console.log('Tarea 2°: ', datos[1]);
    
    console.timeEnd('tasks time');
  } catch (error) {
    console.log(error);
  }

}

inicio();
