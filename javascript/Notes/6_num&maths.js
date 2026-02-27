const balance = new Number(219)
console.log(balance);

// .toString() 
// .toFixed(2)                // 219.00
// .toPrecision(4)            // 123.8956 => 123.9
// .toLocaleString()          // 1000000 => 1,000,000
// .toLocaleString('en-IN')   // 1000000 => 1,00,000


// ++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++

// .abs(-4)      // 4
// .round(5.8)   // 6
// .ceil(4.2)    // 5
// .floor(4.2)   // 4
// .max()
// .min()

// .random()                              // value between 0 and 1
// (.random() * 10)                       // 0.23282942 => 2.3282942
// ((.random() * 10) + 1)                 // 0.02328294 => 0.23282942
// (Math.floor(Math.random() * 10) + 1)   // 2.3282942 => 2

min = 100000;        // for OTP
max = 999999;

const randomNumber = Math.floor(Math.random() * (max - min + 1) + min)
console.log(randomNumber);


/*  Steps of Formula solution of finding a random Number between a range  */
// 1:
// random no: 0.89
// max - min + 1: 20

// 2:
// random x (max - min + 1): 17.8

// 3:
// Adding min: 18.8

// 4: 
// Floor function: 18