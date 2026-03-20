function addTwoNum(num1, num2) {         // Parameters
    console.log(num1 + num2);
}
// addTwoNum(4, 's')                     // Arguments


function addTwoNum2(num1, num2) {   
    // let result = num1 + num2; 
    // return result;  
    return num1 + num2;
}
// const result = addTwoNum2(4, 's')  
// console.log("Result: ", result);
// console.log(addTwoNum2(4, 's'));


function userLoggedIn(username = "John") {
    if(username === undefined) {
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`;
}
// console.log(userLoggedIn());


function calculateCartPrize(val1, ...num) {             // ... -> Rest and Spread Operator
    return num
}
// console.log(calculateCartPrize(200, 500, 300));



const user = {
    username: "Shikhar",
    price: 800
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and CartPrice is ${anyobject.price}`)
}

// handleObject(user);
// handleObject({
//     username: "David",
//     price: "10"
// })



const myArr = [300, 500, 200, 1000]

function returnSecondVal(getArr) {
    return getArr[1]
}
console.log(returnSecondVal(myArr));




// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const users = {
    username: "Shikhar",
    price: 999,
    WelcomeMessage: function() {
        console.log(`${this.username}, Welcome to online portal.`)     // this => Refers to current context.
    }
}
// users.WelcomeMessage()

function hrtchp() {
    let depot = "Dehra"
    console.log(this.depot);        // undefined
}                                   // this => used in object only
// hrtchp()



// -------------------------------------------------------------------
// Arrow Function    () => {}

const hrtc =  () => {
    let depot = "Dehra"
    console.log(this.depot);        
}                                   
// hrtc()



// -----------------------------------------------------------------------------------

// Implicit Arrow Function
// No need of return Keyword

// const add = (num1, num2) => num1 + num2
// const add = (num1, num2) => (num1 + num2)
// const add = (num1, num2) => ({username: "Shikhar"})

// console.log(add(6,99));
