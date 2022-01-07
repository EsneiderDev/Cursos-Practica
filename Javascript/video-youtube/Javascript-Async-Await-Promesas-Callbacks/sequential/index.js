
const { taskOne, taskTwo } = require('./tasks');

async function main() {
    try {
        console.time('Measuring time');
        // const valueOne = await taskOne();
        // const valueTwo = await taskTwo();
        const results = await Promise.all([taskOne(), taskTwo()])
        console.timeEnd('Measuring time');
    
        /* console.log('Task One returned', valueOne );
        console.log('Task Two returned', valueTwo ); */

        console.log('Task One returned', results[0]);
        console.log('Task Two returned', results[1]);
        
    } catch (err) {
        console.error(err);
    } 
}

main();


