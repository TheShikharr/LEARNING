// Singleton
// Object.create

// Object Literals

const mySym = Symbol("key1")

const JSUser = {
    name: "Shikhar",
    "full name": "Shikhar Sunyal",
    [mySym]: "mykey1",
    age: 19,
    location: "Bhalundar",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Tuesday"]
}

// console.log(JSUser.name);
// console.log(JSUser["name"]);
// console.log(JSUser["full name"]);
// console.log(JSUser[mySym]);

JSUser.location = "Palampur"
// Object.freeze(JSUser)
JSUser.location = "Sujanpur"

// console.log(JSUser);


JSUser.greetings = function () {
    console.log("Hello JS user");
}
JSUser.greetings2 = function () {
    console.log(`Hello JS user, ${this.name}`);
}


// console.log(JSUser.greetings());
// console.log(JSUser.greetings2());


// ========================================================================================

const tinderUser = new Object()   // Singleton object
const tinderUserr = {}  // Non Singleton Object

tinderUserr.id = 3
tinderUserr.name = "Seth"
tinderUserr.isLoggedIn = false


const RegularUser = {
    fullname: {
        userfullname: {
            firstname: "Shikhar",
            lastname: "Sunyal"
        }
    }
}

// console.log(RegularUser.fullname.userfullname.lastname)

const obj1 = {
    1: "a",
    2: "b"
}
const obj2 = {
    3: "a",
    4: "b"
}

// const newobj = {obj1, obj2}
// const newobj = Object.assign(obj1, obj2)  // obj1 -> Target, obj2 -> Source
// console.log(newobj);
// console.log(obj2);

const newobj2 = Object.assign({}, obj1, obj2)  // {} -> Target, obj1 and obj2 -> Source
// console.log(newobj2);
// console.log(obj1);

const newobj3 = { ...obj1, ...obj2 }
// console.log(newobj3)

const user = [
    {
        id: 1,
        email: "kinnaurTourism@gmail.com"
    },
    {
        id: 2,
        email: "dharamshalaTourism@gmail.com"
    },
    {
        id: 3,
        email: "chambaTourism@gmail.com"
    }
]

// console.log(user[1].email);

// console.log(tinderUserr)

// console.log(Object.keys(tinderUserr));
// console.log(Object.values(tinderUserr));
// console.log(Object.entries(tinderUserr));

// console.log(tinderUserr.hasOwnProperty('isLoggedIn'));


// ===========================================================================================================

const movie = {
    movieName: "Son of Sardaar",
    price: 500,
    mainLead: "Ajay Devgan"
}

const { mainLead: actor } = movie      // mainLead key is converted into actor
// console.log(mainLead);    X
console.log(actor);



// {
//     "movieName": "Son of Sardaar",
//     "price": "free",
//     "mainLead": "Ajay Devgan"
// }

