function multiply(num) {
    return num*5
}
multiply.powr = 2

console.log(multiply(5));
console.log(multiply.powr);


function createUser(username, score) {     // Constructor 
    this.username = username
    this.score = score
}

createUser.prototype.increment = function() {   // Prototype
    this.score++
}

createUser.prototype.printMe = function() {
    console.log(`prize is ${this.score}`);
}

const chai = new createUser('chai', 20)
const tea = new createUser('tea', 200)

chai.printMe()

// 1. chai object is created by the constructor function createUser.
// 2. chai doesn’t have printMe directly.
// 3. JS looks into createUser.prototype and finds printMe.
// 4. That’s why chai.printMe() works. 

// The new keyword builds a new object from a 
// blueprint (constructor function/class) and 
// fills it with the properties you define.

// In short:
// new → creates a new object, links prototype, binds this, runs the constructor, and returns the object.


const arrayHeros = ['Homelander', 'The Deep']

const objHeroes = {
    Homelander: "eye laser",
    theDeep: "Diving",

    getHomelander: function() {
        console.log(`Homelander Power is ${this.Homelander}`);
        
    }
}
/*
function  ------------
                     |
Array  ---------->   Object ------>  NULL    

                     |
String  --------------
*/


Object.prototype.shikhar = function() {
    console.log(`Shikhar is an Object`);   
}

Array.prototype.heyShikhar = function() {
    console.log(`Shikhar says hello`);
}

arrayHeros.shikhar()            // Shikhar is an Object
objHeroes.shikhar()             // Shikhar is an Object
arrayHeros.heyShikhar()         // Shikhar says hello
// objHeroes.heyShikhar()        X



// Inheritance
const User = {
    name: 'chai',
    email: 'chai@gmail.com'
}
const Teacher = {
    makeVideo: true,

}
const TeachingSupport = {
    isAvailable: false

}
const TASupport = {
    makeAssignment: 'JS Assignment',
    fullTime: true,
    __proto__: TeachingSupport

}

Teacher.__proto__ = User

// modern Syntax
Object.setPrototypeOf(TeachingSupport, Teacher)


let myName = 'Shikhar   '
let myState = 'Himachal      '

// console.log(myName.trueLength());

let anotherUserName = "Shikhar56      "

String.prototype.trueLength = function() {
    // console.log(`${this}`)
    console.log(`True lenght is: ${this.trim().length}`);
    
}

console.log(myName.trueLength());
anotherUserName.trueLength()
'Rampur'.trueLength()
'Solan '.trueLength()