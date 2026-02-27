// Primitive Datatype

// 7 types: String, Number, Boolean, null, Undefined, Symbol, BigInt



// Non-Primitive / Reference Dataype

// 3 types: Array, Objects, Functions



/*

Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object

        
*/



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// stack (Primitive), Heap (Non-Primitive)

let busOperator = "Himachal Roadways"

let anotherName = busOperator
anotherName = "hrtc"

console.log(busOperator);
console.log(anotherName);

let depotOne = {
    name: "Palampur",
    number: 10
}
let depotTwo = depotOne
depotTwo.name = "Rohru"

console.log(depotOne.name);
console.log(depotTwo.name);
