/**
 * Promise form Simran
 */
/** 
const simranPromise = new Promise((resolve, reject) => {

    let parentDecision = true;

    if(parentDecision){
        resolve("Yayy , ab shadi ki taiyari karo");
    } else {
        reject("Papa ne IAS dhoond lia hai !, Sorry....");
    }

});

// if simran keep their promises
simranPromise.then((msg) => {
    console.log("Simran message : ", msg)
    console.log("Let's book the wedding venue")
}).catch((msg) =>{ // If Simran cannot keep their promises
    console.log("Simran message : ", msg)
    console.log("Tinder kha ho yrr !")
})  */



/**
 * all method is used in promises to check wheather all the promises are correct or not.
 * If all then promises are correct then only then method call otherwise is go to the catch method.
 */

/** 
const f1Promises = new Promise((resolve, reject) =>{

    setTimeout(()=> {

        if(Math.random() > 0.5) {
            resolve("Friend 1 : Hey I am in for Goa");
        } else {
            reject(" Friend 1 : Sorry mere pet mei dard ho rha hai");
        }
        
    },3000)
})

const f2Promises = new Promise((resolve, reject) =>{

    setTimeout(()=> {

        if(Math.random() > 0.5) {
            resolve("Friend 2 : Hey I am in for Goa");
        } else {
            reject("Friend 2 : Sorry mere billi bimar hai");
        }
        
    },2000)
})

const f3Promises = new Promise((resolve, reject) =>{

    setTimeout(()=> {

        if(Math.random() > 0.5) {
            resolve("Friend 3 : Hey I am in for Goa");
        } else {
            reject("Friend 3 : Sorry muche pw skills ke lecture lene hai");
        }
        
    },2000)
})

Promise.all([f1Promises,f2Promises, f3Promises]).then((msg) =>{
    console.log(msg);
    console.log("yah we are going goa!");
}).catch((msg) =>{
    console.log(msg);
    console.log("yrr band karo Goa ka plan!")
}) */



/**
 * Any method is used in promises and it will check number of promises and if any of the promises is true
 * then it go to the then method otherwise it will go to catch method.
 */

const gf1Promise = new Promise((resolve, reject) => {
    
    setTimeout(() =>{

        if(Math.random() > 0.5) {
            resolve("GF1 : Hey I'll come for dinner");
        } else {
            reject("GF1 : Phone is unreachable !");
        }
    },3000)
})

const gf2Promise = new Promise((resolve, reject) =>{

    setTimeout(() =>{

        if(Math.random() > 0.5) {
            resolve("GF2 : Hey I'll come for dinner");
        } else {
            reject("GF2 : Mere pet me dard ");
        }
    },3000)
})

const gf3Promise = new Promise((resolve, reject) => {

    setTimeout(() =>{

        if(Math.random() > 0.5) {
            resolve("GF3 : Hey I'll come for dinner");
        } else {
            reject("GF3: I go with my friend");
        }

    },3000)
})

// Due to Node.js version we use .race intead to the .any 

Promise.race([gf1Promise,gf2Promise,gf3Promise]).then(msg => {
    console.log(msg);
    console.log("Ab aayega maja");
}).catch(msg => {
    console.log(msg);
    console.log("Aree yrr sari mehanat bekar ho gai !")
})

/**
 * Note : Promise is used in javaScript because javaScript is a single threaded
 * and java and C++ is a multithreaded and they do the multiple task in one time
 */