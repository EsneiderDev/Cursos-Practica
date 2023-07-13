
let arr = [1,2,3,4,5,6]
function recursividad( arr ){
  if(arr.length==0){
    return ''
  }else{
    let elemento=arr[0];
     arr.shift()
    return `${elemento}${arr.length!=0?',':''}${recursividad( arr )}`
  }
  
}
console.log(recursividad(arr))


let arr2 = [1,2,3,4,5,6]
function recursividadI(arr){
  if(arr.length==0){
    return ''
  }else{
    let elemento=arr.pop();
    return `${elemento} ${recursividadI(arr)}`
  }
}
console.log(recursividadI(arr2))
