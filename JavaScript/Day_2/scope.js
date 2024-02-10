/** 
 * Scope is defined in three category
 * 1.Global Scope
 * 2.Function Scope
 * 3.Block Scope
 * Note :- Function and Block Scope is also known as the Local Scope
 * **/

/** 
// Global Scope

var name  = "Aman";

console.log(name);

function func() {
    console.log();
}
func();  */


/** 
// Local Scope / function scope variable

function func() {
    var num = 55;
    console.log(num);
}
func();

console.log(num);  */



/** 
// Block Scope

{
    var x = 20;
    console.log(x);
}

console.log(x);  */