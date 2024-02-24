/** 
async function getMessage() {
    return 'Hello Students'
}
// console.log(getMessage())

getMessage().then(result => console.log(result));  */




/**
 * Print Hello after a wait
 */

/** 
function printHelloAfterWait() {
    
    console.log('First line');
    setTimeout(() =>{
        console.log("Hello Students");
    },3000)
    console.log('Last Line');
}

printHelloAfterWait(); */





console.log('Hello form the begining');
async function printHelloAfterWait() {
    
    console.log('First line');

    let data = new Promise((resolve, reject) =>{

        setTimeout(() =>{
            resolve("Hello Students");
        },3000)
    
    })
    
    let result = await data  // Start waiting for the data promise to be completed
    console.log(result);
    console.log('Last Line');

    // compiler is wait in this function only but outside the funtion the compiler does'nt wait.

}

printHelloAfterWait();

console.log("Hello form end");

