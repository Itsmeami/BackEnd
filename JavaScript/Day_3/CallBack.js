/** 
 * CallBack Funtion :- CallBack function is a function which you go and pass as argument to 
 another funtion 

 Mostly used in Asyncronous process
 */


 // CallBack Function
 function greet(name, callback)
 {
    const greeting = "Hello " + name;
    callback(greeting);
 }


 function displayGreeting(message) {
    console.log(message);
 }


// Function
 greet("Aman" , displayGreeting);


 /**
  * Callback hell | pyramid of doom :- When the number of callback are appear then it is known
  * as the callback hell.
  */

 getUser(function(user) {
    getPosts(user.id, function(post) {
        displayUserInfoAndPost(user,Posts, function() {
            console.log("User info and posts successfully displayed");
        })
    })
 })