
/**
 * Syncronous porcess in javaScript 
 * It basically means that , first process is completed then compiler move 
 * to another process.
 */
console.log("Hello form first line");

function hello()
{
    console.log('hello form inside the function');
}

hello();

console.log("Hello form the last line");