
// filter() = Built in array method used to create a new array containing only the elements from the original 
//            array that satisfy a specified condition.

// map() = It is a high-order function available on Array.prototype. It is used to create a new array by applying 
//         a provided callback function to each element of the original array. The map() method does not modify the 
//         original array, instead, it returns a new array containing the results of the callback function applied
//         to each element.

// reduce() = An array method that executes a provided "reducer" callback function on each element of the array,
//            resulting in a single output value. The single output can be a Number, string, object,
//            or any other data types.



const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const NUM = num.filter( (numbers) => numbers > 4 )
const NUM = num.filter( (numbers) => {
    return numbers > 4 
} )

// console.log(NUM);


// forEach() = Built in Array Iteration method

const newNum = []
num.forEach( (numbers) => {
    if(numbers > 8) {
        newNum.push(numbers)
    }
} )
num.forEach( (numbers) => {   
    newNum.push(numbers+30)
    
} )

// console.log(newNum);


const NUMS = num.map( (NUM) => NUM + 10)
// console.log(NUMS);


// CHAINING
const Num = num                           
            .map( (num) => num * 10 )
            .map( (num) => num + 1 )
            .filter( (num) => num >= 40 )

// console.log(Num);




const numsss = [1, 2, 3]

const mytotal = numsss.reduce( function (acc, currval) {
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval
}, 3 )

// const mytotal = numsss.reduce( (acc, curr) => acc + curr, 0 )

// console.log(mytotal);




const ShoppingCart = [
    {
        GameName: "forza horizan",
        price: 4999
    },
    {
        GameName: "GTA V",
        price: 8999
    },
    {
        GameName: "Last of Us",
        price: 2999
    },
    {
        GameName: "Valorant",
        price: 999
    },
]

const total = ShoppingCart.reduce( (acc,game) => acc + game.price, 0)

console.log(total);
