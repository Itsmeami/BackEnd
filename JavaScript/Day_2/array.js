// arr = [1,2,3];
// console.log(typeof arr);

// arr1 = new Array();
// console.log(typeof arr1);
// console.log(arr1);


// arr = [1,2,3,4,5,6,7,8,9];
 /**
 * Arrays are mutable. We can modify the arrays
 */
// arr[1] = 200;

// console.log(arr);

/**
 * Insert the elements in the arrays
 * .push is used to add the elemnts in the end of arrays
 * .unshift  is used ot add the elements in the beginning of the arrays.
 */

/** // push method
arr = [1,2,3,4,5,5,6];
arr.push(11);
console.log(arr);
arr.push(6,7,8,9);
console.log(arr); **/

/**  // Unshift menthod
arr = [1,2,3,4,5];
arr.unshift(7);
console.log(arr);
arr.unshift(8,9);
console.log(arr); **/


/**
 * Remove the element form the array
 * .pop() is used to remove the element form the end of the array
 * .shift() is used to remove the element form the start of the array.
 */

/**  // Pop menthod
let arr = [1,2,3,4,5];
console.log(arr.pop());
console.log(arr); */

/** // shift method
let arr = [1,2,3,4,5];
console.log(arr.shift());
console.log(arr); **/


/**
 * Adding the arr1 into arr2.
 */

// Concat method

// let a1 = [1,2,3];
// let a2 = [4,5,6];

// let r = a1.concat(a2);
// console.log(r);

// // size of the arr
// console.log(a1.length);


/**
 * Convert array into strings
 * join mehtod is used to convert array into string
 */
// chr_arr = ['A', 'm', 'a', 'n', 'D', 'u', 'b', 'e', 'y'];

// // join method
// console.log(chr_arr.join());
// console.log(chr_arr.join(""));
// console.log(chr_arr.join('4'));

// console.log(typeof chr_arr.toString());


/**
 * Slicing of the array :- It can not modify the array
 * minus indexing string with the end of arr
 *  and goes to the start point
 */

// let nums = [3,4,5,6,7,8,9,12,14,12,15,16,17];
// console.log(nums.slice(2));
// console.log(nums.slice(2,7));
// console.log(nums.slice(5,-1));
// console.log(nums.slice(-9,-2));
// console.log(nums.slice(2,-1));

/**
 * Splicing , which modifies the given array
 * .splice(index,number of elments);
 * .splice(index, number of elments , element to add)
 */

// let numbers = [1,2,3,4,5];
// // let removed = numbers.splice(2,2);

// let removed = numbers.splice(2,2,12,13,14,14);
// console.log(removed); // remove element are print by removed
// console.log(numbers); // all remaining array



/**
 * Reverse a given array
 */

// let nums = [4,1,5,7,19,2];
// nums.reverse();
// console.log(nums);

/**
 * indexOf is used to check the element is present or not
 * If the index is not present it return -1;
 */
// let nums = [4,1,5,7,19,2];
// console.log(nums.indexOf(19));


/**
 * Sorting the array
 */

// let arr = [15,40,1,13,2];

// arr.sort((a,b) => a-b);

// console.log(arr);

/**
 * 
 */







