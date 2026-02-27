// For loop

let arrr = ["Rohru", "Reckong Peo", "Rampur"]
for (let i = 0; i < arrr.length; i++) {
    const element = arrr[i];
    // console.log(element);
}


arrr.forEach(i => {
    console.log(i);
});


// break and continue

for (let num = 1; num <= 20; num++) {
    if(num == 5) {
        // console.log("detected 5");       
        continue;
    }
    // console.log(`value of num is ${num}`);
    
}


// While loop
let i = 0
while(i < arrr.length) {
    // console.log(`Depot ${i} is ${arr[i]}`);
    i++
}

/* 
Types of for loops-

1. for
2. for...in
3. for...of
4. .forEach
*/