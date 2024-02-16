 /**  
  * // first method to add module
let add = (a,b) => {
    return a+b;
}

let prod = (a,b) => {
    return a*b;
}
// console.log(typeof add);
// We can convert this function into module to use this function into another function



  module.exports = {  // to this command we can use this function as a module.

    add : add,
    prod : prod
}; */

// Second way to add module

exports.add =(a,b)=>{
    return a+b;
}

exports.prod =(a,b)=>{
    return a*b;
}