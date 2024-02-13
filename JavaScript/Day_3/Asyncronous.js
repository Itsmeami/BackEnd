/**
 * ASyncronous process in JavaScript;
 * It means that all the process are running parallely 
 * Java Script is more good in asyncronous process.
 */

 /**  NOTE :- CallBack Funtion :- CallBack function is a function which you go and pass as argument to 
 another funtion */
 

// Example of Asyncronous processing

console.log("Hello form the First line");

setTimeout(() => {
    console.log('hello form the call back fn');
},3000)

console.log("Hello from the last line");