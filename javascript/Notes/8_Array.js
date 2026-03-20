
// SUMMARRY:

// 1. Array is written in brackets [  ].
// 2. Array data type is an object.
// 3. Array can contain different data types. i.e string, number, boolean, array etc.
// 4. Array is zero based indexing. It starts with zero.
// 5. Once changed its original value will also change because it is non primitive (refrence) type.



// ARRAY METHODs :

// 1) Push = adds value to last of an array.
// 2) Pop = removes last value of an array.
// 3) Unshift = adds value at first of an array.
// 4) Shift = removes first value of an array.
// 5) Includes = checks true or false.
// 6) IndexOf = checks the position of value in number form.
// 7) Join = converts to string.
// 8) Slice(value to remove from,value remove upto but don't include) => returns new array and original value
//    remains unchanged. Use when you need to extract a portion of an array without modifying it.
// 9) Splice(value to delete from, number of value to delete) => returns new array with deleted one and
//    original value changed. Use when you need to add, remove, or replace elements within an array.


const arr = [0, 1, 2, 3, 4, 5, 6]
const kdramas = ["Itaewon Class", "My Name", "Bloudhounds"]
// console.log(arr[1]);

const arr2 = new Array(1, 4, 6, 7, 8)

// Array Methods
// .push()
// .pop()
// .shift()
// .unshift()
// .includes()
// .indexOf()

const newArr = kdramas.join()
console.log(newArr)  // typeof -> String




// Slice - Extracts a portion of an array and returns a new array containing the extracted elements.

// Splice - Changes the contents of an array by adding, removing or replacing elements directly within
//          the original Array.

// Slice and Splice Example 
console.log("A", arr)

const myn1 = arr.slice(1, 4)
console.log(myn1)
console.log("B", arr)

const myn2 = arr.splice(0, 2)
console.log(myn2)
console.log("C", arr)



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


const wseries = ["Game of Thrones", "Money Heist", "The Boys"]
const characterN = ["Cersei", "Professor", "William Butcher"]

// wseries.push(characterN) 
// console.log(wseries);
// console.log(wseries[3][2]);


const allInfo = wseries.concat(characterN)
// console.log(allInfo);

const all_info = [...wseries, ...characterN]     // another way to concat
// console.log(all_info);

const another_arr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_arr = another_arr.flat(Infinity)          // [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]
// console.log(real_another_arr)

// console.log(Array.isArray("Palampur"))                    // returns true/false
// console.log(Array.from("Palampur"))                       // converts into Array
// console.log(Array.from({name: "Palampur"}))

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))                // Returns a new array from a set of elements.