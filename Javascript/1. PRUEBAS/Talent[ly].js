// ¿Qué es el hoisting?
// Respuesta: Hoisting es un término para describir que las declaraciones de variables y funciones son movidas a la parte superior del scope más cercano

const fnt =  () => ( { 'nombe': "juan"})
console.log(fnt)

({a,b,...rest} = {a:1,b:2,c:3,d:4})
connsole.log(rest)

// apply -- Existe y se llama con this
const person = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  
  const person1 = {
    firstName: "Mary",
    lastName: "Doe"
  }
  
  // This will return "Mary Doe":
  person.fullName.apply(person1);
