/**
 * String
 * 1.String is sequence of character.
 * 2. String is immutable :- value can be changed.
 */

// let name = 'Aman';
// let city = "Mirzapur";

// console.log(name,city);
// console.log(typeof name);

/**
 * Accessing character based on index
 */

// console.log(name[0]);
// console.log(name[3]);

// //<---Immutable--->
// name[2] = 'o';
// console.log(name);

// // length of string 
// console.log(name.length);


// // Join the two String
// let first_name = "Aman";
// let last_name = "Dubey";

// let full_name = first_name.concat(last_name);
// console.log(first_name +" " + last_name);
// console.log(full_name); 


// /**
//  * convert that into upper case
//  */
// console.log(full_name.toUpperCase());

// // Convert into lower case
// console.log(full_name.toLowerCase());

// //character at any index
// console.log(name.charAt(2));

/**
 * Slicing
 */

let Full_name = "Aman Dubey"
console.log(Full_name);
console.log(Full_name.slice(2));
console.log(Full_name.slice(2,5));
console.log(Full_name.slice(-5));
console.log(Full_name.slice(-5,-1));


/**
 * indexof
 */
let n =  "aman";
console.log(n.indexOf('m'));


/**
 * trim
 */
let word = " Aman ";
console.log(word);
console.log(word.trim());

/**
 * split
 */
let f2 = "Aman kumar Dubey";
console.log(f2.split(""));

