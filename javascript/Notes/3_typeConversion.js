let ctuTricityBusNumber = 85
console.log(typeof (ctuTricityBusNumber));          // number

let BusNumberInNum = Number(ctuTricityBusNumber)
BusNumberInNum = 216
console.log(typeof (BusNumberInNum));              // number
console.log(BusNumberInNum);                       // 216

// "30" => 30
// "30A" => NaN
// true => 1

let loggedIn = 1
let booleanLoggedIn = Boolean(loggedIn)
console.log(booleanLoggedIn);                      // true

// 1 => true
// 0 => false
// "" => false
// "Sector 19" => true

/* Operations */
console.log("1" + 2 + 4)  // 124
console.log(3 + 4 + "3")  // 73
console.log(3 + "4" + 3)  // 343


// Postfix and Prefix Example

let x = 3;
let y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
let b = --a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:2, b:2"


/*
== (equality check) and <=, >=, <> (comparisons) are different 
*/