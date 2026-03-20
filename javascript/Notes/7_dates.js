const date = new Date()

// console.log(date.toString());              // Sat Jun 14 2025 22:57:08 GMT+0530 (India Standard Time)
// console.log(date.toDateString());          // Sat Jun 14 2025
// console.log(date.toISOString());           // 2025-06-14T17:27:08.645Z
// console.log(date.toJSON());                // 2025-06-14T17:27:08.645Z
// console.log(date.toLocaleDateString());    // 6/14/2025
// console.log(date.toLocaleString());        // 6/14/2025, 10:57:08 PM


// console.log(typeof date);                  // Object

let myCreatedDate = new Date(2025, 7, 20)
let myCreatedDate2 = new Date("2022-05-29")   // yyyy-mm-dd
let myCreatedDate3 = new Date("05-29-2022")   // mm-dd-yyyy


console.log(myCreatedDate3.toLocaleDateString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
let newDate1 = newDate.toLocaleString('default', {
    weekday: "long"
})
console.log(newDate);
console.log(newDate1);
