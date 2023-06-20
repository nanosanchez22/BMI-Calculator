function calculateBMI() {
  let height = parseFloat(document.getElementById("height__input").value);
  let weight = parseFloat(document.getElementById("weight__input").value);
  let bmi;
  const span_weight = document.getElementById("span__weight");
  const span_height = document.getElementById("span__height");

  const system = document.querySelector('input[name="system"]:checked').id;

  if (system === "metric__radio") {
    // Calculate BMI using metric formula
    bmi = weight / (height / 100) ** 2;
    span_height.textContent = "cm";
    span_weight.textContent = "kg";
  } else if (system === "imperial__radio") {
    // Calculate BMI using imperial formula
    bmi = (weight / height ** 2) * 703;
    span_height.textContent = "in";
    span_weight.textContent = "lb";
  }

  // Display the BMI result
  const bmiResult = document.querySelector(".bmi__result");
  bmiResult.innerHTML =
    "<h3>BMI Result:</h3><p>Your BMI is " + bmi.toFixed(2) + "</p>";
}

// Add event listeners to the input fields

const span_weight = document.getElementById("span__weight");
const span_height = document.getElementById("span__height");

const metricRadio = document.getElementById("metric__radio");
const imperialRadio = document.getElementById("imperial__radio");

metricRadio.addEventListener("change", function () {
  heightInput.value = "";
  weightInput.value = "";

  span_height.textContent = "cm";
  span_weight.textContent = "kg";

  const bmiResult = document.querySelector(".bmi__result");
  bmiResult.innerHTML =
    "<h3>Welcome!</h3><p>Enter your height and weight, and you'll see your BMI result here</p>";
});

imperialRadio.addEventListener("change", function () {
  heightInput.value = "";
  weightInput.value = "";

  span_height.textContent = "in";
  span_weight.textContent = "lb";

  const bmiResult = document.querySelector(".bmi__result");
  bmiResult.innerHTML =
    "<h3>Welcome!</h3><p>Enter your height and weight, and you'll see your BMI result here</p>";
});

/* setInterval(calculateBMI, 100) */

const heightInput = document.getElementById("height__input");
const weightInput = document.getElementById("weight__input");

document.getElementById("height__input").addEventListener("input", function () {
  if (heightInput.value == 0 || weightInput.value == 0) {
    const bmiResult = document.querySelector(".bmi__result");
    bmiResult.innerHTML =
      "<h3>Welcome!</h3><p>Enter your height and weight, and you'll see your BMI result here</p>";
  }
});

document.getElementById("weight__input").addEventListener("input", function () {
  if (heightInput.value == 0 || weightInput.value == 0) {
    const bmiResult = document.querySelector(".bmi__result");
    bmiResult.innerHTML =
      "<h3>Welcome!</h3><p>Enter your height and weight, and you'll see your BMI result here</p>";
  }
});

heightInput.addEventListener("input", function () {
  if (
    heightInput.value &&
    weightInput.value &&
    heightInput.value != 0 &&
    weightInput.value != 0
  ) {
    calculateBMI();
  }
});

weightInput.addEventListener("input", function () {
  if (
    heightInput.value &&
    weightInput.value &&
    heightInput.value != 0 &&
    weightInput.value != 0
  ) {
    calculateBMI();
  }
});
