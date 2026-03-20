/*

const h1 = document.querySelector("h1")

const boxInner = document.querySelector(".box-inner")

const white = document.querySelector("#white")
const yellow = document.querySelector("#yellow")
const green = document.querySelector("#green")
const blue = document.querySelector("#blue")
const black = document.querySelector("#black")

const para = document.querySelector("p")

white.addEventListener("click", () => {
    document.body.style.backgroundColor = "#fff"
    boxInner.style.backgroundColor = "#fff"
    h1.style.color = "#000"
    para.style.color = "#000"
})

yellow.addEventListener("click", () => {
    document.body.style.backgroundColor = "#fae902"
    boxInner.style.backgroundColor = "#fae902"
    h1.style.color = "#000"
    para.style.color = "#000"
})

green.addEventListener("click", () => {
    document.body.style.backgroundColor = "#bbff00"
    boxInner.style.backgroundColor = "#bbff00"
    h1.style.color = "#000"
    para.style.color = "#000"
})

blue.addEventListener("click", () => {
    document.body.style.backgroundColor = "#030179"
    boxInner.style.backgroundColor = "#030179"
    h1.style.color = "#fff"
    para.style.color = "#fff"
})

black.addEventListener("click", () => {
    document.body.style.backgroundColor = "#000"
    boxInner.style.backgroundColor = "#000"
    h1.style.color = "#fff"
    para.style.color = "#fff"
})

*/

const buttons = document.querySelectorAll("button")
const body = document.querySelector("body")

const boxInner = document.querySelector(".box-inner")
const h1 = document.querySelector("h1")
const para = document.querySelector("p")


buttons.forEach( function(button) {
    button.addEventListener( "click" ,function(e) {
    // console.log(e);
    // console.log(e.target);
    if(e.target.id === "white") {
    body.style.backgroundColor = "#fff"
    boxInner.style.backgroundColor = "#fff"
    h1.style.color = "#000"
    para.style.color = "#000"
    }

    if(e.target.id === "yellow") {
    body.style.backgroundColor = "#fae902"
    boxInner.style.backgroundColor = "#fae902"
    h1.style.color = "#000"
    para.style.color = "#000"
    }

    if(e.target.id === "green") {
    body.style.backgroundColor = "#bbff00"
    boxInner.style.backgroundColor = "#bbff00"
    h1.style.color = "#000"
    para.style.color = "#000"
    }

    if(e.target.id === "blue") {
    body.style.backgroundColor = "#030179"
    boxInner.style.backgroundColor = "#030179"
    h1.style.color = "#fff"
    para.style.color = "#fff"
    }

    if(e.target.id === "black") {
    body.style.backgroundColor = "#000"
    boxInner.style.backgroundColor = "#000"
    h1.style.color = "#fff"
    para.style.color = "#fff"
    }

    } )
} )