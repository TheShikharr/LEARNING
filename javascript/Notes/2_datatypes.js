"use strict"; //treat all JS code as newer version

//alert(5+6) // not to be used here because we are using node js, not browser

// number, Bigint, 
// string, 
// boolean, 
// null => standalone value, 
// undefined => value not assigned,
// symbol => Symbol is a unique and immutable value used mostly as object keys.
// object
const state = null

console.log(typeof null);  //object
console.log(typeof undefined); //undefined


/*symbol example*/ 
const id = Symbol("id");

const user = {
  name: "Shikhar",
  [id]: 101
};

console.log(user[id]);  // 101
