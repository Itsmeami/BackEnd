/**
 * Syntax Error (related)
 */

// console.log("Hello



/**
 * Runtime exceptions
 */

/** 
let x = 5;
console.log(x.toUpperCase); */



/**
 * Logical Error
 */
/** 
let num = 5;
for(i=-3; i<5; i++) {
    console.log(num/i);  // logical error is dividing by 0
} */



/**
 * try and catch is used to know the change of err
 * try is used to the error and if the error is happened then it go the catch method
 */

try{
let obj = undefined;

console.log(obj.name);
}catch(err) {
    console.log("Mistake ho gai ")
    // console.log(err);
}finally {
    console.log("I will always excuted");
}
