/**
 * We can read or write in a file in synchronous and Asynchronous ways.
 */

/** 
  // Read form an external file
 

const fs = require('fs')
// console.log(typeof fs);


 // Read in the sync way


console.log("Before starting to read")

const content = fs.readFileSync("input.txt")


console.log("Output content is : " +  content);

console.log("Last Line"); 

// Read int the async ways

fs.readFile('input.txt', (err, content) => {
  if(err) {
    return console.log(err);
  }
  console.log("Content of the file is :" + content);
})  
 */ 






/** 
 * Write the code to write to an External File
  */


const fs = require('fs')

//<-----Sync ways----->
/**  console.log("Before")
fs.writeFileSync('output1.txt', 'Hello')
console.log("Written Successfully!"); */

//<------Async Ways----->
fs.writeFile('output2.txt', "Hello Student again !" , err =>{
  if(err){
    return console.log(err);
  }
  console.log('Written Successfully !');
})

