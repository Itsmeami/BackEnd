/**
 * DeStructuring is used to fetching valus out form Array or Object and assign it to the new variable.
 * DeStructuring in Array
 */

// const nums = [1,2,3];
// const [a,b,c] = [1,2,3]
// console.log(a);
// console.log(b);
// console.log(c);


// ReStructuring in nested Arrays
// const [p,q,r] = [1,2,[4,5,6]];
// console.log(p);
// console.log(q);
// console.log(r);
 

/**
 * Destructing in an Object
 */

// const per = {
//     age : 12,
//     name : "Aman",
//     city : "mzp"
    
// }

// const {name, age,hobby} = per

// console.log(name);
// console.log(age);
// console.log(hobby);

/**
 * Destructing in the nested Object
 */

const per = {
        age : 12,
        name : "Aman",
        address : {
            city : "Mzp",
            state : "karnataka"
        }
        
    }

    const {name, age, address : {city,state}} = per

    console.log(name);
    console.log(age);
    console.log(city);
