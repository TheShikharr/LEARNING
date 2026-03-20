function setUsername(username) {
    //complex DB calls
    this.username = username
}

function createUser(username, email, password){
    setUsername.call(this, username)
    this.email = email
    this.password = password

}

const chai = new createUser('user', 'chai@fb.com', '123')
console.log(chai);


// window = {this -> window}
// node = {}