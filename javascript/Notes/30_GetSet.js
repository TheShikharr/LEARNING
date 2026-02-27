// CLASS
class Person {
    constructor(email, password) {
        this.email = email
        this.password = password
    }


    get email() {
        return this._email.toUpperCase()
    }
    set email(value) {
        this._email = value
    }
    
    get password() {
        return `${this._password}hrtc`
    }
    set password(value) {
        this._password = value
    }


}

const person = new Person('shikhar@google.in','123sfdaf')
console.log(person.email);



// FUNCTION
function User(name, age) {
    this._name = name
    this._age = age

    Object.defineProperty(this, 'name', {
        get: function() {
            return this._name.toUpperCase()
        },
        set: function(value) {
            return this._name = value
        }
    })

    Object.defineProperty(this, 'age', {
        get: function() {
            return this._age.toUpperCase()
        },
        set: function(value) {
            return this._age = value
        }
    })

}

const user = new User('shikhar','20')
console.log(user.name);






// OBJECT
const hrtc = {
    _email: 'hrtc.hp@gov.in',
    _password: 'hrtc',

    get email() {
        return this._email.toUpperCase()
      
    },
    set password(value) {
        this._email = value

    }
}

const tea = Object.create(User)
console.log(tea.email);
