const util =  require('util');
const sleep = util.promisify(setTimeout);

module.exports = {

    async taskOne(){
        try {
            await sleep(4000);
            return 'ONE VALUE';
        } catch (error) {
           console.error(error); 
        }
        
    },

    async taskTwo(){
        try {
            throw new Error('SOME PROBLEM');
            await sleep(2000);
            return 'TWO VALUE';
        } catch (error) {
            console.error(e);
        }
        
    }

};

    /* function resolveAfter2Seconds(x) {
        return new Promise(resolve => {
        setTimeout(() => {
            resolve(x);
        }, 2000);
        });
    }
  
    async function f1() {
        var x = await resolveAfter2Seconds(10);
        console.log(x); // 10
    }
  
    f1(); */