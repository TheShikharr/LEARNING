const numBox = document.querySelector("#num-box")
const guessButton = document.querySelector("button")
const disMessage = document.querySelector(".display-message")


guessButton.addEventListener('click', ()=> {
    const min = 1;
    const max = 10;
    const randomNumber = Math.floor(Math.random() * (max - min + 1) + min)
    const userInput = numBox.value.trim();

    if (userInput === "") {
        disMessage.classList.remove("zero","first", "second", "third");
        disMessage.classList.add("mfirst");
        disMessage.textContent = `Input cannot be empty or just spaces.`;
        return;
    }

    const guessButtonInNumber = Number(userInput);

    if (isNaN(guessButtonInNumber)) {
    disMessage.classList.remove("mfirst","first","second","third");
    disMessage.classList.add("zero");
    disMessage.textContent = `Invalid Input! Please enter a Number.`;
    return;
    }

    if (guessButtonInNumber > 10 || guessButtonInNumber < 1){
    disMessage.classList.remove("mfirst","zero","second","third");
    disMessage.classList.add("first");
    disMessage.textContent = `Please Enter a Number between 1-10`;
    } 
    else if (guessButtonInNumber === randomNumber) {
    disMessage.classList.remove("mfirst","zero","first","third");    
    disMessage.classList.add("second");
    disMessage.textContent = `Matched Up, COLD Moves Only.`;
    } 
    else {
    disMessage.classList.remove("mfirst","zero","first","second");    
    disMessage.classList.add("third");
    disMessage.textContent = `OOPS! Try Again :)`;
    }


})



