/** 
 * Closures in JavaScript
 */

/**  function hello(){
    let name = "Aman";
    console.log(name);

}

hello();

console.log(name); */


// Example of Closure

function outerFn() {
    let outerVar = "I am form the outer fn";
    function innerFn(){
        console.log(outerVar);
    }
    return innerFn;
}

let fn = outerFn();
fn();

