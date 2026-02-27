// const balance = 1000
// if(balance > 500) console.log("test");   // Implicit Scope

/*
const debitCard = false
const userLoggedIn = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard){
    console.log("Allowed to buy Course");
}
if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User Logged In");
}
*/

// Falsy values 
// false, 0, -0, BigInt 0n, "",null, undefined, NaN

// Truthy values
// "0", 'false', " ", [], {}, function(){}

const userEmail = []
if(userEmail.length === 0) {
    console.log("Array is empty");
}


const emptyObj = {}
if(Object.keys(emptyObj).length === 0) {
    console.log("Object is Empty");
    
}


// Nullish Coalescing Operators (??): null, undefined
let val;
// val = 5 ?? 100           // 5
// val = null ?? 10         // 10
// val = undefined ?? 15    // 15


// Terniary Operator
// condition ? true : false
const iceTeaPrice = 100
iceTeaPrice >=80 ? console.log("less than 80") : console.log("more than 80")