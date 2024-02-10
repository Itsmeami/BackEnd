/**
 * var :- It's is used to define a variable
 * It has function scope but no block scope
 * It is hoisted.
 */


// <---Function Scope----->

// function f1() {
//     var i=5;
//     console.log(i);
// }
// f1();
// console.log(i);

// 

//<----Hoisted--->
// console.log(i);

// var i=45; // in this line var i go to top and define the data tupe that's why the above line does's show 
// // any error



/**
 * let
 * 1.No hoisting
 * 2.It also has block scope
 */

//<-----NO Hoisting--->
// console.log(i);
// let i=5;


//<----Block Scope----->
// {
//     let name  = "aman";
// }
// console.log(name);



/**
 * const
 *  --scope is exactly same as let
 *  --const variable are final, con't be re assigned a value
 */

// const country = "India";
// country = "USA";
// console.log(country);



