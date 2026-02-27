const displayMessage = document.querySelector(".display-message")

const randomColor = function() {
    const hex = '0123456789ABCDEF'
    let colorCode = '#'
    for(let i=0; i<6; i++) {
        colorCode += hex[Math.floor(Math.random() * 16)]
    }
    displayMessage.textContent = `COLOR CODE:~  ${colorCode}`
    return colorCode
}



let IntervalId
const startChaningColor = function(){
    if(!IntervalId) {
    IntervalId = setInterval(changeByColor, 2000)
    }
    function changeByColor() {
        document.body.style.backgroundColor = randomColor()
    }
}

const stopChaningColor = function(){
    clearInterval(IntervalId)
    IntervalId = null
}



document.querySelector('#start').addEventListener('click', startChaningColor)
document.querySelector('#stop').addEventListener('click', stopChaningColor)