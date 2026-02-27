class User{
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`USERNAME is ${this.username}`);
        
    }
}

class Teacher extends User {
    constructor(username, email, password) {
        super(username)
        this.email = email
        this.password = password
    }

    addCourses() {
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher('chai', 'chai@teacher.com', '123')
chai.addCourses()

const masalaChai = new User('masalaChai')
masalaChai.logMe()

console.log(chai instanceof Teacher);    // true



// STATIC PROPERTIES
class USER {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`USERNAME: ${this.username}`);
        
    }

    static createID() {      // static -> prevent from accessing
        return `123`
    }
}

const AlienX = new USER('Alien X')
// console.log(AlienX.createID());


class TEACHER extends USER {
    constructor(username, email) {
        super(username)
        this.email = email
    }
}

const database = new TEACHER('Mr. Chetan', 'chetan@pggc11.com')
console.log(database.logMe())
 
