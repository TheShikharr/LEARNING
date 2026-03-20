const promiseOne = new Promise(function(resolve, reject){
    // Do an async task 
    // DB calls, cryptography, network calls 
    setTimeout(function(){
        console.log("Async Task Complete");
        resolve()
        
    }, 1000)
})

promiseOne.then(function() {
    console.log("Promise Consumed");
    
})


new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async Task 2");
        resolve()
        
    }, 1000)
}).then(function(){
    console.log("Async 3 Resolved");
    
})


const promiseThree = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve({
            username: 'HRTC',
            email: 'hrtc.hp@gov.com'   
        })
     
    }, 1000)
})

promiseThree.then(function(user) {
    console.log(user);
    
})


const promiseFour = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let e = false
        if (!e) {
            resolve({
                username: "Shikhar",
                pass: "123"
            })
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

// const username = promiseFour.then((user) => {    X
promiseFour
.then((user) => {
    console.log(user);
    return user.username

})
.then((username) => {
    console.log(username);
    
})
.catch(function(error) {
    console.log(error);
    
})
.finally(() => console.log("The promise is either resolved or rejected")
)

// console.log(username);       X



const promiseFive = new Promise(function(resolve, reject) {
     setTimeout(function() {
        let error = true
        if (!error) {
            resolve({
                username: "Javascript",
                pass: "123"
            })
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
        
    }
}
consumePromiseFive()

/*
async function getAllUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data =  await response.json()
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
        
    }
    
}
getAllUsers()
*/

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error); 
})







// RANDOM EXAMPLE
/**
 * Simulates a pizza delivery promise.
 * It randomly succeeds or fails to mimic real-world uncertainty.
 * @returns {Promise} A promise that resolves with the pizza or rejects with an error.
 */
function orderPizza() {
  console.log("☎️ Calling the pizza shop to place an order...");

  return new Promise((resolve, reject) => {
    // Simulate the time it takes to make and deliver the pizza (2 seconds)
    setTimeout(() => {
      const isSuccessful = Math.random() > 0.5; // 50% chance of success

      if (isSuccessful) {
        const pizza = {
          sliceCount: 8,
          toppings: ["pepperoni", "cheese"],
          isHot: true
        };
        console.log("🍕 The pizza has been delivered!");
        resolve(pizza); // Fulfills the promise with the pizza object
      } else {
        const errorReason = "The oven broke down.";
        console.log(`❌ Order failed! Reason: ${errorReason}`);
        reject(new Error(errorReason)); // Rejects the promise with an error
      }
    }, 2000);
  });
}

// --- Using the promise to handle the result ---

orderPizza()
  .then((pizza) => {
    // This block runs if the promise is fulfilled (the order succeeded)
    console.log("😋 Pizza is here! Let's get the plates.");
    console.log("Pizza details:", pizza);
    return "plates are ready"; // Returning a value from .then() creates a new promise
  })
  .then((message) => {
    // This block runs after the previous .then() and receives its returned value
    console.log(`🎉 Success! Now we can eat. ${message}`);
  })
  .catch((error) => {
    // This block runs if the promise is rejected (the order failed)
    console.log("😭 We need to find another place to eat.");
    console.error("Caught the error:", error.message);
  })
  .finally(() => {
    // This block always runs, whether the promise succeeded or failed
    console.log("👍 The pizza ordering process is complete.");
  });