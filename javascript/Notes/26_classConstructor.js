// class User {
//     constructor (username, email, password) {
//         this.username = username
//         this.email = email
//         this.password = password
//     }

//     encryptPassword() {
//         return `${this.password}abc`
//     }
//     ChangeUsername() {
//         return `${this.username.toUpperCase()}`
//     }
// }

// const depot1 = new User('Dharamshala', 'dharamshala@hp.com', "123")
// console.log(depot1.ChangeUsername());


// behing the scene
function user(username, email, password) {
    this.username = username
    this.email = email
    this.password = password

}

user.prototype.encryptPassword = function() {
        return `${this.password}abc`
}
user.prototype.ChangeUsername = function() {
        return `${this.username.toUpperCase()}`
}

const depot2 = new user('Keylong', 'keylong@hp.com', "123")
console.log(depot2.ChangeUsername());
