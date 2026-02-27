const fs = require("fs")

const os = require("os")
// console.log(os.cpus().length);


// ------Write-------
// Sync...
// fs.writeFileSync("./text.txt", "Hello World Sync")

// Async...
// fs.writeFile("./text.txt", "Hello World Async", (err) => {})




// ------Read--------

// Sync - Blocking Request

// const result = fs.readFileSync("./contacts.txt", "utf-8")
// console.log(result);


// Async - Non Blocking Request => Best Approach

// fs.readFile("./contacts.txt", "utf-8", (err, resultt) => {
//     if(err) {
//         console.log("Error", err);
        
//     } else {
//         console.log(resultt);
        
//     }
// })




// ------Append-------
// Sync
// fs.appendFileSync("./text.txt", `${Date.now()} Hiii\n`)

// ------Copy-------
// fs.cpSync("./text.txt", "./copy.txt")

// ------Delete-------
// fs.unlinkSync("./copy.txt")

// ------Statistics------
// console.log(fs.statSync("./text.txt").isFile());
