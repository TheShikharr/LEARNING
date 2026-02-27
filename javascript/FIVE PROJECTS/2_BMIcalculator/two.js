document.addEventListener("DOMContentLoaded", () => {
  const heightInput = document.querySelector("#height");
  const weightInput = document.querySelector("#weight");
  const calculateBtn = document.querySelector("button");
  const resultDisplay = document.querySelector(".result");

  calculateBtn.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent form submission

    const height = parseFloat(heightInput.value);
    const weight = parseFloat(weightInput.value);

    if (height === '' || height < 0 || isNaN(height)) {
    resultDisplay.textContent = "Please enter valid value for Height.";
    } else if(weight === '' || weight < 0 || isNaN(weight)){
    resultDisplay.textContent = "Please enter valid value for Weight.";
    } else {
      const bmi = (weight / (height * height)) * 10000;
      resultDisplay.textContent = `Your BMI is ${bmi.toFixed(2)}`;
    }
  });
});