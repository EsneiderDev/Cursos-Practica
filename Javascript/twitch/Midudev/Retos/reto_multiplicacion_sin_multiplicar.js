const arr = [1,2,3,4,5]
// arr.reduce((total, num) => total + num, 0)

// scope
// map. filter, reduce
// variables y funciones
// loops
 
const mult = (a, b) => {
  return a /(1/b)
}
console.log(mult(2,2));

const multi = (a, b) => {
  return " ".repeat(a).repeat(b).length;
}
console.log(multi(2,2));

const multip = (a, b) => {
  if( b == 0 ) return 0
  if( b == 1 ) return a
  return a + multip(a, b - 1 )
}
console.log(multip(2,2))

const multipl = (a, b) => {
  let result = 0;
  while ( b > 0 ){
    result +=a;
    b--;
  }
  return result
}
console.log(multipl(2, 2))


