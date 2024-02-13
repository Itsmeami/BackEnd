/**
 * In the higher Order function we pass and return the function in the function.
 */



// first variation of higher order function
/**
function operation(operatorFn , a, b)
{
    return operatorFn(a,b);
}

function add(a,b)
{
    return a+b;
}

 let result = operation(add,5,6);

 console.log(result);   */


 // Second variation of Higher Order Function
 
 function getGreetMethod()
 {
    return function()
    {
        console.log("Hello Aman");
    }
 }

 let greetFn = getGreetMethod();
 console.log(typeof greetFn);

 greetFn();
