// Object:
// collection of properties and methods

// Parts of OOP:
// Object Literal
// Constructor function     -   A constructor is a special method used to initialize objects.
// Prototypes
// Classes
// Instances (new, this)

// 4 Pillars:
// Abstraction      -   Showing only essential features and hiding implementation details.
// Inheritance      -   Acquiring properties and behaviors of one class into another.
// Encapsulation    -   Binding data and methods together and hiding internal details.
// Polymorphism     -   One interface, many forms.



// Object Literal
const user = {
    username: 'Shikhar',
    loginCount: 9,
    SignedIn: true,

    gotUserDetails: function() {
        // console.log('Got user details from database');
        console.log(`Username: ${this.username}`);
        
    }
}
console.log(user.SignedIn);
console.log(user.gotUserDetails());



function User(username, loginCount, SignedIn) {      // CONSTRUCTOR FUNCTION
    this.username1 = username
    this.loginCount1 = loginCount
    this.SignedIn1 = SignedIn

    this.greeting = function() {
        console.log(`Welcome, ${this.username}`);
        
    }

    // return this          // (optional) implicitly defined by default
}

const UserOne = new User('Shikhar', 12, true)
const UserTwo = new User('ShikharSunyal', 11, false)
console.log(UserOne);
console.log(UserTwo);
